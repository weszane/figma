// Renamed variables, added types, simplified logic, improved readability
// Origin: $$l4, $$d1, $$c3, $$u2 functions from 86921.ts

import { SET_MINIMAL_MFA_USER } from "../905/194276"
import { hydrateFileBrowser, initAction } from "../905/929976"
import { deleteUserLoadingAction, putUserAction, userEraseSecretsAction, userToggleTwoFactorAction } from "../figma_app/24841"
import { getInitialOptions } from "../figma_app/169182"
import { updateUserColorProfileAction } from "../figma_app/829197"

// Type definitions for better type safety
interface User {
  id: string
  handle: string
  dev_tokens?: Array<{
    id: string
    [key: string]: any
  }>
  two_factor_secret_loaded?: boolean
  password_token?: string
  temp_phone?: string
  phone_token?: string
  backup_codes?: string[]
  two_factor_app_enabled?: boolean
  delete_user_loading?: boolean
  drafts_folder_id?: string
  personal_drafts_folder_id?: string
  color_profile?: string
  [key: string]: any
}

interface Action {
  type: string
  payload?: any
}

// Get user display name, showing "You" for current user
export function getUserDisplayName(user: User, currentUser: User | null): string {
  return currentUser && currentUser.id === user.id ? "You" : user.handle
}

// Check if user is free user based on action payload
export function getIsFreeUser(defaultValue: boolean = true, action: Action): boolean {
  if (hydrateFileBrowser.matches(action) && action.payload?.is_free_user !== undefined) {
    return action.payload.is_free_user
  }
  return defaultValue
}

// Check if user is starter user based on action payload
export function getIsStarterUser(defaultValue: boolean = true, action: Action): boolean {
  if (hydrateFileBrowser.matches(action) && action.payload?.is_starter_user !== undefined) {
    return action.payload.is_starter_user
  }
  return defaultValue
}

// Main user reducer function handling various user-related actions
export function userReducer(state: User | null = null, action: Action): User | null {
  if (initAction.matches(action)) {
    return getInitialOptions().user_data || null
  }

  if (SET_MINIMAL_MFA_USER.matches(action)) {
    return {
      ...state,
      ...action.payload.user,
    } as User
  }

  if (putUserAction.matches(action)) {
    if (state && state.id === action.payload.user.id) {
      // Merge dev tokens efficiently using Map for O(1) lookups
      const existingTokensMap = new Map(state.dev_tokens?.map(token => [token.id, token]))
      const updatedTokens = (action.payload.user.dev_tokens || []).map((newToken: any) => {
        const existingToken = existingTokensMap.get(newToken.id)
        return existingToken ? { ...existingToken, ...newToken } : newToken
      })

      return {
        ...state,
        ...action.payload.user,
        dev_tokens: updatedTokens,
      }
    }
  }

  if (userEraseSecretsAction.matches(action)) {
    return state
      ? {
          ...state,
          two_factor_secret_loaded: false,
          password_token: undefined,
          temp_phone: undefined,
          phone_token: undefined,
          backup_codes: undefined,
        }
      : null
  }

  if (userToggleTwoFactorAction.matches(action)) {
    return state
      ? {
          ...state,
          two_factor_app_enabled: action.payload.enabled,
        }
      : null
  }

  if (deleteUserLoadingAction.matches(action)) {
    return state
      ? {
          ...state,
          delete_user_loading: action.payload.loading,
        }
      : null
  }

  if (hydrateFileBrowser.matches(action)) {
    return state
      ? {
          ...state,
          drafts_folder_id: action.payload.drafts_folder_id,
          personal_drafts_folder_id: action.payload.personal_drafts_folder_id,
        }
      : null
  }

  if (updateUserColorProfileAction.matches(action)) {
    return state
      ? {
          ...state,
          color_profile: action.payload.color_profile,
        }
      : null
  }

  return state
}

// Export aliases for backward compatibility
export let userReducerAlias = userReducer
export const Ay = userReducerAlias
export const Yb = getIsFreeUser
export const kQ = userReducer
export const nm = getIsStarterUser
export const z4 = getUserDisplayName
