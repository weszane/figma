import i from "../vendor/655405";
import s from "../vendor/337273";
import o from "../vendor/354981";
import a from "../vendor/217548";
import h from "../vendor/509185";
import d from "../vendor/925269";
import p from "../vendor/9226";
function g(e, r, n, m, v) {
  e !== r && o(r, function (o, d) {
    if (v || (v = new i()), h(o)) a(e, r, d, n, g, m, v);else {
      var y = m ? m(p(e, d), o, d + "", e, r, v) : void 0;
      void 0 === y && (y = o);
      s(e, d, y);
    }
  }, d);
}
module.exports = g;