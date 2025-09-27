import { createActionCreator } from '../905/73481'
import { hideModal } from '../905/156213'
import { getI18nString } from '../905/303541'
import { createOptimistThunk } from '../905/350402'
import { FlashActions } from '../905/573154'
import { sendWithRetry } from '../905/910117'
import { dayjs } from '../905/920142'
import { selectViewAction } from '../905/929976'
import { FOrganizationLevelType } from '../figma_app/191312'
import { selectedViewToPath } from '../figma_app/193867'
import { setTeamOptimistThunk } from '../figma_app/240735'
import { handleErrorWithToast } from '../figma_app/345997'
import { clearFigmaPcCookie } from '../figma_app/598111'
import { fetchAndUpdateUpcomingInvoices } from '../figma_app/658324'
import { CreateUpgradeAction, TeamType } from '../figma_app/707808'
import { mapUpsellModalTypeToSource, SubscriptionType, UpgradeSteps } from '../figma_app/831101'
import { hasDesktopAPI } from '../figma_app/876459'
import { Be } from '../figma_app/920435'
import { openUrlInContext, switchAccountAndNavigate } from '../figma_app/976345'

// Action creators for payment-related state management
const restoreSavedCartAction = createActionCreator('PAYMENT_RESTORE_SAVED_CART')
const setCurrencyAction = createActionCreator('PAYMENT_SET_CURRENCY')
const setTokenAction = createActionCreator('PAYMENT_SET_TOKEN')
const setTaxesAction = createActionCreator('PAYMENT_SET_TAXES')
const setPromoAction = createActionCreator('PAYMENT_SET_PROMO')
const setVatGstIdAction = createActionCreator('PAYMENT_SET_VAT_GST_ID')
const setRegionalVatGstIdAction = createActionCreator('PAYMENT_SET_REGIONAL_VAT_GST_ID')
const makeStudentTeamAction = createActionCreator('PAYMENT_MAKE_STUDENT_TEAM')
const showErrorAction = createActionCreator('PAYMENT_SHOW_ERROR')
const setCompanyDetailsAction = createActionCreator('PAYMENT_SET_COMPANY_DETAILS')
const setSubmitPendingAction = createActionCreator('PAYMENT_SET_SUBMIT_PENDING')
const setEditorStatusChangesAction = createActionCreator('PAYMENT_SET_EDITOR_STATUS_CHANGES')
const setNumFigmaEmailTeamUsersAction = createActionCreator('PAYMENT_SET_NUM_FIGMA_EMAIL_TEAM_USERS')
export const setNumWhiteboardEditorsAction = createActionCreator('PAYMENT_SET_NUM_WHITEBOARD_EDITORS')
export const setNumEditorsAction = createActionCreator('PAYMENT_SET_NUM_EDITORS')
export const setBillingPeriodAction = createActionCreator('PAYMENT_SET_BILLING_PERIOD')
export const setCampfireSeatsAction = createActionCreator('PAYMENT_SET_CAMPFIRE_SEATS')
export const initPaymentAction = createActionCreator('PAYMENT_INIT')
export const startOrgUpgradeFlowAction = createActionCreator('PAYMENT_START_ORG_UPGRADE_FLOW')
export const startProUpgradeFlowAction = createActionCreator('PAYMENT_START_PRO_UPGRADE_FLOW')

// Thunks for handling complex payment flows and API interactions

/**
 * Thunk to start the student review process by selecting the eduReview view and setting billing period to student.
 * @param dispatch - Redux dispatch function
 * @param payload - Contains teamId, showBreadcrumbs, and onCloseOrComplete callback
 */
export const startStudentReviewThunk = createOptimistThunk(({dispatch}, { teamId, showBreadcrumbs, onCloseOrComplete }) => {
  dispatch(selectViewAction({
    view: 'eduReview',
    teamId,
    showBreadcrumbs,
    onCloseOrComplete,
  }))
  dispatch(setBillingPeriodAction({
    billingPeriod: SubscriptionType.STUDENT,
  }))
})

/**
 * Thunk to set promo code and clear cookie if no promo.
 * @param dispatch - Redux dispatch function
 * @param payload - Contains promo information
 */
export const setPromoThunk = createOptimistThunk(({dispatch}, payload) => {
  if (!payload.promo) {
    clearFigmaPcCookie()
  }
  dispatch(setPromoAction(payload))
})

/**
 * Thunk to make a team a student team via API and handle navigation/success.
 * @param dispatch - Redux dispatch function
 * @param payload - Contains teamId and onCloseOrComplete callback
 */
export const makeStudentTeamThunk = createOptimistThunk(({dispatch, getState}, payload) => {
  const state = getState()
  const userId = state.user?.id

  sendWithRetry.put(`/api/teams/${payload.teamId}/student_team`, {
    student_team: true,
  }).then(() => {
    if (userId) {
      dispatch(switchAccountAndNavigate({
        workspace: {
          userId,
          teamId: payload.teamId,
          orgId: null,
        },
        view: {
          view: 'allProjects',
        },
      }))
    } else {
      dispatch(selectViewAction({
        view: 'team',
        teamId: payload.teamId,
      }))
    }
    dispatch(FlashActions.flash(getI18nString('flash.successfully_upgraded_to_an_education_team')))
    dispatch(setSubmitPendingAction({
      submitPending: false,
    }))
    payload.onCloseOrComplete?.()
  }).catch((error) => {
    handleErrorWithToast(error, dispatch)
    dispatch(setSubmitPendingAction({
      submitPending: false,
    }))
  })
  dispatch(makeStudentTeamAction())
})

/**
 * Thunk to cancel or downgrade a team subscription.
 * @param dispatch - Redux dispatch function
 * @param payload - Contains teamId
 */
export const cancelOrDowngradeTeamThunk = createOptimistThunk(({ dispatch, getState }, { teamId }) => {
  const team = getState().teams[teamId]

  if (team.student_team) {
    sendWithRetry.put(`/api/teams/${teamId}/student_team`, {
      student_team: false,
    }).then(() => {
      dispatch(Be({
        teamId,
      }))
      dispatch(FlashActions.flash(getI18nString('flash.successfully_downgraded_to_a_starter_team')))
    }).catch(error => handleErrorWithToast(error, dispatch))
  } else {
    sendWithRetry.del(`/api/subscriptions-2018-11-08/team/${teamId}`).then(({ data }) => {
      const updatedTeam = data.meta && data.meta.team
      if (updatedTeam) {
        dispatch(setTeamOptimistThunk({
          team: updatedTeam,
          userInitiated: false,
        }))
      }
      dispatch(Be({
        teamId,
      }))
      fetchAndUpdateUpcomingInvoices({
        planType: FOrganizationLevelType.TEAM,
        planId: teamId,
      })
      const { annual_subscription, monthly_subscription } = getState().teamBilling.summary
      const annualEnd = annual_subscription?.quantity ? annual_subscription.current_period_end : null
      const monthlyEnd = monthly_subscription?.quantity ? monthly_subscription.current_period_end : null
      const cancelDate = annualEnd && monthlyEnd ? (dayjs(annualEnd).isAfter(dayjs(monthlyEnd)) ? annualEnd : monthlyEnd) : (annualEnd || monthlyEnd)
      dispatch(FlashActions.flash(cancelDate
        ? getI18nString('flash.team_will_become_free_starter_team_on_date', {
            teamName: team.name,
            cancelDate: dayjs(cancelDate).toDate(),
          })
        : getI18nString('flash.team_will_be_downgraded_at_the_end_of_the_current_subscription_period', {
            teamName: team.name,
          }), 8000))
    }).catch(error => handleErrorWithToast(error, dispatch))
  }
})

/**
 * Thunk to start the organization upgrade flow, handling navigation and modal hiding.
 * @param dispatch - Redux dispatch function
 * @param payload - Contains openInNewTab, newTeamProps, entryPoint, upsellSource, currency
 */
export const startOrgUpgradeFlowThunk = createOptimistThunk(({ dispatch, getState }, payload) => {
  const { openInNewTab, newTeamProps, entryPoint, upsellSource, currency } = payload
  const mappedEntryPoint = mapUpsellModalTypeToSource({
    upsellSource,
    fallbackEntryPoint: entryPoint,
  })

  if (openInNewTab && !hasDesktopAPI()) {
    const state = getState()
    const url = new URL(selectedViewToPath(state, {
      view: 'orgSelfServe',
      upsellSource,
      entryPoint: mappedEntryPoint,
    }), document.baseURI).href
    dispatch(openUrlInContext({
      url,
    }))
  } else {
    dispatch(hideModal())
    dispatch(selectViewAction({
      view: 'orgSelfServe',
      newTeamProps,
      upsellSource,
      entryPoint: mappedEntryPoint,
    }))
  }
  dispatch(startOrgUpgradeFlowAction({
    currency,
  }))
})

/**
 * Thunk to start the pro upgrade flow for a team, handling navigation and view selection.
 * @param dispatch - Redux dispatch function
 * @param payload - Contains teamId, billingPeriod, entryPoint, onBillingCompleteRedirectInfo, upsellSource, openInNewTab, selectedView, newTeam, currency
 */
export const startProUpgradeFlowThunk = createOptimistThunk(({dispatch, getState}, payload) => {
  const { teamId, billingPeriod, entryPoint, onBillingCompleteRedirectInfo, upsellSource, openInNewTab, selectedView, newTeam, currency } = payload
  const mappedEntryPoint = mapUpsellModalTypeToSource({
    upsellSource,
    fallbackEntryPoint: entryPoint,
  })
  const viewData = {
    view: 'teamUpgrade',
    teamFlowType: CreateUpgradeAction.UPGRADE_EXISTING_TEAM,
    teamId,
    paymentStep: UpgradeSteps.CHOOSE_PLAN,
    billingPeriod,
    planType: TeamType.TEAM,
    entryPoint: mappedEntryPoint,
    ...(onBillingCompleteRedirectInfo ? {
      searchParams: {
        onCompleteRedirectFileKey: onBillingCompleteRedirectInfo.fileKey,
        onCompleteRedirectNodeId: onBillingCompleteRedirectInfo.nodeId,
      },
    } : {}),
    previousView: undefined
  }

  if (openInNewTab && !hasDesktopAPI()) {
    const state = getState()
    const url = new URL(selectedViewToPath(state, viewData), document.baseURI).href
    dispatch(openUrlInContext({
      url,
    }))
  } else {
    const previousView = openInNewTab ? undefined : selectedView
    dispatch(hideModal())
    viewData.previousView = previousView
    dispatch(selectViewAction(viewData))
  }
  dispatch(startProUpgradeFlowAction({
    newTeam,
    currency,
  }))
})

// Exports with original names maintained
export const $h = setVatGstIdAction
export const Ay = setPromoThunk
export const Az = setNumWhiteboardEditorsAction
export const Bq = startOrgUpgradeFlowThunk
export const Ef = setRegionalVatGstIdAction
export const I2 = setSubmitPendingAction
export const Je = setEditorStatusChangesAction
export const Lo = setBillingPeriodAction
export const M2 = setNumFigmaEmailTeamUsersAction
export const MN = setCurrencyAction
export const Mv = startOrgUpgradeFlowAction
export const Nj = makeStudentTeamThunk
export const Qe = makeStudentTeamAction
export const Qg = showErrorAction
export const Ts = initPaymentAction
export const Vm = startStudentReviewThunk
export const WG = setTokenAction
export const WX = startProUpgradeFlowThunk
export const Wc = cancelOrDowngradeTeamThunk
export const XS = setPromoAction
export const eK = restoreSavedCartAction
export const i = setTaxesAction
export const js = setNumEditorsAction
export const pv = startProUpgradeFlowAction
export const qU = setCampfireSeatsAction
export const yy = setCompanyDetailsAction
