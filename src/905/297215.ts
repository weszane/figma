import { jsx, Fragment } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import { getSelectedViewSelector } from "../figma_app/198885";
import { K } from "../905/770444";
import { LibraryItemTileContextMenuType, LibraryItemTileContextMenu } from "../905/275787";
export function $$l0() {
  let e = useSelector(e => e.dropdownShown);
  let t = e?.type === LibraryItemTileContextMenuType.ACTIONS_ASSETS && !!e?.data?.component;
  let i = useSelector(getSelectedViewSelector);
  let l = K(!0);
  return jsx(Fragment, {
    children: t && jsx(LibraryItemTileContextMenu, {
      selectedView: i,
      dropdownShown: e,
      onJumpToLocalComponent: l,
      usePortal: !0,
      hidePublishingForLocalComponents: !0
    })
  });
}
export const a = $$l0;
