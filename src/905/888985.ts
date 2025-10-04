import { SubscriptionManager } from '../905/417830';
import { deepEqual } from '../905/663269';
import { getCurrentLiveGraphClient } from '../905/761735';
import { debounce } from '../905/915765';
import { createLoadingState } from '../905/957591';
import { resourceUtils } from '../905/989992';
import { atom, atomStoreManager, createRemovableAtomFamily, setupAtomWithMount } from '../figma_app/27355';
import { LibraryModuleData, LibraryVariableCollectionData, LibraryVariableCollectionDataWithVariables, UserColorProfilePreferenceView, VariableByKey, VariableCollectionByKey, VariablesByVariableCollectionKey } from '../figma_app/43951';

/**
 * Checks deep equality between two values.
 * @param a - First value.
 * @param b - Second value.
 * @returns True if values are deeply equal.
 * @originalName u
 */
function deepEqualArgs(a: unknown, b: unknown): boolean {
  return deepEqual(a, b);
}

/**
 * Creates an atom with loading state and subscribes to observable state.
 * @param observableKey - Key to subscribe to.
 * @param options - Optional subscription options.
 * @returns Atom with mounted subscription.
 * @originalName p
 */
function createObservableAtom(observableKey: unknown, options?: unknown): ReturnType<typeof setupAtomWithMount> {
  const loadingAtom = atom(createLoadingState());
  if (options === undefined) {
    return setupAtomWithMount(loadingAtom, ({
      setSelf
    }) => {
      return getCurrentLiveGraphClient().subscribe(observableKey, {}, value => {
        setSelf(value);
      });
    });
  }
  return setupAtomWithMount(loadingAtom, ({
    setSelf
  }) => {
    return getCurrentLiveGraphClient().subscribe(observableKey, options, value => {
      setSelf(value);
    });
  });
}

/**
 * Creates a removable atom family for a given observable key.
 * @param observableKey - Key to subscribe to.
 * @returns Removable atom family.
 * @originalName m
 */
function createRemovableObservableAtomFamily(observableKey: unknown) {
  return createRemovableAtomFamily(param => createObservableAtom(observableKey, param), deepEqualArgs);
}

/**
 * Checks deep equality for arrays using deepEqualArgs.
 * @param a - First array.
 * @param b - Second array.
 * @returns True if arrays are deeply equal.
 * @originalName h
 */
function deepEqualArrayArgs(a: unknown[], b: unknown[]): boolean {
  return a.length === b.length && a.every((item, idx) => deepEqualArgs(item, b[idx]));
}

/**
 * Creates a removable atom family for resource results.
 * @param resourceKey - Key for resource.
 * @returns Removable atom family.
 * @originalName g
 */
function createRemovableResourceAtomFamily(resourceKey: unknown) {
  return createRemovableAtomFamily(params => {
    /**
     * Internal function to create atom for resource results.
     * @param key - Resource key.
     * @param argsArray - Array of arguments.
     * @returns Atom with mounted subscription.
     * @originalName (function inside g)
     */
    function createResourceAtom(key: unknown, argsArray: unknown[]) {
      const resourceAtom = atom(argsArray.map(arg => ({
        args: arg,
        result: resourceUtils.loading()
      })));
      return setupAtomWithMount(resourceAtom, ({
        setSelf
      }) => {
        const subscription = new SubscriptionManager(getCurrentLiveGraphClient(), debounce(() => {
          setSelf(argsArray.map(arg => ({
            args: arg,
            result: resourceUtils.from(subscription.currentResult(arg))
          })));
        }, 100));
        subscription.update(key, argsArray);
        return () => subscription.clear();
      });
    }
    return createResourceAtom(resourceKey, params);
  }, deepEqualArrayArgs);
}

// Removable atom families for various app domain entities
export const userColorProfileAtomFamily = createRemovableObservableAtomFamily(UserColorProfilePreferenceView); // $$f4
export const variablesByCollectionAtomFamily = createRemovableObservableAtomFamily(VariablesByVariableCollectionKey); // $$_6
export const variableByKeyAtomFamily = createRemovableObservableAtomFamily(VariableByKey); // $$A3
export const libraryModuleDataAtomFamily = createRemovableObservableAtomFamily(LibraryModuleData); // $$y8
export const variableCollectionByKeyResourceAtomFamily = createRemovableResourceAtomFamily(VariableCollectionByKey); // $$b1
export const variableByKeyResourceAtomFamily = createRemovableResourceAtomFamily(VariableByKey); // $$v5

/**
 * Creates a composed atom with removable atom family and custom logic.
 * @param observableKey - Key to subscribe to.
 * @param familyFn - Function to create atom family.
 * @returns Composed atom.
 * @originalName I
 */
function createComposedRemovableAtom(observableKey: unknown, familyFn: (family: ReturnType<typeof createRemovableAtomFamily>) => (e: unknown, t: unknown) => unknown) {
  const removableFamily = createRemovableAtomFamily(param => createObservableAtom(observableKey, param), deepEqualArgs);
  const composedFn = familyFn(removableFamily);
  const composedAtom = atom((e, t) => composedFn(e, t));
  const rootAtom = atom(e => e(composedAtom), () => {});
  rootAtom.onMount = () => () => removableFamily.removeAll();
  return rootAtom;
}

/**
 * Wraps a callback-based async operation in a Promise.
 * @param key - Atom store key.
 * @param executor - Function that receives resolve and reject.
 * @returns Promise for the async operation.
 * @originalName $$E2
 */
export function asyncExecutorSubscription(key: any, executor: (resolve: (value: unknown) => void, reject: (reason?: unknown) => void) => void): Promise<unknown> {
  return new Promise((resolve, reject) => {
    let active = true;
    const unsubscribe = atomStoreManager.sub(key, run);
    const onSuccess = (value: unknown) => {
      active = false;
      resolve(value);
    };
    const onError = (error: unknown) => {
      active = false;
      reject(error);
    };
    function run() {
      executor(onSuccess, onError);
      if (!active) unsubscribe();
    }
    if (active) run();
  });
}

// Composed atoms for library variable collections
function libraryVariableCollectionAtom(fn: (family: ReturnType<typeof createRemovableAtomFamily>) => (e: unknown, t: unknown) => unknown) {
  return createComposedRemovableAtom(LibraryVariableCollectionData, fn);
} // $$x0

function libraryVariableCollectionWithVarsAtom(fn: (family: ReturnType<typeof createRemovableAtomFamily>) => (e: unknown, t: unknown) => unknown) {
  return createComposedRemovableAtom(LibraryVariableCollectionDataWithVariables, fn);
} // $$S7

// Export original names for external usage
export const BV = libraryVariableCollectionAtom;
export const Ew = variableCollectionByKeyResourceAtomFamily;
export const QO = asyncExecutorSubscription;
export const Y4 = variableByKeyAtomFamily;
export const Zx = userColorProfileAtomFamily;
export const a5 = variableByKeyResourceAtomFamily;
export const d5 = variablesByCollectionAtomFamily;
export const eS = libraryVariableCollectionWithVarsAtom;
export const x8 = libraryModuleDataAtomFamily;