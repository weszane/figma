import { jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Button } from "../905/521428";
import { a as _$$a } from "../905/948337";
import { mT } from "../figma_app/680166";
import { G } from "../figma_app/35473";
import { $q } from "../figma_app/60171";
export function $$$$c0(e) {
  let {
    curfCtaHandler,
    curfCtaLabel
  } = mT(e.licenseType);
  let [c, u] = useState(!0);
  if (!c) return null;
  let p = e.shouldShowCurf ? jsx(Button, {
    variant: "primary",
    onClick: curfCtaHandler,
    children: curfCtaLabel
  }) : void 0;
  return jsx(G, {
    leftContent: jsx(_$$a, {
      className: $q
    }),
    content: jsx("div", {
      children: jsx("span", {
        children: e.text
      })
    }),
    shouldHide: e.hasSecondaryToolbelt,
    onClose: () => {
      u(!1);
    },
    rightContent: p,
    bannerType: "provisional_access"
  });
}
export const c = $$$$c0;