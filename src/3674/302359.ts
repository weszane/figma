import { jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
import { MK } from "../figma_app/793429";
let l = createContext({
  selectionVariables: [],
  selectionStyles: [],
  selectionValues: []
});
export function $$s0({
  children: e
}) {
  let {
    selectionVariables,
    selectionStyles,
    selectionValues
  } = MK();
  return jsx(l.Provider, {
    value: {
      selectionVariables,
      selectionStyles,
      selectionValues
    },
    children: e
  });
}
export function $$r1() {
  return useContext(l);
}
export const L = $$s0;
export const M = $$r1;