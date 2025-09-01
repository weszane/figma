import { h3O } from "../figma_app/763686";
import { debugState } from "../905/407919";
import { P8 } from "../905/270781";
import { v5, Nb, cf, Nq } from "../figma_app/314264";
export let $$o0 = P8([({
  openFile: e,
  fileByKey: t,
  selectedView: i
}) => {
  let n = e?.key;
  let r = n && t && t[n] || null;
  return {
    key: n,
    teamId: r?.team_id,
    creatorId: r?.creator_id,
    productType: v5(i, r && r.editor_type)
  };
}], ({
  key: e,
  teamId: t,
  creatorId: i,
  productType: n
}) => ({
  file_key: e || "new",
  file_team_id: t || null,
  file_owner_user_id: i || null,
  productType: e && n
}));
export function $$l1(e) {
  if (e ??= {}, debugState) {
    let t = debugState.getState();
    Object.assign(e, $$o0(t));
    Object.assign(e, Nb(e.productType, t.selectedView?.view));
  }
  let t = cf();
  null !== t && (e.loadID = t, e.reconnectId = Nq());
  e.fileIsIncremental = !!h3O?.isIncrementalSession();
  e.fileIsValidatingIncremental = !!h3O?.isValidatingIncremental();
  e.isStagingChanges = !!h3O?.isStagingChanges();
  return e;
}
export const c = $$o0;
export const r = $$l1;