import { LivestoreBinding, LivestoreManager } from '../905/113138'
import { setupRealtimeSubscription } from '../905/118283'
import { teamAPIClient } from '../905/834575'
import { TeamSchema } from '../figma_app/630077'

// Original variable: $$o0
// Binding for TEAM from LivestoreBinding
export const teamLivestoreBinding = new LivestoreBinding('TEAM').binding

/**
 * Original function: $$l1
 * Creates a LivestoreManager for team data with real-time subscription.
 * @param store - The store instance (e.g., Livestore store).
 * @param subscriptionFactory - A function that returns the subscription context.
 * @returns A new LivestoreManager instance.
 */
export function createTeamManager(store: any, subscriptionFactory: () => any) {
  return new LivestoreManager(
    store,
    'teams',
    teamLivestoreBinding,
    TeamSchema,
    async (teamId: string) => ((await teamAPIClient.getTeam({ teamId })).data as any).meta,
    setupRealtimeSubscription(subscriptionFactory(), 'team'),
  )
}

// Original export: N = $$o0
export const N = teamLivestoreBinding
// Original export: p = $$l1
export const p = createTeamManager
