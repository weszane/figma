import { createOptimistThunk } from "../905/350402";
import { showModalHandler } from "../905/156213";
import { getSelectedFolder } from "../905/766303";
import { consumptionPaywallUtils } from "../905/224";
import { fileImporter } from "../905/642505";
import { checkTeamFileRestrictions, AddOperationType } from "../figma_app/598018";
import { UpsellModalType } from "../905/165519";
import { PageFolderFile } from "../905/652992";
import { Mk } from "../905/163189";
import { fileActionEnum } from "../figma_app/630077";
import { O } from "../905/174367";
import { ConsumptionPaywallModalPlansPricing } from "../905/739964";
import { u as _$$u } from "../905/997541";
let $$g0 = createOptimistThunk(e => {
  if (!fileImporter) return;
  let t = e.getState();
  let r = getSelectedFolder(t);
  let n = r && r.team_id && t.teams[r.team_id];
  n && Mk.every(e => !checkTeamFileRestrictions(n, {
    type: AddOperationType.ADD_FILE,
    editorType: e
  })) ? e.dispatch(showModalHandler({
    type: ConsumptionPaywallModalPlansPricing,
    data: {
      team: n,
      resource: PageFolderFile.FILE,
      action: fileActionEnum.CREATE_FILE,
      currentPlan: consumptionPaywallUtils.Plan.STARTER,
      upsellPlan: consumptionPaywallUtils.Plan.PRO,
      editorType: null,
      upsellSource: UpsellModalType.CREATE_NEW_FILE
    }
  })) : e.dispatch(showModalHandler({
    type: O,
    data: {
      projectId: r?.id ?? ""
    }
  }));
});
let $$$$f1 = createOptimistThunk(e => {
  fileImporter && e.dispatch(_$$u({
    multiple: !1,
    accept: ".sketch"
  }));
});
export const L = $$g0;
export const f = $$$$f1;