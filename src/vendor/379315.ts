import { removeRange } from "../vendor/662606";
import { push } from "../vendor/724102";
import { getScrollParent } from "../vendor/364627";
import a from "../vendor/209540";
import s from "../vendor/91812";
import u from "../vendor/198992";
module.exports = function (t, e) {
  var r;
  var c = t._latestEditorState;
  var l = c.getSelection();
  var f = e.target;
  if (l.isCollapsed()) {
    e.preventDefault();
    return;
  }
  u(f) && (r = s(getScrollParent(f)));
  var p = a(c);
  t.setClipboard(p);
  t.setMode("cut");
  setTimeout(function () {
    var e;
    t.restoreEditorDOM(r);
    t.exitCurrentMode();
    t.update((e = removeRange(c.getCurrentContent(), c.getSelection(), "forward"), push(c, e, "remove-range")));
  }, 0);
};