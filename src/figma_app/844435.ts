import { debounce } from 'lodash-es';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reportError } from '../905/11';
import { isDefined, useIsLoading } from '../905/18797';
import { selectWithShallowEqual } from '../905/103090';
import { searchAPIHandler } from '../905/144933';
import { ServiceCategories } from '../905/165054';
import { mergePublishedPluginThunk } from '../905/172918';
import { ResourceTypes } from '../905/178090';
import { VisualBellActions } from '../905/302958';
import { getI18nString } from '../905/303541';
import { getUserId } from '../905/372672';
import { deepEqual } from '../905/382883';
import { trackEventAnalytics } from '../905/449184';
import { getFeatureFlags } from '../905/601108';
import { PerfTimer } from '../905/609396';
import { logError } from '../905/714362';
import { setPluginAllowlisted, setWidgetsAllowlisted } from '../905/717906';
import { isFullscreenDevHandoffView } from '../905/782918';
import { useMappedEditorTypeA } from '../905/808775';
import { initializePluginAllowlist, initializeWidgetAllowlist } from '../905/837497';
import { useCurrentUserOrg } from '../905/845253';
import { canPerformAction, canRunExtensions } from '../figma_app/12796';
import { InstalledPlugins, Plugin } from '../figma_app/43951';
import { FEditorType } from '../figma_app/53721';
import { getPluginAllowListKey, getWidgetAllowListKey, hasLocalFileId, isPublicPlugin, manifestContainsWidget, ManifestEditorType, ManifestSchema } from '../figma_app/155287';
import { FPinStatusType, FPublicationStatusType, FPublisherType, FUserRoleType } from '../figma_app/191312';
import { filterArrayByEditorTypeAndMemo, filterEntriesByEditorTypeAndMemo } from '../figma_app/279454';
import { useMultiSubscription, useSubscription } from '../figma_app/288654';
import { canRunPlugin, convertEditorTypeToFileType, filterEntriesByEditorType, filterEntriesByPluginVersionEditorType, filterPublishedResources, filterResourcesByMatch, getCurrentPluginVersion, getPluginByFileId, getPluginVersion, isDevModePlugin, isEditorTypeMatch, sortResourcesByCreatedAt } from '../figma_app/300692';
import { useCurrentFileKey } from '../figma_app/516028';
import { BI as getFigmaMobile } from '../figma_app/546509';
import { f1, O8 } from '../figma_app/559491';
import { isPendingPublisher } from '../figma_app/564095';
import { getAllowlistedExtensionIds, getAllowlistedPluginOrWidgetIds } from '../figma_app/684168';
import { useAppModelProperty } from '../figma_app/722362';
import { isResourcePendingPublishing } from '../figma_app/777551';
import { getEditorTypeOrNull, getSelectedEditorType, isDevHandoffEditorType, selectEditorType } from '../figma_app/976749';
export interface BasePlugin {
  id: string;
  plugin_id: string;
  name: string;
  version: string;
  description: string;
  manifest: any;
  created_at: string;
  is_private?: boolean;
  current_plugin_version_id?: string;
  org_id?: string;
  tagline?: string;
  creator_policy?: string;
  release_notes?: string;
  installed_by?: string;
  redirect_icon_url?: string;
  redirect_cover_image_url?: string;
  redirect_code_url?: string;
  redirect_snapshot_url?: string;
  community_publishers?: CommunityPublisher[];
}
export interface LocalPlugin extends BasePlugin {
  // Local plugin specific properties
}
export interface PublishedPlugin extends BasePlugin {
  installedPluginVersions: unknown;
  plugin_publishers: any;
  publishingStatus: FPublicationStatusType;
  isWidget: boolean;
  orgId: string | null;
  thumbnailUrl: string;
  userId: string;
  updatedAt: Date;
  createdAt: Date;
  unpublishedAt: Date | null;
  supportContact: string | null;
  approvedAt: Date;
  installCount: number;
  likeCount: number;
  viewCount: number;
  blockedAt: Date | null;
  profileId: string;
  commentCount: number;
  hideRelatedContentByOthers: boolean | null;
  isPublic: boolean;
  isInspect: boolean;
  isSlides: boolean;
  widgetsWhitelistEnforced: boolean | null;
  pluginsWhitelistEnforced: boolean | null;
  monetizedResourceMetadataId: string | null;
  thirdPartyM10nStatus: string | null;
  monetizationStatus: string | null;
  canRead: boolean;
  categoryId: string;
  uniqueRunCount: number;
  pluginEditorType: number;
  commentsSetting: string;
  currentUserFirstRanAt: string;
  profileInstallStatus: number;
  redirectThumbnailUrl: string;
  communityPublishers: CommunityPublisher[];
  currentPluginVersion: PluginVersion;
  viewableInEditor: boolean;
  publishingStatusUpdatedAt: Date | null;
  isSeoIndexingAllowed: boolean | null;
  currentPlanUser: any | null;
}
export interface PluginVersion {
  plugins: Record<string, LocalPlugin>;
  loaded: any;
  id: string;
  pluginId: string;
  resourceStagingSignature: string | null;
  updatedAt: Date;
  iconUrl: string | null;
  coverImageUrl: string | null;
  name: string;
  version: string;
  releaseNotes: string | null;
  description: string;
  tagline: string | null;
  creatorPolicy: string | null;
  manifest: string;
  createdAt: Date;
  iconPath: string | null;
  coverImagePath: string | null;
  codePath: string | null;
  plugin: {
    currentPluginVersionId: string;
  };
  playgroundFigFileKey: string | null;
  hasPlaygroundFile: boolean;
  playgroundFileVersionId: string | null;
  userId: string;
  snapshotPath: string;
}
export interface CommunityPublisher {
  id: string;
  isPending: boolean;
  role: FPublisherType;
  userId: string;
  profileId: string;
  pluginId: string;
  hubFileId: string | null;
  profile: PublisherProfile;
}
export interface PublisherProfile {
  id: string;
  profileHandle: string;
  team: PublisherTeam | null;
  org: PublisherOrg | null;
  user: PublisherUser | null;
  teamId: string | null;
  orgId: string | null;
  primaryUserId: string | null;
  publicAt: Date;
  website: string | null;
  description: string | null;
  location: string | null;
  twitter: string | null;
  instagram: string | null;
  createdAt: Date;
  updatedAt: Date;
  followerCount: number;
  followingCount: number;
  coverImagePath: string | null;
  pronouns: string | null;
  badges: any[];
  communityUserIsFollowing: boolean;
  communityUserIsFollowed: boolean;
  entityType: string;
  currentUserIsFollowing: boolean;
  currentUserIsFollowed: boolean;
  name: string;
  imgUrl: string | null;
  imgUrls: Record<string, any>;
}
export interface PublisherTeam {
  id: string;
  name: string;
}
export interface PublisherOrg {
  id: string;
  name: string;
}
export interface PublisherUser {
  id: string;
  name: string;
}
export interface InstalledPlugin {
  pluginId: string;
  createdAt: Date;
  userId: string;
  orgId: string;
  pluginVersionId: string;
  plugin: PublishedPlugin;
  pinnedStatus: FPinStatusType;
}

// Grouped plugin structures
export interface GroupedUserPlugins {
  invitedPlugins: PublishedPlugin[];
  approvedPlugins: PublishedPlugin[];
  pendingReviewPlugins: PublishedPlugin[];
  developmentPlugins: LocalPlugin[];
}
export interface GroupedUserWidgets {
  invitedWidgets: PublishedPlugin[];
  approvedWidgets: PublishedPlugin[];
  pendingReviewWidgets: PublishedPlugin[];
  developmentWidgets: LocalPlugin[];
}

// Plugin collections
export interface PluginCollections {
  loaded: boolean;
  plugins: Record<string, LocalPlugin>;
  widgets: Record<string, LocalPlugin>;
  orgPlugins: Record<string, LocalPlugin>;
  orgWidgets: Record<string, LocalPlugin>;
  userPlugins: Record<string, LocalPlugin>;
  userWidgets: Record<string, LocalPlugin>;
}
export interface FilteredPluginCollections {
  loaded: boolean;
  plugins: Record<string, LocalPlugin>;
  widgets: Record<string, LocalPlugin>;
  orgPlugins: Record<string, LocalPlugin>;
  orgWidgets: Record<string, LocalPlugin>;
  userPlugins: Record<string, LocalPlugin>;
  userWidgets: Record<string, LocalPlugin>;
}

// Search related types
export interface PluginSearchResult {
  pluginSearchIsLoading: boolean;
  pluginSearchHasResolved: boolean;
  lastPluginSearchQuery: string | null;
  pluginServerSideSearch: (query: string, setPublicResults: (results: string[]) => void, setOrgResults: (results: string[]) => void, setInstalledResults: (results: string[]) => void) => void;
  setLastPluginSearchQuery: (query: string | null) => void;
}
export interface WidgetSearchResult {
  widgetSearchIsLoading: boolean;
  widgetSearchHasResolved: boolean;
  lastWidgetSearchQuery: string | null;
  widgetServerSideSearch: (query: string, setPublicResults: (results: string[]) => void, setOrgResults: (results: string[]) => void, setInstalledResults: (results: string[]) => void) => void;
  setLastWidgetSearchQuery: (query: string | null) => void;
}
export interface SearchContext {
  query: string;
  orgId: string | null;
  resourceType: string;
  editorType: string;
  didOrgSearch: boolean;
}

// Allowlist related types
export interface PluginAllowlistState {
  hasAllowList: boolean;
  allowList: Record<string, boolean>;
  allowListIsLoading: boolean;
  publicExtensionsDisallowed: boolean;
  hasPluginAllowList: boolean;
  hasWidgetAllowList: boolean;
  filterByAllowlist: (plugins: LocalPlugin[]) => LocalPlugin[];
  filterByPublicResourcesAllowed: (plugins: LocalPlugin[]) => LocalPlugin[];
}
export interface PluginValidationResult {
  isPluginBlockedByAllowlist: boolean;
  validatePublishedPluginInOrgAllowlist: () => boolean;
}
export interface WidgetValidationResult {
  isWidgetBlockedByAllowlist: boolean;
}

// Recently used types
export interface RecentlyUsedResource {
  id: string;
  last_added_at_by_user_id?: Record<string, string>;
  run_by_user_ids?: string[];
}
export interface RecentlyUsedState {
  plugins: Record<string, RecentlyUsedResource[]>;
  widgets: Record<string, RecentlyUsedResource[]>;
  fetchedResources: Record<string, {
    version?: LocalPlugin;
  }>;
}

// Plugin running and permissions
export interface PluginRunContext {
  plugin: LocalPlugin;
  editorType: FEditorType | null;
  canRunPluginState?: {
    currentUserOrgId: string | null;
    orgById: Record<string, any>;
    selectedView: any;
    openFile: any;
    mirror: {
      appModel: {
        isReadOnly: boolean;
      };
    };
    whitelistedPlugins: Record<string, boolean>;
    whitelistedWidgets: Record<string, boolean>;
  };
}
export interface PluginRunResult {
  canRun: boolean;
  reason?: string;
}

// Utility types
export type PluginMap = Record<string, LocalPlugin>;
export type WidgetMap = Record<string, LocalPlugin>;
export interface ParsedExtensionData {
  plugins: PluginMap;
  widgets: WidgetMap;
  orgPlugins: PluginMap;
  orgWidgets: WidgetMap;
  userPlugins: PluginMap;
  userWidgets: WidgetMap;
}
export interface ManifestParseResult {
  success: boolean;
  data?: any;
  error?: string;
}

// Editor type constraints
export type SupportedEditorType = Exclude<FEditorType, FEditorType.Slides | FEditorType.Sites | FEditorType.Figmake | FEditorType.Cooper>;

// Extension source types
export type ExtensionSource = 'org' | 'user';
export interface ExtensionInstallation {
  source: ExtensionSource;
  savedExtensions?: InstalledPlugin[];
}

// Performance tracking
export interface PerformanceMetrics {
  elapsedMs?: number;
  editorType: string;
  query: string;
  numPublicResults: number;
  numOrgResults: number;
}
export function getLocalPlugins(e?: any) {
  let t = useSelector<ObjectOf>(e => e.localPlugins);
  return filterEntriesByEditorTypeAndMemo(t, e);
}
export function useLocalPluginsExcludingWidgets(e?: any) {
  let t = getLocalPlugins(e);
  return useMemo(() => {
    let e: PluginMap = {};
    for (let r in t) {
      let n = t[r];
      manifestContainsWidget(n) || (e[r] = n);
    }
    return e;
  }, [t]);
}
// export function useLocalPluginsExcludingWidgets() {
//   let e = getLocalPlugins()
//   return useMemo(() => {
//     let t: PluginMap = {}
//     for (let r in e) {
//       let n = e[r]
//       manifestContainsWidget(n) && (t[r] = n)
//     }
//     return t
//   }, [e])
// }
export function findLocalPluginById(e) {
  return Object.values(getLocalPlugins()).find(t => t.plugin_id === e);
}
export function useLocalPluginsByPluginId() {
  let e = getLocalPlugins();
  return useMemo(() => {
    let t: PluginMap = {};
    for (let r in e) {
      let n = e[r];
      t[n.plugin_id] = n;
    }
    return t;
  }, [e]);
}
export function usePublishingPlugins() {
  return useSelector<ObjectOf, any>(e => e.publishingPlugins);
}
export function usePublishedPlugins() {
  let e = useSelector<ObjectOf, any>(e => e.publishedPlugins);
  let t = getEditorTypeOrNull();
  return useMemo(() => filterEntriesByPluginVersionEditorType(t, e), [e, t]);
}
export function usePluginedWidgets() {
  let e = useSelector<ObjectOf, any>(e => e.publishedWidgets);
  let t = isEditorTypeSupported();
  let r = useMemo(() => ({}), []);
  return t ? e : r;
}
export function getPluginOrWidget(e) {
  let t = usePublishedPlugins()[e.id];
  let r = usePluginedWidgets()[e.id];
  return e.isWidget ? r : t;
}
export function useUserPublishedPlugins({
  includePendingPublishers: e = !0
} = {}) {
  let t = getUserId();
  let r = usePublishedPlugins();
  return useMemo(() => {
    if (!t) return [];
    let n = filterPublishedResources(Object.values(r));
    return sortResourcesByCreatedAt(filterResourcesByMatch(n, t, e));
  }, [r, t, e]);
}
function Z() {
  let e = useUserPublishedPlugins();
  let t = useLocalPluginsExcludingWidgets();
  return useMemo(() => Object.values(t).filter(t => e.every(e => e.id !== t.plugin_id)), [e, t]);
}
export function useGroupedUserPlugins() {
  let e = getUserId();
  let t = useUserPublishedPlugins();
  let r = Z();
  return useMemo(() => t.reduce((t, r) => {
    if ((r.plugin_publishers?.pending ?? []).find(t => t.id === e)) {
      let e = [...t.invitedPlugins, r];
      return {
        ...t,
        invitedPlugins: e
      };
    }
    if (isResourcePendingPublishing(r)) {
      let e = [...t.pendingReviewPlugins, r];
      return {
        ...t,
        pendingReviewPlugins: e
      };
    }
    let n = [...t.approvedPlugins, r];
    return {
      ...t,
      approvedPlugins: n
    };
  }, {
    invitedPlugins: [],
    approvedPlugins: [],
    pendingReviewPlugins: [],
    developmentPlugins: r
  }), [e, r, t]);
}
/**
 * Returns the total count of user published widgets and development widgets.
 * Original: getTotalUserWidgetsCount
 */
export function getTotalUserWidgetsCount(): number {
  const publishedWidgets = useUserPublishedWidgets();
  const developmentWidgets = getDevelopmentWidgets();
  return publishedWidgets.length + developmentWidgets.length;
}

/**
 * Returns pending publisher widgets for the current user.
 * Original: getPendingPublisherWidgets
 */
export function getPendingPublisherWidgets(): PublishedPlugin[] {
  const userId = getUserId();
  const publishedWidgets = useUserPublishedWidgets();
  return userId != null ? publishedWidgets.filter(widget => isPendingPublisher(widget, userId)) : [];
}

/**
 * Checks if a widget or plugin is pending publisher for the current user.
 * Original: isPendingPublisherForCurrentUser
 * @param id string
 * @returns boolean
 */
export function isPendingPublisherForCurrentUser(id: string): boolean {
  const userId = getUserId();
  const publishedPlugin = usePublishedPlugins()[id];
  const publishedWidget = usePluginedWidgets()[id];
  if (publishedPlugin) return isPendingPublisher(publishedPlugin, userId ?? '');
  return isPendingPublisher(publishedWidget, userId ?? '');
}

/**
 * Returns user published widgets, optionally including pending publishers.
 * Original: useUserPublishedWidgets
 */
export function useUserPublishedWidgets({
  includePendingPublishers = true
}: {
  includePendingPublishers?: boolean;
} = {}): PublishedPlugin[] {
  const userId = getUserId();
  const publishedWidgets = usePluginedWidgets();
  if (!userId) return [];
  const filtered = filterPublishedResources(Object.values(publishedWidgets));
  return sortResourcesByCreatedAt(filterResourcesByMatch(filtered, userId, includePendingPublishers));
}

/**
 * Returns grouped user widgets by status.
 * Original: useGroupedUserWidgets
 */
export function useGroupedUserWidgets(): GroupedUserWidgets {
  const userId = getUserId();
  const publishedWidgets = useUserPublishedWidgets();
  const developmentWidgets = getDevelopmentWidgets();
  return useMemo(() => publishedWidgets.reduce((acc, widget) => {
    if ((widget.plugin_publishers?.pending ?? []).find(p => p.id === userId)) {
      return {
        ...acc,
        invitedWidgets: [...acc.invitedWidgets, widget]
      };
    }
    if (isResourcePendingPublishing(widget)) {
      return {
        ...acc,
        pendingReviewWidgets: [...acc.pendingReviewWidgets, widget]
      };
    }
    return {
      ...acc,
      approvedWidgets: [...acc.approvedWidgets, widget]
    };
  }, {
    invitedWidgets: [],
    approvedWidgets: [],
    pendingReviewWidgets: [],
    developmentWidgets
  }), [userId, developmentWidgets, publishedWidgets]);
}

/**
 * Returns development widgets not present in published widgets.
 * Original: ea
 */
function getDevelopmentWidgets(): LocalPlugin[] {
  const publishedWidgets = useUserPublishedWidgets();
  const localPlugins = useLocalPluginsExcludingWidgets();
  return useMemo(() => Object.values(localPlugins).filter(local => publishedWidgets.every(published => published.id !== local.plugin_id)), [publishedWidgets, localPlugins]);
}

/**
 * Returns the total count of user published widgets and development widgets.
 * Original: getTotalUserWidgetsWithDevelopmentCount
 */
export function getTotalUserWidgetsWithDevelopmentCount(): number {
  const publishedWidgets = useUserPublishedWidgets();
  const developmentWidgets = getDevelopmentWidgets();
  return publishedWidgets.length + developmentWidgets.length;
}

/**
 * Returns pending publisher widgets for the current user.
 * Original: getPendingPublisherWidgetsForCurrentUser
 */
export function getPendingPublisherWidgetsForCurrentUser(): PublishedPlugin[] {
  const userId = getUserId();
  const publishedWidgets = useUserPublishedWidgets();
  return userId != null ? publishedWidgets.filter(widget => isPendingPublisher(widget, userId)) : [];
}

/**
 * Finds a published plugin by id, excluding pending publishers.
 * Original: findPublishedPluginById
 * @param id string
 * @returns PublishedPlugin | undefined
 */
export function findPublishedPluginById(id: string): PublishedPlugin | undefined {
  return Object.values(useUserPublishedPlugins({
    includePendingPublishers: false
  })).find(plugin => plugin.id === id);
}

/**
 * Finds a published widget by id, excluding pending publishers.
 * Original: findPublishedWidgetById
 * @param id string
 * @returns PublishedPlugin | undefined
 */
export function findPublishedWidgetById(id: string): PublishedPlugin | undefined {
  return Object.values(useUserPublishedWidgets({
    includePendingPublishers: false
  })).find(widget => widget.id === id);
}
export function parseAndValidateManifest(e) {
  try {
    let t = typeof e == 'string' ? JSON.parse(e) : e;
    t.documentAccess !== 'dynamic-page' && delete t.documentAccess;
    let r = ManifestSchema.safeParse(t);
    if (!r.success) {
      reportError(ServiceCategories.EXTENSIBILITY, new Error('manifest schema parse error'), {
        extra: {
          jsonParsedResult: JSON.stringify(t, null, 2),
          rawManifest: JSON.stringify(e, null, 2),
          errors: r.error.format()
        }
      });
      return t;
    }
    return r.data;
  } catch {
    reportError(ServiceCategories.EXTENSIBILITY, new Error('manifest JSON parse error'), {
      extra: {
        rawManifest: e
      }
    });
  }
}
export function transformPublishedPluginToInstalled(e, t: any) {
  if (e.current_plugin_version_id === null) return null;
  let r = e.versions[e.current_plugin_version_id];
  if (!r) return null;
  let n = {
    id: e.current_plugin_version_id,
    pluginId: e.id,
    resourceStagingSignature: null,
    updatedAt: new Date(Date.now()),
    iconUrl: r.redirect_icon_url,
    coverImageUrl: r.redirect_cover_image_url,
    name: r.name,
    version: r.version,
    releaseNotes: r.release_notes,
    description: r.description,
    tagline: r.tagline,
    creatorPolicy: r.creator_policy,
    manifest: JSON.stringify(r.manifest),
    createdAt: new Date(r.created_at),
    iconPath: r.redirect_icon_url,
    coverImagePath: r.redirect_cover_image_url,
    codePath: r.redirect_code_url,
    plugin: {
      currentPluginVersionId: r.id
    },
    playgroundFigFileKey: r.playground_fig_file?.key ?? null,
    hasPlaygroundFile: !!r.playground_file_version_id,
    playgroundFileVersionId: r.playground_file_version_id ?? null,
    userId: '',
    snapshotPath: ''
  };
  let i = {
    id: e.id,
    currentPluginVersionId: e.current_plugin_version_id,
    publishingStatus: e.publishing_status,
    isWidget: e.is_widget,
    orgId: e.org_id,
    thumbnailUrl: '',
    userId: '',
    updatedAt: new Date(Date.now()),
    createdAt: new Date(e.created_at),
    unpublishedAt: null,
    supportContact: e.support_contact,
    approvedAt: new Date(Date.now()),
    installCount: e.install_count,
    likeCount: 0,
    viewCount: e.view_count,
    blockedAt: null,
    profileId: '',
    commentCount: e.comment_count,
    hideRelatedContentByOthers: e.hide_related_content_by_others ?? null,
    isPublic: e.publishing_status === FPublicationStatusType.APPROVED_PUBLIC,
    isInspect: e.editor_type === 'inspect',
    isSlides: r?.manifest.editorType?.includes(ManifestEditorType.SLIDES) || !1,
    widgetsWhitelistEnforced: null,
    pluginsWhitelistEnforced: null,
    monetizedResourceMetadataId: e.monetized_resource_metadata?.id ?? null,
    thirdPartyM10nStatus: e.third_party_m10n_status ?? null,
    monetizationStatus: e.monetization_status ?? null,
    canRead: !0,
    categoryId: '',
    uniqueRunCount: 0,
    pluginEditorType: 0,
    commentsSetting: '',
    currentUserFirstRanAt: '',
    profileInstallStatus: 2,
    redirectThumbnailUrl: '',
    communityPublishers: e.community_publishers?.accepted.map(t => ({
      id: t.id,
      isPending: !1,
      role: FPublisherType.CREATOR,
      userId: t.primary_user_id,
      profileId: t.id,
      pluginId: e.id,
      hubFileId: null,
      profile: {
        id: t.id,
        profileHandle: t.profile_handle,
        team: t.entity_type === 'team' ? {
          id: t.id,
          name: t.name
        } : null,
        org: t.entity_type === 'org' ? {
          id: t.id,
          name: t.name
        } : null,
        user: t.entity_type === 'user' ? {
          id: t.primary_user_id,
          name: t.name
        } : null,
        teamId: t.entity_type === 'team' ? t.id : null,
        orgId: t.entity_type === 'org' ? t.id : null,
        primaryUserId: t.entity_type === 'user' ? t.primary_user_id : null,
        publicAt: new Date(Date.now()),
        website: null,
        description: null,
        location: null,
        twitter: null,
        instagram: null,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
        followerCount: 0,
        followingCount: 0,
        coverImagePath: null,
        pronouns: null,
        badges: [],
        communityUserIsFollowing: t.current_user_is_following,
        communityUserIsFollowed: t.current_user_is_followed,
        entityType: t.entity_type,
        currentUserIsFollowing: !1,
        currentUserIsFollowed: !1,
        name: t.name,
        imgUrl: null,
        imgUrls: {}
      }
    })) || [],
    currentPluginVersion: n,
    viewableInEditor: !0,
    publishingStatusUpdatedAt: null,
    isSeoIndexingAllowed: null,
    currentPlanUser: null
  };
  return {
    pluginId: e.id,
    createdAt: new Date(Date.now()),
    userId: t.userId,
    orgId: t.orgId,
    pluginVersionId: e.current_plugin_version_id,
    plugin: i,
    pinnedStatus: FPinStatusType.UNPINNED
  };
}
/**
 * Creates plugin manifest data for a given plugin.
 * Original: createPluginManifestData
 * @param plugin PublishedPlugin
 * @param orgId string
 * @param userId string
 * @param installedBy string | null
 * @returns LocalPlugin | undefined
 */
export function createPluginManifestData(plugin: PublishedPlugin, orgId: string, userId: string, installedBy: string | null): LocalPlugin | undefined {
  // Guard clause for plugin visibility and org constraints
  if (!plugin || plugin.publishingStatus && [FPublicationStatusType.ORG_PRIVATE, FPublicationStatusType.ORG_PRIVATE_PENDING_PUBLIC].includes(plugin.publishingStatus) && (!plugin.orgId || plugin.orgId !== orgId) && !getFeatureFlags().community_hub_admin) {
    return;
  }
  const version = plugin.currentPluginVersion;
  if (!version) return;
  if (!version.manifest) {
    reportError(ServiceCategories.EXTENSIBILITY, new Error('manifest missing'), {
      extra: {
        plugin
      }
    });
    return;
  }
  const resourceType = plugin.isWidget ? 'widget' : 'plugin';
  const manifest = parseAndValidateManifest(version.manifest);
  if (!manifest) return;
  let resourceParams = `?resource_type=${resourceType}&resource_id=${plugin.id}`;
  if (userId) resourceParams += `&fuid=${userId}`;
  const manifestData: LocalPlugin = {
    id: version.id,
    plugin_id: plugin.id,
    name: version.name || '',
    current_plugin_version_id: version.plugin?.currentPluginVersionId || undefined,
    version: version.version || '',
    release_notes: version.releaseNotes || '',
    is_private: !!plugin.orgId,
    description: version.description || '',
    creator_policy: version.creatorPolicy ?? '',
    manifest,
    installed_by: installedBy,
    tagline: version.tagline || '',
    created_at: version.createdAt.toString(),
    redirect_icon_url: `/community/icon${resourceParams}`,
    redirect_cover_image_url: `/community/thumbnail${resourceParams}`,
    redirect_code_url: `/community/${resourceType}/${plugin.id}/code`,
    ...(plugin.communityPublishers && {
      community_publishers: plugin.communityPublishers
    }),
    ...(plugin.isWidget && {
      redirect_snapshot_url: `/community/snapshot${resourceParams}`
    }),
    ...(plugin.orgId && {
      org_id: plugin.orgId
    })
  };
  return manifestData;
}

/**
 * Parses installed plugins and groups them by source and type.
 * Original: e_
 */
export function parseInstalledPlugins(subscription: {
  status: string;
  data: any;
}, orgId: string, userId: string): ParsedExtensionData {
  const plugins: PluginMap = {};
  const widgets: WidgetMap = {};
  const orgPlugins: PluginMap = {};
  const orgWidgets: WidgetMap = {};
  const userPlugins: PluginMap = {};
  const userWidgets: WidgetMap = {};
  if (subscription.status !== 'loaded') {
    return {
      plugins: {},
      widgets: {},
      orgPlugins: {},
      orgWidgets: {},
      userPlugins: {},
      userWidgets: {}
    };
  }
  const data = subscription.data;
  const sources = [{
    source: 'org',
    savedExtensions: data.org?.installedPlugins
  }, {
    source: 'user',
    savedExtensions: data.currentUser?.installedPlugins
  }];
  for (const {
    source,
    savedExtensions
  } of sources) {
    if (savedExtensions) {
      for (const ext of savedExtensions) {
        const {
          plugin
        } = ext;
        if (!plugin || !plugin.viewableInEditor) continue;
        const manifestData = createPluginManifestData(plugin, orgId, userId, source);
        if (!manifestData) continue;
        if (plugin.isWidget) {
          widgets[ext.pluginId] = manifestData;
          if (source === 'org') orgWidgets[ext.pluginId] = manifestData;
          if (source === 'user') userWidgets[ext.pluginId] = manifestData;
        } else {
          plugins[ext.pluginId] = manifestData;
          if (source === 'org') orgPlugins[ext.pluginId] = manifestData;
          if (source === 'user') userPlugins[ext.pluginId] = manifestData;
        }
      }
    }
  }
  return {
    plugins,
    widgets,
    orgPlugins,
    orgWidgets,
    userPlugins,
    userWidgets
  };
}

// Debounced plugin/widget fetch triggers
const pluginFetchQueue = new Set<string>();
const widgetFetchQueue = new Set<string>();
const triggerPluginWidgetFetch = debounce(dispatch => {
  if (pluginFetchQueue.size > 0) {
    dispatch(f1({
      pluginIds: Array.from(pluginFetchQueue)
    }));
    pluginFetchQueue.clear();
  }
  if (widgetFetchQueue.size > 0) {
    dispatch(O8({
      widgetIds: Array.from(widgetFetchQueue)
    }));
    widgetFetchQueue.clear();
  }
}, 300);

/**
 * Loads installed plugins/widgets and triggers fetches for missing icons/thumbnails.
 * Original: useInstalledPluginsAndWidgets
 */
export function useInstalledPluginsAndWidgets(): PluginCollections {
  const dispatch = useDispatch();
  const orgId = useSelector<ObjectOf, string>(state => state.currentUserOrgId);
  const subscription = useSubscription(InstalledPlugins, {
    orgId
  });
  const userId = getUserId();
  const supported = isEditorTypeSupported();
  return useMemo(() => {
    if (subscription.status !== 'loaded') {
      return {
        loaded: false,
        plugins: {},
        widgets: {},
        orgPlugins: {},
        orgWidgets: {},
        userPlugins: {},
        userWidgets: {}
      };
    }
    const {
      plugins,
      widgets,
      orgPlugins,
      orgWidgets,
      userPlugins,
      userWidgets
    } = parseInstalledPlugins(subscription, orgId, userId);

    // Trigger fetch for plugin/widget icons/thumbnails if missing
    const triggerFetch = (dispatch, plugins, widgets) => {
      Object.keys(plugins).forEach(id => pluginFetchQueue.add(id));
      Object.keys(widgets).forEach(id => widgetFetchQueue.add(id));
      triggerPluginWidgetFetch(dispatch);
    };
    triggerFetch(dispatch, plugins, supported ? widgets : {});
    return {
      loaded: true,
      plugins,
      widgets: supported ? widgets : {},
      orgPlugins,
      orgWidgets: supported ? orgWidgets : {},
      userPlugins,
      userWidgets: supported ? userWidgets : {}
    };
  }, [dispatch, subscription, orgId, userId, supported]);
}

/**
 * Returns filtered installed plugins/widgets by selected editor type.
 * Original: useFilteredInstalledPluginsAndWidgets
 */
export function useFilteredInstalledPluginsAndWidgets(): FilteredPluginCollections {
  const editorType = getSelectedEditorType();
  const collections = useInstalledPluginsAndWidgets();
  return useMemo(() => ({
    loaded: collections.loaded,
    plugins: filterEntriesByEditorType(editorType, collections.plugins),
    widgets: filterEntriesByEditorType(editorType, collections.widgets),
    orgPlugins: filterEntriesByEditorType(editorType, collections.orgPlugins),
    orgWidgets: filterEntriesByEditorType(editorType, collections.orgWidgets),
    userPlugins: filterEntriesByEditorType(editorType, collections.userPlugins),
    userWidgets: filterEntriesByEditorType(editorType, collections.userWidgets)
  }), [editorType, collections]);
}

/**
 * Returns installed plugins/widgets that can be run in the current editor type.
 * Original: useRunnableInstalledPluginsAndWidgets
 */
export function useRunnableInstalledPluginsAndWidgets(collections: PluginCollections): FilteredPluginCollections {
  const editorType = getSelectedEditorType();
  return useMemo(() => {
    const filterCanRun = (map: PluginMap) => Object.fromEntries(Object.entries(map).filter(([_, plugin]) => canRunPlugin({
      plugin,
      editorType
    }).canRun));
    return {
      loaded: true,
      plugins: filterCanRun(collections.plugins),
      widgets: filterCanRun(collections.widgets),
      orgPlugins: filterCanRun(collections.orgPlugins),
      orgWidgets: filterCanRun(collections.orgWidgets),
      userPlugins: filterCanRun(collections.userPlugins),
      userWidgets: filterCanRun(collections.userWidgets)
    };
  }, [collections, editorType]);
}

/**
 * Loads a single plugin manifest by pluginId.
 * Original: usePluginManifestById
 */
export function usePluginManifestById(pluginId: string, enabled: boolean): {
  loaded: boolean;
  plugin: LocalPlugin | null;
} {
  const orgId = useCurrentUserOrg()?.id ?? null;
  const userId = getUserId();
  const subscription = useSubscription(Plugin, {
    orgId,
    pluginId
  }, {
    enabled
  });
  const plugin = subscription.data?.plugin;
  const status = subscription.status;
  return useMemo(() => status !== 'loaded' ? {
    loaded: false,
    plugin: null
  } : {
    loaded: true,
    plugin: plugin ? createPluginManifestData(plugin, orgId ?? '', userId, null) ?? null : null
  }, [status, plugin, orgId, userId]);
}

/**
 * Loads multiple plugin manifests by pluginIds.
 * Original: usePluginManifestsByIds
 */
export function usePluginManifestsByIds(pluginIds: string[], options: {
  enabled: boolean;
}): LocalPlugin[] {
  const orgId = useCurrentUserOrg()?.id ?? null;
  const userId = getUserId();
  const queries = useMemo(() => pluginIds.map(id => ({
    orgId,
    pluginId: id
  })), [pluginIds, orgId]);
  const subscriptions = useMultiSubscription(Plugin, queries, options);
  const results: LocalPlugin[] = [];
  subscriptions.forEach(sub => {
    const status = sub.result.status;
    const plugin = sub.result.data?.plugin;
    if (status !== 'loaded' || !plugin) return;
    const manifest = createPluginManifestData(plugin, orgId ?? '', userId, null);
    if (manifest) results.push(manifest);
  });
  return results;
}
/**
 * Compares two plugins by name for sorting.
 * Original: comparePluginsByName
 * @param a LocalPlugin
 * @param b LocalPlugin
 * @returns number
 */
export function comparePluginsByName(a: LocalPlugin, b: LocalPlugin): number {
  return a.name.localeCompare(b.name);
}

/**
 * Default plugin collection state.
 * Original: eS
 */
const defaultPluginCollection: PluginCollections = {
  loaded: true,
  plugins: {},
  widgets: {},
  orgPlugins: {},
  orgWidgets: {},
  userPlugins: {},
  userWidgets: {}
};

/**
 * Returns installed plugin versions filtered by editor type.
 * Original: useInstalledPluginVersions
 */
export function useInstalledPluginVersions() {
  const selectedView = useSelector((state: any) => state.selectedView);
  const installedPluginVersions = useSelector<PublishedPlugin>(state => state.installedPluginVersions) as PluginVersion;
  if (selectedView.view !== 'fullscreen') return defaultPluginCollection;
  const fileType = convertEditorTypeToFileType(selectedView.editorType);
  if (!installedPluginVersions.loaded) return installedPluginVersions;
  const filteredPlugins: PluginMap = {};
  for (const plugin of Object.values(installedPluginVersions.plugins)) {
    if (isEditorTypeMatch(fileType, plugin.manifest.editorType)) {
      filteredPlugins[plugin.plugin_id] = plugin;
    } else if (isFullscreenDevHandoffView(selectedView) && isDevModePlugin(plugin) || fileType === 'figma' && isDevModePlugin(plugin)) {
      filteredPlugins[plugin.plugin_id] = plugin;
    }
  }
  const editorType = selectedView.view === 'fullscreen' ? selectedView.editorType : null;
  return {
    loaded: true,
    plugins: filterEntriesByEditorType(editorType, filteredPlugins),
    widgets: {},
    orgPlugins: {},
    orgWidgets: {},
    userPlugins: {},
    userWidgets: {}
  };
}

/**
 * Returns widgets filtered by editor type and fullscreen view.
 * Original: useFilteredWidgets
 */
export function useFilteredWidgets(): WidgetMap {
  const {
    widgets
  } = useInstalledPluginsAndWidgets();
  const isFullscreen = useSelector((state: any) => state.selectedView.view === 'fullscreen');
  const filteredWidgets = filterEntriesByEditorTypeAndMemo(widgets);
  return useMemo(() => isFullscreen ? filteredWidgets : {}, [isFullscreen, filteredWidgets]);
}

/**
 * Returns recently used widgets for the current user/editor type.
 * Original: useRecentlyUsedWidgets
 */
export function useRecentlyUsedWidgets(): LocalPlugin[] {
  const recentlyUsed = useSelector((state: any) => state.recentlyUsed.widgets);
  const localPlugins = useLocalPluginsExcludingWidgets();
  const mappedEditorType = useMappedEditorTypeA();
  const userId = getUserId();
  const supported = isEditorTypeSupported();
  return useMemo(() => {
    const result: LocalPlugin[] = [];
    if (supported && mappedEditorType && userId && recentlyUsed[mappedEditorType]) {
      recentlyUsed[mappedEditorType].forEach((resource: RecentlyUsedResource) => {
        if (userId && !resource.run_by_user_ids?.includes(userId)) return;
        const fetched = recentlyUsed.fetchedResources[resource.id];
        if (fetched && fetched.version) {
          result.push(fetched.version);
          return;
        }
        if (localPlugins[resource.id]) {
          result.push(localPlugins[resource.id]);
        }
      });
    }
    return result;
  }, [mappedEditorType, localPlugins, recentlyUsed, userId, supported]);
}

/**
 * Returns deduplicated recently used widgets.
 * Original: useDedupedRecentlyUsedWidgets
 */
export function useDedupedRecentlyUsedWidgets(): LocalPlugin[] {
  return dedupePlugins(useRecentlyUsedWidgets());
}

/**
 * Returns recently used plugins for the current user/editor type.
 * Original: useRecentlyUsedPlugins
 */
export function useRecentlyUsedPlugins(): LocalPlugin[] {
  const recentlyUsed = useSelector((state: any) => state.recentlyUsed.plugins);
  const localPlugins = useLocalPluginsExcludingWidgets();
  const mappedEditorType = useMappedEditorTypeA();
  const userId = getUserId();
  const plugins = useMemo(() => {
    const result: LocalPlugin[] = [];
    if (mappedEditorType && userId && recentlyUsed[mappedEditorType]) {
      recentlyUsed[mappedEditorType].forEach((resource: RecentlyUsedResource) => {
        if (userId && !resource.run_by_user_ids?.includes(userId)) return;
        const fetched = recentlyUsed.fetchedResources[resource.id];
        if (fetched && fetched.version) {
          result.push(fetched.version);
          return;
        }
        if (localPlugins[resource.id]) {
          result.push(localPlugins[resource.id]);
        }
      });
    }
    return result;
  }, [mappedEditorType, recentlyUsed, localPlugins, userId]);
  return filterArrayByEditorTypeAndMemo(plugins);
}

/**
 * Returns deduplicated recently used plugins.
 * Original: useDedupedRecentlyUsedPlugins
 */
export function useDedupedRecentlyUsedPlugins(): LocalPlugin[] {
  return dedupePlugins(useRecentlyUsedPlugins());
}

/**
 * Deduplicates plugins by plugin_id.
 * Original: eO
 */
function dedupePlugins(plugins: LocalPlugin[]): LocalPlugin[] {
  const seen: Record<string, boolean> = {};
  return plugins.filter(plugin => {
    if (!seen[plugin.plugin_id]) {
      seen[plugin.plugin_id] = true;
      return true;
    }
    return false;
  });
}

/**
 * Returns a map of deduplicated recently used plugins.
 * Original: useRecentlyUsedPluginsMap
 */
export function useRecentlyUsedPluginsMap(): PluginMap {
  const plugins = useDedupedRecentlyUsedPlugins();
  return useMemo(() => {
    const map: PluginMap = {};
    plugins.forEach(plugin => {
      map[plugin.plugin_id] = plugin;
    });
    return map;
  }, [plugins]);
}

/**
 * Returns a map of deduplicated recently used widgets.
 * Original: useRecentlyUsedWidgetsMap
 */
export function useRecentlyUsedWidgetsMap(): WidgetMap {
  const widgets = useDedupedRecentlyUsedWidgets();
  return useMemo(() => {
    const map: WidgetMap = {};
    widgets.forEach(widget => {
      map[widget.plugin_id] = widget;
    });
    return map;
  }, [widgets]);
}

/**
 * Returns last added timestamps for plugins and widgets for the current user/editor type.
 * Original: useLastAddedTimestamps
 */
export function useLastAddedTimestamps(): Record<string, string> {
  const plugins = useSelector((state: any) => state.recentlyUsed.plugins);
  const widgets = useSelector((state: any) => state.recentlyUsed.widgets);
  const userId = getUserId();
  const mappedEditorType = useMappedEditorTypeA();
  return useMemo(() => {
    const timestamps: Record<string, string> = {};
    if (mappedEditorType && userId) {
      plugins[mappedEditorType]?.forEach((resource: RecentlyUsedResource) => {
        const ts = resource.last_added_at_by_user_id?.[userId];
        if (ts) timestamps[resource.id] = ts;
      });
      widgets[mappedEditorType]?.forEach((resource: RecentlyUsedResource) => {
        const ts = resource.last_added_at_by_user_id?.[userId];
        if (ts) timestamps[resource.id] = ts;
      });
    }
    return timestamps;
  }, [mappedEditorType, userId, plugins, widgets]);
}

/**
 * Returns plugins filtered by allowlist and editor type.
 * Original: eD
 */
function filterPluginsByAllowlistAndEditorType(allowlist: PluginMap, publishedPlugins: PluginMap, editorType: FEditorType | null): PluginMap {
  const filtered: PluginMap = Object.keys(allowlist).reduce((acc, pluginId) => {
    if (publishedPlugins[pluginId]) {
      const plugin = publishedPlugins[pluginId];
      const version = getCurrentPluginVersion(plugin);
      if (!version) return acc;
      acc[pluginId] = version;
    }
    return acc;
  }, {} as PluginMap);
  return filterEntriesByEditorType(editorType, filtered);
}

/**
 * Returns allowlisted plugin ids for current org/file.
 * Original: ek
 */
function useAllowlistedPluginIds(resourceType: 'plugin' | 'widget') {
  const orgId = useCurrentUserOrg()?.id ?? '';
  const dispatch = useDispatch();
  const allowlisted = useSelector((state: any) => resourceType === 'plugin' ? state.whitelistedPlugins : state.whitelistedWidgets);
  const hasOrg = !!orgId;
  const allowlistData = useMemo(() => {
    const fileKey = useCurrentFileKey();
    const idsFromApi = getAllowlistedExtensionIds(resourceType, !!fileKey);
    const idsFromStore = getAllowlistedPluginOrWidgetIds(orgId ?? '', resourceType, !!orgId && !fileKey);
    return fileKey ? idsFromApi : idsFromStore;
  }, [orgId, resourceType]);
  const loadedIds = allowlistData.loaded ? allowlistData.data : [];
  if (!hasOrg) return allowlisted;
  if (!allowlistData.loaded) return {};
  const allowlist = {};
  loadedIds.forEach((id: string) => {
    if (id) allowlist[id] = true;
  });
  if (!deepEqual(allowlist, allowlisted)) {
    dispatch(resourceType === 'plugin' ? setPluginAllowlisted(allowlist) : setWidgetsAllowlisted(allowlist));
  }
  return allowlist;
}

/**
 * Returns allowlisted plugins filtered by editor type.
 * Original: useAllowlistedPlugins
 */
export function useAllowlistedPlugins(): PluginMap {
  const editorType = getEditorTypeOrNull();
  const org = useCurrentUserOrg();
  const publishedPlugins = usePublishedPlugins();
  const isWhitelistEnforced = !!(org && org.plugins_whitelist_enforced);
  const allowlist = useAllowlistedPluginIds('plugin');
  const dispatch = useDispatch<AppDispatch>();
  const fileKey = useCurrentFileKey();
  const allowListKey = getPluginAllowListKey(org?.id ?? '', fileKey);
  const isLoading = useSelector((state: any) => !!org && isDefined(state.loadingState, allowListKey));
  useEffect(() => {
    if (isWhitelistEnforced && !isLoading) {
      dispatch(initializePluginAllowlist({}));
    }
  }, [isWhitelistEnforced, dispatch, isLoading]);
  return useMemo(() => filterPluginsByAllowlistAndEditorType(allowlist, publishedPlugins, editorType), [editorType, allowlist, publishedPlugins]);
}

/**
 * Returns allowlisted widgets filtered by editor type.
 * Original: useAllowlistedWidgets
 */
export function useAllowlistedWidgets(): WidgetMap {
  const editorType = getEditorTypeOrNull();
  const org = useCurrentUserOrg();
  const publishedWidgets = usePluginedWidgets();
  const isWhitelistEnforced = !!(org && org.widgets_whitelist_enforced);
  const allowlist = useAllowlistedPluginIds('widget');
  const dispatch = useDispatch<AppDispatch>();
  const fileKey = useCurrentFileKey();
  const allowListKey = getWidgetAllowListKey(org?.id ?? '', fileKey);
  const isLoading = useSelector((state: any) => !!org && isDefined(state.loadingState, allowListKey));
  useEffect(() => {
    if (isWhitelistEnforced && !isLoading) {
      dispatch(initializeWidgetAllowlist({}));
    }
  }, [isWhitelistEnforced, dispatch, isLoading]);
  const filtered = useMemo(() => filterPluginsByAllowlistAndEditorType(allowlist, publishedWidgets, editorType), [allowlist, publishedWidgets, editorType]);
  const supported = isEditorTypeSupported();
  const empty: WidgetMap = useMemo(() => ({}), []);
  return supported ? filtered : empty;
}
let ej = 'plugin_search_duration';
let eU = 'widget_search_duration';
function eB(e, t) {
  t.elapsedMs && trackEventAnalytics(e, t, {
    forwardToDatadog: !0
  });
}
/**
 * Provides plugin search functionality for server-side search.
 * Original: usePluginServerSideSearch
 */
export function usePluginServerSideSearch(editorType: FEditorType) {
  const [isLoading, setIsLoading] = useState(false);
  const [hasResolved, setHasResolved] = useState(false);
  const [lastQuery, setLastQuery] = useState<string | null>(null);
  const currentOrg = useSelector((state: any) => state.currentUserOrgId && state.orgById[state.currentUserOrgId]);
  const orgId = currentOrg && currentOrg.id;
  const isOrgUser = useSelector((state: any) => !!(orgId && state.user && state.orgUsersByOrgId[orgId][state.user.id]?.permission !== FUserRoleType.GUEST));
  const dispatch = useDispatch<AppDispatch>();
  const installedPlugins = useInstalledPluginVersions().plugins;
  const figmaMobile = getFigmaMobile();
  const pricingTier = figmaMobile?.shouldOptimizeForIpadApp || getFeatureFlags().cmty_m10n_test_apple_os ? 'free' : 'all';
  const isDevHandoff = isDevHandoffEditorType();

  /**
   * Triggers a server-side search for plugins.
   * @param query string
   * @param setPublicResults (results: string[]) => void
   * @param setOrgResults (results: string[]) => void
   * @param setInstalledResults (results: string[]) => void
   */
  const pluginServerSideSearch = useCallback((query: string, setPublicResults: (results: string[]) => void, setOrgResults: (results: string[]) => void, setInstalledResults: (results: string[]) => void) => {
    const timer = new PerfTimer(ej, {});
    timer.start();
    const [publicPromise, orgPromise] = searchAPIHandler.getCommunityPlugins(query, orgId, pricingTier, editorType, isDevHandoff, isOrgUser);
    setIsLoading(true);
    setHasResolved(false);
    Promise.all([publicPromise, orgPromise]).then(([publicRes, orgRes]) => {
      setHasResolved(true);
      const allResults: PublishedPlugin[] = [];
      const publicIds = publicRes.data.meta.results.map((item: any) => {
        allResults.push(item.model);
        return item.model.id;
      });
      const orgIds = orgRes ? orgRes.map((item: any) => {
        allResults.push(item.model);
        return item.model.id;
      }) : [];
      dispatch(mergePublishedPluginThunk({
        publishedPlugins: allResults,
        src: 'universalInsert'
      }));
      // Split results by installed/uninstalled
      const installedPublic = publicIds.filter(id => installedPlugins[id]);
      const uninstalledPublic = publicIds.filter(id => !installedPlugins[id]);
      const installedOrg = orgIds.filter(id => installedPlugins[id]);
      const uninstalledOrg = orgIds.filter(id => !installedPlugins[id]);
      setPublicResults(uninstalledPublic);
      setOrgResults(uninstalledOrg);
      setInstalledResults([...installedOrg, ...installedPublic]);
      setLastQuery(query);
      setIsLoading(false);
      eB(ej, {
        elapsedMs: timer.stop(),
        editorType,
        query,
        numPublicResults: publicIds.length,
        numOrgResults: orgIds.length
      });
    }).catch(error => {
      const errorData = {
        query,
        current_org_id: orgId || '',
        resource_type: ResourceTypes.BrowseResourceTypes.PLUGINS,
        editor_type: editorType,
        did_org_search: isOrgUser,
        error: error?.message,
        status: error?.status
      };
      logError('search', 'Search error for Community resources in inserts modal', errorData, {
        reportAsSentryError: true
      });
      const message = getI18nString('community.actions.an_error_occurred_while_searching_for_plugins');
      dispatch(VisualBellActions.enqueue({
        error: true,
        message
      }));
    });
  }, [dispatch, editorType, installedPlugins, isDevHandoff, orgId, pricingTier, isOrgUser]);
  return {
    pluginServerSideSearch,
    pluginSearchIsLoading: isLoading,
    pluginSearchHasResolved: hasResolved,
    setLastPluginSearchQuery: setLastQuery,
    lastPluginSearchQuery: lastQuery
  };
}

/**
 * Provides widget search functionality for server-side search.
 * Original: useWidgetServerSideSearch
 */
export function useWidgetServerSideSearch(editorType: FEditorType) {
  const [isLoading, setIsLoading] = useState(false);
  const [hasResolved, setHasResolved] = useState(false);
  const [lastQuery, setLastQuery] = useState<string | null>(null);
  const currentOrg = useSelector((state: any) => state.currentUserOrgId && state.orgById[state.currentUserOrgId]);
  const orgId = currentOrg && currentOrg.id;
  const isOrgUser = useSelector((state: any) => !!(orgId && state.user && state.orgUsersByOrgId[orgId][state.user.id]?.permission !== FUserRoleType.GUEST));
  const filteredWidgets = useFilteredWidgets();
  const dispatch = useDispatch<AppDispatch>();
  const figmaMobile = getFigmaMobile();
  const pricingTier = figmaMobile?.shouldOptimizeForIpadApp || getFeatureFlags().cmty_m10n_test_apple_os ? 'free' : 'all';

  /**
   * Triggers a server-side search for widgets.
   * @param query string
   * @param setPublicResults (results: string[]) => void
   * @param setOrgResults (results: string[]) => void
   * @param setInstalledResults (results: string[]) => void
   */
  const widgetServerSideSearch = useCallback((query: string, setPublicResults: (results: string[]) => void, setOrgResults: (results: string[]) => void, setInstalledResults: (results: string[]) => void) => {
    const timer = new PerfTimer(eU, {});
    timer.start();
    const [publicPromise, orgPromise] = searchAPIHandler.getCommunityWidgets(query, orgId, pricingTier, editorType, isOrgUser);
    setIsLoading(true);
    setHasResolved(false);
    Promise.all([publicPromise, orgPromise]).then(([publicRes, orgRes]) => {
      setHasResolved(true);
      const allResults: PublishedPlugin[] = [];
      const publicIds = publicRes.data.meta.results.map((item: any) => {
        allResults.push(item.model);
        return item.model.id;
      });
      const orgIds = orgRes.map((item: any) => {
        allResults.push(item.model);
        return item.model.id;
      });
      dispatch(mergePublishedPluginThunk({
        publishedPlugins: allResults,
        src: 'universalInsert'
      }));
      // Split results by installed/uninstalled
      const installedPublic = publicIds.filter(id => filteredWidgets[id]);
      const uninstalledPublic = publicIds.filter(id => !filteredWidgets[id]);
      const installedOrg = orgIds.filter(id => filteredWidgets[id]);
      const uninstalledOrg = orgIds.filter(id => !filteredWidgets[id]);
      setPublicResults(uninstalledPublic);
      setOrgResults(uninstalledOrg);
      setInstalledResults([...installedOrg, ...installedPublic]);
      setIsLoading(false);
      setLastQuery(query);
      eB(eU, {
        elapsedMs: timer.stop(),
        editorType,
        query,
        numPublicResults: publicIds.length,
        numOrgResults: orgIds.length
      });
    }).catch(error => {
      const errorData = {
        query,
        current_org_id: orgId || '',
        resource_type: ResourceTypes.BrowseResourceTypes.WIDGETS,
        editor_type: editorType,
        did_org_search: isOrgUser,
        error: error?.message,
        status: error?.status
      };
      logError('search', 'Search error for Community resources in inserts modal', errorData, {
        reportAsSentryError: true
      });
      const message = getI18nString('community.actions.an_error_occurred_while_searching_for_widgets');
      dispatch(VisualBellActions.enqueue({
        error: true,
        message
      }));
    });
  }, [dispatch, editorType, orgId, pricingTier, filteredWidgets, isOrgUser]);
  return {
    widgetServerSideSearch,
    widgetSearchIsLoading: isLoading,
    widgetSearchHasResolved: hasResolved,
    setLastWidgetSearchQuery: setLastQuery,
    lastWidgetSearchQuery: lastQuery
  };
}

/**
 * Returns unpublished plugins/widgets not present in local plugins.
 * Original: getUnpublishedResources
 */
export function getUnpublishedResources(isWidget: boolean): PublishedPlugin[] {
  const publishedPlugins = useUserPublishedPlugins({
    includePendingPublishers: false
  });
  const publishedWidgets = useUserPublishedWidgets({
    includePendingPublishers: false
  });
  const localPluginsById = useLocalPluginsByPluginId();
  const resources = isWidget ? publishedWidgets : publishedPlugins;
  return resources.filter(resource => !localPluginsById[resource.id]);
}

/**
 * Finds plugin or widget by file id from local or published collections.
 * Original: findPluginOrWidgetByFileId
 */
export function findPluginOrWidgetByFileId(fileId: string, options: {
  searchLocalPlugins?: boolean;
  searchPublishedPlugins?: boolean;
}): LocalPlugin | undefined {
  const localPlugins = getLocalPlugins();
  const publishedPlugins = usePublishedPlugins();
  return useMemo(() => getPluginByFileId({
    idToSearch: fileId,
    localExtensionsByFileId: options.searchLocalPlugins ? localPlugins : undefined,
    publishedExtensions: options.searchPublishedPlugins ? publishedPlugins : undefined
  }), [fileId, options.searchLocalPlugins, options.searchPublishedPlugins, localPlugins, publishedPlugins]);
}

/**
 * Returns a map of all installed, published, and recently used plugins.
 * Original: getAllPluginVersions
 */
export function getAllPluginVersions(): PluginMap {
  const installed = useInstalledPluginVersions();
  const published = useUserPublishedPlugins();
  const recent = useRecentlyUsedPlugins();
  const pluginMap: PluginMap = {};
  Object.values(installed.plugins).forEach(plugin => {
    if (!pluginMap[plugin.plugin_id]) pluginMap[plugin.plugin_id] = plugin;
  });
  Object.values(published).map(getPluginVersion).forEach(plugin => {
    if (!pluginMap[plugin.plugin_id] && !hasLocalFileId(plugin)) pluginMap[plugin.plugin_id] = plugin;
  });
  recent.forEach(plugin => {
    if (!pluginMap[plugin.plugin_id] && !hasLocalFileId(plugin)) pluginMap[plugin.plugin_id] = plugin;
  });
  return pluginMap;
}

/**
 * Converts a plugin/widget map to a boolean allowlist.
 * Original: eK
 */
function toAllowlist(map: PluginMap | WidgetMap): Record<string, boolean> {
  const allowlist: Record<string, boolean> = {};
  Object.keys(map).forEach(id => {
    allowlist[id] = true;
  });
  return allowlist;
}

/**
 * Returns a callback to check if a plugin/widget can run in the current editor type.
 * Original: useCanRunExtension
 */
export function useCanRunExtension() {
  const editorType = getSelectedEditorType();
  const pluginAllowlist = toAllowlist(useAllowlistedPlugins());
  const widgetAllowlist = toAllowlist(useAllowlistedWidgets());
  const state = selectWithShallowEqual((e: any) => ({
    currentUserOrgId: e.currentUserOrgId,
    orgById: e.orgById,
    selectedView: e.selectedView,
    openFile: e.openFile
  }));
  const isReadOnly = useAppModelProperty('isReadOnly');
  return useCallback((plugin: LocalPlugin) => {
    const {
      canRun
    } = canRunPlugin({
      plugin,
      editorType,
      canRunPluginState: {
        ...state,
        mirror: {
          appModel: {
            isReadOnly
          }
        },
        whitelistedPlugins: pluginAllowlist,
        whitelistedWidgets: widgetAllowlist
      }
    });
    return canRun;
  }, [editorType, state, pluginAllowlist, widgetAllowlist, isReadOnly]);
}

/**
 * Returns whether the current user can perform an action.
 * Original: useCanPerformAction
 */
export function useCanPerformAction() {
  return useSelector(canPerformAction);
}

/**
 * Returns whether the current user can run extensions.
 * Original: useCanRunExtensions
 */
export function useCanRunExtensions() {
  return useSelector(canRunExtensions);
}

/**
 * Returns true if the selected editor type supports plugins/widgets.
 * Original: isEditorTypeSupported
 */
export function isEditorTypeSupported(): boolean {
  const editorType = getSelectedEditorType();
  return editorType !== FEditorType.Slides && editorType !== FEditorType.Sites && editorType !== FEditorType.Figmake && editorType !== FEditorType.Cooper;
}

/**
 * Returns true if the given editor type supports plugins/widgets.
 * Original: isEditorTypeSupportedFor
 */
export function isEditorTypeSupportedFor(editorType: FEditorType): boolean {
  return editorType !== FEditorType.Slides && editorType !== FEditorType.Sites && editorType !== FEditorType.Figmake && editorType !== FEditorType.Cooper;
}

/**
 * Returns allowlist validation result for a widget.
 * Original: useWidgetAllowlistValidation
 */
export function useWidgetAllowlistValidation(widgetId: string): WidgetValidationResult {
  const org = useCurrentUserOrg();
  const isWhitelistEnforced = !!(org && org.widgets_whitelist_enforced);
  const isAllowlisted = useSelector((state: any) => state.whitelistedWidgets)[widgetId];
  const localPlugins = useLocalPluginsExcludingWidgets();
  const localWidget = useMemo(() => Object.values(localPlugins).find(p => p.plugin_id === widgetId), [localPlugins, widgetId]);
  const publishedWidget = useSelector((state: any) => state.publishedWidgets[widgetId]);
  const isAllowed = !isWhitelistEnforced || localWidget || publishedWidget?.org_id;
  return {
    isWidgetBlockedByAllowlist: !isAllowlisted && !isAllowed
  };
}

/**
 * Returns allowlist validation result for a plugin.
 * Original: usePluginAllowlistValidation
 */
export function usePluginAllowlistValidation(pluginId: string): PluginValidationResult {
  const dispatch = useDispatch();
  const org = useCurrentUserOrg();
  const isWhitelistEnforced = !!(org && org.plugins_whitelist_enforced);
  const isAllowlisted = useSelector((state: any) => state.whitelistedPlugins)[pluginId];
  const localPlugins = getLocalPlugins();
  const localPlugin = useMemo(() => Object.values(localPlugins).find(p => p.plugin_id === pluginId), [localPlugins, pluginId]);
  const publishedPlugin = useSelector((state: any) => state.publishedPlugins[pluginId]);
  const isAllowed = !isWhitelistEnforced || localPlugin || publishedPlugin?.org_id;
  const isBlocked = !isAllowlisted && !isAllowed;
  return {
    validatePublishedPluginInOrgAllowlist: useCallback(() => {
      if (!isBlocked) return true;
      dispatch(VisualBellActions.enqueue({
        message: getI18nString('universal_insert.plugin_not_in_allowlist'),
        error: true
      }));
      return false;
    }, [isBlocked, dispatch]),
    isPluginBlockedByAllowlist: isBlocked
  };
}

/**
 * Returns allowlist state and filtering functions for plugins/widgets.
 * Original: useExtensionAllowlist
 */
export function useExtensionAllowlist(isWidget: boolean) {
  const org = useCurrentUserOrg();
  const hasPluginAllowList = !!(org && org.plugins_whitelist_enforced);
  const hasWidgetAllowList = !!(org && org.widgets_whitelist_enforced);
  const publicExtensionsDisallowed = !!org && !org.public_plugins_allowed;
  const pluginAllowlist = useAllowlistedPlugins();
  const widgetAllowlist = useAllowlistedWidgets();
  const allowList = isWidget ? widgetAllowlist : pluginAllowlist;
  const hasAllowList = isWidget ? hasWidgetAllowList : hasPluginAllowList;
  const orgId = org?.id ?? '';
  const fileKey = useCurrentFileKey();
  const allowListIsLoading = useIsLoading(isWidget ? getWidgetAllowListKey(orgId, fileKey) : getPluginAllowListKey(orgId, fileKey));
  /**
   * Filters resources by public status and allowlist.
   */
  const filterByAllowlist = useCallback((resources: LocalPlugin[]) => hasAllowList ? resources.filter(resource => !isPublicPlugin(resource) || !!allowList[resource.plugin_id]) : resources, [allowList, hasAllowList]);
  const filterByPublicResourcesAllowed = useCallback((resources: LocalPlugin[]) => publicExtensionsDisallowed ? resources.filter(resource => !isPublicPlugin(resource)) : resources, [publicExtensionsDisallowed]);
  return {
    publicExtensionsDisallowed,
    allowList,
    hasAllowList,
    allowListIsLoading,
    hasPluginAllowList,
    hasWidgetAllowList,
    filterByPublicResourcesAllowed,
    filterByAllowlist
  };
}

/**
 * Returns deduped recently used plugins filtered by allowlist and public status.
 * Original: useFilteredDedupedRecentlyUsedPlugins
 */
export function useFilteredDedupedRecentlyUsedPlugins(): LocalPlugin[] {
  const {
    filterByAllowlist,
    filterByPublicResourcesAllowed
  } = useExtensionAllowlist(false);
  return filterByAllowlist(filterByPublicResourcesAllowed(useDedupedRecentlyUsedPlugins()));
}
export const $1 = getLocalPlugins;
export const AR = useRecentlyUsedWidgets;
export const B7 = findPublishedPluginById;
export const BE = isEditorTypeSupportedFor;
export const Be = useInstalledPluginsAndWidgets;
export const CI = getTotalUserWidgetsCount;
export const Dy = getTotalUserWidgetsWithDevelopmentCount;
export const E$ = useGroupedUserWidgets;
export const FG = useRecentlyUsedPlugins;
export const I5 = usePluginServerSideSearch;
export const Im = useLocalPluginsByPluginId;
export const LR = useGroupedUserPlugins;
export const Lq = getPluginOrWidget;
export const N3 = transformPublishedPluginToInstalled;
export const NU = useFilteredWidgets;
export const QZ = isEditorTypeSupported;
export const S0 = findPluginOrWidgetByFileId;
export const SG = useWidgetServerSideSearch;
export const Tg = useDedupedRecentlyUsedPlugins;
export const U6 = useAllowlistedWidgets;
export const Ud = findPublishedWidgetById;
export const V2 = useCanRunExtensions;
export const WK = findLocalPluginById;
export const YN = useCanRunExtension;
export const YO = useRecentlyUsedWidgetsMap;
export const YW = comparePluginsByName;
export const Ys = useWidgetAllowlistValidation;
export const ZT = usePluginedWidgets;
export const _P = usePluginManifestById;
export const b4 = useRecentlyUsedPluginsMap;
export const bI = isPendingPublisherForCurrentUser;
export const bh = useUserPublishedWidgets;
export const cW = usePublishedPlugins;
export const f6 = getPendingPublisherWidgets;
export const j1 = usePluginAllowlistValidation;
export const j8 = getAllPluginVersions;
export const jA = useExtensionAllowlist;
export const jg = usePublishingPlugins;
export const kd = useUserPublishedPlugins;
export const ll = useAllowlistedPlugins;
export const mf = createPluginManifestData;
export const nl = useLocalPluginsExcludingWidgets;
export const op = useFilteredDedupedRecentlyUsedPlugins;
export const pR = useRunnableInstalledPluginsAndWidgets;
export const q3 = useFilteredInstalledPluginsAndWidgets;
export const qT = parseAndValidateManifest;
export const qr = useDedupedRecentlyUsedWidgets;
export const sp = getUnpublishedResources;
export const tB = useLastAddedTimestamps;
export const uf = usePluginManifestsByIds;
export const wH = useInstalledPluginVersions;
export const wW = getPendingPublisherWidgetsForCurrentUser;
export const x = useCanPerformAction;
export const yQ = useLocalPluginsExcludingWidgets;
