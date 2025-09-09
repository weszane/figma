import { Rs } from "../figma_app/288654";
import { oA } from "../905/723791";
import { eU, tW } from "../figma_app/863319";
import { FavoritesByResourceId } from "../figma_app/43951";
export function $$o0(e, t, i = null, l = null) {
  let d = Rs(FavoritesByResourceId, {
    resourceId: e,
    resourceType: t,
    orgId: i,
    teamId: i ? null : l
  });
  let c = d.data ? eU(d.data, t) : void 0;
  return {
    status: d.status,
    favorite: c,
    hasMaxFavorites: !!d.data?.favoritedResources?.numFavorites && tW(d.data?.favoritedResources.numFavorites),
    userSidebarSections: d.data?.currentUser ? oA(d.data.currentUser.userSidebarSections) : null,
    orderedSidebarSections: d.data?.currentUser.baseOrgUser?.fileBrowserPreferences?.orderedSidebarSections
  };
}
export const Y = $$o0;