import { useSelector } from "react-redux";
import { getResourceDataOrFallback } from "../905/663269";
import { useSubscription } from "../figma_app/288654";
import { CommunityHubLikeForProfile, CommunityHubLikeForProfileFromResourceId } from "../figma_app/43951";
import { vt } from "../figma_app/45218";
export function $$l1(e, t, i = !0) {
  let r = useSelector(e => e.authedActiveCommunityProfile);
  let d = {
    profileId: r?.id || "",
    hubFileId: null,
    pluginId: null
  };
  t === vt.HUB_FILE ? d.hubFileId = e || null : d.pluginId = e || null;
  return useSubscription(CommunityHubLikeForProfile, d, {
    enabled: !!d.profileId && i
  }).transform(e => [!!e.communityHubLike, e.communityHubLike?.id || null]);
}
export function $$d0(e, t = !0) {
  let i = useSelector(e => e.authedActiveCommunityProfile);
  return useSubscription(CommunityHubLikeForProfileFromResourceId, {
    profileId: i?.id || "",
    resourceId: e || ""
  }, {
    enabled: !!i?.id && t
  }).transform(e => [!!getResourceDataOrFallback(e.communityHubLikeForResource), getResourceDataOrFallback(e.communityHubLikeForResource)?.id || null]);
}
export const B = $$d0;
export const W = $$l1;