import i from "../vendor/974067";
import s from "../vendor/784812";
import o from "../vendor/499657";
function a(e) {
  var r = s(e);
  return 1 == r.length && r[0][2] ? o(r[0][0], r[0][1]) : function (n) {
    return n === e || i(n, e, r);
  };
}
module.exports = a;