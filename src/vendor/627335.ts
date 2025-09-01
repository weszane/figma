import i, { toStringTag } from "../vendor/50613";
var s = Object.prototype;
var o = s.hasOwnProperty;
var a = s.toString;
var h = i ? toStringTag : void 0;
function d(e) {
  var r = o.call(e, h);
  var n = e[h];
  try {
    e[h] = void 0;
    var i = !0;
  } catch (e) {}
  var s = a.call(e);
  i && (r ? e[h] = n : delete e[h]);
  return s;
}
module.exports = d;