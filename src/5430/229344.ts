import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { a as _$$a } from "../905/925868";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { AutoLayout } from "../905/470281";
import { C } from "../figma_app/514836";
import { T } from "../5132/203178";
import { Gm } from "../5430/873109";
import { X } from "../5430/512075";
import { X as _$$X } from "../5430/712117";
import { fG, e as _$$e, v8, LV, sR } from "../5430/686342";
export function $$p1({
  resource: e,
  resourceContent: t
}) {
  let [r, u] = useState(!1);
  let p = C(e);
  let h = T();
  return jsx("div", {
    className: fG,
    children: jsxs(AutoLayout, {
      width: "100%",
      direction: "horizontal",
      height: "hug-contents",
      verticalAlignItems: "center",
      horizontalAlignItems: "center",
      spacing: "auto",
      children: [jsx("div", {
        className: _$$e,
        children: jsx("div", {
          className: cssBuilderInstance.relative.$,
          children: jsx(Gm, {
            resource: e,
            resourceContent: t,
            hasScrolled: r
          })
        })
      }), jsxs("div", {
        className: p ? v8 : LV,
        children: [jsx(_$$X, {
          resource: e,
          resourceContent: t,
          is16to9AspectRatio: p
        }), jsx(_$$a, {
          className: sR,
          onIntersectionChange: e => {
            h || u(!e.isIntersecting);
          }
        })]
      })]
    })
  });
}
export function $$h0({
  resource: e,
  resourceContent: t,
  rdpImpressionId: r,
  category: i
}) {
  return jsxs("div", {
    className: fG,
    children: [i && jsx(X, {
      category: i,
      rdpImpressionId: r
    }), jsx($$p1, {
      resource: e,
      resourceContent: t
    })]
  });
}
export const R = $$h0;
export const Y = $$p1;