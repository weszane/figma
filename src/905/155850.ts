import { LivestoreBinding, LivestoreManager } from '../905/113138'
import { setupRealtimeSubscription } from '../905/118283'
import { fileEntityModel } from '../905/806985'
import { fileApiHandler } from '../figma_app/787550'

/**
 * Creates a LivestoreBinding for 'FILE' entity.
 * Original variable: $$o1
 */
export const liveStoreFileBinding = new LivestoreBinding('FILE').binding

/**
 * Sets up a LivestoreManager for file entities.
 * @param fileKey - The key of the file to manage.
 * @param getSubscription - Function returning subscription info.
 * @returns LivestoreManager instance for the file.
 * Original function: $$l0
 */
export function setupFileLivestoreManager(fileKey: any, getSubscription: () => any) {
  return new LivestoreManager(
    fileKey,
    'fileByKey',
    liveStoreFileBinding,
    fileEntityModel,
    async key => (await fileApiHandler.getMeta({ fileKey: key })).data.meta,
    setupRealtimeSubscription(getSubscription(), 'file'),
  )
}

export const M = setupFileLivestoreManager
export const N = liveStoreFileBinding
