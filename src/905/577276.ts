import { jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Kq } from "../vendor/525001";
import { z } from "../905/490038";
export function $$o0(e) {
  let [t, i] = useState(0);
  useEffect(() => {
    let e = () => i(t + 1);
    z.rerenderAtomsProviders.add(e);
    return () => {
      z.rerenderAtomsProviders.$$delete(e);
    };
  });
  return jsx(Kq, {
    store: z.jotaiAtomStore,
    children: e.children
  });
}
export const A = $$o0;