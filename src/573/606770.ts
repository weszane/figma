import { jsxs, jsx } from "react/jsx-runtime";
import { UserInterfaceElements } from "../figma_app/763686";
import { Em, cJ } from "../figma_app/976749";
import { _ } from "../9410/218531";
import { b } from "../642/502017";
import { M } from "../905/540025";
import { r6 } from "../905/542608";
import { y as _$$y } from "../9410/598921";
import { eG } from "../573/404275";
export function $$h0({
  activeTab: e,
  onCanvasSearch: t,
  recordingKey: s,
  ...h
}) {
  let p = M();
  let g = Em();
  let y = cJ();
  let m = e === UserInterfaceElements.LAYERS;
  let f = p && (g || y) && (e === UserInterfaceElements.ASSETS || m);
  return jsxs(_$$y, {
    withBorder: !0,
    children: [jsx(eG, {
      ...h
    }), jsxs("div", {
      className: "ui3_tabs_row--iconContainer--a0sRl",
      children: [m && jsx(_, {
        onClick: t
      }), f && jsx(b, {
        recordingKey: s,
        entrypoint: e === UserInterfaceElements.ASSETS ? r6.ASSETS_PANEL_BUTTON : r6.LAYERS_TAB_BUTTON,
        hideIfNoUpdates: e === UserInterfaceElements.LAYERS
      })]
    })]
  });
}
export const I = $$h0;