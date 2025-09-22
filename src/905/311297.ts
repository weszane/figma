import { jsx, Fragment } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { H } from "../905/474029";
import { EX, dy } from "../figma_app/909778";
import { userHasPlan } from "../905/697795";
import { Tf } from "../figma_app/543100";
export function $$c0(e) {
  let t = useDispatch();
  let i = useCallback((i, n, r) => {
    let a = {
      entrypoint: e.entrypoint,
      favoriteId: n,
      sectionId: r,
      tile: e.tile,
      fileBrowserEntryPoint: !0
    };
    i ? t(EX(a)) : t(dy(a));
  }, [t, e.tile, e.entrypoint]);
  let c = Tf.getOrgId(e.tile) ?? null;
  let u = Tf.getFavoriteResourceTeamId(e.tile) ?? null;
  return userHasPlan(c, u) ? jsx(H, {
    setFavorite: i,
    favoriteType: Tf.getFavoritedResourceType(e.tile),
    resourceId: Tf.getFavoriteResourceId(e.tile) || "",
    orgId: Tf.getOrgId(e.tile) ?? null,
    teamId: Tf.getFavoriteResourceTeamId(e.tile) ?? null
  }) : jsx(Fragment, {});
}
export const e = $$c0;