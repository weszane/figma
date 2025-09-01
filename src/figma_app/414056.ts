import { jsxs, jsx } from "react/jsx-runtime";
import { P } from "../vendor/348225";
let a = {
  default: {
    duration: 1,
    ease: "linear",
    repeat: 1 / 0
  },
  rotate: {
    duration: 2,
    ease: [.6, -1, .4, 2],
    repeat: 1 / 0
  }
};
export function $$s0() {
  return jsxs("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    children: [jsx(P.ellipse, {
      animate: {
        ry: [2.5, 0, 2.5],
        strokeDashoffset: [-10, 10],
        rotate: [0, 45, 90]
      },
      cx: "12",
      cy: "12",
      fill: "transparent",
      initial: {
        strokeDashoffset: -10,
        ry: 2.5,
        rotate: 0
      },
      rx: "8.5",
      ry: "2.5",
      stroke: "var(--color-icon)",
      strokeDasharray: "14 5",
      strokeDashoffset: "-10",
      strokeLinecap: "round",
      strokeWidth: "1",
      transition: a
    }), jsx(P.ellipse, {
      animate: {
        ry: [2.5, 0, 2.5],
        strokeDashoffset: [-10, 10],
        rotate: [-90, -45, 0]
      },
      cx: "12",
      cy: "12",
      fill: "transparent",
      initial: {
        strokeDashoffset: -8,
        ry: 4,
        rotate: -45
      },
      rx: "8.5",
      ry: "2.5",
      stroke: "var(--color-icon)",
      strokeDasharray: "14 5",
      strokeDashoffset: "-10",
      strokeLinecap: "round",
      strokeWidth: "1",
      transition: a
    })]
  });
}
export const H = $$s0;