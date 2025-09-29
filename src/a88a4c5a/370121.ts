import { jsxs, jsx } from "react/jsx-runtime";
import { props } from "@stylexjs/stylex";
import { Zk } from "../figma_app/626177";
import { dP } from "../figma_app/947348";
import { w } from "../figma_app/78608";
import { R } from "../figma_app/360122";
export function $$d0(e) {
  let t = w();
  return jsxs(Zk, {
    style: {
      paddingBottom: 0
    },
    ref: t,
    "data-onboarding-key": dP,
    children: [jsxs("div", {
      ...props(R.nameAndActionsContainer),
      children: [e.selectionName, e.selectionActionsButtons]
    }), jsx("div", {
      ...props(R.selectionActionsChildren),
      children: e.children
    })]
  });
}
export const W = $$d0;
