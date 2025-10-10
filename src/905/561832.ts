import { useContext } from "react";
import { useDispatch } from "react-redux";
import { jsx, jsxs } from "react/jsx-runtime";
import { ModalSupportsBackground, registerModal } from "../905/102752";
import { hideModal } from "../905/156213";
import { handleBranchMergeThunk } from "../905/292918";
import { finishBranchMerge, clearOpenFileMerge, setBranchMergeError, handleBranchModalExit } from "../905/300250";
import { VisualBellActions } from "../905/302958";
import { getI18nString, renderI18nText } from "../905/303541";
import { waitForJoinStatus } from "../905/346794";
import { Link } from "../905/438674";
import { trackEventAnalytics } from "../905/449184";
import { Button } from "../905/521428";
import { CPPEventType, SourceDirection } from "../905/535806";
import { VisualBellIcon } from "../905/576487";
import { customHistory } from "../905/612521";
import { logger } from "../905/651849";
import { TrackingKeyEnum } from "../905/696396";
import { Point } from "../905/736624";
import { ss } from "../905/746499";
import { DraggableModalManager } from "../905/748636";
import { handleError } from "../905/760074";
import { useSingleEffect } from "../905/791079";
import { sendWithRetry } from "../905/910117";
import { selectViewAction } from "../905/929976";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { FEditorType } from "../figma_app/53721";
import { SchemaJoinStatus } from "../figma_app/763686";
import { TrackingProvider } from "../figma_app/831799";
var $$P1 = (e => (e[e.TIMED_OUT = 0] = "TIMED_OUT", e[e.COULD_NOT_START = 1] = "COULD_NOT_START", e[e.BRANCH_ARCHIVED = 2] = "BRANCH_ARCHIVED", e[e.STALE_BRANCH_POINT = 3] = "STALE_BRANCH_POINT", e[e.COULD_NOT_COMPLETE = 4] = "COULD_NOT_COMPLETE", e))($$P1 || {});
let O = async (e, t, i) => {
  e.dispatch(setBranchMergeError({}));
  e.dispatch(VisualBellActions.enqueue({
    message: t,
    icon: VisualBellIcon.SPINNER,
    type: "file-merge-submit"
  }));
  await sendWithRetry.put(`/api/file_merge/${e.failureInfo.file_merge_id}`, {
    closed: !0
  }).catch(t => {
    t.status === 400 && (logger.warn(t), handleError(new Error(t?.data?.message || "Unknown error"), CPPEventType.ON_MERGE, e.mergeParams.direction, {
      file_merge_id: e.failureInfo.file_merge_id
    }));
  });
  await waitForJoinStatus(SchemaJoinStatus.JOINED).then(() => {
    e.dispatch(VisualBellActions.enqueue({
      message: i,
      icon: VisualBellIcon.CHECK,
      type: "file-merge-submit"
    }));
    e.dispatch(clearOpenFileMerge({}));
  });
};
let D = async (e, t, i) => {
  e.dispatch(setBranchMergeError({}));
  e.dispatch(VisualBellActions.enqueue({
    message: t,
    icon: VisualBellIcon.SPINNER,
    type: "file-merge-submit"
  }));
  await sendWithRetry.del(`/api/file_merge/${e.failureInfo.file_merge_id}`);
  await waitForJoinStatus(SchemaJoinStatus.JOINED).then(() => {
    e.dispatch(VisualBellActions.enqueue({
      message: i,
      icon: VisualBellIcon.CHECK,
      type: "file-merge-submit"
    }));
    e.dispatch(clearOpenFileMerge({}));
  });
};
let L = e => {
  e.mergeParams.direction === SourceDirection.TO_SOURCE ? e.dispatch(selectViewAction({
    view: "fullscreen",
    fileKey: e.mergeParams.branchKey,
    editorType: FEditorType.Design,
    mergeParams: {
      ...e.mergeParams,
      mergeOnFileOpen: !1
    }
  })) : e.dispatch(handleBranchMergeThunk(e.mergeParams));
};
let F = (e, t, i) => {
  let n;
  let r;
  let a = ["pending", "success"];
  let s = t === SourceDirection.TO_SOURCE ? "merge" : "update";
  let [o, l] = a.map(e => getI18nString(`collaboration.branching.merge_error.confirm_${s}_${e}`));
  let [d, c] = a.map(e => getI18nString(`collaboration.branching.merge_error.cancel_${s}_${e}`));
  let [p, m] = a.map(e => getI18nString(`collaboration.branching.merge_error.cancel_previous_${s}_${e}`));
  switch (e) {
    case 0:
      n = renderI18nText(`collaboration.branching.merge_error.review_and_confirm_${s}_description`);
      return {
        title: renderI18nText("collaboration.branching.merge_error.review_and_confirm"),
        description: n,
        primaryButtonText: renderI18nText("collaboration.branching.merge_error.confirm"),
        secondaryButtonText: renderI18nText("collaboration.branching.merge_error.cancel"),
        primaryAction: async e => {
          await O(e, o, l);
        },
        secondaryAction: async e => {
          await D(e, d, c);
        }
      };
    case 1:
      return {
        title: renderI18nText(`collaboration.branching.merge_error.could_not_start_${s}`),
        description: n = renderI18nText(`collaboration.branching.merge_error.could_not_start_${s}_description`),
        primaryButtonText: renderI18nText("collaboration.branching.merge_error.retry_merge"),
        secondaryButtonText: renderI18nText("collaboration.branching.merge_error.cancel"),
        primaryAction: e => {
          L(e);
        },
        secondaryAction: e => {
          e.dispatch(handleBranchModalExit({
            hideModal: !1,
            mergeParams: {
              branchKey: e.mergeParams.branchKey,
              sourceKey: e.mergeParams.sourceKey,
              direction: t,
              branchModalTrackingId: i
            },
            userInitiated: !0,
            reason: "user_cancelled_merge_after_error"
          }));
        }
      };
    case 2:
      return {
        title: renderI18nText(`collaboration.branching.merge_error.could_not_start_${s}`),
        description: n = renderI18nText("collaboration.branching.merge_error.branch_archived_description"),
        primaryButtonText: renderI18nText("base_notifications.dismiss"),
        primaryAction: () => {}
      };
    case 3:
      return {
        title: renderI18nText(`collaboration.branching.merge_error.could_not_start_${s}`),
        description: n = renderI18nText("collaboration.branching.merge_error.branch_already_updated_description"),
        primaryButtonText: renderI18nText("collaboration.branching.merge_error.reload"),
        primaryAction: () => {
          customHistory.reload("Branch point changed");
        }
      };
    case 4:
      return {
        title: renderI18nText("collaboration.branching.merge_error.merge_in_progress"),
        description: n = renderI18nText("collaboration.branching.merge_error.merge_in_progress_description"),
        primaryButtonText: renderI18nText("collaboration.branching.merge_error.retry_merge"),
        primaryAction: async e => {
          await D(e, p, m);
          L(e);
        },
        secondaryLinkButton: {
          text: renderI18nText("collaboration.branching.merge_error.contact_support"),
          href: "https://help.figma.com/hc/requests/new"
        }
      };
  }
};
function M(e) {
  let t = useContext(ss);
  let i = F(e.view, e.mergeParams.direction, t);
  let {
    secondaryLinkButton,
    secondaryButtonText,
    secondaryAction
  } = i;
  let h = useDispatch<AppDispatch>();
  useSingleEffect(() => {
    trackEventAnalytics("Merge Error Modal Shown", {
      view: $$P1[e.view],
      branchKey: e.mergeParams.branchKey,
      sourceKey: e.mergeParams.sourceKey,
      direction: e.mergeParams.direction,
      fileMergeId: e.failureInfo.file_merge_id,
      branchModalTrackingId: t
    }, {
      forwardToDatadog: !0
    });
  });
  return jsx(TrackingProvider, {
    name: TrackingKeyEnum.BRANCHING_MERGE_ERROR_MODAL,
    children: jsx(DraggableModalManager, {
      isCloseHidden: !0,
      title: i.title,
      headerClassName: "merge_error_modal--title--Ys0zA",
      initialPosition: new Point(window.innerWidth / 2 - 246, window.innerHeight / 2),
      children: jsxs("div", {
        className: "merge_error_modal--content--W-q2c",
        children: [jsx("p", {
          children: i.description
        }), jsxs("div", {
          className: "merge_error_modal--buttonRow--Im07r",
          children: [secondaryLinkButton && jsx(Link.Button, {
            newTab: !0,
            variant: "secondary",
            href: secondaryLinkButton.href,
            onClick: () => {
              h(hideModal());
              h(finishBranchMerge({}));
            },
            children: secondaryLinkButton.text
          }), secondaryButtonText && secondaryAction && jsx("span", {
            className: cssBuilderInstance.ml8.$,
            children: jsx(Button, {
              variant: "secondary",
              onClick: () => {
                h(hideModal());
                h(finishBranchMerge({}));
                secondaryAction({
                  mergeParams: e.mergeParams,
                  failureInfo: e.failureInfo,
                  dispatch: h
                });
              },
              children: secondaryButtonText
            })
          }), jsx("span", {
            className: cssBuilderInstance.ml8.$,
            children: jsx(Button, {
              variant: "primary",
              onClick: () => {
                h(hideModal());
                h(finishBranchMerge({}));
                i.primaryAction({
                  mergeParams: e.mergeParams,
                  failureInfo: e.failureInfo,
                  dispatch: h
                });
              },
              children: i.primaryButtonText
            })
          })]
        })]
      })
    })
  });
}
M.displayName = "MergeErrorModal";
export let $$j0 = registerModal(M, "MergeErrorModal", ModalSupportsBackground.YES);
export const my = $$j0;
export const RK = $$P1;