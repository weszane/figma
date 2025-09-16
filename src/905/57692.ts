import { jsx } from "react/jsx-runtime";
import { forwardRef, useRef, useMemo } from "react";
import { useExposedRef } from "../905/581092";
import { defaultComponentAttribute } from "../905/577641";
import { isEventTargetOutside, preventAndStopEvent } from "../905/955878";
import { setupFocusNavigator } from "../905/117474";
import { defaultInputState } from "../905/768014";
import { mergeProps } from "../905/475481";
import { y } from "../905/658036";
function p(e) {
  return "INPUT" === e.tagName && "radio" === e.type;
}
let m = {
  horizontal: ["ArrowRight", "ArrowLeft"],
  vertical: ["ArrowDown", "ArrowUp"]
};
let $$h0 = forwardRef(({
  orientation: e = "horizontal",
  htmlAttributes: t = {},
  ...i
}, h) => {
  let g = useExposedRef(h);
  let f = useRef(null);
  let _ = useMemo(() => setupFocusNavigator(g, {
    criteria: "focusable"
  }), []);
  return jsx("div", {
    ref: g,
    ...defaultComponentAttribute,
    ...mergeProps(t, i, {
      onFocus: e => {
        if (isEventTargetOutside(e)) return;
        let t = g.current;
        if (!t) return;
        let i = !t.contains(e.relatedTarget);
        if (i && "pointer" === defaultInputState.type) {
          f.current = null;
          return;
        }
        let n = t.contains(f.current);
        if (i && f.current && n) {
          let e = f.current;
          f.current = null;
          e.focus();
        } else n || (f.current = null);
      },
      onBlur: e => {
        g.current.contains(e.relatedTarget) || f.current || (f.current = e.target);
      },
      onKeyDownCapture: t => {
        if (!isEventTargetOutside(t)) {
          switch (t.code) {
            case "Tab":
              f.current = t.target;
              t.shiftKey ? _.focusFirst() : _.focusLast();
              return;
            case "ArrowRight":
            case "ArrowDown":
              if (m[e].includes(t.code) && !y(t)) {
                _.focusNext({
                  wrap: !t.repeat
                });
                break;
              }
              return;
            case "ArrowLeft":
            case "ArrowUp":
              if (m[e].includes(t.code) && !y(t)) {
                _.focusPrevious({
                  wrap: !t.repeat
                });
                break;
              }
              return;
            default:
              return;
          }
          preventAndStopEvent(t);
        }
      },
      onKeyDown: t => {
        if (!(isEventTargetOutside(t) || y(t))) {
          switch (t.code) {
            case "ArrowRight":
            case "ArrowDown":
              if (m[e].includes(t.code) || p(t.target)) return;
              _.focusNext({
                wrap: !t.repeat
              });
              break;
            case "ArrowLeft":
            case "ArrowUp":
              if (m[e].includes(t.code) || p(t.target)) return;
              _.focusPrevious({
                wrap: !t.repeat
              });
              break;
            case "Home":
              _.focusFirst();
              break;
            case "End":
              _.focusLast();
              break;
            default:
              return;
          }
          preventAndStopEvent(t);
        }
      }
    }),
    role: "toolbar",
    "aria-orientation": e
  });
});
$$h0.displayName = "ToolbarPrimitive";
export const N = $$h0;