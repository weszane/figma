import { jsx } from "react/jsx-runtime";
import { mc, YJ, q7 } from "../figma_app/860955";
import { Ay } from "@stylexjs/stylex";
import { fu } from "../figma_app/831799";
import { w } from "../figma_app/883622";
export function $$l0(e) {
  return e.flatMap(e => [...e.items.map(e => ({
    displayText: e.displayText,
    callback: () => e.onClick(),
    disabled: e.disabled,
    trackingEventName: e.trackingEventName,
    trackingProperties: e.trackingProperties
  })), w]);
}
export function $$d1({
  groups: e,
  minItemContentWidth: t = 168,
  trackedContext: r,
  onTrackedItemClick: o
}) {
  return jsx(mc, {
    children: jsx(fu, {
      name: r,
      children: e.map(e => jsx(YJ, {
        children: e.items.map(e => jsx(q7, {
          disabled: e.disabled,
          onClick: () => {
            e.onClick();
            e.trackingProperties && o(e);
          },
          children: jsx("span", {
            ...Ay.props(c.menuItemContent(t)),
            children: e.displayText
          })
        }, e.displayText))
      }, e.key))
    })
  });
}
let c = {
  menuItemContent: e => [{
    minWidth: null == e ? null : "x1eqyben",
    $$css: !0
  }, {
    "--minWidth": (e => "number" == typeof e ? e + "px" : null != e ? e : void 0)(e)
  }]
};
export const o = $$l0;
export const s = $$d1;