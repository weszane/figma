import { VisualBellActions } from "../905/302958";
import { getI18nString } from "../905/303541";
import { enqueueNetworkErrorBell } from "../905/470594";
import { showPublishingModal } from "../905/514666";
import { VisualBellIcon } from "../905/576487";
import { customHistory } from "../905/612521";
import { getSupportEmail } from "../figma_app/169182";
import { PublishStatusEnum } from "../figma_app/633080";

// Refactored code: Renamed variables, added types, improved readability, and maintained functionality
export enum LibraryPublishErrorType {
  Offline = "Offline",
  NonS3PresignedPost = "NonS3PresignedPost",
  GenericError = "GenericError",
  PartialPublish = "PartialPublish",
  Timeout = "Timeout",
  ErrorCode = "ErrorCode",
  ErrorReason = "ErrorReason",
  NoItemsToPublish = "NoItemsToPublish",
  NoFile = "NoFile",
}
interface BaseLibraryPublishActionProps {
  publishType: PublishStatusEnum;
  dispatch: Fn;
}
interface HandleLibraryPublishSuccessProps extends BaseLibraryPublishActionProps {}
interface HandleLibraryPublishInProgressProps extends BaseLibraryPublishActionProps {
  icon: VisualBellIcon;
  progressKey?: string;
}
interface HandleLibraryPublishErrorProps extends BaseLibraryPublishActionProps {
  error: LibraryPublishErrorType;
  errorCode?: number;
  errorReason?: string;
  numPublishSkippedDueToError?: number;
  itemsToPublish?: any[];
}
function dequeueLibraryPublish(dispatch: Fn): void {
  dispatch(VisualBellActions.dequeue({
    matchType: "library-publish"
  }));
  dispatch(showPublishingModal());
}
export function handleLibraryPublishSuccess(props: HandleLibraryPublishSuccessProps): void {
  const {
    publishType,
    dispatch
  } = props;
  const message = publishType === PublishStatusEnum.UNPUBLISH ? getI18nString("design_systems.publish_actions.unpublish_success") : getI18nString("design_systems.publish_actions.publish_success");
  dispatch(VisualBellActions.enqueue({
    type: "library-publish",
    message,
    icon: VisualBellIcon.CHECK
  }));
}
export function handleLibraryPublishInProgress(props: HandleLibraryPublishInProgressProps): void {
  const {
    publishType,
    dispatch,
    icon,
    progressKey
  } = props;
  const message = publishType === PublishStatusEnum.UNPUBLISH ? getI18nString("design_systems.publish_actions.unpublishing_library") : getI18nString("design_systems.publish_actions.publishing_library");
  dispatch(VisualBellActions.enqueue({
    type: "library-publish",
    message,
    icon,
    progressKey
  }));
}
export function handleLibraryPublishError(props: HandleLibraryPublishErrorProps): void {
  const {
    error
  } = props;

  // Early return for non-actionable errors
  if (error === LibraryPublishErrorType.NoItemsToPublish || error === LibraryPublishErrorType.NoFile) {
    return;
  }
  const {
    publishType,
    dispatch
  } = props;
  const isUnpublishing = publishType === PublishStatusEnum.UNPUBLISH;
  switch (error) {
    case LibraryPublishErrorType.Offline:
      dispatch(VisualBellActions.enqueue({
        type: "library-publish",
        icon: VisualBellIcon.EXCLAMATION,
        error: true,
        message: isUnpublishing ? getI18nString("design_systems.publish_actions.cant_unpublish") : getI18nString("design_systems.publish_actions.cant_publish"),
        button: {
          text: getI18nString("design_systems.publish_actions.retry"),
          action: () => dequeueLibraryPublish(dispatch)
        }
      }));
      break;
    case LibraryPublishErrorType.NonS3PresignedPost:
      enqueueNetworkErrorBell(dispatch, getI18nString("check_network_compatibility.error_bell.library_publish.message"));
      break;
    case LibraryPublishErrorType.GenericError:
      dispatch(VisualBellActions.enqueue({
        type: "library-publish",
        icon: VisualBellIcon.EXCLAMATION,
        error: true,
        message: getI18nString("design_systems.publish_error.generic"),
        button: {
          text: getI18nString("design_systems.publish_actions.retry"),
          action: () => dequeueLibraryPublish(dispatch)
        }
      }));
      break;
    case LibraryPublishErrorType.PartialPublish:
      const partialPublishMessage = isUnpublishing ? getI18nString("design_systems.publish_actions.unpublish_error", {
        numSkipped: props.numPublishSkippedDueToError
      }) : getI18nString("design_systems.publish_actions.publish_error", {
        numSkipped: props.numPublishSkippedDueToError
      });
      dispatch(VisualBellActions.enqueue({
        type: "library-publish",
        icon: VisualBellIcon.EXCLAMATION,
        error: true,
        message: partialPublishMessage,
        button: {
          text: getI18nString("design_systems.publish_actions.retry"),
          action: () => dequeueLibraryPublish(dispatch)
        }
      }));
      break;
    case LibraryPublishErrorType.Timeout:
      dispatch(showPublishingModal(props.itemsToPublish, true));
      dispatch(VisualBellActions.dequeue({
        matchType: "library-publish"
      }));
      break;
    case LibraryPublishErrorType.ErrorCode:
      if (props.errorCode === 424) {
        dispatch(VisualBellActions.enqueue({
          message: getI18nString("design_systems.publish_actions.validations_failed"),
          type: "library-publish",
          error: true,
          button: {
            text: getI18nString("design_systems.publish_actions.validations_contact"),
            action: () => {
              customHistory.unsafeRedirect(`mailto:${getSupportEmail()}`, "_blank");
            }
          }
        }));
        break;
      }
      let errorCodeMessage = "";
      if (props.errorCode === 413) {
        errorCodeMessage = getI18nString("design_systems.publish_actions.payload_too_large");
      } else {
        errorCodeMessage = getI18nString("design_systems.publish_actions.reload");
      }
      const finalErrorMessage = isUnpublishing ? getI18nString("design_systems.publish_actions.unpublish_failed", {
        reason: errorCodeMessage
      }) : getI18nString("design_systems.publish_actions.publish_failed", {
        reason: errorCodeMessage
      });
      dispatch(VisualBellActions.enqueue({
        type: "library-publish",
        error: true,
        message: finalErrorMessage
      }));
      break;
    case LibraryPublishErrorType.ErrorReason:
      dispatch(VisualBellActions.enqueue({
        type: "library-publish",
        error: true,
        message: isUnpublishing ? getI18nString("design_systems.publish_actions.unpublish_failed", {
          reason: props.errorReason
        }) : getI18nString("design_systems.publish_actions.publish_failed", {
          reason: props.errorReason
        })
      }));
      break;
  }
}

// Original function names preserved in exports
export const UN = handleLibraryPublishInProgress;
export const cc = handleLibraryPublishSuccess;
export const jO = LibraryPublishErrorType;
export const tZ = handleLibraryPublishError;