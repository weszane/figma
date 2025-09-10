import { useMemo, useCallback } from "react";
import { filterNotNullish } from "../figma_app/656233";
import { K } from "../905/807535";
import { ServiceCategories as _$$e } from "../905/165054";
import { reportError } from "../905/11";
import { x } from "../905/23221";
import { getI18nString, renderI18nText } from "../905/303541";
import { FProductType, FProductAccessType, FPlanNameType } from "../figma_app/191312";
import { useCurrentPublicPlan } from "../figma_app/465071";
import { TeamType } from "../905/814802";
import { isFigmakeSitesEnabled } from "../figma_app/552876";
import { ProductAccessTypeEnum, ViewAccessTypeEnum, B6 } from "../905/513035";
import { N_ } from "../905/332483";
import { a as _$$a } from "../905/584964";
import { compareProductAccessOrder, getProductAccessTypeOrDefault } from "../figma_app/765689";
import { lG, F2 } from "../905/389382";
let y = {
  design: ProductAccessTypeEnum.DESIGN,
  whiteboard: ProductAccessTypeEnum.FIGJAM,
  figjam: ProductAccessTypeEnum.FIGJAM,
  dev_mode: ProductAccessTypeEnum.DEV_MODE,
  slides: ProductAccessTypeEnum.SLIDES,
  collaborator: ProductAccessTypeEnum.COLLABORATOR,
  developer: ProductAccessTypeEnum.DEVELOPER,
  expert: ProductAccessTypeEnum.EXPERT,
  content: ProductAccessTypeEnum.CONTENT,
  view: ViewAccessTypeEnum.VIEW,
  ai_credits: ProductAccessTypeEnum.AI_CREDITS
};
export function $$b10(e) {
  return y[e] ?? e;
}
x()(y);
let T = {
  design: FProductType.DESIGN,
  whiteboard: FProductType.WHITEBOARD,
  figjam: FProductType.WHITEBOARD,
  dev_mode: FProductType.DEV_MODE,
  slides: FProductType.SLIDES,
  collaborator: FProductType.COLLABORATOR,
  developer: FProductType.DEVELOPER,
  expert: FProductType.EXPERT,
  content: FProductType.CONTENT,
  ai_credits: FProductType.AI_CREDITS
};
x()(T);
let I = {
  design: FProductAccessType.DESIGN,
  whiteboard: FProductAccessType.WHITEBOARD,
  figjam: FProductAccessType.WHITEBOARD,
  dev_mode: FProductAccessType.DEV_MODE,
  slides: FProductAccessType.SLIDES,
  sites: FProductAccessType.SITES,
  figmake: FProductAccessType.FIGMAKE,
  cooper: FProductAccessType.COOPER
};
export function $$S1(e) {
  return I[e] ?? e;
}
x()(I);
let v = {
  design: TeamType.DESIGN,
  whiteboard: TeamType.WHITEBOARD,
  figjam: TeamType.WHITEBOARD
};
x()(v);
let A = {
  [ProductAccessTypeEnum.DESIGN]: 10,
  [ProductAccessTypeEnum.DEV_MODE]: 20,
  [ProductAccessTypeEnum.FIGJAM]: 30,
  [ProductAccessTypeEnum.SLIDES]: 40,
  [ProductAccessTypeEnum.EXPERT]: 50,
  [ProductAccessTypeEnum.DEVELOPER]: 60,
  [ProductAccessTypeEnum.CONTENT]: 70,
  [ProductAccessTypeEnum.COLLABORATOR]: 80,
  [ViewAccessTypeEnum.VIEW]: 90,
  [ProductAccessTypeEnum.AI_CREDITS]: 100
};
export function $$x5(e) {
  return A[e];
}
export function $$N0(e, t) {
  return A[e] - A[t];
}
export var $$C9 = (e => (e.SEAT_DESCRIPTION = "seat_description", e.ALL = "all", e))($$C9 || {});
export function $$w2(e, t) {
  let r = $$O3(t);
  return useMemo(() => r(e), [r, e]);
}
export function $$O3(e) {
  let t = function (e) {
    let t = e.visibility ?? "seat_description";
    let r = useCurrentPublicPlan("useSeatTypeLicenseTypesMap").unwrapOr(null);
    let s = (e.overridePlanTier ? K(FPlanNameType, e.overridePlanTier) : void 0) || r?.tier;
    let o = useMemo(() => ({
      [ProductAccessTypeEnum.EXPERT]: filterNotNullish([FProductAccessType.DESIGN, FProductAccessType.DEV_MODE, FProductAccessType.WHITEBOARD, FProductAccessType.SLIDES, FProductAccessType.SITES, FProductAccessType.COOPER, isFigmakeSitesEnabled() ? FProductAccessType.FIGMAKE : void 0]),
      [ProductAccessTypeEnum.DEVELOPER]: filterNotNullish([FProductAccessType.DEV_MODE, FProductAccessType.WHITEBOARD, FProductAccessType.SLIDES, FProductAccessType.COOPER]),
      [ProductAccessTypeEnum.COLLABORATOR]: filterNotNullish([FProductAccessType.WHITEBOARD, FProductAccessType.SLIDES]),
      [ProductAccessTypeEnum.CONTENT]: filterNotNullish([FProductAccessType.COOPER, FProductAccessType.WHITEBOARD, FProductAccessType.SLIDES])
    }), []);
    return useMemo(() => N_.dict(e => {
      let r = o[e];
      "seat_description" === t && (r = r.filter(e => lG(e, s)));
      return r;
    }), [t, o, s]);
  }(e);
  return useCallback(e => t[e]?.sort(compareProductAccessOrder) || [], [t]);
}
let R = N_.dict();
export function $$L12(e) {
  return R[e];
}
export function $$P7(e) {
  if (!e) return null;
  let t = R[$$b10(e.key)];
  return t ? {
    key: t,
    license_types: e.licenseTypes
  } : (reportError(_$$e.BILLING_EXPERIENCE, Error(`convertLgSeatTypeProduct encountered unexpected seat type key: ${e.key}`)), null);
}
export function $$D11(e) {
  let {
    listFormatType,
    overridePlanTier
  } = e ?? {};
  let i = $$O3({
    overridePlanTier,
    visibility: "seat_description"
  });
  return useCallback(e => e === ViewAccessTypeEnum.VIEW ? getI18nString("modify_plan_user_seat_modal.products_for_seat.view") : _$$a(i(e), listFormatType), [listFormatType, i]);
}
export function $$k6(e, t) {
  let r = $$D11(t);
  return useMemo(() => r(e), [e, r]);
}
export function $$M8(e, t) {
  switch (F2(e)) {
    case ProductAccessTypeEnum.EXPERT:
      return {
        header: renderI18nText("upgrades.drafts_move.admin_self_upgrade_header.full_seat"),
        body: renderI18nText("upgrades.drafts_move.admin_self_upgrade_body.full_seat", {
          planName: t
        })
      };
    case ProductAccessTypeEnum.DEVELOPER:
      return {
        header: renderI18nText("upgrades.drafts_move.admin_self_upgrade_header.dev_seat"),
        body: renderI18nText("upgrades.drafts_move.admin_self_upgrade_body.dev_seat", {
          planName: t
        })
      };
    case ProductAccessTypeEnum.COLLABORATOR:
      return {
        header: renderI18nText("upgrades.drafts_move.admin_self_upgrade_header.collab_seat"),
        body: renderI18nText("upgrades.drafts_move.admin_self_upgrade_body.collab_seat", {
          planName: t
        })
      };
    default:
      return null;
  }
}
export function $$F4(e, t) {
  let r = F2(getProductAccessTypeOrDefault(t));
  return !r || !B6(r, e);
}
export const AG = $$N0;
export const Gj = $$S1;
export const HD = $$w2;
export const Hl = $$O3;
export const JR = $$F4;
export const KS = $$x5;
export const SS = $$k6;
export const TA = $$P7;
export const Uw = $$M8;
export const YT = $$C9;
export const Zx = $$b10;
export const _w = $$D11;
export const f2 = $$L12;
