import { useMemo, useEffect, useCallback } from "react";
import { IssueCategory, ColorPalette, HandoffBindingsCpp, SessionOrigin } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { getI18nString } from "../905/303541";
import { r as _$$r } from "../905/955316";
import { wA } from "../figma_app/167249";
var d = (e => (e[e.DARK = 0] = "DARK", e[e.LIGHT = 1] = "LIGHT", e))(d || {});
export function $$c5(e) {
  switch (e) {
    case IssueCategory.ACCESSIBILITY:
      return getI18nString("dev_handoff.annotations.category_preset.accessibility");
    case IssueCategory.BEHAVIOR:
      return getI18nString("dev_handoff.annotations.category_preset.behavior");
    case IssueCategory.CONTENT:
      return getI18nString("dev_handoff.annotations.category_preset.content");
    case IssueCategory.DEVELOPMENT:
      return getI18nString("dev_handoff.annotations.category_preset.development");
    case IssueCategory.INTERACTION:
      return getI18nString("dev_handoff.annotations.category_preset.interaction");
  }
}
export function $$u0(e) {
  switch (e) {
    case IssueCategory.ACCESSIBILITY:
      return ColorPalette.PINK;
    case IssueCategory.CONTENT:
      return ColorPalette.ORANGE;
    case IssueCategory.BEHAVIOR:
      return ColorPalette.BLUE;
    case IssueCategory.DEVELOPMENT:
      return ColorPalette.GREEN;
    case IssueCategory.INTERACTION:
      return ColorPalette.BLUE;
  }
}
export let $$p9 = {
  [ColorPalette.GREEN]: {
    color: "rgba(61, 160, 89, 1)",
    label: () => getI18nString("dev_handoff.annotations.categories_edit_window.category_color.green")
  },
  [ColorPalette.PINK]: {
    color: "rgba(216, 52, 158, 1)",
    label: () => getI18nString("dev_handoff.annotations.categories_edit_window.category_color.pink")
  },
  [ColorPalette.RED]: {
    color: "rgba(227, 76, 44, 1)",
    label: () => getI18nString("dev_handoff.annotations.categories_edit_window.category_color.red")
  },
  [ColorPalette.BLUE]: {
    color: "rgba(27, 113, 217, 1)",
    label: () => getI18nString("dev_handoff.annotations.categories_edit_window.category_color.blue")
  },
  [ColorPalette.YELLOW]: {
    color: "rgba(251, 198, 69, 1)",
    label: () => getI18nString("dev_handoff.annotations.categories_edit_window.category_color.yellow")
  },
  [ColorPalette.ORANGE]: {
    color: "rgba(255, 165, 0, 1)",
    label: () => getI18nString("dev_handoff.annotations.categories_edit_window.category_color.orange")
  },
  [ColorPalette.TEAL]: {
    color: "rgba(0, 128, 128, 1)",
    label: () => getI18nString("dev_handoff.annotations.categories_edit_window.category_color.teal")
  },
  [ColorPalette.VIOLET]: {
    color: "rgba(148, 0, 211, 1)",
    label: () => getI18nString("dev_handoff.annotations.categories_edit_window.category_color.violet")
  }
};
export function $$_3(e = {
  initializeIfNull: !1
}) {
  let {
    initializeIfNull = !1
  } = e;
  let r = useMemo(() => HandoffBindingsCpp.isReadOnly(SessionOrigin.ANNOTATIONS), []);
  let s = useMemo(() => [], []);
  let d = wA(e => e.getRoot().annotationCategories);
  useEffect(() => {
    !r && null === d && initializeIfNull && _$$r(() => {
      permissionScopeHandler.system("initialize-annotation-categories", () => {
        HandoffBindingsCpp.initializeAnnotationCategories();
      });
    });
  }, [d, r, initializeIfNull]);
  return d ?? s;
}
export function $$h7() {
  return useCallback(e => {
    _$$r(() => {
      permissionScopeHandler.user("update-annotation-categories", () => {
        HandoffBindingsCpp.setCustomAnnotationCategories(e);
      });
    });
  }, []);
}
export function $$m2(e) {
  return $$p9[$$u0(e)];
}
export function $$g6(e) {
  return e.preset !== IssueCategory.NONE ? $$u0(e.preset) : e.custom?.color ?? null;
}
export function $$f1(e) {
  return e.preset !== IssueCategory.NONE ? $$m2(e.preset).color : e.custom?.color != null ? $$p9[e.custom.color].color : null;
}
export function $$E8(e) {
  return e.preset !== IssueCategory.NONE ? $$c5(e.preset) : e.custom?.label ?? "";
}
export function $$y4(e) {
  let t = e.preset === IssueCategory.NONE ? e.custom?.color : $$u0(e.preset);
  return null != t && 0 === function (e) {
    switch (e) {
      case ColorPalette.ORANGE:
      case ColorPalette.YELLOW:
        return 0;
      default:
        return 1;
    }
  }(t);
}
export const AP = $$u0;
export const FQ = $$f1;
export const Lw = $$m2;
export const XR = $$_3;
export const cD = $$y4;
export const h9 = $$c5;
export const l6 = $$g6;
export const mi = $$h7;
export const uA = $$E8;
export const yu = $$p9;