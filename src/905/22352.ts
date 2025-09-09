import { VisualBellIcon } from "../905/576487";
export function $$r1(e) {
  return e.timeoutOverride ? e.timeoutOverride : e.error || e.icon === VisualBellIcon.PROGRESS || e.icon === VisualBellIcon.SPINNER || e.icon === VisualBellIcon.RETURN_TO_INSTANCE ? 1 / 0 : e.button ? 1e4 : e.messageComponentKey || e.i18n || e.message?.length > 25 ? 6e3 : 3e3;
}
export function $$a0(e, t) {
  let i = $$r1(e);
  t > 1 && (!e.timeoutType || "suggested" === e.timeoutType) && (i *= Math.pow(.5, t - 1));
  e.delay && (i += e.delay);
  return i;
}
export const L = $$a0;
export const R = $$r1;