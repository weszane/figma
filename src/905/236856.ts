/**
 * Delays execution for a specified number of milliseconds.
 * @param ms - The number of milliseconds to delay.
 * @returns A promise that resolves after the delay.
 * Original name: $$n0
 */
export async function delay(ms: number): Promise<void> {
  await new Promise<void>(resolve => setTimeout(resolve, ms))
}

/**
 * Waits for the next animation frame.
 * @returns A promise that resolves on the next animation frame.
 * Original name: $$r2
 */
export async function waitForAnimationFrame(): Promise<void> {
  await new Promise<any>(resolve => requestAnimationFrame(resolve))
}

/**
 * Executes a promise or function, and ensures a timeout callback is called if not resolved within the specified time.
 * @param task - A promise or function to execute.
 * @param onTimeout - Callback to execute on timeout.
 * @param timeoutMs - Timeout in milliseconds.
 * @returns A promise that resolves when the task completes or the timeout occurs.
 * Original name: $$a1
 */
export function runWithTimeout(
  task: Promise<any> | (() => Promise<any>),
  onTimeout: () => void,
  timeoutMs: number,
): Promise<void> {
  return new Promise<void>(async (resolve) => {
    let timeoutId = setTimeout(() => {
      onTimeout()
      resolve()
    }, timeoutMs)

    if (Promise.resolve(task) === task) {
      await task
    }
    else {
      await (task as () => Promise<any>)()
    }

    clearTimeout(timeoutId)
    resolve()
  })
}

// Refactored exports for clarity and maintainability
export const fm = delay // Original export: fm = $$n0
export const i$ = runWithTimeout // Original export: i$ = $$a1
export const yQ = waitForAnimationFrame // Original export: yQ = $$r2
