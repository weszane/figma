import { createActionCreator } from "../905/73481"

interface DowntimeActions {
  hideWarningNotif: ReturnType<typeof createActionCreator>
  hideOngoingNotif: ReturnType<typeof createActionCreator>
  onTick: ReturnType<typeof createActionCreator>
}

export const DowntimeActionsEnum: DowntimeActions = {
  hideWarningNotif: createActionCreator("DOWNTIME_HIDE_WARNING_NOTIF"),
  hideOngoingNotif: createActionCreator("DOWNTIME_ONGOING_NOTIF"),
  onTick: createActionCreator("DOWNTIME_TICK"),
}

export const Z = DowntimeActionsEnum
