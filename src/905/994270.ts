import { useEffect } from "react";
import { useSetAtom } from "../figma_app/27355";
import { ZG } from "../figma_app/604494";
export function $$s0(e) {
  let t = useSetAtom(ZG);
  useEffect(() => {
    if (e) {
      t(!0);
      return () => {
        t(!1);
      };
    }
  }, [e, t]);
}
export const P = $$s0;