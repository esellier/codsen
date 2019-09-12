import test from "ava";
import c from "../dist/string-collapse-leading-whitespace.esm";

const rawNbsp = "\u00A0";

// -----------------------------------------------------------------------------
// 01. normal use
// -----------------------------------------------------------------------------

test("01.01 - does nothing to trimmed strings", t => {
  t.is(c("zzz"), "zzz");
});

test("01.02 - does nothing to trimmed strings", t => {
  t.is(c("zzz", 1), "zzz");
});

test("01.03 - does nothing to trimmed strings", t => {
  t.is(c("zzz", 2), "zzz");
});

test("01.04 - whitespace in front", t => {
  t.is(c(" zzz"), " zzz");
});

test("01.05 - whitespace in front", t => {
  t.is(c("  zzz"), " zzz");
});

test("01.06 - whitespace in front", t => {
  t.is(c("\tzzz"), " zzz");
});

test("01.07 - whitespace in front", t => {
  t.is(c(" zzz", 1), " zzz");
});

test("01.08 - whitespace in front", t => {
  t.is(c("  zzz", 1), " zzz");
});

test("01.09 - whitespace in front", t => {
  t.is(c("\tzzz", 1), " zzz");
});

test("01.10 - whitespace in front", t => {
  t.is(c(" zzz", 2), " zzz");
});

test("01.11 - whitespace in front", t => {
  t.is(c("  zzz", 2), " zzz");
});

test("01.12 - whitespace in front", t => {
  t.is(c("\tzzz", 2), " zzz");
});

test("01.13 - whitespace in the end", t => {
  t.is(c("zzz "), "zzz ");
});

test("01.14 - whitespace in the end", t => {
  t.is(c("zzz  "), "zzz ");
});

test("01.15 - whitespace in the end", t => {
  t.is(c("z  zz  "), "z  zz ");
});

test("01.16 - whitespace in the end", t => {
  t.is(c("zzz  \t"), "zzz ");
});

test("01.17 - whitespace in the end", t => {
  t.is(c("z zz\t"), "z zz ");
});

test("01.18 - whitespace in the end", t => {
  t.is(c("zzz ", 1), "zzz ");
});

test("01.19 - whitespace in the end", t => {
  t.is(c("zzz  ", 1), "zzz ");
});

test("01.20 - whitespace in the end", t => {
  t.is(c("z  zz  ", 1), "z  zz ");
});

test("01.21 - whitespace in the end", t => {
  t.is(c("zzz  \t", 1), "zzz ");
});

test("01.22 - whitespace in the end", t => {
  t.is(c("z zz\t", 1), "z zz ");
});

test("01.23 - whitespace in the end", t => {
  t.is(c("zzz ", 2), "zzz ");
});

test("01.24 - whitespace in the end", t => {
  t.is(c("zzz  ", 2), "zzz ");
});

test("01.25 - whitespace in the end", t => {
  t.is(c("z  zz  ", 2), "z  zz ");
});

test("01.26 - whitespace in the end", t => {
  t.is(c("zzz  \t", 2), "zzz ");
});

test("01.27 - whitespace in the end", t => {
  t.is(c("z zz\t", 2), "z zz ");
});

test("01.28 - whitespace on both ends", t => {
  t.is(c(" zzz "), " zzz ");
});

test("01.29 - whitespace on both ends", t => {
  t.is(c("  zzz  "), " zzz ");
});

test("01.30 - whitespace on both ends", t => {
  t.is(c("  zzz zzz  "), " zzz zzz ");
});

test("01.31 - whitespace on both ends", t => {
  t.is(c("\tzzz zzz  "), " zzz zzz ");
});

test("01.32 - whitespace on both ends", t => {
  t.is(c("\tzzz zzz\t"), " zzz zzz ");
});

test("01.33 - whitespace on both ends", t => {
  t.is(c("\t\t\t\t\t     zzz zzz\t      \t\t\t\t"), " zzz zzz ");
});

test("01.34 - whitespace on both ends", t => {
  t.is(c(" zzz ", 1), " zzz ");
});

test("01.35 - whitespace on both ends", t => {
  t.is(c("  zzz  ", 1), " zzz ");
});

test("01.36 - whitespace on both ends", t => {
  t.is(c("  zzz zzz  ", 1), " zzz zzz ");
});

test("01.37 - whitespace on both ends", t => {
  t.is(c("\tzzz zzz  ", 1), " zzz zzz ");
});

test("01.38 - whitespace on both ends", t => {
  t.is(c("\tzzz zzz\t", 1), " zzz zzz ");
});

test("01.39 - whitespace on both ends", t => {
  t.is(c("\t\t\t\t\t     zzz zzz\t      \t\t\t\t", 1), " zzz zzz ");
});

test("01.40 - whitespace on both ends", t => {
  t.is(c(" zzz ", 2), " zzz ");
});

test("01.41 - whitespace on both ends", t => {
  t.is(c("  zzz  ", 2), " zzz ");
});

test("01.42 - whitespace on both ends", t => {
  t.is(c("  zzz zzz  ", 2), " zzz zzz ");
});

test("01.43 - whitespace on both ends", t => {
  t.is(c("\tzzz zzz  ", 2), " zzz zzz ");
});

test("01.44 - whitespace on both ends", t => {
  t.is(c("\tzzz zzz\t", 2), " zzz zzz ");
});

test("01.45 - whitespace on both ends", t => {
  t.is(c("\t\t\t\t\t     zzz zzz\t      \t\t\t\t", 2), " zzz zzz ");
});

test("01.46 - whitespace with single line breaks in front", t => {
  t.is(c("\nzzz"), "\nzzz");
});

test("01.47 - whitespace with single line breaks in front", t => {
  t.is(c(" \n zzz"), "\nzzz");
});

test("01.48 - whitespace with single line breaks in front", t => {
  t.is(c("\t\nzzz"), "\nzzz");
});

test("01.49 - whitespace with single line breaks in front", t => {
  t.is(c("\nzzz", 0), "\nzzz");
});

test("01.50 - whitespace with single line breaks in front", t => {
  t.is(c(" \n zzz", 0), "\nzzz");
});

test("01.51 - whitespace with single line breaks in front", t => {
  t.is(c("\t\nzzz", 0), "\nzzz");
});

test("01.52 - whitespace with single line breaks in front", t => {
  t.is(c("\nzzz", 1), "\nzzz");
});

test("01.53 - whitespace with single line breaks in front", t => {
  t.is(c(" \n zzz", 1), "\nzzz");
});

test("01.54 - whitespace with single line breaks in front", t => {
  t.is(c("\t\nzzz", 1), "\nzzz");
});

test("01.55 - whitespace with single line breaks in front", t => {
  t.is(c("\nzzz", 2), "\nzzz");
});

test("01.56 - whitespace with single line breaks in front", t => {
  t.is(c(" \n zzz", 2), "\nzzz");
});

test("01.57 - whitespace with single line breaks in front", t => {
  t.is(c("\t\nzzz", 2), "\nzzz");
});

test("01.58 - whitespace with single line breaks in the end", t => {
  t.is(c("zzz\n"), "zzz\n");
});

test("01.59 - whitespace with single line breaks in the end", t => {
  t.is(c("zzz \n "), "zzz\n");
});

test("01.60 - whitespace with single line breaks in the end", t => {
  t.is(c("zzz\t\n"), "zzz\n");
});

test("01.61 - whitespace with single line breaks in the end", t => {
  t.is(c("zzz\n", 0), "zzz\n");
});

test("01.62 - whitespace with single line breaks in the end", t => {
  t.is(c("zzz \n ", 0), "zzz\n");
});

test("01.63 - whitespace with single line breaks in the end", t => {
  t.is(c("zzz\t\n", 0), "zzz\n");
});

test("01.64 - whitespace with single line breaks in the end", t => {
  t.is(c("zzz\n", 1), "zzz\n");
});

test("01.65 - whitespace with single line breaks in the end", t => {
  t.is(c("zzz \n ", 1), "zzz\n");
});

test("01.66 - whitespace with single line breaks in the end", t => {
  t.is(c("zzz\t\n", 1), "zzz\n");
});

test("01.67 - whitespace with single line breaks in the end", t => {
  t.is(c("zzz\n", 2), "zzz\n");
});

test("01.68 - whitespace with single line breaks in the end", t => {
  t.is(c("zzz \n ", 2), "zzz\n");
});

test("01.69 - whitespace with single line breaks in the end", t => {
  t.is(c("zzz\t\n", 2), "zzz\n");
});

test("01.70 - whitespace with single line breaks in the end", t => {
  t.is(c("\n\nzzz\n\n"), "\nzzz\n");
});

test("01.71 - whitespace with single line breaks in the end", t => {
  t.is(c(" \n \n zzz \n \n "), "\nzzz\n");
});

test("01.72 - whitespace with single line breaks in the end", t => {
  t.is(c("\n \n \n zzz \n \n \n"), "\nzzz\n");
});

test("01.73 - whitespace with single line breaks in the end", t => {
  t.is(c(" \n \n \n zzz \n \n \n "), "\nzzz\n");
});

test("01.74 - whitespace with single line breaks in the end", t => {
  t.is(c(" \n \t\n \n zzz \n \n \n \t"), "\nzzz\n");
});

test("01.75 - whitespace with single line breaks in the end", t => {
  t.is(c(" \n \t\n \n zzz \n \n \n \t "), "\nzzz\n");
});

test("01.76 - whitespace with single line breaks in the end", t => {
  t.is(c("\n\nzzz\n\n", 1), "\nzzz\n");
});

test("01.77 - whitespace with single line breaks in the end", t => {
  t.is(c(" \n \n zzz \n \n ", 1), "\nzzz\n");
});

test("01.78 - whitespace with single line breaks in the end", t => {
  t.is(c("\n \n \n zzz \n \n \n", 1), "\nzzz\n");
});

test("01.79 - whitespace with single line breaks in the end", t => {
  t.is(c(" \n \n \n zzz \n \n \n ", 1), "\nzzz\n");
});

test("01.80 - whitespace with single line breaks in the end", t => {
  t.is(c(" \n \t\n \n zzz \n \n \n \t", 1), "\nzzz\n");
});

test("01.81 - whitespace with single line breaks in the end", t => {
  t.is(c(" \n \t\n \n zzz \n \n \n \t ", 1), "\nzzz\n");
});

test("01.82 - whitespace with single line breaks in the end", t => {
  t.is(c("\n\nzzz\n\n", 2), "\n\nzzz\n\n");
});

test("01.83 - whitespace with single line breaks in the end", t => {
  t.is(c("\n\nzzz\n", 2), "\n\nzzz\n");
});

test("01.84 - whitespace with single line breaks in the end", t => {
  t.is(c("\n\n\nzzz\n", 2), "\n\nzzz\n");
});

test("01.85 - whitespace with single line breaks in the end", t => {
  t.is(c("\n \n \n zzz \n \n \n", 2), "\n\nzzz\n\n");
});

test("01.86 - whitespace with single line breaks in the end", t => {
  t.is(c(" \n \n \n zzz \n \n \n ", 2), "\n\nzzz\n\n");
});

test("01.87 - whitespace with single line breaks in the end", t => {
  t.is(c(" \n \t\n \n zzz \n \n \n \t", 2), "\n\nzzz\n\n");
});

test("01.88 - whitespace with single line breaks in the end", t => {
  t.is(c(" \n \t\n \n zzz \n \n \n \t ", 2), "\n\nzzz\n\n");
});

test("01.89 - whitespace with single line breaks in the end", t => {
  t.is(c(" \n \n zzz \n \n ", 2), "\n\nzzz\n\n");
});

test("01.90 - whitespace with single line breaks in the end", t => {
  t.is(c("\n\nzzz\n\n", 3), "\n\nzzz\n\n");
});

test("01.91 - whitespace with single line breaks in the end", t => {
  t.is(c(" \n \n zzz \n \n ", 3), "\n\nzzz\n\n");
});

test("01.92 - whitespace with single line breaks in the end", t => {
  t.is(c("\n \n \n zzz \n \n \n", 3), "\n\n\nzzz\n\n\n");
});

test("01.93 - whitespace with single line breaks in the end", t => {
  t.is(c(" \n \n \n zzz \n \n \n ", 3), "\n\n\nzzz\n\n\n");
});

test("01.94 - whitespace with single line breaks in the end", t => {
  t.is(c(" \n \t\n \n zzz \n \n \n \t", 3), "\n\n\nzzz\n\n\n");
});

test("01.95 - whitespace with single line breaks in the end", t => {
  t.is(c(" \n \t\n \n zzz \n \n \n \t ", 3), "\n\n\nzzz\n\n\n");
});

test("01.96 - whitespace with single line breaks in the end", t => {
  t.is(c("\n\nzzz\n\n", 9), "\n\nzzz\n\n");
});

test("01.97 - whitespace with single line breaks in the end", t => {
  t.is(c(" \n \n zzz \n \n ", 9), "\n\nzzz\n\n");
});

test("01.98 - whitespace with single line breaks in the end", t => {
  t.is(c("\n \n \n zzz \n \n \n", 9), "\n\n\nzzz\n\n\n");
});

test("01.99 - whitespace with single line breaks in the end", t => {
  t.is(c(" \n \n \n zzz \n \n \n ", 9), "\n\n\nzzz\n\n\n");
});

test("01.100 - whitespace with single line breaks in the end", t => {
  t.is(c(" \n \t\n \n zzz \n \n \n \t", 9), "\n\n\nzzz\n\n\n");
});

test("01.101 - whitespace with single line breaks in the end", t => {
  t.is(c(" \n \t\n \n zzz \n \n \n \t ", 9), "\n\n\nzzz\n\n\n");
});

// -----------------------------------------------------------------------------
// 02. quick ends
// -----------------------------------------------------------------------------

test("02.01 - empty input", t => {
  t.is(c(""), "");
});

test("02.02 - all whitespace", t => {
  t.is(c("    "), " ");
});

test("02.03 - all whitespace", t => {
  t.is(c("\t"), " ");
});

test("02.04 - all whitespace", t => {
  t.is(c("    ", 1), " ");
});

test("02.05 - all whitespace", t => {
  t.is(c("\t", 1), " ");
});

test("02.06 - all whitespace", t => {
  t.is(c("    ", 2), " ");
});

test("02.07 - all whitespace", t => {
  t.is(c("\t", 2), " ");
});

test("02.08 - all whitespace", t => {
  t.is(c("  \n\n  "), "\n");
});

test("02.09 - all whitespace", t => {
  t.is(c("  \n\n  ", 1), "\n");
});

test("02.10 - all whitespace", t => {
  t.is(c("  \n\n  ", 2), "\n\n");
});

test("02.11 - all whitespace", t => {
  t.is(c("  \n\n  ", 9), "\n\n");
});

test("02.12 - all whitespace", t => {
  t.is(c("\n"), "\n");
});

test("02.13 - all whitespace", t => {
  t.is(c("\n", 1), "\n");
});

test("02.14 - all whitespace", t => {
  t.is(c("\n", 2), "\n");
});

test("02.15 - all whitespace", t => {
  t.is(c("\n\n", 2), "\n\n");
});

test("02.16 - all whitespace", t => {
  t.is(c("\n\n", 3), "\n\n");
});

test("02.17 - all whitespace", t => {
  t.is(c("\n \n\n\n", 5), "\n\n\n\n");
});

test("02.18 - not a string input", t => {
  t.is(c(1), 1);
});

test("02.19 - not a string input", t => {
  t.is(c(1, 1), 1);
});

test("02.20 - not a string input", t => {
  t.is(c(1, 2), 1);
});

test("02.21 - not a string input", t => {
  t.is(c(1, "zz"), 1);
});

// -----------------------------------------------------------------------------
// 03. nbsp
// -----------------------------------------------------------------------------

test("03.01 - nbsp - left side - blank", t => {
  t.is(c(`${rawNbsp}zzz`), `${rawNbsp}zzz`);
});

test("03.02 - nbsp - left side - space + nbsp", t => {
  t.is(c(` ${rawNbsp}zzz`), `${rawNbsp}zzz`);
});

test("03.03 - nbsp - left side - two spaces", t => {
  t.is(c(`  ${rawNbsp}zzz`), `${rawNbsp}zzz`);
});

test("03.04 - nbsp - left side - nbsp + space", t => {
  t.is(c(`${rawNbsp} zzz`), `${rawNbsp} zzz`);
});

test("03.05 - nbsp - left side - nbsp + two spaces", t => {
  t.is(c(`${rawNbsp}  zzz`), `${rawNbsp} zzz`);
});

test("03.06 - nbsp - left side - eol + nbsp", t => {
  t.is(c(`\n${rawNbsp}zzz`), `\n${rawNbsp}zzz`);
});

test("03.07 - nbsp - left side - nbsp + eol", t => {
  t.is(c(`${rawNbsp}\nzzz`), `${rawNbsp}\nzzz`);
});

test("03.08 - nbsp - left side - multiple eols", t => {
  t.is(c(`\n\n${rawNbsp}\nzzz`, 3), `\n\n${rawNbsp}\nzzz`);
});

test("03.09 - nbsp - left side - multiple spaced eols", t => {
  t.is(c(`  \n \n   ${rawNbsp}\nzzz`, 3), `\n\n${rawNbsp}\nzzz`);
});

test("03.10 - nbsp - right side - blank", t => {
  t.is(c(`zzz${rawNbsp}`), `zzz${rawNbsp}`);
});

test("03.11 - nbsp - right side - nbsp + space", t => {
  t.is(c(`zzz${rawNbsp} `), `zzz${rawNbsp}`);
});

test("03.12 - nbsp - right side - nbsp + two spaces", t => {
  t.is(c(`zzz${rawNbsp}  `), `zzz${rawNbsp}`);
});

test("03.13 - nbsp - right side - space + nbsp", t => {
  t.is(c(`zzz ${rawNbsp}`), `zzz ${rawNbsp}`);
});

test("03.14 - nbsp - right side - two spaces + nbsp", t => {
  t.is(c(`zzz  ${rawNbsp}`), `zzz ${rawNbsp}`);
});

test("03.15 - nbsp - right side - nbsp + eol", t => {
  t.is(c(`zzz${rawNbsp}\n`), `zzz${rawNbsp}\n`);
});

test("03.16 - nbsp - right side - eol + nbsp", t => {
  t.is(c(`zzz\n${rawNbsp}`), `zzz\n${rawNbsp}`);
});

test("03.17 - nbsp - right side - mulitple eols", t => {
  t.is(c(`zzz\n${rawNbsp}\n\n`, 3), `zzz\n${rawNbsp}\n\n`);
});

test("03.18 - nbsp - right side - multiple spaced eols", t => {
  t.is(c(`zzz\n${rawNbsp}  \n \n   `, 3), `zzz\n${rawNbsp}\n\n`);
});
