import classNames from 'classnames'
import React, { Component } from 'react'
import { useDispatch } from 'react-redux'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import { CloseButton } from '../905/17223'
import { KeyCodes } from '../905/63728'
import { popModalStack } from '../905/156213'
import { getI18nString } from '../905/303541'
import { CY, EJ, EO, eo, fp, hS, JF, Jg, jT, K1, nd, P9, qG, R2, Rh, SM, TX, UR, Vw, Wc, x7, xR, Y5, yl, zB } from '../905/634218'
import { SvgComponent } from '../905/714743'
import { cssBuilderInstance } from '../cssbuilder/589278'
import { Dm } from '../figma_app/8833'
import { ButtonBasePrimaryTracked, ButtonNegativeTracked, ButtonSecondaryTracked } from '../figma_app/637027'
import { shouldHandleMultiTouchOrPressure } from '../figma_app/753501'
import { generateRecordingKey } from '../figma_app/878298'


export interface HeaderModalProps {
  disableClickOutsideToHide?: boolean
  onClose?: (event: React.MouseEvent | React.KeyboardEvent) => void
  onBackgroundMouseDown?: (event: React.MouseEvent) => void
  closeOnEsc?: boolean
  closeOnEnter?: boolean
  focus?: boolean
  fixedTop?: boolean
  fixedCenter?: boolean
  fixedTopDynamic?: boolean
  transparentBackground?: boolean
  maxWidth?: number
  minWidth?: number
  paddingLeft?: number
  paddingRight?: number
  bottomSection?: React.ReactNode
  containerClassName?: string
  allowScroll?: boolean
  innerContainerClassName?: string
  closeTrackingText?: string
  containerRef?: React.Ref<HTMLDivElement>
  customButton?: React.ReactNode
  disableHeaderBottomBorder?: boolean
  headerClassName?: string
  headerSize?: 'large' | 'hidden' | 'default'
  isCloseHidden?: boolean
  onMouseDown?: (event: React.MouseEvent) => void
  title?: string | React.ReactNode | ((closeButton: React.ReactNode, props: { titleId: string }) => React.ReactNode)
  titleIconSvgSrc?: string
  titleIconURL?: string
  titleId: string
  truncateTitleText?: boolean
  children?: React.ReactNode
  onClick?: (event: React.MouseEvent) => void
  dataTestId?: string
}

export class HeaderModal extends Component<HeaderModalProps> {
  static displayName = 'HeaderModal'
  backgroundRef: React.RefObject<HTMLDivElement>

  constructor(props: HeaderModalProps) {
    super(props)
    this.backgroundRef = React.createRef()
  }

  componentDidMount(): void {
    // Focus the background element if needed
    if (this.backgroundRef.current
      && !this.backgroundRef.current.contains(document.activeElement)
      && (this.props.closeOnEsc || this.props.focus)) {
      this.backgroundRef.current.focus()
    }
  }

  handleBackgroundMouseDown = (event: React.MouseEvent): void => {
    if (!this.props.disableClickOutsideToHide && this.props.onClose) {
      this.props.onClose(event)
    }
    if (this.props.onBackgroundMouseDown) {
      this.props.onBackgroundMouseDown(event)
    }
  }

  handleModalMouseDown = (event: React.MouseEvent): void => {
    event.stopPropagation()
  }

  handleKeyDown = (event: React.KeyboardEvent): void => {
    event.stopPropagation()

    if (event.keyCode === KeyCodes.ESCAPE
      && (!this.props.disableClickOutsideToHide || this.props.closeOnEsc)
      && this.props.onClose) {
      this.props.onClose(event)
    }

    if (event.keyCode === KeyCodes.ENTER
      && this.props.closeOnEnter
      && this.props.onClose) {
      this.props.onClose(event)
    }
  }

  render() {
    const modalClasses = classNames(K1, Dm, {
      [CY]: this.props.fixedTop,
      [Y5]: this.props.fixedCenter,
      [zB]: this.props.fixedTopDynamic,
      [Vw]: this.props.transparentBackground,
    })

    let maxWidth = this.props.maxWidth || 492
    let minWidth = this.props.minWidth || 348

    // Ensure maxWidth is not less than minWidth
    if (maxWidth < minWidth) {
      maxWidth = 492
      minWidth = 348
    }

    const paddingLeft = this.props.paddingLeft || 0
    const paddingRight = this.props.paddingRight || 0
    const hasBottomSection = !!this.props.bottomSection

    return jsx('div', {
      tabIndex: 0,
      className: modalClasses,
      onPointerDown: this.handleBackgroundMouseDown,
      onKeyDown: this.handleKeyDown,
      onClick: this.props.onClick,
      ref: this.backgroundRef,
      children: jsx('div', {
        'className': classNames(hasBottomSection ? jT : yl, this.props.containerClassName, {
          [P9]: this.props.allowScroll,
        }),
        'style': {
          maxWidth,
          minWidth,
          paddingLeft,
          paddingRight,
        },
        'onPointerDown': this.handleModalMouseDown,
        'role': 'dialog',
        'data-testid': this.props.dataTestId,
        'aria-labelledby': this.props.titleId,
        'aria-modal': true,
        'children': (() => {
          const headerModalContainer = jsx(HeaderModalContainer, {
            className: this.props.innerContainerClassName,
            closeTrackingText: this.props.closeTrackingText,
            containerRef: this.props.containerRef,
            customButton: this.props.customButton,
            disableHeaderBottomBorder: this.props.disableHeaderBottomBorder,
            headerClassname: this.props.headerClassName || '',
            headerSize: this.props.headerSize,
            isCloseHidden: this.props.isCloseHidden,
            onClose: this.props.onClose,
            onMouseDown: this.handleModalMouseDown,
            title: this.props.title,
            titleIconSvgSrc: this.props.titleIconSvgSrc,
            titleIconURL: this.props.titleIconURL,
            titleId: this.props.titleId,
            truncateTitleText: this.props.truncateTitleText,
            children: this.props.children,
          })

          const bottomSection = hasBottomSection && jsx('div', {
            className: nd,
            onPointerDown: this.handleModalMouseDown,
            children: this.props.bottomSection,
          })

          return hasBottomSection
            ? jsxs(Fragment, {
              children: [
                jsx('div', {
                  className: SM,
                  children: headerModalContainer,
                }),
                bottomSection,
              ],
            })
            : jsx(Fragment, {
              children: headerModalContainer,
            })
        })(),
      }),
    })
  }
}

export interface ConfirmationModalProps {
  destructive?: boolean
  onCancel?: () => void
  hideCancel?: boolean
  cancelText?: string
  confirmText?: string
  onSubmit?: () => void
  onConfirm?: () => void
  maxWidth?: number
  useRedesign?: boolean
  containerClassName?: string
  headerClassName?: string
  fullWidthContent?: boolean
  trackedConfirmationProperties?: Record<string, any>
  disabled?: boolean
  children?: React.ReactNode
  onClose?: () => void
}

export function ConfirmationModal(props: ConfirmationModalProps) {
  const dispatch = useDispatch<AppDispatch>()

  const ButtonComponent = props.destructive ? ButtonNegativeTracked : ButtonBasePrimaryTracked

  const handleCancel = () => {
    if (props.onCancel) {
      props.onCancel()
      return
    }
    dispatch(popModalStack())
  }

  const buttons = jsxs(Fragment, {
    children: [
      !props.hideCancel && jsx(ButtonSecondaryTracked, {
        innerText: props.cancelText || getI18nString('general.cancel'),
        onClick: handleCancel,
        className: x7,
        children: props.cancelText || getI18nString('general.cancel'),
      }),
      jsx(ButtonComponent, {
        innerText: props.confirmText || getI18nString('general.okay'),
        onClick: (event: React.MouseEvent) => {
          event.preventDefault()
          if (props.onSubmit) {
            props.onSubmit()
            return
          }
          dispatch(popModalStack())
          if (props.onConfirm) {
            props.onConfirm()
          }
        },
        className: EJ,
        trackingProperties: props.trackedConfirmationProperties || {},
        disabled: props.disabled,
        children: props.confirmText || getI18nString('general.okay'),
      }),
    ],
  })

  return jsx(HeaderModal, {
    maxWidth: props.maxWidth || 344,
    minWidth: 344,
    fixedTop: true,
    onClose: handleCancel,
    ...props,
    containerClassName: props.useRedesign ? classNames(props.containerClassName, EO) : undefined,
    headerClassName: props.useRedesign ? classNames(cssBuilderInstance.textBodyLargeStrong.pb4.pt4.$, props.headerClassName) : undefined,
    children: props.useRedesign
      ? jsxs('div', {
        className: cssBuilderInstance.flex.flexColumn.$,
        children: [
          jsx('div', {
            className: cssBuilderInstance.if(!props.fullWidthContent, cssBuilderInstance.p16).flex.flexColumn.$,
            children: props.children,
          }),
          jsx('div', {
            className: cssBuilderInstance.flex.justifyEnd.p16.bt1.colorBorder.bSolid.$,
            children: buttons,
          }),
        ],
      })
      : jsxs('div', {
        className: UR,
        children: [
          jsx('div', {
            className: xR,
            children: props.children,
          }),
          jsx('div', {
            className: qG,
            children: buttons,
          }),
        ],
      }),
  })
}

HeaderModal.displayName = 'HeaderModal'

export interface HeaderModalContainerProps {
  'headerSize'?: 'large' | 'hidden' | 'default'
  'headerClassname'?: string
  'stickyHeader'?: boolean
  'disableHeaderBottomBorder'?: boolean
  'className'?: string
  'containerRef'?: React.Ref<HTMLDivElement>
  'aria-modal'?: boolean
  'onClose'?: () => void
  'onMouseDown'?: (event: React.MouseEvent) => void
  'closeTrackingText'?: string
  'closeButtonClassName'?: string
  'title'?: string | React.ReactNode | ((closeButton: React.ReactNode, props: { titleId: string }) => React.ReactNode)
  'titleIconSvgSrc'?: string
  'titleIconURL'?: string
  'titleIconSvgClassName'?: string
  'titleId': string
  'truncateTitleText'?: boolean
  'children'?: React.ReactNode
  'customButton'?: React.ReactNode
  'isCloseHidden'?: boolean
  'onMouseMove'?: (event: React.MouseEvent) => void
}

export class HeaderModalContainer extends Component<HeaderModalContainerProps> {
  static displayName = 'HeaderModalContainer'
  render() {
    const headerClass = (() => {
      switch (this.props.headerSize) {
        case 'large':
          return JF
        case 'hidden':
          return Wc
        default:
          return Rh
      }
    })()

    const headerContainerClasses = classNames(headerClass, this.props.headerClassname, {
      [cssBuilderInstance.sticky.top0.left0.zIndex1.colorBg.$]: this.props.stickyHeader,
      [Jg]: !this.props.disableHeaderBottomBorder,
    })

    const closeButton = jsx(CloseButton, {
      onClick: this.props.onClose,
      onMouseDown: this.props.onMouseDown,
      innerText: this.props.closeTrackingText || 'Close',
      className: this.props.closeButtonClassName,
      recordingKey: generateRecordingKey(this.props, 'headerModalContainer'),
      dataTestId: `${generateRecordingKey(this.props, 'headerModalContainer')}.close-button`,
    })

    const shouldHandlePressure = shouldHandleMultiTouchOrPressure()

    return jsxs('div', {
      'className': `${this.props.className || ''}`,
      'ref': this.props.containerRef,
      'aria-modal': this.props['aria-modal'],
      'children': [
        jsxs('div', {
          className: headerContainerClasses,
          onPointerMove: shouldHandlePressure ? this.props.onMouseMove : undefined,
          onMouseMove: shouldHandlePressure ? undefined : this.props.onMouseMove,
          children: [
            this.props.titleIconURL && jsx('div', {
              className: eo,
              children: jsx('img', {
                src: this.props.titleIconURL,
                alt: '',
              }),
            }),
            this.props.titleIconSvgSrc && jsx('div', {
              className: fp,
              children: jsx(SvgComponent, {
                svg: this.props.titleIconSvgSrc,
                className: this.props.titleIconSvgClassName,
              }),
            }),
            typeof this.props.title === 'function'
              ? this.props.title(closeButton, {
                titleId: this.props.titleId,
              })
              : jsxs(Fragment, {
                children: [
                  typeof this.props.title === 'string'
                    ? jsx(TitleElement, {
                      title: this.props.title,
                      titleId: this.props.titleId,
                      truncateTitleText: this.props.truncateTitleText,
                    })
                    : this.props.title,
                  jsxs('div', {
                    className: hS,
                    children: [
                      this.props.customButton,
                      !this.props.isCloseHidden && closeButton,
                    ],
                  }),
                ],
              }),
          ],
        }),
        this.props.children,
      ],
    })
  }
}

interface TitleElementProps {
  title: string
  titleId: string
  truncateTitleText?: boolean
}

function TitleElement(props: TitleElementProps) {
  return jsx('h1', {
    id: props.titleId,
    className: props.truncateTitleText ? TX : R2,
    children: props.title,
  })
}

HeaderModalContainer.displayName = 'HeaderModalContainer'

// Export aliases for backward compatibility
export const Dd = ConfirmationModal
export const OJ = HeaderModal
export const ZD = HeaderModalContainer
