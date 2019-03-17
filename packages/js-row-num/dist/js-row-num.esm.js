/**
 * js-row-num
 * Update all row numbers in all console.logs in JS code
 * Version: 2.0.8
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/js-row-num
 */

import Slices from 'ranges-push';
import applySlices from 'ranges-apply';
import checkTypes from 'check-types-mini';

function existy(x) {
  return x != null;
}
function padStart(str, targetLength, padString) {
  targetLength = targetLength >> 0;
  padString = existy(padString) ? String(padString) : " ";
  if (!existy(str)) {
    return str;
  } else if (typeof str === "number") {
    str = String(str);
  } else if (typeof str !== "string") {
    return str;
  }
  if (str.length >= targetLength) {
    return str;
  }
  targetLength = targetLength - str.length;
  if (targetLength > padString.length) {
    padString += padString.repeat(targetLength / padString.length);
  }
  return padString.slice(0, targetLength) + str;
}

function fixRowNums(str, originalOpts) {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }
  function isDigit(something) {
    return /[0-9]/.test(something);
  }
  function isAZ(something) {
    return /[A-Za-z]/.test(something);
  }
  const defaults = {
    padStart: 3
  };
  const opts = Object.assign({}, defaults, originalOpts);
  if (
    !opts.padStart ||
    typeof opts.padStart !== "number" ||
    (typeof opts.padStart === "number" && opts.padStart < 0)
  ) {
    opts.padStart = 0;
  }
  checkTypes(opts, defaults, { msg: "js-row-num: [THROW_ID_04*]" });
  const finalIndexesToDelete = new Slices();
  let i;
  const len = str.length;
  let quotes = null;
  let consoleStartsAt = null;
  let bracketOpensAt = null;
  let currentRow = 1;
  let wasLetterDetected = false;
  let digitStartsAt = null;
  for (i = 0; i < len; i++) {
    if (str[i] === "\n" || (str[i] === "\r" && str[i + 1] !== "\n")) {
      currentRow++;
    }
    if (digitStartsAt && !isDigit(str[i]) && i > digitStartsAt) {
      finalIndexesToDelete.push(
        digitStartsAt,
        i,
        opts.padStart
          ? padStart(currentRow, opts.padStart, "0")
          : `${currentRow}`
      );
      digitStartsAt = null;
      wasLetterDetected = true;
    }
    if (
      quotes &&
      quotes.start < i &&
      !wasLetterDetected &&
      !digitStartsAt &&
      isDigit(str[i])
    ) {
      digitStartsAt = i;
    }
    if (quotes && quotes.start < i && !wasLetterDetected && isAZ(str[i])) {
      if (
        str[i - 1] === "\\" &&
        str[i] === "u" &&
        str[i + 1] === "0" &&
        str[i + 2] === "0" &&
        str[i + 3] === "1" &&
        (str[i + 4] === "b" || str[i + 5] === "B") &&
        str[i + 5] === "["
      ) {
        let startMarchingForwFrom;
        if (isDigit(str[i + 6])) {
          startMarchingForwFrom = i + 6;
        } else if (
          str[i + 6] === "$" &&
          str[i + 7] === "{" &&
          isDigit(str[i + 8])
        ) {
          startMarchingForwFrom = i + 8;
        }
        let numbersSequenceEndsAt;
        if (startMarchingForwFrom) {
          for (let y = startMarchingForwFrom; y < len; y++) {
            if (!isDigit(str[y])) {
              numbersSequenceEndsAt = y;
              break;
            }
          }
        }
        let ansiSequencesLetterMAt;
        if (str[numbersSequenceEndsAt] === "m") {
          ansiSequencesLetterMAt = numbersSequenceEndsAt;
        } else if (
          str[numbersSequenceEndsAt] === "}" &&
          str[numbersSequenceEndsAt + 1] === "m"
        ) {
          ansiSequencesLetterMAt = numbersSequenceEndsAt + 1;
        }
        if (!ansiSequencesLetterMAt) {
          wasLetterDetected = true;
          continue;
        }
        if (
          str[ansiSequencesLetterMAt + 1] === "$" &&
          str[ansiSequencesLetterMAt + 2] === "{" &&
          str[ansiSequencesLetterMAt + 3] === "`"
        ) {
          i = ansiSequencesLetterMAt + 3;
          continue;
        }
      }
      wasLetterDetected = true;
    }
    if (quotes && quotes.start < i && quotes.type === str[i]) {
      quotes = null;
      consoleStartsAt = null;
      bracketOpensAt = null;
      digitStartsAt = null;
      wasLetterDetected = false;
    }
    if (
      !quotes &&
      consoleStartsAt &&
      consoleStartsAt < i &&
      bracketOpensAt &&
      bracketOpensAt < i &&
      str[i].trim().length
    ) {
      if (str[i] === '"' || str[i] === "'" || str[i] === "`") {
        quotes = {};
        quotes.start = i;
        quotes.type = str[i];
        wasLetterDetected = false;
      } else if (str[i] !== "/") {
        consoleStartsAt = null;
        bracketOpensAt = null;
        digitStartsAt = null;
      }
    }
    if (
      !bracketOpensAt &&
      str[i].trim().length &&
      consoleStartsAt &&
      consoleStartsAt <= i
    ) {
      if (str[i] === "(") {
        bracketOpensAt = i;
      } else {
        consoleStartsAt = null;
        digitStartsAt = null;
      }
    }
    if (
      str[i] === "c" &&
      str[i + 1] === "o" &&
      str[i + 2] === "n" &&
      str[i + 3] === "s" &&
      str[i + 4] === "o" &&
      str[i + 5] === "l" &&
      str[i + 6] === "e" &&
      str[i + 7] === "." &&
      str[i + 8] === "l" &&
      str[i + 9] === "o" &&
      str[i + 10] === "g"
    ) {
      consoleStartsAt = i + 11;
      i = i + 10;
      continue;
    }
  }
  if (finalIndexesToDelete.current()) {
    return applySlices(str, finalIndexesToDelete.current());
  }
  quotes = undefined;
  consoleStartsAt = undefined;
  bracketOpensAt = undefined;
  currentRow = undefined;
  wasLetterDetected = undefined;
  digitStartsAt = undefined;
  currentRow = undefined;
  return str;
}

export default fixRowNums;
