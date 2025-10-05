/**
 * Binds a function to null and assigns the shouldIgnoreAction property from the options.
 * Original: $$n3
 * @param fn - The function to bind.
 * @param options - An object containing shouldIgnoreAction.
 * @returns The bound function with shouldIgnoreAction property.
 */
export function bindWithIgnore(fn: (...args: any[]) => any, options: { shouldIgnoreAction: (action: any) => boolean }): (...args: any[]) => any {
  const boundFn = fn.bind(null);
  boundFn.shouldIgnoreAction = options.shouldIgnoreAction;
  return boundFn;
}

/**
 * Applies a reducer function to each value in an object, skipping if shouldIgnoreAction returns true.
 * Returns a new object if any values changed, otherwise returns the original.
 * Original: $$r1
 * @param obj - The object to reduce.
 * @param action - The action to pass to the reducer.
 * @param reducer - The reducer function.
 * @returns The reduced object or the original if unchanged.
 */
export function reduceObject<T extends Record<string, any>>(obj: T, action: any, reducer: { shouldIgnoreAction: (action: any) => boolean; (value: any, action: any): any }): T {
  if (reducer.shouldIgnoreAction(action)) return obj;
  let result: any = null;
  for (const key of Object.keys(obj)) {
    const newValue = reducer(obj[key], action);
    if (obj[key] !== newValue && result === null) {
      result = { ...obj };
    }
    if (result) {
      result[key] = newValue;
    }
  }
  return result || obj;
}

/**
 * Applies a reducer function to each element in an array, skipping if shouldIgnoreAction returns true.
 * Returns a new array if any elements changed, otherwise returns the original.
 * Original: $$a2
 * @param arr - The array to reduce.
 * @param action - The action to pass to the reducer.
 * @param reducer - The reducer function.
 * @returns The reduced array or the original if unchanged.
 */
export function reduceArray<T>(arr: T[], action: any, reducer: { shouldIgnoreAction: (action: any) => boolean; (value: T, action: any): T }): T[] {
  if (reducer.shouldIgnoreAction(action)) return arr;
  let result: T[] | null = null;
  for (let i = 0; i < arr.length; i++) {
    const newValue = reducer(arr[i], action);
    if (arr[i] !== newValue && result === null) {
      result = arr.slice(0, i);
    }
    if (result) {
      result.push(newValue);
    }
  }
  return result || arr;
}

/**
 * Composes two functions: returns a new function that applies the first function then the second.
 * Original: $$s0
 * @param fn1 - The first function to apply.
 * @param fn2 - The second function to apply.
 * @returns The composed function.
 */
export function composeFn<T, U, V>(fn1: (x: T, y: U) => V, fn2: (x: V, y: U) => any): (x: T, y: U) => any {
  return (input1: T, input2: U) => fn2(fn1(input1, input2), input2);
}

// Updated exports with refactored names
export const oB = bindWithIgnore;
export const Ql = reduceObject;
export const ZN = reduceArray;
export const Oi = composeFn;
