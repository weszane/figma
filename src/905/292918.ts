import { GitReferenceType, ViewType, SchemaJoinStatus } from "../figma_app/763686";
import { analyticsEventManager, trackEventAnalytics } from "../905/449184";
import { subscribeAndAwaitData } from "../905/553831";
import { renderI18nText, getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { VisualBellIcon } from "../905/576487";
import { createOptimistThunk } from "../905/350402";
import { sf } from "../905/929976";
import { yJ } from "../figma_app/78808";
import { hideModal, showModalHandler } from "../905/156213";
import { getSelectedFile } from "../905/766303";
import { fullscreenValue } from "../figma_app/455680";
import { waitForJoinStatus } from "../905/346794";
import f, { FileVersions, FileCanEdit } from "../figma_app/43951";
import { handlePluginError } from "../905/753206";
import A, { maybeCreateSavepoint } from "../905/294113";
import { FEditorType } from "../figma_app/53721";
import { BranchType, SourceDirection } from "../905/535806";
import { e0 } from "../905/696396";
import { fileApiHandler } from "../figma_app/787550";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findMatchingValue } from "../905/807535";
import { b as _$$b, c as _$$c } from "../905/308099";
import { s as _$$s } from "../905/932270";
import { Label } from "../905/270045";
import { useAtomValueAndSetter } from "../figma_app/27355";
import N from "../vendor/73823";
import O from "../vendor/946678";
import { h as _$$h } from "../905/207101";
import { ov, S2 } from "../905/300250";
import { rY } from "../905/985490";
import { zZ, n6 } from "../905/585030";
import { handleModalError } from "../905/760074";
import { currentSelectionAtom } from "../905/617744";
import { selectUser } from "../905/372672";
import { registerModal, ModalSupportsBackground } from "../905/102752";
import { ue, tF } from "../905/61300";
import { G as _$$G } from "../905/702115";
import { ModalContainer, ConfirmationModal2 } from "../figma_app/918700";
import { ss } from "../905/746499";
import { $l } from "../905/721248";
import { jS } from "../figma_app/557024";
import { lQ } from "../905/934246";
import J from "../vendor/338009";
import { useSubscription } from "../figma_app/288654";
import { getResourceDataOrFallback } from "../905/723791";
import { x as _$$x } from "../905/211326";
import { FlashActions } from "../905/573154";
import { getViewName, isBranchView } from "../905/218608";
import { ur, jP, YL } from "../figma_app/221114";
import { Dd } from "../905/519092";
var P = N;
var D = O;
let Y = {
  [BranchType.MAIN]: () => renderI18nText("collaboration.branching_force.merge_from_source_merge_conflict_radio_option_main"),
  [BranchType.BRANCH]: () => renderI18nText("collaboration.branching_force.merge_from_source_merge_conflict_radio_option_branch")
};
function q(e) {
  return renderI18nText("collaboration.branching_force.merge_from_source_merge_conflict_radio_label", {
    option: jsx("span", {
      className: "branch_force_merge_modal--conflictChoiceBold---XcmF",
      children: Y[e.value]()
    })
  });
}
let $ = registerModal(function (e) {
  let {
    branchKey,
    sourceKey
  } = e;
  let r = useDispatch();
  let [a, l] = useState(BranchType.MAIN);
  let [d, c] = useAtomValueAndSetter(currentSelectionAtom);
  let u = d ?? e.direction;
  _$$h(() => (c(e.direction), () => c(null)));
  let p = useSelector(e => e.fileVersion);
  let m = useSelector(e => e.currentUserOrgId);
  let h = selectUser();
  let g = useContext(ss);
  let {
    diffInfo,
    error
  } = zZ(GitReferenceType.BRANCH, e.branchKey, e.sourceKey, e.direction, p, m, null, !0);
  let {
    diffInfo: _diffInfo,
    error: _error
  } = zZ(GitReferenceType.SOURCE, e.branchKey, e.sourceKey, e.direction, p, m, null, !1);
  let [v, I] = useState(!1);
  let [N, O] = useState(null);
  useEffect(() => {
    let t = !!(null != _diffInfo.styleKeyToLibraryKey && null != diffInfo.styleKeyToLibraryKey);
    if (!v && t && null == N) {
      let t = e.sourceKey;
      let i = e.branchKey;
      I(!0);
      try {
        let e = rY.getConflicts({
          branchKey: i,
          sourceKey: t,
          branchModalTrackingId: g
        });
        O(e);
        I(!1);
      } catch (e) {
        handleModalError(e);
        r(VisualBellActions.enqueue({
          message: "An error occurred while calculating conflicts",
          error: !0
        }));
      }
    }
  }, [_diffInfo.styleKeyToLibraryKey, diffInfo.styleKeyToLibraryKey, N, v, r, e.branchKey, e.sourceKey, g, e.direction]);
  let G = error ?? _error;
  let {
    checkpointDiff,
    displayGroups
  } = A;
  let {
    checkpointDiff: _checkpointDiff,
    displayGroups: _displayGroups
  } = f;
  let Q = () => {
    r(ov({
      hideModal: !0,
      mergeParams: {
        branchKey,
        sourceKey,
        direction: u,
        branchModalTrackingId: g
      },
      userInitiated: !0,
      reason: "force_merge_modal_closed"
    }));
  };
  G && (handleModalError(G), console.error(G), r(VisualBellActions.enqueue({
    message: getI18nString("collaboration.branching.error_generic"),
    error: !0
  })), r(ov({
    hideModal: !0,
    mergeParams: {
      branchKey,
      sourceKey,
      direction: u,
      branchModalTrackingId: g
    },
    userInitiated: !1,
    reason: "useDiffs_failed_with_error",
    error: G.message
  })));
  let J = u === SourceDirection.TO_SOURCE ? _displayGroups : displayGroups;
  if (null === J || null === N) return jsx(ModalContainer, {
    onHide: Q,
    children: jsx("div", {
      className: "branch_force_merge_modal--loadingContainer--vo03-",
      children: jsx(_$$G, {
        hasLoadedDiffs: null !== J,
        hasLoadedConflictDetection: null !== N
      })
    })
  });
  if (u === SourceDirection.TO_SOURCE) {
    let e = N.isMergeRequired ?? !1;
    return jsxs(ConfirmationModal2, {
      confirmationTitle: renderI18nText("collaboration.branching_force.merge_to_source_title"),
      destructive: !0,
      confirmText: renderI18nText("collaboration.branching_force.merge_to_source_confirm"),
      onConfirm: () => {
        _checkpointDiff && r(S2({
          mergeParams: {
            branchKey,
            sourceKey,
            direction: u,
            branchModalTrackingId: g
          },
          checkpointDiff: _checkpointDiff,
          pendingMessage: getI18nString("collaboration.branching.merge_pending"),
          successMessage: getI18nString("collaboration.branching.merge_success"),
          user: h
        }));
      },
      onCancel: Q,
      onHide: Q,
      disableConfirm: e,
      children: [renderI18nText("collaboration.branching_force.merge_to_source_description"), e && jsx("div", {
        className: "branch_force_merge_modal--blockedMergeText--PYABM",
        children: renderI18nText("collaboration.branching_force.merge_to_source_blocked_description")
      })]
    });
  }
  return u === SourceDirection.FROM_SOURCE ? jsxs(ConfirmationModal2, {
    confirmationTitle: renderI18nText("collaboration.branching_force.merge_from_source_title"),
    destructive: !0,
    confirmText: renderI18nText("collaboration.branching_force.merge_from_source_confirm"),
    onConfirm: () => {
      if (null === N || !checkpointDiff) return;
      let e = N.conflictGroups;
      let n = e.reduce((e, t) => ({
        ...e,
        [t.id]: a
      }), {}) ?? null;
      let [o, l] = D()(e, e => n[e.id] === BranchType.BRANCH);
      let d = P()(o, e => ue(e, BranchType.BRANCH));
      let c = P()(l, e => ue(e, BranchType.MAIN));
      let p = tF(_diffInfo.displayGroups || [], e, N.identicalChunkGUIDs);
      n6(c, d, N.nonConflictingSourceChunkGUIDs, N.nonConflictingBranchChunkGUIDs, N.identicalChunkGUIDs);
      r(S2({
        mergeParams: {
          branchKey,
          sourceKey,
          direction: u
        },
        checkpointDiff,
        pendingMessage: getI18nString("collaboration.branching.update_pending"),
        successMessage: getI18nString("collaboration.branching.update_success"),
        conflictResolutionDetails: {
          mainPickGroups: l.length,
          branchPickGroups: o.length,
          nonConflictingGroups: p.length
        },
        user: h,
        branchModalTrackingId: g
      }));
    },
    onCancel: Q,
    onHide: Q,
    children: [jsx("div", {
      className: "branch_force_merge_modal--conflictChoiceRadioGroupHeader--Zhm5w",
      children: renderI18nText("collaboration.branching_force.merge_from_source_description")
    }), jsxs(_$$b, {
      value: a,
      onChange: e => l(findMatchingValue(BranchType, e) ?? BranchType.MAIN),
      legend: jsx(_$$s, {
        children: jsx("span", {
          className: "branch_force_merge_modal--conflictChoiceRadioLegend--onrEN",
          children: renderI18nText("collaboration.branching_force.merge_from_source_merge_conflict_label")
        })
      }),
      children: [jsx(_$$c, {
        value: BranchType.MAIN,
        label: jsx(Label, {
          children: jsx(q, {
            value: BranchType.MAIN
          })
        })
      }), jsx(_$$c, {
        value: BranchType.BRANCH,
        label: jsx(Label, {
          children: jsx(q, {
            value: BranchType.BRANCH
          })
        })
      })]
    })]
  }) : null;
}, "BranchForceMergeModal", ModalSupportsBackground.YES);
var ee = J;
let el = registerModal(function ({
  sourceKey: e,
  currentFileKey: t,
  onCheckpointSelected: i
}) {
  let n = useDispatch();
  let r = useSubscription(FileVersions, {
    fileKey: e
  });
  let [a, o] = useState(void 0);
  useEffect(() => {
    fileApiHandler.getSourceCheckpointCreatedAt({
      currentFileKey: t
    }).then(({
      data: e
    }) => {
      o(new Date(e.created_at));
    }).catch(e => {
      n(FlashActions.error("Unable to load file versions"));
    });
  }, [t, o, n]);
  let [l, d] = useState(null);
  let c = "loading" === r.status || void 0 === a;
  let u = [];
  if ("loaded" === r.status) {
    let {
      file
    } = r.data;
    file && (u = getResourceDataOrFallback(file.recentFileVersions) || []);
  }
  let m = u.filter(e => !(c || !e.checkpoint?.createdAt || new Date(e.checkpoint?.createdAt) <= a));
  let h = ee()(m, ["updatedAt"], ["desc"]);
  let g = h.map((e, t) => {
    let i = t === h.length - 1;
    let n = getViewName(e.view);
    let r = {
      user: e.user,
      label: e.label || void 0,
      view: n
    };
    let a = ur(r);
    return jsx(jP, {
      dispatch: lQ,
      displayText: jsx(YL, {
        item: r
      }),
      editorType: null,
      first: !1,
      isActive: l === e,
      isAllowedToChangeVersion: () => !0,
      isBranchingVersion: isBranchView(r),
      isLinked: !1,
      label: e.label || void 0,
      last: i,
      onSelect: () => d(e),
      showAutosaves: !0,
      text: a,
      time: e.updatedAt,
      user: e.user?.name || void 0,
      userUrl: e.label && e.user?.imgUrl || null,
      versionId: e.id,
      view: n
    }, e.id);
  });
  let _ = jsx(jP, {
    dispatch: lQ,
    displayText: renderI18nText("collaboration.feedback.incremental_update_modal.latest_version"),
    editorType: null,
    first: !0,
    isActive: "latest" === l,
    isAllowedToChangeVersion: () => !0,
    isLinked: !0,
    label: "Latest version",
    last: !1,
    onSelect: () => d("latest"),
    text: "Latest version",
    userUrl: null,
    versionId: "current_version",
    view: "file_default"
  });
  return jsx(Dd, {
    title: getI18nString("collaboration.feedback.incremental_update_modal.title"),
    maxWidth: 528,
    minWidth: 528,
    fixedCenter: !0,
    onClose: () => {
      n(hideModal());
    },
    onConfirm: () => {
      if (null === l) return;
      let e = "latest" === l ? "latest" : l.checkpoint?.key;
      e && i(e);
    },
    focus: !0,
    disabled: null === l,
    confirmText: getI18nString("collaboration.feedback.incremental_update_modal.confirm"),
    children: jsx(_$$x, {
      isLoading: c,
      children: () => jsxs("ol", {
        className: "incremental_update_modal--container--EpZfV",
        children: [_, g]
      })
    })
  });
}, "IncrementalUpdateModal", ModalSupportsBackground.YES);
let $$ed0 = createOptimistThunk(async (e, t) => {
  try {
    let i = await fileApiHandler.getSourceFileUpdatedInfo({
      branchFileKey: t.branchFileKey
    });
    e.dispatch(yJ({
      file: i.data.meta.source
    }));
  } catch (e) {
    console.error("Error fetching source file");
  }
});
let $$ec5 = createOptimistThunk(async (e, t) => {
  if (e.getState().mirror.appModel.topLevelMode !== ViewType.BRANCHING) {
    if (fullscreenValue.triggerAction("enter-branching-mode"), fullscreenValue.triggerAction("show-design-panel"), await waitForJoinStatus(SchemaJoinStatus.JOINED), t.force) {
      e.dispatch(showModalHandler({
        type: $,
        data: {
          branchKey: t.branchKey,
          sourceKey: t.sourceKey,
          direction: t.direction,
          backFileKey: t.backFileKey
        }
      }));
      return;
    }
    e.dispatch(showModalHandler({
      type: $l,
      data: {
        branchKey: t.branchKey,
        sourceKey: t.sourceKey,
        direction: t.direction,
        backFileKey: t.backFileKey,
        sourceCheckpointKey: t.sourceCheckpointKey,
        unreadCommentCount: t.unreadCommentCount,
        readOnly: t.readOnly
      }
    }));
  }
});
let $$eu2 = createOptimistThunk(async (e, t) => {
  let i = e.getState();
  let {
    openFile
  } = i;
  if (!openFile) {
    analyticsEventManager.trackDefinedEvent("scenegraph_and_sync.branching.merge_modal_blocked", {
      reason: "no open file"
    });
    return;
  }
  let d = i.openFileMerge;
  if (null != d) {
    e.dispatch(VisualBellActions.enqueue({
      message: getI18nString("collaboration.branching.waiting_for_previous_merge")
    }));
    analyticsEventManager.trackDefinedEvent("scenegraph_and_sync.branching.merge_modal_blocked", {
      reason: "file merge in progress",
      fileMergeId: d.fileMergeId
    });
    return;
  }
  await handlePluginError();
  let [c, u] = await Promise.all([subscribeAndAwaitData(FileCanEdit, {
    key: t.branchKey
  }), subscribeAndAwaitData(FileCanEdit, {
    key: t.sourceKey
  })]);
  let p = [];
  if (c.file?.hasPermission) {
    let i = t.branchKey === openFile.key;
    p.push(maybeCreateSavepoint(t.branchKey, "", "", e.dispatch, i));
  }
  if (u.file?.hasPermission) {
    let i = t.sourceKey === openFile.key;
    p.push(maybeCreateSavepoint(t.sourceKey, "", "", e.dispatch, i));
  }
  if (p.length > 0) {
    e.dispatch(VisualBellActions.enqueue({
      message: getI18nString("collaboration.branching.saving_file"),
      type: "file-merge-save",
      icon: VisualBellIcon.SPINNER
    }));
    try {
      await Promise.all(p);
      e.dispatch(VisualBellActions.dequeue({
        matchType: "file-merge-save"
      }));
    } catch {
      e.dispatch(VisualBellActions.dequeue({
        matchType: "file-merge-save"
      }));
      e.dispatch(VisualBellActions.enqueue({
        message: getI18nString("collaboration.branching.error_saving_file"),
        error: !0
      }));
      analyticsEventManager.trackDefinedEvent("scenegraph_and_sync.branching.merge_modal_blocked", {
        reason: "error saving file"
      });
      return;
    }
  }
  let m = {
    branchKey: t.branchKey,
    sourceKey: t.sourceKey,
    direction: t.direction,
    force: t.force,
    sourceCheckpointKey: t.sourceCheckpointKey,
    unreadCommentCount: t.unreadCommentCount,
    readOnly: i.mirror.appModel.isReadOnly
  };
  e.dispatch($$ec5(m));
});
let $$ep3 = createOptimistThunk((e, {
  direction: t,
  trackingContextName: i,
  force: n,
  sourceCheckpointKey: a,
  unreadCommentCount: s
}) => {
  let o = e.getState();
  let l = getSelectedFile(o);
  l && l.source_file_key && (e.dispatch($$eu2({
    branchKey: l.key,
    sourceKey: l.source_file_key,
    direction: t,
    force: n,
    sourceCheckpointKey: a,
    unreadCommentCount: s
  })), t === SourceDirection.FROM_SOURCE && trackEventAnalytics("Branch Update From Main Clicked", {
    trackingContext: i,
    fileKey: l.key,
    fileRepoId: l.file_repo_id,
    sourceCheckpointKey: a
  }));
});
let $$em1 = createOptimistThunk(e => {
  let {
    openFile
  } = e.getState();
  openFile && openFile.sourceFileKey && openFile.sourceCheckpointId && e.dispatch(showModalHandler({
    type: el,
    data: {
      sourceKey: openFile.sourceFileKey,
      currentFileKey: openFile.key,
      onCheckpointSelected: t => {
        e.dispatch($$ep3({
          direction: SourceDirection.FROM_SOURCE,
          trackingContextName: e0.BRANCHING_UPDATE_FROM_VERSION_MODAL,
          sourceCheckpointKey: "latest" === t ? void 0 : t
        }));
      }
    }
  }));
});
let $$eh4 = createOptimistThunk((e, {
  trackingContextName: t
}) => {
  let i = e.getState().openFile;
  if (!i || !i.sourceFile) return;
  let n = i.sourceFile;
  e.dispatch(sf({
    view: "fullscreen",
    fileKey: n.key,
    editorType: FEditorType.Design
  }));
  trackEventAnalytics("Open File Click", {
    trackingContext: t,
    fileKey: n.key,
    fileRepoId: n.fileRepoId
  });
});
let $$eg6 = createOptimistThunk((e, {
  trackingContextName: t
}) => {
  let i = e.getState();
  let n = getSelectedFile(i);
  n && (e.dispatch(showModalHandler({
    type: jS
  })), trackEventAnalytics("View Branches Clicked", {
    trackingContext: t,
    fileKey: n.key,
    fileRepoId: n.file_repo_id
  }));
});
export const Z = $$ed0;
export const dZ = $$em1;
export const Cp = $$eu2;
export const hx = $$ep3;
export const oz = $$eh4;
export const kq = $$ec5;
export const o5 = $$eg6;