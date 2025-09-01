import { v5, YW, cz } from "../vendor/231521";
import { DF } from "../vendor/463802";
import { useEffect } from "react";
export function $$a0() {
  let [e] = DF();
  useEffect(() => {
    if (!e.hasNodes([v5, YW])) throw Error("ListPlugin: ListNode and/or ListItemNode not registered on editor");
  }, [e]);
  (function (e) {
    useEffect(() => cz(e), [e]);
  })(e);
  return null;
}
export const Q = $$a0;