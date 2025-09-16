import { r as _$$r } from '../905/324611'
import { createNoOpValidator } from '../figma_app/181241'

/**
 * SessionApi provides methods for session-related API calls.
 * Original class name: $$a0
 */
export class SessionApi {
  public stateSchemaValidator = createNoOpValidator()
  public ssoConfigSchemaValidator = createNoOpValidator()
  public logoutAllUsersValidator = createNoOpValidator()
  public logoutOneUserValidator = createNoOpValidator()
  public getSessionsValidator = createNoOpValidator()
  public deleteSessionsValidator = createNoOpValidator()
  public sendValidationEmailValidator = createNoOpValidator()

  /**
   * Retrieves session state.
   * @param retryCount Optional retry count for the request.
   */
  getState(retryCount?: number) {
    _$$r()
    const params = retryCount && retryCount > 0 ? { retryCount } : {}
    return this.stateSchemaValidator.validate(async ({ xr }) =>
      await xr.get('/api/session/state', undefined, params),
    )
  }

  /**
   * Retrieves SSO configuration.
   * @param params Optional parameters for the request.
   */
  getSsoConfig(params?: any) {
    return this.ssoConfigSchemaValidator.validate(async ({ xr }) =>
      await xr.get('/api/session/sso_config', params),
    )
  }

  /**
   * Logs out all users.
   */
  logoutAllUsers() {
    return this.logoutAllUsersValidator.validate(async ({ xr }) =>
      await xr.post('/api/session/logout'),
    )
  }

  /**
   * Logs out a single user by ID.
   * @param userId The ID of the user to log out.
   */
  logoutOneUser(userId: string) {
    return this.logoutOneUserValidator.validate(async ({ xr }) =>
      await xr.post(`/api/session/logout/${userId}`),
    )
  }

  /**
   * Retrieves all sessions.
   */
  getSessions() {
    return this.getSessionsValidator.validate(async ({ xr }) =>
      await xr.get('/api/session/sessions'),
    )
  }

  /**
   * Deletes a session by ID.
   * @param sessionId The ID of the session to delete.
   */
  deleteSession(sessionId: string) {
    return this.deleteSessionsValidator.validate(async ({ xr }) =>
      await xr.del(`/api/session/sessions/${sessionId}`),
    )
  }

  /**
   * Sends a validation email.
   */
  sendValidationEmail() {
    return this.sendValidationEmailValidator.validate(async ({ xr }) =>
      await xr.post('/api/validation/email/send'),
    )
  }
}

// Export with original variable name for compatibility
export const sessionApiInstance = new SessionApi()
export const H = sessionApiInstance
