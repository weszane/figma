import { hasClientMeta, isWidget } from '../figma_app/45218'
/**
 * Generates a community URL path based on the entity type
 * @param entity - The entity to generate URL for ($$r0)
 * @returns The community URL path
 */
export function generateCommunityUrl(entity: { id: string }): string {
  if (hasClientMeta(entity)) {
    return `/community/file/${entity.id}`
  }

  if (isWidget(entity)) {
    return `/community/widget/${entity.id}`
  }

  return `/community/plugin/${entity.id}`
}

export const k = generateCommunityUrl
