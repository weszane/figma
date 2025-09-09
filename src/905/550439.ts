import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useAtomWithSubscription } from "../figma_app/27355";
import { trackEventAnalytics } from "../905/449184";
import { logError } from "../905/714362";
import { getI18nString } from "../905/303541";
import { showModalHandler } from "../905/156213";
import { F } from "../905/224";
import { t as _$$t2 } from "../figma_app/579169";
import { openFileTeamAtom } from "../figma_app/516028";
import { FFileType } from "../figma_app/191312";
import { UpsellModalType } from "../905/165519";
import { Bi } from "../905/652992";
import { fileActionEnum } from "../figma_app/630077";
import { Y } from "../905/513161";
import { DV } from "../905/739964";
import { V_, fm, $A, Ot } from "../905/850476";
function b(e) {
  switch (e) {
    case V_.STARTER:
      return F.Plan.STARTER;
    case V_.PRO:
      return F.Plan.PRO;
    case V_.ORG:
      return F.Plan.ORG;
    case V_.ENTERPRISE:
      return F.Plan.ENTERPRISE;
  }
}
export function $$v1(e) {
  let t = useAtomWithSubscription(fm);
  let i = $A(t);
  let s = function (e, t) {
    let i = useDispatch();
    let s = useAtomWithSubscription(openFileTeamAtom);
    return useCallback(() => {
      if (e === V_.ENTERPRISE) {
        logError("designSystems", "attempting to show modes upsell modal to enterprise user");
        return;
      }
      let n = {
        [V_.STARTER]: V_.PRO,
        [V_.ORG]: V_.ENTERPRISE,
        [V_.PRO]: V_.ENTERPRISE
      }[e];
      i(showModalHandler({
        type: DV,
        data: {
          team: s,
          resource: Bi.VARIABLES_MODES,
          action: "authoring" === t ? fileActionEnum.CREATE_MORE_VARIABLE_MODES : fileActionEnum.PUBLISH_MORE_VARIABLE_MODES,
          editorType: FFileType.DESIGN,
          currentPlan: b(e),
          upsellPlan: b(n),
          upsellSource: UpsellModalType.ADD_VARIABLE_MODES
        }
      }));
    }, [i, s, e, t]);
  }(t, e);
  let c = function () {
    let e = useDispatch();
    return useCallback(() => {
      e(showModalHandler({
        type: Y,
        data: {
          titleText: getI18nString("upsell.move_file_modes.upsell_title"),
          bodyText: getI18nString("upsell.move_file_modes.upsell_subtitle")
        }
      }));
    }, [e]);
  }();
  let v = useAtomWithSubscription(_$$t2).data ?? !1;
  return {
    modeLimit: i,
    canShowCTA: useCallback(e => t !== V_.ENTERPRISE && e < $A(V_.ENTERPRISE), [t]),
    showCTA: t !== V_.STARTER || v || "authoring" !== e ? s : c,
    allowExtendedSets: Ot()
  };
}
export function $$I0() {
  let e = useAtomWithSubscription(fm);
  let t = useAtomWithSubscription(_$$t2).data ?? !1;
  let i = function () {
    let e = useDispatch();
    return useCallback(() => {
      e(showModalHandler({
        type: Y,
        data: {
          titleText: getI18nString("upsell.move_file_prototyping.upsell_title"),
          bodyText: getI18nString("upsell.move_file_prototyping.upsell_subtitle")
        }
      }));
      trackEventAnalytics("prototype.move_to_folder_modal_shown");
    }, [e]);
  }();
  return {
    canUseAdvancedPrototyping: e !== V_.STARTER,
    canMoveFileToProPlus: !t,
    showMoveToProTeam: i
  };
}
export const R = $$I0;
export const z = $$v1;