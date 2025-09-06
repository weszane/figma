import { createReduxSubscriptionAtomWithState } from '../905/270322'

export const selectTeams = (state: any) => state.teams
/**
 * Selector function to extract 'teams' from the state.
 * (Original: $$r0)
 */
export const P = selectTeams

export const teamsAtom = createReduxSubscriptionAtomWithState(selectTeams)
/**
 * Atom for subscribing to the 'teams' slice of the Redux state.
 * (Original: $$a1)
 */
export const m = teamsAtom 
