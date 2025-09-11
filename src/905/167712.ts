import classNames from 'classnames'
import { forwardRef, useId } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'

import { Label } from '../905/270045'
import { CheckboxPrimitive } from '../905/549791'
import { defaultComponentAttribute } from '../905/577641'

/**
 * CSS class names for ToggleButton (original: u, p, m, h, g, $$f, _, A, n)
 */
const TOGGLE_INPUT_CLASS = 'toggle-button__input__NF3YA'
const TOGGLE_LABEL_CLASS = 'toggle-button__label__NRP2k'
const TOGGLE_PRIMARY_CLASS = 'toggle-button__primary__M0VC3'
const TOGGLE_HIGHLIGHTED_CLASS = 'toggle-button__highlighted__E7ou-'
const TOGGLE_BUTTON_CLASS = 'toggle-button__toggleButton__opcx3 base-icon-button__baseIconButton__TXKzr'
const TOGGLE_ICON_CLASS = 'toggle-button__icon__CTqXa base-icon-button__icon__FIIFq'
const TOGGLE_SIZE_LG_CLASS = 'toggle-button__sizeLg__-UK3Y'

/**
 * Size mapping for ToggleButton (original: A)
 */
const TOGGLE_SIZE_MAP: Record<'md' | 'lg', string | undefined> = {
  md: undefined,
  lg: TOGGLE_SIZE_LG_CLASS,
}

/**
 * Class name mapping for ToggleButton (original: n)
 */
const TOGGLE_CLASS_MAP = {
  highlighted: TOGGLE_HIGHLIGHTED_CLASS,
  icon: TOGGLE_ICON_CLASS,
  input: TOGGLE_INPUT_CLASS,
  label: TOGGLE_LABEL_CLASS,
  primary: TOGGLE_PRIMARY_CLASS,
  sizeLg: TOGGLE_SIZE_LG_CLASS,
  toggleButton: TOGGLE_BUTTON_CLASS,
}

export interface ToggleButtonProps extends React.ComponentProps<typeof CheckboxPrimitive> {
  'onIcon': React.ReactNode
  'offIcon': React.ReactNode
  'aria-label': string
  'variant'?: keyof typeof TOGGLE_CLASS_MAP
  'htmlAttributes'?: React.HTMLAttributes<HTMLElement>
  'size'?: keyof typeof TOGGLE_SIZE_MAP
}

/**
 * ToggleButton component (original: ToggleButton)
 * Renders a toggle button with icons and label.
 */
export const setupToggleButton = forwardRef<HTMLSpanElement, ToggleButtonProps>((
  {
    onIcon,
    offIcon,
    'aria-label': ariaLabel,
    variant = 'primary',
    htmlAttributes,
    size = 'md',
    ...checkboxProps
  },
  ref,
) => {
  const id = useId()
  const Icon = checkboxProps.checked && !checkboxProps.mixed ? onIcon : offIcon

  return jsxs('span', {
    ...defaultComponentAttribute,
    'data-disabled': !!checkboxProps.disabled || undefined,
    'className': classNames(TOGGLE_BUTTON_CLASS, TOGGLE_SIZE_MAP[size]),
    'children': [
      jsx(CheckboxPrimitive, {
        'className': classNames(TOGGLE_INPUT_CLASS, TOGGLE_CLASS_MAP[variant]),
        id,
        htmlAttributes,
        ...checkboxProps,
        'data-tooltip': ariaLabel,
        'data-tooltip-type': 'text',
        'data-tooltip-shortcut-key': checkboxProps?.['data-tooltip-shortcut-key'] ?? htmlAttributes?.['data-tooltip-shortcut-key'],
        ref,
      }),
      jsxs(Label, {
        htmlFor: id,
        className: TOGGLE_LABEL_CLASS,
        children: [
          jsx('span', {
            className: 'utils__srOnly__kNoua',
            children: ariaLabel,
          }),
          jsx('span', {
            'aria-hidden': true,
            'className': TOGGLE_ICON_CLASS,
            'children': Icon,
          }),
        ],
      }),
    ],
  })
})
setupToggleButton.displayName = 'ToggleButton'

/** Exported ToggleButton (original: f) */
export const f = setupToggleButton
