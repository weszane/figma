import { jsx, jsxs } from "react/jsx-runtime";
import { O } from "../905/969533";
import { props } from "@stylexjs/stylex";
import { WithTrackedPopupButtonPrimitive, WithTrackedButtonPrimitive } from "../figma_app/617427";
export function $$o0(e) {
  switch (e.variant) {
    case "toggle":
      return jsx(WithTrackedPopupButtonPrimitive, {
        ...props(l.baseButton, e.checked && l.toggleChecked, e.disabled && l.disabled),
        "aria-label": e.ariaLabel,
        "aria-pressed": e.checked,
        "data-testid": e.dataTestId,
        "data-tooltip": e.tooltip,
        "data-tooltip-shortcut-key": e.tooltipShortcutActionKey,
        "data-tooltip-show-above": "true",
        "data-tooltip-type": "text",
        disabled: e.disabled,
        onClick: () => {
          e.onChange(!e.checked);
        },
        recordingKey: e.recordingKey,
        trackingProperties: e.trackingProperties,
        children: e.checked ? e.onIcon : e.offIcon
      });
    case "menu":
      return jsxs(WithTrackedButtonPrimitive, {
        ...(e.getTriggerProps ? e.getTriggerProps() : e.getPopoverTriggerProps()),
        ...props(l.baseButton, e.disabled && l.disabled),
        "aria-label": e.ariaLabel,
        "data-testid": e.dataTestId,
        "data-tooltip": e.tooltip,
        "data-tooltip-shortcut-key": e.tooltipShortcutActionKey,
        "data-tooltip-show-above": "true",
        "data-tooltip-type": "text",
        disabled: e.disabled,
        recordingKey: e.recordingKey,
        trackingProperties: e.trackingProperties,
        children: [e.children, jsx(O, {})]
      });
    case "button":
      return jsx(WithTrackedPopupButtonPrimitive, {
        ...props(l.baseButton, e.disabled && l.disabled),
        "aria-label": e.ariaLabel,
        "data-testid": e.dataTestId,
        "data-tooltip": e.tooltip,
        "data-tooltip-shortcut-key": e.tooltipShortcutActionKey,
        "data-tooltip-show-above": "true",
        "data-tooltip-type": "text",
        disabled: e.disabled,
        onClick: e.onClick,
        recordingKey: e.recordingKey,
        trackingProperties: e.trackingProperties,
        children: e.children
      });
    default:
      return null;
  }
}
let l = {
  baseButton: {
    height: "x1vqgdyp",
    display: "x78zum5",
    alignItems: "x6s0dn4",
    justifyContent: "xl56j7k",
    "--color-icon": "x30jfuo",
    fill: "x11h9p1v",
    backgroundColor: "x1793mbz",
    ":focus-visible_outline": "xri4lhc",
    ":focus-visible_outlineColor": null,
    ":focus-visible_outlineStyle": null,
    ":focus-visible_outlineWidth": null,
    ":focus-visible_outlineOffset": "x1bqaal",
    padding: "x1xq1gxn",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    color: "xkrz9af",
    $$css: !0
  },
  toggleChecked: {
    background: "x10q2nhr",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    $$css: !0
  },
  disabled: {
    "--color-icon": "x2tq7ex",
    $$css: !0
  }
};
export const V = $$o0;