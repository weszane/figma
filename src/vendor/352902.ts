import { acceptSelection } from "../vendor/724102";
import i from "../vendor/12281";
import o from "../vendor/927746";
module.exports = function (t, e) {
  var r = e.currentTarget.ownerDocument;
  if (!t.props.preserveSelectionOnBlur && o(r) === r.body) {
    var a = r.defaultView.getSelection();
    var s = t.editor;
    1 === a.rangeCount && i(s, a.anchorNode) && i(s, a.focusNode) && a.removeAllRanges();
  }
  var u = t._latestEditorState;
  var c = u.getSelection();
  if (c.getHasFocus()) {
    var l = c.set("hasFocus", !1);
    t.props.onBlur && t.props.onBlur(e);
    t.update(acceptSelection(u, l));
  }
};