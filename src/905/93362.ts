import { r as _$$r } from '../905/324611'
import { APIParameterUtils, createNoOpValidator, defaultValidator } from '../figma_app/181241'

/**
 * UserAPIHandlers - Handles user-related API calls and schema validation.
 */
export interface UserAPIHandlersType {
  getUnverified: () => Promise<any>
  getBackupCodes: (e: { passwordVerifyToken: string }) => Promise<any>
  getState: (e: Record<string, any>, t?: number) => Promise<any>
  getUserTeams: (e: { userId: string }) => Promise<any>
  getTeams: (e: { userId: string, [key: string]: any }) => Promise<any>
  getUser: (e: { userId: string }) => Promise<any>
  putUser: (e: { user: any }) => Promise<any>
  setOnboardingSignal: (e: any) => Promise<any>
  setFileViewHistoryPreference: (e: any) => Promise<any>
  getEmailFeatures: () => Promise<any>
  getAuthedUser: () => Promise<any>
  getScimProvisionedStatus: (e: { userId: string }) => Promise<any>
  createDevToken: (e: any) => Promise<any>
  getPlans: () => Promise<any>
  getChatbotMeta: () => Promise<any>
  getPlansForAuthedUsers: () => Promise<{ plansByUserId: any, teams: any, orgs: any }>
  migrateAllPersonalDrafts: (e: string) => Promise<any>
  deleteAllPersonalDrafts: () => Promise<any>
}

/**
 * Provides user-related API methods with schema validation.
 */
export const UserAPIHandlers: UserAPIHandlersType = {
  // getUnverified
  getUnverified() {
    return createNoOpValidator().validate(async ({ xr }) => await xr.get('/api/user/unverified'))
  },

  // getBackupCodes
  getBackupCodes({ passwordVerifyToken }) {
    return createNoOpValidator().validate(async ({ xr }) =>
      await xr.get('/api/user/backup_codes', { password_verify_token: passwordVerifyToken }),
    )
  },

  // getState
  getState(e, t) {
    let options = {}
    if (t && t > 0) {
      options = { retryCount: t }
    }
    _$$r()
    return createNoOpValidator().validate(async ({ xr }) =>
      await xr.get(
        '/api/user/state',
        APIParameterUtils.toAPIParameters({ redact: 'org_billing_data', ...e }),
        options,
      ),
    )
  },

  // getUserTeams
  getUserTeams({ userId }) {
    return createNoOpValidator().validate(async ({ xr }) =>
      await xr.get(`/api/user/${userId}/teams`),
    )
  },

  // getTeams
  getTeams(e) {
    const { userId, ...params } = e
    return createNoOpValidator().validate(async ({ xr }) =>
      await xr.get(`/api/user/${userId}/teams`, APIParameterUtils.toAPIParameters(params)),
    )
  },

  // getUser
  getUser({ userId }) {
    return createNoOpValidator().validate(async ({ xr }) =>
      await xr.get(`/api/user/${userId}`),
    )
  },

  // putUser
  putUser({ user }) {
    return createNoOpValidator().validate(async ({ xr }) =>
      await xr.put('/api/user', user),
    )
  },

  // setOnboardingSignal
  setOnboardingSignal(e) {
    return defaultValidator.validate(async ({ xr }) =>
      await xr.put('/api/user', e),
    )
  },

  // setFileViewHistoryPreference
  setFileViewHistoryPreference(e) {
    return defaultValidator.validate(async ({ xr }) =>
      await xr.put('/api/user', e),
    )
  },

  // getEmailFeatures
  getEmailFeatures() {
    return createNoOpValidator().validate(async ({ xr }) =>
      await xr.get('/api/user/email_features'),
    )
  },

  // getAuthedUser
  getAuthedUser() {
    _$$r()
    return createNoOpValidator().validate(async ({ xr }) =>
      await xr.get('/api/user'),
    )
  },

  // getScimProvisionedStatus
  getScimProvisionedStatus({ userId }) {
    return createNoOpValidator().validate(async ({ xr }) =>
      await xr.get(`/api/user/${userId}/scim_provisioned_status`),
    )
  },

  // createDevToken
  createDevToken(e) {
    return createNoOpValidator().validate(({ xr }) =>
      xr.post('/api/user/dev_tokens', e),
    )
  },

  // getPlans
  getPlans() {
    return createNoOpValidator().validate(({ xr }) =>
      xr.get('/api/user/plans'),
    )
  },

  // getChatbotMeta
  getChatbotMeta() {
    return createNoOpValidator().validate(({ xr }) =>
      xr.get('/api/user/help-center'),
    )
  },

  // getPlansForAuthedUsers
  async getPlansForAuthedUsers() {
    try {
      const {
        data: {
          meta: { plans_by_user_id, orgs, teams },
        },
      } = await createNoOpValidator().validate<{ meta: { plans_by_user_id: any, orgs: any, teams: any } }>(({ xr }) =>
        xr.get('/api/authed_users/plans'),
      )
      return { plansByUserId: plans_by_user_id, teams, orgs }
    }
    catch (e) {
      return Promise.reject(e)
    }
  },

  // migrateAllPersonalDrafts
  migrateAllPersonalDrafts(e) {
    return defaultValidator.validate(({ xr }) =>
      xr.post(`/api/user/migrate_personal_drafts/${e}`),
    )
  },

  // deleteAllPersonalDrafts
  deleteAllPersonalDrafts() {
    return defaultValidator.validate(({ xr }) =>
      xr.post('/api/user/delete_all_personal_drafts'),
    )
  },
}

// Export with original variable name for compatibility (k)
export const k = UserAPIHandlers
