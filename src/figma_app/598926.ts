import { stopCreateNewFolder } from "../905/34809"
import { createActionCreator } from "../905/73481"
import { rolePostAction } from "../905/98702"
import { handleOptimistTransactionWithError } from "../905/150006"
import { popModalStack } from "../905/156213"
import { VisualBellActions } from "../905/302958"
import { getI18nString } from "../905/303541"
import { createOptimistThunk } from "../905/350402"
import { sendRoleInvites } from "../905/351260"
import { AccessLevelEnum } from "../905/557142"
import { FlashActions } from "../905/573154"
import { sendWithRetry } from "../905/910117"
import { selectViewAction } from "../905/929976"
import { roleServiceAPI } from "../figma_app/66216"
import { FResourceCategoryType } from "../figma_app/191312"
import { trackFolderEvent } from "../figma_app/314264"
import { generateTempId, validateFolderName } from "../figma_app/528509"

// Origin: /Users/allen/github/fig/src/figma_app/598926.ts
// Refactored: Renamed variables, added TypeScript types/interfaces, simplified logic, added comments, improved readability.
// Assumed dependencies: Redux-like store context, imported action creators, API utilities, and constants.

// Type definitions for folder-related actions
interface UpdateFolderDescriptionPayload {
  folderId: string;
  description: string;
}

interface PinUnpinFilePayload {
  fileKey: string;
  folderId: string;
}

interface CreateFolderPayload {
  name: string;
  teamId: string;
  isInviteOnly?: boolean;
  isViewOnly?: boolean;
  sharingAudienceControl?: any;
  teamAccess?: any;
  inviteEmails?: string[];
  inviteLevel?: AccessLevelEnum;
  onFolderCreated?: (id: string, name: string) => void;
  shouldRedirect?: boolean;
}

// Optimist thunk for updating folder description
export const updateFolderDescriptionThunk = createOptimistThunk(
  async (context, payload: UpdateFolderDescriptionPayload) => {
    try {
      const response = await sendWithRetry.put(`/api/folders/${payload.folderId}/description`, {
        description: payload.description,
      });
      // Dispatch action to update folder meta
      context.dispatch(folderPutAction({ folder: response.data.meta }));
    } catch (error) {
      console.error(error);
      context.dispatch(
        FlashActions.error(getI18nString("file_browser.file_browser_actions.update_subscription_error"))
      );
    }
  }
);

// Action creators
export const folderUnpinFileAction = createActionCreator("FOLDER_UNPIN_FILE");
export const folderPinFileAction = createActionCreator("FOLDER_PIN_FILE");
export const folderSetPinnedFileAction = createActionCreator("FOLDER_SET_PINNED_FILE");
export const folderDeleteLgShimAction = createActionCreator("FOLDER_DELETE_LG_SHIM");
export const folderDeleteAction = createActionCreator("FOLDER_DELETE");
export const folderClearAction = createActionCreator("FOLDER_CLEAR");
export const folderLoadAction = createActionCreator("FOLDER_LOAD");
export const folderPutUpdatedAtAction = createActionCreator("FOLDER_PUT_UPDATED_AT");
export const folderLoadedAction = createActionCreator("FOLDER_LOADED");
export const folderPutAction = createActionCreator("FOLDER_PUT");
export const folderBatchPostAction = createActionCreator("FOLDER_BATCH_POST");
export const folderPostAction = createActionCreator("FOLDER_POST");

// Optimist thunk for unpinning a file from a folder
export const unpinFileThunk = createOptimistThunk(
  async (context, payload: PinUnpinFilePayload) => {
    const optimistic = context.optimisticDispatch(folderUnpinFileAction(payload));
    try {
      await sendWithRetry.del(`/api/folders/${payload.fileKey}/pin`);
      optimistic.commit();
    } catch {
      optimistic.revert();
      context.dispatch(
        FlashActions.error(getI18nString("file_browser.file_browser_actions.file_unpin_error"))
      );
    }
  }
);

// Optimist thunk for pinning a file to a folder
export const pinFileThunk = createOptimistThunk(
  async (context, payload: PinUnpinFilePayload) => {
    const optimistic = context.optimisticDispatch(folderPinFileAction(payload));
    trackFolderEvent("file_browser_folder_pin_file", payload.folderId, null, context.getState(), {
      fileKey: payload.fileKey,
    });
    try {
      await sendWithRetry.post(`/api/folders/${payload.fileKey}/pin`);
      optimistic.commit();
      context.dispatch(
        VisualBellActions.enqueue({
          error: false,
          message: getI18nString("file_browser.file_browser_actions.file_pinned_to_project"),
        })
      );
    } catch {
      optimistic.revert();
      context.dispatch(
        FlashActions.error(getI18nString("file_browser.file_browser_actions.file_pin_error"))
      );
    }
  }
);

// Optimist thunk for creating a new folder
export const createFolderThunk = createOptimistThunk(
  async (context, payload: CreateFolderPayload) => {
    // Validate folder name
    const validationError = validateFolderName(payload.name);
    if (validationError) {
      context.dispatch(FlashActions.error(validationError));
      return null;
    }

    // Close modal and stop folder creation UI
    context.dispatch(popModalStack());
    context.dispatch(stopCreateNewFolder());

    // Ensure required fields are present
    if (
      payload.isInviteOnly === undefined &&
      payload.isViewOnly === undefined &&
      payload.teamAccess === undefined
    ) {
      context.dispatch(
        FlashActions.error("inviteOnly and viewOnly fields or teamAccess field must be defined")
      );
      return null;
    }

    // Prepare optimistic folder object
    const tempFolder = {
      id: generateTempId(),
      name: payload.name,
      description: null,
      path: payload.name,
      team_id: payload.teamId,
      is_subscribed: false,
      is_favorited: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      is_invite_only: false,
      is_view_only: false,
      settings: { webhooks: {} },
      deleted_at: null,
      sharing_audience_control: null,
      team_access: null,
      trashed_at: null,
      trashed_user_id: null,
      is_abandoned_drafts: false,
    };

    // API call to create folder
    const requestPromise = sendWithRetry.post("/api/folders", {
      team_id: payload.teamId,
      path: payload.name,
      is_invite_only: payload.isInviteOnly,
      is_view_only: payload.isViewOnly,
      sharing_audience_control: payload.sharingAudienceControl,
      team_access: payload.teamAccess,
    }).then(({ data }) => {
      // Remove temp folder from state
      context.dispatch(folderDeleteAction({ folderIds: [tempFolder.id] }));

      // Find created folder by name
      const createdFolders = data.meta;
      for (const folder of createdFolders) {
        if (folder.name === payload.name) {
          context.dispatch(folderPostAction(folder));
          payload.onFolderCreated?.(folder.id, folder.name);

          trackFolderEvent("Folder Created", folder.id, folder.team_id, context.getState(), {
            sharingAudienceControl: payload.sharingAudienceControl,
            teamAccess: payload.teamAccess,
          });

          // Invite users if needed
          const currentUser = context.getState().user;
          if (payload.inviteEmails?.length && payload.teamAccess) {
            context.dispatch(
              sendRoleInvites({
                emails: payload.inviteEmails,
                emailsToExclude: currentUser ? new Set([currentUser.email]) : undefined,
                resourceType: FResourceCategoryType.FOLDER,
                resourceIdOrKey: folder.id,
                level: payload.inviteLevel || AccessLevelEnum.VIEWER,
                source: "new_project_creation_modal",
                teamId: payload.teamId,
              })
            );
          }

          // Fetch roles for the new folder
          roleServiceAPI.getRoles({
            resourceId: folder.id,
            resourceType: FResourceCategoryType.FOLDER,
          }).then(({ data }: { data: any }) => {
            for (const role of data.meta) {
              context.dispatch(rolePostAction({ role }));
            }
          });

          // Redirect if requested
          if (payload.shouldRedirect) {
            context.dispatch(
              selectViewAction({
                view: "folder",
                folderId: folder.id,
              })
            );
          }
          break;
        }
      }
      return createdFolders;
    });

    // Handle optimistic transaction with error fallback
    return handleOptimistTransactionWithError({
      store: context,
      requestPromise,
      fallbackError: getI18nString("file_browser.file_browser_actions.create_project_error"),
      next: context.dispatch,
      action: folderPostAction(tempFolder),
    });
  }
);

// Optimist thunk for updating folder subscription status
createOptimistThunk(
  async (
    context,
    {
      folderId,
      teamId,
      isSubscribed,
    }: { folderId: string; teamId: string; isSubscribed: boolean }
  ) => {
    const eventType = isSubscribed ? "Folder Subscriber Added" : "Folder Subscriber Deleted";
    trackFolderEvent(eventType, folderId, teamId, context.getState());
    const requestPromise = sendWithRetry.put(`/api/folders/${folderId}`, {
      is_subscribed: isSubscribed,
    });
    handleOptimistTransactionWithError({
      store: context,
      requestPromise,
      fallbackError: getI18nString("file_browser.file_browser_actions.update_project_error"),
      next: context.dispatch,
      action: folderPutAction({
        folder: {
          id: folderId,
          is_subscribed: isSubscribed,
        },
      }),
    });
  }
);

// Exported actions and thunks
export const $l = folderBatchPostAction;
export const $o = folderPinFileAction;
export const HA = folderDeleteLgShimAction;
export const IU = folderClearAction;
export const Kc = folderLoadedAction;
export const MR = folderSetPinnedFileAction;
export const Q2 = folderUnpinFileAction;
export const bE = folderPostAction;
export const gO = pinFileThunk;
export const qp = folderLoadAction;
export const ub = updateFolderDescriptionThunk;
export const vt = createFolderThunk;
export const y2 = folderPutUpdatedAtAction;
export const yH = folderDeleteAction;
export const yJ = folderPutAction;
export const z6 = unpinFileThunk;
