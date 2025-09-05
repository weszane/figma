import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch } from "../vendor/514228";
import { ServiceCategories as _$$e } from "../905/165054";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { J } from "../905/614223";
import { getFeatureFlags } from "../905/601108";
import { tH, H4 } from "../905/751457";
import { $z } from "../figma_app/617427";
import { t as _$$t, tx } from "../905/303541";
import { F as _$$F } from "../905/302958";
import { Y } from "../905/830372";
import { RR } from "../figma_app/307841";
import { u as _$$u } from "../905/16237";
import { Lo } from "../905/156213";
import { tc } from "../905/15667";
import { c as _$$c } from "../905/370443";
import { fu } from "../figma_app/831799";
import { R as _$$R } from "../905/263821";
import { Cu } from "../figma_app/314264";
import { ju } from "../905/389382";
import { e0 } from "../905/696396";
import { Ju } from "../905/102752";
import { w as _$$w } from "../figma_app/171404";
import { T as _$$T } from "../905/434246";
import { mV, KL, k0, m3 } from "../905/223565";
export let $$N0 = Ju(function ({
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
  let F = useDispatch();
  let [M, j] = useState(!1);
  let U = _$$u();
  let B = () => {
    F(Lo());
  };
  let V = _$$R({
    licenseType: e,
    planDataForSocialProof: L,
    entryPoint: D ?? "auto-upgrade-confirmation-modal"
  });
  let G = async e => {
    M || (j(!0), await t(e, B), N?.(e), j(!1));
  };
  let z = hS({
    open: C,
    onClose: () => {
      Cu({
        ...P,
        trackingContext: e0.AUTO_UPGRADE_CONFIRMATION_MODAL,
        trackingDescriptor: _$$c.CANCEL
      });
      i();
    }
  });
  if (!RR({
    preferOpenFilePlan: !0
  })) return null;
  let H = mV(e);
  let W = KL(e, O);
  D && D === tc.USER_SETTINGS && (H = k0(e), W = m3(e, O));
  return jsx(tH, {
    boundaryKey: "AutoUpgradeConfirmationModal",
    fallback: H4.NONE_I_KNOW_WHAT_IM_DOING,
    sentryTags: {
      area: _$$e.MONETIZATION_EXPANSION
    },
    onError: () => {
      F(_$$F.enqueue({
        message: _$$t("request_upgrade.modal.error"),
        error: !0
      }));
    },
    children: jsx(fu, {
      name: e0.AUTO_UPGRADE_CONFIRMATION_MODAL,
      properties: P,
      trackingOptions: U,
      children: jsx(J, {
        brand: ju(e),
        children: jsxs(bL, {
          manager: z,
          width: 360,
          children: [jsxs(vo, {
            children: [jsx(Y9, {
              children: jsx(hE, {
                children: H
              })
            }), jsxs(nB, {
              padding: 0,
              children: [jsx(_$$T, {
                licenseType: e
              }), jsx(Y, {
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
            }), jsx(wi, {
              children: jsx(jk, {
                children: jsx($z, {
                  disabled: M,
                  onClick: G,
                  trackingProperties: {
                    trackingDescriptor: _$$c.UPGRADE
                  },
                  trackingOptions: U,
                  children: tx("auto_upgrade_confirmation_modal.cta_text")
                })
              })
            })]
          }), getFeatureFlags().is_extended_social_proof_enabled && V.seatType && jsx(vo, {
            className: "x1xmf6yo xh8yej3",
            children: jsx(nB, {
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