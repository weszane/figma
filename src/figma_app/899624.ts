import { mt } from "../figma_app/345997";
export function $$i0(e, t = new Date()) {
  return !!e?.annual_subscription && !(e?.annual_subscription?.trial_end ? mt(e?.annual_subscription.trial_end, t) : null);
}
export const v = $$i0;