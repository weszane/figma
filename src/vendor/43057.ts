import { push } from "../vendor/724102";
import { getUTF16Length } from "../vendor/425872";
import o from "../vendor/937156";
import a from "../vendor/9448";
module.exports = function (t) {
  var e = a(t, function (t) {
    var e = t.getSelection();
    var r = t.getCurrentContent();
    var n = e.getAnchorKey();
    var a = e.getAnchorOffset();
    var s = r.getBlockForKey(n).getText()[a - 1];
    return o(t, s ? getUTF16Length(s, 0) : 1);
  }, "backward");
  if (e === t.getCurrentContent()) return t;
  var r = t.getSelection();
  return push(t, e.set("selectionBefore", r), r.isCollapsed() ? "backspace-character" : "remove-range");
};