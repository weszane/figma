import { forwardRef, useLayoutEffect, useState } from "react"
import { jsx } from "react/jsx-runtime"
import { defaultComponentAttribute } from "../905/577641"

export interface AnnouncementPrimitiveProps {
  /**
   * The content to be announced
   */
  children: React.ReactNode
  /**
   * The ARIA role for the announcement element
   * @default "status"
   */
  role?: string
  /**
   * Additional HTML attributes to apply to the announcement element
   */
  htmlAttributes?: React.HTMLAttributes<HTMLDivElement>
  /**
   * Additional props to spread onto the announcement element
   */
  [key: string]: any
}

/**
 * AnnouncementPrimitive - A component that renders announcements with accessibility support
 * Original code: AnnouncementPrimitive
 */
export const AnnouncementPrimitive = forwardRef<HTMLDivElement, AnnouncementPrimitiveProps>(({
  children,
  role = "status",
  htmlAttributes,
  ...restProps
}, ref) => {
  const [isInitialRender, setIsInitialRender] = useState<boolean>(true)

  useLayoutEffect(() => {
    // Set to false after initial render to allow children to be displayed
    setIsInitialRender(false)
  }, [])

  return jsx("div", {
    ref,
    ...htmlAttributes,
    ...defaultComponentAttribute,
    ...restProps,
    role,
    children: isInitialRender ? undefined : children,
  })
})

AnnouncementPrimitive.displayName = "AnnouncementPrimitive"

/**
 * T - Alias for AnnouncementPrimitive component
 * Original code: T
 */
export const T = AnnouncementPrimitive
