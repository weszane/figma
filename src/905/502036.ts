import { jsx, Fragment } from "react/jsx-runtime";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { H } from "../905/474029";
import { addFolderFavorite, removeFolderFromFavorites } from "../figma_app/909778";
import { useFBGNavigationUpdatesTreatment, FBGNavigationUpdatesVariants } from "../figma_app/297957";
import { userHasPlan } from "../905/697795";
import { getSelectedView } from "../figma_app/386952";
import { FEntityType } from "../figma_app/191312";
export function $$p0(e) {
  let {
    folder
  } = e;
  let i = getSelectedView();
  let p = useSelector(e => e.currentUserOrgId);
  let m = useDispatch();
  let h = "recentsAndSharing" === i.view && "shared-projects" === i.tab ? e.folder.parent_org?.id ?? null : p;
  let g = e.folder.team_id;
  let f = userHasPlan(h, g);
  let _ = useFBGNavigationUpdatesTreatment() === FBGNavigationUpdatesVariants.CONTROL;
  let A = useCallback((e, i, n) => {
    let r = {
      entrypoint: "folder_list_card",
      favoriteId: i,
      sectionId: n,
      folder
    };
    e ? m(addFolderFavorite(r)) : m(removeFolderFromFavorites(r));
  }, [m, folder]);
  return _ && f ? jsx(H, {
    setFavorite: A,
    favoriteType: FEntityType.FOLDER,
    resourceId: e.folder.id,
    orgId: h,
    teamId: g
  }) : jsx(Fragment, {});
}
export const n = $$p0;