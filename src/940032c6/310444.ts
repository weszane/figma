import { useState, useEffect } from "react";
import { useAtomValueAndSetter } from "../figma_app/27355";
import { tS } from "../figma_app/516028";
export function $$s0({
  atom: e
}) {
  let t = tS();
  let [i, s] = useAtomValueAndSetter(e);
  let [r, o] = useState(!1);
  useEffect(() => {
    t || r || (s(Math.random()), o(!0));
  }, [i, t, s, r]);
}
export const a = $$s0;