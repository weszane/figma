import { createActionCreator } from '../905/73481'
// Grouped action creators for community-related functionality
/**
 * Action creator for setting the authenticated active profile in the community.
 * Original variable: $$r8
 */
export const setCommunityAuthedActiveProfile = createActionCreator('SET_COMMUNITY_AUTHED_ACTIVE_PROFILE')

/**
 * Action creator for putting a community profile.
 * Original variable: $$c2
 */
export const putCommunityProfile = createActionCreator('PUT_COMMUNITY_PROFILE')

/**
 * Action creator for clearing the community profile.
 * Original variable: $$u4
 */
export const clearCommunityProfile = createActionCreator('CLEAR_COMMUNITY_PROFILE')

/**
 * Action creator for adding an authenticated community profile to the hub.
 * Original variable: $$p0
 */
export const addAuthedCommunityProfileToHub = createActionCreator('COMMUNITY_HUB_ADD_AUTHED_COMMUNITY_PROFILE')

// Grouped action creators for session-related functionality
/**
 * Action creator for setting the session state.
 * Original variable: $$a10
 */
export const setSessionStateAction = createActionCreator('SET_SESSION_STATE')

// Grouped action creators for file browser functionality
/**
 * Action creator for hydrating the file browser.
 * Original variable: $$s5
 */
export const hydrateFileBrowser = createActionCreator('FILE_BROWSER_HYDRATE')

// Grouped action creators for user-related functionality
/**
 * Action creator for putting user data.
 * Original variable: $$o11
 */
export const putUser = createActionCreator('USER_PUT')

// Grouped action creators for team-related functionality
/**
 * Action creator for deleting a team.
 * Original variable: $$l3
 */
export const deleteTeam = createActionCreator('TEAM_DELETE')

/**
 * Action creator for putting team data.
 * Original variable: $$d6
 */
export const putTeam = createActionCreator('TEAM_PUT')

// Grouped action creators for organizations-related functionality
/**
 * Action creator for putting organization data.
 * Original variable: $$m1
 */
export const putOrgs = createActionCreator('ORGS_PUT')

/**
 * Action creator for patching organization data.
 * Original variable: $$h7
 */
export const patchOrgs = createActionCreator('ORGS_PATCH')

/**
 * Action creator for setting a user in organizations.
 * Original variable: $$g9
 */
export const setUserInOrgs = createActionCreator('ORGS_USER_SET')

// Exports with meaningful names, matching the refactored variable names
export const HZ = addAuthedCommunityProfileToHub
export const KW = putOrgs
export const L_ = putCommunityProfile
export const Nh = deleteTeam
export const Nr = clearCommunityProfile
export const Qv = hydrateFileBrowser
export const RF = putTeam
export const b1 = patchOrgs
export const cR = setCommunityAuthedActiveProfile
export const hG = setUserInOrgs
export const os = setSessionStateAction
export const vv = putUser
