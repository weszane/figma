import { useEffect } from "react";
import { useDispatch } from "../vendor/514228";
import { desktopAPIInstance } from "../figma_app/876459";
import { t7 } from "../905/989765";
import { WO } from "../figma_app/122682";
export function $$l0() {
  let e = useDispatch();
  let t = WO();
  useEffect(() => {
    t && async function () {
      let t = (await desktopAPIInstance?.getCaptionsEnabled()) || !1;
      e(t7(t));
    }();
  }, [t, e]);
}
export const W = $$l0;