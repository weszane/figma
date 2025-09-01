import i from "../vendor/31202";
import s from "../vendor/529640";
import o from "../vendor/915811";
import a from "../vendor/709670";
import h from "../vendor/795456";
import d from "../vendor/499657";
import p from "../vendor/983249";
var g = 1;
var m = 2;
function v(e, r) {
  return a(e) && h(r) ? d(p(e), r) : function (n) {
    var a = s(n, e);
    return void 0 === a && a === r ? o(n, e) : i(r, a, g | m);
  };
}
module.exports = v;