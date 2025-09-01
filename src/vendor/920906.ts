import { A as _$$A } from "../vendor/656855";
let n = function (t, e) {
  for (var r = t.length; r--;) if (_$$A(t[r][0], e)) return r;
  return -1;
};
var s = Array.prototype.splice;
function l(t) {
  var e = -1;
  var r = t?.length;
  for (this.clear(); ++e < r;) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
l.prototype.clear = function () {
  this.__data__ = [];
  this.size = 0;
};
l.prototype.$$delete = function (t) {
  var e = this.__data__;
  var r = n(e, t);
  return !(r < 0) && (r == e.length - 1 ? e.pop() : s.call(e, r, 1), --this.size, !0);
};
l.prototype.get = function (t) {
  var e = this.__data__;
  var r = n(e, t);
  return r < 0 ? void 0 : e[r][1];
};
l.prototype.has = function (t) {
  return n(this.__data__, t) > -1;
};
l.prototype.set = function (t, e) {
  var r = this.__data__;
  var i = n(r, t);
  i < 0 ? (++this.size, r.push([t, e])) : r[i][1] = e;
  return this;
};
export let $$o0 = l;
export const A = $$o0;