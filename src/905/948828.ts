import { jsxs, jsx } from "react/jsx-runtime";
import { g as _$$g } from "../905/125190";
import { q } from "../905/636218";
import { getFeatureFlags } from "../905/601108";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
import { styleBuilderInstance } from "../905/941192";
import { EK, tg } from "../figma_app/396432";
import { B } from "../905/261906";
import { ProductAccessTypeEnum } from "../905/513035";
import { collaboratorSet } from "../905/332483";
import { compareProductAccessTypes } from "../figma_app/217457";
import { FPlanNameType } from "../figma_app/191312";
import { isSitesFeatureEnabled } from "../905/561485";
let $$_4 = renderI18nText("plan_comparison.campfire.starter.price.free");
let A = [renderI18nText("plan_comparison.campfire.starter.feature.three_files"), renderI18nText("plan_comparison.campfire.starter.feature.basic")];
let y = [renderI18nText("plan_comparison.campfire.pro.feature.unlimited_files"), renderI18nText("plan_comparison.campfire.pro.feature.prototyping"), renderI18nText("plan_comparison.campfire.pro.feature.library"), renderI18nText("plan_comparison.campfire.pro.feature.file_handoff")];
let b = [...y];
let v = [renderI18nText("plan_comparison.campfire.org.feature.unlimited_teams"), renderI18nText("plan_comparison.campfire.org.feature.branching"), renderI18nText("plan_comparison.campfire.org.feature.security"), renderI18nText("plan_comparison.campfire.org.feature.scim"), renderI18nText("plan_comparison.campfire.org.feature.customizations")];
function I(e) {
  switch (e) {
    case FPlanNameType.STARTER:
      return A;
    case FPlanNameType.STUDENT:
      return b;
    case FPlanNameType.PRO:
      let t = [...y];
      getFeatureFlags().ai_ga ? t.push(renderI18nText("plan_comparison.feature.ai_credits", {
        aiCredits: EK
      })) : getFeatureFlags().bake_full_seat_description && t.push(renderI18nText("plan_comparison.campfire.pro.feature.more_ai_prompts"));
      return t;
    case FPlanNameType.ORG:
      let i = [...v];
      getFeatureFlags().ai_ga && i.push(renderI18nText("plan_comparison.feature.ai_credits", {
        aiCredits: tg
      }));
      return i;
    default:
      return [];
  }
}
let $$E6 = "https://www.figma.com/enterprise/";
let $$x0 = "Plan comparison chart billing remodel";
export function $$S1() {
  let e = {
    planTier: FPlanNameType.STARTER,
    name: renderI18nText("plan_comparison.campfire.starter.name"),
    description: renderI18nText("plan_comparison.campfire.starter.description"),
    displayedSeats: null,
    features: I(FPlanNameType.STARTER)
  };
  let t = {
    planTier: FPlanNameType.STUDENT,
    name: renderI18nText("plan_comparison.campfire.edu.name"),
    description: renderI18nText("plan_comparison.campfire.edu.description"),
    displayedSeats: null,
    features: I(FPlanNameType.STUDENT)
  };
  let i = {
    planTier: FPlanNameType.PRO,
    name: renderI18nText("plan_comparison.campfire.pro.name"),
    description: renderI18nText("plan_comparison.campfire.pro.description"),
    displayedSeats: C(),
    features: I(FPlanNameType.PRO)
  };
  let n = {
    planTier: FPlanNameType.ORG,
    name: renderI18nText("plan_comparison.campfire.org.name"),
    description: renderI18nText("plan_comparison.campfire.org.description"),
    displayedSeats: C(),
    features: I(FPlanNameType.ORG)
  };
  let r = {
    [FPlanNameType.STARTER]: e,
    [FPlanNameType.STUDENT]: t,
    [FPlanNameType.PRO]: i,
    [FPlanNameType.ORG]: n
  };
  return [FPlanNameType.STARTER, FPlanNameType.STUDENT, FPlanNameType.PRO, FPlanNameType.ORG].map(e => r[e]);
}
var w = (e => (e[e.FIGJAM = 0] = "FIGJAM", e[e.SLIDES = 1] = "SLIDES", e[e.DEV_MODE = 2] = "DEV_MODE", e[e.SITES = 3] = "SITES", e[e.DESIGN = 4] = "DESIGN", e[e.MAKE = 5] = "MAKE", e))(w || {});
function C() {
  let e = {
    seatType: ProductAccessTypeEnum.COLLABORATOR,
    icon: B({
      type: ProductAccessTypeEnum.COLLABORATOR,
      size: "24",
      removeBackgroundColor: !0
    }),
    name: renderI18nText("plan_comparison.campfire.collab_seat.name")
  };
  let t = {
    seatType: ProductAccessTypeEnum.DEVELOPER,
    icon: B({
      type: ProductAccessTypeEnum.DEVELOPER,
      size: "24",
      removeBackgroundColor: !0
    }),
    name: renderI18nText("plan_comparison.campfire.dev_seat.name")
  };
  let i = {
    seatType: ProductAccessTypeEnum.EXPERT,
    icon: B({
      type: ProductAccessTypeEnum.EXPERT,
      size: "24",
      removeBackgroundColor: !0
    }),
    name: renderI18nText("plan_comparison.campfire.full_seat.name")
  };
  let n = {
    seatType: ProductAccessTypeEnum.CONTENT,
    icon: B({
      type: ProductAccessTypeEnum.CONTENT,
      size: "24",
      removeBackgroundColor: !0
    }),
    name: renderI18nText("plan_comparison.campfire.content_seat.name")
  };
  let r = collaboratorSet.sort(compareProductAccessTypes);
  let a = {
    [ProductAccessTypeEnum.COLLABORATOR]: e,
    [ProductAccessTypeEnum.DEVELOPER]: t,
    [ProductAccessTypeEnum.EXPERT]: i,
    [ProductAccessTypeEnum.CONTENT]: n
  };
  return r.map(e => a[e]);
}
export function $$T7() {
  let e = {
    seatType: ProductAccessTypeEnum.COLLABORATOR,
    icon: B({
      type: ProductAccessTypeEnum.COLLABORATOR,
      size: "32"
    }),
    name: renderI18nText("plan_comparison.campfire.collab.name"),
    description: renderI18nText("plan_comparison.campfire.collab.description"),
    supportedProducts: [0, 1]
  };
  let t = {
    seatType: ProductAccessTypeEnum.DEVELOPER,
    icon: B({
      type: ProductAccessTypeEnum.DEVELOPER,
      size: "32"
    }),
    name: renderI18nText("plan_comparison.campfire.dev.name"),
    description: renderI18nText("plan_comparison.campfire.dev.description"),
    supportedProducts: [0, 1, 2]
  };
  let i = {
    seatType: ProductAccessTypeEnum.EXPERT,
    icon: B({
      type: ProductAccessTypeEnum.EXPERT,
      size: "32"
    }),
    name: renderI18nText("plan_comparison.campfire.full.name"),
    description: renderI18nText("plan_comparison.campfire.full.description"),
    supportedProducts: [0, 1, 2, 3, 4, 5]
  };
  let n = {
    seatType: ProductAccessTypeEnum.CONTENT,
    icon: B({
      type: ProductAccessTypeEnum.CONTENT,
      size: "32"
    }),
    name: renderI18nText("plan_comparison.campfire.content.name"),
    description: renderI18nText("plan_comparison.campfire.content.description"),
    supportedProducts: [0, 1, 3]
  };
  let r = {
    [ProductAccessTypeEnum.COLLABORATOR]: e,
    [ProductAccessTypeEnum.DEVELOPER]: t,
    [ProductAccessTypeEnum.EXPERT]: i,
    [ProductAccessTypeEnum.CONTENT]: n
  };
  return collaboratorSet.sort((e, t) => -compareProductAccessTypes(e, t)).map(e => r[e]);
}
export function $$k2(e) {
  return [0, 1, 2, 3, 5, 4].map(t => {
    let i;
    switch (t) {
      case 4:
        i = renderI18nText("plan_comparison.campfire.design");
        break;
      case 2:
        i = renderI18nText("plan_comparison.campfire.dev_mode");
        break;
      case 0:
        i = renderI18nText("plan_comparison.campfire.figjam");
        break;
      case 1:
        i = renderI18nText("plan_comparison.campfire.slides");
        break;
      case 3:
        i = renderI18nText("plan_comparison.campfire.sites");
        break;
      case 5:
        i = renderI18nText("general.figma_rev");
    }
    let d = e.includes(t);
    return (3 !== t || isSitesFeatureEnabled()) && (5 !== t || getFeatureFlags().bake_full_seat_description) ? jsxs("div", {
      className: _$$s.flex.my4.$,
      children: [d ? jsx(_$$g, {}) : jsx(q, {
        style: {
          "--color-icon": "var(--color-icon-tertiary)"
        }
      }), jsxs("div", {
        className: _$$s.font13.lh24.$$if(!d, _$$s.colorTextSecondary).$,
        children: [i, 3 === t && d && jsx(O, {}), 5 === t && d && !getFeatureFlags().ai_ga && jsx(O, {})]
      })]
    }, t) : null;
  });
}
function R({
  text: e,
  isStaticColor: t,
  isNoColor: i
}) {
  let r = _$$s.colorTextBrandTertiary.colorBgBrandTertiary;
  t ? r = _$$s.colorTextDesignTertiary.colorBgDesignTertiary : i && (r = _$$s.colorText.colorBgTertiary);
  return jsx("span", {
    className: _$$s.ml4.px4.py2.fontNormal.font11.lh16.bRadius5.add(r).$,
    style: styleBuilderInstance.add({
      verticalAlign: "text-bottom"
    }).$,
    children: e
  });
}
export function $$N5() {
  return jsx(R, {
    text: renderI18nText("plan_comparison.campfire.edu.highlight")
  });
}
export function $$P3({
  isStaticColor: e
}) {
  return jsx(R, {
    text: renderI18nText("plan_comparison.plans.most_popular"),
    isStaticColor: e
  });
}
function O() {
  return jsx(R, {
    text: renderI18nText("general.beta"),
    isNoColor: !0
  });
}
export const QO = $$x0;
export const Qu = $$S1;
export const Rc = $$k2;
export const Wb = $$P3;
export const j_ = $$_4;
export const pr = $$N5;
export const qC = $$E6;
export const yg = $$T7;