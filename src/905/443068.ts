import classNames from 'classnames'
import { forwardRef } from 'react'
import { jsx } from 'react/jsx-runtime'
import { ButtonPrimitive } from '../905/632989'

let o = {
  ghost: 'icon-button__ghost__1ok6j',
  secondary: 'icon-button__secondary__-jfOG',
  primaryCircle: 'icon-button__primaryCircle__lapkn',
}
/**
 * Props for IconButton component (original: IconButton)
 */
export interface IconButtonProps {
  children: React.ReactNode
  variant?: keyof typeof o
  htmlAttributes?: Record<string, any>
  size?: 'md' | 'lg'
  [key: string]: any
}

/**
 * IconButton component (original: IconButton)
 */
export let IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({
  children: e,
  variant: t = 'ghost',
  htmlAttributes: i = {},
  size: r = 'md',
  ...l
}, d) => {
  let c = l['aria-label']
  'data-tooltip' in l ? c = l['data-tooltip'] : 'data-tooltip' in i && (c = i['data-tooltip'])
  let u = l['data-tooltip-type'] || i['data-tooltip-type'] || 'text'
  return jsx(ButtonPrimitive, {
    ...l,
    ref: d,
    htmlAttributes: {
      ...i,
      'data-tooltip': c,
      'data-tooltip-type': u,
    },
    className: classNames('icon-button__iconButton__CTj-- base-icon-button__baseIconButton__TXKzr', o[t], {
      'icon-button__largeSize__jKNM1': r === 'lg',
    }),
    children: jsx('span', {
      'aria-hidden': !0,
      'className': 'icon-button__icon__r6zr3 base-icon-button__icon__FIIFq',
      'children': e,
    }),
  })
})
IconButton.displayName = 'IconButton'
export const K = IconButton
