// Original code from /Users/allen/github/fig/src/905/337355.ts

const USER_EVENT = '@@userEvent'

/**
 * Builds a state machine from the provided configuration.
 * @param config - The state machine configuration object.
 * @returns An object representing the state machine with methods to check states and transitions.
 */
export function buildStateMachine(config: any) {
  const states = new Map()
  const transitions = new Map()

  for (const { id, ...state } of config.states) {
    if (states.has(id)) {
      throw new Error(`Duplicate state ID ${id.toString()} found when building state machine`)
    }
    states.set(id, state)

    if (state.transitions == null) {
      continue
    }

    const eventMap = new Map()
    transitions.set(id, eventMap)

    for (const { event, ...transition } of state.transitions) {
      let eventTransitions = eventMap.get(event)
      if (eventTransitions == null) {
        eventTransitions = []
        eventMap.set(event, eventTransitions)
      }
      eventTransitions.push(transition)
    }
  }

  return {
    config,
    isComplete(stateId: any) {
      const state = states.get(stateId)
      return state?.terminal ?? false
    },
    isInitial: (stateId: any) => stateId === config.initial,
    start: () => config.initial,
    transition(currentState: any, event: any) {
      const eventTransitions = transitions.get(currentState)?.get(event.id)
      if (eventTransitions == null) {
        return null
      }
      for (const transition of eventTransitions) {
        if (transition.condition == null || transition.condition({
          from: currentState,
          to: transition.target,
          event,
        })) {
          return transition.target
        }
      }
      return null
    },
  }
}

/**
 * Extracts user events from the state machine configuration.
 * @param stateMachine - The state machine object returned by buildStateMachine.
 * @returns A set of user event types.
 */
export function getUserEvents(stateMachine: any) {
  const userEvents = new Set()
  for (const state of stateMachine.config.states) {
    if (state.transitions != null) {
      for (const transition of state.transitions) {
        if (transition.event === USER_EVENT && transition.meta?.userEvents != null) {
          transition.meta.userEvents.forEach((event: any) => userEvents.add(event))
        }
      }
    }
  }
  return userEvents
}

/**
 * Creates a transition object for user events.
 * @param events - A string or array of event types.
 * @param target - The target state ID.
 * @param options - Optional configuration for the transition.
 * @returns A transition object.
 */
export function createUserEventTransition(events: string | string[], target: any, options?: any) {
  const eventSet = new Set(typeof events === 'string' ? [events] : events)
  const meta = {
    userEvents: [...eventSet],
  }
  const event = USER_EVENT
  const condition = (context: any) => eventSet.has(context.event.type) && (options?.condition?.(context) ?? true)

  return {
    event,
    target,
    condition,
    meta,
  }
}

// Aliases for backward compatibility (original exports: Op, gV, nr)
export const Op = buildStateMachine
export const gV = getUserEvents
export const nr = createUserEventTransition
