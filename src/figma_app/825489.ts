import type { PrimitiveAtom } from 'jotai';
import { keyBy, noop } from 'lodash-es';
import { mapLoadedFileComponents } from "../905/9585";
import { mapAndSortVariableSets, mapVariablePropertiesFromResource } from "../905/261982";
import { attachReducerWrapper, createAtomWithReduxWithState, createReduxSubscriptionAtomWithState, setupReduxAtomWithState } from "../905/270322";
import { mapCommunityLibraryModules } from "../905/667910";
import { extractHubFileStyles } from "../905/686267";
import { createLoadingState } from "../905/723791";
import { mapFileStateGroups } from "../905/738144";
import { atom, createAtomWithEquality, createRemovableAtomFamily, selectAtom, setupCustomAtom } from "../figma_app/27355";
import { CommunityLibraryComponentsAndStateGroups, CommunityLibraryModules, CommunityLibraryStyleData, CommunityLibraryVariableCollectionDataWithVariables, SubscribedLibrariesForFile } from "../figma_app/43951";
import { getProviderConfigType } from "../figma_app/155411";
import { transformAndFilterSubscriptions } from "../figma_app/155728";
import { canAdminPublish } from "../figma_app/275462";
import { hasTeamPaidAccess } from "../figma_app/345997";
import { equals } from "../figma_app/476572";
import { openFileAtom } from "../figma_app/516028";
import { hasRootPath } from "../figma_app/528509";
import { currentTeamAtom } from "../figma_app/598018";
import { LibrarySourceEnum } from "../figma_app/633080";
import { figmaLibrariesEnabledAtom } from "../figma_app/657017";
// Refactored subscribed libraries atom with clear naming and structure
export const subscribedLibrariesAtom = atom(get => {
  const openFile = get(openFileAtom);
  if (!openFile) {
    return createLoadingState();
  }
  const orgId = openFile.parentOrgId;
  const hasTeam = !!openFile.teamId;
  const isInRootProject = hasRootPath(openFile?.project);
  const subscribedLibrariesQuery = get(SubscribedLibrariesForFile.Query({
    fileKey: openFile.key ?? "",
    teamId: openFile.teamId ?? "-1",
    workspaceId: openFile.team?.workspaceId ?? null,
    orgId,
    group: getProviderConfigType() ?? null
  }));
  const areFigmaLibrariesEnabled = get(figmaLibrariesEnabledAtom);
  const currentTeam = get(currentTeamAtom);
  const teamHasPaidAccess = hasTeamPaidAccess(currentTeam);
  return transformAndFilterSubscriptions(subscribedLibrariesQuery, hasTeam, isInRootProject, areFigmaLibrariesEnabled, orgId, teamHasPaidAccess);
});

// Refactored atom family for library subscriptions with improved readability
export const librarySubscriptionAtomFamily = createRemovableAtomFamily((propertyKey: string) => selectAtom(subscribedLibrariesAtom, data => new Set(data.data?.map(item => item[propertyKey])), equals));

/**
 * Get library subscription atom by property key
 * @param propertyKey - The property key to filter subscriptions
 * @returns Atom with filtered subscription data
 */
export function getLibrarySubscriptionAtom(propertyKey: string) {
  return librarySubscriptionAtomFamily(propertyKey);
}

// Redux atoms for library publishing state management
export const libraryPublishingModeAtom = createAtomWithReduxWithState(LibrarySourceEnum.LIBRARY as any, "SET_LIBRARY_PUBLISHING_MODE");
export const publishedHubFileIdAtom = createReduxSubscriptionAtomWithState(state => state.openFile?.publishedHubFile?.id);
export const publishedHubFileLibraryKeyAtom = createReduxSubscriptionAtomWithState(state => state.openFile?.publishedHubFile?.libraryKey ? state.openFile.publishedHubFile.libraryKey : null);
export const editorTypeAtom = createReduxSubscriptionAtomWithState(state => state.openFile?.editorType);

// Default atom for library state
export const defaultLibraryKeyAtom = atom(null) as PrimitiveAtom<any>;

// Identity reducer function
const identityReducer = (state: any, action: any) => action;

// Main library data composition atom with clear structure and type safety
export const libraryDataCompositionAtom = (() => {
  // Core atom for fetching and mapping library data
  const baseLibraryDataAtom = createAtomWithEquality(atom(get => {
    const hubFileId = get(publishedHubFileIdAtom);
    const editorType = get<any>(editorTypeAtom);

    // Initialize empty library data structure
    const libraryData = {
      variableSets: {},
      variables: {},
      styles: {},
      components: {},
      stateGroups: {},
      modules: {}
    };

    // Early return if no hub file or user cannot publish
    if (!hubFileId || !canAdminPublish(editorType)) {
      return libraryData;
    }

    // Fetch and map community library components and state groups
    const componentsAndStateGroups = get<any>(CommunityLibraryComponentsAndStateGroups.Query({
      hubFileId
    }));
    const mappedComponents = mapLoadedFileComponents(componentsAndStateGroups);
    const mappedStateGroups = mapFileStateGroups(componentsAndStateGroups);

    // Fetch and map community library styles
    const styleData = get<any>(CommunityLibraryStyleData.Query({
      hubFileId
    }));
    const mappedStyles = extractHubFileStyles(styleData);

    // Fetch and map community library variables
    const variableCollectionData = get<any>(CommunityLibraryVariableCollectionDataWithVariables.Query({
      hubFileId
    }));
    const mappedVariableSets = mapAndSortVariableSets({
      type: "community",
      value: variableCollectionData
    }, true);
    const mappedVariables = mapVariablePropertiesFromResource({
      type: "community",
      value: variableCollectionData
    }, true);

    // Fetch and map community library modules
    const moduleData = get<any>(CommunityLibraryModules.Query({
      hubFileId
    }));
    const mappedModules = mapCommunityLibraryModules(moduleData);

    // Populate library data with mapped values
    libraryData.variables = keyBy(mappedVariables, "node_id");
    libraryData.variableSets = keyBy(mappedVariableSets, "node_id");
    libraryData.styles = keyBy(mappedStyles, "node_id");
    libraryData.components = keyBy(mappedComponents, "node_id");
    libraryData.stateGroups = keyBy(mappedStateGroups, "node_id");
    libraryData.modules = keyBy(mappedModules, "node_id");
    return libraryData;
  }, noop));

  // Setup Redux integration for library data
  const reduxIntegratedAtom = setupReduxAtomWithState(baseLibraryDataAtom, "SET_OPEN_HUB_FILE_PUBLISHED_LIVEGRAPH", {
    variableSets: {},
    variables: {},
    styles: {},
    components: {},
    stateGroups: {},
    modules: {}
  });

  // Setup custom atom with identity reducer
  const customAtom = setupCustomAtom(reduxIntegratedAtom, identityReducer);

  // Attach reducer wrapper for proper state management
  return attachReducerWrapper(customAtom, reduxIntegratedAtom.reducer);
})();

// Export refactored atoms with descriptive names
export const I1 = subscribedLibrariesAtom;
export const RG = publishedHubFileLibraryKeyAtom;
export const cY = getLibrarySubscriptionAtom;
export const dL = defaultLibraryKeyAtom;
export const jz = libraryDataCompositionAtom;
export const pz = libraryPublishingModeAtom;
export const yP = publishedHubFileIdAtom;