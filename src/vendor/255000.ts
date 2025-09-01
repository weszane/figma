import n from "../vendor/127745";
import i from "../vendor/351041";
module.exports = function (t) {
  for (var e = t; e && e !== n(t).documentElement;) {
    var r = i(e);
    if (null != r) return r;
    e = e.parentNode;
  }
  return null;
};