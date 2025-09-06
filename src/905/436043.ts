import { jsx } from "react/jsx-runtime";
import { createContext, useLayoutEffect, useMemo, useState, useEffect } from "react";
import { getFalseValue, isInteractionPathCheck } from "../figma_app/897289";
import { MV } from "../905/761735";
import { observableState } from "../905/441145";
let n;
let $$d1 = createContext(null);
let c = $$d1.Provider;
export function $$u0({
  userId: e = null,
  children: t
}) {
  useLayoutEffect(() => {
    if (void 0 !== n && e !== n && !getFalseValue() && !isInteractionPathCheck()) throw Error("Only a single userId should be provided to LivegraphProvider at any time");
    n = e;
    return () => {
      n = void 0;
    };
  }, [e]);
  let i = useMemo(() => MV(e), [e]);
  let [d, u] = useState(i);
  useEffect(() => (observableState.addListener(u), () => {
    observableState.removeListener(u);
  }), [u]);
  return jsx(c, {
    value: {
      client: d
    },
    children: t
  });
}
export const oD = $$u0;
export const ob = $$d1;