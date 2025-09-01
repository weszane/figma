import { m0 } from "../vendor/707924";
export function $$n1(e) {
  return 0 === e.mozInputSource && !!e.isTrusted || (m0() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType);
}
export function $$r0(e) {
  return !m0() && 0 === e.width && 0 === e.height || 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" === e.pointerType;
}
export const P = $$r0;
export const Y = $$n1;