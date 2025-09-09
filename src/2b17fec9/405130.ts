import { useEffect } from "react";
import { useAtomValueAndSetter } from "../figma_app/27355";
import { selectCurrentFile } from "../figma_app/516028";
import { N, Q } from "../figma_app/287368";
export function $$o0(e) {
  let t = N();
  let i = selectCurrentFile();
  let [o, l] = useAtomValueAndSetter(e);
  useEffect(() => {
    i?.canEditCanvas || t !== Q.REQUEST_EXISTS || o || l(!0);
    i?.canEditCanvas && o && l(!1);
  }, [t, i, o, l]);
}
export const m = $$o0;