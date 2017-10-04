'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var typ = _interopDefault(require('type-detect'));
var clone = _interopDefault(require('lodash.clonedeep'));
var search = _interopDefault(require('str-indexes-of-plus'));
var includes = _interopDefault(require('lodash.includes'));
var matcher = _interopDefault(require('matcher'));
var checkTypes = _interopDefault(require('check-types-mini'));
var isStringInt = _interopDefault(require('is-string-int'));

/* eslint padded-blocks: 0 */

var isArr$1 = Array.isArray;

function isStr$1(something) {
  return typ(something) === 'string';
}
function isObj$1(something) {
  return typ(something) === 'Object';
}

function flattenObject(objOrig, opts) {
  if (arguments.length === 0 || Object.keys(objOrig).length === 0) {
    return [];
  }
  var obj = clone(objOrig);
  var res = [];
  if (isObj$1(obj)) {
    Object.keys(obj).forEach(function (key) {
      if (isObj$1(obj[key])) {
        obj[key] = flattenObject(obj[key], opts);
      }
      if (isArr$1(obj[key])) {
        res = res.concat(obj[key].map(function (el) {
          return key + opts.objectKeyAndValueJoinChar + el;
        }));
      }
      if (isStr$1(obj[key])) {
        res.push(key + opts.objectKeyAndValueJoinChar + obj[key]);
      }
    });
  }
  return res;
}

function flattenArr(arrOrig, opts, wrap, joinArraysUsingBrs) {
  if (arguments.length === 0 || arrOrig.length === 0) {
    return '';
  }
  var arr = clone(arrOrig);
  var res = '';
  if (arr.length > 0) {
    if (joinArraysUsingBrs) {
      for (var i = 0, len = arr.length; i < len; i++) {
        if (isStr$1(arr[i])) {
          var lineBreak = void 0;
          lineBreak = '';
          if (opts.mergeArraysWithLineBreaks && i > 0 && (!opts.mergeWithoutTrailingBrIfLineContainsBr || typeof arr[i - 1] !== 'string' || opts.mergeWithoutTrailingBrIfLineContainsBr && arr[i - 1] !== undefined && !arr[i - 1].toLowerCase().includes('<br'))) {
            lineBreak = '<br' + (opts.xhtml ? ' /' : '') + '>';
          }
          res += lineBreak + (wrap ? opts.wrapHeadsWith : '') + arr[i] + (wrap ? opts.wrapTailsWith : '');
        } else if (isArr$1(arr[i])) {
          // there's an array among elements
          if (arr[i].length > 0 && arr[i].every(isStr$1)) {
            (function () {
              var lineBreak = '';
              if (opts.mergeArraysWithLineBreaks && res.length > 0) {
                lineBreak = '<br' + (opts.xhtml ? ' /' : '') + '>';
              }
              res = arr[i].reduce(function (acc, val, i2, arr2) {
                var trailingSpace = '';
                if (i2 !== arr2.length - 1) {
                  trailingSpace = ' ';
                }
                return acc + (i2 === 0 ? lineBreak : '') + (wrap ? opts.wrapHeadsWith : '') + val + (wrap ? opts.wrapTailsWith : '') + trailingSpace;
              }, res);
            })();
          }
        }
      }
    } else {
      res = arr.reduce(function (acc, val, i, arr2) {
        var lineBreak = '';
        if (opts.mergeArraysWithLineBreaks && res.length > 0) {
          lineBreak = '<br' + (opts.xhtml ? ' /' : '') + '>';
        }
        var trailingSpace = '';
        if (i !== arr2.length - 1) {
          trailingSpace = ' ';
        }
        return acc + (i === 0 ? lineBreak : '') + (wrap ? opts.wrapHeadsWith : '') + val + (wrap ? opts.wrapTailsWith : '') + trailingSpace;
      }, res);
    }
  }
  return res;
}

function arrayiffyString(something) {
  if (isStr$1(something)) {
    if (something.length > 0) {
      return [something];
    }
    return [];
  }
  return something;
}

function reclaimIntegerString(something) {
  if (isStr$1(something) && isStringInt(something)) {
    return parseInt(something, 10);
  }
  return something;
}

var util = {
  flattenObject: flattenObject,
  flattenArr: flattenArr,
  arrayiffyString: arrayiffyString,
  reclaimIntegerString: reclaimIntegerString
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();

/* eslint padded-blocks: 0 */

var isArr = Array.isArray;

function existy(x) {
  return x != null;
}
function isStr(something) {
  return typ(something) === 'string';
}
function isObj(something) {
  return typ(something) === 'Object';
}

function outer(originalInput1, originalReference1, opts1) {
  if (arguments.length === 0) {
    throw new Error('object-flatten-referencing/ofr(): [THROW_ID_01] all inputs missing!');
  }
  if (arguments.length === 1) {
    throw new Error('object-flatten-referencing/ofr(): [THROW_ID_02] reference object missing!');
  }
  if (existy(opts1) && !isObj(opts1)) {
    throw new Error('object-flatten-referencing/ofr(): [THROW_ID_03] third input, options object must be a plain object. Currently it\'s: ' + (typeof opts1 === 'undefined' ? 'undefined' : _typeof(opts1)));
  }

  function ofr(originalInput, originalReference, opts, wrap, joinArraysUsingBrs, currentRoot) {
    // console.log(`\n\n* originalInput = ${JSON.stringify(originalInput, null, 4)}`)
    // console.log(`* originalReference = ${JSON.stringify(originalReference, null, 4)}`)
    var input = clone(originalInput);
    var reference = clone(originalReference);

    if (wrap === undefined) {
      wrap = true;
    }
    if (joinArraysUsingBrs === undefined) {
      joinArraysUsingBrs = true;
    }
    if (currentRoot === undefined) {
      currentRoot = '';
    }
    // console.log(`* currentRoot = ${JSON.stringify(currentRoot, null, 4)}`)
    var defaults$$1 = {
      wrapHeadsWith: '%%_',
      wrapTailsWith: '_%%',
      dontWrapKeys: [],
      dontWrapPaths: [], // More precise version of simple "dontWrapKeys" above. You can target
      // paths exactly like for exampl: "modules[0].part2[0].ccc[0].kkk". Remember to
      // put the index if it's an array, like modules[0] if key "modules" is equal to
      // array and you want its first element (0-th index), hence "modules[0]".
      xhtml: true, // when flattening arrays, put <br /> (XHTML) or <br> (HTML)
      preventDoubleWrapping: true,
      objectKeyAndValueJoinChar: '.',
      wrapGlobalFlipSwitch: true, // Allow disabling the wrapping feature. Used on deeper branches.
      ignore: [], // Ignore these keys, don't flatten their values.
      whatToDoWhenReferenceIsMissing: 0, // 0 = leave that key's value as it is,
      // 1 = throw, 2 = flatten to string & wrap if wrapping feature is enabled
      mergeArraysWithLineBreaks: true, // when merging arrays, should we
      // add <br /> between the rows?
      mergeWithoutTrailingBrIfLineContainsBr: true // if line already contains BR,
      // don't add another, trailing-one
    };
    opts = Object.assign(clone(defaults$$1), opts);
    opts.dontWrapKeys = util.arrayiffyString(opts.dontWrapKeys);
    opts.dontWrapPaths = util.arrayiffyString(opts.dontWrapPaths);
    opts.ignore = util.arrayiffyString(opts.ignore);
    opts.whatToDoWhenReferenceIsMissing = util.reclaimIntegerString(opts.whatToDoWhenReferenceIsMissing);

    checkTypes(opts, defaults$$1, 'object-flatten-referencing/ofr(): [THROW_ID_05*] ', 'opts');

    if (!opts.wrapGlobalFlipSwitch) {
      wrap = false;
    }

    if (isObj(input)) {
      Object.keys(input).forEach(function (key) {
        var currentPath = currentRoot + (currentRoot.length === 0 ? key : '.' + key);
        // console.log(`* currentPath = ${JSON.stringify(currentPath, null, 4)}\n\n`)
        if (opts.ignore.length === 0 || !includes(opts.ignore, key)) {

          if (opts.wrapGlobalFlipSwitch) {
            wrap = true; // reset it for the new key.
          }
          if (opts.wrapGlobalFlipSwitch && opts.dontWrapKeys.length > 0) {
            wrap = wrap && !opts.dontWrapKeys.some(function (elem) {
              return matcher.isMatch(key, elem);
            });
          }
          if (opts.wrapGlobalFlipSwitch && opts.dontWrapPaths.length > 0) {
            wrap = wrap && !opts.dontWrapPaths.some(function (elem) {
              return elem === currentPath;
            });
          }

          if (existy(reference[key]) || !existy(reference[key]) && opts.whatToDoWhenReferenceIsMissing === 2) {
            if (isArr(input[key])) {
              if (opts.whatToDoWhenReferenceIsMissing === 2 || isStr(reference[key])) {
                // reference is string
                // that's array vs. string clash:
                input[key] = util.flattenArr(input[key], opts, wrap, joinArraysUsingBrs);
              } else {
                // reference is array as well
                // that's array vs. array clash, for example
                // so input[key] is array. Let's check, does it contain only strings, or
                // do some elements contain array of strings? Because if so, those deeper-level
                // arrays must be joined with spaces. Outermost arrays must be joined by BR's.
                // We're talking about ['1111', '2222', '3333'] in:
                // {
                //   k_key: 'k_val',
                //   l_key: 'l_val',
                //   m_key: [
                //     'xxxx',
                //     ['1111', '2222', '3333'],
                //     'yyyy',
                //     'zzzz'
                //   ]
                // }
                //
                // referencing above,
                // ['1111', '2222', '3333'] should be joined by spaces.
                // ['xxxx', [...], 'yyyy', 'zzzz'] should be joined by BR's
                if (input[key].every(function (el) {
                  return typeof el === 'string' || Array.isArray(el);
                })) {
                  // check that those array elements contain only string elements:
                  var allOK = true;
                  input[key].forEach(function (oneOfElements) {
                    // check that child arrays contain only string elements
                    if (Array.isArray(oneOfElements) && !oneOfElements.every(isStr)) {
                      allOK = false;
                    }
                  });
                  if (allOK) {
                    joinArraysUsingBrs = false;
                  }
                }
                input[key] = ofr(input[key], reference[key], opts, wrap, joinArraysUsingBrs, currentPath);
              }
            } else if (isObj(input[key])) {
              if (opts.whatToDoWhenReferenceIsMissing === 2 || isStr(reference[key])) {
                input[key] = util.flattenArr(util.flattenObject(input[key], opts), opts, wrap, joinArraysUsingBrs);
              } else if (!wrap) {
                // when calling recursively, the parent key might get
                // identified (wrap=true) to be wrapped.
                // however, that flag might get lost as its children will
                // calculate the new "wrap" on its own keys, often turning off the wrap function.
                // to prevent that, we flip the switch on the global wrap
                // setting for all deeper child nodes.
                // we also clone the options object so as not to mutate it.
                input[key] = ofr(input[key], reference[key], Object.assign(clone(opts), { wrapGlobalFlipSwitch: false }), wrap, joinArraysUsingBrs, currentPath);
              } else {
                input[key] = ofr(input[key], reference[key], opts, wrap, joinArraysUsingBrs, currentPath);
              }
            } else if (isStr(input[key])) {
              input[key] = ofr(input[key], reference[key], opts, wrap, joinArraysUsingBrs, currentPath);
            }
          } else if (typ(input[key]) !== typ(reference[key])) {
            if (opts.whatToDoWhenReferenceIsMissing === 1) {
              throw new Error('object-flatten-referencing/ofr(): [THROW_ID_06] reference object does not have the key ' + key + ' and we need it. TIP: Turn off throwing via opts.whatToDoWhenReferenceIsMissing.');
            }
            // when opts.whatToDoWhenReferenceIsMissing === 2, library does nothing,
            // so we simply let it slip through.
          }
        }
      });
    } else if (isArr(input)) {
      if (isArr(reference)) {
        input.forEach(function (el, i) {
          if (existy(input[i]) && existy(reference[i])) {
            input[i] = ofr(input[i], reference[i], opts, wrap, joinArraysUsingBrs, currentRoot + '[' + i + ']');
          } else {
            input[i] = ofr(input[i], reference[0], opts, wrap, joinArraysUsingBrs, currentRoot + '[' + i + ']');
          }
        });
      } else if (isStr(reference)) {
        input = util.flattenArr(input, opts, wrap, joinArraysUsingBrs);
      }
    } else if (isStr(input)) {
      if (input.length > 0 && (opts.wrapHeadsWith || opts.wrapTailsWith)) {
        if (!opts.preventDoubleWrapping || (opts.wrapHeadsWith === '' || !search(input, opts.wrapHeadsWith.trim()).length) && (opts.wrapTailsWith === '' || !search(input, opts.wrapTailsWith.trim()).length)) {
          input = (wrap ? opts.wrapHeadsWith : '') + input + (wrap ? opts.wrapTailsWith : '');
        }
      }
    }
    return input;
  }

  return ofr(originalInput1, originalReference1, opts1);
}

module.exports = outer;
