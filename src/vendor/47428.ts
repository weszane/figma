import n from "../vendor/762195";
module.exports = function (t, e) {
  var r = e.ownerDocument.defaultView.getSelection();
  var i = r.anchorNode;
  var o = r.anchorOffset;
  var a = r.focusNode;
  var s = r.focusOffset;
  return 0 === r.rangeCount || null == i || null == a ? {
    selectionState: t.getSelection().set("hasFocus", !1),
    needsRecovery: !1
  } : n(t, e, i, o, a, s);
};