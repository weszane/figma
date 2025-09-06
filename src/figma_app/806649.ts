import { jsxs, jsx } from "react/jsx-runtime";
import { $n } from "../905/521428";
import { A } from "../905/251970";
import { a as _$$a } from "../905/847494";
import { C } from "../figma_app/938538";
import { X } from "../905/350405";
import { G } from "../905/350935";
import { getI18nString } from "../905/303541";
export function $$u0({
  handleAction: e
}) {
  return jsxs(_$$a, {
    ariaLabel: getI18nString("fullscreen.toolbar.image_videos_aria_label"),
    children: [jsx(G, {
      children: getI18nString("fullscreen_actions.click_or_drag_to_place")
    }), jsx($n, {
      variant: "secondary",
      actionOnPointerDown: !0,
      onClick: () => e("place-all-images"),
      children: getI18nString("fullscreen_actions.place_all_images")
    }), jsx(X, {}), jsx(C, {
      icon: jsx(A, {}),
      onClick: () => e("discard-all-images"),
      tooltipText: getI18nString("fullscreen_actions.discard_all_images"),
      secondary: !0
    })]
  });
}
export const O = $$u0;