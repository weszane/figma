import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAtomWithSubscription, Xr } from "../figma_app/27355";
import { sendWithRetry } from "../905/910117";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { VisualBellIcon } from "../905/576487";
import { executePublishProcess } from "../figma_app/519839";
import { Ol } from "../905/576221";
import { selectDeletedOrCooperComponentNodeIds, selectCooperComponents } from "../figma_app/803787";
import { getFContainerType } from "../905/186961";
import { currentPublishStateAtom, updatePublishStateAtom, hasHubOrPublishState, PublishState } from "../figma_app/755939";
import { enqueueNoItemsToPublishError, handleTemplateUpload, getLibraryPublishCallbacks, TEMPLATE_PUBLISH_VISUAL_BELL_TYPE } from "../905/686934";
export function $$f0() {
  let e = useDispatch();
  let t = useAtomWithSubscription(currentPublishStateAtom);
  let i = Xr(updatePublishStateAtom);
  let f = hasHubOrPublishState(t);
  let _ = useSelector(selectDeletedOrCooperComponentNodeIds);
  let A = Object.values(useSelector(selectCooperComponents));
  return {
    initiateTemplatePublish: useCallback(t => {
      if (f) return;
      let n = !!t.isPublishedTemplate && _.length > 0 && Ol(A);
      if (!t.isPublishedTemplate && 0 === _.length || n) {
        enqueueNoItemsToPublishError(e);
        return;
      }
      i({
        state: PublishState.PUBLISH_TEMPLATE_INITIATED,
        request: t
      });
      0 === _.length ? handleTemplateUpload(e, t) : requestAnimationFrame(() => {
        e(executePublishProcess({
          savepointDescription: "cooper template publish",
          itemsToPublish: new Set(_),
          publishScope: getFContainerType(t.publishScope),
          ...getLibraryPublishCallbacks()
        }));
      });
    }, [e, f, _, A, i]),
    unpublishTemplate: useCallback(t => {
      i({
        state: PublishState.UNPUBLISH_TEMPLATE_INITIATED
      });
      sendWithRetry.del(`/api/templates/file/${t}`).then(() => {
        e(VisualBellActions.enqueue({
          type: TEMPLATE_PUBLISH_VISUAL_BELL_TYPE,
          message: getI18nString("cooper.templates.unpublished"),
          icon: VisualBellIcon.CHECK
        }));
        e(executePublishProcess({
          unpublishAll: !0,
          savepointDescription: "cooper template unpublish",
          ...getLibraryPublishCallbacks()
        }));
      }).catch(() => {
        e(VisualBellActions.enqueue({
          type: TEMPLATE_PUBLISH_VISUAL_BELL_TYPE,
          error: !0,
          icon: VisualBellIcon.EXCLAMATION,
          message: getI18nString("cooper.templates.failed_to_unpublish_template")
        }));
        i({
          state: PublishState.UNPUBLISH_TEMPLATE_ERRORED
        });
      });
    }, [e, i]),
    publishState: t,
    publishInProgress: f
  };
}
export const X = $$f0;