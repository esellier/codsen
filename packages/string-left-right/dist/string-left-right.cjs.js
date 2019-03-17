/**
 * string-left-right
 * Look what's to the left or the right of a given index within a string
 * Version: 2.1.4
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-left-right
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function x(something) {
  if (something.endsWith("?")) {
    return {
      value: something.slice(0, something.length - 1),
      optional: true
    };
  }
  return {
    value: something,
    optional: false
  };
}
function isNum(something) {
  return typeof something === "number";
}
function isStr(something) {
  return typeof something === "string";
}
function right(str, idx) {
  if (typeof str !== "string" || !str.length) {
    return null;
  }
  if (!idx || typeof idx !== "number") {
    idx = 0;
  }
  if (!str[idx + 1]) {
    return null;
  } else if (str[idx + 1] && str[idx + 1].trim().length) {
    return idx + 1;
  } else if (str[idx + 2] && str[idx + 2].trim().length) {
    return idx + 2;
  }
  for (var i = idx + 1, len = str.length; i < len; i++) {
    if (str[i].trim().length) {
      return i;
    }
  }
  return null;
}
function left(str, idx) {
  if (typeof str !== "string" || !str.length) {
    return null;
  }
  if (!idx || typeof idx !== "number") {
    idx = 0;
  }
  if (idx < 1) {
    return null;
  } else if (str[idx - 1] && str[idx - 1].trim().length) {
    return idx - 1;
  } else if (str[idx - 2] && str[idx - 2].trim().length) {
    return idx - 2;
  }
  for (var i = idx; i--;) {
    if (str[i] && str[i].trim().length) {
      return i;
    }
  }
  return null;
}
function seq(direction, str, idx, args) {
  if (typeof str !== "string" || !str.length) {
    return null;
  }
  if (!idx || typeof idx !== "number") {
    idx = 0;
  }
  if (direction === "right" && !str[idx + 1] || direction === "left" && !str[idx - 1]) {
    return null;
  }
  var lastFinding = idx;
  var gaps = [];
  var leftmostChar;
  var rightmostChar;
  for (var i = 0, len = args.length; i < len; i++) {
    if (!args[i].length) {
      continue;
    }
    var _x = x(args[i]),
        value = _x.value,
        optional = _x.optional;
    var whattsOnTheSide = direction === "right" ? right(str, lastFinding) : left(str, lastFinding);
    if (str[whattsOnTheSide] === value) {
      if (direction === "right" && whattsOnTheSide > lastFinding + 1) {
        gaps.push([lastFinding + 1, whattsOnTheSide]);
      } else if (direction === "left" && whattsOnTheSide < lastFinding - 1) {
        gaps.unshift([whattsOnTheSide + 1, lastFinding]);
      }
      lastFinding = whattsOnTheSide;
      if (direction === "right") {
        if (leftmostChar === undefined) {
          leftmostChar = whattsOnTheSide;
        }
        rightmostChar = whattsOnTheSide;
      } else {
        if (rightmostChar === undefined) {
          rightmostChar = whattsOnTheSide;
        }
        leftmostChar = whattsOnTheSide;
      }
    } else if (optional) {
      continue;
    } else {
      return null;
    }
  }
  if (leftmostChar === undefined) {
    return null;
  }
  return {
    gaps: gaps,
    leftmostChar: leftmostChar,
    rightmostChar: rightmostChar
  };
}
function leftSeq(str, idx) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  if (!args.length) {
    return left(str, idx);
  }
  return seq("left", str, idx, Array.from(args).reverse());
}
function rightSeq(str, idx) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }
  if (!args.length) {
    return right(str, idx);
  }
  return seq("right", str, idx, args);
}
function chomp(direction, str, idx, opts, args) {
  if (typeof str !== "string" || !str.length) {
    return null;
  }
  if (!idx || typeof idx !== "number") {
    idx = 0;
  }
  if (direction === "right" && !str[idx + 1] || direction === "left" && (isNum(idx) && idx < 1 || idx === "0")) {
    return null;
  }
  var lastRes;
  var lastIdx;
  do {
    lastRes = direction === "right" ? rightSeq.apply(void 0, [str, isNum(lastIdx) ? lastIdx : idx].concat(_toConsumableArray(args))) : leftSeq.apply(void 0, [str, isNum(lastIdx) ? lastIdx : idx].concat(_toConsumableArray(args)));
    if (lastRes) {
      lastIdx = direction === "right" ? lastRes.rightmostChar + 1 : lastRes.leftmostChar;
    }
  } while (lastRes);
  if (!lastIdx) {
    return null;
  }
  if (direction === "right") {
    if (str[lastIdx] && str[lastIdx].trim().length) {
      return lastIdx;
    }
    var whatsOnTheRight = right(str, lastIdx);
    if (opts.mode === 0) {
      if (whatsOnTheRight === lastIdx + 1) {
        return lastIdx;
      } else if (str.slice(lastIdx, whatsOnTheRight || str.length).trim().length || str.slice(lastIdx, whatsOnTheRight || str.length).includes("\n") || str.slice(lastIdx, whatsOnTheRight || str.length).includes("\r")) {
        for (var y = lastIdx, len = str.length; y < len; y++) {
          if ("\n\r".includes(str[y])) {
            return y;
          }
        }
      } else {
        return whatsOnTheRight ? whatsOnTheRight - 1 : str.length;
      }
    } else if (opts.mode === 1) {
      return lastIdx;
    } else if (opts.mode === 2) {
      var remainderString = str.slice(lastIdx);
      if (remainderString.trim().length || remainderString.includes("\n") || remainderString.includes("\r")) {
        for (var _y = lastIdx, _len3 = str.length; _y < _len3; _y++) {
          if (str[_y].trim().length || "\n\r".includes(str[_y])) {
            return _y;
          }
        }
      }
      return str.length;
    }
    return whatsOnTheRight ? whatsOnTheRight : str.length;
  }
  if (str[lastIdx] && str[lastIdx - 1].trim().length) {
    return lastIdx;
  }
  var whatsOnTheLeft = left(str, lastIdx);
  if (opts.mode === 0) {
    if (whatsOnTheLeft === lastIdx - 2) {
      return lastIdx;
    } else if (str.slice(0, lastIdx).trim().length || str.slice(0, lastIdx).includes("\n") || str.slice(0, lastIdx).includes("\r")) {
      for (var _y2 = lastIdx; _y2--;) {
        if ("\n\r".includes(str[_y2]) || str[_y2].trim().length) {
          return _y2 + 1 + (str[_y2].trim().length ? 1 : 0);
        }
      }
    }
    return 0;
  } else if (opts.mode === 1) {
    return lastIdx;
  } else if (opts.mode === 2) {
    var _remainderString = str.slice(0, lastIdx);
    if (_remainderString.trim().length || _remainderString.includes("\n") || _remainderString.includes("\r")) {
      for (var _y3 = lastIdx; _y3--;) {
        if (str[_y3].trim().length || "\n\r".includes(str[_y3])) {
          return _y3 + 1;
        }
      }
    }
    return 0;
  }
  return whatsOnTheLeft !== null ? whatsOnTheLeft + 1 : 0;
}
function chompLeft(str, idx) {
  for (var _len4 = arguments.length, args = new Array(_len4 > 2 ? _len4 - 2 : 0), _key3 = 2; _key3 < _len4; _key3++) {
    args[_key3 - 2] = arguments[_key3];
  }
  if (!args.length || args.length === 1 && _typeof(args[0]) === "object") {
    return null;
  }
  var defaults = {
    mode: 0
  };
  var opts;
  if (_typeof(args[0]) === "object") {
    opts = Object.assign({}, defaults, args.shift());
    if (!opts.mode) {
      opts.mode = 0;
    } else if (isStr(opts.mode) && "0123".includes(opts.mode)) {
      opts.mode = Number.parseInt(opts.mode, 10);
    } else if (!isNum(opts.mode)) {
      throw new Error("string-left-right/chompLeft(): [THROW_ID_01] the opts.mode is wrong! It should be 0, 1, 2 or 3. It was given as ".concat(opts.mode, " (type ").concat(_typeof(opts.mode), ")"));
    }
  } else {
    opts = defaults;
  }
  return chomp("left", str, idx, opts, args);
}
function chompRight(str, idx) {
  for (var _len5 = arguments.length, args = new Array(_len5 > 2 ? _len5 - 2 : 0), _key4 = 2; _key4 < _len5; _key4++) {
    args[_key4 - 2] = arguments[_key4];
  }
  if (!args.length || args.length === 1 && _typeof(args[0]) === "object") {
    return null;
  }
  var defaults = {
    mode: 0
  };
  var opts;
  if (_typeof(args[0]) === "object") {
    opts = Object.assign({}, defaults, args.shift());
    if (!opts.mode) {
      opts.mode = 0;
    } else if (isStr(opts.mode) && "0123".includes(opts.mode)) {
      opts.mode = Number.parseInt(opts.mode, 10);
    } else if (!isNum(opts.mode)) {
      throw new Error("string-left-right/chompRight(): [THROW_ID_02] the opts.mode is wrong! It should be 0, 1, 2 or 3. It was given as ".concat(opts.mode, " (type ").concat(_typeof(opts.mode), ")"));
    }
  } else {
    opts = defaults;
  }
  return chomp("right", str, idx, opts, args);
}

exports.left = left;
exports.right = right;
exports.leftSeq = leftSeq;
exports.rightSeq = rightSeq;
exports.chompLeft = chompLeft;
exports.chompRight = chompRight;
