import { useMemo } from 'react'
import { checkFileCmsCollections } from '../905/47975'
import { toCollectionSummary } from '../905/148729'
import { getCollectionView } from '../905/707993'
import { WB } from '../905/761735'
import { setupCollectionSummary } from '../905/880040'
import { collectionService } from '../figma_app/872077'
/**
 * Types for collection operations
 */
export interface Collection {
  databaseId: string
  [key: string]: any
}

export interface CollectionViewResult {
  collection: any
  status: string
}

export interface CollectionSummaryResult {
  collections: any
  status: string
}

/**
 * Returns collection view status and data.
 * @param collectionStableId - The stable ID of the collection.
 * @returns Memoized status and collection data.
 * (Original: $$c5)
 */
export function getCollectionViewStatus(collectionStableId: string) {
  const { collection, status }: CollectionViewResult = getCollectionView({ collectionStableId })
  return useMemo(() => ({
    status,
    data: collection,
  }), [collection, status])
}

/**
 * Checks if a file has a CMS collection.
 * @param fileKey - The file key.
 * @returns Boolean indicating presence of collection.
 * (Original: $$u4)
 */
export function hasCmsCollection(fileKey: string): boolean {
  const { hasCollection } = checkFileCmsCollections({ fileKey })
  return hasCollection ?? false
}

/**
 * Returns collection summary status and data.
 * @param fileKey - The file key.
 * @returns Memoized status and collections data.
 * (Original: $$p2)
 */
export function getCollectionSummaryStatus(fileKey: string) {
  const { collections, status }: CollectionSummaryResult = setupCollectionSummary({ fileKey })
  return useMemo(() => ({
    status,
    data: collections,
  }), [collections, status])
}

/**
 * Creates a new collection optimistically and returns its summary.
 * @param collectionData - Data for the new collection.
 * @returns Collection summary.
 * (Original: $$_0)
 */
export function createCollectionOptimistically(collectionData: any) {
  return WB()
    .optimisticallyCreate({}, collectionService.createCollection(collectionData))
    .then(res => res.data.meta)
    .then(toCollectionSummary)
}

/**
 * Renames a collection optimistically.
 * @param params - Collection and new name.
 * @returns Updated collection meta.
 * (Original: $$h3)
 */
export function renameCollectionOptimistically({
  collection,
  name,
}: {
  collection: Collection
  name: string
}) {
  const updatePayload = {
    CollectionV2: {
      [collection.databaseId]: {
        name,
        updatedAt: new Date(),
      },
    },
  }
  return WB()
    .optimisticallyUpdate(updatePayload, collectionService.renameCollection({ collection, name }))
    .then(res => res.data.meta)
}

/**
 * Deletes a collection optimistically.
 * @param params - Collection to delete.
 * @returns Promise for deletion.
 * (Original: $$m1)
 */
export function deleteCollectionOptimistically({
  collection,
}: {
  collection: Collection
}) {
  const databaseId = collection.databaseId
  return WB().optimisticallyDelete(
    {
      CollectionV2: {
        [databaseId]: null,
      },
    },
    collectionService.deleteCollection({ collection }),
  )
}

// Exported aliases for backward compatibility
export const Qw = createCollectionOptimistically
export const Tx = deleteCollectionOptimistically
export const c$ = getCollectionSummaryStatus
export const c5 = renameCollectionOptimistically
export const fk = hasCmsCollection
export const gL = getCollectionViewStatus
