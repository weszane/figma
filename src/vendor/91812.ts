import n from "../vendor/396812";
import i from "../vendor/543822";
module.exports = function (t) {
  var e = n(t.ownerDocument || t.document);
  t.Window && t instanceof t.Window && (t = e);
  var r = i(t);
  var o = t === e ? t.ownerDocument.documentElement : t;
  var a = t.scrollWidth - o.clientWidth;
  var s = t.scrollHeight - o.clientHeight;
  r.x = Math.max(0, Math.min(r.x, a));
  r.y = Math.max(0, Math.min(r.y, s));
  return r;
};