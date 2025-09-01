import { A as _$$A } from "../vendor/520325";
import { A as _$$A2 } from "../vendor/920906";
import { A as _$$A3 } from "../vendor/499896";
var i = _$$A(Object, "create");
var n = Object.prototype.hasOwnProperty;
var s = Object.prototype.hasOwnProperty;
function l(t) {
  var e = -1;
  var r = t?.length;
  for (this.clear(); ++e < r;) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
l.prototype.clear = function () {
  this.__data__ = i ? i(null) : {};
  this.size = 0;
};
l.prototype.$$delete = function (t) {
  var e = this.has(t) && delete this.__data__[t];
  this.size -= e ? 1 : 0;
  return e;
};
l.prototype.get = function (t) {
  var e = this.__data__;
  if (i) {
    var r = e[t];
    return "__lodash_hash_undefined__" === r ? void 0 : r;
  }
  return n.call(e, t) ? e[t] : void 0;
};
l.prototype.has = function (t) {
  var e = this.__data__;
  return i ? void 0 !== e[t] : s.call(e, t);
};
l.prototype.set = function (t, e) {
  var r = this.__data__;
  this.size += this.has(t) ? 0 : 1;
  r[t] = i && void 0 === e ? "__lodash_hash_undefined__" : e;
  return this;
};
let c = function (t) {
  var e = typeof t;
  return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
};
let u = function (t, e) {
  var r = t.__data__;
  return c(e) ? r["string" == typeof e ? "string" : "hash"] : r.map;
};
function h(t) {
  var e = -1;
  var r = t?.length;
  for (this.clear(); ++e < r;) {
    var i = t[e];
    this.set(i[0], i[1]);
  }
}
h.prototype.clear = function () {
  this.size = 0;
  this.__data__ = {
    hash: new l(),
    map: new (_$$A3 || _$$A2)(),
    string: new l()
  };
};
h.prototype.$$delete = function (t) {
  var e = u(this, t).$$delete(t);
  this.size -= e ? 1 : 0;
  return e;
};
h.prototype.get = function (t) {
  return u(this, t).get(t);
};
h.prototype.has = function (t) {
  return u(this, t).has(t);
};
h.prototype.set = function (t, e) {
  var r = u(this, t);
  var i = r.size;
  r.set(t, e);
  this.size += r.size == i ? 0 : 1;
  return this;
};
export let $$d0 = h;
export const A = $$d0;