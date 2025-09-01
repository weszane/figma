import _require from "../vendor/391990";
import { removeRange } from "../vendor/662606";
var i = _require("draft_tree_data_support");
module.exports = function (t, e, r) {
  var o = t.getSelection();
  var a = t.getCurrentContent();
  var s = o;
  var u = o.getAnchorKey();
  var c = o.getFocusKey();
  var l = a.getBlockForKey(u);
  if (i && "forward" === r && u !== c) return a;
  if (o.isCollapsed()) {
    if ("forward" === r) {
      if (t.isSelectionAtEndOfContent()) return a;
      if (i && o.getAnchorOffset() === a.getBlockForKey(u).getLength()) {
        var f = a.getBlockForKey(l.nextSibling);
        if (!f || 0 === f.getLength()) return a;
      }
    } else if (t.isSelectionAtStartOfContent()) return a;
    if ((s = e(t)) === o) return a;
  }
  return removeRange(a, s, r);
};