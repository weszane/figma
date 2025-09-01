import i from "../vendor/236553";
import s from "../vendor/969474";
function o(e, r) {
  var n = -1;
  var o = s(e) ? Array(e.length) : [];
  i(e, function (e, i, s) {
    o[++n] = r(e, i, s);
  });
  return o;
}
module.exports = o;