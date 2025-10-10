// Origin: /Users/allen/github/fig/src/905/199441.ts
// Refactored from minified code: Renamed variables for clarity, added generics for type safety, improved readability with proper naming and comments, added interface for return type.

export interface ReactiveValue<T> {
  set: (value: T) => void;
  get: () => T;
  subscribe: (callback: (value: T) => void) => void;
  unsubscribe: (callback: (value: T) => void) => void;
}

/**
 * Creates a reactive value store that allows setting/getting a value and subscribing to changes.
 * @param initialValue - The initial value of type T.
 * @returns An object with set, get, subscribe, and unsubscribe methods.
 */
export function createReactiveValue<T>(initialValue: T): ReactiveValue<T> {
  let currentValue = initialValue;
  let subscribers: Array<(value: T) => void> = [];

  return {
    set: (value: T) => {
      currentValue = value;
      // Notify all subscribers with the new value
      subscribers.forEach(callback => callback(currentValue));
    },
    get: () => currentValue,
    subscribe: (callback: (value: T) => void) => {
      subscribers.push(callback);
    },
    unsubscribe: (callback: (value: T) => void) => {
      // Remove the callback by reference equality
      subscribers = subscribers.filter(sub => sub !== callback);
    }
  };
}

export const _ = createReactiveValue;
