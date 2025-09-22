/**
 * Holds the current state object.
 * @see D
 */
let currentState: {
  getState: () => AppState;
  dispatch: (action: any) => any;
}; // D

/**
 * Initializes the debug store on the window object.
 *
 * @param state - The state object to be stored and accessed.
 */
export function initializeDebugStore(state: any): void {
  // x
  currentState = state; // D

  /**
   * Returns a deep copy of the current state after a 5 second delay.
   * Warns that this API is for debugging only.
   */

  // Attach the debug store to the window object
  window.store = {
    getState(): any {
      console.warn(
        "This API is intended only for debugging. Please wait 5 seconds.",
      );
      const startTime = Date.now();
      while (Date.now() - startTime < 5000); // 5 seconds busy-wait
      // Deep copy using JSON methods
      return JSON.parse(JSON.stringify(state));
    },
    /**
     * Disabled dispatch method for debug store.
     * @param action - The action to dispatch (ignored).
     * @returns The action itself, as required by Dispatch signature.
     */
    dispatch(action: unknown) {
      console.error("Action dispatch is disabled in release builds");
      return action;
    },
  };
}

export { currentState as debugState };
