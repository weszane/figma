import { ServiceCategories } from "../905/165054";
import { atomStoreManager, atom } from "../figma_app/27355";
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
import { _9, VW, UV, Jw, WU } from "../figma_app/755939";
let f = "Cooper Template Publish Error";
let $$_0 = "cooper-template-publish";
export function $$A3(e, t) {
  _$$l({
    ...t,
    dispatch: e,
    onSuccess: () => {
      atomStoreManager.set(_9, {
        state: VW.PUBLISH_TEMPLATE_COMPLETED
      });
      e(VisualBellActions.enqueue({
        type: $$_0,
        message: t.isPublishedTemplate ? getI18nString("cooper.templates.template_updates_published") : getI18nString("cooper.templates.template_published"),
        icon: VisualBellIcon.CHECK
      }));
      e(hideModal());
    },
    onFailure: t => {
      let i = atomStoreManager.get(UV);
      let l = Jw(i);
      logError(ServiceCategories.PROJECT_BUZZ, f, {
        publishState: i,
        publishStep: l,
        error: t
      }, {
        reportAsSentryError: !0
      });
      atomStoreManager.set(_9, {
        state: VW.PUBLISH_TEMPLATE_ERRORED
      });
      e(VisualBellActions.enqueue({
        type: $$_0,
        message: getI18nString("cooper.templates.template_failed_published"),
        error: !0
      }));
    }
  });
}
export function $$y2(e) {
  e(VisualBellActions.enqueue({
    type: $$_0,
    icon: VisualBellIcon.EXCLAMATION,
    error: !0,
    message: getI18nString("cooper.templates.template_publish_error_mark_at_least_one_ready")
  }));
}
let b = {
  onPublishSuccess: function (e) {
    let {
      dispatch
    } = e;
    let i = atomStoreManager.get(UV);
    let n = atomStoreManager.get(WU);
    switch (atomStoreManager.set(pz, LibrarySourceEnum.LIBRARY), i) {
      case VW.PUBLISH_HUB_FILE_INITIATED:
        atomStoreManager.set(_9, {
          state: VW.PUBLISH_HUB_FILE_COMPLETED
        });
        dispatch(VisualBellActions.dequeue({
          matchType: $$_0
        }));
        break;
      case VW.PUBLISH_TEMPLATE_INITIATED:
        if (!n) throw Error("Publish request params do not exist.");
        $$A3(dispatch, n);
        break;
      case VW.UNPUBLISH_HUB_FILE_INITIATED:
      case VW.UNPUBLISH_TEMPLATE_INITIATED:
        atomStoreManager.set(_9, {
          state: VW.UNPUBLISH_COMPLETED
        });
    }
  },
  onPublishProgress: function (e) {
    let {
      publishType,
      dispatch
    } = e;
    let n = atomStoreManager.get(UV);
    [VW.PUBLISH_TEMPLATE_INITIATED, VW.PUBLISH_HUB_FILE_INITIATED].includes(n) && dispatch(VisualBellActions.enqueue({
      type: $$_0,
      message: publishType === PublishStatusEnum.UNPUBLISH ? getI18nString("cooper.templates.template_unpublishing") : getI18nString("cooper.templates.template_publishing"),
      icon: e.icon,
      progressKey: e.progressKey
    }));
  },
  onPublishError: function (e) {
    let {
      error,
      dispatch
    } = e;
    let c = atomStoreManager.get(UV);
    let u = Jw(c);
    switch (atomStoreManager.set(pz, LibrarySourceEnum.LIBRARY), logError(ServiceCategories.PROJECT_BUZZ, f, {
      publishState: c,
      publishStep: u,
      error
    }, {
      reportAsSentryError: !0
    }), c) {
      case VW.PUBLISH_HUB_FILE_INITIATED:
        atomStoreManager.set(_9, {
          state: VW.PUBLISH_HUB_FILE_ERRORED
        });
        break;
      case VW.PUBLISH_TEMPLATE_INITIATED:
        atomStoreManager.set(_9, {
          state: VW.PUBLISH_TEMPLATE_ERRORED
        });
        break;
      case VW.UNPUBLISH_TEMPLATE_INITIATED:
      case VW.UNPUBLISH_HUB_FILE_INITIATED:
        atomStoreManager.set(_9, {
          state: VW.UNPUBLISH_TEMPLATE_ERRORED
        });
        return;
    }
    switch (error) {
      case jO.Offline:
        dispatch(VisualBellActions.enqueue({
          type: $$_0,
          icon: VisualBellIcon.EXCLAMATION,
          error: !0,
          message: getI18nString("cooper.templates.template_publish_error_offline")
        }));
        break;
      case jO.NonS3PresignedPost:
        enqueueNetworkErrorBell(dispatch, getI18nString("check_network_compatibility.error_bell.library_publish.message"));
        break;
      case jO.NoItemsToPublish:
        dispatch(VisualBellActions.enqueue({
          type: $$_0,
          icon: VisualBellIcon.EXCLAMATION,
          error: !0,
          message: getI18nString("cooper.templates.template_publish_error_empty")
        }));
        break;
      case jO.ErrorCode:
        dispatch(413 === e.errorCode ? VisualBellActions.enqueue({
          type: $$_0,
          error: !0,
          message: getI18nString("cooper.templates.template_publish_error_page_name_too_long")
        }) : VisualBellActions.enqueue({
          type: $$_0,
          error: !0,
          message: getI18nString("cooper.templates.template_publish_error_something_went_wrong")
        }));
        break;
      default:
        dispatch(VisualBellActions.enqueue({
          type: $$_0,
          error: !0,
          message: getI18nString("cooper.templates.template_publish_error_something_went_wrong")
        }));
    }
  }
};
let v = atom(void 0);
let $$I1 = atom(e => e(v) ?? b, (e, t, i) => {
  if (i && e(v)) throw Error("Cooper library publish callbacks already overriden");
  t(v, i);
  return i ?? b;
});
export function $$E4() {
  return atomStoreManager.get($$I1);
}
export const Ao = $$_0;
export const BT = $$I1;
export const Bj = $$y2;
export const _I = $$A3;
export const sG = $$E4;
