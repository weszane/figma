import { DeepLinkType, UISection } from '../905/15667'
import { isNullOrFailure } from '../905/18797'
import { createActionCreator } from '../905/73481'
import { showModalHandler } from '../905/156213'
import { AUTH_INIT } from '../905/194276'
import { VisualBellActions } from '../905/302958'
import { getI18nString } from '../905/303541'
import { createOptimistAction, createOptimistThunk } from '../905/350402'
import { FlashActions } from '../905/573154'
import { customHistory } from '../905/612521'
import { createOptimistCommitAction, createOptimistRevertAction } from '../905/676456'
import { setupLoadingStateHandler } from '../905/696711'
import { AuthModal } from '../905/749159'
import { AuthFlowStep } from '../905/862321'
import { setUserInOrgs } from '../905/890368'
import { sendWithRetry } from '../905/910117'
import { orgUserService } from '../figma_app/124713'
import { organizationAPIService } from '../figma_app/617654'

// Org User Update Operations

/**
 * Updates the description of an org user with optimistic updates.
 * Original: $$I8
 */
export const updateOrgUserDescriptionAction = createOptimistAction('ORG_USER_PUT', async ({dispatch}, payload, { optimistId }) => {
  if (payload.userInitiated) {
    try {
      const response = await orgUserService.updateOrgUser({
        id: payload.orgUser.id,
        changes: {
          description: payload.orgUser.description,
        },
      })
      dispatch(createOptimistCommitAction(optimistId))
      dispatch(updateOrgUserDescriptionAction({
        orgUser: response.data.meta,
        userInitiated: false,
      }))
    }
    catch (error) {
      dispatch(createOptimistRevertAction(optimistId))
      dispatch(FlashActions.error(error.data?.message || getI18nString('org_user_actions.an_error_occurred')))
    }
  }
})



/**
 * Requests org account type with different success messages based on entry point.
 * Original: $$S0
 */
export const requestOrgAccountTypeAction = createOptimistThunk(async ({dispatch}, payload) => {
  try {
    await orgUserService.requestOrgAccountTypeRequest({
      org_id: payload.orgId,
      entry_point: payload.entryPoint,
      message: payload.message,
      admin_ids: payload.adminIds,
      editor_type: payload.licenseType,
      billable_product_key: payload.seatTypeKey,
      file_key: payload.fileKey,
      folder_id: payload.folderId,
    }).then((response) => {
      if (response.status === 200 && payload.onSuccess) {
        payload.onSuccess(response.data.meta?.id)
      }
    })

    let successMessage: string
    switch (payload.entryPoint) {
      case DeepLinkType.IN_EDITOR_RESTRICTED_DRAFT:
      case DeepLinkType.RESTRICTED_DRAFT_SHARED_EMAIL:
        successMessage = getI18nString('org_user_actions.request_sent_well_let_you_know')
        break
      case DeepLinkType.ASK_TO_EDIT_ONE_CLICK:
        successMessage = getI18nString('1_click_expansion.request_sent_well_let_you')
        break
      case UISection.CreateFileProjectView:
      case DeepLinkType.USER_SETTINGS:
        successMessage = getI18nString('upgrades.request_sent_toast')
        break
      default:
        successMessage = getI18nString('org_user_actions.upgrade_request_sent')
    }

    if (!payload.suppressVisualBell) {
      dispatch(VisualBellActions.enqueue({
        message: successMessage,
        type: 'upgrade-request-sent',
      }))
    }
  }
  catch (error) {
    console.error(error)
    if (error.message.includes('Org access needed')) {
      dispatch(AUTH_INIT({
        origin: 'edit_button_click',
        formState: AuthFlowStep.JOIN_ORG,
        redirectUrl: customHistory.location.pathname,
      }))
      dispatch(showModalHandler({
        type: AuthModal,
        data: {},
      }))
    }
    else {
      dispatch(FlashActions.error(error.data?.message || getI18nString('org_user_actions.an_error_occurred_requesting_account_type')))
    }
    payload.onError?.()
  }
})

/**
 * Leaves the organization as a guest.
 * Original: $$v1
 */
export const leaveOrganizationAction = createOptimistThunk(async ({ dispatch }, payload) => {
  try {
    await sendWithRetry.del(`/api/org_user/${payload.orgId}`)
    dispatch(VisualBellActions.enqueue({
      type: 'org_guest_leave',
      message: getI18nString('org_user_actions.you_successfully_left_organization', {
        orgName: payload.orgName,
      }),
    }))
  }
  catch (error) {
    console.error(error)
    dispatch(FlashActions.error(error.data?.message || getI18nString('org_user_actions.an_error_occurred_leaving_organization', {
      orgName: payload.orgName,
    })))
  }
})

// Org User Batch Operations

/**
 * Batch updates org users with optimistic updates.
 * Original: $$A7
 */
export const batchUpdateOrgUsersAction = createOptimistAction('ORG_USER_BATCH_UPDATE_ORG_USERS', async (context, payload, { optimistId }) => {
  const state = context.getState() as AppState // Note: Assuming dispatch has getState, but typically it's from thunk middleware
  let latestOrgUserUpdate: string | undefined
  let latestLicenseGroupUpdate: string | null = null

  if (payload.lastUpdateTimestampOverride) {
    latestOrgUserUpdate = payload.lastUpdateTimestampOverride
    latestLicenseGroupUpdate = payload.lastUpdateTimestampOverride
  }
  else {
    const relevantUsers = Object.values(state.orgUsersByOrgId[payload.orgId]).filter(user => payload.params.org_user_ids.includes(user.id))
    if (relevantUsers.length === 0)
      return

    latestOrgUserUpdate = new Date(Math.max(...relevantUsers.map(user => +new Date(user.updated_at)))).toISOString()

    if (payload.params.license_group_id !== undefined) {
      const licenseUpdates = relevantUsers.map(user => user.license_group_member?.updated_at).filter(Boolean)
      latestLicenseGroupUpdate = licenseUpdates.length > 0 ? new Date(Math.max(...licenseUpdates.map(date => +new Date(date)))).toISOString() : null
    }
  }

  try {
    const response = await orgUserService.updateOrgUsers({
      orgId: payload.orgId,
      ...payload.params,
      latest_ou_update: latestOrgUserUpdate,
      latest_lg_member_update: latestLicenseGroupUpdate,
      showing_billing_groups: true,
    })
    context.dispatch(createOptimistCommitAction(optimistId))
    context.dispatch(setUserInOrgs({
      orgUsers: response.data.meta,
      orgId: payload.orgId,
    }))
    payload.successCallback?.()
  }
  catch (error) {
    console.error('Batch Update Failed', error)
    payload.errorCallback?.()
    context.dispatch(createOptimistRevertAction(optimistId))
    const errorMessage = (() => {
      const { reason, message } = error.data
      return reason === 'seat_increase_unauthorized' ? getI18nString('modify_plan_user_seat_modal.error.seat_increase_unauthorized') : message ?? getI18nString('org_user_actions.an_error_occurred_updating_org_users')
    })()
    context.dispatch(FlashActions.error(errorMessage))
  }
})

/**
 * Action creator for batch deleting org users.
 * Original: $$x5
 */
export const batchDeleteOrgUsersAction = createActionCreator('ORG_USER_BATCH_DELETE_ORG_USERS')

/**
 * Batch deletes org users.
 * Original: $$N3
 */
export const batchDeleteOrgUsersThunk = createOptimistThunk(async (context, payload) => {
  context.dispatch(batchDeleteOrgUsersAction(payload))
  if (payload.userInitiated) {
    try {
      await sendWithRetry.del(`/api/orgs/${payload.orgId}/org_users`, payload.params)
      const deletedCount = payload.params.org_user_ids.length
      const successMessage = getI18nString('org_user_actions.user_has_been_removed_from_organization', {
        deletedOrgUserCount: deletedCount,
      })
      context.dispatch(FlashActions.flash(successMessage))
    }
    catch (error) {
      context.dispatch(FlashActions.error(error.data?.message || getI18nString('org_user_actions.an_error_occurred')))
    }
  }
})

// Org User Fetch Operations

/**
 * Fetches org admins.
 * Original: $$C4
 */
export const getOrgAdminsAction = createOptimistThunk(async (context, payload, { loadingKey }) => {
  const state = context.getState()
  if (!isNullOrFailure(state.loadingState, loadingKey))
    return

  const request = organizationAPIService.getAdmins({
    includeLicenseAdmins: true,
    orgId: payload.orgId,
  })
  setupLoadingStateHandler(request, context, loadingKey)

  try {
    const response = await request
    context.dispatch(setUserInOrgs({
      orgUsers: response.data.meta,
      orgId: payload.orgId,
    }))
  }
  catch (error) {
    context.dispatch(FlashActions.error(error.message || getI18nString('org_user_actions.an_error_occurred_fetching_org_admins')))
  }
}, payload => `ORG_USER_GET_ADMINS_${payload.orgId}`)

/**
 * Fetches an org user by user ID.
 * Original: $$w2
 */
export const getOrgUserByUserIdAction = createOptimistThunk(async (context, payload, { loadingKey }) => {
  const request = organizationAPIService.getUser({
    orgId: payload.orgId,
    userId: payload.userId,
  })
  setupLoadingStateHandler(request, context, loadingKey)

  try {
    const response = await request
    const users = [response.data.meta]
    context.dispatch(setUserInOrgs({
      orgUsers: users,
      orgId: payload.orgId,
    }))
    return users.find(user => user.user_id === payload.userId) || null
  }
  catch (error) {
    if (error.status === 404 && payload.allowNoOrgUser)
      return null
    context.dispatch(FlashActions.error(error.message || getI18nString('org_user_actions.an_error_occurred_fetching_org_users')))
    return null
  }
}, payload => `ORG_USER_GET_BY_USER_ID_${payload.orgId}_${payload.userId}`)

// Exports with $V names
export const $V = requestOrgAccountTypeAction
export const AW = leaveOrganizationAction
export const I1 = getOrgUserByUserIdAction
export const IJ = batchDeleteOrgUsersThunk
export const Pg = getOrgAdminsAction
export const bu = batchDeleteOrgUsersAction
export const hZ = setUserInOrgs
export const uo = batchUpdateOrgUsersAction
export const yJ = updateOrgUserDescriptionAction
