import { OrganizationType } from "../905/833838"

interface Plan {
  plan_type: OrganizationType
  plan_id: string
}

interface UserContext {
  userId: string
  orgId: string | null
  teamId: string | null
}

interface PlanSelectionParams {
  plans: Plan[]
  currentUserOrgId?: string
  currentTeamId?: string
}

/**
 * Creates a user context object based on the plan type
 * Original function: $$r0
 * @param plan - The plan object containing type and id
 * @param userId - The user identifier
 * @returns UserContext object with appropriate orgId or teamId set based on plan type
 */
export function createUserContext(plan: Plan, userId: string): UserContext {
  return plan.plan_type === OrganizationType.ORG
    ? {
      userId,
      orgId: plan.plan_id,
      teamId: null,
    }
    : {
      userId,
      orgId: null,
      teamId: plan.plan_id,
    }
}

/**
 * Finds an appropriate plan based on current user context
 * Original function: $$a1
 * @param params - Object containing plans array and current context identifiers
 * @returns The matching plan or undefined if none found
 */
export function findCurrentPlan(params: PlanSelectionParams): Plan | undefined {
  const { plans, currentUserOrgId, currentTeamId } = params

  if (currentUserOrgId) {
    return plans.find(plan =>
      plan.plan_type === OrganizationType.ORG
      && plan.plan_id === currentUserOrgId,
    )
  }

  if (currentTeamId) {
    return plans.find(plan =>
      plan.plan_type === OrganizationType.TEAM
      && plan.plan_id === currentTeamId,
    )
  }

  return undefined
}

// Aliases for backward compatibility
export const O = createUserContext
export const S = findCurrentPlan
