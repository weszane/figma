import { nF } from "../905/350402";
import { to } from "../905/156213";
import { e9 } from "../905/766303";
import { F } from "../905/224";
import { F as _$$F } from "../905/642505";
import { rR, sK } from "../figma_app/598018";
import { b } from "../905/165519";
import { vL } from "../905/652992";
import { Mk } from "../905/163189";
import { ZN } from "../figma_app/630077";
import { O } from "../905/174367";
import { DV } from "../905/739964";
import { u as _$$u } from "../905/997541";
let $$g0 = nF(e => {
  if (!_$$F) return;
  let t = e.getState();
  let r = e9(t);
  let n = r && r.team_id && t.teams[r.team_id];
  n && Mk.every(e => !rR(n, {
    type: sK.ADD_FILE,
    editorType: e
  })) ? e.dispatch(to({
    type: DV,
    data: {
      team: n,
      resource: vL.FILE,
      action: ZN.CREATE_FILE,
      currentPlan: F.Plan.STARTER,
      upsellPlan: F.Plan.PRO,
      editorType: null,
      upsellSource: b.CREATE_NEW_FILE
    }
  })) : e.dispatch(to({
    type: O,
    data: {
      projectId: r?.id ?? ""
    }
  }));
});
let $$$$f1 = nF(e => {
  _$$F && e.dispatch(_$$u({
    multiple: !1,
    accept: ".sketch"
  }));
});
export const L = $$g0;
export const f = $$$$f1;