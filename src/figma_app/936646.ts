import { difference, keyBy, uniq } from "lodash-es";
import { createContext, memo, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { getFeatureFlags } from "../905/601108";
import { createFileLibraryKeys } from "../905/651613";
import { createErrorState, createLoadedState, createLoadingState } from "../905/723791";
import { componentReplaceOpenFilePublishedLivegraph } from "../905/879323";
import { useAtomValueAndSetter } from "../figma_app/27355";
import { CommunityLibraryStyleData, LibraryData, LibraryStyleData } from "../figma_app/43951";
import { assertNotNullish } from "../figma_app/95419";
import { useSubscription, useSubscriptionAnalytics } from "../figma_app/288654";
import { mapComponentProperties, mapStateGroupProperties, mapStyleProperties } from "../figma_app/349248";
import { useCurrentFileModules } from "../figma_app/409131";
import { useCurrentFileKey } from "../figma_app/516028";
import { isValidLibraryKey } from "../figma_app/630951";
import { resolveUsedLibrariesAsync } from "../figma_app/646357";
import { useFigmaLibrariesEnabled } from "../figma_app/657017";
import { memoizeWeak } from "../figma_app/815945";
import { libraryDataCompositionAtom } from "../figma_app/825489";
import { getCurrentFileLibraryVariables, getCurrentFileLibraryVariableSets } from "../figma_app/852050";
import { updateLocalLibraryItemsThunk } from "../figma_app/864378";
// Origin: /Users/allen/sigma-main/src/figma_app/936646.ts
// Refactored: Renamed variables, added TypeScript types/interfaces, simplified logic, added comments, improved readability, ensured type safety.

/*
  Assumed dependencies:
  - React, Redux, and various project-specific hooks/utilities.
  - External functions/types: createErrorState, createLoadedState, createLoadingState, mapComponentProperties, mapStateGroupProperties, mapStyleProperties, memoizeWeak, uniq, difference, keyBy, etc.
  - Types: LibrarySubscription, LibraryDataContextValue, LibraryHierarchyPath, LibraryStyle, LibraryStatus, etc.
*/

// --- Type Definitions ---

interface LibrarySubscription {
  status: "loading" | "loaded" | "errors";
  data: any; // Should be replaced with a more specific type if available
}
interface LibraryDataContextValue {
  requestLibraryItems: (fileKey: string) => void;
  releaseLibraryItems: (fileKey: string) => void;
  fetchedFileKeys: string[];
  subscriptions: Record<string, LibrarySubscription>;
  subscriptionsByLibraryKey: Record<string, LibrarySubscription>;
}
interface LibraryProviderProps {
  children: React.ReactNode;
  maxSubscriptionsBeforeCleanup?: number;
}
interface LibrarySubscriptionComponentProps {
  subscription: LibrarySubscription;
  fileKey: string;
}
interface LibrarySubscriptionMemoProps {
  fileKey: string;
  onChange: (fileKey: string, subscription: LibrarySubscription) => void;
}
interface LibraryHierarchyPath {
  components: any[];
  stateGroups: any[];
  styles: any[];
  pageName?: string;
  containingFrameName?: string;
  nameHierarchyPath?: string[];
}
interface LibraryStyle {
  style_type?: string;
  [key: string]: any;
}

// --- Context ---

const LibraryDataContext = createContext<LibraryDataContextValue | null>(null);

// --- Hooks ---

/**
 * useLibraryData: Provides subscription for a given fileKey.
 */
export function useLibraryData(props?: {
  fileKey?: string;
}) {
  const context = assertNotNullish(useContext(LibraryDataContext), "Must call `useLibraryData` from within <LibraryDataProvider>");
  const fileKey = props?.fileKey;
  useEffect(() => {
    if (fileKey) {
      context.requestLibraryItems(fileKey);
      return () => context.releaseLibraryItems(fileKey);
    }
  }, [context.requestLibraryItems, context.releaseLibraryItems, fileKey]);
  return fileKey && context.subscriptions[fileKey] || createLoadingState();
}

/**
 * useLibraryDataSubscriptions: Returns all subscriptions.
 */
export function useLibraryDataSubscriptions() {
  const context = assertNotNullish(useContext(LibraryDataContext), "Must call `useLibraryDataSubscriptions` from within <LibraryDataProvider>");
  return context.subscriptions;
}

/**
 * useLibraryDataSubscriptionsByLibraryKey: Returns subscriptions by library key.
 */
export function useLibraryDataSubscriptionsByLibraryKey() {
  const context = assertNotNullish(useContext(LibraryDataContext), "Must call `useLibraryDataSubscriptionsByLibraryKey` from within <LibraryDataProvider>");
  return context.subscriptionsByLibraryKey;
}

/**
 * LibrarySubscriptionRequest: Requests subscription for a fileKey/libraryKey pair.
 */
export function LibrarySubscriptionRequest({
  fileKey,
  libraryKey
}: {
  fileKey: string;
  libraryKey: string;
}) {
  useLibraryData(createFileLibraryKeys(fileKey, libraryKey));
  return null;
}

/**
 * LibraryDataProvider: Provides library data context and manages subscriptions.
 */
export function LibraryDataProvider({
  children,
  maxSubscriptionsBeforeCleanup = 20
}: LibraryProviderProps) {
  const currentFileKey = useCurrentFileKey();
  useAtomValueAndSetter(libraryDataCompositionAtom);

  // Subscriptions state: fileKey -> LibrarySubscription
  const [subscriptions, setSubscriptions] = useState<Record<string, LibrarySubscription>>({});

  // Callback to update subscription for a fileKey
  const handleSubscriptionChange = useCallback((fileKey: string, subscription: LibrarySubscription) => {
    setSubscriptions(prev => ({
      ...prev,
      [fileKey]: subscription
    }));
  }, []);

  // Memoized subscriptions with normalized data
  const normalizedSubscriptions = useMemo(() => {
    const result: Record<string, LibrarySubscription> = {};
    for (const key of Object.keys(subscriptions)) {
      const sub = subscriptions[key];
      if (sub != null) result[key] = normalizeSubscription(sub);
    }
    return result;
  }, [subscriptions]);

  // Memoized subscriptions by library key
  const subscriptionsByLibraryKey = useMemo(() => {
    const result: Record<string, LibrarySubscription> = {};
    Object.values(subscriptions).forEach(sub => {
      if (sub == null) return;
      const normalized = normalizeSubscription(sub);
      if (normalized.data) result[normalized.data.libraryKey] = normalized;
    });
    return result;
  }, [subscriptions]);

  // Track subscription counts per fileKey
  const [subscriptionCounts, setSubscriptionCounts] = useState<Record<string, number>>({});
  useEffect(() => {
    if (currentFileKey) {
      setSubscriptionCounts(prev => ({
        ...prev,
        [currentFileKey]: (prev[currentFileKey] || 0) + 1
      }));
    }
  }, [currentFileKey]);

  // Track last access time per fileKey
  const [lastAccessTimes, setLastAccessTimes] = useState<Record<string, number>>({});

  // Subscription management logic for analytics and livegraph updates
  useLibraryLivegraphSync(currentFileKey ? normalizedSubscriptions[currentFileKey] : null);

  // Request subscription for a fileKey
  const requestLibraryItems = useCallback((fileKey: string) => {
    setSubscriptionCounts(prev => ({
      ...prev,
      [fileKey]: (prev[fileKey] ?? 0) + 1
    }));
    setLastAccessTimes(prev => ({
      ...prev,
      [fileKey]: Date.now()
    }));
  }, []);

  // Release subscription for a fileKey
  const releaseLibraryItems = useCallback((fileKey: string) => {
    setSubscriptionCounts(prev => {
      const count = (prev[fileKey] ?? 0) - 1;
      if (count > 0) {
        return {
          ...prev,
          [fileKey]: count
        };
      }
      if (count < 0) {
        console.error("Tried to release subscription for library items that doesn't exist");
      }
      const updated = {
        ...prev
      };
      delete updated[fileKey];
      return updated;
    });
  }, []);

  // Cleanup subscriptions if exceeding maxSubscriptionsBeforeCleanup
  const currentFileKeys = Object.keys(subscriptionCounts);
  const subscriptionFileKeys = Object.keys(subscriptions);
  const allFileKeys = uniq([...currentFileKeys, ...subscriptionFileKeys]);
  const extraFileKeys = difference(allFileKeys, currentFileKeys);
  useEffect(() => {
    const total = allFileKeys.length;
    const extra = extraFileKeys.length;
    if (total > maxSubscriptionsBeforeCleanup && extra > 0) {
      setSubscriptions(prev => {
        // Sort extra keys by last access time (oldest first)
        const sorted = [...extraFileKeys].sort((a, b) => {
          const timeA = lastAccessTimes[a];
          const timeB = lastAccessTimes[b];
          if (timeA == null) return -1;
          if (timeB == null) return 1;
          return timeA - timeB;
        }).slice(0, total - maxSubscriptionsBeforeCleanup);

        // Remove oldest subscriptions
        const updated = {
          ...prev
        };
        for (const key of sorted) {
          delete updated[key];
        }
        return updated;
      });
    }
  });

  // Context value
  const contextValue: LibraryDataContextValue = useMemo(() => ({
    requestLibraryItems,
    releaseLibraryItems,
    fetchedFileKeys: allFileKeys,
    subscriptions: normalizedSubscriptions,
    subscriptionsByLibraryKey
  }), [requestLibraryItems, releaseLibraryItems, allFileKeys, normalizedSubscriptions, subscriptionsByLibraryKey]);
  return jsxs(Fragment, {
    children: [jsx(LibraryDataContext.Provider, {
      value: contextValue,
      children
    }), allFileKeys.map(fileKey => jsx(LibrarySubscriptionMemo, {
      fileKey,
      onChange: handleSubscriptionChange
    }, fileKey)), Object.entries(normalizedSubscriptions).map(([fileKey, subscription]) => subscription && jsx(LibrarySubscriptionComponent, {
      subscription,
      fileKey
    }, fileKey))]
  });
}

/**
 * LibrarySubscriptionComponent: Tracks analytics for a subscription.
 */
function LibrarySubscriptionComponent({
  subscription,
  fileKey
}: LibrarySubscriptionComponentProps) {
  useSubscriptionAnalytics(subscription, "Library Data Subscription Load Time", {
    fileKey,
    numStyles: subscription.status === "loaded" ? subscription.data.numStyles : 0
  });
  return null;
}

/**
 * LibrarySubscriptionMemo: Memoized subscription fetcher for a fileKey.
 */
const LibrarySubscriptionMemo = memo(({
  fileKey,
  onChange
}: LibrarySubscriptionMemoProps) => {
  const isNotCurrentFile = fileKey !== useCurrentFileKey();
  const isCommunityLibrary = isValidLibraryKey(fileKey);
  const librariesEnabled = useFigmaLibrariesEnabled();

  // Determine which view/component to use for subscription
  const {
    view,
    args,
    options
  } = isCommunityLibrary ? {
    view: CommunityLibraryStyleData,
    args: {
      hubFileId: fileKey
    },
    options: {
      enabled: librariesEnabled
    }
  } : {
    view: isNotCurrentFile ? LibraryStyleData : LibraryData,
    args: {
      fileKey
    },
    options: undefined
  };
  const subscription = useSubscription(view, args, options) as any;
  useEffect(() => {
    onChange(fileKey, subscription);
  }, [onChange, fileKey, subscription]);
  return null;
});

/**
 * normalizeSubscription: Memoized normalization of subscription data.
 */
const normalizeSubscription = memoizeWeak((subscription: LibrarySubscription): LibrarySubscription => {
  if (subscription.status !== "loaded") return subscription;
  const data = subscription.data;

  // Community library normalization
  if ("communityLibraryByHubFileId" in data) {
    const communityLib = data.communityLibraryByHubFileId;
    if (!communityLib) return createErrorState([]);
    const hierarchyPaths: LibraryHierarchyPath[] = communityLib.libraryHierarchyPaths.map(path => ({
      pageName: path.pageName ?? undefined,
      containingFrameName: path.containingFrameName ?? undefined,
      nameHierarchyPath: path.nameHierarchyPath ?? undefined,
      components: [],
      stateGroups: [],
      styles: path.styles.map(style => mapStyleProperties(style, {
        type: "hubFile",
        file: {
          id: communityLib.hubFileId,
          libraryKey: communityLib.libraryKey
        }
      }))
    }));
    return createLoadedState({
      fileKey: communityLib.hubFileId,
      libraryKey: communityLib.libraryKey,
      name: communityLib.name,
      numComponents: 0,
      numStateGroups: 0,
      numStyles: communityLib.numStyles ?? 0,
      libraryHierarchyPaths: hierarchyPaths
    });
  }

  // Team library normalization
  const file = "libraryKeyToFile" in data ? data.libraryKeyToFile?.file : data.file;
  if (!file) return createErrorState([]);
  const hierarchyPaths: LibraryHierarchyPath[] = file.libraryHierarchyPaths.map(path => ({
    components: "components" in path ? path.components.map(component => mapComponentProperties(component, {
      type: "team",
      file
    })) : [],
    stateGroups: "stateGroups" in path ? path.stateGroups.map(stateGroup => mapStateGroupProperties(stateGroup, {
      type: "team",
      file
    })) : [],
    styles: path.styles.map(style => mapStyleProperties(style, {
      type: "team",
      file
    }))
  }));
  return createLoadedState({
    fileKey: file.key,
    libraryKey: file.libraryKey,
    name: file.name,
    numComponents: file.library && "numComponents" in file.library && file.library.numComponents || 0,
    numStateGroups: file.library && "numStateGroups" in file.library && file.library.numStateGroups || 0,
    numStyles: file.library?.numStyles ?? 0,
    libraryHierarchyPaths: hierarchyPaths
  });
});

/**
 * useLibraryLivegraphSync: Syncs livegraph and analytics for the current file's subscription.
 * Note: This is a refactored version of the IIFE in the original code.
 */
function useLibraryLivegraphSync(subscription: LibrarySubscription | null) {
  const dispatch = useDispatch<AppDispatch>();
  useLayoutEffect(() => {
    if (!subscription) return;
    // Extract components, styles, stateGroups, variableSets, variables, modules
    const components = useMemo(() => keyBy(extractComponents(subscription), "node_id"), [subscription]);
    const styles = useMemo(() => keyBy(extractStyles(subscription), (s: any) => s.node_id), [subscription]);
    const stateGroups = useMemo(() => keyBy(extractStateGroups(subscription), (sg: any) => sg.node_id), [subscription]);
    const variableSets = useMemo(() => keyBy(getCurrentFileLibraryVariableSets(), (vs: any) => vs.node_id), []);
    const variables = useMemo(() => keyBy(getCurrentFileLibraryVariables(), (v: any) => v.node_id), []);
    const modules = useCurrentFileModules();
    const modulesById = useMemo(() => getFeatureFlags().dse_module_publish ? keyBy(modules, (m: any) => m.node_id) : {}, [modules]);
    dispatch(componentReplaceOpenFilePublishedLivegraph({
      components,
      styles,
      stateGroups,
      variableSets,
      variables,
      modules: modulesById
    }));
    dispatch(updateLocalLibraryItemsThunk());
  }, [dispatch, subscription]);
  useEffect(() => {
    if (subscription?.status === "loaded" || subscription?.status === "errors") {
      resolveUsedLibrariesAsync();
    }
  }, [subscription]);
}

// --- Utility Functions ---

function extractComponents(subscription: LibrarySubscription): any[] {
  if (subscription.status !== "loaded") return [];
  return subscription.data.libraryHierarchyPaths.flatMap((path: any) => path.components || []);
}
function extractStyles(subscription: LibrarySubscription): any[] {
  if (subscription.status !== "loaded") return [];
  return subscription.data.libraryHierarchyPaths.flatMap((path: any) => path.styles || []);
}
function extractStateGroups(subscription: LibrarySubscription): any[] {
  if (subscription.status !== "loaded") return [];
  return subscription.data.libraryHierarchyPaths.flatMap((path: any) => path.stateGroups || []);
}

// --- Style Extraction Functions ---

/**
 * getStylesFromLibraryHierarchy: Extracts styles from library hierarchy paths, optionally filtering by style_type.
 */
export function getStylesFromLibraryHierarchy(data: {
  libraryHierarchyPaths: LibraryHierarchyPath[];
}, styleType?: string): LibraryStyle[] {
  const result: LibraryStyle[] = [];
  for (const path of data.libraryHierarchyPaths) {
    for (const style of path.styles) {
      if (styleType ? style.style_type === styleType : true) {
        result.push(style);
      }
    }
  }
  return result;
}

/**
 * getStylesFromLoadedLibrary: Extracts styles from loaded library subscription.
 */
export function getStylesFromLoadedLibrary(subscription: LibrarySubscription, styleType?: string): LibraryStyle[] {
  return getStylesFromLibraryHierarchy(subscription.data, styleType);
}

// --- Exported Aliases (keep original export names) ---

export const Bh = useLibraryData;
export const SS = LibrarySubscriptionRequest;
export const _Y = useLibraryDataSubscriptionsByLibraryKey;
export const bO = useLibraryDataSubscriptions;
export const fN = LibraryDataProvider;
export const oz = getStylesFromLibraryHierarchy;
export const z5 = getStylesFromLoadedLibrary;