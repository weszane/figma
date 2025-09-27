import { PureComponent } from 'react'
import { useDispatch } from 'react-redux'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import { consumptionPaywallUtils } from '../905/224'
import { CloseButton } from '../905/17223'
import { registerLegacyModal, registerModal } from '../905/102752'
import { hideModal, popModalStack } from '../905/156213'
import { getI18nString, renderI18nText } from '../905/303541'
import { UpgradeAction } from '../905/370443'
import { DashboardSections } from '../905/548208'
import { FeatureFlag } from '../905/652992'
import { ConsumptionPaywallModalComponent } from '../905/739964'
import { selectViewAction } from '../905/929976'
import { PRIMARY_LIMIT, SECONDARY_LIMIT, STANDARD_LIMIT } from '../figma_app/345997'
import { startProUpgradeFlowThunk } from '../figma_app/482142'
import { fileActionEnum, projectPermissionEnum } from '../figma_app/630077'
import { ButtonBasePrimaryTracked, ButtonLinkTracked, ButtonSecondaryTracked, linkWithTracking } from '../figma_app/637027'
import { pL, v0 } from '../figma_app/639088'
import { TrackingProvider, wrapWithTracking } from '../figma_app/831799'
import { desktopAPIInstance } from '../figma_app/876459'
import { ModalContainer } from '../figma_app/918700'

// Original constants renamed for clarity
const CONTACT_ADMINS_CLASS = 'upsell_modals--contactAdmins' // original: x
export const UPSELL_ADD_EDITOR_MODAL = 'UPSELL_ADD_EDITOR_MODAL' // original: $$S0
export const UPSELL_INVITE_ONLY_MODAL = 'UPSELL_INVITE_ONLY_MODAL' // original: $$w1
export const UPSELL_VIEW_ONLY_MODAL = 'UPSELL_VIEW_ONLY_MODAL' // original: $$C2

/**
 * Component for rendering team upsell modals based on subscription and permissions.
 * @param props - The props containing modal data and selected view.
 * @returns JSX element for the modal.
 */
function TeamUpsellModal(props: {
  modalShown: {
    data: {
      team: any
    }
  }
  message: any
  selectedView: any
  dispatch: any
}) {
  // original: T
  const dispatch = useDispatch<AppDispatch>()
  const team = props.modalShown.data.team
  const hideModalHandler = () => {
    dispatch(hideModal())
  }
  const popModalHandler = () => {
    dispatch(popModalStack())
  }
  const hasNoSubscription = !team.subscription
  const canEdit = team.canEdit
  const canAdmin = team.canAdmin
  const titleText = hasNoSubscription ? getI18nString('payments_modal.upgrade_to_professional') : getI18nString('payments_modal.update_your_payment')
  return jsxs(ModalContainer, {
    size: 'small',
    children: [jsx('div', {
      className: 'upsell_modals--title---QZg6 modal--title--sEkWg',
      children: titleText,
    }), props.message, hasNoSubscription && jsxs('div', {
      children: [jsx('br', {}), jsx('a', {
        className: 'upsell_modals--link--H0izK blue_link--blueLink--9rlnd',
        href: '/pricing',
        target: '_blank',
        rel: 'noopener',
        children: renderI18nText('payments_modal.learn_more_about_team_plans'),
      }), !canEdit && jsx('div', {
        className: CONTACT_ADMINS_CLASS,
        children: renderI18nText('payments_modal.contact_an_admin_of_team_name_to_upgrade', {
          teamName: jsx('span', {
            className: 'upsell_modals--team_name--q8B5-',
            children: team.name,
          }),
        }),
      }), jsxs('div', {
        className: v0,
        children: [jsx(ButtonSecondaryTracked, {
          onClick: popModalHandler,
          trackingProperties: {
            teamId: team.id,
            trackingDescriptor: UpgradeAction.CANCEL,
          },
          children: renderI18nText('payments_modal.cancel'),
        }), canEdit && jsx(ButtonLinkTracked, {
          className: pL,
          onClick: () => {
            hideModalHandler()
            dispatch(startProUpgradeFlowThunk({
              teamId: team.id,
              selectedView: props.selectedView,
            }))
          },
          trackingProperties: {
            teamId: team.id,
            trackingDescriptor: UpgradeAction.UPGRADE,
          },
          children: renderI18nText('payments_modal.upgrade'),
        })],
      })],
    }), !hasNoSubscription && jsxs('div', {
      children: [!canAdmin && jsx('div', {
        className: CONTACT_ADMINS_CLASS,
        children: renderI18nText('payments_modal.contact_an_admin_to_update_your_payment_source'),
      }), jsxs('div', {
        className: v0,
        children: [jsx(ButtonSecondaryTracked, {
          onClick: popModalHandler,
          trackingProperties: {
            teamId: team.id,
            trackingDescriptor: UpgradeAction.CANCEL,
          },
          children: renderI18nText('payments_modal.cancel'),
        }), canAdmin && jsx(ButtonLinkTracked, {
          className: pL,
          onClick: () => {
            hideModalHandler()
            props.dispatch(selectViewAction({
              view: 'teamAdminConsole',
              teamId: team.id,
              teamAdminConsoleViewTab: DashboardSections.SETTINGS,
            }))
          },
          trackingProperties: {
            teamId: team.id,
          },
          children: renderI18nText('payments_modal.update_payment'),
        })],
      })],
    })],
  })
}

// Register legacy modals
registerLegacyModal(UPSELL_ADD_EDITOR_MODAL, props => jsx(AddEditorUpsellModal, {
  ...props,
}))
registerLegacyModal(UPSELL_INVITE_ONLY_MODAL, (props) => {
  const {
    team,
    editorType,
    upsellSource,
  } = props.modalShown.data
  return jsx(ConsumptionPaywallModalComponent, {
    team,
    resource: FeatureFlag.INVITE_ONLY_PROJECT,
    action: projectPermissionEnum.INVITE_ONLY_PROJECT,
    currentPlan: consumptionPaywallUtils.Plan.STARTER,
    upsellPlan: consumptionPaywallUtils.Plan.PRO,
    editorType,
    upsellSource,
  })
})
registerLegacyModal(UPSELL_VIEW_ONLY_MODAL, (props) => {
  const {
    team,
    editorType,
    upsellSource,
  } = props.modalShown.data
  return jsx(ConsumptionPaywallModalComponent, {
    team,
    resource: FeatureFlag.VIEW_ONLY_PROJECT,
    action: projectPermissionEnum.VIEW_ONLY_PROJECT,
    currentPlan: consumptionPaywallUtils.Plan.STARTER,
    upsellPlan: consumptionPaywallUtils.Plan.PRO,
    editorType,
    upsellSource,
  })
})

/**
 * Props interface for AddEditorUpsellModal.
 */
interface AddEditorUpsellModalProps {
  modalShown: {
    data: {
      team: any
    }
  }
  selectedView: any
  dispatch: any
}

/**
 * Class component for the Add Editor Upsell Modal.
 */
class AddEditorUpsellModal extends PureComponent<AddEditorUpsellModalProps> {
  static displayName = 'AddEditorUpsellModal'
  render() {
    const {
      team,
    } = this.props.modalShown.data
    const teamName = team?.name
    const message = team && team.subscription
      ? jsx('div', {
          children: renderI18nText('payments_modal.team_name_is_currently_locked_please_update_your_payment_source_to_unlock_team_name_and_modify_team_members', {
            teamName,
          }),
        })
      : jsxs('div', {
          children: [renderI18nText('payments_modal.you_ve_reached_your_plan_s_m_a_x_f_r_e_e_editors_editor_limit_user_text_you_ve_invited_will_be_granted_view_access_but_they_won_t_be_able_to_edit.seat_rename', {
            userText: teamName,
            maxFreeEditors: SECONDARY_LIMIT,
          }), jsx('br', {}), jsx('br', {}), renderI18nText('payments_modal.you_may_give_them_edit_access_later_if_you_upgrade_to_the_professional_plan_or_downgrade_other_editors_on_your_team_to_viewers.seat_rename')],
        })
    return wrapWithTracking(jsx(TeamUpsellModal, {
      message,
      ...this.props,
    }), AddEditorUpsellModal.displayName, {
      teamId: team.id,
    })
  }
}

// Register simple file limit upsell modal
registerModal((props) => {
  const dispatch = useDispatch<AppDispatch>()
  const popModalHandler = () => {
    dispatch(popModalStack())
  }
  const team = props.team
  let title: any
  let description: any
  if (team.subscription) {
    title = renderI18nText('payments_modal.your_team_is_locked')
    description = renderI18nText('payments_modal.your_professional_team_plan_is_no_longer_active_please', {
      teamName: team.name,
    })
  }
  else {
    title = renderI18nText('payments_modal.upgrade_to_verb_resource_name', {
      verb: (() => {
        switch (props.action) {
          case fileActionEnum.MOVE_FILES:
          case fileActionEnum.MOVE_FOLDER:
            return getI18nString('payments_modal.move')
          case fileActionEnum.DUPLICATE_FILES:
            return getI18nString('payments_modal.duplicate')
          case fileActionEnum.RESTORE_FILES:
            return getI18nString('payments_modal.restore')
          case fileActionEnum.IMPORT_FILES:
            return getI18nString('payments_modal.import')
          default:
            return getI18nString('payments_modal.add')
        }
      })(),
      resourceName: props.action === fileActionEnum.MOVE_FOLDER ? getI18nString('payments_modal.this_project') : props.action === fileActionEnum.IMPORT_FILES ? getI18nString('payments_modal.more_files') : props.numFiles && props.numFiles > 1 ? getI18nString('payments_modal.these_files') : getI18nString('payments_modal.this_file'),
    })
    description = renderI18nText('payments_modal.on_the_starter_plan_your_team_is_limited', {
      maxFreeFiles: STANDARD_LIMIT,
      maxFreeFolders: PRIMARY_LIMIT,
    })
  }
  return jsx(TrackingProvider, {
    name: 'SimpleFileLimitUpsellModal',
    properties: {
      teamId: team.id,
      action: props.action,
    },
    children: jsxs(ModalContainer, {
      title,
      titleClassName: 'upsell_modals--titleSmall--L92xE modal--title--sEkWg',
      size: 360,
      popStack: true,
      disableClickOutsideToHide: true,
      className: 'upsell_modals--modalSmall--V-tca',
      children: [jsx(CloseButton, {
        className: 'upsell_modals--closeButton--tyiun close_button--modalUpperRightCorner--eKAQg',
        onClick: popModalHandler,
      }), jsxs('span', {
        children: [description, jsx('br', {})],
      }), !team.subscription && jsxs(Fragment, {
        children: [jsx('br', {}), jsx('span', {
          children: renderI18nText('payments_modal.if_you_d_like_you_can_upgrade_your_plan_now_or_learn_more_about_our_paid_plans', {
            learnMoreAboutOurPaidPlans: jsx(linkWithTracking, {
              target: '_blank',
              href: '/pricing',
              trusted: true,
              children: renderI18nText('payments_modal.learn_more_about_our_paid_plans'),
            }),
          }),
        })],
      }), jsxs('div', {
        className: v0,
        children: [jsx(ButtonSecondaryTracked, {
          onClick: popModalHandler,
          trackingProperties: {
            trackingDescriptor: UpgradeAction.CANCEL,
          },
          children: renderI18nText('payments_modal.cancel'),
        }), jsx(ButtonBasePrimaryTracked, {
          className: pL,
          onClick: () => {
            popModalHandler()
            dispatch(startProUpgradeFlowThunk({
              teamId: props.team.id,
              openInNewTab: !desktopAPIInstance,
              selectedView: {
                view: 'team',
                teamId: props.team.id,
              },
            }))
          },
          trackingProperties: {
            teamId: team.id,
            trackingDescriptor: UpgradeAction.UPGRADE,
          },
          children: renderI18nText('payments_modal.upgrade'),
        })],
      })],
    }),
  })
}, 'SimpleFileLimitUpsellModal')

// Exported constants with refactored names
export const oE = UPSELL_ADD_EDITOR_MODAL // original: oE
export const Dp = UPSELL_INVITE_ONLY_MODAL // original: Dp
export const Ni = UPSELL_VIEW_ONLY_MODAL // original: Ni
