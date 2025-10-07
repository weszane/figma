import type { Atom, WritableAtom } from 'jotai/vanilla'
import type { AtomFamily } from 'jotai/vanilla/utils/atomFamily'
import type { LoadingState } from '../905/957591'
import { SubscriptionManager } from '../905/417830'
import { deepEqual } from '../905/663269'
import { getCurrentLiveGraphClient } from '../905/761735'
import { debounce } from '../905/915765'
import { createLoadingState } from '../905/957591'
import { resourceUtils } from '../905/989992'
import { atom, atomStoreManager, createRemovableAtomFamily, setupAtomWithMount } from '../figma_app/27355'
import { LibraryModuleData, LibraryVariableCollectionData, LibraryVariableCollectionDataWithVariables, UserColorProfilePreferenceView, VariableByKey, VariableCollectionByKey, VariablesByVariableCollectionKey } from '../figma_app/43951'

/**
 * Checks deep equality between two values.
 * @param a - First value.
 * @param b - Second value.
 * @returns True if values are deeply equal.
 * @originalName u
 */
function deepEqualArgs<T>(a: T, b: T): boolean {
  return deepEqual(a, b)
}

/**
 * Creates an atom with loading state and subscribes to observable state.
 * @param observableKey - Key to subscribe to.
 * @param options - Optional subscription options.
 * @returns Atom with mounted subscription.
 * @originalName p
 */
function createObservableAtom<T, O>(
  observableKey: T,
  options?: O,
): ReturnType<typeof setupAtomWithMount<LoadingState<unknown>>> {
  const loadingAtom = atom(createLoadingState<unknown>())
  if (options === undefined) {
    return setupAtomWithMount(loadingAtom, ({
      setSelf,
    }) => {
      return getCurrentLiveGraphClient().subscribe(observableKey, {}, (value: unknown) => {
        setSelf(value)
      })
    })
  }
  return setupAtomWithMount(loadingAtom, ({
    setSelf,
  }) => {
    return getCurrentLiveGraphClient().subscribe(observableKey, options, (value: unknown) => {
      setSelf(value)
    })
  })
}

/**
 * Creates a removable atom family for a given observable key.
 * @param observableKey - Key to subscribe to.
 * @returns Removable atom family.
 * @originalName m
 */
function createRemovableObservableAtomFamily<T>(
  observableKey: T,
): AtomFamily<T, ReturnType<typeof createObservableAtom<T, undefined>>> {
  return createRemovableAtomFamily(
    (param: T) => createObservableAtom(observableKey, param),
    deepEqualArgs,
  )
}

/**
 * Checks deep equality for arrays using deepEqualArgs.
 * @param a - First array.
 * @param b - Second array.
 * @returns True if arrays are deeply equal.
 * @originalName h
 */
function deepEqualArrayArgs<T>(a: T[], b: T[]): boolean {
  return a.length === b.length && a.every((item, idx) => deepEqualArgs(item, b[idx]))
}

/**
 * Resource result type for resource atoms.
 */
interface ResourceResult<T> {
  args: T
  result: unknown
}

/**
 * Helper type to extract parameter types from resource views
 */
type ResourceViewParams<T> = T extends { _argKeys: (infer K)[] }
  ? K extends (string | number | symbol)
  ? { [P in K]: string }
  : Record<string, any>
  : Record<string, any>

/**
 * Creates a removable atom family for resource results.
 * @param resourceKey - Key for resource.
 * @returns Removable atom family.
 * @originalName g
 */
function createRemovableResourceAtomFamily<T>(
  resourceKey: T,
): AtomFamily<ResourceViewParams<T>[], Atom<ResourceResult<ResourceViewParams<T>>[]>> {
  return createRemovableAtomFamily((params: ResourceViewParams<T>[]) => {
    /**
     * Internal function to create atom for resource results.
     * @param key - Resource key.
     * @param argsArray - Array of arguments.
     * @returns Atom with mounted subscription.
     * @originalName (function inside g)
     */
    function createResourceAtom(
      key: T,
      argsArray: ResourceViewParams<T>[],
    ): Atom<ResourceResult<ResourceViewParams<T>>[]> {
      const resourceAtom = atom(argsArray.map((arg: ResourceViewParams<T>) => ({
        args: arg,
        result: resourceUtils.loading(),
      })))

      // Create a properly typed atom by explicitly typing the return value
      const typedAtom: Atom<ResourceResult<ResourceViewParams<T>>[]> = setupAtomWithMount(resourceAtom, ({
        setSelf,
      }) => {
        const subscription = new SubscriptionManager(getCurrentLiveGraphClient(), debounce(() => {
          setSelf(argsArray.map((arg: ResourceViewParams<T>) => ({
            args: arg,
            result: resourceUtils.from(subscription.currentResult(arg)),
          })))
        }, 100))
        subscription.update(key, argsArray)
        return () => subscription.clear()
      }) as unknown as Atom<ResourceResult<ResourceViewParams<T>>[]>

      return typedAtom
    }
    return createResourceAtom(resourceKey, params)
  }, deepEqualArrayArgs)
}

// Removable atom families for various app domain entities
export const userColorProfileAtomFamily = createRemovableObservableAtomFamily(typeof UserColorProfilePreferenceView) // $$f4
export const variablesByCollectionAtomFamily = createRemovableObservableAtomFamily(typeof VariablesByVariableCollectionKey) // $$_6
export const variableByKeyAtomFamily = createRemovableObservableAtomFamily(typeof VariableByKey) // $$A3
export const libraryModuleDataAtomFamily = createRemovableObservableAtomFamily(typeof LibraryModuleData) // $$y8
export const variableCollectionByKeyResourceAtomFamily = createRemovableResourceAtomFamily(VariableCollectionByKey) // $$b1
export const variableByKeyResourceAtomFamily = createRemovableResourceAtomFamily(VariableByKey) // $$v5

/**
 * Creates a composed atom with removable atom family and custom logic.
 * @param observableKey - Key to subscribe to.
 * @param familyFn - Function to create atom family.
 * @returns Composed atom.
 * @originalName I
 */
function createComposedRemovableAtom<T, F extends (...args: any[]) => any>(
  observableKey: T,
  familyFn: (family: AtomFamily<T, ReturnType<typeof createObservableAtom<T, undefined>>>) => F,
): Atom<unknown> {
  const removableFamily = createRemovableAtomFamily(
    (param: T) => createObservableAtom(observableKey, param),
    deepEqualArgs,
  )
  const composedFn = familyFn(removableFamily)
  const composedAtom = atom(get => composedFn(get))
  const rootAtom = atom(get => get(composedAtom));
  (rootAtom as any).onMount = () => () => removableFamily.removeAll()
  return rootAtom
}

/**
 * Wraps a callback-based async operation in a Promise.
 * @param key - Atom store key.
 * @param executor - Function that receives resolve and reject.
 * @returns Promise for the async operation.
 * @originalName $$E2
 */
export function asyncExecutorSubscription<T>(
  key: T,
  executor: (resolve: (value: unknown) => void, reject: (reason?: unknown) => void) => void,
): Promise<unknown> {
  return new Promise((resolve, reject) => {
    let active = true
    const unsubscribe = atomStoreManager.sub(key as unknown as Atom<unknown>, run)
    const onSuccess = (value: unknown) => {
      active = false
      resolve(value)
    }
    const onError = (error: unknown) => {
      active = false
      reject(error)
    }
    function run() {
      executor(onSuccess, onError)
      if (!active)
        unsubscribe()
    }
    if (active)
      run()
  })
}

// Composed atoms for library variable collections
export function libraryVariableCollectionAtom<F extends (...args: any[]) => any>(
  fn: (family: AtomFamily<typeof LibraryVariableCollectionData, ReturnType<typeof createObservableAtom<typeof LibraryVariableCollectionData, undefined>>>) => F,
) {
  return createComposedRemovableAtom(LibraryVariableCollectionData, fn)
} // $$x0

export function libraryVariableCollectionWithVarsAtom<F extends (...args: any[]) => any>(
  fn: (family: AtomFamily<typeof LibraryVariableCollectionDataWithVariables, ReturnType<typeof createObservableAtom<typeof LibraryVariableCollectionDataWithVariables, undefined>>>) => F,
) {
  return createComposedRemovableAtom(LibraryVariableCollectionDataWithVariables, fn)
} // $$S7

// Export original names for external usage
export const BV = libraryVariableCollectionAtom
export const Ew = variableCollectionByKeyResourceAtomFamily
export const QO = asyncExecutorSubscription
export const Y4 = variableByKeyAtomFamily
export const Zx = userColorProfileAtomFamily
export const a5 = variableByKeyResourceAtomFamily
export const d5 = variablesByCollectionAtomFamily
export const eS = libraryVariableCollectionWithVarsAtom
export const x8 = libraryModuleDataAtomFamily
