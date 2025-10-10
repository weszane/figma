import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ServiceCategories } from "../905/165054";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogActionStrip } from "../figma_app/272243";
import { setupThemeContext } from "../905/614223";
import { getFeatureFlags } from "../905/601108";
import { ErrorBoundaryCrash, errorBoundaryFallbackTypes } from "../905/751457";
import { WithTrackedButton } from "../figma_app/617427";
import { getI18nString, renderI18nText } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { AutoLayout } from "../905/470281";
import { isCampfireModelEnabled } from "../figma_app/307841";
import { getRumLoggingConfig } from "../905/16237";
import { popModalStack } from "../905/156213";
import { DeepLinkType } from "../905/15667";
import { UpgradeAction } from "../905/370443";
import { TrackingProvider } from "../figma_app/831799";
import { R as _$$R } from "../905/263821";
import { logAndTrackCTA } from "../figma_app/314264";
import { getEditorTheme } from "../905/389382";
import { TrackingKeyEnum } from "../905/696396";
import { registerModal } from "../905/102752";
import { w as _$$w } from "../figma_app/171404";
import { T as _$$T } from "../905/434246";
import { mV, KL, k0, m3 } from "../905/223565";
export let $$N0 = registerModal(function ({
  licenseType: e,
  onRequest: t,
  onClose: i,
  open: C,
  afterRequest: N,
  trackingProperties: P,
  planName: O,
  entryPoint: D,
  planDataForSocialProof: L
}) {
  let F = useDispatch<AppDispatch>();
  let [M, j] = useState(!1);
  let U = getRumLoggingConfig();
  let B = () => {
    F(popModalStack());
  };
  let V = _$$R({
    licenseType: e,
    planDataForSocialProof: L,
    entryPoint: D ?? "auto-upgrade-confirmation-modal"
  });
  let G = async e => {
    M || (j(!0), await t(e, B), N?.(e), j(!1));
  };
  let z = useModalManager({
    open: C,
    onClose: () => {
      logAndTrackCTA({
        ...P,
        trackingContext: TrackingKeyEnum.AUTO_UPGRADE_CONFIRMATION_MODAL,
        trackingDescriptor: UpgradeAction.CANCEL
      });
      i();
    }
  });
  if (!isCampfireModelEnabled({
    preferOpenFilePlan: !0
  })) return null;
  let H = mV(e);
  let W = KL(e, O);
  D && D === DeepLinkType.USER_SETTINGS && (H = k0(e), W = m3(e, O));
  return jsx(ErrorBoundaryCrash, {
    boundaryKey: "AutoUpgradeConfirmationModal",
    fallback: errorBoundaryFallbackTypes.NONE_I_KNOW_WHAT_IM_DOING,
    sentryTags: {
      area: ServiceCategories.MONETIZATION_EXPANSION
    },
    onError: () => {
      F(VisualBellActions.enqueue({
        message: getI18nString("request_upgrade.modal.error"),
        error: !0
      }));
    },
    children: jsx(TrackingProvider, {
      name: TrackingKeyEnum.AUTO_UPGRADE_CONFIRMATION_MODAL,
      properties: P,
      trackingOptions: U,
      children: jsx(setupThemeContext, {
        brand: getEditorTheme(e),
        children: jsxs(ModalRootComponent, {
          manager: z,
          width: 360,
          children: [jsxs(DialogContents, {
            children: [jsx(DialogHeader, {
              children: jsx(DialogTitle, {
                children: H
              })
            }), jsxs(DialogBody, {
              padding: 0,
              children: [jsx(_$$T, {
                licenseType: e
              }), jsx(AutoLayout, {
                padding: {
                  top: 8,
                  bottom: 8,
                  left: 16,
                  right: 16
                },
                children: jsx("div", {
                  className: "x13faqbe",
                  children: W
                })
              })]
            }), jsx(DialogFooter, {
              children: jsx(DialogActionStrip, {
                children: jsx(WithTrackedButton, {
                  disabled: M,
                  onClick: G,
                  trackingProperties: {
                    trackingDescriptor: UpgradeAction.UPGRADE
                  },
                  trackingOptions: U,
                  children: renderI18nText("auto_upgrade_confirmation_modal.cta_text")
                })
              })
            })]
          }), getFeatureFlags().is_extended_social_proof_enabled && V.seatType && jsx(DialogContents, {
            className: "x1xmf6yo xh8yej3",
            children: jsx(DialogBody, {
              padding: 0,
              children: jsx(_$$w, {
                seatType: V.seatType,
                licenseType: V.licenseType,
                entryPoint: V.entryPoint,
                planData: V.planData
              })
            })
          })]
        })
      })
    })
  });
}, "AutoUpgradeConfirmationModal");
export const t = $$N0;