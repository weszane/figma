import { jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
import { MK } from "../figma_app/793429";
let r = createContext({
  selectionVariables: [],
  selectionStyles: [],
  selectionValues: []
});
export function $$l0({
  children: e
}) {
  let {
    selectionVariables,
    selectionStyles,
    selectionValues
  } = MK();
  return jsx(r.Provider, {
    value: {
      selectionVariables,
      selectionStyles,
      selectionValues
    },
    children: e
  });
}
export function $$o1() {
  return useContext(r);
}
export const L = $$l0;
export const M = $$o1;