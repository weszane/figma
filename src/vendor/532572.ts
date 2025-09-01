import n from "../vendor/517500";
module.exports = function (t, e) {
  if (!(t instanceof n)) return null;
  var r = t.getNextSiblingKey();
  if (r) return r;
  var i = t.getParentKey();
  if (!i) return null;
  for (var o = e.get(i); o && !o.getNextSiblingKey();) {
    var a = o.getParentKey();
    o = a ? e.get(a) : null;
  }
  return o ? o.getNextSiblingKey() : null;
};