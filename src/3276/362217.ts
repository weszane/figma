import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback } from "react";
import { getFeatureFlags } from "../905/601108";
import { P } from "../vendor/348225";
import { AnimatePresence } from "../vendor/930821";
import { useLatestRef } from "../figma_app/922077";
import { pl } from "../figma_app/578768";
import { Q } from "../3276/336897";
export function $$m0({
  featured: e,
  quickAccess: t,
  onUserClick: n,
  maxVisibleUsers: m,
  totalUserCount: u
}) {
  let p = {
    ease: "easeOut",
    duration: .15
  };
  let h = t.filter(t => t.sessionID !== e?.sessionID);
  h.reverse();
  let f = h.length + (e ? 1 : 0);
  let _ = pl;
  let g = Math.min(m, h.length + (e ? 1 : 0)) * _;
  let v = useLatestRef(u);
  v && u !== v && (p.duration = .3);
  let x = useCallback(e => {
    if (0 === e) return "multiplayer-observation-nux-key";
  }, []);
  let b = getFeatureFlags().spotlight_disable_fade ? 1 : .5;
  let y = e && jsx(P.span, {
    initial: {
      opacity: 0,
      scale: b
    },
    animate: {
      opacity: 1,
      scale: 1
    },
    exit: {
      opacity: 0,
      scale: b
    },
    transition: p,
    style: {
      pointerEvents: "all"
    },
    children: jsx(Q, {
      user: e,
      isOverflow: !1,
      onUserClick: n,
      hasBorder: !0
    })
  });
  let C = h.map((e, t) => jsx(P.span, {
    style: {
      marginLeft: "-8px",
      pointerEvents: "all"
    },
    initial: {
      opacity: 0,
      scale: b
    },
    animate: {
      opacity: 1,
      scale: 1
    },
    transition: p,
    layout: "position",
    children: jsx(Q, {
      onboardingKey: x(t),
      user: e,
      isOverflow: !1,
      onUserClick: n,
      hasBorder: !0
    })
  }, e.sessionID));
  return jsx("div", {
    style: {
      width: g,
      clipPath: void 0,
      position: "relative",
      height: "100%",
      pointerEvents: "none"
    },
    "data-onboarding-key": "multiplayer-avatars",
    children: jsx(P.div, {
      style: {
        width: m * _,
        position: "absolute",
        right: "-8px",
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: f > m != !0 ? "flex-start" : "flex-end"
      },
      layout: !0,
      layoutRoot: !0,
      children: jsx(AnimatePresence, {
        initial: !1,
        mode: "popLayout",
        children: jsxs(Fragment, {
          children: [C, y]
        })
      })
    })
  });
}
export const s = $$m0;