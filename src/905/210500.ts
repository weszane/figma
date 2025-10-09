import { partition } from "lodash-es"
import { createReduxSubscriptionAtomWithState } from "../905/270322"
import { createDeepEqualSelector } from "../905/270781"
import { getFeatureFlags } from "../905/601108"
import { defaultSessionLocalIDString } from "../905/871411"
import { atom } from "../figma_app/27355"
import { StagingStatusEnum } from "../figma_app/633080"
import { isNewOrChangedOrDeleted } from "../figma_app/646357"

// Thumbnail management atoms and selectors
export const thumbnailCacheAtom = atom(new Map())

/**
 * Selector to extract thumbnail information from pages list
 * Original name: m
 */
export const pageThumbnailsSelector = createDeepEqualSelector(
  [state => state.mirror.appModel.pagesList],
  (pages) => {
    const thumbnailsMap = new Map()
    pages.forEach((page) => {
      if (page.thumbnailInfo && page.thumbnailInfo.nodeID !== defaultSessionLocalIDString) {
        thumbnailsMap.set(page.nodeId, {
          ...page.thumbnailInfo,
          pageName: page.name,
          pageId: page.nodeId,
        })
      }
    })
    return thumbnailsMap
  },
)

/**
 * Atom with state subscription for thumbnails
 * Original name: h
 */
export const thumbnailSubscriptionAtom = createReduxSubscriptionAtomWithState(pageThumbnailsSelector)

/**
 * Check if thumbnail data has changed
 * Original name: g
 * @param currentPageThumbnail - Current page thumbnail info
 * @param storedThumbnail - Stored thumbnail info
 * @returns Boolean indicating if thumbnail has changed
 */
export function hasThumbnailChanged(currentPageThumbnail, storedThumbnail) {
  return currentPageThumbnail.nodeID !== storedThumbnail.thumbnailId
    || currentPageThumbnail.thumbnailVersion !== storedThumbnail.content_hash
}

/**
 * Determine staging status of a thumbnail
 * Original name: f
 * @param currentPageThumbnail - Current page thumbnail info
 * @param storedThumbnail - Stored thumbnail info
 * @returns Staging status enum value
 */
export function determineThumbnailStagingStatus(currentPageThumbnail, storedThumbnail) {
  const hasValidCurrentThumbnail = !!currentPageThumbnail && currentPageThumbnail.nodeID !== defaultSessionLocalIDString

  if (storedThumbnail && !hasValidCurrentThumbnail) {
    return StagingStatusEnum.DELETED
  }
  else if (!storedThumbnail && hasValidCurrentThumbnail) {
    return StagingStatusEnum.NEW
  }
  else if (storedThumbnail || hasValidCurrentThumbnail) {
    if (currentPageThumbnail && storedThumbnail && hasThumbnailChanged(currentPageThumbnail, storedThumbnail)) {
      return StagingStatusEnum.CHANGED
    }
    return StagingStatusEnum.CURRENT
  }
  return StagingStatusEnum.NOT_STAGED
}

/**
 * Main atom for thumbnail status computation
 * Original name: $$_0
 */
export const thumbnailStatusAtom = atom((get) => {
  if (!getFeatureFlags().dse_library_pg_thumbnails) {
    return []
  }

  const pageThumbnails = get(thumbnailSubscriptionAtom)
  const cachedThumbnails = get(thumbnailCacheAtom)
  const allThumbnailIds = new Set([...pageThumbnails.keys(), ...cachedThumbnails.keys()])
  const thumbnailStatusList = []

  for (const thumbnailId of allThumbnailIds) {
    const pageThumbnail = pageThumbnails.get(thumbnailId)
    const cachedThumbnail = cachedThumbnails.get(thumbnailId)
    const status = determineThumbnailStagingStatus(pageThumbnail, cachedThumbnail)

    if (pageThumbnail) {
      thumbnailStatusList.push({
        node_id: pageThumbnail.nodeID,
        thumbnailVersion: pageThumbnail.thumbnailVersion,
        status,
        pageID: thumbnailId,
        name: pageThumbnail.pageName,
      })
    }
    else if (cachedThumbnail) {
      thumbnailStatusList.push({
        node_id: cachedThumbnail.thumbnailId,
        thumbnailVersion: cachedThumbnail.content_hash,
        status,
        pageID: thumbnailId,
        name: cachedThumbnail.pageName,
        unpublished_at: cachedThumbnail.unpublished_at,
      })
    }
  }

  thumbnailStatusList.sort((a, b) => a.name.localeCompare(b.name))
  return thumbnailStatusList
})

/**
 * Check if thumbnail status indicates modification
 * Original name: A
 * @param thumbnailStatus - Thumbnail status object
 * @returns Boolean indicating if status is modified
 */
export function isThumbnailModified(thumbnailStatus) {
  return thumbnailStatus.status && isNewOrChangedOrDeleted(thumbnailStatus.status)
}

/**
 * Partition thumbnails into modified and unmodified groups
 * Original name: $$y1
 * @param thumbnails - Array of thumbnail status objects
 * @returns Object with modified and unmodified thumbnail arrays
 */
export function partitionThumbnailsByModification(thumbnails) {
  const [modified, unmodified] = partition(thumbnails, thumbnail => isThumbnailModified(thumbnail))
  return {
    modified,
    unmodified,
  }
}

export const dv = thumbnailStatusAtom
export const tj = partitionThumbnailsByModification
