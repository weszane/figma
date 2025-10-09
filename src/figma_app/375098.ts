import { createActionCreator } from "../905/73481"
// Refactored from original: Renamed variables, added types, improved readability.
// Origin: /Users/allen/sigma-main/src/figma_app/375098.ts
// Assumes: createActionCreator returns an ActionCreator type (define below or import if available).

// Type definition for action creators (adjust as needed for your codebase)

// Create action creators for user team flag actions
export const userTeamFlagReceiveDelete = createActionCreator("USER_TEAM_FLAG_RECEIVE_DELETE")
export const userTeamFlagReceiveUpdate = createActionCreator("USER_TEAM_FLAG_RECEIVE_UPDATE")
export const userTeamFlagPost = createActionCreator("USER_TEAM_FLAG_POST")

// Export with original names mapped to refactored variables
export const bE = userTeamFlagPost
export const hV = userTeamFlagReceiveUpdate
export const z9 = userTeamFlagReceiveDelete
