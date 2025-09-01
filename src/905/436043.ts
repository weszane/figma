import { jsx } from "react/jsx-runtime";
import { createContext, useLayoutEffect, useMemo, useState, useEffect } from "react";
import { Lg, nl } from "../figma_app/257275";
import { MV } from "../905/761735";
import { Z } from "../905/441145";
let n;
let $$d1 = createContext(null);
let c = $$d1.Provider;
export function $$u0({
  userId: e = null,
  children: t
}) {
  useLayoutEffect(() => {
    if (void 0 !== n && e !== n && !Lg() && !nl()) throw Error("Only a single userId should be provided to LivegraphProvider at any time");
    n = e;
    return () => {
      n = void 0;
    };
  }, [e]);
  let i = useMemo(() => MV(e), [e]);
  let [d, u] = useState(i);
  useEffect(() => (Z.addListener(u), () => {
    Z.removeListener(u);
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