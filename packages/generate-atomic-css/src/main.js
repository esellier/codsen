import { version } from "../package.json";
import { left, right, leftSeq, rightSeq } from "string-left-right";
import { prepConfig, isStr, extractFromToSource } from "./util";
const headsAndTails = {
  CONFIGHEAD: "GENERATE-ATOMIC-CSS-CONFIG-STARTS",
  CONFIGTAIL: "GENERATE-ATOMIC-CSS-CONFIG-ENDS",
  CONTENTHEAD: "GENERATE-ATOMIC-CSS-CONTENT-STARTS",
  CONTENTTAIL: "GENERATE-ATOMIC-CSS-CONTENT-ENDS"
};

function genAtomic(str, originalOpts) {
  function trimIfNeeded(str) {
    // if config and heads/tails are turned off, don't trim
    if (!opts.includeConfig && !opts.includeHeadsAndTails) {
      console.log(`015 didn't trim`);
      return str;
    }
    console.log(`018 trim`);
    return str.trim();
  }

  if (typeof str !== "string") {
    throw new Error(
      `generate-atomic-css: [THROW_ID_01] First input argument must be a string! It was given as "${JSON.stringify(
        str,
        null,
        4
      )}" (type ${typeof str})`
    );
  }

  const { CONFIGHEAD, CONFIGTAIL, CONTENTHEAD, CONTENTTAIL } = headsAndTails;
  const defaults = {
    includeConfig: true,
    includeHeadsAndTails: true,
    pad: true,
    configOverride: null,
    reportProgressFunc: null,
    reportProgressFuncFrom: 0,
    reportProgressFuncTo: 100
  };
  const generatedCount = {
    count: 0
  };

  const opts = Object.assign({}, defaults, originalOpts);
  if (opts.includeConfig && !opts.includeHeadsAndTails) {
    // opts.includeConfig is a superset feature of opts.includeHeadsAndTails
    opts.includeHeadsAndTails = true;
  }

  // quick end if there are no $$$ in the input
  if (
    (!opts.configOverride &&
      !str.includes("$$$") &&
      !str.includes(CONFIGHEAD) &&
      !str.includes(CONFIGTAIL) &&
      !str.includes(CONTENTHEAD) &&
      !str.includes(CONTENTTAIL)) ||
    (isStr(opts.configOverride) &&
      !opts.configOverride.includes("$$$") &&
      !opts.configOverride.includes(CONFIGHEAD) &&
      !opts.configOverride.includes(CONFIGTAIL) &&
      !opts.configOverride.includes(CONTENTHEAD) &&
      !opts.configOverride.includes(CONTENTTAIL))
  ) {
    console.log(`067 quick ending, no $$$ found, returning input str`);
    return {
      log: {
        count: 0
      },
      result: str
    };
  }

  // either insert the generated CSS in between placeholders or just return the
  // generated CSS
  let frontPart = "";
  let endPart = "";

  let rawContentAbove = "";
  let rawContentBelow = "";

  // find out what to generate
  let extractedConfig;
  if (opts.configOverride) {
    console.log(`087 config calc - case #1`);
    extractedConfig = opts.configOverride;
  } else if (str.includes(CONFIGHEAD) && str.includes(CONFIGTAIL)) {
    console.log(`090 config calc - case #2`);

    if (
      str.indexOf(CONFIGTAIL) !== -1 &&
      str.indexOf(CONTENTHEAD) !== -1 &&
      str.indexOf(CONFIGTAIL) > str.indexOf(CONTENTHEAD)
    ) {
      throw new Error(
        `generate-atomic-css: [THROW_ID_02] Config heads are after config tails!`
      );
    }
    let sliceFrom = str.indexOf(CONFIGHEAD) + CONFIGHEAD.length;
    let sliceTo = str.indexOf(CONFIGTAIL);
    // if there are opening CSS comments, include them:
    if (
      str[right(str, sliceFrom)] === "*" &&
      str[right(str, right(str, sliceFrom))] === "/"
    ) {
      sliceFrom = right(str, right(str, sliceFrom)) + 1;
    }
    // if there are closing CSS comments include them too:
    if (
      str[left(str, sliceTo)] === "*" &&
      str[left(str, left(str, sliceTo))] === "/"
    ) {
      sliceTo = left(str, left(str, sliceTo));
    }

    extractedConfig = str.slice(sliceFrom, sliceTo).trim();
    if (!isStr(extractedConfig) || !extractedConfig.trim().length) {
      console.log(`return empty`);
      return {
        log: {
          count: 0
        },
        result: ""
      };
    }
    console.log(`extractedConfig.trim() = "${extractedConfig.trim()}"`);
  } else if (
    str.includes(CONFIGHEAD) &&
    !str.includes(CONFIGTAIL) &&
    str.includes(CONTENTHEAD)
  ) {
    console.log(`134 config calc - case #3`);
    if (str.indexOf(CONFIGHEAD) > str.indexOf(CONTENTHEAD)) {
      throw new Error(
        `generate-atomic-css: [THROW_ID_03] Config heads are after content heads!`
      );
    }
    extractedConfig = str.slice(
      str.indexOf(CONFIGHEAD) + CONFIGHEAD.length,
      str.indexOf(CONTENTHEAD)
    );
  } else if (
    !str.includes(CONFIGHEAD) &&
    !str.includes(CONFIGTAIL) &&
    (str.includes(CONTENTHEAD) || str.includes(CONTENTTAIL))
  ) {
    // strange case where instead of config heads/tails we have content heads/tails
    console.log(`150 config calc - case #4`);
    extractedConfig = str;

    // remove content head
    if (extractedConfig.includes(CONTENTHEAD)) {
      console.log(`155 CONTENTHEAD present`);
      // if content heads are present, cut off right after the closing comment
      // if such follows, or right after heads if not
      if (left(str, extractedConfig.indexOf(CONTENTHEAD))) {
        console.log(`159`);
        let sliceTo = extractedConfig.indexOf(CONTENTHEAD);
        // if there are opening or closing comments, don't include those
        if (leftSeq(str, sliceTo, "/", "*")) {
          console.log(`163`);
          sliceTo = leftSeq(str, sliceTo, "/", "*").leftmostChar;
        }
        rawContentAbove = sliceTo === 0 ? "" : str.slice(0, sliceTo);
        console.log(
          `168 ${`\u001b[${33}m${`rawContentAbove`}\u001b[${39}m`} = ${JSON.stringify(
            rawContentAbove,
            null,
            4
          )}; ${`\u001b[${33}m${`rawContentBelow`}\u001b[${39}m`} = ${JSON.stringify(
            rawContentBelow,
            null,
            4
          )}`
        );
      }

      let sliceFrom = extractedConfig.indexOf(CONTENTHEAD) + CONTENTHEAD.length;
      console.log(
        `182 ${`\u001b[${33}m${`sliceFrom`}\u001b[${39}m`} = ${JSON.stringify(
          sliceFrom,
          null,
          4
        )}`
      );
      if (rightSeq(extractedConfig, sliceFrom - 1, "*", "/")) {
        sliceFrom =
          rightSeq(extractedConfig, sliceFrom - 1, "*", "/").rightmostChar + 1;
      }
      let sliceTo = null;

      if (str.includes(CONTENTTAIL)) {
        console.log(`195 content tail detected`);
        sliceTo = str.indexOf(CONTENTTAIL);
        console.log(
          `198 ${`\u001b[${33}m${`sliceTo`}\u001b[${39}m`} = ${JSON.stringify(
            sliceTo,
            null,
            4
          )}`
        );
        // don't include comment on the left
        if (
          str[left(str, sliceTo)] === "*" &&
          str[left(str, left(str, sliceTo))] === "/"
        ) {
          sliceTo = left(str, left(str, sliceTo));
          console.log(
            `211 ${`\u001b[${33}m${`sliceTo`}\u001b[${39}m`} = ${JSON.stringify(
              sliceTo,
              null,
              4
            )}`
          );
        }

        // is there content afterwards?
        let contentAfterStartsAt =
          str.indexOf(CONTENTTAIL) + CONTENTTAIL.length;
        console.log(
          `223 ${`\u001b[${33}m${`contentAfterStartsAt`}\u001b[${39}m`} = ${JSON.stringify(
            contentAfterStartsAt,
            null,
            4
          )}; slice: "${str.slice(contentAfterStartsAt)}"`
        );
        if (
          str[right(str, contentAfterStartsAt - 1)] === "*" &&
          str[right(str, right(str, contentAfterStartsAt - 1))] === "/"
        ) {
          contentAfterStartsAt =
            right(str, right(str, contentAfterStartsAt - 1)) + 1;
          console.log(
            `236 ${`\u001b[${33}m${`contentAfterStartsAt`}\u001b[${39}m`} = ${JSON.stringify(
              contentAfterStartsAt,
              null,
              4
            )}; slice: "${str.slice(contentAfterStartsAt)}"`
          );
          // if there are non-whitespace characters, that's rawContentBelow
        }
        if (right(str, contentAfterStartsAt)) {
          rawContentBelow = str.slice(contentAfterStartsAt);
        }
      }

      if (sliceTo) {
        extractedConfig = extractedConfig.slice(sliceFrom, sliceTo).trim();
      } else {
        extractedConfig = extractedConfig.slice(sliceFrom).trim();
      }

      console.log(
        `256 ${`\u001b[${33}m${`extractedConfig`}\u001b[${39}m`} = ${JSON.stringify(
          extractedConfig,
          null,
          4
        )}`
      );
    }

    // remove content tail
    else if (extractedConfig.includes(CONTENTTAIL)) {
      console.log(`266 CONTENTTAIL present`);

      const contentInFront = [];
      let stopFilteringAndPassAllLines = false;
      extractedConfig = extractedConfig
        .split("\n")
        .filter(rowStr => {
          if (!rowStr.includes("$$$") && !stopFilteringAndPassAllLines) {
            if (!stopFilteringAndPassAllLines) {
              contentInFront.push(rowStr);
            }
            return false;
          }
          // ... so the row contains $$$
          if (!stopFilteringAndPassAllLines) {
            stopFilteringAndPassAllLines = true;
            return true;
          }
          return true;
        })
        .join("\n");

      let sliceTo = extractedConfig.indexOf(CONTENTTAIL);

      if (leftSeq(extractedConfig, sliceTo, "/", "*")) {
        sliceTo = leftSeq(extractedConfig, sliceTo, "/", "*").leftmostChar;
      }
      extractedConfig = extractedConfig.slice(0, sliceTo).trim();

      if (contentInFront.length) {
        rawContentAbove = `${contentInFront.join("\n")}\n`;
      }

      // retrieve the content after content tails
      let contentAfterStartsAt;
      if (right(str, str.indexOf(CONTENTTAIL) + CONTENTTAIL.length)) {
        console.log(`302 content after CONTENTTAIL detected`);
        contentAfterStartsAt = str.indexOf(CONTENTTAIL) + CONTENTTAIL.length;
        if (
          str[right(str, contentAfterStartsAt)] === "*" &&
          str[right(str, right(str, contentAfterStartsAt))] === "/"
        ) {
          contentAfterStartsAt =
            right(str, right(str, contentAfterStartsAt)) + 1;
          if (right(str, contentAfterStartsAt)) {
            rawContentBelow = str.slice(contentAfterStartsAt);
          }
        }
      }
    }

    console.log(
      `318 ${`\u001b[${33}m${`rawContentAbove`}\u001b[${39}m`} = ${JSON.stringify(
        rawContentAbove,
        null,
        4
      )}; ${`\u001b[${33}m${`rawContentBelow`}\u001b[${39}m`} = ${JSON.stringify(
        rawContentBelow,
        null,
        4
      )}`
    );

    console.log(
      `330 ${`\u001b[${33}m${`extractedConfig`}\u001b[${39}m`} = ${JSON.stringify(
        extractedConfig,
        null,
        4
      )}`
    );
  } else {
    console.log(`337 config calc - case #5`);

    const contentHeadsRegex = new RegExp(
      `(\\/\\s*\\*\\s*)*${CONTENTHEAD}(\\s*\\*\\s*\\/)*`
    );
    const contentTailsRegex = new RegExp(
      `(\\/\\s*\\*\\s*)*${CONTENTTAIL}(\\s*\\*\\s*\\/)*`
    );
    let stopFiltering = false;
    const gatheredLinesAboveTopmostConfigLine = [];
    const gatheredLinesBelowLastConfigLine = [];

    // remove all lines above the first line which contains $$$

    const configLines = str.split("\n").filter(rowStr => {
      if (stopFiltering) {
        return true;
      }
      if (!rowStr.includes("$$$")) {
        gatheredLinesAboveTopmostConfigLine.push(rowStr);
        return false;
      }
      // but if it does contain $$$...
      stopFiltering = true;
      return true;
    });

    // now we need to separate any rows in the end that don't contain $$$
    for (let i = configLines.length; i--; ) {
      if (!configLines[i].includes("$$$")) {
        gatheredLinesBelowLastConfigLine.unshift(configLines.pop());
      } else {
        break;
      }
    }

    extractedConfig = configLines
      .join("\n")
      .replace(contentHeadsRegex, "")
      .replace(contentTailsRegex, "");

    if (gatheredLinesAboveTopmostConfigLine.length) {
      rawContentAbove = `${gatheredLinesAboveTopmostConfigLine.join("\n")}\n`;
    }
    if (gatheredLinesBelowLastConfigLine.length) {
      rawContentBelow = `\n${gatheredLinesBelowLastConfigLine.join("\n")}`;
    }
  }

  console.log(
    `387 ${`\u001b[${33}m${`extractedConfig`}\u001b[${39}m`}:\n"${`\u001b[${32}m${extractedConfig}\u001b[${39}m`}"\n\n\n`
  );
  console.log(
    `390 ${`\u001b[${33}m${`rawContentAbove`}\u001b[${39}m`} = ${JSON.stringify(
      rawContentAbove,
      null,
      4
    )}; ${`\u001b[${33}m${`rawContentBelow`}\u001b[${39}m`} = ${JSON.stringify(
      rawContentBelow,
      null,
      4
    )}`
  );

  if (!isStr(extractedConfig) || !extractedConfig.trim().length) {
    return {
      log: {
        count: 0
      },
      result: ""
    };
  }

  if (opts.includeConfig || opts.includeHeadsAndTails) {
    // wrap with content heads:
    frontPart = `${CONTENTHEAD} */\n`;
    if (!opts.includeConfig) {
      frontPart = `/* ${frontPart}`;
    }
    // and with content tails:
    endPart = `\n/* ${CONTENTTAIL} */`;
  }
  console.log("--------------------------------------------------");
  console.log(
    `421 ${`\u001b[${33}m${`frontPart`}\u001b[${39}m`}:\n"${frontPart}"\n\n${`\u001b[${33}m${`endPart`}\u001b[${39}m`}:\n"${endPart}"\n\n`
  );

  // tackle config
  if (opts.includeConfig) {
    frontPart = `/* ${CONFIGHEAD}\n${extractedConfig.trim()}\n${CONFIGTAIL}\n${frontPart}`;
    console.log("--------------------------------------------------");
    console.log(
      `429 ${`\u001b[${33}m${`frontPart`}\u001b[${39}m`}:\n"${frontPart}"\n\n${`\u001b[${33}m${`endPart`}\u001b[${39}m`}:\n"${endPart}"\n\n`
    );
  }

  console.log(
    `434 ${`\u001b[${33}m${`rawContentAbove`}\u001b[${39}m`} = ${JSON.stringify(
      rawContentAbove,
      null,
      4
    )}; ${`\u001b[${33}m${`rawContentBelow`}\u001b[${39}m`} = ${JSON.stringify(
      rawContentBelow,
      null,
      4
    )}`
  );

  // maybe there was some content above?
  if (str.includes(CONFIGHEAD)) {
    if (left(str, str.indexOf(CONFIGHEAD))) {
      console.log(`448 content in front of config head detected`);
      // in normal cases, content should be between opening CSS comment +
      // CONFIGHEAD and CONFIGTAIL + closing CSS comment, we just have to mind
      // the whitespace
      let sliceUpTo = str.indexOf(CONFIGHEAD);
      console.log(
        `454 ${`\u001b[${33}m${`sliceUpTo`}\u001b[${39}m`} = ${JSON.stringify(
          sliceUpTo,
          null,
          4
        )}`
      );
      if (
        str[left(str, sliceUpTo)] === "*" &&
        str[left(str, left(str, sliceUpTo))] === "/"
      ) {
        sliceUpTo = left(str, left(str, sliceUpTo));
        console.log(
          `466 new ${`\u001b[${33}m${`sliceUpTo`}\u001b[${39}m`} = ${JSON.stringify(
            sliceUpTo,
            null,
            4
          )}`
        );
      }
      frontPart = `${str.slice(0, sliceUpTo)}${
        str[right(str, sliceUpTo - 1)] === "/" &&
        str[right(str, right(str, sliceUpTo - 1))] === "*"
          ? ""
          : "/* "
      }${frontPart}`;

      console.log(
        `481 ${`\u001b[${32}m${`██`}\u001b[${39}m`} new ${`\u001b[${33}m${`frontPart`}\u001b[${39}m`} = ${JSON.stringify(
          frontPart,
          null,
          4
        )}`
      );
    }
  }

  if (
    str.includes(CONFIGTAIL) &&
    right(str, str.indexOf(CONFIGTAIL) + CONFIGTAIL.length)
  ) {
    console.log(`494 config tails detected`);
    // extract content that follows CONFIGTAIL:
    let sliceFrom = str.indexOf(CONFIGTAIL) + CONFIGTAIL.length;
    console.log(
      `498 ${`\u001b[${33}m${`sliceFrom`}\u001b[${39}m`} = ${JSON.stringify(
        sliceFrom,
        null,
        4
      )}`
    );
    // include closing comment:
    if (
      str[right(str, str.indexOf(CONFIGTAIL) + CONFIGTAIL.length)] === "*" &&
      str[
        right(str, right(str, str.indexOf(CONFIGTAIL) + CONFIGTAIL.length))
      ] === "/"
    ) {
      sliceFrom =
        right(str, right(str, str.indexOf(CONFIGTAIL) + CONFIGTAIL.length)) + 1;
      console.log(
        `514 closing comment included, ${`\u001b[${33}m${`sliceFrom`}\u001b[${39}m`} now = ${sliceFrom}`
      );
    }

    // in clean code case, opening head of content follows so let's check for it
    if (str.slice(right(str, sliceFrom - 1)).startsWith(CONTENTHEAD)) {
      const contentHeadsStartAt = right(str, sliceFrom);
      sliceFrom = contentHeadsStartAt + CONTENTHEAD.length;
      console.log(
        `523 content head detected, starts at ${contentHeadsStartAt}; sliceFrom = ${sliceFrom}`
      );
      if (
        str[right(str, sliceFrom - 1)] === "*" &&
        str[right(str, right(str, sliceFrom - 1))] === "/"
      ) {
        sliceFrom = right(str, right(str, sliceFrom - 1)) + 1;
        console.log(`530 sliceFrom = ${sliceFrom}`);
      }

      // if CONTENTTAIL exists, jump over all the content
      if (str.includes(CONTENTTAIL)) {
        console.log(`535 content tail detected`);
        sliceFrom = str.indexOf(CONTENTTAIL) + CONTENTTAIL.length;

        // tackle any closing comment that follows:
        if (
          str[right(str, sliceFrom)] === "*" &&
          str[right(str, right(str, sliceFrom))] === "/"
        ) {
          console.log(`543 closing comment detected`);
          sliceFrom = right(str, right(str, sliceFrom)) + 1;
        }
      }
    }

    console.log(
      `550 ${`\u001b[${32}m${`sliceFrom`}\u001b[${39}m`} = ${sliceFrom}`
    );
    endPart = `${endPart}${
      str[sliceFrom] && right(str, sliceFrom - 1) ? str.slice(sliceFrom) : ""
    }`;
  }
  console.log(
    `557 ${`\u001b[${33}m${`frontPart`}\u001b[${39}m`}:\n"${frontPart}"\n\n${`\u001b[${33}m${`endPart`}\u001b[${39}m`}:\n"${endPart}"\n\n`
  );

  console.log(
    `561 ${`\u001b[${33}m${`rawContentAbove`}\u001b[${39}m`} = ${JSON.stringify(
      rawContentAbove,
      null,
      4
    )}; ${`\u001b[${33}m${`rawContentBelow`}\u001b[${39}m`} = ${JSON.stringify(
      rawContentBelow,
      null,
      4
    )}`
  );

  if (isStr(rawContentAbove)) {
    console.log(`573 tackle pending rawContentAbove`);

    frontPart = `${rawContentAbove}${frontPart}`;
    console.log("--------------------------------------------------");
    console.log(
      `578 ${`\u001b[${33}m${`frontPart`}\u001b[${39}m`}:\n"${frontPart}"\n\n${`\u001b[${33}m${`endPart`}\u001b[${39}m`}:\n"${endPart}"\n\n`
    );
  }

  if (isStr(rawContentBelow)) {
    console.log(
      `584 tackle ${`\u001b[${33}m${`rawContentBelow`}\u001b[${39}m`} = ${JSON.stringify(
        rawContentBelow,
        null,
        4
      )}`
    );
    // precaution if rawContentBelow ends but not starts with CSS comment
    if (
      rawContentBelow.trim().endsWith("/*") &&
      !rawContentBelow.trim().startsWith("*/")
    ) {
      console.log(`595 add opening CSS comment block to rawContentBelow`);
      // but leave leading whitespace intact
      let frontPart = "";
      if (
        isStr(rawContentBelow) &&
        rawContentBelow[0] &&
        !rawContentBelow[0].trim().length
      ) {
        frontPart = rawContentBelow.slice(0, right(rawContentBelow, 0));
        console.log(
          `605 ${`\u001b[${33}m${`frontPart`}\u001b[${39}m`} = ${JSON.stringify(
            frontPart,
            null,
            4
          )}`
        );
      }
      rawContentBelow = `${frontPart}/* ${rawContentBelow.trim()}`;
    }

    endPart = `${endPart}${rawContentBelow}`;
    console.log("--------------------------------------------------");

    console.log(
      `619 ${`\u001b[${33}m${`frontPart`}\u001b[${39}m`}:\n"${frontPart}"\n\n${`\u001b[${33}m${`endPart`}\u001b[${39}m`}:\n"${endPart}"\n\n`
    );
  }

  console.log("--------------------------------------------------");
  console.log(
    `625 FINAL ${`\u001b[${33}m${`frontPart`}\u001b[${39}m`}:\n"${frontPart}"\n\n${`\u001b[${33}m${`endPart`}\u001b[${39}m`}:\n"${endPart}"\n\n`
  );

  const finalRes = `${trimIfNeeded(
    `${frontPart}${prepConfig(
      extractedConfig,
      opts.reportProgressFunc,
      opts.reportProgressFuncFrom,
      opts.reportProgressFuncTo,
      true, // opts.includeConfig || opts.includeHeadsAndTails
      generatedCount,
      opts.pad
    )}${endPart}`
  )}\n`;

  console.log("\n\n\n");
  console.log(
    `642 FINAL RES:
${`\u001b[${36}m${`███████████████████████████████████████`}\u001b[${39}m`}
${finalRes}
${`\u001b[${36}m${`███████████████████████████████████████`}\u001b[${39}m`}

`
  );

  return {
    log: { count: generatedCount.count },
    result: finalRes
  };
}

export { genAtomic, version, headsAndTails, extractFromToSource };
