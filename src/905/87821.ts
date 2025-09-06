import { getFeatureFlags } from "../905/601108";
import { desktopAPIInstance } from "../figma_app/876459";
import { d6 } from "../figma_app/687776";
import { s as _$$s } from "../905/573154";
import { sf } from "../905/929976";
import { jd } from "../figma_app/528509";
import { FFileType, FPlanNameType } from "../figma_app/191312";
import { rR, sK } from "../figma_app/598018";
export function $$p0(e, t) {
  desktopAPIInstance ? (desktopAPIInstance.showFileBrowser(e), desktopAPIInstance.close({
    suppressReopening: !1,
    shouldForceClose: !0
  })) : (t(sf({
    view: "recentsAndSharing"
  })), t(_$$s.error(e)));
}
let m = Math.random().toString(36).slice(2);
export function $$h2() {
  return m;
}
export function $$g3(e, t, i) {
  let r = e && e.teamId;
  let s = r ? i.teams[r] : null;
  let o = e?.plan?.tier;
  let u = e?.editorType ?? FFileType.DESIGN;
  let p = !!e && !!t && d6(t, u);
  if (s && p && !rR(s, {
    type: sK.ADD_FILE,
    editorType: u,
    isDestinationTeamDrafts: jd(i.openFile?.project)
  }) || u === FFileType.FIGMAKE && s && o === FPlanNameType.STARTER && !getFeatureFlags().bake_starter_limit) return s;
}
export { ck } from "../figma_app/469876";
export const A7 = $$p0;
export const ds = $$h2;
export const xp = $$g3;