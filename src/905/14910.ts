import { dayjs } from '../905/920142'
import { getInitialDynamicConfig } from '../figma_app/594947'

/**
 * Checks if the user is allowed to see NUX (New User Experience).
 * Returns true if the job title exists or if the email validation date is within allowed days.
 * Original function name: $$a0
 *
 * @param params - Object containing emailValidatedAt and jobTitle
 * @returns boolean
 */
export function isAllowedToSeeNux({
  emailValidatedAt,
  jobTitle,
}: {
  emailValidatedAt?: string
  jobTitle?: string
}): boolean {
  // Early return if jobTitle exists
  if (jobTitle)
    return true

  // Helper to check if emailValidatedAt is within allowed days
  const isWithinAllowedDays = (validatedAt?: string): boolean => {
    if (!validatedAt)
      return false
    const allowedDays = getInitialDynamicConfig('days_allowed_to_see_nux').get('days', 2)
    return dayjs(validatedAt).add(allowedDays, 'day').isBefore(dayjs())
  }

  return isWithinAllowedDays(emailValidatedAt)
}

// Refactored export for compatibility with original code
export const d = isAllowedToSeeNux
