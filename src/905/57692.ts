import { jsx } from "react/jsx-runtime";
import { forwardRef, useRef, useMemo } from "react";
import { M } from "../905/581092";
import { r as _$$r } from "../905/577641";
import { qJ, Ju } from "../905/955878";
import { C7 } from "../905/117474";
import { F } from "../905/768014";
import { v } from "../905/475481";
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
  let g = M(h);
  let f = useRef(null);
  let _ = useMemo(() => C7(g, {
    criteria: "focusable"
  }), []);
  return jsx("div", {
    ref: g,
    ..._$$r,
    ...v(t, i, {
      onFocus: e => {
        if (qJ(e)) return;
        let t = g.current;
        if (!t) return;
        let i = !t.contains(e.relatedTarget);
        if (i && "pointer" === F.type) {
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
        if (!qJ(t)) {
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
          Ju(t);
        }
      },
      onKeyDown: t => {
        if (!(qJ(t) || y(t))) {
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
          Ju(t);
        }
      }
    }),
    role: "toolbar",
    "aria-orientation": e
  });
});
$$h0.displayName = "ToolbarPrimitive";
export const N = $$h0;