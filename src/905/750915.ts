import classNames from 'classnames'
import { useCallback, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import { BuyerAPIHandler } from '../905/180'
import { getAssociatedUserProfiles } from '../905/11536'
import { registerModal } from '../905/102752'
import { KindEnum } from '../905/129884'
import { hideModal } from '../905/156213'
import { h as _$$h } from '../905/207101'
import { getI18nString, renderI18nText } from '../905/303541'
import { a_, Aq, Bi, dS, iG, lf, pV, sw, tW, YE, z_ } from '../905/427932'
import { trackEventAnalytics } from '../905/449184'
import { e as _$$e } from '../905/579755'
import { SvgComponent } from '../905/714743'
import { lQ } from '../905/934246'
import { A as _$$A } from '../6828/718668'
import { c as _$$c } from '../figma_app/11961'
import { A as _$$A2 } from '../figma_app/122760'
import { mapResourceType } from '../figma_app/471982'
import { V6 } from '../figma_app/487970'
import { avatar, genericSelectorInner, genericSelectorModal, genericSelectorModalCancel, workspaceTitleWrapper } from '../figma_app/727769'
import { isSubscriptionActive, partitionUsersByPurchaseEligibility } from '../figma_app/808294'

/**
 * Renders the options for user selection in the modal.
 * Original function name: E
 */
function UserSelectionOptions({
  title,
  description,
  options,
}: {
  title: React.ReactNode
  description: React.ReactNode
  options: Array<{
    id: string
    title: React.ReactNode
    Avatar: React.ReactNode
    description: React.ReactNode
    onClick: () => void
    disabledText?: {
      displayText: string
      tooltipText?: string
    }
  }>
}) {
  return jsxs(Fragment, {
    children: [
      jsx('div', { className: YE, children: title }),
      jsx('div', { className: Aq, children: description }),
      jsx('div', {
        className: sw,
        children: options.map((option) => {
          const isDisabled = !!option.disabledText
          return jsxs(
            'button',
            {
              className: tW,
              onClick: (event) => {
                event.stopPropagation()
                option.onClick()
              },
              disabled: isDisabled,
              children: [
                jsx('div', {
                  className: classNames({
                    [pV]: true,
                    [a_]: isDisabled,
                  }),
                  children: option.Avatar,
                }),
                jsxs('div', {
                  className: Bi,
                  children: [
                    jsx('span', {
                      className: iG,
                      children: option.title,
                    }),
                    jsx('span', {
                      className: z_,
                      children: option.description,
                    }),
                  ],
                }),
                option.disabledText
                  ? jsx('div', {
                      'className': lf,
                      'data-tooltip': option.disabledText.tooltipText,
                      'data-tooltip-type': KindEnum.TEXT,
                      'children': option.disabledText.displayText,
                    })
                  : jsx(SvgComponent, {
                      className: dS,
                      svg: _$$A,
                    }),
              ],
            },
            option.id,
          )
        }),
      }),
    ],
  })
}

/**
 * Modal content for selecting a user to purchase.
 * Original function name: w
 */
function PrePurchaseUserSelectorContent({
  onUserSelect,
  resource,
}: {
  onUserSelect: (user: any) => void
  resource: any
}) {
  const authedActiveCommunityProfile = useSelector<ObjectOf>(
    state => state.authedActiveCommunityProfile,
  )
  const authedUsers: any = useSelector<ObjectOf>(state => state.authedUsers)
  const [purchaseMeta, setPurchaseMeta] = useState<Record<string, any>>({})

  // Fetch buyer associated purchases on mount
  _$$h(() => {
    BuyerAPIHandler.getBuyerAssociatedPurchases({
      id: resource.monetized_resource_metadata.id,
    })
      .then((res) => {
        setPurchaseMeta(res.data.meta)
      })
      .catch(() => {})
  })

  // Get associated user profiles
  const associatedProfiles = useMemo(
    () =>
      getAssociatedUserProfiles({
        authedActiveCommunityProfile,
        authedUsers,
      }),
    [authedActiveCommunityProfile, authedUsers],
  )

  // Partition users by purchase eligibility
  const { usersCanPurchase, publishers } = useMemo(
    () => partitionUsersByPurchaseEligibility(associatedProfiles, resource),
    [associatedProfiles, resource],
  )

  // Build options for users who can purchase
  let options = usersCanPurchase.map((user) => {
    const hasActiveSubscription
      = purchaseMeta[user.id] && isSubscriptionActive(purchaseMeta[user.id])
    return {
      id: user.id,
      title: jsxs('div', {
        className: workspaceTitleWrapper,
        children: [
          user.name,
          !_$$c(authedActiveCommunityProfile)
          && hasActiveSubscription
          && jsx('div', {
            'data-tooltip': getI18nString(
              'community.buyer.this_account_has_already_purchased',
            ),
            'data-tooltip-type': KindEnum.TEXT,
            'children': jsx(V6, {}),
          }),
        ],
      }),
      Avatar: jsx(_$$e, {
        entity: user,
        adtlClassName: avatar,
      }),
      description: user.email,
      onClick: () => {
        if (!hasActiveSubscription)
          onUserSelect(user)
      },
      disabledText: hasActiveSubscription
        ? {
            displayText: '',
          }
        : undefined,
    }
  })

  // Add publisher options (always disabled)
  options = options.concat(
    publishers.map(publisher => ({
      id: publisher.id,
      title: publisher.name,
      Avatar: jsx(_$$e, {
        entity: publisher,
        adtlClassName: avatar,
      }),
      description: publisher.email,
      onClick: lQ,
      disabledText: {
        displayText: getI18nString('community.try.not_allowed'),
        tooltipText: getI18nString('community.buyer.user_is_a_publisher'),
      },
    })),
  )

  return jsx(UserSelectionOptions, {
    title: getI18nString('community.buyer.confirm_account'),
    description: getI18nString(
      'community.buyer.this_resource_will_only_be_accesible',
    ),
    options,
  })
}

/**
 * Modal registration for pre-purchase user selector.
 * Original export: $$T0
 */
export const PrePurchaseUserSelectorModal = registerModal(
  (props: { onUserSelect: (user: any) => void, resource: any }) => {
    const dispatch = useDispatch()
    const handleClose = useCallback(() => {
      dispatch(hideModal())
    }, [dispatch])

    /**
     * Renders the modal content and tracks analytics.
     * Original inline function in $$T0
     */
    const ModalContent = useMemo(
      () =>
        function ModalContentInner({
          onUserSelect,
          resource,
        }: {
          onUserSelect: (user: any) => void
          resource: any
        }) {
          _$$h(() => {
            trackEventAnalytics('Pre Purchase User Selector Modal - Opened', {
              resourceType: mapResourceType(resource),
              resourceId: resource.id,
            })
          })
          return jsx(_$$A2, {
            className: genericSelectorModal,
            onCloseModal: handleClose,
            children: jsxs('div', {
              className: genericSelectorInner,
              children: [
                jsx(PrePurchaseUserSelectorContent, {
                  onUserSelect,
                  resource,
                }),
                jsx('button', {
                  className: genericSelectorModalCancel,
                  onClick: handleClose,
                  children: renderI18nText(
                    'community.try.pick_workspace.cancel',
                  ),
                }),
              ],
            }),
          })
        },
      [handleClose],
    )

    return jsx(ModalContent, {
      onUserSelect: props.onUserSelect,
      resource: props.resource,
    })
  },
  'PrePurchaseUserSelectorModal',
)

// Refactored export name for modal
export const I = PrePurchaseUserSelectorModal
