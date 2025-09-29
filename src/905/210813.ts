import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { stylex } from "@stylexjs/stylex";
import { parsePxNumber } from "../figma_app/783094";
import { z } from "../905/353894";
import { tgj } from "../figma_app/27776";
export function $$l0(e) {
  return jsxs(Fragment, {
    children: [jsx(z, {
      query: `(min-width: ${parsePxNumber(tgj) + 1}px)`,
      children: jsxs("div", {
        className: "x1peatla x78zum5 x1a02dak x1qughib x6s0dn4 x87ps6o",
        children: [jsx("div", {
          className: "x78zum5 x2lah0s x6s0dn4 x67bb7w",
          children: e.leftSide
        }), jsx("div", {
          className: "x78zum5 x2lah0s x67bb7w x167g77z x6s0dn4",
          children: e.rightSide
        })]
      })
    }), jsx(z, {
      query: `(max-width: ${parsePxNumber(tgj)}px)`,
      children: jsxs("div", {
        ...stylex.props(d.mobileContainer, e.shouldStackRightSideMobile && d.mobileContainerStacked),
        children: [jsx("div", {
          className: "x78zum5 x2lah0s x67bb7w x167g77z",
          children: e.leftSide
        }), jsx("div", {
          className: "x78zum5 x2lah0s x67bb7w x167g77z",
          children: e.rightSideMobile
        })]
      })
    })]
  });
}
let d = {
  mobileContainer: {
    minHeight: "x8nclml",
    paddingTop: "x1y1aw1k",
    paddingBottom: "xwib8y2",
    gap: "x167g77z",
    rowGap: null,
    columnGap: null,
    boxSizing: "x9f619",
    display: "x78zum5",
    justifyContent: "x1qughib",
    alignItems: "x6s0dn4",
    userSelect: "x87ps6o",
    $$css: !0
  },
  mobileContainerStacked: {
    flexDirection: "x3ieub6",
    alignItems: "x1qjc9v5",
    $$css: !0
  }
};
export const g = $$l0;
