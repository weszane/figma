import classNames from "classnames"
import { forwardRef } from "react"
import { jsx } from "react/jsx-runtime"
import { PopupButtonPrimitive } from "../905/65923"

import { dialogTriggerButton, icon, lg } from "../905/820710"

interface DialogTriggerButtonProps {
  "children": React.ReactNode
  "size"?: 'md' | 'lg'
  "variant"?: string
  "htmlAttributes"?: React.HTMLAttributes<HTMLButtonElement>
  'aria-label'?: string
  'aria-haspopup'?: string
}

const SIZE_CLASSNAMES = {
  md: undefined,
  lg,
} as const

/**
 * DialogTriggerButton - A button component that triggers a dialog popup
 * Original component name: DialogTriggerButton
 */
export const DialogTriggerButton = forwardRef<HTMLButtonElement, DialogTriggerButtonProps>(({
  children,
  size = "md",
  variant = "ghost",
  htmlAttributes,
  ...restProps
}, ref) => {
  // Merge tooltip attributes with provided HTML attributes
  const mergedHtmlAttributes = {
    ...htmlAttributes,
    "data-tooltip": htmlAttributes?.["data-tooltip"] ?? restProps["aria-label"],
    "data-tooltip-type": htmlAttributes?.["data-tooltip-type"] ?? "text",
  }

  // Determine aria-haspopup value, defaulting to "dialog"
  const ariaHasPopup = "aria-haspopup" in restProps ? restProps["aria-haspopup"] : "dialog"

  return jsx(PopupButtonPrimitive, {
    ...restProps,
    "ref": ref,
    "htmlAttributes": mergedHtmlAttributes,
    "aria-haspopup": ariaHasPopup,
    "className": classNames(dialogTriggerButton, SIZE_CLASSNAMES[size], variant),
    "children": jsx("span", {
      "className": icon,
      "aria-hidden": true,
      "children": children,
    }),
  })
})

DialogTriggerButton.displayName = "DialogTriggerButton"

export const d = DialogTriggerButton
