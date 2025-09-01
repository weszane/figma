import { getPunctuation } from "../vendor/437017";
var n = getPunctuation();
var i = "['\u2018\u2019]";
var o = "\\s|(?![_])" + n;
var a = RegExp("^(?:" + o + ")*(?:" + i + "|(?!" + o + ").)*(?:(?!" + o + ").)");
var s = RegExp("(?:(?!" + o + ").)(?:" + i + "|(?!" + o + ").)*(?:" + o + ")*$");
function u(t, e) {
  var r = e ? s.exec(t) : a.exec(t);
  return r ? r[0] : t;
}
module.exports = {
  getBackward: function (t) {
    return u(t, !0);
  },
  getForward: function (t) {
    return u(t, !1);
  }
};