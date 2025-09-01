import { DF } from "../vendor/463802";
import { useEffect } from "react";
export function $$o0({
  defaultSelection: e
}) {
  let [r] = DF();
  useEffect(() => {
    r.focus(() => {
      let e = document.activeElement;
      let n = r.getRootElement();
      n?.focus({
        preventScroll: !0
      });
    }, {
      defaultSelection: e
    });
  }, [e, r]);
  return null;
}
export const x = $$o0;