const t = require("tap");
const ct = require("../dist/codsen-tokenizer.cjs");

// 01. healthy html, no tricks
// -----------------------------------------------------------------------------

t.test(t => {
  const gathered = [];
  ct("<a>z1", {
    charCb: obj => {
      gathered.push(obj);
    }
  });

  t.same(
    gathered,
    [
      {
        chr: "<",
        i: 0,
        type: "html"
      },
      {
        chr: "a",
        i: 1,
        type: "html"
      },
      {
        chr: ">",
        i: 2,
        type: "html"
      },
      {
        chr: "z",
        i: 3,
        type: "text"
      },
      {
        chr: "1",
        i: 4,
        type: "text"
      }
    ],
    "01.01 - tag and text"
  );
  t.end();
});
