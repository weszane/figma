import { IncrementalLoadTimer } from "../figma_app/261445"

interface EventLogger {
  isStringEvent: (event: string) => boolean
  isNumberEvent: (event: string) => boolean
  loadTimer: LoadTimer
}

interface LoadTimer {
  logOpenFileAction: (fileKey: string) => void
  logEvent: (event: LogEvent) => void
}

type LogEvent
  = | { type: "receiveNodeChanges", size: number }
  | { type: "sendSceneGraphQuery" | "receiveSceneGraphReply", queries: string[] }
  | { type: "finishIncrementalLoading", fileKey: string }

class IncrementalLoadTimerReporter implements LoadTimer {
  reporter: IncrementalLoadTimer | null = null

  constructor() {
    this.reporter = null
  }

  logOpenFileAction(fileKey: string): void {
    this.reporter = new IncrementalLoadTimer("Fullscreen Page Query")
    this.reporter.setFileKey(fileKey)
  }

  logEvent(event: LogEvent): void {
    if (this.reporter) {
      this.reporter.logEvent(event)
    }
  }
}

function isStringEvent(event: string): boolean {
  return event === "sendSceneGraphQuery" || event === "receiveSceneGraphReply" || event === "finishIncrementalLoading"
}

function isNumberEvent(event: string): boolean {
  return event === "receiveNodeChanges"
}

export const eventLogger: EventLogger = {
  isStringEvent,
  isNumberEvent,
  loadTimer: new IncrementalLoadTimerReporter(),
}

export const N = eventLogger
