import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import s from "classnames";
import { ButtonSecondary } from "../figma_app/637027";
import { SvgComponent } from "../905/714743";
import { renderI18nText, getI18nString } from "../905/303541";
import { handleStripeManageSubscription } from "../905/581647";
import { KindEnum } from "../905/129884";
import { x6, Jp, qS, QW, cI, hI, JL } from "../figma_app/522242";
import { A } from "../5724/267849";
var o = s;
var m = (e => (e.AUTO = "auto", e.CONSTRAINED = "constrained", e))(m || {});
export function $$g0(e) {
  let t = useDispatch();
  let r = useCallback(() => {
    t(handleStripeManageSubscription({}));
  }, [t]);
  let s = e.width || "constrained";
  let d = o()(x6, {
    [Jp]: "constrained" === s
  });
  return jsx("div", {
    "data-not-draggable": !0,
    children: jsx(ButtonSecondary, {
      onClick: r,
      className: d,
      children: e.children
    })
  });
}
export function $$f2() {
  let e = useDispatch();
  let t = useCallback(t => {
    t.stopPropagation();
    e(handleStripeManageSubscription({}));
  }, [e]);
  return jsx("button", {
    className: qS,
    onClick: t,
    children: renderI18nText("community.buyer.update_payment")
  });
}
export function $$E3() {
  return jsx("div", {
    className: QW,
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": getI18nString("community.buyer.update_payment_info_to_retain_access"),
    children: jsx(SvgComponent, {
      svg: A
    })
  });
}
export function $$y1() {
  return jsxs("div", {
    className: cI,
    "data-not-draggable": !0,
    children: [jsx("div", {
      className: QW,
      children: jsx(SvgComponent, {
        svg: A
      })
    }), jsx("div", {
      className: hI,
      children: renderI18nText("community.buyer.update_payment_info")
    }), jsx("div", {
      className: JL,
      children: jsx($$g0, {
        width: "auto",
        children: renderI18nText("community.buyer.go_to_stripe")
      })
    })]
  });
}
export const Vv = $$g0;
export const cu = $$y1;
export const ur = $$f2;
export const xY = $$E3;