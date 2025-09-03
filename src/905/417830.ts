import { serializeJSON } from '../905/251556'
import { noop2 } from '../905/419236'
import { DEFAULT_LOADING_STATE } from '../905/957591'

export class SubscriptionManager {
  constructor(client: any, notifyUpdate: () => void) {
    this.client = client
    this.notifyUpdate = notifyUpdate
  }

  client: any
  notifyUpdate: () => void
  view: any = null
  stringifiedArgs = new WeakMap()
  subscriptions = new Map()

  update(view: any, argsList: any[]) {
    if (view !== this.view) {
      this.clear()
      this.view = view
    }

    const currentStringifiedArgs = new Set()
    for (const args of argsList) {
      currentStringifiedArgs.add(this.stringify(args))
    }

    // Remove subscriptions that are no longer needed
    for (const [stringifiedArgs, subscription] of this.subscriptions.entries()) {
      if (!currentStringifiedArgs.has(stringifiedArgs)) {
        subscription.unsubscribe()
        this.subscriptions.delete(stringifiedArgs)
      }
    }

    // Add new subscriptions
    for (const args of argsList) {
      const stringifiedArgs = this.stringify(args)
      if (this.subscriptions.has(stringifiedArgs))
        continue

      const subscription = {
        unsubscribe: noop2,
        result: DEFAULT_LOADING_STATE,
      }

      if (this.client) {
        subscription.unsubscribe = this.client.subscribe(view, args, (result: any) => {
          if (subscription.result !== result) {
            subscription.result = result
            this.notifyUpdate()
          }
        })
      }

      this.subscriptions.set(stringifiedArgs, subscription)
    }
  }

  clear() {
    for (const subscription of this.subscriptions.values()) {
      subscription.unsubscribe()
    }
    this.subscriptions.clear()
  }

  currentResult(args: any) {
    return this.subscriptions.get(this.stringify(args))?.result || DEFAULT_LOADING_STATE
  }

  stringify(args: any) {
    let stringified = this.stringifiedArgs.get(args)
    if (!stringified) {
      stringified = serializeJSON(args)
      this.stringifiedArgs.set(args, stringified)
    }
    return stringified
  }
}

export const A = SubscriptionManager
