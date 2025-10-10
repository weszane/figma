import { reportError } from "../905/11";
import { ExportOption } from "../905/44234";
import { sha1Hex } from "../905/125019";
import { fullscreenPerfManager } from "../905/125218";
import { ServiceCategories } from "../905/165054";
import { VisualBellActions } from "../905/302958";
import { getI18nString } from "../905/303541";
import { createOptimistThunk } from "../905/350402";
import { debugState } from "../905/407919";
import { beginSaveAsAction, cancelSaveAsAction, initiateSaveAsAction, updateSaveAsProgressThunk } from "../905/445022";
import { trackEventAnalytics } from "../905/449184";
import { v as _$$v } from "../905/479136";
import { VisualBellIcon } from "../905/576487";
import { getFeatureFlags } from "../905/601108";
import { logInfo } from "../905/714362";
import { handleLoadAllPagesWithVersionCheck } from "../905/807667";
import { sendWithRetry } from "../905/910117";
import { n as _$$n } from "../figma_app/339971";
import { isFigmaEmail, isSupportShareEmail } from "../figma_app/416935";
import { fullscreenValue } from "../figma_app/455680";
import { areAllLoaded } from "../figma_app/623300";
import { getImageManager } from "../figma_app/624361";
import { documentStateTsApi, Fullscreen, ImageCppBindings, ImageExportType, PluginModalType, SceneGraphTsApi, StateSourceType } from "../figma_app/763686";
import { fileApiHandler } from "../figma_app/787550";
import { desktopAPIInstance } from "../figma_app/876459";

// Refactored code: Improved readability, added types, simplified logic, and preserved functionality.
// Origin: $$O1 object with downloadFile and addAssetsToZip methods.

interface ZipContainer {
  zipWriter: any; // Assuming ZipWriter type from external library
  zipPromise: Promise<void>;
}
interface AssetBatchResponse {
  data: {
    meta: {
      s3_urls: Record<string, string>;
    };
  };
}
interface VideoBatchResponse {
  data: {
    meta: {
      videos: Record<string, string>;
    };
  };
}
interface ExportMetadata {
  client_meta: any;
  file_name: string;
  developer_related_links: string[];
}
export const fileExportUtilities = {
  /**
   * Triggers a file download in the browser by creating and clicking a temporary anchor element.
   * @param url - The URL of the file to download.
   * @param filename - Optional. The name to give the downloaded file.
   */
  downloadFile(url: string, filename: string | null = null): void {
    const anchorElement = document.createElement("a");
    anchorElement.setAttribute("href", url);
    if (filename) {
      anchorElement.download = filename;
    }
    document.body.appendChild(anchorElement);
    anchorElement.click();
    document.body.removeChild(anchorElement);
  },
  /**
   * Adds image and video assets to a ZIP archive with retry logic.
   * @param shouldCancel - A function that returns true if the operation should be canceled.
   * @param imageSha1s - An array of SHA1 hashes for images to include.
   * @param videoIds - A set of video IDs to include.
   * @param fileKey - The key of the file being exported.
   * @param zipContainer - An object containing the ZIP writer and a promise for ongoing ZIP operations.
   */
  async addAssetsToZip(shouldCancel: () => boolean, imageSha1s: string[], videoIds: Set<string>, fileKey: string, zipContainer: ZipContainer): Promise<void> {
    let imageKeys: string[] = [];
    let videoKeys: string[] = [];
    let imageUrls: Record<string, string> = {};
    let videoUrls: Record<string, string> = {};
    if (imageSha1s.length === 0 && videoIds.size === 0) {
      return;
    }

    /**
     * Retries an asynchronous operation with exponential backoff.
     * @param operation - The async function to retry.
     * @returns The result of the operation.
     */
    async function retryWithBackoff<T>(operation: () => Promise<T>): Promise<T> {
      let delay = 2000;
      for (;;) {
        try {
          return await operation();
        } catch (error) {
          if (shouldCancel()) {
            throw new Error("Operation canceled");
          }
          await new Promise(resolve => setTimeout(resolve, delay));
          if (delay < 32000) {
            delay *= 2;
          }
        }
      }
    }

    // Fetch image URLs in batches
    for (let i = 0; i < imageSha1s.length && !shouldCancel(); i += 100) {
      await retryWithBackoff(async () => {
        const response: AssetBatchResponse = await sendWithRetry.post(`/file/${fileKey}/image/batch`, {
          sha1s: imageSha1s.slice(i, i + 100)
        });
        imageKeys = imageKeys.concat(Object.keys(response.data.meta.s3_urls));
        imageUrls = {
          ...imageUrls,
          ...response.data.meta.s3_urls
        };
      });
    }

    // Fetch video URLs if any video IDs are provided
    if (videoIds.size > 0) {
      await retryWithBackoff(async () => {
        const response: VideoBatchResponse = await fileApiHandler.getVideos({
          fileKey
        });
        const videos = response.data.meta.videos;
        for (const videoId in videos) {
          if (videoIds.has(videoId)) {
            videoUrls[videoId] = videos[videoId];
          }
        }
        videoKeys = Object.keys(videoUrls);
      });
    }
    let totalAssets = imageKeys.length + videoKeys.length;
    let remainingAssets = totalAssets;
    updateDownloadProgress(remainingAssets, totalAssets);
    const downloadWorkers: Promise<void>[] = [];

    /**
     * Worker function to download assets and add them to the ZIP.
     * @param config - Configuration for the worker, including asset queue and prefix.
     */
    async function downloadWorker(config: {
      prefix: string;
      queue: string[];
      nextIdx: number;
      urls: Record<string, string>;
    }): Promise<void> {
      while (config.nextIdx < config.queue.length && !shouldCancel()) {
        const assetKey = config.queue[config.nextIdx];
        config.nextIdx++;
        await retryWithBackoff(async () => {
          const response = await sendWithRetry.crossOriginGetAny(config.urls[assetKey], null, {
            responseType: "blob"
          });
          const blob = response.response;
          updateDownloadProgress(--remainingAssets, totalAssets);
          if (shouldCancel()) {
            return;
          }
          const zipLibrary = await _$$v();
          zipContainer.zipPromise = zipContainer.zipPromise.then(() => zipContainer.zipWriter.add(`${config.prefix}/${assetKey}`, new zipLibrary.BlobReader(blob), {
            level: 0
          }));
        });
      }
    }

    // Start image download workers
    const imageWorkerConfig = {
      prefix: "images",
      queue: imageKeys,
      nextIdx: 0,
      urls: imageUrls
    };
    for (let i = 0; i < 5; i++) {
      downloadWorkers.push(downloadWorker(imageWorkerConfig));
    }

    // Start video download worker
    downloadWorkers.push(downloadWorker({
      prefix: "videos",
      queue: videoKeys,
      nextIdx: 0,
      urls: videoUrls
    }));
    await Promise.all(downloadWorkers);
  }
};

/**
 * Updates the download progress in the application state.
 * @param pending - The number of assets still pending download.
 * @param total - The total number of assets to download.
 */
function updateDownloadProgress(pending: number, total: number): void {
  debugState.dispatch(updateSaveAsProgressThunk({
    pendingImageDownload: pending,
    totalImages: total
  }));
}

/**
 * Displays a visual bell notification for save/export progress with skip/cancel options.
 * @param mode - The current operation mode (e.g., SaveLocalFile, Export).
 * @param completeSaveAction - Function or string to complete the save action.
 * @param cancelCallback - Optional. Function to call when the operation is canceled.
 */
function showSaveAsProgress(mode: any,
// _$$h type
completeSaveAction: string | (() => void), cancelCallback?: () => void): void {
  const dispatch = debugState.dispatch;
  const state = debugState.getState();
  const appModel = state.mirror.appModel;
  const waitTime = state.saveAsState.waitTime;
  const pagesAllLoaded = areAllLoaded(appModel.pagesList);
  const timeRemaining = 20000 - waitTime;
  const showSkipButton = !navigator.onLine || timeRemaining <= 0;
  dispatch(showSaveAsProgressNotification({
    mode,
    pagesAllLoaded,
    showSkipButton,
    completeSaveAction,
    cancelCallback
  }));
  if (!showSkipButton) {
    setTimeout(() => {
      dispatch(updateSaveAsProgressNotification({
        mode,
        pagesAllLoaded,
        showSkipAfterWaitingMs: 20000,
        completeSaveAction,
        cancelCallback
      }));
    }, timeRemaining);
  }
}

/**
 * Initiates the process of saving a file locally as a ZIP archive.
 * @param file - The file object to save.
 * @param attemptId - A unique ID for this save attempt.
 * @param mode - The current operation mode (e.g., SaveLocalFile).
 */
async function initiateLocalSave(file: any, attemptId: string, mode: any): Promise<void> {
  let exportEventType: string;
  const zipLibraryPromise = _$$v();
  const dispatch = debugState.dispatch;
  const state = debugState.getState();
  let downloadSkipped = false;
  let skipDownloadCallback = () => {};
  let isCanceled = false;
  let cancelCallback = () => {};
  const skipDownloadPromise = new Promise<void>(resolve => {
    skipDownloadCallback = resolve;
  });
  const cancelPromise = new Promise<void>(resolve => {
    cancelCallback = resolve;
  });
  const skipDownload = () => {
    cancelCallback();
    downloadSkipped = true;
  };
  let imageCount = 0;
  let videoCount = 0;

  /**
   * Gathers analytics data for tracking the export process.
   */
  function getExportAnalyticsData() {
    return {
      downloadSkipped,
      attemptId,
      canceled: isCanceled,
      reason: "save-as",
      exportV2: true,
      imageCount,
      videoCount,
      loadId: fullscreenPerfManager.loadID()
    };
  }
  const cancelExport = () => {
    skipDownloadCallback();
    isCanceled = true;
    trackEventAnalytics("File Export V2 Canceled", getExportAnalyticsData());
  };
  showSaveAsProgress(ExportOption.SaveLocalFile, skipDownload, cancelExport);
  const waitForAllPagesPromise = handleLoadAllPagesWithVersionCheck(PluginModalType.SAVE_LOCAL_COPY);
  waitForAllPagesPromise.catch(() => {
    reportError(ServiceCategories.SCENEGRAPH_AND_SYNC, new Error("saveAs: waitForAllPagesPromise rejected"));
    dispatch(VisualBellActions.dequeue({
      matchType: "save-as-progress"
    }));
    dispatch(VisualBellActions.enqueue({
      error: true,
      message: getI18nString("visual_bell.save_as_error")
    }));
  });
  await Promise.race([waitForAllPagesPromise, skipDownloadPromise, cancelPromise]);
  dispatch(VisualBellActions.dequeue({
    matchType: "save-as-progress"
  }));
  const activeDocument = documentStateTsApi.getMutableActiveDocument();
  const allImageIds = ImageCppBindings.findImagesUnder(activeDocument, ["0:0"], ImageExportType.ALL);
  const compressedImages: Record<string, Uint8Array> = {};
  const imageIdsToFetch: string[] = [];
  for (const imageId of allImageIds) {
    const compressedImage = ImageCppBindings.getCompressedImage(imageId);
    if (compressedImage) {
      compressedImages[imageId] = compressedImage;
    } else {
      imageIdsToFetch.push(imageId);
    }
  }
  const videoIds = new Set(ImageCppBindings.findAllVideos());
  imageCount = allImageIds.length;
  videoCount = videoIds.size;
  if (isCanceled) {
    return;
  }
  dispatch(VisualBellActions.enqueue({
    type: "save-as-actual",
    message: getI18nString("visual_bell.saving"),
    icon: VisualBellIcon.SPINNER
  }));
  await new Promise(resolve => setTimeout(resolve, 0));
  const saveResult = Fullscreen.attemptActiveDocumentSave(attemptId);
  if (!saveResult) {
    return;
  }
  const zipLibrary = await zipLibraryPromise;
  const zipWriter = new zipLibrary.ZipWriter(new zipLibrary.BlobWriter("application/zip"));

  /**
   * Adds core file data (canvas, thumbnail, metadata) to the ZIP.
   */
  async function addCoreFileDataToZip(): Promise<void> {
    if (!saveResult) {
      return;
    }
    const developerLinks = Array.from(Fullscreen.getDeveloperRelatedLinks().values()).flat();
    await zipWriter.add("canvas.fig", new zipLibrary.Uint8ArrayReader(saveResult.canvas), {
      level: 0
    });
    await zipWriter.add("thumbnail.png", new zipLibrary.Uint8ArrayReader(saveResult.thumbnail), {
      level: 0
    });
    const metadata: ExportMetadata = {
      client_meta: JSON.parse(saveResult.clientMeta),
      file_name: file.name,
      developer_related_links: developerLinks
    };
    await zipWriter.add("meta.json", new zipLibrary.TextReader(JSON.stringify(metadata)));
    await zipWriter.add("images", null, {
      directory: true
    });
    for (const imageId in compressedImages) {
      const imageData = compressedImages[imageId];
      await zipWriter.add(`images/${imageId}`, new zipLibrary.Uint8ArrayReader(imageData), {
        level: 0
      });
    }
  }
  dispatch(VisualBellActions.dequeue({
    matchType: "save-as-actual"
  }));
  if (!downloadSkipped) {
    showSaveAsProgress(ExportOption.SaveLocalFile, skipDownload, cancelExport);
  }
  const zipContainer: ZipContainer = {
    zipWriter,
    zipPromise: addCoreFileDataToZip()
  };
  if (getFeatureFlags().export_image_download_logging) {
    trackEventAnalytics("Image Download For Export", {
      stage: "start",
      ...getExportAnalyticsData()
    });
  }
  await Promise.race([fileExportUtilities.addAssetsToZip(() => downloadSkipped || isCanceled, imageIdsToFetch, videoIds, file.key, zipContainer), cancelPromise, skipDownloadPromise]);
  if (getFeatureFlags().export_image_download_logging) {
    trackEventAnalytics("Image Download For Export", {
      stage: "finished",
      ...getExportAnalyticsData(),
      userId: state.user?.id,
      fileKey: file.key,
      fileId: file.id,
      orgId: file.parentOrgId
    });
  }
  dispatch(VisualBellActions.dequeue({
    matchType: "save-as-progress"
  }));
  if (isCanceled) {
    return;
  }
  dispatch(VisualBellActions.enqueue({
    type: "save-as-actual",
    message: getI18nString("visual_bell.saving"),
    icon: VisualBellIcon.SPINNER
  }));
  await zipContainer.zipPromise;
  const zipBlob = await zipWriter.close();
  if (isSupportShareEmail(state.user?.email)) {
    let internalEmail = "";
    const authedUsers = state.authedUsers?.byId;
    if (authedUsers) {
      Object.values(authedUsers).forEach(user => {
        const email = user.email;
        if (isFigmaEmail(email) && !isSupportShareEmail(email)) {
          internalEmail = email;
        }
      });
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        const arrayBuffer = fileReader.result as ArrayBuffer;
        const sha1Hash = sha1Hex(new Uint8Array(arrayBuffer));
        trackEventAnalytics("Support Share Download", {
          sha1Hash,
          internalEmail
        });
      };
      fileReader.readAsArrayBuffer(zipBlob);
    }
  }
  const downloadUrl = URL.createObjectURL(zipBlob);
  const fileExtension = Fullscreen.fileExtension();
  const fullFileName = `${file.name}${fileExtension}`;
  const dateSuffix = getI18nString("save_as_actions.save_partial_file_name_suffix", {
    date: new Date().toLocaleDateString().replace(/_|\//g, "-")
  });
  const partialFileName = `${file.name} - ${dateSuffix}${fileExtension}`;
  fileExportUtilities.downloadFile(downloadUrl, downloadSkipped ? partialFileName : fullFileName);
  URL.revokeObjectURL(downloadUrl);
  exportEventType = mode === ExportOption.Export ? "export" : mode === ExportOption.SaveLocalFile ? "save" : mode === ExportOption.CopyAsPNG || mode === ExportOption.CopyAsSVG ? "copy" : "non-export-related";
  trackEventAnalytics("File Export V2 Completed", {
    ...getExportAnalyticsData(),
    exportEvent: exportEventType,
    fileName: fullFileName,
    fileKey: file.key,
    orgId: file.parentOrgId,
    userId: state.user?.id
  });
  dispatch(VisualBellActions.dequeue({
    matchType: "save-as-actual"
  }));
}
export async function exportAllFramesToPdf(file: any, dispatch: any, callback: any): Promise<void> {
  initiateSaveAs(ExportOption.Export, file, dispatch, callback, [SceneGraphTsApi?.getCurrentPage(StateSourceType.REDUX, documentStateTsApi.getActiveDocument()) || ""], "export-all-frames-to-pdf");
}
export async function initiateSaveAs(mode: any, file: any, dispatch: any, completeSaveAction: string | (() => void), nodesToLoad: string[], reason: string, settings?: any): Promise<void> {
  logInfo("initiateSaveAs", "begin", {
    completeSaveAction,
    nodesToLoad,
    mode
  });
  dispatch(initiateSaveAsAction());
  const state = debugState.getState();
  const attemptId = state.saveAsState.attemptId;
  if (getFeatureFlags().antiabuse_file_download_check) {
    try {
      const fileKey = state.openFile?.key || "";
      const response = await sendWithRetry.post(`/api/file_download_log/${fileKey}`, {
        is_desktop: !!desktopAPIInstance
      });
      if (response.data?.meta?.download_err) {
        await fileApiHandler.getWAFValidator();
      }
    } catch (error: any) {
      if (error.status === 429) {
        throw error;
      }
      trackEventAnalytics("File Download Log Error", {
        attemptId,
        error
      });
    }
  }
  if (mode === ExportOption.SaveLocalFile && state.openFile) {
    trackEventAnalytics("File Export Initiated", {
      attemptId,
      reason,
      exportV2: true,
      loadId: fullscreenPerfManager.loadID()
    });
    initiateLocalSave(state.openFile, attemptId, mode);
    return;
  }
  showSaveAsProgress(mode, completeSaveAction);
  const imageExportType = mode === ExportOption.SaveLocalFile ? ImageExportType.ALL : ImageExportType.NON_ANIMATED_ONLY;
  if (getFeatureFlags().export_image_download_logging) {
    trackEventAnalytics("Image Download For Export", {
      stage: "start",
      attemptId,
      reason
    });
  }
  await getImageManager().loadAllImagesUnder(nodesToLoad, imageExportType, reason, updateDownloadProgress);
  if (getFeatureFlags().export_image_download_logging) {
    trackEventAnalytics("Image Download For Export", {
      stage: "finished",
      attemptId,
      reason,
      userId: state.user?.id,
      fileKey: state.openFile?.key,
      fileId: state.openFile?.id,
      orgId: state.openFile?.parentOrgId
    });
  }
  try {
    const saveAsState = debugState.getState().saveAsState;
    if (saveAsState.startTime) {
      dispatch(executeSaveAction({
        mode,
        completeSaveAction,
        settings
      }));
      dispatch(beginSaveAsAction({
        skipped: false
      }));
    } else {
      trackEventAnalytics("File Export V1 Canceled", {
        attemptId
      });
    }
  } catch (error) {
    reportError(ServiceCategories.SCENEGRAPH_AND_SYNC, error);
  }
}
const showSaveAsProgressNotification = createOptimistThunk((storeContext: any, payload: any) => {
  const cancelButton = {
    text: getI18nString("save_as_actions.cancel"),
    action: payload.cancelCallback || (() => {
      storeContext.dispatch(cancelSaveAsAction());
    })
  };
  const getSkipButtonText = (mode: any, isOnline: boolean, pagesLoaded: boolean) => {
    switch (mode) {
      case ExportOption.SaveLocalFile:
        if (isOnline) {
          return getI18nString("save_as_actions.save_partial_file");
        }
        return pagesLoaded ? getI18nString("save_as_actions.save_without_images") : getI18nString("save_as_actions.save_partial_file");
      case ExportOption.Export:
        if (isOnline) {
          return null;
        }
        return pagesLoaded ? getI18nString("save_as_actions.export_without_images") : getI18nString("save_as_actions.export_without_content");
      default:
        return null;
    }
  };
  const skipButtonText = getSkipButtonText(payload.mode, navigator.onLine, payload.pagesAllLoaded);
  let skipButton = null;
  if (skipButtonText) {
    skipButton = {
      text: skipButtonText,
      action: () => {
        trackEventAnalytics("image_loading_canceled", {
          mode: payload.mode
        });
        storeContext.dispatch(executeSaveAction({
          mode: payload.mode,
          completeSaveAction: payload.completeSaveAction
        }));
        storeContext.dispatch(beginSaveAsAction({
          skipped: true
        }));
      }
    };
  }
  const getMessage = (isOnline: boolean, pagesLoaded: boolean) => {
    if (isOnline) {
      return pagesLoaded ? getI18nString("save_as_actions.downloading_images") : getI18nString("save_as_actions.downloading_content");
    }
    return pagesLoaded ? getI18nString("save_as_actions.cannot_download_images") : getI18nString("save_as_actions.cannot_download_content");
  };
  const notification = {
    type: "save-as-progress",
    progressKey: "save-as",
    message: getMessage(navigator.onLine, payload.pagesAllLoaded),
    icon: VisualBellIcon.PROGRESS,
    button: skipButton ? {
      primary: cancelButton,
      secondary: skipButton
    } : cancelButton
  };
  storeContext.dispatch(VisualBellActions.enqueue(notification));
});
const updateSaveAsProgressNotification = createOptimistThunk((storeContext: any, payload: any) => {
  const state = storeContext.getState();
  if (!state.visualBell.find((item: any) => item.type === "save-as-progress") || !state.saveAsState?.startTime) {
    return;
  }
  const elapsedTime = (state.saveAsState.waitTime || 0) + Date.now() - state.saveAsState.startTime;
  if (!navigator.onLine || elapsedTime > payload.showSkipAfterWaitingMs) {
    storeContext.dispatch(VisualBellActions.clearAllExcept(["plugins-status"]));
    storeContext.dispatch(showSaveAsProgressNotification({
      mode: payload.mode,
      pagesAllLoaded: payload.pagesAllLoaded,
      showSkipButton: true,
      completeSaveAction: payload.completeSaveAction,
      cancelCallback: payload.cancelCallback
    }));
  }
});
const executeSaveAction = createOptimistThunk((storeContext: any, payload: any) => {
  storeContext.dispatch(VisualBellActions.clearAllExcept(["plugins-status"]));
  const saveAsState = storeContext.getState().saveAsState;
  storeContext.dispatch(_$$n.set({
    message: function (mode) {
      switch (mode) {
        case ExportOption.SaveLocalFile:
          return getI18nString("visual_bell.saving");
        case ExportOption.Export:
          return getI18nString("visual_bell.exporting");
        case ExportOption.CopyAsPNG:
          return getI18nString("save_as_actions.copy_as_png_progress");
        case ExportOption.CopyAsSVG:
          return getI18nString("save_as_actions.copy_as_svg_progress");
        case ExportOption.RasterizeSelection:
          return getI18nString("save_as_actions.rasterize_selection_progress");
        default:
          return "";
      }
    }(payload.mode),
    showLoadingSpinner: false,
    callback: () => {
      if (typeof payload.completeSaveAction === "string") {
        fullscreenValue.triggerAction(payload.completeSaveAction, {
          source: "menu",
          attemptId: saveAsState.attemptId,
          settings: payload.settings
        });
      } else {
        payload.completeSaveAction();
      }
    }
  }));
});
export const Dc = initiateSaveAs;
export const hI = fileExportUtilities;
export const hV = ExportOption;
export const mU = exportAllFramesToPdf;
export {ExportOption}
