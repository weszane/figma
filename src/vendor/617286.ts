import { replaceText } from "../vendor/662606";
import { push, set } from "../vendor/724102";
import { isBrowser } from "../vendor/42266";
import a from "../vendor/654571";
import s from "../vendor/585172";
import u from "../vendor/634707";
import c from "../vendor/808828";
import l from "../vendor/671825";
var f = isBrowser("Firefox");
function p(t, e, r, o, a) {
  var s = replaceText(t.getCurrentContent(), t.getSelection(), e, r, o);
  return push(t, s, "insert-characters", a);
}
module.exports = function (t, e) {
  void 0 !== t._pendingStateFromBeforeInput && (t.update(t._pendingStateFromBeforeInput), t._pendingStateFromBeforeInput = void 0);
  var r = t._latestEditorState;
  var n = e.data;
  if (n) {
    if (t.props.handleBeforeInput && s(t.props.handleBeforeInput(n, r, e.timeStamp))) {
      e.preventDefault();
      return;
    }
    var o = r.getSelection();
    var h = o.getStartOffset();
    var d = o.getAnchorKey();
    if (!o.isCollapsed()) {
      e.preventDefault();
      t.update(p(r, n, r.getCurrentInlineStyle(), a(r.getCurrentContent(), r.getSelection()), !0));
      return;
    }
    var g = p(r, n, r.getCurrentInlineStyle(), a(r.getCurrentContent(), r.getSelection()), !1);
    var y = !1;
    if (!(y = u(t._latestCommittedEditorState))) {
      var v = r.getBlockTree(d);
      var m = g.getBlockTree(d);
      y = v.size !== m.size || v.zip(m).some(function (t) {
        var e = t[0];
        var r = t[1];
        var i = e.get("start");
        var o = i + (i >= h ? n.length : 0);
        var a = e.get("end");
        var s = a + (a >= h ? n.length : 0);
        var u = r.get("start");
        var c = r.get("end");
        var l = r.get("decoratorKey");
        return e.get("decoratorKey") !== l || e.get("leaves").size !== r.get("leaves").size || o !== u || s !== c || null != l && c - u != a - i;
      });
    }
    if (y || (y = f && ("'" == n || "/" == n)), y || (y = c(g.getDirectionMap()).get(d) !== c(r.getDirectionMap()).get(d)), y) {
      e.preventDefault();
      g = set(g, {
        forceSelection: !0
      });
      t.update(g);
      return;
    }
    g = set(g, {
      nativelyRenderedContent: g.getCurrentContent()
    });
    t._pendingStateFromBeforeInput = g;
    l(function () {
      void 0 !== t._pendingStateFromBeforeInput && (t.update(t._pendingStateFromBeforeInput), t._pendingStateFromBeforeInput = void 0);
    });
  }
};