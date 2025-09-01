import { push } from "../vendor/724102";
import i from "../vendor/248529";
import o from "../vendor/762195";
import a from "../vendor/937156";
import s from "../vendor/9448";
module.exports = function (t, e) {
  var r = s(t, function (t) {
    var r = t.getSelection();
    if (r.isCollapsed() && 0 === r.getAnchorOffset()) return a(t, 1);
    var n = e.currentTarget.ownerDocument.defaultView.getSelection().getRangeAt(0);
    return o(t, null, (n = i(n)).endContainer, n.endOffset, n.startContainer, n.startOffset).selectionState;
  }, "backward");
  return r === t.getCurrentContent() ? t : push(t, r, "remove-range");
};