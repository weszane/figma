import n from "../vendor/240711";
import { insertText, moveText } from "../vendor/662606";
import { push } from "../vendor/724102";
import a from "../vendor/255000";
import s from "../vendor/127745";
import u from "../vendor/48239";
import c from "../vendor/965334";
import l from "../vendor/163889";
import f from "../vendor/585172";
import p from "../vendor/808828";
function h(t) {
  t._internalDrag = !1;
  var e = t.editorContainer;
  if (e) {
    var r = new MouseEvent("mouseup", {
      view: l(e),
      bubbles: !0,
      cancelable: !0
    });
    e.dispatchEvent(r);
  }
}
function d(t, e, r) {
  var n = insertText(t.getCurrentContent(), e, r, t.getCurrentInlineStyle());
  return push(t, n, "insert-fragment");
}
module.exports = {
  onDragEnd: function (t) {
    t.exitCurrentMode();
    h(t);
  },
  onDrop: function (t, e) {
    var r = new n(e.nativeEvent.dataTransfer);
    var l = t._latestEditorState;
    var g = function (t, e) {
      var r = null;
      var n = null;
      var i = s(t.currentTarget);
      if ("function" == typeof i.caretRangeFromPoint) {
        var o = i.caretRangeFromPoint(t.x, t.y);
        r = o.startContainer;
        n = o.startOffset;
      } else {
        if (!t.rangeParent) return null;
        r = t.rangeParent;
        n = t.rangeOffset;
      }
      r = p(r);
      n = p(n);
      var u = p(a(r));
      return c(e, u, n, u, n);
    }(e.nativeEvent, l);
    if (e.preventDefault(), t._dragCount = 0, t.exitCurrentMode(), null != g) {
      var y;
      var v = r.getFiles();
      if (v.length > 0) {
        if (t.props.handleDroppedFiles && f(t.props.handleDroppedFiles(g, v))) return;
        u(v, function (e) {
          e && t.update(d(l, g, e));
        });
        return;
      }
      var m = t._internalDrag ? "internal" : "external";
      t.props.handleDrop && f(t.props.handleDrop(g, r, m)) || (t._internalDrag ? t.update((y = moveText(l.getCurrentContent(), l.getSelection(), g), push(l, y, "insert-fragment"))) : t.update(d(l, g, r.getText())));
      h(t);
    }
  }
};