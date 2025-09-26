import { useCallback, useRef } from 'react'
import { isAnyMobile } from '../figma_app/778880'

export interface ClickHandlerProps {
  onClick?: (event: React.MouseEvent) => void
  onMouseDown?: (event: React.MouseEvent) => void
  onMouseUp?: (event: React.MouseEvent) => void
  onMouseLeave?: (event: React.MouseEvent) => void
  isDisabled?: boolean
}

export interface ClickHandlerResult {
  onMouseDown?: (event: React.MouseEvent) => void
  onClick?: (event: React.MouseEvent) => void
  onMouseUp?: (event: React.MouseEvent) => void
  onMouseLeave?: (event: React.MouseEvent) => void
}

/**
 * Custom hook for handling click events with mobile support
 * Refactored from $$a0 function
 */
export function useClickHandler({
  onClick,
  onMouseDown,
  onMouseUp,
  onMouseLeave,
  isDisabled = false,
}: ClickHandlerProps): ClickHandlerResult {
  const isMouseDownRef = useRef(false)
  const isMobileDevice = isAnyMobile

  const handleMouseDown = useCallback((event: React.MouseEvent) => {
    isMouseDownRef.current = true
    if (!isMobileDevice) {
      onClick?.(event)
    }
    onMouseDown?.(event)
  }, [isMobileDevice, onClick, onMouseDown])

  const handleClick = useCallback((event: React.MouseEvent) => {
    if (isMobileDevice || !isMouseDownRef.current) {
      onClick?.(event)
    }
  }, [isMobileDevice, onClick])

  const handleMouseUp = useCallback((event: React.MouseEvent) => {
    isMouseDownRef.current = false
    onMouseUp?.(event)
  }, [onMouseUp])

  const handleMouseLeave = useCallback((event: React.MouseEvent) => {
    isMouseDownRef.current = false
    onMouseLeave?.(event)
  }, [onMouseLeave])

  if (isDisabled) {
    return {
      onMouseLeave: handleMouseLeave,
    }
  }

  return {
    onMouseDown: handleMouseDown,
    onClick: handleClick,
    onMouseUp: handleMouseUp,
    onMouseLeave: handleMouseLeave,
  }
}

export const Q = useClickHandler
