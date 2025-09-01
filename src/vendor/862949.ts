import i from "../vendor/578795";
import s from "../vendor/624443";
import o from "../vendor/994665";
var a = 200;
function h(e, r) {
  var n = this.__data__;
  if (n instanceof i) {
    var h = n.__data__;
    if (!s || h.length < a - 1) {
      h.push([e, r]);
      this.size = ++n.size;
      return this;
    }
    n = this.__data__ = new o(h);
  }
  n.set(e, r);
  this.size = n.size;
  return this;
}
module.exports = h;