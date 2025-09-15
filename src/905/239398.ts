import { LivestoreBinding, LivestoreManager } from '../905/113138'
import { setupRealtimeSubscription } from '../905/118283'
import { repositoryDefinition } from '../905/954314'

/**
 * Livestore binding for repositories.
 * Original variable: $$s0
 */
export const liveStoreRepoBinding = new LivestoreBinding('REPO').binding

/**
 * Creates a LivestoreManager for repositories.
 * Original function: $$o1
 * @param e - The repository entity
 * @param t - Function returning the subscription context
 * @returns LivestoreManager instance
 */
export function createRepoManager(e: any, t: () => any): LivestoreManager {
  return new LivestoreManager(
    e,
    'repos',
    liveStoreRepoBinding,
    repositoryDefinition,
    () => {
      throw new Error('Not implemented')
    },
    setupRealtimeSubscription(t(), 'repo'),
  )
}

export const N = liveStoreRepoBinding
export const T = createRepoManager
