import { PureComponent } from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { isMfaRequiredForOrg } from '../905/31837';
import { registerLegacyModal } from '../905/102752';
import { getI18nString, renderI18nText } from '../905/303541';
import { ListFormatter } from '../figma_app/257703';
import { v_, YQ } from '../figma_app/538002';
import { jE } from '../figma_app/639088';
import { ConfirmationModal2 } from '../figma_app/918700';

// Original: export let $$p0 = 'confirm-org-guest-invite-modal'
export const confirmOrgGuestInviteModal = 'confirm-org-guest-invite-modal';

// Original: registerLegacyModal($$p0, e => jsx(m, { ...e.modalShown.data, dispatch: e.dispatch, }))
registerLegacyModal(confirmOrgGuestInviteModal, e => jsx(ConfirmOrgGuestInviteModal, {
  ...e.modalShown.data,
  dispatch: e.dispatch
}));

/**
 * Props interface for ConfirmOrgGuestInviteModal component.
 * Original props: emails, orgName, onCancel, onConfirm, popStack, dispatch (from e.modalShown.data and e.dispatch)
 */
interface ConfirmOrgGuestInviteModalProps {
  emails: string[];
  orgName: string;
  onCancel: () => void;
  onConfirm: () => void;
  popStack: () => void;
  dispatch: any; // Assuming dispatch type from context; refine if known
}

/**
 * Functional component for confirming organization guest invites.
 * Original class: m extends PureComponent
 */
const ConfirmOrgGuestInviteModal: React.FC<ConfirmOrgGuestInviteModalProps> = ({
  emails,
  orgName,
  onCancel,
  onConfirm,
  popStack
}) => {
  // Extracted helper function for rendering modal children based on MFA check.
  // Original: nested conditional in render method
  const renderModalChildren = () => {
    if (isMfaRequiredForOrg()) {
      // Original: Of() ? jsx('div', { className: jE, children: jsxs(Fragment, { ... }) })
      return jsx('div', {
        className: jE,
        children: jsxs(Fragment, {
          children: [renderI18nText('permissions.confirm_guest_invite.external_to_mfa_org_warning', {
            emails: jsx(ListFormatter, {
              className: YQ,
              children: emails
            }),
            numEmails: emails.length,
            orgName
          }), jsx('br', {}), jsx('br', {}), renderI18nText('permissions.confirm_guest_invite.external_to_mfa_org_reminder_without_link')]
        })
      });
    } else {
      // Original: : jsx('div', { className: jE, children: jsx(Fragment, { ... }) })
      return jsx('div', {
        className: jE,
        children: jsx(Fragment, {
          children: renderI18nText('permissions.confirm_guest_invite.external_to_org_warning', {
            emails: jsx(ListFormatter, {
              className: YQ,
              children: emails
            }),
            orgName,
            numEmails: emails.length,
            learnMore: jsx('a', {
              className: v_,
              target: '_blank',
              rel: 'noopener',
              href: 'https://help.figma.com/hc/articles/4420557314967-Members-versus-guests',
              children: renderI18nText('permissions.confirm_guest_invite.learn_more')
            })
          })
        })
      });
    }
  };
  return jsx(ConfirmationModal2, {
    confirmationTitle: getI18nString('permissions.confirm_guest_invite.share_externally'),
    confirmText: getI18nString('permissions.confirm_guest_invite.send_invite'),
    disableClickOutsideToHide: true,
    onCancel,
    onConfirm,
    popStack,
    size: 'small',
    children: renderModalChildren()
  });
};

// Original: m.displayName = 'ConfirmOrgGuestInviteModal'
ConfirmOrgGuestInviteModal.displayName = 'ConfirmOrgGuestInviteModal';

// Original: export const F = $$p0

export const F = confirmOrgGuestInviteModal;