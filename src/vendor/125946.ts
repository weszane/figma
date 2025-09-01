let i = Object.prototype.toString;
export function $$s0(e) {
  let r = i.call(e);
  return r.endsWith("Array]") && !r.includes("Big");
}
export const e = $$s0;