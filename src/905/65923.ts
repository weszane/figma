import { forwardRef } from "react"
import { jsx } from "react/jsx-runtime"
import { ButtonPrimitive } from "../905/632989"

export interface PopupButtonPrimitiveProps {
  "htmlAttributes"?: React.HTMLAttributes<HTMLButtonElement>
  'aria-expanded'?: boolean
  [key: string]: any
}

export const PopupButtonPrimitive = forwardRef<HTMLButtonElement, PopupButtonPrimitiveProps>(({
  htmlAttributes,
  'aria-expanded': ariaExpanded = false,
  ...restProps
}, ref) => {
  return jsx(ButtonPrimitive, {
    ref,
    htmlAttributes,
    ...restProps,
    'aria-expanded': ariaExpanded,
    "type": 'button',
  })
})

PopupButtonPrimitive.displayName = 'PopupButtonPrimitive'

/**
 * Alias for PopupButtonPrimitive component
 */
export const u = PopupButtonPrimitive
