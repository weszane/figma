import { jsxs, jsx } from "react/jsx-runtime";
import { xae } from "../figma_app/763686";
import { Em, cJ } from "../figma_app/976749";
import { _ } from "../9410/218531";
import { b } from "../642/502017";
import { M } from "../905/540025";
import { r6 } from "../905/542608";
import { y } from "../9410/598921";
import { eG } from "../573/404275";
export function $$x0({
  activeTab: e,
  onCanvasSearch: t,
  recordingKey: l,
  ...x
}) {
  let h = M();
  let p = Em();
  let g = cJ();
  let f = e === xae.LAYERS;
  let m = h && (p || g) && (e === xae.ASSETS || f);
  return jsxs(y, {
    withBorder: !0,
    children: [jsx(eG, {
      ...x
    }), jsxs("div", {
      className: "ui3_tabs_row--iconContainer--a0sRl",
      children: [f && jsx(_, {
        onClick: t
      }), m && jsx(b, {
        recordingKey: l,
        entrypoint: e === xae.ASSETS ? r6.ASSETS_PANEL_BUTTON : r6.LAYERS_TAB_BUTTON,
        hideIfNoUpdates: e === xae.LAYERS
      })]
    })]
  });
}
export const I = $$x0;