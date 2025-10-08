import { z } from "zod"
import { getLocalStorage, localStorageRef } from "../905/657224"
import { resourceUtils } from "../905/989992"
import { atom, atomStoreManager, createRemovableAtomFamily, createValidatedLocalStorageAtom } from "../figma_app/27355"
import { getInitialOptions } from "../figma_app/169182"
import { assert } from "../figma_app/465776"

// Constants for localStorage management
const VALID_LIFECYCLE_NAMES = ["test_local_storage", "seen_browser_notifications_onboarding_overlay"]
const LIFECYCLE_PREFIX = "CURATOR_"
const DEFAULT_LIFECYCLE_STATE = {
  count: 1e6,
  updatedAt: new Date("9999-01-01"),
}

// Zod schema for validating lifecycle state
const LifecycleStateSchema = z.object({
  count: z.number(),
  updatedAt: z.instanceof(Date),
})

// Check if user is authenticated
const isUserAuthenticated = (): boolean => !!getInitialOptions().user_data?.id

// Generate localStorage key with prefix
const generateLifecycleKey = (name: string): string => `${LIFECYCLE_PREFIX}${name}`

// Create atom family for lifecycle management
const createLifecycleAtom = createRemovableAtomFamily((lifecycleName: string) =>
  createValidatedLocalStorageAtom(
    generateLifecycleKey(lifecycleName),
    isUserAuthenticated() && getLocalStorage() ? null : DEFAULT_LIFECYCLE_STATE,
    LifecycleStateSchema,
    {
      subscribeToChanges: true,
    },
    {
      parse: (value: string) => {
        const parsed = JSON.parse(value)
        if (value === null)
          return null
        if (parsed.updatedAt) {
          parsed.updatedAt = new Date(parsed.updatedAt)
        }
        return parsed
      },
    },
  ),
)

export class LifecycleManager {
  private lifecycle: { localStorageName: string }
  private baseAtom: ReturnType<typeof createLifecycleAtom>

  constructor(lifecycleConfig: { localStorageName: string }) {
    assert(!!lifecycleConfig.localStorageName, "localStorageName is required")
    this.lifecycle = lifecycleConfig
    this.baseAtom = createLifecycleAtom(this.lifecycle.localStorageName)
  }

  /**
   * Get atom with loaded lifecycle state and config
   * @returns Atom with lifecycle data
   */
  getLifecycleAtom() {
    return atom((get) => {
      const lifecycleState = get(this.baseAtom)
      return resourceUtils.loaded({
        lifecycleState,
        lifecycleConfig: this.lifecycle,
      })
    })
  }

  /**
   * Set lifecycle state in localStorage
   * @param state - New lifecycle state to set
   */
  setLifecycleLocalStorageItem(state: typeof DEFAULT_LIFECYCLE_STATE) {
    atomStoreManager.set(this.baseAtom, state)
  }

  /**
   * Increment lifecycle counter if user is authenticated
   */
  incrementLifecycleCounter() {
    if (!isUserAuthenticated())
      return

    const currentState = atomStoreManager.get(this.baseAtom)
    const newState = {
      count: currentState?.count ? currentState.count + 1 : 1,
      updatedAt: new Date(),
    }
    this.setLifecycleLocalStorageItem(newState)
  }

  /**
   * Update the updatedAt timestamp
   * @param date - New date to set as updatedAt
   */
  setUpdatedAt(date: Date) {
    const currentState = atomStoreManager.get(this.baseAtom)
    if (!currentState)
      return

    const newState = {
      ...currentState,
      updatedAt: date,
    }
    this.setLifecycleLocalStorageItem(newState)
  }

  /**
   * Remove stale localStorage entries that don't match valid lifecycle names
   */
  static removeStaleLocalStorageLifecycleNames() {
    if (!localStorageRef)
      return

    Object.keys(localStorageRef)
      .filter(key => key.startsWith(LIFECYCLE_PREFIX))
      .filter((key) => {
        const name = key.slice(LIFECYCLE_PREFIX.length)
        return !VALID_LIFECYCLE_NAMES.includes(name)
      })
      .forEach(key => localStorageRef.removeItem(key))
  }
}

export const C5 = LifecycleManager
