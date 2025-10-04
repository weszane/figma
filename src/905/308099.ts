import type { ReactNode } from "react"
import { forwardRef } from "react"
import { jsx, jsxs } from "react/jsx-runtime"
import { Description } from "../905/21985"
import { h_, UX, zr } from "../905/434007"

import { ManuallyLabeledRadioOption, ManuallyLabeledRadioRoot } from "../905/618904"
import { useSelectionProvider } from "../905/751750"
import { generateDescId, generateInputId } from "../905/786321"

interface RadioInputRootProps {
  legend?: ReactNode
  children?: ReactNode
  [key: string]: any
}

interface RadioInputOptionProps {
  label?: ReactNode
  children?: ReactNode
  htmlAttributes?: Record<string, any>
  [key: string]: any
}

export const RadioInputRoot = forwardRef<HTMLDivElement, RadioInputRootProps>(({
  legend,
  children,
  ...props
}, ref) => {
  return jsxs(ManuallyLabeledRadioRoot, {
    ref,
    ...props,
    children: [
      legend,
      jsx("div", {
        className: UX,
        children,
      }),
    ],
  })
})
RadioInputRoot.displayName = "RadioInput.Root"

export const RadioInputOption = forwardRef<HTMLInputElement, RadioInputOptionProps>(({
  label,
  children,
  htmlAttributes,
  ...props
}, ref) => {
  const hasDescription = !!children
  const [value, SelectionProvider] = useSelectionProvider()
  const inputId = generateInputId(value)
  const descriptionId = hasDescription ? generateDescId(value) : undefined

  return jsx(SelectionProvider, {
    value,
    children: jsxs("div", {
      className: zr,
      children: [
        jsx(ManuallyLabeledRadioOption, {
          "id": inputId,
          ...props,
          "htmlAttributes": htmlAttributes,
          "aria-describedby": descriptionId,
          "ref": ref,
        }),
        label,
        hasDescription && jsx(Description, {
          className: h_,
          children,
        }),
      ],
    }),
  })
})
RadioInputOption.displayName = "RadioInput.Option"

// Export aliases for backward compatibility
export const b = RadioInputRoot
export const c = RadioInputOption
