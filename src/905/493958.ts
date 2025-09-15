import { LivestoreBinding, LivestoreManager } from '../905/113138'
import { setupRealtimeSubscription } from '../905/118283'
import { FolderSchema } from '../905/316062'
import { folderAPIInstance } from '../905/522628'
/**
 * LivestoreBinding for folders.
 * Original variable: $$o0
 */
export const folderLivestoreBinding = new LivestoreBinding('FOLDER').binding

/**
 * Sets up a LivestoreManager for folders.
 * Original variable: $$l1
 * @param id - The folder ID.
 * @param getRealtimeSubscription - Function to get the realtime subscription.
 * @returns LivestoreManager instance for folders.
 */
export function setupFolderLivestoreManager(id: any, getRealtimeSubscription: () => any) {
  return new LivestoreManager(
    id,
    'folders',
    folderLivestoreBinding,
    FolderSchema,
    async folderId => (await folderAPIInstance.getFolder({ folderId })).data.meta,
    setupRealtimeSubscription(getRealtimeSubscription(), 'folder'),
  )
}

// Refactored exports for clarity and maintainability
export const N = folderLivestoreBinding
export const Y = setupFolderLivestoreManager
