import { useState, useEffect } from "react";
import { fp } from "../figma_app/27355";
import { tS } from "../figma_app/516028";
export function $$o0({
  atom: e
}) {
  let t = tS();
  let [n, o] = fp(e);
  let [a, s] = useState(!1);
  useEffect(() => {
    t || a || (o(Math.random()), s(!0));
  }, [n, t, o, a]);
}
export const a = $$o0;