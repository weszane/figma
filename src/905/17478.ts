import { defaultValidator } from '../figma_app/181241'

/**
 * UserFlagService - Handles user flag operations.
 */
export class UserFlagService {
  /**
   * Upserts a user flag with a count.
   * @param flagName - The name of the flag.
   * @param count - The count to set for the flag.
   * @returns Promise from the validator.
   * (Original: upsertUserFlagWithCount)
   */
  upsertUserFlagWithCount(flagName: string, count: number) {
    return defaultValidator.validate(({ xr }) =>
      xr.put(`/api/user/flag/${flagName}`, { count })
    );
  }

  /**
   * Resets a user flag.
   * @param flagName - The name of the flag to reset.
   * @returns Promise from the validator.
   * (Original: resetUserFlag)
   */
  resetUserFlag(flagName: string) {
    return defaultValidator.validate(({ xr }) =>
      xr.post('/api/user/flags', {
        flags: { [flagName]: false },
      })
    );
  }

  /**
   * Sets a user flag.
   * @param flagName - The name of the flag.
   * @param value - The value to set for the flag.
   * @returns Promise from the validator.
   * (Original: setUserFlag)
   */
  setUserFlag(flagName: string, value: boolean) {
    return defaultValidator.validate(({ xr }) =>
      xr.post('/api/user/flags', {
        flags: { [flagName]: value },
      })
    );
  }
}

// Export instance with refactored name
export const userFlagService = new UserFlagService();
export const H = userFlagService;
