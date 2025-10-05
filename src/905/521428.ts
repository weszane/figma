import type { ReactNode } from 'react'
import classNames from 'classnames'
import { forwardRef } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { button, buttonContent, buttonText, hasIcon, icon, shortcut } from '../905/608793'
import { ButtonPrimitive } from '../905/632989'

// Original: function d (Button.Icon)
interface ButtonIconProps {
  children: ReactNode
}

/**
 * ButtonIcon component - renders an icon within a button.
 * Original name: d (Button.Icon)
 */
function ButtonIcon({ children }: ButtonIconProps) {
  return jsx('span', {
    'aria-hidden': true,
    'className': icon,
    'children': children,
  })
}

ButtonIcon.displayName = 'Button.Icon'

// Original: function c (Button.Shortcut)
interface ButtonShortcutProps {
  [key: string]: any
}

/**
 * ButtonShortcut component - renders a shortcut within a button.
 * Original name: c (Button.Shortcut)
 */
function ButtonShortcut(props: ButtonShortcutProps) {
  return jsx('span', {
    className: shortcut,
    ...props,
  })
}

ButtonShortcut.displayName = 'Button.Shortcut'

// Original: let u (Button.Link)
interface ButtonLinkProps {
  className?: string
  [key: string]: any
}

/**
 * ButtonLink component - a link-styled button.
 * Original name: u (Button.Link)
 */
const ButtonLink = forwardRef<HTMLButtonElement, ButtonLinkProps>(({
  className,
  ...props
}, ref) => {
  return jsx(ButtonPrimitive, {
    ref,
    className: classNames('link__link__n7llU', className),
    ...props,
  })
})

ButtonLink.displayName = 'Button.Link'

// Original: function p (button factory)
interface ButtonVariantProps {
  children: ReactNode
  iconPrefix?: ReactNode
  variant?: string
  [key: string]: any
}

/**
 * Creates a button variant component.
 * Original name: p
 */
function createButtonVariant(displayName: string, _sizeClass?: string) {
  const ButtonVariant = forwardRef<HTMLButtonElement, ButtonVariantProps>(({
    children,
    iconPrefix,
    variant = 'primary',
    ...props
  }, ref) => {
    return jsx(ButtonPrimitive, {
      className: classNames(button),
      ...props,
      ref,
      children: jsxs('span', {
        className: classNames(buttonText, !!iconPrefix && hasIcon),
        children: [
          iconPrefix && jsx(ButtonIcon, { children: iconPrefix }),
          jsx('span', {
            className: buttonContent,
            children,
          }),
        ],
      }),
    })
  })

  ButtonVariant.displayName = displayName
  return ButtonVariant
}

// Original: let $$m0 (Button with Icon, Shortcut, Link)
export const Button = Object.assign(createButtonVariant('Button', 'regularSize'), {
  Icon: ButtonIcon,
  Shortcut: ButtonShortcut,
  Link: ButtonLink,
})

// Original: let $$h3 (ButtonLarge with Icon)
export const ButtonLarge = Object.assign(createButtonVariant('ButtonLarge', 'largeSize'), {
  Icon: ButtonIcon,
})

// Original: let $$g1 (ButtonWide with Icon)
export const ButtonWide = Object.assign(createButtonVariant('ButtonWide', 'wideSize'), {
  Icon: ButtonIcon,
})

// Original: let $$f2 (ButtonLargeWide with Icon)
export const ButtonLargeWide = Object.assign(createButtonVariant('ButtonLargeWide', 'largeWideSize'), {
  Icon: ButtonIcon,
})

// Exports remain the same to maintain compatibility
export const $n = Button
export const IK = ButtonWide
export const Pw = ButtonLargeWide
export const WW = ButtonLarge
