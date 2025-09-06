import { Ay } from "../905/612521";
import { getSupportEmail } from "../figma_app/169182";
import { getI18nString } from "../905/303541";
import { F } from "../905/302958";
import { zX } from "../905/576487";
import { M$ } from "../figma_app/633080";
import { EH } from "../905/514666";
import { MZ } from "../905/470594";
var $$u2 = (e => (e.Offline = "Offline", e.NonS3PresignedPost = "NonS3PresignedPost", e.GenericError = "GenericError", e.PartialPublish = "PartialPublish", e.Timeout = "Timeout", e.ErrorCode = "ErrorCode", e.ErrorReason = "ErrorReason", e.NoItemsToPublish = "NoItemsToPublish", e.NoFile = "NoFile", e))($$u2 || {});
function p(e) {
  e(F.dequeue({
    matchType: "library-publish"
  }));
  e(EH());
}
export function $$m1(e) {
  let {
    publishType,
    dispatch
  } = e;
  dispatch(F.enqueue({
    type: "library-publish",
    message: publishType === M$.UNPUBLISH ? getI18nString("design_systems.publish_actions.unpublish_success") : getI18nString("design_systems.publish_actions.publish_success"),
    icon: zX.CHECK
  }));
}
export function $$h0(e) {
  let {
    publishType,
    dispatch
  } = e;
  dispatch(F.enqueue({
    type: "library-publish",
    message: publishType === M$.UNPUBLISH ? getI18nString("design_systems.publish_actions.unpublishing_library") : getI18nString("design_systems.publish_actions.publishing_library"),
    icon: e.icon,
    progressKey: e.progressKey
  }));
}
export function $$g3(e) {
  let {
    error
  } = e;
  if ("NoItemsToPublish" === error || "NoFile" === error) return;
  let {
    publishType,
    dispatch
  } = e;
  let m = publishType === M$.UNPUBLISH;
  switch (error) {
    case "Offline":
      dispatch(F.enqueue({
        type: "library-publish",
        icon: zX.EXCLAMATION,
        error: !0,
        message: m ? getI18nString("design_systems.publish_actions.cant_unpublish") : getI18nString("design_systems.publish_actions.cant_publish"),
        button: {
          text: getI18nString("design_systems.publish_actions.retry"),
          action: () => p(dispatch)
        }
      }));
      break;
    case "NonS3PresignedPost":
      MZ(dispatch, getI18nString("check_network_compatibility.error_bell.library_publish.message"));
      break;
    case "GenericError":
      F.enqueue({
        type: "library-publish",
        icon: zX.EXCLAMATION,
        error: !0,
        message: getI18nString("design_systems.publish_error.generic"),
        button: {
          text: getI18nString("design_systems.publish_actions.retry"),
          action: () => p(dispatch)
        }
      });
      break;
    case "PartialPublish":
      {
        let t = "";
        t = m ? getI18nString("design_systems.publish_actions.unpublish_error", {
          numSkipped: e.numPublishSkippedDueToError
        }) : getI18nString("design_systems.publish_actions.publish_error", {
          numSkipped: e.numPublishSkippedDueToError
        });
        dispatch(F.enqueue({
          type: "library-publish",
          icon: zX.EXCLAMATION,
          error: !0,
          message: t,
          button: {
            text: getI18nString("design_systems.publish_actions.retry"),
            action: () => p(dispatch)
          }
        }));
        break;
      }
    case "Timeout":
      dispatch(EH(e.itemsToPublish, !0));
      dispatch(F.dequeue({
        matchType: "library-publish"
      }));
      break;
    case "ErrorCode":
      {
        if (424 === e.errorCode) {
          dispatch(F.enqueue({
            message: getI18nString("design_systems.publish_actions.validations_failed"),
            type: "library-publish",
            error: !0,
            button: {
              text: getI18nString("design_systems.publish_actions.validations_contact"),
              action: () => {
                Ay.unsafeRedirect(`mailto:${getSupportEmail()}`, "_blank");
              }
            }
          }));
          break;
        }
        let t = "";
        413 === e.errorCode ? t = getI18nString("design_systems.publish_actions.payload_too_large") : (e.errorCode, t = getI18nString("design_systems.publish_actions.reload"));
        let i = m ? getI18nString("design_systems.publish_actions.unpublish_failed", {
          reason: t
        }) : getI18nString("design_systems.publish_actions.publish_failed", {
          reason: t
        });
        dispatch(F.enqueue({
          type: "library-publish",
          error: !0,
          message: i
        }));
        break;
      }
    case "ErrorReason":
      dispatch(F.enqueue({
        type: "library-publish",
        error: !0,
        message: m ? getI18nString("design_systems.publish_actions.unpublish_failed", {
          reason: e.errorReason
        }) : getI18nString("design_systems.publish_actions.publish_failed", {
          reason: e.errorReason
        })
      }));
  }
}
export const UN = $$h0;
export const cc = $$m1;
export const jO = $$u2;
export const tZ = $$g3;