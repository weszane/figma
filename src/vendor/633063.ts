var i = function (e, r) {
  return (i = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (e, r) {
    e.__proto__ = r;
  } || function (e, r) {
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
  })(e, r);
};
export function $$s0(e, r) {
  if ("function" != typeof r && null !== r) throw TypeError("Class extends value " + String(r) + " is not a constructor or null");
  function n() {
    this.constructor = e;
  }
  i(e, r);
  e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n());
}
export var $$o1 = function () {
  return ($$o1 = Object.assign || function (e) {
    for (n = 1, i = $$arguments.length, void 0; n < i; n++) {
      var r;
      var n;
      var i;
      for (var s in r = $$arguments[n]) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }).apply(this, arguments);
};
export function $$a2(e, r, n) {
  if (n || 2 == $$arguments.length) for (s = 0, o = r.length, void 0; s < o; s++) {
    var i;
    var s;
    var o;
    !i && s in r || (i || (i = Array.prototype.slice.call(r, 0, s)), i[s] = r[s]);
  }
  return e.concat(i || Array.prototype.slice.call(r));
}
Object.create;
Object.create;
export const C6 = $$s0;
export const Cl = $$o1;
export const fX = $$a2;