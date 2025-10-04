import { serializeJSON } from "../905/251556"
import { randomBetween } from "../figma_app/492908"
import { getFalseValue } from "../figma_app/897289"

interface SubscriptionContext {
  lgClient: any
  store: any
}



export class RealtimeSubscriptionManager {
  private config: any
  private subscriptionMap: Map<string, () => void>
  private onRealtimeMessage: ((message: any, store: any) => void) | null
  private shimLogger: any | null

  constructor(config: any) {
    this.config = config
    this.subscriptionMap = new Map()
    this.onRealtimeMessage = null
    this.shimLogger = null
  }

  /**
   * Sets the callback function to handle realtime messages
   * @param callback - Function to handle incoming messages
   */
  setOnRealtimeMessage(callback: (message: any, store: any) => void): void {
    this.onRealtimeMessage = callback
  }

  /**
   * Sets the logger for shim messages
   * @param logger - Logger instance
   */
  setLogger(logger: any): void {
    this.shimLogger = logger
  }

  /**
   * Handles subscription to a channel
   * @param channel - Channel to subscribe to
   * @param store - Store instance
   * @param lgClient - Livegraph client
   */
  handleSubscription(channel: any, store: any, lgClient: any): void {
    const context: SubscriptionContext = {
      lgClient,
      store,
    }

    if (!this.config.shouldHandle(channel) || !this.config.darkReadEnabled(context)) {
      return
    }

    const channelArgs = this.config.parseChannelArgs(channel)
    const serializedChannel = serializeJSON(channelArgs)

    if (this.subscriptionMap.has(serializedChannel)) {
      return
    }

    let timeoutId: NodeJS.Timeout | number | null = null

    const clearExistingTimeout = (): void => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }

    const createSubscription = (): void => {
      const subscribe = (): (() => void) => {
        const today = new Date(new Date().setHours(0, 0, 0, 0))
        const subscriptionArgs = this.config.livegraphArgs(channelArgs, today, context)

        return lgClient.subscribe(
          this.config.livegraphView,
          subscriptionArgs,
          (response: any) => {
            if (response.status !== "loaded") {
              return
            }

            const message = this.config.convertLivegraphMessage(
              response.data,
              response.errors,
              subscriptionArgs,
              context,
            )

            // Log messages if logger is available
            this.shimLogger?.logMessages(message, {
              origin: this.config.name,
            })

            // Process message if full read is enabled
            if (this.config.fullReadEnabled(context)) {
              const processMessage = (): void => {
                if (!this.onRealtimeMessage) {
                  throw new Error("Forgot to set shim callback?")
                }
                this.onRealtimeMessage(message, store)
              }

              if (getFalseValue()) {
                processMessage()
              }
              else {
                setTimeout(() => {
                  processMessage()
                })
              }
            }
          },
        )
      }

      clearExistingTimeout()

      if (this.config.periodicallyResubscribe) {
        const resubscribe = (): (() => void) => {
          let timeout: NodeJS.Timeout | number | null = null
          let unsubscribe: (() => void) | null = null

          const scheduleResubscribe = (): void => {
            unsubscribe = subscribe()
            timeout = setTimeout(() => {
              if (unsubscribe) {
                unsubscribe()
              }
              scheduleResubscribe()
            }, 86400000 + randomBetween(0, 3600000)) // 24 hours + random 0-1 hour
          }

          scheduleResubscribe()

          return (): void => {
            if (timeout) {
              clearTimeout(timeout)
            }
            if (unsubscribe) {
              unsubscribe()
            }
          }
        }

        const unsubscribe = resubscribe()
        this.subscriptionMap.set(serializedChannel, unsubscribe)
      }
      else {
        const unsubscribe = subscribe()
        this.subscriptionMap.set(serializedChannel, unsubscribe)
      }
    }

    if (this.config.delaySubscribeMs) {
      timeoutId = setTimeout(createSubscription, this.config.delaySubscribeMs())
    }
    else {
      createSubscription()
    }
  }

  /**
   * Handles unsubscription from a channel
   * @param channel - Channel to unsubscribe from
   */
  handleUnsubscription(channel: any): void {
    if (!this.config.shouldHandle(channel)) {
      return
    }

    const channelArgs = this.config.parseChannelArgs(channel)
    const serializedChannel = serializeJSON(channelArgs)
    const unsubscribe = this.subscriptionMap.get(serializedChannel)

    if (unsubscribe) {
      unsubscribe()
      this.subscriptionMap.delete(serializedChannel)
    }
  }

  /**
   * Resets all subscriptions for testing purposes
   */
  resetForTests(): void {
    this.subscriptionMap.clear()
  }
}

export const H = RealtimeSubscriptionManager
