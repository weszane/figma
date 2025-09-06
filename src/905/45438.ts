import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { _ as _$$_ } from "../figma_app/496441";
import { E } from "../905/632989";
import { E as _$$E } from "../905/235326";
import { U } from "../905/103637";
import d from "classnames";
import { getI18nString } from "../905/303541";
import { e as _$$e } from "../905/194891";
import { Ib } from "../905/129884";
import { sD } from "../figma_app/826998";
var c = d;
let g = "library_name--libraryLink--RqfiN";
let f = "library_name--libraryName--fRrLS ellipsis--ellipsis--Tjyfa";
let _ = "library_name--clickable--dOASM";
function A({
  libraryName: e,
  containerClassName: t,
  link: i,
  onTrackClickName: s
}) {
  let l = sD(e);
  let d = useCallback(() => {
    s?.({
      type: "library"
    });
  }, [s]);
  if (!e) return null;
  let u = jsx("span", {
    className: f,
    ref: l,
    children: e
  });
  return i ? jsxs(_$$_, {
    newTab: !0,
    href: i,
    trusted: !0,
    onClick: d,
    className: c()(t, g, _),
    children: [u, jsx(_$$E, {})]
  }) : jsx("div", {
    className: t,
    children: u
  });
}
function y({
  libraryName: e,
  link: t,
  containerClassName: i,
  onTrackClickName: s
}) {
  let o = useCallback(() => {
    s?.({
      type: "community"
    });
  }, [s]);
  return jsxs(_$$_, {
    className: c()(i, g, _),
    newTab: !0,
    href: t,
    trusted: !0,
    onClick: o,
    htmlAttributes: {
      "data-tooltip": getI18nString("design_systems.instance_panel.view_library_in_community"),
      "data-tooltip-type": Ib.TEXT
    },
    children: [jsx("span", {
      className: f,
      children: e
    }), jsx(U, {})]
  });
}
export function $$b0({
  libraryName: e,
  containerClassName: t,
  link: i,
  isLocal: a,
  loading: l,
  localFallback: d,
  onClickLocalFallback: u,
  onTrackClickName: m,
  dataTestId: h,
  recordingKey: g
}) {
  let f = c()(t, "library_name--library--uhczN");
  let b = useCallback(() => {
    m?.({
      type: "local"
    });
    u?.();
  }, [u, m]);
  return a ? d ? u ? jsxs(E, {
    className: c()(f, _),
    onClick: b,
    htmlAttributes: {
      "data-testid": h
    },
    recordingKey: g,
    children: [d, jsx(_$$E, {})]
  }) : jsx("div", {
    className: f,
    "data-test-id": h,
    children: d
  }) : null : l ? jsx(_$$e, {
    containerClassName: t
  }) : e ? i?.type === "community" ? jsx(y, {
    libraryName: e,
    link: i.link,
    containerClassName: f,
    onTrackClickName: m
  }) : jsx(A, {
    libraryName: e,
    containerClassName: f,
    link: i?.link,
    onTrackClickName: m
  }) : null;
}
export const J = $$b0;