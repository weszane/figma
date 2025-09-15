import { jsx } from 'react/jsx-runtime'
import { KeyCodes } from '../905/63728'
import { popModalStack } from '../905/156213'
import { A as Icon1 } from '../905/251970'
import { getI18nString } from '../905/303541'
import { shouldOptimizeForIpad } from '../905/355607'
import { RecordableButton } from '../905/511649'
import { J_, Nk } from '../905/871493'
import { withTrackedClick } from '../figma_app/831799'
import { generateRecordingKey } from '../figma_app/878298'
/**
 * CloseButton - Refactored from $$m0
 * Renders a recordable close button with tracked click and accessibility features.
 * @param props - Button props including event handlers and accessibility attributes.
 */
export const CloseButton = withTrackedClick(({
  onMouseDown,
  onClick,
  className,
  disabled,
  dataOnboardingKey,
  dataTestId = 'close-button',
  'aria-label': ariaLabel = getI18nString('general.close'),
  ...restProps
}) => {
  const isIpad = shouldOptimizeForIpad()
  return jsx(RecordableButton, {
    'aria-label': ariaLabel,
    'className': `${Nk} ${className || ''}`,
    'data-fullscreen-intercept': restProps['data-fullscreen-intercept'],
    'data-not-draggable': true,
    'data-onboarding-key': dataOnboardingKey,
    'dataTestId': dataTestId,
    'disabled': disabled,
    'onClick': isIpad ? undefined : onClick,
    'onKeyDown': (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.keyCode === KeyCodes.ESCAPE)
        e.currentTarget.blur()
    },
    'onMouseDown': onMouseDown,
    'onPointerDown': isIpad ? onClick : undefined,
    'recordingKey': generateRecordingKey(restProps, 'closeButton'),
    'type': 'button',
    'children': jsx(Icon1, {}),
  })
})
CloseButton.displayName = 'CloseButton'

/**
 * ModalUpperRightCorner - Refactored from $$h1
 * Renders the modal's upper right corner with a close button.
 * @param props - Props including custom styles and button props.
 */
export function ModalUpperRightCorner({
  customStyle,
  ...buttonProps
}: {
  customStyle?: React.CSSProperties
  [key: string]: any
}) {
  return jsx('div', {
    'className': J_,
    'style': { ...customStyle },
    'data-testid': 'modal-upper-right-corner',
    'children': jsx(CloseButton, { ...buttonProps }),
  })
}

/**
 * ModalCloseButton - Refactored from $$g2
 * Handles modal close logic and dispatches popModalStack.
 * @param props - Props including dispatch and onClose handlers.
 */
export function ModalCloseButton({
  dispatch,
  onClose,
  ...rest
}: {
  dispatch: Fn
  onClose?: () => void
  [key: string]: any
}) {
  return jsx(ModalUpperRightCorner, {
    ...rest,
    onClick: () => {
      dispatch(popModalStack())
      onClose?.()
    },
  })
}

// Refactored exports
export const Jn = CloseButton
export const i0 = ModalUpperRightCorner
export const s_ = ModalCloseButton
