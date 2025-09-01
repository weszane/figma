import { useContext, useId, useEffect } from "react";
import { t } from "../vendor/987444";
export function $$o0() {
  let e = useContext(t);
  if (null === e) return [!0, null];
  let {
    isPresent,
    onExitComplete,
    register
  } = e;
  let a = useId();
  useEffect(() => register(a), []);
  let h = () => onExitComplete && onExitComplete(a);
  return !isPresent && onExitComplete ? [!1, h] : [!0];
}
export const xQ = $$o0;