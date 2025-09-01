import i from "../vendor/677796";
import s from "../vendor/262802";
import o from "../vendor/359373";
import a from "../vendor/1121";
import h from "../vendor/422857";
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