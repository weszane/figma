import { logError, logWarning } from "../905/714362";
export function $$r2(e, t) {
  logError("Autosave", e, t, {
    reportAsSentryError: !0
  });
}
export function $$a0(e, t) {
  $$r2(e, {
    "original message": t.message
  });
}
export function $$s4(e) {
  return "autosave-file" === e.type;
}
export function $$o3() {
  return !1;
}
export async function $$l1() {
  try {
    if (!navigator.storage?.estimate) return Promise.resolve({
      usageBytes: void 0,
      quotaBytes: void 0
    });
    let {
      usage,
      quota
    } = await navigator.storage.estimate();
    return {
      usageBytes: usage,
      quotaBytes: quota
    };
  } catch (e) {
    logWarning("Autosave", "Failed to get storage usage", {
      message: e?.message
    });
    return Promise.resolve({
      usageBytes: void 0,
      quotaBytes: void 0
    });
  }
}
export const Lf = $$a0;
export const U4 = $$l1;
export const W6 = $$r2;
export const rQ = $$o3;
export const y8 = $$s4;