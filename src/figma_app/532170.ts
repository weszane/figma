import { jsx } from "react/jsx-runtime";
import { createContext } from "react";
import { N } from "../905/438674";
import o from "classnames";
import { withTrackedClick } from "../figma_app/831799";
import { Qs, Dg, qr, GQ, I5, Qn, xC } from "../figma_app/169752";
var n;
var l = o;
export let $$u2 = createContext(void 0);
export function $$p3(e) {
  return jsx("div", {
    className: l()(Qs, e.className),
    children: e.children
  });
}
export function $$_1(e) {
  let t = {
    width: "300px"
  };
  e.width && ("number" == typeof e.width ? t.width = `${e.width}px` : t.width = e.width);
  e.height && (t.height = e.height);
  e.margin && (t.margin = e.margin);
  return jsx($$u2.Consumer, {
    children: r => jsx("div", {
      className: l()(Dg, e.containerClassName),
      children: jsx("img", {
        src: e.src,
        style: t,
        onLoad: r,
        alt: e.alt
      })
    })
  });
}
export function $$h0(e) {
  let t = void 0 === e.width ? {
    width: "300px"
  } : {
    width: `${e.width}px`
  };
  e.height && (t.height = e.height);
  e.margin && (t.margin = e.margin);
  return jsx($$u2.Consumer, {
    children: r => jsx("div", {
      className: Dg,
      children: jsx("video", {
        autoPlay: !0,
        muted: !0,
        loop: !0,
        "object-fit": "initial",
        style: t,
        onLoad: r,
        "aria-hidden": "true",
        children: jsx("source", {
          src: e.src,
          type: "video/mp4"
        })
      })
    })
  });
}
export function $$m4(e) {
  return jsx("div", {
    className: e.className ? e.className : qr,
    children: e.children
  });
}
export function $$g6({
  children: e
}) {
  return jsx("div", {
    className: GQ,
    children: e
  });
}
export function $$f5({
  children: e
}) {
  return jsx("div", {
    className: I5,
    children: jsx("div", {
      className: Qn,
      children: e
    })
  });
}
(n || (n = {})).Content = function (e) {
  return jsx("div", {
    className: e.className || xC,
    style: e.style,
    children: e.children
  });
};
withTrackedClick(e => jsx(N, {
  newTab: !0,
  trusted: !0,
  href: e.href,
  onClick: e.onClick,
  children: e.children
}));
export const GV = $$h0;
export const Gv = $$_1;
export const Uj = $$u2;
export const ak = $$p3;
export const iy = $$m4;
export const sb = $$f5;
export const wz = $$g6;