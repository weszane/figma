import { trackEventAnalytics } from "../905/449184"
import { throwTypeError } from "../figma_app/465776"

interface SceneGraphEvent {
  type: string
  queries?: string[]
  size?: number
  fileKey?: string
}

interface IncrementalLoadAnalyticsData {
  version: number
  fileKey: string
  nodeChangesSizes: number[]
  queries: string[]
  replies: string[]
  maxNodeChangesSize: number
  [key: string]: any
}

export class IncrementalLoadTimer {
  eventName: string
  fileKey: string | null
  nodeChangesSizes: number[]
  queries: string[]
  replies: string[]
  queriesTs: number[]
  nodeChangesTs: number[]
  repliesTs: number[]
  alreadySent: boolean
  public logEvent: (event: SceneGraphEvent) => void

  constructor(eventName: string) {
    this.eventName = eventName
    this.fileKey = null
    this.nodeChangesSizes = []
    this.queries = []
    this.replies = []
    this.queriesTs = []
    this.nodeChangesTs = []
    this.repliesTs = []
    this.alreadySent = false

    this.logEvent = (event: SceneGraphEvent) => {
      if (this.fileKey && !this.alreadySent) {
        switch (event.type) {
          case "sendSceneGraphQuery":
            this.queries.push(this.sortAndJoinQueries(event.queries || []))
            this.queriesTs.push(this.getCurrentTime())
            break

          case "receiveNodeChanges":
            this.nodeChangesSizes.push(event.size || 0)
            this.nodeChangesTs.push(this.getCurrentTime())
            break

          case "receiveSceneGraphReply":
            this.replies.push(this.sortAndJoinQueries(event.queries || []))
            this.repliesTs.push(this.getCurrentTime())
            break

          case "finishIncrementalLoading":
            if (event.fileKey === this.fileKey) {
              if (this.nodeChangesSizes.length > 0) {
                const analyticsData: IncrementalLoadAnalyticsData = {
                  version: 1,
                  fileKey: event.fileKey,
                  nodeChangesSizes: this.nodeChangesSizes,
                  queries: this.queries,
                  replies: this.replies,
                  maxNodeChangesSize: Math.max(...this.nodeChangesSizes),
                  ...this.createTimestampObject(this.queriesTs, "query", 5),
                  ...this.createTimestampObject(this.nodeChangesTs, "node", 5),
                  ...this.createTimestampObject(this.repliesTs, "reply", 5),
                }

                trackEventAnalytics(this.eventName, analyticsData)
                this.alreadySent = true
              }
            }
            else {
              console.error(`IncrementalLoadTimer: file key mismatch ${event.fileKey} != ${this.fileKey}`)
            }
            this.reset()
            break

          default:
            throwTypeError(event)
        }
      }
    }
  }

  /**
   * Reset all tracking data
   * (Original: reset)
   */
  public reset(): void {
    this.fileKey = null
    this.nodeChangesSizes = []
    this.queries = []
    this.replies = []
    this.queriesTs = []
    this.nodeChangesTs = []
    this.repliesTs = []
    this.alreadySent = false
  }

  /**
   * Get current time in milliseconds
   * (Original: now)
   */
  getCurrentTime(): number {
    return Math.round(performance.now())
  }

  /**
   * Set the file key for tracking
   * (Original: setFileKey)
   */
  public setFileKey(fileKey: string): void {
    this.fileKey = fileKey
  }

  /**
   * Sort and join query strings
   * (Original: s)
   */
  sortAndJoinQueries(queries: string[]): string {
    return [...queries].sort().join(",")
  }

  /**
   * Create timestamp object with limited entries
   * (Original: o)
   */
  createTimestampObject(timestamps: number[], prefix: string, limit: number): Record<string, number> {
    const result: Record<string, number> = {}
    timestamps.forEach((timestamp, index) => {
      if (index < limit) {
        result[`${prefix}.${index}`] = timestamp
      }
    })
    return result
  }
}

export const k = IncrementalLoadTimer
