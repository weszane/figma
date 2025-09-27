import React, { Children, cloneElement } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { KeyCodes } from '../905/63728'
import { KindEnum } from '../905/129884'
import { handleMouseEvent, RecordingComponent, RecordingPureComponent } from '../figma_app/878298'

// Define interfaces for props to improve type safety
interface RadioGroupProps {
  isHorizontal?: boolean
  className?: string
  dataTestId?: string
  children: React.ReactNode
  value?: any
  onChange?: (value: any) => void
}

interface RadioOptionProps {
  value: any
  _isChecked?: boolean
  _onChange?: (value: any) => void
  disabled?: boolean
  labelClassName?: string
  iconClassName?: string
  tooltipText?: string
  className?: string
  dataTestId?: string
  dataOnboardingKey?: string
  children: React.ReactNode
  tabIndex?: number
}

/**
 * RadioGroup component - original class: RadioGroup
 * Renders a group of radio options with horizontal or vertical layout.
 */
export class RadioGroup extends RecordingComponent<RadioGroupProps> {
  render() {
    const { isHorizontal, className, dataTestId, children, value, onChange } = this.props
    const baseClass = isHorizontal ? 'radio--horizontalRadioGroup--YtVoa' : 'radio--radioGroup--AnkmY'
    const fullClass = `${baseClass} ${className || ''}`

    return jsx('div', {
      'className': fullClass,
      'role': 'radiogroup',
      'data-testid': dataTestId,
      'children': Children.map(children, child =>
        React.isValidElement(child) && child.type === RadioOption
          ? cloneElement(child, {
              _isChecked: value === child.props.value,
              _onChange: onChange,
            })
          : child),
    })
  }

  static displayName = 'RadioGroup'
}

/**
 * RadioOption component - original class: RadioOption
 * Renders an individual radio option with label, icon, and event handling.
 */
export class RadioOption extends RecordingPureComponent<RadioOptionProps> {
  // Extract event handlers as named methods for better readability
  handleDocumentKeyDown = (e: KeyboardEvent) => {
    const { _onChange, value } = this.props
    if (_onChange && (e.keyCode === KeyCodes.SPACE || e.keyCode === KeyCodes.ENTER)) {
      _onChange(value)
    }
  }

  handleClick = handleMouseEvent(this, 'click', () => {
    const { _onChange, disabled, value } = this.props
    if (_onChange && !disabled) {
      _onChange(value)
    }
  })

  // Helper function to build label class name - simplifies render logic
  getLabelClassName = () => {
    const { disabled, labelClassName } = this.props
    let className = disabled ? 'radio--labelDisabled--lIJQQ radio--label--wzl7r' : 'radio--label--wzl7r'
    if (labelClassName) {
      className += ` ${labelClassName}`
    }
    return className
  }

  // Helper function to build icon class name - simplifies render logic
  getIconClassName = () => {
    const { _isChecked, iconClassName, disabled } = this.props
    let className = _isChecked ? 'radio--iconChecked--R-eCa radio--icon---zaTQ' : 'radio--icon---zaTQ'
    if (iconClassName) {
      className += ` ${iconClassName}`
    }
    if (disabled) {
      className += ' radio--iconDisabled--fmY5f'
    }
    return className
  }

  // Helper function to get tooltip props - simplifies render logic
  getTooltipProps = () => {
    const { tooltipText } = this.props
    if (tooltipText) {
      return {
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip': tooltipText,
        'data-tooltip-show-below': true,
        'data-tooltip-timeout-delay': 50,
        'data-tooltip-max-width': 220,
      }
    }
    return {}
  }

  render() {
    const { disabled, className, dataTestId, dataOnboardingKey, children, tabIndex, _isChecked } = this.props
    const labelClass = this.getLabelClassName()
    const iconClass = this.getIconClassName()
    const tooltipProps = this.getTooltipProps()

    return jsxs('div', {
      'className': `radio--radioOption--IE2UQ ${className || ''}`,
      'onClick': this.handleClick,
      'role': 'radio',
      'aria-checked': _isChecked,
      'data-testid': dataTestId,
      'data-onboarding-key': dataOnboardingKey,
      'children': [
        jsx('div', {
          className: iconClass,
          tabIndex: disabled ? -1 : tabIndex ?? 0,
          onFocus: () => {
            document.addEventListener('keydown', this.handleDocumentKeyDown)
          },
          onBlur: () => {
            document.removeEventListener('keydown', this.handleDocumentKeyDown)
          },
        }),
        jsx('div', {
          ...tooltipProps,
          className: labelClass,
          children,
        }),
      ],
    })
  }

  static displayName = 'RadioOption'
}

export const z = RadioGroup
export const Z = RadioOption
