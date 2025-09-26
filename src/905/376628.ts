import { jsx } from 'react/jsx-runtime'
import { NotModalType } from '../905/11928'
import { renderI18nText } from '../905/303541'
import { UpgradeAction } from '../905/370443'
import { OnboardingModal } from '../905/425180'
import { TextWithTruncation } from '../905/984674'
import { Ho } from '../figma_app/236178'

export function renderDesignSymstemLibraryModal(e) {
  let t = Ho(e.libraryKey)
    ? jsx(TextWithTruncation, {
        children: renderI18nText('design_systems.libraries_modal.confirm_override.description_org'),
      })
    : jsx(TextWithTruncation, {
        children: renderI18nText('design_systems.libraries_modal.confirm_override.description_workspace'),
      })
  return jsx(OnboardingModal, {
    clickOutsideToHide: !0,
    description: t,
    disableHighlight: !0,
    fixedPosition: !1,
    isShowing: e.isShowing,
    onClose: e.onCancel,
    primaryCta: {
      label: jsx(TextWithTruncation, {
        children: renderI18nText('design_systems.libraries_modal.confirm_override.button_confirm'),
      }),
      ctaTrackingDescriptor: UpgradeAction.CONFIRM_LIBRARY_OVERRIDE,
      type: 'button',
      onClick: e.onConfirm,
    },
    secondaryCta: {
      label: jsx(TextWithTruncation, {
        children: renderI18nText('design_systems.libraries_modal.confirm_override.button_cancel'),
      }),
      ctaTrackingDescriptor: UpgradeAction.CANCEL_LIBRARY_OVERRIDE,
      type: 'button',
      onClick: e.onCancel,
    },
    targetKey: e.targetKey,
    title: jsx(TextWithTruncation, {
      children: renderI18nText('design_systems.libraries_modal.confirm_override.title'),
    }),
    trackingContextName: 'confirm_library_override_callout',
    zIndex: NotModalType.MODAL,
  })
}
export const X = renderDesignSymstemLibraryModal
