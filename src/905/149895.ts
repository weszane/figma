import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStateTsApi } from "../figma_app/763686";
import { l as _$$l } from "../905/716947";
import { useAtomWithSubscription, Xr } from "../figma_app/27355";
import { sendWithRetry } from "../905/910117";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { VisualBellIcon } from "../905/576487";
import { executePublishProcess } from "../figma_app/519839";
import { getCurrentFileType } from "../figma_app/976749";
import { FFileType } from "../figma_app/191312";
import { areAllAssetsInactive } from "../905/576221";
import { selectWellFormedModuleNodeIds, selectAllModuleLibraryItemsWithStatus, selectAllLibraryItems } from "../figma_app/803787";
import { LibrarySourceEnum } from "../figma_app/633080";
import { currentStateAtom, updatePublishStateAtom, isInitiatedState, PublishState } from "../figma_app/60023";
import { SLIDES_TEMPLATE_PUBLISH_TYPE, showNoItemsToPublishError, publishSlidesTemplate, getPublishHandlers } from "../905/58274";
export function $$b1(e) {
  e(VisualBellActions.enqueue({
    type: SLIDES_TEMPLATE_PUBLISH_TYPE,
    message: getI18nString("slides.templates.publish_actions.toast.unpublish_success"),
    icon: VisualBellIcon.CHECK
  }));
}
export function $$v0(e) {
  e(VisualBellActions.enqueue({
    type: SLIDES_TEMPLATE_PUBLISH_TYPE,
    error: !0,
    icon: VisualBellIcon.EXCLAMATION,
    message: getI18nString("slides.templates.publish_actions.toast.unpublish_error")
  }));
}
export function $$I2() {
  let e = useDispatch<AppDispatch>();
  let t = useAtomWithSubscription(currentStateAtom);
  let i = Xr(updatePublishStateAtom);
  let d = isInitiatedState(t);
  let c = useSelector(e => selectWellFormedModuleNodeIds(e));
  let u = Object.values(useSelector(e => selectAllModuleLibraryItemsWithStatus(e, LibrarySourceEnum.LIBRARY)));
  let I = useSelector(e => selectAllLibraryItems(e));
  let E = getCurrentFileType() === FFileType.SLIDES;
  return {
    initiateTemplatePublish: useCallback(t => {
      if (d || !E) return;
      let n = !!t.isPublishedTemplate && c.length > 0 && areAllAssetsInactive(u, new Set(c));
      if (!t.isPublishedTemplate && 0 === c.length && 0 === u.length || n) {
        showNoItemsToPublishError(e);
        return;
      }
      i({
        state: PublishState.PUBLISH_TEMPLATE_INITIATED,
        request: t
      });
      let r = AppStateTsApi?.slideThemeLibBindings()?.renameThemeForTemplatePublish(t.name) ? u.map(e => e.node_id) : c;
      let s = Object.keys(I);
      r.push(...s);
      0 === r.length ? publishSlidesTemplate(e, t) : requestAnimationFrame(() => {
        e(executePublishProcess({
          savepointDescription: "slide template publish",
          itemsToPublish: new Set(r),
          publishingMode: LibrarySourceEnum.LIBRARY,
          ...getPublishHandlers()
        }));
      });
    }, [e, E, u, d, I, c, i]),
    unpublishTemplate: useCallback(t => {
      E && (i({
        state: PublishState.UNPUBLISH_TEMPLATE_INITIATED
      }), sendWithRetry.del(`/api/templates/file/${t}`).then(() => {
        $$b1(e);
        AppStateTsApi?.canvasGrid().updateSourceLibraryKey(_$$l(""));
        e(executePublishProcess({
          publishingMode: LibrarySourceEnum.LIBRARY,
          unpublishAll: !0,
          savepointDescription: "slide template unpublish",
          ...getPublishHandlers()
        }));
      }).catch(() => {
        $$v0(e);
        i({
          state: PublishState.UNPUBLISH_TEMPLATE_ERRORED
        });
      }));
    }, [e, E, i]),
    publishState: t,
    publishInProgress: d
  };
}
export const U7 = $$v0;
export const br = $$b1;
export const r = $$I2;
