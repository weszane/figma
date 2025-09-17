import { getI18nString } from '../905/303541'
/**
 * List of supported job roles.
 * Original variable: $$s1
 */
export const JOB_ROLE_KEYS = [
  'student',
  'educator',
  'developer',
  'research',
  'designer',
  'marketer',
  'product_manager',
  'ux_writing',
  'data_analytics',
  'something_else',
]

/**
 * Maps various job role keys to normalized job role identifiers.
 * Original variable: i
 */
const JOB_ROLE_MAP: Map<string, string> = new Map([
  ['designer', 'designer'],
  ['design', 'designer'],
  ['developer', 'developer'],
  ['software-development', 'developer'],
  ['cto', 'developer'],
  ['product-manager', 'product-manager'],
  ['product_manager', 'product-manager'],
  ['product-management', 'product-manager'],
  ['project-manager', 'product-manager'],
  ['cpo', 'product-manager'],
  ['marketer', 'marketer'],
  ['marketing', 'marketer'],
  ['cmo', 'marketer'],
  ['user-research', 'researcher'],
  ['research', 'researcher'],
  ['ux-researcher', 'researcher'],
  ['user-researcher', 'researcher'],
  ['user_researcher', 'researcher'],
  ['student', 'education'],
  ['educator', 'education'],
  ['education', 'education'],
  ['student-or-educator', 'education'],
  ['student_or_educator', 'education'],
  ['ux_writing', 'ux-writer'],
  ['data_analytics', 'data'],
  ['other', 'other'],
  ['something_else', 'other'],
])

/**
 * Fallback job role keyword mapping for fuzzy matching.
 * Original variable: n
 */
const JOB_ROLE_FALLBACKS: Array<[string, string]> = [
  ['developer', 'developer'],
  ['engineer', 'developer'],
  ['sde', 'developer'],
  ['product manager', 'product-manager'],
  ['program manager', 'product-manager'],
  ['project manager', 'product-manager'],
  ['marketer', 'marketer'],
  ['writer', 'ux-writer'],
  ['content designer', 'ux-writer'],
  ['designer', 'designer'],
  ['analyst', 'data'],
  ['researcher', 'researcher'],
  ['product management', 'product-manager'],
  ['software development', 'developer'],
  ['research', 'researcher'],
  ['marketing', 'marketer'],
  ['content', 'ux-writer'],
  ['copy', 'ux-writer'],
  ['data', 'data'],
  ['analytics', 'data'],
  ['design', 'designer'],
  ['tech', 'developer'],
  ['product', 'product-manager'],
]

/**
 * Normalizes a job role string to a canonical identifier.
 * Original function: $$o0
 * @param role - The input job role string.
 * @returns The normalized job role identifier.
 */
export function normalizeJobRole(role: string | undefined): string {
  if (!role)
    return 'unknown'
  const key = role.toLocaleLowerCase()
  if (JOB_ROLE_MAP.has(key))
    return JOB_ROLE_MAP.get(key)!
  for (const [keyword, mapped] of JOB_ROLE_FALLBACKS) {
    if (key.includes(keyword))
      return mapped
  }
  return 'other'
}

/**
 * Returns the localized string for a normalized job role identifier.
 * Original function: _
 * @param normalizedRole - The normalized job role identifier.
 * @returns The localized job role string.
 */
function getJobRoleLabel(normalizedRole: string): string {
  switch (normalizedRole) {
    case 'designer':
      return getI18nString('job-title.design')
    case 'developer':
      return getI18nString('job-title.software-development')
    case 'product-manager':
      return getI18nString('job-title.product-management')
    case 'marketer':
      return getI18nString('job-title.marketing')
    case 'researcher':
      return getI18nString('job-title.research')
    case 'education':
      return getI18nString('job-title.education')
    case 'ux-writer':
      return getI18nString('job-title.ux-writing')
    case 'data':
      return getI18nString('job-title.data-analytics')
    case 'other':
    case 'unknown':
      return getI18nString('job-title.other')
    default:
      return getI18nString('job-title.other')
  }
}

/**
 * Returns the localized label for a job role string.
 * Original function: $$l3
 * @param role - The input job role string.
 * @returns The localized job role string.
 */
export function getJobRoleDisplay(role: string | undefined): string {
  return getJobRoleLabel(normalizeJobRole(role))
}

/**
 * Returns the localized label for a job role string, with special handling for "student" and "educator".
 * Original function: $$u2
 * @param role - The input job role string.
 * @returns The localized job role string.
 */
export function getJobRoleDisplayWithEducation(role: string | undefined): string {
  if (role === 'student') {
    return getI18nString('job-title.student')
  }
  if (role === 'educator') {
    return getI18nString('job-title.educator')
  }
  return getJobRoleLabel(normalizeJobRole(role))
}

// Exported aliases for backward compatibility
export const HB = normalizeJobRole
export const VA = JOB_ROLE_KEYS
export const ZS = getJobRoleDisplayWithEducation
export const lb = getJobRoleDisplay
