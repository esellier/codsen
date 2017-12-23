'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var clone = _interopDefault(require('lodash.clonedeep'));
var arrayObjectOrBoth = _interopDefault(require('util-array-object-or-both'));
var checkTypes = _interopDefault(require('check-types-mini'));
var types = _interopDefault(require('type-detect'));
var isNaturalNumber = _interopDefault(require('is-natural-number'));
var astCompare = _interopDefault(require('ast-compare'));
var traverse = _interopDefault(require('ast-monkey-traverse'));

/* eslint no-param-reassign:0, no-console:0, max-len:0 */

var DEBUG = false;

// import isEqual from 'lodash.isequal'
// import matcher from 'matcher'

// -----------------------------------------------------------------------------

function existy(x) {
  return x != null;
}
function notUndef(x) {
  return x !== undefined;
}
// function isStr(x) { return typeof x === 'string' }
function compareIsEqual(a, b) {
  if (types(a) !== types(b)) {
    return false;
  }
  return astCompare(a, b, { matchStrictly: true, useWildcards: true });
}

// -----------------------------------------------------------------------------

function monkey(inputOriginal, opts) {
  // -----------------------------------
  // precautions
  if (!existy(inputOriginal)) {
    throw new Error('ast-monkey/index.js/monkey(): Please provide an input');
  }
  var input = clone(inputOriginal);
  opts = Object.assign({
    key: null,
    val: undefined
  }, opts);
  // ---------------------------------------------------------------------------
  // action

  if (DEBUG || opts.mode === 'info') {
    console.log('mode: ' + opts.mode);
  }
  var data = { count: 0, gatherPath: [], finding: null };
  var findings = [];

  var ko = false; // key only
  var vo = false; // value only
  if (existy(opts.key) && !notUndef(opts.val)) {
    ko = true;
  }
  if (!existy(opts.key) && notUndef(opts.val)) {
    vo = true;
  }

  if (DEBUG || opts.mode === 'info') {
    console.log('ORIGINAL INPUT:\ninput = ' + JSON.stringify(input, null, 4) + '\n========================');
  }
  if (DEBUG || opts.mode === 'info') {
    console.log('-----------');
  }

  if (opts.mode === 'arrayFirstOnly' && Array.isArray(input) && input.length > 0) {
    input = [input[0]];
  }

  //
  //
  //

  input = traverse(input, function (key, val, innerObj) {
    var temp = void 0;
    data.count += 1;
    if (DEBUG || opts.mode === 'info') {
      console.log('    #' + data.count + '\n');
    }
    if (DEBUG || opts.mode === 'info') {
      console.log('key = ' + JSON.stringify(key, null, 4));
    }
    if (DEBUG || opts.mode === 'info') {
      console.log('val = ' + JSON.stringify(val, null, 4));
    }
    data.gatherPath.length = innerObj.depth;
    data.gatherPath.push(data.count);
    if (DEBUG || opts.mode === 'info') {
      console.log('data.gatherPath = ' + JSON.stringify(data.gatherPath, null, 4));
    }
    if (opts.mode === 'get') {
      if (data.count === opts.index) {
        if (notUndef(val)) {
          data.finding = {};
          data.finding[key] = val;
        } else {
          data.finding = key;
        }
      }
    } else if (opts.mode === 'find' || opts.mode === 'del') {
      if (( // opts.only satisfied
      opts.only === 'any' || opts.only === 'array' && val === undefined || opts.only === 'object' && val !== undefined) && ( // match
      ko && compareIsEqual(key, opts.key) || vo && compareIsEqual(val, opts.val) || !ko && !vo && compareIsEqual(key, opts.key) && compareIsEqual(val, opts.val))) {
        if (opts.mode === 'find') {
          temp = {};
          temp.index = data.count;
          temp.key = key;
          temp.val = val; // can be also undefined!
          temp.path = clone(data.gatherPath);
          findings.push(temp);
        } else {
          // del() then!
          return NaN;
        }
      } else {
        return val !== undefined ? val : key;
      }
    }

    if (DEBUG || opts.mode === 'info') {
      console.log('-----------');
    }
    if (opts.mode === 'set' && data.count === opts.index) {
      return opts.val;
    } else if (opts.mode === 'drop' && data.count === opts.index) {
      return NaN;
    } else if (opts.mode === 'arrayFirstOnly') {
      if (notUndef(val) && Array.isArray(val)) {
        return [val[0]];
      } else if (existy(key) && Array.isArray(key)) {
        return [key[0]];
      }
      return val !== undefined ? val : key;
    }
    return val !== undefined ? val : key;
  });

  // returns
  if (opts.mode === 'get') {
    return data.finding;
  } else if (opts.mode === 'find') {
    return findings.length > 0 ? findings : null;
  }
  return input;
}

// -----------------------------------------------------------------------------
// Validate and prep all the options right here

function find(input, opts) {
  if (!notUndef(opts.key) && !notUndef(opts.val)) {
    throw new Error('ast-monkey/index.js/find(): Please provide opts.key or opts.val');
  }
  checkTypes(opts, null, {
    schema: {
      key: ['null', 'string'],
      val: 'any',
      only: ['undefined', 'null', 'string']
    }
  });
  if (typeof opts.only === 'string' && opts.only.length > 0) {
    opts.only = arrayObjectOrBoth(opts.only, {
      msg: 'ast-monkey/find():',
      optsVarName: 'opts.only'
    });
  } else {
    opts.only = 'any';
  }
  return monkey(input, Object.assign({}, opts, { mode: 'find' }));
}

function get(input, opts) {
  if (!existy(opts.index)) {
    throw new Error('ast-monkey/index.js/get(): Please provide opts.index');
  }
  if (typeof opts.index === 'string') {
    if (isNaturalNumber(parseFloat(opts.index, 10), { includeZero: true })) {
      opts.index = parseInt(opts.index, 10);
    } else {
      throw new Error('ast-monkey/index.js/get(): opts.index must be a natural number. It was given as: ' + opts.index);
    }
  }
  checkTypes(opts, null, {
    schema: {
      index: 'number'
    }
  });
  if (!isNaturalNumber(opts.index, { includeZero: true })) {
    throw new Error('ast-monkey/index.js/get(): opts.index must be a natural number. It was given as: ' + opts.index);
  }
  return monkey(input, Object.assign({}, opts, { mode: 'get' }));
}

function set(input, opts) {
  if (!existy(opts.key) && !notUndef(opts.val)) {
    throw new Error('ast-monkey/index.js/set(): Please provide opts.val');
  }
  if (!existy(opts.index)) {
    throw new Error('ast-monkey/index.js/set(): Please provide opts.index');
  }
  if (typeof opts.index === 'string') {
    if (isNaturalNumber(parseFloat(opts.index, 10), { includeZero: true })) {
      opts.index = parseInt(opts.index, 10);
    } else {
      throw new Error('ast-monkey/index.js/set(): opts.index must be a natural number. It was given as: ' + opts.index);
    }
  } else if (!isNaturalNumber(opts.index, { includeZero: true })) {
    throw new Error('ast-monkey/index.js/get(): opts.index must be a natural number. It was given as: ' + opts.index);
  }
  if (existy(opts.key) && !notUndef(opts.val)) {
    opts.val = opts.key;
  }
  checkTypes(opts, null, {
    schema: {
      key: [null, 'string'],
      val: 'any',
      index: 'number'
    }
  });
  return monkey(input, Object.assign({}, opts, { mode: 'set' }));
}

function drop(input, opts) {
  if (!existy(opts.index)) {
    throw new Error('ast-monkey/index.js/drop(): Please provide opts.index');
  }
  if (typeof opts.index === 'string') {
    if (isNaturalNumber(parseFloat(opts.index, 10), { includeZero: true })) {
      opts.index = parseInt(opts.index, 10);
    } else {
      throw new Error('ast-monkey/index.js/drop(): opts.index must be a natural number. It was given as: ' + opts.index);
    }
  }
  if (!isNaturalNumber(opts.index, { includeZero: true })) {
    throw new Error('ast-monkey/index.js/get(): opts.index must be a natural number. It was given as: ' + opts.index);
  }
  checkTypes(opts, null, {
    schema: {
      index: 'number'
    }
  });
  return monkey(input, Object.assign({}, opts, { mode: 'drop' }));
}

function info(input) {
  return monkey(input, { mode: 'info' });
}

function del(input, opts) {
  if (!existy(opts.key) && !notUndef(opts.val)) {
    throw new Error('ast-monkey/index.js/del(): Please provide opts.key or opts.val');
  }
  checkTypes(opts, null, {
    schema: {
      key: [null, 'string'],
      val: 'any',
      only: ['undefined', 'null', 'string']
    }
  });
  if (typeof opts.only === 'string' && opts.only.length > 0) {
    opts.only = arrayObjectOrBoth(opts.only, {
      msg: 'ast-monkey/del():',
      optsVarName: 'opts.only'
    });
  } else {
    opts.only = 'any';
  }
  return monkey(input, Object.assign({}, opts, { mode: 'del' }));
}

function arrayFirstOnly(input) {
  return monkey(input, { mode: 'arrayFirstOnly' });
}

exports.find = find;
exports.get = get;
exports.set = set;
exports.drop = drop;
exports.info = info;
exports.del = del;
exports.arrayFirstOnly = arrayFirstOnly;
exports.traverse = traverse;
