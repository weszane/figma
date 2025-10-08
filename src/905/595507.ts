import { COMMIT, REVERT } from "redux-optimist"
import { createActionCreator } from "../905/73481"
import { createOptimistAction } from "../905/350402"
import { trackEventAnalytics } from "../905/449184"
import { FlashActions } from "../905/573154"
import { sendWithRetry } from "../905/910117"



/**
 * Action creator for demoting editor roles within a team.
 * Tracks the event analytics and handles API communication with optimistic updates.
 *
 * Original name: $$l1
 */
export const demoteEditorRolesAction = createOptimistAction(
  "TEAM_ADMIN_DEMOTE_EDITOR_ROLES",
  (
    dispatchContext,
    payload,
    options,
  ) => {
    const { editor } = payload
    const { optimistId } = options

    // Track analytics for the editor demotion event
    trackEventAnalytics("Team Editor Demoted", {
      teamId: editor.team_id,
      editorId: editor.id,
    })

    // Attempt to revoke editor permissions via API
    sendWithRetry
      .post(`/api/teams/${editor.team_id}/users/${editor.id}/revoke_editor`)
      .then(() => {
        // On success, commit the optimistic update
        dispatchContext.dispatch({
          type: null,
          optimist: {
            type: COMMIT,
            id: optimistId,
          },
        })
      })
      .catch(() => {
        // On failure, show error message and revert the optimistic update
        dispatchContext.dispatch(
          FlashActions.error("An error occurred while downgrading this user's permissions."),
        )
        dispatchContext.dispatch({
          type: null,
          optimist: {
            type: REVERT,
            id: optimistId,
          },
        })
      })
  },
)

/**
 * Action creator for setting member education grace period.
 *
 * Original name: $$d0
 */
export const setMemberEduGracePeriodAction = createActionCreator(
  "TEAM_ADMIN_SET_MEMBER_EDU_GRACE_PERIOD",
)

// Export action creators with descriptive names
export const P = setMemberEduGracePeriodAction
export const z = demoteEditorRolesAction
