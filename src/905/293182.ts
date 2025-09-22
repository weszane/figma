/**
 * Tracks the timestamp of the last reset.
 * (original variable: n)
 */
let lastResetTimestamp = 0;

/**
 * Resets the timer by storing the current timestamp.
 * (original function: $$r0)
 */
export function resetTimer(): void {
  lastResetTimestamp = Date.now();
}

/**
 * Returns the elapsed time in milliseconds since the last reset.
 * (original function: $$a1)
 */
export function getElapsedTime(): number {
  return Date.now() - lastResetTimestamp;
}

// Export aliases for backward compatibility (original exports: L, N)
export const L = resetTimer;
export const N = getElapsedTime;
