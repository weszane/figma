import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { J } from "../905/614223";
import { P } from "../vendor/348225";
export let $$o0 = forwardRef((e, t) => {
  let r = e.shouldDisableAnimation ? {
    duration: 0
  } : {
    duration: .2,
    ease: "easeInOut",
    translateY: {
      duration: 1
    }
  };
  return jsx(J, {
    mode: e.isTooltip ? "dark" : void 0,
    children: jsx(P.div, {
      ref: t,
      animate: "animate",
      className: e.className,
      initial: "initial",
      layout: "position",
      layoutId: e.shouldDisableAnimation ? void 0 : "FeatureCallout",
      role: "tooltip",
      style: e.style,
      transition: r,
      variants: {
        initial: {
          translateY: 10
        },
        animate: {
          translateY: 0
        },
        transformTemplate: (t, r) => e.transformString ? `${e.transformString} ${r}` : r
      },
      children: e.children
    })
  });
});
export const M = $$o0;