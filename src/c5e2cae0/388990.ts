import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Suspense } from "react";
import { useDispatch } from "../vendor/514228";
import { ServiceCategories as _$$e } from "../905/165054";
import n from "classnames";
import { mI } from "../figma_app/566371";
import { G } from "../figma_app/361869";
import { Jn } from "../905/17223";
import { tH } from "../905/751457";
import { Us, vd } from "../figma_app/637027";
import { P as _$$P } from "../905/347284";
import { B as _$$B } from "../905/714743";
import { tx, t as _$$t } from "../905/303541";
import { sx } from "../figma_app/307841";
import { sf } from "../905/929976";
import { Ce } from "../905/156213";
import { c as _$$c } from "../905/370443";
import { kp } from "../figma_app/831799";
import { vK, vu, ic, Fq, jv } from "../905/84777";
import { ud } from "../905/513035";
import { Oq } from "../905/332483";
import { K } from "../905/3140";
import { F } from "../905/224";
import { FPlanNameType, FFileType } from "../figma_app/191312";
import { vr } from "../figma_app/514043";
import { XP } from "../figma_app/465071";
import { ol } from "../figma_app/598018";
import { Ju, IX } from "../905/712921";
import { Bi } from "../905/652992";
import { N as _$$N } from "../905/809096";
import { ey } from "../figma_app/918700";
import { bP } from "../905/739964";
import { oE, Vf, _R, $P, W2, E8, Ms, QB, VA, y3, Q$, gt, G8, yl, jG, o as _$$o, Dz, hx, b as _$$b, yH, Mm, Jh } from "../c5e2cae0/859355";
import { A as _$$A } from "../6828/871993";
var d = n;
function L(e) {
  return jsxs(Fragment, {
    children: [jsx(_$$B, {
      svg: e.isArrow ? '<svg xmlns="http://www.w3.org/2000/svg" width="9" height="7" viewBox="0 0 9 7"><path fill="#000" fill-opacity=".8" fill-rule="nonzero" stroke="none" d="m3.586 7 .602-.602L1.71 3.93h6.414v-.86H1.711L4.187.594 3.587 0l-3.5 3.5 3.5 3.5z"/></svg>' : _$$A,
      className: oE
    }), jsx("p", {
      children: e.text
    })]
  });
}
function V(e) {
  return jsx("div", {
    className: Vf,
    children: jsxs("div", {
      className: _R,
      children: [e.features.map((e, t) => jsx("div", {
        className: $P,
        children: jsx(L, {
          text: e.text,
          isArrow: e.isArrow
        })
      }, t)), e.plan === FPlanNameType.ORG && jsx("div", {
        className: W2,
        children: jsx(Us, {
          href: "https://www.figma.com/pricing/#cid-57mfNh6t0Xo7z8Q95Ww9ZV",
          target: "_blank",
          trusted: !0,
          children: tx("org_upgrade.single_team.see_all_features")
        })
      }), e.plan === FPlanNameType.ORG && jsx(vd, {
        onClick: e.onUpgrade,
        className: E8,
        trackingProperties: {
          trackingDescriptor: _$$c.UPGRADE_TO_ORGANIZATION,
          upsellSource: e.upsellSource
        },
        children: tx("org_upgrade.single_team.upgrade_to_an_organization")
      })]
    })
  });
}
export function $$$1(e) {
  return jsxs("div", {
    className: Ms,
    style: {
      padding: e.padding
    },
    "data-testid": e.dataTestId,
    children: [jsx("h2", {
      className: QB,
      children: e.name
    }), jsx("p", {
      className: VA,
      children: e.subtitle
    }), jsxs("div", {
      className: y3,
      children: [jsxs("p", {
        className: Q$,
        children: [tx("plan_details.figma"), jsx("div", {
          className: gt,
          children: jsx(G, {})
        })]
      }), jsx("div", {
        children: jsx("p", {
          className: G8,
          children: e.prices[ud.DESIGN]
        })
      })]
    }), e.prices[ud.DEV_MODE] && jsxs("div", {
      className: y3,
      children: [jsx("p", {
        children: tx("plan_details.dev_mode_only")
      }), jsx("div", {
        children: jsx("p", {
          className: G8,
          children: e.prices[ud.DEV_MODE]
        })
      })]
    }), jsxs("div", {
      className: y3,
      children: [jsx("p", {
        children: tx("plan_details.fig_jam")
      }), jsx("div", {
        children: jsx("p", {
          className: G8,
          children: e.prices[ud.FIGJAM]
        })
      })]
    })]
  });
}
function U(e) {
  let t = XP({
    reportErrorsToTeam: _$$e.BILLING_EXPERIENCE
  });
  let a = {
    planParentId: t.key.parentId || "",
    planType: t.key.type
  };
  let r = vK(a);
  let [n] = mI(r);
  let c = vu(n);
  if (null === c.data) throw Error("Contract prices currency was null");
  let _ = c.data;
  let u = Oq.exclude([ud.DEV_MODE]);
  let h = u.dict(e => ({
    currency: _,
    billableProductKey: e,
    billableProductVariantKey: null,
    tier: Ju.PRO,
    renewalTerm: IX.YEAR,
    unit: IX.MONTH
  }));
  let x = ic(h, a, Fq.UPSELL_MODALS_CONTRACT);
  let y = jv({
    billableProductKeys: Oq,
    baseQuery: {
      currency: _,
      tier: Ju.ORG,
      renewalTerm: IX.YEAR,
      unit: IX.MONTH
    }
  });
  let [j, b] = mI(x, y);
  let C = vu(j);
  if (null === C.data) throw Error("Contract price data was null");
  let I = vu(b);
  if (null === I.data) throw Error("Sticker price data was null");
  let P = C.data;
  let M = I.data;
  let O = useDispatch();
  let B = () => {
    O(Ce());
  };
  let L = new vr(_);
  return jsx(ey, {
    className: yl,
    hide: B,
    size: 586,
    useModalViewScroll: !1,
    children: jsxs(_$$P, {
      className: jG,
      children: [jsxs("div", {
        className: _$$o,
        children: [jsx("div", {
          className: Dz,
          children: jsx("div", {
            className: hx,
            children: tx("org_upgrade.single_team.get_more_out_of_figma_as_you_grow")
          })
        }), jsx(Jn, {
          className: _$$b,
          onClick: B,
          innerText: "close"
        })]
      }), jsxs("div", {
        className: d()(yH, Mm),
        children: [jsx($$$1, {
          dataTestId: "pro-prices",
          name: _$$t("org_upgrade.single_team.professional_plan"),
          subtitle: _$$t("org_upgrade.single_team.price_when_billed_annually"),
          prices: u.dict(e => `${L.formatMoney(P[e].amount)}`),
          padding: "16px 31px 16px 36px"
        }), jsx($$$1, {
          dataTestId: "org-prices",
          name: _$$t("org_upgrade.single_team.organization_plan"),
          subtitle: _$$t("org_upgrade.single_team.annual_billing_only"),
          prices: Oq.dict(e => `${L.formatMoney(M[e]?.amount ?? 0)}`),
          padding: "16px 32px 16px 33px"
        })]
      }), jsx("div", {
        className: Jh
      }), jsxs("div", {
        className: yH,
        children: [jsx(V, {
          plan: FPlanNameType.PRO,
          features: [{
            text: _$$t("org_upgrade.single_team.unlimited_design_files_and_projects_in_one_team")
          }, {
            text: _$$t("org_upgrade.single_team.design_library_within_one_team")
          }, {
            text: _$$t("org_upgrade.single_team.audio_conversations_in_files")
          }]
        }), jsx(V, {
          plan: FPlanNameType.ORG,
          features: [{
            text: _$$t("org_upgrade.single_team.everything_in_professional_plus"),
            isArrow: !0
          }, {
            text: _$$t("org_upgrade.single_team.unlimited_teams_and_unlimited_projects")
          }, {
            text: _$$t("org_upgrade.single_team.cross_team_design_libraries_and_fonts")
          }, {
            text: _$$t("org_upgrade.single_team.control_file_sharing_inside_and_outside_of_your_organization")
          }, {
            text: _$$t("org_upgrade.single_team.single_sign_on_sso_integration")
          }, {
            text: _$$t("org_upgrade.single_team.private_plugins_and_plugin_management")
          }, {
            text: _$$t("org_upgrade.single_team.full_content_ownership")
          }],
          onUpgrade: () => {
            B();
            O(sf({
              view: "orgSelfServe",
              upsellSource: e.upsellSource
            }));
          },
          upsellSource: e.upsellSource
        })]
      })]
    })
  });
}
export let $$z0 = kp(function (e) {
  let t = sx();
  let a = ol();
  return jsx(tH, {
    boundaryKey: "OrgUpgradeSingleTeamModal",
    team: _$$e.BILLING_EXPERIENCE,
    fallback: jsx(K, {}),
    children: jsx(Suspense, {
      fallback: jsx(_$$N, {
        hiddenTitle: tx("org_upgrade.single_team.get_more_out_of_figma_as_you_grow"),
        estimatedWidth: 586,
        estimatedHeight: 586
      }),
      children: t ? jsx(bP, {
        team: a,
        resource: Bi.ORG,
        currentPlan: F.Plan.PRO,
        upsellPlan: F.Plan.ORG,
        editorType: FFileType.DESIGN,
        upsellSource: e.upsellSource
      }) : jsx(U, {
        ...e
      })
    })
  });
}, "Single-Team Org Upgrade Modal");
export const OrgUpgradeSingleTeamModal = $$z0;
export const PlanWithFigjamPriceView = $$$1;