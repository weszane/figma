import { useContext } from "react";
export function $$r0(e, t, i) {
  let r = useContext(e);
  if (null == r) throw Error(`null context: ${t} must be nested within ${i}`);
  return r;
}
export const $ = $$r0;