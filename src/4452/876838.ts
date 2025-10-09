import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { accountTypeRequestHandler } from '../905/281010'
import { VisualBellActions } from '../905/302958'
import { getI18nString } from '../905/303541'
import { subscribeAndAwaitData } from '../905/553831'
import { getFeatureFlags } from '../905/601108'
import { getQueryParam, removeQueryParam } from '../905/609392'
import { getResourceDataOrFallback } from '../905/663269'
import { findMatchingValue } from '../905/807535'
import { AccountTypeRequestByIdView } from '../figma_app/43951'
import { InvitedByType, TeamOrg } from '../figma_app/845611'
// Enum for deeplink types
const DeeplinkType = {
  AdminUpgradeEmail: 'admin_upgrade_email',
  UnknownDeeplink: 'unknown_deeplink',
} as const

// Object for query parameter keys
const QueryParamKeys = {
  approvalRequestId: 'approvalRequestId',
  entryPoint: 'entryPoint',
} as const

/**
 * Fetches and validates a pending account type request by ID.
 * @param requestId - The ID of the account type request.
 * @param dispatch - The Redux dispatch function.
 * @returns The pending account type request if valid, otherwise undefined.
 */
export async function fetchPendingAccountTypeRequest(
  requestId: string,
  dispatch: ReturnType<typeof useDispatch>,
): Promise<any | undefined> {
  try {
    const data = await subscribeAndAwaitData(AccountTypeRequestByIdView, {
      requestId,
    })
    const request = getResourceDataOrFallback(data.accountTypeRequest)
    if (!request) {
      showError(dispatch, getI18nString('admin_dashboard.requests.not_found'))
      return
    }
    if (request.status !== 'pending') {
      dispatch(VisualBellActions.enqueue({
        message: getI18nString('admin_dashboard.requests.this_request_has_already_been_handled'),
        type: request?.status === 'approved' ? 'requests-approved' : 'requests-denied',
      }))
      return
    }
    return request
  }
  catch  {
    showError(dispatch)
  }
}

/**
 * Custom hook for handling one-click approval of account type requests via query parameters.
 */
export function useOneClickApproval() {
  const dispatch = useDispatch<AppDispatch>()
  const [isCompleted, setIsCompleted] = useState(false)
  const [pendingRequest, setPendingRequest] = useState<any>()
  const isOneClickApproveEnabled = getFeatureFlags().one_click_approve_on_recents

  useEffect(() => {
    async function handleApprovalRequest(requestId: string) {
      const request = await fetchPendingAccountTypeRequest(requestId, dispatch)
      if (request) {
        setPendingRequest(request)
      }
      else {
        setIsCompleted(true)
      }
    }

    if (!isOneClickApproveEnabled)
      return

    const requestId = getQueryParam(QueryParamKeys.approvalRequestId)
    if (requestId) {
      removeQueryParam(QueryParamKeys.approvalRequestId)
      handleApprovalRequest(requestId)
    }
  }, [dispatch, isOneClickApproveEnabled])

  useEffect(() => {
    async function approveRequest(request: any) {
      const entryPointParam = getQueryParam(QueryParamKeys.entryPoint)
      const entryPoint = findMatchingValue(DeeplinkType, entryPointParam || '') ?? DeeplinkType.UnknownDeeplink
      const planType = findMatchingValue(TeamOrg, request.planType) || TeamOrg.TEAM

      try {
        const response = await accountTypeRequestHandler.approveRequests({
          plan_id: request.planId,
          plan_type: planType,
          selection_method: InvitedByType.DEEPLINK,
          included_request_ids: [request.id],
          entry_point: entryPoint,
        })
        if (response.status === 200) {
          const requesterName = request.requestableOrgUser?.user?.name ?? request.requestableTeamUser?.user?.name ?? ''
          showApprovalSuccess(dispatch, requesterName)
        }
        else {
          showError(dispatch)
        }
      }
      catch  {
        showError(dispatch)
      }
      finally {
        setIsCompleted(true)
        removeQueryParam(QueryParamKeys.entryPoint)
      }
    }

    if (isOneClickApproveEnabled && pendingRequest && !isCompleted) {
      approveRequest(pendingRequest)
    }
  }, [pendingRequest, dispatch, isCompleted, isOneClickApproveEnabled])
}

/**
 * Shows an error message via VisualBell.
 * @param dispatch - The Redux dispatch function.
 * @param message - Optional custom error message.
 */
function showError(dispatch: ReturnType<typeof useDispatch>, message?: string) {
  dispatch(VisualBellActions.enqueue({
    message: message || getI18nString('admin_dashboard.requests.error_generic'),
    error: true,
  }))
}

/**
 * Shows a success message for approval via VisualBell.
 * @param dispatch - The Redux dispatch function.
 * @param requesterName - The name of the requester.
 */
function showApprovalSuccess(dispatch: ReturnType<typeof useDispatch>, requesterName: string) {
  const message = requesterName
    ? getI18nString('admin_dashboard.requests.success_approve_with_name', {
        requesterName,
      })
    : getI18nString('admin_dashboard.requests.success_approve_multiple', {
        numRequests: 1,
      })
  dispatch(VisualBellActions.enqueue({
    message,
    type: 'requests-approved',
  }))
}

// Refactored exports with proper names
export const q = fetchPendingAccountTypeRequest
export const V = useOneClickApproval
