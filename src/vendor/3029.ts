function t(e) {
  return function (n) {
    var i = n.dispatch;
    var t = n.getState;
    return function (n) {
      return function (f) {
        return "function" == typeof f ? f(i, t, e) : n(f);
      };
    };
  };
}
var f = t();
f.withExtraArgument = t;
export let $$r0 = f;
export const A = $$r0;