const t = require("tap");
const fixRowNums = require("../dist/js-row-num.cjs");
const BACKSLASH = `\u005C`;
// we need to escape to prevent accidental "fixing" of this file through
// build scripts
const letterC = "\x63";

// -----------------------------------------------------------------------------
// group 01. no throws
// -----------------------------------------------------------------------------

t.test(`01.01 - wrong input is just being returned`, t => {
  t.doesNotThrow(() => {
    fixRowNums();
  });
  t.doesNotThrow(() => {
    fixRowNums(1);
  });
  t.doesNotThrow(() => {
    fixRowNums(``);
  });
  t.doesNotThrow(() => {
    fixRowNums(null);
  });
  t.doesNotThrow(() => {
    fixRowNums(undefined);
  });
  t.doesNotThrow(() => {
    fixRowNums(true);
  });
  t.doesNotThrow(() => {
    fixRowNums({});
  });
  t.end();
});

// -----------------------------------------------------------------------------
// 02. normal use
// -----------------------------------------------------------------------------

t.test(`02.01 - single straight quotes - no whitespace`, t => {
  t.is(
    fixRowNums(`
zzz
zzz
zzz
${letterC}onsole.log('099 something')
${letterC}onsole.log('1 something')
`),
    `
zzz
zzz
zzz
${letterC}onsole.log('005 something')
${letterC}onsole.log('006 something')
`
  );
  t.end();
});

t.test(`02.02 - single straight quotes - with whitespace`, t => {
  t.is(
    fixRowNums(`
zzz
zzz
zzz
${letterC}onsole.log ( ' 099 456 something 123 ')
${letterC}onsole.log('----\n\n\n1 something')
`),
    `
zzz
zzz
zzz
${letterC}onsole.log ( ' 005 456 something 123 ')
${letterC}onsole.log('----\n\n\n009 something')
`
  );
  t.end();
});

t.test(`02.03 - single straight quotes - tight, no semicolon`, t => {
  t.is(
    fixRowNums(`
zzz
zzz
zzz
${letterC}onsole.log('099 something')${letterC}onsole.log('1 something')
`),
    `
zzz
zzz
zzz
${letterC}onsole.log('005 something')${letterC}onsole.log('005 something')
`
  );
  t.end();
});

t.test(`02.04 - double quotes - tight`, t => {
  t.is(
    fixRowNums(`
zzz
zzz
zzz
${letterC}onsole.log("099 123 something 456")${letterC}onsole.log("----0 something")${letterC}onsole.log("---- something")
`),
    `
zzz
zzz
zzz
${letterC}onsole.log("005 123 something 456")${letterC}onsole.log("----005 something")${letterC}onsole.log("---- something")
`
  );
  t.end();
});

t.test(`02.05 - double quotes - newlines`, t => {
  t.is(
    fixRowNums(`
zzz
zzz
zzz
${letterC}onsole.log("099 123 something 456")${letterC}onsole.log("----\n\n\n0 something")
`),
    `
zzz
zzz
zzz
${letterC}onsole.log("005 123 something 456")${letterC}onsole.log("----\n\n\n008 something")
`
  );
  t.end();
});

t.test(`02.06 - double quotes - with whitespace`, t => {
  t.is(
    fixRowNums(`
zzz
zzz
zzz
${letterC}onsole.log ( " 099 123 something 456 " )
${letterC}onsole.log("----\n\n\n 0 something")
`),
    `
zzz
zzz
zzz
${letterC}onsole.log ( " 005 123 something 456 " )
${letterC}onsole.log("----\n\n\n 009 something")
`
  );
  t.end();
});

t.test(`02.07 - backticks - tight`, t => {
  t.is(
    fixRowNums(`
zzz
zzz
zzz
${letterC}onsole.log(\`099 123 something 456\`)${letterC}onsole.log(\`----0 something\`)${letterC}onsole.log(\`---- something\`)
`),
    `
zzz
zzz
zzz
${letterC}onsole.log(\`005 123 something 456\`)${letterC}onsole.log(\`----005 something\`)${letterC}onsole.log(\`---- something\`)
`
  );
  t.end();
});

t.test(
  `02.08 - console log with ANSI escapes - one ANSI escape chunk in front`,
  t => {
    t.is(
      fixRowNums("\x63onsole.log(`\\u001b[${33}m${`999 z`}\\u001b[${39}m`)"),
      "\x63onsole.log(`\\u001b[${33}m${`001 z`}\\u001b[${39}m`)"
    );
    t.end();
  }
);

t.test(
  `02.09 - synthetic test where colour is put in deeper curlies for easier visual grepping`,
  t => {
    t.is(
      fixRowNums(
        "\x63onsole.log(`\\u001b[${012399999999}m${`888 z`}\\u001b[${39}m`)"
      ),
      "\x63onsole.log(`\\u001b[${012399999999}m${`001 z`}\\u001b[${39}m`)"
    );
    t.end();
  }
);

t.test(`02.10 - synthetic test where colour code is put raw`, t => {
  t.is(
    fixRowNums(
      "\x63onsole.log(`\\u001b[012399999999m${`888 z`}\\u001b[${39}m`)"
    ),
    "\x63onsole.log(`\\u001b[012399999999m${`001 z`}\\u001b[${39}m`)"
  );
  t.end();
});

t.test(`02.11 - bunch of whitespace 1`, t => {
  t.is(
    fixRowNums(
      `${letterC}onsole.log(\`\\u001b[$\{012399999999}m$\{\` \t 888 z\`}\\u001b[${39}m\`)`
    ),
    `${letterC}onsole.log(\`\\u001b[$\{012399999999}m$\{\` \t 001 z\`}\\u001b[${39}m\`)`,
    `02.04.04 - synthetic test where colour is put in deeper curlies for easier visual grepping`
  );
  t.end();
});

t.test(`02.12 - bunch of whitespace 2`, t => {
  t.is(
    fixRowNums(
      `${letterC}onsole.log(\`\\u001b[012399999999m$\{\` \t 888 z\`}\\u001b[${39}m\`)`
    ),
    `${letterC}onsole.log(\`\\u001b[012399999999m$\{\` \t 001 z\`}\\u001b[${39}m\`)`,
    `02.04.05 - synthetic test where colour code is put raw`
  );
  t.end();
});

t.test(`02.13 - updates ${letterC}onsole.logs within comment blocks`, t => {
  t.is(
    fixRowNums(`
// ${letterC}onsole.log(
//   \`111 something
// \`)
`),
    `
// ${letterC}onsole.log(
//   \`003 something
// \`)
`
  );
  t.end();
});

t.test(`02.14 - \\n in front`, t => {
  t.is(
    fixRowNums(`
${letterC}onsole.log(
  \`${BACKSLASH}n111 something\`
)
`),
    `
${letterC}onsole.log(
  \`${BACKSLASH}n003 something\`
)
`
  );
  t.end();
});

t.test(`02.15 - automatic 4 digit padding on >45K chars`, t => {
  t.is(
    fixRowNums(`
${`12345\n`.repeat(10000)}
${letterC}onsole.log(
  \`${BACKSLASH}n111 something\`
)
`),
    `
${`12345\n`.repeat(10000)}
${letterC}onsole.log(
  \`${BACKSLASH}n10004 something\`
)
`
  );
  t.end();
});

// -----------------------------------------------------------------------------
// group 03. sneaky false positives
// -----------------------------------------------------------------------------

t.test(
  `03.01 - ${`\u001b[${36}m${`false positives`}\u001b[${39}m`} - text that mentions ${letterC}onsole.log`,
  t => {
    const str =
      "I added a ${letterC}onsole.log (and then added so-called `quotes`).";
    t.is(fixRowNums(str), str, `03.01`);
    t.end();
  }
);

t.test(
  `03.02 - ${`\u001b[${36}m${`false positives`}\u001b[${39}m`} - no digits at all`,
  t => {
    const str = "${letterC}onsole.log(`zzz`)";
    t.is(fixRowNums(str), str, `03.02`);
    t.end();
  }
);

t.test(
  `03.03 - ${`\u001b[${36}m${`false positives`}\u001b[${39}m`} - no opening bracket after ${letterC}onsole.log`,
  t => {
    const str = "${letterC}onsole.log `123`";
    t.is(fixRowNums(str), str, `03.03`);
    t.end();
  }
);

t.test(
  `03.04 - ${`\u001b[${36}m${`false positives`}\u001b[${39}m`} - all ASCII symbols`,
  t => {
    let allAscii = new Array(127);
    allAscii = allAscii.map((val, i) => String.fromCharCode(i)).join(``);
    t.is(fixRowNums(allAscii), allAscii, `03.04`);
    t.end();
  }
);

// -----------------------------------------------------------------------------
// group 04. opts
// -----------------------------------------------------------------------------

t.test(
  `04.01 - ${`\u001b[${33}m${`opts.padStart`}\u001b[${39}m`} - padding is set to numbers`,
  t => {
    const str = `zzz\n${letterC}onsole.log('1 something')`;
    t.is(
      fixRowNums(str),
      `zzz\n${letterC}onsole.log('002 something')`,
      `04.01.01 - control - default is three`
    );
    t.is(
      fixRowNums(str, { padStart: 0 }),
      `zzz\n${letterC}onsole.log('2 something')`,
      `04.01.02`
    );
    t.is(
      fixRowNums(str, { padStart: 1 }),
      `zzz\n${letterC}onsole.log('2 something')`,
      `04.01.03`
    );
    t.is(
      fixRowNums(str, { padStart: 2 }),
      `zzz\n${letterC}onsole.log('02 something')`,
      `04.01.04`
    );
    t.is(
      fixRowNums(str, { padStart: 3 }),
      `zzz\n${letterC}onsole.log('002 something')`,
      `04.01.05`
    );
    t.is(
      fixRowNums(str, { padStart: 4 }),
      `zzz\n${letterC}onsole.log('0002 something')`,
      `04.01.05`
    );
    t.is(
      fixRowNums(str, { padStart: 9 }),
      `zzz\n${letterC}onsole.log('000000002 something')`,
      `04.01.06`
    );
    t.is(
      fixRowNums(str, { padStart: 1 }),
      `zzz\n${letterC}onsole.log('2 something')`,
      `04.01.07 - negative numbers are ignored, default (3) is used`
    );
    t.end();
  }
);

t.test(
  `04.02 - ${`\u001b[${33}m${`opts.padStart`}\u001b[${39}m`} - padding is set to be falsey`,
  t => {
    const str = `zzz\n${letterC}onsole.log('1 something')`;
    t.is(
      fixRowNums(str, { padStart: false }),
      `zzz\n${letterC}onsole.log('2 something')`,
      `04.02.01`
    );
    t.is(
      fixRowNums(str, { padStart: null }),
      `zzz\n${letterC}onsole.log('2 something')`,
      `04.02.02`
    );
    t.is(
      fixRowNums(str, { padStart: undefined }),
      `zzz\n${letterC}onsole.log('2 something')`,
      `04.02.03`
    );
    t.end();
  }
);

// -----------------------------------------------------------------------------
// group 05. ad-hoc
// -----------------------------------------------------------------------------

t.test(
  `05.01 - ${`\u001b[${35}m${`ad-hoc`}\u001b[${39}m`} - text that uses \\r only as EOL characters`,
  t => {
    t.is(
      fixRowNums(`zzzz\ryyyy\r${letterC}onsole.log('1 some text')`),
      `zzzz\ryyyy\r${letterC}onsole.log('003 some text')`,
      `05.01.01`
    );
    t.is(
      fixRowNums(`zzzz\nyyyy\n${letterC}onsole.log('1 some text')`),
      `zzzz\nyyyy\n${letterC}onsole.log('003 some text')`,
      `05.01.02`
    );
    t.is(
      fixRowNums(`zzzz\r\nyyyy\r\n${letterC}onsole.log('1 some text')`),
      `zzzz\r\nyyyy\r\n${letterC}onsole.log('003 some text')`,
      `05.01.03`
    );
    t.end();
  }
);

t.test(
  `05.02 - ${`\u001b[${35}m${`ad-hoc`}\u001b[${39}m`} - broken ANSI - will not update`,
  t => {
    t.is(
      fixRowNums(
        `${letterC}onsole.log(\`\\u001b[012399999999$\{\` \t 888 z\`}\\u001b[$\{39}m\`)`
      ),
      `${letterC}onsole.log(\`\\u001b[012399999999$\{\` \t 888 z\`}\\u001b[$\{39}m\`)`,
      `05.02 - ANSI opening sequence's m is missing`
    );
    t.end();
  }
);

t.test(
  `05.03 - ${`\u001b[${35}m${`ad-hoc`}\u001b[${39}m`} - no quotes - no text`,
  t => {
    t.is(
      fixRowNums("1", {
        overrideRowNum: 124,
        returnRangesOnly: false,
        extractedLogContentsWereGiven: true
      }),
      "124",
      `05.03`
    );
    t.end();
  }
);

t.test(
  `05.04 - ${`\u001b[${35}m${`ad-hoc`}\u001b[${39}m`} - no quotes - no text`,
  t => {
    t.same(
      fixRowNums("1", {
        overrideRowNum: 124,
        returnRangesOnly: true,
        extractedLogContentsWereGiven: true
      }),
      [[0, 1, "124"]],
      `05.04`
    );
    t.end();
  }
);

t.test(
  `05.05 - ${`\u001b[${35}m${`ad-hoc`}\u001b[${39}m`} - no quotes - with text`,
  t => {
    t.is(
      fixRowNums("1 something", {
        overrideRowNum: 124,
        returnRangesOnly: false,
        extractedLogContentsWereGiven: true
      }),
      "124 something",
      `05.05`
    );
    t.end();
  }
);

t.test(
  `05.06 - ${`\u001b[${35}m${`ad-hoc`}\u001b[${39}m`} - no quotes - with text`,
  t => {
    t.same(
      fixRowNums("1 something", {
        overrideRowNum: 124,
        returnRangesOnly: true,
        extractedLogContentsWereGiven: true
      }),
      [[0, 1, "124"]],
      `05.06`
    );
    t.end();
  }
);

t.test(
  `05.07 - ${`\u001b[${35}m${`ad-hoc`}\u001b[${39}m`} - with quotes - no text`,
  t => {
    t.is(
      fixRowNums(`"1"`, {
        overrideRowNum: 124,
        returnRangesOnly: false,
        extractedLogContentsWereGiven: true
      }),
      `"124"`,
      `05.07`
    );
    t.end();
  }
);

t.test(
  `05.08 - ${`\u001b[${35}m${`ad-hoc`}\u001b[${39}m`} - with quotes - no text, override rownum is number`,
  t => {
    t.same(
      fixRowNums(`"1"`, {
        overrideRowNum: 124,
        returnRangesOnly: true,
        extractedLogContentsWereGiven: true
      }),
      [[1, 2, "124"]],
      `05.08`
    );
    t.end();
  }
);

t.test(
  `05.09 - ${`\u001b[${35}m${`ad-hoc`}\u001b[${39}m`} - with quotes - no text, override rownum is text`,
  t => {
    t.same(
      fixRowNums(`"1"`, {
        overrideRowNum: "124", // <----- text, not number
        returnRangesOnly: true,
        extractedLogContentsWereGiven: true
      }),
      [[1, 2, "124"]],
      `05.09`
    );
    t.end();
  }
);

t.test(
  `05.10 - ${`\u001b[${35}m${`ad-hoc`}\u001b[${39}m`} - with quotes - with text`,
  t => {
    t.is(
      fixRowNums(`"1 something"`, {
        overrideRowNum: 124,
        returnRangesOnly: false,
        extractedLogContentsWereGiven: true
      }),
      `"124 something"`,
      `05.10`
    );
    t.end();
  }
);

t.test(
  `05.11 - ${`\u001b[${35}m${`ad-hoc`}\u001b[${39}m`} - with quotes - with text`,
  t => {
    t.same(
      fixRowNums(`"1 something"`, {
        overrideRowNum: 124,
        returnRangesOnly: true,
        extractedLogContentsWereGiven: true
      }),
      [[1, 2, "124"]],
      `05.11`
    );
    t.end();
  }
);

// -----------------------------------------------------------------------------
// 06. custom functions via opts.triggerKeywords
// -----------------------------------------------------------------------------

t.test(
  `06.01 - ${`\u001b[${34}m${`opts.triggerKeywords`}\u001b[${39}m`} - baseline`,
  t => {
    t.is(
      fixRowNums(`a\nb\nc\nlog(\`1 something\`)`),
      `a\nb\nc\nlog(\`1 something\`)`
    );
    t.end();
  }
);

t.test(
  `06.02 - ${`\u001b[${34}m${`opts.triggerKeywords`}\u001b[${39}m`} - works on custom function`,
  t => {
    t.is(
      fixRowNums(`a\nb\nc\nlog(\`1 something\`)`, { triggerKeywords: [`log`] }),
      `a\nb\nc\nlog(\`004 something\`)`
    );
    t.end();
  }
);

t.test(
  `06.03 - ${`\u001b[${34}m${`opts.triggerKeywords`}\u001b[${39}m`} - non-existing log function`,
  t => {
    const sources = [
      `a\nb\nc\n${letterC}onsole.log(\`1 something\`)`,
      `a\nb\nc\nlog(\`1 something\`)`
    ];
    sources.forEach(source => {
      t.is(fixRowNums(source, { triggerKeywords: [`zzz`] }), source);
      t.is(fixRowNums(source, { triggerKeywords: null }), source);
    });
    t.end();
  }
);
