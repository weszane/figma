import { jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Kq } from "../vendor/525001";
import { atomStoreManager } from "../905/490038";
export function $$o0(e) {
  let [t, i] = useState(0);
  useEffect(() => {
    let e = () => i(t + 1);
    atomStoreManager.rerenderAtomsProviders.add(e);
    return () => {
      atomStoreManager.rerenderAtomsProviders.$$delete(e);
    };
  });
  return jsx(Kq, {
    store: atomStoreManager.jotaiAtomStore,
    children: e.children
  });
}
export const A = $$o0;