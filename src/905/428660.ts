/**
 * Generates a navigation object for the community hub based on the entity type and its ID.
 * @param entityType - The type of entity ("file", "plugin", or "widget").
 * @param entityId - The unique identifier for the entity.
 * @returns An object representing the navigation state for the community hub.
 * @originalName $$n0
 */
export function getCommunityHubNavigation(entityType: 'file' | 'plugin' | 'widget', entityId: string) {
  switch (entityType) {
    case 'file':
      return {
        view: 'communityHub',
        subView: 'hubFile',
        hubFileId: entityId,
      }
    case 'plugin':
      return {
        view: 'communityHub',
        subView: 'plugin',
        publishedPluginId: entityId,
      }
    case 'widget':
      return {
        view: 'communityHub',
        subView: 'widget',
        widgetId: entityId,
      }
    default:
      // Optionally handle unknown entity types
      return undefined
  }
}

// Export with original alias for backward compatibility
export const p = getCommunityHubNavigation
