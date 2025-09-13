import classNames from 'classnames'
import { forwardRef } from 'react'
import { jsx } from 'react/jsx-runtime'
import { I } from '../905/494625'
import { defaultComponentAttribute } from '../905/577641'

// Original export name: $$l0
// Original export name: E

/**
 * ButtonPrimitive component - a primitive button component with forwardRef.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The button content.
 * @param {string} props.className - Additional CSS class names.
 * @param {string} props.type - The button type (default: 'button').
 * @param {object} props.htmlAttributes - Additional HTML attributes.
 * @param {React.Ref} ref - The ref to forward.
 * @returns {JSX.Element} The button element.
 */
const ButtonPrimitive = forwardRef<HTMLButtonElement, {
  children?: React.ReactNode
  className?: string
  type?: string
  htmlAttributes?: Record<string, any>
  [key: string]: any
}>(({
  children,
  className,
  type = 'button',
  htmlAttributes,
  ...rest
}, ref) => {
  // Original variable: c
  const combinedAttributes = I({
    ...htmlAttributes,
    ...rest,
  })

  return jsx('button', {
    ...defaultComponentAttribute,
    ...combinedAttributes,
    ref,
    type,
    'className': classNames('button-reset__buttonReset__zO1D7', className),
    'aria-disabled': rest['aria-disabled'] || rest.disabled || undefined,
    children,
  })
})

ButtonPrimitive.displayName = 'ButtonPrimitive'

export { ButtonPrimitive }
export const E = ButtonPrimitive
