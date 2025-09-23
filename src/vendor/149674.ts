import i from "../vendor/257816";
import s from "../vendor/162537";
import o from "../vendor/785088";
import a from "../vendor/820809";
function h(e, r) {
  if (null == e) return {};
  var n = i(a(e), function (e) {
    return [e];
  });
  r = s(r);
  return o(e, n, function (e, n) {
    return r(e, n[0]);
  });
}

// lodash pickBy
module.exports = h;
