import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useDispatch, useSelector } from "../vendor/514228";
import { L as _$$L } from "../905/477111";
import { getFeatureFlags } from "../905/601108";
import o from "classnames";
import { useMemo, useEffect, useState, useContext } from "react";
import { ServiceCategories as _$$e } from "../905/165054";
import { ViewType } from "../figma_app/763686";
import { trackEventAnalytics } from "../905/449184";
import { Rs } from "../figma_app/288654";
import { oA } from "../905/723791";
import { reportError } from "../905/11";
import { getI18nString } from "../905/303541";
import { _ as _$$_ } from "../905/170564";
import { Q } from "../905/463586";
import { hx } from "../905/292918";
import { m0 } from "../figma_app/976749";
import { cb, Ns, HJ, Kz } from "../905/760074";
import { op7, grH } from "../figma_app/43951";
import { Kn, PW } from "../905/535806";
import { e0 } from "../905/696396";
import { $l } from "../905/721248";
import { Pt } from "../figma_app/806412";
import { W as _$$W } from "../905/95038";
import { Um } from "../905/848862";
import { y as _$$y } from "../905/725962";
import { throwTypeError } from "../figma_app/465776";
import { ZC } from "../figma_app/39751";
import { F as _$$F } from "../905/302958";
import { zX } from "../905/576487";
import { ie, ov } from "../905/300250";
import { T as _$$T } from "../figma_app/640519";
import { showModalHandler } from "../905/156213";
import { ss } from "../905/746499";
import { my, RK } from "../905/561832";
import { q5, l3 } from "../figma_app/516028";
import { iZ } from "../905/372672";
import { l as _$$l, O as _$$O } from "../figma_app/471586";
import { eg, IS, o3 } from "../figma_app/452252";
import { DF } from "../figma_app/146384";
var l = o;
function S(e) {
  let t = Number(e);
  return Number.isNaN(t) ? (cb(Error("Invalid checkpoint id found in repo data")), null) : t;
}
function j(e) {
  let t = m0();
  let {
    openFile,
    modalShown,
    topLevelMode,
    dispatch
  } = e;
  let {
    canEdit,
    key,
    fileRepoId
  } = i;
  let j = function (e) {
    let t = e?.fileRepoId || "";
    let i = Rs(op7, {
      repoId: t
    });
    return useMemo(() => {
      if ("loaded" !== i.status || !t) return !1;
      let {
        repo
      } = i.data;
      let n = i.data.repo?.files;
      if (repo && Ns(e, repo)) return !1;
      if (null == repo || !n) {
        reportError(_$$e.SCENEGRAPH_AND_SYNC, Error("useUpdatesAvailableFromMain called with invalid repo or repo files data"));
        return !1;
      }
      let a = n.find(t => t.key === e.key);
      let s = n.find(e => Ns(e, repo));
      if (!a || !s) {
        reportError(_$$e.SCENEGRAPH_AND_SYNC, Error("useUpdatesAvailableFromMain called with invalid branch or source file data"));
        return !1;
      }
      if (a.sourceCheckpointId === s.checkpointId) return !1;
      let o = oA(s.recentFileVersions) || [];
      if (0 === o.length || !a.sourceCheckpointId) return !1;
      let l = S(a.sourceCheckpointId);
      if (null === l) return !1;
      let d = o.filter(e => {
        let {
          user,
          checkpoint
        } = e;
        if (!checkpoint || user.isSystemUser) return !1;
        let {
          id,
          meta
        } = checkpoint;
        let a = S(id);
        if (null === a || a <= l) return !1;
        if (null === meta || null === meta.editCounts || void 0 === meta.editCounts) return !0;
        let s = function (e) {
          try {
            return Object.fromEntries(Object.entries(e).map(([e, t]) => {
              let i = t && t.version_history_count ? {
                version_history_count: parseInt(t.version_history_count)
              } : {
                version_history_count: 0
              };
              return [e, i];
            }));
          } catch (e) {
            cb(Error("Invalid edit count found in repo data"));
            return null;
          }
        }(meta.editCounts);
        return null !== s && Object.values(s).some(e => e.version_history_count > 0);
      });
      return !!d && d.length > 0;
    }, [e, t, i]);
  }(openFile);
  useEffect(() => {
    if (t && j) {
      dispatch(Q.dequeue({
        type: _$$_.BRANCHING_SOURCE_FILE_UPDATED
      }));
      return;
    }
    canEdit && modalShown?.type !== $l.type && topLevelMode !== ViewType.BRANCHING && j ? (trackEventAnalytics("Branch Update Alert", {
      action: "Shown",
      fileKey: key,
      fileRepoId
    }), dispatch(Q.enqueue({
      notification: {
        type: _$$_.BRANCHING_SOURCE_FILE_UPDATED,
        message: getI18nString("collaboration.branching.updates_available_from_main_file"),
        acceptCallback: () => {
          dispatch(hx({
            direction: Kn.FROM_SOURCE,
            trackingContextName: e0.BRANCHING_UPDATE_NOTIFICATION
          }));
          trackEventAnalytics("Branch Update Alert", {
            action: "Update",
            fileKey: key,
            fileRepoId
          });
        },
        dismissCallback: () => {
          trackEventAnalytics("Branch Update Alert", {
            action: "Dismiss",
            fileKey: key,
            fileRepoId
          });
        }
      }
    }))) : dispatch(Q.dequeue({
      type: _$$_.BRANCHING_SOURCE_FILE_UPDATED
    }));
  }, [canEdit, key, fileRepoId, modalShown, topLevelMode, j, dispatch, t]);
  return null;
}
var G = (e => (e[e.NoMerges = 0] = "NoMerges", e[e.MergeInProgress = 1] = "MergeInProgress", e[e.MergeComplete = 2] = "MergeComplete", e[e.MergeError = 3] = "MergeError", e[e.MergeTimeout = 4] = "MergeTimeout", e))(G || {});
function K(e) {
  return null === e.mergeResultCheckpointId;
}
function H({
  repoId: e,
  openFileKey: t,
  currentUserId: i,
  appMergingStatus: r,
  openFileMerge: a
}) {
  var s;
  let o = function ({
    repoId: e,
    currentUserId: t,
    appMergingStatus: i,
    openFileMerge: r
  }) {
    let n = Rs(grH, {
      repoId: e
    });
    let [a, s] = useState(0);
    let [o, l] = useState();
    useEffect(() => {
      if ("loaded" === n.status) {
        let e;
        let i = n.data.repo?.files?.find(e => e.fileMerges.find(e => e.id === r?.fileMergeId && e.userId === t && K(e)));
        r && (e = n.data.repo?.files?.find(e => e.fileMerges.find(e => e.id === r.fileMergeId && e.userId === t && !K(e))));
        i ? (0 === a || 2 === a) && (l(i), s(1)) : 1 === a && e ? (l(e), s(2)) : 0 === a && e ? (l(e), s(2)) : (3 === a || 4 === a) && (l(e || o), s(2));
      }
    }, [n, a, o, r, t]);
    useEffect(() => {
      i === _$$y.MERGING_ERROR ? s(3) : 3 === a && i === _$$y.NOT_MERGING && s(0);
    }, [a, i]);
    useEffect(() => {
      let e;
      if (1 === a ? e = setTimeout(() => {
        s(4);
      }, 3e4) : 2 === a && (e = setTimeout(() => {
        s(0);
        l(void 0);
      }, 3e3)), void 0 !== e) return () => clearTimeout(e);
    }, [t, a, o]);
    return {
      state: a,
      mergeFile: o
    };
  }({
    repoId: e,
    currentUserId: i,
    appMergingStatus: r,
    openFileMerge: a
  });
  let l = ZC(o);
  let c = function (e, t, i) {
    switch (t) {
      case 0:
      default:
        return;
      case 1:
      case 3:
      case 4:
        return i?.fileMerges.find(t => t.userId === e && K(t));
      case 2:
        return i?.fileMerges.find(t => t.userId === e && !K(t));
    }
  }(i, o.state, o.mergeFile);
  let u = useDispatch();
  let m = useContext(ss);
  let [f, _] = useState(!0);
  useEffect(() => {
    let e = () => {
      _(!0);
    };
    let t = () => {
      _(!1);
    };
    window.addEventListener("focus", e);
    window.addEventListener("blur", t);
    return () => {
      window.removeEventListener("focus", e);
      window.removeEventListener("blur", t);
    };
  }, [_]);
  let x = f && (o?.state === 3 || o?.state === 4 || (s = o?.mergeFile, c?.direction === 0 ? s?.sourceFileKey === t : s?.key === t));
  let y = useMemo(() => o?.state !== 2 || l?.state === 3 ? null : {
    icon: zX.CHECK,
    type: "file-merge-submit",
    message: c?.direction === 0 ? getI18nString("collaboration.branching.merge_success") : getI18nString("collaboration.branching.update_success"),
    button: c?.direction === 0 ? {
      text: getI18nString("collaboration.branching.edit_merge_description"),
      action: () => {
        u(_$$T({
          fileKey: t,
          versionId: c?.mergeResultFileversionId
        }));
        trackEventAnalytics("Merge Finished Edit Description Clicked", {
          branchKey: o.mergeFile?.key,
          sourceKey: o.mergeFile?.sourceFileKey
        });
      }
    } : void 0,
    timeoutOverride: 1e4
  }, [u, c?.direction, c?.mergeResultFileversionId, o.mergeFile?.key, o.mergeFile?.sourceFileKey, o.state, t, l?.state]);
  useEffect(() => {
    if (0 === o.state || x || u(_$$F.clearAll()), 0 === o.state && (!l || l?.state === 2)) {
      u(_$$F.clearAll());
      return;
    }
    if (4 === o.state && l && 1 === l.state && l.mergeFile) {
      let e = o.mergeFile.key === t ? Kn.FROM_SOURCE : Kn.TO_SOURCE;
      u(_$$F.clearAll());
      u(showModalHandler({
        type: my,
        data: {
          view: RK.TIMED_OUT,
          mergeParams: {
            branchKey: o.mergeFile.key,
            sourceKey: o.mergeFile.sourceFileKey,
            direction: e
          },
          failureInfo: {
            file_merge_id: c.id
          }
        }
      }));
    }
    y && u(_$$F.enqueue(y));
    let e = c?.direction === 0 ? Kn.TO_SOURCE : Kn.FROM_SOURCE;
    if (l && 1 === l.state && (3 === o.state || 4 === o.state)) {
      let t;
      switch (o.state) {
        case 3:
          t = Error("useMergeStatus: Backend merge error");
          break;
        case 4:
          t = Error("useMergeStatus: Open merge was not closed in 30 seconds");
          break;
        default:
          throwTypeError(o.state);
      }
      HJ(t, PW.ON_MERGE, e, {
        file_merge_id: c?.id
      });
    }
    if ((l?.state === 1 || l?.state === 0) && 2 === o.state) {
      let t = {
        branchKey: o.mergeFile.key,
        direction: e,
        sourceKey: o.mergeFile.sourceFileKey,
        branchModalTrackingId: m
      };
      u(ie({}));
      u(ov({
        hideModal: !0,
        mergeParams: t,
        userInitiated: !0,
        reason: "merge_complete"
      }));
    }
  }, [u, c, o.mergeFile, o.state, t, l, x, y, m]);
  return null;
}
let q = "filename_view--renaming--fsHo8";
export function $$X0(e) {
  let t = iZ();
  let i = q5();
  let o = i?.repo;
  let d = !!(i && o && Ns(i, o));
  let c = !!(i && Kz(i));
  let u = !!i && DF(i, t);
  let p = useSelector(e => e.isRenaming);
  let h = Um()?.type === eg;
  let m = useSelector(e => e.mergingStatus);
  let f = useSelector(e => e.openFileMerge);
  let g = useSelector(e => e.mirror.appModel.topLevelMode);
  let _ = useSelector(e => e.modalShown);
  let x = useDispatch();
  let y = l3();
  let b = y?.ownerRole?.userId === t?.id;
  let v = i?.project?.activeProjectResourceConnections?.[0];
  let E = !i?.teamId && !i?.parentOrgId;
  let T = getFeatureFlags().dtm_deprecation_pre_migration_onboarding && E && !b;
  return jsxs("div", {
    className: l()("filename_view--filenameView--oktvS", {
      [q]: p
    }),
    children: [c && jsx("span", {
      "data-testid": "branch-icon",
      className: "filename_view--branchIcon--QuC5N",
      children: jsx(_$$L, {})
    }), jsx("span", {
      className: l()("filename_view--filenameText--dN0ll", {
        [q]: p,
        "filename_view--dropdownOpen--WdeTr": h || e.isDropdownVisibleWithDelay,
        "filename_view--enableSecondaryHover--FeJmc": !p,
        "filename_view--shouldShowFileMenu--Xd8rw": !e.shouldShowFileMenu
      }),
      onMouseEnter: () => {
        e.setFileNameIsHovered?.(!0);
      },
      onMouseLeave: () => {
        e.setFileNameIsHovered?.(!1);
      },
      "data-onboarding-key": T ? _$$l : void 0,
      children: d && o ? jsx(IS, {
        dispatch: x,
        user: t,
        repo: o,
        canRename: u,
        isRenaming: p,
        dataTestId: "repo_name_data_test_id"
      }) : jsx(o3, {
        recordingKey: Pt(e.recordingKey, "fileName")
      })
    }), e.shouldShowConnectedBadge && v && jsx(_$$W, {
      hostPlanName: v.hostPlanName,
      connectedPlanName: v.connectedPlanName
    }), i?.fileRepoId && t?.id && jsxs(Fragment, {
      children: [jsx(j, {
        openFile: i,
        modalShown: _,
        topLevelMode: g,
        dispatch: x
      }), jsx(H, {
        repoId: i.fileRepoId,
        openFileKey: i.key,
        currentUserId: t.id,
        appMergingStatus: m,
        openFileMerge: f
      })]
    }), T && jsx(_$$O, {
      isOwner: !1
    })]
  });
}
export const n = $$X0;