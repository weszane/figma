import { useSubscription } from "../figma_app/288654";
import { mapPaymentToApiFormat, isSubscriptionActive } from "../figma_app/808294";
import { CommunityPayment } from "../figma_app/43951";
import { hasMonetizedResourceMetadata } from "../figma_app/45218";
export function $$o0(e) {
  let t = useSubscription(CommunityPayment, {
    monetizedResourceMetadataId: e?.monetized_resource_metadata?.id ?? ""
  }, {
    enabled: hasMonetizedResourceMetadata(e)
  });
  return "loaded" === t.status && t.data.communityResourcePayment ? mapPaymentToApiFormat(t.data.communityResourcePayment) : e?.community_resource_payment;
}
export function $$l1(e) {
  let t = $$o0(e);
  return isSubscriptionActive(t);
}
export const I = $$o0;
export const _ = $$l1;