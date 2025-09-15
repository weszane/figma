import { isEqual } from 'lodash-es';
import { editorUtilities } from '../905/22009';
import { FileTypeEnum } from '../905/71785';
import { sha1Hex } from '../905/125019';
import { ResourceTypes } from '../905/178090';
import { PricingOptions } from '../905/237873';
import { getI18nString } from '../905/303541';
import { getFeatureFlags } from '../905/601108';
import { customHistory } from '../905/612521';
import { getValueOrFallback } from '../905/872825';
import { ProfileRouteState, ResourceHubProfileRouteState } from '../905/934145';
import { Dm as _$$Dm } from '../figma_app/8833';
import { TeamOrgType } from '../figma_app/10554';
import { hasClientMeta, HubTypeEnum, isMonetizedOrThirdParty, isPlugin, isWidget, ResourceTypeNoComment } from '../figma_app/45218';
import { ManifestEditorType } from '../figma_app/155287';
import { StatusType, statusTypeToNumber } from '../figma_app/175992';
import { FFileType, FTemplateCategoryType } from '../figma_app/191312';
import { isResourceHubProfilesEnabled } from '../figma_app/275462';
import { ResourceTypeEnum } from '../figma_app/306946';
import { CommunityRoute, ResourceType, ResourceTypePlural } from '../figma_app/354658';
import { getHubFile, getResourceType, hasContent, isPrototype } from '../figma_app/427318';
import { throwTypeError } from '../figma_app/465776';
import { usePrefersMediaQuery } from '../figma_app/469468';
import { getCurrentCommunityBasePath, parseCommunityPath } from '../figma_app/598412';
import { communityViewerMaxWidth } from '../figma_app/786175';
import { Z4 } from '../figma_app/809727';
import { createEmptyAddress } from '../figma_app/831101';
import { processSlug } from '../figma_app/930338';
import { matchPath } from '../vendor/130505';

/**
 * Regular expressions for validation (Co, HD)
 */
export const Co = /^[\w.]{0,30}$/;
export const HD = /^\w{0,15}$/;

/**
 * Returns the current version object for a resource (setupCurrentVersion)
 * @param resource
 */
export function setupCurrentVersion(resource: any) {
  if ('current_hub_file_version_id' in resource) {
    return resource.versions[resource.current_hub_file_version_id];
  }
  if ('current_plugin_version_id' in resource && resource.current_plugin_version_id) {
    return resource.versions[resource.current_plugin_version_id];
  }
  return undefined;
}

/**
 * Alias for setupCurrentVersion (getCurrentVersion)
 */
export function getCurrentVersion(resource: any) {
  return setupCurrentVersion(resource);
}

/**
 * Returns the remaining path segments from the community path (getCommunityPathSegments)
 */
export function getCommunityPathSegments(): string[] {
  return parseCommunityPath(customHistory.location.pathname).remainingPath.split('/').slice(1);
}

/**
 * Extracts resourceId and apiResourceType from a URL (extractResourceInfoFromUrl)
 * @param url
 */
export function extractResourceInfoFromUrl(url: string) {
  const match = matchPath(new URL(url).pathname, {
    path: CommunityRoute.path
  });
  if (match) {
    return {
      resourceId: match.params.resourceId,
      apiResourceType: match.params.apiResourceType
    };
  }
}

/**
 * Maps template category type to file type enum (mapTemplateCategoryToFileType)
 * @param category
 */
export function mapTemplateCategoryToFileType(category: FTemplateCategoryType) {
  switch (category) {
    case FTemplateCategoryType.SLIDE_TEMPLATE:
      return FileTypeEnum.SLIDES;
    case FTemplateCategoryType.WHITEBOARD:
      return FileTypeEnum.FIGJAM;
    case FTemplateCategoryType.SITE_TEMPLATE:
      return FileTypeEnum.SITES;
    case FTemplateCategoryType.COOPER_TEMPLATE_FILE:
      return FileTypeEnum.COOPER;
    case FTemplateCategoryType.FIGMAKE_TEMPLATE:
      return FileTypeEnum.FIGMAKE;
    case FTemplateCategoryType.CANVAS:
    case FTemplateCategoryType.PROTOTYPE:
    default:
      return FileTypeEnum.FIGMA;
  }
}

/**
 * Maps file type to file type enum (mapFileTypeToEnum)
 * @param fileType
 */
export function mapFileTypeToEnum(fileType: FFileType) {
  switch (fileType) {
    case FFileType.DESIGN:
      return FileTypeEnum.FIGMA;
    case FFileType.WHITEBOARD:
      return FileTypeEnum.FIGJAM;
    case FFileType.SLIDES:
      return FileTypeEnum.SLIDES;
    case FFileType.SITES:
      return FileTypeEnum.SITES;
    case FFileType.COOPER:
      return null;
    case FFileType.FIGMAKE:
      return FileTypeEnum.FIGMAKE;
    default:
      throwTypeError(fileType);
  }
}

/**
 * Filters resources based on type, price, and editor type (filterResources)
 * @param resources
 * @param options
 */
export function filterResources(resources: any[], options: {
  resourceType?: string;
  price?: string;
  editor_type?: string;
}) {
  let filtered = [...resources];
  if (options.resourceType !== ResourceTypes.BrowseResourceTypes.MIXED) {
    filtered = filtered.filter(item => {
      if (options.resourceType === ResourceTypes.BrowseResourceTypes.FILES) {
        return getResourceType(item) === ResourceTypeNoComment.HUB_FILE;
      }
      if (options.resourceType === ResourceTypes.BrowseResourceTypes.PLUGINS) {
        return getResourceType(item) === ResourceTypeNoComment.PLUGIN;
      }
      if (options.resourceType === ResourceTypes.BrowseResourceTypes.WIDGETS) {
        return getResourceType(item) === ResourceTypeNoComment.WIDGET;
      }
      return undefined;
    });
  }
  if (options.price === PricingOptions.PAID) {
    filtered = filtered.filter(isMonetizedOrThirdParty);
  } else if (options.price === PricingOptions.FREE) {
    filtered = filtered.filter(item => !isMonetizedOrThirdParty(item));
  }
  if (options.editor_type && options.editor_type !== editorUtilities.Editors.ALL) {
    filtered = filtered.filter(item => matchEditorType(item, options.editor_type));
  }
  return filtered;
}

/**
 * Viewer modes for Figma files (viewerModes)
 */
export const viewerModes = [FTemplateCategoryType.CANVAS, FTemplateCategoryType.PROTOTYPE, FTemplateCategoryType.LIBRARY];

/**
 * Helper for filterResources: matches editor type (matchEditorType)
 * @param resource
 * @param editorType
 */
function matchEditorType(resource: any, editorType: string): boolean {
  if (isViewerModeResource(resource)) {
    return editorType === editorUtilities.Editors.FIGMA && viewerModes.includes(resource.viewer_mode) || editorType === editorUtilities.Editors.FIGJAM && resource.viewer_mode === FTemplateCategoryType.WHITEBOARD || editorType === editorUtilities.Editors.PROTOTYPE && resource.viewer_mode === FTemplateCategoryType.PROTOTYPE || editorType === editorUtilities.Editors.SLIDES && resource.viewer_mode === FTemplateCategoryType.SLIDE_TEMPLATE || editorType === editorUtilities.Editors.SITES && resource.viewer_mode === FTemplateCategoryType.SITE_TEMPLATE || editorType === editorUtilities.Editors.COOPER && resource.viewer_mode === FTemplateCategoryType.COOPER_TEMPLATE_FILE || editorType === editorUtilities.Editors.FIGMAKE && resource.viewer_mode === FTemplateCategoryType.FIGMAKE_TEMPLATE;
  }
  const versionId = resource.current_plugin_version_id;
  if (!resource.versions || !versionId) return false;
  const version = resource.versions[versionId];
  if (!version) return false;
  if (editorType === editorUtilities.Editors.DEV_MODE && version.manifest.editorType?.includes(ManifestEditorType.DEV)) {
    return true;
  }
  const manifestEditorType = getValueOrFallback(editorType, ManifestEditorType);
  return (manifestEditorType && version.manifest.editorType?.includes(manifestEditorType)) ?? false;
}

/**
 * Checks if resource has viewer_mode (isViewerModeResource)
 * @param resource
 */
export function isViewerModeResource(resource: any): boolean {
  return 'viewer_mode' in resource;
}

/**
 * Checks if resource is a library (isLibraryResource)
 * @param resource
 */
export function isLibraryResource(resource: any): boolean {
  return isViewerModeResource(resource) && resource.viewer_mode === FTemplateCategoryType.LIBRARY;
}

/**
 * Checks if resource is a slide template (isSlideTemplateResource)
 * @param resource
 */
export function isSlideTemplateResource(resource: any): boolean {
  return resource !== null && 'viewer_mode' in resource && resource.viewer_mode === FTemplateCategoryType.SLIDE_TEMPLATE;
}

/**
 * Maps resource type to ResourceType enum (mapResourceType)
 * @param resource
 */
export function mapResourceType(resource: any) {
  switch (getResourceType(resource)) {
    case ResourceTypeNoComment.HUB_FILE:
      return ResourceType.FILE;
    case ResourceTypeNoComment.PLUGIN:
      return ResourceType.PLUGIN;
    case ResourceTypeNoComment.WIDGET:
      return ResourceType.WIDGET;
  }
}

/**
 * Maps vt resource_type to ResourceType enum (mapVtResourceType)
 * @param resource
 */
export function mapVtResourceType(resource: any) {
  switch (resource.resource_type) {
    case ResourceTypeEnum.DESIGN_TEMPLATE:
    case ResourceTypeEnum.UI_KIT:
    case ResourceTypeEnum.SLIDE_TEMPLATE:
    case ResourceTypeEnum.SITE_TEMPLATE:
    case ResourceTypeEnum.PROTOTYPE:
    case ResourceTypeEnum.FIGJAM_TEMPLATE:
    case ResourceTypeEnum.COOPER_TEMPLATE_FILE:
    case ResourceTypeEnum.COOPER_TEMPLATE_ASSET:
    case ResourceTypeEnum.FIGMAKE_TEMPLATE:
      return ResourceType.FILE;
    case ResourceTypeEnum.PLUGIN:
      return ResourceType.PLUGIN;
    case ResourceTypeEnum.WIDGET:
      return ResourceType.WIDGET;
    default:
      throwTypeError(resource.resource_type);
  }
}

/**
 * Maps resource type to singular/plural ResourceType (mapResourceTypePlural)
 * @param resource
 * @param options
 */
export function mapResourceTypePlural(resource: any, {
  plural = false
}: {
  plural?: boolean;
} = {}) {
  const type = getResourceType(resource);
  switch (type) {
    case ResourceTypeNoComment.HUB_FILE:
      return plural ? ResourceTypePlural.FILE : ResourceType.FILE;
    case ResourceTypeNoComment.PLUGIN:
      return plural ? ResourceTypePlural.PLUGIN : ResourceType.PLUGIN;
    case ResourceTypeNoComment.WIDGET:
      return plural ? ResourceTypePlural.WIDGET : ResourceType.WIDGET;
    default:
      throwTypeError(type);
  }
}

/**
 * Resource type keys (ResourceTypeKeys)
 */
export const ResourceTypeKeys = {
  HUB_FILES: 'hub_files',
  PLUGINS: 'plugins',
  WIDGETS: 'widgets'
};

/**
 * Builds community URL for a resource (buildCommunityUrl)
 * @param param0
 */
export function buildCommunityUrl({
  resource
}: {
  resource: any;
}) {
  const path = mapVtResourceType(resource);
  const name = resource.name;
  return buildCommunityPath({
    path,
    id: extractResourceInfoFromUrl(resource.rdp_url)?.resourceId,
    name
  });
}

/**
 * Builds community path for a resource (buildCommunityPath)
 * @param param0
 */
export function buildCommunityPath({
  path,
  id,
  name
}: {
  path: string;
  id: string;
  name: string;
}) {
  const slug = processSlug(name) ?? '';
  return id ? `${getCurrentCommunityBasePath()}/${path}/${id}${slug === '' ? '' : '/'}${slug}` : undefined;
}

/**
 * Builds community path for a resource by id and name (buildCommunityPathById)
 * @param param0
 */
export function buildCommunityPathById({
  resource
}: {
  resource: any;
}) {
  return buildCommunityPath({
    path: mapResourceType(resource),
    id: resource.id,
    name: setupCurrentVersion(resource)?.name ?? ''
  });
}

/**
 * Builds full community URL for a resource (buildFullCommunityUrl)
 * @param resource
 */
export function buildFullCommunityUrl(resource: any) {
  return `${location.origin}${buildCommunityPathById({
    resource
  })}`;
}

/**
 * Copies text to clipboard using a hidden input (copyToClipboard)
 * @param text
 */
export function copyToClipboard(text: string) {
  const input = document.createElement('input');
  input.style.position = 'fixed';
  input.style.top = '-1000px';
  input.value = text;
  input.classList.add(_$$Dm);
  document.body.appendChild(input);
  input.select();
  input.focus();
  document.execCommand('copy');
  input.parentNode?.removeChild(input);
}

/**
 * Transparent GIF data URI (TransparentGifDataUri)
 */
export const TransparentGifDataUri = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

/**
 * Checks if entity is user or matches id (isUserOrIdMatch)
 * @param id
 * @param entity
 */
export function isUserOrIdMatch(id: string, entity: any) {
  return entity?.entity_type !== TeamOrgType.USER || entity?.id === id;
}

/**
 * Gets tab title for search or browser home (getTabTitle)
 * @param params
 */
export function getTabTitle(params: {
  query?: string;
}) {
  return params.query ? getI18nString('community.search_results_tab_title', {
    searchQuery: params.query
  }) : getI18nString('community.browser_home_tab_title');
}

/**
 * Checks if stripe account status is accepted (isStripeAccepted)
 * @param entity
 */
export function isStripeAccepted(entity: any) {
  return !!entity && entity?.stripe_account_status && statusTypeToNumber(entity.stripe_account_status) >= statusTypeToNumber(StatusType.ACCEPTED);
}

/**
 * Checks if any associated user can sell on community (canSellOnCommunity)
 * @param entity
 */
export function canSellOnCommunity(entity: any) {
  return !!entity?.associated_users?.find((u: any) => u.can_sell_on_community);
}

/**
 * Checks if stripe account status is not NONE or ACCEPTED (isStripePending)
 * @param entity
 */
export function isStripePending(entity: any) {
  return entity?.stripe_account_status && entity.stripe_account_status !== StatusType.NONE && entity.stripe_account_status !== StatusType.ACCEPTED;
}

/**
 * Gets viewer width or max width (getViewerWidth)
 * @param isFullWidth
 */
export function getViewerWidth(isFullWidth: boolean) {
  return isFullWidth ? '100%' : Math.min(window.innerWidth, parseInt(communityViewerMaxWidth));
}

/**
 * Gets embed type for resource (getEmbedType)
 * @param resource
 */
export function getEmbedType(resource: any) {
  if (isPrototype(resource)) return Z4.EMBED;
  const hubFile = getHubFile(resource);
  return hubFile && !hubFile.thumbnail_is_set ? Z4.EMBED : Z4.CURATED_IMAGE;
}

/**
 * Checks if resource fits in viewer (fitsInViewer)
 * @param width
 * @param maxWidth
 * @param count
 */
export function fitsInViewer(width: number, maxWidth: number, count: number) {
  return width + 125 <= maxWidth && count > 10;
}

/**
 * Checks if address is empty (isEmptyAddress)
 * @param address
 */
export function isEmptyAddress(address: any) {
  return isEqual(address, createEmptyAddress());
}

/**
 * Checks if prefers mobile and is on community path (isMobileCommunity)
 */
export function isMobileCommunity() {
  const prefersMobile = usePrefersMediaQuery(`(max-width: 644px)`);
  const isCommunity = customHistory.location.pathname.startsWith('/community');
  return prefersMobile && isCommunity;
}

/**
 * Fetches image and returns sha1 and buffer (fetchImageWithSha1)
 * @param url
 */
export async function fetchImageWithSha1(url: string) {
  try {
    const response = await fetch(url);
    const buffer = new Uint8Array(await response.arrayBuffer());
    return {
      type: 'image',
      url,
      sha1: sha1Hex(buffer),
      buffer
    };
  } catch {
    return null;
  }
}

/**
 * Builds carousel media array (buildCarouselMedia)
 * @param resource
 */
export function buildCarouselMedia(resource: any) {
  const media: Record<string, any> = {};
  const images: Record<string, ObjectOf<ObjectOf>> = hasContent(resource) ? resource.carousel_media.images : resource.carousel_media_urls;
  const videos: Record<string, ObjectOf<ObjectOf>> = hasContent(resource) ? resource.carousel_media.videos : 'carousel_videos' in resource && resource?.carousel_videos;
  if (images) {
    Object.entries(images).forEach(([key, value]) => {
      media[key] = {
        ...value,
        type: 'image'
      };
    });
  }
  if (videos) {
    Object.entries(videos).forEach(([key, value]) => {
      media[key] = {
        ...value,
        type: 'video'
      };
    });
  }
  return Object.entries(media).sort(([a], [b]) => parseInt(a) - parseInt(b)).map(([, value]) => value);
}

/**
 * Checks if creator nudge should be shown (shouldShowCreatorNudge)
 * @param resource
 */
export function shouldShowCreatorNudge(resource: any) {
  const flags = getFeatureFlags();
  if (!flags.cmty_rdp_creator_nudges) return false;
  if (hasClientMeta(resource) && resource.viewer_mode !== FTemplateCategoryType.PROTOTYPE) {
    return Object.keys(resource.carousel_media_urls ?? {}).length === 1;
  }
  return (isPlugin(resource) || isWidget(resource)) && Object.keys(resource.carousel_videos ?? {}).length === 0;
}

/**
 * Gets resource type label (getResourceTypeLabel)
 * @param resource
 * @param options
 */
export function getResourceTypeLabel(resource: any, options: {
  pluralized?: boolean;
  capitalized?: boolean;
} = {}) {
  return formatResourceTypeLabel(getResourceType(resource), options);
}

/**
 * Formats resource type label (formatResourceTypeLabel)
 * @param type
 * @param options
 */
function formatResourceTypeLabel(type: string, {
  pluralized,
  capitalized
}: {
  pluralized?: boolean;
  capitalized?: boolean;
} = {}) {
  let label: string;
  switch (type) {
    case ResourceTypeNoComment.PLUGIN:
      label = 'plugin';
      break;
    case ResourceTypeNoComment.WIDGET:
      label = 'widget';
      break;
    case 'comment':
      label = 'comment';
      break;
    case ResourceTypeNoComment.HUB_FILE:
      label = 'hub file';
      break;
    default:
      throw new Error('Unsupported Type');
  }
  return formatLabel(label, {
    pluralized,
    capitalized
  });
}

/**
 * Gets plugin/widget label based on boolean (getPluginWidgetLabel)
 * @param isWidget
 * @param options
 */
export function getPluginWidgetLabel(isWidget: boolean, options: {
  pluralized?: boolean;
  capitalized?: boolean;
} = {}) {
  return formatLabel(isWidget ? HubTypeEnum.WIDGET : HubTypeEnum.PLUGIN, options);
}

/**
 * Formats label with pluralization and capitalization (formatLabel)
 * @param label
 * @param options
 */
function formatLabel(label: string, {
  pluralized,
  capitalized
}: {
  pluralized?: boolean;
  capitalized?: boolean;
} = {}) {
  let result = label + (pluralized ? 's' : '');
  if (capitalized && result[0]) {
    result = result[0].toUpperCase() + result.substr(1);
  }
  return result;
}

/**
 * Gets created_at for current version (getCurrentVersionCreatedAt)
 * @param resource
 */
export function getCurrentVersionCreatedAt(resource: any) {
  const versionId = resource.current_hub_file_version_id || resource.current_plugin_version_id || '';
  return resource.versions[versionId]?.created_at || '';
}

/**
 * Builds profile route state (buildProfileRouteState)
 * @param profileHandle
 * @param isResourceHub
 * @param routeState
 * @param extra
 */
export function buildProfileRouteState(profileHandle: string, isResourceHub: boolean, routeState: any, extra?: any) {
  const enabled = isResourceHubProfilesEnabled();
  const base = {
    profileHandle
  };
  return isResourceHub && enabled && routeState ? new ResourceHubProfileRouteState({
    ...routeState,
    ...base
  }, extra) : new ProfileRouteState(base);
}

// Exported aliases (same as original code)
export const YJ = setupCurrentVersion;
export const A7 = mapVtResourceType;
export const Ag = getTabTitle;
export const Cg = isEmptyAddress;
export const DV = buildFullCommunityUrl;
export const Dl = mapResourceType;
export const Dm = isUserOrIdMatch;
export const JJ = mapTemplateCategoryToFileType;
export const KG = fetchImageWithSha1;
export const KH = getResourceTypeLabel;
export const N6 = buildCarouselMedia;
export const Qo = isViewerModeResource;
export const Qy = getCurrentVersionCreatedAt;
export const RE = buildProfileRouteState;
export const U0 = shouldShowCreatorNudge;
export const UI = buildCommunityPath;
export const Uu = isStripePending;
export const VJ = buildCommunityUrl;
export const ZD = TransparentGifDataUri;
export const _m = fitsInViewer;
export const _t = buildCommunityPathById;
export const af = isStripeAccepted;
export const cX = isSlideTemplateResource;
export const eD = getCommunityPathSegments;
export const iX = viewerModes;
export const jl = isMobileCommunity;
export const kf = canSellOnCommunity;
export const lW = copyToClipboard;
export const nF = getPluginWidgetLabel;
export const o7 = filterResources;
export const qD = getCurrentVersion;
export const r7 = isLibraryResource;
export const rk = mapFileTypeToEnum;
export const ss = mapResourceTypePlural;
export const tv = extractResourceInfoFromUrl;
export const z$ = getEmbedType;
export const zS = getViewerWidth;