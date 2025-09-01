module.exports = function (t) {
  var e = t.getSelection();
  var r = e.getAnchorKey();
  var n = t.getBlockTree(r);
  var i = e.getStartOffset();
  var o = !1;
  n.some(function (t) {
    return i === t.get("start") ? (o = !0, !0) : i < t.get("end") && t.get("leaves").some(function (t) {
      return i === t.get("start") && (o = !0, !0);
    });
  });
  return o;
};