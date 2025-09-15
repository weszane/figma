import { jsxs, jsx } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
import { useAtomWithSubscription } from "../figma_app/27355";
import { textOnDarkCanvas } from "../figma_app/191804";
import { usePrefersReducedMotion } from "../figma_app/469468";
import { s as _$$s } from "../cssbuilder/589278";
import { f as _$$f } from "../905/940356";
import { FFileType } from "../figma_app/191312";
import { k_ } from "../figma_app/242062";
import { a8, jr, Sf, nG, Ds, iB, H7 } from "../figma_app/467440";
import { zu } from "../figma_app/61403";
import { XC, rK, pM } from "../figma_app/631279";
import { VW, iY, hD } from "../figma_app/938674";
import { pJ, lN } from "../figma_app/234505";
let f = "Figma";
let $$E0 = "cursor_bot_debug_menu_clicked";
function y() {
  return jsxs("svg", {
    width: "23",
    height: "25",
    fill: "none",
    children: [jsx("g", {
      filter: "url(#a)",
      children: jsx("path", {
        fill: "#fff",
        fillRule: "evenodd",
        d: "M15 6a1 1 0 0 0-2 0v5h-1V4a1 1 0 0 0-1-1 1 1 0 0 0-1 1v7H9V5a1 1 0 0 0-2 0v6H6V8a1 1 0 0 0-2 0v8a5 5 0 0 0 5 5h1c1.55 0 2.94-.7 3.86-1.82l.1-.1 5.01-4.7c.52-.48.57-1.3.12-1.85a1.27 1.27 0 0 0-1.74-.22L15 14.05V6Zm.34 14.55 5-4.71a3.37 3.37 0 0 0 .29-4.59 3.27 3.27 0 0 0-3.63-1V6a3 3 0 0 0-3.17-3 3 3 0 0 0-5.14-.92A3 3 0 0 0 5 5a3 3 0 0 0-3 3v8a7 7 0 0 0 7 7h1a6.99 6.99 0 0 0 5.34-2.45Z",
        clipRule: "evenodd"
      })
    }), jsx("path", {
      fill: "#0D99FF",
      fillRule: "evenodd",
      d: "M11 3a1 1 0 0 1 1 1v7h1V6a1 1 0 1 1 2 0v8.05l2.35-1.74c.55-.4 1.3-.31 1.74.22.45.54.4 1.37-.12 1.85l-5 4.7-.11.1A4.99 4.99 0 0 1 10 21H9a5 5 0 0 1-5-5V8a1 1 0 1 1 2 0v3h1V5a1 1 0 0 1 2 0v6h1V4a1 1 0 0 1 1-1Z",
      clipRule: "evenodd"
    }), jsx("path", {
      fill: "#000",
      fillOpacity: ".8",
      fillRule: "evenodd",
      d: "M3 10v6a6 6 0 0 0 6 6h1a5.99 5.99 0 0 0 4.65-2.18l5-4.7c.9-.86 1-2.28.2-3.23a2.27 2.27 0 0 0-3.1-.38l-.75.55V6a2 2 0 0 0-3-1.73V4a2 2 0 0 0-3.89-.66A2 2 0 0 0 6 5v1.27A2 2 0 0 0 3 8v2Zm3 1V7.98A1 1 0 0 0 4 8v8a5 5 0 0 0 5 5h1c1.55 0 2.94-.7 3.86-1.82l.1-.1 5.01-4.7c.52-.48.57-1.3.12-1.85a1.27 1.27 0 0 0-1.74-.22L15 14.05V6a1 1 0 1 0-2 0v5h-1V4a1 1 0 1 0-2 0v7H9V4.98A1 1 0 0 0 7 5v6H6Z",
      clipRule: "evenodd"
    }), jsx("defs", {
      children: jsxs("filter", {
        id: "a",
        width: "22.4",
        height: "25",
        x: ".5",
        y: "0",
        colorInterpolationFilters: "sRGB",
        filterUnits: "userSpaceOnUse",
        children: [jsx("feFlood", {
          floodOpacity: "0",
          result: "BackgroundImageFix"
        }), jsx("feColorMatrix", {
          in: "SourceAlpha",
          result: "hardAlpha",
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        }), jsx("feOffset", {
          dy: ".5"
        }), jsx("feGaussianBlur", {
          stdDeviation: ".75"
        }), jsx("feColorMatrix", {
          values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
        }), jsx("feBlend", {
          in2: "BackgroundImageFix",
          result: "effect1_dropShadow_1_43"
        }), jsx("feBlend", {
          in: "SourceGraphic",
          in2: "effect1_dropShadow_1_43",
          result: "shape"
        })]
      })
    })]
  });
}
export function $$b1(e) {
  let t = usePrefersReducedMotion();
  let r = XC(useAtomWithSubscription(a8));
  let i = !_$$f("cursor_bot_v2_has_greeted_with_wave") && !e.manualControl;
  let s = useAtomWithSubscription(jr);
  let l = useAtomWithSubscription(Sf);
  let m = useAtomWithSubscription(nG);
  let E = useAtomWithSubscription(Ds);
  let y = useAtomWithSubscription(iB);
  let b = useAtomWithSubscription(H7) === zu.RIGHT;
  let I = {
    display: "block",
    willChange: "transform",
    opacity: r || e.manualControl ? "1" : "0",
    transform: `translate3D(${s}px, ${l}px, 0)`,
    transition: "opacity 300ms" + (E ? `, transform ${E}ms cubic-bezier(0.14, 0, 0.32, 1)` : "")
  };
  return jsx("div", {
    className: pJ,
    style: I,
    "data-testid": "cursor-bot",
    "aria-hidden": "true",
    children: i ? jsx(T, {}) : jsx(k_, {
      chatMessage: [m],
      color: rK,
      cursorType: y,
      disableMessageFade: !0,
      editorType: FFileType.DESIGN,
      focusOnTextCursor: !1,
      isCursorAndChatAreaOffscreen: !1,
      isCursorHandOnRight: !1,
      isCursorPointingRight: b,
      isHighFiving: !1,
      isHighFivingSupported: !1,
      isHoveringWidgetWithHiddenCursors: !1,
      name: e.name ?? f,
      prefersReducedMotion: t,
      temporarilyHide: !1,
      useChatAnimation: !0
    })
  });
}
function T() {
  let e = useRef(null);
  useEffect(() => {
    e.current && e.current.animate([{
      transform: "rotate(-45deg),",
      easing: "ease-in-out"
    }, {
      transform: "rotate(50deg)",
      easing: "cubic-bezier(0.42, 0, 0.34, 1.05)"
    }, {
      transform: "rotate(-45deg)"
    }], {
      duration: pM
    });
  }, []);
  return jsxs("div", {
    className: _$$s.absolute.top0.left0.w20.$,
    children: [jsx("div", {
      className: lN,
      ref: e,
      "data-testid": "cursor-bot-high-five",
      children: jsx(y, {})
    }), jsxs("div", {
      className: VW,
      style: {
        color: rK
      },
      children: [jsx("div", {
        className: iY,
        style: {
          color: textOnDarkCanvas
        },
        children: f
      }), jsx("div", {
        className: hD,
        style: {
          backgroundColor: rK
        }
      })]
    })]
  });
}
export const W = $$E0;
export const Y = $$b1;