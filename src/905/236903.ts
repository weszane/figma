import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { desktopAPIInstance } from "../figma_app/876459";
import { showCaptions } from "../905/989765";
import { WO } from "../figma_app/122682";
export function $$l0() {
  let e = useDispatch<AppDispatch>();
  let t = WO();
  useEffect(() => {
    t && async function () {
      let t = (await desktopAPIInstance?.getCaptionsEnabled()) || !1;
      e(showCaptions(t));
    }();
  }, [t, e]);
}
export const W = $$l0;
