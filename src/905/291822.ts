import { useCallback, useEffect, useState } from 'react'

/**
 * InteractionStateProps - Defines the possible states for interaction.
 */
export interface InteractionStateProps {
  pressed: string
  hover: string
  $$default: string
}

/**
 * useInteractionState - Custom hook to manage interaction states (hover, pressed).
 * @param states - Object containing pressed, hover, and default states.
 * @returns An object with the current state and pointer event handlers.
 */
export function useInteractionState(states: InteractionStateProps) {
  // State for hover, pressed, and pointer entered
  const [isHovered, setHovered] = useState(false)
  const [isPressed, setPressed] = useState(false)
  const [isPointerEntered, setPointerEntered] = useState(false)

  // Handler for mouseup event to reset pressed and pointer entered states
  const handleMouseUp = useCallback(() => {
    if (isPointerEntered) {
      setPointerEntered(false)
      setPressed(false)
    }
  }, [isPointerEntered])

  // Effect to add/remove mouseup event listener
  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp)
    return () => {
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [handleMouseUp])

  // Determine the current interaction state
  const currentState = isPressed
    ? states.pressed
    : isHovered
      ? states.hover
      : states.$$default

  // Pointer event handlers
  const handlers = {
    /**
     * onPointerEnter - Sets hover and pointer entered states to true.
     */
    onPointerEnter: () => {
      setHovered(true)
      setPointerEntered(true)
    },
    /**
     * onPointerLeave - Sets hover state to false.
     */
    onPointerLeave: () => {
      setHovered(false)
    },
    /**
     * onPointerDown - Sets pressed state to true and stops event propagation.
     * @param event - Pointer event.
     */
    onPointerDown: (event: React.PointerEvent) => {
      setPressed(true)
      event.stopPropagation()
    },
    /**
     * onPointerUp - Sets pressed state to false.
     */
    onPointerUp: () => {
      setPressed(false)
    },
  }

  return {
    state: currentState,
    handlers,
  }
}
