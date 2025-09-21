import { jsx, jsxs } from "react/jsx-runtime";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { K } from "../figma_app/694593";
import { TrackingProvider } from "../figma_app/831799";
import { RCSMessageType } from "../905/135526";
import { vL, h3, Lm, i1, um, li } from "../905/118234";
export function $$d0(e) {
  let t;
  let i;
  let d = (e.rightSideActions && e.rightSideActions.length || 0) > 0;
  let c = !d && !e.center;
  let u = vL;
  let p = e.tabs && void 0 !== e.showDividerBeforeTabIndex ? (t = e.tabs, i = e.showDividerBeforeTabIndex, [...t.slice(0, i), jsx("div", {
    className: cssBuilderInstance.colorBorder.bl1.bSolid.h24.mx12.$
  }, "toolbar-divider"), ...t.slice(i)]) : e.tabs;
  return jsx("div", {
    className: h3,
    children: jsxs("div", {
      className: e.containerClassName || Lm,
      children: [!e.centerFullWidth && jsxs("div", {
        className: i1,
        style: {
          maxWidth: c ? "100%" : void 0,
          paddingRight: c ? 0 : "32px"
        },
        children: [e.left, p]
      }), e.center && jsx("div", {
        className: e.centerFullWidth ? um : u,
        children: e.center
      }), d && jsx("div", {
        className: li,
        children: jsx(TrackingProvider, {
          name: "Toolbar",
          trackingTargets: RCSMessageType.RCS,
          children: e.rightSideActions && jsx("div", {
            className: cssBuilderInstance.flex.flexRow.gap8.$,
            children: e.rightSideActions.map(e => jsx(K, {
              action: e
            }, e.key))
          })
        })
      })]
    })
  });
}
export const Y = $$d0;