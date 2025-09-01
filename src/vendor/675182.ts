import { every } from "../vendor/431847";
var r = every;
function i(e, t, n, r) {
  var i = !0;
  n !== r.length - 1 && (i = t.calledBefore(r[n + 1]));
  void 0 === e[t.id] && (e[t.id] = 0);
  return e[t.id] < t.callCount && !!i && (e[t.id] += 1, !0);
}
module.exports = function (e) {
  var t = $$arguments.length > 1 ? arguments : e;
  return r(t, i.bind(null, {}));
};