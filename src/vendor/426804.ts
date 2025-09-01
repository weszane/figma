import n from "../vendor/285536";
import i from "../vendor/390446";
import o from "../vendor/320728";
import a from "../vendor/708996";
import s from "../vendor/533786";
var u = /^\s+/;
module.exports = function (t, e, r) {
  if ((t = s(t)) && (r || void 0 === e)) return t.replace(u, "");
  if (!t || !(e = n(e))) return t;
  var c = a(t);
  var l = o(c, a(e));
  return i(c, l).join("");
};