import { buildStateMachine, createUserEventTransition } from '../905/337355'
// Original export: $$r0
// Original export: R

/**
 * Creates a state machine for the onboarding process.
 * @param e - The entity object containing an id property.
 * @returns The built state machine.
 */
export function createOnboardingStateMachine(e: { id: string }) {
  return buildStateMachine({
    initial: 'await_reset',
    states: [
      {
        id: 'await_reset',
        transitions: [createUserEventTransition('Reset Onboarding', 'reset')],
      },
      {
        id: 'reset',
        transitions: [
          createUserEventTransition('curator_content_shown', 'await_reset', {
            condition: ({ event: t }) => t.properties.shown === e.id,
          }),
        ],
      },
    ],
  })
}

// Original export: R (aliased to $$r0)
export const R = createOnboardingStateMachine
