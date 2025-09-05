import { useCallback } from "react";
import { useDispatch } from "../vendor/514228";
import { md } from "../figma_app/27355";
import { sx } from "../905/449184";
import { x1 } from "../905/714362";
import { t as _$$t } from "../905/303541";
import { to } from "../905/156213";
import { F } from "../905/224";
import { t as _$$t2 } from "../figma_app/579169";
import { Hu } from "../figma_app/516028";
import { FFileType } from "../figma_app/191312";
import { b as _$$b } from "../905/165519";
import { Bi } from "../905/652992";
import { ZN } from "../figma_app/630077";
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
  let t = md(fm);
  let i = $A(t);
  let s = function (e, t) {
    let i = useDispatch();
    let s = md(Hu);
    return useCallback(() => {
      if (e === V_.ENTERPRISE) {
        x1("designSystems", "attempting to show modes upsell modal to enterprise user");
        return;
      }
      let n = {
        [V_.STARTER]: V_.PRO,
        [V_.ORG]: V_.ENTERPRISE,
        [V_.PRO]: V_.ENTERPRISE
      }[e];
      i(to({
        type: DV,
        data: {
          team: s,
          resource: Bi.VARIABLES_MODES,
          action: "authoring" === t ? ZN.CREATE_MORE_VARIABLE_MODES : ZN.PUBLISH_MORE_VARIABLE_MODES,
          editorType: FFileType.DESIGN,
          currentPlan: b(e),
          upsellPlan: b(n),
          upsellSource: _$$b.ADD_VARIABLE_MODES
        }
      }));
    }, [i, s, e, t]);
  }(t, e);
  let c = function () {
    let e = useDispatch();
    return useCallback(() => {
      e(to({
        type: Y,
        data: {
          titleText: _$$t("upsell.move_file_modes.upsell_title"),
          bodyText: _$$t("upsell.move_file_modes.upsell_subtitle")
        }
      }));
    }, [e]);
  }();
  let v = md(_$$t2).data ?? !1;
  return {
    modeLimit: i,
    canShowCTA: useCallback(e => t !== V_.ENTERPRISE && e < $A(V_.ENTERPRISE), [t]),
    showCTA: t !== V_.STARTER || v || "authoring" !== e ? s : c,
    allowExtendedSets: Ot()
  };
}
export function $$I0() {
  let e = md(fm);
  let t = md(_$$t2).data ?? !1;
  let i = function () {
    let e = useDispatch();
    return useCallback(() => {
      e(to({
        type: Y,
        data: {
          titleText: _$$t("upsell.move_file_prototyping.upsell_title"),
          bodyText: _$$t("upsell.move_file_prototyping.upsell_subtitle")
        }
      }));
      sx("prototype.move_to_folder_modal_shown");
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