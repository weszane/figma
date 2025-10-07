import classNames from "classnames"
import { forwardRef, memo } from "react"
import { jsx } from "react/jsx-runtime"
import { SvgComponent } from "../905/714743"
import { generateRecordingKey, useHandleMouseEvent } from "../figma_app/878298"

// Original: $$d0
export const DLT_BANNER_SHORTCUT_BUTTON_ID = "dlt_banner_shortcut_button"

// Original: $$c2 - DLT Banner Shortcut Button Component
interface ShortcutButtonProps {
  shortcut: React.ReactNode
  onClick?: () => void
  isActive?: boolean
  recordingKey?: string
  dataElementTarget?: string
  isPressed?: boolean
}

/**
 * A button component for displaying shortcuts in the DLT banner
 * @param props - The shortcut button properties
 * @returns JSX element representing the shortcut button
 */
export const ShortcutButton = memo(forwardRef<HTMLButtonElement, ShortcutButtonProps>((props, ref) => {
  const {
    shortcut,
    onClick,
    isActive,
    recordingKey,
    dataElementTarget,
    isPressed,
  } = props

  const handleClick = useHandleMouseEvent(
    generateRecordingKey("dltBannerShortcutButton", recordingKey),
    "click",
    onClick,
  )

  const buttonClassName = classNames("dlt_banner_inline_elements--shortcutButton--LOMMi", {
    "dlt_banner_inline_elements--active--zWunk": isActive,
    "dlt_banner_inline_elements--pressed--36odr": isPressed,
  })

  return jsx("button", {
    "ref": ref,
    "className": buttonClassName,
    "onClick": handleClick,
    "data-element-target": dataElementTarget,
    "children": shortcut,
  })
}))

// Original: $$u1 - Icon Inline Component
interface IconInlineProps {
  icon: string
}

/**
 * A component for displaying inline icons in the DLT banner
 * @param props - The icon properties
 * @returns JSX element representing the inline icon
 */
export function IconInline({ icon }: IconInlineProps) {
  return jsx("div", {
    className: "dlt_banner_inline_elements--iconInline--0YsSs",
    children: jsx(SvgComponent, {
      svg: icon,
    }),
  })
}

// Export with refactored names
export const UM = DLT_BANNER_SHORTCUT_BUTTON_ID
export const kf = IconInline
export const zW = ShortcutButton
