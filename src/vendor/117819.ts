import { A as _$$A } from "../vendor/920906";
import { A as _$$A2 } from "../vendor/499896";
import { A as _$$A3 } from "../vendor/973228";
function l(t) {
  var e = this.__data__ = new _$$A(t);
  this.size = e.size;
}
l.prototype.clear = function () {
  this.__data__ = new _$$A();
  this.size = 0;
};
l.prototype.$$delete = function (t) {
  var e = this.__data__;
  var r = e.$$delete(t);
  this.size = e.size;
  return r;
};
l.prototype.get = function (t) {
  return this.__data__.get(t);
};
l.prototype.has = function (t) {
  return this.__data__.has(t);
};
l.prototype.set = function (t, e) {
  var r = this.__data__;
  if (r instanceof _$$A) {
    var l = r.__data__;
    if (!_$$A2 || l.length < 199) {
      l.push([t, e]);
      this.size = ++r.size;
      return this;
    }
    r = this.__data__ = new _$$A3(l);
  }
  r.set(t, e);
  this.size = r.size;
  return this;
};
export let $$o0 = l;
export const A = $$o0;