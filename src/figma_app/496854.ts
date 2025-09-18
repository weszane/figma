import type { Dispatch } from 'redux'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setupOptimistPlanLoader } from '../905/352022'
import { FPlanNameType } from '../figma_app/191312'

/**
 * Filters plans to exclude STUDENT and STARTER tiers.
 * Original function: $$o1
 * @returns {Array} Filtered plans
 */
export function getFilteredPlans(): any[] {
  const plans = useSelector((state: any) => state.plans)
  const dispatch = useDispatch<Dispatch<any>>()

  useEffect(() => {
    dispatch(setupOptimistPlanLoader({
      loadedPlans: plans,
    }))
  }, [dispatch, plans])

  return plans.filter(
    (plan: any) =>
      plan.tier !== FPlanNameType.STUDENT
      && plan.tier !== FPlanNameType.STARTER,
  )
}

/**
 * Checks if there are any filtered plans.
 * Original function: $$l0
 * @returns {boolean}
 */
export function hasFilteredPlans(): boolean {
  return getFilteredPlans().length > 0
}

// Export aliases for compatibility with original exports
export const h = hasFilteredPlans
export const j = getFilteredPlans
