import { PW } from "../905/497152";
import { oz, nV } from "../905/808701";
let r = e => ({
  success: !1,
  value: null
});
export function $$s0(e) {
  let t = oz(PW.MANAGED_STRING, e);
  if (!t) return null;
  let i = l(e);
  return i ? {
    ...t,
    managedStringData: i
  } : null;
}
export function $$o1(e) {
  let t = nV(PW.MANAGED_STRING, e);
  if (!t) return null;
  let i = l(e);
  return i ? {
    ...t,
    managedStringData: i
  } : null;
}
function l(e) {
  if (!e.managedStringFields) return null;
  let {
    context,
    key,
    locale,
    textContent,
    content
  } = e.managedStringFields;
  let o = r(content);
  return {
    context,
    key,
    locale,
    textContent,
    content: o.success ? o.value : null
  };
}
export const fA = $$s0;
export const cx = $$o1;