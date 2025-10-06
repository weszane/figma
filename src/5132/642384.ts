import { VisualBellActions } from "../905/302958"
import { getI18nString } from "../905/303541"
import { addTemplateToRecentsThunk } from "../905/321397"
import { setupAuthedUserPlanLoader } from "../905/352022"
import { processWorkspaceContext } from "../905/444931"
import { trackEventAnalytics } from "../905/449184"
import { createUserContexts } from "../905/504462"
import { appendSearchParams } from "../905/508367"
import { slideOrCooperNewFileUrl } from "../905/548668"
import { customHistory } from "../905/612521"
import { getDesignFileUrlWithOptions } from "../905/612685"
import { FDocumentType, ITemplateType } from "../905/862883"
import { sendWithRetry } from "../905/910117"
import { hasMonetizedResourceMetadata } from "../figma_app/45218"
import { FFileType } from "../figma_app/191312"
import { shouldSkipWorkspaceSelection } from "../figma_app/275462"
import { HubEventType } from "../figma_app/350203"
import { getCurrentSearchSessionId } from "../figma_app/387599"
import { mapTemplateCategoryToFileType } from "../figma_app/471982"
import { setRecentUserData } from "../figma_app/502247"
import { isMobileUA } from "../figma_app/778880"

// Original async function j - renamed to handleWorkspaceSelection for clarity
export async function handleWorkspaceSelection(
  onWorkspaceSelectionModal: (options: any) => void,
  template: any,
  dispatch: any,
  state: any,
  onWorkspaceSelected: (workspace: any) => void,
  includeAllWorkspaces: boolean = false,
) {
  let workspaces: any[] = []
  let userPlan: any = null
  try {
    userPlan = await setupAuthedUserPlanLoader(true)(dispatch)
    workspaces = createUserContexts(state, template, userPlan)
  }
  catch (error) {
    const message = error?.data?.message || getI18nString("file_browser.error_try_again")
    dispatch(VisualBellActions.enqueue({
      message,
      type: "error",
    }))
  }

  const hasMultipleAssociatedUsers = (state.authedActiveCommunityProfile?.associated_users ?? [])
    .filter((user: any) => user.user_id in state.authedUsers.byId)
    .length > 1

  if (workspaces.length > 1 || hasMultipleAssociatedUsers) {
    let fileType = mapTemplateCategoryToFileType(template.viewer_mode)
    if (fileType === "sites") {
      workspaces = workspaces.filter((workspace: any) => {
        if (workspace?.teamId) {
          const team = state.teams[workspace.teamId]
          return team?.pro_team
        }
        return true
      })
    }
    onWorkspaceSelectionModal({
      onSelectWorkspace: onWorkspaceSelected,
      workspaces: workspaces.map((workspace: any) => processWorkspaceContext(workspace, fileType, state, userPlan, includeAllWorkspaces)),
      mode: "new_file",
    })
  }
  else {
    onWorkspaceSelected(workspaces[0])
  }
}

/**
 * Handles duplicating a hub file (template) with optional workspace selection.
 * @param onWorkspaceSelectionModal - Function to show workspace selection modal.
 * @param options - Configuration options.
 * @returns A thunk function for Redux.
 */
export function createDuplicateTemplateHandler(onWorkspaceSelectionModal: (options: any) => void, options: {
  isFreemiumPreview?: boolean
  adminReviewerOverride?: boolean
  skipWorkspaceSelection?: boolean
  userId?: string
} = {}) {
  return (template: any) => async (dispatch: any, getState: any) => {
    const state = getState()

    const performDuplicate = (selectedWorkspace?: any) => {
      const headers = {
        ...sendWithRetry.defaults.headers,
      }
      const payload: any = {}
      if (selectedWorkspace) {
        headers["X-Figma-User-ID"] = selectedWorkspace.userId
        payload.org_id = selectedWorkspace.orgId
        payload.team_id = selectedWorkspace.teamId
      }
      if (options.adminReviewerOverride) {
        payload.admin_reviewer_override = true
      }

      sendWithRetry.post(`/api/hub_files/v2/${template.id}/copy`, payload, { headers }).then(({
        data: response,
      }) => {
        const fileMeta = response.meta
        const isMonetized = hasMonetizedResourceMetadata(template)
        const paidStatus = !isMonetized ? "none" : options.isFreemiumPreview ? "trial" : "paid"

        trackEventAnalytics(HubEventType.HUB_FILE_DUPLICATED, {
          hubFileId: template.id,
          figFileKey: fileMeta.key,
          isMonetized,
          paidStatus,
          searchSessionId: getCurrentSearchSessionId(state),
          file_team_id: payload.team_id,
          org_id: payload.org_id,
          file_folder_id: fileMeta.folder_id,
        })

        if (fileMeta.editor_type === "whiteboard") {
          dispatch(addTemplateToRecentsThunk({
            storeInRecentsKey: FDocumentType.FigJam,
            id: template.id,
            type: ITemplateType.CommunityResource,
          }))
        }

        let url = getDesignFileUrlWithOptions(fileMeta)
        url = appendSearchParams(url, {
          "is-community-duplicate": "1",
          "fuid": selectedWorkspace?.userId || options.userId || "",
        })
        if (options.isFreemiumPreview) {
          url = appendSearchParams(url, {
            "is-freemium-preview": "1",
          })
        }
        customHistory.redirect(url, isMobileUA ? undefined : "_blank")
      })
    }

    if (shouldSkipWorkspaceSelection() && options.skipWorkspaceSelection) {
      performDuplicate()
    }
    else {
      await handleWorkspaceSelection(onWorkspaceSelectionModal, template, dispatch, state, performDuplicate)
    }
  }
}

/**
 * Handles creating a new slide file with optional workspace selection.
 * @param onWorkspaceSelectionModal - Function to show workspace selection modal.
 * @param options - Configuration options.
 * @returns A thunk function for Redux.
 */
export function createNewSlideHandler(onWorkspaceSelectionModal: (options: any) => void, options: {
  skipWorkspaceSelection?: boolean
  userId?: string
} = {}) {
  return (template: any) => async (dispatch: any, getState: any) => {
    const state = getState()

    const performCreate = (selectedWorkspace?: any) => {
      let url = slideOrCooperNewFileUrl(FFileType.SLIDES, template.library_key)
      if (selectedWorkspace) {
        setRecentUserData(selectedWorkspace.userId, false, selectedWorkspace.orgId, undefined, selectedWorkspace.teamId ?? null)
        url = appendSearchParams(url, {
          fuid: selectedWorkspace.userId,
        })
      }
      else if (options.userId) {
        url = appendSearchParams(url, {
          fuid: options.userId,
        })
      }
      customHistory.redirect(url, isMobileUA ? undefined : "_blank")
    }

    if (shouldSkipWorkspaceSelection() && options.skipWorkspaceSelection) {
      performCreate()
    }
    else {
      await handleWorkspaceSelection(onWorkspaceSelectionModal, template, dispatch, state, performCreate)
    }
  }
}

/**
 * Handles creating a new file with library key and optional workspace selection.
 * @param onWorkspaceSelectionModal - Function to show workspace selection modal.
 * @param options - Configuration options.
 * @returns A thunk function for Redux.
 */
export function createNewFileHandler(onWorkspaceSelectionModal: (options: any) => void, options: {
  skipWorkspaceSelection?: boolean
  userId?: string
} = {}) {
  return (template: any) => async (dispatch: any, getState: any) => {
    const state = getState()

    const performCreate = (selectedWorkspace?: any) => {
      let url = `/file/new?initial-library-key=${template.library_key}`
      if (selectedWorkspace) {
        setRecentUserData(selectedWorkspace.userId, false, selectedWorkspace.orgId, undefined, selectedWorkspace.teamId ?? null)
        url = appendSearchParams(url, {
          fuid: selectedWorkspace.userId,
        })
      }
      else if (options.userId) {
        url = appendSearchParams(url, {
          fuid: options.userId,
        })
      }
      customHistory.redirect(url, isMobileUA ? undefined : "_blank")
    }

    if (shouldSkipWorkspaceSelection() && options.skipWorkspaceSelection) {
      performCreate()
    }
    else {
      await handleWorkspaceSelection(onWorkspaceSelectionModal, template, dispatch, state, performCreate, true)
    }
  }
}

// Exported with meaningful names
export const Q4 = createNewFileHandler
export const gE = createDuplicateTemplateHandler
export const u5 = createNewSlideHandler
