import { useEffect } from "react"
import { useSelector } from "react-redux"
import { jsx, jsxs } from "react/jsx-runtime"
import { getI18nString } from "../905/303541"
import { AlertState } from "../905/638715"
import { WAFImage } from "../905/675859"
import { xEX } from "../figma_app/27776"
import { buildUploadUrl } from "../figma_app/169182"
import { DesignGraphElements } from "../figma_app/763686"
import { parsePxInt } from "../figma_app/783094"
import { useIsMouseInViewport } from "../figma_app/824081"
import { useMousePositionTracker } from "../figma_app/943271"
/**
 * Cursor type enumeration for different tool states
 * Original: $$g0
 */
export enum CursorType {
  NONE = 0,
  EYEDROPPER = 1,
  CHAT = 2,
  HIGH_FIVE = 3,
}

/**
 * CSS class name for hiding cursor
 * Original: m
 */
const HIDE_CURSOR_CLASS = "fake_cursor--hideCursor--CUrrB"

/**
 * Mapping of design graph elements to their corresponding image hashes
 * Original: f
 */
const CURSOR_IMAGE_HASHES = {
  [DesignGraphElements.SELECT]: "aed6896e6ad35977610fc23bb6590c1484d3ee01",
  [DesignGraphElements.HAND]: "aebe1073b0b9e7ca3907e21cc08ee416d86520c4",
  [DesignGraphElements.DROPPER_COLOR]: "3a904092ca690b41c06a24b8e2dddb724a992c94",
}

/**
 * Parsed pixel value for UI offset calculations
 * Original: E
 */
const UI_OFFSET_PX = parsePxInt(xEX)

/**
 * Hook to manage cursor visibility by adding/removing CSS class
 * Original: $$y4
 * @param shouldHideCursor - Whether to hide the cursor
 */
export function useCursorVisibility(shouldHideCursor: boolean): void {
  useEffect(() => {
    if (shouldHideCursor) {
      document.body.classList.add(HIDE_CURSOR_CLASS)
    }
    else {
      document.body.classList.remove(HIDE_CURSOR_CLASS)
    }

    return () => document.body.classList.remove(HIDE_CURSOR_CLASS)
  }, [shouldHideCursor])
}

/**
 * Interface for cursor container component props
 */
interface CursorContainerProps {
  position: { x: number, y: number }
  currentToolForCursor: DesignGraphElements
  children?: React.ReactNode
  hidden: boolean
}

/**
 * Container component for custom cursor with position and visibility
 * Original: $$b1
 * @param props - Cursor container props
 */
export function CursorContainer(props: CursorContainerProps) {
  const { position, currentToolForCursor, children, hidden } = props

  useCursorVisibility(!hidden)

  const isDowntimeActive = useSelector((state: any) =>
    state.downtime.status === AlertState.Ongoing
    || state.downtime.status === AlertState.Imminent
    || state.showingDowntimeBanner,
  )

  const yOffset = isDowntimeActive ? UI_OFFSET_PX : 0
  const xPosition = position.x
  const yPosition = position.y - yOffset

  const containerStyle = {
    willChange: "transform",
    transform: `translate3D(${xPosition}px, ${yPosition}px, 0)`,
    opacity: hidden ? 0 : 1,
  }

  return jsxs("div", {
    style: containerStyle,
    className: "fake_cursor--container--FpLnk",
    children: [
      jsx(CursorIcon, { currentToolForCursor }),
      children,
    ],
  })
}

/**
 * Interface for cursor tracker component props
 */
interface CursorTrackerProps {
  currentToolForCursor: DesignGraphElements
  children?: React.ReactNode
}

/**
 * Component that tracks mouse position and renders cursor
 * Original: $$T2
 * @param props - Cursor tracker props
 */
export function CursorTracker(props: CursorTrackerProps) {
  const mousePosition = useMousePositionTracker({
    subscribeToUpdates_EXPENSIVE: true,
  })
  const isMouseInViewport = useIsMouseInViewport()

  if (!mousePosition) {
    return null
  }

  return jsx(CursorContainer, {
    ...props,
    position: mousePosition,
    hidden: !isMouseInViewport,
  })
}

/**
 * Gets localized string for cursor alt text based on tool type
 * Original: I
 * @param toolType - The current tool type
 * @returns Localized cursor description
 */
function getCursorAltText(toolType: DesignGraphElements): string {
  switch (toolType) {
    case DesignGraphElements.SELECT:
      return getI18nString("fake_cursor.select_cursor")
    case DesignGraphElements.HAND:
      return getI18nString("fake_cursor.hand_cursor")
    case DesignGraphElements.DROPPER_COLOR:
      return getI18nString("fake_cursor.eyedropper_cursor")
    default:
      return getI18nString("fake_cursor.cursor")
  }
}

/**
 * Interface for cursor icon component props
 */
interface CursorIconProps {
  currentToolForCursor: DesignGraphElements
}

/**
 * Renders the appropriate cursor icon based on current tool
 * Original: $$S3
 * @param props - Cursor icon props
 */
export function CursorIcon({ currentToolForCursor }: CursorIconProps) {
  let cursorClassName = "fake_cursor--handCursor--3jlcf fake_cursor--cursor--xDDWs"

  if (currentToolForCursor === DesignGraphElements.SELECT) {
    cursorClassName = "fake_cursor--selectCursorUI3--FjJsi fake_cursor--cursor--xDDWs"
  }
  else if (currentToolForCursor === DesignGraphElements.DROPPER_COLOR) {
    cursorClassName = "fake_cursor--eyedropperCursor--uXak0 fake_cursor--cursor--xDDWs"
  }

  const imageHash = CURSOR_IMAGE_HASHES[currentToolForCursor]

  if (!imageHash) {
    return null
  }

  return jsx(WAFImage, {
    className: cursorClassName,
    src: buildUploadUrl(imageHash),
    alt: getCursorAltText(currentToolForCursor),
  })
}

// Named exports with original names for backward compatibility
export const mZ = CursorType
export const ix = CursorContainer
export const AS = CursorTracker
export const fA = CursorIcon
export const Gz = useCursorVisibility
