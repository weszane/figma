var r = "\ud800-\udfff";
var n = "[" + r + "]";
var i = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]";
var s = "\ud83c[\udffb-\udfff]";
var o = "[^" + r + "]";
var a = "(?:\ud83c[\udde6-\uddff]){2}";
var h = "[\ud800-\udbff][\udc00-\udfff]";
var d = "(?:" + i + "|" + s + ")?";
var p = "[\\ufe0e\\ufe0f]?";
var g = "(?:\\u200d(?:" + [o, a, h].join("|") + ")" + p + d + ")*";
var m = p + d + g;
var v = RegExp(s + "(?=" + s + ")|(?:" + [o + i + "?", i, a, h, n].join("|") + ")" + m, "g");
function y(e) {
  for (var r = v.lastIndex = 0; v.test(e);) ++r;
  return r;
}
module.exports = y;