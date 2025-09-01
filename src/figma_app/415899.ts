import { jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
let a = createContext({
  back: "Back",
  close: "Close",
  danger: "Danger:",
  dismiss: "Dismiss",
  error: "Error:",
  hasChecked: "Contains checked item",
  help: "Help",
  loading: "Loading",
  mixed: "Mixed",
  moveRowDown: "Move down",
  moveRowToBottom: "Move to bottom",
  moveRowToTop: "Move to top",
  moveRowUp: "Move up",
  remainingCharacters: "Remaining characters",
  select: "Select an option",
  success: "Success:",
  warning: "Warning:"
});
export function $$s0({
  children: e,
  strings: t
}) {
  return jsx(a.Provider, {
    value: t,
    children: e
  });
}
export function $$o1(e) {
  return useContext(a)[e];
}
$$s0.displayName = "FplStringsProvider";
export const AD = $$s0;
export const Lh = $$o1;