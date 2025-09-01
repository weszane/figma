import { jsx } from "react/jsx-runtime";
import { useRef } from "react";
import a from "classnames";
import { t as _$$t } from "../905/303541";
import { C, W } from "../5430/92864";
import { Ib } from "../905/129884";
var s = a;
export function $$c0(e) {
  let t = useRef(null);
  return e.disabled ? jsx("button", {
    className: "base_like_button--buttonContainerDisabled--sOWAD base_like_button--buttonContainer--vfBIa cta_button--buttonBase--xMT0c text--fontNeg14--ARPWl text--_fontBase--QdLsd text--_negText--j9g-L",
    disabled: e.disabled,
    children: jsx("div", {
      className: "base_like_button--likeIconDisabled--dfrWS base_like_button--likeIcon--70nFu text--fontPos18--rYXJb text--_fontBase--QdLsd",
      children: C
    })
  }) : jsx("button", {
    className: s()("base_like_button--buttonContainer--vfBIa cta_button--buttonBase--xMT0c text--fontNeg14--ARPWl text--_fontBase--QdLsd text--_negText--j9g-L", {
      "base_like_button--removeButtonBorder--h-j-A": !!e.removeButtonBorder
    }),
    onClick: e.onClick,
    "aria-label": _$$t("community.like"),
    "data-tooltip": _$$t("community.like"),
    "data-tooltip-type": Ib.TEXT,
    "data-testid": "like-button",
    children: jsx("div", {
      className: "base_like_button--likeIcon--70nFu text--fontPos18--rYXJb text--_fontBase--QdLsd",
      ref: t,
      children: e.isResourceLiked ? W : C
    })
  });
}
export const b = $$c0;