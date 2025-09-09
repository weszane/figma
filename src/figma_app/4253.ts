import { Rs } from "../figma_app/288654";
import { xs, QQ } from "../figma_app/808294";
import { CommunityPayment } from "../figma_app/43951";
import { m3 } from "../figma_app/45218";
export function $$o0(e) {
  let t = Rs(CommunityPayment, {
    monetizedResourceMetadataId: e?.monetized_resource_metadata?.id ?? ""
  }, {
    enabled: m3(e)
  });
  return "loaded" === t.status && t.data.communityResourcePayment ? xs(t.data.communityResourcePayment) : e?.community_resource_payment;
}
export function $$l1(e) {
  let t = $$o0(e);
  return QQ(t);
}
export const I = $$o0;
export const _ = $$l1;