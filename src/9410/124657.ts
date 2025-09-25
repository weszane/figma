import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useMemo, useEffect, memo } from "react";
import a from "classnames";
import o from "../vendor/239910";
import { parsePxNumber } from "../figma_app/783094";
import { useLatestRef } from "../figma_app/922077";
import { getInitialOptions } from "../figma_app/169182";
import { getFileTypePx } from "../905/149328";
import { Ww } from "../figma_app/440875";
import { Ro } from "../figma_app/805373";
import { W } from "../figma_app/54182";
import { Ocz, bnr, Ko3 } from "../figma_app/27776";
import { qb, C7, _L, ws } from "../9410/574786";
var s = a;
var l = o;
let x = e => e ? 13 : 14;
let y = parsePxNumber(Ocz);
let b = parsePxNumber(bnr);
let C = e => e ? b : y;
let v = parsePxNumber(Ko3);
var E = (e => (e.PRESENTING = "presenting", e.SELECTED = "selected", e.NONE = "none", e))(E || {});
var T = (e => (e.PRESENTING = "presenting", e.SELECTED = "selected", e.DESELECTED = "deselected", e.NONE = "", e))(T || {});
let w = e => {
  let t = e.user.sessionID === e.observingSessionID;
  let i = e.user.sessionID === e.presenterSessionID;
  return t ? "selected" : i ? "presenting" : "none";
};
let S = l()([{
  current: "none",
  selected: "selected",
  presenting: "presenting",
  none: ""
}, {
  current: "selected",
  selected: "selected",
  presenting: "presenting",
  none: "deselected"
}, {
  current: "presenting",
  selected: "selected",
  presenting: "presenting",
  none: ""
}], e => e.current);
export function $$j1(e) {
  let t;
  let {
    user,
    tooltipOffsetY
  } = e;
  getFileTypePx();
  let o = function (e) {
    let [t, i] = useState("");
    let r = useLatestRef(e);
    let a = useMemo(() => r && {
      user: r.user,
      observingSessionID: r.observingSessionID,
      presenterSessionID: r.presenterSessionID,
      nominatedSessionID: r.nominatedSessionID
    }, [r]);
    let s = useMemo(() => ({
      user: e.user,
      observingSessionID: e.observingSessionID,
      presenterSessionID: e.presenterSessionID,
      nominatedSessionID: e.nominatedSessionID
    }), [e.observingSessionID, e.presenterSessionID, e.user, e.nominatedSessionID]);
    useEffect(() => {
      let t = "";
      if (!e.disableSpotlightAnimation) {
        let e = w(s);
        t = S[a && w(a) || "none"][e];
      }
      i(t);
    }, [s, a, e.disableSpotlightAnimation]);
    return t;
  }(e);
  let l = qb;
  let d = Ww();
  let u = w(useMemo(() => ({
    user: e.user,
    observingSessionID: e.observingSessionID,
    presenterSessionID: e.presenterSessionID,
    nominatedSessionID: e.nominatedSessionID
  }), [e.observingSessionID, e.presenterSessionID, e.user, e.nominatedSessionID]));
  let g = user.sessionID === d?.sessionID ? "var(--color-bg-brand)" : user.color;
  let y = C(!0);
  let b = x(!0);
  e.hasBorder && (t = "none" === u ? "outward" : "inward");
  return jsx("div", {
    className: s()({
      [C7]: !e.horizontal,
      [_L]: e.horizontal
    }),
    children: jsxs(W, {
      id: e.tooltipProxyId,
      user: {
        id: user.userID,
        handle: user.name,
        sessionId: user.sessionID
      },
      tooltipOffsetY,
      children: [jsx("svg", {
        className: `multiplayer-animation-svg ${e.horizontal ? "horizontal" : ""}`,
        viewBox: `0 0 ${y} ${v}`,
        "aria-hidden": "true",
        children: jsx("circle", {
          className: `multiplayer-animation-circle ${e.horizontal ? "horizontal" : ""} ${o}`,
          cx: y / 2,
          cy: v / 2,
          r: b,
          fill: "none",
          stroke: g,
          strokeWidth: "2"
        })
      }, "multiplayer-animation-svg"), e.showColorIndicators && jsx("div", {
        className: `multiplayer-animation-droplet${e.horizontal ? "-horizontal" : ""} ${o}`,
        "data-avatar-color-bar": !0,
        style: {
          backgroundColor: g
        }
      }, "multiplayer-animation-droplet"), jsx("div", {
        className: l,
        children: jsx(Ro, {
          entity: {
            ...user,
            id: user.userID
          },
          className: ws,
          borderStyle: t
        })
      })]
    })
  });
}
export let $$I0 = memo(function (e) {
  let t = C(e.isUI3);
  let i = x(e.isUI3);
  let n = `
  @layer css-modules {
    .multiplayer-animation-svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: ${t}px;
    }

    .multiplayer-animation-droplet {
      left: ${t / 2 - i / 2}px;
      top: 0px;
      height: 2px;
      width: ${i}px;
      border-radius: 0px;
      position: absolute;
    }

    .multiplayer-animation-droplet-horizontal {
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
      height: ${i}px;
      width: 2px;
      border-radius: 0px;
      position: absolute;
    }

    .multiplayer-animation-droplet.selected {
      animation: droplet 0.3s ease-in forwards;
    }

    .multiplayer-animation-droplet-horizontal.selected {
      animation: droplet-horizontal 0.3s ease-in forwards;
    }

    .multiplayer-animation-droplet.deselected {
      animation: droplet-reverse 0.2s ease-out 0.4s forwards;
      left: ${t / 2 - i / 4}px;
      top: 0px;
      height: 0px;
      width: 0px;
      border-radius: 0px;
    }

    .multiplayer-animation-droplet-horizontal.deselected {
      animation: droplet-horizontal-reverse 0.2s ease-out 0.4s forwards;
      left: ${t / 2 - i / 4}px;
      height: 0px;
      width: 0px;
      border-radius: 0px;
    }

    .multiplayer-animation-circle {
      stroke-dasharray: 400;
      stroke-dashoffset: 400;
      transform-origin: center;
      transform: rotateZ(-90deg);
    }

    .multiplayer-animation-circle.horizontal {
      transform: rotateZ(-180deg);
    }

    .multiplayer-animation-circle.selected {
      animation: draw-circle 0.15s ease-in 0.3s forwards;
    }

    .multiplayer-animation-circle-horizontal.selected {
      animation: draw-circle-horizontal 0.15s ease-in 0.3s forwards;
    }

    .multiplayer-animation-circle.deselected {
      animation: draw-circle-reverse 0.4s ease-in forwards;
    }

    .multiplayer-animation-circle.presenting {
      stroke-dasharray: 3.4;
      animation: rotating 30s linear infinite
    }

    @keyframes rotating {
      from {
        transform: rotateZ(0deg);
      }
      to {
        transform: rotateZ(360deg);
      }
    }

    @keyframes droplet {
      0% {
        top: 0px;
        height: 2px;
        width: ${i}px;
        border-radius: 0px;
      }
      20% {
        top: -3.5px;
        height: ${i / 2}px;
        width:  ${i / 2}px;
        border-radius: 100%;
      }
      66% {
        top: -2px;
        height: 7px;
      }
      98% {
        top: 5px;
        height: 3px;
        width: 3px;
        border-radius: 100%;
      }
      99% {
        top: 5px;
        height: 1px;
        width: 1px;
        border-radius: 100%;
      }
      100% {
        top: 5px;
        height: 0px;
        width: 0px;
        border-radius: 100%;
      }
    }

    @keyframes droplet-horizontal {
      0% {
        left: 0;
        height: ${i}px;
        width: 2px;
        border-radius: 0px;
      }
      20% {
        left: -3.5px;
        height: ${i / 2}px;
        width: ${i / 2}px;
        border-radius: 100%;
      }
      66% {
        left: -2px;
        width: ${i / 2}px;
      }
      99% {
        left: 5px;
        height: 3px;
        width: 3px;
        border-radius: 100%;
      }
      100% {
        left: 5px;
        height: 0px;
        width: 0px;
        border-radius: 100%;
      }
    }

    @keyframes draw-circle {
      0% {
        stroke-dashoffset: 400;
      }
      100% {
        stroke-dashoffset: 300;
      }
    }

    @keyframes droplet-reverse {
      0% {
        top: 0px;
        height: 2px;
        width: 2px;
        border-radius: 0px;
      }
      100% {
        top: 0px;
        height: 2px;
        width: ${i};
        border-radius: 0px;
      }
    }

    @keyframes droplet-horizontal-reverse {
      0% {
        left: 0px;
        height: 2px;
        width: 2px;
        border-radius: 0px;
      }
      100% {
        left: 0px;
        width: 2px;
        height: ${i}px;
        border-radius: 0px;
      }
    }
  }
  `;
  return jsx("style", {
    nonce: getInitialOptions().csp_nonce,
    children: n
  });
});
export const sK = $$I0;
export const vQ = $$j1;