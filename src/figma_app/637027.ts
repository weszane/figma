import classNames from 'classnames'
import { Component, forwardRef, PureComponent } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { KeyCodes } from '../905/63728'
import { KindEnum } from '../905/129884'
import { _d, _Z, d1, dQ, dy, Eg, FO, fY, G, GC, HI, HM, hP, hz, I2, Ij, Iw, ki, kv, ky, MH, oC, OK, OY, Pf, QC, rd, ri, sY, X7, xJ, xZ, yT, z3, zi } from '../905/190597'
import { handleUrlAction } from '../905/280005'
import { LazyInputForwardRef } from '../905/408237'
import { l as Icon1 } from '../905/479687'
import { BaseLinkComponent } from '../905/551536'
import { SvgComponent } from '../905/714743'
import { A as SVG } from '../5724/663128'
import { s as _$$s } from '../cssbuilder/589278'
import { PopulationStatus } from '../figma_app/314264'
import { withTrackedClick, withTrackedInput } from '../figma_app/831799'
import { handleMouseEvent, handlePointerEvent, RecordingComponent } from '../figma_app/878298'

/**
 * Stores a callback for keydown events in ButtonBase.
 * @see setButtonBaseKeyDownCallback
 */
let buttonBaseKeyDownCallback: ((e: any) => any) | null = null

/**
 * Sets the keydown callback for ButtonBase.
 * @param e - The callback function.
 * @see setButtonBaseKeyDownCallback
 */
export function setButtonBaseKeyDownCallback(e: (event: any) => any) {
  buttonBaseKeyDownCallback = e
}

/**
 * Renders a div with optional reversed styling.
 * @param e - Props for the component.
 * @see ButtonBaseReversedContainer
 */
export function ButtonBaseReversedContainer(e: { reversed?: boolean, className?: string, children?: React.ReactNode }) {
  return jsx('div', {
    className: classNames(GC, e.reversed && zi, e.className),
    children: e.children,
  })
}
interface ButtonProps {
  className?: string
  children?: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  onPointerDown?: (e: React.PointerEvent<HTMLButtonElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void
  recordingKey?: string
  forwardedRef?: React.Ref<HTMLButtonElement>
  defaultClass?: string
  dataTestId?: string
  refer?: any
  fullWidth?: boolean
}


/**
 * Base button component with recording and event handling.
 * @see ButtonBase
 */
/**
 * Props for ButtonBase component.
 * @see ButtonBaseProps
 */
export interface ButtonBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  forwardedRef?: React.Ref<HTMLButtonElement>
  defaultClass?: string
  recordingKey?: string
  dataTestId?: string
}

/**
 * ButtonBase component with recording and event handling.
 * @see ButtonBase
 */
export class ButtonBase extends RecordingComponent<ButtonBaseProps> {
  static displayName = 'ButtonBase'

  /**
   * Handles keydown events, including ESCAPE key blur.
   * @see ButtonBase.onKeyDown
   */
  onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void

  /**
   * Handles click events with recording.
   * @see ButtonBase.onClick
   */
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void

  /**
   * Handles pointer down events with recording.
   * @see ButtonBase.onPointerDown
   */
  onPointerDown: (e: React.PointerEvent<HTMLButtonElement>) => void

  constructor(props: ButtonBaseProps) {
    super(props)
    this.onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (buttonBaseKeyDownCallback?.(e)) {
        return
      }
      this.props.onKeyDown?.(e)
      if (e.keyCode === KeyCodes.ESCAPE) {
        (e.target as HTMLButtonElement).blur()
      }
    }
    this.onClick = handleMouseEvent(this, 'click', (e: React.MouseEvent<HTMLButtonElement>) => {
      this.props.onClick?.(e)
    })
    this.onPointerDown = handlePointerEvent(this, 'pointerdown', (e: React.PointerEvent<HTMLButtonElement>) => {
      this.props.onPointerDown?.(e)
    })
  }

  /**
   * Renders the button element.
   */
  render() {
    const {
      forwardedRef,
      ...restProps
    } = this.props
    const className = `${this.props.defaultClass ?? ''} ${this.props.className ?? ''}`.trim()
    const dataTestId = this.props.dataTestId

    // Remove internal props before passing to button
    const t: Omit<ButtonBaseProps, 'defaultClass' | 'recordingKey' | 'dataTestId'> = { ...restProps }
    delete (t as any).defaultClass
    delete (t as any).recordingKey
    delete (t as any).dataTestId

    if (this.props.onClick && this.props.recordingKey) {
      t.onClick = this.onClick
    }
    if (this.props.onPointerDown && this.props.recordingKey) {
      t.onPointerDown = this.onPointerDown
    }

    return jsx('button', {
      'ref': forwardedRef,
      'onKeyDown': this.onKeyDown,
      ...t,
      className,
      'data-testid': dataTestId,
      'children': this.props.children,
    })
  }
}
ButtonBase.displayName = 'ButtonBase'

/**
 * Props for ButtonBasePrimary component.
 * @see ButtonBasePrimary
 */
export interface ButtonBasePrimaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean
}

/**
 * ForwardRef wrapper for ButtonBase with fullWidth support.
 * @see ButtonBasePrimary
 */
export const ButtonBasePrimary = forwardRef<HTMLButtonElement, ButtonBasePrimaryProps>(({
  fullWidth,
  ...props
}, ref) => {
  return jsx(ButtonBase, {
    forwardedRef: ref,
    defaultClass: classNames(xZ, fullWidth && Ij),
    ...props,
  })
})

/**
 * ButtonBasePrimary with tracked click.
 * @see ButtonBasePrimaryTracked
 */
export const ButtonBasePrimaryTracked = withTrackedClick(ButtonBasePrimary)

/**
 * Props for BigButtonPrimary component.
 * @see BigButtonPrimary
 */
export interface BigButtonPrimaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean
}

/**
 * Primary big button component.
 * @see BigButtonPrimary
 */
export class BigButtonPrimary extends Component<BigButtonPrimaryProps> {
  static displayName = 'BigButtonPrimary'
  /**
   * Renders the primary big button.
   */
  render() {
    const {
      fullWidth,
      ...t
    } = this.props
    return jsx(ButtonBase, {
      defaultClass: classNames(fY, fullWidth && Ij),
      ...t,
    })
  }
}

/**
 * BigButtonPrimary with tracked click.
 * @see BigButtonPrimaryTracked
 */
export const BigButtonPrimaryTracked = withTrackedClick(BigButtonPrimary)

/**
 * Props for ButtonSecondary component.
 * @see ButtonSecondary
 */
export interface ButtonSecondaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * Secondary button component.
 * @see ButtonSecondary
 */
export class ButtonSecondary extends Component<ButtonSecondaryProps> {
  static displayName = 'ButtonSecondary'
  render() {
    return jsx(ButtonBase, {
      defaultClass: HM,
      type: 'button',
      ...this.props,
    })
  }
}

/**
 * ButtonSecondary with tracked click.
 * @see ButtonSecondaryTracked
 */
export const ButtonSecondaryTracked = withTrackedClick(ButtonSecondary)

/**
 * Props for BigButtonSecondary component.
 * @see BigButtonSecondary
 */
export interface BigButtonSecondaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean
}

/**
 * Secondary big button component.
 * @see BigButtonSecondary
 */
export class BigButtonSecondary extends Component<BigButtonSecondaryProps> {
  static displayName = 'BigButtonSecondary'
  render() {
    const {
      fullWidth,
      ...t
    } = this.props
    return jsx(ButtonBase, {
      defaultClass: classNames(xJ, fullWidth && Ij),
      type: 'button',
      ...t,
    })
  }
}

/**
 * BigButtonSecondary with tracked click.
 * @see BigButtonSecondaryTracked
 */
export const BigButtonSecondaryTracked = withTrackedClick(BigButtonSecondary)

/**
 * Secondary negative button component.
 * @see ButtonSecondaryNegative
 */
export class ButtonSecondaryNegative extends Component {
  static displayName = 'ButtonSecondaryNegative'
  render() {
    return jsx(ButtonBase, {
      defaultClass: oC,
      type: 'button',
      ...this.props,
    })
  }
}

/**
 * Negative button component.
 * @see ButtonNegative
 */
export class ButtonNegative extends Component {
  static displayName = 'ButtonNegative'
  render() {
    return jsx(ButtonBase, {
      defaultClass: ky,
      type: 'button',
      ...this.props,
    })
  }
}

/**
 * ButtonNegative with tracked click.
 * @see ButtonNegativeTracked
 */
export const ButtonNegativeTracked = withTrackedClick(ButtonNegative)

/**
 * Big negative button component.
 * @see BigButtonNegative
 */
export class BigButtonNegative extends Component {
  static displayName = 'BigButtonNegative'
  render() {
    return jsx(ButtonBase, {
      defaultClass: OK,
      type: 'button',
      ...this.props,
    })
  }
}

/**
 * White button component.
 * @see ButtonWhite
 */
export class ButtonWhite extends Component {
  staticdisplayName = 'ButtonWhite'
  render() {
    return jsx(ButtonBase, {
      defaultClass: I2,
      ...this.props,
    })
  }
}

/**
 * ButtonWhite with tracked click.
 * @see ButtonWhiteTracked
 */
export const ButtonWhiteTracked = withTrackedClick(ButtonWhite)

/**
 * Inverse button component.
 * @see ButtonInverse
 */
export class ButtonInverse extends Component {
  static displayName = 'ButtonInverse'
  render() {
    return jsx(ButtonBase, {
      defaultClass: rd,
      ...this.props,
    })
  }
}

/**
 * Big inverse button component.
 * @see BigButtonInverse
 */
export class BigButtonInverse extends Component<{ fullWidth?: boolean }> {
  static displayName = 'BigButtonInverse'
  render() {
    let {
      fullWidth,
      ...t
    } = this.props
    return jsx(ButtonBase, {
      defaultClass: classNames(FO, fullWidth && Ij),
      ...t,
    })
  }
}

/**
 * BigButtonInverse with tracked click.
 * @see BigButtonInverseTracked
 */
export const BigButtonInverseTracked = withTrackedClick(BigButtonInverse)

/**
 * Green button component.
 * @see ButtonGreen
 */
export class ButtonGreen extends Component {
  render() {
    return jsx(ButtonBase, {
      defaultClass: OY,
      ...this.props,
    })
  }
}
ButtonGreen.displayName = 'ButtonGreen'

/**
 * Grey button component.
 * @see ButtonGrey
 */
export class ButtonGrey extends Component {
  render() {
    let {
      customClassName,
      ...t
    } = this.props
    return jsx(ButtonBase, {
      defaultClass: Iw,
      className: customClassName,
      ...t,
    })
  }
}
ButtonGrey.displayName = 'ButtonGrey'

withTrackedClick(ButtonGreen)

/**
 * Big green button component.
 * @see BigButtonGreen
 */
export class BigButtonGreen extends Component {
  render() {
    return jsx(ButtonBase, {
      defaultClass: this.props.solidWhenDisabled ? dy : sY,
      ...this.props,
    })
  }
}
BigButtonGreen.displayName = 'BigButtonGreen'

/**
 * Big black button component.
 * @see BigButtonBlack
 */
export class BigButtonBlack extends Component {
  render() {
    return jsx(ButtonBase, {
      defaultClass: yT,
      ...this.props,
    })
  }
}
BigButtonBlack.displayName = 'BigButtonBlack'

withTrackedClick(BigButtonBlack)

/**
 * Link-style button component.
 * @see ButtonLink
 */
export class ButtonLink extends Component<{ className?: string; children?: React.ReactNode }> {
  static displayName = 'ButtonLink'
  render() {
    let e = `${xZ} ${this.props.className || ''}`
    let t = {
      ...this.props,
      className: e,
      rel: 'noopener',
    }
    return jsx('a', {
      ...t,
      children: this.props.children,
    })
  }
}


/**
 * ButtonLink with tracked click.
 * @see ButtonLinkTracked
 */
export const ButtonLinkTracked = withTrackedClick(ButtonLink)

/**
 * Link-style button with fullWidth support.
 * @see $
 */
export class ButtonLinkFullWidth extends Component<ButtonProps> {
  static displayName = 'ButtonLinkFullWidth'
  render() {
    let {
      fullWidth,
      ...rest
    } = this.props
    let r = classNames(fY, this.props.fullWidth && Ij)
    let i = `${r} ${this.props.className || ''}`
    rest = {
      ...rest,
      className: i,
      rel: 'noopener',
    } as any
    return jsx('a', {
      ...rest,
      children: this.props.children,
    })
  }
}


withTrackedClick(ButtonLinkFullWidth)

/**
 * Secondary link-style button component.
 * @see ButtonSecondaryLink
 */
export class ButtonSecondaryLink extends Component<ButtonProps> {
  static displayName = 'ButtonSecondaryLink'
  render() {
    let e = `${HM} ${this.props.className || ''}`
    let t = {
      ...this.props,
      className: e,
      rel: 'noopener',
    }
    return jsx('a', {
      ...t,
      children: this.props.children,
    })
  }
}


/**
 * ButtonSecondaryLink with tracked click.
 * @see ButtonSecondaryLinkTracked
 */
export const ButtonSecondaryLinkTracked = withTrackedClick(ButtonSecondaryLink)

/**
 * Big secondary link-style button component.
 * @see BigButtonSecondaryLink
 */
export class BigButtonSecondaryLink extends Component<ButtonProps> {
  static displayName = 'BigButtonSecondaryLink'
  render() {
    let e = `${hz} ${this.props.className || ''}`
    let t = {
      ...this.props,
      className: e,
      rel: 'noopener',
    }
    return jsx('a', {
      ...t,
      children: this.props.children,
    })
  }
}


/**
 * Constant values for internal use.
 * @see BUTTON_INTERNAL_CONST_Z12, $$Q33
 */
export const BUTTON_INTERNAL_CONST_Z12 = 255
export const BUTTON_INTERNAL_CONST_Q33 = 118

/**
 * ForwardRef wrapper for LazyInputForwardRef with custom className.
 * @see BigTextInputForwardRef
 */
export const BigTextInputForwardRef = forwardRef(({
  className,
  ...props
}: { className?: string } & any, ref) => {
  return jsx(LazyInputForwardRef, {
    className: classNames(_Z, className),
    ...props,
    ref,
  })
})

/**
 * Big text input component.
 * @see BigTextInput
 */
export class BigTextInput extends Component<ButtonProps> {
  static displayName = 'BigTextInput'
  render() {
    let e = `${ki} ${this.props.className || ''}`
    let t = {
      ...this.props,
      className: e,
    }
    return jsx(LazyInputForwardRef, {
      ...t,
    })
  }
}


const TrackedInput = withTrackedInput(LazyInputForwardRef)

/**
 * Enhanced input component with label, error, tooltip, and tracking.
 * @see EnhancedInput
 */
/**
 * Props for EnhancedInput component.
 * @see EnhancedInput
 */
export interface EnhancedInputProps {
  className?: string
  disabled?: boolean
  htmlName?: string
  label?: React.ReactNode
  value?: string
  hasError?: boolean
  trackingFieldName?: string
  autoCompleteName?: string
  dataTestId?: string
  maxLength?: number
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  placeholder?: string
  required?: boolean
  trackingPopulationLevel?: PopulationStatus
  type?: string
  tooltip?: string
}

/**
 * Enhanced input component with label, error, tooltip, and tracking.
 * @see EnhancedInput
 */
export class EnhancedInput extends Component<EnhancedInputProps> {
  render() {
    const {
      className,
      disabled,
      htmlName,
      label,
      value,
      hasError,
      trackingFieldName,
      autoCompleteName,
      dataTestId,
      maxLength,
      onBlur,
      onChange,
      onFocus,
      onKeyPress,
      placeholder,
      required,
      type,
      tooltip,
    } = this.props

    const inputProps = {
      autoComplete: autoCompleteName,
      dataTestId,
      disabled,
      id: htmlName,
      maxLength: maxLength || 50,
      name: htmlName,
      onBlur,
      onChange,
      onFocus,
      onKeyPress,
      placeholder: placeholder || label,
      required,
      type: type || 'text',
      value,
    }

    return jsxs('div', {
      className: className || (disabled ? d1 : ri),
      children: [
        jsx('label', {
          htmlFor: htmlName,
          className: classNames(dQ, {
            [QC]: value,
            [z3]: hasError,
          }),
          children: label,
        }),
        trackingFieldName
          ? jsx(TrackedInput, {
              ...inputProps,
              trackingFieldName,
              trackingPopulationLevel: value ? PopulationStatus.POPULATED_COMPLETE : PopulationStatus.NOT_POPULATED,
            })
          : jsx(LazyInputForwardRef, {
              ...inputProps,
            }),
        tooltip &&
          jsx(SvgComponent, {
            className: G,
            svg: SVG,
            'data-tooltip-type': KindEnum.TEXT,
            'data-tooltip': tooltip,
            'data-tooltip-timeout-delay': 300,
          }),
      ],
    })
  }
}

/**
 * Props for Checkbox component.
 * @see FocusCheckbox
 */
export interface CheckboxProps {
  svgOverride?: React.ReactNode
  classOverride?: string
  checked?: boolean
  className?: string
  [key: string]: any
}

/**
 * State for Checkbox component.
 * @see FocusCheckbox
 */
export interface CheckboxState {
  showFocus: boolean
}

/**
 * Checkbox component with focus management.
 * @see FocusCheckbox
 */
export class FocusCheckbox extends PureComponent<CheckboxProps, CheckboxState> {
  static displayName = 'Checkbox'
  constructor(props: CheckboxProps) {
    super(props)
    /**
     * Handles document keydown to show focus.
     * @see FocusCheckbox.documentKeyDown
     */
    this.documentKeyDown = (e: KeyboardEvent) => {
      e.keyCode === KeyCodes.TAB && this.setState({ showFocus: true })
    }
    /**
     * Handles document mousedown to hide focus.
     * @see FocusCheckbox.documentMouseDown
     */
    this.documentMouseDown = (_e: MouseEvent) => {
      this.setState({ showFocus: false })
    }
    /**
     * Handles input focus event.
     * @see FocusCheckbox.onFocus
     */
    this.onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      this.state.showFocus || e.target.blur()
    }
    /**
     * Computes className for input.
     * @see FocusCheckbox.classNameForInput
     */
    this.classNameForInput = () => {
      let e = `${kv} ${this.props.className || ''}`
      this.state.showFocus && (e += ` ${hP}`)
      return e
    }
    this.state = {
      showFocus: false,
    }
  }

  documentKeyDown: (e: KeyboardEvent) => void
  documentMouseDown: (e: MouseEvent) => void
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void
  classNameForInput: () => string

  componentDidMount() {
    document.addEventListener('keydown', this.documentKeyDown)
    document.addEventListener('mousedown', this.documentMouseDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.documentKeyDown)
    document.removeEventListener('mousedown', this.documentMouseDown)
  }

  render() {
    const {
      svgOverride,
      classOverride,
      checked,
      ...i
    } = this.props
    return jsxs('div', {
      className: HI,
      children: [
        jsx('input', {
          ...i,
          type: 'checkbox',
          onFocus: this.onFocus,
          className: classOverride || this.classNameForInput(),
          checked,
        }),
        checked
          ? jsx('div', {
              className: Eg,
              children: jsx(Icon1, {}),
            })
          : null,
      ],
    })
  }
}



/**
 * Props for createLabel function.
 * @see createLabel
 */
export interface CreateLabelProps {
  className?: string
  [key: string]: any
}

/**
 * Creates a label element with provided props.
 * @see createLabel
 */
export function createLabel(e: CreateLabelProps) {
  let t = `${Pf} ${e.className || ''}`
  return jsx('label', {
    ...e,
    className: t,
  })
}

let clickableBaseLinkTracked = withTrackedClick(BaseLinkComponent)

/**
 * Props for Link component.
 * @see SecureLink
 */
export interface LinkProps {
  canFocus?: boolean
  trusted?: boolean
  className?: string
  href?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  children?: React.ReactNode
  [key: string]: any
}

/**
 * Link component with tracking and URL handling.
 * @see SecureLink
 */
export class SecureLink extends Component<LinkProps> {
 static displayName = 'Link'
  render() {
    const {
      canFocus,
      trusted,
      className,
      ...rest
    } = this.props
    const a = `${MH} ${className || ''}`
    let prop: LinkProps = {
      ...rest,
      className: a,
      rel: trusted ? 'noopener' : 'noopener nofollow noreferrer ugc',
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
        this.props.onClick && this.props.onClick(e)
        this.props.href && handleUrlAction(this.props.href, e)
      },
    }
    if (canFocus) {
      prop = {
        href: '#',
        tabIndex: 0,
        ...prop,
      }
    }
    return jsx('a', {
      ...prop,
      children: this.props.children,
    })
  }
}


export let linkWithTracking = withTrackedClick(SecureLink)

/**
 * Props for BigSelect component.
 * @see BigSelect
 */
export interface BigSelectProps {
  className?: string
  [key: string]: any
}

/**
 * Big select component.
 * @see BigSelect
 */
export class BigSelect extends Component<BigSelectProps> {
  static displayName = 'BigSelect'
  render() {
    const {
      className,
      ...rest
    } = this.props
    const e = `${X7} ${className || ''}`
    const t = {
      ...rest,
      className: e,
    }
    return jsx('select', {
      ...t,
    })
  }
}


/**
 * Props for Spacing function.
 * @see Spacing
 */
export interface SpacingProps {
  multiple?: number
  value?: number
  direction?: 'x' | 'y'
}

/**
 * Spacing component for layout.
 * @see Spacing
 */
export function Spacing(e: SpacingProps) {
  let t = e.multiple ? 8 * e.multiple : e.value ? e.value : 0
  return e.direction === 'x'
    ? jsx('div', {
        style: {
          width: t,
        },
        className: _$$s.flexShrink0.$,
        'aria-hidden': 'true',
      })
    : jsx('div', {
        style: {
          height: t,
        },
        className: _$$s.flexShrink0.$,
        'aria-hidden': 'true',
      })
}
Spacing.displayName = 'Spacing'
let trackedSvgComponent = withTrackedClick(SvgComponent)
let interactiveAnchorTracked = withTrackedClick(e => jsx('a', {
  ...e,
  children: e.children,
}))
let trackedButtonClickHandler = withTrackedClick((e) => {
  return jsx(ButtonBase, {
    defaultClass: classNames(_d, e.className),
    ...e,
  })
})
export const $$ = ButtonBasePrimary
export const $9 = BigButtonSecondaryTracked
export const CY = SecureLink
export const JU = createLabel
export const Kz = Spacing
export const LA = BigButtonInverseTracked
export const Lf = EnhancedInput
export const M7 = ButtonWhiteTracked
export const NY = ButtonSecondaryLinkTracked
export const N_ = BaseLinkComponent
export const Ph = clickableBaseLinkTracked
export const RW = trackedSvgComponent
export const TA = BUTTON_INTERNAL_CONST_Z12
export const Us = linkWithTracking
export const VE = BigSelect
export const Yo = interactiveAnchorTracked
export const cw = ButtonWhite
export const e2 = ButtonBaseReversedContainer
export const eM = trackedButtonClickHandler
export const il = BigTextInput
export const ks = BigTextInputForwardRef
export const nD = BigButtonPrimaryTracked
export const nR = ButtonSecondary
export const ny = setButtonBaseKeyDownCallback
export const qM = ButtonNegativeTracked
export const qZ = ButtonNegative
export const rb = ButtonLinkTracked
export const s6 = ButtonSecondaryNegative
export const tB = FocusCheckbox
export const tM = ButtonSecondaryTracked
export const u4 = ButtonBase
export const vd = ButtonBasePrimaryTracked
export const vv = BigButtonPrimary
export const wG = BUTTON_INTERNAL_CONST_Q33
