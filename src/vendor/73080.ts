import { Cl, fX } from "../vendor/633063";
import { $$default, strategies } from "../vendor/232664";
import { Ei, Zo, $x, IF, O4 } from "../vendor/338581";
var t;
var f;
var r;
var a;
var o;
var $$u6;
function d(e) {
  return e.type === f.literal;
}
function s(e) {
  return e.type === f.number;
}
function c(e) {
  return e.type === f.date;
}
function h(e) {
  return e.type === f.time;
}
function p(e) {
  return e.type === f.select;
}
function g(e) {
  return e.type === f.plural;
}
function m(e) {
  return e.type === f.tag;
}
function _(e) {
  return !!(e && "object" == typeof e && e.type === r.number);
}
function b(e) {
  return !!(e && "object" == typeof e && e.type === r.dateTime);
}
!function (e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE";
  e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT";
  e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT";
  e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE";
  e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE";
  e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE";
  e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON";
  e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON";
  e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON";
  e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON";
  e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE";
  e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS";
  e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE";
  e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE";
  e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR";
  e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR";
  e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT";
  e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT";
  e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR";
  e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR";
  e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR";
  e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE";
  e[e.INVALID_TAG = 23] = "INVALID_TAG";
  e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME";
  e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG";
  e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
}(t || (t = {}));
(function (e) {
  e[e.literal = 0] = "literal";
  e[e.argument = 1] = "argument";
  e[e.number = 2] = "number";
  e[e.date = 3] = "date";
  e[e.time = 4] = "time";
  e[e.select = 5] = "select";
  e[e.plural = 6] = "plural";
  e[e.pound = 7] = "pound";
  e[e.tag = 8] = "tag";
})(f || (f = {}));
(function (e) {
  e[e.number = 0] = "number";
  e[e.dateTime = 1] = "dateTime";
})(r || (r = {}));
var y = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/;
var v = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
var w = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
var k = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g;
var S = /^(@+)?(\+|#+)?[rs]?$/g;
var E = /(\*)(0+)|(#+)(0+)|(0+)/g;
var x = /^(0+)$/;
function C(e) {
  var n = {};
  "r" === e[e.length - 1] ? n.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (n.roundingPriority = "lessPrecision");
  e.replace(S, function (e, i, t) {
    "string" != typeof t ? (n.minimumSignificantDigits = i.length, n.maximumSignificantDigits = i.length) : "+" === t ? n.minimumSignificantDigits = i.length : "#" === i[0] ? n.maximumSignificantDigits = i.length : (n.minimumSignificantDigits = i.length, n.maximumSignificantDigits = i.length + ("string" == typeof t ? t.length : 0));
    return "";
  });
  return n;
}
function T(e) {
  switch (e) {
    case "sign-auto":
      return {
        signDisplay: "auto"
      };
    case "sign-accounting":
    case "()":
      return {
        currencySign: "accounting"
      };
    case "sign-always":
    case "+!":
      return {
        signDisplay: "always"
      };
    case "sign-accounting-always":
    case "()!":
      return {
        signDisplay: "always",
        currencySign: "accounting"
      };
    case "sign-except-zero":
    case "+?":
      return {
        signDisplay: "exceptZero"
      };
    case "sign-accounting-except-zero":
    case "()?":
      return {
        signDisplay: "exceptZero",
        currencySign: "accounting"
      };
    case "sign-never":
    case "+_":
      return {
        signDisplay: "never"
      };
  }
}
function P(e) {
  return T(e) || {};
}
var L = {
  AX: ["H"],
  BQ: ["H"],
  CP: ["H"],
  CZ: ["H"],
  DK: ["H"],
  FI: ["H"],
  ID: ["H"],
  IS: ["H"],
  ML: ["H"],
  NE: ["H"],
  RU: ["H"],
  SE: ["H"],
  SJ: ["H"],
  SK: ["H"],
  AS: ["h", "H"],
  BT: ["h", "H"],
  DJ: ["h", "H"],
  ER: ["h", "H"],
  GH: ["h", "H"],
  IN: ["h", "H"],
  LS: ["h", "H"],
  PG: ["h", "H"],
  PW: ["h", "H"],
  SO: ["h", "H"],
  TO: ["h", "H"],
  VU: ["h", "H"],
  WS: ["h", "H"],
  "001": ["H", "h"],
  AL: ["h", "H", "hB"],
  TD: ["h", "H", "hB"],
  "ca-ES": ["H", "h", "hB"],
  CF: ["H", "h", "hB"],
  CM: ["H", "h", "hB"],
  "fr-CA": ["H", "h", "hB"],
  "gl-ES": ["H", "h", "hB"],
  "it-CH": ["H", "h", "hB"],
  "it-IT": ["H", "h", "hB"],
  LU: ["H", "h", "hB"],
  NP: ["H", "h", "hB"],
  PF: ["H", "h", "hB"],
  SC: ["H", "h", "hB"],
  SM: ["H", "h", "hB"],
  SN: ["H", "h", "hB"],
  TF: ["H", "h", "hB"],
  VA: ["H", "h", "hB"],
  CY: ["h", "H", "hb", "hB"],
  GR: ["h", "H", "hb", "hB"],
  CO: ["h", "H", "hB", "hb"],
  DO: ["h", "H", "hB", "hb"],
  KP: ["h", "H", "hB", "hb"],
  KR: ["h", "H", "hB", "hb"],
  NA: ["h", "H", "hB", "hb"],
  PA: ["h", "H", "hB", "hb"],
  PR: ["h", "H", "hB", "hb"],
  VE: ["h", "H", "hB", "hb"],
  AC: ["H", "h", "hb", "hB"],
  AI: ["H", "h", "hb", "hB"],
  BW: ["H", "h", "hb", "hB"],
  BZ: ["H", "h", "hb", "hB"],
  CC: ["H", "h", "hb", "hB"],
  CK: ["H", "h", "hb", "hB"],
  CX: ["H", "h", "hb", "hB"],
  DG: ["H", "h", "hb", "hB"],
  FK: ["H", "h", "hb", "hB"],
  GB: ["H", "h", "hb", "hB"],
  GG: ["H", "h", "hb", "hB"],
  GI: ["H", "h", "hb", "hB"],
  IE: ["H", "h", "hb", "hB"],
  IM: ["H", "h", "hb", "hB"],
  IO: ["H", "h", "hb", "hB"],
  JE: ["H", "h", "hb", "hB"],
  LT: ["H", "h", "hb", "hB"],
  MK: ["H", "h", "hb", "hB"],
  MN: ["H", "h", "hb", "hB"],
  MS: ["H", "h", "hb", "hB"],
  NF: ["H", "h", "hb", "hB"],
  NG: ["H", "h", "hb", "hB"],
  NR: ["H", "h", "hb", "hB"],
  NU: ["H", "h", "hb", "hB"],
  PN: ["H", "h", "hb", "hB"],
  SH: ["H", "h", "hb", "hB"],
  SX: ["H", "h", "hb", "hB"],
  TA: ["H", "h", "hb", "hB"],
  ZA: ["H", "h", "hb", "hB"],
  "af-ZA": ["H", "h", "hB", "hb"],
  AR: ["H", "h", "hB", "hb"],
  CL: ["H", "h", "hB", "hb"],
  CR: ["H", "h", "hB", "hb"],
  CU: ["H", "h", "hB", "hb"],
  EA: ["H", "h", "hB", "hb"],
  "es-BO": ["H", "h", "hB", "hb"],
  "es-BR": ["H", "h", "hB", "hb"],
  "es-EC": ["H", "h", "hB", "hb"],
  "es-ES": ["H", "h", "hB", "hb"],
  "es-GQ": ["H", "h", "hB", "hb"],
  "es-PE": ["H", "h", "hB", "hb"],
  GT: ["H", "h", "hB", "hb"],
  HN: ["H", "h", "hB", "hb"],
  IC: ["H", "h", "hB", "hb"],
  KG: ["H", "h", "hB", "hb"],
  KM: ["H", "h", "hB", "hb"],
  LK: ["H", "h", "hB", "hb"],
  MA: ["H", "h", "hB", "hb"],
  MX: ["H", "h", "hB", "hb"],
  NI: ["H", "h", "hB", "hb"],
  PY: ["H", "h", "hB", "hb"],
  SV: ["H", "h", "hB", "hb"],
  UY: ["H", "h", "hB", "hb"],
  JP: ["H", "h", "K"],
  AD: ["H", "hB"],
  AM: ["H", "hB"],
  AO: ["H", "hB"],
  AT: ["H", "hB"],
  AW: ["H", "hB"],
  BE: ["H", "hB"],
  BF: ["H", "hB"],
  BJ: ["H", "hB"],
  BL: ["H", "hB"],
  BR: ["H", "hB"],
  CG: ["H", "hB"],
  CI: ["H", "hB"],
  CV: ["H", "hB"],
  DE: ["H", "hB"],
  EE: ["H", "hB"],
  FR: ["H", "hB"],
  GA: ["H", "hB"],
  GF: ["H", "hB"],
  GN: ["H", "hB"],
  GP: ["H", "hB"],
  GW: ["H", "hB"],
  HR: ["H", "hB"],
  IL: ["H", "hB"],
  IT: ["H", "hB"],
  KZ: ["H", "hB"],
  MC: ["H", "hB"],
  MD: ["H", "hB"],
  MF: ["H", "hB"],
  MQ: ["H", "hB"],
  MZ: ["H", "hB"],
  NC: ["H", "hB"],
  NL: ["H", "hB"],
  PM: ["H", "hB"],
  PT: ["H", "hB"],
  RE: ["H", "hB"],
  RO: ["H", "hB"],
  SI: ["H", "hB"],
  SR: ["H", "hB"],
  ST: ["H", "hB"],
  TG: ["H", "hB"],
  TR: ["H", "hB"],
  WF: ["H", "hB"],
  YT: ["H", "hB"],
  BD: ["h", "hB", "H"],
  PK: ["h", "hB", "H"],
  AZ: ["H", "hB", "h"],
  BA: ["H", "hB", "h"],
  BG: ["H", "hB", "h"],
  CH: ["H", "hB", "h"],
  GE: ["H", "hB", "h"],
  LI: ["H", "hB", "h"],
  ME: ["H", "hB", "h"],
  RS: ["H", "hB", "h"],
  UA: ["H", "hB", "h"],
  UZ: ["H", "hB", "h"],
  XK: ["H", "hB", "h"],
  AG: ["h", "hb", "H", "hB"],
  AU: ["h", "hb", "H", "hB"],
  BB: ["h", "hb", "H", "hB"],
  BM: ["h", "hb", "H", "hB"],
  BS: ["h", "hb", "H", "hB"],
  CA: ["h", "hb", "H", "hB"],
  DM: ["h", "hb", "H", "hB"],
  "en-001": ["h", "hb", "H", "hB"],
  FJ: ["h", "hb", "H", "hB"],
  FM: ["h", "hb", "H", "hB"],
  GD: ["h", "hb", "H", "hB"],
  GM: ["h", "hb", "H", "hB"],
  GU: ["h", "hb", "H", "hB"],
  GY: ["h", "hb", "H", "hB"],
  JM: ["h", "hb", "H", "hB"],
  KI: ["h", "hb", "H", "hB"],
  KN: ["h", "hb", "H", "hB"],
  KY: ["h", "hb", "H", "hB"],
  LC: ["h", "hb", "H", "hB"],
  LR: ["h", "hb", "H", "hB"],
  MH: ["h", "hb", "H", "hB"],
  MP: ["h", "hb", "H", "hB"],
  MW: ["h", "hb", "H", "hB"],
  NZ: ["h", "hb", "H", "hB"],
  SB: ["h", "hb", "H", "hB"],
  SG: ["h", "hb", "H", "hB"],
  SL: ["h", "hb", "H", "hB"],
  SS: ["h", "hb", "H", "hB"],
  SZ: ["h", "hb", "H", "hB"],
  TC: ["h", "hb", "H", "hB"],
  TT: ["h", "hb", "H", "hB"],
  UM: ["h", "hb", "H", "hB"],
  US: ["h", "hb", "H", "hB"],
  VC: ["h", "hb", "H", "hB"],
  VG: ["h", "hb", "H", "hB"],
  VI: ["h", "hb", "H", "hB"],
  ZM: ["h", "hb", "H", "hB"],
  BO: ["H", "hB", "h", "hb"],
  EC: ["H", "hB", "h", "hb"],
  ES: ["H", "hB", "h", "hb"],
  GQ: ["H", "hB", "h", "hb"],
  PE: ["H", "hB", "h", "hb"],
  AE: ["h", "hB", "hb", "H"],
  "ar-001": ["h", "hB", "hb", "H"],
  BH: ["h", "hB", "hb", "H"],
  DZ: ["h", "hB", "hb", "H"],
  EG: ["h", "hB", "hb", "H"],
  EH: ["h", "hB", "hb", "H"],
  HK: ["h", "hB", "hb", "H"],
  IQ: ["h", "hB", "hb", "H"],
  JO: ["h", "hB", "hb", "H"],
  KW: ["h", "hB", "hb", "H"],
  LB: ["h", "hB", "hb", "H"],
  LY: ["h", "hB", "hb", "H"],
  MO: ["h", "hB", "hb", "H"],
  MR: ["h", "hB", "hb", "H"],
  OM: ["h", "hB", "hb", "H"],
  PH: ["h", "hB", "hb", "H"],
  PS: ["h", "hB", "hb", "H"],
  QA: ["h", "hB", "hb", "H"],
  SA: ["h", "hB", "hb", "H"],
  SD: ["h", "hB", "hb", "H"],
  SY: ["h", "hB", "hb", "H"],
  TN: ["h", "hB", "hb", "H"],
  YE: ["h", "hB", "hb", "H"],
  AF: ["H", "hb", "hB", "h"],
  LA: ["H", "hb", "hB", "h"],
  CN: ["H", "hB", "hb", "h"],
  LV: ["H", "hB", "hb", "h"],
  TL: ["H", "hB", "hb", "h"],
  "zu-ZA": ["H", "hB", "hb", "h"],
  CD: ["hB", "H"],
  IR: ["hB", "H"],
  "hi-IN": ["hB", "h", "H"],
  "kn-IN": ["hB", "h", "H"],
  "ml-IN": ["hB", "h", "H"],
  "te-IN": ["hB", "h", "H"],
  KH: ["hB", "h", "H", "hb"],
  "ta-IN": ["hB", "h", "hb", "H"],
  BN: ["hb", "hB", "h", "H"],
  MY: ["hb", "hB", "h", "H"],
  ET: ["hB", "hb", "h", "H"],
  "gu-IN": ["hB", "hb", "h", "H"],
  "mr-IN": ["hB", "hb", "h", "H"],
  "pa-IN": ["hB", "hb", "h", "H"],
  TW: ["hB", "hb", "h", "H"],
  KE: ["hB", "hb", "H", "h"],
  MM: ["hB", "hb", "H", "h"],
  TZ: ["hB", "hb", "H", "h"],
  UG: ["hB", "hb", "H", "h"]
};
var N = new RegExp("^".concat(y.source, "*"));
var O = new RegExp("".concat(y.source, "*$"));
function A(e, n) {
  return {
    start: e,
    end: n
  };
}
var M = !!String.prototype.startsWith;
var R = !!String.fromCodePoint;
var j = !!Object.fromEntries;
var I = !!String.prototype.codePointAt;
var z = !!String.prototype.trimStart;
var B = !!String.prototype.trimEnd;
var H = Number.isSafeInteger ? Number.isSafeInteger : function (e) {
  return "number" == typeof e && isFinite(e) && Math.floor(e) === e && 0x1fffffffffffff >= Math.abs(e);
};
var D = !0;
try {
  var U = K("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  D = U.exec("a")?.[0] === "a";
} catch (e) {
  D = !1;
}
var F = M ? function (e, n, i) {
  return e.startsWith(n, i);
} : function (e, n, i) {
  return e.slice(i, i + n.length) === n;
};
var $ = R ? String.fromCodePoint : function () {
  for (n = [], i = 0, void 0; i < $$arguments.length; i++) {
    var e;
    var n;
    var i;
    n[i] = $$arguments[i];
  }
  for (t = "", f = n.length, r = 0, void 0; f > r;) {
    var t;
    var f;
    var r;
    if ((e = n[r++]) > 1114111) throw RangeError(e + " is not a valid code point");
    t += e < 65536 ? String.fromCharCode(e) : String.fromCharCode(((e -= 65536) >> 10) + 55296, e % 1024 + 56320);
  }
  return t;
};
var q = j ? Object.fromEntries : function (e) {
  for (n = {}, i = 0, void 0; i < e.length; i++) {
    var n;
    var i;
    var t = e[i];
    var f = t[0];
    var r = t[1];
    n[f] = r;
  }
  return n;
};
var G = I ? function (e, n) {
  return e.codePointAt(n);
} : function (e, n) {
  var i;
  var t = e.length;
  if (!(n < 0) && !(n >= t)) {
    var f = e.charCodeAt(n);
    return f < 55296 || f > 56319 || n + 1 === t || (i = e.charCodeAt(n + 1)) < 56320 || i > 57343 ? f : (f - 55296 << 10) + (i - 56320) + 65536;
  }
};
var W = z ? function (e) {
  return e.trimStart();
} : function (e) {
  return e.replace(N, "");
};
var V = B ? function (e) {
  return e.trimEnd();
} : function (e) {
  return e.replace(O, "");
};
function K(e, n) {
  return new RegExp(e, n);
}
if (D) {
  var X = K("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  o = function (e, n) {
    var i;
    X.lastIndex = n;
    return null !== (i = X.exec(e)[1]) && void 0 !== i ? i : "";
  };
} else o = function (e, n) {
  for (var i = [];;) {
    var t;
    var f = G(e, n);
    if (void 0 === f || Z(f) || (t = f) >= 33 && t <= 35 || 36 === t || t >= 37 && t <= 39 || 40 === t || 41 === t || 42 === t || 43 === t || 44 === t || 45 === t || t >= 46 && t <= 47 || t >= 58 && t <= 59 || t >= 60 && t <= 62 || t >= 63 && t <= 64 || 91 === t || 92 === t || 93 === t || 94 === t || 96 === t || 123 === t || 124 === t || 125 === t || 126 === t || 161 === t || t >= 162 && t <= 165 || 166 === t || 167 === t || 169 === t || 171 === t || 172 === t || 174 === t || 176 === t || 177 === t || 182 === t || 187 === t || 191 === t || 215 === t || 247 === t || t >= 8208 && t <= 8213 || t >= 8214 && t <= 8215 || 8216 === t || 8217 === t || 8218 === t || t >= 8219 && t <= 8220 || 8221 === t || 8222 === t || 8223 === t || t >= 8224 && t <= 8231 || t >= 8240 && t <= 8248 || 8249 === t || 8250 === t || t >= 8251 && t <= 8254 || t >= 8257 && t <= 8259 || 8260 === t || 8261 === t || 8262 === t || t >= 8263 && t <= 8273 || 8274 === t || 8275 === t || t >= 8277 && t <= 8286 || t >= 8592 && t <= 8596 || t >= 8597 && t <= 8601 || t >= 8602 && t <= 8603 || t >= 8604 && t <= 8607 || 8608 === t || t >= 8609 && t <= 8610 || 8611 === t || t >= 8612 && t <= 8613 || 8614 === t || t >= 8615 && t <= 8621 || 8622 === t || t >= 8623 && t <= 8653 || t >= 8654 && t <= 8655 || t >= 8656 && t <= 8657 || 8658 === t || 8659 === t || 8660 === t || t >= 8661 && t <= 8691 || t >= 8692 && t <= 8959 || t >= 8960 && t <= 8967 || 8968 === t || 8969 === t || 8970 === t || 8971 === t || t >= 8972 && t <= 8991 || t >= 8992 && t <= 8993 || t >= 8994 && t <= 9e3 || 9001 === t || 9002 === t || t >= 9003 && t <= 9083 || 9084 === t || t >= 9085 && t <= 9114 || t >= 9115 && t <= 9139 || t >= 9140 && t <= 9179 || t >= 9180 && t <= 9185 || t >= 9186 && t <= 9254 || t >= 9255 && t <= 9279 || t >= 9280 && t <= 9290 || t >= 9291 && t <= 9311 || t >= 9472 && t <= 9654 || 9655 === t || t >= 9656 && t <= 9664 || 9665 === t || t >= 9666 && t <= 9719 || t >= 9720 && t <= 9727 || t >= 9728 && t <= 9838 || 9839 === t || t >= 9840 && t <= 10087 || 10088 === t || 10089 === t || 10090 === t || 10091 === t || 10092 === t || 10093 === t || 10094 === t || 10095 === t || 10096 === t || 10097 === t || 10098 === t || 10099 === t || 10100 === t || 10101 === t || t >= 10132 && t <= 10175 || t >= 10176 && t <= 10180 || 10181 === t || 10182 === t || t >= 10183 && t <= 10213 || 10214 === t || 10215 === t || 10216 === t || 10217 === t || 10218 === t || 10219 === t || 10220 === t || 10221 === t || 10222 === t || 10223 === t || t >= 10224 && t <= 10239 || t >= 10240 && t <= 10495 || t >= 10496 && t <= 10626 || 10627 === t || 10628 === t || 10629 === t || 10630 === t || 10631 === t || 10632 === t || 10633 === t || 10634 === t || 10635 === t || 10636 === t || 10637 === t || 10638 === t || 10639 === t || 10640 === t || 10641 === t || 10642 === t || 10643 === t || 10644 === t || 10645 === t || 10646 === t || 10647 === t || 10648 === t || t >= 10649 && t <= 10711 || 10712 === t || 10713 === t || 10714 === t || 10715 === t || t >= 10716 && t <= 10747 || 10748 === t || 10749 === t || t >= 10750 && t <= 11007 || t >= 11008 && t <= 11055 || t >= 11056 && t <= 11076 || t >= 11077 && t <= 11078 || t >= 11079 && t <= 11084 || t >= 11085 && t <= 11123 || t >= 11124 && t <= 11125 || t >= 11126 && t <= 11157 || 11158 === t || t >= 11159 && t <= 11263 || t >= 11776 && t <= 11777 || 11778 === t || 11779 === t || 11780 === t || 11781 === t || t >= 11782 && t <= 11784 || 11785 === t || 11786 === t || 11787 === t || 11788 === t || 11789 === t || t >= 11790 && t <= 11798 || 11799 === t || t >= 11800 && t <= 11801 || 11802 === t || 11803 === t || 11804 === t || 11805 === t || t >= 11806 && t <= 11807 || 11808 === t || 11809 === t || 11810 === t || 11811 === t || 11812 === t || 11813 === t || 11814 === t || 11815 === t || 11816 === t || 11817 === t || t >= 11818 && t <= 11822 || 11823 === t || t >= 11824 && t <= 11833 || t >= 11834 && t <= 11835 || t >= 11836 && t <= 11839 || 11840 === t || 11841 === t || 11842 === t || t >= 11843 && t <= 11855 || t >= 11856 && t <= 11857 || 11858 === t || t >= 11859 && t <= 11903 || t >= 12289 && t <= 12291 || 12296 === t || 12297 === t || 12298 === t || 12299 === t || 12300 === t || 12301 === t || 12302 === t || 12303 === t || 12304 === t || 12305 === t || t >= 12306 && t <= 12307 || 12308 === t || 12309 === t || 12310 === t || 12311 === t || 12312 === t || 12313 === t || 12314 === t || 12315 === t || 12316 === t || 12317 === t || t >= 12318 && t <= 12319 || 12320 === t || 12336 === t || 64830 === t || 64831 === t || t >= 65093 && t <= 65094) break;
    i.push(f);
    n += f >= 65536 ? 2 : 1;
  }
  return $.apply(void 0, i);
};
var Q = function () {
  function e(e, n) {
    void 0 === n && (n = {});
    this.message = e;
    this.position = {
      offset: 0,
      line: 1,
      column: 1
    };
    this.ignoreTag = !!n.ignoreTag;
    this.locale = n.locale;
    this.requiresOtherClause = !!n.requiresOtherClause;
    this.shouldParseSkeletons = !!n.shouldParseSkeletons;
  }
  e.prototype.parse = function () {
    if (0 !== this.offset()) throw Error("parser can only be used once");
    return this.parseMessage(0, "", !1);
  };
  e.prototype.parseMessage = function (e, n, i) {
    for (var r = []; !this.isEOF();) {
      var a = this.$$char();
      if (123 === a) {
        var o = this.parseArgument(e, i);
        if (o.err) return o;
        r.push(o.val);
      } else if (125 === a && e > 0) break;else if (35 === a && ("plural" === n || "selectordinal" === n)) {
        var u = this.clonePosition();
        this.bump();
        r.push({
          type: f.pound,
          location: A(u, this.clonePosition())
        });
      } else if (60 !== a || this.ignoreTag || 47 !== this.peek()) {
        if (60 === a && !this.ignoreTag && Y(this.peek() || 0)) {
          var o = this.parseTag(e, n);
          if (o.err) return o;
          r.push(o.val);
        } else {
          var o = this.parseLiteral(e, n);
          if (o.err) return o;
          r.push(o.val);
        }
      } else {
        if (!i) return this.error(t.UNMATCHED_CLOSING_TAG, A(this.clonePosition(), this.clonePosition()));
        break;
      }
    }
    return {
      val: r,
      err: null
    };
  };
  e.prototype.parseTag = function (e, n) {
    var i = this.clonePosition();
    this.bump();
    var r = this.parseTagName();
    if (this.bumpSpace(), this.bumpIf("/>")) return {
      val: {
        type: f.literal,
        value: "<".concat(r, "/>"),
        location: A(i, this.clonePosition())
      },
      err: null
    };
    if (!this.bumpIf(">")) return this.error(t.INVALID_TAG, A(i, this.clonePosition()));
    var a = this.parseMessage(e + 1, n, !0);
    if (a.err) return a;
    var o = a.val;
    var u = this.clonePosition();
    if (!this.bumpIf("</")) return this.error(t.UNCLOSED_TAG, A(i, this.clonePosition()));
    if (this.isEOF() || !Y(this.$$char())) return this.error(t.INVALID_TAG, A(u, this.clonePosition()));
    var l = this.clonePosition();
    return r !== this.parseTagName() ? this.error(t.UNMATCHED_CLOSING_TAG, A(l, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">")) ? {
      val: {
        type: f.tag,
        value: r,
        children: o,
        location: A(i, this.clonePosition())
      },
      err: null
    } : this.error(t.INVALID_TAG, A(u, this.clonePosition()));
  };
  e.prototype.parseTagName = function () {
    var e;
    var n = this.offset();
    for (this.bump(); !this.isEOF() && (45 === (e = this.$$char()) || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039);) this.bump();
    return this.message.slice(n, this.offset());
  };
  e.prototype.parseLiteral = function (e, n) {
    for (i = this.clonePosition(), t = "", void 0;;) {
      var i;
      var t;
      var r = this.tryParseQuote(n);
      if (r) {
        t += r;
        continue;
      }
      var a = this.tryParseUnquoted(e, n);
      if (a) {
        t += a;
        continue;
      }
      var o = this.tryParseLeftAngleBracket();
      if (o) {
        t += o;
        continue;
      }
      break;
    }
    var u = A(i, this.clonePosition());
    return {
      val: {
        type: f.literal,
        value: t,
        location: u
      },
      err: null
    };
  };
  e.prototype.tryParseLeftAngleBracket = function () {
    var e;
    return this.isEOF() || 60 !== this.$$char() || !this.ignoreTag && (Y(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
  };
  e.prototype.tryParseQuote = function (e) {
    if (this.isEOF() || 39 !== this.$$char()) return null;
    switch (this.peek()) {
      case 39:
        this.bump();
        this.bump();
        return "'";
      case 123:
      case 60:
      case 62:
      case 125:
        break;
      case 35:
        if ("plural" === e || "selectordinal" === e) break;
        return null;
      default:
        return null;
    }
    this.bump();
    var n = [this.$$char()];
    for (this.bump(); !this.isEOF();) {
      var i = this.$$char();
      if (39 === i) {
        if (39 === this.peek()) {
          n.push(39);
          this.bump();
        } else {
          this.bump();
          break;
        }
      } else n.push(i);
      this.bump();
    }
    return $.apply(void 0, n);
  };
  e.prototype.tryParseUnquoted = function (e, n) {
    if (this.isEOF()) return null;
    var i = this.$$char();
    return 60 === i || 123 === i || 35 === i && ("plural" === n || "selectordinal" === n) || 125 === i && e > 0 ? null : (this.bump(), $(i));
  };
  e.prototype.parseArgument = function (e, n) {
    var i = this.clonePosition();
    if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(t.EXPECT_ARGUMENT_CLOSING_BRACE, A(i, this.clonePosition()));
    if (125 === this.$$char()) {
      this.bump();
      return this.error(t.EMPTY_ARGUMENT, A(i, this.clonePosition()));
    }
    var r = this.parseIdentifierIfPossible().value;
    if (!r) return this.error(t.MALFORMED_ARGUMENT, A(i, this.clonePosition()));
    if (this.bumpSpace(), this.isEOF()) return this.error(t.EXPECT_ARGUMENT_CLOSING_BRACE, A(i, this.clonePosition()));
    switch (this.$$char()) {
      case 125:
        this.bump();
        return {
          val: {
            type: f.argument,
            value: r,
            location: A(i, this.clonePosition())
          },
          err: null
        };
      case 44:
        if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(t.EXPECT_ARGUMENT_CLOSING_BRACE, A(i, this.clonePosition()));
        return this.parseArgumentOptions(e, n, r, i);
      default:
        return this.error(t.MALFORMED_ARGUMENT, A(i, this.clonePosition()));
    }
  };
  e.prototype.parseIdentifierIfPossible = function () {
    var e = this.clonePosition();
    var n = this.offset();
    var i = o(this.message, n);
    var t = n + i.length;
    this.bumpTo(t);
    return {
      value: i,
      location: A(e, this.clonePosition())
    };
  };
  e.prototype.parseArgumentOptions = function (e, n, i, a) {
    var o;
    var u = this.clonePosition();
    var d = this.parseIdentifierIfPossible().value;
    var s = this.clonePosition();
    switch (d) {
      case "":
        return this.error(t.EXPECT_ARGUMENT_TYPE, A(u, s));
      case "number":
      case "date":
      case "time":
        this.bumpSpace();
        var c = null;
        if (this.bumpIf(",")) {
          this.bumpSpace();
          var h = this.clonePosition();
          var p = this.parseSimpleArgStyleIfPossible();
          if (p.err) return p;
          var g = V(p.val);
          if (0 === g.length) return this.error(t.EXPECT_ARGUMENT_STYLE, A(this.clonePosition(), this.clonePosition()));
          c = {
            style: g,
            styleLocation: A(h, this.clonePosition())
          };
        }
        var m = this.tryParseArgumentClose(a);
        if (m.err) return m;
        var _ = A(a, this.clonePosition());
        if (c && F(c?.style, "::", 0)) {
          var b;
          var y = W(c.style.slice(2));
          if ("number" === d) {
            var p = this.parseNumberSkeletonFromString(y, c.styleLocation);
            if (p.err) return p;
            return {
              val: {
                type: f.number,
                value: i,
                location: _,
                style: p.val
              },
              err: null
            };
          }
          if (0 === y.length) return this.error(t.EXPECT_DATE_TIME_SKELETON, _);
          var w = y;
          this.locale && (w = function (e, n) {
            for (i = "", t = 0, void 0; t < e.length; t++) {
              var i;
              var t;
              var f = e.charAt(t);
              if ("j" === f) {
                for (var r = 0; t + 1 < e.length && e.charAt(t + 1) === f;) {
                  r++;
                  t++;
                }
                var a = 1 + (1 & r);
                var o = r < 2 ? 1 : 3 + (r >> 1);
                var u = function (e) {
                  var n;
                  var i = e.hourCycle;
                  if (void 0 === i && e.hourCycles && e.hourCycles.length && (i = e.hourCycles[0]), i) switch (i) {
                    case "h24":
                      return "k";
                    case "h23":
                      return "H";
                    case "h12":
                      return "h";
                    case "h11":
                      return "K";
                    default:
                      throw Error("Invalid hourCycle");
                  }
                  var t = e.language;
                  "root" !== t && (n = e.maximize().region);
                  return (L[n || ""] || L[t || ""] || L["".concat(t, "-001")] || L["001"])[0];
                }(n);
                for (("H" == u || "k" == u) && (o = 0); o-- > 0;) i += "a";
                for (; a-- > 0;) i = u + i;
              } else "J" === f ? i += "H" : i += f;
            }
            return i;
          }(y, this.locale));
          var g = {
            type: r.dateTime,
            pattern: w,
            location: c.styleLocation,
            parsedOptions: this.shouldParseSkeletons ? (b = {}, w.replace(v, function (e) {
              var n = e.length;
              switch (e[0]) {
                case "G":
                  b.era = 4 === n ? "long" : 5 === n ? "narrow" : "short";
                  break;
                case "y":
                  b.year = 2 === n ? "2-digit" : "numeric";
                  break;
                case "Y":
                case "u":
                case "U":
                case "r":
                  throw RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
                case "q":
                case "Q":
                  throw RangeError("`q/Q` (quarter) patterns are not supported");
                case "M":
                case "L":
                  b.month = ["numeric", "2-digit", "short", "long", "narrow"][n - 1];
                  break;
                case "w":
                case "W":
                  throw RangeError("`w/W` (week) patterns are not supported");
                case "d":
                  b.day = ["numeric", "2-digit"][n - 1];
                  break;
                case "D":
                case "F":
                case "g":
                  throw RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
                case "E":
                  b.weekday = 4 === n ? "short" : 5 === n ? "narrow" : "short";
                  break;
                case "e":
                  if (n < 4) throw RangeError("`e..eee` (weekday) patterns are not supported");
                  b.weekday = ["short", "long", "narrow", "short"][n - 4];
                  break;
                case "c":
                  if (n < 4) throw RangeError("`c..ccc` (weekday) patterns are not supported");
                  b.weekday = ["short", "long", "narrow", "short"][n - 4];
                  break;
                case "a":
                  b.hour12 = !0;
                  break;
                case "b":
                case "B":
                  throw RangeError("`b/B` (period) patterns are not supported, use `a` instead");
                case "h":
                  b.hourCycle = "h12";
                  b.hour = ["numeric", "2-digit"][n - 1];
                  break;
                case "H":
                  b.hourCycle = "h23";
                  b.hour = ["numeric", "2-digit"][n - 1];
                  break;
                case "K":
                  b.hourCycle = "h11";
                  b.hour = ["numeric", "2-digit"][n - 1];
                  break;
                case "k":
                  b.hourCycle = "h24";
                  b.hour = ["numeric", "2-digit"][n - 1];
                  break;
                case "j":
                case "J":
                case "C":
                  throw RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
                case "m":
                  b.minute = ["numeric", "2-digit"][n - 1];
                  break;
                case "s":
                  b.second = ["numeric", "2-digit"][n - 1];
                  break;
                case "S":
                case "A":
                  throw RangeError("`S/A` (second) patterns are not supported, use `s` instead");
                case "z":
                  b.timeZoneName = n < 4 ? "short" : "long";
                  break;
                case "Z":
                case "O":
                case "v":
                case "V":
                case "X":
                case "x":
                  throw RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
              }
              return "";
            }), b) : {}
          };
          return {
            val: {
              type: "date" === d ? f.date : f.time,
              value: i,
              location: _,
              style: g
            },
            err: null
          };
        }
        return {
          val: {
            type: "number" === d ? f.number : "date" === d ? f.date : f.time,
            value: i,
            location: _,
            style: null !== (o = c?.style) && void 0 !== o ? o : null
          },
          err: null
        };
      case "plural":
      case "selectordinal":
      case "select":
        var k = this.clonePosition();
        if (this.bumpSpace(), !this.bumpIf(",")) return this.error(t.EXPECT_SELECT_ARGUMENT_OPTIONS, A(k, Cl({}, k)));
        this.bumpSpace();
        var S = this.parseIdentifierIfPossible();
        var E = 0;
        if ("select" !== d && "offset" === S.value) {
          if (!this.bumpIf(":")) return this.error(t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, A(this.clonePosition(), this.clonePosition()));
          this.bumpSpace();
          var p = this.tryParseDecimalInteger(t.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, t.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
          if (p.err) return p;
          this.bumpSpace();
          S = this.parseIdentifierIfPossible();
          E = p.val;
        }
        var x = this.tryParsePluralOrSelectOptions(e, d, n, S);
        if (x.err) return x;
        var m = this.tryParseArgumentClose(a);
        if (m.err) return m;
        var C = A(a, this.clonePosition());
        if ("select" === d) return {
          val: {
            type: f.select,
            value: i,
            options: q(x.val),
            location: C
          },
          err: null
        };
        return {
          val: {
            type: f.plural,
            value: i,
            options: q(x.val),
            offset: E,
            pluralType: "plural" === d ? "cardinal" : "ordinal",
            location: C
          },
          err: null
        };
      default:
        return this.error(t.INVALID_ARGUMENT_TYPE, A(u, s));
    }
  };
  e.prototype.tryParseArgumentClose = function (e) {
    return this.isEOF() || 125 !== this.$$char() ? this.error(t.EXPECT_ARGUMENT_CLOSING_BRACE, A(e, this.clonePosition())) : (this.bump(), {
      val: !0,
      err: null
    });
  };
  e.prototype.parseSimpleArgStyleIfPossible = function () {
    for (e = 0, n = this.clonePosition(), void 0; !this.isEOF();) {
      var e;
      var n;
      switch (this.$$char()) {
        case 39:
          this.bump();
          var i = this.clonePosition();
          if (!this.bumpUntil("'")) return this.error(t.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, A(i, this.clonePosition()));
          this.bump();
          break;
        case 123:
          e += 1;
          this.bump();
          break;
        case 125:
          if (!(e > 0)) return {
            val: this.message.slice(n.offset, this.offset()),
            err: null
          };
          e -= 1;
          break;
        default:
          this.bump();
      }
    }
    return {
      val: this.message.slice(n.offset, this.offset()),
      err: null
    };
  };
  e.prototype.parseNumberSkeletonFromString = function (e, n) {
    var i = [];
    try {
      i = function (e) {
        if (0 === e.length) throw Error("Number skeleton cannot be empty");
        for (n = e.split(w).filter(function (e) {
          return e.length > 0;
        }), i = [], t = 0, void 0; t < n.length; t++) {
          var n;
          var i;
          var t;
          var f = n[t].split("/");
          if (0 === f.length) throw Error("Invalid number skeleton");
          for (r = f[0], a = f.slice(1), o = 0, void 0; o < a.length; o++) {
            var r;
            var a;
            var o;
            if (0 === a[o].length) throw Error("Invalid number skeleton");
          }
          i.push({
            stem: r,
            options: a
          });
        }
        return i;
      }(e);
    } catch (e) {
      return this.error(t.INVALID_NUMBER_SKELETON, n);
    }
    return {
      val: {
        type: r.number,
        tokens: i,
        location: n,
        parsedOptions: this.shouldParseSkeletons ? function (e) {
          for (n = {}, i = 0, void 0; i < e.length; i++) {
            var n;
            var i;
            var t = e[i];
            switch (t.stem) {
              case "percent":
              case "%":
                n.style = "percent";
                continue;
              case "%x100":
                n.style = "percent";
                n.scale = 100;
                continue;
              case "currency":
                n.style = "currency";
                n.currency = t.options[0];
                continue;
              case "group-off":
              case ",_":
                n.useGrouping = !1;
                continue;
              case "precision-integer":
              case ".":
                n.maximumFractionDigits = 0;
                continue;
              case "measure-unit":
              case "unit":
                n.style = "unit";
                n.unit = t.options[0].replace(/^(.*?)-/, "");
                continue;
              case "compact-short":
              case "K":
                n.notation = "compact";
                n.compactDisplay = "short";
                continue;
              case "compact-long":
              case "KK":
                n.notation = "compact";
                n.compactDisplay = "long";
                continue;
              case "scientific":
                n = Cl(Cl(Cl({}, n), {
                  notation: "scientific"
                }), t.options.reduce(function (e, n) {
                  return Cl(Cl({}, e), T(n) || {});
                }, {}));
                continue;
              case "engineering":
                n = Cl(Cl(Cl({}, n), {
                  notation: "engineering"
                }), t.options.reduce(function (e, n) {
                  return Cl(Cl({}, e), T(n) || {});
                }, {}));
                continue;
              case "notation-simple":
                n.notation = "standard";
                continue;
              case "unit-width-narrow":
                n.currencyDisplay = "narrowSymbol";
                n.unitDisplay = "narrow";
                continue;
              case "unit-width-short":
                n.currencyDisplay = "code";
                n.unitDisplay = "short";
                continue;
              case "unit-width-full-name":
                n.currencyDisplay = "name";
                n.unitDisplay = "long";
                continue;
              case "unit-width-iso-code":
                n.currencyDisplay = "symbol";
                continue;
              case "scale":
                n.scale = parseFloat(t.options[0]);
                continue;
              case "integer-width":
                if (t.options.length > 1) throw RangeError("integer-width stems only accept a single optional option");
                t.options[0].replace(E, function (e, i, t, f, r, a) {
                  if (i) n.minimumIntegerDigits = t.length;else if (f && r) throw Error("We currently do not support maximum integer digits");else if (a) throw Error("We currently do not support exact integer digits");
                  return "";
                });
                continue;
            }
            if (x.test(t.stem)) {
              n.minimumIntegerDigits = t.stem.length;
              continue;
            }
            if (k.test(t.stem)) {
              if (t.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
              t.stem.replace(k, function (e, i, t, f, r, a) {
                "*" === t ? n.minimumFractionDigits = i.length : f && "#" === f[0] ? n.maximumFractionDigits = f.length : r && a ? (n.minimumFractionDigits = r.length, n.maximumFractionDigits = r.length + a.length) : (n.minimumFractionDigits = i.length, n.maximumFractionDigits = i.length);
                return "";
              });
              var f = t.options[0];
              "w" === f ? n = Cl(Cl({}, n), {
                trailingZeroDisplay: "stripIfInteger"
              }) : f && (n = Cl(Cl({}, n), C(f)));
              continue;
            }
            if (S.test(t.stem)) {
              n = Cl(Cl({}, n), C(t.stem));
              continue;
            }
            var r = T(t.stem);
            r && (n = Cl(Cl({}, n), r));
            var a = function (e) {
              var n;
              if ("E" === e[0] && "E" === e[1] ? (n = {
                notation: "engineering"
              }, e = e.slice(2)) : "E" === e[0] && (n = {
                notation: "scientific"
              }, e = e.slice(1)), n) {
                var i = e.slice(0, 2);
                if ("+!" === i ? (n.signDisplay = "always", e = e.slice(2)) : "+?" === i && (n.signDisplay = "exceptZero", e = e.slice(2)), !x.test(e)) throw Error("Malformed concise eng/scientific notation");
                n.minimumIntegerDigits = e.length;
              }
              return n;
            }(t.stem);
            a && (n = Cl(Cl({}, n), a));
          }
          return n;
        }(i) : {}
      },
      err: null
    };
  };
  e.prototype.tryParsePluralOrSelectOptions = function (e, n, i, f) {
    for (a = !1, o = [], u = new Set(), l = f.value, d = f.location, void 0;;) {
      var r;
      var a;
      var o;
      var u;
      var l;
      var d;
      if (0 === l.length) {
        var s = this.clonePosition();
        if ("select" !== n && this.bumpIf("=")) {
          var c = this.tryParseDecimalInteger(t.EXPECT_PLURAL_ARGUMENT_SELECTOR, t.INVALID_PLURAL_ARGUMENT_SELECTOR);
          if (c.err) return c;
          d = A(s, this.clonePosition());
          l = this.message.slice(s.offset, this.offset());
        } else break;
      }
      if (u.has(l)) return this.error("select" === n ? t.DUPLICATE_SELECT_ARGUMENT_SELECTOR : t.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
      "other" === l && (a = !0);
      this.bumpSpace();
      var h = this.clonePosition();
      if (!this.bumpIf("{")) return this.error("select" === n ? t.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : t.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, A(this.clonePosition(), this.clonePosition()));
      var p = this.parseMessage(e + 1, n, i);
      if (p.err) return p;
      var g = this.tryParseArgumentClose(h);
      if (g.err) return g;
      o.push([l, {
        value: p.val,
        location: A(h, this.clonePosition())
      }]);
      u.add(l);
      this.bumpSpace();
      l = (r = this.parseIdentifierIfPossible()).value;
      d = r.location;
    }
    return 0 === o.length ? this.error("select" === n ? t.EXPECT_SELECT_ARGUMENT_SELECTOR : t.EXPECT_PLURAL_ARGUMENT_SELECTOR, A(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !a ? this.error(t.MISSING_OTHER_CLAUSE, A(this.clonePosition(), this.clonePosition())) : {
      val: o,
      err: null
    };
  };
  e.prototype.tryParseDecimalInteger = function (e, n) {
    var i = 1;
    var t = this.clonePosition();
    this.bumpIf("+") || this.bumpIf("-") && (i = -1);
    for (f = !1, r = 0, void 0; !this.isEOF();) {
      var f;
      var r;
      var a = this.$$char();
      if (a >= 48 && a <= 57) {
        f = !0;
        r = 10 * r + (a - 48);
        this.bump();
      } else break;
    }
    var o = A(t, this.clonePosition());
    return f ? H(r *= i) ? {
      val: r,
      err: null
    } : this.error(n, o) : this.error(e, o);
  };
  e.prototype.offset = function () {
    return this.position.offset;
  };
  e.prototype.isEOF = function () {
    return this.offset() === this.message.length;
  };
  e.prototype.clonePosition = function () {
    return {
      offset: this.position.offset,
      line: this.position.line,
      column: this.position.column
    };
  };
  e.prototype.$$char = function () {
    var e = this.position.offset;
    if (e >= this.message.length) throw Error("out of bound");
    var n = G(this.message, e);
    if (void 0 === n) throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
    return n;
  };
  e.prototype.error = function (e, n) {
    return {
      val: null,
      err: {
        kind: e,
        message: this.message,
        location: n
      }
    };
  };
  e.prototype.bump = function () {
    if (!this.isEOF()) {
      var e = this.$$char();
      10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2);
    }
  };
  e.prototype.bumpIf = function (e) {
    if (F(this.message, e, this.offset())) {
      for (var n = 0; n < e.length; n++) this.bump();
      return !0;
    }
    return !1;
  };
  e.prototype.bumpUntil = function (e) {
    var n = this.offset();
    var i = this.message.indexOf(e, n);
    return i >= 0 ? (this.bumpTo(i), !0) : (this.bumpTo(this.message.length), !1);
  };
  e.prototype.bumpTo = function (e) {
    if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
    for (e = Math.min(e, this.message.length);;) {
      var n = this.offset();
      if (n === e) break;
      if (n > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
      if (this.bump(), this.isEOF()) break;
    }
  };
  e.prototype.bumpSpace = function () {
    for (; !this.isEOF() && Z(this.$$char());) this.bump();
  };
  e.prototype.peek = function () {
    if (this.isEOF()) return null;
    var e = this.$$char();
    var n = this.offset();
    var i = this.message.charCodeAt(n + (e >= 65536 ? 2 : 1));
    return null != i ? i : null;
  };
  return e;
}();
function Y(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Z(e) {
  return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e;
}
function J(e, n) {
  void 0 === n && (n = {});
  var i = new Q(e, n = Cl({
    shouldParseSkeletons: !0,
    requiresOtherClause: !0
  }, n)).parse();
  if (i.err) {
    var f = SyntaxError(t[i.err.kind]);
    f.location = i.err.location;
    f.originalMessage = i.err.message;
    return f;
  }
  n?.captureLocation || function e(n) {
    n.forEach(function (n) {
      if (delete n.location, p(n) || g(n)) for (var i in n.options) {
        delete n.options[i].location;
        e(n.options[i].value);
      } else s(n) && _(n.style) ? delete n.style.location : (c(n) || h(n)) && b(n.style) ? delete n.style.location : m(n) && e(n.children);
    });
  }(i.val);
  return i.val;
}
export function $$ei9(e) {
  return "function" == typeof e;
}
export function $$et8(e, n, i, t, r, a, o) {
  if (1 === e.length && d(e[0])) return [{
    type: $$u6.literal,
    value: e[0].value
  }];
  for (l = [], y = 0, void 0; y < e.length; y++) {
    var l;
    var y;
    var v = e[y];
    if (d(v)) {
      l.push({
        type: $$u6.literal,
        value: v.value
      });
      continue;
    }
    if (v.type === f.pound) {
      "number" == typeof a && l.push({
        type: $$u6.literal,
        value: i.getNumberFormat(n).format(a)
      });
      continue;
    }
    var w = v.value;
    if (!(r && w in r)) throw new Ei(w, o);
    var k = r[w];
    if (v.type === f.argument) {
      k && "string" != typeof k && "number" != typeof k || (k = "string" == typeof k || "number" == typeof k ? String(k) : "");
      l.push({
        type: "string" == typeof k ? $$u6.literal : $$u6.object,
        value: k
      });
      continue;
    }
    if (c(v)) {
      var S = "string" == typeof v.style ? t.date[v.style] : b(v.style) ? v.style.parsedOptions : void 0;
      l.push({
        type: $$u6.literal,
        value: i.getDateTimeFormat(n, S).format(k)
      });
      continue;
    }
    if (h(v)) {
      var S = "string" == typeof v.style ? t.time[v.style] : b(v.style) ? v.style.parsedOptions : t.time.medium;
      l.push({
        type: $$u6.literal,
        value: i.getDateTimeFormat(n, S).format(k)
      });
      continue;
    }
    if (s(v)) {
      var S = "string" == typeof v.style ? t.number[v.style] : _(v.style) ? v.style.parsedOptions : void 0;
      S && S.scale && (k *= S.scale || 1);
      l.push({
        type: $$u6.literal,
        value: i.getNumberFormat(n, S).format(k)
      });
      continue;
    }
    if (m(v)) {
      var E = v.children;
      var x = v.value;
      var C = r[x];
      if (!$$ei9(C)) throw new Zo(x, "function", o);
      var T = C($$et8(E, n, i, t, r, a).map(function (e) {
        return e.value;
      }));
      Array.isArray(T) || (T = [T]);
      l.push.apply(l, T.map(function (e) {
        return {
          type: "string" == typeof e ? $$u6.literal : $$u6.object,
          value: e
        };
      }));
    }
    if (p(v)) {
      var P = v.options[k] || v.options.other;
      if (!P) throw new $x(v.value, k, Object.keys(v.options), o);
      l.push.apply(l, $$et8(P.value, n, i, t, r));
      continue;
    }
    if (g(v)) {
      var P = v.options["=".concat(k)];
      if (!P) {
        if (!Intl.PluralRules) throw new IF('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', O4.MISSING_INTL_API, o);
        var L = i.getPluralRules(n, {
          type: v.pluralType
        }).select(k - (v.offset || 0));
        P = v.options[L] || v.options.other;
      }
      if (!P) throw new $x(v.value, k, Object.keys(v.options), o);
      l.push.apply(l, $$et8(P.value, n, i, t, r, k - (v.offset || 0)));
      continue;
    }
  }
  return l.length < 2 ? l : l.reduce(function (e, n) {
    var i = e[e.length - 1];
    i && i.type === $$u6.literal && n.type === $$u6.literal ? i.value += n.value : e.push(n);
    return e;
  }, []);
}
function ef(e) {
  return {
    create: function () {
      return {
        get: function (n) {
          return e[n];
        },
        set: function (n, i) {
          e[n] = i;
        }
      };
    }
  };
}
!function (e) {
  e[e.literal = 0] = "literal";
  e[e.object = 1] = "object";
}($$u6 || ($$u6 = {}));
export var $$er2 = function () {
  function e(n, i, t, f) {
    var r;
    var a;
    var o = this;
    if (void 0 === i && (i = e.defaultLocale), this.formatterCache = {
      number: {},
      dateTime: {},
      pluralRules: {}
    }, this.format = function (e) {
      var n = o.formatToParts(e);
      if (1 === n.length) return n[0].value;
      var i = n.reduce(function (e, n) {
        e.length && n.type === $$u6.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += n.value : e.push(n.value);
        return e;
      }, []);
      return i.length <= 1 ? i[0] || "" : i;
    }, this.formatToParts = function (e) {
      return $$et8(o.ast, o.locales, o.formatters, o.formats, e, void 0, o.message);
    }, this.resolvedOptions = function () {
      var e;
      return {
        locale: o.resolvedLocale?.toString() || Intl.NumberFormat.supportedLocalesOf(o.locales)[0]
      };
    }, this.getAst = function () {
      return o.ast;
    }, this.locales = i, this.resolvedLocale = e.resolveLocale(i), "string" == typeof n) {
      if (this.message = n, !e.__parse) throw TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
      this.ast = e.__parse(n, {
        ignoreTag: f?.ignoreTag,
        locale: this.resolvedLocale
      });
    } else this.ast = n;
    if (!Array.isArray(this.ast)) throw TypeError("A message must be provided as a String or AST.");
    this.formats = (r = e.formats, t ? Object.keys(r).reduce(function (e, n) {
      var i;
      var f;
      e[n] = (i = r[n], (f = t[n]) ? Cl(Cl(Cl({}, i || {}), f || {}), Object.keys(i).reduce(function (e, n) {
        e[n] = Cl(Cl({}, i[n]), f[n] || {});
        return e;
      }, {})) : i);
      return e;
    }, Cl({}, r)) : r);
    this.formatters = f && f.formatters || (void 0 === (a = this.formatterCache) && (a = {
      number: {},
      dateTime: {},
      pluralRules: {}
    }), {
      getNumberFormat: $$default(function () {
        for (n = [], i = 0, void 0; i < $$arguments.length; i++) {
          var e;
          var n;
          var i;
          n[i] = $$arguments[i];
        }
        return new ((e = Intl.NumberFormat).bind.apply(e, fX([void 0], n, !1)))();
      }, {
        cache: ef(a.number),
        strategy: strategies.variadic
      }),
      getDateTimeFormat: $$default(function () {
        for (n = [], i = 0, void 0; i < $$arguments.length; i++) {
          var e;
          var n;
          var i;
          n[i] = $$arguments[i];
        }
        return new ((e = Intl.DateTimeFormat).bind.apply(e, fX([void 0], n, !1)))();
      }, {
        cache: ef(a.dateTime),
        strategy: strategies.variadic
      }),
      getPluralRules: $$default(function () {
        for (n = [], i = 0, void 0; i < $$arguments.length; i++) {
          var e;
          var n;
          var i;
          n[i] = $$arguments[i];
        }
        return new ((e = Intl.PluralRules).bind.apply(e, fX([void 0], n, !1)))();
      }, {
        cache: ef(a.pluralRules),
        strategy: strategies.variadic
      })
    });
  }
  Object.defineProperty(e, "defaultLocale", {
    get: function () {
      e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale);
      return e.memoizedDefaultLocale;
    },
    enumerable: !1,
    configurable: !0
  });
  e.memoizedDefaultLocale = null;
  e.resolveLocale = function (e) {
    if (void 0 !== Intl.Locale) {
      var n = Intl.NumberFormat.supportedLocalesOf(e);
      return new Intl.Locale(n.length > 0 ? n[0] : "string" == typeof e ? e : e[0]);
    }
  };
  e.__parse = J;
  e.formats = {
    number: {
      integer: {
        maximumFractionDigits: 0
      },
      currency: {
        style: "currency"
      },
      percent: {
        style: "percent"
      }
    },
    date: {
      short: {
        month: "numeric",
        day: "numeric",
        year: "2-digit"
      },
      medium: {
        month: "short",
        day: "numeric",
        year: "numeric"
      },
      long: {
        month: "long",
        day: "numeric",
        year: "numeric"
      },
      full: {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
      }
    },
    time: {
      short: {
        hour: "numeric",
        minute: "numeric"
      },
      medium: {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
      },
      long: {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short"
      },
      full: {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short"
      }
    }
  };
  return e;
}();
export let $$ea7 = $$er2;
export const ErrorCode = O4;
export const FormatError = IF;
export const IntlMessageFormat = $$er2;
export const InvalidValueError = $x;
export const InvalidValueTypeError = Zo;
export const MissingValueError = Ei;
export const PART_TYPE = $$u6;
export const _$$default = $$ea7;
export const formatToParts = $$et8;
export const isFormatXMLElementFn = $$ei9;
