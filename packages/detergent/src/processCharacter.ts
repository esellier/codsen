import { notEmailFriendly } from "html-entities-not-email-friendly";
import { allNamedEntities } from "all-named-html-entities";
import { expander } from "string-range-expander";
import { convertOne as convertOneApostrophe } from "string-apostrophes";
import { convertOne as convertOneDash } from "string-dashes";
import he from "he";
import {
  left,
  right,
  // leftStopAtRawNbsp,
  // rightStopAtRawNbsp,
  leftStopAtNewLines,
  rightStopAtNewLines,
} from "string-left-right";
import { Ranges } from "ranges-push";

import {
  isUppercaseLetter,
  isLowercaseLetter,
  rightSingleQuote,
  rightDoubleQuote,
  punctuationChars,
  leftSingleQuote,
  leftDoubleQuote,
  ellipsis,
  isLetter,
  isNumberChar,
  rawMDash,
  rawNDash,
  rawNbsp,
  EolChar,
} from "codsen-utils";
import {
  doConvertEntities,
  widowRegexTest,
  ApplicableOpts,
  State,
  Opts,
} from "./util";

declare let DEV: boolean;

// -----------------------------------------------------------------------------

// This function gets from-to indexes and numeric character code.
// It is used by processOutside() which skips already processed ranges and
// iterates over the remaining indexes. Also, it is used to validate the
// encode entities - those are decoded and ran through this function as well.
// That's why we need this fancy "y" - "up to" index and we can't make it
// using simple "i + 1" - the "character" might be actually an encoded
// chunk of characters. We separate the location of character(s)
// (which could be expressed as string.slice(i, y)) and the value it
// represents ("charcode").
function processCharacter(
  str: string,
  opts: Opts,
  rangesArr: Ranges,
  i: number,
  y: number,
  offsetBy: (amount: number) => void,
  brClosingBracketIndexesArr: number[],
  state: State,
  applicableOpts: ApplicableOpts,
  eolChar: EolChar,
): void {
  let len = str.length;

  DEV &&
    console.log(
      `\u001b[${36}m${`===============================`}\u001b[${39}m \u001b[${35}m${`str[i] at ${i} = ${
        str[i].trim() ? str.slice(i, y) : JSON.stringify(str[i], null, 0)
      }`}\u001b[${39}m ${`\u001b[${90}m (${str
        .slice(i, y)
        .split("")
        .map((v) => `#${v.charCodeAt(0)}`)
        .join(
          `; `,
        )}); i = ${i}; y = ${y}\u001b[${39}m`} \u001b[${36}m${`===============================`}\u001b[${39}m`,
    );

  DEV &&
    console.log(
      `${`\u001b[${90}m${`state = ${JSON.stringify(
        state,
        null,
        4,
      )}`}\u001b[${39}m`}`,
    );

  if (
    /[\uD800-\uDFFF]/g.test(str[i]) &&
    !(
      (str.charCodeAt(i + 1) >= 0xdc00 && str.charCodeAt(i + 1) <= 0xdfff) ||
      (str.charCodeAt(i - 1) >= 0xd800 && str.charCodeAt(i - 1) <= 0xdbff)
    )
  ) {
    // if it's a surrogate and another surrogate doesn't come in front or
    // follow, it's considered to be stray and liable for removal
    DEV && console.log(`099 processCharacter.js - it's a stray surrogate`);
    rangesArr.push(i, i + 1);

    DEV &&
      console.log(
        `104 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${
          i + 1
        }]`,
      );
  } else if (y - i > 1) {
    applicableOpts.convertEntities = true;

    DEV &&
      console.log(
        `113 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertEntities = ${
          applicableOpts.convertEntities
        }`,
      );
    applicableOpts.dontEncodeNonLatin =
      applicableOpts.dontEncodeNonLatin ||
      doConvertEntities(str.slice(i, y), true) !==
        doConvertEntities(str.slice(i, y), false);

    DEV &&
      console.log(
        `124 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.dontEncodeNonLatin = ${
          applicableOpts.dontEncodeNonLatin
        }`,
      );

    // if it's astral character which comprises of more than one character,
    // tackle it separately from "normal" charactrs of length === 1
    if (opts.convertEntities) {
      rangesArr.push(
        i,
        y,
        doConvertEntities(str.slice(i, y), opts.dontEncodeNonLatin),
      );
    }
  } else {
    //
    //
    //
    //
    //
    //
    //
    // so it's single character.

    let charcode = str[i].charCodeAt(0);
    // Filter ASCII
    // the cutoff point is 127 not 128 because large chunk of invisibles, C1
    // group starts at DEL, decimal point 128.
    if (charcode < 127) {
      // within ASCII - no need to encode, just clean

      DEV &&
        console.log(
          `157 processCharacter.js - ${`\u001b[${90}m${`character within ASCII`}\u001b[${39}m`}`,
        );
      if (charcode < 32) {
        if (charcode < 9) {
          if (charcode === 3) {
            // that's \u0003, END OF TEXT - replace with line break

            DEV &&
              console.log(
                `166 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${y}, "${
                  opts.removeLineBreaks ? " " : "\\n"
                }"]`,
              );
            rangesArr.push(
              i,
              y,
              opts.removeLineBreaks
                ? " "
                : opts.replaceLineBreaks
                ? `<br${opts.useXHTML ? "/" : ""}>\n`
                : "\n",
            );

            applicableOpts.removeLineBreaks = true;

            DEV &&
              console.log(
                `184 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.removeLineBreaks = ${
                  applicableOpts.removeLineBreaks
                }`,
              );
            if (!opts.removeLineBreaks) {
              applicableOpts.replaceLineBreaks = true;

              DEV &&
                console.log(
                  `193 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.replaceLineBreaks = ${
                    applicableOpts.replaceLineBreaks
                  }`,
                );

              if (opts.replaceLineBreaks) {
                applicableOpts.useXHTML = true;

                DEV &&
                  console.log(
                    `203 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.useXHTML = ${
                      applicableOpts.useXHTML
                    }`,
                  );
              }
            }
          } else {
            // charcodes: [0;2], [4;8] - remove these control chars

            DEV &&
              console.log(
                `214 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${y}]`,
              );
            rangesArr.push(i, y);
          }
          // continue to the next character (otherwise it would get encoded):
          // continue;
        } else if (charcode === 9) {
          // Replace all tabs, '\u0009', with spaces:

          DEV &&
            console.log(
              `225 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${y}, " "]`,
            );
          rangesArr.push(i, y, " ");
          // continue to the next character (otherwise it would get encoded):
          // continue;
        } else if (charcode === 10) {
          // 10 - "\u000A" - line feed, LF or \n
          DEV && console.log(`232 processCharacter.js - LF caught`);
          DEV &&
            console.log(
              `235 FIY, ${`\u001b[${33}m${`endOfLineVal`}\u001b[${39}m`} = ${JSON.stringify(
                eolChar,
                null,
                4,
              )}`,
            );

          if (!applicableOpts.removeLineBreaks) {
            applicableOpts.removeLineBreaks = true;

            DEV &&
              console.log(
                `247 processCharacter.js: SET ${`\u001b[${32}m${`applicableOpts.removeLineBreaks`}\u001b[${39}m`} = ${
                  applicableOpts.removeLineBreaks
                }`,
              );
          }

          if (
            !opts.removeLineBreaks &&
            (!brClosingBracketIndexesArr ||
              (Array.isArray(brClosingBracketIndexesArr) &&
                !brClosingBracketIndexesArr.some(
                  (idx) => left(str, i) === idx,
                )))
          ) {
            if (opts.replaceLineBreaks) {
              applicableOpts.useXHTML = true;
              applicableOpts.replaceLineBreaks = true;

              DEV &&
                console.log(
                  `267 processCharacter.js: SET ${`\u001b[${32}m${`applicableOpts.useXHTML`}\u001b[${39}m`} = ${
                    applicableOpts.useXHTML
                  }; ${`\u001b[${32}m${`applicableOpts.replaceLineBreaks`}\u001b[${39}m`} = ${
                    applicableOpts.replaceLineBreaks
                  }`,
                );
            } else if (!opts.replaceLineBreaks) {
              // opts.replaceLineBreaks === false
              applicableOpts.replaceLineBreaks = true;

              DEV &&
                console.log(
                  `279 processCharacter.js: SET ${`\u001b[${32}m${`applicableOpts.replaceLineBreaks`}\u001b[${39}m`} = ${
                    applicableOpts.replaceLineBreaks
                  }`,
                );
            }
          }

          if (!opts.removeLineBreaks) {
            applicableOpts.eol = true;

            DEV &&
              console.log(
                `291 processCharacter.js: SET ${`\u001b[${32}m${`applicableOpts.eol`}\u001b[${39}m`} = ${
                  applicableOpts.eol
                }`,
              );
          }

          // won't run on CRLF, only on LF - the CR will be processed separately

          if (opts.removeLineBreaks) {
            // only remove replace with space if it's standalone, Mac-style
            // EOL ending, not Windows CRLF, because CR would have already
            // been replaced and replacing here would result in two spaces added
            let whatToInsert = " ";
            if (punctuationChars.includes(str[right(str, i) as number])) {
              whatToInsert = "";
            }

            DEV &&
              console.log(
                `310 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${y}, ${JSON.stringify(
                  whatToInsert,
                  null,
                  0,
                )}]`,
              );
            rangesArr.push(i, y, whatToInsert);
          } else if (
            opts.replaceLineBreaks &&
            (!brClosingBracketIndexesArr ||
              (Array.isArray(brClosingBracketIndexesArr) &&
                !brClosingBracketIndexesArr.some(
                  (idx) => left(str, i) === idx,
                )))
          ) {
            // above, we check, is there a closing bracket of <br>.
            // All this contraption is necessary because br's can have HTML
            // attributes - you can't just match <br> or <br/> or <br />,
            // there can be ESP tags in non-HTML

            let startingIdx = i;
            if (
              str[i - 1] === " " &&
              typeof leftStopAtNewLines(str, i) === "number"
            ) {
              startingIdx = (leftStopAtNewLines(str, i) as number) + 1;
            }
            rangesArr.push(
              startingIdx,
              i + (eolChar === "\r" ? 1 : 0),
              `<br${opts.useXHTML ? "/" : ""}>${
                eolChar === "\r\n" ? "\r" : ""
              }${eolChar === "\r" ? "\r" : ""}`,
            );

            DEV &&
              console.log(
                `347 processCharacter.js: ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${startingIdx}, ${
                  i + (eolChar === "\r" ? 1 : 0)
                }, ${`<br${opts.useXHTML ? "/" : ""}>${JSON.stringify(
                  eolChar === "\r\n" ? "\r" : "",
                  null,
                  4,
                )}${JSON.stringify(eolChar === "\r" ? "\r" : "", null, 4)}`}]`,
              );
          } else {
            //
            //
            // delete any whitespace to the left
            if (str[leftStopAtNewLines(str, i) as number]?.trim()) {
              // delete trailing whitespace at the end of each line
              let tempIdx = leftStopAtNewLines(str, i);
              if (typeof tempIdx === "number" && tempIdx < i - 1) {
                DEV &&
                  console.log(
                    `365 processCharacter.js: ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${
                      tempIdx + 1
                    }, ${i}]`,
                  );
                rangesArr.push(
                  tempIdx + 1,
                  i,
                  `${eolChar === "\r\n" ? "\r" : ""}`,
                );
              }
            }

            if (eolChar === "\r\n" && str[i - 1] !== "\r") {
              rangesArr.push(i, i, "\r");

              DEV &&
                console.log(
                  `382 processCharacter.js: ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} missing CR for this Windows EOL [${i}, ${i}, "\\r"]`,
                );
            } else if (eolChar === "\r" && str[i - 1] !== "\r") {
              rangesArr.push(i, i + 1, "\r");

              DEV &&
                console.log(
                  `389 processCharacter.js: replace this LF with CR ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${
                    i + 1
                  }]`,
                );
            }

            // either way, delete any whitespace to the right
            let temp = rightStopAtNewLines(str, i);
            if (temp && str[temp].trim()) {
              if (temp > i + 1) {
                DEV &&
                  console.log(
                    `401 processCharacter.js: ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${
                      i + 1
                    }, ${temp}]`,
                  );
                rangesArr.push(i + 1, temp);
              }
            }
          }

          //
          // URL detection:
          //

          // TODO - check state.onUrlCurrently
          state.onUrlCurrently = false;

          DEV &&
            console.log(
              `419 processCharacter.js - SET ${`\u001b[${33}m${`state.onUrlCurrently`}\u001b[${39}m`} = false`,
            );
        } else if (charcode === 11 || charcode === 12) {
          // 11 - "\u000B" - tab
          // 12 - "\u000C" - form feed
          applicableOpts.removeLineBreaks = true;

          DEV &&
            console.log(
              `428 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.removeLineBreaks = ${
                applicableOpts.removeLineBreaks
              }`,
            );

          rangesArr.push(i, y, opts.removeLineBreaks ? " " : "\n");

          DEV &&
            console.log(
              `437 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${y}, ${
                opts.removeLineBreaks ? " " : "\\n"
              }]`,
            );
          // continue;
        } else if (charcode === 13) {
          // 13 - "\u000D" - carriage return
          DEV && console.log(`444 CR caught`);

          if (!applicableOpts.removeLineBreaks) {
            applicableOpts.removeLineBreaks = true;

            DEV &&
              console.log(
                `451 processCharacter.js: SET ${`\u001b[${32}m${`applicableOpts.removeLineBreaks`}\u001b[${39}m`} = ${
                  applicableOpts.removeLineBreaks
                }`,
              );
          }

          if (
            !opts.removeLineBreaks &&
            (!brClosingBracketIndexesArr ||
              (Array.isArray(brClosingBracketIndexesArr) &&
                !brClosingBracketIndexesArr.some(
                  (idx) => left(str, i) === idx,
                )))
          ) {
            if (opts.replaceLineBreaks && !opts.removeLineBreaks) {
              applicableOpts.useXHTML = true;
              applicableOpts.replaceLineBreaks = true;

              DEV &&
                console.log(
                  `471 processCharacter.js: SET ${`\u001b[${32}m${`applicableOpts.useXHTML`}\u001b[${39}m`} = ${
                    applicableOpts.useXHTML
                  }; ${`\u001b[${32}m${`applicableOpts.replaceLineBreaks`}\u001b[${39}m`} = ${
                    applicableOpts.replaceLineBreaks
                  }`,
                );
            } else if (!opts.replaceLineBreaks) {
              // opts.replaceLineBreaks === false
              applicableOpts.replaceLineBreaks = true;

              DEV &&
                console.log(
                  `483 processCharacter.js: SET ${`\u001b[${32}m${`applicableOpts.replaceLineBreaks`}\u001b[${39}m`} = ${
                    applicableOpts.replaceLineBreaks
                  }`,
                );
            }
          }

          if (!opts.removeLineBreaks) {
            applicableOpts.eol = true;

            DEV &&
              console.log(
                `495 processCharacter.js: SET ${`\u001b[${32}m${`applicableOpts.eol`}\u001b[${39}m`} = ${
                  applicableOpts.eol
                }`,
              );
          }

          if (opts.removeLineBreaks) {
            let whatToInsert = " ";
            if (
              punctuationChars.includes(str[right(str, i) as number]) ||
              ["\n", "\r"].includes(str[i + 1])
            ) {
              whatToInsert = "";
            }
            rangesArr.push(i, y, whatToInsert);

            DEV &&
              console.log(
                `513 ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${y}, ${JSON.stringify(
                  whatToInsert,
                  null,
                  0,
                )}]`,
              );
          } else if (
            opts.replaceLineBreaks &&
            (!brClosingBracketIndexesArr ||
              (Array.isArray(brClosingBracketIndexesArr) &&
                !brClosingBracketIndexesArr.some(
                  (idx) => left(str, i) === idx,
                )))
          ) {
            DEV && console.log(`527`);
            let startingIdx = i;
            if (
              str[i - 1] === " " &&
              typeof leftStopAtNewLines(str, i) === "number"
            ) {
              startingIdx = (leftStopAtNewLines(str, i) as number) + 1;
            }
            let endingIdx = i;
            let whatToInsert = "";

            if (str[i + 1] !== "\n") {
              if (eolChar === "\n") {
                whatToInsert = "\n";
              } else if (eolChar === "\r\n") {
                // add missing LF after current CR
                rangesArr.push(i + 1, i + 1, "\n");

                DEV &&
                  console.log(
                    `547 ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i + 1}, ${
                      i + 1
                    }]`,
                  );
              }
            }

            if (eolChar === "\n") {
              // extend this range to also delete this CR
              endingIdx = i + 1;
            } else if (eolChar === "\r" && str[i + 1] === "\n") {
              // delete that LF from wrong CRLF set which is present
              rangesArr.push(i + 1, i + 2);

              DEV &&
                console.log(
                  `563 ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i + 1}, ${
                    i + 2
                  }]`,
                );
            }
            rangesArr.push(
              startingIdx,
              endingIdx,
              `<br${opts.useXHTML ? "/" : ""}>${whatToInsert}`,
            );

            DEV &&
              console.log(
                `576 ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${startingIdx}, ${endingIdx}, ${JSON.stringify(
                  whatToInsert,
                  null,
                  4,
                )}]`,
              );

            // skip the \n that follows
            if (str[i + 1] === "\n") {
              DEV && console.log(`585 offset by 1`);
              offsetBy(1);
            }
          } else {
            DEV && console.log(`589`);
            DEV &&
              console.log(
                `592 FIY, ${`\u001b[${33}m${`endOfLineVal`}\u001b[${39}m`} = ${JSON.stringify(
                  eolChar,
                  null,
                  4,
                )}`,
              );
            if (eolChar === "\n") {
              rangesArr.push(i, i + 1, str[i + 1] === "\n" ? "" : "\n");

              DEV &&
                console.log(
                  `603 PUSH [${i}, ${i + 1}, ${JSON.stringify(
                    str[i + 1] === "\n" ? "" : "\n",
                    null,
                    0,
                  )}]`,
                );
            } else if (eolChar === "\r" && str[i + 1] === "\n") {
              // delete the LF that follows
              rangesArr.push(i + 1, i + 2);
              DEV && console.log(`612 PUSH [${i + 1}, ${i + 2}]`);
            } else if (eolChar === "\r\n" && str[i + 1] !== "\n") {
              // add LF afterwards
              rangesArr.push(i + 1, i + 1, "\n");
              DEV && console.log(`616 PUSH [${i}, ${i + 1}, "\\n"]`);
            }

            // delete whitespace at the beginning and at the end of each line
            let tempIdx1 = leftStopAtNewLines(str, i);
            if (typeof tempIdx1 === "number" && str[tempIdx1].trim()) {
              // delete trailing whitespace at the end of each line
              let endingIdx = i;
              if (eolChar === "\n") {
                // extend this range to also delete this CR
                endingIdx = i + 1;
              }
              if (tempIdx1 < i - 1) {
                DEV &&
                  console.log(
                    `631 ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${
                      tempIdx1 + 1
                    }, ${endingIdx}, ${JSON.stringify(
                      `${str[i + 1] === "\n" ? "" : "\n"}`,
                      null,
                      4,
                    )}]`,
                  );
                rangesArr.push(
                  tempIdx1 + 1,
                  endingIdx,
                  `${str[i + 1] === "\n" ? "" : "\n"}`,
                );
              }
            }

            // delete whitespace in front of each line
            let tempIdx2 = rightStopAtNewLines(str, i);
            if (tempIdx2 && str[tempIdx2].trim() && str[i + 1] !== "\n") {
              if (tempIdx2 > i + 1) {
                DEV &&
                  console.log(
                    `653 ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${
                      i + 1
                    }, ${tempIdx2}]`,
                  );
                rangesArr.push(i + 1, tempIdx2);
              }
            }
          }
        } else if (charcode > 13) {
          // charcodes: [14;31] - remove these control chars
          rangesArr.push(i, y);

          DEV &&
            console.log(
              `667 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${y}]`,
            );
          // continue;
        }
      } else {
        DEV &&
          console.log(`673 processCharacter.js - clauses 32 <= charcode < 127`);
        // 32 <= charcode < 127
        // NO ENCODING HERE, JUST FIXES

        if (charcode === 32) {
          // IF SPACE CHARACTER
        } else if (charcode === 34) {
          // IF DOUBLE QUOTE
          DEV && console.log(`681 processCharacter.js: double quote caught`);
          applicableOpts.convertEntities = true;

          DEV &&
            console.log(
              `686 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertEntities = ${
                applicableOpts.convertEntities
              }`,
            );
          if (
            typeof left(str, i) === "number" ||
            typeof right(str, i) === "number"
          ) {
            applicableOpts.convertApostrophes = true;

            DEV &&
              console.log(
                `698 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertApostrophes = ${
                  applicableOpts.convertApostrophes
                }`,
              );
          }
          let tempRes = convertOneApostrophe(str, {
            from: i,
            convertEntities: opts.convertEntities,
            convertApostrophes: opts.convertApostrophes,
            offsetBy,
          });

          DEV &&
            console.log(
              `712 ${`\u001b[${33}m${`tempRes`}\u001b[${39}m`} = ${JSON.stringify(
                tempRes,
                null,
                4,
              )}`,
            );
          if (tempRes?.length) {
            rangesArr.push(tempRes as any);
          } else if (opts.convertEntities) {
            rangesArr.push(i, i + 1, "&quot;");
          }
        } else if (charcode === 38) {
          // IF AMPERSAND, the &
          DEV && console.log(`725 processCharacter.js - ampersand clauses`);
          if (isLetter(str[i + 1])) {
            // it can be a named entity
            let temp = Object.keys(allNamedEntities).find(
              (entName) =>
                str.startsWith(entName, i + 1) &&
                str[i + entName.length + 1] === ";",
            );

            DEV &&
              console.log(
                `736 processCharacter.js - ${`\u001b[${33}m${`temp`}\u001b[${39}m`} = ${JSON.stringify(
                  temp,
                  null,
                  4,
                )}`,
              );
            applicableOpts.convertEntities = true;

            DEV &&
              console.log(
                `746 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertEntities = ${
                  applicableOpts.convertEntities
                }`,
              );
            if (temp) {
              DEV &&
                console.log(
                  `753 processCharacter.js - named entity, ${`\u001b[${32}m${temp}\u001b[${39}m`} found`,
                );

              if (temp === "apos") {
                applicableOpts.convertApostrophes = true;

                DEV &&
                  console.log(
                    `761 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertApostrophes = ${
                      applicableOpts.convertApostrophes
                    }`,
                  );

                DEV && console.log(`766 processCharacter.js - let's decode`);
                let decodedTempRes = convertOneApostrophe(str, {
                  from: i,
                  to: i + temp.length + 2,
                  value: `'`,
                  convertEntities: opts.convertEntities,
                  convertApostrophes: opts.convertApostrophes,
                  offsetBy,
                });
                if (Array.isArray(decodedTempRes) && decodedTempRes.length) {
                  rangesArr.push(decodedTempRes as any);

                  DEV &&
                    console.log(
                      `780 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} ${JSON.stringify(
                        decodedTempRes,
                        null,
                        0,
                      )}`,
                    );
                  DEV && console.log(`786 offset by ${temp.length + 2}`);
                  offsetBy(temp.length + 2);
                } else {
                  rangesArr.push([i, i + temp.length + 2, `'`]);

                  DEV &&
                    console.log(
                      `793 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} ${JSON.stringify(
                        [i, i + temp.length + 2, `'`],
                        null,
                        0,
                      )}`,
                    );
                  DEV && console.log(`799 offset by ${temp.length + 2}`);
                  offsetBy(temp.length + 2);
                }
              } else if (
                opts.convertEntities &&
                Object.keys(notEmailFriendly).includes(
                  str.slice(i + 1, i + temp.length + 1),
                )
              ) {
                DEV &&
                  console.log(
                    `810 processCharacter.js - not email-friendly named entity`,
                  );
                rangesArr.push(
                  i,
                  i + temp.length + 2,
                  `&${
                    notEmailFriendly[str.slice(i + 1, i + temp.length + 1)]
                  };`,
                );

                DEV &&
                  console.log(
                    `822 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${
                      i + temp.length + 2
                    }, &${JSON.stringify(
                      notEmailFriendly[str.slice(i + 1, i + temp.length + 1)],
                      null,
                      4,
                    )};]`,
                  );
                offsetBy(temp.length + 1);
                DEV && console.log(`831 offset by ${temp.length + 1}`);
              } else if (!opts.convertEntities) {
                DEV &&
                  console.log(
                    `835 decoded ${JSON.stringify(
                      str.slice(i, i + temp.length + 2),
                      null,
                      4,
                    )} (charCodeAt = ${he
                      .decode(`${str.slice(i, i + temp.length + 2)}`)
                      .charCodeAt(0)})`,
                  );

                DEV &&
                  console.log(
                    `846 ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} decoded [${i}, ${
                      i + temp.length + 2
                    }, ${JSON.stringify(
                      he.decode(`${str.slice(i, i + temp.length + 2)}`),
                      null,
                      4,
                    )}]`,
                  );
                rangesArr.push(
                  i,
                  i + temp.length + 2,
                  he.decode(`${str.slice(i, i + temp.length + 2)}`),
                );
                offsetBy(temp.length + 1);
                DEV && console.log(`860 offset by ${temp.length + 1}`);
              } else {
                // if opts.convertEntities
                // just skip
                offsetBy(temp.length + 1);
                DEV && console.log(`865 offset by ${temp.length + 1}`);
              }
            } else if (opts.convertEntities) {
              // no named entities matched, so encode the ampersand
              rangesArr.push(i, i + 1, "&amp;");

              DEV &&
                console.log(
                  `873 ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${
                    i + 1
                  }, "&amp;"]`,
                );
            }
          } else if (str[right(str, i) as number] === "#") {
            // it can be a numeric, a decimal or a hex entity
            DEV && console.log("880 ██ numeric, a decimal or a hex entity");
            for (let z = right(str, i) as number; z < len; z++) {
              if (str[z].trim() && !isNumberChar(str[z]) && str[z] !== "#") {
                if (str[z] === ";") {
                  // it's numeric entity
                  DEV && console.log(`885 carved out "${str.slice(i, z + 1)}"`);
                  let tempRes = he.encode(he.decode(str.slice(i, z + 1)), {
                    useNamedReferences: true,
                  });

                  DEV &&
                    console.log(
                      `892 ${`\u001b[${33}m${`tempRes`}\u001b[${39}m`} = ${JSON.stringify(
                        tempRes,
                        null,
                        4,
                      )}`,
                    );
                  if (tempRes) {
                    rangesArr.push(i, z + 1, tempRes);

                    DEV &&
                      console.log(
                        `903 ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${
                          z + 1
                        }, "${tempRes}"]`,
                      );
                  }
                  offsetBy(z + 1 - i);
                  DEV && console.log(`909 offset by ${z + 1 - i}`);
                } else {
                  // do checks, maybe semicol is missing?
                  // TODO
                }
              }
            }
          } else {
            applicableOpts.convertEntities = true;

            DEV &&
              console.log(
                `921 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertEntities = ${
                  applicableOpts.convertEntities
                }`,
              );
            if (opts.convertEntities) {
              // encode it
              rangesArr.push(i, i + 1, "&amp;");

              DEV &&
                console.log(
                  `931 ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${
                    i + 1
                  }, "&amp;"]`,
                );
            }
          }
        } else if (charcode === 39) {
          // IF SINGLE QUOTE OR APOSTROPHE, the '

          // first, calculate theoretical maximum setting and set applicable rules
          // based on it
          let temp = convertOneApostrophe(str, {
            from: i,
            convertEntities: true,
            convertApostrophes: true,
          });
          if (temp?.length) {
            applicableOpts.convertApostrophes = true;

            DEV &&
              console.log(
                `952 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertApostrophes = ${
                  applicableOpts.convertApostrophes
                }`,
              );
            if (opts.convertApostrophes) {
              applicableOpts.convertEntities = true;

              DEV &&
                console.log(
                  `961 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertEntities = ${
                    applicableOpts.convertEntities
                  }`,
                );
            }
            rangesArr.push(
              convertOneApostrophe(str, {
                from: i,
                convertEntities: opts.convertEntities,
                convertApostrophes: opts.convertApostrophes,
                offsetBy,
              }) as any,
            );
          }
        } else if (charcode === 44 || charcode === 59) {
          // IF COMMA (,) OR SEMICOLON (;)

          // 1. check for whitespace leading to colon or semicolon
          if (str[i - 1] && !str[i - 1].trim()) {
            let whatsOnTheLeft = left(str, i);
            if (typeof whatsOnTheLeft === "number" && whatsOnTheLeft < i - 1) {
              rangesArr.push(whatsOnTheLeft + 1, i);

              DEV &&
                console.log(
                  `986 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${
                    whatsOnTheLeft + 1
                  }, ${i}]`,
                );
            }
          }

          // 2. comma-specific
          if (
            charcode === 44 &&
            str[y] !== undefined &&
            !state.onUrlCurrently &&
            !isNumberChar(str[y]) &&
            str[y].trim() &&
            str[y] !== " " &&
            str[y] !== "\n" &&
            str[y] !== '"' &&
            str[y] !== "'" &&
            str[y] !== leftSingleQuote &&
            str[y] !== leftDoubleQuote &&
            str[y] !== rightSingleQuote &&
            str[y] !== rightDoubleQuote
          ) {
            // comma, not on URL, not followed by number = add space afterwards
            applicableOpts.addMissingSpaces = true;

            DEV &&
              console.log(
                `1014 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.addMissingSpaces = ${
                  applicableOpts.addMissingSpaces
                }`,
              );

            if (opts.addMissingSpaces) {
              rangesArr.push(y, y, " ");

              DEV &&
                console.log(
                  `1024 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${y}, ${y}, " "]`,
                );
            }
          }

          DEV && console.log(`1029`);
          // 3. semicolon-specific
          if (
            charcode === 59 &&
            str[y] !== undefined &&
            !state.onUrlCurrently &&
            str[y].trim() &&
            str[y] !== "&" &&
            str[y] !== '"' &&
            str[y] !== "'" &&
            str[y] !== leftSingleQuote &&
            str[y] !== leftDoubleQuote &&
            str[y] !== rightSingleQuote &&
            str[y] !== rightDoubleQuote
          ) {
            applicableOpts.addMissingSpaces = true;

            DEV &&
              console.log(
                `1048 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.addMissingSpaces = ${
                  applicableOpts.addMissingSpaces
                }`,
              );

            if (opts.addMissingSpaces) {
              rangesArr.push(y, y, " ");

              DEV &&
                console.log(
                  `1058 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${y}, ${y}, " "]`,
                );
            }
          }
        } else if (charcode === 45) {
          // IF HYPHEN
          DEV && console.log("1064 processCharacter.js - a hyphen caught");

          // first, calculate theoretical maximum setting and set applicable rules
          // based on it
          let temp = convertOneDash(str, {
            from: i,
            convertEntities: true,
            convertDashes: true,
          });
          if (temp?.length) {
            applicableOpts.convertDashes = true;

            DEV &&
              console.log(
                `1078 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertDashes = ${
                  applicableOpts.convertDashes
                }`,
              );
            if (opts.convertDashes) {
              applicableOpts.convertEntities = true;

              DEV &&
                console.log(
                  `1087 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertEntities = ${
                    applicableOpts.convertEntities
                  }`,
                );
            }
            rangesArr.push(
              convertOneDash(str, {
                from: i,
                convertEntities: opts.convertEntities,
                convertDashes: opts.convertDashes,
                offsetBy,
              }) as any,
            );
          }
        } else if (charcode === 46) {
          // IF DOT CHARACTER
          //
          // 1. convert first of three and only three dots to ellipsis, encode
          // if needed
          // TODO - improve matching to account for possible spaces between dots
          if (
            str[i - 1] !== "." &&
            str[y] === "." &&
            str[y + 1] === "." &&
            str[y + 2] !== "."
          ) {
            applicableOpts.convertDotsToEllipsis = true;

            DEV &&
              console.log(
                `1117 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertDotsToEllipsis = ${
                  applicableOpts.convertDotsToEllipsis
                }`,
              );

            if (opts.convertDotsToEllipsis) {
              applicableOpts.convertEntities = true;

              DEV &&
                console.log(
                  `1127 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertEntities = ${
                    applicableOpts.convertEntities
                  }`,
                );

              DEV &&
                console.log(
                  `1134 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${
                    y + 2
                  }, ${opts.convertEntities ? "&hellip;" : `${ellipsis}`}]`,
                );
              rangesArr.push(
                i,
                y + 2,
                opts.convertEntities ? "&hellip;" : `${ellipsis}`,
              );
            }
          }

          // 2. add missing space after full stop or comma except on extensions and URL's
          let first = str[y] ? str[y].toLowerCase() : "";
          let second = str[y + 1] ? str[y + 1].toLowerCase() : "";
          let third = str[y + 2] ? str[y + 2].toLowerCase() : "";
          let fourth = str[y + 3] ? str[y + 3].toLowerCase() : "";
          let nextThreeChars = first + second + third;
          // TODO: rebase, lift the extension checking to codsen-utils
          if (
            first + second !== "js" &&
            nextThreeChars !== "jpg" &&
            nextThreeChars !== "png" &&
            nextThreeChars !== "gif" &&
            nextThreeChars !== "svg" &&
            nextThreeChars !== "htm" &&
            nextThreeChars !== "pdf" &&
            nextThreeChars !== "psd" &&
            nextThreeChars !== "tar" &&
            nextThreeChars !== "zip" &&
            nextThreeChars !== "rar" &&
            nextThreeChars !== "otf" &&
            nextThreeChars !== "ttf" &&
            nextThreeChars !== "eot" &&
            nextThreeChars !== "php" &&
            nextThreeChars !== "rss" &&
            nextThreeChars !== "asp" &&
            nextThreeChars !== "ppt" &&
            nextThreeChars !== "doc" &&
            nextThreeChars !== "txt" &&
            nextThreeChars !== "rtf" &&
            nextThreeChars !== "git" &&
            nextThreeChars + fourth !== "jpeg" &&
            nextThreeChars + fourth !== "html" &&
            nextThreeChars + fourth !== "woff" &&
            !(
              !isLetter(str[i - 2]) &&
              str[i - 1] === "p" &&
              str[y] === "s" &&
              str[y + 1] === "t" &&
              !isLetter(str[y + 2])
            )
          ) {
            // two tasks: deleting any spaces before and adding spaces after
            //
            // 2-1. ADDING A MISSING SPACE AFTER IT:
            if (
              str[y] !== undefined &&
              // - When it's not within a URL, the requirement for next letter to be uppercase letter.
              //   This prevents both numbers with decimal digits and short url's like "detergent.io"
              // - When it's within URL, it's stricter:
              //   next letter has to be an uppercase letter, followed by lowercase letter.
              ((!state.onUrlCurrently && isUppercaseLetter(str[y])) ||
                (state.onUrlCurrently &&
                  isLetter(str[y]) &&
                  isUppercaseLetter(str[y]) &&
                  isLetter(str[y + 1]) &&
                  isLowercaseLetter(str[y + 1]))) &&
              str[y] !== " " &&
              str[y] !== "." &&
              str[y] !== "\n"
            ) {
              applicableOpts.addMissingSpaces = true;

              DEV &&
                console.log(
                  `1210 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.addMissingSpaces = ${
                    applicableOpts.addMissingSpaces
                  }`,
                );

              if (opts.addMissingSpaces) {
                rangesArr.push(y, y, " ");

                DEV &&
                  console.log(
                    `1220 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${y}, ${y}, " "]`,
                  );
              }
            }

            // 2-2. REMOVING SPACES BEFORE IT:
            if (
              str[i - 1] !== undefined &&
              str[i - 1].trim() === "" &&
              str[y] !== "." &&
              (str[i - 2] === undefined || str[i - 2] !== ".") // that's for cases: "aaa. . " < observe second dot.
            ) {
              // march backwards
              for (y = i - 1; y--; ) {
                if (str[y].trim() !== "") {
                  rangesArr.push(y + 1, i);

                  DEV &&
                    console.log(
                      `1239 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${
                        y + 1
                      }, ${i}]`,
                    );
                  break;
                }
              }
            }
          }
        } else if (charcode === 47) {
          DEV && console.log("1249 processCharacter.js - right slash caught");
          // IF RIGHT SLASH, /
        } else if (charcode === 58) {
          // IF COLON (:)
          //
          // URL detection
          //

          if (
            str[y - 1] &&
            str[right(str, y - 1) as number] === "/" &&
            str[right(str, right(str, y - 1) as number) as number] === "/"
          ) {
            state.onUrlCurrently = true;

            DEV &&
              console.log(
                `1266 processCharacter.js - ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`state.onUrlCurrently`}\u001b[${39}m`} = true`,
              );
          }
        } else if (charcode === 60) {
          // IF LESS THAN SIGN, <
          applicableOpts.convertEntities = true;

          DEV &&
            console.log(
              `1275 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertEntities = ${
                applicableOpts.convertEntities
              }`,
            );

          if (opts.convertEntities) {
            rangesArr.push(i, i + 1, "&lt;");

            DEV &&
              console.log(
                `1285 ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${
                  i + 1
                }, "&lt;"]`,
              );
          }
        } else if (charcode === 62) {
          // IF GREATER THAN SIGN, >
          applicableOpts.convertEntities = true;

          DEV &&
            console.log(
              `1296 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertEntities = ${
                applicableOpts.convertEntities
              }`,
            );

          if (opts.convertEntities) {
            rangesArr.push(i, i + 1, "&gt;");

            DEV &&
              console.log(
                `1306 ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${
                  i + 1
                }, "&gt;"]`,
              );
          }
        } else if (charcode === 119) {
          // IF LETTER w
          //
          // URL detection
          //
          if (
            str[y + 1] &&
            str[y].toLowerCase() === "w" &&
            str[y + 1].toLowerCase() === "w"
          ) {
            state.onUrlCurrently = true;

            DEV &&
              console.log(
                `1325 processCharacter.js - ${`\u001b[${33}m${`state.onUrlCurrently`}\u001b[${39}m`} = true`,
              );
          }
        } else if (charcode === 123) {
          // opening curly bracket {

          // check for following {{ and {%, if following skip until closing found
          let stopUntil;
          if (str[y] === "{") {
            stopUntil = "}}";
          } else if (str[y] === "%") {
            stopUntil = "%}";
          }
          // PS. whitespace limiting with dashes like {%- zz -%} don't matter
          // because dashes sit inside and will be caught by standard {%..%}
          if (stopUntil) {
            DEV &&
              console.log(
                `1343 processCharacter.js - stopUntil = ${stopUntil} so loop:`,
              );
            for (let z = i; z < len; z++) {
              DEV && console.log(`= str[z] = ${str[z]}`);
              if (str[z] === stopUntil[0] && str[z + 1] === stopUntil[1]) {
                DEV &&
                  console.log(
                    `1350 processCharacter.js - offset by ${z + 1 - i}`,
                  );
                offsetBy(z + 1 - i);
                break;
              }
            }
            // if end is reached and closing counterpart is not found,
            // nothing happens.
          }
        }
      }
    } else {
      // >= 127
      // outside ASCII, need to encode (unless requested not to)

      DEV &&
        console.log(
          `1367 processCharacter.js - ${`\u001b[${90}m${`character outside ASCII`}\u001b[${39}m`}; charcode = ${charcode}`,
        );

      // plan - filter all characters for deletion and leave reset (ELSE) to
      // be encoded

      if (charcode > 126 && charcode < 160) {
        // C1 group
        if (charcode !== 133) {
          // over thirty characters, so they are statistically more likely to happen:
          rangesArr.push(i, y);

          DEV &&
            console.log(
              `1381 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${y}]`,
            );
        } else {
          // only codepoint 133 - Next Line (NEL), statistically less probable
          // so it comes second:
          applicableOpts.removeLineBreaks = true;

          DEV &&
            console.log(
              `1390 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.removeLineBreaks = ${
                applicableOpts.removeLineBreaks
              }`,
            );

          rangesArr.push(i, y, opts.removeLineBreaks ? "" : "\n");

          DEV &&
            console.log(
              `1399 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${y}, ${
                opts.removeLineBreaks ? "" : "\\n"
              }]`,
            );
        }
      } else if (charcode === 160) {
        // IF RAW non-breaking space

        // if opts.removeWidows is disabled, replace all non-breaking spaces
        // with spaces
        if (!opts.removeWidows) {
          // we need to remove this nbsp
          // thing to consider - edges, like "&nbsp; a b"
          let calculatedFrom = i;
          let calculatedTo = y;
          let calculatedValue = " ";

          // const charOnTheLeft = leftStopAtRawNbsp(str, i);
          let charOnTheLeft = left(str, i);

          DEV &&
            console.log(
              `1421 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`charOnTheLeft`}\u001b[${39}m`} = ${JSON.stringify(
                charOnTheLeft,
                null,
                4,
              )}`,
            );
          // const charOnTheRight = rightStopAtRawNbsp(str, calculatedTo - 1);
          let charOnTheRight = right(str, calculatedTo - 1);

          DEV &&
            console.log(
              `1432 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`charOnTheRight`}\u001b[${39}m`} = ${JSON.stringify(
                charOnTheRight,
                null,
                4,
              )}`,
            );

          if (charOnTheLeft === null || charOnTheRight === null) {
            // this means, this raw nbsp is around the edge of the string,
            // for example:
            // <raw nbsp> a b
            // ^^^^^^^^^^
            // might be decoded &nbsp; - single character

            // restore it back:
            calculatedValue = opts.convertEntities ? "&nbsp;" : rawNbsp;

            DEV &&
              console.log(
                `1451 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`calculatedValue`}\u001b[${39}m`} = ${JSON.stringify(
                  calculatedValue,
                  null,
                  4,
                )}`,
              );

            applicableOpts.convertEntities = true;

            DEV &&
              console.log(
                `1462 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertEntities = ${
                  applicableOpts.convertEntities
                }`,
              );
          } else {
            // if it's deleted, it's applicable
            applicableOpts.removeWidows = true;

            DEV &&
              console.log(
                `1472 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.removeWidows = ${
                  applicableOpts.removeWidows
                }`,
              );
          }

          if (calculatedValue) {
            rangesArr.push(calculatedFrom, calculatedTo, calculatedValue);

            DEV &&
              console.log(
                `1483 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${calculatedFrom}, ${calculatedTo}, ${JSON.stringify(
                  calculatedValue,
                  null,
                  4,
                )}(#${calculatedValue.charCodeAt(0)})]`,
              );
          } else {
            rangesArr.push(calculatedFrom, calculatedTo);

            DEV &&
              console.log(
                `1494 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${calculatedFrom}, ${calculatedTo}]`,
              );
          }
        } else {
          applicableOpts.convertEntities = true;

          DEV &&
            console.log(
              `1502 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertEntities = ${
                applicableOpts.convertEntities
              }`,
            );
          applicableOpts.removeWidows = true;

          DEV &&
            console.log(
              `1510 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.removeWidows = ${
                applicableOpts.removeWidows
              }`,
            );

          if (opts.convertEntities) {
            // push "&nbsp;" to retain in

            DEV &&
              console.log(
                `1520 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${y}, "&nbsp;"]`,
              );
            rangesArr.push(i, y, "&nbsp;");
          }
        }
      } else if (charcode === 173) {
        // IF SOFT HYPHEN, '\u00AD'
        rangesArr.push(i, y);

        DEV &&
          console.log(
            `1531 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${y}]`,
          );
      } else if (charcode === 8232 || charcode === 8233) {
        // '\u2028', '\u2029'
        applicableOpts.removeLineBreaks = true;

        DEV &&
          console.log(
            `1539 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.removeLineBreaks = ${
              applicableOpts.removeLineBreaks
            }`,
          );

        rangesArr.push(i, y, opts.removeLineBreaks ? "" : "\n");

        DEV &&
          console.log(
            `1548 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${y}, ${
              opts.removeLineBreaks ? "" : "\\n"
            }]`,
          );
      } else if (
        [
          5760, 8191, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200,
          8201, 8202, 8239, 8287, 12288,
        ].includes(charcode)
      ) {
        // replace with spaces from
        // https://www.fileformat.info/info/unicode/category/Zs/list.htm

        // - ogham space marks (#5760), '\u1680'
        // - en quad (#8192), '\u2000'
        // - em quad (#8193), '\u2001'
        // - en space (#8194), '\u2002'
        // - em space (#8195), '\u2003'
        // - three-per-em-space (#8196), '\u2004'
        // - four-per-em-space (#8197), '\u2005'
        // - six-per-em-space (#8198), '\u2006'
        // - figure space (#8199), '\u2007'
        // - punctuation space (#8200), '\u2008'
        // - thin space (#8201), '\u2009'
        // - hair space (#8202), '\u200A'
        // - narrow no break space (#8239), '\u202F'
        // - medium mathematical space (#8287), '\u205F'
        // - ideographic space (#12288), '\u3000'

        DEV && console.log("1577 processCharacter.js - hairspace caught");
        if (!str[y]) {
          rangesArr.push(i, y);

          DEV &&
            console.log(
              `1583 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${y}]`,
            );
        } else {
          // rangesArr.push(i, y, " ");
          let expandedRange = expander({
            str,
            from: i,
            to: y,
            wipeAllWhitespaceOnLeft: true,
            wipeAllWhitespaceOnRight: true,
            addSingleSpaceToPreventAccidentalConcatenation: true,
          });

          DEV &&
            console.log(
              `1598 processCharacter.js - expanded to ${JSON.stringify(
                expandedRange,
                null,
                0,
              )} and then pushed it`,
            );
          (rangesArr as any).push(...expandedRange);
        }
      } else if (charcode === 8206) {
        // remove all left-to-right mark chars, '\u200E'
        DEV && console.log("1608 processCharacter.js - LTR mark caught");
        rangesArr.push(i, y);

        DEV &&
          console.log(
            `1613 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${y}]`,
          );
      } else if (charcode === 8207) {
        DEV && console.log("1616 processCharacter.js - RTL mark caught");
        // remove all right-to-right mark chars, '\u200F'
        rangesArr.push(i, y);

        DEV &&
          console.log(
            `1622 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${y}]`,
          );
      } else if (
        charcode === 8211 ||
        (charcode === 65533 && isNumberChar(str[i - 1]) && isNumberChar(str[y]))
      ) {
        // IF N-DASH, '\u2013'
        DEV && console.log("1629 processCharacter.js - N dash caught");

        applicableOpts.convertDashes = true;

        DEV &&
          console.log(
            `1635 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertDashes = ${
              applicableOpts.convertDashes
            }`,
          );

        if (!opts.convertDashes) {
          DEV && console.log(`1641 conversion is off`);
          rangesArr.push(i, y, "-");

          DEV &&
            console.log(
              `1646 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${y}, "-"]`,
            );
        } else {
          applicableOpts.convertEntities = true;

          DEV &&
            console.log(
              `1653 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertEntities = ${
                applicableOpts.convertEntities
              }`,
            );

          if (opts.convertEntities) {
            // if it's space-ndash-space, put m-dash instead
            if (
              str[i - 1] &&
              !str[i - 1].trim() &&
              str[i + 1] &&
              !str[i + 1].trim() &&
              !(isNumberChar(str[i - 2]) && isNumberChar(str[i + 2]))
            ) {
              rangesArr.push(i, y, "&mdash;");

              DEV &&
                console.log(
                  `1671 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${y}, "&mdash;"]`,
                );
            } else {
              // ELSE - n-dash stays
              rangesArr.push(i, y, "&ndash;");

              DEV &&
                console.log(
                  `1679 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${y}, "&ndash;"]`,
                );
            }
          } else if (charcode === 65533) {
            if (
              str[i - 1] &&
              !str[i - 1].trim() &&
              str[i + 1] &&
              !str[i + 1].trim()
            ) {
              rangesArr.push(i, y, rawMDash);

              DEV &&
                console.log(
                  `1693 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${y}, "raw m-dash"]`,
                );
            } else {
              rangesArr.push(i, y, rawNDash);

              DEV &&
                console.log(
                  `1700 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${y}, "raw n-dash"]`,
                );
            }
          }
        }

        // if there's space in front but no space after:
        // ---------------------------------------------
        if (str[i - 1] && !str[i - 1].trim() && str[y].trim()) {
          DEV && console.log(`1709`);
          if (str[i - 2] && isNumberChar(str[i - 2]) && isNumberChar(str[y])) {
            rangesArr.push(i - 1, i);

            DEV &&
              console.log(
                `1715 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} (TO DELETE) [${
                  i - 1
                }, ${i}]`,
              );
          } else {
            applicableOpts.addMissingSpaces = true;

            DEV &&
              console.log(
                `1724 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.addMissingSpaces = ${
                  applicableOpts.addMissingSpaces
                }`,
              );
            applicableOpts.convertEntities = true;

            DEV &&
              console.log(
                `1732 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertEntities = ${
                  applicableOpts.convertEntities
                }`,
              );

            // 1.
            // add space after
            if (opts.addMissingSpaces) {
              let whatToAdd = " ";
              // imagine case "10am&nbsp;&ndash;11am" - we're adding space
              // before "11am", but there needs to be non-breaking space because
              // widow removal is on
              if (!widowRegexTest.test(str.slice(y))) {
                applicableOpts.removeWidows = true;

                DEV &&
                  console.log(
                    `1749 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.removeWidows = ${
                      applicableOpts.removeWidows
                    }`,
                  );
                if (opts.removeWidows) {
                  whatToAdd = opts.convertEntities ? "&nbsp;" : rawNbsp;

                  DEV &&
                    console.log(
                      `1758 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} whatToAdd = ${
                        opts.convertEntities ? whatToAdd : "rawNbsp"
                      }`,
                    );
                }
              }

              rangesArr.push(y, y, whatToAdd);

              DEV &&
                console.log(
                  `1769 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${y}, ${y}, ${JSON.stringify(
                    whatToAdd,
                    null,
                    0,
                  )}]`,
                );
            }

            // 2.
            // replace space in front with non-breaking space if widow removal is on
            if (str.slice(i - 1, i) !== rawNbsp) {
              applicableOpts.removeWidows = true;

              DEV &&
                console.log(
                  `1784 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.removeWidows = ${
                    applicableOpts.removeWidows
                  }`,
                );

              if (opts.removeWidows) {
                rangesArr.push(
                  i - 1,
                  i,
                  opts.convertEntities ? "&nbsp;" : rawNbsp,
                );

                DEV &&
                  console.log(
                    `1798 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${
                      i - 1
                    }, ${i}, ${JSON.stringify(
                      opts.convertEntities ? "&nbsp;" : rawNbsp,
                      null,
                      0,
                    )}]`,
                  );
              }
            }
          }
        } else if (
          str[i - 2] &&
          str[i - 1] &&
          str[y] &&
          str[y + 1] &&
          isNumberChar(str[i - 2]) &&
          isNumberChar(str[y + 1]) &&
          !str[i - 1].trim() &&
          !str[y].trim()
        ) {
          // delete spaces around n-dash if those are number strings
          rangesArr.push(i - 1, i);
          rangesArr.push(y, y + 1);

          DEV &&
            console.log(
              `1825 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${
                i - 1
              }, ${i}], then [${y}, ${y + 1}]`,
            );
        }

        // Also, if it is mistakenly put instead of an m-dash, we need to tackle
        // the widow word, space in front of it within this clause.

        if (
          str[i - 2] &&
          str[i + 1] &&
          !str[i - 1].trim() &&
          str[i - 2].trim() &&
          !str[i + 1].trim() &&
          !(isNumberChar(str[i - 2]) && isNumberChar(str[i + 2]))
        ) {
          // 1. report as applicable
          applicableOpts.removeWidows = true;
          if (opts.removeWidows) {
            // 2. replace the space
            rangesArr.push(i - 1, i, opts.convertEntities ? "&nbsp;" : rawNbsp);

            DEV &&
              console.log(
                `1850 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${
                  i - 1
                }, ${i}, ${JSON.stringify(
                  opts.convertEntities ? "&nbsp;" : rawNbsp,
                  null,
                  4,
                )}]`,
              );
          }
        }
      } else if (
        charcode === 8212 ||
        (charcode === 65533 && str[i - 1] === " " && str[y] === " ")
      ) {
        // IF RAW M-DASH, '\u2014'
        DEV && console.log("1865 processCharacter.js - M dash caught");

        applicableOpts.convertDashes = true;

        DEV &&
          console.log(
            `1871 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertDashes = ${
              applicableOpts.convertDashes
            }`,
          );

        // replace spaces in front with nbsp if widow removal is on
        if (str[i - 1] === " " && left(str, i) !== null) {
          applicableOpts.removeWidows = true;

          DEV &&
            console.log(
              `1882 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.removeWidows = ${
                applicableOpts.removeWidows
              }`,
            );

          if (opts.removeWidows) {
            applicableOpts.convertEntities = true;

            DEV &&
              console.log(
                `1892 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertEntities = ${
                  applicableOpts.convertEntities
                }`,
              );

            if (typeof left(str, i) === "number") {
              rangesArr.push(
                (left(str, i) as number) + 1,
                i,
                opts.convertEntities ? "&nbsp;" : rawNbsp,
              );

              DEV &&
                console.log(
                  `1906 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${
                    (left(str, i) as number) + 1
                  }, ${i}, ${JSON.stringify(
                    opts.convertEntities ? "&nbsp;" : rawNbsp,
                    null,
                    4,
                  )} (charCodeAt=${rawNbsp.charCodeAt(0)})]`,
                );
            }
          }
        }

        // tackle conversion into hyphen and surrounding spaces
        if (!opts.convertDashes) {
          DEV && console.log(`1920 processCharacter.js - conversion is off`);
          rangesArr.push(i, y, "-");

          DEV &&
            console.log(
              `1925 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${y}, "-"]`,
            );
        } else {
          applicableOpts.convertEntities = true;

          DEV &&
            console.log(
              `1932 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertEntities = ${
                applicableOpts.convertEntities
              }`,
            );
          // 1. if there's space in front but no space after M-dash, add one after
          if (str[i - 1] && !str[i - 1].trim() && str[y].trim()) {
            applicableOpts.addMissingSpaces = true;

            DEV &&
              console.log(
                `1942 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.addMissingSpaces = ${
                  applicableOpts.addMissingSpaces
                }`,
              );

            if (opts.addMissingSpaces) {
              rangesArr.push(y, y, " ");

              DEV &&
                console.log(
                  `1952 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${y}, ${y}, " "]`,
                );
            }
          }

          // 2. encode if applicable
          if (opts.convertEntities) {
            rangesArr.push(i, y, "&mdash;");

            DEV &&
              console.log(
                `1963 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${y}, "&mdash;"]`,
              );
          } else if (charcode === 65533) {
            rangesArr.push(i, y, rawMDash);

            DEV &&
              console.log(
                `1970 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${y}, "raw m-dash"]`,
              );
          }

          DEV &&
            console.log(
              `processCharacter.js - ${`\u001b[${33}m${`rangesArr.current()`}\u001b[${39}m`} = ${JSON.stringify(
                rangesArr.current(),
                null,
                4,
              )}`,
            );
        }
      } else if (charcode === 8216) {
        // IF UNENCODED LEFT SINGLE QUOTE

        let tempRes = convertOneApostrophe(str, {
          from: i,
          to: y,
          convertEntities: true,
          convertApostrophes: true,
        });

        if (tempRes?.length) {
          applicableOpts.convertApostrophes = true;

          DEV &&
            console.log(
              `1998 processCharacter.js - ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertApostrophes = ${
                applicableOpts.convertApostrophes
              }`,
            );

          let tempRes2 = convertOneApostrophe(str, {
            from: i,
            to: y,
            convertEntities: true,
            convertApostrophes: true,
          });

          if (tempRes2) {
            if (opts.convertApostrophes) {
              applicableOpts.convertEntities = true;

              DEV &&
                console.log(
                  `2016 processCharacter.js - ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertEntities = ${
                    applicableOpts.convertEntities
                  }`,
                );
            }

            rangesArr.push(
              convertOneApostrophe(str, {
                from: i,
                to: y,
                convertEntities: opts.convertEntities,
                convertApostrophes: opts.convertApostrophes,
                offsetBy,
              }) as any,
            );
          }
        }
      } else if (charcode === 8217) {
        // IF UNENCODED RIGHT SINGLE QUOTE
        applicableOpts.convertApostrophes = true;

        DEV &&
          console.log(
            `2039 processCharacter.js - ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertApostrophes = ${
              applicableOpts.convertApostrophes
            }`,
          );

        if (!opts.convertApostrophes) {
          rangesArr.push(i, y, "'");

          DEV &&
            console.log(
              `2049 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${y}, "'"]`,
            );
        } else {
          applicableOpts.convertEntities = true;

          DEV &&
            console.log(
              `2056 processCharacter.js - ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertEntities = ${
                applicableOpts.convertEntities
              }`,
            );
          if (opts.convertEntities) {
            rangesArr.push(i, y, "&rsquo;");

            DEV &&
              console.log(
                `2065 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${y}, "&rsquo;"]`,
              );
          }
        }
      } else if (charcode === 8220) {
        // IF UNENCODED LEFT DOUBLE QUOTE
        applicableOpts.convertApostrophes = true;

        DEV &&
          console.log(
            `2075 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertApostrophes = ${
              applicableOpts.convertApostrophes
            }`,
          );

        if (!opts.convertApostrophes) {
          applicableOpts.convertEntities = true;

          DEV &&
            console.log(
              `2085 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertEntities = ${
                applicableOpts.convertEntities
              }`,
            );
          rangesArr.push(i, y, opts.convertEntities ? `&quot;` : `"`);

          DEV &&
            console.log(
              `2093 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${y}, ${JSON.stringify(
                opts.convertEntities ? `&quot;` : `"`,
                null,
                0,
              )}]`,
            );
        } else if (opts.convertEntities) {
          applicableOpts.convertEntities = true;

          DEV &&
            console.log(
              `2104 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertEntities = ${
                applicableOpts.convertEntities
              }`,
            );
          rangesArr.push(i, y, "&ldquo;");

          DEV &&
            console.log(
              `2112 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${y}, "&ldquo;"]`,
            );
        }
      } else if (charcode === 8221) {
        // IF UNENCODED RIGHT DOUBLE QUOTE
        applicableOpts.convertApostrophes = true;

        DEV &&
          console.log(
            `2121 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertApostrophes = ${
              applicableOpts.convertApostrophes
            }`,
          );

        if (!opts.convertApostrophes) {
          applicableOpts.convertEntities = true;

          DEV &&
            console.log(
              `2131 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertEntities = ${
                applicableOpts.convertEntities
              }`,
            );
          rangesArr.push(i, y, opts.convertEntities ? `&quot;` : `"`);

          DEV &&
            console.log(
              `2139 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${y}, ${JSON.stringify(
                opts.convertEntities ? `&quot;` : `"`,
                null,
                0,
              )}]`,
            );
        } else if (opts.convertEntities) {
          applicableOpts.convertEntities = true;

          DEV &&
            console.log(
              `2150 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertEntities = ${
                applicableOpts.convertEntities
              }`,
            );
          rangesArr.push(i, y, "&rdquo;");

          DEV &&
            console.log(
              `2158 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${y}, "&rdquo;"]`,
            );
        }
      } else if (charcode === 8230) {
        // IF UNENCODED HORIZONTAL ELLIPSIS CHARACTER &hellip;
        applicableOpts.convertDotsToEllipsis = true;

        DEV &&
          console.log(
            `2167 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertDotsToEllipsis = ${
              applicableOpts.convertDotsToEllipsis
            }`,
          );

        if (!opts.convertDotsToEllipsis) {
          rangesArr.push(i, y, "...");

          DEV &&
            console.log(
              `2177 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${y}, "..."]`,
            );
        } else {
          applicableOpts.convertEntities = true;

          DEV &&
            console.log(
              `2184 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertEntities = ${
                applicableOpts.convertEntities
              }`,
            );

          if (opts.convertEntities) {
            rangesArr.push(i, y, "&hellip;");

            DEV &&
              console.log(
                `2194 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${y}, "&hellip;"]`,
              );
          }
        }
      } else if (charcode === 65279) {
        // IF BOM, '\uFEFF'
        rangesArr.push(i, y);

        DEV &&
          console.log(
            `2204 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${y}]`,
          );
      } else {
        DEV &&
          console.log(
            `2209 processCharacter.js - ${`\u001b[${90}m${`else clause leading to encode`}\u001b[${39}m`}`,
          );
        //
        //
        // ENCODE (on by default, but can be turned off)
        //
        //

        if (
          !applicableOpts.dontEncodeNonLatin &&
          doConvertEntities(str[i], true) !== doConvertEntities(str[i], false)
        ) {
          applicableOpts.dontEncodeNonLatin = true;

          DEV &&
            console.log(
              `2225 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.dontEncodeNonLatin = ${
                applicableOpts.dontEncodeNonLatin
              }`,
            );
        }

        // try to convert the current character into HTML entities.
        let convertedCharVal = doConvertEntities(
          str[i],
          opts.dontEncodeNonLatin,
        );

        DEV &&
          console.log(
            `2239 processCharacter.js - ${`\u001b[${33}m${`convertedCharVal`}\u001b[${39}m`} = ${JSON.stringify(
              convertedCharVal,
              null,
              4,
            )}`,
          );
        if (
          Object.keys(notEmailFriendly).includes(
            convertedCharVal.slice(1, convertedCharVal.length - 1),
          )
        ) {
          convertedCharVal = `&${
            notEmailFriendly[
              convertedCharVal.slice(1, convertedCharVal.length - 1)
            ]
          };`;
        }

        DEV &&
          console.log(
            `2259 processCharacter.js - ${`\u001b[${33}m${`convertedCharVal`}\u001b[${39}m`} = ${JSON.stringify(
              convertedCharVal,
              null,
              4,
            )}`,
          );
        // 2. If the result is different from the original character, this means
        // that this character needs to be encoded. We will submit this character's
        // range up for replacement.
        if (str[i] !== convertedCharVal) {
          applicableOpts.convertEntities = true;

          DEV &&
            console.log(
              `2273 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertEntities = ${
                applicableOpts.convertEntities
              }`,
            );

          if (opts.convertEntities) {
            if (convertedCharVal === "&mldr;") {
              DEV &&
                console.log(
                  `2282 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${y}, "&hellip;"]`,
                );
              rangesArr.push(i, y, "&hellip;");
            } else if (convertedCharVal !== "&apos;") {
              DEV &&
                console.log(
                  `2288 processCharacter.js - ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} [${i}, ${y}, ${convertedCharVal}]`,
                );
              rangesArr.push(i, y, convertedCharVal);
            }

            applicableOpts.convertEntities = true;

            DEV &&
              console.log(
                `2297 processCharacter.js: ${`\u001b[${32}m${`SET`}\u001b[${39}m`} applicableOpts.convertEntities = ${
                  applicableOpts.convertEntities
                }`,
              );
          }
        }
      }
    }

    if (state.onUrlCurrently && !str[i].trim()) {
      DEV &&
        console.log(
          `2309 SET ${`\u001b[${33}m${`state.onUrlCurrently`}\u001b[${39}m`} = false`,
        );
      state.onUrlCurrently = false;
    }

    //
    //
    //
    //
    //
    //
    //
  }

  DEV &&
    console.log(
      `2325 processCharacter.js - ${`\u001b[${32}m${`finally`}\u001b[${39}m`}, rangesArr = ${JSON.stringify(
        rangesArr.current(),
        null,
        4,
      )}`,
    );
}

export { processCharacter };
