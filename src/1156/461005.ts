import { jsx } from "react/jsx-runtime";
import { memo, useMemo } from "react";
import { P } from "../vendor/348225";
let a = "shimmer_text--container--hdMNz";
let $$l0 = memo(({
  children: e,
  duration: t = 2,
  baseColor: n = "#a1a1aa",
  shimmerColor: l = "#000",
  spread: o = 2,
  as: c = "p",
  noWrap: d = !0
}) => {
  let u = useMemo(() => Math.min(e.length * o, 100), [e, o]);
  let x = `linear-gradient(
        90deg,
        transparent calc(50% - ${u}px),
        ${l} 50%,
        transparent calc(50% + ${u}px)
      ),
      linear-gradient(${n}, ${n})`;
  let m = d ? `${a} shimmer_text--noWrap--RtJ98` : a;
  let h = P(c);
  return jsx(h, {
    className: m,
    style: {
      backgroundImage: x,
      width: "fit-content"
    },
    initial: {
      backgroundPosition: "100% center"
    },
    animate: {
      backgroundPosition: "0% center"
    },
    transition: {
      duration: t,
      repeat: 1 / 0,
      ease: "linear"
    },
    children: e
  });
});
export const N = $$l0;