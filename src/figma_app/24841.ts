import { reportError } from "../905/11"
import { createActionCreator } from "../905/73481"
import { showModalHandler } from "../905/156213"
import { ServiceCategories } from "../905/165054"
import { sessionApiInstance } from "../905/202181"
import { INITIAL_SESSION_STATE, REFRESH_SESSION_STATE_ACTION } from "../905/235145"
import { VisualBellActions } from "../905/302958"
import { getI18nString } from "../905/303541"
import { createOptimistThunk } from "../905/350402"
import { trackEventAnalytics } from "../905/449184"
import { customHistory } from "../905/612521"
import { logInfo } from "../905/714362"
import { IpcStorageHandler } from "../905/724705"
import { putUser } from "../905/890368"
import { sendWithRetry } from "../905/910117"
import { setSessionStateAction } from "../905/929976"
import { clearAnalytics } from "../figma_app/314264"
import { U2 } from "../figma_app/545293"
import { xv as _$$xv, xv } from "../figma_app/701982"
import { isCommunityHubView } from "../figma_app/740025"
import { hasUnsyncedAutosaveFiles } from "../figma_app/840917"
import { desktopAPIInstance } from "../figma_app/876459"
import { sendIpcRefreshSession } from "../figma_app/976345"

// Origin: /Users/allen/github/fig/src/figma_app/24841.ts
// Refactored: Renamed variables, added types/interfaces, simplified logic, added comments, improved readability and type safety.

// Assumed dependencies:
// - createOptimistThunk, createActionCreator, showModalHandler, ServiceCategories, sessionApiInstance, INITIAL_SESSION_STATE, REFRESH_SESSION_STATE_ACTION, VisualBellActions, getI18nString, trackEventAnalytics, customHistory, logInfo, IpcStorageHandler, putUser, sendWithRetry, setSessionState, clearAnalytics, U2, xv, _$$xv, isCommunityHubView, hasUnsyncedAutosaveFiles, desktopAPIInstance, sendIpcRefreshSession

// Type definitions inferred from code logic
interface User {
  id: string
  email: string
}

interface AuthedUsersState {
  orderedIds: string[]
  byId: Record<string, User>
}

interface SessionState {
  authedUsers: AuthedUsersState
  selectedView: any
}

interface ThunkDispatch {
  dispatch: (action: any) => void
  getState: () => SessionState
}

interface LogoutThunkPayload {
  user: User
}

// Migrates personal drafts for the user, logs info if migration fails
export const migratePersonalDraftsThunk = createOptimistThunk(async () => {
  try {
    await sendWithRetry.post("/api/user/migrate_personal_drafts")
  }
  catch (error) {
    logInfo("planSpaces", "Personal drafts not auto-migrated for user", error)
  }
})

// Checks for unsynced autosave files for any authed user, shows modal if found, otherwise logs out
export const checkUnsyncedAutosaveFilesThunk = createOptimistThunk(async (dispatchApi: ThunkDispatch) => {
  try {
    const state = dispatchApi.getState()
    for (const userId of state.authedUsers.orderedIds) {
      if (await hasUnsyncedAutosaveFiles(userId)) {
        showAutosaveModal(dispatchApi, Object.values(state.authedUsers.byId), logoutAllUsersThunk)
        return
      }
    }
  }
  catch {
    reportError(ServiceCategories.SCENEGRAPH_AND_SYNC, new Error("Failed to get autosave files for user"))
  }
  dispatchApi.dispatch(logoutAllUsersThunk())
})

// Logs out all users, clears analytics, redirects appropriately
export const logoutAllUsersThunk = createOptimistThunk((dispatchApi: ThunkDispatch) => {
  if (desktopAPIInstance) {
    customHistory.redirect("/logout")
    return
  }
  const isCommunityView = isCommunityHubView(dispatchApi.getState().selectedView)
  sessionApiInstance.logoutAllUsers()
    .then(() => {
      clearAnalytics()
      U2.clear()
      new IpcStorageHandler().sendToAllTabs(REFRESH_SESSION_STATE_ACTION, INITIAL_SESSION_STATE)
      customHistory.redirect(`${isCommunityView ? "/community" : ""}/?fuid=`)
    })
    .catch((error: any) => {
      const message = error.data?.message || getI18nString("file_browser.file_browser_actions.logout_error_without_email")
      dispatchApi.dispatch(VisualBellActions.enqueue({
        error: true,
        message,
      }))
    })
})

// Checks for unsynced autosave files for a specific user, shows modal if found, otherwise logs out user
export const checkUserUnsyncedAutosaveFilesThunk = createOptimistThunk(async (dispatchApi: ThunkDispatch, payload: LogoutThunkPayload) => {
  try {
    if (await hasUnsyncedAutosaveFiles(payload.user.id)) {
      showAutosaveModal(dispatchApi, [payload.user], logoutSingleUserThunk.bind(null, payload))
    }
    else {
      dispatchApi.dispatch(logoutSingleUserThunk(payload))
    }
  }
  catch {
    reportError(ServiceCategories.SCENEGRAPH_AND_SYNC, new Error("Failed to get autosave files for user"))
    dispatchApi.dispatch(logoutSingleUserThunk(payload))
  }
})

// Helper to show the autosave modal
function showAutosaveModal(
  dispatchApi: ThunkDispatch,
  users: User[],
  onLogOutThunk: () => any,
) {
  // Tracks analytics for modal shown
  trackAutosaveModalShown()
  dispatchApi.dispatch(showModalHandler({
    type: xv, // xv or _$$xv depending on context
    data: {
      users,
      onLogOut: () => {
        dispatchApi.dispatch(onLogOutThunk())
      },
    },
  }))
}

// Tracks analytics for autosave modal shown
function trackAutosaveModalShown() {
  try {
    trackEventAnalytics("autosave_modal_shown", {}, {
      forwardToDatadog: true,
      batchRequest: true,
    })
  }
  catch {
    // Swallow analytics errors
  }
}

// Logs out a single user, updates session state, clears analytics if no users remain, redirects or shows success/error message
export const logoutSingleUserThunk = createOptimistThunk((dispatchApi: ThunkDispatch, payload: LogoutThunkPayload) => {
  sessionApiInstance.logoutOneUser(payload.user.id)
    .then((response: any) => {
      dispatchApi.dispatch(setSessionStateAction(response.data.meta))
      dispatchApi.dispatch(sendIpcRefreshSession(response.data.meta))
      if (response.data?.meta?.users?.length === 0) {
        clearAnalytics()
        U2.clear()
      }
      const redirectUrl = response.data?.meta?.redirect_url
      if (redirectUrl) {
        customHistory.redirect(redirectUrl)
      }
      else {
        dispatchApi.dispatch(VisualBellActions.enqueue({
          message: getI18nString("file_browser.file_browser_actions.successfully_logged_out", {
            emailAddress: payload.user.email,
          }),
        }))
      }
    })
    .catch((error: any) => {
      const message = error.data?.message || getI18nString("file_browser.file_browser_actions.logout_error_with_email", {
        emailAddress: payload.user.email,
      })
      dispatchApi.dispatch(VisualBellActions.enqueue({
        error: true,
        message,
      }))
    })
})

// Action creators
export const deleteUserLoadingAction = createActionCreator("DELETE_USER_LOADING")
export const userEraseSecretsAction = createActionCreator("USER_ERASE_SECRETS")
export const userToggleTwoFactorAction = createActionCreator("USER_TOGGLE_TWO_FACTOR")
export const putUserAction = putUser

// Exported actions (renamed for clarity)
export const C$ = userToggleTwoFactorAction
export const FY = migratePersonalDraftsThunk
export const S5 = checkUnsyncedAutosaveFilesThunk
export const WJ = userEraseSecretsAction
export const hz = deleteUserLoadingAction
export const ql = checkUserUnsyncedAutosaveFilesThunk
export const yJ = putUserAction

// Potential issues noted:
// - Error handling is broad; specific error types could be handled for better UX.
// - Some dependencies (e.g., xv vs _$$xv) may need clarification based on context.
// - Modal logic assumes users array is always valid; edge cases should be checked in integration.
