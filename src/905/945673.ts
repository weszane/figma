import { IncrementalLoadTimer } from "../figma_app/261445"

interface EventLogger {
  isStringEvent: (event: string) => boolean
  isNumberEvent: (event: string) => boolean
  loadTimer: IncrementalLoadTimerReporter
}



type _LogEvent
  = | { type: "receiveNodeChanges", size: number }
  | { type: "sendSceneGraphQuery" | "receiveSceneGraphReply", queries: string[] }
  | { type: "finishIncrementalLoading", fileKey: string }

class IncrementalLoadTimerReporter  {
  reporter: IncrementalLoadTimer | null = null

  constructor() {
    this.reporter = null
  }

  logOpenFileAction(fileKey: string): void {
    this.reporter = new IncrementalLoadTimer("Fullscreen Page Query")
    this.reporter.setFileKey(fileKey)
  }

  logEvent(e, t) {
    if (this.reporter) {
      switch (e) {
        case "receiveNodeChanges":
          this.reporter.logEvent({
            type: e,
            size: t,
          })
          break
        case "sendSceneGraphQuery":
        case "receiveSceneGraphReply":
          this.reporter.logEvent({
            type: e,
            queries: t.split(","),
          })
          break
        case "finishIncrementalLoading":
          this.reporter.logEvent({
            type: e,
            fileKey: t,
          })
      }
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
