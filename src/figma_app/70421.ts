import { isEqual } from "lodash-es";



// Pin visibility states
export enum PinVisibilityState {
  NORMAL = 0,
  ACTIVE = 1,
  DIMMED = 2
}

// Format pin coordinates to a standardized string representation
export function formatPinCoordinates(point: { x: number; y: number }, zoomLevel: number): string {
  const roundedX = 100 * Math.round(point.x / 100)
  const roundedY = 100 * Math.round(point.y / 100)
  return `${roundedX},${roundedY},${zoomLevel}`
}

// Compare two pin collections for equality
export function arePinCollectionsEqual(
  firstCollection: {
    isSinglePin: boolean
    pins: Array<{
      x: number
      y: number
      avatars: any
      previewMessageMeta: any
      isUnread: boolean
      numUnreadReplies: number
      isResolved: boolean
      selectionBoxAnchor: any
      otherBoundingBoxes: any
      isPinnedToFile: any
    }>
    isUnread: boolean
    isPinnedToFile: any
  },
  secondCollection: {
    isSinglePin: boolean
    pins: Array<{
      x: number
      y: number
      avatars: any
      previewMessageMeta: any
      isUnread: boolean
      numUnreadReplies: number
      isResolved: boolean
      selectionBoxAnchor: any
      otherBoundingBoxes: any
      isPinnedToFile: any
    }>
    isUnread: boolean
    isPinnedToFile: any
  }
): boolean {
  // Compare single pin collections
  if (firstCollection.isSinglePin && secondCollection.isSinglePin) {
    const firstPin = firstCollection.pins[0]
    const secondPin = secondCollection.pins[0]

    return !(
      firstPin.x !== secondPin.x ||
      firstPin.y !== secondPin.y ||
      !isEqual(firstPin.avatars, secondPin.avatars) ||
      !isEqual(firstPin.previewMessageMeta, secondPin.previewMessageMeta) ||
      firstPin.isUnread !== secondPin.isUnread ||
      firstPin.numUnreadReplies !== secondPin.numUnreadReplies ||
      firstPin.isResolved !== secondPin.isResolved ||
      !isEqual(firstPin.selectionBoxAnchor, secondPin.selectionBoxAnchor) ||
      !isEqual(firstPin.otherBoundingBoxes, secondPin.otherBoundingBoxes) ||
      !isEqual(firstPin.isPinnedToFile, secondPin.isPinnedToFile)
    )
  }

  // Compare multi-pin collections
  return !(
    firstCollection.pins.length !== secondCollection.pins.length ||
    firstCollection.isUnread !== secondCollection.isUnread ||
    firstCollection.isPinnedToFile !== secondCollection.isPinnedToFile
  )
}

// Default empty pin collection
export const emptyPinCollection = {
  length: 0,
  leafNodes: new Set([]),
  all: () => [],
  getById: () => null,
  getParentOf: () => null,
  zoomScale: -1,
}

// Aggregate user comment statistics from pin data
export function aggregateUserComments(
  pins: Array<{
    user: {
      id: string
      img_url: string
      handle: string
    }
    isUnread: boolean
  }>
): Array<{
  avatar_url: string
  avatar_user_id: string
  avatar_user_handle: string
  num_unread_comments: number
  num_comments: number
}> {
  const userIndexMap = new Map<string, number>()
  const userStats: Array<{
    avatar_url: string
    avatar_user_id: string
    avatar_user_handle: string
    num_unread_comments: number
    num_comments: number
  }> = []

  pins.forEach((pin) => {
    if (userIndexMap.has(pin.user.id)) {
      const index = userIndexMap.get(pin.user.id)!
      userStats[index].num_unread_comments += pin.isUnread ? 1 : 0
      userStats[index].num_comments += 1
    } else {
      userStats.push({
        avatar_url: pin.user.img_url,
        avatar_user_id: pin.user.id,
        avatar_user_handle: pin.user.handle,
        num_unread_comments: pin.isUnread ? 1 : 0,
        num_comments: 1,
      })
      userIndexMap.set(pin.user.id, userStats.length - 1)
    }
  })

  return userStats
}

// Export aliases for backward compatibility
export const Ao = formatPinCoordinates
export const Ko = emptyPinCollection
export const LX = PinVisibilityState
export const c4 = aggregateUserComments
export const xN = arePinCollectionsEqual
