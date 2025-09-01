import { getForward } from "../vendor/705778";
import { push } from "../vendor/724102";
import o from "../vendor/980940";
import a from "../vendor/9448";
module.exports = function (t) {
  var e = a(t, function (t) {
    var e = t.getSelection();
    var r = e.getStartOffset();
    var i = e.getStartKey();
    var a = t.getCurrentContent().getBlockForKey(i).getText().slice(r);
    return o(t, getForward(a).length || 1);
  }, "forward");
  return e === t.getCurrentContent() ? t : push(t, e, "remove-range");
};