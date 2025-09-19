import { ServiceCategories as _$$e } from "../905/165054";
import { AppStateTsApi } from "../figma_app/763686";
import { atomStoreManager } from "../figma_app/27355";
import { logError } from "../905/714362";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { VisualBellIcon } from "../905/576487";
import { jO } from "../905/573265";
import { hideModal } from "../905/156213";
import { l as _$$l } from "../905/618307";
import { LibrarySourceEnum, PublishStatusEnum } from "../figma_app/633080";
import { pz } from "../figma_app/825489";
import { enqueueNetworkErrorBell } from "../905/470594";
import { UM, F4, _g, Jw, cZ } from "../figma_app/60023";
let _ = "Slides Template Publish Error";
let $$A0 = "slides-template-publish";
export function $$y3(e, t) {
  _$$l({
    ...t,
    dispatch: e,
    onSuccess: () => {
      AppStateTsApi?.canvasGrid().updateSourceLibraryKey(t.libraryKey);
      atomStoreManager.set(UM, {
        state: F4.PUBLISH_TEMPLATE_COMPLETED
      });
      e(VisualBellActions.enqueue({
        type: $$A0,
        message: t.isPublishedTemplate ? getI18nString("slides.templates.publish_actions.toast.update_success") : getI18nString("slides.templates.publish_actions.toast.publish_success"),
        icon: VisualBellIcon.CHECK
      }));
      e(hideModal());
    },
    onFailure: t => {
      let i = atomStoreManager.get(_g);
      let r = Jw(i);
      logError(_$$e.SLIDES, _, {
        publishState: i,
        publishStep: r,
        error: t
      }, {
        reportAsSentryError: !0
      });
      atomStoreManager.set(UM, {
        state: F4.PUBLISH_TEMPLATE_ERRORED
      });
      e(VisualBellActions.enqueue({
        type: $$A0,
        message: getI18nString("slides.templates.publish_actions.toast.publish_error"),
        error: !0
      }));
    }
  });
}
function b(e) {
  let {
    dispatch
  } = e;
  let i = atomStoreManager.get(_g);
  let n = atomStoreManager.get(cZ);
  switch (atomStoreManager.set(pz, LibrarySourceEnum.LIBRARY), i) {
    case F4.PUBLISH_HUB_FILE_INITIATED:
      atomStoreManager.set(UM, {
        state: F4.PUBLISH_HUB_FILE_COMPLETED
      });
      dispatch(VisualBellActions.dequeue({
        matchType: $$A0
      }));
      break;
    case F4.PUBLISH_TEMPLATE_INITIATED:
      if (!n) throw Error("Publish request params do not exist.");
      $$y3(dispatch, n);
      break;
    case F4.UNPUBLISH_HUB_FILE_INITIATED:
    case F4.UNPUBLISH_TEMPLATE_INITIATED:
      atomStoreManager.set(UM, {
        state: F4.UNPUBLISH_COMPLETED
      });
  }
}
function v(e) {
  let {
    publishType,
    dispatch
  } = e;
  let n = atomStoreManager.get(_g);
  [F4.PUBLISH_TEMPLATE_INITIATED, F4.PUBLISH_HUB_FILE_INITIATED].includes(n) && dispatch(VisualBellActions.enqueue({
    type: $$A0,
    message: publishType === PublishStatusEnum.UNPUBLISH ? getI18nString("slides.templates.publish_actions.unpublishing") : getI18nString("slides.templates.publish_actions.publishing"),
    icon: e.icon,
    progressKey: e.progressKey
  }));
}
function I(e) {
  let {
    error,
    dispatch
  } = e;
  let r = atomStoreManager.get(_g);
  let u = Jw(r);
  switch (atomStoreManager.set(pz, LibrarySourceEnum.LIBRARY), logError(_$$e.SLIDES, _, {
    publishState: r,
    publishStep: u,
    error
  }, {
    reportAsSentryError: !0
  }), r) {
    case F4.PUBLISH_HUB_FILE_INITIATED:
      atomStoreManager.set(UM, {
        state: F4.PUBLISH_HUB_FILE_ERRORED
      });
      break;
    case F4.PUBLISH_TEMPLATE_INITIATED:
      atomStoreManager.set(UM, {
        state: F4.PUBLISH_TEMPLATE_ERRORED
      });
      break;
    case F4.UNPUBLISH_TEMPLATE_INITIATED:
    case F4.UNPUBLISH_HUB_FILE_INITIATED:
      atomStoreManager.set(UM, {
        state: F4.UNPUBLISH_TEMPLATE_ERRORED
      });
      return;
  }
  switch (error) {
    case jO.Offline:
      dispatch(VisualBellActions.enqueue({
        type: $$A0,
        icon: VisualBellIcon.EXCLAMATION,
        error: !0,
        message: getI18nString("slides.templates.publish_actions.toast.offline_error")
      }));
      break;
    case jO.NonS3PresignedPost:
      enqueueNetworkErrorBell(dispatch, getI18nString("check_network_compatibility.error_bell.library_publish.message"));
      break;
    case jO.NoItemsToPublish:
      dispatch(VisualBellActions.enqueue({
        type: $$A0,
        icon: VisualBellIcon.EXCLAMATION,
        error: !0,
        message: getI18nString("slides.templates.publish_actions.toast.no_items_error")
      }));
      break;
    case jO.ErrorCode:
      dispatch(413 === e.errorCode ? VisualBellActions.enqueue({
        type: $$A0,
        error: !0,
        message: getI18nString("slides.templates.publish_actions.toast.long_name_error")
      }) : VisualBellActions.enqueue({
        type: $$A0,
        error: !0,
        message: getI18nString("slides.templates.publish_actions.toasts.publish_error.generic")
      }));
      break;
    default:
      dispatch(VisualBellActions.enqueue({
        type: $$A0,
        error: !0,
        message: getI18nString("slides.templates.publish_actions.toasts.publish_error.generic")
      }));
  }
}
export function $$E1(e) {
  e(VisualBellActions.enqueue({
    type: $$A0,
    icon: VisualBellIcon.EXCLAMATION,
    error: !0,
    message: getI18nString("slides.templates.publish_actions.toast.no_items_error")
  }));
}
export function $$x2() {
  return {
    onPublishSuccess: b,
    onPublishProgress: v,
    onPublishError: I
  };
}
export const CR = $$A0;
export const Dl = $$E1;
export const ke = $$x2;
export const oX = $$y3;