import { useMemo } from "react";
import { useSelector } from "react-redux";
import { V } from "../figma_app/473391";
import { JA, VI } from "../figma_app/608944";
export function $$o0(e) {
  let t = useSelector(e => e.modalShown);
  let {
    flyoutProps
  } = JA();
  return useMemo(() => {
    if ((t?.type !== VI || !t?.data?.asset) && !flyoutProps || !e) return !1;
    let n = flyoutProps?.asset ?? t?.data?.asset;
    try {
      return V(e) === V(n);
    } catch (e) {
      return !1;
    }
  }, [e, flyoutProps, t?.data?.asset, t?.type]);
}
export const n = $$o0;
