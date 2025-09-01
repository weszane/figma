import { set } from "../vendor/724102";
module.exports = function (t) {
  var e = t.getSelection();
  var r = e.getStartKey();
  return set(t, {
    selection: e.merge({
      anchorKey: r,
      anchorOffset: 0,
      focusKey: r,
      focusOffset: 0,
      isBackward: !1
    }),
    forceSelection: !0
  });
};