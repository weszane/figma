import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { oW } from "../905/675859";
import { H8, Pf } from "../905/590952";
import { iq } from "../figma_app/976749";
import { DP } from "../905/640017";
import { FN, E2 } from "../905/389382";
import { iZ } from "../905/372672";
import { FProductAccessType } from "../figma_app/191312";
import { i_ } from "../905/187165";
let p = "avatar_with_product_background--brandIconContainerDesign--5S-TM avatar_with_product_background--brandIconContainer--CMT3e";
export function $$m0({
  licenseType: e
}) {
  let t = iZ();
  let i = iq();
  let m = DP();
  let h = e === FProductAccessType.WHITEBOARD && i ? "light" : i_(m);
  let g = (() => {
    switch (e) {
      case FProductAccessType.DESIGN:
        return p;
      case FProductAccessType.WHITEBOARD:
        return "avatar_with_product_background--brandIconContainerFigjam--ie1Og avatar_with_product_background--brandIconContainer--CMT3e";
      case FProductAccessType.DEV_MODE:
        return "avatar_with_product_background--brandIconContainerDev--xorcw avatar_with_product_background--brandIconContainer--CMT3e";
      case FProductAccessType.SLIDES:
        return "avatar_with_product_background--brandIconContainerSlides--7U5-- avatar_with_product_background--brandIconContainer--CMT3e";
      case FProductAccessType.SITES:
        return "avatar_with_product_background--brandIconContainerSites--BDKs0 avatar_with_product_background--brandIconContainer--CMT3e";
      case FProductAccessType.FIGMAKE:
        return "avatar_with_product_background--brandIconContainerFigMake--7RO6a avatar_with_product_background--brandIconContainer--CMT3e";
      default:
        return p;
    }
  })();
  let f = FN(e);
  return jsxs("div", {
    className: "avatar_with_product_background--imgComponent--uUymq",
    children: [jsx(oW, {
      src: E2(e, h),
      className: "avatar_with_product_background--imgPositioning--M---c",
      "aria-hidden": !0
    }), t && jsxs(Fragment, {
      children: [jsx("div", {
        className: "avatar_with_product_background--avatarPositioning--QqhQX",
        children: jsx(H8, {
          user: t,
          size: Pf.LARGE
        })
      }), jsx("div", {
        className: g,
        children: jsx("div", {
          className: "avatar_with_product_background--brandIcon--I2Xwd",
          children: jsx(f, {})
        })
      })]
    })]
  });
}
export const T = $$m0;