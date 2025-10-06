import type { LoadingState } from '../905/957591';
import { useCallback, useMemo } from 'react';
import { z } from 'zod';
import { getBasename } from '../905/309735';
import { getResourceDataOrFallback } from '../905/419236';
import { getLibraryNames } from '../905/506188';
import { cleanAssetName } from '../905/722604';
import { createLoadedState, createLoadingState } from '../905/957591';
import { OperationStatus } from '../3973/473379';
import { processSelector } from '../3973/697935';
import { getSiteKitAssets, SITE_KIT_EMBEDS_LIBRARY_KEY, SITE_KIT_FILE } from '../figma_app/10098';
import { atom, useAtomWithSubscription } from '../figma_app/27355';
import { LibraryAssetDataOfType, LibraryComponentDataByLibraryKey } from '../figma_app/43951';
import { FEditorType } from '../figma_app/53721';
import { FComponentType } from '../figma_app/191312';
import { mapComponentProperties } from '../figma_app/349248';
import { setupMemoizedAtomSubscription } from '../figma_app/566371';
import { fetchDynamicConfig } from '../figma_app/594947';
import { getSiteEmbedConfig } from '../figma_app/862515';
import { isInteractionPathCheck, getFalseValue } from '../figma_app/897289';
import { useAssetPanelContext } from '../figma_app/923271';
import { editorTypeAtom } from '../figma_app/976749';
import { unwrap } from '../vendor/812047';

/**
 * @file Refactored logic for site kit assets and CMS config management.
 * Original function/variable names are preserved in comments for traceability.
 */

/**
 * Fetches dynamic config for site kit libraries.
 * @returns {Promise<any>}
 * Original: N
 */
export const fetchSiteKitConfig = async () => await fetchDynamicConfig('ds_sts_lib_key');

/**
 * Zod schema for CMS config validation.
 * Original: C
 */
export const CmsConfigSchema = z.object({
  libraryKey: z.string(),
  primaryTextFieldId: z.string(),
  secondaryTextFieldId: z.string(),
  imageFieldId: z.string(),
  assetNames: z.object({
    textImageList: z.string(),
    textOnlyList: z.string(),
    imageOnlyList: z.string(),
    imageSingleTextList: z.string().optional()
  })
});

/** Empty library keys array. Original: w */
export const EMPTY_LIBRARY_KEYS: string[] = [];

/**
 * Atom for managing site kit state.
 * Original: O
 */
export const siteKitAtom = atom(async get => {
  const isSitesEditor = get(editorTypeAtom) === FEditorType.Sites;
  const isReady = !!(getFalseValue() || isInteractionPathCheck()) || get(processSelector).status === OperationStatus.COMPLETED;
  if (!isSitesEditor || !isReady) {
    return {
      libraryKeys: EMPTY_LIBRARY_KEYS,
      cmsConfig: null,
      enabled: false,
      publishedFromSiteFile: false,
      sortedPrefixes: undefined
    };
  }
  const config = await fetchSiteKitConfig();
  const libraryKeys = config.get('libraryKeys', [], validateStringArray);
  const publishedFromSiteFile = config.get('siteFile', false, (e: any) => typeof e === 'boolean');
  const sortedPrefixes = config.get('order', [], validateStringArray);
  const cmsConfig = config.get('cms', null, validateCmsConfig);
  const enabled = libraryKeys.length > 0 && isSitesEditor;
  return {
    libraryKeys: enabled ? libraryKeys : [],
    cmsConfig: enabled ? cmsConfig : null,
    enabled,
    publishedFromSiteFile,
    sortedPrefixes: sortedPrefixes.map((e: string) => e.toLocaleLowerCase())
  };
});

/**
 * Validates that input is an array of strings.
 * Original: R
 */
function validateStringArray(arr: any): arr is string[] {
  return Array.isArray(arr) && arr.every(e => typeof e === 'string');
}

/**
 * Validates CMS config using Zod schema.
 * Original: L
 */
function validateCmsConfig(config: any): boolean {
  return CmsConfigSchema.safeParse(config).success;
}

/**
 * Unwrapped atom for site kit state.
 * Original: $$P0
 */
export const siteKitState = unwrap(siteKitAtom, () => ({
  libraryKeys: EMPTY_LIBRARY_KEYS,
  cmsConfig: null,
  enabled: false,
  publishedFromSiteFile: false,
  sortedPrefixes: undefined
}));

/**
 * Returns memoized subscription for library asset queries.
 * Original: $$D2
 */
export function useSiteKitAssetsSubscription() {
  const {
    libraryKeys,
    enabled
  } = useAtomWithSubscription(siteKitState);
  const queries = libraryKeys.map(libraryKey => LibraryAssetDataOfType.Query({
    libraryKey,
    assetType: FComponentType.RESPONSIVE_SET
  }));
  return setupMemoizedAtomSubscription(queries, {
    enabled
  });
}

/**
 * Returns loaded state for site kit libraries and assets.
 * Original: $$k4
 */
export function useSiteKitAssets() {
  const assetSubscriptions = useSiteKitAssetsSubscription();
  const {
    enabled
  } = useAtomWithSubscription(siteKitState);
  const loadedState: LoadingState<{
    libraries: any[];
    assetsByLibraryKey: Map<any, any>;
  }> = useMemo(() => {
    const result = {
      libraries: [],
      assetsByLibraryKey: new Map()
    };
    if (enabled) {
      for (const sub of assetSubscriptions) {
        if (sub.data) {
          const kitAssets = getSiteKitAssets(sub.data);
          if (kitAssets) {
            result.libraries.push(kitAssets.library);
            const libraryKey = kitAssets.library.libraryKey;
            result.assetsByLibraryKey.set(libraryKey, kitAssets.assets);
          }
        }
        if (sub.status === 'loading') return createLoadingState();
      }
      const embedConfig = getSiteEmbedConfig();
      if (embedConfig) result.libraries.push(embedConfig);
    }
    return createLoadedState(result);
  }, [assetSubscriptions, enabled]);
  return useMemo(() => {
    if (loadedState.status === 'loading') return createLoadingState();
    const data = loadedState.data;
    return data.libraries.length > 0 ? createLoadedState(data) : {
      status: 'disabled',
      data: null,
      errors: null
    };
  }, [loadedState]);
}

/**
 * Checks if a library key exists in the loaded site kit assets.
 * Original: $$M5
 */
export function hasSiteKitLibraryKey(libraryKey: string) {
  const assetsState = useSiteKitAssets();
  return !!libraryKey && assetsState.data?.assetsByLibraryKey.has(libraryKey);
}

/**
 * Returns mapped component data for published site kit libraries.
 * Original: $$F6
 */
export function usePublishedSiteKitComponents() {
  const {
    publishedFromSiteFile
  } = useAtomWithSubscription(siteKitState);
  const assetSubscriptions = useSiteKitAssetsSubscription();
  const libraryKeys: string[] = [];
  for (const sub of assetSubscriptions) {
    const resource = getResourceDataOrFallback(sub.data?.libraryKeyToFile?.file);
    const key = resource?.libraryKey ?? '';
    if (key) libraryKeys.push(key);
  }
  const componentQueries = libraryKeys.map(libraryKey => LibraryComponentDataByLibraryKey.Query({
    libraryKey
  }));
  const componentSubscriptions = setupMemoizedAtomSubscription(componentQueries, {
    enabled: true
  });
  return useMemo(() => {
    const result: Record<string, Record<string, any>> = {};
    for (const sub of componentSubscriptions) {
      const resource = getResourceDataOrFallback(sub.data?.libraryKeyToFile?.file);
      const libraryKey = sub.data?.libraryKeyToFile?.file?.libraryKey;
      if (!resource || !libraryKey) continue;
      const components = resource.libraryHierarchyPaths.flatMap(path => path.components).map(component => mapComponentProperties(component, {
        type: 'team',
        file: {
          key: '',
          teamId: null,
          name: SITE_KIT_FILE,
          libraryKey
        }
      }));
      const mapped: Record<string, any> = {};
      if (publishedFromSiteFile) {
        for (const comp of components) {
          const match = comp.name.match(/(.*) thumbnail/i);
          if (match) {
            const name = match[1];
            if (!name) continue;
            mapped[name] = comp;
          }
        }
      } else {
        for (const comp of components.filter(isThumbnailComponent)) {
          const pageName = comp.containing_frame?.pageName?.toLocaleLowerCase();
          if (pageName) mapped[pageName] = comp;
        }
      }
      result[libraryKey] = mapped;
    }
    return result;
  }, [publishedFromSiteFile, componentSubscriptions]);
}

/**
 * Checks if a component's name is 'thumbnail'.
 * Original: j
 */
function isThumbnailComponent(component: any): boolean {
  return component.name.toLocaleLowerCase() === 'thumbnail';
}

/**
 * Returns CMS config from site kit state.
 * Original: $$U8
 */
export function useSiteKitCmsConfig() {
  const {
    cmsConfig
  } = useAtomWithSubscription(siteKitState);
  return cmsConfig;
}

/**
 * Returns a callback to check if a library key matches the CMS config.
 * Original: $$B3
 */
export function useIsCmsLibraryKey() {
  const {
    cmsConfig
  } = useAtomWithSubscription(siteKitState);
  return useCallback((libraryKey: string) => cmsConfig?.libraryKey === libraryKey, [cmsConfig]);
}

/**
 * Returns a comparator for sorting assets by prefix order.
 * Original: $$G1
 */
export function useAssetPrefixComparator() {
  const {
    sortedPrefixes
  } = useAtomWithSubscription(siteKitState);
  return useMemo(() => {
    if (sortedPrefixes !== undefined && sortedPrefixes.length !== 0) {
      return (a: any, b: any) => {
        const nameA = cleanAssetName(getBasename(a.name)).toLocaleLowerCase();
        const nameB = cleanAssetName(getBasename(b.name)).toLocaleLowerCase();
        const idxA = sortedPrefixes.findIndex(prefix => nameA.startsWith(prefix));
        const idxB = sortedPrefixes.findIndex(prefix => nameB.startsWith(prefix));
        if (idxA === idxB) return nameA.localeCompare(nameB);
        if (idxA === -1) return 1;
        if (idxB === -1) return -1;
        return idxA - idxB;
      };
    }
  }, [sortedPrefixes]);
}

/**
 * Returns a callback to get the display name for a component's library.
 * Original: $$V7
 */
export function useLibraryDisplayName(components: any[]) {
  const libraryKeys = useMemo(() => components.map(comp => comp.type === FComponentType.RESPONSIVE_SET ? comp.sourceLibraryKey : SITE_KIT_EMBEDS_LIBRARY_KEY), [components]);
  const {
    getLibrary
  } = useAssetPanelContext();
  const {
    data
  } = getLibraryNames(libraryKeys);
  return useCallback((component: any) => {
    const key = component.type === FComponentType.RESPONSIVE_SET ? component.sourceLibraryKey : SITE_KIT_EMBEDS_LIBRARY_KEY;
    return data?.[key] ?? getLibrary(key)?.name ?? '';
  }, [data, getLibrary]);
}

// Export refactored names for external usage
export const AS = siteKitState;
export const Bv = useAssetPrefixComparator;
export const Nn = useSiteKitAssetsSubscription;
export const VF = useIsCmsLibraryKey;
export const ce = useSiteKitAssets;
export const dj = hasSiteKitLibraryKey;
export const fi = usePublishedSiteKitComponents;
export const r6 = useLibraryDisplayName;
export const t0 = useSiteKitCmsConfig;