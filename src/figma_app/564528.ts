import { eU, zl } from "../figma_app/27355";
import { z } from "../905/239603";
import { MP } from "../figma_app/469876";
import { m } from "../905/298920";
import { G } from "../905/231128";
export function $$l2(e) {
  return !!(MP() && G()) && (m({
    url: e
  }), !0);
}
export function $$d1() {
  return !!(MP() && G()) && (m({
    action: "backToFiles"
  }), !0);
}
let $$c3 = eU(null);
let u = z.object({
  type: z.literal("collaborationHostNameMessage"),
  collaborationHostName: z.string().nullable().optional()
});
export function $$p0(e) {
  if (e.origin !== window.self.origin) return;
  let t = u.safeParse(e.data);
  if (!t.success) return;
  let r = t.data;
  "collaborationHostNameMessage" === r.type && zl.set($$c3, r.collaborationHostName);
}
export const FR = $$p0;
export const LR = $$d1;
export const Lf = $$l2;
export const Ui = $$c3;