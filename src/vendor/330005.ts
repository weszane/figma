import { substr } from "../vendor/425872";
var n = substr;
module.exports = function (t, e) {
  var r = Array(t.length).fill(null);
  e && e.forEach(function (e) {
    for (i = n(t, 0, e.offset).length, o = i + n(t, e.offset, e.length).length, a = i, void 0; a < o; a++) {
      var i;
      var o;
      var a;
      r[a] = e.key;
    }
  });
  return r;
};