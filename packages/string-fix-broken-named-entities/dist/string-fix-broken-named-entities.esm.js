/**
 * string-fix-broken-named-entities
 * Finds and fixes common and not so common broken named HTML entities, returns ranges array of fixes
 * Version: 2.1.5
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-fix-broken-named-entities
 */

import isObj from 'lodash.isplainobject';
import rangesMerge from 'ranges-merge';
import clone from 'lodash.clonedeep';
import { left, right, chompLeft, leftSeq, rightSeq } from 'string-left-right';

var allNamedEntities = [
	"AElig",
	"AMP",
	"Aacute",
	"Abreve",
	"Acirc",
	"Acy",
	"Afr",
	"Agrave",
	"Alpha",
	"Amacr",
	"And",
	"Aogon",
	"Aopf",
	"ApplyFunction",
	"Aring",
	"Ascr",
	"Assign",
	"Atilde",
	"Auml",
	"Backslash",
	"Barv",
	"Barwed",
	"Bcy",
	"Because",
	"Bernoullis",
	"Beta",
	"Bfr",
	"Bopf",
	"Breve",
	"Bscr",
	"Bumpeq",
	"CHcy",
	"COPY",
	"Cacute",
	"Cap",
	"CapitalDifferentialD",
	"Cayleys",
	"Ccaron",
	"Ccedil",
	"Ccirc",
	"Cconint",
	"Cdot",
	"Cedilla",
	"CenterDot",
	"Cfr",
	"Chi",
	"CircleDot",
	"CircleMinus",
	"CirclePlus",
	"CircleTimes",
	"ClockwiseContourIntegral",
	"CloseCurlyDoubleQuote",
	"CloseCurlyQuote",
	"Colon",
	"Colone",
	"Congruent",
	"Conint",
	"ContourIntegral",
	"Copf",
	"Coproduct",
	"CounterClockwiseContourIntegral",
	"Cross",
	"Cscr",
	"Cup",
	"CupCap",
	"DD",
	"DDotrahd",
	"DJcy",
	"DScy",
	"DZcy",
	"Dagger",
	"Darr",
	"Dashv",
	"Dcaron",
	"Dcy",
	"Del",
	"Delta",
	"Dfr",
	"DiacriticalAcute",
	"DiacriticalDot",
	"DiacriticalDoubleAcute",
	"DiacriticalGrave",
	"DiacriticalTilde",
	"Diamond",
	"DifferentialD",
	"Dopf",
	"Dot",
	"DotDot",
	"DotEqual",
	"DoubleContourIntegral",
	"DoubleDot",
	"DoubleDownArrow",
	"DoubleLeftArrow",
	"DoubleLeftRightArrow",
	"DoubleLeftTee",
	"DoubleLongLeftArrow",
	"DoubleLongLeftRightArrow",
	"DoubleLongRightArrow",
	"DoubleRightArrow",
	"DoubleRightTee",
	"DoubleUpArrow",
	"DoubleUpDownArrow",
	"DoubleVerticalBar",
	"DownArrow",
	"DownArrowBar",
	"DownArrowUpArrow",
	"DownBreve",
	"DownLeftRightVector",
	"DownLeftTeeVector",
	"DownLeftVector",
	"DownLeftVectorBar",
	"DownRightTeeVector",
	"DownRightVector",
	"DownRightVectorBar",
	"DownTee",
	"DownTeeArrow",
	"Downarrow",
	"Dscr",
	"Dstrok",
	"ENG",
	"ETH",
	"Eacute",
	"Ecaron",
	"Ecirc",
	"Ecy",
	"Edot",
	"Efr",
	"Egrave",
	"Element",
	"Emacr",
	"EmptySmallSquare",
	"EmptyVerySmallSquare",
	"Eogon",
	"Eopf",
	"Epsilon",
	"Equal",
	"EqualTilde",
	"Equilibrium",
	"Escr",
	"Esim",
	"Eta",
	"Euml",
	"Exists",
	"ExponentialE",
	"Fcy",
	"Ffr",
	"FilledSmallSquare",
	"FilledVerySmallSquare",
	"Fopf",
	"ForAll",
	"Fouriertrf",
	"Fscr",
	"GJcy",
	"GT",
	"Gamma",
	"Gammad",
	"Gbreve",
	"Gcedil",
	"Gcirc",
	"Gcy",
	"Gdot",
	"Gfr",
	"Gg",
	"Gopf",
	"GreaterEqual",
	"GreaterEqualLess",
	"GreaterFullEqual",
	"GreaterGreater",
	"GreaterLess",
	"GreaterSlantEqual",
	"GreaterTilde",
	"Gscr",
	"Gt",
	"HARDcy",
	"Hacek",
	"Hat",
	"Hcirc",
	"Hfr",
	"HilbertSpace",
	"Hopf",
	"HorizontalLine",
	"Hscr",
	"Hstrok",
	"HumpDownHump",
	"HumpEqual",
	"IEcy",
	"IJlig",
	"IOcy",
	"Iacute",
	"Icirc",
	"Icy",
	"Idot",
	"Ifr",
	"Igrave",
	"Im",
	"Imacr",
	"ImaginaryI",
	"Implies",
	"Int",
	"Integral",
	"Intersection",
	"InvisibleComma",
	"InvisibleTimes",
	"Iogon",
	"Iopf",
	"Iota",
	"Iscr",
	"Itilde",
	"Iukcy",
	"Iuml",
	"Jcirc",
	"Jcy",
	"Jfr",
	"Jopf",
	"Jscr",
	"Jsercy",
	"Jukcy",
	"KHcy",
	"KJcy",
	"Kappa",
	"Kcedil",
	"Kcy",
	"Kfr",
	"Kopf",
	"Kscr",
	"LJcy",
	"LT",
	"Lacute",
	"Lambda",
	"Lang",
	"Laplacetrf",
	"Larr",
	"Lcaron",
	"Lcedil",
	"Lcy",
	"LeftAngleBracket",
	"LeftArrow",
	"LeftArrowBar",
	"LeftArrowRightArrow",
	"LeftCeiling",
	"LeftDoubleBracket",
	"LeftDownTeeVector",
	"LeftDownVector",
	"LeftDownVectorBar",
	"LeftFloor",
	"LeftRightArrow",
	"LeftRightVector",
	"LeftTee",
	"LeftTeeArrow",
	"LeftTeeVector",
	"LeftTriangle",
	"LeftTriangleBar",
	"LeftTriangleEqual",
	"LeftUpDownVector",
	"LeftUpTeeVector",
	"LeftUpVector",
	"LeftUpVectorBar",
	"LeftVector",
	"LeftVectorBar",
	"Leftarrow",
	"Leftrightarrow",
	"LessEqualGreater",
	"LessFullEqual",
	"LessGreater",
	"LessLess",
	"LessSlantEqual",
	"LessTilde",
	"Lfr",
	"Ll",
	"Lleftarrow",
	"Lmidot",
	"LongLeftArrow",
	"LongLeftRightArrow",
	"LongRightArrow",
	"Longleftarrow",
	"Longleftrightarrow",
	"Longrightarrow",
	"Lopf",
	"LowerLeftArrow",
	"LowerRightArrow",
	"Lscr",
	"Lsh",
	"Lstrok",
	"Lt",
	"Map",
	"Mcy",
	"MediumSpace",
	"Mellintrf",
	"Mfr",
	"MinusPlus",
	"Mopf",
	"Mscr",
	"Mu",
	"NJcy",
	"Nacute",
	"Ncaron",
	"Ncedil",
	"Ncy",
	"NegativeMediumSpace",
	"NegativeThickSpace",
	"NegativeThinSpace",
	"NegativeVeryThinSpace",
	"NestedGreaterGreater",
	"NestedLessLess",
	"NewLine",
	"Nfr",
	"NoBreak",
	"NonBreakingSpace",
	"Nopf",
	"Not",
	"NotCongruent",
	"NotCupCap",
	"NotDoubleVerticalBar",
	"NotElement",
	"NotEqual",
	"NotEqualTilde",
	"NotExists",
	"NotGreater",
	"NotGreaterEqual",
	"NotGreaterFullEqual",
	"NotGreaterGreater",
	"NotGreaterLess",
	"NotGreaterSlantEqual",
	"NotGreaterTilde",
	"NotHumpDownHump",
	"NotHumpEqual",
	"NotLeftTriangle",
	"NotLeftTriangleBar",
	"NotLeftTriangleEqual",
	"NotLess",
	"NotLessEqual",
	"NotLessGreater",
	"NotLessLess",
	"NotLessSlantEqual",
	"NotLessTilde",
	"NotNestedGreaterGreater",
	"NotNestedLessLess",
	"NotPrecedes",
	"NotPrecedesEqual",
	"NotPrecedesSlantEqual",
	"NotReverseElement",
	"NotRightTriangle",
	"NotRightTriangleBar",
	"NotRightTriangleEqual",
	"NotSquareSubset",
	"NotSquareSubsetEqual",
	"NotSquareSuperset",
	"NotSquareSupersetEqual",
	"NotSubset",
	"NotSubsetEqual",
	"NotSucceeds",
	"NotSucceedsEqual",
	"NotSucceedsSlantEqual",
	"NotSucceedsTilde",
	"NotSuperset",
	"NotSupersetEqual",
	"NotTilde",
	"NotTildeEqual",
	"NotTildeFullEqual",
	"NotTildeTilde",
	"NotVerticalBar",
	"Nscr",
	"Ntilde",
	"Nu",
	"OElig",
	"Oacute",
	"Ocirc",
	"Ocy",
	"Odblac",
	"Ofr",
	"Ograve",
	"Omacr",
	"Omega",
	"Omicron",
	"Oopf",
	"OpenCurlyDoubleQuote",
	"OpenCurlyQuote",
	"Or",
	"Oscr",
	"Oslash",
	"Otilde",
	"Otimes",
	"Ouml",
	"OverBar",
	"OverBrace",
	"OverBracket",
	"OverParenthesis",
	"PartialD",
	"Pcy",
	"Pfr",
	"Phi",
	"Pi",
	"PlusMinus",
	"Poincareplane",
	"Popf",
	"Pr",
	"Precedes",
	"PrecedesEqual",
	"PrecedesSlantEqual",
	"PrecedesTilde",
	"Prime",
	"Product",
	"Proportion",
	"Proportional",
	"Pscr",
	"Psi",
	"QUOT",
	"Qfr",
	"Qopf",
	"Qscr",
	"RBarr",
	"REG",
	"Racute",
	"Rang",
	"Rarr",
	"Rarrtl",
	"Rcaron",
	"Rcedil",
	"Rcy",
	"Re",
	"ReverseElement",
	"ReverseEquilibrium",
	"ReverseUpEquilibrium",
	"Rfr",
	"Rho",
	"RightAngleBracket",
	"RightArrow",
	"RightArrowBar",
	"RightArrowLeftArrow",
	"RightCeiling",
	"RightDoubleBracket",
	"RightDownTeeVector",
	"RightDownVector",
	"RightDownVectorBar",
	"RightFloor",
	"RightTee",
	"RightTeeArrow",
	"RightTeeVector",
	"RightTriangle",
	"RightTriangleBar",
	"RightTriangleEqual",
	"RightUpDownVector",
	"RightUpTeeVector",
	"RightUpVector",
	"RightUpVectorBar",
	"RightVector",
	"RightVectorBar",
	"Rightarrow",
	"Ropf",
	"RoundImplies",
	"Rrightarrow",
	"Rscr",
	"Rsh",
	"RuleDelayed",
	"SHCHcy",
	"SHcy",
	"SOFTcy",
	"Sacute",
	"Sc",
	"Scaron",
	"Scedil",
	"Scirc",
	"Scy",
	"Sfr",
	"ShortDownArrow",
	"ShortLeftArrow",
	"ShortRightArrow",
	"ShortUpArrow",
	"Sigma",
	"SmallCircle",
	"Sopf",
	"Sqrt",
	"Square",
	"SquareIntersection",
	"SquareSubset",
	"SquareSubsetEqual",
	"SquareSuperset",
	"SquareSupersetEqual",
	"SquareUnion",
	"Sscr",
	"Star",
	"Sub",
	"Subset",
	"SubsetEqual",
	"Succeeds",
	"SucceedsEqual",
	"SucceedsSlantEqual",
	"SucceedsTilde",
	"SuchThat",
	"Sum",
	"Sup",
	"Superset",
	"SupersetEqual",
	"Supset",
	"THORN",
	"TRADE",
	"TSHcy",
	"TScy",
	"Tab",
	"Tau",
	"Tcaron",
	"Tcedil",
	"Tcy",
	"Tfr",
	"Therefore",
	"Theta",
	"ThickSpace",
	"ThinSpace",
	"Tilde",
	"TildeEqual",
	"TildeFullEqual",
	"TildeTilde",
	"Topf",
	"TripleDot",
	"Tscr",
	"Tstrok",
	"Uacute",
	"Uarr",
	"Uarrocir",
	"Ubrcy",
	"Ubreve",
	"Ucirc",
	"Ucy",
	"Udblac",
	"Ufr",
	"Ugrave",
	"Umacr",
	"UnderBar",
	"UnderBrace",
	"UnderBracket",
	"UnderParenthesis",
	"Union",
	"UnionPlus",
	"Uogon",
	"Uopf",
	"UpArrow",
	"UpArrowBar",
	"UpArrowDownArrow",
	"UpDownArrow",
	"UpEquilibrium",
	"UpTee",
	"UpTeeArrow",
	"Uparrow",
	"Updownarrow",
	"UpperLeftArrow",
	"UpperRightArrow",
	"Upsi",
	"Upsilon",
	"Uring",
	"Uscr",
	"Utilde",
	"Uuml",
	"VDash",
	"Vbar",
	"Vcy",
	"Vdash",
	"Vdashl",
	"Vee",
	"Verbar",
	"Vert",
	"VerticalBar",
	"VerticalLine",
	"VerticalSeparator",
	"VerticalTilde",
	"VeryThinSpace",
	"Vfr",
	"Vopf",
	"Vscr",
	"Vvdash",
	"Wcirc",
	"Wedge",
	"Wfr",
	"Wopf",
	"Wscr",
	"Xfr",
	"Xi",
	"Xopf",
	"Xscr",
	"YAcy",
	"YIcy",
	"YUcy",
	"Yacute",
	"Ycirc",
	"Ycy",
	"Yfr",
	"Yopf",
	"Yscr",
	"Yuml",
	"ZHcy",
	"Zacute",
	"Zcaron",
	"Zcy",
	"Zdot",
	"ZeroWidthSpace",
	"Zeta",
	"Zfr",
	"Zopf",
	"Zscr",
	"aacute",
	"abreve",
	"ac",
	"acE",
	"acd",
	"acirc",
	"acute",
	"acy",
	"aelig",
	"af",
	"afr",
	"agrave",
	"alefsym",
	"aleph",
	"alpha",
	"amacr",
	"amalg",
	"amp",
	"and",
	"andand",
	"andd",
	"andslope",
	"andv",
	"ang",
	"ange",
	"angle",
	"angmsd",
	"angmsdaa",
	"angmsdab",
	"angmsdac",
	"angmsdad",
	"angmsdae",
	"angmsdaf",
	"angmsdag",
	"angmsdah",
	"angrt",
	"angrtvb",
	"angrtvbd",
	"angsph",
	"angst",
	"angzarr",
	"aogon",
	"aopf",
	"ap",
	"apE",
	"apacir",
	"ape",
	"apid",
	"apos",
	"approx",
	"approxeq",
	"aring",
	"ascr",
	"ast",
	"asymp",
	"asympeq",
	"atilde",
	"auml",
	"awconint",
	"awint",
	"bNot",
	"backcong",
	"backepsilon",
	"backprime",
	"backsim",
	"backsimeq",
	"barvee",
	"barwed",
	"barwedge",
	"bbrk",
	"bbrktbrk",
	"bcong",
	"bcy",
	"bdquo",
	"becaus",
	"because",
	"bemptyv",
	"bepsi",
	"bernou",
	"beta",
	"beth",
	"between",
	"bfr",
	"bigcap",
	"bigcirc",
	"bigcup",
	"bigodot",
	"bigoplus",
	"bigotimes",
	"bigsqcup",
	"bigstar",
	"bigtriangledown",
	"bigtriangleup",
	"biguplus",
	"bigvee",
	"bigwedge",
	"bkarow",
	"blacklozenge",
	"blacksquare",
	"blacktriangle",
	"blacktriangledown",
	"blacktriangleleft",
	"blacktriangleright",
	"blank",
	"blk12",
	"blk14",
	"blk34",
	"block",
	"bne",
	"bnequiv",
	"bnot",
	"bopf",
	"bot",
	"bottom",
	"bowtie",
	"boxDL",
	"boxDR",
	"boxDl",
	"boxDr",
	"boxH",
	"boxHD",
	"boxHU",
	"boxHd",
	"boxHu",
	"boxUL",
	"boxUR",
	"boxUl",
	"boxUr",
	"boxV",
	"boxVH",
	"boxVL",
	"boxVR",
	"boxVh",
	"boxVl",
	"boxVr",
	"boxbox",
	"boxdL",
	"boxdR",
	"boxdl",
	"boxdr",
	"boxh",
	"boxhD",
	"boxhU",
	"boxhd",
	"boxhu",
	"boxminus",
	"boxplus",
	"boxtimes",
	"boxuL",
	"boxuR",
	"boxul",
	"boxur",
	"boxv",
	"boxvH",
	"boxvL",
	"boxvR",
	"boxvh",
	"boxvl",
	"boxvr",
	"bprime",
	"breve",
	"brvbar",
	"bscr",
	"bsemi",
	"bsim",
	"bsime",
	"bsol",
	"bsolb",
	"bsolhsub",
	"bull",
	"bullet",
	"bump",
	"bumpE",
	"bumpe",
	"bumpeq",
	"cacute",
	"cap",
	"capand",
	"capbrcup",
	"capcap",
	"capcup",
	"capdot",
	"caps",
	"caret",
	"caron",
	"ccaps",
	"ccaron",
	"ccedil",
	"ccirc",
	"ccups",
	"ccupssm",
	"cdot",
	"cedil",
	"cemptyv",
	"cent",
	"centerdot",
	"cfr",
	"chcy",
	"check",
	"checkmark",
	"chi",
	"cir",
	"cirE",
	"circ",
	"circeq",
	"circlearrowleft",
	"circlearrowright",
	"circledR",
	"circledS",
	"circledast",
	"circledcirc",
	"circleddash",
	"cire",
	"cirfnint",
	"cirmid",
	"cirscir",
	"clubs",
	"clubsuit",
	"colon",
	"colone",
	"coloneq",
	"comma",
	"commat",
	"comp",
	"compfn",
	"complement",
	"complexes",
	"cong",
	"congdot",
	"conint",
	"copf",
	"coprod",
	"copy",
	"copysr",
	"crarr",
	"cross",
	"cscr",
	"csub",
	"csube",
	"csup",
	"csupe",
	"ctdot",
	"cudarrl",
	"cudarrr",
	"cuepr",
	"cuesc",
	"cularr",
	"cularrp",
	"cup",
	"cupbrcap",
	"cupcap",
	"cupcup",
	"cupdot",
	"cupor",
	"cups",
	"curarr",
	"curarrm",
	"curlyeqprec",
	"curlyeqsucc",
	"curlyvee",
	"curlywedge",
	"curren",
	"curvearrowleft",
	"curvearrowright",
	"cuvee",
	"cuwed",
	"cwconint",
	"cwint",
	"cylcty",
	"dArr",
	"dHar",
	"dagger",
	"daleth",
	"darr",
	"dash",
	"dashv",
	"dbkarow",
	"dblac",
	"dcaron",
	"dcy",
	"dd",
	"ddagger",
	"ddarr",
	"ddotseq",
	"deg",
	"delta",
	"demptyv",
	"dfisht",
	"dfr",
	"dharl",
	"dharr",
	"diam",
	"diamond",
	"diamondsuit",
	"diams",
	"die",
	"digamma",
	"disin",
	"div",
	"divide",
	"divideontimes",
	"divonx",
	"djcy",
	"dlcorn",
	"dlcrop",
	"dollar",
	"dopf",
	"dot",
	"doteq",
	"doteqdot",
	"dotminus",
	"dotplus",
	"dotsquare",
	"doublebarwedge",
	"downarrow",
	"downdownarrows",
	"downharpoonleft",
	"downharpoonright",
	"drbkarow",
	"drcorn",
	"drcrop",
	"dscr",
	"dscy",
	"dsol",
	"dstrok",
	"dtdot",
	"dtri",
	"dtrif",
	"duarr",
	"duhar",
	"dwangle",
	"dzcy",
	"dzigrarr",
	"eDDot",
	"eDot",
	"eacute",
	"easter",
	"ecaron",
	"ecir",
	"ecirc",
	"ecolon",
	"ecy",
	"edot",
	"ee",
	"efDot",
	"efr",
	"eg",
	"egrave",
	"egs",
	"egsdot",
	"el",
	"elinters",
	"ell",
	"els",
	"elsdot",
	"emacr",
	"empty",
	"emptyset",
	"emptyv",
	"emsp13",
	"emsp14",
	"emsp",
	"eng",
	"ensp",
	"eogon",
	"eopf",
	"epar",
	"eparsl",
	"eplus",
	"epsi",
	"epsilon",
	"epsiv",
	"eqcirc",
	"eqcolon",
	"eqsim",
	"eqslantgtr",
	"eqslantless",
	"equals",
	"equest",
	"equiv",
	"equivDD",
	"eqvparsl",
	"erDot",
	"erarr",
	"escr",
	"esdot",
	"esim",
	"eta",
	"eth",
	"euml",
	"euro",
	"excl",
	"exist",
	"expectation",
	"exponentiale",
	"fallingdotseq",
	"fcy",
	"female",
	"ffilig",
	"fflig",
	"ffllig",
	"ffr",
	"filig",
	"fjlig",
	"flat",
	"fllig",
	"fltns",
	"fnof",
	"fopf",
	"forall",
	"fork",
	"forkv",
	"fpartint",
	"frac12",
	"frac13",
	"frac14",
	"frac15",
	"frac16",
	"frac18",
	"frac23",
	"frac25",
	"frac34",
	"frac35",
	"frac38",
	"frac45",
	"frac56",
	"frac58",
	"frac78",
	"frasl",
	"frown",
	"fscr",
	"gE",
	"gEl",
	"gacute",
	"gamma",
	"gammad",
	"gap",
	"gbreve",
	"gcirc",
	"gcy",
	"gdot",
	"ge",
	"gel",
	"geq",
	"geqq",
	"geqslant",
	"ges",
	"gescc",
	"gesdot",
	"gesdoto",
	"gesdotol",
	"gesl",
	"gesles",
	"gfr",
	"gg",
	"ggg",
	"gimel",
	"gjcy",
	"gl",
	"glE",
	"gla",
	"glj",
	"gnE",
	"gnap",
	"gnapprox",
	"gne",
	"gneq",
	"gneqq",
	"gnsim",
	"gopf",
	"grave",
	"gscr",
	"gsim",
	"gsime",
	"gsiml",
	"gt",
	"gtcc",
	"gtcir",
	"gtdot",
	"gtlPar",
	"gtquest",
	"gtrapprox",
	"gtrarr",
	"gtrdot",
	"gtreqless",
	"gtreqqless",
	"gtrless",
	"gtrsim",
	"gvertneqq",
	"gvnE",
	"hArr",
	"hairsp",
	"half",
	"hamilt",
	"hardcy",
	"harr",
	"harrcir",
	"harrw",
	"hbar",
	"hcirc",
	"hearts",
	"heartsuit",
	"hellip",
	"hercon",
	"hfr",
	"hksearow",
	"hkswarow",
	"hoarr",
	"homtht",
	"hookleftarrow",
	"hookrightarrow",
	"hopf",
	"horbar",
	"hscr",
	"hslash",
	"hstrok",
	"hybull",
	"hyphen",
	"iacute",
	"ic",
	"icirc",
	"icy",
	"iecy",
	"iexcl",
	"iff",
	"ifr",
	"igrave",
	"ii",
	"iiiint",
	"iiint",
	"iinfin",
	"iiota",
	"ijlig",
	"imacr",
	"image",
	"imagline",
	"imagpart",
	"imath",
	"imof",
	"imped",
	"in",
	"incare",
	"infin",
	"infintie",
	"inodot",
	"int",
	"intcal",
	"integers",
	"intercal",
	"intlarhk",
	"intprod",
	"iocy",
	"iogon",
	"iopf",
	"iota",
	"iprod",
	"iquest",
	"iscr",
	"isin",
	"isinE",
	"isindot",
	"isins",
	"isinsv",
	"isinv",
	"it",
	"itilde",
	"iukcy",
	"iuml",
	"jcirc",
	"jcy",
	"jfr",
	"jmath",
	"jopf",
	"jscr",
	"jsercy",
	"jukcy",
	"kappa",
	"kappav",
	"kcedil",
	"kcy",
	"kfr",
	"kgreen",
	"khcy",
	"kjcy",
	"kopf",
	"kscr",
	"lAarr",
	"lArr",
	"lAtail",
	"lBarr",
	"lE",
	"lEg",
	"lHar",
	"lacute",
	"laemptyv",
	"lagran",
	"lambda",
	"lang",
	"langd",
	"langle",
	"lap",
	"laquo",
	"larr",
	"larrb",
	"larrbfs",
	"larrfs",
	"larrhk",
	"larrlp",
	"larrpl",
	"larrsim",
	"larrtl",
	"lat",
	"latail",
	"late",
	"lates",
	"lbarr",
	"lbbrk",
	"lbrace",
	"lbrack",
	"lbrke",
	"lbrksld",
	"lbrkslu",
	"lcaron",
	"lcedil",
	"lceil",
	"lcub",
	"lcy",
	"ldca",
	"ldquo",
	"ldquor",
	"ldrdhar",
	"ldrushar",
	"ldsh",
	"le",
	"leftarrow",
	"leftarrowtail",
	"leftharpoondown",
	"leftharpoonup",
	"leftleftarrows",
	"leftrightarrow",
	"leftrightarrows",
	"leftrightharpoons",
	"leftrightsquigarrow",
	"leftthreetimes",
	"leg",
	"leq",
	"leqq",
	"leqslant",
	"les",
	"lescc",
	"lesdot",
	"lesdoto",
	"lesdotor",
	"lesg",
	"lesges",
	"lessapprox",
	"lessdot",
	"lesseqgtr",
	"lesseqqgtr",
	"lessgtr",
	"lesssim",
	"lfisht",
	"lfloor",
	"lfr",
	"lg",
	"lgE",
	"lhard",
	"lharu",
	"lharul",
	"lhblk",
	"ljcy",
	"ll",
	"llarr",
	"llcorner",
	"llhard",
	"lltri",
	"lmidot",
	"lmoust",
	"lmoustache",
	"lnE",
	"lnap",
	"lnapprox",
	"lne",
	"lneq",
	"lneqq",
	"lnsim",
	"loang",
	"loarr",
	"lobrk",
	"longleftarrow",
	"longleftrightarrow",
	"longmapsto",
	"longrightarrow",
	"looparrowleft",
	"looparrowright",
	"lopar",
	"lopf",
	"loplus",
	"lotimes",
	"lowast",
	"lowbar",
	"loz",
	"lozenge",
	"lozf",
	"lpar",
	"lparlt",
	"lrarr",
	"lrcorner",
	"lrhar",
	"lrhard",
	"lrm",
	"lrtri",
	"lsaquo",
	"lscr",
	"lsh",
	"lsim",
	"lsime",
	"lsimg",
	"lsqb",
	"lsquo",
	"lsquor",
	"lstrok",
	"lt",
	"ltcc",
	"ltcir",
	"ltdot",
	"lthree",
	"ltimes",
	"ltlarr",
	"ltquest",
	"ltrPar",
	"ltri",
	"ltrie",
	"ltrif",
	"lurdshar",
	"luruhar",
	"lvertneqq",
	"lvnE",
	"mDDot",
	"macr",
	"male",
	"malt",
	"maltese",
	"map",
	"mapsto",
	"mapstodown",
	"mapstoleft",
	"mapstoup",
	"marker",
	"mcomma",
	"mcy",
	"mdash",
	"measuredangle",
	"mfr",
	"mho",
	"micro",
	"mid",
	"midast",
	"midcir",
	"middot",
	"minus",
	"minusb",
	"minusd",
	"minusdu",
	"mlcp",
	"mldr",
	"mnplus",
	"models",
	"mopf",
	"mp",
	"mscr",
	"mstpos",
	"mu",
	"multimap",
	"mumap",
	"nGg",
	"nGt",
	"nGtv",
	"nLeftarrow",
	"nLeftrightarrow",
	"nLl",
	"nLt",
	"nLtv",
	"nRightarrow",
	"nVDash",
	"nVdash",
	"nabla",
	"nacute",
	"nang",
	"nap",
	"napE",
	"napid",
	"napos",
	"napprox",
	"natur",
	"natural",
	"naturals",
	"nbsp",
	"nbump",
	"nbumpe",
	"ncap",
	"ncaron",
	"ncedil",
	"ncong",
	"ncongdot",
	"ncup",
	"ncy",
	"ndash",
	"ne",
	"neArr",
	"nearhk",
	"nearr",
	"nearrow",
	"nedot",
	"nequiv",
	"nesear",
	"nesim",
	"nexist",
	"nexists",
	"nfr",
	"ngE",
	"nge",
	"ngeq",
	"ngeqq",
	"ngeqslant",
	"nges",
	"ngsim",
	"ngt",
	"ngtr",
	"nhArr",
	"nharr",
	"nhpar",
	"ni",
	"nis",
	"nisd",
	"niv",
	"njcy",
	"nlArr",
	"nlE",
	"nlarr",
	"nldr",
	"nle",
	"nleftarrow",
	"nleftrightarrow",
	"nleq",
	"nleqq",
	"nleqslant",
	"nles",
	"nless",
	"nlsim",
	"nlt",
	"nltri",
	"nltrie",
	"nmid",
	"nopf",
	"not",
	"notin",
	"notinE",
	"notindot",
	"notinva",
	"notinvb",
	"notinvc",
	"notni",
	"notniva",
	"notnivb",
	"notnivc",
	"npar",
	"nparallel",
	"nparsl",
	"npart",
	"npolint",
	"npr",
	"nprcue",
	"npre",
	"nprec",
	"npreceq",
	"nrArr",
	"nrarr",
	"nrarrc",
	"nrarrw",
	"nrightarrow",
	"nrtri",
	"nrtrie",
	"nsc",
	"nsccue",
	"nsce",
	"nscr",
	"nshortmid",
	"nshortparallel",
	"nsim",
	"nsime",
	"nsimeq",
	"nsmid",
	"nspar",
	"nsqsube",
	"nsqsupe",
	"nsub",
	"nsubE",
	"nsube",
	"nsubset",
	"nsubseteq",
	"nsubseteqq",
	"nsucc",
	"nsucceq",
	"nsup",
	"nsupE",
	"nsupe",
	"nsupset",
	"nsupseteq",
	"nsupseteqq",
	"ntgl",
	"ntilde",
	"ntlg",
	"ntriangleleft",
	"ntrianglelefteq",
	"ntriangleright",
	"ntrianglerighteq",
	"nu",
	"num",
	"numero",
	"numsp",
	"nvDash",
	"nvHarr",
	"nvap",
	"nvdash",
	"nvge",
	"nvgt",
	"nvinfin",
	"nvlArr",
	"nvle",
	"nvlt",
	"nvltrie",
	"nvrArr",
	"nvrtrie",
	"nvsim",
	"nwArr",
	"nwarhk",
	"nwarr",
	"nwarrow",
	"nwnear",
	"oS",
	"oacute",
	"oast",
	"ocir",
	"ocirc",
	"ocy",
	"odash",
	"odblac",
	"odiv",
	"odot",
	"odsold",
	"oelig",
	"ofcir",
	"ofr",
	"ogon",
	"ograve",
	"ogt",
	"ohbar",
	"ohm",
	"oint",
	"olarr",
	"olcir",
	"olcross",
	"oline",
	"olt",
	"omacr",
	"omega",
	"omicron",
	"omid",
	"ominus",
	"oopf",
	"opar",
	"operp",
	"oplus",
	"or",
	"orarr",
	"ord",
	"order",
	"orderof",
	"ordf",
	"ordm",
	"origof",
	"oror",
	"orslope",
	"orv",
	"oscr",
	"oslash",
	"osol",
	"otilde",
	"otimes",
	"otimesas",
	"ouml",
	"ovbar",
	"par",
	"para",
	"parallel",
	"parsim",
	"parsl",
	"part",
	"pcy",
	"percnt",
	"period",
	"permil",
	"perp",
	"pertenk",
	"pfr",
	"phi",
	"phiv",
	"phmmat",
	"phone",
	"pi",
	"pitchfork",
	"piv",
	"planck",
	"planckh",
	"plankv",
	"plus",
	"plusacir",
	"plusb",
	"pluscir",
	"plusdo",
	"plusdu",
	"pluse",
	"plusmn",
	"plussim",
	"plustwo",
	"pm",
	"pointint",
	"popf",
	"pound",
	"pr",
	"prE",
	"prap",
	"prcue",
	"pre",
	"prec",
	"precapprox",
	"preccurlyeq",
	"preceq",
	"precnapprox",
	"precneqq",
	"precnsim",
	"precsim",
	"prime",
	"primes",
	"prnE",
	"prnap",
	"prnsim",
	"prod",
	"profalar",
	"profline",
	"profsurf",
	"prop",
	"propto",
	"prsim",
	"prurel",
	"pscr",
	"psi",
	"puncsp",
	"qfr",
	"qint",
	"qopf",
	"qprime",
	"qscr",
	"quaternions",
	"quatint",
	"quest",
	"questeq",
	"quot",
	"rAarr",
	"rArr",
	"rAtail",
	"rBarr",
	"rHar",
	"race",
	"racute",
	"radic",
	"raemptyv",
	"rang",
	"rangd",
	"range",
	"rangle",
	"raquo",
	"rarr",
	"rarrap",
	"rarrb",
	"rarrbfs",
	"rarrc",
	"rarrfs",
	"rarrhk",
	"rarrlp",
	"rarrpl",
	"rarrsim",
	"rarrtl",
	"rarrw",
	"ratail",
	"ratio",
	"rationals",
	"rbarr",
	"rbbrk",
	"rbrace",
	"rbrack",
	"rbrke",
	"rbrksld",
	"rbrkslu",
	"rcaron",
	"rcedil",
	"rceil",
	"rcub",
	"rcy",
	"rdca",
	"rdldhar",
	"rdquo",
	"rdquor",
	"rdsh",
	"real",
	"realine",
	"realpart",
	"reals",
	"rect",
	"reg",
	"rfisht",
	"rfloor",
	"rfr",
	"rhard",
	"rharu",
	"rharul",
	"rho",
	"rhov",
	"rightarrow",
	"rightarrowtail",
	"rightharpoondown",
	"rightharpoonup",
	"rightleftarrows",
	"rightleftharpoons",
	"rightrightarrows",
	"rightsquigarrow",
	"rightthreetimes",
	"ring",
	"risingdotseq",
	"rlarr",
	"rlhar",
	"rlm",
	"rmoust",
	"rmoustache",
	"rnmid",
	"roang",
	"roarr",
	"robrk",
	"ropar",
	"ropf",
	"roplus",
	"rotimes",
	"rpar",
	"rpargt",
	"rppolint",
	"rrarr",
	"rsaquo",
	"rscr",
	"rsh",
	"rsqb",
	"rsquo",
	"rsquor",
	"rthree",
	"rtimes",
	"rtri",
	"rtrie",
	"rtrif",
	"rtriltri",
	"ruluhar",
	"rx",
	"sacute",
	"sbquo",
	"sc",
	"scE",
	"scap",
	"scaron",
	"sccue",
	"sce",
	"scedil",
	"scirc",
	"scnE",
	"scnap",
	"scnsim",
	"scpolint",
	"scsim",
	"scy",
	"sdot",
	"sdotb",
	"sdote",
	"seArr",
	"searhk",
	"searr",
	"searrow",
	"sect",
	"semi",
	"seswar",
	"setminus",
	"setmn",
	"sext",
	"sfr",
	"sfrown",
	"sharp",
	"shchcy",
	"shcy",
	"shortmid",
	"shortparallel",
	"shy",
	"sigma",
	"sigmaf",
	"sigmav",
	"sim",
	"simdot",
	"sime",
	"simeq",
	"simg",
	"simgE",
	"siml",
	"simlE",
	"simne",
	"simplus",
	"simrarr",
	"slarr",
	"smallsetminus",
	"smashp",
	"smeparsl",
	"smid",
	"smile",
	"smt",
	"smte",
	"smtes",
	"softcy",
	"sol",
	"solb",
	"solbar",
	"sopf",
	"spades",
	"spadesuit",
	"spar",
	"sqcap",
	"sqcaps",
	"sqcup",
	"sqcups",
	"sqsub",
	"sqsube",
	"sqsubset",
	"sqsubseteq",
	"sqsup",
	"sqsupe",
	"sqsupset",
	"sqsupseteq",
	"squ",
	"square",
	"squarf",
	"squf",
	"srarr",
	"sscr",
	"ssetmn",
	"ssmile",
	"sstarf",
	"star",
	"starf",
	"straightepsilon",
	"straightphi",
	"strns",
	"sub",
	"subE",
	"subdot",
	"sube",
	"subedot",
	"submult",
	"subnE",
	"subne",
	"subplus",
	"subrarr",
	"subset",
	"subseteq",
	"subseteqq",
	"subsetneq",
	"subsetneqq",
	"subsim",
	"subsub",
	"subsup",
	"succ",
	"succapprox",
	"succcurlyeq",
	"succeq",
	"succnapprox",
	"succneqq",
	"succnsim",
	"succsim",
	"sum",
	"sung",
	"sup1",
	"sup2",
	"sup3",
	"sup",
	"supE",
	"supdot",
	"supdsub",
	"supe",
	"supedot",
	"suphsol",
	"suphsub",
	"suplarr",
	"supmult",
	"supnE",
	"supne",
	"supplus",
	"supset",
	"supseteq",
	"supseteqq",
	"supsetneq",
	"supsetneqq",
	"supsim",
	"supsub",
	"supsup",
	"swArr",
	"swarhk",
	"swarr",
	"swarrow",
	"swnwar",
	"szlig",
	"target",
	"tau",
	"tbrk",
	"tcaron",
	"tcedil",
	"tcy",
	"tdot",
	"telrec",
	"tfr",
	"there4",
	"therefore",
	"theta",
	"thetasym",
	"thetav",
	"thickapprox",
	"thicksim",
	"thinsp",
	"thkap",
	"thksim",
	"thorn",
	"tilde",
	"times",
	"timesb",
	"timesbar",
	"timesd",
	"tint",
	"toea",
	"top",
	"topbot",
	"topcir",
	"topf",
	"topfork",
	"tosa",
	"tprime",
	"trade",
	"triangle",
	"triangledown",
	"triangleleft",
	"trianglelefteq",
	"triangleq",
	"triangleright",
	"trianglerighteq",
	"tridot",
	"trie",
	"triminus",
	"triplus",
	"trisb",
	"tritime",
	"trpezium",
	"tscr",
	"tscy",
	"tshcy",
	"tstrok",
	"twixt",
	"twoheadleftarrow",
	"twoheadrightarrow",
	"uArr",
	"uHar",
	"uacute",
	"uarr",
	"ubrcy",
	"ubreve",
	"ucirc",
	"ucy",
	"udarr",
	"udblac",
	"udhar",
	"ufisht",
	"ufr",
	"ugrave",
	"uharl",
	"uharr",
	"uhblk",
	"ulcorn",
	"ulcorner",
	"ulcrop",
	"ultri",
	"umacr",
	"uml",
	"uogon",
	"uopf",
	"uparrow",
	"updownarrow",
	"upharpoonleft",
	"upharpoonright",
	"uplus",
	"upsi",
	"upsih",
	"upsilon",
	"upuparrows",
	"urcorn",
	"urcorner",
	"urcrop",
	"uring",
	"urtri",
	"uscr",
	"utdot",
	"utilde",
	"utri",
	"utrif",
	"uuarr",
	"uuml",
	"uwangle",
	"vArr",
	"vBar",
	"vBarv",
	"vDash",
	"vangrt",
	"varepsilon",
	"varkappa",
	"varnothing",
	"varphi",
	"varpi",
	"varpropto",
	"varr",
	"varrho",
	"varsigma",
	"varsubsetneq",
	"varsubsetneqq",
	"varsupsetneq",
	"varsupsetneqq",
	"vartheta",
	"vartriangleleft",
	"vartriangleright",
	"vcy",
	"vdash",
	"vee",
	"veebar",
	"veeeq",
	"vellip",
	"verbar",
	"vert",
	"vfr",
	"vltri",
	"vnsub",
	"vnsup",
	"vopf",
	"vprop",
	"vrtri",
	"vscr",
	"vsubnE",
	"vsubne",
	"vsupnE",
	"vsupne",
	"vzigzag",
	"wcirc",
	"wedbar",
	"wedge",
	"wedgeq",
	"weierp",
	"wfr",
	"wopf",
	"wp",
	"wr",
	"wreath",
	"wscr",
	"xcap",
	"xcirc",
	"xcup",
	"xdtri",
	"xfr",
	"xhArr",
	"xharr",
	"xi",
	"xlArr",
	"xlarr",
	"xmap",
	"xnis",
	"xodot",
	"xopf",
	"xoplus",
	"xotime",
	"xrArr",
	"xrarr",
	"xscr",
	"xsqcup",
	"xuplus",
	"xutri",
	"xvee",
	"xwedge",
	"yacute",
	"yacy",
	"ycirc",
	"ycy",
	"yen",
	"yfr",
	"yicy",
	"yopf",
	"yscr",
	"yucy",
	"yuml",
	"zacute",
	"zcaron",
	"zcy",
	"zdot",
	"zeetrf",
	"zeta",
	"zfr",
	"zhcy",
	"zigrarr",
	"zopf",
	"zscr",
	"zwj",
	"zwnj"
];

function stringFixBrokenNamedEntities(str, originalOpts) {
  function isNotaLetter(str) {
    return !(
      typeof str === "string" &&
      str.length === 1 &&
      str.toUpperCase() !== str.toLowerCase()
    );
  }
  if (typeof str !== "string") {
    throw new Error(
      `string-fix-broken-named-entities: [THROW_ID_01] the first input argument must be string! It was given as:\n${JSON.stringify(
        str,
        null,
        4
      )} (${typeof str}-type)`
    );
  }
  const defaults = {
    decode: false,
    cb: null,
    progressFn: null
  };
  let opts;
  if (originalOpts != null) {
    if (!isObj(originalOpts)) {
      throw new Error(
        `string-fix-broken-named-entities: [THROW_ID_02] the second input argument must be a plain object! I was given as:\n${JSON.stringify(
          originalOpts,
          null,
          4
        )} (${typeof originalOpts}-type)`
      );
    } else {
      opts = Object.assign({}, defaults, originalOpts);
    }
  } else {
    opts = defaults;
  }
  if (opts.cb && typeof opts.cb !== "function") {
    throw new TypeError(
      `string-fix-broken-named-entities: [THROW_ID_03] opts.cb must be a function (or falsey)! Currently it's: ${typeof opts.cb}, equal to: ${JSON.stringify(
        opts.cb,
        null,
        4
      )}`
    );
  }
  if (opts.progressFn && typeof opts.progressFn !== "function") {
    throw new TypeError(
      `string-fix-broken-named-entities: [THROW_ID_04] opts.progressFn must be a function (or falsey)! Currently it's: ${typeof opts.progressFn}, equal to: ${JSON.stringify(
        opts.progressFn,
        null,
        4
      )}`
    );
  }
  let state_AmpersandNotNeeded = false;
  const nbspDefault = {
    nameStartsAt: null,
    ampersandNecessary: null,
    patience: 2,
    matchedN: null,
    matchedB: null,
    matchedS: null,
    matchedP: null,
    matchedSemicol: null
  };
  let nbsp = clone(nbspDefault);
  const nbspWipe = () => {
    nbsp = clone(nbspDefault);
  };
  const rangesArr = [];
  const rangesArr2 = [];
  let smallestCharFromTheSetAt;
  let largestCharFromTheSetAt;
  let matchedLettersCount;
  let setOfValues;
  let percentageDone;
  let lastPercentageDone;
  const len = str.length + 1;
  let counter = 0;
  let doNothingUntil = null;
  outerloop: for (let i = 0; i < len; i++) {
    if (opts.progressFn) {
      percentageDone = Math.floor((counter / len) * 100);
      if (percentageDone !== lastPercentageDone) {
        lastPercentageDone = percentageDone;
        opts.progressFn(percentageDone);
      }
    }
    if (doNothingUntil) {
      if (doNothingUntil !== true && i >= doNothingUntil) {
        doNothingUntil = null;
      } else {
        continue;
      }
    }
    matchedLettersCount =
      (nbsp.matchedN !== null ? 1 : 0) +
      (nbsp.matchedB !== null ? 1 : 0) +
      (nbsp.matchedS !== null ? 1 : 0) +
      (nbsp.matchedP !== null ? 1 : 0);
    setOfValues = [
      nbsp.matchedN,
      nbsp.matchedB,
      nbsp.matchedS,
      nbsp.matchedP
    ].filter(val => val !== null);
    smallestCharFromTheSetAt = Math.min(...setOfValues);
    largestCharFromTheSetAt = Math.max(...setOfValues);
    if (
      nbsp.nameStartsAt !== null &&
      matchedLettersCount > 2 &&
      (nbsp.matchedSemicol !== null ||
        !nbsp.ampersandNecessary ||
        ((isNotaLetter(str[nbsp.nameStartsAt - 1]) && isNotaLetter(str[i])) ||
          ((isNotaLetter(str[nbsp.nameStartsAt - 1]) || isNotaLetter(str[i])) &&
            largestCharFromTheSetAt - smallestCharFromTheSetAt <= 4) ||
          (nbsp.matchedN !== null &&
            nbsp.matchedB !== null &&
            nbsp.matchedS !== null &&
            nbsp.matchedP !== null &&
            nbsp.matchedN + 1 === nbsp.matchedB &&
            nbsp.matchedB + 1 === nbsp.matchedS &&
            nbsp.matchedS + 1 === nbsp.matchedP))) &&
      (!str[i] ||
        (nbsp.matchedN !== null &&
          nbsp.matchedB !== null &&
          nbsp.matchedS !== null &&
          nbsp.matchedP !== null &&
          str[i] !== str[i - 1]) ||
        (str[i].toLowerCase() !== "n" &&
          str[i].toLowerCase() !== "b" &&
          str[i].toLowerCase() !== "s" &&
          str[i].toLowerCase() !== "p") ||
        str[left(str, i)] === ";") &&
      str[i] !== ";" &&
      (str[i + 1] === undefined || str[right(str, i)] !== ";")
    ) {
      if (
        (nbsp.ampersandNecessary !== false &&
          str.slice(nbsp.nameStartsAt, i) !== "&nbsp;") ||
        (nbsp.ampersandNecessary === false &&
          str.slice(
            Math.min(
              nbsp.matchedN,
              nbsp.matchedB,
              nbsp.matchedS,
              nbsp.matchedP
            ),
            i
          ) !== "nbsp;")
      ) {
        if (
          nbsp.nameStartsAt != null &&
          i - nbsp.nameStartsAt === 5 &&
          str.slice(nbsp.nameStartsAt, i) === "&nbsp" &&
          !opts.decode
        ) {
          if (opts.cb) {
            rangesArr2.push(
              opts.cb({
                ruleName: "bad-named-html-entity-missing-semicolon",
                entityName: "nbsp",
                rangeFrom: i,
                rangeTo: i,
                rangeValEncoded: ";",
                rangeValDecoded: ";"
              })
            );
          }
          rangesArr.push([i, i, ";"]);
        } else {
          const chompedAmpFromLeft = chompLeft(
            str,
            nbsp.nameStartsAt,
            "&?",
            "a",
            "m",
            "p",
            ";?"
          );
          const beginningOfTheRange = chompedAmpFromLeft
            ? chompedAmpFromLeft
            : nbsp.nameStartsAt;
          if (opts.cb) {
            rangesArr2.push(
              opts.cb({
                ruleName: "bad-named-html-entity-malformed-nbsp",
                entityName: "nbsp",
                rangeFrom: beginningOfTheRange,
                rangeTo: i,
                rangeValEncoded: "&nbsp;",
                rangeValDecoded: "\xA0"
              })
            );
          }
          rangesArr.push([
            beginningOfTheRange,
            i,
            opts.decode ? "\xA0" : "&nbsp;"
          ]);
        }
      }
      nbspWipe();
      continue outerloop;
    }
    if (
      str[i] &&
      str[i - 1] === ";" &&
      !leftSeq(str, i - 1, "a", "m", "p") &&
      str[i] !== ";" &&
      matchedLettersCount > 0
    ) {
      nbspWipe();
      continue outerloop;
    }
    if (str[i] === "a") {
      const singleAmpOnTheRight = rightSeq(str, i, "m", "p", ";");
      if (singleAmpOnTheRight) {
        let toDeleteAllAmpEndHere = singleAmpOnTheRight.rightmostChar + 1;
        const nextAmpOnTheRight = rightSeq(
          str,
          singleAmpOnTheRight.rightmostChar,
          "a",
          "m",
          "p",
          ";"
        );
        if (nextAmpOnTheRight) {
          toDeleteAllAmpEndHere = nextAmpOnTheRight.rightmostChar + 1;
          let temp;
          do {
            temp = rightSeq(str, toDeleteAllAmpEndHere - 1, "a", "m", "p", ";");
            if (temp) {
              toDeleteAllAmpEndHere = temp.rightmostChar + 1;
            }
          } while (temp);
        }
        const firstCharThatFollows = right(str, toDeleteAllAmpEndHere - 1);
        let matchedTemp;
        if (
          str[firstCharThatFollows] &&
          allNamedEntities.some(entity => {
            if (str.startsWith(`${entity};`, firstCharThatFollows)) {
              matchedTemp = entity;
              return true;
            }
          })
        ) {
          doNothingUntil = firstCharThatFollows + matchedTemp.length + 1;
          const whatsOnTheLeft = left(str, i);
          if (str[whatsOnTheLeft] === "&") {
            if (opts.cb) {
              rangesArr2.push(
                opts.cb({
                  ruleName: "bad-named-html-entity-multiple-encoding",
                  entityName: "amp",
                  rangeFrom: whatsOnTheLeft + 1,
                  rangeTo: firstCharThatFollows,
                  rangeValEncoded: null,
                  rangeValDecoded: null
                })
              );
            }
            rangesArr.push([whatsOnTheLeft + 1, firstCharThatFollows]);
          } else if (whatsOnTheLeft) {
            let rangeFrom = whatsOnTheLeft + 1;
            let spaceReplacement = "";
            if (!str[rangeFrom].trim().length) {
              if (str[rangeFrom] === " ") {
                rangeFrom++;
              } else if (!`\n\r`.includes(str[rangeFrom])) {
                spaceReplacement = " ";
              } else {
                rangeFrom = i;
              }
            }
            if (opts.cb) {
              rangesArr2.push(
                opts.cb({
                  ruleName: "bad-named-html-entity-multiple-encoding",
                  entityName: "amp",
                  rangeFrom: rangeFrom,
                  rangeTo: firstCharThatFollows,
                  rangeValEncoded: `${spaceReplacement}&`,
                  rangeValDecoded: `${spaceReplacement}&`
                })
              );
            }
            rangesArr.push([
              rangeFrom,
              firstCharThatFollows,
              `${spaceReplacement}&`
            ]);
          }
        }
      }
    }
    if (str[i] === "&") {
      if (
        nbsp.nameStartsAt &&
        nbsp.nameStartsAt < i &&
        (nbsp.matchedN || nbsp.matchedB || nbsp.matchedS || nbsp.matchedP)
      ) {
        nbspWipe();
      }
      if (nbsp.nameStartsAt === null) {
        if (nbsp.ampersandNecessary === null) {
          nbsp.nameStartsAt = i;
          nbsp.ampersandNecessary = false;
        }
      } else {
        if (!nbsp.ampersandNecessary) {
          let endingIndex = i + 1;
          const whatsOnTheRight = right(str, i);
          if (str[whatsOnTheRight] === "&") {
            for (let y = whatsOnTheRight; y < len; y++) {
              if (str[y].trim().length && str[y] !== "&") {
                endingIndex = y;
                doNothingUntil = y;
                break;
              }
            }
          }
          if (opts.cb) {
            rangesArr2.push(
              opts.cb({
                ruleName: "bad-named-html-entity-duplicate-ampersand",
                entityName: "nbsp",
                rangeFrom: i,
                rangeTo: endingIndex,
                rangeValEncoded: null,
                rangeValDecoded: null
              })
            );
          }
          rangesArr.push([i, endingIndex]);
        }
      }
      if (str[i + 1] === "a" && str[i + 2] === "n" && str[i + 3] === "g") {
        if (str[i + 4] !== "s" && str[i + 4] !== ";") {
          if (opts.cb) {
            rangesArr2.push(
              opts.cb({
                ruleName: "bad-named-html-entity-missing-semicolon",
                entityName: "ang",
                rangeFrom: i + 4,
                rangeTo: i + 4,
                rangeValEncoded: "&ang;",
                rangeValDecoded: "\u2220"
              })
            );
          }
          rangesArr.push([i, i + 4, opts.decode ? "\u2220" : "&ang;"]);
          i += 3;
          continue outerloop;
        } else if (
          str[i + 4] === "s" &&
          str[i + 5] === "t" &&
          str[i + 6] !== ";"
        ) {
          if (opts.cb) {
            rangesArr2.push(
              opts.cb({
                ruleName: "bad-named-html-entity-missing-semicolon",
                entityName: "angst",
                rangeFrom: i + 6,
                rangeTo: i + 6,
                rangeValEncoded: "&angst;",
                rangeValDecoded: "\xC5"
              })
            );
          }
          rangesArr.push([i, i + 6, opts.decode ? "\xC5" : "&angst;"]);
          i += 5;
          continue outerloop;
        }
      } else if (str[i + 1] === "p" && str[i + 2] === "i") {
        if (str[i + 3] !== "v" && str[i + 3] !== ";") {
          if (opts.cb) {
            rangesArr2.push(
              opts.cb({
                ruleName: "bad-named-html-entity-missing-semicolon",
                entityName: "pi",
                rangeFrom: i + 3,
                rangeTo: i + 3,
                rangeValEncoded: "&pi;",
                rangeValDecoded: "\u03C0"
              })
            );
          }
          rangesArr.push([i, i + 3, opts.decode ? "\u03C0" : "&pi;"]);
          i += 3;
          continue outerloop;
        } else if (str[i + 3] === "v" && str[i + 4] !== ";") {
          if (opts.cb) {
            rangesArr2.push(
              opts.cb({
                ruleName: "bad-named-html-entity-missing-semicolon",
                entityName: "piv",
                rangeFrom: i + 4,
                rangeTo: i + 4,
                rangeValEncoded: "&piv;",
                rangeValDecoded: "\u03D6"
              })
            );
          }
          rangesArr.push([i, i + 4, opts.decode ? "\u03D6" : "&piv;"]);
          i += 3;
          continue outerloop;
        }
      } else if (
        str[i + 1] === "P" &&
        str[i + 2] === "i" &&
        str[i + 3] !== ";"
      ) {
        if (opts.cb) {
          rangesArr2.push(
            opts.cb({
              ruleName: "bad-named-html-entity-missing-semicolon",
              entityName: "Pi",
              rangeFrom: i + 3,
              rangeTo: i + 3,
              rangeValEncoded: "&Pi;",
              rangeValDecoded: "\u03A0"
            })
          );
        }
        rangesArr.push([i, i + 3, opts.decode ? "\u03A0" : "&Pi;"]);
        i += 2;
        continue outerloop;
      } else if (str[i + 1] === "s") {
        if (
          str[i + 2] === "i" &&
          str[i + 3] === "g" &&
          str[i + 4] === "m" &&
          str[i + 5] === "a" &&
          str[i + 6] !== ";" &&
          str[i + 6] !== "f"
        ) {
          if (opts.cb) {
            rangesArr2.push(
              opts.cb({
                ruleName: "bad-named-html-entity-missing-semicolon",
                entityName: "sigma",
                rangeFrom: i + 6,
                rangeTo: i + 6,
                rangeValEncoded: "&sigma;",
                rangeValDecoded: "\u03C3"
              })
            );
          }
          rangesArr.push([i, i + 6, opts.decode ? "\u03C3" : "&sigma;"]);
          i += 5;
          continue outerloop;
        } else if (
          str[i + 2] === "u" &&
          str[i + 3] === "b" &&
          str[i + 4] !== ";" &&
          str[i + 4] !== "e"
        ) {
          if (opts.cb) {
            rangesArr2.push(
              opts.cb({
                ruleName: "bad-named-html-entity-missing-semicolon",
                entityName: "sub",
                rangeFrom: i + 4,
                rangeTo: i + 4,
                rangeValEncoded: "&sub;",
                rangeValDecoded: "\u2282"
              })
            );
          }
          rangesArr.push([i, i + 4, opts.decode ? "\u2282" : "&sub;"]);
          i += 3;
          continue outerloop;
        } else if (
          str[i + 2] === "u" &&
          str[i + 3] === "p" &&
          str[i + 4] !== "f" &&
          str[i + 4] !== "e" &&
          str[i + 4] !== "1" &&
          str[i + 4] !== "2" &&
          str[i + 4] !== "3" &&
          str[i + 4] !== ";"
        ) {
          if (opts.cb) {
            rangesArr2.push(
              opts.cb({
                ruleName: "bad-named-html-entity-missing-semicolon",
                entityName: "sup",
                rangeFrom: i + 4,
                rangeTo: i + 4,
                rangeValEncoded: "&sup;",
                rangeValDecoded: "\u2283"
              })
            );
          }
          rangesArr.push([i, i + 4, opts.decode ? "\u2283" : "&sup;"]);
          i += 3;
          continue outerloop;
        }
      } else if (str[i + 1] === "t") {
        if (
          str[i + 2] === "h" &&
          str[i + 3] === "e" &&
          str[i + 4] === "t" &&
          str[i + 5] === "a" &&
          str[i + 6] !== "s" &&
          str[i + 6] !== ";"
        ) {
          if (opts.cb) {
            rangesArr2.push(
              opts.cb({
                ruleName: "bad-named-html-entity-missing-semicolon",
                entityName: "theta",
                rangeFrom: i + 6,
                rangeTo: i + 6,
                rangeValEncoded: "&theta;",
                rangeValDecoded: "\u03B8"
              })
            );
          }
          rangesArr.push([i, i + 6, opts.decode ? "\u03B8" : "&theta;"]);
          i += 5;
          continue outerloop;
        } else if (
          str[i + 2] === "h" &&
          str[i + 3] === "i" &&
          str[i + 4] === "n" &&
          str[i + 5] === "s" &&
          str[i + 6] === "p" &&
          str[i + 7] !== ";"
        ) {
          if (opts.cb) {
            rangesArr2.push(
              opts.cb({
                ruleName: "bad-named-html-entity-missing-semicolon",
                entityName: "thinsp",
                rangeFrom: i + 7,
                rangeTo: i + 7,
                rangeValEncoded: "&thinsp;",
                rangeValDecoded: "\u2009"
              })
            );
          }
          rangesArr.push([i, i + 7, opts.decode ? "\u2009" : "&thinsp;"]);
          i += 6;
          continue outerloop;
        }
      }
    }
    if (str[i] && str[i].toLowerCase() === "n") {
      if (str[i - 1] === "i" && str[i + 1] === "s") {
        nbspWipe();
        continue outerloop;
      }
      if (nbsp.matchedN === null) {
        nbsp.matchedN = i;
      }
      if (nbsp.nameStartsAt === null) {
        nbsp.nameStartsAt = i;
        if (nbsp.ampersandNecessary === null && !state_AmpersandNotNeeded) {
          nbsp.ampersandNecessary = true;
        } else if (nbsp.ampersandNecessary !== true) {
          nbsp.ampersandNecessary = false;
        }
      }
    }
    if (str[i] && str[i].toLowerCase() === "b") {
      if (nbsp.nameStartsAt !== null) {
        if (nbsp.matchedB === null) {
          nbsp.matchedB = i;
        }
      } else if (nbsp.patience) {
        nbsp.patience--;
        nbsp.nameStartsAt = i;
        nbsp.matchedB = i;
        if (nbsp.ampersandNecessary === null && !state_AmpersandNotNeeded) {
          nbsp.ampersandNecessary = true;
        } else if (nbsp.ampersandNecessary !== true) {
          nbsp.ampersandNecessary = false;
        }
      } else {
        nbspWipe();
        continue outerloop;
      }
    }
    if (str[i] && str[i].toLowerCase() === "s") {
      if (nbsp.nameStartsAt !== null) {
        if (nbsp.matchedS === null) {
          nbsp.matchedS = i;
        }
      } else if (nbsp.patience) {
        nbsp.patience--;
        nbsp.nameStartsAt = i;
        nbsp.matchedS = i;
        if (nbsp.ampersandNecessary === null && !state_AmpersandNotNeeded) {
          nbsp.ampersandNecessary = true;
        } else if (nbsp.ampersandNecessary !== true) {
          nbsp.ampersandNecessary = false;
        }
      } else {
        nbspWipe();
        continue outerloop;
      }
    }
    if (str[i] && str[i].toLowerCase() === "p") {
      if (nbsp.nameStartsAt !== null) {
        if (nbsp.matchedP === null) {
          nbsp.matchedP = i;
        }
      } else if (nbsp.patience) {
        nbsp.patience--;
        nbsp.nameStartsAt = i;
        nbsp.matchedP = i;
        if (nbsp.ampersandNecessary === null && !state_AmpersandNotNeeded) {
          nbsp.ampersandNecessary = true;
        } else if (nbsp.ampersandNecessary !== true) {
          nbsp.ampersandNecessary = false;
        }
      } else {
        nbspWipe();
        continue outerloop;
      }
    }
    if (str[i] === ";") {
      if (nbsp.nameStartsAt !== null) {
        nbsp.matchedSemicol = i;
        if (
          (nbsp.matchedN &&
            !nbsp.matchedB &&
            !nbsp.matchedS &&
            !nbsp.matchedP) ||
          (!nbsp.matchedN &&
          nbsp.matchedB &&
            !nbsp.matchedS &&
            !nbsp.matchedP) ||
          (!nbsp.matchedN &&
          !nbsp.matchedB &&
          nbsp.matchedS &&
            !nbsp.matchedP) ||
          (!nbsp.matchedN && !nbsp.matchedB && !nbsp.matchedS && nbsp.matchedP)
        ) {
          nbspWipe();
        }
      }
    }
    if (state_AmpersandNotNeeded) {
      state_AmpersandNotNeeded = false;
      if (
        nbsp.nameStartsAt &&
        (nbsp.matchedN || nbsp.matchedB || nbsp.matchedS || nbsp.matchedP)
      ) {
        nbsp.ampersandNecessary = false;
      }
    }
    if (
      nbsp.nameStartsAt !== null &&
      i > nbsp.nameStartsAt &&
      str[i] &&
      str[i].toLowerCase() !== "n" &&
      str[i].toLowerCase() !== "b" &&
      str[i].toLowerCase() !== "s" &&
      str[i].toLowerCase() !== "p" &&
      str[i] !== "&" &&
      str[i] !== ";" &&
      str[i] !== " "
    ) {
      if (nbsp.patience) {
        nbsp.patience = nbsp.patience - 1;
      } else {
        nbspWipe();
        continue outerloop;
      }
    }
    counter++;
  }
  if (!rangesArr.length) {
    return null;
  }
  if (opts.cb) {
    return rangesArr2.filter((el, i) => {
      if (
        rangesArr.some((range, i2) => {
          if (i === i2) {
            return false;
          }
          if (rangesArr[i][0] >= range[0] && rangesArr[i][1] <= range[1]) {
            return true;
          }
          return false;
        })
      ) {
        return false;
      }
      return true;
    });
  }
  return rangesMerge(rangesArr, { joinRangesThatTouchEdges: false });
}

export default stringFixBrokenNamedEntities;
