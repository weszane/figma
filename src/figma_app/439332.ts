import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch } from "../vendor/514228";
import s from "classnames";
import { nR } from "../figma_app/637027";
import { B } from "../905/714743";
import { renderI18nText, getI18nString } from "../905/303541";
import { v } from "../905/581647";
import { Ib } from "../905/129884";
import { x6, Jp, qS, QW, cI, hI, JL } from "../figma_app/522242";
import { A } from "../5724/267849";
var o = s;
var m = (e => (e.AUTO = "auto", e.CONSTRAINED = "constrained", e))(m || {});
export function $$g0(e) {
  let t = useDispatch();
  let r = useCallback(() => {
    t(v({}));
  }, [t]);
  let s = e.width || "constrained";
  let d = o()(x6, {
    [Jp]: "constrained" === s
  });
  return jsx("div", {
    "data-not-draggable": !0,
    children: jsx(nR, {
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
    e(v({}));
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
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": getI18nString("community.buyer.update_payment_info_to_retain_access"),
    children: jsx(B, {
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
      children: jsx(B, {
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