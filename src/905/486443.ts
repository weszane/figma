import { useSelector } from "react-redux"
import { SessionStatus } from "../figma_app/763686"
/**
 * Selector function to check if the voting session is joined.
 * @param state - The application state.
 * @returns True if the voting stage is JOINED.
 */
export function isVotingSessionJoined(state: AppState) {
  return state.mirror.appModel.votingSessionInfo.votingStage === SessionStatus.JOINED
}

/**
 * Hook to select if the voting session is joined.
 * @returns Boolean indicating if the session is joined.
 */
export function useIsVotingSessionJoined() {
  return useSelector(isVotingSessionJoined)
}

/**
 * Selector function to check if join confirmation can be shown.
 * @param state - The application state.
 * @returns True if the voting stage is NOT_JOINED and join confirmation has not been dismissed.
 */
function canShowJoinConfirmation(state: AppState) {
  return state.mirror.appModel.votingSessionInfo.votingStage === SessionStatus.NOT_JOINED && !state.voting.hasDismissedJoinConfirmation
}

/**
 * Hook to select if join confirmation can be shown.
 * @returns Boolean indicating if join confirmation can be shown.
 */
export function useCanShowJoinConfirmation() {
  return useSelector(canShowJoinConfirmation)
}

// Refactored exports to match new function names
export const XM = useIsVotingSessionJoined
export const e2 = useCanShowJoinConfirmation
export const gR = isVotingSessionJoined
