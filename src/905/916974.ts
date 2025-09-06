import { useEffect } from "react";
import { atom, useAtomValueAndSetter } from "../figma_app/27355";
export function $$a1() {
  return atom(-1);
}
export function $$s0({
  callback: e,
  index: t,
  lastAddedItemIndexAtom: i
}) {
  let [a, s] = useAtomValueAndSetter(i);
  useEffect(() => {
    t === a && (e(), s(-1));
  }, [a, s, e, t]);
  return null;
}
export const O = $$s0;
export const b = $$a1;