import { jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
import { useAtomWithSubscription } from "../figma_app/27355";
import { Q8 } from "../figma_app/604494";
let o = createContext(null);
export function $$l0({
  numResults: e,
  moduleFilters: t,
  children: r
}) {
  return jsx(o.Provider, {
    value: {
      numResults: e,
      moduleFilters: t
    },
    children: r
  });
}
export function $$d1() {
  let e = useContext(o);
  let t = useAtomWithSubscription(Q8);
  if (!e) throw Error("useExtensionMetrics must be used within a ExtensionMetricsProvider");
  return {
    ...e,
    searchQuery: t
  };
}
export const M6 = $$l0;
export const OX = $$d1;