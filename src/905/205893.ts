/**
 * EventEmitter - Original class name: $$n0
 * Manages event listeners and emits events to them.
 */
export class EventEmitter {
  /** Set of registered event listeners */
  listeners: Set<(event: any) => void> = new Set();

  /**
   * Adds a listener to the set.
   * @param listener - Function to be called when an event is emitted.
   */
  addListener(listener: (event: any) => void): void {
    this.listeners.add(listener);
  }

  /**
   * Removes a listener from the set.
   * @param listener - Function to be removed.
   */
  removeListener(listener: (event: any) => void): void {
    this.listeners.delete(listener);
  }

  /**
   * Emits an event to all registered listeners.
   * @param event - Event data to pass to listeners.
   */
  emit(event: any): void {
    this.listeners.forEach(listener => {
      try {
        listener(event);
      } catch (error) {
        console.error(error);
      }
    });
  }
}

/** Exported alias for EventEmitter (original: b = $$n0) */
export const b = EventEmitter;
