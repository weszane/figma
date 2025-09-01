export function $$t0() {
  return ($$t0 = Object.assign ? Object.assign.bind() : function (e) {
    for (var n = 1; n < $$arguments.length; n++) {
      var i = $$arguments[n];
      for (var t in i) ({}).hasOwnProperty.call(i, t) && (e[t] = i[t]);
    }
    return e;
  }).apply(null, arguments);
}
export const A = $$t0;