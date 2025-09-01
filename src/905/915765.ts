/**
 * Utility functions for function timing control - debouncing and throttling
 */

/**
 * Debounced function type with additional control methods
 */
interface DebouncedFunction<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): void;
  cancel: () => void;
  flush: () => void;
}

/**
 * Throttled function type with additional control methods
 */
interface ThrottledFunction<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): void;
  cancel: () => void;
  flush: () => void;
}

/**
 * Creates a debounced version of the provided function that delays execution
 * until after the specified delay has elapsed since the last time it was invoked.
 *
 * @param callback - The function to debounce
 * @param delay - The delay in milliseconds (default: 0)
 * @returns A debounced version of the callback with cancel and flush methods
 */
export function debounce<T extends (...args: any[]) => any>(
  callback: T,
  delay: number = 0,
): DebouncedFunction<T> {
  let timeoutId: number | null = null;
  let lastArgs: Parameters<T> | null = null;

  const executeCallback = function () {
    timeoutId = null;
    if (!lastArgs) {
      return;
    }
    const argsToExecute = lastArgs;
    lastArgs = null;
    callback(...argsToExecute);
  };

  const debouncedFunction = function (...args: Parameters<T>) {
    lastArgs = args;
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = window.setTimeout(executeCallback, delay);
  } as DebouncedFunction<T>;

  debouncedFunction.cancel = () => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    lastArgs = null;
  };

  debouncedFunction.flush = () => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
    executeCallback();
  };

  return debouncedFunction;
}

/**
 * Creates a throttled version of the provided function that limits execution
 * to at most once per specified delay period.
 *
 * @param callback - The function to throttle
 * @param delay - The delay in milliseconds (default: 200ms)
 * @param leading - Whether to execute on the leading edge (default: false)
 * @returns A throttled version of the callback with cancel and flush methods
 */
export function throttle<T extends (...args: any[]) => any>(
  callback: T,
  delay: number = 200,
  leading: boolean = false,
): ThrottledFunction<T> {
  let timerId: NodeJS.Timeout | number = 0;
  let lastArgs: Parameters<T> | null = null;

  const executeCallback = function () {
    clearTimeout(timerId);
    timerId = 0;
    if (!lastArgs) {
      return;
    }
    const argsToExecute = lastArgs;
    lastArgs = null;
    callback(argsToExecute);
  };

  const throttledFunction = function (...args: Parameters<T>) {
    if (leading && !timerId) {
      leading = false;
      callback(args);
      leading = true;
    } else {
      lastArgs = args;
    }
    clearTimeout(timerId);
    timerId = setTimeout(executeCallback, delay);
  } as ThrottledFunction<T>;

  throttledFunction.cancel = () => {
    clearTimeout(timerId);
    lastArgs = null;
    timerId = 0;
  };

  throttledFunction.flush = executeCallback;

  return throttledFunction;
}
