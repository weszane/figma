import { getDirection } from "../vendor/207799";
import { isStrong, getGlobalDir } from "../vendor/414386";
import a from "../vendor/153658";
function n(t, e, r) {
  e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r;
  return t;
}
var s = function () {
  function t(t) {
    n(this, "_defaultDir", void 0);
    n(this, "_lastDir", void 0);
    t ? isStrong(t) || a(!1) : t = getGlobalDir();
    this._defaultDir = t;
    this.reset();
  }
  var e = t.prototype;
  e.reset = function () {
    this._lastDir = this._defaultDir;
  };
  e.getDirection = function (t) {
    this._lastDir = getDirection(t, this._lastDir);
    return this._lastDir;
  };
  return t;
}();
module.exports = s;