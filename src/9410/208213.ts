import { jsx } from "react/jsx-runtime";
import { createContext, useMemo } from "react";
import { q5 } from "../figma_app/516028";
import { Yj } from "../figma_app/557024";
export let $$o1 = createContext(null);
export function $$l0({
  children: e
}) {
  let t = q5();
  let i = t?.fileRepoId;
  let l = Yj(i ?? null);
  let d = useMemo(() => l && "loaded" === l.status ? l.data.activeBranches.length : null, [l]);
  return jsx($$o1.Provider, {
    value: d,
    children: e
  });
}
export const P = $$l0;
export const X = $$o1;