import { groupBy } from "lodash-es";
import { reportError } from "../905/11";
import { createActionCreator } from "../905/73481";
import { b as _$$b2 } from "../905/76245";
import { hideModal } from "../905/156213";
import { ServiceCategories } from "../905/165054";
import { NotificationCategory } from "../905/170564";
import { waitForAnimationFrame } from "../905/236856";
import { maybeCreateSavepoint } from "../905/294113";
import { tf } from "../905/295427";
import { VisualBellActions } from "../905/302958";
import { getI18nString } from "../905/303541";
import { createOptimistThunk } from "../905/350402";
import { trackEventAnalytics } from "../905/449184";
import { notificationActions } from "../905/463586";
import { sendHistogram, sendMetric } from "../905/485103";
import { handleAtomEvent } from "../905/502364";
import { isShareableAssetType } from "../905/566074";
import { handleLibraryPublishError, handleLibraryPublishInProgress, handleLibraryPublishSuccess, LibraryPublishErrorType } from "../905/573265";
import { areAllAssetsInactive, getPendingLibraryUpdates } from "../905/576221";
import { VisualBellIcon } from "../905/576487";
import { getFeatureFlags } from "../905/601108";
import { PerfTimer } from "../905/609396";
import { UploadError, uploadToPresignedPost } from "../905/623179";
import { logError, logWarning } from "../905/714362";
import { getSelectedFile } from "../905/766303";
import { fn, I6, p$ } from "../905/831303";
import { getLibrarySourceString } from "../905/853613";
import { componentReplaceLocal } from "../905/879323";
import { librariesAPI } from "../905/939602";
import { postUserFlag } from "../905/985254";
import { isNotNullish } from "../figma_app/95419";
import { StyleType } from "../figma_app/276332";
import { Hj } from "../figma_app/412398";
import { throwTypeError } from "../figma_app/465776";
import { getTeamById } from "../figma_app/598018";
import { DEFAULT_LIBRARY_LIMIT, LibraryPublishStatusEnum, NO_CONTAINING_STATE_GROUP_ID, PrimaryWorkflowEnum, PublishStatusEnum, StagingStatusEnum } from "../figma_app/633080";
import { getContainingStateGroupNodeId, isStagedStatus } from "../figma_app/646357";
import { Gh } from "../figma_app/707567";
import { FirstDraftHelpers, Fullscreen, LogToConsoleMode } from "../figma_app/763686";
import { selectComponentLibraryItemsWithStatus, selectLibraryPublishingMode, selectModuleLibraryItemsWithStatus, selectProcessedLocalVariables, selectProcessedLocalVariableSets, selectStateGroupLibraryItemsWithStatus, selectStyledLibraryItemsWithStatus } from "../figma_app/803787";
import { updateLocalLibraryItemsThunk } from "../figma_app/864378";

// Renamed variables for clarity, added types, improved readability
export let startPublishAction = createActionCreator("START_PUBLISH");
export let publishProgressAction = createActionCreator("PUBLISH_PROGRESS");
export let publishRequestFinishedAction = createActionCreator("PUBLISH_REQUEST_FINISHED");
export let savePublishDescriptionAction = createActionCreator("SAVE_PUBLISH_DESCRIPTION");
interface PublishThunkContext {
  dispatch: (action: any) => void;
  getState: () => any;
}
export let finishPublishThunk = createOptimistThunk((context: PublishThunkContext) => {
  context.dispatch(notificationActions.dequeue({
    type: NotificationCategory.MOVE_COMPONENTS_PROMPT
  }));
  handleAtomEvent({
    id: "Finished publishing components"
  });
  context.dispatch(publishRequestFinishedAction());
});

// Error types enumeration for better type safety
// enum LibraryPublishErrorType {
//   PublishStart = "publish_start",
//   CreateSavepoint = "create_savepoint",
//   GetPresignedPost = "get_presigned_post",
//   UploadThumbnails = "upload_thumbnails",
//   UploadParams = "upload_params",
//   AssetValidation = "asset_validation",
//   NonS3Error = "non_s3_error",
//   GenericError = "generic_error",
// }

// Refactored thunk for handling publish workflow
interface PublishWorkflowParams {
  hubFileId: string;
  localAssetsWithDenormalizedPublishInfo: Record<string, any>;
}
export let handlePublishWorkflow = createOptimistThunk((context: PublishThunkContext, params: PublishWorkflowParams) => {
  let state = context.getState();
  let shouldRemoveReduxLibraryStatus = getFeatureFlags().ds_remove_redux_library_status;
  if (!shouldRemoveReduxLibraryStatus) {
    // Helper function to update staging status
    let updateStagingStatus = (items: Record<string, any>) => {
      let updatedItems = {
        ...items
      };
      for (let key in updatedItems) {
        if (isStagedStatus(updatedItems[key].status)) {
          updatedItems[key].status = StagingStatusEnum.DELETED;
        } else if (updatedItems[key].status === StagingStatusEnum.NEW) {
          updatedItems[key].status = StagingStatusEnum.NOT_STAGED;
        }
      }
      return updatedItems;
    };
    let updatedComponents = updateStagingStatus(state.library.local.components);
    let updatedStateGroups = updateStagingStatus(state.library.local.stateGroups);
    let updatedStyles = updateStagingStatus(state.library.local.styles);
    context.dispatch(componentReplaceLocal({
      local: updatedComponents,
      type: PrimaryWorkflowEnum.COMPONENT
    }));
    context.dispatch(componentReplaceLocal({
      local: updatedStateGroups,
      type: PrimaryWorkflowEnum.STATE_GROUP
    }));
    context.dispatch(componentReplaceLocal({
      local: updatedStyles,
      type: PrimaryWorkflowEnum.STYLE
    }));
  }
  context.dispatch(publishProgressAction({
    state: LibraryPublishStatusEnum.NONE
  }));
  context.dispatch(executePublishProcess({
    unpublishAll: shouldRemoveReduxLibraryStatus,
    hubFileId: params.hubFileId,
    localAssetsWithDenormalizedPublishInfo: params.localAssetsWithDenormalizedPublishInfo
  }));
});

// Thumbnail generation and upload function
async function generateAndUploadThumbnails(assets: any[], isUnpublish: boolean, thumbnails: any, context: PublishThunkContext) {
  let perfTimer = new PerfTimer("publish.client.generate_and_upload_thumbnails", {});
  if (perfTimer.start(), !assets.length) {
    return {
      s3Paths: [],
      failedThumbnailNodeIds: [],
      styleMetaByNodeId: {},
      uploadDurationMs: 0,
      encounteredNonS3PresignedPostError: false
    };
  }
  let totalAssets = assets.length;
  let processedCount = 0;
  let updateProgress = () => {
    context.dispatch(publishProgressAction({
      state: LibraryPublishStatusEnum.ASSEMBLING_COMPONENTS,
      progress: (processedCount += 1) / totalAssets,
      publishType: isUnpublish ? PublishStatusEnum.UNPUBLISH : PublishStatusEnum.PUBLISH,
      publishStartMs: getPublishStartTime(context.getState().library.publishProgress)
    }));
  };
  let styleMetadata: Record<string, string> = Object.create(null);
  let failedNodeIds: string[] = [];
  let thumbnailData: Array<{
    sessionId: number;
    localId: number;
    thumbnail: any;
  }> = [];

  // Generate thumbnails for each asset
  await Promise.all(assets.map(async asset => {
    try {
      let thumbnailBuffer = await scheduler.postTask(() => I6(asset, thumbnails), {
        priority: "user-blocking"
      });
      if (!thumbnailBuffer || thumbnailBuffer.length === 0) {
        throw new Error("Unable to generate thumbnail");
      }
      let [sessionId, localId] = asset.node_id.split(":").map((part: string) => Number(part));
      if (isNaN(sessionId)) throw new Error("Unable to parse sessionId");
      if (isNaN(localId)) throw new Error("Unable to parse localId");
      thumbnailData.push({
        sessionId,
        localId,
        thumbnail: thumbnailBuffer
      });
      if (asset.type === PrimaryWorkflowEnum.STYLE) {
        styleMetadata[asset.node_id] = JSON.stringify(fn(asset, thumbnails));
      }
    } catch {
      logError("publish", "Failed to upload thumbnail for asset", {
        guid: asset.node_id
      }, {
        reportAsSentryError: true
      });
      failedNodeIds.push(asset.type === PrimaryWorkflowEnum.COMPONENT && asset.containing_frame?.containingStateGroup?.nodeId || asset.node_id);
    } finally {
      updateProgress();
    }
  }));
  if (thumbnailData.length === 0) {
    return {
      s3Paths: [],
      failedThumbnailNodeIds: failedNodeIds,
      styleMetaByNodeId: {},
      uploadDurationMs: 0,
      encounteredNonS3PresignedPostError: false
    };
  }

  // Process thumbnails in batches
  let batches: typeof thumbnailData[] = [];
  while (thumbnailData.length) {
    batches.push(thumbnailData.splice(0, DEFAULT_LIBRARY_LIMIT));
  }
  let presignedUrlPromise = _$$b2.getThumbnailsBufferPresignedPostUrl(batches.length);
  let batchBuffers = batches.map(batch => batch.reduce(({
    buffer,
    offset,
    guids
  }, {
    sessionId,
    localId,
    thumbnail
  }) => {
    // Pack session ID, local ID, and thumbnail length into buffer
    buffer.set([(0xFF000000 & sessionId) >> 24, (0xFF0000 & sessionId) >> 16, (65280 & sessionId) >> 8, 255 & sessionId, (0xFF000000 & localId) >> 24, (0xFF0000 & localId) >> 16, (65280 & localId) >> 8, 255 & localId, (0xFF000000 & thumbnail.byteLength) >> 24, (0xFF0000 & thumbnail.byteLength) >> 16, (65280 & thumbnail.byteLength) >> 8, 255 & thumbnail.byteLength], offset);
    offset += 12;
    buffer.set(thumbnail, offset);
    offset += thumbnail.byteLength;
    guids.push(`${sessionId}:${localId}`);
    return {
      buffer,
      offset,
      guids
    };
  }, {
    buffer: new Uint8Array(batch.reduce((size, {
      thumbnail
    }) => size + thumbnail.byteLength + 12, 0)),
    offset: 0,
    guids: [] as string[]
  }));
  let uploadedPaths: string[] = [];
  let {
    data: {
      meta: {
        presigned_posts: presignedPosts
      }
    }
  } = await presignedUrlPromise;
  let encounteredNonS3Error = false;

  // Upload each batch
  await Promise.allSettled(presignedPosts.map(async ({
    url,
    fields
  }) => {
    let batchBuffer = batchBuffers.shift();
    if (!batchBuffer) {
      reportError(ServiceCategories.DESIGN_SYSTEMS_EDITOR, new Error("Popped a concatenated buffer that does not exist"));
      return;
    }
    try {
      let uploadResult = await uploadToPresignedPost(ServiceCategories.DESIGN_SYSTEMS_EDITOR, "uploadThumbnails", url, fields, batchBuffer.buffer, "application/octet-stream");
      uploadedPaths.push(uploadResult);
      sendHistogram("publish.thumbnails_buffer.bytes", batchBuffer.buffer.byteLength);
    } catch (error) {
      if (error instanceof UploadError) {
        encounteredNonS3Error = true;
      }
      failedNodeIds.push(...batchBuffer.guids);
    }
  }));
  if (encounteredNonS3Error) {
    reportError(ServiceCategories.DESIGN_SYSTEMS_EDITOR, new Error("uploadThumbnails: encountered non-S3 presigned POST error"));
  }
  let uploadDuration = perfTimer.stop();
  if (uploadDuration) {
    trackEventAnalytics("Library generate and upload thumbnails", {
      elapsedMs: uploadDuration,
      duration: uploadDuration
    }, {
      forwardToDatadog: true
    });
  }
  return {
    s3Paths: uploadedPaths,
    styleMetaByNodeId: styleMetadata,
    failedThumbnailNodeIds: failedNodeIds,
    uploadDurationMs: uploadDuration,
    encounteredNonS3PresignedPostError: encounteredNonS3Error
  };
}

// Get publish start time with validation
function getPublishStartTime(publishProgress: any) {
  return publishProgress.state === LibraryPublishStatusEnum.NONE ? (logError("library publish SSP", "Attempted to update progress while not assembling components", publishProgress), null) : publishProgress.publishStartMs;
}

// Track publish event analytics
function trackPublishEventAnalytics(publishProgress: any, eventName: string, histogramName: string, errorType?: string) {
  let startTime = getPublishStartTime(publishProgress);
  if (startTime) {
    let duration = performance.now() - startTime;
    trackEventAnalytics(eventName, {
      duration
    });
    sendHistogram(histogramName, duration, {
      error: errorType
    });
  } else {
    logError("library publish SSP", "Publish start time was null");
  }
}

// Handle publish completion
function handlePublishCompletion(publishProgress: any, errorCount: number, isUnpublish: boolean, dispatch: (action: any) => void, onSuccess: (params: any) => void, onError: (params: any) => void, savepointDescription?: string, encounteredNonS3Error?: boolean) {
  if (errorCount === 0) {
    // Success case
    if (publishProgress.state === LibraryPublishStatusEnum.UPLOADING) {
      let startTime = getPublishStartTime(publishProgress);
      if (startTime) {
        let now = performance.now();
        let totalDuration = now - startTime;
        let metrics = isUnpublish ? {
          totalDurationMs: totalDuration
        } : {
          totalDurationMs: totalDuration,
          uploadBuffersDurationMs: now - publishProgress.commitUpdatesDurationMs,
          clientPreWorkDurationMs: publishProgress.clientPreWorkDurationMs,
          createSavePointDurationMs: publishProgress.createSavePointDurationMs
        };
        trackEventAnalytics(`Client perceived ${publishProgress.publishType} duration`, metrics);
        let skipClientThumbnail = getFeatureFlags().ssp_stop_client_gen_thumb_generation ? "true" : "false";
        for (let [key, value] of Object.entries(metrics)) {
          let histogramName = `${publishProgress.publishType}.success.${key}`;
          sendHistogram(histogramName, value as number, {
            skip_client_thumbnail: skipClientThumbnail
          });
        }
      } else {
        logError("library publish SSP", "Publish start time was null");
      }
    }
    onSuccess({
      publishProgress,
      publishType: isUnpublish ? PublishStatusEnum.UNPUBLISH : PublishStatusEnum.PUBLISH,
      dispatch
    });
    dispatch(savePublishDescriptionAction(""));
  } else {
    // Error case
    let publishType = isUnpublish ? PublishStatusEnum.UNPUBLISH : PublishStatusEnum.PUBLISH;
    if (savepointDescription) {
      dispatch(savePublishDescriptionAction(savepointDescription));
    }
    if (encounteredNonS3Error) {
      onError({
        error: LibraryPublishErrorType.NonS3PresignedPost,
        publishType,
        dispatch
      });
      return;
    }
    if (typeof errorCount !== "number") {
      onError({
        error: LibraryPublishErrorType.GenericError,
        publishType,
        dispatch
      });
    } else {
      trackPublishEventAnalytics(publishProgress, "Partial publish failure", `${publishType}.partial_error.duration`, "asset_validation");
      onError({
        error: LibraryPublishErrorType.PartialPublish,
        publishType,
        dispatch,
        numPublishSkippedDueToError: errorCount
      });
    }
  }
}

// Export function for publish completion handling
export function handlePublishEnded(publishProgress: any, errorCount: number, isUnpublish: boolean, dispatch: (action: any) => void, savepoint: any, hadException: boolean, onSuccess: (params: any) => void, onError: (params: any) => void, savepointDescription?: string) {
  trackEventAnalytics("Publish ended", {
    savepointId: savepoint.id,
    hadException
  });
  handlePublishCompletion(publishProgress, errorCount, isUnpublish, dispatch, onSuccess, onError, savepointDescription);
  dispatch(finishPublishThunk());
}

// First draft publishing helper
let handleFirstDraftPublishing = async (publishParams: any) => {
  let kitMetadata;
  if (getFeatureFlags().first_draft_publish_ux && (publishParams.publishAsFirstDraftKit || publishParams.unpublishAll)) {
    let designSystemKits = FirstDraftHelpers.getLocalDesignSystemKits();
    if (designSystemKits.length > 1) {
      logWarning("first_draft", "Attempting to publish a file with multiple kits", {
        kitNames: designSystemKits.map(kit => kit.name)
      });
    } else if (designSystemKits.length === 1) {
      let kit = designSystemKits[0];
      if (!kit) {
        logWarning("first_draft", "No kit found for publishing", {
          kits: designSystemKits
        });
        return;
      }
      kitMetadata = await Hj(kit.pageId, kit.name, {
        publishType: tf.LIBRARY_TYPE_INFO_UPDATE
      }, publishParams.firstDraftVariablesForTheme, publishParams.unpublishAll);
    }
  }
  return kitMetadata;
};

// First draft publish thunk
export let firstDraftPublishThunk = createOptimistThunk(async (context: PublishThunkContext, params: any = {}) => {
  let state = context.getState();
  let selectedFile = getSelectedFile(state);
  let fileKey = selectedFile?.key;
  if (!fileKey) {
    logWarning("first_draft", "No file key found for publishing");
    return;
  }
  let publishingNotification = VisualBellActions.enqueue({
    type: "first-draft-publish",
    message: "Publishing changes...",
    icon: VisualBellIcon.SPINNER
  });
  let successNotification = VisualBellActions.enqueue({
    type: "first-draft-publish",
    message: "Changes published",
    icon: VisualBellIcon.CHECK
  });
  let errorNotification = VisualBellActions.enqueue({
    type: "first-draft-publish",
    message: "Failed to publish changes",
    icon: VisualBellIcon.EXCLAMATION,
    error: true
  });
  context.dispatch(hideModal());
  context.dispatch(publishingNotification);
  let kitMetadata = await handleFirstDraftPublishing(params);
  if (!kitMetadata) {
    logWarning("first_draft", "No kit metadata found for publishing");
    context.dispatch(errorNotification);
    return;
  }
  try {
    await Gh.postFirstDraftUpdateMetadata({
      fileKey,
      publishMetadata: kitMetadata
    });
    context.dispatch(successNotification);
  } catch (error) {
    logWarning("first_draft", "Failed to publish changes", {
      error
    });
    context.dispatch(errorNotification);
  }
});

// Main publish execution thunk
export let executePublishProcess = createOptimistThunk(async (context: PublishThunkContext, params: any = {}) => {
  let savepoint;
  let thumbnailUploadResult;
  let presignedUrl;
  let presignedFields;
  let paramsUploadPath;
  let libraryPublishId;
  let kitMetadata;
  let state = context.getState();
  let onSuccess = params.onPublishSuccess ?? handleLibraryPublishSuccess;
  let onProgress = params.onPublishProgress ?? handleLibraryPublishInProgress;
  let onError = params.onPublishError ?? handleLibraryPublishError;

  // Validate publishing mode
  if (params.publishingMode && params.publishingMode !== state.library.libraryPublishingMode) {
    logError("library publish SSP", "Publishing Mode does not match Redux state, and this will cause downstream errors.", {
      desiredPublishingMode: params.publishingMode,
      reduxLibraryPublishingMode: state.library.libraryPublishingMode
    });
  }
  let localAssets = params.localAssetsWithDenormalizedPublishInfo ?? {};

  // Check if publish is already in progress
  if (state.library.publishProgress.state !== LibraryPublishStatusEnum.NONE) {
    context.dispatch(finishPublishThunk());
    return;
  }
  let selectedFile = getSelectedFile(state);
  if (!selectedFile) {
    console.error("library publishChanges: file is null");
    onError({
      error: LibraryPublishErrorType.NoFile,
      dispatch: context.dispatch
    });
    context.dispatch(finishPublishThunk());
    return;
  }
  let itemsToPublish = params.itemsToPublish;
  if (itemsToPublish !== undefined && itemsToPublish.size === 0) {
    console.error("No items selected to publish");
    onError({
      error: LibraryPublishErrorType.NoItemsToPublish,
      dispatch: context.dispatch
    });
    context.dispatch(finishPublishThunk());
    return;
  }

  // Check if all items should be unpublished
  let areAllItemsShareable = [PrimaryWorkflowEnum.CODE_COMPONENT, PrimaryWorkflowEnum.RESPONSIVE_SET].every(type => !isShareableAssetType(type) || areAllAssetsInactive(Object.values(localAssets).filter((asset: any) => asset.type === type), itemsToPublish));
  let shouldUnpublishAll = params.unpublishAll || areAllAssetsInactive(Object.values(selectComponentLibraryItemsWithStatus(state)), itemsToPublish) && areAllAssetsInactive(Object.values(selectStateGroupLibraryItemsWithStatus(state)), itemsToPublish) && areAllAssetsInactive(Object.values(selectStyledLibraryItemsWithStatus(state)), itemsToPublish) && areAllAssetsInactive(Object.values(selectProcessedLocalVariableSets(state)), itemsToPublish) && (!isShareableAssetType(PrimaryWorkflowEnum.MODULE) || areAllAssetsInactive(Object.values(selectModuleLibraryItemsWithStatus(state)), itemsToPublish)) && areAllItemsShareable;
  sendMetric(`${shouldUnpublishAll ? PublishStatusEnum.UNPUBLISH : PublishStatusEnum.PUBLISH}.start`);
  context.dispatch(startPublishAction({
    unpublishAll: !!shouldUnpublishAll
  }));
  context.dispatch(postUserFlag({
    has_published_library_items: true
  }));

  // Error handling function
  let handleError = (errorMessage: string, errorType: string, savepointId: string | null, errorDetails: any) => {
    context.dispatch(updateLocalLibraryItemsThunk());
    let finalErrorType = errorDetails?.encounteredNonS3PresignedPostError ? "non_s3_error" : errorType;
    trackPublishEventAnalytics(context.getState().library.publishProgress, errorMessage, `${shouldUnpublishAll ? PublishStatusEnum.UNPUBLISH : PublishStatusEnum.PUBLISH}.error.duration`, finalErrorType);
    let error = errorDetails?.error;
    logError("library publish SSP", errorMessage, {
      ...params,
      name: error?.name,
      message: error?.message,
      stack: error?.stack
    }, {
      logToConsole: LogToConsoleMode.ALWAYS,
      reportAsSentryError: true,
      forwardToDatadog: true
    });
    if (savepointId !== null) {
      trackEventAnalytics("Publish ended", {
        savepointId,
        hadException: true
      });
    }
    handlePublishCompletion(context.getState().library.publishProgress, errorDetails?.numSkippedDueToError ?? {
      __tag: "UNKNOWN"
    }, shouldUnpublishAll, context.dispatch, onSuccess, onError, params.savepointDescription, errorDetails?.encounteredNonS3PresignedPostError);
    context.dispatch(finishPublishThunk());
    let {
      hideModalOnPublishRequestFinish = true
    } = params;
    if (hideModalOnPublishRequestFinish) {
      context.dispatch(hideModal());
    }
  };

  // Prepare assets for publishing
  let preparedAssets = getPendingLibraryUpdates(selectStateGroupLibraryItemsWithStatus(state), selectComponentLibraryItemsWithStatus(state), selectStyledLibraryItemsWithStatus(state), selectProcessedLocalVariables(state), selectProcessedLocalVariableSets(state), selectModuleLibraryItemsWithStatus(state), localAssets, selectedFile, state.teams, {
    overridePublishPermissions: !!params.hubFileId,
    moveRemappings: params.moveInformation?.moveRemappings ?? {},
    itemsToPublish,
    forcePublish: params.forcePublish,
    unpublishAll: params.unpublishAll
  })

  // Prepare nodes for thumbnailing
  ;
  (function prepareNodesForThumbnailing(assets: any) {
    let perfTimer = new PerfTimer("publish.client.prep_nodes_for_thumbnailing", {});
    perfTimer.start();
    let textStyles = assets[PrimaryWorkflowEnum.STYLE][PublishStatusEnum.PUBLISH].filter((style: any) => style.style_type === StyleType.TEXT);
    textStyles.forEach((style: any) => {
      Fullscreen.prepNodeForAssetThumbnailRendering(style.node_id);
    });
    let preparationTime = perfTimer.stop();
    if (preparationTime) {
      trackEventAnalytics("Prepared node fields used for thumbnail rendering", {
        elapsedMs: preparationTime,
        textStylesCount: textStyles.length
      }, {
        forwardToDatadog: true
      });
    }
  })(preparedAssets);

  // Wait for frame rendering
  let extraFrames = getFeatureFlags().ds_ssp_thumbnailing_client_prep_wait_extra_frames ? 10 : 2;
  for (let i = 0; i < extraFrames; i++) await waitForAnimationFrame();
  let publishStartTime = performance.now();
  let isSlidesEditor = selectedFile.editor_type === "slides";
  let unpublishSavepointMessage = isSlidesEditor ? getI18nString("design_systems.publish_actions.savepoint_for_unpublish_slides") : getI18nString("design_systems.publish_actions.savepoint_for_unpublish");
  let publishSavepointMessage = isSlidesEditor ? getI18nString("design_systems.publish_actions.savepoint_for_publish_slides") : getI18nString("design_systems.publish_actions.savepoint_for_publish");
  try {
    savepoint = await maybeCreateSavepoint(selectedFile.key, shouldUnpublishAll ? unpublishSavepointMessage : publishSavepointMessage, params.savepointDescription, context.dispatch, true);
  } catch (error) {
    if (navigator.onLine) {
      handleError("Unable to create savepoint during library publish", "create_savepoint", null, {
        error
      });
    } else {
      onError({
        error: LibraryPublishErrorType.Offline,
        publishType: shouldUnpublishAll ? PublishStatusEnum.UNPUBLISH : PublishStatusEnum.PUBLISH,
        dispatch: context.dispatch
      });
      context.dispatch(finishPublishThunk());
    }
    return;
  }
  if (!savepoint) {
    handleError("Created savepoint is null", "create_savepoint", null, undefined);
    return;
  }
  let savepointCreationTime = performance.now() - publishStartTime;
  trackEventAnalytics("Publish start: savepoint successfully created", {
    savepointId: savepoint.id
  });

  // Group components by state group
  let componentsByStateGroup = groupBy(Object.values(state.library.local.components).filter((component: any) => component.isLocal), (component: any) => getContainingStateGroupNodeId(component) || NO_CONTAINING_STATE_GROUP_ID);
  let team = getTeamById(state);

  // Order the updates for publishing
  let {
    orderedUpdates
  } = function createOrderedUpdates(assets: any) {
    let updates: Array<{
      publishType: string;
      assetType: string;
      assets: any[];
    }> = [];
    let addUpdateIfNotEmpty = (update: {
      publishType: string;
      assetType: string;
      assets: any[];
    }) => {
      if (update.assets.length) {
        updates.push(update);
      }
    };

    // Variable sets
    let publishVariableSets = assets[PrimaryWorkflowEnum.VARIABLE_SET][PublishStatusEnum.PUBLISH];
    addUpdateIfNotEmpty({
      publishType: PublishStatusEnum.PUBLISH,
      assetType: PrimaryWorkflowEnum.VARIABLE_SET,
      assets: publishVariableSets
    });
    addUpdateIfNotEmpty({
      publishType: PublishStatusEnum.UNPUBLISH,
      assetType: PrimaryWorkflowEnum.VARIABLE_SET,
      assets: assets[PrimaryWorkflowEnum.VARIABLE_SET][PublishStatusEnum.UNPUBLISH]
    });

    // Variables
    addUpdateIfNotEmpty({
      publishType: PublishStatusEnum.UNPUBLISH,
      assetType: PrimaryWorkflowEnum.VARIABLE,
      assets: assets[PrimaryWorkflowEnum.VARIABLE][PublishStatusEnum.UNPUBLISH]
    });

    // State groups
    let publishStateGroups = assets[PrimaryWorkflowEnum.STATE_GROUP][PublishStatusEnum.PUBLISH];
    addUpdateIfNotEmpty({
      publishType: PublishStatusEnum.PUBLISH,
      assetType: PrimaryWorkflowEnum.STATE_GROUP,
      assets: publishStateGroups
    });
    addUpdateIfNotEmpty({
      publishType: PublishStatusEnum.UNPUBLISH,
      assetType: PrimaryWorkflowEnum.STATE_GROUP,
      assets: assets[PrimaryWorkflowEnum.STATE_GROUP][PublishStatusEnum.UNPUBLISH]
    });

    // Components (filter out those in state groups)
    addUpdateIfNotEmpty({
      publishType: PublishStatusEnum.PUBLISH,
      assetType: PrimaryWorkflowEnum.COMPONENT,
      assets: assets[PrimaryWorkflowEnum.COMPONENT][PublishStatusEnum.PUBLISH].filter((component: any) => !getContainingStateGroupNodeId(component))
    });
    let unpublishComponents = assets[PrimaryWorkflowEnum.COMPONENT][PublishStatusEnum.UNPUBLISH].filter((component: any) => getContainingStateGroupNodeId(component) === null);
    addUpdateIfNotEmpty({
      publishType: PublishStatusEnum.UNPUBLISH,
      assetType: PrimaryWorkflowEnum.COMPONENT,
      assets: unpublishComponents
    });

    // Styles
    addUpdateIfNotEmpty({
      publishType: PublishStatusEnum.PUBLISH,
      assetType: PrimaryWorkflowEnum.STYLE,
      assets: assets[PrimaryWorkflowEnum.STYLE][PublishStatusEnum.PUBLISH]
    });
    addUpdateIfNotEmpty({
      publishType: PublishStatusEnum.UNPUBLISH,
      assetType: PrimaryWorkflowEnum.STYLE,
      assets: assets[PrimaryWorkflowEnum.STYLE][PublishStatusEnum.UNPUBLISH]
    });

    // Modules
    if (isShareableAssetType(PrimaryWorkflowEnum.MODULE)) {
      addUpdateIfNotEmpty({
        publishType: PublishStatusEnum.PUBLISH,
        assetType: PrimaryWorkflowEnum.MODULE,
        assets: assets[PrimaryWorkflowEnum.MODULE][PublishStatusEnum.PUBLISH]
      });
      addUpdateIfNotEmpty({
        publishType: PublishStatusEnum.UNPUBLISH,
        assetType: PrimaryWorkflowEnum.MODULE,
        assets: assets[PrimaryWorkflowEnum.MODULE][PublishStatusEnum.UNPUBLISH]
      });
    }

    // Responsive sets
    if (isShareableAssetType(PrimaryWorkflowEnum.RESPONSIVE_SET)) {
      addUpdateIfNotEmpty({
        publishType: PublishStatusEnum.PUBLISH,
        assetType: PrimaryWorkflowEnum.RESPONSIVE_SET,
        assets: assets[PrimaryWorkflowEnum.RESPONSIVE_SET][PublishStatusEnum.PUBLISH]
      });
      addUpdateIfNotEmpty({
        publishType: PublishStatusEnum.UNPUBLISH,
        assetType: PrimaryWorkflowEnum.RESPONSIVE_SET,
        assets: assets[PrimaryWorkflowEnum.RESPONSIVE_SET][PublishStatusEnum.UNPUBLISH]
      });
    }

    // Code components
    if (isShareableAssetType(PrimaryWorkflowEnum.CODE_COMPONENT)) {
      addUpdateIfNotEmpty({
        publishType: PublishStatusEnum.PUBLISH,
        assetType: PrimaryWorkflowEnum.CODE_COMPONENT,
        assets: assets[PrimaryWorkflowEnum.CODE_COMPONENT][PublishStatusEnum.PUBLISH]
      });
      addUpdateIfNotEmpty({
        publishType: PublishStatusEnum.UNPUBLISH,
        assetType: PrimaryWorkflowEnum.CODE_COMPONENT,
        assets: assets[PrimaryWorkflowEnum.CODE_COMPONENT][PublishStatusEnum.UNPUBLISH]
      });
    }
    return {
      orderedUpdates: updates
    };
  }(preparedAssets);

  // Count assets for analytics
  let assetCounts = orderedUpdates.reduce((counts: any, {
    publishType,
    assetType,
    assets
  }) => {
    let countKey = "";
    switch (assetType) {
      case PrimaryWorkflowEnum.COMPONENT:
        countKey = "numComponentBuffers";
        break;
      case PrimaryWorkflowEnum.STATE_GROUP:
        countKey = "numStateGroupBuffers";
        break;
      case PrimaryWorkflowEnum.STYLE:
        countKey = "numStyleBuffers";
        break;
      case PrimaryWorkflowEnum.VARIABLE_SET:
        countKey = "numVariableSetBuffers";
        break;
      case PrimaryWorkflowEnum.MODULE:
        countKey = "numTemplateBuffers";
        break;
      case PrimaryWorkflowEnum.VARIABLE:
      case PrimaryWorkflowEnum.VARIABLE_OVERRIDE:
        break;
      case PrimaryWorkflowEnum.RESPONSIVE_SET:
        countKey = "numResponsiveSetBuffers";
        break;
      case PrimaryWorkflowEnum.CODE_LIBRARY:
        countKey = "numCodeLibraryBuffers";
        break;
      case PrimaryWorkflowEnum.CODE_FILE:
        countKey = "numCodeFileBuffers";
        break;
      case PrimaryWorkflowEnum.CODE_COMPONENT:
        countKey = "numCodeComponentBuffers";
        break;
      case PrimaryWorkflowEnum.CONSTRAINED_TEMPLATE:
      case PrimaryWorkflowEnum.MANAGED_STRING:
        break;
      default:
        throwTypeError(assetType);
    }
    if (publishType === PublishStatusEnum.UNPUBLISH) {
      countKey = `${countKey}Unpublished`;
    }
    if (countKey in counts) {
      counts[countKey] = assets.length;
    }
    return counts;
  }, {
    numComponentBuffers: 0,
    numStateGroupBuffers: 0,
    numStyleBuffers: 0,
    numVariableSetBuffers: 0,
    numTemplateBuffers: 0,
    numResponsiveSetBuffers: 0,
    numComponentBuffersUnpublished: 0,
    numStateGroupBuffersUnpublished: 0,
    numStyleBuffersUnpublished: 0,
    numVariableSetBuffersUnpublished: 0,
    numTemplateBuffersUnpublished: 0,
    numResponsiveSetBuffersUnpublished: 0,
    numCodeLibraryBuffers: 0,
    numCodeLibraryBuffersUnpublished: 0,
    numCodeFileBuffers: 0,
    numCodeFileBuffersUnpublished: 0,
    numCodeComponentBuffers: 0,
    numCodeComponentBuffersUnpublished: 0
  });
  trackEventAnalytics("Library publish upload", {
    fileKey: selectedFile.key,
    publishMode: getLibrarySourceString(selectLibraryPublishingMode(state)),
    publishScope: params.publishScope,
    libraryModalSessionId: params.libraryModalSessionId,
    orgId: team?.org_id,
    workspaceId: team?.workspace_id,
    teamId: team?.id,
    ...assetCounts
  }, {
    forwardToDatadog: true
  });

  // Prepare assets for thumbnail generation
  let assetsForThumbnails = orderedUpdates.flatMap(update => update.publishType === PublishStatusEnum.PUBLISH ? update.assets : []).reduce((acc: any[], asset: any) => {
    if (asset.type !== PrimaryWorkflowEnum.VARIABLE && asset.type !== PrimaryWorkflowEnum.VARIABLE_SET && isShareableAssetType(asset.type)) {
      if (asset.type === PrimaryWorkflowEnum.MODULE) {
        return acc.concat(asset);
      } else {
        return acc.concat(asset).concat(componentsByStateGroup[asset.node_id] || []);
      }
    }
    return acc;
  }, []);

  // Generate and upload thumbnails
  if (getFeatureFlags().ssp_stop_client_gen_thumb_generation) {
    thumbnailUploadResult = {
      failedThumbnailNodeIds: [],
      s3Paths: [],
      styleMetaByNodeId: {},
      uploadDurationMs: 0,
      encounteredNonS3PresignedPostError: false
    };
  } else {
    try {
      thumbnailUploadResult = await generateAndUploadThumbnails(assetsForThumbnails, shouldUnpublishAll, state.library.local.thumbnails, context);
    } catch (error) {
      handleError("Unable to upload thumbnails during library publish", "upload_thumbnails", savepoint.id, {
        error
      });
      return;
    }
  }
  let {
    failedThumbnailNodeIds,
    s3Paths,
    styleMetaByNodeId,
    uploadDurationMs,
    encounteredNonS3PresignedPostError
  } = thumbnailUploadResult;
  let totalAssets = orderedUpdates.flatMap(update => update.assets).length;

  // Check if all thumbnails failed
  if (failedThumbnailNodeIds.length === totalAssets) {
    handleError(`All thumbnails failed to upload${encounteredNonS3PresignedPostError ? " (non-s3 error)" : ""}`, "upload_thumbnails", savepoint.id, {
      numSkippedDueToError: totalAssets,
      encounteredNonS3PresignedPostError
    });
    return;
  }

  // Filter out failed assets
  let successfulUpdates = orderedUpdates.map(({
    publishType,
    assetType,
    assets
  }) => {
    let successfulAssets = assets.filter(asset => !failedThumbnailNodeIds.includes(asset.node_id));
    return successfulAssets.length > 0 ? {
      publishType,
      assetType,
      assets: successfulAssets
    } : null;
  }).filter(isNotNullish);

  // Handle first draft publishing
  if (getFeatureFlags().first_draft_publish_ux && (params.publishAsFirstDraftKit || params.unpublishAll)) {
    let designSystemKits = FirstDraftHelpers.getLocalDesignSystemKits();
    if (designSystemKits.length > 1) {
      logWarning("first_draft", "Attempting to publish a file with multiple kits", {
        kitNames: designSystemKits.map(kit => kit.name)
      });
    } else if (designSystemKits.length === 1) {
      let kit = designSystemKits[0];
      if (!kit) {
        logWarning("first_draft", "No kit found for publishing", {
          kits: designSystemKits
        });
        return;
      }
      kitMetadata = await Hj(kit.pageId, kit.name, {
        publishType: tf.LIBRARY_PUBLISH,
        localComponents: selectComponentLibraryItemsWithStatus(state),
        localStateGroups: selectStateGroupLibraryItemsWithStatus(state),
        localVariableSets: selectProcessedLocalVariableSets(state),
        isDirectGenCompatible: params.isDirectGenCompatible ?? false
      }, params.firstDraftVariablesForTheme, params.unpublishAll);
    }
  }

  // Prepare publish parameters
  let publishParams = {
    updates: successfulUpdates.map(update => ({
      publishType: update.publishType,
      assetType: update.assetType,
      guids: update.assets.map(asset => {
        let nodeId = p$(asset);
        if (!nodeId) {
          console.warn("Asset with null nodeId:", asset);
          reportError(ServiceCategories.DESIGN_SYSTEMS_EDITOR, new Error("Asset with null node ID found during publish"));
        }
        return nodeId;
      }).filter(isNotNullish)
    })),
    moveRemappings: params.moveInformation?.moveRemappings ?? {},
    s3ThumbnailBufferPaths: s3Paths,
    styleMetaByNodeId,
    clientProtocolVersion: window.mpGlobal.version,
    themeMetaData: params.themePublishData ?? {},
    ...(kitMetadata ? {
      kitMetaData: kitMetadata
    } : {})
  };

  // Get presigned URL for params upload
  try {
    let {
      data: {
        meta
      }
    } = await librariesAPI.postUploadPublishParams();
    presignedUrl = meta.url;
    presignedFields = meta.fields;
  } catch (error) {
    handleError("Unable to get presigned post url for params", "get_presigned_post", savepoint.id, {
      error
    });
    return;
  }

  // Upload publish parameters
  try {
    let encoder = new TextEncoder();
    paramsUploadPath = await uploadToPresignedPost(ServiceCategories.DESIGN_SYSTEMS_EDITOR, "publishChanges.params", presignedUrl, presignedFields, encoder.encode(JSON.stringify(publishParams)), "application/json");
  } catch (error) {
    let isNonS3Error = error instanceof UploadError;
    handleError(`Unable to upload publishing params${isNonS3Error ? " (non-s3 error)" : ""}`, "upload_params", savepoint.id, {
      error,
      encounteredNonS3PresignedPostError: isNonS3Error
    });
    return;
  }

  // Execute library publish
  try {
    let {
      data: {
        meta
      }
    } = await librariesAPI.postLibraryPublish({
      fileKey: selectedFile.key,
      checkpointKey: savepoint.checkpoint_key,
      paramsPath: paramsUploadPath,
      publishToCommunity: !!params.hubFileId,
      publishScope: params.publishScope
    });
    libraryPublishId = meta.library_publish_id;
  } catch (error) {
    handleError("Unable to publish", "generic_error", savepoint.id, {
      error
    });
    return;
  }

  // Notify publish start
  try {
    let commitStartTime = performance.now();
    let publishType = shouldUnpublishAll ? PublishStatusEnum.UNPUBLISH : PublishStatusEnum.PUBLISH;
    context.dispatch(publishProgressAction({
      state: LibraryPublishStatusEnum.UPLOADING,
      publishType,
      progress: 0,
      libraryPublishId,
      savepoint,
      numSkippedPriorToPublish: failedThumbnailNodeIds.length,
      publishStartMs: getPublishStartTime(context.getState().library.publishProgress),
      commitUpdatesDurationMs: commitStartTime,
      clientPreWorkDurationMs: uploadDurationMs,
      createSavePointDurationMs: savepointCreationTime
    }));
    onProgress({
      publishType,
      dispatch: context.dispatch,
      icon: VisualBellIcon.SPINNER
    });
  } catch (error) {
    handleError("Unable to notify publish start", "generic_error", savepoint.id, {
      error
    });
  }
});

// Export statements with original left names but refactored right names
export const De = savePublishDescriptionAction;
export const Sb = startPublishAction;
export const TS = finishPublishThunk;
export const WM = publishRequestFinishedAction;
export const ZS = executePublishProcess;
export const df = publishProgressAction;
export const dh = handlePublishEnded;
export const iA = firstDraftPublishThunk;
export const sb = handlePublishWorkflow;