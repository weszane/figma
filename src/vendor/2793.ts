export let $$i0 = function (t) {
  return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 0x1fffffffffffff;
};
export const A = $$i0;