import { jsx } from "react/jsx-runtime"
import { M, W } from "../905/306196"
import { Point } from "../905/736624"
import { getViewportRectWithRuler } from "../figma_app/62612"
/**
 * Viewport container component that renders children within a scrollable viewport
 * Original function: $$o0
 * @param props - Component properties
 * @param props.children - Child elements to render within the viewport
 * @param props.forceNoScroll - Whether to prevent scrolling by resetting scroll position
 * @returns JSX element representing the viewport container
 */
export function ViewportContainer(props: ViewportContainerProps) {
  const viewportRect = getViewportRectWithRuler()
  const scaledPoint = Point.scale(-1, viewportRect)

  return jsx("div", {
    className: M,
    style: {
      top: viewportRect.y,
      left: viewportRect.x,
      height: viewportRect.height,
      width: viewportRect.width,
    },
    onScroll: props.forceNoScroll
      ? (event) => {
          event.currentTarget.scrollLeft = 0
          event.currentTarget.scrollTop = 0
        }
      : undefined,
    children: jsx("div", {
      className: W,
      style: {
        top: scaledPoint.y,
        left: scaledPoint.x,
      },
      children: props.children,
    }),
  })
}

/**
 * Type definition for ViewportContainer component props
 * Original variable: e parameter type
 */
interface ViewportContainerProps {
  children: React.ReactNode
  forceNoScroll?: boolean
}

// Export alias for backward compatibility
// Original export: p = $$o0
export const p = ViewportContainer
