import { isBrowser } from "../vendor/42266";
import i from "../vendor/153658";
var o = isBrowser("Chrome") ? function (t) {
  for (e = t.cloneRange(), r = [], n = t.endContainer, void 0; null != n; n = n.parentNode) {
    var e;
    var r;
    var n;
    var o;
    var a = n === t.commonAncestorContainer;
    a ? e.setStart(t.startContainer, t.startOffset) : e.setStart(e.endContainer, 0);
    var s = Array.from(e.getClientRects());
    if (r.push(s), a) {
      r.reverse();
      return (o = []).concat.apply(o, r);
    }
    e.setEndBefore(n);
  }
  i(!1);
} : function (t) {
  return Array.from(t.getClientRects());
};
module.exports = o;