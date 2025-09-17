import { tc } from "../905/15667";
import { getMinimumBundle } from "../905/389382";
export function $$a0({
  seatType: e,
  licenseType: t,
  entryPoint: i,
  planDataForSocialProof: a
}) {
  return i === tc.USER_SETTINGS ? {
    entryPoint: i,
    licenseType: void 0,
    planData: a,
    seatType: getMinimumBundle(t)
  } : {
    licenseType: t,
    entryPoint: i,
    planData: a,
    seatType: e ?? getMinimumBundle(t)
  };
}
export const R = $$a0;