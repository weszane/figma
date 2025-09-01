import _require6 from "../vendor/791097";
import _require5 from "../vendor/533405";
import _require4 from "../vendor/205656";
import _require3 from "../vendor/82955";
import _require2 from "../vendor/681014";
import _require from "../vendor/532369";
import { encode, decode } from "../vendor/181617";
function s(e, r) {
  if (!(this instanceof s)) return new s(e, r);
  this.files = Object.create(null);
  this.comment = null;
  this.root = "";
  e && this.load(e, r);
  this.clone = function () {
    var e = new s();
    for (var r in this) "function" != typeof this[r] && (e[r] = this[r]);
    return e;
  };
}
s.prototype = _require;
s.prototype.load = _require2;
s.support = _require3;
s.defaults = _require4;
s.utils = _require5;
s.base64 = {
  encode: function (e) {
    return encode(e);
  },
  decode: function (e) {
    return decode(e);
  }
};
s.compressions = _require6;
module.exports = s;