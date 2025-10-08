import { reportError } from "../905/11"
import { userFlagService } from "../905/17478"
import { ServiceCategories } from "../905/165054"
import { subscribeAndAwaitData } from "../905/553831"
import { getCurrentLiveGraphClient } from "../905/761735"
import { atom, atomStoreManager, createRemovableAtomFamily } from "../figma_app/27355"
import { UserFlagByName } from "../figma_app/43951"
import { getInitialOptions } from "../figma_app/169182"
import { useSubscription } from "../figma_app/288654"

/**
 * Manages user flag counters with debounced increment and reset operations.
 * This class handles optimistic updates for user flag counts via GraphQL mutations.
 *
 * Original class name: p
 */
class UserFlagCounterManager {
  private pendingIncrementCount: number = 0
  private readonly userFlagName: string
  private readonly makeDebouncedUpsertRequest: (count: number) => Promise<any>
  private readonly makeDebouncedResetRequest: () => Promise<any>

  constructor(userFlagName: string) {
    this.userFlagName = userFlagName
    this.makeDebouncedUpsertRequest = createDebouncedFunction(
      (count: number) => userFlagService.upsertUserFlagWithCount(this.userFlagName, count),
      1000,
    )
    this.makeDebouncedResetRequest = createDebouncedFunction(
      () => userFlagService.resetUserFlag(this.userFlagName),
      1000,
    )
  }

  /**
   * Increments the user flag counter with debouncing and optimistic updates.
   * Returns the updated user flag data or error if operation fails.
   */
  public increment = async (): Promise<any> => {
    const userId = getInitialOptions().user_data?.id

    if (!userId) {
      reportError(
        ServiceCategories.GROWTH_PLATFORM,
        new Error(`Attempted to increment user flag counter ${this.userFlagName} for anonymous user; this is a no-op.`),
      )
      return
    }

    this.pendingIncrementCount += 1

    let userFlagData
    try {
      userFlagData = await subscribeAndAwaitData(UserFlagByName, {
        name: this.userFlagName,
      })
    }
    catch (error) {
      this.pendingIncrementCount -= 1
      return error
    }

    const currentUserFlag = userFlagData.currentUser.userFlagByName

    // If there are no pending increments, do nothing
    if (this.pendingIncrementCount === 0) {
      return
    }

    // Calculate new count based on existing flag or default to 0 + pending increments
    const newCount = (currentUserFlag ? currentUserFlag.count ?? 1 : 0) + this.pendingIncrementCount
    this.pendingIncrementCount = 0

    const upsertPromise = this.makeDebouncedUpsertRequest(newCount)
    const updateTimestamp = new Date()

    // Perform optimistic update or creation based on whether flag exists
    if (currentUserFlag) {
      return getCurrentLiveGraphClient().optimisticallyUpdate({
        UserFlag: {
          [currentUserFlag.id]: {
            count: newCount,
            updatedAt: updateTimestamp,
          },
        },
      }, upsertPromise)
    }
    else {
      return getCurrentLiveGraphClient().optimisticallyCreate({
        UserFlag: {
          [`optimistic-id-${this.userFlagName}`]: {
            userId,
            name: this.userFlagName,
            count: newCount,
            createdAt: updateTimestamp,
            updatedAt: updateTimestamp,
          },
        },
      }, upsertPromise)
    }
  }

  /**
   * Resets the user flag counter with debouncing and optimistic deletion.
   * Returns the deletion result or undefined if flag doesn't exist.
   */
  public reset = async (): Promise<any> => {
    const userId = getInitialOptions().user_data?.id

    if (!userId) {
      reportError(
        ServiceCategories.GROWTH_PLATFORM,
        new Error(`Attempted to reset user flag counter ${this.userFlagName} for anonymous user; this is a no-op.`),
      )
      return
    }

    const userFlagData = await subscribeAndAwaitData(UserFlagByName, {
      name: this.userFlagName,
    })

    const currentUserFlag = userFlagData.currentUser?.userFlagByName

    if (!currentUserFlag) {
      return
    }

    const resetPromise = this.makeDebouncedResetRequest()

    return getCurrentLiveGraphClient().optimisticallyDelete({
      UserFlag: {
        [currentUserFlag.id]: null,
      },
    }, resetPromise)
  }
}

/**
 * Creates a debounced function that delays execution until after wait milliseconds
 * have elapsed since the last time it was invoked.
 *
 * Original function name: _
 *
 * @param func The function to debounce
 * @param wait The number of milliseconds to delay (default: 200ms)
 * @returns A debounced version of the function
 */
function createDebouncedFunction<T extends (...args: any[]) => any>(
  func: T,
  wait: number = 200,
): (...args: Parameters<T>) => Promise<ReturnType<T>> {
  let timeoutId: NodeJS.Timeout | null = null
  let pendingResolvers: Array<(value: ReturnType<T> | PromiseLike<ReturnType<T>>) => void> = []

  return function (...args: Parameters<T>): Promise<ReturnType<T>> {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    timeoutId = setTimeout(() => {
      const result = func(...args)
      pendingResolvers.forEach(resolve => resolve(result))
      pendingResolvers = []
    }, wait)

    return new Promise<ReturnType<T>>((resolve) => {
      pendingResolvers.push(resolve)
    })
  }
}

// Create a removable atom family for managing UserFlagCounterManager instances
const userFlagCounterAtomFamily = createRemovableAtomFamily(
  (userFlagName: string) => atom(() => new UserFlagCounterManager(userFlagName)),
)

/**
 * Increments a user flag counter by name.
 *
 * Original function name: $$m1
 *
 * @param userFlagName The name of the user flag to increment
 * @returns Promise that resolves when the increment operation completes
 */
export function incrementUserFlagCounter(userFlagName: string): Promise<any> {
  return atomStoreManager.get(userFlagCounterAtomFamily(userFlagName)).increment()
}

/**
 * Gets a reactive subscription to a user flag counter value.
 *
 * Original function name: $$g0
 *
 * @param userFlagName The name of the user flag to subscribe to
 * @returns A subscription that provides the current count value
 */
export function useUserFlagCounterValue(userFlagName: string): any {
  return useSubscription(UserFlagByName, {
    name: userFlagName,
  }, {
    enabled: !!getInitialOptions().user_data?.id,
  }).transform(data =>
    data.currentUser.userFlagByName ? data.currentUser.userFlagByName.count ?? 1 : 0,
  )
}

// Export aliases for backward compatibility
export const BN = useUserFlagCounterValue
export const FC = incrementUserFlagCounter
