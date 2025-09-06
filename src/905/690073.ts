import type { Fn } from '../../types/global'
import { addUnique, removeElement } from '../figma_app/656233'

/**
 * EventEmitter class for managing event listeners and triggering events.
 * @originalName $$a0
 */
export class EventEmitter {
  /** Name of the emitter instance. */
  private _name: string
  /** Map of event names to arrays of listener functions. */
  private _listenersByEvent: Record<string, Fn[]>

  /**
   * Creates an EventEmitter instance.
   * @param name - The name of the emitter.
   */
  constructor(name: string) {
    this._name = name
    this._listenersByEvent = Object.create(null)
  }

  /**
   * Registers a listener for a specific event.
   * @param event - The event name.
   * @param listener - The listener function.
   * @originalName on
   */
  public on(event: string, listener: Fn): void {
    if (!this._listenersByEvent[event]) {
      this._listenersByEvent[event] = []
    }
    addUnique(this._listenersByEvent[event], listener)
  }

  /**
   * Removes a specific listener for an event.
   * @param event - The event name.
   * @param listener - The listener function to remove.
   * @originalName removeListener
   */
  public removeListener(event: string, listener: Fn): void {
    const listeners = this._listenersByEvent[event]
    if (listeners) {
      removeElement(listeners, listener)
    }
  }

  /**
   * Triggers all listeners for a specific event, passing any arguments.
   * @param event - The event name.
   * @param args - Arguments to pass to listeners.
   * @originalName trigger
   */
  public trigger(event: string, ...args: any[]): void {
    const listeners = this._listenersByEvent[event]
    if (listeners) {
      for (const listener of listeners) {
        listener.apply(this, args)
      }
    }
  }

  /**
   * Removes all listeners for all events.
   * @originalName removeAllListeners
   */
  public removeAllListeners(): void {
    this._listenersByEvent = Object.create(null)
  }
}

/** Alias for EventEmitter (original export name: b) */
export const b = EventEmitter
