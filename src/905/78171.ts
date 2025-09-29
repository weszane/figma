/**
 * Executes a callback function when the DOM is ready.
 * If the document is not in 'loading' state, calls the callback immediately.
 * Otherwise, adds an event listener for 'DOMContentLoaded'.
 * 
 * @param callback - The function to execute when the DOM is ready.
 * 
 * Original function name: $$n0
 */
export function executeWhenDomReady(callback: () => void): void {
  if (document.readyState !== "loading") {
    callback();
  } else {
    document.addEventListener("DOMContentLoaded", callback);
  }
}

// Original export: const t = $$n0
export const t = executeWhenDomReady;
