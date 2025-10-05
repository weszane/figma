import { reportError } from "../905/11";
import { W } from "../905/39853";
import { createActionCreator } from "../905/73481";
import { hideModal } from "../905/156213";
import { determineFileType, getFileExtension, ImportEventType, ImportExportStatus, isPdfFile } from "../905/163189";
import { ServiceCategories } from "../905/165054";
import { getI18nString } from "../905/303541";
import { createOptimistThunk } from "../905/350402";
import { trackEventAnalytics } from "../905/449184";
import { subscribeAndAwaitData } from "../905/553831";
import { getFeatureFlags } from "../905/601108";
import { getImportPermissionErrorMessage, importErrorTracker, ImportSpecificError, resetImportErrorTracker } from "../905/615657";
import { fileImporter } from "../905/642505";
import { logWarning } from "../905/714362";
import { generateUUIDv4 } from "../905/871474";
import { trackPdfImportCompletion } from "../905/902099";
import { FileImport } from "../figma_app/43951";
import { FFileType } from "../figma_app/191312";
import { throwTypeError } from "../figma_app/465776";
import { isTeamFolderV2 } from "../figma_app/528509";
import { AddOperationType, isTeamAllowedToAddFiles } from "../figma_app/598018";
import { canCreateFileType, canCreateFileTypeAsync } from "../figma_app/687776";
import { selectFolderView } from "../figma_app/976345";
import { isZipFile } from "./35608";

/**
 * Process the next file in the import queue
 * Original name: $$C6
 */
export const processNextFileImport = createOptimistThunk(async ({
  dispatch
}, getState) => {
  // Early exit conditions
  if (!fileImporter) return;
  const state = getState();
  if (state.fileImport.isProcessingFile) return;
  dispatch(startProcessingFile());
  const queueItemId = state.fileImport.queue[0];
  if (queueItemId === undefined) return;
  const fileItem = state.fileImport.files[queueItemId];
  if (!fileItem || isPdfFile(fileItem.name) && state.fileImport.step !== ImportEventType.FILE_IMPORT_WITH_CONFIRMED_PDF || fileImporter!.hasCanceled()) {
    return;
  }
  if (fileItem.status === ImportExportStatus.FAILURE) {
    dispatch(processNextQueuedFile());
    return;
  }

  // Mark file as busy
  dispatch(updateFileImportItem({
    id: queueItemId,
    status: ImportExportStatus.BUSY
  }));
  const startTime = Date.now();
  const fileNameWithoutExtension = fileItem.name.replace(/\.[^.]+$/, "");
  const fileExtension = getFileExtension(fileItem.name).toLowerCase();
  const userDraftsFolderId = state.user?.drafts_folder_id;
  const targetFolderId = fileItem.folderId ?? (state.selectedView.view === "folder" ? state.selectedView.folderId : userDraftsFolderId);

  // Get project information
  const projectData = targetFolderId && (await subscribeAndAwaitData(FileImport, {
    projectId: targetFolderId
  }, {
    retainMs: 30000
  })).project;
  if (!projectData) {
    dispatch(updateFileImportItem({
      id: queueItemId,
      status: ImportExportStatus.FAILURE,
      message: getI18nString("fullscreen.file_import.unable_to_import")
    }));
    dispatch(processNextQueuedFile());
    return;
  }
  const fileType = determineFileType(fileItem);
  const team = projectData.team;
  const teamId = team?.id;

  // Check team file limits
  if (team && !isTeamAllowedToAddFiles(team, {
    type: AddOperationType.ADD_FILE,
    editorType: fileType,
    isDestinationTeamDrafts: isTeamFolderV2(projectData)
  })) {
    const limitErrorMessage = (() => {
      const teamName = team.name;
      switch (fileType) {
        case FFileType.WHITEBOARD:
          return getI18nString("fullscreen.file_import.team_name_is_at_the_fig_jam_file_limit", {
            teamName
          });
        case FFileType.SLIDES:
          return getI18nString("fullscreen.file_import.team_name_is_at_the_figma_slides_file_limit", {
            teamName
          });
        case FFileType.DESIGN:
          return getI18nString("fullscreen.file_import.team_name_is_at_the_figma_file_limit", {
            teamName
          });
        case FFileType.SITES:
          return getI18nString("fullscreen.file_import.your_team_doesnt_have_permissions_to_import_sites_files");
        case FFileType.COOPER:
          return getI18nString("fullscreen.file_import.team_name_is_at_the_figma_buzz_file_limit", {
            teamName
          });
        case FFileType.FIGMAKE:
          return getI18nString("fullscreen.file_import.team_name_is_at_the_figma_make_file_limit", {
            teamName
          });
        default:
          throwTypeError(fileType);
      }
    })();
    dispatch(updateFileImportItem({
      id: queueItemId,
      status: ImportExportStatus.FAILURE,
      message: limitErrorMessage
    }));
    dispatch(failFileImportOnLimit());
    dispatch(processNextQueuedFile());
    return;
  }

  // Check file creation permissions
  if (!canCreateFileType(projectData, fileType)) {
    const permissionErrorMessage = getImportPermissionErrorMessage(projectData.name);
    const canCreateInDrafts = !!userDraftsFolderId && targetFolderId !== userDraftsFolderId && (await canCreateFileTypeAsync(userDraftsFolderId, fileType));
    dispatch(updateFileImportItem({
      id: queueItemId,
      status: ImportExportStatus.FAILURE,
      message: permissionErrorMessage,
      cta: canCreateInDrafts ? {
        text: getI18nString("fullscreen.file_import.go_to_drafts"),
        action: () => {
          dispatch(selectFolderView(userDraftsFolderId));
        }
      } : undefined
    }));
    dispatch(processNextQueuedFile());
    return;
  }

  // Determine file format
  let fileFormat: string = "unknown";
  if ([".pdf", ".svg", ".sketch", ".zip", ".jamboard"].includes(fileExtension)) {
    fileFormat = fileExtension.substring(1);
  } else if ([".gif", ".png", ".jpg", ".jpeg"].includes(fileExtension)) {
    fileFormat = "img";
  } else if ([".fig", ".jam", ".deck", ".site", ".buzz", ".make"].includes(fileExtension)) {
    const fileHeader = new Uint8Array(await fileItem.blob.slice(0, 20).arrayBuffer());
    fileFormat = isZipFile(fileHeader) ? "fig-zip" : "fig-kiwi";
  }
  const importId = generateUUIDv4();
  trackEventAnalytics("File Import Begin", {
    importId
  });
  fileItem.timer.start();
  try {
    // Perform the actual file import
    const importResult = await W(dispatch, {
      basename: fileNameWithoutExtension,
      extension: fileExtension
    }, getFeatureFlags(), fileImporter!,
    // Add non-null assertion operator
    fileItem, fileFormat, state.fileImport.selectedPdfType, targetFolderId);
    const updatePayload = {
      id: queueItemId,
      ...(importResult.file ? {
        fileKey: importResult.file?.fileKey
      } : {})
    };

    // Handle warnings or success
    if (importResult.warnings.length) {
      dispatch(updateFileImportItem({
        ...updatePayload,
        status: ImportExportStatus.WARNING,
        message: importResult.warnings
      }));
    } else {
      dispatch(updateFileImportItem({
        ...updatePayload,
        status: ImportExportStatus.SUCCESS
      }));
    }
    const endTime = Date.now();
    console.log(`conversion took ${(endTime - startTime) / 1000} seconds`);
    dispatch(processNextQueuedFile());

    // Track successful import
    if (importResult.file) {
      const fileKey = importResult.file?.fileKey;
      fileItem.timer.stop();
      const importEventData = {
        ...importResult.file.sketchMeta,
        importId,
        extension: fileExtension,
        format: fileFormat,
        worked: true,
        teamId,
        fileKey,
        elapsedSeconds: fileItem.timer.getElapsedTime() / 1000
      };
      trackEventAnalytics("File Imported", importEventData, {
        forwardToDatadog: true
      });
    }
  } catch (error) {
    try {
      // Normalize error
      if (typeof error === "string") {
        // eslint-disable-next-line no-ex-assign
        error = new Error(error);
      }
      dispatch(updateFileImportItem({
        id: queueItemId,
        status: fileImporter!.hasCanceled() ? ImportExportStatus.CANCELED : ImportExportStatus.FAILURE,
        message: error && error.message ? `${error.message}` : getI18nString("fullscreen.file_import.internal_error_please_try_again_later")
      }));

      // Update format if inferred
      const inferredFormat = (error as any).inferredFormat;
      if (inferredFormat) {
        fileFormat = inferredFormat;
      }
      const errorObj = error as any;

      // Track failed import
      trackEventAnalytics("File Imported", {
        importId,
        extension: fileExtension,
        format: fileFormat,
        worked: false,
        canceled: fileImporter!.hasCanceled(),
        uploadFailed: errorObj.imageUploadError || false,
        teamId
      }, {
        forwardToDatadog: true
      });
      if (errorObj.imageUploadError) {
        trackEventAnalytics("File Import Image Upload Error", {
          extension: fileExtension,
          format: fileFormat,
          teamId
        });
      }

      // Report error unless it's an ImportSpecificError or cancellation
      if (!(error instanceof ImportSpecificError)) {
        if (fileImporter!.hasCanceled()) return;
        if (!Object.prototype.hasOwnProperty.call(error, "reportError") || (error as any).reportError) {
          const warnings = (error as any).warnings;
          if (warnings?.length > 0) {
            for (const warning of warnings) {
              logWarning("import", warning);
            }
          }
          reportError(ServiceCategories.SCENEGRAPH_AND_SYNC, (error as any).cause ? (error as any).cause : error);
        }
      }
    } catch (reportingError) {
      reportError(ServiceCategories.SCENEGRAPH_AND_SYNC, reportingError);
    } finally {
      dispatch(processNextQueuedFile());
    }
  }
});

// Action creators
export const setFromFileImportNuxStep = createActionCreator("FILE_IMPORT_SET_FROM_FILE_IMPORT_NUX_STEP");
export const showImportPdfConfirmation = createActionCreator("FILE_IMPORT_SHOW_IMPORT_PDF_CONFIRMATION");
export const showImportFigmaDesignRepo = createActionCreator("FILE_IMPORT_SHOW_IMPORT_FIGMA_DESIGN_REPO");
export const clearFileImports = createActionCreator("FILE_IMPORT_CLEAR_IMPORTS");
export const failFileImportOnLimit = createActionCreator("FILE_IMPORT_FAIL_ON_LIMIT");
export const updateFileImportItem = createActionCreator("FILE_IMPORT_UPDATE_ITEM");
export const addFileImportToQueue = createActionCreator("FILE_IMPORT_ADD_TO_QUEUE");
export const clearFileImportQueue = createActionCreator("FILE_IMPORT_CLEAR_QUEUE");

/**
 * Cancel all file imports
 * Original name: $$F15
 */
export const cancelAllFileImports = createOptimistThunk(({
  dispatch,
  getState
}) => {
  if (!fileImporter) return;
  const {
    fileImport
  } = getState();
  if (fileImport.queue.length > 0) {
    // Track cancellation analytics
    const extensions = new Set<string>();
    fileImport.queue.forEach(itemId => {
      const fileName = fileImport.files[itemId]?.name ?? "";
      const extension = getFileExtension(fileName);
      extensions.add(extension.slice(1));
    });
    const fileType = extensions.size === 1 ? Array.from(extensions)[0] : extensions.size > 1 ? "multiple" : "";
    trackEventAnalytics("File Import Cancelled", {
      numFilesCancelled: fileImport.queue.length,
      fileType
    }, {
      forwardToDatadog: true
    });

    // Handle PDF cancellations
    fileImport.queue.forEach(itemId => {
      const fileItem = fileImport.files[itemId];
      const fileName = fileItem.name;
      if (isPdfFile(fileName)) {
        trackPdfImportCompletion({
          state: "canceled"
        }, "file_browser", fileItem.blob?.size ?? 0, fileImport.selectedPdfType);
      }
    });
  }

  // Abort all pending imports
  importErrorTracker.forEach(xhr => {
    (xhr as any).onload = () => {};
    (xhr as any).abort();
  });
  fileImporter!.cancelConversion();
  dispatch(clearFileImportQueue());
  dispatch(processNextQueuedFile());

  // Mark remaining items as canceled
  const files = getState().fileImport.files;
  for (const itemId of Object.keys(files).filter(id => {
    const file = files[Number(id)];
    return !!file && (file.status === ImportExportStatus.WAITING || file.status === ImportExportStatus.BUSY);
  })) {
    dispatch(updateFileImportItem({
      id: Number(itemId),
      status: ImportExportStatus.CANCELED
    }));
  }
  resetImportErrorTracker();
});
export const startProcessingFile = createActionCreator("FILE_IMPORT_START_PROCESSING_FILE");
export const doneProcessingFile = createActionCreator("FILE_IMPORT_DONE_PROCESSING_FILE");

/**
 * Process the next queued file
 * Original name: U
 */
export const processNextQueuedFile = createOptimistThunk(({
  dispatch
}, getState) => {
  dispatch(doneProcessingFile());
  if (getState().fileImport.queue.length > 0) {
    dispatch(processNextFileImport());
  }
});
export const confirmImportPdf = createActionCreator("FILE_IMPORT_CONFIRM_IMPORT_PDF");

/**
 * Process confirmed PDF import
 * Original name: $$V8
 */
export const processConfirmedPdfImport = createOptimistThunk(({
  dispatch,
  getState
}, payload) => {
  dispatch(confirmImportPdf(payload));
  if (getState().fileImport.queue.length > 0) {
    dispatch(processNextFileImport());
  }
});
export const cancelImportPdf = createActionCreator("FILE_IMPORT_CANCEL_IMPORT_PDF");

/**
 * Process PDF import cancellation
 * Original name: $$z0
 */
export const processPdfImportCancellation = createOptimistThunk(({
  dispatch
}, getState) => {
  dispatch(cancelImportPdf());
  const state = getState();
  if (state.fileImport.queue.length > 0) {
    dispatch(processNextFileImport());
  } else if (Object.values(state.fileImport.files).every((file: ObjectOf) => isPdfFile(file.name))) {
    dispatch(hideModal());
    dispatch(clearFileImports());
  }
});

// Exported actions
export const AU = processPdfImportCancellation;
export const Fd = confirmImportPdf;
export const Fj = cancelImportPdf;
export const GR = showImportFigmaDesignRepo;
export const JK = showImportPdfConfirmation;
export const JR = startProcessingFile;
export const Jb = processNextFileImport;
export const Ud = addFileImportToQueue;
export const _9 = processConfirmedPdfImport;
export const cY = clearFileImports;
export const fk = updateFileImportItem;
export const lg = clearFileImportQueue;
export const n$ = doneProcessingFile;
export const rf = setFromFileImportNuxStep;
export const rj = failFileImportOnLimit;
export const yD = cancelAllFileImports;
