import { forwardRef } from "react"
import { jsx } from "react/jsx-runtime"
import { s as _$$s } from "../905/536340"
import { defaultComponentAttribute } from "../905/577641"
// Refactored Label and Legend Primitives with improved readability and type safety
export interface PrimitiveProps extends React.HTMLAttributes<HTMLElement> {
  htmlAttributes?: React.HTMLAttributes<HTMLElement>
}

// Label Primitive Component
export const LabelPrimitive = forwardRef<HTMLLabelElement, PrimitiveProps>(({
  htmlAttributes,
  ...props
}, ref) =>
  jsx("label", {
    ...props,
    ...htmlAttributes,
    ...defaultComponentAttribute,
    ref,
  }),
)
LabelPrimitive.displayName = "LabelPrimitive"

// Hidden Label Primitive Component
export const HiddenLabelPrimitive = forwardRef<HTMLLabelElement>((props, ref) =>
  jsx(LabelPrimitive, {
    ...props,
    className: _$$s,
    ref,
  }),
)
HiddenLabelPrimitive.displayName = "HiddenLabelPrimitive"

// Legend Primitive Component
export const LegendPrimitive = forwardRef<HTMLLegendElement, PrimitiveProps>(({
  htmlAttributes,
  ...props
}, ref) =>
  jsx("legend", {
    ...defaultComponentAttribute,
    ...htmlAttributes,
    ...props,
    ref,
  }),
)
LegendPrimitive.displayName = "LegendPrimitive"

// Hidden Legend Primitive Component
export const HiddenLegendPrimitive = forwardRef<HTMLLegendElement>((props, ref) =>
  jsx(LegendPrimitive, {
    ...props,
    className: _$$s,
    ref,
  }),
)
HiddenLegendPrimitive.displayName = "HiddenLegendPrimitive"

// Export aliases for backward compatibility
export const Ay = LabelPrimitive
export const BQ = LegendPrimitive
export const TD = HiddenLegendPrimitive
export const q9 = HiddenLabelPrimitive
