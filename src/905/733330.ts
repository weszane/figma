import { parseQuery, serializeQuery } from "../905/634134";
import { getI18nString } from "../905/303541";
import { UpsellModalType } from "../905/165519";
import { X1 } from "../figma_app/736948";
import { UpgradeSteps } from "../figma_app/831101";
import { SC } from "../figma_app/707808";
export class $$d0 {
  pathToSelectedView(e, t, i) {
    if ("purchase-organization" === t[1]) {
      let e = {
        view: "orgSelfServe",
        step: X1.Initial,
        orgMigrated: !1,
        upsellSource: UpsellModalType.UNSET
      };
      if (i) {
        let t = parseQuery(i);
        t.ds && (e.initialDesignEditors = parseInt(t.ds));
      }
      let r = new URLSearchParams(i);
      if (r.get("team_flow_type")) {
        let t = r.get("team_flow_type");
        if (t === SC.CREATE) return {
          view: "teamUpgrade",
          teamFlowType: t,
          teamId: null,
          paymentStep: UpgradeSteps.CREATE_TEAM
        };
        e.newTeamProps = {
          teamFlowType: t
        };
      } else "create-team" === t[2] && (e.newTeamProps = {
        teamFlowType: SC.CREATE_AND_UPGRADE
      });
      r.get("entryPoint") && (e.entryPoint = parseInt(r.get("entryPoint")));
      return e;
    }
    return null;
  }
  selectedViewToPath(e) {
    if ("orgSelfServe" === e.view) {
      let t = "/purchase-organization";
      e.step === X1.CreateTeam || !e.step && e.newTeamProps ? t += "/create-team" : e.step !== X1.TeamSelect && e.step ? e.step === X1.Details ? t += "/details" : e.step === X1.Payment ? t += "/payment" : e.step === X1.Review ? t += "/review" : e.step && e.step !== X1.Initial || (e.newTeamProps ? t += "/create-team" : t += "/team-select") : t += "/team-select";
      let i = {};
      e.newTeamProps && (i.team_flow_type = e.newTeamProps.teamFlowType);
      e.entryPoint && (i.entryPoint = e.entryPoint);
      Object.keys(i).length > 0 && (t += `?${serializeQuery(i)}`);
      return t;
    }
    return null;
  }
  requireHistoryChange(e, t) {
    return "orgSelfServe" === e.view != ("orgSelfServe" === t.view) || "orgSelfServe" === e.view && "orgSelfServe" === t.view && e.step !== t.step;
  }
  selectedViewName(e) {
    return "orgSelfServe" !== e.view ? null : getI18nString("org_view.view_selector.upgrade_to_organization");
  }
  selectedViewHasMissingResources(e, t) {
    return !1;
  }
}
export const _ = $$d0;