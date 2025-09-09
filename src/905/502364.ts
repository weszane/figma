import { atom, atomStoreManager } from '../figma_app/27355'

// Original class name: r
/**
 * EventEmitter class for managing event listeners.
 * Original: class r
 */
class EventEmitter {
  private listenerMap: Map<string, Set<(event: any) => void>> = new Map()

  /**
   * Adds an event listener for a specific event type.
   * Original: addEventListener
   * @param eventType - The type of event.
   * @param listener - The listener function.
   */
  addEventListener(eventType: string, listener: (event: any) => void): void {
    if (!this.listenerMap.has(eventType)) {
      this.listenerMap.set(eventType, new Set())
    }
    this.listenerMap.get(eventType)!.add(listener)
  }

  /**
   * Removes an event listener for a specific event type.
   * Original: removeEventListener
   * @param eventType - The type of event.
   * @param listener - The listener function.
   */
  removeEventListener(eventType: string, listener: (event: any) => void): void {
    const listeners = this.listenerMap.get(eventType)
    if (listeners) {
      listeners.delete(listener)
    }
  }

  /**
   * Gets the set of listeners for a specific event type.
   * Original: getListenersSet
   * @param eventType - The type of event.
   * @returns The set of listeners or undefined.
   */
  private getListenersSet(eventType: string): Set<(event: any) => void> | undefined {
    return this.listenerMap.get(eventType)
  }

  /**
   * Handles an event by calling all listeners for that event type.
   * Original: handleEvent
   * @param event - The event object with an id property.
   */
  handleEvent(event: { id: string }): void {
    const listeners = this.listenerMap.get(event.id)
    if (listeners) {
      listeners.forEach((listener) => {
        listener(event)
      })
    }
  }
}

// Original: export let $$a1 = atom(() => new r())
/**
 * Atom for the EventEmitter instance.
 * Original: $$a1
 */
export const eventEmitterAtom = atom(() => new EventEmitter())

// Original: export function $$s0(e) { atomStoreManager.get($$a1).handleEvent(e) }
/**
 * Function to handle an event using the atom store.
 * Original: $$s0
 * @param event - The event to handle.
 */
export function handleAtomEvent(event: { id: string }): void {
  atomStoreManager.get(eventEmitterAtom).handleEvent(event)
}

// Original: export const YQ = $$s0
/**
 * Exported alias for handleEvent.
 * Original: YQ
 */
export const YQ = handleAtomEvent

// Original: export const az = $$a1
/**
 * Exported alias for eventEmitterAtom.
 * Original: az
 */
export const az = eventEmitterAtom
