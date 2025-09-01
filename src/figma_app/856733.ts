import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { wA } from "../vendor/514228";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { getFeatureFlags } from "../905/601108";
import { az } from "../905/449184";
import { h as _$$h } from "../905/207101";
import { $z } from "../figma_app/617427";
import { tx } from "../905/303541";
import { b as _$$b } from "../905/985254";
import { q5 } from "../figma_app/516028";
import { iZ } from "../905/372672";
import { Ju, ZU } from "../905/102752";
import { N as _$$N } from "../905/73189";
import { r as _$$r } from "../905/393328";
export function $$b1({
  onAgree: e,
  onDecline: t,
  onClose: r,
  eulasToShow: f,
  eulaShown: b,
  ...T
}) {
  let I = wA();
  let S = iZ();
  let v = q5();
  !function () {
    let e = iZ();
    let t = q5();
    _$$h(() => {
      az.trackDefinedEvent("preset_libraries.apple_eula_displayed", {
        userId: e?.id ?? void 0,
        fileTeamId: t?.teamId ?? void 0,
        fileParentOrgId: t?.parentOrgId ?? void 0,
        fileKey: t?.key,
        asyncModal: !1
      });
    });
  }();
  let A = useCallback(e => {
    az.trackDefinedEvent("preset_libraries.apple_eula_clicked", {
      actionType: e,
      userId: S?.id ?? void 0,
      fileTeamId: v?.teamId ?? void 0,
      fileParentOrgId: v?.parentOrgId ?? void 0,
      fileKey: v?.key,
      asyncModal: !1
    });
  }, [v, S]);
  let x = useCallback(() => {
    A("x");
    t?.();
    r();
  }, [t, r, A]);
  let N = hS({
    ...T,
    onClose: x,
    preventUserClose: !1
  });
  let C = getFeatureFlags();
  return jsx(bL, {
    manager: N,
    width: 600,
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: C.dse_sf_pro_font ? tx("community.eula.component_license_agreement") : tx("community.eula.license_agreement_v2")
        })
      }), jsx(nB, {
        children: jsxs("div", {
          style: {
            maxHeight: "360px"
          },
          children: [C.dse_sf_pro_font ? jsx("div", {
            style: {
              color: "var(--color-text-secondary)",
              padding: "8px 0px"
            },
            children: tx("community.eula.subtext.component_license_agreement")
          }) : jsx("div", {
            className: _$$r,
            children: tx("community.eula.license_agreement_preamble")
          }), jsx(_$$N, {})]
        })
      }), jsxs(wi, {
        children: [void 0 !== f && void 0 !== b && f > 1 && jsx("div", {
          children: tx("community.eula.i_of_count", {
            i: b,
            count: f
          })
        }), jsxs(jk, {
          children: [jsx($z, {
            onClick: () => {
              A("decline");
              t?.();
              r();
            },
            variant: "secondary",
            children: tx("community.eula.disagree")
          }), jsx($z, {
            onClick: () => {
              A("accept");
              I(_$$b({
                apple_eula_accepted: !0
              }));
              e();
              r();
            },
            variant: "primary",
            children: tx("community.eula.agree")
          })]
        })]
      })]
    })
  });
}
export let $$$$T0 = Ju($$b1, "APPLE_EULA_MODAL_TYPE", ZU.YES);
export const T = $$$$T0;
export const x = $$b1;