import { isBrowser } from "../vendor/42266";
import i from "../vendor/153658";
var o = isBrowser("IE <= 9");
module.exports = function (t) {
  var e;
  var r = null;
  !o && document.implementation && document.implementation.createHTMLDocument && ((e = document.implementation.createHTMLDocument("foo")).documentElement || i(!1), e.documentElement.innerHTML = t, r = e.getElementsByTagName("body")[0]);
  return r;
};