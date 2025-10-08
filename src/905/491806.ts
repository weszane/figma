import { SourceDirection } from "../905/535806"
import { throwTypeError } from "../figma_app/465776"
import { GitReferenceType } from "../figma_app/763686"

// Object URL management utilities
const createdObjectUrls: string[] = []

/**
 * Creates an object URL for the given data
 * @param data - The data to create URL for
 * @returns Object URL or null if data is empty
 */
export function createObjectUrl(data: Uint8Array): string | null {
  if (data.length === 0) {
    return null
  }
  const objectUrl = URL.createObjectURL(new Blob([data]))
  createdObjectUrls.push(objectUrl)
  return objectUrl
}

/**
 * Revokes all created object URLs
 */
export function revokeAllObjectUrls(): void {
  let url: string | undefined
  // eslint-disable-next-line no-cond-assign
  while (url = createdObjectUrls.pop()) {
    URL.revokeObjectURL(url)
  }
}

/**
 * Maps source direction to git reference type
 * @param direction - The source direction
 * @returns Corresponding git reference type
 */
export function mapDirectionToGitReferenceType(direction: SourceDirection): GitReferenceType {
  switch (direction) {
    case SourceDirection.TO_SOURCE:
      return GitReferenceType.BRANCH
    case SourceDirection.FROM_SOURCE:
      return GitReferenceType.SOURCE
    default:
      throwTypeError(direction)
  }
}

/**
 * Gets the appropriate key based on direction
 * @param params - Object containing branchKey, sourceKey and direction
 * @returns The appropriate key based on direction
 */
export function getKeyByDirection({
  branchKey,
  sourceKey,
  direction,
}: {
  branchKey: string
  sourceKey: string
  direction: SourceDirection
}): string {
  switch (direction) {
    case SourceDirection.TO_SOURCE:
      return sourceKey
    case SourceDirection.FROM_SOURCE:
      return branchKey
    default:
      throwTypeError(direction)
  }
}

/**
 * Creates an IntersectionObserver that adds/removes a class based on intersection
 * @param className - The class name to add/remove
 * @returns A new IntersectionObserver instance
 */
export function createIntersectionObserver(className: string): IntersectionObserver {
  return new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (
        entry.isIntersecting
        && entry.intersectionRatio < 1
        && entry.intersectionRatio > 0
        && entry.intersectionRect.height > 0
        && entry.intersectionRect.height < entry.boundingClientRect.height
      ) {
        entry.target.classList.add(className)
      }
      else {
        entry.target.classList.remove(className)
      }
    }
  }, {
    threshold: [0, 1],
  })
}

// Export aliases for backward compatibility
export const FS = createIntersectionObserver
export const Qx = mapDirectionToGitReferenceType
export const SN = revokeAllObjectUrls
export const WO = getKeyByDirection
export const bW = createObjectUrl
