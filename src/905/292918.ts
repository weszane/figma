import { sYL, lyf, kul } from "../figma_app/763686";
import { analyticsEventManager, trackEventAnalytics } from "../905/449184";
import { subscribeAndAwaitData } from "../905/553831";
import { renderI18nText, getI18nString } from "../905/303541";
import { F as _$$F } from "../905/302958";
import { zX } from "../905/576487";
import { nF } from "../905/350402";
import { sf } from "../905/929976";
import { yJ } from "../figma_app/78808";
import { Ce, to } from "../905/156213";
import { d1 } from "../905/766303";
import { Y5 } from "../figma_app/455680";
import { oJ } from "../905/346794";
import f, { Stx, dDF } from "../figma_app/43951";
import { wY } from "../905/753206";
import A, { m as _$$m } from "../905/294113";
import { FEditorType } from "../figma_app/53721";
import { Wo, Kn } from "../905/535806";
import { e0 } from "../905/696396";
import { S as _$$S } from "../figma_app/787550";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { K as _$$K } from "../905/807535";
import { b as _$$b, c as _$$c } from "../905/308099";
import { s as _$$s } from "../905/932270";
import { J as _$$J } from "../905/270045";
import { useAtomValueAndSetter } from "../figma_app/27355";
import N from "../vendor/73823";
import O from "../vendor/946678";
import { h as _$$h } from "../905/207101";
import { ov, S2 } from "../905/300250";
import { rY } from "../905/985490";
import { zZ, n6 } from "../905/585030";
import { cb } from "../905/760074";
import { nX } from "../905/617744";
import { Pc } from "../905/372672";
import { Ju, ZU } from "../905/102752";
import { ue, tF } from "../905/61300";
import { G as _$$G } from "../905/702115";
import { d_, yX } from "../figma_app/918700";
import { ss } from "../905/746499";
import { $l } from "../905/721248";
import { jS } from "../figma_app/557024";
import { lQ } from "../905/934246";
import J from "../vendor/338009";
import { Rs } from "../figma_app/288654";
import { oA } from "../905/723791";
import { x as _$$x } from "../905/211326";
import { s as _$$s2 } from "../905/573154";
import { HF, pW } from "../905/218608";
import { ur, jP, YL } from "../figma_app/221114";
import { Dd } from "../905/519092";
var P = N;
var D = O;
let Y = {
  [Wo.MAIN]: () => renderI18nText("collaboration.branching_force.merge_from_source_merge_conflict_radio_option_main"),
  [Wo.BRANCH]: () => renderI18nText("collaboration.branching_force.merge_from_source_merge_conflict_radio_option_branch")
};
function q(e) {
  return renderI18nText("collaboration.branching_force.merge_from_source_merge_conflict_radio_label", {
    option: jsx("span", {
      className: "branch_force_merge_modal--conflictChoiceBold---XcmF",
      children: Y[e.value]()
    })
  });
}
let $ = Ju(function (e) {
  let {
    branchKey,
    sourceKey
  } = e;
  let r = useDispatch();
  let [a, l] = useState(Wo.MAIN);
  let [d, c] = useAtomValueAndSetter(nX);
  let u = d ?? e.direction;
  _$$h(() => (c(e.direction), () => c(null)));
  let p = useSelector(e => e.fileVersion);
  let m = useSelector(e => e.currentUserOrgId);
  let h = Pc();
  let g = useContext(ss);
  let {
    diffInfo,
    error
  } = zZ(sYL.BRANCH, e.branchKey, e.sourceKey, e.direction, p, m, null, !0);
  let {
    diffInfo: _diffInfo,
    error: _error
  } = zZ(sYL.SOURCE, e.branchKey, e.sourceKey, e.direction, p, m, null, !1);
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
        cb(e);
        r(_$$F.enqueue({
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
  G && (cb(G), console.error(G), r(_$$F.enqueue({
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
  let J = u === Kn.TO_SOURCE ? _displayGroups : displayGroups;
  if (null === J || null === N) return jsx(d_, {
    onHide: Q,
    children: jsx("div", {
      className: "branch_force_merge_modal--loadingContainer--vo03-",
      children: jsx(_$$G, {
        hasLoadedDiffs: null !== J,
        hasLoadedConflictDetection: null !== N
      })
    })
  });
  if (u === Kn.TO_SOURCE) {
    let e = N.isMergeRequired ?? !1;
    return jsxs(yX, {
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
  return u === Kn.FROM_SOURCE ? jsxs(yX, {
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
      let [o, l] = D()(e, e => n[e.id] === Wo.BRANCH);
      let d = P()(o, e => ue(e, Wo.BRANCH));
      let c = P()(l, e => ue(e, Wo.MAIN));
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
      onChange: e => l(_$$K(Wo, e) ?? Wo.MAIN),
      legend: jsx(_$$s, {
        children: jsx("span", {
          className: "branch_force_merge_modal--conflictChoiceRadioLegend--onrEN",
          children: renderI18nText("collaboration.branching_force.merge_from_source_merge_conflict_label")
        })
      }),
      children: [jsx(_$$c, {
        value: Wo.MAIN,
        label: jsx(_$$J, {
          children: jsx(q, {
            value: Wo.MAIN
          })
        })
      }), jsx(_$$c, {
        value: Wo.BRANCH,
        label: jsx(_$$J, {
          children: jsx(q, {
            value: Wo.BRANCH
          })
        })
      })]
    })]
  }) : null;
}, "BranchForceMergeModal", ZU.YES);
var ee = J;
let el = Ju(function ({
  sourceKey: e,
  currentFileKey: t,
  onCheckpointSelected: i
}) {
  let n = useDispatch();
  let r = Rs(Stx, {
    fileKey: e
  });
  let [a, o] = useState(void 0);
  useEffect(() => {
    _$$S.getSourceCheckpointCreatedAt({
      currentFileKey: t
    }).then(({
      data: e
    }) => {
      o(new Date(e.created_at));
    }).catch(e => {
      n(_$$s2.error("Unable to load file versions"));
    });
  }, [t, o, n]);
  let [l, d] = useState(null);
  let c = "loading" === r.status || void 0 === a;
  let u = [];
  if ("loaded" === r.status) {
    let {
      file
    } = r.data;
    file && (u = oA(file.recentFileVersions) || []);
  }
  let m = u.filter(e => !(c || !e.checkpoint?.createdAt || new Date(e.checkpoint?.createdAt) <= a));
  let h = ee()(m, ["updatedAt"], ["desc"]);
  let g = h.map((e, t) => {
    let i = t === h.length - 1;
    let n = HF(e.view);
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
      isBranchingVersion: pW(r),
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
      n(Ce());
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
}, "IncrementalUpdateModal", ZU.YES);
let $$ed0 = nF(async (e, t) => {
  try {
    let i = await _$$S.getSourceFileUpdatedInfo({
      branchFileKey: t.branchFileKey
    });
    e.dispatch(yJ({
      file: i.data.meta.source
    }));
  } catch (e) {
    console.error("Error fetching source file");
  }
});
let $$ec5 = nF(async (e, t) => {
  if (e.getState().mirror.appModel.topLevelMode !== lyf.BRANCHING) {
    if (Y5.triggerAction("enter-branching-mode"), Y5.triggerAction("show-design-panel"), await oJ(kul.JOINED), t.force) {
      e.dispatch(to({
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
    e.dispatch(to({
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
let $$eu2 = nF(async (e, t) => {
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
    e.dispatch(_$$F.enqueue({
      message: getI18nString("collaboration.branching.waiting_for_previous_merge")
    }));
    analyticsEventManager.trackDefinedEvent("scenegraph_and_sync.branching.merge_modal_blocked", {
      reason: "file merge in progress",
      fileMergeId: d.fileMergeId
    });
    return;
  }
  await wY();
  let [c, u] = await Promise.all([subscribeAndAwaitData(dDF, {
    key: t.branchKey
  }), subscribeAndAwaitData(dDF, {
    key: t.sourceKey
  })]);
  let p = [];
  if (c.file?.hasPermission) {
    let i = t.branchKey === openFile.key;
    p.push(_$$m(t.branchKey, "", "", e.dispatch, i));
  }
  if (u.file?.hasPermission) {
    let i = t.sourceKey === openFile.key;
    p.push(_$$m(t.sourceKey, "", "", e.dispatch, i));
  }
  if (p.length > 0) {
    e.dispatch(_$$F.enqueue({
      message: getI18nString("collaboration.branching.saving_file"),
      type: "file-merge-save",
      icon: zX.SPINNER
    }));
    try {
      await Promise.all(p);
      e.dispatch(_$$F.dequeue({
        matchType: "file-merge-save"
      }));
    } catch {
      e.dispatch(_$$F.dequeue({
        matchType: "file-merge-save"
      }));
      e.dispatch(_$$F.enqueue({
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
let $$ep3 = nF((e, {
  direction: t,
  trackingContextName: i,
  force: n,
  sourceCheckpointKey: a,
  unreadCommentCount: s
}) => {
  let o = e.getState();
  let l = d1(o);
  l && l.source_file_key && (e.dispatch($$eu2({
    branchKey: l.key,
    sourceKey: l.source_file_key,
    direction: t,
    force: n,
    sourceCheckpointKey: a,
    unreadCommentCount: s
  })), t === Kn.FROM_SOURCE && trackEventAnalytics("Branch Update From Main Clicked", {
    trackingContext: i,
    fileKey: l.key,
    fileRepoId: l.file_repo_id,
    sourceCheckpointKey: a
  }));
});
let $$em1 = nF(e => {
  let {
    openFile
  } = e.getState();
  openFile && openFile.sourceFileKey && openFile.sourceCheckpointId && e.dispatch(to({
    type: el,
    data: {
      sourceKey: openFile.sourceFileKey,
      currentFileKey: openFile.key,
      onCheckpointSelected: t => {
        e.dispatch($$ep3({
          direction: Kn.FROM_SOURCE,
          trackingContextName: e0.BRANCHING_UPDATE_FROM_VERSION_MODAL,
          sourceCheckpointKey: "latest" === t ? void 0 : t
        }));
      }
    }
  }));
});
let $$eh4 = nF((e, {
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
let $$eg6 = nF((e, {
  trackingContextName: t
}) => {
  let i = e.getState();
  let n = d1(i);
  n && (e.dispatch(to({
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