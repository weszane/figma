import { createActionCreator } from '../905/73481'
import { popModalStack } from '../905/156213'
import { VisualBellActions } from '../905/302958'
import { getI18nString } from '../905/303541'
import { createOptimistThunk } from '../905/350402'
import { FlashActions } from '../905/573154'
import { sendWithRetry } from '../905/910117'

// Original: $$c1
/**
 * Thunk for creating organization invites.
 * Handles sending invites, dispatching actions, and showing notifications.
 */
export const createOrgInvitesThunk = createOptimistThunk(({ dispatch, getState }, payload) => {
  const { emails, isResentInvite, licenseGroupId, workspaceId, billableProductKey } = payload
  const state = getState()
  dispatch(setIsCreatingOrgInvites({ creating: true })) // Original: $$p3

  sendWithRetry.post('/api/org_invites', {
    org_id: state.currentUserOrgId,
    emails,
    billable_product_key: billableProductKey,
    license_group_id: licenseGroupId,
    workspace_id: workspaceId,
  }).then(({ data }) => {
    const meta = data.meta
    dispatch(setOrgInvites(meta)) // Original: $$h2
    dispatch(setIsCreatingOrgInvites({ creating: false }))
    dispatch(popModalStack())
    const message = getInviteMessage(emails, meta, isResentInvite)
    dispatch(VisualBellActions.enqueue({ message }))
  }).catch((error) => {
    const message = error.data?.message || getI18nString('org_invite.org_invite_creation_error')
    dispatch(setIsCreatingOrgInvites({ creating: false }))
    dispatch(VisualBellActions.enqueue({ message, error: true }))
  })
})

// Original: $$u0
/**
 * Thunk for deleting an organization invite.
 * Handles deletion and shows success or error flash messages.
 */
export const deleteOrgInviteThunk = createOptimistThunk(({ dispatch, getState }, payload) => {
  const { idpUser } = payload
  const state = getState()
  sendWithRetry.del(`/api/org_invites/${idpUser.id}`, {
    org_id: state.currentUserOrgId,
  }).then(() => {
    dispatch(deleteOrgInviteAction({ org_invite_id: idpUser.id })) // Original: $$_4
    dispatch(FlashActions.flash(getI18nString('org_invite.org_invite_deletion_success', {
      email: idpUser.email,
    })))
  }).catch((error) => {
    const message = error.data?.message || getI18nString('org_invite.org_invite_deletion_error')
    dispatch(FlashActions.flash(message))
  })
})

// Original: $$p3
/**
 * Action creator for setting the creating state of org invites.
 */
export const setIsCreatingOrgInvites = createActionCreator('IS_CREATING_ORG_INVITES')

// Original: $$_4
/**
 * Action creator for deleting an org invite.
 */
export const deleteOrgInviteAction = createActionCreator('DELETE_ORG_INVITE')

// Original: $$h2
/**
 * Action creator for setting org invites.
 */
export const setOrgInvites = createActionCreator('SET_ORG_INVITES')

/**
 * Helper function to determine the invite message based on emails and meta data.
 * Original logic from $$c1 thunk.
 */
function getInviteMessage(emails: string[], meta: any[], isResentInvite: boolean): string {
  if (isResentInvite) {
    return getI18nString('org_invite.invite_resent')
  }
  const numInvites = meta.length
  const numExisting = emails.length - numInvites
  if (numInvites > 0) {
    if (numExisting === 0) {
      return getI18nString('org_invite.new_members_message', { numInvites })
    }
    else if (numExisting === 1) {
      return getI18nString('org_invite.new_members_and_one_existing_member_message', { numInvites })
    }
    else {
      return getI18nString('org_invite.new_members_and_multiple_existing_members_message', {
        numInvites,
        numExisting,
      })
    }
  }
  else {
    return getI18nString('org_invite.existing_members_message', { numExisting })
  }
}

export const MB = createOrgInvitesThunk
export const Fb = deleteOrgInviteThunk
export const hZ = setOrgInvites
export const wc = setIsCreatingOrgInvites

export const yH = deleteOrgInviteAction
