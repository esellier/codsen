'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var typ = _interopDefault(require('type-detect'));
var pullAll = _interopDefault(require('lodash.pullall'));
var traverse = _interopDefault(require('ast-monkey-traverse'));
var intersection = _interopDefault(require('lodash.intersection'));
var arrayiffyIfString = _interopDefault(require('arrayiffy-if-string'));
var objectPath = _interopDefault(require('object-path'));

function checkTypesMini(obj, ref, originalOptions) {
  var shouldWeCheckTheOpts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  function existy(something) {
    return something != null;
  }
  function isObj(something) {
    return typ(something) === "Object";
  }
  var NAMESFORANYTYPE = ["any", "anything", "every", "everything", "all", "whatever", "whatevs"];
  var isArr = Array.isArray;
  if (!existy(obj)) {
    throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");
  }
  var defaults = {
    ignoreKeys: [],
    acceptArrays: false,
    acceptArraysIgnore: [],
    enforceStrictKeyset: true,
    schema: {},
    msg: "check-types-mini",
    optsVarName: "opts"
  };
  var opts = void 0;
  if (existy(originalOptions) && isObj(originalOptions)) {
    opts = Object.assign({}, defaults, originalOptions);
  } else {
    opts = Object.assign({}, defaults);
  }
  opts.ignoreKeys = arrayiffyIfString(opts.ignoreKeys);
  opts.acceptArraysIgnore = arrayiffyIfString(opts.acceptArraysIgnore);
  opts.msg = opts.msg.trim();
  if (opts.msg[opts.msg.length - 1] === ":") {
    opts.msg = opts.msg.slice(0, opts.msg.length - 1);
  }
  if (opts.schema) {
    Object.keys(opts.schema).forEach(function (oneKey) {
      if (!isArr(opts.schema[oneKey])) {
        opts.schema[oneKey] = [opts.schema[oneKey]];
      }
      opts.schema[oneKey] = opts.schema[oneKey].map(String).map(function (el) {
        return el.toLowerCase();
      }).map(function (el) {
        return el.trim();
      });
    });
  }
  if (shouldWeCheckTheOpts) {
    checkTypesMini(opts, defaults, null, false);
  }
  if (opts.enforceStrictKeyset) {
    if (existy(opts.schema) && Object.keys(opts.schema).length > 0) {
      if (pullAll(Object.keys(obj), Object.keys(ref).concat(Object.keys(opts.schema))).length !== 0) {
        throw new TypeError(opts.msg + ": " + opts.optsVarName + ".enforceStrictKeyset is on and the following keys are not covered by schema and/or reference objects: " + JSON.stringify(pullAll(Object.keys(obj), Object.keys(ref).concat(Object.keys(opts.schema))), null, 4));
      }
    } else if (existy(ref) && Object.keys(ref).length > 0) {
      if (pullAll(Object.keys(obj), Object.keys(ref)).length !== 0) {
        throw new TypeError(opts.msg + ": The input object has keys that are not covered by the reference object: " + JSON.stringify(pullAll(Object.keys(obj), Object.keys(ref)), null, 4));
      } else if (pullAll(Object.keys(ref), Object.keys(obj)).length !== 0) {
        throw new TypeError(opts.msg + ": The reference object has keys that are not present in the input object: " + JSON.stringify(pullAll(Object.keys(ref), Object.keys(obj)), null, 4));
      }
    } else {
      throw new TypeError(opts.msg + ": Both " + opts.optsVarName + ".schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!");
    }
  }
  traverse(obj, function (key, val, innerObj) {
    var current = val !== undefined ? val : key;
    if (isObj(opts.schema) && Object.keys(opts.schema).length && objectPath.has(opts.schema, innerObj.path)) {
      var currentKeysSchema = arrayiffyIfString(objectPath.get(opts.schema, innerObj.path)).map(String).map(function (el) {
        return el.toLowerCase();
      });
      objectPath.set(opts.schema, innerObj.path, currentKeysSchema);
      if (!intersection(currentKeysSchema, NAMESFORANYTYPE).length) {
        if (current !== true && current !== false && !currentKeysSchema.includes(typ(current).toLowerCase()) || (current === true || current === false) && !currentKeysSchema.includes(String(current)) && !currentKeysSchema.includes("boolean")) {
          if (isArr(current) && opts.acceptArrays) {
            for (var i = 0, len = current.length; i < len; i++) {
              if (!currentKeysSchema.includes(typ(current[i]).toLowerCase())) {
                throw new TypeError(opts.msg + ": " + opts.optsVarName + "." + key + " is of type " + typ(current[i]).toLowerCase() + ", but only the following are allowed in " + opts.optsVarName + ".schema: " + currentKeysSchema);
              }
            }
          } else {
            throw new TypeError(opts.msg + ": " + opts.optsVarName + "." + key + " was customised to " + JSON.stringify(current, null, 4) + " which is not among the allowed types in schema (" + currentKeysSchema + ") but " + typ(current));
          }
        }
      }
    } else if (existy(ref) && Object.keys(ref).length && objectPath.has(ref, innerObj.path) && typ(current) !== typ(objectPath.get(ref, innerObj.path)) && !opts.ignoreKeys.includes(key) && !opts.ignorePaths.includes(innerObj.path)) {
      if (opts.acceptArrays && isArr(current) && !opts.acceptArraysIgnore.includes(key)) {
        var allMatch = current.every(function (el) {
          return typ(el) === typ(ref[key]);
        });
        if (!allMatch) {
          throw new TypeError(opts.msg + ": " + opts.optsVarName + "." + key + " was customised to be array, but not all of its elements are " + typ(ref[key]) + "-type");
        }
      } else {
        throw new TypeError(opts.msg + ": " + opts.optsVarName + "." + key + " was customised to " + JSON.stringify(current, null, 4) + " which is not " + typ(ref[key]) + " but " + typ(current));
      }
    }
    return current;
  });
}
function externalApi(obj, ref, originalOptions) {
  return checkTypesMini(obj, ref, originalOptions);
}

module.exports = externalApi;
