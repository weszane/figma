import classNames from 'classnames'
import { useCallback, useEffect, useRef, useState } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { NotModalType } from '../905/11928'
import { OnboardingSequence } from '../905/152487'
import { UI3ConditionalWrapper } from '../905/341359'
import { ArrowPosition } from '../905/858282'
import { styleBuilderInstance } from '../905/941192'
import { cssBuilderInstance } from '../cssbuilder/589278'
import { eP } from '../figma_app/195407'
import { b as _$$b } from '../figma_app/199304'
import { Ay, gm } from '../figma_app/419216'
import { h as _$$h, P } from '../figma_app/546366'
import { l as _$$l } from '../figma_app/826369'
import { M as _$$M } from '../figma_app/826981'
import { TrackingProvider } from '../figma_app/831799'
import { x } from '../figma_app/849451'
import { j } from '../figma_app/928756'



interface ModalProps {
  innerRef?: React.RefObject<HTMLDivElement>
  fixedPosition?: boolean
  forceUI3Theme?: boolean
  width?: number
  targetKey?: string
  isCanvasNode?: boolean
  arrowPadding?: number
  pointToLeftEdge?: boolean
  pointToTopEdge?: boolean
  shouldCenterArrow?: boolean
  arrowPosition?: ArrowPosition
  onTargetLost?: () => void
  pointerOffsetOverride?: number
  shouldRepositionOnTargetLost?: boolean
  location?: {
    left: number
    top: number
    pointerPosition?: ArrowPosition
    pointerOffset?: number
  }
  onClose: (reason: string) => void
  isTooltip?: boolean
  emphasized?: boolean
  disableHighlight?: boolean
  highlightBlue?: boolean
  media?: boolean
  primaryCta?: unknown
  secondaryCta?: unknown
  clickOutsideToHide?: boolean
  shouldDisableAnimation?: boolean
  trackingContextName?: string
  trackingProperties?: Record<string, unknown>
  zIndex?: NotModalType
  shouldHideArrow?: boolean
  children?: React.ReactNode
}

interface Position {
  top: number
  left: number
}

/**
 * FixedPositionModal - Handles modals with fixed positioning
 * (Original function: I)
 */
function FixedPositionModal({ innerRef, ...props }: ModalProps): JSX.Element {
  const defaultRef = useRef<HTMLDivElement>(null)
  const resolvedRef = innerRef ?? defaultRef

  return jsx(ModalContainer, {
    ...props,
    innerRef: resolvedRef,
  })
}

/**
 * DynamicPositionModal - Handles modals with dynamic positioning
 * (Original function: E)
 */
function DynamicPositionModal(props: ModalProps): JSX.Element {
  const {
    width = 240,
    targetKey,
    isCanvasNode,
    arrowPadding = 0,
    pointToLeftEdge,
    pointToTopEdge,
    shouldCenterArrow,
    arrowPosition = ArrowPosition.TOP,
    onTargetLost,
    pointerOffsetOverride,
    shouldRepositionOnTargetLost = true,
    onClose,
  } = props

  const [modalHeight, setModalHeight] = useState<number>(0)
  const modalRef = useRef<HTMLDivElement>(null)
  const previousPositionRef = useRef<{ left: number; top: number; pointerPosition?: ArrowPosition; pointerOffset?: number } | null>(null)

  // Calculate initial center position
  const [centerPosition, setCenterPosition] = useState<Position>(() => ({
    top: window.innerHeight / 2 - modalHeight / 2,
    left: window.innerWidth / 2 - width / 2,
  }))

  // Get current modal height
  const modalHeightCurrent = modalRef.current?.clientHeight

  // Update position on resize and when height is available
  useEffect(() => {
    const updatePosition = (): void => {
      if (!modalHeightCurrent) return

      setCenterPosition({
        top: window.innerHeight / 2 - modalHeightCurrent / 2,
        left: window.innerWidth / 2 - width / 2,
      })
    }

    if (modalHeightCurrent) {
      setModalHeight(modalHeightCurrent)
      updatePosition()
    }

    window.addEventListener('resize', updatePosition)
    return () => window.removeEventListener('resize', updatePosition)
  }, [modalHeightCurrent, width])

  // Handle escape key press
  j(() => onClose('escape_button_pressed'))

  // Calculate target position
  const targetPositionFunction = isCanvasNode ? Ay : eP
  const currentPosition = targetPositionFunction({
    targetKey,
    height: modalHeight,
    width,
    topPadding: 4 + arrowPadding,
    alignPointerToLeft: pointToLeftEdge,
    alignPointerToTop: pointToTopEdge,
    shouldCenterArrow,
    arrowPosition,
    onTargetLost,
    pointerOffsetOverride,
  })

  // Store previous position for fallback
  if (currentPosition) {
    previousPositionRef.current = currentPosition
  }

  // Use previous position if current is null and repositioning is disabled
  const finalPosition = currentPosition || (shouldRepositionOnTargetLost ? null : previousPositionRef.current)

  return jsx(ModalContainer, {
    ...props,
    location: finalPosition
      ? {
        left: finalPosition.left,
        top: finalPosition.top,
        pointerPosition: finalPosition.pointerPosition,
        pointerOffset: finalPosition.pointerOffset,
      }
      : {
        left: centerPosition.left,
        top: centerPosition.top,
      },
    targetKey,
    innerRef: modalRef,
  })
}

/**
 * ModalRenderer - Main modal component that decides which positioning strategy to use
 * (Original function: $$x0)
 */
export function ModalRenderer({
  forceUI3Theme = false,
  fixedPosition,
  ...props
}: ModalProps): JSX.Element {
  return fixedPosition
    ? jsx(UI3ConditionalWrapper, {
      disabled: !forceUI3Theme,
      children: jsx(FixedPositionModal, {
        ...props,
      }),
    })
    : jsx(UI3ConditionalWrapper, {
      disabled: !forceUI3Theme,
      children: jsx(DynamicPositionModal, {
        ...props,
      }),
    })
}

// Z-index mapping for different modal types
const Z_INDEX_STYLES = {
  [NotModalType.MODAL]: cssBuilderInstance.zIndexModal,
  [NotModalType.SECONDARY_MODAL]: cssBuilderInstance.zIndexSecondaryModal,
  [NotModalType.TERTIARY_MODAL]: cssBuilderInstance.zIndexTertiaryModal,
  [NotModalType.UNSET]: cssBuilderInstance,
  [NotModalType.NOTIFICATION_MODAL]: cssBuilderInstance,
} as const

/**
 * ModalContainer - Core modal container with styling and event handling
 * (Original function: w)
 */
function ModalContainer({
  location,
  onClose,
  zIndex = NotModalType.SECONDARY_MODAL,
  width = 240,
  emphasized,
  isTooltip,
  disableHighlight,
  targetKey,
  highlightBlue,
  media,
  clickOutsideToHide,
  innerRef,
  shouldDisableAnimation,
  trackingContextName,
  trackingProperties,
  shouldHideArrow,
  ...props
}: ModalProps): JSX.Element {
  // Build CSS classes
  const containerClasses = cssBuilderInstance
    .fixed
    .borderBox
    .bRadius2
    .pb16
    .pl16
    .pr16
    .fontInter
    .flex
    .flexColumn
    .match(zIndex, Z_INDEX_STYLES)
    .if(!!media, cssBuilderInstance.pt12, cssBuilderInstance.pt16)
    .$

  // Build inline styles
  const modalStyles = styleBuilderInstance
    .if(emphasized,
      styleBuilderInstance.colorBgBrand.colorTextOnbrand,
      styleBuilderInstance.colorBg.colorText)
    .if(isTooltip,
      styleBuilderInstance.colorBgTooltip.colorTextTooltip)
    .add({
      width: `${width}px`,
      boxShadow: 'var(--elevation-400-menu-panel)',
      left: location ? `${location.left}px` : '0px',
      top: location ? `${location.top}px` : '0px',
    })
    .$

  // Determine if clicking outside should close the modal
  const shouldCloseOnClickOutside = clickOutsideToHide ?? (props.primaryCta === undefined && props.secondaryCta === undefined)

  // Handle outside clicks
  const handleOutsideClick = useCallback(() => onClose('clicked_outside'), [onClose])
  _$$l(shouldCloseOnClickOutside, innerRef, handleOutsideClick)

  return jsxs(TrackingProvider, {
    name: trackingContextName,
    properties: trackingProperties,
    children: [
      // Highlight target if needed
      !disableHighlight && targetKey && jsx(x, {
        target: targetKey,
        isBrandColor: highlightBlue,
      }),

      // Modal content container
      jsxs(_$$M, {
        isTooltip,
        className: classNames(containerClasses, P, {
          [_$$h]: zIndex === NotModalType.NOTIFICATION_MODAL,
        }),
        style: modalStyles,
        ref: innerRef,
        shouldDisableAnimation,
        children: [
          // Arrow indicator
          location?.pointerPosition !== undefined &&
          !shouldHideArrow &&
          jsx(gm, {
            arrowPosition: location.pointerPosition,
            arrowOffset: location.pointerOffset,
            modalColor: modalStyles.backgroundColor,
          }),

          // Modal content
          jsx(_$$b, {
            ...props,
          }),
        ],
      }),
    ],
  })
}

/**
 * OnboardingModal - Modal wrapper for onboarding sequences
 * (Original function: $$C1)
 */
export function OnboardingModal({
  isShowing,
  userFlagOnShow,
  testId,
  forceEditorTheme,
  ...props
}: ModalProps & {
  isShowing?: boolean
  userFlagOnShow?: string
  testId?: string
  forceEditorTheme?: boolean
}): JSX.Element {
  return jsx(OnboardingSequence, {
    isShowing,
    userFlagOnShow,
    testId,
    forceEditorTheme,
    children: jsx(ModalRenderer, {
      ...props,
    }),
  })
}

// Export aliases
export const on = ModalRenderer
export const rq = OnboardingModal
