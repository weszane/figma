export interface ScaleToolAPI {
  scaleToolActivated: () => void
  subscribeScaleToolActivated: (listener: () => void) => void
  unsubscribeScaleToolActivated: (listener: () => void) => void
}

export class ScaleToolAPIBindingsImpl implements ScaleToolAPI {
  scaleToolActivatedListeners: Set<() => void>

  constructor() {
    this.scaleToolActivatedListeners = new Set()
  }

  /**
   * Notifies all subscribed listeners that the scale tool has been activated.
   * (Original function: scaleToolActivated)
   */
  scaleToolActivated(): void {
    for (const listener of this.scaleToolActivatedListeners) {
      listener()
    }
  }

  /**
   * Subscribes a listener to be notified when the scale tool is activated.
   * @param listener - The callback function to execute when the scale tool is activated.
   * (Original function: subscribeScaleToolActivated)
   */
  subscribeScaleToolActivated(listener: () => void): void {
    this.scaleToolActivatedListeners.add(listener)
  }

  /**
   * Unsubscribes a listener from scale tool activation notifications.
   * @param listener - The callback function to remove.
   * (Original function: unsubscribeScaleToolActivated)
   */
  unsubscribeScaleToolActivated(listener: () => void): void {
    this.scaleToolActivatedListeners.delete(listener)
  }
}

// Create singleton instance
export const ScaleToolAPIBindings = new ScaleToolAPIBindingsImpl()

/**
 * Alias for ScaleToolAPIBindings.
 * (Original variable: h)
 */
export const h = ScaleToolAPIBindings
