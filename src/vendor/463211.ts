import { getBackward } from "../vendor/705778";
import { push } from "../vendor/724102";
import o from "../vendor/937156";
import a from "../vendor/9448";
module.exports = function (t) {
  var e = a(t, function (t) {
    var e = t.getSelection();
    var r = e.getStartOffset();
    if (0 === r) return o(t, 1);
    var i = e.getStartKey();
    var a = t.getCurrentContent().getBlockForKey(i).getText().slice(0, r);
    return o(t, getBackward(a).length || 1);
  }, "backward");
  return e === t.getCurrentContent() ? t : push(t, e, "remove-range");
};