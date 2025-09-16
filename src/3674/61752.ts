import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAtomValueAndSetter, useAtomWithSubscription } from "../figma_app/27355";
import { customHistory } from "../905/612521";
import { trackFileEventWithStore } from "../figma_app/901889";
import { selectWithShallowEqual } from "../905/103090";
import { AUTH_INIT } from "../905/194276";
import { AuthFlowStep } from "../905/862321";
import { renderI18nText } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { V as _$$V } from "../905/223767";
import { useCanAccessFullDevMode } from "../figma_app/473493";
import { hA } from "../figma_app/88239";
import { selectViewAction } from "../905/929976";
import { showModalHandler } from "../905/156213";
import { WX } from "../figma_app/482142";
import { i$ } from "../905/15667";
import { c as _$$c } from "../905/370443";
import { selectCurrentFile } from "../figma_app/516028";
import { FProductAccessType } from "../figma_app/191312";
import { hasTeamPaidAccess, isTeamLocked } from "../figma_app/345997";
import { useCurrentPlanUser } from "../figma_app/465071";
import { FUserTypeClassification } from "../figma_app/421473";
import { ol, H7 } from "../figma_app/598018";
import { wH } from "../figma_app/680166";
import { UpsellModalType } from "../905/165519";
import { FEditorType } from "../figma_app/53721";
import { UpsellSourceType } from "../figma_app/831101";
import { q, J as _$$J } from "../905/202542";
import { x as _$$x } from "../905/749159";
import { R as _$$R2 } from "../905/300969";
import { U as _$$U2 } from "../figma_app/65327";
import { i as _$$i } from "../905/46262";
import { z } from "../3674/674644";
import { t as _$$t, c as _$$c2 } from "../905/722657";
import { n as _$$n } from "../3674/214307";
import { J as _$$J2 } from "../figma_app/261874";
export function $$z0({
  entryPoint: e,
  dismissModal: t,
  onRequestAccess: n
} = {}) {
  let O = function () {
    let e = useCanAccessFullDevMode();
    let t = selectCurrentFile();
    let n = useCurrentPlanUser("useUpgradeForDevMode").unwrapOr(null);
    let r = n?.key.type === FUserTypeClassification.TEAM_USER && n?.planKey.parentId === t?.teamId;
    let u = n?.key.type === FUserTypeClassification.ORG_USER && n?.planKey.parentId === t?.parentOrgId;
    let g = ol();
    let x = hasTeamPaidAccess(g) && !g?.org_id;
    let y = trackFileEventWithStore();
    let C = useDispatch();
    let L = _$$J2();
    let [R, O] = useAtomValueAndSetter(_$$t);
    let B = useCallback(() => {
      L && O(_$$c2.UPGRADING);
    }, [L, O]);
    let {
      handleUpgrade,
      getUpgradeEligibility
    } = wH();
    return useCallback((n = i$.DevMode, a) => {
      if (t && !e) try {
        if (t.parentOrgId && u || x && r) {
          B();
          getUpgradeEligibility(FProductAccessType.DEV_MODE, !1) === q.CAN_UPGRADE && handleUpgrade({
            licenseType: FProductAccessType.DEV_MODE,
            upgradeReason: _$$i.DEV_MODE,
            afterUpgradeCallback: a,
            entryPoint: n
          })({});
        } else if (t.parentOrgId) {
          B();
          C(AUTH_INIT({
            origin: "dev_mode",
            formState: AuthFlowStep.JOIN_ORG,
            redirectUrl: customHistory.location.pathname
          }));
          C(showModalHandler({
            type: _$$x,
            data: {}
          }));
        } else if (x) C(VisualBellActions.enqueue({
          message: "No team user"
        }));else {
          y("Dev Mode Paywall clicked", {
            type: "Starter Tier Upgrade",
            entryPoint: n
          }, {
            forwardToDatadog: !0
          });
          let e = g?.id;
          n !== i$.DowngradeEmail && e ? C(WX({
            teamId: e,
            openInNewTab: !0,
            entryPoint: UpsellSourceType.DEV_MODE_MODAL
          })) : (B(), C(showModalHandler({
            type: _$$V,
            data: {
              teamId: e ?? void 0,
              upsellSource: UpsellModalType.DEV_MODE_UPSELL,
              openCheckoutInNewTab: !0,
              onDone: () => O(_$$c2.DEFAULT)
            }
          })));
        }
      } catch (e) {
        L && O(_$$c2.DEFAULT);
        C(VisualBellActions.enqueue({
          message: e.message || e.data.message
        }));
      }
    }, [t, e, x, C, g?.id, B, u, getUpgradeEligibility, handleUpgrade, r, y, O, L]);
  }();
  let {
    getUpgradePathway
  } = wH();
  let W = [_$$J.AUTO_PATHWAY, _$$J.ADMIN_AUTO_PATHWAY].includes(getUpgradePathway(FProductAccessType.DEV_MODE));
  let G = _$$n();
  let U = useSelector(e => isTeamLocked(H7(e)?.id ?? "", e));
  let K = _$$J2();
  let X = useCallback(() => {
    t?.();
    O(e, n);
  }, [t, n, O, e]);
  let J = function (e) {
    let t = !!hA();
    let n = useAtomWithSubscription(_$$R2);
    let l = _$$U2("blocking_modal");
    let s = useDispatch();
    let d = selectWithShallowEqual(e => ({
      ...e.selectedView,
      editorType: FEditorType.Design,
      showOverview: !0,
      focusViewBackNavigation: void 0,
      devModeFocusId: void 0
    }));
    let c = useCallback(() => {
      l("design");
    }, [l]);
    let p = useCallback(() => {
      s(selectViewAction(d));
    }, [d, s]);
    return e ? {
      label: renderI18nText("dev_handoff.paywall.blocking_modal.button.not_now"),
      onClick: e,
      trackingDescriptor: _$$c.NOT_NOW
    } : t ? {
      label: renderI18nText("dev_handoff.paywall.blocking_modal.button.back_to_summary"),
      onClick: p,
      trackingDescriptor: _$$c.BACK_TO_SUMMARY
    } : n ? {
      label: renderI18nText("dev_handoff.paywall.blocking_modal.button.not_now"),
      onClick: c,
      trackingDescriptor: _$$c.NOT_NOW
    } : {
      label: renderI18nText("dev_handoff.paywall.blocking_modal.button.back_to_design"),
      onClick: c,
      trackingDescriptor: _$$c.BACK_TO_DESIGN
    };
  }(t);
  return K ? {
    primaryButtonProps: {
      label: W ? renderI18nText("auto_upgrade_confirmation.dev_mode.cta_text") : renderI18nText("dev_handoff.paywall.blocking_modal.button.request_access"),
      onClick: X,
      trackingDescriptor: W ? _$$c.GET_DEV_MODE : _$$c.REQUEST_ACCESS
    },
    secondaryButtonProps: J
  } : G ? U ? {
    primaryButtonProps: J,
    secondaryButtonProps: void 0
  } : {
    primaryButtonProps: {
      label: renderI18nText("dev_handoff.paywall.blocking_modal.button.learn_more"),
      onClick: V,
      trackingDescriptor: _$$c.LEARN_MORE
    },
    secondaryButtonProps: J
  } : {
    primaryButtonProps: {
      label: U ? renderI18nText("dev_handoff.paywall.blocking_modal.button.locked.reactivate") : renderI18nText("payments_modal.upgrade_to_professional"),
      onClick: X,
      trackingDescriptor: U ? _$$c.REACTIVATE_YOUR_PROFESSIONAL_PLAN : _$$c.UPGRADE_TO_PROFESSIONAL
    },
    secondaryButtonProps: J
  };
}
function V() {
  customHistory.unsafeRedirect(z, "_blank");
}
export function $$H2() {
  let {
    hasPendingRequest,
    getIsUpgradeHandlerLoading
  } = wH();
  return {
    loading: getIsUpgradeHandlerLoading(),
    hasPendingRequest: hasPendingRequest(FProductAccessType.DEV_MODE)
  };
}
export function $$W1() {
  let e = selectCurrentFile();
  return e?.currentPartialOrgUser?.designAccountTypeRequest?.status === "pending" || e?.currentPartialOrgUser?.devModeAccountTypeRequest?.status === "pending" || e?.currentTeamUser?.designAccountTypeRequest?.status === "pending";
}
export const BC = $$z0;
export const Gu = $$W1;
export const w_ = $$H2;