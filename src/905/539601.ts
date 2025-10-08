import { LifecycleManager } from "../905/147383"
import { transformAtom } from "../905/401885"
import { dayjs } from "../905/920142"
import { BlockReasonType } from "../905/953718"
import { resourceUtils } from "../905/989992"
import { atom, createRemovableAtomFamily } from "../figma_app/27355"
import { UserFlagByName } from "../figma_app/43951"
import { assert, throwTypeError } from "../figma_app/465776"
import { incrementUserFlagCounter } from "../figma_app/502422"

interface LifecycleState {
  count: number | null
  updatedAt: string | null
}

interface LifecycleCheckResult {
  reasonType: BlockReasonType
  cause: 'COOLDOWN' | 'MAX_TIMES'
}

class UserFlagLifecycleManager {
  private readonly lifecycleConfig: any
  private readonly userFlagName: string

  constructor(config: { userFlagName: string }) {
    assert(!!config.userFlagName)
    this.lifecycleConfig = config
    this.userFlagName = config.userFlagName
  }

  /**
   * Get lifecycle atom (originally getLifecycleAtom)
   */
  getLifecycleAtom() {
    return transformAtom(
      UserFlagByName.Query({
        name: this.userFlagName,
      }),
      data => ({
        lifecycleState: this.extractLifecycleState(
          data.currentUser.userFlagByName?.count,
          data.currentUser.userFlagByName?.updatedAt,
        ),
        lifecycleConfig: this.lifecycleConfig,
      }),
    )
  }

  /**
   * Extract lifecycle state from user flag data
   * @param count - The count value from user flag
   * @param updatedAt - The updated timestamp from user flag
   * @returns Lifecycle state object or null
   */
  private extractLifecycleState(count: number | null | undefined, updatedAt: string | null | undefined): LifecycleState | null {
    return updatedAt
      ? {
        count: count ?? null,
        updatedAt,
      }
      : null
  }

  /**
   * Increment lifecycle counter (originally incrementLifecycleCounter)
   */
  incrementLifecycleCounter(): void {
    incrementUserFlagCounter(this.userFlagName)
  }
}

const DEFAULT_LIFECYCLE_STATE = resourceUtils.loaded({
  lifecycleState: null,
})

/**
 * Create lifecycle manager instance (originally h)
 * @param config - Lifecycle configuration
 * @returns Lifecycle manager instance
 */
function createLifecycleManager(config: any) {
  if (config.userFlagName) {
    return new UserFlagLifecycleManager(config)
  }

  if (config.localStorageName) {
    return new LifecycleManager(config)
  }

  throw new Error("[Curator]: Lifecycle must have either a user flag name or a local storage name")
}

/**
 * Lifecycle atom family (originally $$g2)
 */
export const createLifecycleAtomFamily = createRemovableAtomFamily(config =>
  config ? createLifecycleManager(config).getLifecycleAtom() : atom(DEFAULT_LIFECYCLE_STATE),
)

/**
 * Increment lifecycle counter (originally $$f3)
 * @param config - Lifecycle configuration
 */
export function incrementLifecycleCounter(config: any): void {
  createLifecycleManager(config).incrementLifecycleCounter()
}

/**
 * Check if lifecycle conditions are met (originally $$_0)
 * @param params - Lifecycle state and configuration
 * @returns Block reason if conditions are not met, undefined otherwise
 */
export function checkLifecycleConditions({
  lifecycleState,
  lifecycleConfig,
}: {
  lifecycleState: LifecycleState | null
  lifecycleConfig: any
}): LifecycleCheckResult | undefined {
  // Return undefined if either config or state is missing
  if (!lifecycleConfig || !lifecycleState) {
    return undefined
  }

  // Check max times constraint
  if (lifecycleConfig.maxTimes && (lifecycleState.count ?? 1) >= lifecycleConfig.maxTimes) {
    return {
      reasonType: BlockReasonType.LifecycleCheckFail,
      cause: "MAX_TIMES",
    }
  }

  // Check cooldown constraint
  if ("cooldown" in lifecycleConfig && lifecycleState.updatedAt) {
    const cooldownPeriod = getCooldownDays(lifecycleConfig.cooldown)
    const isWithinCooldown = dayjs(lifecycleState.updatedAt).isAfter(dayjs().subtract(cooldownPeriod, "day"))

    if (isWithinCooldown) {
      return {
        reasonType: BlockReasonType.LifecycleCheckFail,
        cause: "COOLDOWN",
      }
    }
  }

  return undefined
}

/**
 * Get cooldown period in days (originally inline function in $$_0)
 * @param cooldownType - Type of cooldown
 * @returns Cooldown period in days
 */
function getCooldownDays(cooldownType: string): number {
  switch (cooldownType) {
    case "DAILY":
      return 1
    case "WEEKLY":
      return 7
    case "FORTNIGHTLY":
      return 14
    case "MONTHLY":
      return 30
    case "MONTH_AND_A_HALF":
      return 45
    default:
      throwTypeError(cooldownType)
  }
}

/**
 * Get human-readable message for block cause (originally $$A1)
 * @param cause - Block cause
 * @returns Human-readable message
 */
export function getBlockMessage(cause: 'COOLDOWN' | 'MAX_TIMES'): string {
  switch (cause) {
    case "COOLDOWN":
      return "The overlay is in a cooldown period"
    case "MAX_TIMES":
      return "The overlay has been shown the maximum number of times"
    default:
      throwTypeError(cause)
  }
}

// Export aliases for backward compatibility
export const $1 = checkLifecycleConditions
export const Gx = getBlockMessage
export const eC = createLifecycleAtomFamily
export const _Z = incrementLifecycleCounter
