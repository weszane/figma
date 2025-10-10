// Refactored to improve readability, added types, and renamed variables for clarity
import { useCurrentPrivilegedPlan, useIsOrgOrEnterprisePlan, useIsProOrStudentPlan } from "../figma_app/465071"

export function useAllowInternalTemplatesCooper() {
  const plan = useCurrentPrivilegedPlan("useAllowInternalTemplatesCooper")
  const isOrgOrEnterprise = useIsOrgOrEnterprisePlan(plan).unwrapOr(false)
  const isProOrStudent = useIsProOrStudentPlan(plan).unwrapOr(false)
  const customTemplatesAllowed = plan.data?.customTemplatesAllowed

  // Return true if user is on org/enterprise plan with custom templates allowed OR on pro/student plan
  return (isOrgOrEnterprise && customTemplatesAllowed) || isProOrStudent
}

export const j = useAllowInternalTemplatesCooper
