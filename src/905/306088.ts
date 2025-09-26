import { Children, cloneElement } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { KeyCodes } from '../905/63728'
import { KindEnum } from '../905/129884'
import { handleMouseEvent, RecordingComponent, RecordingPureComponent } from '../figma_app/878298'

export class $$l0 extends RecordingComponent {
  render() {
    return jsx('div', {
      'className': `${this.props.isHorizontal ? 'radio--horizontalRadioGroup--YtVoa' : 'radio--radioGroup--AnkmY'} ${this.props.className || ''}`,
      'role': 'radiogroup',
      'data-testid': this.props.dataTestId,
      'children': Children.map(this.props.children, e => e?.type === $$d1
        ? cloneElement(e, {
            _isChecked: this.props.value === e.props.value,
            _onChange: this.props.onChange,
          })
        : e),
    })
  }
}
$$l0.displayName = 'RadioGroup'
export class $$d1 extends RecordingPureComponent {
  constructor() {
    super(...arguments)
    this.documentKeyDown = (e) => {
      this.props._onChange && (e.keyCode === KeyCodes.SPACE || e.keyCode === KeyCodes.ENTER) && this.props._onChange(this.props.value)
    }
    this.onClick = handleMouseEvent(this, 'click', () => {
      this.props._onChange && !this.props.disabled && this.props._onChange(this.props.value)
    })
  }

  render() {
    let e = this.props.disabled ? 'radio--labelDisabled--lIJQQ radio--label--wzl7r' : 'radio--label--wzl7r'
    this.props.labelClassName && (e += ` ${this.props.labelClassName}`)
    let t = this.props._isChecked ? 'radio--iconChecked--R-eCa radio--icon---zaTQ' : 'radio--icon---zaTQ'
    this.props.iconClassName && (t += ` ${this.props.iconClassName}`)
    this.props.disabled && (t += ' radio--iconDisabled--fmY5f')
    let i = this.props.tooltipText
      ? {
          'data-tooltip-type': KindEnum.TEXT,
          'data-tooltip': this.props.tooltipText,
          'data-tooltip-show-below': !0,
          'data-tooltip-timeout-delay': 50,
          'data-tooltip-max-width': 220,
        }
      : {}
    return jsxs('div', {
      'className': `radio--radioOption--IE2UQ ${this.props.className || ''}`,
      'onClick': this.onClick,
      'role': 'radio',
      'aria-checked': this.props._isChecked,
      'data-testid': this.props.dataTestId,
      'data-onboarding-key': this.props.dataOnboardingKey,
      'children': [jsx('div', {
        className: t,
        tabIndex: this.props.disabled ? -1 : this.props.tabIndex ?? 0,
        onFocus: () => {
          document.addEventListener('keydown', this.documentKeyDown)
        },
        onBlur: () => {
          document.removeEventListener('keydown', this.documentKeyDown)
        },
      }), jsx('div', {
        ...i,
        className: e,
        children: this.props.children,
      })],
    })
  }
}
$$d1.displayName = 'RadioOption'
export const z = $$l0
export const Z = $$d1
