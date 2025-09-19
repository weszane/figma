import classNames from 'classnames'
import { forwardRef } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { n as _$$n } from '../905/198890'
import { button, buttonContent, buttonText, hasIcon, icon, largeSize, largeWideSize, primary, regularSize, wideSize } from '../905/608793'

import { LinkPrimitive } from '../figma_app/496441'

/**
 * Props for LinkButton component (original: LinkButton)
 */
interface LinkButtonProps {
  children: React.ReactNode
  htmlAttributes?: React.HTMLAttributes<HTMLAnchorElement>
  iconPrefix?: React.ReactNode
  variant?: 'primary' | string
  size?: 'md' | 'lg' | string
  width?: 'hug' | 'wide' | string
  [key: string]: any // Allow additional props
}

/**
 * LinkButton component (original: LinkButton)
 */
const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(({
  children,
  htmlAttributes,
  iconPrefix,
  variant = 'primary',
  size = 'md',
  width = 'hug',
  ...rest
}, ref) => {
  const buttonSize = size === 'md'
    ? width === 'hug' ? regularSize : wideSize
    : width === 'hug' ? largeSize : largeWideSize

  return jsx(LinkPrimitive, {
    ...htmlAttributes,
    ...rest,
    ref,
    'data-show-focus': true,
    'className': classNames('link-button__link__zeZSY', button, primary, buttonSize, {
      [hasIcon]: !!iconPrefix,
    }),
    'children': jsxs('span', {
      className: buttonText,
      children: [
        iconPrefix && jsx(IconWrapper, {
          children: iconPrefix,
        }),
        jsx('span', {
          className: buttonContent,
          children,
        }),
      ],
    }),
  })
})

function IconWrapper({
  children,
}) {
  return jsx('span', {
    'aria-hidden': true,
    'className': icon,
    children,
  })
}

LinkButton.displayName = 'LinkButton'

export const Link = Object.assign(forwardRef((props, ref) => jsx(LinkPrimitive, {
  ...props,
  ref,
  className: _$$n,
})), {
  Button: LinkButton,
})

Link.displayName = 'Link'

export const N = Link
