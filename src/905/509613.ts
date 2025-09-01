import { eU, zl } from "../figma_app/27355";
import { az } from "../905/449184";
import { debugState } from "../905/407919";
import { getInitialOptions } from "../figma_app/169182";
import { n as _$$n } from "../905/347702";
let $$l3 = eU(null);
let $$d5 = eU(null);
let $$c4 = eU(null);
let $$u2 = eU(null);
let $$p6 = eU(new Set());
let $$m1 = eU("unchecked");
let $$h0 = _$$n(e => {
  let t = zl.get($$l3);
  let i = zl.get($$d5);
  let o = zl.get($$p6);
  if (!zl.get($$p6).has(e)) {
    zl.set($$p6, new Set([...o, e]));
    let l = debugState && debugState.getState().selectedView;
    let d = l?.view === "fullscreen" && l.fileKey;
    az.trackDefinedEvent("search_experience.ai_eligibility.grantlist_check", {
      newGrantlistPlanValue: null !== t ? t.toString() : "null",
      newGrantlistUserValue: null !== i ? i.toString() : "null",
      userId: getInitialOptions().user_data?.id,
      fileKey: d || "missing",
      caller: e
    });
  }
  return t || i || !1;
});
export const $7 = $$h0;
export const Ac = $$m1;
export const Jt = $$u2;
export const ag = $$l3;
export const p9 = $$c4;
export const u6 = $$d5;
export const yf = $$p6;