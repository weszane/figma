var i = /^(?:0|[1-9]\d*)$/;
export let $$n0 = function (t, e) {
  var r = typeof t;
  return !!(e = e) && ("number" == r || "symbol" != r && i.test(t)) && t > -1 && t % 1 == 0 && t < e;
};
export const A = $$n0;