// avanotonly

// rule: bad-character-interlinear-annotation-anchor
// https://www.fileformat.info/info/unicode/char/fff9/index.htm
// -----------------------------------------------------------------------------

import test from "ava";
import { Linter } from "../../dist/emlint.esm";
import deepContains from "ast-deep-contains";
import { applyFixes } from "../../t-util/util";

// -----------------------------------------------------------------------------

// 1. basic tests
test(`01.01 - detects two INTERLINEAR ANNOTATION ANCHOR characters`, t => {
  const str = "\uFFF9dlkgjld\uFFF9j";
  const linter = new Linter();
  const messages = linter.verify(str, {
    rules: {
      "bad-character-interlinear-annotation-anchor": 2
    }
  });
  deepContains(
    messages,
    [
      {
        ruleId: "bad-character-interlinear-annotation-anchor",
        severity: 2,
        idxFrom: 0,
        idxTo: 1,
        line: 1,
        column: 1, // remember columns numbers start from 1, not zero
        message: "Bad character - INTERLINEAR ANNOTATION ANCHOR.",
        fix: {
          ranges: [[0, 1]]
        }
      },
      {
        ruleId: "bad-character-interlinear-annotation-anchor",
        severity: 2,
        idxFrom: 8,
        idxTo: 9,
        line: 1,
        column: 9, // remember columns numbers start from 1, not zero
        message: "Bad character - INTERLINEAR ANNOTATION ANCHOR.",
        fix: {
          ranges: [[8, 9]]
        }
      }
    ],
    t.is,
    t.fail
  );
  t.is(applyFixes(str, messages), "dlkgjldj");
});
