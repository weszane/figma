import { groupBy, mapKeys, partition, pickBy } from 'lodash-es'
import { createSelector } from 'reselect'
import { partitionThumbnailsByModification, thumbnailStatusAtom } from '../905/210500'
import { createReduxSubscriptionAtomWithState } from '../905/270322'
import { createDeepEqualSelector } from '../905/270781'
import { selectTeams } from '../905/338617'
import { libraryAssetsAtom } from '../905/340158'
import { FileKeySourceEnum } from '../905/412913'
import { isShareableAssetType } from '../905/566074'
import { getFeatureFlags } from '../905/601108'
import { atom, createRemovableAtomFamily } from '../figma_app/27355'
import { AssetAtomMap } from '../figma_app/31188'
import { conditionalFeatureFlag } from '../figma_app/169182'
import { VariableSetIdCompatHandler } from '../figma_app/243058'
import { hasTeamPaidAccess } from '../figma_app/345997'
import { getCooperFrameGuids, getCooperFrames } from '../figma_app/396464'
import { isEmptyObject } from '../figma_app/493477'
import { openFileAtom, selectOpenFile, selectOpenFileKey, selectOpenFileLibraryKey } from '../figma_app/516028'
import { isTeamFolderV2 } from '../figma_app/528509'
import { LibrarySourceEnum, PrimaryWorkflowEnum, StagingStatusEnum } from '../figma_app/633080'
import { selectFlattenedComponents, selectFlattenedStateGroups, selectMergedAssets } from '../figma_app/645694'
import { areFramesEqual, areValuesEqual, compareAssetsByFrameAndName, compareAssetsByName, compareStyles, createLocalComponent, createLocalStateGroup, createLocalStyle, generateNewLocalLibraryItems, getAssetKeyForPublish, getContainingStateGroupNodeId, hasAssetError, hasContainingStateGroup, hasVariableSetError, isActiveStagingStatus, isNewOrChangedOrDeleted, isStagedStatus } from '../figma_app/646357'
import { sortByMultiple } from '../figma_app/656233'
import { VariableErrorType } from '../figma_app/763686'
import { isSelectedViewFullscreenCooper } from '../figma_app/828186'
import { selectSceneGraphSelection } from '../figma_app/889655'

// Type definitions for library items
interface BaseLibraryItem {
  node_id: string
  name: string
  type: PrimaryWorkflowEnum
  status?: StagingStatusEnum
  isSoftDeleted?: boolean
  isPublishable?: boolean
  old_key?: string
  [key: string]: any
}

interface StyleLibraryItem extends BaseLibraryItem {
  type: PrimaryWorkflowEnum.STYLE
  content_hash?: string
  userFacingVersion?: string
  description?: string
  sort_position?: string
}

interface ComponentLibraryItem extends BaseLibraryItem {
  type: PrimaryWorkflowEnum.COMPONENT
  content_hash?: string
  userFacingVersion?: string
  description?: string
  sort_position?: string
  containing_frame?: any
}

interface StateGroupLibraryItem extends BaseLibraryItem {
  type: PrimaryWorkflowEnum.STATE_GROUP
  version?: string
  userFacingVersion?: string
  description?: string
  containing_frame?: any
}

interface VariableLibraryItem extends BaseLibraryItem {
  type: PrimaryWorkflowEnum.VARIABLE
  version?: string
  userFacingVersion?: string
  sortPosition?: string
  variableSetId?: string
  resolvedType?: string
  modeValues?: Record<string, any>
}

interface VariableSetLibraryItem extends BaseLibraryItem {
  type: PrimaryWorkflowEnum.VARIABLE_SET
  version?: string
  userFacingVersion?: string
  sortPosition?: string
  modes?: any[]
  defaultModeID?: string
  isExtension?: boolean
  backingVariableSetId?: string
  rootVariableSetId?: string
}

interface ModuleLibraryItem extends BaseLibraryItem {
  type: PrimaryWorkflowEnum.MODULE
  version?: string
  userFacingVersion?: string
  description?: string
}

export let selectLibrary = state => state.library
export let selectLibraryPublishingMode = state => state.library.libraryPublishingMode
export let selectPublishedHubFile = state => state.openFile?.publishedHubFile
export let selectOpenHubFileComponents = state => state.library.openHubFilePublished__LIVEGRAPH.components
export let selectOpenHubFileStateGroups = state => state.library.openHubFilePublished__LIVEGRAPH.stateGroups
export let selectOpenHubFileStyles = state => state.library.openHubFilePublished__LIVEGRAPH.styles
export let selectOpenHubFileVariables = state => state.library.openHubFilePublished__LIVEGRAPH.variables
export let selectOpenHubFileVariableSets = state => state.library.openHubFilePublished__LIVEGRAPH.variableSets
export let selectOpenHubFileModules = state => state.library.openHubFilePublished__LIVEGRAPH.modules
export let hasOpenHubFileContent = createSelector([selectOpenHubFileComponents, selectOpenHubFileStyles, selectOpenHubFileVariables, selectOpenHubFileVariableSets, selectOpenHubFileStateGroups], (components, styles, variables, variableSets, stateGroups) => !isEmptyObject(components) || !isEmptyObject(styles) || !isEmptyObject(variables) || !isEmptyObject(variableSets) || !isEmptyObject(stateGroups))
export let selectCurrentLibraryComponents = createSelector([selectOpenFileLibraryKey, selectFlattenedComponents], (libraryKey, flattenedComponents) => libraryKey && flattenedComponents[libraryKey] || {})
export let selectCurrentLibraryStateGroups = createSelector([selectOpenFileLibraryKey, selectFlattenedStateGroups], (libraryKey, flattenedStateGroups) => libraryKey && flattenedStateGroups[libraryKey] || {})
export let selectLocalThumbnails = state => state.library.local.thumbnails
export let selectOpenFileStyles = state => state.library.openFilePublished__LIVEGRAPH.styles
export let selectOpenFileVariableSets = state => state.library.openFilePublished__LIVEGRAPH.variableSets
export let selectOpenFileModules = state => state.library.openFilePublished__LIVEGRAPH.modules
export let hasLocalOrPublishedContent = createSelector([selectCurrentLibraryComponents, selectOpenFileStyles, selectOpenFileVariableSets, selectOpenFileModules], (localComponents, publishedStyles, publishedVariableSets, publishedModules) => !isEmptyObject(publishedStyles) || !isEmptyObject(localComponents) || !isEmptyObject(publishedVariableSets) || !isEmptyObject(publishedModules))
export let selectProcessedLocalStyles = createSelector([state => state.library.local.styles, selectOpenFileKey, selectLibraryPublishingMode, state => state.library.publishableStyles, selectOpenHubFileStyles, selectPublishedHubFile, selectLocalThumbnails], (localStyles, openFileKey, publishingMode, publishableStyles, hubFileStyles, publishedHubFile, thumbnails) => {
  if (publishingMode === LibrarySourceEnum.HUBFILE && publishedHubFile) {
    let libraryKey = publishedHubFile.libraryKey
    let {
      newLocal,
    } = generateNewLocalLibraryItems(createLocalStyle, publishableStyles, hubFileStyles, localStyles, thumbnails, {}, openFileKey || '', libraryKey, new Set(), PrimaryWorkflowEnum.STYLE)
    return newLocal
  }
  return localStyles
})
export let selectEffectiveStyles = createSelector([selectOpenFileStyles, selectOpenHubFileStyles, selectLibraryPublishingMode], (openFileStyles, hubFileStyles, publishingMode) => publishingMode === LibrarySourceEnum.HUBFILE ? hubFileStyles : openFileStyles)
export let selectStyledLibraryItemsWithStatus = createSelector([selectProcessedLocalStyles, selectEffectiveStyles], (localStyles: Record<string, StyleLibraryItem>, effectiveStyles) => {
  if (!getFeatureFlags().ds_remove_redux_library_status)
    return localStyles
  let styledItemsWithStatus = {}
  for (let styleItem of Object.values(localStyles)) {
    let status = calculateItemStatus(styleItem, effectiveStyles[styleItem.node_id], hasStylePropertyChanged)
    styledItemsWithStatus[styleItem.node_id] = {
      ...(styleItem as any),
      status,
    }
  }
  return styledItemsWithStatus
})
export let selectProcessedLocalComponents = createSelector([state => state.library.local.components, selectOpenFileKey, selectLibraryPublishingMode, selectOpenHubFileComponents, selectPublishedHubFile, state => state.library.publishableSymbols, selectLocalThumbnails, isSelectedViewFullscreenCooper], (localComponents, openFileKey, publishingMode, hubFileComponents, publishedHubFile, publishableSymbols, thumbnails, isFullscreenCooper) => {
  if (publishingMode === LibrarySourceEnum.HUBFILE && publishedHubFile) {
    let libraryKey = publishedHubFile.libraryKey
    let {
      newLocal,
    } = generateNewLocalLibraryItems((componentData, hubComponent, localComponent, publishableSymbol, nodeId) => createLocalComponent(componentData, hubComponent, localComponent, publishableSymbol, nodeId, isFullscreenCooper), publishableSymbols, hubFileComponents, localComponents, thumbnails, {}, openFileKey || '', libraryKey, new Set(), PrimaryWorkflowEnum.COMPONENT)
    return newLocal
  }
  return localComponents
})
export let selectEffectiveComponents = createSelector([selectCurrentLibraryComponents, selectOpenHubFileComponents, selectLibraryPublishingMode], (currentComponents, hubFileComponents, publishingMode) => publishingMode === LibrarySourceEnum.HUBFILE ? hubFileComponents : currentComponents)
export let selectProcessedLocalStateGroups = createSelector([function (state) {
  return state.library.local.stateGroups
}, selectOpenFileKey, selectLibraryPublishingMode, selectOpenHubFileStateGroups, selectPublishedHubFile, state => state.library.publishableStateGroups, selectLocalThumbnails], (localStateGroups, openFileKey, publishingMode, hubFileStateGroups, publishedHubFile, publishableStateGroups, thumbnails) => {
  if (publishingMode === LibrarySourceEnum.HUBFILE && publishedHubFile) {
    let libraryKey = publishedHubFile.libraryKey
    let {
      newLocal,
    } = generateNewLocalLibraryItems(createLocalStateGroup, publishableStateGroups, hubFileStateGroups, localStateGroups, thumbnails, {}, openFileKey || '', libraryKey, new Set(), PrimaryWorkflowEnum.STATE_GROUP)
    return newLocal
  }
  return localStateGroups
})
export let selectEffectiveStateGroups = createSelector([selectCurrentLibraryStateGroups, selectOpenHubFileStateGroups, selectLibraryPublishingMode], (currentStateGroups, hubFileStateGroups, publishingMode) => publishingMode === LibrarySourceEnum.HUBFILE ? hubFileStateGroups : currentStateGroups)
export let selectComponentLibraryItemsWithStatus = createSelector([selectProcessedLocalComponents, selectEffectiveComponents, selectProcessedLocalStateGroups, selectEffectiveStateGroups, isSelectedViewFullscreenCooper], (localComponents: Record<string, ComponentLibraryItem>, effectiveComponents, localStateGroups: Record<string, StateGroupLibraryItem>, effectiveStateGroups, isFullscreenCooper) => {
  if (!getFeatureFlags().ds_remove_redux_library_status)
    return localComponents
  let componentItemsWithStatus = {}
  let hasComponentPropertyChanged = (localComponent, publishedComponent) => {
    if (getFeatureFlags().ds_user_facing_version_publishing) {
      if (publishedComponent?.userFacingVersion !== localComponent.userFacingVersion)
        return true
    }
    else if (publishedComponent?.content_hash !== localComponent.content_hash) {
      return true
    }
    if (!areValuesEqual(publishedComponent.name, localComponent?.name) || !areValuesEqual(publishedComponent.description, localComponent.description) || isFullscreenCooper && !areValuesEqual(publishedComponent.sort_position, localComponent.sort_position) || areFramesEqual(publishedComponent.containing_frame, localComponent?.containing_frame, {
      compareSortPositions: isFullscreenCooper,
    })) {
      return true
    }
    let localStateGroupId = getContainingStateGroupNodeId(localComponent)
    let localStateGroup = localStateGroupId && localStateGroups[localStateGroupId] || null
    let publishedStateGroupId = getContainingStateGroupNodeId(publishedComponent)
    let publishedStateGroup = publishedStateGroupId && effectiveStateGroups[publishedStateGroupId] || null
    return localStateGroup ? !publishedStateGroup || haveStateGroupsChanged(localStateGroup, publishedStateGroup) : publishedStateGroup != null
  }
  for (let componentItem of Object.values(localComponents)) {
    let status = calculateItemStatus(componentItem, effectiveComponents[componentItem.node_id], hasComponentPropertyChanged)
    componentItemsWithStatus[componentItem.node_id] = {
      ...(componentItem as any),
      status,
    }
  }
  return componentItemsWithStatus
})
export let selectStateGroupLibraryItemsWithStatus = createSelector([selectProcessedLocalStateGroups, selectEffectiveStateGroups], (localStateGroups: Record<string, StateGroupLibraryItem>, effectiveStateGroups) => {
  if (!getFeatureFlags().ds_remove_redux_library_status)
    return localStateGroups
  let stateGroupItemsWithStatus = {}
  for (let stateGroupItem of Object.values(localStateGroups)) {
    let status = calculateItemStatus(stateGroupItem, effectiveStateGroups[stateGroupItem.node_id], haveStateGroupsChanged)
    stateGroupItemsWithStatus[stateGroupItem.node_id] = {
      ...(stateGroupItem as any),
      status,
    }
  }
  return stateGroupItemsWithStatus
})
export let selectProcessedLocalVariables = createDeepEqualSelector([(state) => {
  let nonDeletedVariables: Record<string, VariableLibraryItem> = {}
  Object.entries(state.library.localVariablesById).forEach(([variableId, variable]) => {
    if (!(variable as VariableLibraryItem).isSoftDeleted)
      nonDeletedVariables[variableId] = variable as VariableLibraryItem
  })
  return nonDeletedVariables
}, state => state.library.openFilePublished__LIVEGRAPH.variables, selectOpenFile, selectLibraryPublishingMode, selectPublishedHubFile, selectOpenHubFileVariables], (localVariables, publishedVariables, openFile, publishingMode, publishedHubFile, hubFileVariables) => {
  let processedVariables = {}
  let effectiveVariables = publishingMode === LibrarySourceEnum.HUBFILE && publishedHubFile ? hubFileVariables : publishedVariables
  let fileKey = openFile?.key ?? ''
  let libraryKey = publishingMode === LibrarySourceEnum.HUBFILE && publishedHubFile ? publishedHubFile.libraryKey : openFile?.libraryKey ?? ''
  for (let [variableId, variable] of Object.entries(effectiveVariables)) {
    !Object.prototype.hasOwnProperty.call(localVariables, variableId) || (processedVariables[variableId] = {
      ...(variable as Record<string, any>),
      subscriptionStatus: 'LOCAL',
      isPublishable: false,
      modeValues: {},
      keyForPublish: (variable as any).key,
      status: StagingStatusEnum.DELETED,
      deletedFromSceneGraph: true,
      isSoftDeleted: true,
      file_key: fileKey,
      file_key_source: FileKeySourceEnum.LOCAL_FILE,
      library_key: libraryKey,
      hasOnlyBeenReordered: false,
    })
  }
  for (let variable of Object.values(localVariables)) {
    let publishedVariable = effectiveVariables[variable.node_id]
    let status = calculateItemStatus(variable, publishedVariable, hasVariablePropertyChanged)
    let versionsMatch = conditionalFeatureFlag('ds_user_facing_version_publishing', variable.userFacingVersion === publishedVariable?.userFacingVersion, variable.version === publishedVariable?.version)
    let hasOnlyBeenReordered = !!(variable && publishedVariable && versionsMatch && variable.sortPosition !== publishedVariable.sortPosition)
    processedVariables[variable.node_id] = {
      ...(variable as Record<string, any>),
      status,
      file_key: fileKey,
      file_key_source: FileKeySourceEnum.LOCAL_FILE,
      library_key: libraryKey,
      key: publishedVariable?.key,
      hasOnlyBeenReordered,
    }
  }
  return processedVariables
})
export let groupVariablesBySetId = createSelector([selectProcessedLocalVariables], (variables: Record<string, VariableLibraryItem>) => groupBy(Object.values(variables), variable => variable.variableSetId))
export let selectProcessedLocalVariableSets = createDeepEqualSelector([(state) => {
  let nonDeletedVariableSets: Record<string, VariableSetLibraryItem> = {}
  Object.entries(state.library.localVariableSetsById).forEach(([setId, set]) => {
    if (!(set as VariableSetLibraryItem).isSoftDeleted)
      nonDeletedVariableSets[setId] = set as VariableSetLibraryItem
  })
  return nonDeletedVariableSets
}, selectOpenFileVariableSets, groupVariablesBySetId, selectOpenFile, selectLibraryPublishingMode, selectPublishedHubFile, selectOpenHubFileVariableSets], (localVariableSets, publishedVariableSets, variablesBySetId, openFile, publishingMode, publishedHubFile, hubFileVariableSets) => {
  let effectiveVariableSets = publishingMode === LibrarySourceEnum.HUBFILE && publishedHubFile ? hubFileVariableSets : publishedVariableSets
  let fileKey = openFile?.key ?? ''
  let libraryKey = publishingMode === LibrarySourceEnum.HUBFILE && publishedHubFile ? publishedHubFile.libraryKey : openFile?.libraryKey ?? ''
  let processedVariableSets: Record<string, any> = {}
  for (let [setId, variableSet] of Object.entries(effectiveVariableSets)) {
    if (Object.prototype.hasOwnProperty.call(localVariableSets, setId))
      continue
    const deletedSetProperties = {
      subscriptionStatus: 'LOCAL',
      modes: [],
      defaultModeID: '',
      isPublishable: false,
      keyForPublish: (variableSet as any).key,
      status: StagingStatusEnum.DELETED,
      deletedFromSceneGraph: true,
      isSoftDeleted: true,
      file_key: fileKey,
      file_key_source: FileKeySourceEnum.LOCAL_FILE,
      library_key: libraryKey,
      variableSetError: VariableErrorType.NONE,
      hasOnlyBeenReordered: false,
    }
    if ((variableSet as any).isExtension) {
      processedVariableSets[setId] = {
        ...(variableSet as Record<string, any>),
        ...deletedSetProperties,
        rootVariableSetId: VariableSetIdCompatHandler.INVALID,
        backingVariableSetId: VariableSetIdCompatHandler.INVALID,
      }
    }
    else {
      processedVariableSets[setId] = {
        ...(variableSet as Record<string, any>),
        ...deletedSetProperties,
      }
    }
  }
  for (let variableSet of Object.values(localVariableSets)) {
    let publishedSet = effectiveVariableSets[variableSet.node_id]
    let status = (function (localSet, publishedSet, setVariables) {
      let setStatus = calculateItemStatus(localSet, publishedSet, hasVariableSetPropertyChanged)
      if (setStatus !== StagingStatusEnum.CURRENT)
        return setStatus
      for (let variable of setVariables) {
        if (variable.status !== StagingStatusEnum.CURRENT && variable.status !== StagingStatusEnum.NOT_STAGED)
          return StagingStatusEnum.CHANGED
      }
      return StagingStatusEnum.CURRENT
    }(variableSet, publishedSet, variablesBySetId[variableSet.node_id] ?? []))
    let hasOnlyBeenReordered = !!(variableSet && publishedSet && variableSet.version === publishedSet.version && variableSet.sortPosition !== publishedSet.sortPosition)
    getFeatureFlags().ds_user_facing_version_publishing && (hasOnlyBeenReordered = !!(variableSet && publishedSet && variableSet.userFacingVersion === publishedSet.userFacingVersion && variableSet.sortPosition !== publishedSet.sortPosition))
    processedVariableSets[variableSet.node_id] = {
      ...(variableSet as Record<string, any>),
      status,
      file_key: fileKey,
      file_key_source: FileKeySourceEnum.LOCAL_FILE,
      library_key: libraryKey,
      key: publishedSet?.key,
      hasOnlyBeenReordered,
    }
  }
  return processedVariableSets
})
export let groupComponentItemsByStateGroup = createSelector([selectComponentLibraryItemsWithStatus], (components) => {
  let stateGroupComponents = {}
  for (let component of Object.values(components)) {
    let stateGroupId = getContainingStateGroupNodeId(component)
    if (stateGroupId != null) {
      if (!stateGroupComponents[stateGroupId]) {
        stateGroupComponents[stateGroupId] = []
      }
      stateGroupComponents[stateGroupId].push(component)
    }
  }
  return stateGroupComponents
})
export let selectComponentItemsWithoutStateGroup = createSelector([selectComponentLibraryItemsWithStatus], components => pickBy(components, component => !hasContainingStateGroup(component)))
export let selectLocalModules = state => state.library.local.modules
function hasModulePropertyChanged(localModule, publishedModule) {
  if (!publishedModule)
    return false
  if (getFeatureFlags().ds_user_facing_version_publishing) {
    if (publishedModule.userFacingVersion !== localModule.userFacingVersion)
      return true
  }
  else if (publishedModule.version !== localModule.version) {
    return true
  }
  return !(areValuesEqual(publishedModule.name, localModule?.name) && areValuesEqual(publishedModule.description, localModule.description))
}
export function processModuleItems(localModules: Record<string, ModuleLibraryItem>, publishedModules: Record<string, ModuleLibraryItem>, hubFileModules: Record<string, ModuleLibraryItem>, publishedHubFile: any, publishingMode: LibrarySourceEnum) {
  if (!getFeatureFlags().dse_module_publish)
    return {}
  let processedModules = {}
  if (publishingMode === LibrarySourceEnum.HUBFILE && publishedHubFile) {
    for (let [moduleId, module] of Object.entries(hubFileModules)) {
      Object.keys(localModules).includes(moduleId) || (processedModules[moduleId] = {
        ...(module as Record<string, any>),
        status: StagingStatusEnum.DELETED,
        deletedFromSceneGraph: true,
      })
    }
  }
  let effectiveModules = publishingMode === LibrarySourceEnum.HUBFILE ? hubFileModules : publishedModules
  for (let module of Object.values(localModules)) {
    let status = calculateItemStatus(module, effectiveModules[module.node_id], hasModulePropertyChanged)
    processedModules[module.node_id] = {
      ...(module as Record<string, any>),
      status,
    }
  }
  return processedModules
}
export let selectModuleLibraryItemsWithStatus = createSelector([selectLocalModules, selectOpenFileModules, selectOpenHubFileModules, selectPublishedHubFile, selectLibraryPublishingMode], (localModules, openFileModules, hubFileModules, publishedHubFile, publishingMode) => getFeatureFlags().dse_module_publish ? processModuleItems(localModules, openFileModules, hubFileModules, publishedHubFile, publishingMode) : {})
export let selectAllModuleLibraryItemsWithStatus = createSelector([selectLocalModules, selectOpenFileModules, selectOpenHubFileModules, selectPublishedHubFile, (state, extraParam) => extraParam], (localModules, openFileModules, hubFileModules, publishedHubFile, extraParam) => processModuleItems(localModules, openFileModules, hubFileModules, publishedHubFile, extraParam))
export let selectAllLibraryItems = createSelector([selectComponentItemsWithoutStateGroup, selectStateGroupLibraryItemsWithStatus], (componentItems, stateGroupItems) => ({
  ...componentItems,
  ...stateGroupItems,
}))
export let selectMappedLibraryItems = createSelector([selectAllLibraryItems], items => mapKeys(items, item => getAssetKeyForPublish(item)))
export let hasStagedComponentItems = createSelector([selectAllLibraryItems], (items: Record<string, BaseLibraryItem>) => Object.values(items).some(item => isStagedStatus(item.status as StagingStatusEnum)))
export let hasStagedModuleItems = createSelector([selectModuleLibraryItemsWithStatus], (items: Record<string, ModuleLibraryItem>) => Object.values(items).some(item => isStagedStatus(item.status as StagingStatusEnum)))
export let hasAnyStagedItems = createSelector([hasStagedComponentItems, hasStagedModuleItems], (hasStagedComponents, hasStagedModules) => hasStagedComponents || hasStagedModules)
export let selectSelectedComponentItems = createSelector([selectAllLibraryItems, selectSceneGraphSelection], (items, selection) => Object.keys(selection).reduce((selectedItems, nodeId) => {
  if (items[nodeId]) {
    selectedItems[nodeId] = items[nodeId]
  }
  return selectedItems
}, Object.create(null)))
// let selectSelectedModuleItems = createSelector([selectModuleLibraryItemsWithStatus, selectSceneGraphSelection], (items, selection) => Object.keys(selection).reduce((selectedItems, nodeId) => {
//   if (items[nodeId]) {
//     selectedItems[nodeId] = items[nodeId]
//   }
//   return selectedItems
// }, Object.create(null)))
export let hasAnyLibraryContent = createSelector([selectStyledLibraryItemsWithStatus, selectAllLibraryItems, selectProcessedLocalVariableSets, selectModuleLibraryItemsWithStatus], (styles, components, variableSets, modules) => Object.keys(styles).length > 0 || Object.keys(components).length > 0 || Object.keys(variableSets).length > 0 || Object.keys(modules).length > 0)
export let hasLibraryContentAtom = createReduxSubscriptionAtomWithState(hasAnyLibraryContent)
export let hasAnyPublishableContentAtom = atom((getAtomValue) => {
  if (getAtomValue(hasLibraryContentAtom))
    return true
  for (let assetType of Object.keys(AssetAtomMap)) {
    if (isShareableAssetType(assetType as PrimaryWorkflowEnum) && AssetAtomMap[assetType as PrimaryWorkflowEnum].local) {
      for (let asset of Object.values(getAtomValue(AssetAtomMap[assetType].local))) {
        if (!asset.isSoftDeleted)
          return true
      }
    }
  }
  return false
})
export let hasComponentOrModuleItems = (createSelector([selectAllLibraryItems, selectModuleLibraryItemsWithStatus], (components, modules) => Object.keys(components).length > 0 || Object.keys(modules).length > 0))
export let hasComponentOrModuleItemsAtom = createReduxSubscriptionAtomWithState(hasComponentOrModuleItems)
export let isItemStagedOrActive = (item, stagedItemIds) => item.status != null && (!!isNewOrChangedOrDeleted(item.status) || !!isActiveStagingStatus(item.status) && (stagedItemIds ? stagedItemIds.has(item.node_id) : !!item.old_key))
export let isItemStaged = (item: any, stagedItemIds: Set<string> | undefined) => isItemStagedOrActive(item, stagedItemIds) && isStagedStatus(item.status as StagingStatusEnum)
export let isUserStateLoadedAtom = createReduxSubscriptionAtomWithState(state => state.userStateLoaded)
export let canEditAndHasChangesAtom = atom(getAtomValue => getAtomValue(isUserStateLoadedAtom) && getAtomValue(openFileAtom)?.canEdit && (getAtomValue(hasPendingChangesAtom) || getAtomValue(hasAnyPublishableContentAtom)))
export let selectStagedItemIdsWithContext = createSelector([selectComponentLibraryItemsWithStatus, selectStateGroupLibraryItemsWithStatus, selectStyledLibraryItemsWithStatus, (state, context) => context], collectStagedItemIds)
export let selectStagedItemIds = createSelector([selectComponentLibraryItemsWithStatus, selectStateGroupLibraryItemsWithStatus, selectStyledLibraryItemsWithStatus], (components: Record<string, ComponentLibraryItem>, stateGroups: Record<string, StateGroupLibraryItem>, styles: Record<string, StyleLibraryItem>) => collectStagedItemIds(components, stateGroups, styles, undefined))
export function collectStagedItemIds(components: Record<string, ComponentLibraryItem>, stateGroups: Record<string, StateGroupLibraryItem>, styles: Record<string, StyleLibraryItem>, context: any) {
  let allItems = {
    ...components,
    ...stateGroups,
    ...styles,
  }
  let stagedItemIds = new Set<string>(context ? Object.keys(context).filter(itemId => (context as any)[itemId].publishType !== 'FORCED_COPY') : Object.values(allItems).filter(item => !!(item as any).old_key).map(item => (item as any).node_id))
  Array.from(stagedItemIds).map(itemId => components[itemId] && getContainingStateGroupNodeId(components[itemId])).filter(stateGroupId => !!stateGroupId).forEach((stateGroupId) => {
    stagedItemIds.add(stateGroupId)
  })
  return stagedItemIds
}
export let calculateItemStatus = (localItem: any, publishedItem: any, hasPropertyChanged: (local: any, published: any) => boolean) => {
  let isPublished = publishedItem && publishedItem.unpublished_at == null
  let isLocallyDeleted = 'isSoftDeleted' in localItem && localItem.isSoftDeleted
  let isPublishable = !!localItem.isPublishable && !isLocallyDeleted
  return isPublished && !isPublishable ? StagingStatusEnum.DELETED : !isPublished && isPublishable ? StagingStatusEnum.NEW : isPublished || isPublishable ? hasPropertyChanged(localItem, publishedItem) ? StagingStatusEnum.CHANGED : StagingStatusEnum.CURRENT : StagingStatusEnum.NOT_STAGED
}
export let hasStylePropertyChanged = (localStyle: StyleLibraryItem, publishedStyle: any) => {
  let versionsMatch = conditionalFeatureFlag('ds_user_facing_version_publishing', localStyle.userFacingVersion === publishedStyle.userFacingVersion, localStyle.content_hash === publishedStyle.content_hash)
  return !(publishedStyle && versionsMatch && areValuesEqual(publishedStyle.name, localStyle.name) && areValuesEqual(publishedStyle.description, localStyle.description))
}
// let hasComponentSortPropertyChanged = (localComponent: ComponentLibraryItem, publishedComponent: any) => hasStylePropertyChanged(localComponent as unknown as StyleLibraryItem, publishedComponent) || !areValuesEqual(publishedComponent.sort_position, localComponent.sort_position)

export let haveStateGroupsChanged = (localStateGroup: StateGroupLibraryItem, publishedStateGroup: any) => getFeatureFlags().ds_user_facing_version_publishing ? !(publishedStateGroup && publishedStateGroup.userFacingVersion === localStateGroup.userFacingVersion && !areFramesEqual(publishedStateGroup.containing_frame, localStateGroup?.containing_frame) && areValuesEqual(publishedStateGroup.name, localStateGroup?.name) && areValuesEqual(publishedStateGroup.description, localStateGroup.description)) : !(publishedStateGroup && publishedStateGroup.version === localStateGroup.version && !areFramesEqual(publishedStateGroup.containing_frame, localStateGroup?.containing_frame) && areValuesEqual(publishedStateGroup.name, localStateGroup?.name) && areValuesEqual(publishedStateGroup.description, localStateGroup.description))
export let hasVariablePropertyChanged = (localVariable: VariableLibraryItem, publishedVariable: any) => {
  if (!localVariable || !publishedVariable)
    return true
  if (getFeatureFlags().ds_user_facing_version_publishing) {
    if (publishedVariable.userFacingVersion !== localVariable.userFacingVersion)
      return true
  }
  else if (publishedVariable.version !== localVariable.version) {
    return true
  }
  return publishedVariable.sortPosition !== localVariable.sortPosition
}
export let hasVariableSetPropertyChanged = (localSet: VariableSetLibraryItem, publishedSet: any) => getFeatureFlags().ds_user_facing_version_publishing ? !(publishedSet && publishedSet.userFacingVersion === localSet?.userFacingVersion && publishedSet.sortPosition === localSet.sortPosition) : !(publishedSet && publishedSet.version === localSet?.version && publishedSet.sortPosition === localSet.sortPosition)
export function categorizeAndSortItems(stagedItemIds: Set<string>, items: any[], filterErroneous: (item: any) => boolean, sortComparators: any[]) {
  let [stagedItems, unmodifiedItems] = partition(items, (item: any) => isItemStagedOrActive(item, stagedItemIds))
  let [erroneousItems, wellFormedItems] = partition(stagedItems, filterErroneous)
  let [publishedItems, unpublishedItems] = partition(unmodifiedItems, (item: any) => isStagedStatus((item as any).status))
  return {
    modified: {
      erroneous: sortByMultiple(erroneousItems, ...sortComparators),
      wellFormed: sortByMultiple(wellFormedItems, ...sortComparators),
    },
    unmodified: {
      published: sortByMultiple(publishedItems, ...sortComparators),
      unpublished: sortByMultiple(unpublishedItems, ...sortComparators),
    },
  }
}
export function selectLibraryItemsWithDetails(context: any, specificContext: any) {
  return specificContext == null ? selectAllLibraryItemsWithDetails(context) : selectLibraryItemsWithDetailsAndContext(context, specificContext)
}
export let createLibraryItemsAtomFamily = createRemovableAtomFamily((context: any) => {
  let itemsWithDetailsAtom = context ? createReduxSubscriptionAtomWithState((state: any) => selectLibraryItemsWithDetails(state, context)) : createReduxSubscriptionAtomWithState(selectAllLibraryItemsWithDetails)
  let stagedItemIdsAtom = context ? createReduxSubscriptionAtomWithState((state: any) => selectStagedItemIdsWithContext(state, context)) : atom(new Set<string>())
  return atom((getAtomValue: any) => {
    let itemsWithDetails = getAtomValue(itemsWithDetailsAtom)
    let stagedItemIds = getAtomValue(stagedItemIdsAtom)
    let libraryAssets = Object.values(getAtomValue(libraryAssetsAtom).data ?? {})
    let thumbnailStatus = getAtomValue(thumbnailStatusAtom)
    return {
      ...itemsWithDetails,
      libraryAssets: {
        [PrimaryWorkflowEnum.RESPONSIVE_SET]: categorizeAndSortItems(stagedItemIds as Set<string>, isShareableAssetType(PrimaryWorkflowEnum.RESPONSIVE_SET) ? libraryAssets.filter((asset: any) => asset.type === PrimaryWorkflowEnum.RESPONSIVE_SET) : [], () => false, [compareAssetsByFrameAndName]),
        [PrimaryWorkflowEnum.CODE_COMPONENT]: categorizeAndSortItems(stagedItemIds as Set<string>, isShareableAssetType(PrimaryWorkflowEnum.CODE_COMPONENT) ? libraryAssets.filter((asset: any) => asset.type === PrimaryWorkflowEnum.CODE_COMPONENT) : [], () => false, [compareAssetsByFrameAndName]),
      },
      pageThumbnails: partitionThumbnailsByModification(thumbnailStatus),
    }
  })
})
export let selectLibraryItemsWithDetailsAndContext = createSelector([selectStyledLibraryItemsWithStatus, selectComponentLibraryItemsWithStatus, selectStateGroupLibraryItemsWithStatus, selectAllLibraryItems, selectProcessedLocalVariableSets, selectProcessedLocalVariables, selectModuleLibraryItemsWithStatus, selectStagedItemIdsWithContext, (state, context) => context], (styles: Record<string, StyleLibraryItem>, components: Record<string, ComponentLibraryItem>, stateGroups: Record<string, StateGroupLibraryItem>, productComponents: Record<string, BaseLibraryItem>, variableSets: Record<string, VariableSetLibraryItem>, variables: Record<string, VariableLibraryItem>, modules: Record<string, ModuleLibraryItem>, stagedItemIds: Set<string>, context: any) => organizeLibraryItems(styles, components, stateGroups, productComponents, variableSets, variables, modules, stagedItemIds, context))
export let selectAllLibraryItemsWithDetails = createSelector([selectStyledLibraryItemsWithStatus, selectComponentLibraryItemsWithStatus, selectStateGroupLibraryItemsWithStatus, selectAllLibraryItems, selectProcessedLocalVariableSets, selectProcessedLocalVariables, selectModuleLibraryItemsWithStatus, selectStagedItemIds], (styles: Record<string, StyleLibraryItem>, components: Record<string, ComponentLibraryItem>, stateGroups: Record<string, StateGroupLibraryItem>, productComponents: Record<string, BaseLibraryItem>, variableSets: Record<string, VariableSetLibraryItem>, variables: Record<string, VariableLibraryItem>, modules: Record<string, ModuleLibraryItem>, stagedItemIds: Set<string>) => organizeLibraryItems(styles, components, stateGroups, productComponents, variableSets, variables, modules, stagedItemIds, undefined))
function organizeLibraryItems(styles: Record<string, StyleLibraryItem>, components: Record<string, ComponentLibraryItem>, stateGroups: Record<string, StateGroupLibraryItem>, productComponents: Record<string, BaseLibraryItem>, variableSets: Record<string, VariableSetLibraryItem>, variables: Record<string, VariableLibraryItem>, modules: Record<string, ModuleLibraryItem>, stagedItemIds: Set<string>, context: any) {
  let compareForcedCopyPriority = (item1: any, item2: any) => {
    if (!context)
      return 0
    let context1 = context[item1.node_id]
    let context2 = context[item2.node_id]
    return context1 && context2 ? context1.publishType === 'FORCED_COPY' && context2.publishType !== 'FORCED_COPY' ? 1 : context1.publishType !== 'FORCED_COPY' && context2.publishType === 'FORCED_COPY' ? -1 : 0 : 0
  }
  let variableSetsWithHiddenVariables = [...new Set(Object.values(variables).filter(variable => !(variable as VariableLibraryItem).isPublishable).map(variable => (variable as VariableLibraryItem).variableSetId))].map((setId: string) => variableSets[setId]).filter(set => !!set)
  return {
    styles: categorizeAndSortItems(stagedItemIds, Object.values(styles), () => false, [compareStyles, compareForcedCopyPriority]),
    components: categorizeAndSortItems(stagedItemIds, Object.values(components), hasAssetError, [compareAssetsByFrameAndName, compareForcedCopyPriority]),
    stateGroups: categorizeAndSortItems(stagedItemIds, Object.values(stateGroups), hasAssetError, [compareAssetsByFrameAndName, compareForcedCopyPriority]),
    productComponents: categorizeAndSortItems(stagedItemIds, Object.values(productComponents), hasAssetError, [compareAssetsByFrameAndName, compareForcedCopyPriority]),
    variableSets: categorizeAndSortItems(stagedItemIds, Object.values(variableSets), hasVariableSetError, [compareAssetsByName]),
    variableSetsWithHiddenVariables: categorizeAndSortItems(stagedItemIds, variableSetsWithHiddenVariables, () => false, [compareAssetsByName]),
    variables: categorizeAndSortItems(stagedItemIds, Object.values(variables), () => false, [compareAssetsByName]),
    modules: categorizeAndSortItems(stagedItemIds, isShareableAssetType(PrimaryWorkflowEnum.MODULE) ? Object.values(modules) : [], () => false, [compareAssetsByFrameAndName]),
  }
}
export let createVariableSetsBySetIdSelector = createDeepEqualSelector([groupVariablesBySetId], (variableSets: Record<string, VariableLibraryItem[]>) => Object.fromEntries(Object.entries(variableSets).map(([setId, variables]) => [setId, categorizeAndSortItems(new Set(), variables, () => false, [compareAssetsByName])])))
export let createWellFormedVariablesBySetIdSelector = () => createDeepEqualSelector([createVariableSetsBySetIdSelector, (state, setId) => setId], (variableSets: Record<string, any>, setId: string) => {
  let setVariables = variableSets[setId]
  return setVariables ? setVariables.modified.wellFormed : []
})
export let createUnpublishedVariablesBySetIdSelector = () => createDeepEqualSelector([createVariableSetsBySetIdSelector, (state, setId) => setId], (variableSets: Record<string, any>, setId: string) => {
  let setVariables = variableSets[setId]
  return setVariables ? setVariables.unmodified.unpublished.filter(variable => !variable.isPublishable) : []
})
export let selectWellFormedStyles = createSelector([selectLibraryItemsWithDetails], (items: any) => items.styles.modified.wellFormed)
export let selectStagedStyles = createSelector([selectStyledLibraryItemsWithStatus], (styles: Record<string, StyleLibraryItem>) => Object.values(styles).filter(style => isItemStaged(style, new Set())))
export let selectWellFormedComponents = createSelector([selectLibraryItemsWithDetails], (items: any) => items.components.modified.wellFormed)
export let selectWellFormedStateGroups = createSelector([selectLibraryItemsWithDetails], (items: any) => items.stateGroups.modified.wellFormed)
export let selectWellFormedProductComponents = createSelector([selectLibraryItemsWithDetails], (items: any) => items.productComponents.modified.wellFormed)
export let selectStagedProductComponents = createSelector([selectWellFormedProductComponents], (components: any[]) => components.filter((component: any) => isStagedStatus(component.status as StagingStatusEnum)))
export let selectWellFormedVariableSets = createSelector([selectLibraryItemsWithDetails], (items: any) => items.variableSets.modified.wellFormed)
export let selectStagedVariableSets = createSelector([selectWellFormedVariableSets], (variableSets: any[]) => variableSets.filter((set: any) => isStagedStatus(set.status as StagingStatusEnum)))
export let selectWellFormedModules = createSelector([selectLibraryItemsWithDetails], (items: any) => isShareableAssetType(PrimaryWorkflowEnum.MODULE) ? items.modules.modified.wellFormed : [])
export let selectStagedModules = createSelector([selectWellFormedModules], (modules: any[]) => modules.filter((module: any) => isStagedStatus(module.status as StagingStatusEnum)))
export let canUserPublishToCommunity = createSelector([selectOpenFile, selectTeams], (openFile: any, teams: any) => !!(getFeatureFlags().cmty_lib_admin_publish && openFile?.publishedHubFile) || !isTeamFolderV2(openFile?.project) && !!(openFile && hasTeamPaidAccess(openFile.teamId ? teams[openFile.teamId] : null)))
let selectWellFormedStylesForPublishing = selectWellFormedStyles
export let hasWellFormedStylesAtom = createSelector([selectWellFormedStylesForPublishing], (styles: any[]) => styles.length > 0)
export let createHasWellFormedStylesAtomFamily = createRemovableAtomFamily((context: any) => createReduxSubscriptionAtomWithState((state: any) => hasWellFormedStylesAtom(state, context)))
export let hasStagedStylesAtom = createSelector([selectStagedStyles], (styles: any[]) => styles.length > 0)
let hasStagedStylesAtomInstance = createReduxSubscriptionAtomWithState(hasStagedStylesAtom)
export let selectWellFormedComponentsForPublishing = createSelector([selectWellFormedComponents, canUserPublishToCommunity], (components: any[], canPublish: boolean) => canPublish ? components : [])
export let selectWellFormedStateGroupsForPublishing = createSelector([selectWellFormedStateGroups, canUserPublishToCommunity], (stateGroups: any[], canPublish: boolean) => canPublish ? stateGroups : [])
export let selectWellFormedProductComponentsForPublishing = createSelector([selectWellFormedProductComponents, canUserPublishToCommunity], (productComponents: any[], canPublish: boolean) => canPublish ? productComponents : [])
export let hasWellFormedProductComponentsAtom = createSelector([selectWellFormedProductComponentsForPublishing], (components: any[]) => components.length > 0)
export let createHasWellFormedProductComponentsAtomFamily = createRemovableAtomFamily((context: any) => createReduxSubscriptionAtomWithState((state: any) => hasWellFormedProductComponentsAtom(state, context)))
export let selectStagedProductComponentsForPublishing = createSelector([selectStagedProductComponents, canUserPublishToCommunity], (stagedComponents: any[], canPublish: boolean) => canPublish ? stagedComponents : [])
export let hasStagedProductComponentsAtom = createSelector([selectStagedProductComponentsForPublishing], (components: any[]) => components.length > 0)
export let createHasStagedProductComponentsAtomFamily = createRemovableAtomFamily((context: any) => createReduxSubscriptionAtomWithState((state: any) => hasStagedProductComponentsAtom(state, context)))
export let selectAllVariableSets = createSelector([selectWellFormedVariableSets], (sets: any[]) => sets)
export let hasVariableSetsAtom = createSelector([selectAllVariableSets], (sets: any[]) => sets.length > 0)
export let createHasVariableSetsAtomFamily = createRemovableAtomFamily((context: any) => createReduxSubscriptionAtomWithState((state: any) => hasVariableSetsAtom(state, context)))
export let selectStagedVariableSetsForFiltering = createSelector([selectStagedVariableSets], (sets: any[]) => sets)
export let hasStagedVariableSetsAtom = createSelector([selectStagedVariableSetsForFiltering], (sets: any[]) => sets.length > 0)
export let createHasStagedVariableSetsAtomFamily = createRemovableAtomFamily((context: any) => createReduxSubscriptionAtomWithState((state: any) => hasStagedVariableSetsAtom(state, context)))
export let selectWellFormedModulesForPublishing = createSelector([selectWellFormedModules, canUserPublishToCommunity], (modules: any[], canPublish: boolean) => canPublish ? modules : [])
export let hasWellFormedModulesAtom = createSelector([selectWellFormedModulesForPublishing], (modules: any[]) => modules.length > 0)
export let createHasWellFormedModulesAtomFamily = createRemovableAtomFamily((context: any) => createReduxSubscriptionAtomWithState((state: any) => hasWellFormedModulesAtom(state, context)))
export let selectStagedModulesForFiltering = createSelector([selectStagedModules], (modules: any[]) => modules.length > 0)
export let createHasStagedModulesAtomFamily = createRemovableAtomFamily((context: any) => createReduxSubscriptionAtomWithState((state: any) => selectStagedModulesForFiltering(state, context)))
export let createHasShareableAssetsAtomFamily = createRemovableAtomFamily((context: any) => atom((getAtomValue: any) => {
  for (let assetCategory of Object.values(getAtomValue(createLibraryItemsAtomFamily(context)).libraryAssets)) {
    if (assetCategory && (assetCategory as any).modified && (assetCategory as any).modified.wellFormed && (assetCategory as any).modified.wellFormed.length > 0 && isShareableAssetType((assetCategory as any).modified.wellFormed[0].type))
      return true
  }
  return false
}))
export let createHasStagedShareableAssetsAtomFamily = createRemovableAtomFamily((context: any) => atom((getAtomValue: any) => {
  for (let assetCategory of Object.values(getAtomValue(createLibraryItemsAtomFamily(context)).libraryAssets)) {
    if (assetCategory && (assetCategory as any).modified && (assetCategory as any).modified.wellFormed && (assetCategory as any).modified.wellFormed.length > 0 && isShareableAssetType((assetCategory as any).modified.wellFormed[0].type) && (assetCategory as any).modified.wellFormed.some((asset: any) => isStagedStatus(asset.status as StagingStatusEnum)))
      return true
  }
  return false
}))
export let createAllStagedItemIdsAtomFamily = createRemovableAtomFamily((context: any) => {
  let wellFormedStylesAtom = createReduxSubscriptionAtomWithState(state => selectWellFormedStylesForPublishing(state, context))
  let wellFormedProductComponentsAtom = createReduxSubscriptionAtomWithState(state => selectWellFormedProductComponentsForPublishing(state, context))
  let allVariableSetsAtom = createReduxSubscriptionAtomWithState(state => selectAllVariableSets(state, context))
  let wellFormedModulesAtom = createReduxSubscriptionAtomWithState(state => selectWellFormedModulesForPublishing(state, context))
  return atom((getAtomValue) => {
    let styles = getAtomValue(wellFormedStylesAtom)
    let productComponents = getAtomValue(wellFormedProductComponentsAtom)
    let variableSets = getAtomValue(allVariableSetsAtom)
    let modules = getAtomValue(wellFormedModulesAtom)
    let libraryAssets = getAtomValue(createLibraryItemsAtomFamily(context))
    let shareableAssets = Object.keys(libraryAssets.libraryAssets).flatMap(assetType => isShareableAssetType(assetType as PrimaryWorkflowEnum) ? (libraryAssets.libraryAssets as any)[assetType].modified.wellFormed : [])
    let thumbnailStatus = getAtomValue(thumbnailStatusAtom)
    return [...styles.map(style => style.node_id), ...productComponents.map(component => component.node_id), ...variableSets.map(set => set.node_id), ...modules.map(module => module.node_id), ...shareableAssets.map(asset => asset.node_id), ...thumbnailStatus?.map(thumb => thumb.node_id)]
  })
})
export let createHasAnyWellFormedAssetsAtomFamily = createRemovableAtomFamily((context: any) => atom((getAtomValue: any) => getAtomValue(createHasWellFormedStylesAtomFamily(context)) || getAtomValue(createHasWellFormedProductComponentsAtomFamily(context)) || getAtomValue(createHasVariableSetsAtomFamily(context)) || getAtomValue(createHasWellFormedModulesAtomFamily(context)) || getAtomValue(createHasShareableAssetsAtomFamily(context))))
export let createHasAnyStagedAssetsAtomFamily = createRemovableAtomFamily((context: any) => atom((getAtomValue: any) => getAtomValue(hasStagedStylesAtomInstance) || getAtomValue(createHasStagedProductComponentsAtomFamily(context)) || getAtomValue(createHasStagedVariableSetsAtomFamily(context)) || getAtomValue(createHasStagedModulesAtomFamily(context)) || getAtomValue(createHasStagedShareableAssetsAtomFamily(context))))
export let isSelectedComponentInWellFormedProductComponents = createSelector([selectSelectedComponentItems, selectWellFormedProductComponentsForPublishing], (selectedComponents: Record<string, any>, productComponents: any[]) => productComponents.some((component: any) => selectedComponents[component.node_id]))
// createSelector([selectSelectedModuleItems, selectWellFormedModulesForPublishing], (selectedModules, modules) => modules.some(module => selectedModules[module.node_id]))
export let selectMergedAndLocalAssets = createSelector([selectMappedLibraryItems, selectMergedAssets], (localAssets: Record<string, any>, mergedAssets: Record<string, any>) => ({
  ...mergedAssets,
  ...localAssets,
}))
export let selectWellFormedModuleNodeIds = createSelector([selectWellFormedModulesForPublishing], (modules: any[]) => modules.map((module: any) => module.node_id))
// createSelector([selectWellFormedStateGroupsForPublishing], stateGroups => stateGroups.map(stateGroup => stateGroup.node_id))
export let selectDeletedOrCooperComponentNodeIds = createSelector(
  [selectWellFormedComponentsForPublishing, () => getCooperFrameGuids()],
  (components: any[], cooperFrameGuids: string[]) => components.filter((component: any) => component.deletedFromSceneGraph || cooperFrameGuids.includes(component.node_id)).map((component: any) => component.node_id),
)
export let selectDeletedOrCooperComponentAndFrameNodeIds = createSelector([selectDeletedOrCooperComponentNodeIds, () => getCooperFrames()], (componentNodeIds: string[], cooperFrames: any[]) => componentNodeIds.concat(cooperFrames.filter((frame: any) => frame.type !== 'SYMBOL').map((frame: any) => frame.guid)))
export let selectCooperComponents = createSelector([selectComponentLibraryItemsWithStatus, () => getCooperFrameGuids()], (components: Record<string, ComponentLibraryItem>, cooperFrameGuids: string[]) => pickBy(components, (component: ComponentLibraryItem) => cooperFrameGuids.includes(component.node_id)))
let hasStagedLibraryAssetsAtom = atom((getAtomValue: any) => Object.values(getAtomValue(libraryAssetsAtom).data ?? {}).some((asset: any) => isStagedStatus(asset.status as StagingStatusEnum)))
let hasLocalOrPublishedContentAtom = createReduxSubscriptionAtomWithState(hasLocalOrPublishedContent)
let hasPendingChangesAtom = atom((getAtomValue: any) => getAtomValue(hasLocalOrPublishedContentAtom) || getAtomValue(hasStagedLibraryAssetsAtom))
export function createUpdateLibraryPublishingModeAction(updater: any, mode: LibrarySourceEnum) {
  return state => updater({
    ...state,
    library: {
      ...state.library,
      libraryPublishingMode: mode,
    },
  })
}
export const $c = hasAnyPublishableContentAtom
export const AC = selectWellFormedModuleNodeIds
export const Ct = isSelectedComponentInWellFormedProductComponents
export const Dc = selectWellFormedStylesForPublishing
export const Dr = hasAnyStagedItems
export const F9 = hasLocalOrPublishedContent
export const FZ = selectAllLibraryItems
export const GS = selectStagedItemIds
export const Io = selectLibraryPublishingMode
export const Iy = createHasAnyWellFormedAssetsAtomFamily
export const JI = selectWellFormedStateGroupsForPublishing
export const MH = selectComponentLibraryItemsWithStatus
export const MW = createWellFormedVariablesBySetIdSelector
export const Mh = selectOpenHubFileComponents
export const Pd = selectOpenHubFileStateGroups
export const Pg = hasOpenHubFileContent
export const Qp = selectMergedAndLocalAssets
export const Sh = hasComponentOrModuleItemsAtom
export const Wz = groupComponentItemsByStateGroup
export const Xh = createHasAnyStagedAssetsAtomFamily
export const bh = selectProcessedLocalVariableSets
export const cM = selectStyledLibraryItemsWithStatus
export const dM = selectStateGroupLibraryItemsWithStatus
export const dU = selectStagedItemIdsWithContext
export const e_ = selectLibrary
export const fA = canUserPublishToCommunity
export const jO = selectAllModuleLibraryItemsWithStatus
export const ju = createUnpublishedVariablesBySetIdSelector
export const oB = selectWellFormedComponentsForPublishing
export const p6 = selectCooperComponents
export const p9 = canEditAndHasChangesAtom
export const qG = createUpdateLibraryPublishingModeAction
export const qN = hasPendingChangesAtom
export const tK = selectProcessedLocalVariables
export const tz = selectDeletedOrCooperComponentAndFrameNodeIds
export const vQ = selectDeletedOrCooperComponentNodeIds
export const x$ = createAllStagedItemIdsAtomFamily
export const x6 = selectModuleLibraryItemsWithStatus
export const y6 = createLibraryItemsAtomFamily
