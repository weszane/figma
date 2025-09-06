import { logDebug, logError, logWarning } from "../905/714362";
export function $$r0(...e) {
  logDebug("CMS", ...e);
}
export function $$a2(...e) {
  let t = [...e];
  t[2]?.reportAsSentryError == null && (t[2] = {
    ...t[2],
    reportAsSentryError: !0
  });
  logError("CMS", ...t);
}
export function $$s1(...e) {
  logWarning("CMS", ...e);
}
export const FU = $$r0;
export const Q2 = $$s1;
export const sD = $$a2;