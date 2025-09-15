import dompurify from 'dompurify'
import { editorUtilities } from '../905/22009'
import { ResourceTypes } from '../905/178090'
import { renderI18nText } from '../905/303541'
import { trackEventAnalytics } from '../905/449184'
import { hasClientMeta, isPlugin, isWidget } from '../figma_app/45218'
import { SpaceAccessType } from '../figma_app/162807'
import { FPublicationStatusType, FTemplateCategoryType } from '../figma_app/191312'
import { isMakeDiscoveryEnabled } from '../figma_app/275462'
import { ResourceTypeEnum, ResourceTypeGroupPlugins, ResourceTypeGroupTemplates, ResourceTypeGroupWidgets } from '../figma_app/306946'
import { hasContent, isWithoutResourceType } from '../figma_app/427318'
import { returnSecond, throwTypeError } from '../figma_app/465776'
import { getCurrentVersion } from '../figma_app/471982'

/**
 * Returns the description of a resource if it has content, otherwise returns the current version's description.
 * @param resource - The resource object.
 * @returns The description string or null.
 * (Original: $$f16)
 */
export function getResourceDescription(resource: any): string | null {
  return hasContent(resource) ? resource.description || null : getCurrentVersion(resource)?.description
}

/**
 * Returns the name of a resource, handling cases without resource type.
 * @param resource - The resource object.
 * @returns The name string.
 * (Original: $$E2)
 */
export function getResourceName(resource: any): string {
  return isWithoutResourceType(resource) ? getCurrentVersion(resource)?.name : resource.name
}

/**
 * Returns the appropriate i18n text for a resource type and context.
 * @param resourceType - The resource type enum.
 * @param isTryIn - Boolean indicating context.
 * @returns The i18n text string.
 * (Original: $$y6)
 */
export function getResourceActionText(resourceType: ResourceTypeEnum, isTryIn?: boolean) {
  switch (resourceType) {
    case ResourceTypeEnum.WIDGET:
    case ResourceTypeEnum.PLUGIN:
      return isTryIn
        ? renderI18nText('community.using.try_in')
        : renderI18nText('community.using.open_in')
    case ResourceTypeEnum.FIGJAM_TEMPLATE:
      return renderI18nText('community.duplicate.open_in_figjam')
    case ResourceTypeEnum.SLIDE_TEMPLATE:
    case ResourceTypeEnum.SITE_TEMPLATE:
    case ResourceTypeEnum.COOPER_TEMPLATE_FILE:
    case ResourceTypeEnum.COOPER_TEMPLATE_ASSET:
      return renderI18nText('community.duplicate.use_template')
    case ResourceTypeEnum.FIGMAKE_TEMPLATE:
      return renderI18nText('community.duplicate.remix')
    case ResourceTypeEnum.UI_KIT:
    case ResourceTypeEnum.DESIGN_TEMPLATE:
    case ResourceTypeEnum.PROTOTYPE:
      return renderI18nText('community.duplicate.open_in_figma')
    default:
      throwTypeError(resourceType)
  }
}

/**
 * Sanitizes HTML and returns plain text.
 * @param html - The HTML string.
 * @returns The plain text.
 * (Original: b)
 */
function sanitizeHtmlToText(html: string): string {
  const div = document.createElement('div')
  div.innerHTML = dompurify.sanitize(html)
  return div.innerText
}

/**
 * Returns the tagline or a sanitized description, optionally truncated to the first sentence.
 * @param resource - The resource object.
 * @param sanitizer - Optional sanitizer function.
 * @param firstSentenceOnly - Whether to return only the first sentence.
 * @returns The tagline or description string.
 * (Original: $$T1)
 */
export function getResourceTaglineOrDescription(resource: any, sanitizer?: (desc: string) => string, firstSentenceOnly?: boolean): string {
  if (resource.tagline)
    return resource.tagline
  if (!resource.description)
    return ''
  const sanitized = (sanitizer || sanitizeHtmlToText)(resource.description)
  if (firstSentenceOnly) {
    const match = sanitized?.match(/[^.!?\r\n]+[.!?\r\n]+/)
    return match ? match[0].trim() : sanitized ?? ''
  }
  return sanitized
}

/**
 * Returns the user count, unique run count, or duplicate count from a resource.
 * @param resource - The resource object.
 * @returns The count number.
 * (Original: $$I12)
 */
export function getResourceUserCount(resource: any): number {
  if ('user_count' in resource)
    return resource.user_count ?? 0
  if ('unique_run_count' in resource)
    return resource.unique_run_count
  if ('duplicate_count' in resource)
    return resource.duplicate_count
  return 0
}

/**
 * Returns the display text for a resource type or viewer mode.
 * @param resource - The resource object.
 * @returns The display text string.
 * (Original: $$S8)
 */
export function getResourceTypeDisplayText(resource: any) {
  if (hasContent(resource)) {
    switch (resource.resource_type) {
      case ResourceTypeEnum.FIGJAM_TEMPLATE:
        return renderI18nText('community.detail_view.figjam_board')
      case ResourceTypeEnum.UI_KIT:
      case ResourceTypeEnum.DESIGN_TEMPLATE:
        return renderI18nText('community.detail_view.design_file')
      case ResourceTypeEnum.PROTOTYPE:
        return renderI18nText('community.detail_view.prototype')
      case ResourceTypeEnum.SLIDE_TEMPLATE:
        return renderI18nText('community.detail_view.slide_template')
      case ResourceTypeEnum.WIDGET:
        return renderI18nText('community.detail_view.widget')
      case ResourceTypeEnum.PLUGIN:
        return renderI18nText('community.detail_view.plugin')
      case ResourceTypeEnum.SITE_TEMPLATE:
        return renderI18nText('community.detail_view.site_template')
      case ResourceTypeEnum.COOPER_TEMPLATE_FILE:
      case ResourceTypeEnum.COOPER_TEMPLATE_ASSET:
        return renderI18nText('community.detail_view.buzz_template')
      case ResourceTypeEnum.FIGMAKE_TEMPLATE:
        return renderI18nText('community.detail_view.figmake_template')
      default:
        return returnSecond(resource.resource_type, '')
    }
  }
  else if (hasClientMeta(resource)) {
    switch (resource.viewer_mode) {
      case FTemplateCategoryType.WHITEBOARD:
        return renderI18nText('community.detail_view.figjam_board')
      case FTemplateCategoryType.CANVAS:
      case FTemplateCategoryType.LIBRARY:
        return renderI18nText('community.detail_view.design_file')
      case FTemplateCategoryType.PROTOTYPE:
        return renderI18nText('community.detail_view.prototype')
      case FTemplateCategoryType.SLIDE_TEMPLATE:
        return renderI18nText('community.detail_view.slide_template')
      case FTemplateCategoryType.SITE_TEMPLATE:
        return renderI18nText('community.detail_view.site_template')
      case FTemplateCategoryType.COOPER_TEMPLATE_FILE:
        return renderI18nText('community.detail_view.buzz_template')
      case FTemplateCategoryType.FIGMAKE_TEMPLATE:
        return renderI18nText('community.detail_view.figmake_template')
      default:
        return returnSecond(resource.viewer_mode, '')
    }
  }
  if (isPlugin(resource))
    return renderI18nText('community.detail_view.plugin')
  if (isWidget(resource))
    return renderI18nText('community.detail_view.widget')
  return renderI18nText('community.detail_view.design_file')
}

/**
 * Checks if the resource is in a pending publishing status.
 * @param resource - The resource object.
 * @returns True if pending, false otherwise.
 * (Original: $$v0)
 */
export function isResourcePendingPublishing(resource: any): boolean {
  return !!resource.publishing_status
    && [
      FPublicationStatusType.PENDING_PUBLIC,
      FPublicationStatusType.PENDING_USER_VISUAL_COMPLIANCE,
      FPublicationStatusType.ORG_PRIVATE_PENDING_PUBLIC,
    ].includes(resource.publishing_status)
}

/**
 * Checks if the resource is pending public or user visual compliance.
 * @param resource - The resource object.
 * @returns True if pending, false otherwise.
 * (Original: $$A7)
 */
export function isResourcePendingPublicOrCompliance(resource: any): boolean {
  return !!resource.publishing_status
    && [
      FPublicationStatusType.PENDING_PUBLIC,
      FPublicationStatusType.PENDING_USER_VISUAL_COMPLIANCE,
    ].includes(resource.publishing_status)
}

/**
 * Checks if the resource is approved for public publishing.
 * @param resource - The resource object.
 * @returns True if approved, false otherwise.
 * (Original: $$x4)
 */
export function isResourceApprovedPublic(resource: any): boolean {
  return resource.publishing_status === FPublicationStatusType.APPROVED_PUBLIC
}

/**
 * Checks if the resource is delisted.
 * @param resource - The resource object.
 * @returns True if delisted, false otherwise.
 * (Original: $$N3)
 */
export function isResourceDelisted(resource: any): boolean {
  return !!resource.publishing_status
    && [
      FPublicationStatusType.DELISTED,
      FPublicationStatusType.DELISTED_CREATOR_STRIPE_DISABLED,
    ].includes(resource.publishing_status)
}

/**
 * Checks if the resource is blocked.
 * @param resource - The resource object.
 * @returns True if blocked, false otherwise.
 * (Original: $$C10)
 */
export function isResourceBlocked(resource: any): boolean {
  return resource.publishing_status === FPublicationStatusType.BLOCKED
}

/**
 * Checks if a user is an accepted community publisher for a resource.
 * @param userId - The user ID.
 * @param resource - The resource object.
 * @returns True if accepted, false otherwise.
 * (Original: $$w5)
 */
export function isUserAcceptedPublisher(userId: string, resource: any): boolean {
  return (resource.community_publishers?.accepted ?? []).some((publisher: any) => publisher.id === userId)
}

/**
 * Checks if 'apple' is an accepted publisher for a resource.
 * @param resource - The resource object.
 * @returns True if 'apple' is accepted, false otherwise.
 * (Original: $$O11)
 */
export function isApplePublisherAccepted(resource: any): boolean {
  return resource.community_publishers.accepted.some(
    (publisher: any) => publisher.profile_handle.toLowerCase() === 'apple',
  )
}

/**
 * Checks if 'figma' is an accepted publisher for a resource.
 * @param resource - The resource object.
 * @returns True if 'figma' is accepted, false otherwise.
 * (Original: $$R14)
 */
export function isFigmaPublisherAccepted(resource: any): boolean {
  return resource.community_publishers.accepted.some(
    (publisher: any) => publisher.profile_handle.toLowerCase() === 'figma',
  )
}

/**
 * Builds tracking event properties for a community resource click.
 * @param resourceType - The resource type.
 * @param resourceId - The resource ID.
 * @param index - The index.
 * @param searchSessionId - The search session ID.
 * @param searchQueryId - The search query ID.
 * @param subView - The subview (default: 'feed').
 * @returns The tracking event object.
 * (Original: $$L13)
 */
export function buildResourceClickTrackingEvent(resourceType: any, resourceId: any, index: any, searchSessionId: any, searchQueryId: any, subView: string = 'feed') {
  return {
    trackingEventName: 'Community Resource Clicked',
    trackingProperties: {
      resource_type: resourceType,
      community_resource_id: resourceId,
      subView,
      scope: SpaceAccessType.COMMUNITY,
      index,
      searchSessionId,
      search_query_id: searchQueryId,
    },
  }
}

/**
 * Tracks a community resource click event.
 * @param args - Arguments for buildResourceClickTrackingEvent.
 * (Original: $$P9)
 */
export function trackResourceClickEvent(...args: Parameters<typeof buildResourceClickTrackingEvent>) {
  const { trackingEventName, trackingProperties } = buildResourceClickTrackingEvent(...args)
  trackEventAnalytics(trackingEventName, trackingProperties)
}

/**
 * Returns the resource types for a given browse type and editor.
 * @param browseType - The browse resource type.
 * @param editorType - The editor type.
 * @returns Array of resource types.
 * (Original: $$D15)
 */
export function getResourceTypesForBrowse(browseType: any, editorType: any): string[] {
  if (editorType === editorUtilities.Editors.PROTOTYPE) {
    return [ResourceTypeEnum.PROTOTYPE]
  }
  const templates = Array.from(ResourceTypeGroupTemplates)
  if (isMakeDiscoveryEnabled()) {
    templates.push(ResourceTypeEnum.FIGMAKE_TEMPLATE)
  }
  const plugins = ResourceTypeGroupPlugins
  const widgets = ResourceTypeGroupWidgets
  switch (browseType) {
    case void 0:
    case ResourceTypes.BrowseResourceTypes.MIXED:
      return [...templates, ...plugins, ...widgets]
    case ResourceTypes.BrowseResourceTypes.FILES:
      return templates
    case ResourceTypes.BrowseResourceTypes.PLUGINS:
      return plugins
    case ResourceTypes.BrowseResourceTypes.WIDGETS:
      return widgets
    default:
      return returnSecond(browseType, [])
  }
}

// Exported variable names refactored to match new function names
export const AC = isResourcePendingPublishing
export const G8 = getResourceTaglineOrDescription
export const K2 = getResourceName
export const Pg = isResourceDelisted
export const Ul = isResourceApprovedPublic
export const XU = isUserAcceptedPublisher
export const X_ = getResourceActionText
export const Y5 = isResourcePendingPublicOrCompliance
export const c8 = getResourceTypeDisplayText
export const cB = trackResourceClickEvent
export const lT = isResourceBlocked
export const mA = isApplePublisherAccepted
export const mk = getResourceUserCount
export const rZ = buildResourceClickTrackingEvent
export const sB = isFigmaPublisherAccepted
export const yl = getResourceTypesForBrowse
export const zY = getResourceDescription
