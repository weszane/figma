import { splitBlock } from "../vendor/662606";
import { push } from "../vendor/724102";
module.exports = function (t) {
  var e = splitBlock(t.getCurrentContent(), t.getSelection());
  return push(t, e, "split-block");
};