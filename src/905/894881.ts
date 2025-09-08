import { XHR } from '../905/910117'
import { APIParameterUtils, createNoOpValidator } from '../figma_app/181241'
import { bellFeedAPIInstance } from '../figma_app/876459'

/**
 * Types for notification API parameters.
 */
export interface NotificationActionParams {
  notification_id: string
  currentView: string
  notification_action?: 'resolve' | 'reject'
}

export interface NotificationParams {
  notification_id: string
  currentView: string
}

export interface CommunityServerDrivenParams {
  currentView: string
}

export interface ServerDrivenPlanParams {
  currentView: string
  [key: string]: any
}

export interface NotificationClickedParams {
  id: string
  currentView: string
  medium: string
}

export interface StatusChangeParams {
  fileKey: string
}

export interface StatusChangeOptInParams {
  fileKey: string
  optIn: boolean
}

export interface FirebaseTokenParams {
  firebaseToken: string
}

export interface DesktopTokenParams {
  firebaseToken: string
  version: string
}

/**
 * NotificationAPI provides methods for notification-related API calls.
 */
export class NotificationAPI {
  private UpdatedNotificationSchemaValidator = createNoOpValidator()
  private MarkNotificationAsReadSchemaValidator = createNoOpValidator()
  private AcceptNotificationSchemaValidator = createNoOpValidator()
  private RejectNotificationSchemaValidator = createNoOpValidator()
  private CommunityServerDrivenSchemaValidator = createNoOpValidator()
  private ServerDrivenPlanSchemaValidator = createNoOpValidator()
  private WebTokenRegistrationSchemaValidator = createNoOpValidator()
  private DesktopTokenRegistrationSchemaValidator = createNoOpValidator()

  /**
   * Updates a notification.
   * @param params - NotificationActionParams
   */
  updateNotification = (params: NotificationActionParams) => {
    const actionKey = params.notification_action === 'resolve' ? 'resolvedAt' : 'rejectedAt'
    return this.UpdatedNotificationSchemaValidator.validate(({ xr: t }) =>
      t.put(
        '/api/user_notifications',
        APIParameterUtils.toAPIParameters(
          {
            id: params.notification_id,
            currentView: params.currentView,
            medium: bellFeedAPIInstance ? 'desktop_bell' : 'web',
            appVersion: '1',
            clientType: 'web',
            [actionKey]: 'true',
          },
          ['currentView'],
        ),
      ),
    )
  }

  /**
   * Marks a notification as read.
   * @param params - NotificationParams
   */
  markNotificationAsRead = (params: NotificationParams) => {
    return this.MarkNotificationAsReadSchemaValidator.validate(({ xr: t }) =>
      t.put('/api/user_notifications/read', {
        id: params.notification_id,
        currentView: params.currentView,
        medium: bellFeedAPIInstance ? 'desktop_bell' : 'web',
        appVersion: '1',
        clientType: 'web',
      }),
    )
  }

  /**
   * Accepts a notification.
   * @param params - NotificationParams
   */
  acceptNotification = (params: NotificationParams) => {
    return this.AcceptNotificationSchemaValidator.validate(({ xr: t }) =>
      t.put('/api/user_notifications/accept', {
        id: params.notification_id,
        currentView: params.currentView,
        medium: bellFeedAPIInstance ? 'desktop_bell' : 'web',
        appVersion: '1',
        clientType: 'web',
      }),
    )
  }

  /**
   * Rejects a notification.
   * @param params - NotificationParams
   */
  rejectNotification = (params: NotificationParams) => {
    return this.RejectNotificationSchemaValidator.validate(({ xr: t }) =>
      t.put('/api/user_notifications/reject', {
        id: params.notification_id,
        currentView: params.currentView,
        medium: bellFeedAPIInstance ? 'desktop_bell' : 'web',
        appVersion: '1',
        clientType: 'web',
      }),
    )
  }

  /**
   * Gets community server-driven notifications.
   * @param params - CommunityServerDrivenParams
   */
  getCommunityServerDriven = async (params: CommunityServerDrivenParams) => {
    return this.CommunityServerDrivenSchemaValidator.validate(async ({ xr: t }) =>
      await t.get(
        '/api/user_notifications/community/server_driven',
        APIParameterUtils.toAPIParameters(
          {
            currentView: params.currentView,
            clientType: 'web',
            appVersion: '1',
          },
          ['currentView'],
        ),
      ),
    )
  }

  /**
   * Gets server-driven plan notifications.
   * @param params - ServerDrivenPlanParams
   */
  getServerDrivenPlan = async (params: ServerDrivenPlanParams) => {
    return this.ServerDrivenPlanSchemaValidator.validate(async ({ xr: t }) =>
      await t.get(
        '/api/user_notifications/server_driven/plan',
        APIParameterUtils.toAPIParameters(
          {
            ...params,
            appVersion: '1',
            clientType: 'web',
          },
          ['currentView'],
        ),
      ),
    )
  }

  /**
   * Records a notification click.
   * @param params - NotificationClickedParams
   */
  recordNotificationClicked = (params: NotificationClickedParams) => {
    return XHR.post('/api/user_notification/clicked', {
      id: params.id,
      currentView: params.currentView,
      medium: params.medium,
    })
  }

  /**
   * Enrolls a user in status change notifications.
   * @param params - StatusChangeParams
   */
  enrollUserInStatusChange = (params: StatusChangeParams) => {
    return XHR.post(`/api/user_notifications/status_change_signup/${params.fileKey}`)
  }

  /**
   * Updates status change preferences.
   * @param params - StatusChangeOptInParams
   */
  updateStatusChangePreferences = (params: StatusChangeOptInParams) => {
    return XHR.post(`/api/user_notifications/status_change_optin/${params.fileKey}`, {
      opt_in: params.optIn,
    })
  }

  /**
   * Sends a Firebase token for web.
   * @param params - FirebaseTokenParams
   */
  sendFirebaseToken = (params: FirebaseTokenParams) => {
    return this.WebTokenRegistrationSchemaValidator.validate(({ xr: t }) =>
      t.post(
        '/api/web_token_registration',
        APIParameterUtils.toAPIParameters(
          {
            firebaseToken: params.firebaseToken,
          },
          [],
        ),
      ),
    )
  }

  /**
   * Sends a Firebase token for desktop.
   * @param params - DesktopTokenParams
   */
  sendDesktopToken = (params: DesktopTokenParams) => {
    return this.DesktopTokenRegistrationSchemaValidator.validate(({ xr: t }) =>
      t.post(
        '/api/desktop_token_registration',
        APIParameterUtils.toAPIParameters(
          {
            firebaseToken: params.firebaseToken,
            version: params.version,
          },
          [],
        ),
      ),
    )
  }
}

// Export with original variable names for traceability
export const notificationAPI = new NotificationAPI()
export const sr = notificationAPI
