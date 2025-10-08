import { CommunityRoute, HubFileRoute, ResourceType } from "../figma_app/354658"

// Route helper functions for generating URLs to community and hub resources
// Original functions: $$i1, $$a6, $$s2, $$o4, $$l7, $$d5, $$c0, $$u3



/**
 * Generates a URL for a hub file resource
 * @param resourceId - The ID of the resource
 * @param urlSlug - The URL slug for the resource
 * @returns The generated URL href
 */
export function generateHubFileUrl(resourceId: string, urlSlug: string): string {
  return new HubFileRoute({
    resourceId,
    urlSlug,
  }).href
}

/**
 * Generates a URL for a community plugin resource
 * @param resourceId - The ID of the plugin resource
 * @param urlSlug - The URL slug for the plugin
 * @returns The generated URL href
 */
export function generateCommunityPluginUrl(resourceId: string, urlSlug?: string): string {
  return new CommunityRoute({
    apiResourceType: ResourceType.PLUGIN,
    resourceId,
    urlSlug,
  }).href
}

/**
 * Generates a URL for a community widget resource
 * @param resourceId - The ID of the widget resource
 * @param urlSlug - The URL slug for the widget
 * @returns The generated URL href
 */
export function generateCommunityWidgetUrl(resourceId: string, urlSlug: string): string {
  return new CommunityRoute({
    apiResourceType: ResourceType.WIDGET,
    resourceId,
    urlSlug,
  }).href
}

/**
 * Generates an absolute URL for a community plugin resource
 * @param resourceId - The ID of the plugin resource
 * @param urlSlug - The URL slug for the plugin
 * @returns The absolute URL href
 */
export function generateAbsoluteCommunityPluginUrl(resourceId: string, urlSlug: string): string {
  return new URL(generateCommunityPluginUrl(resourceId, urlSlug), location.href).href
}

/**
 * Generates an absolute URL for a community widget resource
 * @param resourceId - The ID of the widget resource
 * @param urlSlug - The URL slug for the widget
 * @returns The absolute URL href
 */
export function generateAbsoluteCommunityWidgetUrl(resourceId: string, urlSlug: string): string {
  return new URL(generateCommunityWidgetUrl(resourceId, urlSlug), location.href).href
}

/**
 * Generates an absolute URL for a hub file resource
 * @param resourceId - The ID of the resource
 * @param urlSlug - The URL slug for the resource
 * @returns The absolute URL href
 */
export function generateAbsoluteHubFileUrl(resourceId: string, urlSlug: string): string {
  return new URL(generateHubFileUrl(resourceId, urlSlug), location.href).href
}

/**
 * Generates a default community plugin URL
 * @returns The default community plugin URL href
 */
export function generateDefaultCommunityPluginUrl(): string {
  return new URL("/community/plugin/pluginID", location.href).href
}

/**
 * Extracts plugin ID from a community plugin URL
 * @param url - The URL to extract the plugin ID from
 * @returns The extracted plugin ID or null if not found
 */
export function extractPluginIdFromUrl(url: string): string | null {
  const match = url.match(/\/community\/plugin\/([^/]+)/)
  return match ? match[1] : null
}

// Export aliases for backward compatibility
export const Nz = generateDefaultCommunityPluginUrl
export const X$ = generateHubFileUrl
export const YW = generateCommunityWidgetUrl
export const Yp = extractPluginIdFromUrl
export const ab = generateAbsoluteCommunityPluginUrl
export const cU = generateAbsoluteHubFileUrl
export const ho = generateCommunityPluginUrl
export const ox = generateAbsoluteCommunityWidgetUrl
