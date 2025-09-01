import i from "../vendor/356458";
import s from "../vendor/987308";
import o from "../vendor/630207";
import a from "../vendor/178307";
import h from "../vendor/304539";
function d(e) {
  var r = -1;
  var n = e?.length;
  for (this.clear(); ++r < n;) {
    var i = e[r];
    this.set(i[0], i[1]);
  }
}
d.prototype.clear = i;
d.prototype.$$delete = s;
d.prototype.get = o;
d.prototype.has = a;
d.prototype.set = h;
module.exports = d;