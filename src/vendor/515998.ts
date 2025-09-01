import { removeRange, replaceWithFragment } from "../vendor/662606";
import { push } from "../vendor/724102";
import o from "../vendor/759742";
import a from "../vendor/808828";
var s = null;
module.exports = {
  cut: function (t) {
    var e = t.getCurrentContent();
    var r = t.getSelection();
    var u = null;
    if (r.isCollapsed()) {
      var c = r.getAnchorKey();
      var l = e.getBlockForKey(c).getLength();
      if (l === r.getAnchorOffset()) {
        var f = e.getKeyAfter(c);
        if (null == f) return t;
        u = r.set("focusKey", f).set("focusOffset", 0);
      } else u = r.set("focusOffset", l);
    } else u = r;
    s = o(e, u = a(u));
    var p = removeRange(e, u, "forward");
    return p === e ? t : push(t, p, "remove-range");
  },
  paste: function (t) {
    if (!s) return t;
    var e = replaceWithFragment(t.getCurrentContent(), t.getSelection(), s);
    return push(t, e, "insert-fragment");
  }
};