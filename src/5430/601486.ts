import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { IntersectionSentinel } from "../905/925868";
import { AutoLayout } from "../905/470281";
import { isResourceHubContext } from "../5132/203178";
import { Gm } from "../5430/873109";
import { X } from "../5430/512075";
import { U6 } from "../5430/28597";
export function $$u0({
  resource: e,
  resourceContent: t
}) {
  let [r, c] = useState(!1);
  let u = isResourceHubContext();
  return jsxs(AutoLayout, {
    width: "100%",
    direction: "vertical",
    height: "hug-contents",
    verticalAlignItems: "center",
    horizontalAlignItems: "center",
    spacing: "auto",
    children: [jsx(Gm, {
      resource: e,
      resourceContent: t,
      hasScrolled: r,
      layout: "twoColumn"
    }), jsx(U6, {
      resource: e
    }), jsx(IntersectionSentinel, {
      onIntersectionChange: e => {
        if (u) return;
        let t = e.boundingClientRect.top < 0;
        c(!e.isIntersecting && t);
      }
    })]
  });
}
export function $$m1({
  resource: e,
  resourceContent: t,
  rdpImpressionId: r,
  category: i
}) {
  return jsxs("div", {
    className: "xm7qw2c x1tudf5h x1m2p0i2 x4i7bpe x1sgudl8 x19bbpc0",
    children: [i && jsx(X, {
      category: i,
      rdpImpressionId: r
    }), jsx($$u0, {
      resource: e,
      resourceContent: t
    })]
  });
}
export const Y = $$u0;
export const t = $$m1;