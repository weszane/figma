import { jsx } from "react/jsx-runtime";
import { useRef, useMemo } from "react";
import { d4 } from "../vendor/514228";
import { fu } from "../figma_app/831799";
import { X } from "../905/27228";
export function $$l0({
  children: e,
  page: t,
  properties: i
}) {
  let l = X();
  let d = d4(e => e.search.sessionId);
  let c = useRef(d);
  let u = useMemo(() => ({
    ...(i ?? {}),
    dsaSessionId: l,
    searchSessionId: c.current
  }), [i, l]);
  return jsx(fu, {
    name: t,
    properties: u,
    children: e
  });
}
export const t = $$l0;