// Renamed variables, added types, simplified logic, and improved readability
import { createActionCreator } from "../905/73481"
import { VisualBellActions } from "../905/302958"
import { getI18nString } from "../905/303541"
import { createOptimistThunk } from "../905/350402"
import { trackEventAnalytics } from "../905/449184"
import { handlePromiseError } from "../905/573154"
import { getResourceDataOrFallback } from "../905/663269"

import { getCurrentLiveGraphClient } from "../905/761735"
import { handleOptimistTransaction } from "../905/842794"
import { sendWithRetry } from "../905/910117"
import { sx as _$$sx, iN, Qs } from "../905/992395"
import { atomStoreManager } from "../figma_app/27355"
import { loadingStatePutFailure, loadingStatePutLoading, loadingStatePutSuccess } from "../figma_app/714946"
import { clearSelection } from "../figma_app/741237"
import { SessionStatus, WhiteboardVotingCppBindings } from "../figma_app/763686"

// Action creators
export const unsetHoveredInModalVotePin = createActionCreator("UNSET_HOVERED_IN_MODAL_VOTE_PIN")
export const setHoveredInModalVotePin = createActionCreator("SET_HOVERED_IN_MODAL_VOTE_PIN")
export const deselectVotePin = createActionCreator("DESELECT_VOTE_PIN")
export const selectVotePin = createActionCreator("SELECT_VOTE_PIN")
export const initiatedVotingSession = createActionCreator("INITIATED_VOTING_SESSION")
export const dismissJoinConfirmation = createActionCreator("DISMISS_JOIN_CONFIRMATION")
export const hideJoinVotingSessionModal = createActionCreator("HIDE_JOIN_VOTING_SESSION_MODAL")
export const deleteVotingSession = createActionCreator("DELETE_VOTING_SESSION")
export const setVotesPerUserLimit = createActionCreator("SET_VOTES_PER_USER_LIMIT")
export const setTitle = createActionCreator("SET_TITLE")
export const clearState = createActionCreator("CLEAR_STATE")

// Helper functions
export const createEndVotingSessionKey = (fileKey: string): string => `end_voting_session_${fileKey}`
export const createStartVotingSessionKey = (fileKey: string): string => `create_voting_session_${fileKey}`

// Thunk actions
export const endVotingSession = createOptimistThunk(async (
  dispatchContext: any, // Assuming this is the Redux thunk context
  { uiSurface }: { uiSurface: string },
) => {
  const state = dispatchContext.getState()
  const { fileKey } = state.selectedView
  const sessionId = state.mirror.appModel.votingSessionInfo.sessionId

  if (!fileKey || !sessionId) {
    return
  }

  const loadingKey = createEndVotingSessionKey(fileKey)
  const errorType = "end-voting-session-failed"

  const handleError = () => {
    dispatchContext.dispatch(loadingStatePutFailure({ key: loadingKey }))
    dispatchContext.dispatch(VisualBellActions.enqueue({
      type: errorType,
      message: getI18nString("voting.visual_bell.end_voting_session_failed"),
    }))
  }

  dispatchContext.dispatch(loadingStatePutLoading({ key: loadingKey }))
  dispatchContext.dispatch(VisualBellActions.dequeue({ matchType: errorType }))

  try {
    const response = await sendWithRetry.put(`/api/file/${fileKey}/voting_sessions/${sessionId}`, {
      in_progress: false,
    })

    if (response.status === 200) {
      dispatchContext.dispatch(loadingStatePutSuccess({ key: loadingKey }))

      if (uiSurface === "MeetingsPanel") {
        atomStoreManager.set(Qs, {
          type: "SET_VIEW",
          payload: iN.PAST_VOTES,
        })
      }
    }
    else {
      handleError()
    }
  }
  catch (error) {
    handleError()
    return error
  }
})

export const startVotingSession = createOptimistThunk((
  dispatchContext: any, // Assuming this is the Redux thunk context
  {
    source,
    usedCustomTitle,
    requestBody,
    uiSurface,
  }: {
    source: string
    usedCustomTitle: boolean
    requestBody: any
    uiSurface: string
  },
) => {
  const state = dispatchContext.getState()
  const { fileKey } = state.selectedView

  if (!fileKey) {
    return
  }

  const loadingKey = createStartVotingSessionKey(fileKey)

  const handleError = () => {
    dispatchContext.dispatch(loadingStatePutFailure({ key: loadingKey }))
    dispatchContext.dispatch(VisualBellActions.enqueue({
      type: "start-voting-session-failed",
      message: getI18nString("voting.visual_bell.start_voting_session_failed"),
    }))
  }

  dispatchContext.dispatch(loadingStatePutLoading({ key: loadingKey }))
  dispatchContext.dispatch(VisualBellActions.dequeue({ matchType: "start-voting-session-failed" }))

  sendWithRetry.post(`/api/file/${fileKey}/voting_sessions`, requestBody)
    .then((response) => {
      if (response.status === 200) {
        const votingSessionId = response.data.meta.id

        dispatchContext.dispatch(initiatedVotingSession({ votingSessionId }))

        if (
          uiSurface === "MeetingsPanel"
          && atomStoreManager.get(Qs).activeToolModal === _$$sx.VOTING
        ) {
          atomStoreManager.set(Qs, {
            type: "SET_TOOL",
            payload: null,
          })
        }

        dispatchContext.dispatch(loadingStatePutSuccess({ key: loadingKey }))

        trackEventAnalytics("start_voting_session", {
          source,
          usedCustomTitle,
          votingSessionId,
          fileKey,
        })
      }
      else {
        handleError()
      }
    })
    .catch((error) => {
      handleError()
      return error
    })
})

export const deleteVotingSessionThunk = createOptimistThunk((
  dispatchContext: any, // Assuming this is the Redux thunk context
  { votingSessionId }: { votingSessionId: string },
) => {
  const state = dispatchContext.getState()
  const { fileKey } = state.selectedView

  if (!fileKey) {
    return null
  }

  const deletePromise = sendWithRetry.del(`/api/file/${fileKey}/voting_sessions/${votingSessionId}`)

  dispatchContext.dispatch(handlePromiseError({
    promise: deletePromise,
    fallbackError: getI18nString("voting.modal.delete_voting_session_error"),
  }))

  dispatchContext.dispatch(VisualBellActions.enqueue({
    message: getI18nString("voting.modal.delete_voting_session_visual_bell"),
  }))

  handleOptimistTransaction(
    deletePromise,
    dispatchContext.dispatch,
    deleteVotingSession({ votingSessionId }),
  )

  getCurrentLiveGraphClient().optimisticallyDelete({
    VotingSession: {
      [votingSessionId]: null,
    },
  }, deletePromise)
})

// Export voting session as CSV
export function exportVotingSessionAsCsv(state: any, sessionId: string): void {
  const votingSession = state?.openFile?.votingSessions?.find(
    (session: any) => session.id === sessionId,
  )

  if (!votingSession) {
    return
  }

  const formatDate = (date: Date): string => {
    return date.toISOString().split("T")[0]
  }

  const filename = votingSession.title
    ? getI18nString("voting.csv_export.filename_with_session_title", {
        date: formatDate(votingSession.createdAt),
        votingSessionTitle: votingSession.title,
      })
    : getI18nString("voting.csv_export.filename_no_session_title", {
        date: formatDate(votingSession.createdAt),
      })

  WhiteboardVotingCppBindings.exportVotingSessionAsCsv(sessionId, filename)
}

// Set voting session info
export const setVotingSessionInfo = createOptimistThunk((
  dispatchContext: any, // Assuming this is the Redux thunk context
  actionPayload: {
    votingStage: SessionStatus
    sessionId?: string
  },
) => {
  const { votingStage, sessionId } = actionPayload
  const state = dispatchContext.getState()
  const currentPage = state?.mirror?.appModel?.currentPage

  if (votingStage === SessionStatus.NO_SESSION) {
    WhiteboardVotingCppBindings.setVotingSessionInfo("", SessionStatus.NO_SESSION, 0, currentPage)
    return
  }

  const votingSessions = state?.openFile?.votingSessions
  let votingSession

  if (votingStage === SessionStatus.ENDED) {
    votingSession = votingSessions?.find(
      (session: any) => session.id === sessionId && !session.inProgress,
    )
  }
  else {
    votingSession = votingSessions?.find((session: any) => session.inProgress)
  }

  if (!votingSession) {
    return
  }

  const pageData = getResourceDataOrFallback(votingSession.pageNodeId)

  if (pageData) {
    WhiteboardVotingCppBindings.setVotingSessionInfo(
      votingSession.id,
      votingStage,
      votingSession.userVoteLimit,
      pageData,
    )

    if (votingStage === SessionStatus.JOINED) {
      dispatchContext.dispatch(dismissJoinConfirmation())

      if (state.mirror.selectionProperties.whiteboardNumSelectedByType?.STAMP) {
        clearSelection()
      }
    }
  }
})

// Export mappings (keeping original export names)
export const $c = createStartVotingSessionKey
export const $l = deleteVotingSessionThunk
export const D6 = setTitle
export const Ev = exportVotingSessionAsCsv
export const H1 = setVotingSessionInfo
export const Ho = clearState
export const PK = endVotingSession
export const U6 = dismissJoinConfirmation
export const Vw = setHoveredInModalVotePin
export const au = hideJoinVotingSessionModal
export const cx = initiatedVotingSession
export const gA = unsetHoveredInModalVotePin
export const hL = setVotesPerUserLimit
export const rT = deselectVotePin
export const vt = startVotingSession
export const w9 = selectVotePin
export const wQ = createEndVotingSessionKey
