import { jsx, jsxs } from "react/jsx-runtime";
export function $$i1(e) {
  return jsx("div", {
    "data-tooltip-type": e.dataTooltipType,
    "data-tooltip": e.dataTooltip,
    "data-tooltip-show-above": e.dataTooltipShowAbove,
    "data-tooltip-show-below": e.dataTooltipShowAbove,
    "data-tooltip-max-width": e.dataTooltipMaxWidth,
    "data-tooltip-timeout-delay": e.dataTooltipTimeout,
    "data-testid": "notice-icon-yellow",
    className: e.className,
    style: e.style,
    children: jsxs("svg", {
      width: "32",
      height: "32",
      viewBox: "0 0 32 32",
      fill: "none",
      children: [jsx("path", {
        d: "M8 16C8 11.5817 11.5817 8 16 8V8C20.4183 8 24 11.5817 24 16V16C24 20.4183 20.4183 24 16 24V24C11.5817 24 8 20.4183 8 16V16Z",
        fill: `var(${e.faded ? "--color-bg-warning-tertiary" : "--color-icon-warning"}, #FFEB00)`
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16 11.7499C16.4142 11.7499 16.75 12.0857 16.75 12.4999V15.6259C16.75 16.0401 16.4142 16.3759 16 16.3759C15.5858 16.3759 15.25 16.0401 15.25 15.6259V12.4999C15.25 12.0857 15.5858 11.7499 16 11.7499Z",
        fill: `var(${e.faded ? "--color-text" : "--color-icon-onwarning"}, #FFEB00)`
      }), jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16 17.9999C16.5523 17.9999 17 18.4476 17 18.9999V19.0685C17 19.6208 16.5523 20.0685 16 20.0685C15.4477 20.0685 15 19.6208 15 19.0685V18.9999C15 18.4476 15.4477 17.9999 16 17.9999Z",
        fill: `var(${e.faded ? "--color-text" : "--color-icon-onwarning"}, #FFEB00)`
      })]
    })
  });
}
export function $$n0(e) {
  return jsx("div", {
    "data-tooltip-type": e.dataTooltipType,
    "data-tooltip": e.dataTooltip,
    "data-tooltip-show-above": e.dataTooltipShowAbove,
    "data-tooltip-show-below": e.dataTooltipShowAbove,
    "data-tooltip-max-width": e.dataTooltipMaxWidth,
    "data-tooltip-timeout-delay": e.dataTooltipTimeout,
    "data-testid": "notice-icon-yellow-new",
    className: e.className,
    style: e.style,
    children: jsxs("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      children: [jsx("rect", {
        x: "16",
        y: "16",
        width: "16",
        height: "16",
        rx: "8",
        transform: "rotate(-180 16 16)",
        fill: `var(${e.faded ? "--color-bg-warning-tertiary" : "--color-icon-warning"})`
      }), jsx("path", {
        d: "M8.5 8.66701H7.5L7.5 6.50001V4.66701H8.5V6.50001V8.66701ZM8.666 10.667C8.666 11.035 8.368 11.333 7.999 11.333C7.631 11.333 7.333 11.035 7.333 10.667C7.333 10.298 7.631 10 7.999 10C8.368 10 8.666 10.298 8.666 10.667Z",
        fill: `var(${e.faded ? "--color-text" : "--color-icon-onwarning"})`
      })]
    })
  });
}
export const E = $$n0;
export const Y = $$i1;