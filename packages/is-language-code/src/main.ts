import { version as v } from "../package.json";
import { includes } from "codsen-utils";
import languageJson from "./tag_language.json";
import extlangJson from "./tag_extlang.json";
import grandfatheredJson from "./tag_grandfathered.json";
// import redundant from "./tag_redundant.json";
import regionJson from "./tag_region.json";
import scriptJson from "./tag_script.json";
import variantJson from "./tag_variant.json";

const version: string = v;

declare let DEV: boolean;
// import ranged from "./tag_ranged.json";

type Res =
  | {
      res: true;
      message: null;
    }
  | {
      res: false;
      message: string;
    };

function isLangCode(str: string): Res {
  if (typeof str !== "string") {
    return {
      res: false,
      message: `Not a string given.`,
    };
  }
  if (!str.trim()) {
    return {
      res: false,
      message: `Empty language tag string given.`,
    };
  }

  // -----------------------------------------------------------------------------

  let language: (string | RegExp)[] | undefined = languageJson;
  let extlang: string[] | undefined = extlangJson;
  let grandfathered: string[] | undefined = grandfatheredJson;
  let region: (string | RegExp)[] | undefined = regionJson;
  let script: (string | RegExp)[] | undefined = scriptJson;
  let variant: string[] | undefined = variantJson;

  // track repeated variant subtags
  let variantGathered: string[] | undefined = [];
  let singletonGathered: string[] | undefined = [];

  // -----------------------------------------------------------------------------

  // https://www.ietf.org/rfc/rfc1766.txt
  // https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
  // ---------------------------------------------------------------------------

  // r1. very rough regex to ensure letters are separated with dashes, in chunks
  // of up to eight characters
  let r1 = /^[a-z0-9]{1,8}(-[a-z0-9]{1,8})*$/gi;

  // r2. subtags qaa..qtz - "language" subtag
  let r2 = /^q[a-t][a-z]$/gi;
  language.push(r2);

  // r3. subtags Qaaa..Qabx - "script" subtag
  let r3 = /^qa[a-b][a-x]$/gi;
  script.push(r3);

  // r4. subtags qm..qz - "region" subtag
  let r4 = /^q[m-z]$/gi;
  region.push(r4);

  // r5. subtags xa..xz - "region" subtag
  let r5 = /^x[a-z]$/gi;
  region.push(r5);

  // 6. singleton
  let singletonRegex = /^[0-9a-wy-z]$/gi;
  // the "x" is reserved for private use, that is, singletons can't be "...-x-..."

  // AA and ZZ

  // ---------------------------------------------------------------------------

  // preliminary validation using R1 - if chunks are not letters/numbers,
  // separated with dashes, its' an instant "false"

  if (!str.match(r1)) {
    DEV &&
      console.log(
        `093 isLangCode(): ${`\u001b[${31}m${`R1`}\u001b[${39}m`} failed`,
      );

    // wipe all arrays:
    language = undefined;
    extlang = undefined;
    grandfathered = undefined;
    region = undefined;
    script = undefined;
    variant = undefined;
    variantGathered = undefined;
    singletonGathered = undefined;

    // return
    return { res: false, message: `Does not resemble a language tag.` };
  }

  // grandfathered tags are evaluated as whole
  if (includes(grandfathered, str)) {
    DEV &&
      console.log(
        `114 ${`\u001b[${32}m${`MATCHED`}\u001b[${39}m`} grandfathered tag`,
      );

    // wipe all arrays:
    language = undefined;
    extlang = undefined;
    grandfathered = undefined;
    region = undefined;
    script = undefined;
    variant = undefined;
    variantGathered = undefined;
    singletonGathered = undefined;

    // return
    return { res: true, message: null };
  }

  // if by now program is still going, value is process-able:
  // language tags are case-insensitive, "there exist
  // conventions for the capitalization of some of the subtags, but these
  // MUST NOT be taken to carry meaning" (https://tools.ietf.org/html/rfc5646)
  let split: string[] | undefined = str.toLowerCase().split("-");
  DEV &&
    console.log(
      `138 isLangCode(): ${`\u001b[${32}m${`THE SPLIT`}\u001b[${39}m`} ${`\u001b[${33}m${`split`}\u001b[${39}m`} = ${JSON.stringify(
        split,
        null,
        4,
      )}`,
    );

  let type; // private|normal - used as a "global" marker among rules, when iterating

  // will help to enforce the sequence:
  let languageMatched: string | undefined;
  let scriptMatched: string | undefined;
  let regionMatched: string | undefined;
  let variantMatched: string | undefined;
  let extlangMatched: string | undefined;

  // the plan: we split by dash ("-") and get array. We iterate it and each
  // time variable "ok" is set to "true" by some logic rules OR if end of
  // an item is reached, function returns failure result.
  let allOK;

  // iterate through every chunk:
  DEV && console.log("isLangCode() loop");
  for (let i = 0, len = split.length; i < len; i++) {
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //                              TOP CLAUSES
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    // frontal logging
    DEV &&
      console.log(
        `${`\u001b[${36}m${`------------------------------------`}\u001b[${39}m`} split[${`\u001b[${35}m${i}\u001b[${39}m`}] = ${`\u001b[${35}m${
          split[i]
        }\u001b[${39}m`} ${`\u001b[${36}m${`------------------------------------`}\u001b[${39}m`}`,
      );

    // on each iteration, reset allOK
    allOK = false;
    // if it stays false to the end of all the processing of this
    // iteration, it means this chunk was not validated and whole
    // result will be "false"

    // set type
    if (i === 0) {
      type = split[0] === "x" ? "private" : "normal";
    }

    if (split[i] === "x") {
      if (!split[i + 1]) {
        DEV &&
          console.log(`206 ${`\u001b[${31}m${`RETURN`}\u001b[${39}m`} false`);

        // wipe all arrays:
        language = undefined;
        extlang = undefined;
        grandfathered = undefined;
        region = undefined;
        script = undefined;
        variant = undefined;
        variantGathered = undefined;
        singletonGathered = undefined;
        split = undefined;

        // return
        return {
          res: false,
          message: `Ends with private use subtag, "x".`,
        };
      }

      DEV &&
        console.log(
          `228 PRIVATE SUBTAG DETECTED, skipping checks for subsequent subtags`,
        );
      DEV && console.log(`230 ${`\u001b[${32}m${`RETURN`}\u001b[${39}m`} true`);
      // TODO - add more logic

      // wipe all arrays:
      language = undefined;
      extlang = undefined;
      grandfathered = undefined;
      region = undefined;
      script = undefined;
      variant = undefined;
      variantGathered = undefined;
      singletonGathered = undefined;
      split = undefined;

      // return
      return { res: true, message: null };
    }

    // catch multiple recognised region tags
    if (regionMatched && region.includes(split[i])) {
      DEV && console.log(`250 multiple recognised region subtags`);
      DEV &&
        console.log(`252 ${`\u001b[${31}m${`RETURN`}\u001b[${39}m`} false`);

      let message = `Two region subtags, "${regionMatched}" and "${split[i]}".`;

      // wipe all arrays:
      language = undefined;
      extlang = undefined;
      grandfathered = undefined;
      region = undefined;
      script = undefined;
      variant = undefined;
      variantGathered = undefined;
      singletonGathered = undefined;
      split = undefined;

      // return
      return {
        res: false,
        message,
      };
    }

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //                              MIDDLE CLAUSES
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    // validate the first element
    if (i === 0) {
      DEV && console.log(`298 isLangCode(): first element, LANGUAGE, clauses`);

      DEV &&
        console.log(
          `302 isLangCode(): ${`\u001b[${33}m${`split[0]`}\u001b[${39}m`} = ${JSON.stringify(
            split[0],
            null,
            4,
          )}`,
        );

      if (type === "normal") {
        // validate
        if (includes(language, split[i])) {
          DEV &&
            console.log(
              `314 ${`\u001b[${32}m${`MATCHED`}\u001b[${39}m`} ${`\u001b[${36}m${`language`}\u001b[${39}m`} subtag`,
            );

          languageMatched = split[i];
          DEV &&
            console.log(
              `320 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`languageMatched`}\u001b[${39}m`} = ${languageMatched}`,
            );

          allOK = true;
          DEV &&
            console.log(
              `326 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`allOK`}\u001b[${39}m`} = ${allOK}`,
            );
        } else {
          DEV &&
            console.log(
              `331 ${`\u001b[${31}m${`language subtag not recognised`}\u001b[${39}m`} - ${`\u001b[${31}m${`allOK not set`}\u001b[${39}m`}`,
            );
        }
      }
    } else if (i === 1) {
      DEV &&
        console.log(
          `338 isLangCode(): second element, either EXTENSION or SCRIPT, clauses`,
        );
      // validate
      if (type === "normal") {
        if (includes(script, split[i])) {
          DEV &&
            console.log(
              `345 ${`\u001b[${32}m${`MATCHED`}\u001b[${39}m`} ${`\u001b[${36}m${`script`}\u001b[${39}m`} subtag`,
            );

          scriptMatched = split[i];
          DEV &&
            console.log(
              `351 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`scriptMatched`}\u001b[${39}m`} = ${scriptMatched}`,
            );

          allOK = true;
          DEV &&
            console.log(
              `357 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`allOK`}\u001b[${39}m`} = ${allOK}`,
            );
        } else if (includes(extlang, split[i])) {
          DEV &&
            console.log(
              `362 ${`\u001b[${32}m${`MATCHED`}\u001b[${39}m`} ${`\u001b[${36}m${`extlang`}\u001b[${39}m`} subtag`,
            );

          extlangMatched = split[i];
          DEV &&
            console.log(
              `368 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`extlangMatched`}\u001b[${39}m`} = ${extlangMatched}`,
            );

          allOK = true;
          DEV &&
            console.log(
              `374 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`allOK`}\u001b[${39}m`} = ${allOK}`,
            );
        } else if (includes(region, split[i])) {
          DEV &&
            console.log(
              `379 ${`\u001b[${32}m${`MATCHED`}\u001b[${39}m`} ${`\u001b[${36}m${`region`}\u001b[${39}m`} subtag`,
            );

          regionMatched = split[i];
          DEV &&
            console.log(
              `385 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`regionMatched`}\u001b[${39}m`} = ${regionMatched}`,
            );

          allOK = true;
          DEV &&
            console.log(
              `391 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`allOK`}\u001b[${39}m`} = ${allOK}`,
            );
        } else if (includes(variant, split[i])) {
          DEV &&
            console.log(
              `396 ${`\u001b[${32}m${`MATCHED`}\u001b[${39}m`} ${`\u001b[${36}m${`variant`}\u001b[${39}m`} subtag`,
            );

          variantMatched = split[i];
          DEV &&
            console.log(
              `402 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`variantMatched`}\u001b[${39}m`} = ${variantMatched}`,
            );

          allOK = true;
          DEV &&
            console.log(
              `408 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`allOK`}\u001b[${39}m`} = ${allOK}`,
            );

          if (!variantGathered.includes(split[i])) {
            variantGathered.push(split[i]);
          } else {
            DEV && console.log(`414 ERROR! Repeated variant!`);
            DEV &&
              console.log(
                `417 ${`\u001b[${31}m${`RETURN`}\u001b[${39}m`} false`,
              );

            let message = `Repeated variant subtag, "${split[i]}".`;

            // wipe all arrays:
            language = undefined;
            extlang = undefined;
            grandfathered = undefined;
            region = undefined;
            script = undefined;
            variant = undefined;
            variantGathered = undefined;
            singletonGathered = undefined;
            split = undefined;

            // return
            return {
              res: false,
              message,
            };
          }
        } else {
          // neither extlang nor script
          DEV &&
            console.log(
              `443 ${`\u001b[${31}m${`script subtag not recognised`}\u001b[${39}m`}`,
            );
        }
      }
      //
    } else if (i === 2) {
      if (type === "normal") {
        // at position 3, it's either:
        // * script (language-extlang-script-region)
        // * region (language-script-region)
        // * variant (language-region-variant)
        // * region (language-extlang-region)
        if (languageMatched && extlangMatched) {
          // similar to language-extlang-script-region
          DEV && console.log(`457 inside language + extlang matched`);

          // match script
          if (includes(script, split[i])) {
            DEV &&
              console.log(
                `463 ${`\u001b[${32}m${`MATCHED`}\u001b[${39}m`} ${`\u001b[${36}m${`script`}\u001b[${39}m`} subtag`,
              );

            scriptMatched = split[i];
            DEV &&
              console.log(
                `469 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`scriptMatched`}\u001b[${39}m`} = ${scriptMatched}`,
              );

            allOK = true;
            DEV &&
              console.log(
                `475 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`allOK`}\u001b[${39}m`} = ${allOK}`,
              );
          } else if (includes(region, split[i])) {
            // language-extlang-region
            // match region
            DEV &&
              console.log(
                `482 ${`\u001b[${32}m${`MATCHED`}\u001b[${39}m`} ${`\u001b[${36}m${`region`}\u001b[${39}m`} subtag`,
              );

            regionMatched = split[i];
            DEV &&
              console.log(
                `488 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`regionMatched`}\u001b[${39}m`} = ${regionMatched}`,
              );

            allOK = true;
            DEV &&
              console.log(
                `494 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`allOK`}\u001b[${39}m`} = ${allOK}`,
              );
          }
        } else if (languageMatched && scriptMatched) {
          // similar to language-script-region
          DEV && console.log(`499 inside language + script matched`);

          // match region
          if (includes(region, split[i])) {
            DEV &&
              console.log(
                `505 ${`\u001b[${32}m${`MATCHED`}\u001b[${39}m`} ${`\u001b[${36}m${`region`}\u001b[${39}m`} subtag`,
              );

            regionMatched = split[i];
            DEV &&
              console.log(
                `511 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`regionMatched`}\u001b[${39}m`} = ${regionMatched}`,
              );

            allOK = true;
            DEV &&
              console.log(
                `517 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`allOK`}\u001b[${39}m`} = ${allOK}`,
              );
          }
        } else if (languageMatched && regionMatched) {
          // language-region-variant
          DEV && console.log(`522 inside language + region matched`);

          // similar to de-CH-1901 or ca-ES-VALENCIA

          // match variant
          if (includes(variant, split[i])) {
            DEV &&
              console.log(
                `530 ${`\u001b[${32}m${`MATCHED`}\u001b[${39}m`} ${`\u001b[${36}m${`variant`}\u001b[${39}m`} subtag`,
              );

            variantMatched = split[i];
            DEV &&
              console.log(
                `536 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`variantMatched`}\u001b[${39}m`} = ${variantMatched}`,
              );

            allOK = true;
            DEV &&
              console.log(
                `542 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`allOK`}\u001b[${39}m`} = ${allOK}`,
              );

            if (!variantGathered.includes(split[i])) {
              variantGathered.push(split[i]);
            } else {
              DEV && console.log(`548 ERROR! Repeated variant!`);
              DEV &&
                console.log(
                  `551 ${`\u001b[${31}m${`RETURN`}\u001b[${39}m`} false`,
                );

              let message = `Repeated variant subtag, "${split[i]}".`;

              // wipe all arrays:
              language = undefined;
              extlang = undefined;
              grandfathered = undefined;
              region = undefined;
              script = undefined;
              variant = undefined;
              variantGathered = undefined;
              singletonGathered = undefined;
              split = undefined;

              // return
              return {
                res: false,
                message,
              };
            }
          }
        }
      }
    } else if (i === 3) {
      if (type === "normal") {
        // at position 4, it's either:
        // * region (language-extlang-script-region)
        // * variant (language-script-region-variant)
        if (languageMatched && extlangMatched && scriptMatched) {
          // match region
          if (includes(region, split[i])) {
            DEV &&
              console.log(
                `586 ${`\u001b[${32}m${`MATCHED`}\u001b[${39}m`} ${`\u001b[${36}m${`region`}\u001b[${39}m`} subtag`,
              );

            regionMatched = split[i];
            DEV &&
              console.log(
                `592 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`regionMatched`}\u001b[${39}m`} = ${regionMatched}`,
              );

            allOK = true;
            DEV &&
              console.log(
                `598 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`allOK`}\u001b[${39}m`} = ${allOK}`,
              );
          }
        } else if (languageMatched && scriptMatched && regionMatched) {
          // match variant
          if (includes(variant, split[i])) {
            DEV &&
              console.log(
                `606 ${`\u001b[${32}m${`MATCHED`}\u001b[${39}m`} ${`\u001b[${36}m${`variant`}\u001b[${39}m`} subtag`,
              );

            variantMatched = split[i];
            DEV &&
              console.log(
                `612 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`variantMatched`}\u001b[${39}m`} = ${variantMatched}`,
              );

            allOK = true;
            DEV &&
              console.log(
                `618 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`allOK`}\u001b[${39}m`} = ${allOK}`,
              );
          }
        }
      }
    }

    DEV && console.log(`625 non-positional clauses`);

    //
    //
    //
    //
    //         NON-POSITIONAL CLAUSES
    //
    //
    //
    //

    // catch the singleton-extension
    if (split[i].match(singletonRegex)) {
      if (i === 0) {
        DEV && console.log(`640 starts with singleton!`);

        let message = `Starts with singleton, "${split[i]}".`;

        // wipe all arrays:
        language = undefined;
        extlang = undefined;
        grandfathered = undefined;
        region = undefined;
        script = undefined;
        variant = undefined;
        variantGathered = undefined;
        singletonGathered = undefined;
        split = undefined;

        // return
        return {
          res: false,
          message,
        };
      }
      // ELSE - continue the checks
      DEV && console.log(`662 continue checks`);
      if (!languageMatched) {
        DEV &&
          console.log(`665 ${`\u001b[${31}m${`RETURN`}\u001b[${39}m`} false`);

        // wipe all arrays:
        language = undefined;
        extlang = undefined;
        grandfathered = undefined;
        region = undefined;
        script = undefined;
        variant = undefined;
        variantGathered = undefined;
        singletonGathered = undefined;
        split = undefined;

        // return
        return {
          res: false,
          message: `Extension must follow at least a primary language subtag.`,
        };
      }
      if (!singletonGathered.includes(split[i])) {
        DEV &&
          console.log(
            `687 ${`\u001b[${32}m${`PUSH`}\u001b[${39}m`} ${split[i]}`,
          );
        singletonGathered.push(split[i]);
        DEV &&
          console.log(
            `692 ${`\u001b[${32}m${`NOW`}\u001b[${39}m`} ${`\u001b[${33}m${`singletonGathered`}\u001b[${39}m`} = ${JSON.stringify(
              singletonGathered,
              null,
              4,
            )}`,
          );
      } else {
        DEV &&
          console.log(`700 ${`\u001b[${31}m${`RETURN`}\u001b[${39}m`} false`);

        let message = `Two extensions with same single-letter prefix "${split[i]}".`;

        // wipe all arrays:
        language = undefined;
        extlang = undefined;
        grandfathered = undefined;
        region = undefined;
        script = undefined;
        variant = undefined;
        variantGathered = undefined;
        singletonGathered = undefined;
        split = undefined;

        // return
        return {
          res: false,
          message,
        };
      }

      if (split[i + 1]) {
        DEV && console.log(`723`);
        DEV &&
          console.log(
            `726 split[i + 1].match(singletonRegex) = ${split[i + 1].match(
              singletonRegex,
            )}`,
          );
        if (!split[i + 1].match(singletonRegex)) {
          allOK = true;
          extlangMatched = split[i];
          DEV &&
            console.log(
              `735 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`allOK`}\u001b[${39}m`} = ${allOK}; ${`\u001b[${33}m${`extlangMatched`}\u001b[${39}m`} = ${extlangMatched}`,
            );
          i += 1;
          DEV && console.log(`738 SET i++, now i = ${i}; then CONTINUE`);
          continue;
        } else {
          DEV && console.log(`741 singleton sequence caught`);
          DEV &&
            console.log(`743 ${`\u001b[${31}m${`RETURN`}\u001b[${39}m`} false`);

          let message = `Multiple singleton sequence "${split[i]}", "${
            split[i + 1]
          }".`;

          // wipe all arrays:
          language = undefined;
          extlang = undefined;
          grandfathered = undefined;
          region = undefined;
          script = undefined;
          variant = undefined;
          variantGathered = undefined;
          singletonGathered = undefined;
          split = undefined;

          // return
          return {
            res: false,
            message,
          };
        }
      } else {
        DEV &&
          console.log(`768 ${`\u001b[${31}m${`RETURN`}\u001b[${39}m`} false`);

        let message = `Ends with singleton, "${split[i]}".`;

        // wipe all arrays:
        language = undefined;
        extlang = undefined;
        grandfathered = undefined;
        region = undefined;
        script = undefined;
        variant = undefined;
        variantGathered = undefined;
        singletonGathered = undefined;
        split = undefined;

        // return
        return {
          res: false,
          message,
        };
      }
    }

    // catch the sequence of variant chunks
    if (!allOK && variantMatched && includes(variant, split[i])) {
      DEV &&
        console.log(
          `795 ${`\u001b[${32}m${`MATCHED`}\u001b[${39}m`} ${`\u001b[${36}m${`variant`}\u001b[${39}m`} subtag`,
        );

      if (i && includes(variant, split[i - 1])) {
        DEV && console.log(`799 variant subtag in front of this confirmed`);

        if (!variantGathered.includes(split[i])) {
          variantGathered.push(split[i]);
        } else {
          DEV && console.log(`804 ERROR! Repeated variant!`);
          DEV &&
            console.log(`806 ${`\u001b[${31}m${`RETURN`}\u001b[${39}m`} false`);

          let message = `Repeated variant subtag, "${split[i]}".`;

          // wipe all arrays:
          language = undefined;
          extlang = undefined;
          grandfathered = undefined;
          region = undefined;
          script = undefined;
          variant = undefined;
          variantGathered = undefined;
          singletonGathered = undefined;
          split = undefined;

          // return
          return {
            res: false,
            message,
          };
        }

        allOK = true;
        DEV &&
          console.log(
            `831 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`allOK`}\u001b[${39}m`} = ${allOK}`,
          );
      } else {
        DEV &&
          console.log(
            `836 ${`\u001b[${31}m${`multiple variant subtags must be consecutive!`}\u001b[${39}m`}`,
          );
        variantGathered.push(split[i]);
        DEV &&
          console.log(`840 ${`\u001b[${31}m${`RETURN`}\u001b[${39}m`} false`);

        let message = `Variant subtags ${variantGathered
          .map((val) => `"${val}"`)
          .join(", ")}  not in a sequence.`;

        // wipe all arrays:
        language = undefined;
        extlang = undefined;
        grandfathered = undefined;
        region = undefined;
        script = undefined;
        variant = undefined;
        variantGathered = undefined;
        singletonGathered = undefined;
        split = undefined;

        // return
        return {
          res: false,
          message,
        };
      }
    }

    // catch repeated subtags
    if (!allOK && languageMatched && extlangMatched) {
      if (split[i].length > 1) {
        DEV &&
          console.log(
            `870 ${`\u001b[${32}m${`SET`}\u001b[${39}m`} ${`\u001b[${33}m${`allOK`}\u001b[${39}m`} = ${allOK}`,
          );
        allOK = true;
      }
    }

    DEV && console.log(`876`);

    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //                            BOTTOM CLAUSES
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //

    if (!allOK) {
      DEV && console.log(`901 bottom reached, ${split[i]} was not matched!`);
      DEV &&
        console.log(`903 ${`\u001b[${31}m${`RETURN`}\u001b[${39}m`} false`);

      let message = `Unrecognised language subtag, "${split[i]}".`;

      // wipe all arrays:
      language = undefined;
      extlang = undefined;
      grandfathered = undefined;
      region = undefined;
      script = undefined;
      variant = undefined;
      variantGathered = undefined;
      singletonGathered = undefined;
      split = undefined;

      // return
      return {
        res: false,
        message,
      };
    }

    // logging
    DEV && console.log(`${`\u001b[${90}m${`██`}\u001b[${39}m`}`);
    DEV &&
      console.log(
        `${`\u001b[${90}m${`languageMatched =`}\u001b[${39}m`} ${`\u001b[${
          languageMatched ? 32 : 31
        }m${languageMatched}\u001b[${39}m`}`,
      );
    DEV &&
      console.log(
        `${`\u001b[${90}m${`scriptMatched =`}\u001b[${39}m`} ${`\u001b[${
          scriptMatched ? 32 : 31
        }m${scriptMatched}\u001b[${39}m`}`,
      );
    DEV &&
      console.log(
        `${`\u001b[${90}m${`regionMatched =`}\u001b[${39}m`} ${`\u001b[${
          regionMatched ? 32 : 31
        }m${regionMatched}\u001b[${39}m`}`,
      );
    DEV &&
      console.log(
        `${`\u001b[${90}m${`variantMatched =`}\u001b[${39}m`} ${`\u001b[${
          variantMatched ? 32 : 31
        }m${variantMatched}\u001b[${39}m`}`,
      );
    DEV &&
      console.log(
        `${`\u001b[${90}m${`extlangMatched =`}\u001b[${39}m`} ${`\u001b[${
          extlangMatched ? 32 : 31
        }m${extlangMatched}\u001b[${39}m`}`,
      );
    DEV && console.log(`${`\u001b[${90}m${`-`}\u001b[${39}m`}`);
    DEV &&
      console.log(
        `${`\u001b[${90}m${`variantGathered = ${JSON.stringify(
          variantGathered,
          null,
          4,
        )}`}\u001b[${39}m`} `,
      );
  }

  DEV && console.log(`968 end reached`);

  // ---------------------------------------------------------------------------

  // default answer is true, but we'll make
  // hell of a check obstacles to reach this point

  DEV && console.log(`975 ${`\u001b[${32}m${`RETURN`}\u001b[${39}m`} true`);

  // wipe all arrays:
  language = undefined;
  extlang = undefined;
  grandfathered = undefined;
  region = undefined;
  script = undefined;
  variant = undefined;
  variantGathered = undefined;
  singletonGathered = undefined;
  split = undefined;

  // return
  return { res: true, message: null };
}

export { isLangCode, version };
