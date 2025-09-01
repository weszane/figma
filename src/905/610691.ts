import { jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { ServiceCategories as _$$e } from "../905/165054";
import { az } from "../905/449184";
import { xD } from "../905/174697";
import { oY } from "../905/485103";
import { tH, H4 } from "../905/751457";
import { pH } from "../figma_app/147337";
import { $ } from "../905/293658";
import { w } from "../905/13390";
import { Y } from "../905/347011";
import { d as _$$d } from "../figma_app/307143";
import { ac } from "../905/930279";
import { t$ } from "../figma_app/863319";
import { jm } from "../905/697795";
import { ud } from "../905/862913";
import { nb, Tf } from "../figma_app/543100";
import { fileEntityDataMapper } from "../905/943101";
import { FEntityType } from "../figma_app/191312";
export function $$I0({
  tileActions: e,
  openTile: t,
  tile: i,
  selectedTiles: I,
  searchIndexToLog: E,
  dropdownVisible: x
}) {
  let {
    filePermissions,
    repoPermissions,
    protoPermissions
  } = xD();
  let T = ud();
  let k = useMemo(() => {
    if (!i) return null;
    let e = null;
    if (i.type === nb.FILE) e = i.file;else if (i.type === nb.REPO) {
      let t = T[i.repo.default_file_key];
      e = t ? fileEntityDataMapper.toLiveGraph(t) : null;
    } else i.type === nb.PINNED_FILE && (e = i.file);
    return e;
  }, [T, i]);
  let R = function ({
    sourceFile: e,
    tile: t,
    tileActions: i
  }) {
    let n = t?.file?.key;
    let r = ac(e);
    _$$d({
      file: e ?? null
    });
    let a = t ? Tf.getOrgId(t) : null;
    let s = t ? Tf.getFavoriteResourceTeamId(t) : null;
    let o = jm(a, s);
    let l = Y(n ?? "", FEntityType.FILE, a, s);
    let d = pH(e?.key ?? "", {
      enabled: !!e && i.pinToWorkspace
    });
    let u = l.hasMaxFavorites;
    let p = l.favorite;
    let A = l.orderedSidebarSections ?? [];
    let b = t$(l.userSidebarSections ?? [], A);
    let I = b.find(e => e.id === p?.resource.sidebarSectionId);
    return {
      loading: "loaded" !== l.status || "loaded" !== r.status || "disabled" !== d.status && "loaded" !== d.status,
      data: {
        hasMaxFavorites: u,
        userSidebarSections: b,
        favoriteSidebarSection: I,
        createBranchStatus: r.data,
        isResourceInUserPlan: !!o,
        fileWorkspacePinActions: d.data
      }
    };
  }({
    sourceFile: k,
    tile: i,
    tileActions: e
  });
  let N = R.loading && i?.type !== nb.OFFLINE_FILE || "loaded" !== filePermissions.status || "loaded" !== repoPermissions.status || "loaded" !== protoPermissions.status;
  return (oY(N, e => {
    az.trackDefinedEvent("file_browser.context_menu_load_queries_time", {
      durationMs: Math.round(e),
      type: "tile-action-dropdown"
    });
  }), !x || null === i || N) ? null : jsx(tH, {
    boundaryKey: "TileActionDropdown",
    sentryTags: {
      area: _$$e.WAYFINDING
    },
    fallback: H4.NONE_I_KNOW_WHAT_IM_DOING,
    children: jsx(w, {
      className: "subscribed_tile_action_dropdown--tileActions--zsKOG",
      loadedQueries: R.data,
      onMount: () => {
        $.endAndReport(`${Tf.getId(i)}`);
      },
      openTile: t,
      permsByFileKey: filePermissions.data,
      permsByPrototypeId: protoPermissions.data,
      permsByRepoId: repoPermissions.data,
      searchIndexToLog: E,
      selectedTiles: I,
      sourceFile: k,
      tile: i,
      tileActions: e
    })
  });
}
export const i = $$I0;