import { resolveMessage } from '../905/231762'
import { VisualBellActions } from '../905/302958'
import { getI18nString } from '../905/303541'
import { createOptimistThunk } from '../905/350402'
import { setupLoadingStateHandler } from '../905/696711'
import { addAuthedCommunityProfileToHub, clearCommunityProfile, putCommunityProfile } from '../905/890368'
import { sendWithRetry } from '../905/910117'
import { refreshSessionState } from '../figma_app/976345'

/**
 * Types for profile actions
 */
interface ChangePrimaryUserParams {
  email: string
  profileId: string
  userId: string
}

interface RemoveUserParams {
  email: string
  profileId: string
  userId: string
}

interface MergeProfileParams {
  primaryUserId: string
  secondaryUserId: string
}

interface OptimistThunkMeta {
  loadingKey: string
}

/**
 * Change the primary user of a community profile.
 * Original: $$h1
 */
export const changeCommunityProfilePrimaryUser = createOptimistThunk(
  (
    dispatchContext,
    { email, profileId, userId }: ChangePrimaryUserParams,
    { loadingKey }: OptimistThunkMeta,
  ) => {
    const request = sendWithRetry.post(`/api/profile/${profileId}/primary_user`, {
      new_primary_user_id: userId,
    })
    setupLoadingStateHandler(request, dispatchContext, loadingKey)

    request
      .then(({ data }) => {
        dispatchContext.dispatch(putCommunityProfile(data.meta))
        dispatchContext.dispatch(
          VisualBellActions.enqueue({
            error: false,
            type: 'profile-merge-update',
            message: getI18nString(
              'community.actions.your_profile_s_primary_email_was_set_to_email',
              { email },
            ),
          }),
        )
      })
      .catch((error) => {
        const message = resolveMessage(error)
        if (message) {
          dispatchContext.dispatch(
            VisualBellActions.enqueue({
              error: true,
              type: 'profile-merge-update',
              message,
            }),
          )
        }
      })
  },
  ({ profileId }: ChangePrimaryUserParams) =>
    `COMMUNITY_HUB_CHANGE_COMMUNITY_PROFILE_PRIMARY_USER_${profileId}`,
)

/**
 * Remove a user from a community profile.
 * Original: $$g0
 */
export const removeCommunityProfileUser = createOptimistThunk(
  (
    dispatchContext,
    { email, profileId, userId }: RemoveUserParams,
    { loadingKey }: OptimistThunkMeta,
  ) => {
    const request = sendWithRetry.del(`/api/profile/${profileId}/user`, {
      secondary_user_id: userId,
    })
    setupLoadingStateHandler(request, dispatchContext, loadingKey)

    request
      .then(({ data }) => {
        dispatchContext.dispatch(putCommunityProfile(data.meta))
        dispatchContext.dispatch(
          VisualBellActions.enqueue({
            error: false,
            type: 'profile-merge-update',
            message: getI18nString(
              'community.actions.email_was_removed_from_your_profile',
              { email },
            ),
          }),
        )
        dispatchContext.dispatch(refreshSessionState())
      })
      .catch((error) => {
        const message = resolveMessage(error)
        if (message) {
          dispatchContext.dispatch(
            VisualBellActions.enqueue({
              error: true,
              type: 'profile-merge-update',
              message,
            }),
          )
        }
      })
  },
  ({ profileId }: RemoveUserParams) =>
    `COMMUNITY_HUB_REMOVE_COMMUNITY_PROFILE_USER_${profileId}`,
)

/**
 * Merge two community profiles.
 * Original: $$f5
 */
export const mergeCommunityProfiles = createOptimistThunk(
  (
    dispatchContext,
    { primaryUserId, secondaryUserId }: MergeProfileParams,
    { loadingKey }: OptimistThunkMeta,
  ) => {
    const request = sendWithRetry.post('/api/profile/merge', {
      primary_user_id: primaryUserId,
      secondary_user_id: secondaryUserId,
    })
    setupLoadingStateHandler(request, dispatchContext, loadingKey)

    request
      .then(({ data }) => {
        dispatchContext.dispatch(putCommunityProfile(data.meta))
        dispatchContext.dispatch(
          VisualBellActions.enqueue({
            type: 'profile-merge-update',
            message: getI18nString(
              'community.actions.new_profile_connection_added',
            ),
          }),
        )
        dispatchContext.dispatch(refreshSessionState())
      })
      .catch((error) => {
        const message = resolveMessage(error)
        if (message) {
          dispatchContext.dispatch(
            VisualBellActions.enqueue({
              error: true,
              type: 'profile-merge-update',
              message: getI18nString(
                'community.actions.failed_to_merge_msg',
                { msg: message },
              ),
            }),
          )
        }
      })
  },
  ({ secondaryUserId }: MergeProfileParams) =>
    `COMMUNITY_HUB_ADD_COMMUNITY_PROFILE_USER_${secondaryUserId}`,
)

// Export aliases for backward compatibility
export const G0 = removeCommunityProfileUser // $$g0
export const Gu = changeCommunityProfilePrimaryUser // $$h1
export const n7 = mergeCommunityProfiles // $$f5
export const HZ = addAuthedCommunityProfileToHub
export const Oo = putCommunityProfile
export const cr = clearCommunityProfile
