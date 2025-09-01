import { OrderedSet } from "../vendor/116740";
import { substr } from "../vendor/425872";
var i = OrderedSet;
var o = substr;
var a = i();
module.exports = function (t, e) {
  var r = Array(t.length).fill(a);
  e && e.forEach(function (e) {
    for (n = o(t, 0, e.offset).length, i = n + o(t, e.offset, e.length).length, void 0; n < i;) {
      var n;
      var i;
      r[n] = r[n].add(e.style);
      n++;
    }
  });
  return r;
};