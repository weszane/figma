import { jsx, Fragment } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { H } from "../905/474029";
import { addTileFavorite, handleTileUnfavorite } from "../figma_app/909778";
import { userHasPlan } from "../905/697795";
import { TileUtils } from "../figma_app/543100";
export function $$c0(e) {
  let t = useDispatch<AppDispatch>();
  let i = useCallback((i, n, r) => {
    let a = {
      entrypoint: e.entrypoint,
      favoriteId: n,
      sectionId: r,
      tile: e.tile,
      fileBrowserEntryPoint: !0
    };
    i ? t(addTileFavorite(a)) : t(handleTileUnfavorite(a));
  }, [t, e.tile, e.entrypoint]);
  let c = TileUtils.getOrgId(e.tile) ?? null;
  let u = TileUtils.getFavoriteResourceTeamId(e.tile) ?? null;
  return userHasPlan(c, u) ? jsx(H, {
    setFavorite: i,
    favoriteType: TileUtils.getFavoritedResourceType(e.tile),
    resourceId: TileUtils.getFavoriteResourceId(e.tile) || "",
    orgId: TileUtils.getOrgId(e.tile) ?? null,
    teamId: TileUtils.getFavoriteResourceTeamId(e.tile) ?? null
  }) : jsx(Fragment, {});
}
export const e = $$c0;
