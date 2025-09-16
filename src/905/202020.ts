import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../905/521428";
import { d as _$$d } from "../905/976845";
import { J } from "../905/125993";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
import { BadgeSize } from "../figma_app/919079";
import { gS, c$ } from "../figma_app/236327";
import { h1 } from "../905/986103";
import { p as _$$p } from "../905/991924";
import { getI18nString, renderI18nText } from "../905/303541";
import { WB } from "../905/761735";
import { XHR } from "../905/910117";
import { FlashActions } from "../905/573154";
import { VisualBellActions } from "../905/302958";
import { trackFileBrowserFileClick, trackFileArrayEvent } from "../figma_app/314264";
import { restoreFiles, generateUrlAlt } from "../905/760074";
import { createOptimistThunk } from "../905/350402";
import { hideDropdownAction, showDropdownThunk, selectViewAction } from "../905/929976";
import { copyShareLinkOptimistic } from "../figma_app/78808";
import { kj } from "../905/191601";
import { showModalHandler, hideModal } from "../905/156213";
import { ShareContext } from "../905/91820";
import { FEditorType } from "../figma_app/53721";
import { KindEnum } from "../905/129884";
import { e0 } from "../905/696396";
import { Ro } from "../figma_app/805373";
import { e as _$$e } from "../905/225961";
import { Cf } from "../905/504727";
import { a$ } from "../905/467351";
function g(e) {
  return e.isRenaming ? jsx(_$$p, {
    className: `renamable_title--renameInput--kVdEz text--fontPos13--xW8hS text--_fontBase--QdLsd ${e.className || ""}`,
    placeholderValue: e.placeholderValue,
    submit: e.submitTitle,
    cancel: e.cancelTitle
  }) : jsx("span", {
    className: `renamable_title--title--Z-8GR text--fontPos13--xW8hS text--_fontBase--QdLsd ellipsis--ellipsis--Tjyfa ${e.className || ""}`,
    children: e.title
  });
}
let x = createOptimistThunk(async (e, t) => {
  let i = {
    key: t.branch.key,
    name: t.name,
    updated_at: new Date().toISOString()
  };
  let n = XHR.put(`/api/files/${t.branch.key}`, i);
  await WB().optimisticallyUpdate({
    File: {
      [t.branch.key]: {
        key: t.branch.key,
        _name: t.name
      }
    }
  }, n).catch(t => {
    let i = t.data.message || getI18nString("collaboration.branching.an_error_occurred_while_renaming_this_file");
    e.dispatch(FlashActions.error(i));
  });
  trackFileBrowserFileClick("File Renamed", t.branch, {
    fileName: t.name
  });
});
let S = createOptimistThunk(async (e, t) => {
  let i = await restoreFiles(t.branches.map(e => e.key));
  "error" === i.status ? e.dispatch(FlashActions.error(i.message)) : e.dispatch(VisualBellActions.enqueue({
    type: "file_restored",
    message: getI18nString("collaboration.branching.branches_restored", {
      branchCount: t.branches.length
    })
  }));
  trackFileArrayEvent("File Restored", t.branches);
});
let w = createOptimistThunk(async (e, t) => {
  let i = XHR.del("/api/files_batch", {
    files: t.branches.map(e => ({
      key: e.key
    })),
    trashed: !0
  });
  let n = {
    File: {}
  };
  let r = new Date();
  t.branches.forEach(e => {
    let t = {
      key: e.key
    };
    t.trashedAt = r;
    n.File[e.key] = t;
  });
  try {
    let r = await WB().optimisticallyUpdate(n, i);
    if (207 === r.status) {
      try {
        let t = JSON.parse(r.response);
        e.dispatch(FlashActions.error(t.message));
      } catch (t) {
        e.dispatch(FlashActions.error(getI18nString("collaboration.branching.an_error_occurred_while_deleting_these_files")));
      }
      return;
    }
    let a = {
      text: getI18nString("collaboration.branching.undo_archive"),
      action: () => {
        e.dispatch(S({
          branches: t.branches
        }));
        e.dispatch(VisualBellActions.dequeue({}));
      }
    };
    e.dispatch(VisualBellActions.enqueue({
      type: "file_deleted",
      message: getI18nString("collaboration.branching.branch_archived"),
      button: a
    }));
  } catch ({
    response: i
  }) {
    try {
      let t = JSON.parse(i);
      e.dispatch(FlashActions.error(t.message));
    } catch (i) {
      e.dispatch(FlashActions.error(getI18nString("collaboration.branching.error_archiving_branches", {
        branchCount: t.branches.length
      })));
    }
  }
  trackFileArrayEvent("File Trashed", t.branches);
});
let U = (e, t) => e ? [t] : [];
function B(e) {
  let t = jsx("div", {
    className: "branch_row--subtitleUsername---eghJ text--fontPos11--2LvXf text--_fontBase--QdLsd ellipsis--ellipsis--Tjyfa",
    children: e.user.handle || ""
  });
  let i = useMemo(() => jsx(h1, {
    date: e.touchedAt
  }), [e.touchedAt]);
  return e.isMain || !e.isArchived ? renderI18nText("collaboration.branching.edited", {
    userHandle: t,
    relativeTimestamp: i
  }) : e.isMerged ? renderI18nText("collaboration.branching.merged_v2", {
    userHandle: t,
    relativeTimestamp: i
  }) : renderI18nText("collaboration.branching.archived_v2", {
    userHandle: t,
    relativeTimestamp: i
  });
}
export function $$V0(e) {
  let t = useDispatch();
  let i = `branch-row-${e.branch.key}`;
  let m = useSelector(e => e.dropdownShown?.type === i);
  let h = useSelector(e => !!e.dropdownShown?.data?.contextClick);
  let _ = useSelector(e => e.dropdownShown?.data?.targetRect);
  let A = useRef(null);
  let [y, b] = useState(!1);
  let {
    branch
  } = e;
  let E = !e.isMain && !e.isArchived && branch.canManage;
  let V = !e.isMain && e.isArchived && branch.canManage && (!e.isMerged || !!getFeatureFlags().branching_restore_branches);
  let G = !e.isMain && e.isArchived && branch.canManage;
  let z = !e.isMain && !e.isArchived && branch.canEdit;
  let H = [...U(E, jsx(gS, {
    onClick: () => {
      t(w({
        branches: [e.branch]
      }));
    },
    trackingProperties: {
      fileKey: e.branch.key,
      fileRepoId: e.branch.fileRepoId
    },
    children: renderI18nText("collaboration.branching.archive")
  }, "archive")), ...U(V, jsx(c$, {
    onClick: () => {
      t(S({
        branches: [e.branch]
      }));
    },
    children: renderI18nText("collaboration.branching.restore")
  }, "restore")), jsx(c$, {
    onClick: () => {
      t(copyShareLinkOptimistic({
        fileKey: e.branch.key,
        url: generateUrlAlt(e.branch, e.repo, "file").href,
        source: ShareContext.FULLSCREEN_BRANCH
      }));
    },
    children: renderI18nText("collaboration.branching.copy_link")
  }, "copy-link"), ...U(G, jsx(c$, {
    onClick: () => {
      t(showModalHandler({
        type: _$$e,
        data: {
          fileName: e.branch.name,
          onConfirm: () => t(kj({
            fileKeys: {
              [e.branch.key]: !0
            },
            userInitiated: !0
          }))
        }
      }));
    },
    children: renderI18nText("collaboration.branching.delete")
  }, "delete")), ...U(z, jsx(c$, {
    onClick: () => {
      b(!0);
    },
    children: renderI18nText("collaboration.branching.rename")
  }, "rename"))];
  return jsxs("li", {
    className: `branch_row--container--MD7zC ${e.isSelected ? "branch_row--selected--qBm47" : ""}`,
    onContextMenu: e => {
      if (e.preventDefault(), e.stopPropagation(), m) t(hideDropdownAction());else {
        let n = {
          top: e.clientY,
          right: e.clientX,
          bottom: e.clientY,
          left: e.clientX,
          width: 0,
          height: 0
        };
        t(showDropdownThunk({
          type: i,
          data: {
            targetRect: n,
            contextClick: !0
          }
        }));
      }
    },
    children: [jsxs("div", {
      className: "branch_row--mainColumn--88gdl",
      children: [jsxs("div", {
        className: "branch_row--titleRow--Ckvrd text--fontPos12--YsUAh text--_fontBase--QdLsd",
        children: [jsx(g, {
          className: "branch_row--title--3n9K0 ellipsis--ellipsis--Tjyfa",
          isRenaming: y,
          submitTitle: i => {
            b(!1);
            t(x({
              branch: e.branch,
              name: i
            }));
          },
          cancelTitle: () => {
            b(!1);
          },
          placeholderValue: e.name,
          title: e.name
        }), e.isCurrentBranch && !y && jsx("span", {
          className: "branch_row--currentBranchIndicator--78nIx",
          children: renderI18nText("collaboration.branching.current_branch")
        }), !y && jsx("div", {
          className: "branch_row--branchStatus--FFzmU",
          children: jsx(a$, {
            branchFileKey: e.branch.key,
            size: BadgeSize.SMALL
          })
        })]
      }), e.isLoadingActivity ? jsx("div", {
        className: "branch_row--activityLoading--OM839"
      }) : e.user && jsx(function (e) {
        return jsxs("div", {
          className: "branch_row--subtitleRow--VZQWb",
          children: [jsx(Ro, {
            entity: e.user,
            size: 12
          }), jsx("div", {
            className: "branch_row--subtitleActivity--c-22X",
            children: jsx(B, {
              user: e.user,
              isMain: e.isMain,
              isMerged: e.isMerged,
              isArchived: e.isArchived,
              touchedAt: e.touchedAt
            })
          })]
        });
      }, {
        user: e.user,
        isMain: e.isMain,
        isMerged: e.isMerged,
        isArchived: e.isArchived,
        touchedAt: e.touchedAt
      })]
    }), jsx("div", {
      className: "branch_row--buttonColumn--UJ-mZ",
      children: !e.isCurrentBranch && jsx(Button, {
        variant: "ghost",
        onClick: () => {
          t(hideModal());
          t(selectViewAction({
            view: "fullscreen",
            fileKey: e.branch.key,
            editorType: FEditorType.Design
          }));
          trackEventAnalytics("Open File Click", {
            fileKey: e.branch.key,
            source: e0.BRANCHES_MODAL,
            fileRepoId: e.branch.fileRepoId
          });
        },
        children: renderI18nText("collaboration.branching.open")
      })
    }), jsx("div", {
      className: "branch_row--menuColumn--XSWVZ",
      children: jsx(_$$d, {
        onClick: e => {
          if (e.stopPropagation(), e.preventDefault(), m) t(hideDropdownAction());else {
            let e = A.current;
            t(showDropdownThunk({
              type: i,
              data: {
                targetRect: e?.getBoundingClientRect() || null,
                contextClick: !1
              }
            }));
          }
        },
        "aria-label": getI18nString("collaboration.branching.options"),
        htmlAttributes: {
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": getI18nString("collaboration.branching.options")
        },
        ref: A,
        "aria-expanded": m && !h,
        children: jsx(J, {})
      })
    }), m && jsx(Cf, {
      targetRect: _,
      showPoint: !h,
      lean: h ? "right" : "left",
      leanPadding: h ? 0 : -1,
      maxWidth: 140,
      minWidth: 140,
      disableDropdownScrollContainer: !0,
      propagateCloseClick: !0,
      children: H
    })]
  });
}
export const v = $$V0;