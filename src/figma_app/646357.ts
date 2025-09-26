import { uniqBy } from 'lodash-es';
import { createContext, useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reportError } from '../905/11';
import { selectWithShallowEqual } from '../905/103090';
import { ServiceCategories } from '../905/165054';
import { NotificationCategory } from '../905/170564';
import { getI18nString } from '../905/303541';
import { getDirname } from '../905/309735';
import { generateUniqueKey } from '../905/383708';
import { MissingStyleKeyToLibraryKeyQuery, UnpublishedStylesQuery } from '../905/404538';
import { isFullyTransparentFill } from '../905/405710';
import { debugState } from '../905/407919';
import { FileKeySourceEnum } from '../905/412913';
import { trackEventAnalytics } from '../905/449184';
import { handleAtomEvent } from '../905/502364';
import { orgLibrarySubscriptionsAtom, teamLibrarySubscriptionOverridesAtomFamily, usePresetSubscriptionsMapping, userLibrarySubscriptionsAtom, workspaceLibrarySubscriptionsAtomFamily } from '../905/561897';
import { getFeatureFlags } from '../905/601108';
import { replaceLocalThumbnails, updateStyleThumbnailOptimist } from '../905/711212';
import { liveStoreInstance } from '../905/713695';
import { logError } from '../905/714362';
import { areSetsSubset } from '../905/760682';
import { getSelectedFile } from '../905/766303';
import { generateFileVersionUrl } from '../905/815475';
import { getOrgByCurrentUserId } from '../905/845253';
import { notificationActions } from '../905/851662';
import { getParentOrgId, resolveParentOrgId } from '../905/872904';
import { componentReplaceLocal } from '../905/879323';
import { sendWithRetry } from '../905/910117';
import { debounce } from '../905/915765';
import { createLoadedState, createLoadingState } from '../905/957591';
import { atomStoreManager, useAtomWithSubscription } from '../figma_app/27355';
import { batchPutFileAction } from '../figma_app/78808';
import { generateNodeThumbnail, generateThumbnailFromStyleMaster, getDefaultPlaceholderThumbnail, isValidThumbnail, revokeThumbnailUrl, teamLibraryCache } from '../figma_app/80990';
import { subscribedStateGroupsNodeIdsFromLoadedPagesSelector, subscribedStateGroupsNodeIdsOnCurrentPageSelector, subscribedSymbolsNodeIdsFromLoadedPagesSelector, subscribedSymbolsNodeIdsOnCurrentPageSelector } from '../figma_app/141508';
import { LibrarySubscriptionType, useSubscribedLibraries, useSubscribedLibraryKeys } from '../figma_app/155728';
import { FContainerType } from '../figma_app/191312';
import { subscribedLibraryKeysAtom } from '../figma_app/275938';
import { getStyleFoldersWithStyles } from '../figma_app/463500';
import { debug, throwTypeError } from '../figma_app/465776';
import { selectCurrentFile } from '../figma_app/516028';
import { LibraryAgeEnum, NO_TEAM, PRIMARY_WORKFLOW_TYPES, PrimaryWorkflowEnum, StagingStatusEnum, SubscriptionStatusEnum } from '../figma_app/633080';
import { filterNotNullish } from '../figma_app/656233';
import { loadingStateDelete } from '../figma_app/714946';
import { Fullscreen, SceneGraphHelpers, StateGroupErrorType, VariableErrorType, VariableSetErrorType } from '../figma_app/763686';
import { compareNumbers } from '../figma_app/766708';
import { memoizeByArgs } from '../figma_app/815945';
import { isSelectedViewFullscreenCooper } from '../figma_app/828186';
import { CURRENT_VERSION_ID } from '../figma_app/841351';
import { formatList } from '../figma_app/930338';
import { TSSceneGraph } from './518682';

/**
 * Enum for asset filter modes (original: AssetFilterMode)
 */
export enum AssetFilterMode {
  CURRENT = 'current',
  ALL = 'all',
}

/**
 * Context for library subscriptions (original: LibrarySubscriptionContext)
 */
export const LibrarySubscriptionContext = createContext(null);

/**
 * Checks if staging status is CURRENT, CHANGED, or DELETED (original: isStagedStatus)
 * @param status
 */
export function isStagedStatus(status: StagingStatusEnum): boolean {
  return status === StagingStatusEnum.CURRENT || status === StagingStatusEnum.CHANGED || status === StagingStatusEnum.DELETED;
}

/**
 * Checks if staging status is NEW, CHANGED, or DELETED (original: isNewOrChangedOrDeleted)
 * @param status
 */
export function isNewOrChangedOrDeleted(status: StagingStatusEnum): boolean {
  return status === StagingStatusEnum.NEW || status === StagingStatusEnum.CHANGED || status === StagingStatusEnum.DELETED;
}

/**
 * Extracts key and version from asset (original: getAssetKeyVersion)
 * @param asset
 */
export function getAssetKeyVersion(asset: any): {
  type: string;
  key: string;
  version: string;
} {
  switch (asset.type) {
    case PrimaryWorkflowEnum.COMPONENT:
      return {
        type: asset.type,
        key: asset.component_key,
        version: asset.content_hash
      };
    case PrimaryWorkflowEnum.STATE_GROUP:
      return {
        type: asset.type,
        key: asset.key,
        version: asset.version
      };
    case PrimaryWorkflowEnum.STYLE:
      return {
        type: asset.type,
        key: asset.key,
        version: asset.content_hash
      };
    case PrimaryWorkflowEnum.VARIABLE_SET:
    case PrimaryWorkflowEnum.VARIABLE:
    case PrimaryWorkflowEnum.MODULE:
      return {
        type: asset.type,
        key: asset.key,
        version: asset.version
      };
    case PrimaryWorkflowEnum.RESPONSIVE_SET:
    case PrimaryWorkflowEnum.CODE_COMPONENT:
      if (asset.subscriptionStatus === 'LOCAL') {
        return {
          type: asset.type,
          key: asset.keyForPublish,
          version: asset.version
        };
      }
      return {
        type: asset.type,
        key: asset.key,
        version: asset.version
      };
    case PrimaryWorkflowEnum.MANAGED_STRING:
      return {
        type: asset.type,
        key: asset.keyForPublish,
        version: asset.version
      };
    default:
      throwTypeError(asset, `Unknown type ${asset?.type}`);
  }
}

/**
 * Gets asset key (original: getAssetKey)
 * @param asset
 */
export function getAssetKey(asset: any): string {
  const {
    key
  } = getAssetKeyVersion(asset);
  debug(key !== undefined, 'Asset had no key', {
    asset
  });
  return key;
}

/**
 * Gets library key for asset (original: getAssetLibraryKey)
 * @param asset
 */
export function getAssetLibraryKey(asset: any): string | null {
  switch (asset.type) {
    case PrimaryWorkflowEnum.CODE_COMPONENT:
    case PrimaryWorkflowEnum.RESPONSIVE_SET:
      return asset.subscriptionStatus === 'LIBRARY' ? asset.sourceLibraryKey : null;
    case PrimaryWorkflowEnum.COMPONENT:
    case PrimaryWorkflowEnum.STATE_GROUP:
    case PrimaryWorkflowEnum.STYLE:
    case PrimaryWorkflowEnum.VARIABLE:
    case PrimaryWorkflowEnum.VARIABLE_SET:
    case PrimaryWorkflowEnum.MODULE:
    case PrimaryWorkflowEnum.MANAGED_STRING:
      return asset.library_key;
    default:
      return null;
  }
}

/**
 * Maps array of assets to their keys (original: mapAssetsToKeys)
 * @param assets
 */
export function mapAssetsToKeys(assets: any[]): string[] {
  return assets.map(getAssetKey);
}

/**
 * Gets asset version (original: getAssetVersion)
 * @param asset
 */
export function getAssetVersion(asset: any): string {
  return getAssetKeyVersion(asset).version;
}

/**
 * Returns style if shown and not creating and not local (original: getShownNonLocalStyle)
 * @param obj
 */
export function getShownNonLocalStyle(obj: any): any | null {
  return !obj.isShown || obj.isCreating ? null : obj.style.isLocal ? null : obj.style;
}

/**
 * Finds style data by key in loaded/used styles (original: findStyleDataByKey)
 * @param key
 * @param usedStyles
 * @param loadedStyles
 */
export function findStyleDataByKey(key: string, usedStyles: Record<string, {
  status: string;
  data: {
    key: string;
  };
}>, loadedStyles: Record<string, {
  key: string;
}>): any | null {
  for (const style of Object.values(usedStyles)) {
    if (style.status === 'loaded' && style.data.key === key) return style.data;
  }
  for (const style of Object.values(loadedStyles)) {
    if (style.key === key) return style;
  }
  return null;
}

/**
 * Flattens nested asset objects into a single array.
 * (original: flattenAssetsArray)
 * @param assetsByTeam Nested assets object
 * @returns Array of asset objects
 */
export function flattenAssetsArray(assetsByTeam: Record<string, Record<string, any>>): any[] {
  const result: any[] = [];
  for (const teamId of Object.keys(assetsByTeam)) {
    const teamAssets = assetsByTeam[teamId] ?? {};
    for (const asset of Object.values(teamAssets)) {
      result.push(asset);
    }
  }
  return result;
}

/**
 * Gets published assets for a library (original: getPublishedAssetsForLibrary)
 * @param assetsByTeam
 * @param library
 */
export function getPublishedAssetsForLibrary(assetsByTeam: any, library: any): any {
  const result = Object.create(null);
  if (!library || !library.library_key) return result;
  const teamId = library.team_id || NO_TEAM;
  const assets = assetsByTeam[teamId]?.[library.library_key] ?? Object.create(null);
  for (const key in assets) {
    if (assets[key].unpublished_at == null) result[key] = assets[key];
  }
  return result;
}

/**
 * Gets all assets for a library key (original: getAssetsForLibraryKey)
 * @param assetsByTeam
 * @param libraryKey
 */
export function getAssetsForLibraryKey(assetsByTeam: any, libraryKey: string): any {
  return libraryKey ? flattenAssetsByTeam(assetsByTeam)[libraryKey] ?? {} : {};
}

/**
 * Flattens assets by team (original: flattenAssetsByTeam)
 * @param assetsByTeam
 */
export function flattenAssetsByTeam(assetsByTeam: any): any {
  const result: any = {};
  for (const teamAssets of Object.values(assetsByTeam)) {
    for (const [key, asset] of Object.entries(teamAssets)) {
      result[key] = asset;
    }
  }
  return result;
}

/**
 * Gets all assets as array (original: getAllAssetsArray)
 * @param assetsByTeam
 * @param libraryKey
 */
export function getAllAssetsArray(assetsByTeam: any, libraryKey: string): any[] {
  return Object.values(getAssetsForLibraryKey(assetsByTeam, libraryKey));
}

/**
 * Gets all assets as array (original: getAllAssets)
 * @param assetsByTeam
 */
export function getAllAssets(assetsByTeam: any): any[] {
  const result: any[] = [];
  iterateAssetsByTeam(assetsByTeam, (_teamId, _libKey, _assetKey, asset) => {
    result.push(asset);
  });
  return result;
}

/**
 * Iterates over all assets by team (original: iterateAssetsByTeam)
 * @param assetsByTeam
 * @param callback
 */
export function iterateAssetsByTeam(assetsByTeam: any, callback: (teamId: string, libKey: string, assetKey: string, asset: any) => void): void {
  for (const [teamId, libs] of Object.entries(assetsByTeam)) {
    for (const [libKey, assets] of Object.entries(libs)) {
      for (const [assetKey, asset] of Object.entries(assets)) {
        callback(teamId, libKey, assetKey, asset);
      }
    }
  }
}

/**
 * Gets non-deleted assets as array (original: getNonDeletedAssets)
 * @param assets
 */
export function getNonDeletedAssets(assets: any): any[] {
  return Object.keys(assets).map(key => assets[key]).filter(asset => !asset.deletedFromSceneGraph);
}

/**
 * Filters styles by type (original: filterStylesByType)
 * @param styles
 * @param styleType
 */
export function filterStylesByType(styles: any, styleType: string): any[] {
  const result: any[] = [];
  for (const key in styles) {
    const style = styles[key];
    if (style.style_type !== styleType || style.deletedFromSceneGraph) continue;
    result.push(style);
  }
  return result;
}

/**
 * Gets published assets for defaultPublished (original: getPublishedAssetsForDefaultPublished)
 * @param defaultPublished
 * @param assetsByTeam
 * @param file
 * @param subscribedKeys
 */
export function getPublishedAssetsForDefaultPublished(defaultPublished: any, assetsByTeam: any, file: any, subscribedKeys: Set<string>): any[] {
  const result: any[] = [];
  for (const teamId of Object.keys(assetsByTeam)) {
    if (isAssetPublished(defaultPublished, file, teamId, subscribedKeys)) {
      const assets = assetsByTeam[teamId] ?? {};
      result.push(...Object.values(assets));
    }
  }
  return result;
}

/**
 * Checks if asset is published (original: isAssetPublished)
 * @param defaultPublished
 * @param file
 * @param assetKey
 * @param subscribedKeys
 */
function isAssetPublished(defaultPublished: any, file: any, assetKey: string, subscribedKeys: Set<string>): boolean {
  return !!file && !!assetKey && !isSameAssetKey(file, assetKey) && (!!isSubscribedLibrary(defaultPublished, assetKey) || subscribedKeys.has(assetKey));
}

/**
 * Checks if asset key matches file key (original: firstComponentsParsed)
 * @param file
 * @param assetKey
 */
export function isSameAssetKey(file: any, assetKey: string): boolean {
  return generateUniqueKey(file.key) === assetKey || !!file.source_file_key && generateUniqueKey(file.source_file_key) === assetKey;
}

/**
 * Checks if asset is in subscribed libraries (original: isSubscribedLibrary)
 * @param defaultPublished
 * @param assetKey
 */
export function isSubscribedLibrary(defaultPublished: any, assetKey: string): boolean {
  return !!defaultPublished?.libraryKeys?.includes(assetKey) || atomStoreManager.get(subscribedLibraryKeysAtom).has(assetKey);
}

/**
 * Loads canvases for styles (original: loadStyleCanvases)
 * @param styles
 */
let loadedCanvasKeys = new Set<string>();
export async function loadStyleCanvases(styles: any[]): Promise<void> {
  const styleMap = new Map((styles = styles.filter(style => style.canvas_url && !teamLibraryCache.hasKeyInCache(generateFileVersionUrl(style.canvas_url).url) && !loadedCanvasKeys.has(style.key))).map(style => [style.key, style.canvas_url]));
  const keys = styles.map(style => style.key);
  keys.forEach(key => loadedCanvasKeys.add(key));
  if (getFeatureFlags().ds_file_proxy_for_style_assets) {
    await Promise.all(keys.map(key => teamLibraryCache.getCanvas({
      canvas_url: styleMap.get(key)
    })));
  } else {
    if (keys.length === 0) return;
    try {
      const response = (await sendWithRetry.post('/style/canvases', {
        style_keys: keys
      })) as {
        data: {
          meta: {
            urls: Record<string, string>;
          };
        };
      };
      for (const [key, url] of Object.entries(response.data.meta.urls)) {
        sendWithRetry.crossOriginGetAny(url, null, {
          responseType: 'arraybuffer'
        }).then(({
          data
        }) => {
          const canvasUrl = styleMap.get(key);
          if (canvasUrl) {
            const cacheKey = generateFileVersionUrl(canvasUrl).url;
            teamLibraryCache.putCanvas(cacheKey, data);
          }
          loadedCanvasKeys.delete(key);
        }).catch(() => {
          loadedCanvasKeys.delete(key);
        });
      }
    } catch {
      keys.forEach(key => loadedCanvasKeys.delete(key));
    }
  }
}

/**
 * Style types (original: STYLE_TYPES)
 */
export const STYLE_TYPES = ['TEXT', 'FILL', 'EFFECT', 'GRID'];

/**
 * Gets i18n string for style type (original: ex)
 * @param styleType
 * @param isPlural
 */
function getStyleTypeI18n(styleType: string, isPlural: boolean): string {
  const numStyles = isPlural ? 2 : 1;
  switch (styleType) {
    case 'TEXT':
      return getI18nString('design_systems.styles.text_style', {
        numStyles
      });
    case 'FILL':
      return getI18nString('design_systems.styles.color_style', {
        numStyles
      });
    case 'EFFECT':
      return getI18nString('design_systems.styles.effect_style', {
        numStyles
      });
    case 'GRID':
      return getI18nString('design_systems.styles.guide_style', {
        numStyles
      });
    case 'EXPORT':
      return getI18nString('design_systems.styles.export_style');
    case 'STROKE':
      return getI18nString('design_systems.styles.stroke_style');
    default:
      trackEventAnalytics('Unknown style type', {
        styleType
      });
      return getI18nString('design_systems.styles.styles', {
        numStyles
      });
  }
}

/**
 * Gets i18n string for style type singular (original: getStyleTypeLabel)
 * @param styleType
 */
export function getStyleTypeLabel(styleType: string): string {
  return getStyleTypeI18n(styleType, false);
}

/**
 * Gets i18n string for style type plural (original: getStyleTypeLabelPlural)
 * @param styleType
 */
export function getStyleTypeLabelPlural(styleType: string): string {
  return getStyleTypeI18n(styleType, true);
}

/**
 * Returns subscription info for a library (original: ew)
 * @param subscriptions
 * @param libraryKey
 * @param subscriptionType
 */
function getLibrarySubscriptionInfo(subscriptions: any, libraryKey: string, subscriptionType: string) {
  if (libraryKey in subscriptions) {
    return {
      design: !!subscriptions[libraryKey]?.design,
      figjam: !!subscriptions[libraryKey]?.figjam,
      slides: !!subscriptions[libraryKey]?.slides,
      buzz: !!subscriptions[libraryKey]?.buzz,
      subscriptionType,
      subscriptionId: subscriptions[libraryKey]?.subscriptionId
    };
  }
  return {
    design: null,
    figjam: null,
    slides: null,
    buzz: null,
    subscriptionType: null
  };
}

/**
 * Checks if all subscription types are present (original: eO)
 * @param info
 */
function hasAllSubscriptionTypes(info: any): boolean {
  return info.design !== null && info.figjam !== null && info.slides !== null;
}

/**
 * Gets organization library subscription state (original: useOrgLibrarySubscriptionState)
 * @param libraryKey
 */
export function useOrgLibrarySubscriptionState(libraryKey: string) {
  const orgSubscriptions = useAtomWithSubscription(orgLibrarySubscriptionsAtom);
  const presetMapping = usePresetSubscriptionsMapping();
  const presetState = useMemo(() => libraryKey ? presetMapping ? createLoadedState(getLibrarySubscriptionInfo(presetMapping, libraryKey, LibrarySubscriptionType.COMMUNITY)) : createLoadingState() : createLoadedState({
    design: !1,
    figjam: !1,
    slides: !1,
    buzz: !1,
    subscriptionType: null
  }), [libraryKey, presetMapping]);
  return useMemo(() => {
    if (!libraryKey) {
      return createLoadedState({
        design: !1,
        figjam: !1,
        slides: !1,
        buzz: !1,
        subscriptionType: null
      });
    }
    if (orgSubscriptions.status !== 'loaded') return orgSubscriptions;
    if (presetState.status !== 'loaded') return presetState;
    const orgInfo = getLibrarySubscriptionInfo(orgSubscriptions.data, libraryKey, LibrarySubscriptionType.ORGANIZATION);
    return hasAllSubscriptionTypes(orgInfo) ? createLoadedState(orgInfo) : presetState;
  }, [libraryKey, orgSubscriptions, presetState]);
}

/**
 * Gets workspace library subscription state (original: useWorkspaceLibrarySubscriptionState)
 * @param libraryKey
 * @param workspaceId
 */
export function useWorkspaceLibrarySubscriptionState(libraryKey: string, workspaceId: string) {
  const workspaceSubscriptions = useAtomWithSubscription(workspaceLibrarySubscriptionsAtomFamily(workspaceId));
  const orgState = useOrgLibrarySubscriptionState(libraryKey);
  return useMemo(() => {
    if (!libraryKey) {
      return createLoadedState({
        design: !1,
        figjam: !1,
        slides: !1,
        buzz: !1,
        subscriptionType: null
      });
    }
    if (workspaceSubscriptions.status !== 'loaded') return workspaceSubscriptions;
    if (orgState.status !== 'loaded') return orgState;
    const workspaceInfo = getLibrarySubscriptionInfo(workspaceSubscriptions.data, libraryKey, LibrarySubscriptionType.WORKSPACE);
    return hasAllSubscriptionTypes(workspaceInfo) ? createLoadedState(workspaceInfo) : orgState;
  }, [libraryKey, workspaceSubscriptions, orgState]);
}

/**
 * Gets team library subscription state (original: useTeamLibrarySubscriptionState)
 * @param libraryKey
 * @param teamId
 */
export function useTeamLibrarySubscriptionState(libraryKey: string, teamId: string) {
  const teamSubscriptions = useAtomWithSubscription(teamLibrarySubscriptionOverridesAtomFamily(teamId));
  const workspaceState = useWorkspaceLibrarySubscriptionState(libraryKey, teamId);
  return useMemo(() => {
    if (!libraryKey || !teamId) {
      return createLoadedState({
        design: !1,
        figjam: !1,
        slides: !1,
        buzz: !1,
        subscriptionType: null
      });
    }
    if (teamSubscriptions.status !== 'loaded') return teamSubscriptions;
    if (workspaceState.status !== 'loaded') return workspaceState;
    const teamInfo = getLibrarySubscriptionInfo(teamSubscriptions.data, libraryKey, LibrarySubscriptionType.TEAM);
    return hasAllSubscriptionTypes(teamInfo) ? createLoadedState(teamInfo) : workspaceState;
  }, [libraryKey, teamSubscriptions, workspaceState, teamId]);
}

/**
 * Gets user library subscription state (original: useUserLibrarySubscriptionState)
 * @param libraryKey
 */
export function useUserLibrarySubscriptionState(libraryKey: string) {
  const userSubscriptions = useAtomWithSubscription(userLibrarySubscriptionsAtom);
  const orgState = useOrgLibrarySubscriptionState(libraryKey);
  return useMemo(() => {
    if (!libraryKey) {
      return createLoadedState({
        design: !1,
        figjam: !1,
        slides: !1,
        buzz: !1,
        subscriptionType: null
      });
    }
    if (userSubscriptions.status !== 'loaded') return userSubscriptions;
    if (orgState.status !== 'loaded') return orgState;
    const userInfo = getLibrarySubscriptionInfo(userSubscriptions.data, libraryKey, LibrarySubscriptionType.USER);
    return hasAllSubscriptionTypes(userInfo) ? createLoadedState(userInfo) : orgState;
  }, [libraryKey, userSubscriptions, orgState]);
}

/**
 * React hook to check if an asset is published for the current file.
 * (original: useIsAssetPublishedForCurrentFile)
 * @returns Callback to check asset published status by library key
 */
export function useIsAssetPublishedForCurrentFile(): (libraryKey: string) => boolean {
  const currentFile = selectCurrentFile();
  const library = useSelector((state: any) => state.library);
  const subscribedLibraryKeys = useSubscribedLibraryKeys();
  return useCallback((libraryKey: string) => !!currentFile && isAssetPublished(library.defaultPublished, {
    key: currentFile.key,
    team_id: currentFile.teamId,
    editor_type: currentFile.editorType,
    source_file_key: currentFile.sourceFileKey
  }, libraryKey, subscribedLibraryKeys), [currentFile, library.defaultPublished, subscribedLibraryKeys]);
}
/**
 * Checks if any asset in n is published (original: hasPublishedAsset)
 * @param defaultPublished
 * @param file
 * @param r
 * @param n
 * @param i
 * @param a
 */
export function hasPublishedAsset(defaultPublished: any, file: any, r: any[], n: string[], i: any, a: Set<string>): boolean {
  if (r.length) return true;
  for (const key of n) {
    const asset = i[key];
    let libraryKey: string | undefined;
    if (asset) {
      libraryKey = 'library_key' in asset ? asset.library_key : asset.status === 'loaded' && asset.data.library_key;
    }
    if (libraryKey && isAssetPublished(defaultPublished, file, libraryKey, a)) {
      return true;
    }
  }
  return false;
}

/**
 * Sorts styles by type and position (original: compareStyles)
 * @param a
 * @param b
 */
export function compareStyles(a: any, b: any): number {
  const typeOrder = STYLE_TYPES.indexOf(a.style_type) - STYLE_TYPES.indexOf(b.style_type);
  if (typeOrder !== 0) return typeOrder;
  return -compareNumbers(a.sort_position || '', b.sort_position || '');
}

/**
 * Sorts styles array by position (original: sortStyles)
 * @param styles
 */
export function sortStyles(styles: any[]): void {
  styles.sort((a, b) => -compareNumbers(a.sort_position || '', b.sort_position || ''));
}

/**
 * Groups styles by type (original: groupStylesByType)
 * @param styles
 */
export function groupStylesByType(styles: any[]): Map<string, any[]> {
  const map = new Map<string, any[]>();
  styles.forEach(style => {
    const arr = map.get(style.style_type);
    arr ? arr.push(style) : map.set(style.style_type, [style]);
  });
  return map;
}

/**
 * Compares assets by containing frame and name (original: compareAssetsByFrameAndName)
 * @param a
 * @param b
 */
export function compareAssetsByFrameAndName(a: any, b: any): number {
  const toLower = (str: string) => str && str.toLowerCase ? str.toLowerCase() : '';
  const frameA = a.containing_frame || {};
  const frameB = b.containing_frame || {};
  if (frameA.pageId !== frameB.pageId) return toLower(frameA.pageName) < toLower(frameB.pageName) ? -1 : 1;
  if (frameA.nodeId !== frameB.nodeId) return toLower(frameA.name) < toLower(frameB.name) ? -1 : 1;
  return toLower(a.name) < toLower(b.name) ? -1 : 1;
}

/**
 * Groups styles by prefix (original: groupStylesByPrefix)
 * @param styles
 */
export function groupStylesByPrefix(styles: any[]): {
  stylesByPrefix: Record<string, any[]>;
  sortedPrefixes: any;
} {
  const sorted = [...styles];
  sortStyles(sorted);
  const stylesByPrefix: Record<string, any[]> = sorted.reduce((acc, style) => {
    const prefix = getDirname(style.name);
    acc[prefix] = acc[prefix] || [];
    acc[prefix].push(style);
    return acc;
  }, Object.create(null));
  return {
    stylesByPrefix,
    sortedPrefixes: getStyleFoldersWithStyles(sorted)
  };
}

/**
 * Flag to indicate if first components have been parsed (original: firstComponentsParsed)
 */
let firstComponentsParsed = true;

/**
 * Deep comparison between two objects (original: eY)
 * @param a
 * @param b
 * @returns {boolean}
 */
function areObjectsDifferent(a: Record<string, any>, b: Record<string, any>): boolean {
  if (!a || !b) return true;
  for (const key in a) {
    if (!(key in b)) return true;
    const aVal = a[key];
    const bVal = b[key];
    for (const subKey in aVal) {
      if (aVal[subKey] !== bVal[subKey]) return true;
    }
    for (const subKey in bVal) {
      if (!(subKey in aVal)) return true;
    }
  }
  for (const key in b) {
    if (!(key in a)) return true;
  }
  return false;
}

/**
 * Generates new local library items and counts new components (original: generateNewLocalLibraryItems)
 * @param createFn
 * @param publishable
 * @param published
 * @param local
 * @param thumbnails
 * @param thumbnailsOut
 * @param fileKey
 * @param libraryKey
 * @param movedItemIds
 * @param type
 */
export function generateNewLocalLibraryItems(createFn: Fn, publishable: any[], published: Record<string, any>, local: Record<string, any>, thumbnails: Record<string, any>, thumbnailsOut: Record<string, any>, fileKey: string, libraryKey: string, movedItemIds: Set<string>, type: string) {
  const newLocal: Record<string, any> = Object.create(null);
  let numNewComponents = 0;
  publishable.forEach((item: any) => {
    const nodeId = item.nodeId;
    const publishedItem = published[nodeId];
    thumbnailsOut[nodeId] = cloneThumbnail(thumbnails[nodeId]);
    newLocal[nodeId] = createFn(publishedItem, local[nodeId], item, fileKey, libraryKey, type);
    const result = newLocal[nodeId];
    if (result.status === StagingStatusEnum.NEW && result.type === PrimaryWorkflowEnum.COMPONENT) {
      numNewComponents += 1;
    }
  });
  for (const nodeId in published) {
    if (!(nodeId in newLocal)) {
      const thumbnail = thumbnails[nodeId];
      if (thumbnail && thumbnail.url) revokeThumbnailUrl(thumbnail.url);
      const publishedItem = published[nodeId];
      if (publishedItem.type === PrimaryWorkflowEnum.COMPONENT || publishedItem.type === PrimaryWorkflowEnum.STATE_GROUP) {
        const oldKey = publishedItem.old_key;
        if (oldKey) movedItemIds.add(publishedItem.node_id);
      }
    }
  }
  for (const nodeId in local) {
    if (!(nodeId in newLocal)) {
      thumbnailsOut[nodeId] = cloneThumbnail(thumbnails[nodeId]);
      newLocal[nodeId] = createFn(published[nodeId], local[nodeId], null, fileKey, libraryKey, type);
    }
  }
  return {
    newLocal,
    numNewComponents
  };
}

/**
 * Clones thumbnail object (original: e2)
 * @param thumbnail
 */
function cloneThumbnail(thumbnail: any) {
  return {
    kind: thumbnail?.kind ?? undefined,
    url: thumbnail?.url ?? undefined,
    content_hash: thumbnail?.content_hash ?? undefined
  };
}

/**
 * Updates local library items and dispatches necessary actions (original: updateLocalLibraryItems)
 * @param store
 */
export function updateLocalLibraryItems(store: any) {
  const state = store.getState();
  if (state.versionHistory.activeId && state.versionHistory.activeId !== CURRENT_VERSION_ID || !state.mirror?.sceneGraph) {
    return;
  }
  const file = getSelectedFile(state);
  const fileKey = file ? file.key : '';
  const libraryKey = file?.library_key ? file.library_key : '';
  const movedItemIds = new Set<string>();
  const isFullscreen = isSelectedViewFullscreenCooper(state);
  const thumbnailsOut: Record<string, any> = {};
  const {
    newLocal: newComponents,
    numNewComponents
  } = generateNewLocalLibraryItems((a: any, b: any, c: any, d: any, e: any, _f: any) => createLocalComponent(a, b, c, d, e, isFullscreen), state.library.publishableSymbols, state.library.openFilePublished__LIVEGRAPH.components, state.library.local.components, state.library.local.thumbnails, thumbnailsOut, fileKey, libraryKey, movedItemIds, PrimaryWorkflowEnum.COMPONENT);
  const {
    newLocal: newStateGroups
  } = generateNewLocalLibraryItems(createLocalStateGroup, state.library.publishableStateGroups, state.library.openFilePublished__LIVEGRAPH.stateGroups, state.library.local.stateGroups, state.library.local.thumbnails, thumbnailsOut, fileKey, libraryKey, movedItemIds, PrimaryWorkflowEnum.STATE_GROUP);
  const {
    newLocal: newStyles
  } = generateNewLocalLibraryItems(createLocalStyle, state.library.publishableStyles, state.library.openFilePublished__LIVEGRAPH.styles, state.library.local.styles, state.library.local.thumbnails, thumbnailsOut, fileKey, libraryKey, movedItemIds, PrimaryWorkflowEnum.STYLE);
  const {
    newLocal: newModules
  } = generateNewLocalLibraryItems(createModuleLocal, state.library.publishableModules, state.library.openFilePublished__LIVEGRAPH.modules, state.library.local.modules, state.library.local.thumbnails, thumbnailsOut, fileKey, libraryKey, movedItemIds, PrimaryWorkflowEnum.MODULE);
  if (areObjectsDifferent(state.library.local.components, newComponents)) {
    store.dispatch(componentReplaceLocal({
      local: newComponents,
      type: PrimaryWorkflowEnum.COMPONENT
    }));
  }
  if (areObjectsDifferent(state.library.local.stateGroups, newStateGroups)) {
    store.dispatch(componentReplaceLocal({
      local: newStateGroups,
      type: PrimaryWorkflowEnum.STATE_GROUP
    }));
  }
  if (areObjectsDifferent(state.library.local.styles, newStyles)) {
    store.dispatch(componentReplaceLocal({
      local: newStyles,
      type: PrimaryWorkflowEnum.STYLE
    }));
  }
  if (areObjectsDifferent(state.library.local.modules, newModules) && getFeatureFlags().dse_module_publish) {
    store.dispatch(componentReplaceLocal({
      local: newModules,
      type: PrimaryWorkflowEnum.MODULE
    }));
  }
  if (areThumbnailsDifferent(state.library.local.thumbnails, thumbnailsOut)) {
    store.dispatch(replaceLocalThumbnails({
      thumbnails: thumbnailsOut
    }));
  }
  if (numNewComponents > 0 && firstComponentsParsed) {
    handleAtomEvent({
      id: 'Parsed first components'
    });
    firstComponentsParsed = false;
  }
  if (movedItemIds.size > 0) {
    const movePrompts = state.notifications.filter((n: any) => n.type === NotificationCategory.MOVE_COMPONENTS_PROMPT);
    if (movePrompts.length > 0) {
      const itemIds = movePrompts[0].type === NotificationCategory.MOVE_COMPONENTS_PROMPT && movePrompts[0].movableItemIds;
      if (itemIds && areSetsSubset(itemIds, movedItemIds)) {
        store.dispatch(notificationActions.dequeue({
          type: NotificationCategory.MOVE_COMPONENTS_PROMPT
        }));
      }
    }
  }
}

/**
 * Checks if thumbnails are different (original: inline in updateLocalLibraryItems)
 * @param a
 * @param b
 */
function areThumbnailsDifferent(a: Record<string, any>, b: Record<string, any>): boolean {
  if (!a && !b) return false;
  if (!a || !b || Object.keys(a).length !== Object.keys(b).length) return true;
  for (const key in a) {
    if (!b[key] || a[key].url !== b[key].url || a[key].content_hash !== b[key].content_hash) {
      return true;
    }
  }
  return false;
}

/**
 * Error message for missing library item (original: eq)
 */
const MISSING_LIBRARY_ITEM_ERROR = 'Generating a local library item that is neither in the library nor in the scene graph. Why.';

/**
 * Creates a local library item (original: eJ)
 * @param meta
 * @param published
 * @param local
 * @param fileKey
 * @param libraryKey
 * @param type
 */
function createLocalLibraryItem(meta: any, published: any, local: any, fileKey: string, libraryKey: string, type: string) {
  if (!local) {
    if (published) {
      return {
        ...published,
        status: StagingStatusEnum.DELETED,
        deletedFromSceneGraph: true
      };
    }
    throw new Error(MISSING_LIBRARY_ITEM_ERROR);
  }
  const isPublished = published && published.unpublished_at == null;
  const isPublishable = !!local.isPublishable;
  let status = StagingStatusEnum.NOT_STAGED;
  if (isPublished && !isPublishable) status = StagingStatusEnum.DELETED; else if (!isPublished && isPublishable) status = StagingStatusEnum.NEW; else if (!isPublished && !isPublishable) status = StagingStatusEnum.NOT_STAGED;
  const description = local.descriptionPlain ?? '';
  const description_rt = local.description ?? '';
  return {
    node_id: local.nodeId,
    name: local.name,
    description,
    description_rt,
    file_key: fileKey,
    file_key_source: FileKeySourceEnum.LOCAL_FILE,
    library_key: libraryKey,
    isPublishable,
    deletedFromSceneGraph: false,
    meta: meta ? meta.meta : undefined,
    isLocal: true,
    status,
    type,
    thumbnail_url: published?.thumbnail_url ?? undefined
  };
}

/**
 * Creates a local component (original: createLocalComponent)
 * @param meta Metadata for the component
 * @param published Published component data
 * @param local Local component data
 * @param fileKey File key
 * @param libraryKey Library key
 * @param compareSortPositions Whether to compare sort positions
 * @returns Local component object
 */
export function createLocalComponent(meta: any, published: any, local: any, fileKey: string, libraryKey: string, compareSortPositions: boolean) {
  const result = {
    ...createLocalLibraryItem(meta, published, local, fileKey, libraryKey, PrimaryWorkflowEnum.COMPONENT),
    type: PrimaryWorkflowEnum.COMPONENT,
    height: local?.height,
    width: local?.width,
    x: local?.x,
    y: local?.y,
    componentPropDefError: local?.componentPropDefError,
    containing_frame: local?.containingFrame || published?.containing_frame || undefined,
    component_key: published?.component_key || undefined,
    content_hash: local?.versionHash || published?.content_hash || undefined,
    userFacingVersion: local?.userFacingVersion ?? 'INVALID',
    old_key: local?.oldKey || undefined,
    sort_position: local?.sortPosition ?? null,
    has_video: local?.hasVideo ?? false
  };
  if (!published) return result;
  const isPublished = published.unpublished_at == null;
  const isPublishable = !!local?.isPublishable;
  if (isPublished && isPublishable) {
    if (published.content_hash === result.content_hash && !areFramesEqual(published.containing_frame, local?.containingFrame, {
      compareSortPositions
    }) && areValuesEqual(published.name, local?.name) && areValuesEqual(published.description, result.description) && (!compareSortPositions || areValuesEqual(published.sort_position, result.sort_position))) {
      result.status = StagingStatusEnum.CURRENT;
    } else {
      result.status = StagingStatusEnum.CHANGED;
    }
  }
  return result;
}

/**
 * Creates a local state group (original: createLocalStateGroup)
 * @param meta Metadata for the state group
 * @param published Published state group data
 * @param local Local state group data
 * @param fileKey File key
 * @param libraryKey Library key
 * @returns Local state group object
 */
export function createLocalStateGroup(meta: any, published: any, local: any, fileKey: string, libraryKey: string) {
  const base = createLocalLibraryItem(meta, published, local, fileKey, libraryKey, PrimaryWorkflowEnum.STATE_GROUP);
  if (!published) {
    if (!local) throw new Error(MISSING_LIBRARY_ITEM_ERROR);
    return {
      ...base,
      type: PrimaryWorkflowEnum.STATE_GROUP,
      version: local.versionHash,
      userFacingVersion: local.userFacingVersion,
      containing_frame: local.containingFrame,
      width: local.width,
      height: local.height,
      stateGroupError: local.stateGroupError,
      componentPropDefError: local.componentPropDefError,
      fill_color: local.fill_color,
      default_state_key: local.default_state_key,
      old_key: local.oldKey || undefined
    };
  }
  const result = {
    ...base,
    type: PrimaryWorkflowEnum.STATE_GROUP,
    version: local?.versionHash || published.version,
    userFacingVersion: local?.userFacingVersion || 'INVALID',
    containing_frame: local?.containingFrame || published.containing_frame,
    width: local?.width || published.min_node_width,
    height: local?.height || published.min_node_height,
    key: published.key || undefined,
    stateGroupError: local?.stateGroupError || StateGroupErrorType.NONE,
    componentPropDefError: local?.componentPropDefError || VariableSetErrorType.NONE,
    fill_color: local?.fill_color || published?.fill_color,
    default_state_key: local?.default_state_key || published?.default_state_key,
    old_key: local?.oldKey || undefined
  };
  const isPublished = published.unpublished_at == null;
  const isPublishable = !!local?.isPublishable;
  if (isPublished && isPublishable) {
    if (published.version === result.version && !areFramesEqual(published.containing_frame, local?.containingFrame) && areValuesEqual(published.name, local?.name) && areValuesEqual(published.description, result.description)) {
      result.status = StagingStatusEnum.CURRENT;
    } else {
      result.status = StagingStatusEnum.CHANGED;
    }
  }
  return result;
}

/**
 * Creates a local style (original: createLocalStyle)
 * @param meta Metadata for the style
 * @param published Published style data
 * @param local Local style data
 * @param fileKey File key
 * @param libraryKey Library key
 * @returns Local style object
 */
export function createLocalStyle(meta: any, published: any, local: any, fileKey: string, libraryKey: string) {
  const base = createLocalLibraryItem(meta, published, local, fileKey, libraryKey, PrimaryWorkflowEnum.STYLE);
  const isPublished = published && published.unpublished_at == null;
  const isPublishable = !!local?.isPublishable;
  let hasOnlyBeenReordered = false;
  if (isPublished && isPublishable) {
    if (published.content_hash === local?.versionHash && areValuesEqual(published.name, local?.name) && areValuesEqual(published.description, base.description)) {
      if (areValuesEqual(published.sort_position, local?.sortPosition)) {
        base.status = StagingStatusEnum.CURRENT;
      } else {
        base.status = StagingStatusEnum.CHANGED;
        hasOnlyBeenReordered = true;
      }
    } else {
      base.status = StagingStatusEnum.CHANGED;
    }
  }
  if (local) {
    return {
      ...base,
      type: PrimaryWorkflowEnum.STYLE,
      key: local.styleKey,
      style_type: local.styleType,
      is_soft_deleted: local.isSoftDeleted,
      sort_position: local.sortPosition,
      content_hash: local.versionHash,
      userFacingVersion: local.userFacingVersion,
      hasOnlyBeenReordered,
      old_key: local.oldKey || undefined
    };
  }
  if (published) {
    return {
      ...base,
      type: PrimaryWorkflowEnum.STYLE,
      key: published.key,
      style_type: published.style_type,
      is_soft_deleted: true,
      sort_position: published.sort_position,
      content_hash: published.content_hash,
      userFacingVersion: published.userFacingVersion,
      hasOnlyBeenReordered
    };
  }
  throw new Error(MISSING_LIBRARY_ITEM_ERROR);
}

/**
 * Creates a local module (original: createModuleLocal)
 * @param meta Metadata for the module
 * @param published Published module data
 * @param local Local module data
 * @param fileKey File key
 * @param libraryKey Library key
 * @returns Local module object
 */
export function createModuleLocal(meta: any, published: any, local: any, fileKey: string, libraryKey: string) {
  const base = createLocalLibraryItem(meta, published, local, fileKey, libraryKey, PrimaryWorkflowEnum.MODULE);
  if (!published) {
    if (!local) throw new Error(MISSING_LIBRARY_ITEM_ERROR);
    return {
      ...base,
      type: PrimaryWorkflowEnum.MODULE,
      moduleSource: local.moduleSource,
      height: local.height,
      width: local.width,
      x: local.x,
      y: local.y,
      containing_frame: local.containingFrame,
      version: local.versionHash,
      userFacingVersion: local.userFacingVersion,
      old_key: local.oldKey || undefined
    };
  }
  const result = {
    ...base,
    type: PrimaryWorkflowEnum.MODULE,
    moduleSource: local?.moduleSource || published.moduleSource,
    height: local?.height || published.height,
    width: local?.width || published.width,
    x: local?.x,
    y: local?.y,
    containing_frame: local?.containingFrame || published.containing_frame || undefined,
    version: local?.versionHash || published.version,
    userFacingVersion: local?.userFacingVersion || 'INVALID',
    old_key: local?.oldKey || undefined,
    key: published.key
  };
  const isPublished = published && published.unpublished_at == null;
  const isPublishable = !!local?.isPublishable;
  if (isPublished && isPublishable) {
    if (published.version === result.version && !areFramesEqual(published.containing_frame, local?.containingFrame) && areValuesEqual(published.name, local?.name) && areValuesEqual(published.description, result.description)) {
      result.status = StagingStatusEnum.CURRENT;
    } else {
      result.status = StagingStatusEnum.CHANGED;
    }
  }
  return result;
}

/**
 * Generates a cache key for published components (original: generatePublishedComponentsCacheKey)
 * @param key
 */
export function generatePublishedComponentsCacheKey(key: string): string {
  return `GET_PUBLISHED_COMPONENTS_FOR_${key}`;
}

/**
 * Set for tracking deleted loading states (original: deletedLoadingStates)
 */
export let deletedLoadingStates = new Set<string>();

/**
 * Dispatches delete loading state actions for all tracked keys (original: dispatchDeleteLoadingStates)
 * @param dispatch
 */
export function dispatchDeleteLoadingStates(dispatch: Fn) {
  for (const key of deletedLoadingStates) {
    dispatch(loadingStateDelete({
      key
    }));
  }
}

/**
 * Set for tracking some state (original: trackedStateSet)
 */
let trackedStateSet = new Set<string>();

/**
 * Checks if either value is in tracked state set (original: isTrackedState)
 * @param a
 * @param b
 */
export function isTrackedState(a: string, b: string): boolean {
  return trackedStateSet.has(a) || trackedStateSet.has(b);
}

/**
 * Adds a value to tracked state set (original: addTrackedState)
 * @param value
 */
export function addTrackedState(value: string) {
  trackedStateSet.add(value);
}

/**
 * Clears tracked state set (original: clearTrackedState)
 */
export function clearTrackedState() {
  trackedStateSet.clear();
}

/**
 * Generates a cache key for default libraries (original: generateDefaultLibrariesCacheKey)
 * @param key
 */
export let generateDefaultLibrariesCacheKey = (key: string) => `GET_DEFAULT_LIBRARIES_FOR_${key}`;

/**
 * Adds state names to assets based on containing state group (original: addStateNamesToAssets)
 * @param assets
 * @param allAssets
 */
export function addStateNamesToAssets(assets: any[], allAssets: any[]) {
  const stateNamesByGroup: Record<string, string[]> = {};
  allAssets.forEach((asset: any) => {
    const groupId = asset.containing_frame?.containingStateGroup?.nodeId;
    if (groupId) {
      stateNamesByGroup[groupId] = stateNamesByGroup[groupId] || [];
      stateNamesByGroup[groupId].push(asset.name);
    }
  });
  return assets.map((asset: any) => ({
    ...asset,
    stateNames: stateNamesByGroup[asset.node_id]
  }));
}
let tr = new Set<string>();

/**
 * Fetches unpublished styles and missing style keys.
 * (original: fetchUnpublishedStyles)
 * @param sceneGraphMap Map of scene graph nodes
 * @param styleNodeIds Array of style node IDs
 * @param usedStyles Used styles map
 * @param loadedStyles Loaded styles map
 * @param orgId Organization ID
 * @param excludeLibrary Optional library to exclude
 * @param dispatch Redux dispatch function
 * @returns Object with usedStylesByLibraryKey
 */
export async function fetchUnpublishedStyles(sceneGraphMap: Map<string, any>, styleNodeIds: string[] = [], usedStyles: Record<string, any>, loadedStyles: Record<string, any>, orgId: string, excludeLibrary?: {
  libraryKey: string;
}, dispatch?: Fn): Promise<{
  usedStylesByLibraryKey: Record<string, any[]>;
}> {
  if (!styleNodeIds.length) {
    return {
      usedStylesByLibraryKey: {}
    };
  }

  // Map styleKeyForPublish to nodeId for styles with usages
  const styleKeyToNodeId: Record<string, string> = {};
  for (const nodeId of styleNodeIds) {
    const node = sceneGraphMap.get(nodeId);
    if (node && node.styleKeyForPublish && Fullscreen.getNumUsagesOfStyle(node.styleKeyForPublish, true) !== 0) {
      styleKeyToNodeId[node.styleKeyForPublish] = nodeId;
    }
  }
  const styleKeys = Object.keys(styleKeyToNodeId);

  // Fetch unpublished styles from live store
  const unpublishedStyles = await liveStoreInstance.fetch(UnpublishedStylesQuery.UnpublishedStylesQuery({
    styleKeys,
    orgId
  }));

  // Merge unpublished styles with used styles that match styleKey
  const mergedStyles = uniqBy([...unpublishedStyles, ...Object.values(usedStyles).filter(style => style.key in styleKeyToNodeId)], style => style.key);
  const foundStyleKeys = new Set(mergedStyles.map(style => style.key));
  const missingStyleKeys = styleKeys.filter(key => key && !foundStyleKeys.has(key));

  // Fetch missing style keys to library keys
  const missingStyleKeyToLibrary = await liveStoreInstance.fetch(MissingStyleKeyToLibraryKeyQuery.MissingStyleKeyToLibraryKeyQuery({
    styleKeys: missingStyleKeys
  }));

  // Optionally exclude a library key
  if (excludeLibrary && excludeLibrary.libraryKey) {
    delete missingStyleKeyToLibrary[excludeLibrary.libraryKey];
  }

  // Collect library keys to batch fetch files for
  const libraryKeysToFetch: string[] = [];
  const usedStylesByLibraryKey: Record<string, any[]> = {};

  // Group merged styles by library key
  for (const style of mergedStyles) {
    const libKey = style.library_key;
    if (!usedStylesByLibraryKey[libKey]) usedStylesByLibraryKey[libKey] = [];
    usedStylesByLibraryKey[libKey].push(style);
    if (!loadedStyles[libKey] && !tr.has(libKey)) {
      tr.add(libKey);
      libraryKeysToFetch.push(libKey);
    }
  }

  // Add missing styles to usedStylesByLibraryKey
  for (const [libKey, styleKeysArr] of Object.entries(missingStyleKeyToLibrary)) {
    const stylesArr = usedStylesByLibraryKey[libKey] ?? (usedStylesByLibraryKey[libKey] = []);
    for (const styleKey of styleKeysArr as string[]) {
      const nodeId = styleKeyToNodeId[styleKey];
      const node = nodeId && sceneGraphMap.get(nodeId);
      if (node) {
        stylesArr.push({
          type: PrimaryWorkflowEnum.STYLE,
          name: node.name,
          key: styleKey,
          thumbnail_url: generateStyleThumbnailUrl(styleKey, node.styleVersionHash),
          canvas_url: generateStyleThumbnailUrl(styleKey, node.styleVersionHash),
          content_hash: node.styleVersionHash ?? undefined,
          userFacingVersion: node.userFacingVersion,
          node_id: node.guid,
          isLocal: false,
          style_type: node.styleType,
          library_key: node.sourceLibraryKey
        });
      }
    }
  }

  // Batch fetch files for missing libraries
  if (libraryKeysToFetch.length && dispatch) {
    await batchFetchFiles(libraryKeysToFetch, dispatch);
  }
  return {
    usedStylesByLibraryKey
  };
}

/**
 * Generates style thumbnail URL (original: generateStyleThumbnailUrl)
 * @param key
 * @param version
 */
function generateStyleThumbnailUrl(key: string, version: string) {
  return `/style/${key}/thumbnail?ver=${version}`;
}

/**
 * Batch fetches files for given library keys (original: batchFetchFiles)
 * @param libraryKeys
 * @param dispatch
 */
export async function batchFetchFiles(libraryKeys: string[], dispatch: Fn) {
  if (libraryKeys.length > 0) {
    let promises: Promise<void>[] = [];
    async function fetchBatch(keys: string[]) {
      try {
        let response = await sendWithRetry.post('/api/files/batch', {
          library_keys: keys
        });
        response.data.meta || logError('designSystems', 'Unexpected empty API response', {
          data: JSON.stringify(response.data ?? null),
          numFiles: keys.length,
          status: response.status
        });
        dispatch(batchPutFileAction({
          files: response.data.meta.files,
          subscribeToRealtime: !0
        }));
      } catch (error) {
        reportError(ServiceCategories.DESIGN_SYSTEMS_EDITOR, error);
      }
    }
    for (let i = 0; i < libraryKeys.length; i += 200) {
      let batch = libraryKeys.slice(i, i + 200);
      promises.push(fetchBatch(batch));
    }
    await Promise.all(promises);
  }
}

/**
 * Fetches styles by keys (original: fetchStylesByKeys)
 * @param dispatch
 * @param styleKeys
 * @param orgId
 */
export async function fetchStylesByKeys(dispatch: Fn, styleKeys: string[], orgId: string) {
  if (styleKeys.length === 0) return [];
  let {
    styles,
    files
  } = (await sendWithRetry.post('/api/styles', {
    style_keys: styleKeys,
    org_id: orgId
  })).data.meta;
  dispatch(batchPutFileAction({
    files,
    subscribeToRealtime: !0
  }));
  return styles;
}

/**
 * Finds and returns assets for given node IDs, handling components and state groups.
 * (original: getAssetsForNodeIds)
 * @param sceneGraphMap Map of scene graph nodes
 * @param symbolNodeIds Array of symbol node IDs
 * @param stateGroupNodeIds Array of state group node IDs
 * @param publishedByLibraryKey Published assets by library key
 * @param fileVersion Current file version
 * @param dispatch Redux dispatch function
 * @param includeStateGroups Whether to include state groups (default: false)
 * @returns Array of asset objects
 */
export function getAssetsForNodeIds(sceneGraphMap: TSSceneGraph, symbolNodeIds: string[] = [], stateGroupNodeIds: string[] = [], publishedByLibraryKey: any, fileVersion: string | number, dispatch: any, includeStateGroups: boolean = false): any[] {
  const assets: Record<string, any> = {};
  const allNodeIds = symbolNodeIds.concat(stateGroupNodeIds);
  const publishedComponents = flattenAssetsByTeam(publishedByLibraryKey.components);
  const publishedStateGroups = flattenAssetsByTeam(publishedByLibraryKey.stateGroups);
  const missingLibraryKeys: string[] = [];
  for (const nodeId of allNodeIds) {
    const node = sceneGraphMap.get(nodeId);
    if (!node) continue;
    const libraryKey = node.sourceLibraryKey;
    const publishID = node.publishID;
    if (!publishID || !libraryKey) continue;
    if (!publishedStateGroups[libraryKey] && !publishedComponents[libraryKey] && !tr.has(libraryKey)) {
      tr.add(libraryKey);
      missingLibraryKeys.push(libraryKey);
    }
    let isStateGroup = node.isStateGroup;
    let sharedVersion = isStateGroup ? node.sharedStateGroupVersion : node.sharedSymbolVersion;
    let assetKey = isStateGroup ? node.stateGroupKey : node.componentKey;
    let publishedAsset = (isStateGroup ? publishedStateGroups[libraryKey] ?? {} : publishedComponents[libraryKey] ?? {})[publishID];

    // If published asset is a component, check for containing state group
    if (publishedAsset?.type === PrimaryWorkflowEnum.COMPONENT) {
      const containingStateGroupId = publishedAsset.containing_frame?.containingStateGroup?.nodeId;
      if (containingStateGroupId) {
        const stateGroupAssets = publishedStateGroups[libraryKey];
        publishedAsset = stateGroupAssets?.[containingStateGroupId];
        isStateGroup = true;
      }
    }
    if (publishedAsset) {
      assets[getAssetKey(publishedAsset)] = publishedAsset;
    } else if (isStateGroup) {
      // Only add if assetKey is valid and not already present
      if (!assetKey || assets[assetKey] || !node.reversedChildrenGuids.some((childId: string) => {
        const child = sceneGraphMap.get(childId);
        return child?.componentKey && !assets[child.componentKey];
      })) {
        continue;
      }
      const defaultStateId = Fullscreen.getDefaultStateForLocalStateGroup(nodeId);
      const defaultState = sceneGraphMap.get(defaultStateId);
      const [minWidth, minHeight] = defaultState ? [defaultState.size.x, defaultState.size.y] : [0, 0];
      assets[assetKey] = {
        type: PrimaryWorkflowEnum.STATE_GROUP,
        name: node.name,
        library_key: node.sourceLibraryKey,
        key: assetKey,
        thumbnail_url: `/state_group/${assetKey}/thumbnail?ver=${sharedVersion}&fv=${fileVersion}`,
        canvas_url: `/state_group/${assetKey}/canvas?ver=${sharedVersion}&fv=${fileVersion}`,
        node_id: publishID || '',
        isLocal: false,
        version: sharedVersion || 'INVALID',
        userFacingVersion: node.userFacingVersion,
        containing_frame: {},
        min_node_width: minHeight,
        min_node_height: minWidth,
        default_state_key: ''
      };
    } else {
      // Only add if assetKey is valid and not already present
      if (!assetKey || assets[assetKey] || node.isState && !includeStateGroups || fileVersion === null) {
        continue;
      }
      assets[assetKey] = {
        type: PrimaryWorkflowEnum.COMPONENT,
        name: node.name,
        library_key: node.sourceLibraryKey,
        component_key: assetKey,
        thumbnail_url: `/component/${assetKey}/thumbnail?ver=${sharedVersion}&fv=${fileVersion}`,
        canvas_url: `/component/${assetKey}/canvas?ver=${sharedVersion}&fv=${fileVersion}`,
        node_id: publishID || '',
        content_hash: node.sharedSymbolVersion || undefined,
        userFacingVersion: node.userFacingVersion,
        isLocal: false,
        min_node_height: node.size.x,
        min_node_width: node.size.y
      };
    }
  }
  batchFetchFiles(missingLibraryKeys, dispatch);
  return Object.values(assets);
}

/**
 * Returns a set of asset keys for the current scene graph and subscribed node IDs.
 * (original: getSubscribedAssetKeys)
 * @param state Redux state
 * @param dispatch Redux dispatch function
 * @returns Set of asset keys
 */
export function getSubscribedAssetKeys(state: any, dispatch: any): Set<string> {
  return new Set(getAssetsForNodeIds(state.mirror.sceneGraph, subscribedSymbolsNodeIdsFromLoadedPagesSelector(state), subscribedStateGroupsNodeIdsFromLoadedPagesSelector(state), state.library.publishedByLibraryKey, state.fileVersion, dispatch).map(asset => getAssetKey(asset)));
}

/**
 * Helper to build asset map from node IDs and scene graph.
 * (original: buildAssetMap)
 */
function buildAssetMap(sceneGraph: Map<string, any>, symbolNodeIds: string[], stateGroupNodeIds: string[], publishedByLibraryKey: any, fileVersion: string, dispatch: any): Record<string, any> {
  return getAssetsForNodeIds(sceneGraph, symbolNodeIds, stateGroupNodeIds, publishedByLibraryKey, fileVersion, dispatch, true).reduce((acc, asset) => {
    if (asset.type === PrimaryWorkflowEnum.COMPONENT) {
      if (asset.component_key) acc[asset.component_key] = asset;
    } else {
      acc[asset.key] = asset;
    }
    return acc;
  }, Object.create(null));
}

/**
 * Hook to get current or all subscribed assets for the current file.
 * (original: useSubscribedAssets)
 * @param mode 'current' or 'all'
 * @returns Asset map
 */
export function useSubscribedAssets(mode: 'current' | 'all') {
  const dispatch = useDispatch();
  const {
    library,
    sceneGraph,
    fileVersion,
    subscribedComponents,
    subscribedStateGroups,
    subscribedComponentsOnCurrentPage,
    subscribedStateGroupsOnCurrentPage
  } = selectWithShallowEqual(state => ({
    library: state.library,
    sceneGraph: state.mirror.sceneGraph,
    fileVersion: state.fileVersion,
    subscribedComponents: subscribedSymbolsNodeIdsFromLoadedPagesSelector(state),
    subscribedStateGroups: subscribedStateGroupsNodeIdsFromLoadedPagesSelector(state),
    subscribedComponentsOnCurrentPage: subscribedSymbolsNodeIdsOnCurrentPageSelector(state),
    subscribedStateGroupsOnCurrentPage: subscribedStateGroupsNodeIdsOnCurrentPageSelector(state)
  }));
  const [symbolNodeIds, stateGroupNodeIds] = mode === 'current' ? [subscribedComponentsOnCurrentPage, subscribedStateGroupsOnCurrentPage] : [subscribedComponents, subscribedStateGroups];
  return useMemo(() => buildAssetMap(sceneGraph, symbolNodeIds, stateGroupNodeIds, library.publishedByLibraryKey, fileVersion, dispatch), [sceneGraph, symbolNodeIds, stateGroupNodeIds, library.publishedByLibraryKey, fileVersion, dispatch]);
}

/**
 * Checks if a library subscription exists for a given key.
 * (original: checkLibrarySubscription)
 * @param defaultPublished Default published object
 * @param libraryKey Library key to check
 * @returns True if subscribed
 */
export function checkLibrarySubscription(defaultPublished: any, libraryKey: string): boolean {
  const isInDefault = defaultPublished.libraryKeys.includes(libraryKey);
  const isInAtom = atomStoreManager.get(subscribedLibraryKeysAtom).has(libraryKey);
  return !!isInDefault || !!isInAtom;
}

/**
 * Memoized selector for local styles by key.
 * (original: tp)
 */
const getLocalStylesByKey = memoizeByArgs((library: any) => {
  const stylesByKey: Record<string, any> = {};
  const localStyles = library.local.styles;
  for (const styleId in localStyles) {
    const style = localStyles[styleId];
    stylesByKey[style.key] = style;
  }
  return stylesByKey;
});

/**
 * Gets subscription info for a style key.
 * (original: getStyleSubscriptionInfo)
 * @param styleKey Style key
 * @param nodeIds Array of node IDs
 * @param library Library object
 * @returns Subscription info object
 */
export function getStyleSubscriptionInfo(styleKey: string, nodeIds: string[], library: any) {
  const localStyle = getLocalStylesByKey(library)[styleKey];
  if (localStyle) {
    return {
      kind: SubscriptionStatusEnum.LOCAL,
      value: localStyle
    };
  }
  const usedStyle = library.used__LIVEGRAPH.styles[styleKey];
  if (usedStyle?.status === 'loaded') {
    return {
      kind: SubscriptionStatusEnum.SUBSCRIBED_WITH_LIBRARY,
      value: usedStyle.data
    };
  }
  return nodeIds && nodeIds.length ? {
    kind: SubscriptionStatusEnum.SUBSCRIBED_WITHOUT_LIBRARY,
    value: {
      key: styleKey,
      node_id: nodeIds[0]
    }
  } : undefined;
}

/**
 * Gets subscription info for a style key using Redux state.
 * (original: useStyleSubscriptionInfo)
 * @param styleKey Style key
 * @param nodeIds Array of node IDs
 * @returns Subscription info object
 */
export function useStyleSubscriptionInfo(styleKey: string, nodeIds: string[]) {
  const library = useSelector<ObjectOf>(state => state.library);
  return getStyleSubscriptionInfo(styleKey, nodeIds, library);
}

/**
 * Returns the name for a style subscription info object.
 * (original: getStyleSubscriptionName)
 * @param info Subscription info object
 * @param sceneGraph Scene graph map
 * @returns Style name or empty string
 */
export function getStyleSubscriptionName(info: {
  kind: SubscriptionStatusEnum;
  value: any;
}, sceneGraph: Map<string, any>): string {
  if (!info) return '';
  if (info.kind !== SubscriptionStatusEnum.SUBSCRIBED_WITHOUT_LIBRARY) return info.value.name;
  const node = sceneGraph.get(info.value.node_id);
  return node ? node.name : '';
}

/**
 * Returns the name for a style subscription using Redux selector.
 * (original: useStyleSubscriptionName)
 * @param styleKey Style key
 * @param nodeIds Array of node IDs
 * @returns Style name or empty string
 */
export function useStyleSubscriptionName(styleKey: string, nodeIds: string[]): string {
  const sceneGraph = useSelector((state: any) => state.mirror.sceneGraph);
  return getStyleSubscriptionName(useStyleSubscriptionInfo(styleKey, nodeIds), sceneGraph);
}

/**
 * Returns a map of assets that have a containing state group.
 * (original: filterAssetsWithContainingStateGroup)
 * @param assets Asset map
 * @returns Filtered asset map
 */
export function filterAssetsWithContainingStateGroup(assets: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {};
  for (const key in assets) {
    const asset = assets[key];
    if (asset.containing_frame?.containingStateGroup) {
      result[key] = {
        ...asset
      };
    }
  }
  return result;
}

/**
 * Returns a nested value from a lookup map.
 * (original: getNestedValue)
 * @param key
 * @param outerKey
 * @param innerKey
 * @param map
 */
export function getNestedValue(key: string, outerKey: string, innerKey: string, map: Record<string, Record<string, Record<string, any>>>): any | null {
  const outer = outerKey ? map[outerKey] : null;
  if (!outer || !key) return null;
  const inner = outer[key];
  return inner ? inner[innerKey] : null;
}

/**
 * Finds an asset by node ID in components, state groups, or modules.
 * (original: findAssetByNodeId)
 * @param nodeId
 * @param library
 */
export function findAssetByNodeId(nodeId: string, library: any): any | null {
  const {
    components,
    stateGroups,
    modules
  } = library;
  if (components[nodeId]) {
    const comp = components[nodeId];
    const groupId = comp.containing_frame?.containingStateGroup?.nodeId;
    return groupId ? stateGroups[groupId] || null : comp || null;
  }
  if (stateGroups[nodeId]) return stateGroups[nodeId] || null;
  if (getFeatureFlags().dse_module_publish && modules[nodeId]) return modules[nodeId] || null;
  return null;
}

/**
 * Checks if an asset has errors.
 * (original: hasAssetError)
 * @param asset
 */
export function hasAssetError(asset: any): boolean {
  const isStateGroupError = asset.type === PrimaryWorkflowEnum.STATE_GROUP && !!(asset.stateGroupError && asset.stateGroupError !== StateGroupErrorType.TOO_MANY_STATES_ERROR);
  return !!(asset.componentPropDefError && [VariableSetErrorType.CONFLICTING_NAMES_ERROR, VariableSetErrorType.CONFLICTING_NAMES_WITH_VARIANT_ERROR, VariableSetErrorType.UNUSED_DEF_ERROR].includes(asset.componentPropDefError)) || isStateGroupError;
}

/**
 * Checks if variable set error is not NONE.
 * (original: hasVariableSetError)
 * @param asset
 */
export function hasVariableSetError(asset: any): boolean {
  return asset.variableSetError !== VariableErrorType.NONE;
}

// Promise and callback management for async operations (original: resolveUsedComponentsStateGroups, usedComponentsStateGroupsPromise, resolveUsedComponents, usedComponentsPromise,
// tx, tN, getUsedComponentsStateGroupsAsync, resolveUsedLibraries, usedLibrariesPromise, resolveUsedLibrariesAsync, usedLibrariesAsyncPromise)
export let resolveUsedComponentsStateGroups: () => void = () => { };
export let usedComponentsStateGroupsPromise = new Promise<void>(resolve => {
  resolveUsedComponentsStateGroups = resolve;
});
export let resolveUsedComponents: () => void = () => { };
export let usedComponentsPromise = new Promise<void>(resolve => {
  resolveUsedComponents = resolve;
});
export let resolveAsync: () => void = () => { };
export let asyncPromise = new Promise<void>(resolve => {
  resolveAsync = resolve;
});

/**
 * Returns an object for used components/state groups async operation.
 * (original: getUsedComponentsStateGroupsAsync)
 * @param store Redux store
 */
export function getUsedComponentsStateGroupsAsync(store: any) {
  return {
    callback: resolveAsync,
    promise: asyncPromise,
    resetPromise: resetAsyncPromise,
    loadingKey: `GET_USED_COMPONENTS_STATE_GROUPS_FOR_${store.getState().openFile?.key}`
  };
}
export let resolveUsedLibraries: () => void = () => { };
export let usedLibrariesPromise = new Promise<void>(resolve => {
  resolveUsedLibraries = resolve;
});
export let resolveUsedLibrariesAsync: () => void = () => { };
export let usedLibrariesAsyncPromise = new Promise<void>(resolve => {
  resolveUsedLibrariesAsync = resolve;
});

/**
 * Resets all async promises and callbacks.
 * (original: resetAllAsyncPromises)
 */
export function resetAllAsyncPromises() {
  resolveUsedComponentsStateGroups();
  resolveUsedComponents();
  resolveUsedLibraries();
  usedComponentsStateGroupsPromise = new Promise<void>(resolve => {
    resolveUsedComponentsStateGroups = resolve;
  });
  usedComponentsPromise = new Promise<void>(resolve => {
    resolveUsedComponents = resolve;
  });
  usedLibrariesPromise = new Promise<void>(resolve => {
    resolveUsedLibraries = resolve;
  });
  resetAsyncPromise();
}

/**
 * Resets the async promise and callback for used components/state groups.
 * (original: tD)
 */
function resetAsyncPromise() {
  resolveAsync();
  asyncPromise = new Promise<void>(resolve => {
    resolveAsync = resolve;
  });
}

/**
 * Sorts assets by team, folder, and name.
 * (original: compareAssetsByTeam)
 * @param a
 * @param b
 * @param teamId
 */
export function compareAssetsByTeam(a: any, b: any, teamId: string): number {
  if (a.team_id === teamId) return -1;
  if (b.team_id === teamId) return 1;
  return (a.team_name || '').localeCompare(b.team_name || '');
}

/**
 * Sorts libraries by team, folder, and name.
 * (original: sortLibraries)
 * @param libraries
 * @param teamId
 * @param options
 */
export function sortLibraries(libraries: any[], teamId: string, options?: {
  groupByFolders?: boolean;
  isDescending?: boolean;
}): any[] {
  return libraries.sort((a, b) => {
    const groupByFolders = options?.groupByFolders;
    let result: number;
    if (a.team_id !== b.team_id) {
      result = compareAssetsByTeam(a, b, teamId);
    } else if (groupByFolders && a.file.folder_id !== b.file.folder_id) {
      result = a.folder_name < b.folder_name ? -1 : 1;
    } else {
      result = (a.library_file_name || '').localeCompare(b.library_file_name || '');
    }
    return options?.isDescending ? result : -result;
  });
}

/**
 * Sorts libraries by team, folder path, and name.
 * (original: sortLibrariesByFolder)
 * @param libraries
 * @param teamId
 * @param folderMap
 * @param options
 */
export function sortLibrariesByFolder(libraries: any[], teamId: string, folderMap: Record<string, any>, options?: {
  groupByFolders?: boolean;
  isDescending?: boolean;
}): any[] {
  return libraries.sort((a, b) => {
    const groupByFolders = options?.groupByFolders;
    let result: number;
    if (a.team_id !== b.team_id) {
      result = a.team_id === teamId ? -1 : b.team_id === teamId ? 1 : (a.team_name || '').localeCompare(b.team_name || '');
    } else if (groupByFolders && a.folder_id !== b.folder_id) {
      result = (folderMap[a.folder_id]?.path ?? '') < (folderMap[b.folder_id]?.path ?? '') ? -1 : 1;
    } else {
      result = (a.library_name || '').localeCompare(b.library_name || '');
    }
    return options?.isDescending ? result : -result;
  });
}

/**
 * Returns a thumbnail URL for an asset, generating if needed.
 * (original: getAssetThumbnailUrl)
 * @param asset
 * @param thumbnails
 * @param forceGenerate
 */
export function getAssetThumbnailUrl(asset: any, thumbnails: Record<string, any>, forceGenerate?: boolean): string | null {
  const nodeId = asset.node_id;
  const thumbnail = thumbnails[nodeId] || {};
  let url = thumbnail.url || null;
  let hash: string | undefined;
  switch (asset.type) {
    case PrimaryWorkflowEnum.COMPONENT:
    case PrimaryWorkflowEnum.STYLE:
      hash = asset.content_hash;
      break;
    case PrimaryWorkflowEnum.VARIABLE:
    case PrimaryWorkflowEnum.VARIABLE_SET:
    case PrimaryWorkflowEnum.STATE_GROUP:
    case PrimaryWorkflowEnum.MODULE:
    case PrimaryWorkflowEnum.RESPONSIVE_SET:
    case PrimaryWorkflowEnum.CODE_COMPONENT:
    case PrimaryWorkflowEnum.MANAGED_STRING:
      hash = asset.version;
      break;
    default:
      throwTypeError(asset);
  }
  if (forceGenerate || thumbnail.content_hash !== hash || !isValidThumbnail(url)) {
    switch (asset.type) {
      case PrimaryWorkflowEnum.COMPONENT:
      case PrimaryWorkflowEnum.STATE_GROUP:
      case PrimaryWorkflowEnum.MODULE:
      case PrimaryWorkflowEnum.RESPONSIVE_SET:
      case PrimaryWorkflowEnum.CODE_COMPONENT:
        url = generateNodeThumbnail(nodeId);
        break;
      case PrimaryWorkflowEnum.STYLE:
        url = isFullyTransparentFill(asset) ? getDefaultPlaceholderThumbnail() : generateThumbnailFromStyleMaster(nodeId, asset.style_type);
        break;
      case PrimaryWorkflowEnum.VARIABLE:
      case PrimaryWorkflowEnum.VARIABLE_SET:
      case PrimaryWorkflowEnum.MANAGED_STRING:
        url = getDefaultPlaceholderThumbnail();
        break;
      default:
        throwTypeError(asset);
    }
  }
  return url;
}

/**
 * Returns a formatted string for library contents.
 * (original: formatLibraryContents)
 * @param params
 */
export function formatLibraryContents({
  numProductComponents,
  numStyles,
  numVariables,
  numVariableCollections
}: {
  numProductComponents: number;
  numStyles: number;
  numVariables: number;
  numVariableCollections: number;
}): string {
  const styleStr = numStyles > 0 ? getI18nString('design_systems.libraries_modal.plural.num_style', {
    numStyles
  }) : null;
  const componentStr = numProductComponents > 0 ? getI18nString('design_systems.libraries_modal.plural.num_component', {
    numComponents: numProductComponents
  }) : null;
  const variableStr = numVariables > 0 ? getI18nString('design_systems.libraries_modal.plural.num_variables', {
    numVariables
  }) : null;
  const collectionStr = numVariables === 0 && numVariableCollections > 0 ? getI18nString('design_systems.libraries_modal.plural.variable_collections', {
    numVariableCollections
  }) : null;
  const items = filterNotNullish([componentStr, styleStr, variableStr, collectionStr]);
  return items.length === 0 ? getI18nString('design_systems.libraries_modal.no_components_styles_variables') : formatList(items, 'unit');
}

/**
 * Checks if a staging status is not DELETED or NOT_STAGED.
 * (original: isActiveStagingStatus)
 * @param status
 */
export function isActiveStagingStatus(status: StagingStatusEnum) {
  return status !== StagingStatusEnum.DELETED && status !== StagingStatusEnum.NOT_STAGED;
}

/**
 * Finds the library name for an asset key.
 * (original: findLibraryNameForAsset)
 * @param assetKey
 * @param assetMap
 * @param assetsByTeam
 * @param libraries
 */
export function findLibraryNameForAsset(assetKey: string, assetMap: Record<string, any>, assetsByTeam: any, libraries: Record<string, any>): string | null {
  const assetId = assetMap[assetKey];
  if (!assetId) return null;
  const asset = getAllAssets(assetsByTeam).find((a: any) => a.type === PrimaryWorkflowEnum.COMPONENT ? a.component_key === assetId : a.key === assetId);
  if (!asset) return 'another file';
  const library = libraries[asset.library_key];
  return library ? library.name : 'another file';
}

/**
 * Remaps node IDs to old keys for move operations.
 * (original: remapNodeIdsForMove)
 * @param nodeIdsToMove
 * @param movableNodeIdToOldKey
 * @param assets
 */
export function remapNodeIdsForMove(nodeIdsToMove: string[], movableNodeIdToOldKey: Record<string, string>, assets: any[]): {
  moveRemappings: Record<string, string>;
  movableItemsToPublishAsNew: Set<string>;
} {
  const remappings: Record<string, string> = Object.create(null);
  nodeIdsToMove.forEach(id => {
    if (movableNodeIdToOldKey[id]) {
      remappings[id] = movableNodeIdToOldKey[id];
    } else {
      debug(false, 'Expected nodeIdsToMove to be a subset of movableNodeIdToOldKey', {
        nodeIdsToMove,
        movableNodeIdToOldKey
      });
    }
  });
  for (const asset of assets) {
    const groupId = asset.containing_frame?.containingStateGroup?.nodeId;
    const oldKey = movableNodeIdToOldKey[asset.node_id];
    if (!groupId || !oldKey) continue;
    const hasGroupOldKey = !!movableNodeIdToOldKey[groupId];
    if (!remappings[groupId] || !hasGroupOldKey) {
      remappings[asset.node_id] = oldKey;
    } else if (remappings[asset.node_id]) {
      delete remappings[asset.node_id];
    }
  }
  return {
    moveRemappings: remappings,
    movableItemsToPublishAsNew: new Set(Object.keys(movableNodeIdToOldKey).filter(id => !remappings[id]))
  };
}

/**
 * Checks if an asset is a state group, symbol, or code component.
 * (original: isStateGroupOrSymbolOrCodeComponent)
 * @param asset
 */
export function isStateGroupOrSymbolOrCodeComponent(asset: any): boolean {
  return asset.isStateGroup || asset.type === 'SYMBOL' && !asset.isState || asset.isCodeComponent;
}

/**
 * Checks if an asset type is a primary workflow type.
 * (original: isPrimaryWorkflowType)
 * @param asset
 */
export function isPrimaryWorkflowType(asset: any): boolean {
  return PRIMARY_WORKFLOW_TYPES.includes(asset.type);
}

/**
 * Gets the asset key for publishing.
 * (original: getAssetKeyForPublish)
 * @param asset
 */
export function getAssetKeyForPublish(asset: any): string {
  return asset.isLocal ? SceneGraphHelpers.getAssetKeyForPublish(asset.node_id) : getAssetKey(asset);
}

/**
 * Gets the containing state group node ID for an asset.
 * (original: getContainingStateGroupNodeId)
 * @param asset
 */
export function getContainingStateGroupNodeId(asset: any): string | null {
  return asset.containing_frame?.containingStateGroup?.nodeId ?? null;
}

/**
 * Checks if an asset has a containing state group.
 * (original: hasContainingStateGroup)
 * @param asset
 */
export function hasContainingStateGroup(asset: any): boolean {
  return !!getContainingStateGroupNodeId(asset);
}
/**
 * Finds an asset for a given node, using scene graph and asset maps.
 * (original: findAssetForNode)
 * @param nodeId
 * @param sceneGraphMap
 * @param assetMap
 * @param assetsByKey
 */
export function findAssetForNode(nodeId: string, sceneGraphMap: Map<string, any>, assetMap: Record<string, any>, assetsByKey?: Record<string, any>): any | undefined {
  if (!nodeId) return;
  let node = sceneGraphMap.get(nodeId);
  if (node && node.containingStateGroupId) {
    node = sceneGraphMap.get(node.containingStateGroupId);
  }
  if (node) {
    if (node.isSubscribedAsset) {
      const key = node.componentKey ?? node.stateGroupKey;
      if (key) return assetsByKey?.[key];
    } else {
      return assetMap?.[node.guid];
    }
  }
}

/**
 * Compares two assets by name, case-insensitive.
 * (original: compareAssetsByName)
 * @param a
 * @param b
 */
export function compareAssetsByName(a: any, b: any): number {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
}

/**
 * Returns i18n string for library age enum.
 * (original: getLibraryAgeLabel)
 * @param age
 */
export function getLibraryAgeLabel(age: LibraryAgeEnum): string {
  switch (age) {
    case LibraryAgeEnum.THIRTY_DAYS:
      return getI18nString('design_systems.libraries_modal.30_days');
    case LibraryAgeEnum.SIXTY_DAYS:
      return getI18nString('design_systems.libraries_modal.60_days');
    case LibraryAgeEnum.NINETY_DAYS:
      return getI18nString('design_systems.libraries_modal.90_days');
    case LibraryAgeEnum.YEAR:
      return getI18nString('design_systems.libraries_modal.year');
    default:
      throwTypeError(age);
  }
}

/**
 * Checks if asset is a template.
 * (original: isTemplateAsset)
 * @param asset
 */
export function isTemplateAsset(asset: any): boolean {
  return !!(getFeatureFlags().dse_templates_proto && asset.description?.startsWith('Figma.TemporaryIsTemplate'));
}

/**
 * Checks if asset is a module and module publishing is enabled.
 * (original: isModulePublishEnabled)
 * @param asset
 */
export function isModulePublishEnabled(asset: any): boolean {
  return !!(getFeatureFlags().dse_module_publish && asset.type === 'MODULE');
}

/**
 * Checks if subscription info has any active subscription not already subscribed.
 * (original: hasActiveSubscriptionNotSubscribed)
 * @param info
 * @param subscribed
 */
export function hasActiveSubscriptionNotSubscribed(info: any, subscribed: any): boolean {
  return (info.design !== null || info.figjam !== null || info.slides !== null || info.buzz !== null) && (!!info.design || !!info.figjam || !!info.slides || !!info.buzz) && (!!info.design && !subscribed.designSubscribed || !!info.figjam && !subscribed.figjamSubscribed || !!info.slides && !subscribed.slidesSubscribed || !!info.buzz && !subscribed.buzzSubscribed);
}

/**
 * Gets library key for a component node.
 * (original: getComponentLibraryKey)
 * @param nodeId
 * @param componentsMap
 */
export function getComponentLibraryKey(nodeId: string, componentsMap?: Record<string, any>): string | null {
  const map = componentsMap || getComponentAssetsMap(debugState.getState().library.publishedByLibraryKey.components);
  return nodeId ? map[nodeId]?.library_key ?? null : null;
}

/**
 * Gets library key for a state group node.
 * (original: getStateGroupLibraryKey)
 * @param nodeId
 * @param stateGroupsMap
 */
export function getStateGroupLibraryKey(nodeId: string, stateGroupsMap?: Record<string, any>): string | null {
  const map = stateGroupsMap || getComponentAssetsMap(debugState.getState().library.publishedByLibraryKey.stateGroups);
  return nodeId ? map[nodeId]?.library_key ?? null : null;
}

/**
 * Flattens nested asset objects into a map by node id.
 * (original: flattenNestedAssets)
 * @param assets
 */
export function flattenNestedAssets(assets: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(assets).forEach(teamId => {
    Object.keys(assets[teamId]).forEach(libKey => {
      Object.keys(assets[teamId][libKey]).forEach(nodeId => {
        result[libKey] = result[libKey] || {};
        result[libKey][nodeId] = assets[teamId][libKey][nodeId];
      });
    });
  });
  return result;
}

/**
 * Builds a map of assets by key from assetsByTeam.
 * (original: getComponentAssetsMap)
 * @param assetsByTeam
 */
export function getComponentAssetsMap(assetsByTeam: any): Record<string, any> {
  const map: Record<string, any> = {};
  iterateAssetsByTeam(assetsByTeam, (_teamId, _libKey, _assetKey, asset) => {
    map[getAssetKey(asset)] = asset;
  });
  return map;
}

/**
 * React hook to optimistically update style thumbnail.
 * (original: useOptimisticStyleThumbnailUpdate)
 * @param info
 */
export function useOptimisticStyleThumbnailUpdate(info: {
  value: any;
  kind: string;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const update = useMemo(() => debounce(() => {
    if (info && info.value.node_id) {
      dispatch(updateStyleThumbnailOptimist({
        styleNodeId: info.value.node_id,
        styleKind: info.kind
      }));
    }
  }), [dispatch, info]);
  useEffect(update);
}

/**
 * Returns a unique asset id string for a given asset.
 * (original: getAssetUniqueId)
 * @param asset
 */
export function getAssetUniqueId(asset: any): string {
  switch (asset.type) {
    case PrimaryWorkflowEnum.CODE_COMPONENT:
    case PrimaryWorkflowEnum.RESPONSIVE_SET:
      return asset.subscriptionStatus === 'LIBRARY' ? `${asset.sourceLibraryKey}:${asset.assetId}` : `${asset.library_key}:${asset.node_id}`;
    default:
      return `${asset.library_key}:${asset.node_id}`;
  }
}

/**
 * Resolves parent org id for a file.
 * (original: resolveFileParentOrgId)
 * @param state
 */
export function resolveFileParentOrgId(state: any): string | null {
  return resolveParentOrgId(state.openFile, state.currentUserOrgId);
}

/**
 * React hook to get current user's org.
 * (original: useCurrentUserOrg)
 */
export function useCurrentUserOrg() {
  const orgId = getParentOrgId();
  const orgById = useSelector((state: any) => state.orgById);
  return getOrgByCurrentUserId(orgId, orgById);
}

/**
 * React hook to get subscribed library id for a given key.
 * (original: useSubscribedLibraryId)
 * @param libraryKey
 */
export function useSubscribedLibraryId(libraryKey: string): string | undefined {
  const libraries = useSubscribedLibraries();
  return useMemo(() => {
    if (libraryKey && libraries.status === 'loaded') return libraries.data?.find(lib => lib.libraryKey === libraryKey)?.id;
  }, [libraryKey, libraries.data, libraries.status]);
}

/**
 * Checks if container type is org or workspace.
 * (original: isOrgOrWorkspaceContainer)
 * @param type
 */
export function isOrgOrWorkspaceContainer(type: FContainerType): boolean {
  return type === FContainerType.ORG || type === FContainerType.WORKSPACE;
}

/**
 * Checks if two values are equal or both falsy.
 * (original: areValuesEqual)
 * @param a
 * @param b
 */
export function areValuesEqual(a: any, b: any): boolean {
  return !a && !b || a === b;
}

/**
 * Compares two frames for equality, optionally comparing sort positions.
 * (original: areFramesEqual)
 * @param a
 * @param b
 * @param options
 */
export function areFramesEqual(a: any, b: any, options?: {
  compareSortPositions?: boolean;
}): boolean {
  const n = a ? a.nodeId : undefined;
  const i = a ? a.name : undefined;
  const aColor = a ? a.backgroundColor : undefined;
  const aPageId = a ? a.pageId : undefined;
  const aSort = a ? a.sortPosition : undefined;
  const l = b ? b.nodeId : undefined;
  const d = b ? b.name : undefined;
  const bColor = b ? b.backgroundColor : undefined;
  const bPageId = b ? b.pageId : undefined;
  const bSort = b ? b.sortPosition : undefined;
  const sortEqual = !options?.compareSortPositions || aSort === bSort;
  if (n !== l || i !== d || aColor !== bColor || !sortEqual || !!aPageId || !bPageId) {
    return false;
  }
  if (a == null && b == null || !(a == null || b == null || !areValuesEqual(a.nodeId, b.nodeId) || !areValuesEqual(a.name, b.name) || !areValuesEqual(a.backgroundColor, b.backgroundColor) || !areValuesEqual(a.pageName, b.pageName) || !areValuesEqual(a.pageId, b.pageId) || options?.compareSortPositions && !areValuesEqual(a.sortPosition, b.sortPosition)) && areContainingStateGroupsEqual(a.containingStateGroup, b.containingStateGroup)) {
    return true;
  }
  return false;
}

/**
 * Helper to compare containing state groups.
 * (original: inline in areFramesEqual)
 */
export function areContainingStateGroupsEqual(a: any, b: any): boolean {
  if (a == null && b == null) return true;
  if (a == null || b == null) return false;
  for (const key of ['nodeId', 'name']) {
    if (!areValuesEqual(a[key], b[key])) return false;
  }
  return true;
}

/**
 * Checks if two pages are equal by pageId.
 * (original: arePagesEqual)
 * @param a
 * @param b
 */
export function arePagesEqual(a: any, b: any): boolean {
  return !a && !b || !!a && !!b && a.pageId === b.pageId;
}

/**
 * Checks if two nodes are equal by nodeId.
 * (original: areNodesEqual)
 * @param a
 * @param b
 */
export function areNodesEqual(a: any, b: any): boolean {
  return !a && !b || !!a && !!b && a.nodeId === b.nodeId;
}
export const $N = getAllAssetsArray;
export const $j = flattenAssetsArray;
export const A0 = getPublishedAssetsForDefaultPublished;
export const Av = getAssetKey;
export const Bt = useUserLibrarySubscriptionState;
export const CG = getAssetKeyForPublish;
export const Cj = remapNodeIdsForMove;
export const Dg = getAssetVersion;
export const E2 = getContainingStateGroupNodeId;
export const ET = getSubscribedAssetKeys;
export const El = isTrackedState;
export const FS = isModulePublishEnabled;
export const Fl = isTemplateAsset;
export const G$ = formatLibraryContents;
export const GA = hasPublishedAsset;
export const Gg = addStateNamesToAssets;
export const Gj = getAssetUniqueId;
export const Gp = getStyleSubscriptionInfo;
export const HF = isStagedStatus;
export const HK = getAssetsForLibraryKey;
export const Hb = isActiveStagingStatus;
export const IW = getShownNonLocalStyle;
export const J1 = dispatchDeleteLoadingStates;
export const Jc = LibrarySubscriptionContext;
export const KQ = updateLocalLibraryItems;
export const Kw = groupStylesByType;
export const LB = createLocalStateGroup;
export const LC = resolveUsedComponentsStateGroups;
export const LI = isStateGroupOrSymbolOrCodeComponent;
export const LT = getLibraryAgeLabel;
export const LX = sortStyles;
export const Lk = compareStyles;
export const MA = compareAssetsByName;
export const MF = getAssetKeyVersion;
export const Mb = generatePublishedComponentsCacheKey;
export const Mj = useOrgLibrarySubscriptionState;
export const NW = usedComponentsStateGroupsPromise;
export const NY = findAssetForNode;
export const QO = usedComponentsPromise;
export const QT = getStyleTypeLabel;
export const Q_ = areFramesEqual;
export const Qb = iterateAssetsByTeam;
export const R2 = useStyleSubscriptionInfo;
export const RQ = hasVariableSetError;
export const T4 = hasActiveSubscriptionNotSubscribed;
export const UB = clearTrackedState;
export const VJ = getAssetLibraryKey;
export const VO = findLibraryNameForAsset;
export const Ve = addTrackedState;
export const WV = filterAssetsWithContainingStateGroup;
export const X0 = getNonDeletedAssets;
export const X7 = mapAssetsToKeys;
export const XV = getStyleTypeLabelPlural;
export const Ys = deletedLoadingStates;
export const ZX = arePagesEqual;
export const _B = resolveUsedComponents;
export const _Q = getAssetThumbnailUrl;
export const aD = AssetFilterMode;
export const ad = hasContainingStateGroup;
export const ah = getComponentAssetsMap;
export const bd = resetAllAsyncPromises;
export const bp = getNestedValue;
export const cU = fetchUnpublishedStyles;
export const dx = isPrimaryWorkflowType;
export const eD = resolveFileParentOrgId;
export const eM = resolveUsedLibrariesAsync;
export const eS = useSubscribedAssets;
export const f0 = getStateGroupLibraryKey;
export const f2 = batchFetchFiles;
export const fc = useIsAssetPublishedForCurrentFile;
export const gA = compareAssetsByFrameAndName;
export const gi = sortLibraries;
export const gy = sortLibrariesByFolder;
export const iP = getPublishedAssetsForLibrary;
export const i_ = createLocalComponent;
export const iw = generateDefaultLibrariesCacheKey;
export const kG = resolveUsedLibraries;
export const kw = usedLibrariesPromise;
export const lG = getUsedComponentsStateGroupsAsync;
export const lg = isNewOrChangedOrDeleted;
export const n5 = findAssetByNodeId;
export const nJ = areNodesEqual;
export const nn = isOrgOrWorkspaceContainer;
export const oH = usedLibrariesAsyncPromise;
export const og = STYLE_TYPES;
export const ov = getAssetsForNodeIds;
export const pD = areValuesEqual;
export const pq = fetchStylesByKeys;
export const r9 = compareAssetsByTeam;
export const rC = generateNewLocalLibraryItems;
export const rt = loadStyleCanvases;
export const sv = useCurrentUserOrg;
export const sy = useStyleSubscriptionName;
export const t$ = useSubscribedLibraryId;
export const td = isSubscribedLibrary;
export const th = flattenAssetsByTeam;
export const ti = filterStylesByType;
export const uH = getStyleSubscriptionName;
export const uJ = groupStylesByPrefix;
export const uN = getComponentLibraryKey;
export const v2 = flattenNestedAssets;
export const vu = getAllAssets;
export const w$ = useOptimisticStyleThumbnailUpdate;
export const w3 = useWorkspaceLibrarySubscriptionState;
export const w8 = createLocalStyle;
export const wn = useTeamLibrarySubscriptionState;
export const yh = findStyleDataByKey;
export const zE = hasAssetError;
