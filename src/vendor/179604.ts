function t(e, n) {
  return (t = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, n) {
    e.__proto__ = n;
    return e;
  })(e, n);
}
export function $$f0(e, n) {
  e.prototype = Object.create(n.prototype);
  e.prototype.constructor = e;
  t(e, n);
}
export const A = $$f0;