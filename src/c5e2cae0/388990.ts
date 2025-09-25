import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Suspense } from "react";
import { useDispatch } from "react-redux";
import { ServiceCategories } from "../905/165054";
import n from "classnames";
import { handleSuspenseRetainRelease } from "../figma_app/566371";
import { renderCheckoutDevModeText } from "../figma_app/361869";
import { CloseButton } from "../905/17223";
import { ErrorBoundaryCrash } from "../905/751457";
import { linkWithTracking, ButtonBasePrimaryTracked } from "../figma_app/637027";
import { P as _$$P } from "../905/347284";
import { SvgComponent } from "../905/714743";
import { renderI18nText, getI18nString } from "../905/303541";
import { sx } from "../figma_app/307841";
import { selectViewAction } from "../905/929976";
import { hideModal } from "../905/156213";
import { UpgradeAction } from "../905/370443";
import { withTracking } from "../figma_app/831799";
import { getContractCurrency, ensureLoadedResource, setupCurrentContractRatesTransform, BillingPriceSource, setupPricesTransform } from "../905/84777";
import { ProductAccessTypeEnum } from "../905/513035";
import { designSet } from "../905/332483";
import { renderRequestErrorInterstitial } from "../905/3140";
import { consumptionPaywallUtils } from "../905/224";
import { FPlanNameType, FFileType } from "../figma_app/191312";
import { CurrencyFormatter } from "../figma_app/514043";
import { useSuspendCurrentPrivilegedPlan } from "../figma_app/465071";
import { getCurrentTeam } from "../figma_app/598018";
import { ProductTierEnum, RenewalTermEnum } from "../905/712921";
import { FeatureFlag } from "../905/652992";
import { N as _$$N } from "../905/809096";
import { ModalView } from "../figma_app/918700";
import { bP } from "../905/739964";
import { oE, Vf, _R, $P, W2, E8, Ms, QB, VA, y3, Q$, gt, G8, yl, jG, o as _$$o, Dz, hx, b as _$$b, yH, Mm, Jh } from "../c5e2cae0/859355";
import { A as _$$A } from "../6828/871993";
var d = n;
function L(e) {
  return jsxs(Fragment, {
    children: [jsx(SvgComponent, {
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
        children: jsx(linkWithTracking, {
          href: "https://www.figma.com/pricing/#cid-57mfNh6t0Xo7z8Q95Ww9ZV",
          target: "_blank",
          trusted: !0,
          children: renderI18nText("org_upgrade.single_team.see_all_features")
        })
      }), e.plan === FPlanNameType.ORG && jsx(ButtonBasePrimaryTracked, {
        onClick: e.onUpgrade,
        className: E8,
        trackingProperties: {
          trackingDescriptor: UpgradeAction.UPGRADE_TO_ORGANIZATION,
          upsellSource: e.upsellSource
        },
        children: renderI18nText("org_upgrade.single_team.upgrade_to_an_organization")
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
        children: [renderI18nText("plan_details.figma"), jsx("div", {
          className: gt,
          children: jsx(renderCheckoutDevModeText, {})
        })]
      }), jsx("div", {
        children: jsx("p", {
          className: G8,
          children: e.prices[ProductAccessTypeEnum.DESIGN]
        })
      })]
    }), e.prices[ProductAccessTypeEnum.DEV_MODE] && jsxs("div", {
      className: y3,
      children: [jsx("p", {
        children: renderI18nText("plan_details.dev_mode_only")
      }), jsx("div", {
        children: jsx("p", {
          className: G8,
          children: e.prices[ProductAccessTypeEnum.DEV_MODE]
        })
      })]
    }), jsxs("div", {
      className: y3,
      children: [jsx("p", {
        children: renderI18nText("plan_details.fig_jam")
      }), jsx("div", {
        children: jsx("p", {
          className: G8,
          children: e.prices[ProductAccessTypeEnum.FIGJAM]
        })
      })]
    })]
  });
}
function U(e) {
  let t = useSuspendCurrentPrivilegedPlan({
    reportErrorsToTeam: ServiceCategories.BILLING_EXPERIENCE
  });
  let a = {
    planParentId: t.key.parentId || "",
    planType: t.key.type
  };
  let r = getContractCurrency(a);
  let [n] = handleSuspenseRetainRelease(r);
  let c = ensureLoadedResource(n);
  if (null === c.data) throw Error("Contract prices currency was null");
  let _ = c.data;
  let u = designSet.exclude([ProductAccessTypeEnum.DEV_MODE]);
  let h = u.dict(e => ({
    currency: _,
    billableProductKey: e,
    billableProductVariantKey: null,
    tier: ProductTierEnum.PRO,
    renewalTerm: RenewalTermEnum.YEAR,
    unit: RenewalTermEnum.MONTH
  }));
  let x = setupCurrentContractRatesTransform(h, a, BillingPriceSource.UPSELL_MODALS_CONTRACT);
  let y = setupPricesTransform({
    billableProductKeys: designSet,
    baseQuery: {
      currency: _,
      tier: ProductTierEnum.ORG,
      renewalTerm: RenewalTermEnum.YEAR,
      unit: RenewalTermEnum.MONTH
    }
  });
  let [j, b] = handleSuspenseRetainRelease(x, y);
  let C = ensureLoadedResource(j);
  if (null === C.data) throw Error("Contract price data was null");
  let I = ensureLoadedResource(b);
  if (null === I.data) throw Error("Sticker price data was null");
  let P = C.data;
  let M = I.data;
  let O = useDispatch();
  let B = () => {
    O(hideModal());
  };
  let L = new CurrencyFormatter(_);
  return jsx(ModalView, {
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
            children: renderI18nText("org_upgrade.single_team.get_more_out_of_figma_as_you_grow")
          })
        }), jsx(CloseButton, {
          className: _$$b,
          onClick: B,
          innerText: "close"
        })]
      }), jsxs("div", {
        className: d()(yH, Mm),
        children: [jsx($$$1, {
          dataTestId: "pro-prices",
          name: getI18nString("org_upgrade.single_team.professional_plan"),
          subtitle: getI18nString("org_upgrade.single_team.price_when_billed_annually"),
          prices: u.dict(e => `${L.formatMoney(P[e].amount)}`),
          padding: "16px 31px 16px 36px"
        }), jsx($$$1, {
          dataTestId: "org-prices",
          name: getI18nString("org_upgrade.single_team.organization_plan"),
          subtitle: getI18nString("org_upgrade.single_team.annual_billing_only"),
          prices: designSet.dict(e => `${L.formatMoney(M[e]?.amount ?? 0)}`),
          padding: "16px 32px 16px 33px"
        })]
      }), jsx("div", {
        className: Jh
      }), jsxs("div", {
        className: yH,
        children: [jsx(V, {
          plan: FPlanNameType.PRO,
          features: [{
            text: getI18nString("org_upgrade.single_team.unlimited_design_files_and_projects_in_one_team")
          }, {
            text: getI18nString("org_upgrade.single_team.design_library_within_one_team")
          }, {
            text: getI18nString("org_upgrade.single_team.audio_conversations_in_files")
          }]
        }), jsx(V, {
          plan: FPlanNameType.ORG,
          features: [{
            text: getI18nString("org_upgrade.single_team.everything_in_professional_plus"),
            isArrow: !0
          }, {
            text: getI18nString("org_upgrade.single_team.unlimited_teams_and_unlimited_projects")
          }, {
            text: getI18nString("org_upgrade.single_team.cross_team_design_libraries_and_fonts")
          }, {
            text: getI18nString("org_upgrade.single_team.control_file_sharing_inside_and_outside_of_your_organization")
          }, {
            text: getI18nString("org_upgrade.single_team.single_sign_on_sso_integration")
          }, {
            text: getI18nString("org_upgrade.single_team.private_plugins_and_plugin_management")
          }, {
            text: getI18nString("org_upgrade.single_team.full_content_ownership")
          }],
          onUpgrade: () => {
            B();
            O(selectViewAction({
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
export let $$z0 = withTracking(function (e) {
  let t = sx();
  let a = getCurrentTeam();
  return jsx(ErrorBoundaryCrash, {
    boundaryKey: "OrgUpgradeSingleTeamModal",
    team: ServiceCategories.BILLING_EXPERIENCE,
    fallback: jsx(renderRequestErrorInterstitial, {}),
    children: jsx(Suspense, {
      fallback: jsx(_$$N, {
        hiddenTitle: renderI18nText("org_upgrade.single_team.get_more_out_of_figma_as_you_grow"),
        estimatedWidth: 586,
        estimatedHeight: 586
      }),
      children: t ? jsx(bP, {
        team: a,
        resource: FeatureFlag.ORG,
        currentPlan: consumptionPaywallUtils.Plan.PRO,
        upsellPlan: consumptionPaywallUtils.Plan.ORG,
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