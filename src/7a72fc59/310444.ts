import { useState, useEffect } from "react";
import { useAtomValueAndSetter } from "../figma_app/27355";
import { useCurrentFileKey } from "../figma_app/516028";
export function $$o0({
  atom: e
}) {
  let t = useCurrentFileKey();
  let [n, o] = useAtomValueAndSetter(e);
  let [a, s] = useState(!1);
  useEffect(() => {
    t || a || (o(Math.random()), s(!0));
  }, [n, t, o, a]);
}
export const a = $$o0;