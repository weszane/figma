var i = 1 / 0;
var s = "[object Symbol]";
var o = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
var a = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
var h = "\ud800-\udfff";
var d = "\\u0300-\\u036f\\ufe20-\\ufe23";
var p = "\\u20d0-\\u20f0";
var g = "\\u2700-\\u27bf";
var getDefaultFrameProps = "a-z\\xdf-\\xf6\\xf8-\\xff";
var v = "A-Z\\xc0-\\xd6\\xd8-\\xde";
var y = "\\ufe0e\\ufe0f";
var b = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
var O = "['\u2019]";
var x = "[" + h + "]";
var w = "[" + b + "]";
var k = "[" + d + p + "]";
var _ = "\\d+";
var S = "[" + g + "]";
var E = "[" + getDefaultFrameProps + "]";
var ImageDownloadQueue = "[^" + h + b + _ + g + getDefaultFrameProps + v + "]";
var C = "\ud83c[\udffb-\udfff]";
var T = "[^" + h + "]";
var I = "(?:\ud83c[\udde6-\uddff]){2}";
var P = "[\ud800-\udbff][\udc00-\udfff]";
var R = "[" + v + "]";
var M = "\\u200d";
var D = "(?:" + E + "|" + ImageDownloadQueue + ")";
var N = "(?:" + R + "|" + ImageDownloadQueue + ")";
var $ = "(?:" + O + "(?:d|ll|m|re|s|t|ve))?";
var L = "(?:" + O + "(?:D|LL|M|RE|S|T|VE))?";
var j = "(?:" + k + "|" + C + ")?";
var z = "[" + y + "]?";
var Z = "(?:" + M + "(?:" + [T, I, P].join("|") + ")" + z + j + ")*";
var F = z + j + Z;
var U = "(?:" + [S, I, P].join("|") + ")" + F;
var Q = "(?:" + [T + k + "?", k, I, P, x].join("|") + ")";
var V = RegExp(O, "g");
var B = RegExp(k, "g");
var q = RegExp(C + "(?=" + C + ")|" + Q + F, "g");
var W = RegExp([R + "?" + E + "+" + $ + "(?=" + [w, R, "$"].join("|") + ")", N + "+" + L + "(?=" + [w, R + D, "$"].join("|") + ")", R + "?" + D + "+" + $, R + "+" + L, _, U].join("|"), "g");
var Y = RegExp("[" + M + h + d + p + y + "]");
var G = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
var X = {
  "\xc0": "A",
  "\xc1": "A",
  "\xc2": "A",
  "\xc3": "A",
  "\xc4": "A",
  "\xc5": "A",
  "\xe0": "a",
  "\xe1": "a",
  "\xe2": "a",
  "\xe3": "a",
  "\xe4": "a",
  "\xe5": "a",
  "\xc7": "C",
  "\xe7": "c",
  "\xd0": "D",
  "\xf0": "d",
  "\xc8": "E",
  "\xc9": "E",
  "\xca": "E",
  "\xcb": "E",
  "\xe8": "e",
  "\xe9": "e",
  "\xea": "e",
  "\xeb": "e",
  "\xcc": "I",
  "\xcd": "I",
  "\xce": "I",
  "\xcf": "I",
  "\xec": "i",
  "\xed": "i",
  "\xee": "i",
  "\xef": "i",
  "\xd1": "N",
  "\xf1": "n",
  "\xd2": "O",
  "\xd3": "O",
  "\xd4": "O",
  "\xd5": "O",
  "\xd6": "O",
  "\xd8": "O",
  "\xf2": "o",
  "\xf3": "o",
  "\xf4": "o",
  "\xf5": "o",
  "\xf6": "o",
  "\xf8": "o",
  "\xd9": "U",
  "\xda": "U",
  "\xdb": "U",
  "\xdc": "U",
  "\xf9": "u",
  "\xfa": "u",
  "\xfb": "u",
  "\xfc": "u",
  "\xdd": "Y",
  "\xfd": "y",
  "\xff": "y",
  "\xc6": "Ae",
  "\xe6": "ae",
  "\xde": "Th",
  "\xfe": "th",
  "\xdf": "ss",
  Ā: "A",
  Ă: "A",
  Ą: "A",
  ā: "a",
  ă: "a",
  ą: "a",
  Ć: "C",
  Ĉ: "C",
  Ċ: "C",
  Č: "C",
  ć: "c",
  ĉ: "c",
  ċ: "c",
  č: "c",
  Ď: "D",
  Đ: "D",
  ď: "d",
  đ: "d",
  Ē: "E",
  Ĕ: "E",
  Ė: "E",
  Ę: "E",
  Ě: "E",
  ē: "e",
  ĕ: "e",
  ė: "e",
  ę: "e",
  ě: "e",
  Ĝ: "G",
  Ğ: "G",
  Ġ: "G",
  Ģ: "G",
  ĝ: "g",
  ğ: "g",
  ġ: "g",
  ģ: "g",
  Ĥ: "H",
  Ħ: "H",
  ĥ: "h",
  ħ: "h",
  Ĩ: "I",
  Ī: "I",
  Ĭ: "I",
  Į: "I",
  İ: "I",
  ĩ: "i",
  ī: "i",
  ĭ: "i",
  į: "i",
  ı: "i",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  ĸ: "k",
  Ĺ: "L",
  Ļ: "L",
  Ľ: "L",
  Ŀ: "L",
  Ł: "L",
  ĺ: "l",
  ļ: "l",
  ľ: "l",
  ŀ: "l",
  ł: "l",
  Ń: "N",
  Ņ: "N",
  Ň: "N",
  Ŋ: "N",
  ń: "n",
  ņ: "n",
  ň: "n",
  ŋ: "n",
  Ō: "O",
  Ŏ: "O",
  Ő: "O",
  ō: "o",
  ŏ: "o",
  ő: "o",
  Ŕ: "R",
  Ŗ: "R",
  Ř: "R",
  ŕ: "r",
  ŗ: "r",
  ř: "r",
  Ś: "S",
  Ŝ: "S",
  Ş: "S",
  Š: "S",
  ś: "s",
  ŝ: "s",
  ş: "s",
  š: "s",
  Ţ: "T",
  Ť: "T",
  Ŧ: "T",
  ţ: "t",
  ť: "t",
  ŧ: "t",
  Ũ: "U",
  Ū: "U",
  Ŭ: "U",
  Ů: "U",
  Ű: "U",
  Ų: "U",
  ũ: "u",
  ū: "u",
  ŭ: "u",
  ů: "u",
  ű: "u",
  ų: "u",
  Ŵ: "W",
  ŵ: "w",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Ź: "Z",
  Ż: "Z",
  Ž: "Z",
  ź: "z",
  ż: "z",
  ž: "z",
  Ĳ: "IJ",
  ĳ: "ij",
  Œ: "Oe",
  œ: "oe",
  ŉ: "'n",
  ſ: "ss"
};
var H = "object" == typeof require.g && require.g && require.g.Object === Object && require.g;
var K = "object" == typeof self && self && self.Object === Object && self;
var J = H || K || Function("return this")();
function ee(e, r, n, i) {
  var s = -1;
  var o = e ? e.length : 0;
  for (i && o && (n = e[++s]); ++s < o;) n = r(n, e[s], s, e);
  return n;
}
function et(e) {
  return e.split("");
}
function er(e) {
  return e.match(o) || [];
}
var en = function (e) {
  return function (r) {
    return e?.[r];
  };
}(X);
function ei(e) {
  return Y.test(e);
}
function es(e) {
  return G.test(e);
}
function eo(e) {
  return ei(e) ? ea(e) : et(e);
}
function ea(e) {
  return e.match(q) || [];
}
function el(e) {
  return e.match(W) || [];
}
var eu = Object.prototype.toString;
var ec = J.Symbol;
var eh = ec ? ec.prototype : void 0;
var ed = eh ? eh.toString : void 0;
function ef(e, r, n) {
  var i = -1;
  var s = e.length;
  r < 0 && (r = -r > s ? 0 : s + r);
  (n = n > s ? s : n) < 0 && (n += s);
  s = r > n ? 0 : n - r >>> 0;
  r >>>= 0;
  for (var o = Array(s); ++i < s;) o[i] = e[i + r];
  return o;
}
function ep(e) {
  if ("string" == typeof e) return e;
  if (ey(e)) return ed ? ed.call(e) : "";
  var r = e + "";
  return "0" == r && 1 / e == -i ? "-0" : r;
}
function eg(e, r, n) {
  var i = e.length;
  n = void 0 === n ? i : n;
  return !r && n >= i ? e : ef(e, r, n);
}
function em(e) {
  return function (r) {
    var n = ei(r = eb(r)) ? eo(r) : void 0;
    var i = n ? n[0] : r.charAt(0);
    var s = n ? eg(n, 1).join("") : r.slice(1);
    return i[e]() + s;
  };
}
function ev(e) {
  return !!e && "object" == typeof e;
}
function ey(e) {
  return "symbol" == typeof e || ev(e) && eu.call(e) == s;
}
function eb(e) {
  return null == e ? "" : ep(e);
}
var eO = function (e) {
  return function (r) {
    return ee(e_(ew(r).replace(V, "")), e, "");
  };
}(function (e, r, n) {
  r = r.toLowerCase();
  return e + (n ? ex(r) : r);
});
function ex(e) {
  return ek(eb(e).toLowerCase());
}
function ew(e) {
  return (e = eb(e)) && e.replace(a, en).replace(B, "");
}
var ek = em("toUpperCase");
function e_(e, r, n) {
  return (e = eb(e), void 0 === (r = n ? void 0 : r)) ? es(e) ? el(e) : er(e) : e.match(r) || [];
}
module.exports = eO;
