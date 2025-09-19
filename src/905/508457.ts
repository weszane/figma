import { isEqual } from 'lodash-es'
import { fullscreenReadyAtom } from '../905/924253'
import { atom, atomStoreManager, createAtomWithEquality, setupSubscriptionAtom } from '../figma_app/27355'
import { isObservableAlive, subscribeObservable } from '../figma_app/84367'
import { loadAtomReducer, LoadStatusEnum } from '../figma_app/187925'
import { setupRemovableAtomFamily } from '../figma_app/615482'
/**
 * Atom representing fullscreen readiness or loaded status.
 * @originalName c
 */
const fullscreenOrLoadedAtom = atom((get) => {
  const fullscreenReady = get(fullscreenReadyAtom)
  const loadStatus = get(loadAtomReducer)
  return fullscreenReady || loadStatus.status === LoadStatusEnum.LOADED
})

/**
 * Creates a removable atom family for a given observable.
 * @param observableOrFactory - Observable instance or factory function.
 * @returns Removable atom family.
 * @originalName $$u0
 */
export function setupObservableAtomFamily(observableOrFactory: any) {
  const getObservable = typeof observableOrFactory === 'function'
    ? observableOrFactory
    : () => observableOrFactory
  return setupRemovableAtomFamily(() =>
    setupSubscriptionAtom({
      get: () => getObservable().getCopy(),
      subscribe: cb => subscribeObservable(getObservable(), {
        onChangeDeferred: cb,
      }),
    }),
  )
}

/**
 * Creates an atom that depends on fullscreenOrLoadedAtom and an observable.
 * @param observableFactory - Factory function for observable.
 * @param fallbackValue - Value to use if observable is not alive.
 * @returns Atom instance.
 * @originalName $$p3
 */
export function createConditionalObservableAtom(observableFactory: any, fallbackValue: any) {
  const observableAtomFamily = setupObservableAtomFamily(observableFactory)
  return atom((get) => {
    get(fullscreenOrLoadedAtom)
    const observable = observableFactory()
    return observable && isObservableAlive(observable)
      ? get(observableAtomFamily)
      : fallbackValue
  })
}

/**
 * Enum for file change behaviors.
 * @originalName $$m2
 */
export enum FileChangeBehaviorEnum {
  RESET_VALUE_ON_FILE_CHANGE = 0,
  KEEP_SEPARATE_VALUE_FOR_EACH_FILE = 1,
  SHARE_SAME_VALUE_FOR_ALL_FILES = 2,
}

/**
 * Creates an atom with file change behavior and sync helpers.
 * @param valueFactory - Factory function for atom value.
 * @param options - Options including changeFileBehavior and equalityFn.
 * @returns Atom with sync helpers.
 * @originalName $$h1
 */
export function createFileBehaviorAtom(valueFactory: any, options: {
  changeFileBehavior: FileChangeBehaviorEnum
  equalityFn?: (a: any, b: any) => boolean
}) {
  const atomInstance = createFileBehaviorAtomInternal(valueFactory, options)
  return Object.assign(atom(get => get(atomInstance)), createSyncHelpers(atomInstance))
}

/**
 * Creates a writable atom with file change behavior and sync helpers.
 * @param valueFactory - Factory function for atom value.
 * @param setValue - Setter function for atom value.
 * @param options - Options including changeFileBehavior and equalityFn.
 * @returns Writable atom with sync helpers.
 * @originalName $$g4
 */
export function createWritableFileBehaviorAtom(valueFactory: any, setValue: (val: any) => void, options: {
  changeFileBehavior: FileChangeBehaviorEnum
  equalityFn?: (a: any, b: any) => boolean
}) {
  const atomInstance = createFileBehaviorAtomInternal(valueFactory, options)
  return Object.assign(
    atom(
      get => get(atomInstance),
      (get, set, update) => {
        setValue(typeof update === 'function' ? update(get(atomInstance)) : update)
      },
    ),
    createSyncHelpers(atomInstance),
  )
}

/**
 * Internal helper to create atom based on file change behavior.
 * @param valueFactory - Factory function for atom value.
 * @param options - Options including changeFileBehavior and equalityFn.
 * @returns Atom instance.
 * @originalName f
 */
function createFileBehaviorAtomInternal(
  valueFactory: any,
  {
    changeFileBehavior,
    equalityFn = isEqual,
  }: {
    changeFileBehavior: FileChangeBehaviorEnum
    equalityFn?: (a: any, b: any) => boolean
  },
) {
  const createAtom = () => {
    const value = typeof valueFactory === 'function' ? valueFactory() : valueFactory
    return createAtomWithEquality(atom(value), equalityFn)
  }
  switch (changeFileBehavior) {
    case FileChangeBehaviorEnum.SHARE_SAME_VALUE_FOR_ALL_FILES:
      return createAtom()
    case FileChangeBehaviorEnum.KEEP_SEPARATE_VALUE_FOR_EACH_FILE:
      return setupRemovableAtomFamily(createAtom, { preserveValue: true })
    case FileChangeBehaviorEnum.RESET_VALUE_ON_FILE_CHANGE:
      return setupRemovableAtomFamily(createAtom, { preserveValue: false })
    default:
      return createAtom()
  }
}

/**
 * Creates sync helpers for an atom instance.
 * @param atomInstance - Atom instance.
 * @returns Sync helpers object.
 * @originalName _
 */
function createSyncHelpers(atomInstance: any) {
  const syncFromFullscreen = (value: any) => atomStoreManager.set(atomInstance, value)
  return {
    syncFromFullscreen,
    observable: {
      get: () => atomStoreManager.get(atomInstance),
      set: syncFromFullscreen,
    },
  }
}

// Exported aliases for refactored functions and constants
export const SG = setupObservableAtomFamily
export const hR = createFileBehaviorAtom
export const hW = FileChangeBehaviorEnum
export const vv = createConditionalObservableAtom
export const x6 = createWritableFileBehaviorAtom
