import type { FResourceCategoryType } from '../figma_app/191312';
import { useDispatch } from 'react-redux';
import { jsx, jsxs } from 'react/jsx-runtime';
import { roleDeleteAction, rolePostAction } from '../905/98702';
import { registerModal } from '../905/102752';
import { v as _$$v } from '../905/124421';
import { popModalStack, showModalHandler } from '../905/156213';
import { UpsellModalType } from '../905/165519';
import { UPSELL_ADD_EDITOR_MODAL } from '../905/249410';
import { VisualBellActions } from '../905/302958';
import { getI18nString, renderI18nText } from '../905/303541';
import { createOptimistThunk } from '../905/350402';
import { trackEventAnalytics } from '../905/449184';
import { AccessLevelEnum } from '../905/557142';
import { FlashActions, handlePromiseError } from '../905/573154';
import { cL } from '../905/748726';
import { getCurrentLiveGraphClient } from '../905/761735';
import { sendWithRetry } from '../905/910117';
import { t as _$$t2 } from '../figma_app/32680';
import { ConfigGroups, isReduxDeprecationCutover } from '../figma_app/121751';
import { ListFormatter } from '../figma_app/257703';
import { trackFileEvent, trackRoleEvent } from '../figma_app/314264';
import { checkDomainExists } from '../figma_app/336853';
import { arrayToIdMap, mapResourceCategoryToRole } from '../figma_app/349248';
import { adminPermissionConfig, setupShadowRead } from '../figma_app/391338';
import { jE } from '../figma_app/639088';
import { getResourceTeamId, getRolesForResource, hasAdminRoleAccessOnTeam, hasEditorRoleAccessOnTeam } from '../figma_app/642025';
import { TrackingProvider } from '../figma_app/831799';
import { ConfirmationModal2 } from '../figma_app/918700';
let orgGuestsBannedModal = registerModal(e => {
  let t = useDispatch();
  return jsx(TrackingProvider, {
    name: 'Sharing with external users is disabled modal',
    properties: {
      emails: e.emails.toString(),
      resourceIdOrKey: e.resourceIdOrKey,
      resourceType: e.resourceType
    },
    children: jsx(ConfirmationModal2, {
      confirmationTitle: getI18nString('permissions.guests_banned.sharing_with_external_users_is_disabled'),
      confirmText: getI18nString('permissions.guests_banned.got_it'),
      onConfirm: () => t(popModalStack()),
      hideOnConfirm: !1,
      disableClickOutsideToHide: !0,
      popStack: e.popStack,
      size: 'small',
      hideCancel: !0,
      children: jsx('div', {
        className: jE,
        children: renderI18nText('permissions.guests_banned.invite_wasnt_sent_org_name', {
          numEmails: e.emails.length,
          listEmails: jsx(ListFormatter, {
            children: e.emails.map(e => jsx('span', {
              children: e
            }, e))
          }),
          orgName: e.orgName
        })
      })
    })
  });
}, 'ORG_GUESTS_BANNED_MODAL');
function k(e) {
  return jsx('div', {
    style: {
      height: e.height || 12
    }
  });
}
let requestAccessWarningModal = registerModal(e => {
  let t = useDispatch();
  return jsx(TrackingProvider, {
    name: 'Admin approval needed modal',
    properties: {
      emails: e.emails.toString(),
      resourceIdOrKey: e.resourceIdOrKey,
      resourceType: e.resourceType
    },
    children: jsx(ConfirmationModal2, {
      confirmationTitle: getI18nString('permissions.invites_require_access.almost_there'),
      confirmText: getI18nString('permissions.invites_require_access.got_it'),
      onConfirm: () => t(popModalStack()),
      disableClickOutsideToHide: !0,
      hideOnConfirm: !1,
      popStack: e.popStack,
      size: 'small',
      hideCancel: !0,
      children: jsxs('div', {
        className: jE,
        children: [renderI18nText('permissions.invites_require_access.invites_sent_but_will_require_access_org_name', {
          numEmails: e.emails.length,
          listEmails: jsx(ListFormatter, {
            children: e.emails.map(e => jsx('span', {
              children: e
            }, e))
          }),
          resourceType: _$$v(e.resourceType),
          orgName: e.orgName
        }), jsx(k, {
          height: 24
        }), renderI18nText('permissions.invites_require_access.we_ll_connect_them_with_an_admin_who_can_help')]
      })
    })
  });
}, 'REQUEST_ACCESS_WARNING_MODAL');
let inviteWhiteListErrorModal = registerModal(e => {
  let t = useDispatch();
  return jsx(TrackingProvider, {
    name: 'Invite whitelist error modal',
    properties: {
      emails: e.emails.toString(),
      resourceIdOrKey: e.resourceIdOrKey,
      resourceType: e.resourceType
    },
    children: jsx(ConfirmationModal2, {
      confirmationTitle: getI18nString('permissions.invite_error_modal.couldn_t_send_invite'),
      confirmText: getI18nString('permissions.invites_whitelist.got_it'),
      onConfirm: () => t(popModalStack()),
      hideOnConfirm: !1,
      disableClickOutsideToHide: !0,
      popStack: e.popStack,
      size: 'small',
      hideCancel: !0,
      children: jsx('div', {
        className: jE,
        children: renderI18nText('permissions.invites_whitelist.the_following_users_were_not_approved_guests_in_org_name_org_please_request_access_for_them', {
          numEmails: e.emails.length,
          listEmails: jsx(ListFormatter, {
            children: e.emails.map(e => jsx('span', {
              children: e
            }, e))
          }),
          orgName: e.orgName
        })
      })
    })
  });
}, 'INVITE_WHITELIST_ERROR_MODAL');
let deprovisionedUserModal = registerModal(e => {
  let t = useDispatch();
  return jsx(TrackingProvider, {
    name: 'Deprovisioned user invite error modal',
    properties: {
      emails: e.emails.toString(),
      resourceIdOrKey: e.resourceIdOrKey,
      resourceType: e.resourceType
    },
    children: jsx(ConfirmationModal2, {
      confirmationTitle: getI18nString('permissions.invite_error_modal.couldn_t_send_invite'),
      confirmText: getI18nString('permissions.deprovisioned_users.got_it'),
      onConfirm: () => t(popModalStack()),
      hideOnConfirm: !1,
      disableClickOutsideToHide: !0,
      popStack: e.popStack,
      size: 'small',
      hideCancel: !0,
      children: jsx('div', {
        className: jE,
        children: renderI18nText('permissions.deprovisioned_users.these_users_are_no_longer_in_the_org_name_organization_add_them_again_through_SCIM', {
          numEmails: e.emails.length,
          listEmails: jsx(ListFormatter, {
            children: e.emails.map(e => jsx('span', {
              children: e
            }, e))
          }),
          orgName: e.orgName
        })
      })
    })
  });
}, 'DEPROVISIONED_USER_MODAL');
let orgRestrictedInviteModal = registerModal(e => {
  let t = useDispatch();
  return jsx(TrackingProvider, {
    name: 'Deprovisioned user invite error modal',
    properties: {
      emails: e.emails.toString(),
      resourceIdOrKey: e.resourceIdOrKey,
      resourceType: e.resourceType
    },
    children: jsx(ConfirmationModal2, {
      confirmationTitle: getI18nString('permissions.invite_error_modal.couldn_t_send_invite'),
      confirmText: getI18nString('permissions.org_restricted_invite.got_it'),
      onConfirm: () => t(popModalStack()),
      hideOnConfirm: !1,
      disableClickOutsideToHide: !0,
      popStack: e.popStack,
      size: 'small',
      hideCancel: !0,
      children: jsx('div', {
        className: jE,
        children: renderI18nText('permissions.org_restricted_invite.these_invites_couldn_t_be_sent_with_org_name.seat_rename', {
          numEmails: e.emails.length,
          listEmails: jsx(ListFormatter, {
            children: e.emails.map(e => jsx('span', {
              children: e
            }, e))
          }),
          orgName: e.orgName
        })
      })
    })
  });
}, 'ORG_RESTRICTED_INVITE_MODAL');
interface RoleInviteParams {
  emails: string[];
  resourceType: FResourceCategoryType;
  resourceIdOrKey: string;
  level: number;
  emailsToExclude?: Set<string>;
  onSuccess?: (meta: any, hasStatusErrors: boolean) => void;
  optimisticUpdates?: (roles: any[]) => void;
  onFailure?: () => void;
  nodeId?: string;
  source?: string;
  initialView?: string;
  orgName?: string;
  billableProductKey?: string;
  teamId?: string;
}
interface InviteStatusResponse {
  type: string;
  email: string;
  // Add other properties as needed
}
interface ResendInviteParams {
  role: {
    user: {
      email: string;
    };
    resource_type: string;
    resource_id_or_key: string;
  };
}
interface VisualBellMessageParams {
  invites: Array<{
    user: {
      email?: string;
    };
  }>;
  inviteLevel: number;
  file?: {
    name: string;
  };
  folderName?: string;
}

/**
 * Creates temporary roles for invited users and sends invites
 * Handles optimistic updates and various error cases
 */
export const sendRoleInvites = createOptimistThunk(({
  dispatch,
  getState
}, {
  emails,
  resourceType,
  resourceIdOrKey,
  level,
  emailsToExclude,
  onSuccess,
  optimisticUpdates,
  onFailure,
  nodeId,
  source,
  initialView,
  orgName,
  billableProductKey,
  teamId
}: RoleInviteParams) => {
  // Get contacts state
  const contactsState = getState().contacts;
  const tempRolesByEmail: Record<string, any> = {};
  let tempRoles: any[] = [];

  // Filter out excluded emails
  const validEmails = emails.filter(email => !(emailsToExclude && emailsToExclude.has(email)));

  // Create temporary roles for each email
  for (const email of validEmails) {
    const user = contactsState.usersByEmail[email];
    const tempRole = {
      id: `temp-role-${email}`,
      created_at: Date.now(),
      user_id: null,
      user: {
        ...user,
        email
      },
      resource_type: resourceType,
      resource_id_or_key: resourceIdOrKey,
      level,
      pending: true,
      updated_at: new Date().toString()
    };
    tempRolesByEmail[email] = tempRole;
    tempRoles = [...tempRoles, tempRole];
    dispatch(rolePostAction({
      role: tempRole
    }));
  }

  // Apply optimistic updates if provided
  optimisticUpdates?.(tempRoles);

  // Track analytics
  const state = getState();
  if (state.currentUserOrgId) {
    const inputValue = state.autocomplete.inputValue;
    const isInputUnvalidated = !!inputValue && !checkDomainExists(state.orgDomains.domains, inputValue);
    const validatedGuestEmails = emails.filter(email => email !== inputValue && !checkDomainExists(state.orgDomains.domains, email));
    const analyticsData = {
      resourceType,
      resourceIdOrKey,
      level,
      orgId: state.currentUserOrgId,
      numInvited: emails.length,
      numValidated: state.autocomplete.tokens.length,
      numUnvalidated: inputValue ? 1 : 0,
      numValidatedGuests: validatedGuestEmails.length,
      numUnvalidatedGuests: isInputUnvalidated ? 1 : 0,
      initialView,
      billableProductKey
    };
    if (resourceType === 'file') {
      trackFileEvent('Invited Emails', resourceIdOrKey, state, analyticsData);
    } else {
      trackEventAnalytics('Invited Emails', {
        ...analyticsData,
        source
      });
    }
  }

  // Send invites
  const invitePromise = sendWithRetry.post('/api/invites', {
    emails,
    resource_type: resourceType,
    resource_id_or_key: resourceIdOrKey,
    level,
    node_id: nodeId,
    initial_view: initialView,
    billable_product_key: billableProductKey
  }).then(({
    data
  }) => {
    dispatch(cL());

    // Process successful invites
    for (const invite of data.meta.invites) {
      trackRoleEvent('Role Invite Sent', invite, {
        level: invite.level,
        resourceType,
        roleUserEmail: invite.user?.email
      }, {
        forwardToDatadog: true
      });
      dispatch(rolePostAction({
        role: invite
      }));
    }

    // Handle invites with status
    let hasStatusErrors = false;
    const invitesWithStatus = data.meta.invites_with_status;
    if (invitesWithStatus) {
      hasStatusErrors = handleInviteStatusResponses(invitesWithStatus, resourceType, resourceIdOrKey, dispatch, tempRolesByEmail, orgName);
    }
    onSuccess?.(data.meta, hasStatusErrors);
  }, ({
    response
  }) => {
    dispatch(cL());

    // Parse error response
    let errorResponse;
    try {
      errorResponse = JSON.parse(response);
    } catch (error) {
      console.error('Failed to parse invite response:', error);
      errorResponse = {
        error: true,
        reason: 'json'
      };
    }

    // Set default error message if none provided
    if (errorResponse.error && !errorResponse.message) {
      errorResponse.message = `An error occurred while sending ${emails.length === 1 ? 'this invite' : 'these invites'}.`;
    }

    // Handle payment-related errors
    if (errorResponse.reason === 'NEEDS_PAYMENT') {
      const state = getState();
      const roles = getRolesForResource(resourceType, resourceIdOrKey, state);
      const teamIdFromRoles = roles && getResourceTeamId(roles[0], state);
      const isDeprecationCutover = isReduxDeprecationCutover(ConfigGroups.GROUP_7);
      const shadowReadValue = setupShadowRead({
        oldValue: teamIdFromRoles ?? '',
        newValue: teamId,
        label: adminPermissionConfig.RoleInvites.teamId,
        enableFullRead: isDeprecationCutover
      });
      if (isDeprecationCutover) {
        dispatch(showModalHandler({
          type: _$$t2,
          data: {
            teamId: shadowReadValue,
            canEditTeam: undefined
          }
        }));
      } else {
        const team = shadowReadValue && {
          ...state.teams[shadowReadValue],
          canEdit: hasEditorRoleAccessOnTeam(shadowReadValue, state),
          canAdmin: hasAdminRoleAccessOnTeam(shadowReadValue, state)
        };
        dispatch(showModalHandler({
          type: UPSELL_ADD_EDITOR_MODAL,
          data: {
            team,
            editorType: null,
            upsellSource: UpsellModalType.ADD_EDITOR
          }
        }));
      }
    } else {
      // Show generic error message
      dispatch(FlashActions.error(errorResponse.message));
    }

    // Clean up temporary roles on failure
    for (const email of validEmails) {
      dispatch(roleDeleteAction({
        role: tempRolesByEmail[email]
      }));
    }
    onFailure?.();
  });

  // Apply optimistic creation
  const resourceCategory = mapResourceCategoryToRole(resourceType);
  if (resourceCategory) {
    getCurrentLiveGraphClient().optimisticallyCreate({
      [resourceCategory]: arrayToIdMap(validEmails.map(email => ({
        id: `temp-role-${email}`,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: null,
        pending: true,
        resourceType,
        resourceId: resourceIdOrKey,
        level,
        pendingEmail: email,
        user: null
      })))
    }, invitePromise);
  }
});

/**
 * Helper function to delete roles
 */
function deleteRoles(invites: Array<{
  email: string;
}>, dispatchFunction: any, rolesByEmail?: Record<string, any>) {
  if (rolesByEmail) {
    for (const invite of invites) {
      dispatchFunction(roleDeleteAction({
        role: rolesByEmail[invite.email]
      }));
    }
  }
}

/**
 * Handles different types of invite status responses
 * Shows appropriate modals based on error types
 */
export function handleInviteStatusResponses(statusResponses: InviteStatusResponse[], resourceType: string, resourceIdOrKey: string, dispatch: any, tempRolesByEmail: Record<string, any>, orgName?: string): boolean {
  // Group responses by type
  const responsesByType = statusResponses.reduce((acc, response) => {
    if (response.type) {
      if (!acc[response.type]) {
        acc[response.type] = [];
      }
      acc[response.type].push(response);
    }
    return acc;
  }, Object.create(null) as Record<string, InviteStatusResponse[]>);
  const hasErrors = Object.keys(responsesByType).length > 0;

  // Handle self-invite errors
  if (responsesByType.no_self_invite?.length > 0) {
    dispatch(FlashActions.error(getI18nString('team_view.team_permissions_modal.youre_not_able_to_send_an_invite_to_yourself')));
  }

  // Handle user requires approval
  if (responsesByType.user_requires_approval?.length > 0 && orgName) {
    dispatch(showModalHandler({
      type: requestAccessWarningModal,
      data: {
        emails: responsesByType.user_requires_approval.map(invite => invite.email),
        resourceType,
        resourceIdOrKey,
        popStack: true,
        orgName
      }
    }));
    deleteRoles(responsesByType.user_requires_approval, dispatch, tempRolesByEmail);
  }

  // Handle org guests banned
  if (responsesByType.org_guests_banned?.length > 0 && orgName) {
    dispatch(showModalHandler({
      type: orgGuestsBannedModal,
      data: {
        emails: responsesByType.org_guests_banned.map(invite => invite.email),
        resourceType,
        resourceIdOrKey,
        popStack: true,
        orgName
      }
    }));
    deleteRoles(responsesByType.org_guests_banned, dispatch, tempRolesByEmail);
  }

  // Handle org whitelist errors
  if (responsesByType.org_whitelist?.length > 0 && orgName) {
    dispatch(showModalHandler({
      type: inviteWhiteListErrorModal,
      data: {
        emails: responsesByType.org_whitelist.map(invite => invite.email),
        resourceType,
        resourceIdOrKey,
        popStack: true,
        orgName
      }
    }));
    deleteRoles(responsesByType.org_whitelist, dispatch, tempRolesByEmail);
  }

  // Handle deprovisioned users
  if (responsesByType.deprovisioned?.length > 0 && orgName) {
    dispatch(showModalHandler({
      type: deprovisionedUserModal,
      data: {
        emails: responsesByType.deprovisioned.map(invite => invite.email),
        resourceType,
        resourceIdOrKey,
        popStack: true,
        orgName
      }
    }));
    deleteRoles(responsesByType.deprovisioned, dispatch, tempRolesByEmail);
  }

  // Handle org restricted invites
  if (responsesByType.org_restricted_invite?.length > 0 && orgName) {
    dispatch(showModalHandler({
      type: orgRestrictedInviteModal,
      data: {
        emails: responsesByType.org_restricted_invite.map(invite => invite.email),
        resourceType,
        resourceIdOrKey,
        popStack: true,
        orgName
      }
    }));
    deleteRoles(responsesByType.org_restricted_invite, dispatch, tempRolesByEmail);
  }
  return hasErrors;
}

/**
 * Shows visual bell notifications after sending invites
 */
export const showInviteVisualBell = createOptimistThunk(({
  dispatch
}, {
  invites,
  inviteLevel,
  file,
  folderName
}: VisualBellMessageParams) => {
  const moveMessage = file && folderName ? `Moved '${file.name}' to ${folderName}` : undefined;
  if (inviteLevel >= AccessLevelEnum.EDITOR && folderName && file) {
    if (moveMessage) {
      const generateMoveMessage = (inviteList: Array<{
        user: {
          email?: string;
        };
      }>, fileName: string, targetFolder: string, defaultMessage: string): string => {
        if (inviteList.length === 0) return defaultMessage;
        const emails = inviteList.map(invite => invite.user.email).filter((email): email is string => email !== undefined);
        if (emails.length === 0) return defaultMessage;
        const actionText = `been invited to edit '${fileName}' in ${targetFolder}`;
        if (emails.length > 1) {
          return `${emails[0]} and ${emails.length > 2 ? `${emails.length - 1} others have ` : '1 other has '}${actionText}`;
        }
        return `${emails[0]} has ${actionText}`;
      };
      dispatch(VisualBellActions.enqueue({
        type: 'file-moved',
        message: generateMoveMessage(invites, file.name, folderName, moveMessage)
      }));
    }
  } else {
    dispatch(VisualBellActions.enqueue({
      type: 'invite-sent',
      message: getI18nString('file_permissions_modal.invited_num_people', {
        num_invites: invites.length
      })
    }));
  }
});

/**
 * Resends an invite email
 */
export const resendInvite = createOptimistThunk(({
  dispatch
}, {
  role
}: ResendInviteParams) => {
  const resendPromise = sendWithRetry.post('/api/invites/resend', {
    email: role.user.email,
    resource_type: role.resource_type,
    resource_id_or_key: role.resource_id_or_key
  }).then(() => {
    dispatch(FlashActions.flash('Invite email sent again!'));
  });
  dispatch(handlePromiseError({
    promise: resendPromise,
    fallbackError: 'Failed to resend invite emails.'
  }));
});

// Export functions with clearer names
export const Ef = handleInviteStatusResponses;
export const kF = showInviteVisualBell;
export const $S = resendInvite;
export const rq = sendRoleInvites;