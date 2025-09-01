import { isFinite as _$$isFinite } from "../vendor/642273";
import s from "../vendor/865757";
import o from "../vendor/112746";
import a from "../vendor/533786";
var h = _$$isFinite;
var d = Math.min;
function p(e) {
  var r = Math[e];
  return function (e, n) {
    if (e = o(e), (n = null == n ? 0 : d(s(n), 292)) && h(e)) {
      var i = (a(e) + "e").split("e");
      return +((i = (a(r(i[0] + "e" + (+i[1] + n))) + "e").split("e"))[0] + "e" + (+i[1] - n));
    }
    return r(e);
  };
}
module.exports = p;