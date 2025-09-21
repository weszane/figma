import { useEffect, useState } from 'react'
import { flushSync } from 'react-dom'

/**
 * FrameBatcher (originally class a)
 * Manages frame listeners and schedules UI updates using requestAnimationFrame.
 */
class FrameBatcher {
  private _frameListeners: Set<() => void>
  private _rafHandle: number

  constructor() {
    this._frameListeners = new Set()
    this._rafHandle = -1
  }

  /**
   * Schedules publishing updates to the UI on the next animation frame.
   */
  schedulePublishToUI = (): void => {
    if (this._rafHandle >= 0)
      return
    this._rafHandle = requestAnimationFrame(() => {
      for (const listener of this._frameListeners) listener()
      this._rafHandle = -1
    })
  }

  /**
   * Adds a frame listener.
   * @param listener - Function to be called on frame.
   * @throws Error if listener already present.
   */
  addFrameListener(listener: () => void): void {
    if (this._frameListeners.has(listener))
      throw new Error('Listener already present')
    this._frameListeners.add(listener)
  }

  /**
   * Removes a frame listener.
   * @param listener - Function to be removed.
   */
  removeFrameListener(listener: () => void): void {
    this._frameListeners.delete(listener) // original: $$delete
  }
}

/**
 * StatePublisher (originally class $$s0)
 * Publishes state changes and provides React hooks for subscription.
 */
export class StatePublisher {
  private _frameBatcher: FrameBatcher
  private _value: any

  /**
   * @param initialValue - Initial state value.
   */
  constructor(initialValue: any) {
    this._frameBatcher = new FrameBatcher()
    this._value = initialValue
  }

  /**
   * Sets the state value and schedules UI update if changed.
   * @param newValue - New state value.
   */
  set(newValue: any): void {
    if (this._value === newValue)
      return
    this._value = newValue
    this._frameBatcher.schedulePublishToUI()
  }

  /**
   * Gets the current state value.
   * @returns Current state value.
   */
  get(): any {
    return this._value
  }

  /**
   * React hook to subscribe to state changes.
   * @param callback - Function to call on state update.
   * @returns Current state value.
   */
  use(callback?: any): any {
    const [state, setState] = useState(this._value)
    this.useSubscription(setState, callback)
    return state
  }

  /**
   * Subscribes to state changes with optional synchronous update.
   * @param setState - React setState function.
   * @param options - Subscription options.
   */
  useSubscription(
    setState: (value: any) => void,
    { updateSynchronously = false }: { updateSynchronously?: boolean } = {},
  ): void {
    useEffect(() => {
      const frameListener = () => {
        const update = () => setState(this._value)
        updateSynchronously ? flushSync(update) : update()
      }
      this._frameBatcher.addFrameListener(frameListener)
      return () => {
        this._frameBatcher.removeFrameListener(frameListener)
      }
    }, [setState, updateSynchronously])
  }
}

/**
 * ComparableStatePublisher (originally class $$o1)
 * Publishes state changes only if comparison function returns false.
 */
export class ComparableStatePublisher extends StatePublisher {
  private comparisonFunction: (prev: any, next: any) => boolean

  /**
   * @param initialValue - Initial state value.
   * @param comparisonFunction - Function to compare previous and next values.
   */
  constructor(initialValue: any, comparisonFunction: (prev: any, next: any) => boolean) {
    super(initialValue)
    this.comparisonFunction = comparisonFunction
  }

  /**
   * Sets the state value if comparison function returns false.
   * @param newValue - New state value.
   */
  set(newValue: any): void {
    const prevValue = super.get()
    if (this.comparisonFunction(prevValue, newValue))
      return
    super.set(newValue)
  }
}

// Export original variable names mapped to refactored classes
export const N = StatePublisher // original: N
export const B = ComparableStatePublisher // original: B
