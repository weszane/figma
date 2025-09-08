import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { useDispatch } from "../vendor/514228";
import { ServiceCategories as _$$e } from "../905/165054";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { J } from "../905/614223";
import { getFeatureFlags } from "../905/601108";
import { tH, H4 } from "../905/751457";
import { $z } from "../figma_app/617427";
import { o as _$$o } from "../905/160095";
import { renderI18nText, getI18nString } from "../905/303541";
import { sx } from "../905/941192";
import { F as _$$F } from "../905/302958";
import { Y as _$$Y } from "../905/830372";
import { RR } from "../figma_app/307841";
import { k as _$$k2 } from "../figma_app/618031";
import { u as _$$u } from "../905/16237";
import { popModalStack } from "../905/156213";
import { c as _$$c } from "../905/370443";
import { fu } from "../figma_app/831799";
import { R as _$$R } from "../905/263821";
import { Cu } from "../figma_app/314264";
import { ju } from "../905/389382";
import { e0 } from "../905/696396";
import { registerModal } from "../905/102752";
import { w as _$$w } from "../figma_app/171404";
import { T as _$$T } from "../905/434246";
import { k0, So } from "../905/223565";
export let $$O0 = registerModal(function ({
  licenseType: e,
  onRequest: t,
  onClose: i,
  open: k,
  afterRequest: O,
  trackingProperties: D,
  planName: L,
  isEduTeam: F,
  entryPoint: M,
  planDataForSocialProof: j
}) {
  let U = useDispatch();
  let B = _$$u();
  let V = RR({
    preferOpenFilePlan: !0
  });
  let G = _$$k2();
  let z = _$$R({
    licenseType: e,
    planDataForSocialProof: j,
    entryPoint: M ?? "admin-auto-upgrade-confirmation-modal"
  });
  let H = () => {
    U(popModalStack());
  };
  let W = async e => {
    await t(e, H);
    O?.(e);
  };
  let K = hS({
    open: k,
    onClose: () => {
      Cu({
        ...D,
        trackingContext: e0.ADMIN_AUTO_UPGRADE_CONFIRMATION_MODAL,
        trackingDescriptor: _$$c.CANCEL
      });
      i();
    }
  });
  let Y = useMemo(() => F ? null : G ? renderI18nText("admin_auto_upgrade_confirmation_modal.body.proration_mechanics") : renderI18nText("admin_auto_upgrade_confirmation_modal.body.legacy_mechanics"), [F, G]);
  if (!V) return null;
  let q = k0(e);
  let $ = jsx(_$$o, {
    href: "https://www.figma.com/pricing/",
    trusted: !0,
    newTab: !0,
    style: sx.colorTextBrand.cursorPointer.$,
    trackingProperties: {
      ...D,
      trackingContext: e0.ADMIN_AUTO_UPGRADE_CONFIRMATION_MODAL,
      trackingDescriptor: _$$c.OTHER_PRODUCTS
    },
    children: getI18nString("admin_auto_upgrade_confirmation_modal.body.other_products")
  });
  let Z = So(e, L, $, M);
  return jsx(tH, {
    boundaryKey: "AdminAutoUpgradeConfirmationModal",
    fallback: H4.NONE_I_KNOW_WHAT_IM_DOING,
    sentryTags: {
      area: _$$e.MONETIZATION_EXPANSION
    },
    onError: () => {
      U(_$$F.enqueue({
        message: getI18nString("admin_auto_upgrade_confirmation_modal.error"),
        error: !0
      }));
    },
    children: jsx(fu, {
      name: e0.ADMIN_AUTO_UPGRADE_CONFIRMATION_MODAL,
      properties: D,
      trackingOptions: B,
      children: jsx(J, {
        brand: ju(e),
        children: jsxs(bL, {
          manager: K,
          width: 360,
          children: [jsxs(vo, {
            children: [jsx(Y9, {
              children: jsx(hE, {
                children: q
              })
            }), jsxs(nB, {
              padding: 0,
              children: [jsx(_$$T, {
                licenseType: e
              }), jsx(_$$Y, {
                padding: {
                  top: 8,
                  bottom: 8,
                  left: 16,
                  right: 16
                },
                children: jsxs("div", {
                  className: "x13faqbe",
                  children: [Z, " ", Y]
                })
              })]
            }), jsx(wi, {
              children: jsx(jk, {
                children: jsx($z, {
                  onClick: W,
                  trackingProperties: {
                    trackingDescriptor: _$$c.UPGRADE
                  },
                  trackingOptions: B,
                  children: renderI18nText("auto_upgrade_confirmation_modal.cta_text")
                })
              })
            })]
          }), getFeatureFlags().is_extended_social_proof_enabled && z.seatType && jsx(vo, {
            className: "x1xmf6yo xh8yej3",
            children: jsx(nB, {
              padding: 0,
              children: jsx(_$$w, {
                seatType: z.seatType,
                licenseType: z.licenseType,
                entryPoint: z.entryPoint,
                planData: z.planData
              })
            })
          })]
        })
      })
    })
  });
}, "AdminAutoUpgradeConfirmationModal");
export const D = $$O0;