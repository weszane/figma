import classNames from 'classnames'
import { useCallback, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { jsx, jsxs } from 'react/jsx-runtime'
import { i0 } from '../905/17223'
import { KeyCodes } from '../905/63728'
import { TabLoop, TabLoopDisplayAs } from '../905/64217'
import { hideModal, popModalStack } from '../905/156213'
import { $$, _f, CY, DD, Er, ew, FQ, Gx, HY, Ir, jE, JY, K1, KJ, L4, LO, pL, pN, R7, u1, v0, Xt, Y0, yl } from '../905/289198'
import { renderI18nText } from '../905/303541'
import { trackEventAnalytics } from '../905/449184'
import { In as Icon1 } from '../905/672640'
import { usePreventScrollOnIOS } from '../905/772711'
import { runOnceAtATime } from '../905/807529'
import { Dm } from '../figma_app/8833'
import { ButtonBasePrimaryTracked, ButtonNegativeTracked, ButtonSecondaryTracked } from '../figma_app/637027'
import { useTracking } from '../figma_app/831799'
import { LoadingSpinner } from '../figma_app/858013'
import { useHandleMouseEvent, useSetupPlayback } from '../figma_app/878298'

/**
 * ModalView component ($$v1)
 * Handles modal rendering, focus management, and keyboard/mouse events.
 */
export function ModalView(props) {
  // Destructure props with defaults
  const {
    useModalViewScroll = true,
    tintedModalBackground = true,
    hide,
    disableClickOutsideToHide,
    size,
    alignment,
    absolutePosition,
    padding,
    height,
    maxHeight,
    width,
    title,
    titleClassName,
    className,
    fixedTop,
    backgroundClassName,
    onKeyDown,
    disableKeyboardEventPropagation,
    modalRef,
    onModalClick,
    enableEscapeToClose,
    children,
    animateIn,
    disableFocusTrap,
    noPadding,
    disableFocusOnMount,
    ...rest
  } = props

  usePreventScrollOnIOS()

  // Handles click outside to hide modal
  const handleBackgroundMouseDown = useCallback(() => {
    if (!disableClickOutsideToHide)
      hide('click_outside')
  }, [disableClickOutsideToHide, hide])

  // Prevents event propagation inside modal
  const handleModalMouseDown = useCallback((e) => {
    e.stopPropagation()
  }, [])

  // Handles modal click event
  const handleModalClick = useCallback((e) => {
    onModalClick && onModalClick(e)
  }, [onModalClick])

  // Handles keyboard events for modal
  const handleKeyDown = useCallback((e) => {
    if (
      e.keyCode === KeyCodes.ESCAPE
      && (!disableClickOutsideToHide || enableEscapeToClose)
    ) {
      hide('press_escape')
      e.preventDefault()
      e.stopPropagation()
      return
    }
    onKeyDown && onKeyDown(e)
    if (disableKeyboardEventPropagation) {
      e.nativeEvent.stopImmediatePropagation()
      e.stopPropagation()
    }
  }, [
    disableClickOutsideToHide,
    hide,
    onKeyDown,
    disableKeyboardEventPropagation,
    enableEscapeToClose,
  ])

  // Ref for modal background
  const backgroundRef = useRef(null)

  // Focus management for modal
  useEffect(() => {
    if (disableFocusOnMount)
      return
    if (backgroundRef.current.matches(':focus-within'))
      return
    backgroundRef.current.focus()
    if (disableFocusTrap)
      return
    const focusHandler = runOnceAtATime((e) => {
      if (!e.target.closest('[aria-modal="true"]')) {
        backgroundRef.current?.focus()
      }
    })
    document.body.addEventListener('focus', focusHandler, true)
    return () => document.body.removeEventListener('focus', focusHandler, true)
  }, [disableFocusOnMount, disableFocusTrap])

  // Calculate modal size
  let minWidth, maxWidth
  if (typeof size === 'number') {
    minWidth = size
    maxWidth = size
  }

  // Modal size classes
  const sizeClass = classNames({
    [JY]: size === 'small',
    [ew]: size === 'fitContent',
    [Gx]: size === 'mobile',
    [R7]: !size || size === 'medium' || typeof size === 'number',
  })

  // Modal background classes
  const backgroundClass = classNames(K1, backgroundClassName, Dm, {
    [Y0]: tintedModalBackground,
    [CY]: fixedTop,
    [Xt]: alignment === 'left',
    [Ir]: alignment === 'right',
    [L4]: alignment === 'leftNoPadding',
  })

  // Modal container classes
  const containerClass = classNames(sizeClass, className, {
    [yl]: useModalViewScroll,
    [Er]: !useModalViewScroll,
    [KJ]: !!absolutePosition,
    [HY]: animateIn,
    [pN]: noPadding,
  })

  // Modal style
  const modalStyle = {
    minWidth,
    maxWidth,
    height,
    maxHeight,
    width,
    padding,
    ...(absolutePosition
      ? {
        top: absolutePosition.top,
        left: absolutePosition.left,
      }
      : {}),
  }

  return jsx('div', {
    'tabIndex': 0,
    'className': backgroundClass,
    'onMouseDown': handleBackgroundMouseDown,
    'onKeyDown': handleKeyDown,
    'ref': backgroundRef,
    'data-testid': 'modal-background',
    'children': jsxs('div', {
      'className': containerClass,
      'style': modalStyle,
      'onMouseDown': handleModalMouseDown,
      'onClick': handleModalClick,
      'ref': modalRef,
      'role': 'dialog',
      'aria-modal': 'true',
      'data-testid': rest['data-testid'],
      'children': [
        title
        && jsx('div', {
          className: `${DD} ${titleClassName || ''}`,
          children: title,
        }),
        children,
      ],
    }),
  })
}

/**
 * ModalContainer component ($$A0)
 * Wraps ModalView and handles modal stack/hide logic and analytics tracking.
 */
export function ModalContainer(props) {
  const dispatch = useDispatch()
  const { onHide, popStack, ...rest } = props
  const { name, properties } = useTracking()
  const fileKey = properties?.fileKey
  const productType = properties?.productType

  // Handles modal hide and analytics
  const handleHide = useCallback(
    (source) => {
      if (popStack) {
        dispatch(popModalStack())
      }
      else {
        dispatch(hideModal())
      }
      onHide && onHide()
      trackEventAnalytics('Modal Close', {
        source,
        trackingContext: name,
        fileKey,
        productType,
      })
    },
    [dispatch, fileKey, name, onHide, popStack, productType],
  )

  return jsx(ModalView, {
    ...rest,
    hide: handleHide,
  })
}

// Playback handler stub (x)
const playbackHandlerStub = {
  playback: () => ({
    preventDefault: () => { },
  }),
}

/**
 * ConfirmationModal component ($$N2)
 * Renders a confirmation modal with cancel/confirm actions and loading state.
 */
export function ConfirmationModal2(props) {
  const {
    recordingKey = '',
    destructive = false,
    autoFocusCta = true,
    dontClose,
    popStack,
    onCloseButtonClick,
    hideOnConfirm,
    onConfirm,
    hideOnCancel,
    onCancel,
    size,
    className,
    overrideOnHide,
    hideClose,
    closeClass,
    hideConfirmationTitle,
    titleClass,
    confirmationTitle,
    children,
    content,
    helperTextClass,
    helperText,
    hideCancel,
    cancelText,
    isLoading,
    trackedConfirmationProperties,
    loadingText,
    disableConfirm,
    confirmText,
    bottomWarningText,
    ...rest
  } = props

  const dispatch = useDispatch()

  // Handles modal close
  const handleClose = useCallback(() => {
    if (!dontClose) {
      if (popStack) {
        dispatch(popModalStack())
      }
      else {
        dispatch(hideModal())
      }
    }
  }, [dispatch, dontClose, popStack])

  // Handles close button click
  const handleCloseButtonClick = useCallback(() => {
    handleClose()
    onCloseButtonClick?.()
  }, [handleClose, onCloseButtonClick])

  // Mouse event handler for close button
  const closeButtonHandler = useHandleMouseEvent(
    recordingKey,
    'click',
    handleCloseButtonClick,
  )

  // Handles confirm action
  const handleConfirm = useCallback(
    (e) => {
      e.preventDefault()
      if (hideOnConfirm ?? true)
        handleClose()
      onConfirm()
    },
    [handleClose, hideOnConfirm, onConfirm],
  )

  // Playback handler for confirm
  const confirmPlaybackHandler = useSetupPlayback(
    recordingKey,
    'confirm',
    handleConfirm,
    playbackHandlerStub,
  )

  // Handles cancel action
  const handleCancel = useCallback(
    (e) => {
      e.preventDefault()
      if (hideOnCancel ?? true)
        handleClose()
      onCancel?.()
    },
    [handleClose, hideOnCancel, onCancel],
  )

  // Playback handler for cancel
  const cancelPlaybackHandler = useSetupPlayback(
    recordingKey,
    'cancel',
    handleCancel,
    playbackHandlerStub,
  )

  // Choose button type
  const ConfirmButton
    = destructive ? ButtonNegativeTracked : ButtonBasePrimaryTracked

  // Show close button
  const showCloseButton = !(dontClose || hideClose)

  return jsxs(ModalContainer, {
    size: size || 'small',
    ...rest,
    className: className || yl,
    onHide: overrideOnHide ?? onCancel,
    children: [
      showCloseButton
      && jsx(i0, {
        ...rest,
        className: closeClass,
        onClick: closeButtonHandler,
      }),
      jsxs(TabLoop, {
        displayAs: TabLoopDisplayAs.Block,
        children: [
          !hideConfirmationTitle
          && jsx('div', {
            className: titleClass ?? DD,
            children: jsxs('h2', {
              children: [
                ' ',
                confirmationTitle ?? renderI18nText('modal.are_you_sure'),
              ],
            }),
          }),
          children || jsx('div', {
            className: jE,
            children: content,
          }),
          jsxs('div', {
            className: v0,
            children: [
              jsx('div', {
                className: helperTextClass ?? _f,
                children: helperText,
              }),
              !hideCancel
              && jsx(ButtonSecondaryTracked, {
                onClick: cancelPlaybackHandler,
                autoFocus: !!autoFocusCta && destructive,
                children: cancelText ?? renderI18nText('modal.cancel'),
              }),
              isLoading
                ? jsxs(ConfirmButton, {
                  dataTestId: 'confirmation-modal-confirm-action-button',
                  tabIndex: 0,
                  type: 'submit',
                  className: LO,
                  disabled: true,
                  trackingProperties: trackedConfirmationProperties || {},
                  children: [
                    jsx(LoadingSpinner, {
                      size: 'small',
                      className: loadingText ? FQ : u1,
                    }),
                    loadingText,
                  ],
                })
                : jsx('form', {
                  onSubmit: confirmPlaybackHandler,
                  children: jsx(ConfirmButton, {
                    dataTestId: 'confirmation-modal-confirm-action-button',
                    tabIndex: 0,
                    type: 'submit',
                    className: pL,
                    disabled: disableConfirm,
                    autoFocus: !!autoFocusCta && !destructive,
                    trackingProperties: trackedConfirmationProperties || {},
                    children: confirmText,
                  }),
                }),
            ],
          }),
          bottomWarningText
          && jsxs('div', {
            className: $$,
            children: [
              jsx(Icon1, {
                icon: 'warning-32',
              }),
              bottomWarningText,
            ],
          }),
        ],
      }),
    ],
  })
}

// Export refactored names for imports
export const d_ = ModalContainer
export const ey = ModalView
export const yX = ConfirmationModal2
