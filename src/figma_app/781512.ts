import { useMemo, useEffect, useCallback } from "react";
import { Bll, RN1, w3z, SES } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { t } from "../905/303541";
import { r as _$$r } from "../905/955316";
import { wA } from "../figma_app/167249";
var d = (e => (e[e.DARK = 0] = "DARK", e[e.LIGHT = 1] = "LIGHT", e))(d || {});
export function $$c5(e) {
  switch (e) {
    case Bll.ACCESSIBILITY:
      return t("dev_handoff.annotations.category_preset.accessibility");
    case Bll.BEHAVIOR:
      return t("dev_handoff.annotations.category_preset.behavior");
    case Bll.CONTENT:
      return t("dev_handoff.annotations.category_preset.content");
    case Bll.DEVELOPMENT:
      return t("dev_handoff.annotations.category_preset.development");
    case Bll.INTERACTION:
      return t("dev_handoff.annotations.category_preset.interaction");
  }
}
export function $$u0(e) {
  switch (e) {
    case Bll.ACCESSIBILITY:
      return RN1.PINK;
    case Bll.CONTENT:
      return RN1.ORANGE;
    case Bll.BEHAVIOR:
      return RN1.BLUE;
    case Bll.DEVELOPMENT:
      return RN1.GREEN;
    case Bll.INTERACTION:
      return RN1.BLUE;
  }
}
export let $$p9 = {
  [RN1.GREEN]: {
    color: "rgba(61, 160, 89, 1)",
    label: () => t("dev_handoff.annotations.categories_edit_window.category_color.green")
  },
  [RN1.PINK]: {
    color: "rgba(216, 52, 158, 1)",
    label: () => t("dev_handoff.annotations.categories_edit_window.category_color.pink")
  },
  [RN1.RED]: {
    color: "rgba(227, 76, 44, 1)",
    label: () => t("dev_handoff.annotations.categories_edit_window.category_color.red")
  },
  [RN1.BLUE]: {
    color: "rgba(27, 113, 217, 1)",
    label: () => t("dev_handoff.annotations.categories_edit_window.category_color.blue")
  },
  [RN1.YELLOW]: {
    color: "rgba(251, 198, 69, 1)",
    label: () => t("dev_handoff.annotations.categories_edit_window.category_color.yellow")
  },
  [RN1.ORANGE]: {
    color: "rgba(255, 165, 0, 1)",
    label: () => t("dev_handoff.annotations.categories_edit_window.category_color.orange")
  },
  [RN1.TEAL]: {
    color: "rgba(0, 128, 128, 1)",
    label: () => t("dev_handoff.annotations.categories_edit_window.category_color.teal")
  },
  [RN1.VIOLET]: {
    color: "rgba(148, 0, 211, 1)",
    label: () => t("dev_handoff.annotations.categories_edit_window.category_color.violet")
  }
};
export function $$_3(e = {
  initializeIfNull: !1
}) {
  let {
    initializeIfNull = !1
  } = e;
  let r = useMemo(() => w3z.isReadOnly(SES.ANNOTATIONS), []);
  let s = useMemo(() => [], []);
  let d = wA(e => e.getRoot().annotationCategories);
  useEffect(() => {
    !r && null === d && initializeIfNull && _$$r(() => {
      l7.system("initialize-annotation-categories", () => {
        w3z.initializeAnnotationCategories();
      });
    });
  }, [d, r, initializeIfNull]);
  return d ?? s;
}
export function $$h7() {
  return useCallback(e => {
    _$$r(() => {
      l7.user("update-annotation-categories", () => {
        w3z.setCustomAnnotationCategories(e);
      });
    });
  }, []);
}
export function $$m2(e) {
  return $$p9[$$u0(e)];
}
export function $$g6(e) {
  return e.preset !== Bll.NONE ? $$u0(e.preset) : e.custom?.color ?? null;
}
export function $$f1(e) {
  return e.preset !== Bll.NONE ? $$m2(e.preset).color : e.custom?.color != null ? $$p9[e.custom.color].color : null;
}
export function $$E8(e) {
  return e.preset !== Bll.NONE ? $$c5(e.preset) : e.custom?.label ?? "";
}
export function $$y4(e) {
  let t = e.preset === Bll.NONE ? e.custom?.color : $$u0(e.preset);
  return null != t && 0 === function (e) {
    switch (e) {
      case RN1.ORANGE:
      case RN1.YELLOW:
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