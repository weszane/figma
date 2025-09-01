import i from "../vendor/527092";
import s from "../vendor/547970";
import o from "../vendor/706653";
import a from "../vendor/477105";
import h from "../vendor/805369";
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