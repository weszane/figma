import n from "../vendor/153658";
var i = null;
function o(t) {
  return "LTR" === t || "RTL" === t;
}
function a(t) {
  o(t) || n(!1);
  return "LTR" === t ? "ltr" : "rtl";
}
module.exports = {
  NEUTRAL: "NEUTRAL",
  LTR: "LTR",
  RTL: "RTL",
  isStrong: o,
  getHTMLDir: a,
  getHTMLDirIfDifferent: function (t, e) {
    o(t) || n(!1);
    o(e) || n(!1);
    return t === e ? null : a(t);
  },
  setGlobalDir: function (t) {
    i = t;
  },
  initGlobalDir: function () {
    i = "LTR";
  },
  getGlobalDir: function () {
    i || this.initGlobalDir();
    i || n(!1);
    return i;
  }
};