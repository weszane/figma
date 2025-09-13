import { trackFileEventWithUser } from '../figma_app/901889'

/**
 * Enum for modal types (WJ).
 */
export enum PluginModalTypeEnum {
  PASTE = 'PASTE',
  MODAL = 'MODAL',
  PLUGIN = 'PLUGIN',
}

/**
 * Enum for link metadata events (yc).
 */
export enum LinkMetadataEvent {
  ATTEMPT = 'figjam_link_metadata_attempt',
  ERROR = 'figjam_link_metadata_error',
  SUCCESS = 'figjam_link_metadata_success',
  EMBED_CLICK = 'figjam_link_embed_click',
  CONVERT_TO_TEXT = 'figjam_link_metadata_convert_to_text',
  OPEN_PREVIEW = 'figjam_link_preview_open',
  EMBED_EXPAND = 'figjam_link_embed_expand',
  COPY_LINK = 'figjam_link_metadata_copy_url',
  SWITCH_ORIENTATION_VERTICAL = 'figjam_link_preview_orientation_vertical',
  SWITCH_ORIENTATION_HORIZONTAL = 'figjam_link_preview_orientation_horizontal',
  EMBED_DEACTIVATE = 'figjam_embed_deactivate',
}

/**
 * Enum for link render types (Ci).
 */
export enum LinkRenderType {
  EMBED = 'embed',
  LINK_PREVIEW = 'preview',
}

/**
 * Parses the domain from a given URL string.
 * @param url - The URL string to parse.
 * @returns The hostname if valid, otherwise "Could not parse".
 * (Original: $$o3)
 */
export function parseDomain(url: string): string {
  try {
    return new URL(url).hostname
  }
  catch {
    return 'Could not parse'
  }
}

/**
 * Returns a handler function that logs analytics for a link embed.
 * @param data - The data object, expected to contain a 'url' property.
 * @returns A function that takes an event name and logs analytics.
 * (Original: $$l2)
 */
export function createEmbedAnalyticsHandler(data: {
  url?: string
} | null): (eventName: string) => void {
  const analyticsManager = trackFileEventWithUser()
  return (eventName: string) => {
    const url = data && 'url' in data ? data.url : ''
    analyticsManager(eventName, {
      domain: url ? parseDomain(url) : '',
      linkRenderType: LinkRenderType.EMBED,
    })
  }
}

// Export refactored names for external usage
export const Ci = LinkRenderType
export const WJ = PluginModalTypeEnum
export const tq = createEmbedAnalyticsHandler
export const vO = parseDomain
export const yc = LinkMetadataEvent
