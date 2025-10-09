import { flatten, isUndefined } from "lodash-es"
import { useEffect, useMemo } from "react"
import { useMemoShallow, useMemoStable } from "../905/19536"
import { permissionScopeHandler } from "../905/189185"
import { mapAndSortVariableSets, mapVariablePropertiesFromResource, mapVariableSetsFromLibrary, mapVariablesFromLibraryCollections, sortVariableCollections } from "../905/261982"
import { getLibraryNames } from "../905/506188"
import { getFeatureFlags } from "../905/601108"
import { getSingletonSceneGraph } from "../905/700578"
import { logError } from "../905/714362"
import { convertToModeValue } from "../905/782020"
import { hasExtendedCollections } from "../905/850476"
import { resourceUtils } from "../905/989992"
import { atom, useAtomValueAndSetter, useAtomWithSubscription } from "../figma_app/27355"
import { isNotNullish } from "../figma_app/95419"
import { useSubscribedLibraries } from "../figma_app/155728"
import { yesNoTrackingEnum } from "../figma_app/198712"
import { allLocalVariableSetsAtom, combinedVariableSetByIdAtomFamily, combinedVariableSetsAtom, communityLibraryVariableCollectionsWithVarsByHubFileIdsAtomFamily, createDisabledResourceAtom, createExplicitModeNamesAtom, createPageLevelModesAtom, createVariableResolvedValueAtom, libraryVariableCollectionsByFileKeysAtomFamily, libraryVariableCollectionsByLibraryKeysAtomFamily, libraryVariableCollectionsWithVarsByFileKeysAtomFamily, libraryVariableCollectionsWithVarsByLibraryKeysAtomFamily, libraryVariableCollectionWithVarsByFileKeyAtomFamily, localOverridesByVariableSetIdAtomFamily, localVariableByIdAtomFamily, localVariablesAtom, localVariableSetByIdAtomFamily, localVariableSetsAtom, localVariablesGroupedBySetIdAtom, overridesByVariableSetIdAtomFamily, queryCommunityLibraryVariableCollectionWithVariables, sortedLocalVariablesAtom, subscribedVariablesAtom, subscribedVariableSetsAtom, subscribedVariablesGroupedBySetIdAtom, usedLibraryVariablesByKeyReduxAtom, usedLibraryVariableSetsByKeyReduxAtom, variableByIdAtomFamily, variablesByVariableCollectionKeysAtomFamily, variableTableDataForVariableSetAtomFamily } from "../figma_app/216057"
import { VariableSetIdCompatHandler } from "../figma_app/243058"
import { getVariablePublishKey, isLocallySoftDeleted, isVariableInSet, variablePropertyTypeMap } from "../figma_app/394327"
import { fullscreenValue } from "../figma_app/455680"
import { AQ, iG } from "../figma_app/481279"
import { useCurrentFileKey } from "../figma_app/516028"
import { isValidLibraryKey, useValidLibraryKey } from "../figma_app/630951"
import { getPublishKey, getSubscribedVariableInfo, getSubscribedVariableSetInfo, isExtension } from "../figma_app/633080"
import { HandoffBindingsCpp, VariablesBindings } from "../figma_app/763686"
import { useStore } from "jotai"
// Refactored from minified JavaScript in /Users/allen/sigma-main/src/figma_app/852050.ts
// Changes: Renamed functions to descriptive names (e.g., $$P32 to getLocalVariablesForSet), added TypeScript types and interfaces for variables and sets, simplified logic where possible (e.g., inline filters), added comments for complex parts, inferred types from usage, preserved functionality. Assumed types for Variable, VariableSet, etc., from imported modules. No bugs or performance issues identified beyond minification.


// Assumed types (inferred from usage; define properly in full codebase)
interface Variable {
  key: string;
  variableSetId?: string;
  resolvedType?: string;
  // Add other properties as needed
}

interface VariableSet {
  key: string;
  keyForPublish?: string;
  subscriptionStatus?: string;
  isExtension?: boolean;
  backingVariableSetId?: string;
  rootVariableSetId?: string;
  // Add other properties as needed
}



interface Resource<T> {
  status: 'loaded' | 'loading' | 'disabled';
  data?: T;
  // Add other properties as needed
}

// Helper function to filter out locally soft-deleted items
function filterOutSoftDeleted(items: any[]): any[] {
  return useMemo(() => items.filter(item => !isLocallySoftDeleted(item)), [items]);
}

export function getLocalVariablesForSet(setId: string | undefined) {
  const groupedVariables = useAtomWithSubscription(localVariablesGroupedBySetIdAtom);
  return filterOutSoftDeleted(setId ? groupedVariables[setId] ?? [] : []);
}

export function getVariablesForSet(setId: string | undefined) {
  const localVars = getLocalVariablesForSet(setId);
  const subscribedVars = (() => {
    const groupedSubscribed = useAtomWithSubscription(subscribedVariablesGroupedBySetIdAtom);
    return filterOutSoftDeleted(setId ? groupedSubscribed[setId] ?? [] : []);
  })();
  return localVars.length > 0 ? localVars : subscribedVars;
}

export function getOverridesForSet(setId: string): any {
  return useAtomWithSubscription(overridesByVariableSetIdAtomFamily(setId));
}

export function getVariableTableDataForSet(setId: string): any {
  return useAtomWithSubscription(variableTableDataForVariableSetAtomFamily(setId));
}

export function getLocalVariableSets() {
  return useAtomWithSubscription(localVariableSetsAtom);
}

export function initializeVariableHooks(): void {
  getSortedLocalVariables();
  getSortedLocalVariableSets();
  getSubscribedVariableSets();
  getSubscribedVariables();
  getUsedLibraryVariables();
  useAtomWithSubscription(usedLibraryVariableSetsByKeyReduxAtom);
}

export function getSortedLocalVariableSets() {
  const allSets = filterOutSoftDeleted(useAtomWithSubscription(allLocalVariableSetsAtom));
  const filteredSets = useMemo(() => hasExtendedCollections() ? allSets : allSets.filter(set => !isExtension(set)), [allSets]);
  return sortVariableCollections(filteredSets);
}

export function getSortedLocalVariables() {
  return filterOutSoftDeleted(useAtomWithSubscription(sortedLocalVariablesAtom));
}

export function getSubscribedVariableSets() {
  return useAtomWithSubscription(subscribedVariableSetsAtom);
}

export function getSubscribedVariables() {
  return useAtomWithSubscription(subscribedVariablesAtom);
}

export function getUsedLibraryVariables(): any {
  return useAtomWithSubscription(usedLibraryVariablesByKeyReduxAtom);
}

export function getLocalVariableSetById(setId: string) {
  return useAtomWithSubscription(localVariableSetByIdAtomFamily(setId));
}

export function getCombinedVariableSetById(setId: string | undefined) {
  const atomInstance = useMemo(() => setId ? combinedVariableSetByIdAtomFamily(setId) : atom(null), [setId]);
  const result = useAtomWithSubscription(atomInstance);
  if (result) return result;
  if (!setId) return undefined;
  const subscribedInfo = VariablesBindings.getSubscribedVariableSetInfo(setId);
  return subscribedInfo ? getSubscribedVariableSetInfo(subscribedInfo) : undefined;
}

export function getExplicitModeNames(setId: string): string[] | null {
  const atomInstance = useMemo(() => createExplicitModeNamesAtom(setId), [setId]);
  return useAtomWithSubscription(atomInstance) ?? null;
}

export function getPageLevelModes() {
  const atomInstance = useMemo(() => createPageLevelModesAtom(), []);
  return useAtomWithSubscription(atomInstance);
}

export function getModeValue(variableId: string, modeId: string) {
  const variable = getVariableById(variableId);
  return variable?.modeValues?.[modeId] ?? undefined;
}

export function getLocalVariablesByIds(ids: (string | null)[]) {
  const memoizedIds = useMemoShallow(() => ids, [ids]);
  const atomInstance = useMemo(() => atom(store => memoizedIds.map(id => id ? store(localVariablesAtom)[id] ?? null : null)), [memoizedIds]);
  return useAtomWithSubscription(atomInstance);
}

export function getVariableName(variableId: string | undefined) {
  const variable = getVariableById(variableId);
  return variable?.name || (variableId ? VariablesBindings.getVariableNameInStyleSelection(variableId) ?? undefined : undefined);
}

export function getVariableById(variableId: string | undefined) {
  const atomInstance = useMemo(() => variableId ? variableByIdAtomFamily(variableId) : atom(null), [variableId]);
  const result = useAtomWithSubscription(atomInstance);
  if (result) return result;
  if (!variableId) return null;
  const subscribedInfo = VariablesBindings.getSubscribedVariableInfo(variableId);
  return subscribedInfo ? getSubscribedVariableInfo(subscribedInfo) : null;
}

export function getVariablesByIds(ids: (string | null)[], includeSubscribed: boolean): (Variable | null)[] {
  const memoizedIds = useMemoShallow(() => ids, [ids]);
  const atomInstance = useMemo(() => atom(store => memoizedIds.map(id => {
    if (!id) return null;
    const localVar = store(variableByIdAtomFamily(id));
    if (localVar) return localVar;
    if (includeSubscribed) {
      const subscribedInfo = VariablesBindings.getSubscribedVariableInfo(id);
      return subscribedInfo ? getSubscribedVariableInfo(subscribedInfo) : null;
    }
    return null;
  })), [includeSubscribed, memoizedIds]);
  return useAtomWithSubscription(atomInstance);
}

export function getResolvedValuesForVariables(variableIds: (string | null)[], modeOverrides?: Record<string, any>): Record<string, any> {
  const memoizedIds = useMemoShallow(() => variableIds, [variableIds]);
  const atomInstance = useMemo(() => atom(store => {
    const resolved: Record<string, any> = {};
    memoizedIds.forEach(id => {
      if (!id) return;
      const resolvedAtom = createVariableResolvedValueAtom(id, modeOverrides ?? {});
      resolved[id] = resolvedAtom ? store(resolvedAtom) : null;
    });
    return resolved;
  }), [memoizedIds, modeOverrides]);
  return useAtomWithSubscription(atomInstance);
}

export function getResolvedVariableValue(variableId: string | undefined, modeOverrides?: Record<string, any>): any {
  const atomInstance = useMemo(() => variableId ? createVariableResolvedValueAtom(variableId, modeOverrides ?? {}) : atom(null), [variableId, modeOverrides]);
  return useAtomWithSubscription(atomInstance);
}

export function getResolvedVariableValueIfNotMixed(variableId: string | undefined, modeOverrides?: Record<string, any>): any {
  const resolved = getResolvedVariableValue(variableId, modeOverrides);
  return isNotNullish(resolved) && resolved !== "MIXED" ? resolved : undefined;
}

export function getVariableChainForModes(variableId: string | undefined, modeMap?: Record<string, any>): any {
  return useMemo(() => {
    if (!variableId || !modeMap) return null;
    const map = new Map(Object.entries(modeMap));
    return VariablesBindings.getVariableChainForModes(variableId, map);
  }, [variableId, modeMap]);
}

export function getPublishKeyForVariableSet(variableId: string | undefined) {
  const variable = getVariableById(variableId);
  const set = getCombinedVariableSetById(variable?.variableSetId);
  return set ? (set.subscriptionStatus === "LOCAL" ? set.keyForPublish : set.key) : null;
}

export function getCurrentFileLibraryVariables() {
  const fileKey = useCurrentFileKey();
  const atomInstance = useMemo(() => fileKey ? libraryVariableCollectionWithVarsByFileKeyAtomFamily(fileKey) : atom(null), [fileKey]);
  const resource = useAtomWithSubscription(atomInstance);
  return useMemo(() => {
    const data = resource && resourceUtils.from(resource);
    return mapVariablePropertiesFromResource({ type: "team", value: data }, true);
  }, [resource]);
}

export function getVariablesByCollectionKeys(collectionKeys: string[]): Record<string, Variable> {
  const atomInstance = useMemo(() => variablesByVariableCollectionKeysAtomFamily(collectionKeys), [collectionKeys]);
  const resources = useAtomWithSubscription(atomInstance);
  return useMemoStable(() => {
    const variables: Record<string, Variable> = {};
    for (const resource of Object.values(resources)) {
      if (resource.status === "loaded") {
        for (const variable of resource.data?.variableCollection?.variables ?? []) {
          variables[variable.key] = variable;
        }
      }
    }
    return variables;
  }, [resources]);
}

export function getLibraryVariableProperties(fileKey: string | undefined): Resource<Variable[]> {
  const atomInstance = useMemo(() => !fileKey || isValidLibraryKey(fileKey) ? atom(null) : libraryVariableCollectionWithVarsByFileKeyAtomFamily(fileKey), [fileKey]);
  const validKey = useValidLibraryKey(fileKey);
  const communityQuery = queryCommunityLibraryVariableCollectionWithVariables(validKey);
  const teamResource = useAtomWithSubscription(atomInstance);
  const communityResource = useAtomWithSubscription(communityQuery);
  const subscribedLibs = useSubscribedLibraries();
  const isSubscribed = !!subscribedLibs.data?.find(lib => lib.fileKey === fileKey);
  return useMemoShallow(() => {
    if (!isSubscribed || (!teamResource && !communityResource)) return resourceUtils.loaded([]);
    if (teamResource?.status === "loading" || teamResource?.status === "disabled" || communityResource?.status === "loading") return resourceUtils.loading();
    const teamData = teamResource && resourceUtils.from(teamResource);
    const source = teamData ? { type: "team" as const, value: teamData } : { type: "community" as const, value: communityResource };
    return resourceUtils.loaded(mapVariablePropertiesFromResource(source, false));
  }, [isSubscribed, teamResource, communityResource]);
}

export function getCurrentFileLibraryVariableSets(): VariableSet[] {
  const fileKey = useCurrentFileKey();
  const atomInstance = useMemo(() => fileKey ? libraryVariableCollectionWithVarsByFileKeyAtomFamily(fileKey) : atom(null), [fileKey]);
  const resource = useAtomWithSubscription(atomInstance);
  return useMemo(() => {
    const data = resource && resourceUtils.from(resource);
    return mapAndSortVariableSets({ type: "team", value: data }, true);
  }, [resource]);
}

export function getLibraryVariableSets(fileKey: string | undefined): Resource<VariableSet[]> {
  const atomInstance = useMemo(() => !fileKey || isValidLibraryKey(fileKey) ? atom(null) : libraryVariableCollectionWithVarsByFileKeyAtomFamily(fileKey), [fileKey]);
  const validKey = useValidLibraryKey(fileKey);
  const communityQuery = queryCommunityLibraryVariableCollectionWithVariables(validKey);
  const teamResource = useAtomWithSubscription(atomInstance);
  const communityResource = useAtomWithSubscription(communityQuery);
  const subscribedLibs = useSubscribedLibraries();
  const subscribedLib = subscribedLibs.data?.find(lib => lib.fileKey === fileKey);
  return useMemoShallow(() => {
    if (!subscribedLib || (!teamResource && !communityResource)) return resourceUtils.loaded([]);
    if (teamResource?.status === "loading" || communityResource?.status === "loading") return resourceUtils.loading();
    const teamData = teamResource && resourceUtils.from(teamResource);
    const source = teamData ? { type: "team" as const, value: teamData } : { type: "community" as const, value: communityResource };
    return resourceUtils.loaded(mapAndSortVariableSets(source, false));
  }, [subscribedLib, teamResource, communityResource]);
}

export function getSubscribedVariableSetsResource(options: { enabled?: boolean } = {}): Resource<{ items: VariableSet[] }> {
  const enabled = options.enabled ?? true;
  const useNewFeature = !!getFeatureFlags().dse_lk_asset_updates_vars;
  const oldResource = getSubscribedVariableSetsResourceOld({ enabled: enabled && !useNewFeature });
  const newResource = getSubscribedVariableSetsResourceNew({ enabled: enabled && useNewFeature });
  return useNewFeature ? newResource : oldResource;
}

function getSubscribedVariableSetsResourceOld(options: { enabled?: boolean } = {}): Resource<{ items: VariableSet[] }> {
  const disabled = options.enabled === false;
  const subscribedLibs = useSubscribedLibraries();
  const fileKeys = useMemoShallow(() => subscribedLibs.data?.map(lib => lib.fileKey) ?? [], [subscribedLibs.data]);
  const atomInstance = useMemo(() => disabled ? createDisabledResourceAtom(fileKeys) : libraryVariableCollectionsByFileKeysAtomFamily(fileKeys), [disabled, fileKeys]);
  const resources = useAtomWithSubscription(atomInstance);
  return useMemoShallow(() => {
    const combined = resourceUtils.all(Object.values(resources));
    return combined.status !== "loaded" ? combined : resourceUtils.loaded({
      items: flatten(Object.values(resources).map(res => mapAndSortVariableSets({ type: "team", value: res }, false))),
    });
  }, [resources]);
}

function getSubscribedVariableSetsResourceNew(options: { enabled?: boolean } = {}): Resource<{ items: VariableSet[] }> {
  const disabled = options.enabled === false;
  const subscribedLibs = useSubscribedLibraries();
  const libraryKeys = useMemoShallow(() => subscribedLibs.data?.map(lib => lib.libraryKey) ?? [], [subscribedLibs.data]);
  const atomInstance = useMemo(() => disabled ? createDisabledResourceAtom(libraryKeys) : libraryVariableCollectionsByLibraryKeysAtomFamily(libraryKeys), [disabled, libraryKeys]);
  const resources = useAtomWithSubscription(atomInstance);
  return useMemoShallow(() => {
    const combined = resourceUtils.all(Object.values(resources));
    return combined.status !== "loaded" ? combined : resourceUtils.loaded({
      items: Object.values(resources).flatMap(res => mapVariableSetsFromLibrary(res, false)),
    });
  }, [resources]);
}

const variableDataAtom = atom<Resource<{ libraryVariableSets: VariableSet[]; libraryVariables }> | null>(null);

export function useVariableDataLoaded(options: { enabled?: boolean } = {}): boolean {
  const enabled = options.enabled ?? true;
  const resource = getSubscribedVariablesResource({ enabled });
  const [current, setCurrent] = useAtomValueAndSetter(variableDataAtom);
  useEffect(() => {
    if (current === null || current.status !== resource.status) setCurrent(resource);
  }, [resource, setCurrent, current]);
  return resource.status === "loaded";
}

export function getSubscribedVariablesResource(options: { enabled?: boolean } = {}) {
  const enabled = options.enabled ?? true;
  const useNewFeature = !!getFeatureFlags().dse_lk_asset_updates_vars;
  const oldResource = getSubscribedVariablesResourceOld({ enabled: enabled && !useNewFeature });
  const newResource = getSubscribedVariablesResourceNew({ enabled: enabled && useNewFeature });
  return useNewFeature ? newResource : oldResource;
}

function getSubscribedVariablesResourceOld(options: { enabled?: boolean }) {
  const subscribedLibs = useSubscribedLibraries();
  const teamFileKeys = useMemoShallow(() => subscribedLibs.data?.filter(lib => !isValidLibraryKey(lib.fileKey)).map(lib => lib.fileKey) ?? [], [subscribedLibs.data]);
  const communityFileKeys = useMemoShallow(() => subscribedLibs.data?.filter(lib => isValidLibraryKey(lib.fileKey)).map(lib => lib.fileKey) ?? [], [subscribedLibs.data]);
  const disabled = options.enabled === false;
  const teamAtom = useMemo(() => {
    if (disabled) {
      const disabledResources: Record<string, Resource<any>> = {};
      teamFileKeys.forEach(key => { disabledResources[key] = resourceUtils.disabled(); });
      return atom(disabledResources);
    }
    return libraryVariableCollectionsWithVarsByFileKeysAtomFamily(teamFileKeys);
  }, [disabled, teamFileKeys]);
  const teamResources = useAtomWithSubscription(teamAtom);
  const communityAtom = useMemo(() => {
    if (disabled) {
      const disabledResources: Record<string, Resource<any>> = {};
      communityFileKeys.forEach(key => { disabledResources[key] = resourceUtils.disabled(); });
      return atom(disabledResources);
    }
    return communityLibraryVariableCollectionsWithVarsByHubFileIdsAtomFamily(communityFileKeys);
  }, [disabled, communityFileKeys]);
  const communityResources = useAtomWithSubscription(communityAtom);
  return useMemoShallow(() => {
    const allResources = { ...teamResources, ...communityResources };
    const combined = resourceUtils.all(Object.values(allResources));
    return combined.status !== "loaded" ? combined.transform(() => ({ libraryVariableSets: [], libraryVariables: [] })) : resourceUtils.loaded({
      libraryVariableSets: [
        ...flatten(Object.values(teamResources).map(res => mapAndSortVariableSets({ type: "team", value: res }, false))),
        ...flatten(Object.values(communityResources).map(res => mapAndSortVariableSets({ type: "community", value: res }, false))),
      ],
      libraryVariables: [
        ...flatten(Object.values(teamResources).map(res => mapVariablePropertiesFromResource({ type: "team", value: res }, false))),
        ...flatten(Object.values(communityResources).map(res => mapVariablePropertiesFromResource({ type: "community", value: res }, false))),
      ],
    });
  }, [teamResources, communityResources]);
}

function getSubscribedVariablesResourceNew(options: { enabled?: boolean }) {
  const disabled = options.enabled === false;
  const subscribedLibs = useSubscribedLibraries();
  const libraryKeys = useMemoShallow(() => subscribedLibs.data?.map(lib => lib.libraryKey) ?? [], [subscribedLibs.data]);
  const atomInstance = useMemo(() => disabled ? createDisabledResourceAtom(libraryKeys) : libraryVariableCollectionsWithVarsByLibraryKeysAtomFamily(libraryKeys), [disabled, libraryKeys]);
  const resources = useAtomWithSubscription(atomInstance);
  return useMemoShallow(() => {
    const combined = resourceUtils.all(Object.values(resources));
    return combined.status !== "loaded" ? combined.transform(() => ({ libraryVariableSets: [], libraryVariables: [] })) : resourceUtils.loaded({
      libraryVariableSets: Object.values(resources).flatMap(res => mapVariableSetsFromLibrary(res, false)),
      libraryVariables: Object.values(resources).flatMap(res => mapVariablesFromLibraryCollections(res, false)),
    });
  }, [resources]);
}

export function getIdsOfVariablesWithValue(variableId: string | undefined, value: any, mode: { type: string; value: any }): any {
  if (variableId) {
    return HandoffBindingsCpp.getIdsOfVariablesWithValue(variableId, value, mode);
  }
}

function getAllVariables(options: { enabled?: boolean }): Resource<Variable[]> {
  const sortedLocals = getSortedLocalVariables();
  const subscribedResource = getSubscribedVariablesResource(options);
  return useMemo(() => subscribedResource.status !== "loaded" ? subscribedResource.transform(() => []) : resourceUtils.loaded([...(subscribedResource.data?.libraryVariables ?? []), ...(sortedLocals ?? [])]), [sortedLocals, subscribedResource]);
}

export function getFilteredVariables(propertyTypes: string[], options: { enabled?: boolean }): Resource<Variable[]> {
  const searchQuery = iG(propertyTypes); // Assumed to be a search/filter function
  const allVarsResource = getAllVariables(options);
  return useMemo(() => {
    if (allVarsResource.status !== "loaded") return allVarsResource.transform(() => []);
    const filtered = allVarsResource.data?.filter(variable => AQ(variable, searchQuery)) ?? [];
    const result = [];
    for (const type of propertyTypes) {
      const typeMap = variablePropertyTypeMap[type];
      if (typeMap) {
        result.push(...filtered.filter(variable => typeMap.includes(variable.resolvedType)));
      }
    }
    return resourceUtils.loaded(result);
  }, [propertyTypes, allVarsResource, searchQuery]);
}

export function getLibraryNameForVariableSet(variableSet: VariableSet | undefined): string | undefined {
  const libraryKey = variableSet?.subscriptionStatus === "SUBSCRIBED" ? variableSet.library_key : undefined;
  const names = getLibraryNames(libraryKey ? [libraryKey] : [], { enabled: true }).data;
  return libraryKey ? names?.[libraryKey] : undefined;
}

export function getEffectiveVariableSet(variableSet: VariableSet | undefined): VariableSet | null {
  const isExt = variableSet && isExtension(variableSet);
  const rootSet = getCombinedVariableSetById(isExt ? variableSet.rootVariableSetId : undefined);
  return (isExt ? rootSet : variableSet) ?? null;
}

export function hasFontStyleVariables(): boolean {
  return (getFilteredVariables(["FONT_STYLE"]).data ?? []).length > 0;
}

export function useVariableActions(): {
  setVariableValueForMode: (variableId: string, modeId: string, value: any, track?: boolean, action?: string) => boolean;
  setVariableOverrideForMode: (setId: string, variableId: string, modeId: string, value: any, track?: boolean, action?: string) => void;
  setVariableValueOrOverrideForMode: (setId: string, variableId: string, modeId: string, value: any, track?: boolean, action?: string) => void;
  detachVariableAlias: (variableId: string, modeId: string) => void;
  detachVariableOverrideAlias: (variableId: string, modeId: string, setId: string) => void;
  detachAlias: (variableId: string, modeId: string, setId: string) => void;
} {
  // Note: Assumes useStore is imported; added for completeness
  const store = useStore(); // Assuming this is available

  function setVariableValueForMode(variableId: string, modeId: string, value: any, track = yesNoTrackingEnum.YES, action = "set-variable-value-for-mode"): boolean {
    const success = permissionScopeHandler.user(action, () => VariablesBindings?.setVariableValueForMode(variableId, modeId, value) ?? false);
    if (success && track === yesNoTrackingEnum.YES) fullscreenValue.triggerAction("commit");
    return success;
  }

  function setVariableOverrideForMode(setId: string, variableId: string, modeId: string, value: any, track = yesNoTrackingEnum.YES, action = "set-variable-override-for-mode"): void {
    const compatId = VariableSetIdCompatHandler.fromString(setId);
    if (!compatId) {
      logError("variables", "Failed to set variable override. Invalid variable set id.", { variableSetId: setId });
      return;
    }
    const node = getSingletonSceneGraph().getVariableCollectionNode(compatId);
    if (!node) {
      logError("variables", "Failed to set variable override. Variable collection node not found.", { variableCollectionId: compatId });
      return;
    }
    const modeValue = value ? convertToModeValue(value) : null;
    if (isUndefined(modeValue)) {
      logError("variables", "Failed to set variable override. Invalid variable value.", { newValue: value });
      return;
    }
    permissionScopeHandler.user(action, () => node.setVariableOverrideForMode(variableId, modeId, modeValue));
    if (track === yesNoTrackingEnum.YES) fullscreenValue.triggerAction("commit");
  }

  function detachVariableAlias(variableId: string, modeId: string): void {
    permissionScopeHandler.user("clear-variable-alias", () => VariablesBindings?.detachVariableValueForMode(variableId, modeId, null)) && fullscreenValue.triggerAction("commit");
  }

  function detachVariableOverrideAlias(variableId: string, modeId: string, setId: string): void {
    permissionScopeHandler.user("clear-variable-override-alias", () => {
      const compatId = VariableSetIdCompatHandler.fromString(setId);
      return compatId ? VariablesBindings?.detachVariableValueForMode(variableId, modeId, compatId) : (logError("variables", "Failed to clear variable override alias. Invalid variable set id.", { variableSetId: setId }), false);
    }) && fullscreenValue.triggerAction("commit");
  }

  return {
    setVariableValueForMode,
    setVariableOverrideForMode,
    setVariableValueOrOverrideForMode(setId: string, variableId: string, modeId: string, value: any, track = yesNoTrackingEnum.YES, action?: string): void {
      const localSet = store.get(localVariableSetByIdAtomFamily(setId));
      const localVar = store.get(localVariableByIdAtomFamily(variableId));
      if (!localSet) {
        logError("variables", "Failed to set variable value or override for mode. Variable set not found.", { variableSetId: setId });
        return;
      }
      if (!localVar) {
        logError("variables", "Failed to set variable value or override for mode. Variable not found.", { variableId });
        return;
      }
      if (isExtension(localSet) && !isVariableInSet(localVar, setId)) {
        setVariableOverrideForMode(setId, variableId, modeId, value, track, action);
      } else {
        if (value === null) {
          logError("variables", "Failed to set variable value for mode. Variable value is null.", { variableId, modeId });
          return;
        }
        setVariableValueForMode(variableId, modeId, value, track, action);
      }
    },
    detachVariableAlias,
    detachVariableOverrideAlias,
    detachAlias(variableId: string, modeId: string, setId: string): void {
      const localSet = store.get(localVariableSetByIdAtomFamily(setId));
      const localVar = store.get(localVariableByIdAtomFamily(variableId));
      const overrides = store.get(localOverridesByVariableSetIdAtomFamily(setId))?.[variableId];
      if (!localSet) {
        logError("variables", "Failed to clear variable or variable override alias. Variable set not found.", { variableSetId: setId });
        return;
      }
      if (!localVar) {
        logError("variables", "Failed to clear variable or variable override alias. Variable not found.", { variableId });
        return;
      }
      if (!store.get(localVariableSetByIdAtomFamily(localVar.variableSetId))) {
        logError("variables", "Failed to clear variable or variable override alias. Owner variable set not found.", { variableId });
        return;
      }
      if (isVariableInSet(localVar, setId)) {
        detachVariableAlias(variableId, modeId);
      } else if (isExtension(localSet)) {
        if (overrides) {
          detachVariableOverrideAlias(variableId, modeId, setId);
          return;
        }
        const resolvedValue = VariablesBindings?.getVariableResolvedValue(variableId, new Map([[getVariablePublishKey(localSet), modeId]]));
        if (!resolvedValue) {
          logError("variables", "Failed to resolve alias value for variable in collection", { variableId, modeId, variableSetId: setId });
          return;
        }
        setVariableOverrideForMode(setId, variableId, modeId, resolvedValue);
      }
      logError("variables", "Failed to clear variable or variable override alias. Variable is not resident of set nor is the variable set an extension.", { variableId, variableSetId: setId });
    },
  };
}

export function getExtensionMappings(): Record<string, Set<string>> {
  const combinedSets = useAtomWithSubscription(combinedVariableSetsAtom);
  return useMemo(() => {
    const mappings: Record<string, Set<string>> = {};
    for (const set of Object.values(combinedSets)) {
      if (!set?.isExtension) continue;
      const backingKey = getPublishKey(set.backingVariableSetId!).toString();
      mappings[backingKey] ||= new Set();
      mappings[backingKey].add(getPublishKey(set).toString());
    }
    return mappings;
  }, [combinedSets]);
}

export const BQ = getResolvedVariableValue;
export const D1 = getCurrentFileLibraryVariables;
export const EP = getLibraryNameForVariableSet;
export const G6 = getCombinedVariableSetById;
export const JG = useVariableDataLoaded;
export const Kd = getPublishKeyForVariableSet;
export const L5 = getEffectiveVariableSet;
export const M6 = hasFontStyleVariables;
export const Pt = getSubscribedVariables;
export const Rb = getSortedLocalVariables;
export const SG = getFilteredVariables;
export const SR = initializeVariableHooks;
export const U6 = getVariablesForSet;
export const Xv = getVariableChainForModes;
export const bL = getModeValue;
export const e3 = variableDataAtom;
export const h6 = getPageLevelModes;
export const hE = getCurrentFileLibraryVariableSets;
export const hg = getVariablesByIds;
export const iC = getIdsOfVariablesWithValue;
export const jI = getSubscribedVariableSetsResource;
export const kf = getLibraryVariableProperties;
export const lC = getLocalVariableSetById;
export const lO = getSubscribedVariableSets;
export const mm = useVariableActions;
export const nN = getLocalVariableSets;
export const nR = getUsedLibraryVariables;
export const o3 = getExplicitModeNames;
export const ol = getExtensionMappings;
export const pN = getSubscribedVariablesResource;
export const qd = getResolvedValuesForVariables;
export const rN = getVariableTableDataForSet;
export const rW = getLocalVariablesForSet;
export const t8 = getResolvedVariableValueIfNotMixed;
export const tZ = getVariableName;
export const u = getVariableById;
export const u5 = getLibraryVariableSets;
export const wM = getVariablesByCollectionKeys;
export const wX = getLocalVariablesByIds;
export const x9 = getOverridesForSet;
export const yp = getSortedLocalVariableSets;
