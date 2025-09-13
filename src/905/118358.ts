import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import r from "classnames";
import { SvgComponent } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { A as _$$A } from "../1617/57383";
var a = r;
export function $$d0({
  variant: e = "brand",
  bannerContent: t
}) {
  return jsxs("div", {
    className: a()("publish_modal_banner--infoBannerContainerUI3--9wN7P", {
      [_$$s.colorBgBrandTertiary.$]: "brand" === e,
      [_$$s.colorBgWarningTertiary.$]: "warning" === e
    }),
    children: [jsx(Fragment, {
      children: jsx(SvgComponent, {
        className: "publish_modal_banner--infoBannerIconUI3--k3xuF",
        svg: _$$A
      })
    }), jsx("span", {
      className: "publish_modal_banner--infoBannerHelperTextUI3--TniyT publish_modal_banner--_userSelectNone--QDjHZ text--fontPos11--2LvXf text--_fontBase--QdLsd",
      children: t
    })]
  });
}
export const A = $$d0;