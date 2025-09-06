import { useMemo } from "react";
import { useAtomWithSubscription } from "../figma_app/27355";
import { zN } from "../figma_app/579169";
import { UQ } from "../figma_app/864723";
export let $$o1 = "file_paid_status_badge_onboarding_key";
export function $$l0(e) {
  let t = useAtomWithSubscription(UQ);
  let i = useAtomWithSubscription(zN);
  return useMemo(() => "whiteboard" === e && t && "loaded" === i.status && !1 === i.data, [e, t, i.status, i.data]);
}
export const I = $$l0;
export const l = $$o1;