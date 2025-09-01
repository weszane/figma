import { set } from "../vendor/724102";
module.exports = function (t) {
  var e = t.getSelection();
  var r = e.getEndKey();
  var i = t.getCurrentContent().getBlockForKey(r).getLength();
  return set(t, {
    selection: e.merge({
      anchorKey: r,
      anchorOffset: i,
      focusKey: r,
      focusOffset: i,
      isBackward: !1
    }),
    forceSelection: !0
  });
};