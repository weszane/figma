import { createActionCreator } from "../905/73481"
import { createOptimistThunk } from "../905/350402"
import { createNoOpValidator } from "../figma_app/181241"
// Origin: /Users/allen/github/fig/src/905/989765.ts
// Refactored: Renamed variables, added types/interfaces, simplified logic, added comments, improved readability and type safety.

// Assumed dependencies:
// - createActionCreator: function to create Redux-style action creators.
// - createNoOpValidator: function returning a validator with a .validate method.
// - createOptimistThunk: function to create thunks with optimistic updates.

// Type definitions for user and API response
interface VoiceUser {
  userID: string
  name: string
  imageURL: string
}


// Parameters for getUsersUserIds
interface GetUsersUserIdsParams {
  fileKey: string
  userIds: string[]
}

// Service class for voice user API interactions
class VoiceUserService {
  private usersUserIdsSchemaValidator: ReturnType<typeof createNoOpValidator>

  constructor() {
    this.usersUserIdsSchemaValidator = createNoOpValidator()
  }

  // Fetches user info for given user IDs and file key
  async getUsersUserIds(params: GetUsersUserIdsParams) {
    // The validator wraps the async API call
    return this.usersUserIdsSchemaValidator.validate(async ({ xr: apiClient }) => {
      // Assumes apiClient.get returns a Promise with the API response
      return await apiClient.get(`/api/voice/${params.fileKey}/users?user_ids=${params.userIds}`)
    })
  }
}

export const voiceUserService = new VoiceUserService()

// Action creators for voice features
export const setActiveCall = createActionCreator("VOICE_SET_ACTIVE_CALL")
export const joinActiveCall = createActionCreator("VOICE_JOIN_ACTIVE_CALL")
export const leaveActiveCall = createActionCreator("VOICE_LEAVE_ACTIVE_CALL")
export const clearActiveCall = createActionCreator("VOICE_CLEAR_ACTIVE_CALL")
export const setVoiceUsers = createActionCreator("VOICE_SET_VOICE_USERS")
export const toggleWidget = createActionCreator("VOICE_TOGGLE_WIDGET")
export const toggleWidgetParticipantList = createActionCreator("VOICE_TOGGLE_WIDGET_PARTICIPANT_LIST")
export const snapWidget = createActionCreator("VOICE_SNAP_WIDGET")
export const setUserIdsInCallFromProvider = createActionCreator("VOICE_SET_USER_IDS_INCALL_FROM_PROVIDER")
export const showCaptions = createActionCreator("VOICE_SHOW_CAPTIONS")
export const captionsInstallProgress = createActionCreator("VOICE_CAPTIONS_INSTALL_PROGRESS")

// Thunk to fetch voice users and dispatch to store
interface FetchVoiceUsersThunkParams {
  userIds: string[]
  fileKey: string
}

export const fetchVoiceUsersThunk = createOptimistThunk(
  async (store, params: FetchVoiceUsersThunkParams) => {
    // Only fetch if there are user IDs
    if (params.userIds.length === 0)
      return

    try {
      const { data } = await voiceUserService.getUsersUserIds({
        fileKey: params.fileKey,
        userIds: params.userIds,
      })

      // Map API response to VoiceUser objects
      const voiceUsers: VoiceUser[] = data.meta.map(user => ({
        userID: user.id,
        name: user.handle,
        imageURL: user.img_url,
      }))

      store.dispatch(setVoiceUsers(voiceUsers))
    }
    catch (error) {
      // Potential bug: error is swallowed, consider logging for debugging

    }
  },
)

// Exported constants for use elsewhere in the app
export const Kh = captionsInstallProgress
export const a6 = clearActiveCall
export const NS = fetchVoiceUsersThunk
export const rO = joinActiveCall
export const oI = leaveActiveCall
export const Zq = setActiveCall
export const cb = setUserIdsInCallFromProvider
export const LV = setVoiceUsers
export const t7 = showCaptions
export const jT = snapWidget
export const Pp = toggleWidget
export const yF = toggleWidgetParticipantList
