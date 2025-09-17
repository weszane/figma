import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debug, throwTypeError } from "../figma_app/465776";
import { N7, QV } from "../905/508367";
import { OpenTarget, desktopAPIInstance } from "../figma_app/876459";
import { customHistory } from "../905/612521";
import { BrowserInfo } from "../figma_app/778880";
import { hideDropdownAction, selectViewAction } from "../905/929976";
import { NA } from "../905/738636";
import { setLastVisitedPlan } from "../905/93909";
import { isBranchAlt, findBranchById, isBranch } from "../905/760074";
import { z4 } from "../905/37051";
import { Tf, nb } from "../figma_app/543100";
import { useCurrentUserOrgId } from "../905/845253";
import { getSelectedView } from "../figma_app/386952";
import { selectCurrentUser } from "../905/372672";
import { liveStoreInstance } from "../905/713695";
import { getCurrentTeamId } from "../figma_app/598018";
import { U } from "../905/18613";
import { FEditorType, mapFileTypeToEditorType } from "../figma_app/53721";
import { ai } from "../figma_app/915202";
import { OrganizationType } from "../905/833838";
export function $$S0() {
  let e = selectCurrentUser();
  let t = useCurrentUserOrgId();
  let i = getCurrentTeamId();
  let a = getSelectedView();
  let s = useDispatch();
  let l = useSelector(e => e.selectedBranchKeyByRepoId);
  return useCallback(async (n, r) => {
    s(hideDropdownAction());
    let u = BrowserInfo.mac ? r.metaKey : r.ctrlKey;
    let p = null;
    if (u && r.shiftKey ? p = OpenTarget.FOCAL_TAB : u ? p = OpenTarget.BACKGROUND_TAB : r.shiftKey && (p = OpenTarget.NEW_WINDOW), desktopAPIInstance) {
      w({
        tile: n,
        selectedBranchKeyByRepoId: l,
        dispatch: s,
        user: e,
        target: p
      });
      r.preventDefault();
      return;
    }
    if (null != p) {
      C({
        tile: n,
        e: r,
        selectedBranchKeyByRepoId: l,
        target: p,
        dispatch: s
      });
      return;
    }
    r.preventDefault();
    await T({
      tile: n,
      selectedBranchKeyByRepoId: l,
      dispatch: s,
      user: e,
      selectedView: a,
      currentUserOrgId: t,
      currentTeamId: i
    });
  }, [l, s, e, t, i, a]);
}
let w = ({
  tile: e,
  selectedBranchKeyByRepoId: t,
  dispatch: i,
  user: n,
  target: r
}) => {
  if (!desktopAPIInstance) {
    debug(!0, "Should not be calling openGenericTileDesktop if not in the desktop app");
    return;
  }
  r = r ?? OpenTarget.FOCAL_TAB;
  let s = Tf.getIsTeamTemplate(e);
  let l = Tf.getName(e);
  let d = Tf.getEditorType(e);
  switch (e.type) {
    case nb.FILE:
      desktopAPIInstance.openFile({
        fileKey: e.file.key,
        title: e.file.name,
        fileEditorType: e.file.editorType,
        target: r,
        isBranch: isBranchAlt(e.file),
        isLibrary: !!e.file.lastPublishedAt,
        isTeamTemplate: s,
        userId: n?.id
      });
      break;
    case nb.PINNED_FILE:
      desktopAPIInstance.openFile({
        fileKey: e.file.key,
        title: l,
        fileEditorType: d,
        isTeamTemplate: s,
        target: r,
        userId: n?.id
      });
      break;
    case nb.PROTOTYPE:
      desktopAPIInstance.openPrototype(e.prototype.file_key, e.prototype.page_id, e.prototype.fig_file.name || "", r, n?.id);
      break;
    case nb.REPO:
      let c = findBranchById(e.repo, e.branches, t);
      c && desktopAPIInstance.openFile({
        fileKey: c.key,
        title: c.name,
        fileEditorType: c.editor_type,
        target: r,
        isBranch: isBranch(c),
        isLibrary: !!c.last_published_at,
        userId: n?.id
      });
      break;
    case nb.OFFLINE_FILE:
      i(NA({
        file: e.file,
        openNewFileIn: ai.NEW_TAB,
        source: U.OFFLINE_FILE_TILE
      }));
      break;
    default:
      throwTypeError(e);
  }
};
let C = ({
  tile: e,
  e: t,
  selectedBranchKeyByRepoId: i,
  dispatch: n
}) => {
  e.type === nb.OFFLINE_FILE && n(NA({
    file: e.file,
    openNewFileIn: ai.NEW_TAB,
    source: U.OFFLINE_FILE_TILE
  }));
  let r = Tf.getEditUrl(e, i);
  customHistory.redirect(r, "_blank");
  t.preventDefault();
};
let T = async ({
  tile: e,
  selectedBranchKeyByRepoId: t,
  dispatch: i,
  currentUserOrgId: n,
  selectedView: r,
  currentTeamId: o,
  user: l
}) => {
  let d = "recentsAndSharing" === r.view || "folder" === r.view ? r : void 0;
  i(setLastVisitedPlan({
    planId: n || o,
    planType: n ? OrganizationType.ORG : OrganizationType.TEAM
  }));
  let f = {
    user: l,
    teamId: o,
    orgId: n,
    selectedView: r
  };
  switch (e.type) {
    case nb.FILE:
      N7(n, e.file.parentOrgId, o, e.file.teamId) ? QV({
        file: {
          key: e.file.key,
          editorType: e.file.editorType || void 0
        }
      }, f) : i(selectViewAction({
        view: "fullscreen",
        fileKey: e.file.key,
        editorType: z4.getIsExtension() ? FEditorType.DevHandoff : e.file.editorType ? mapFileTypeToEditorType(e.file.editorType) : FEditorType.Design,
        prevSelectedView: d
      }));
      break;
    case nb.PINNED_FILE:
      let _ = await liveStoreInstance.fetchFile(e.file.key);
      N7(n, _.parent_org_id, o, _.team_id) ? QV({
        file: {
          key: e.file.key,
          editorType: e.file.editorType
        }
      }, f) : i(selectViewAction({
        view: "fullscreen",
        fileKey: e.file.key,
        editorType: mapFileTypeToEditorType(e.file.editorType),
        prevSelectedView: d
      }));
      break;
    case nb.PROTOTYPE:
      let A = e.prototype.fig_file;
      N7(n, A.parent_org_id, o, A.team_id) ? QV({
        base: "proto",
        file: {
          key: A.key,
          editorType: A.editor_type || void 0
        },
        nodeId: e.prototype.page_id
      }, f) : i(selectViewAction({
        view: "prototype",
        file: A,
        nodeId: e.prototype.page_id,
        prevSelectedView: d
      }));
      break;
    case nb.REPO:
      let b = findBranchById(e.repo, e.branches, t);
      if (!b) return;
      N7(n, b.parent_org_id, o, b.team_id) ? QV({
        file: {
          key: b.key
        }
      }, f) : i(selectViewAction({
        view: "fullscreen",
        fileKey: b.key,
        editorType: FEditorType.Design,
        prevSelectedView: d
      }));
      break;
    case nb.OFFLINE_FILE:
      i(NA({
        file: e.file,
        openNewFileIn: ai.SAME_TAB,
        source: U.OFFLINE_FILE_TILE
      }));
      break;
    default:
      throwTypeError(e);
  }
};
export const v = $$S0;