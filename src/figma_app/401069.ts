import { createActionCreator } from "../905/73481"
import { activityLogsService } from "../905/298764"
import { createOptimistThunk } from "../905/350402"
import { debugState } from "../905/407919"
import { FlashActions } from "../905/573154"
import { sendWithRetry } from "../905/910117"
import { trackOrgEvent } from "../figma_app/314264"
import { getEndOfDay } from "../figma_app/994725"
// Origin: /Users/allen/sigma-main/src/figma_app/401069.ts
// Refactored: Renamed variables, added TypeScript types/interfaces, simplified logic, added comments, improved readability

// Assumed dependencies:
// - createActionCreator: Redux action creator factory
// - activityLogsService: Service for fetching activity logs
// - createOptimistThunk: Redux thunk with optimistic updates
// - debugState: Redux-like state accessor
// - FlashActions: Redux actions for flash messages
// - sendWithRetry: HTTP request utility with retry logic
// - trackOrgEvent: Analytics/event tracking
// - getEndOfDay: Utility to get end of day timestamp

// Type definitions for activity log related data
interface ActivityLogFile {
  key: string
  parentOrgId?: string
}

interface DebugState {
  openFile?: ActivityLogFile
  currentUserOrgId?: string
  activityLogs: {
    logs: ActivityLog[]
    cursor: {
      after?: string
    }
  }
}

interface ActivityLog {
  // Add properties as needed
  [key: string]: any
}

interface ActivityLogsMeta {
  // [0]: logs array, [1]: cursor object
  0: ActivityLog[]
  1: { after?: string }
}

interface ActivityLogsResponse {
  meta: ActivityLogsMeta
}

interface FetchActivityLogsParams {
  newQuery: boolean
  teamId?: string
  emails?: string[]
  eventName?: string[]
  date: {
    start: string
    end: string
  }
}

// Helper to log activity events for file actions
function logFileActivity(eventName: string): void {
  const state: DebugState = debugState.getState()
  if (!state.openFile)
    return
  const file = state.openFile
  if (file.parentOrgId) {
    sendWithRetry.post(`/api/activity_logs/${file.key}`, {
      event_name: eventName,
    })
  }
}

// Thunk: Save As event
export function logFileSaveAs(): void {
  logFileActivity("fig_file_save_as")
}

// Thunk: Export event
const logFileExportThunk = createOptimistThunk((_store, _payload) => {
  logFileActivity("fig_file_export")
})

// Thunk: Image Download event
const logFileImageDownloadThunk = createOptimistThunk((_store, _payload) => {
  logFileActivity("fig_file_image_download")
})

// Action creators
const getActivityLogsAction = createActionCreator("GET_ACTIVITY_LOGS")
const clearCursorActivityLogsAction = createActionCreator("CLEAR_CURSOR_ACTIVITY_LOGS")
const setActivityLogsAction = createActionCreator("SET_ACTIVITY_LOGS")

// Thunk: Fetch activity logs with filters and pagination
const fetchActivityLogsThunk = createOptimistThunk(
  (storeContext, params: FetchActivityLogsParams) => {
    const { newQuery, teamId, emails, eventName, date } = params
    const state: DebugState = storeContext.getState()

    activityLogsService
      .getActivityLogs({
        pageSize: "30",
        orgId: state.currentUserOrgId,
        startTime: date.start,
        endTime: getEndOfDay(date.end),
        ...(teamId ? { teamId } : {}),
        ...(eventName ? { eventName: JSON.stringify(eventName) } : {}),
        ...(emails ? { emails: emails.join() } : {}),
        ...(newQuery ? {} : { after: state.activityLogs.cursor.after }),
      })
      .then(({ data }: { data: ActivityLogsResponse }) => {
        const meta = data.meta
        const logs = meta[0]
        const cursor = meta[1]
        // If newQuery, replace logs; else, append to existing logs
        const updatedLogs = newQuery
          ? logs
          : storeContext.getState().activityLogs.logs.concat(logs)

        storeContext.dispatch(
          setActivityLogsAction({
            logs: updatedLogs,
            cursor,
          }),
        )

        // Track analytics event
        trackOrgEvent("Activity Logs Fetched", state.currentUserOrgId, state, {
          teamIdFilter: teamId,
          eventNamesFilter: eventName,
          startDateFilter: date.start,
          endDateFilter: getEndOfDay(date.end),
          filtersOnActorEmail: !!emails && emails.length > 0,
          filtersOnActedOnEmail: !!emails && emails.length > 0,
          isNewQuery: newQuery,
          numberOfResults: logs.length,
        })
      })
      .catch((error: any) => {
        // Potential bug: error.data may be undefined
        const message
          = error.data?.message
            || "An error occurred while fetching activity logs."
        storeContext.dispatch(FlashActions.flash(message))
      })

    // Dispatch action to indicate logs fetch started
    storeContext.dispatch(getActivityLogsAction(params))
  },
)

// Export statements (original names preserved, right-hand side uses refactored names)
export const E = getActivityLogsAction
export const Jt = fetchActivityLogsThunk
export const aK = logFileImageDownloadThunk
export const ce = logFileSaveAs
export const cv = clearCursorActivityLogsAction
export const hZ = setActivityLogsAction
export const rg = logFileExportThunk
