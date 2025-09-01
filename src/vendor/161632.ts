var i = Function.prototype.toString;
export let $$n0 = function (t) {
  if (null != t) {
    try {
      return i.call(t);
    } catch (t) {}
    try {
      return t + "";
    } catch (t) {}
  }
  return "";
};
export const A = $$n0;