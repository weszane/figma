import { useState, useLayoutEffect } from "react";
import { getFeatureFlags } from "../905/601108";
import { md } from "../figma_app/27355";
import { _ } from "../905/401345";
export function $$o0() {
  let e = md(_);
  let [t, i] = useState(!1);
  useLayoutEffect(() => {
    e && i(!0);
  }, [e]);
  return !!getFeatureFlags().mfa_for_guests && t;
}
export const K = $$o0;