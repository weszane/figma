import { CPPEventType } from "../905/535806"
import { clearGlobalTags, setGlobalTags } from "../905/760074"
/**
 * Class representing branching web bindings functionality
 * Original class name: s
 */
export class BranchingWebBindings {
  /**
   * Sets branching sentry tags with CPP event type
   * Original method: setBranchingSentryTags
   */
  public setBranchingSentryTags(): void {
    setGlobalTags(CPPEventType.CPP, null)
  }

  /**
   * Clears all branching sentry tags
   * Original method: clearBranchingSentryTags
   */
  public clearBranchingSentryTags(): void {
    clearGlobalTags()
  }
}

export let branchingWebBindingsInstance: BranchingWebBindings

export function setBranchingWebBindings(): void {
  // Kept for backward compatibility
  branchingWebBindingsInstance = new BranchingWebBindings()
}
/**
 * Singleton instance of BranchingWebBindings
 * Original variable: BranchingWebBindings
 */

export const B = branchingWebBindingsInstance
/**
 * Initialization function that was previously used to set up BranchingWebBindings
 * Original function name: $$o1
 * @deprecated Use B directly instead
 */

export const x = setBranchingWebBindings
