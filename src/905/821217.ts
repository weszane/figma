import { jsx } from 'react/jsx-runtime'
import { defaultComponentAttribute } from '../905/577641'

/**
 * Stops event propagation.
 * @param event - The event object.
 */
const stopPropagationHandler = (event: React.SyntheticEvent) => event.stopPropagation()

/**
 * Generates event listener props that stop propagation for specified events.
 * @param eventNames - Array of event names.
 * @returns Object mapping event names to stopPropagationHandler.
 */
function createEventListeners(eventNames: string[]): Record<string, (event: React.SyntheticEvent) => void> {
  const listeners: Record<string, (event: React.SyntheticEvent) => void> = {}
  for (const name of eventNames) {
    listeners[name] = stopPropagationHandler
  }
  return listeners
}

/**
 * EventShield component prevents event propagation for specified events.
 * @param props - Component props.
 * @param props.display - CSS display property for the shield.
 * @param props.eventListeners - Array of event names to shield.
 * @param props.htmlAttributes - Additional HTML attributes.
 * @returns React element.
 */
export function EventShield({
  display = 'block',
  eventListeners = [],
  htmlAttributes = {},
  ...rest
}: {
  display?: string
  eventListeners?: string[]
  htmlAttributes?: React.HTMLAttributes<HTMLDivElement>
  [key: string]: any
}) {
  // createEventListeners replaces original inline function logic
  const listeners = createEventListeners(eventListeners)

  return jsx('div', {
    ...listeners,
    ...htmlAttributes,
    ...rest,
    ...defaultComponentAttribute,
    style: {
      display,
    },
  })
}
EventShield.displayName = 'EventShield'

/** Exported alias for EventShield (original: o) */
export const o = EventShield
