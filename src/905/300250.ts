import { sYL, BtE, FAf, h3O, kul, H$z, dPJ } from "../figma_app/763686";
import { yQ } from "../905/236856";
import { NC } from "../905/17179";
import { sx } from "../905/449184";
import { eD } from "../figma_app/876459";
import { s9 } from "../905/194389";
import { Ay } from "../905/612521";
import { XHR, getRequest } from "../905/910117";
import { t as _$$t } from "../905/303541";
import { F } from "../905/302958";
import { zX } from "../905/576487";
import { nF } from "../905/350402";
import { sf } from "../905/929976";
import { Nf } from "../figma_app/864378";
import { Ce, to } from "../905/156213";
import { rY, XA } from "../905/985490";
import { gf, FK, fA, ds, Mt } from "../905/585030";
import { HJ, cb } from "../905/760074";
import { Y5 } from "../figma_app/455680";
import { NT } from "../figma_app/741237";
import { De, eN, oJ, mN, lt } from "../905/346794";
import { Qx, WO } from "../905/491806";
import { nT } from "../figma_app/53721";
import { PW, Kn } from "../905/535806";
import { my, RK } from "../905/561832";
async function T(e, t, i) {
  try {
    await XHR.post(`/api/files/${e}/copy_image_usages_before_merge`);
  } catch (n) {
    let e = new s9("Error creating image usages", {
      cause: n
    });
    HJ(e, PW.ON_MERGE, i);
    t(F.enqueue({
      message: _$$t("collaboration.branching.error_creating_image_usages"),
      error: !0
    }));
    return;
  }
}
let k = nF((e, t) => {
  let i = t?.message || _$$t("collaboration.branching.error_merging");
  e.dispatch(F.enqueue({
    message: i,
    type: "file-merge-submit",
    error: !0
  }));
});
let $$R3 = nF(async (e, t) => {
  let {
    mergeParams,
    checkpointDiff,
    pendingMessage,
    conflictResolutionDetails,
    user,
    branchModalTrackingId
  } = t;
  let u = e.getState().openFile;
  let h = u?.key;
  let v = Qx(mergeParams.direction);
  if (e.dispatch(Ce()), mergeParams.branchModalTrackingId = branchModalTrackingId, !u) {
    e.dispatch(k());
    e.dispatch($$N7({
      hideModal: !1,
      mergeParams,
      userInitiated: !1,
      reason: "commitMerge_failed_with_error",
      error: "missing openFile"
    }));
    HJ(Error("commitMerge: missing openFile"), PW.ON_MERGE, mergeParams.direction);
    return;
  }
  let I = WO(mergeParams);
  if (mergeParams.toCheckpointKey = checkpointDiff.to_checkpoint_key, mergeParams.fromCheckpointKey = checkpointDiff.from_checkpoint_key, mergeParams.branchModalTrackingId = branchModalTrackingId, I !== h) {
    mergeParams.mergeOnFileOpen = !0;
    eD && (mergeParams.checkpointDiffURL = checkpointDiff.signed_url);
    eD ? e.dispatch($$N7({
      hideModal: !1,
      mergeParams,
      userInitiated: !1,
      reason: "switching_files_in_desktop"
    })) : await De(!1);
    e.dispatch(sf({
      view: "fullscreen",
      fileKey: mergeParams.direction === Kn.TO_SOURCE ? mergeParams.sourceKey : mergeParams.branchKey,
      editorType: nT.Design,
      mergeParams
    }));
  } else {
    e.dispatch(F.enqueue({
      message: pendingMessage,
      icon: zX.SPINNER,
      type: "file-merge-submit"
    }));
    e.dispatch($$j4({}));
    mergeParams.direction === Kn.TO_SOURCE && gf(sYL.BRANCH, BtE.STAGE);
    let t = mergeParams.direction === Kn.FROM_SOURCE ? checkpointDiff.to_checkpoint_key : null;
    mergeParams.pickedAllFromBranch = mergeParams.direction === Kn.FROM_SOURCE && conflictResolutionDetails?.nonConflictingGroups === 0 && conflictResolutionDetails?.mainPickGroups === 0 && conflictResolutionDetails?.branchPickGroups > 0;
    try {
      let n = {
        key: u.key,
        file_repo_id: u.fileRepoId
      };
      let a = new FK({
        mergeParams,
        file: n,
        conflictResolutionDetails: conflictResolutionDetails || null
      });
      let o = await fA(mergeParams, rY.getDiffMigrationVersion(v), t, a, checkpointDiff.key);
      await O(o, e.dispatch, mergeParams, user.id, a);
      e.dispatch(Nf());
    } catch (n) {
      e.dispatch(k());
      let t = new s9("Error committing merge", {
        cause: n
      });
      HJ(t, PW.ON_MERGE, mergeParams.direction);
      e.dispatch($$N7({
        userInitiated: !1,
        reason: "commitMerge_failed_with_error",
        error: n.message,
        hideModal: !1,
        mergeParams
      }));
    }
  }
});
let $$N7 = nF((e, t) => {
  t.hideModal && e.dispatch(Ce());
  ds().then(() => {
    sx("Branch Modal Exited", {
      direction: t.mergeParams.direction,
      branch_key: t.mergeParams.branchKey,
      source_key: t.mergeParams.sourceKey,
      branchModalTrackingId: t.mergeParams.branchModalTrackingId,
      userInitiated: t.userInitiated,
      reason: t.reason
    });
    e.getState().openFile?.canEdit ? (NT(FAf.DESIGN), Y5.triggerAction("enter-layout-mode")) : (NT(FAf.INSPECT), Y5.triggerAction("enter-preview-mode"));
  }).catch(e => {
    let t = new s9("Refreshing due to error in abandonDiff", {
      cause: e
    });
    cb(t);
    Ay.reload("Merge cancelled");
  });
});
let $$P0 = nF(async (e, t) => {
  if (t.mergeParams.mergeOnFileOpen) {
    if (await yQ(), eN() || (h3O.updateConnectionStateIfNeeded(!0), await oJ(kul.JOINED)), e.dispatch(F.enqueue({
      message: _$$t("collaboration.branching.merging"),
      icon: zX.SPINNER,
      type: "file-merge-submit"
    })), e.getState().mirror.appModel.isReadOnly) {
      HJ(Error("mergeOnFileOpen: app model is in read only state"), PW.ON_MERGE, t.mergeParams.direction);
      e.dispatch(k({
        message: _$$t("collaboration.branching.file_is_in_view_only_state_please_current_refresh_tab_and_try_again")
      }));
      return;
    }
    try {
      e.dispatch($$j4({}));
      let i = t.migrationVersion;
      let r = Qx(t.mergeParams.direction);
      if (t.mergeParams.checkpointDiffURL) {
        let a = T(t.mergeParams.branchKey, e.dispatch, t.mergeParams.direction);
        let s = getRequest(t.mergeParams.checkpointDiffURL, null, {
          responseType: "arraybuffer"
        }).then(e => {
          let a = e.data;
          rY.setDiff(r, a, t.mergeParams.sourceKey, t.mergeParams.branchKey, -1) === H$z.VERSION_MISMATCH && (i = rY.getDiffMigrationVersion(r));
        });
        await Promise.all([a, s]);
      } else i = rY.getDiffMigrationVersion(r);
      try {
        let e = rY.getAllGuids(r, t.mergeParams.branchModalTrackingId || 0);
        sx("Branching Incremental To Source Merge", {
          isIncremental: h3O.isIncrementalSession(),
          isValidatingIncremental: h3O.isValidatingIncremental(),
          guidCount: e.length,
          branchKey: t.mergeParams.branchKey,
          sourceKey: t.mergeParams.sourceKey
        }, {
          forwardToDatadog: !0
        });
        await Mt(e, dPJ.BRANCHING_MERGE_TO_MAIN, {
          branchKey: t.mergeParams.branchKey,
          sourceKey: t.mergeParams.sourceKey,
          branchModalTrackingId: t.mergeParams.branchModalTrackingId || 0
        });
      } catch (e) {
        if (h3O.isValidatingIncremental()) HJ(new s9("Incremental loading validation failed", {
          cause: e
        }), PW.ON_MERGE, t.mergeParams.direction); else throw e;
      }
      await mN();
      gf(r, BtE.STAGE);
      let a = new FK({
        mergeParams: t.mergeParams,
        file: t.editingFile,
        conflictResolutionDetails: null
      });
      let o = await fA(t.mergeParams, i, null, a, null);
      await O(o, e.dispatch, t.mergeParams, t.user.id, a);
    } catch (i) {
      i instanceof XA ? (e.dispatch(k({
        message: _$$t("collaboration.branching.couldn_t_proceed_with_merge_please_accept_updates_from_main_before_merging_your_branch")
      })), rY.clearDiffs()) : (e.dispatch(k()), e.dispatch($$N7({
        hideModal: !1,
        mergeParams: t.mergeParams,
        userInitiated: !1,
        reason: "mergeOnFileOpen_failed_with_error",
        error: i.message
      })));
      HJ(new s9("merge: Failed to commit diff", {
        cause: i
      }), PW.ON_MERGE, t.mergeParams.direction);
      e.dispatch($$N7({
        hideModal: !1,
        mergeParams: t.mergeParams,
        userInitiated: !1,
        reason: "handleCommitDiffResult_failed_with_error",
        error: i.message
      }));
    }
  }
});
let O = async (e, t, i, n, r = null) => {
  if (e) switch (e.status) {
    case 200:
    case 201:
      {
        let a = e.data.meta.file_merge;
        r?.commitEnd(null, a.id);
        t($$L6({
          userId: n,
          fileMergeId: a.id
        }));
        try {
          await lt({
            fileMergeId: a.id,
            userId: n,
            allowEmptyMerge: i.direction === Kn.FROM_SOURCE
          });
          r?.commitSynced(a.id);
          t($$N7({
            hideModal: !1,
            mergeParams: i,
            userInitiated: !0,
            reason: "user_initiated_merge"
          }));
          t($$M1({}));
        } catch (n) {
          t($$F2({}));
          HJ(new s9("merge: Failed to handle commit result", {
            cause: n
          }), PW.ON_MERGE, i.direction, {
            file_merge_id: e.data?.failure_info?.file_merge_id
          });
          t(F.clearAll());
          t(to({
            type: my,
            data: {
              view: RK.COULD_NOT_COMPLETE,
              mergeParams: i,
              failureInfo: {
                file_merge_id: a.id
              }
            }
          }));
          t($$N7({
            hideModal: !1,
            mergeParams: i,
            userInitiated: !1,
            reason: "handleCommitDiffResult_failed_with_error",
            error: n.message
          }));
        }
        break;
      }
    case 400:
      {
        let n;
        let r;
        switch (t($$F2({})), e.data.reason) {
          case "merge_in_progress":
            n = "FileMerge already exists";
            r = RK.COULD_NOT_COMPLETE;
            break;
          case "branch_point_mismatch":
            n = "Branch point is stale";
            r = RK.STALE_BRANCH_POINT;
            break;
          case "branch_archived":
            n = "Branch is archived";
            r = RK.BRANCH_ARCHIVED;
            break;
          case "checkpoint_mismatch":
            n = "Checkpoints not associated with source/branch files";
            r = RK.COULD_NOT_START;
            break;
          default:
            n = `Unknown 400 reason from server while creating FileMerge: ${e.data.reason}`;
            r = RK.COULD_NOT_START;
        }
        HJ(new s9("merge: received 400 error when opening transactional merge", {
          cause: Error(n)
        }), PW.ON_MERGE, i.direction, {
          file_merge_id: e.data.failure_info?.file_merge_id || null
        });
        t(F.clearAll());
        t(to({
          type: my,
          data: {
            view: r,
            mergeParams: i,
            failureInfo: e.data.failure_info || {}
          }
        }));
        t($$N7({
          hideModal: !1,
          mergeParams: i,
          userInitiated: !1,
          reason: "handleCommitDiffResult_failed_with_error",
          error: n
        }));
        break;
      }
    default:
      t($$F2({}));
      HJ(Error("merge: Encountered unknown server error while creating FileMerge record"), PW.ON_MERGE, i.direction, {
        file_merge_id: e.data?.failure_info?.file_merge_id
      });
      t(F.clearAll());
      t(to({
        type: my,
        data: {
          view: RK.COULD_NOT_START,
          mergeParams: i,
          failureInfo: {}
        }
      }));
      t($$N7({
        hideModal: !1,
        mergeParams: i,
        userInitiated: !1,
        reason: "handleCommitDiffResult_failed_with_error",
        error: "unknown server error while creating FileMerge record"
      }));
  }
};
let $$D5 = NC("CLEAR_OPEN_FILE_MERGE");
let $$L6 = NC("SET_OPEN_FILE_MERGE");
let $$F2 = NC("SET_BRANCH_MERGE_ERROR");
let $$M1 = NC("FINISH_BRANCH_MERGE");
let $$j4 = NC("BEGIN_BRANCH_MERGE");
export const Ad = $$P0;
export const E = $$M1;
export const Nu = $$F2;
export const S2 = $$R3;
export const SL = $$j4;
export const ie = $$D5;
export const nM = $$L6;
export const ov = $$N7; 
