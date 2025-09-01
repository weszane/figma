import { useCallback } from "react";
import { wA, d4 } from "../vendor/514228";
import { KF, xb } from "../figma_app/465776";
import { N7, QV } from "../905/508367";
import { aw, eD } from "../figma_app/876459";
import { Ay } from "../905/612521";
import { Ay as _$$Ay } from "../figma_app/778880";
import { oB, sf } from "../905/929976";
import { NA } from "../905/738636";
import { c5 } from "../905/93909";
import { Kz, mr, Xm } from "../905/760074";
import { z4 } from "../905/37051";
import { Tf, nb } from "../figma_app/543100";
import { dq } from "../905/845253";
import { _6 } from "../figma_app/386952";
import { iZ } from "../905/372672";
import { M4 } from "../905/713695";
import { cD } from "../figma_app/598018";
import { U } from "../905/18613";
import { nT, wN } from "../figma_app/53721";
import { ai } from "../figma_app/915202";
import { O } from "../905/833838";
export function $$S0() {
  let e = iZ();
  let t = dq();
  let i = cD();
  let a = _6();
  let s = wA();
  let l = d4(e => e.selectedBranchKeyByRepoId);
  return useCallback(async (n, r) => {
    s(oB());
    let u = _$$Ay.mac ? r.metaKey : r.ctrlKey;
    let p = null;
    if (u && r.shiftKey ? p = aw.FOCAL_TAB : u ? p = aw.BACKGROUND_TAB : r.shiftKey && (p = aw.NEW_WINDOW), eD) {
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
  if (!eD) {
    KF(!0, "Should not be calling openGenericTileDesktop if not in the desktop app");
    return;
  }
  r = r ?? aw.FOCAL_TAB;
  let s = Tf.getIsTeamTemplate(e);
  let l = Tf.getName(e);
  let d = Tf.getEditorType(e);
  switch (e.type) {
    case nb.FILE:
      eD.openFile({
        fileKey: e.file.key,
        title: e.file.name,
        fileEditorType: e.file.editorType,
        target: r,
        isBranch: Kz(e.file),
        isLibrary: !!e.file.lastPublishedAt,
        isTeamTemplate: s,
        userId: n?.id
      });
      break;
    case nb.PINNED_FILE:
      eD.openFile({
        fileKey: e.file.key,
        title: l,
        fileEditorType: d,
        isTeamTemplate: s,
        target: r,
        userId: n?.id
      });
      break;
    case nb.PROTOTYPE:
      eD.openPrototype(e.prototype.file_key, e.prototype.page_id, e.prototype.fig_file.name || "", r, n?.id);
      break;
    case nb.REPO:
      let c = mr(e.repo, e.branches, t);
      c && eD.openFile({
        fileKey: c.key,
        title: c.name,
        fileEditorType: c.editor_type,
        target: r,
        isBranch: Xm(c),
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
      xb(e);
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
  Ay.redirect(r, "_blank");
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
  i(c5({
    planId: n || o,
    planType: n ? O.ORG : O.TEAM
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
      }, f) : i(sf({
        view: "fullscreen",
        fileKey: e.file.key,
        editorType: z4.getIsExtension() ? nT.DevHandoff : e.file.editorType ? wN(e.file.editorType) : nT.Design,
        prevSelectedView: d
      }));
      break;
    case nb.PINNED_FILE:
      let _ = await M4.fetchFile(e.file.key);
      N7(n, _.parent_org_id, o, _.team_id) ? QV({
        file: {
          key: e.file.key,
          editorType: e.file.editorType
        }
      }, f) : i(sf({
        view: "fullscreen",
        fileKey: e.file.key,
        editorType: wN(e.file.editorType),
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
      }, f) : i(sf({
        view: "prototype",
        file: A,
        nodeId: e.prototype.page_id,
        prevSelectedView: d
      }));
      break;
    case nb.REPO:
      let b = mr(e.repo, e.branches, t);
      if (!b) return;
      N7(n, b.parent_org_id, o, b.team_id) ? QV({
        file: {
          key: b.key
        }
      }, f) : i(sf({
        view: "fullscreen",
        fileKey: b.key,
        editorType: nT.Design,
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
      xb(e);
  }
};
export const v = $$S0;