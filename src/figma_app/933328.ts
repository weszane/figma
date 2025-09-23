import { atom, useSetAtom } from 'jotai';
import { groupBy, identity, keyBy } from 'lodash-es';
import { useEffect, useMemo } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { reportError } from '../905/11';
import { externalPromise } from '../905/2848';
import { isLoading, isNullOrFailure } from '../905/18797';
import { getShadowSuggestionPreInsertionData, handleShadowSuggestionOnInsertion } from '../905/49792';
import { updateLibraryProgress } from '../905/63598';
import { resourceDataAndPresetKeysV2SetAtom } from '../905/72677';
import { createActionCreator } from '../905/73481';
import { generateRetrievingSubscribedComponentsKey, generateSwappingInstanceKey } from '../905/92359';
import { mapLibraryAttributes } from '../905/128063';
import { executeWithDSAAction } from '../905/135117';
import { showModalHandler } from '../905/156213';
import { ServiceCategories } from '../905/165054';
import { permissionScopeHandler } from '../905/189185';
import { VisualBellActions } from '../905/302958';
import { getI18nString } from '../905/303541';
import { createSubscriptionObject, getLibraryKey } from '../905/313095';
import { sendAssetByKeyPermissionsErrorMetric } from '../905/338602';
import { createOptimistThunk } from '../905/350402';
import { quickStartSetTextNodeIdAction } from '../905/355220';
import { debugState } from '../905/407919';
import { getFileKey } from '../905/412913';
import { setLibrariesAtom } from '../905/420347';
import { waitForFontLoaded } from '../905/426868';
import { analyticsEventManager, trackEventAnalytics } from '../905/449184';
import { DELETED_SOURCE_COMPONENT_MODAL_ID } from '../905/477656';
import { atomStoreManager } from '../905/490038';
import { convertStringToFacetType } from '../905/497152';
import { handleAtomEvent } from '../905/502364';
import { getUserOrAnonymousId } from '../905/506024';
import { trackAutoSuggestTriggerShadowing } from '../905/522457';
import { insertSharedLibraryAsset } from '../905/545750';
import { subscriptionMappingToArray, usePresetSubscriptionsMapping } from '../905/561897';
import { FlashActions } from '../905/573154';
import { VisualBellIcon } from '../905/576487';
import { processArrayInBatches } from '../905/586871';
import { getFeatureFlags } from '../905/601108';
import { customHistory } from '../905/612521';
import { PluginAction, setupPlaybackHandler } from '../905/656545';
import { DSAApiServiceInstance } from '../905/669853';
import { setupLoadingStateHandler } from '../905/696711';
import { getSingletonSceneGraph, ReduxSceneGraph } from '../905/700578';
import { compareLibraryItems } from '../905/709171';
import { liveStoreInstance, setupResourceAtomHandler } from '../905/713695';
import { logError } from '../905/714362';
import { getSelectedFile } from '../905/766303';
import { trackComponentLikeAddInstance } from '../905/810505';
import { getPartnerType } from '../905/853613';
import { An, fe, sh, Sp } from '../905/854258';
import { defaultSessionLocalIDString } from '../905/871411';
import { getParentOrgId } from '../905/872904';
import { putMoveLibraryItemKeyMappings } from '../905/879323';
import { XHR } from '../905/910117';
import { librariesAPI } from '../905/939602';
import { c6 } from '../905/950959';
import { executeInIgnoreUndoRedoScope } from '../905/955316';
import { filesByLibraryKeyAtom } from '../905/977779';
import { postUserFlag } from '../905/985254';
import { LibraryFileSubscriptions, LibraryOrgSubscriptions, LibraryTeamSubscriptions, LibraryUserSubscriptions } from '../figma_app/43951';
import { batchPutFileAction, filePutAction } from '../figma_app/78808';
import { teamLibraryCache } from '../figma_app/80990';
import { Ob } from '../figma_app/111825';
import { subscribedStateGroupsUniqueKeysFromLoadedPagesSelector, subscribedSymbolsUniqueKeysFromLoadedPagesSelector } from '../figma_app/141508';
import { VariableSetIdCompatHandler } from '../figma_app/243058';
import { e as _$$e2 } from '../figma_app/267183';
import { useSubscription } from '../figma_app/288654';
import { trackFileEvent } from '../figma_app/314264';
import { RX } from '../figma_app/409131';
import { am, F$ } from '../figma_app/430563';
import { fullscreenValue } from '../figma_app/455680';
import { C$ } from '../figma_app/457074';
import { isEmptyObject } from '../figma_app/493477';
import { kb } from '../figma_app/502247';
import { handleStatusChangeEffect } from '../figma_app/566371';
import { getCurrentTeamId } from '../figma_app/598018';
import { qr } from '../figma_app/608944';
import { initialLibraryStats, PrimaryWorkflowEnum } from '../figma_app/633080';
import { addTrackedState, deletedLoadingStates, flattenAssetsArray, generateDefaultLibrariesCacheKey, generatePublishedComponentsCacheKey, getAllAssets, getUsedComponentsStateGroupsAsync, hasPublishedAsset, isSubscribedLibrary, resolveUsedComponents, usedLibrariesPromise } from '../figma_app/646357';
import { useFigmaLibrariesEnabled } from '../figma_app/657017';
import { loadingStateDelete, loadingStatePutFailure, loadingStatePutLoading, loadingStatePutSuccess } from '../figma_app/714946';
import { AppStateTsApi, Confirmation, CopyPasteType, FileSourceType, Fullscreen, LibraryPubSub, SceneIdentifier, StyleVariableOperation, TemplateType, VariablesBindings } from '../figma_app/763686';
import { vP } from '../figma_app/864378';
import { useLatestRef } from '../figma_app/922077';
import { fu, xB } from '../figma_app/990334';

/**
 * Upserts a shared symbol or state group and returns its local GUID and buffer.
 * (Original function: upsertSharedSymbolOrStateGroup)
 * @param item - The component or state group item to upsert.
 * @param targetUpsertScene - The scene identifier for upsert (default: ACTIVE_SCENE).
 * @returns Object containing newSymbolOrStateGroupGuid and buffer, or undefined if upsert fails.
 */
export async function upsertSharedSymbolOrStateGroup(item: any, targetUpsertScene: SceneIdentifier = SceneIdentifier.ACTIVE_SCENE): Promise<{
  newSymbolOrStateGroupGuid: string;
  buffer?: any;
} | undefined> {
  let localGUID: string | undefined;
  // Handle playground scene for local product component
  if (!item.canvas_url && targetUpsertScene === SceneIdentifier.PLAYGROUND_SCENE) {
    return {
      newSymbolOrStateGroupGuid: LibraryPubSub.upsertLocalProductComponentToPlaygroundScene(item.node_id)
    };
  }
  const buffer = await teamLibraryCache.getCanvas(item);
  if (item.type === PrimaryWorkflowEnum.COMPONENT) {
    // Upsert shared symbol
    const response = permissionScopeHandler.system('upsert-shared-symbol', () => LibraryPubSub.upsertSharedSymbol(item.component_key ?? 'INVALID', item.content_hash ?? 'INVALID', item.library_key, Confirmation.NO, buffer, targetUpsertScene));
    if (!response || isEmptyObject(response) || response.fileUpdateRequired) return;
    if (!response.localGUID) {
      logError(ServiceCategories.DESIGN_SYSTEMS_EDITOR, 'no local GUID in response', {
        response: JSON.stringify(response)
      }, {
        reportAsSentryError: true
      });
    }
    localGUID = response.localGUID;
  } else if (item.type === PrimaryWorkflowEnum.STATE_GROUP) {
    // Upsert shared state group
    const response = permissionScopeHandler.system('upsert-shared-state-group', () => LibraryPubSub.upsertSharedStateGroup(item.key, item.version, item.library_key, Confirmation.NO, buffer, targetUpsertScene));
    if (!response || isEmptyObject(response) || response.fileUpdateRequired) return;
    if (!response.localGUID) throw new Error('Swap to Shared Component Error, no local GUID');
    if (response.C2) throw new Error(response.C2);
    localGUID = response.localGUID;
  } else {
    throw new Error(`Unexpected type for dragging library item: ${item.type}`);
  }
  return {
    newSymbolOrStateGroupGuid: localGUID!,
    buffer
  };
}

/**
 * Optimist thunk to load a shared symbol or state group.
 * (Original function: loadSharedSymbolOrStateGroup)
 */
export const loadSharedSymbolOrStateGroup = createOptimistThunk((store, payload) => {
  const {
    item,
    callback,
    bufferCallback,
    errorCallback,
    alwaysFetch,
    targetUpsertScene = SceneIdentifier.ACTIVE_SCENE
  } = payload;
  const selectedFile = getSelectedFile(store.getState());
  if (selectedFile) {
    if (!compareLibraryItems(item, selectedFile) || alwaysFetch) {
      const upsertHandler = async () => {
        try {
          const result = await upsertSharedSymbolOrStateGroup(item, targetUpsertScene);
          if (result) {
            callback?.(result.newSymbolOrStateGroupGuid);
            result.buffer && bufferCallback?.(result.buffer);
          }
        } catch (err) {
          store.dispatch(FlashActions.error(getI18nString('banner.component_or_set_retrieval_error')));
          reportError(ServiceCategories.DESIGN_SYSTEMS_EDITOR, err);
          errorCallback?.();
        }
      };
      store.dispatch(setupPlaybackHandler({
        assetLibraryKey: item.library_key,
        onInsertAsset: upsertHandler,
        source: PluginAction.LOAD_COMPONENT
      }));
    } else {
      callback?.(item.node_id);
    }
  }
});

// Export refactored names for imports/exports
// export const jD = upsertSharedSymbolOrStateGroup
// export const uP = loadSharedSymbolOrStateGroup
let SWAP_TO_SHARED_COMPONENT = createActionCreator('SWAP_TO_SHARED_COMPONENT_OR_STATE_GROUP');
let swapToSharedComponent = createOptimistThunk((e, t) => {
  let {
    item,
    instanceGUIDs,
    usedSwapInstanceKeyboardShortcut,
    storeInRecentsKey,
    queryId
  } = t;
  let l = generateSwappingInstanceKey(item, instanceGUIDs);
  e.dispatch(loadingStatePutLoading({
    key: l
  }));
  let c = e.getState();
  let p = getUserOrAnonymousId(c);
  e.dispatch(ADD_ASSET_TO_RECENTS({
    storeInRecentsKey,
    item,
    userId: p
  }));
  let _ = getSelectedFile(c);
  if (!_) {
    e.dispatch(loadingStatePutFailure({
      key: l
    }));
    return;
  }
  let h = async () => {
    try {
      let t = await upsertSharedSymbolOrStateGroup(item);
      if (t) {
        let a = item.type === PrimaryWorkflowEnum.STATE_GROUP ? Fullscreen.getSimilarStates(instanceGUIDs, t.newSymbolOrStateGroupGuid, item.default_state_key) : {
          [t.newSymbolOrStateGroupGuid]: instanceGUIDs
        };
        permissionScopeHandler.user('replace-symbol-backing-instances', () => {
          Fullscreen.replaceSymbolBackingInstances(a, usedSwapInstanceKeyboardShortcut);
        });
        e.dispatch(loadingStatePutSuccess({
          key: l
        }));
        trackComponentLikeAddInstance(_.key, item, !0, !!e.getState().userFlags.apple_eula_accepted);
      }
    } catch (t) {
      e.dispatch(loadingStatePutFailure({
        key: l
      }));
      e.dispatch(FlashActions.error('An error occurred while adding an instance of this component.'));
      reportError(ServiceCategories.DESIGN_SYSTEMS_EDITOR, t);
      trackComponentLikeAddInstance(_.key, item, !1, !!e.getState().userFlags.apple_eula_accepted);
    }
    trackFileEvent('Instance Swapped To Shared Component', _.key, e.getState(), {
      componentLibraryKey: item.library_key,
      componentId: item.id,
      source: t.sourceForTracking,
      queryId
    });
  };
  e.dispatch(setupPlaybackHandler({
    assetLibraryKey: item.library_key,
    onInsertAsset: h,
    source: PluginAction.SWAP_TO_COMPONENT
  }));
  e.dispatch(SWAP_TO_SHARED_COMPONENT(t));
});
function showComponentInsertionBell(e) {
  e(VisualBellActions.enqueue({
    type: 'insert_instance',
    message: getI18nString('design_systems.subscriptions.inserting_instance'),
    icon: VisualBellIcon.SPINNER,
    delay: 1e3
  }));
  return function () {
    e(VisualBellActions.dequeue({
      matchType: 'insert_instance'
    }));
  };
}
let INSERT_SHARED_COMPONENT = createActionCreator('INSERT_SHARED_COMPONENT');
/**
 * Optimist thunk to insert a shared component into the canvas.
 * Handles both local and shared components, including upserting shared ones.
 * (Original function: insertSharedComponent)
 * @param store - The Redux store instance.
 * @param payload - Payload containing item and insertion options.
 */
let insertSharedComponent = createOptimistThunk((store, payload) => {
  // Dispatch the action immediately
  store.dispatch(INSERT_SHARED_COMPONENT(payload));

  // Extract payload properties
  let {
    item
  } = payload;
  const {
    canvasPosition,
    percentageOffset,
    isFromDoubleClick,
    useSmartPositioning,
    insertionCallback,
    storeInRecentsKey,
    fromPlayground,
    insertLogArgsOverride,
    isClick,
    selectAfterInsert,
    sourceForTracking
  } = payload;

  // Determine insertion parent GUID
  const insertAsChildOfGuid = payload.insertAsChildOfCanvas ? getSingletonSceneGraph().getCurrentPage()?.guid : payload.insertAsChildOfGuid;

  // Get state and check resource availability
  const state = store.getState();
  const isResourceAvailable = atomStoreManager.get(resourceDataAndPresetKeysV2SetAtom).has(item.library_key);

  /**
   * Helper function to perform the actual insertion of the component.
   * (Original helper: v)
   * @param nodeId - The node ID of the component to insert.
   * @param logArgs - Additional log arguments.
   */
  const performInsertion = (nodeId: string, logArgs: any): void => {
    const logData = getShadowSuggestionPreInsertionData();
    const insertedNodeId = fromPlayground ? Fullscreen.insertPlaygroundInstance({
      x: canvasPosition.x,
      y: canvasPosition.y,
      percentOffsetX: percentageOffset.x,
      percentOffsetY: percentageOffset.y
    }, isResourceAvailable) : Fullscreen.insertInstance(nodeId, {
      x: canvasPosition.x,
      y: canvasPosition.y,
      percentOffsetX: percentageOffset.x,
      percentOffsetY: percentageOffset.y
    }, logArgs, insertAsChildOfGuid ?? null, useSmartPositioning ?? false, isResourceAvailable, selectAfterInsert ?? true);
    try {
      trackAutoSuggestTriggerShadowing(canvasPosition, insertedNodeId);
      handleShadowSuggestionOnInsertion(logData, canvasPosition, insertedNodeId, sourceForTracking);
    } catch (error) {
      logError('auto_suggest', 'Error logging shadow reads on component insertion', {
        error
      });
    }

    // Handle insertion callback and additional logic
    insertionCallback?.([insertedNodeId], canvasPosition, isClick);
    qr(store.dispatch);
    if (insertedNodeId !== defaultSessionLocalIDString) {
      const isComponentSet = C$(getSingletonSceneGraph().get(nodeId));
      const insertedNode = state.mirror.sceneGraph.get(insertedNodeId);
      const hasComponentProperties = Object.keys(insertedNode && insertedNode.type === 'INSTANCE' && insertedNode.componentProperties() || {}).length > 0;
      if (isComponentSet && hasComponentProperties) {
        store.dispatch(quickStartSetTextNodeIdAction({
          nodeId: insertedNodeId
        }));
        handleAtomEvent({
          id: sh
        });
      } else if (isComponentSet) {
        store.dispatch(quickStartSetTextNodeIdAction({
          nodeId: insertedNodeId
        }));
        handleAtomEvent({
          id: Sp
        });
      } else if (hasComponentProperties) {
        handleAtomEvent({
          id: An
        });
      } else {
        handleAtomEvent({
          id: fe
        });
      }
    }
    fullscreenValue.triggerAction('commit');
    fullscreenValue.triggerAction('set-tool-default');
  };

  /**
   * Handles the insertion process, including fetching canvas for shared items.
   * (Original helper: v, but scoped to insertion logic)
   */
  const handleInsertion = async (): Promise<void> => {
    // Add to recents
    const userId = getUserOrAnonymousId(state);
    store.dispatch(ADD_ASSET_TO_RECENTS({
      storeInRecentsKey,
      item,
      userId
    }));
    const selectedFile = getSelectedFile(state);
    if (!selectedFile) return;

    // Check if the item is local to the file
    if (compareLibraryItems(item, selectedFile)) {
      // Handle local component insertion
      const localComponent = state.library.local.components[item.node_id];
      if (!localComponent || !state.mirror.sceneGraph.get(localComponent.node_id)) {
        store.dispatch(showModalHandler({
          type: DELETED_SOURCE_COMPONENT_MODAL_ID
        }));
        return;
      }
      try {
        permissionScopeHandler.user('insert-component', () => {
          performInsertion(localComponent.node_id, insertLogArgsOverride);
        });
        trackFileEvent('Component Local Symbol Inserted', selectedFile.key, store.getState(), {
          componentLibraryKey: item.library_key,
          componentId: item.id,
          ComponentCanvasPositionX: canvasPosition.x,
          ComponentCanvasPositionY: canvasPosition.y
        });
        trackComponentLikeAddInstance(selectedFile.key, localComponent, true, !!store.getState().userFlags.apple_eula_accepted);
        store.dispatch(markComponentInsertionFlag());
      } catch (error) {
        store.dispatch(FlashActions.error('An error occurred while adding an instance of this component.'));
        reportError(ServiceCategories.DESIGN_SYSTEMS_EDITOR, error);
        trackComponentLikeAddInstance(selectedFile.key, localComponent, false, !!store.getState().userFlags.apple_eula_accepted);
      }
    } else {
      // Handle shared component insertion
      const startTime = performance.now();
      if (cachedComponentKey && cachedComponentKey === item.component_key && cachedComponentPromise) {
        const cachedResult = await cachedComponentPromise;
        if (cachedResult && cachedResult.component && cachedResult.component.updated_at > item.updated_at) {
          item = cachedResult.component;
        }
      }
      const visualBellCleanup = showComponentInsertionBell(store.dispatch);
      try {
        const canvas = await teamLibraryCache.getCanvas(item);
        permissionScopeHandler.user('insert-component', () => {
          const upsertResult = permissionScopeHandler.system('upsert-shared-symbol', () => LibraryPubSub.upsertSharedSymbol(item.component_key ?? 'INVALID', item.content_hash ?? 'INVALID', item.library_key, Confirmation.NO, canvas, SceneIdentifier.ACTIVE_SCENE));
          if (!upsertResult) {
            logError('design-systems', 'response from upsertSharedSymbol was nullish', {
              componentKey: item.component_key ?? 'INVALID',
              contentHash: item.content_hash ?? 'INVALID'
            }, {
              reportAsSentryError: true
            });
            throw new Error('An error occurred while adding an instance of this component.');
          }
          if (upsertResult.fileUpdateRequired || !upsertResult.localGUID) {
            throw new Error('An error occurred while adding an instance of this component.');
          }
          performInsertion(upsertResult.localGUID, insertLogArgsOverride);
        });
      } catch (canvasError) {
        // Fallback to existing node if canvas fetch fails
        const existingNodeId = Fullscreen.getSymbolNodeId(item.component_key, item.content_hash);
        if (!existingNodeId) {
          if ((canvasError as any)?.status === 403) {
            throw new Error('A 403 error occurred while adding an instance of this component.');
          }
          throw new Error('An error occurred while adding an instance of this component.');
        }
        permissionScopeHandler.user('insert-component', () => {
          performInsertion(existingNodeId, insertLogArgsOverride);
        });
      }

      // Tracking and cleanup
      const duration = performance.now() - startTime;
      trackFileEvent('Component Shared Symbol Inserted', selectedFile.key, store.getState(), {
        elapsedMs: duration,
        componentLibraryKey: item.library_key,
        componentId: item.id,
        componentName: item.name,
        ComponentCanvasPositionX: canvasPosition.x,
        ComponentCanvasPositionY: canvasPosition.y,
        isFromDefaultLibrary: isSubscribedLibrary(state.library.defaultPublished, item.library_key),
        isFromDoubleClick: !!isFromDoubleClick,
        useSmartPositioning: !!useSmartPositioning
      });
      trackComponentLikeAddInstance(selectedFile.key, item, true, !!store.getState().userFlags.apple_eula_accepted, {
        metricName: 'design_systems.subscribed_component.insert_time',
        duration
      });
      store.dispatch(markComponentInsertionFlag());
      visualBellCleanup();
    }
  };

  // Dispatch setup and action
  store.dispatch(setupPlaybackHandler({
    assetLibraryKey: item.library_key,
    onInsertAsset: handleInsertion,
    source: PluginAction.INSERT_SHARED_COMPONENT
  }));
});
let INSERT_SHARED_STATE_GROUP = createActionCreator('INSERT_SHARED_STATE_GROUP');
/**
 * Optimist thunk to insert a shared state group into the canvas.
 * Handles both local and shared state groups, including upserting shared ones.
 * (Original function: insertSharedStateGroup)
 * @param store - The Redux store instance.
 * @param payload - Payload containing item and insertion options.
 */
let insertSharedStateGroup = createOptimistThunk(async (store, payload) => {
  let {
    item
  } = payload;
  const {
    canvasPosition,
    percentageOffset,
    isFromDoubleClick,
    useSmartPositioning,
    insertionCallback,
    storeInRecentsKey,
    fromPlayground,
    insertLogArgsOverride,
    isClick,
    sourceForTracking
  } = payload;
  const insertAsChildOfGuid = payload.insertAsChildOfCanvas ? getSingletonSceneGraph().getCurrentPage()?.guid : payload.insertAsChildOfGuid;
  const state = store.getState();
  const isResourceAvailable = atomStoreManager.get(resourceDataAndPresetKeysV2SetAtom).has(item.library_key);

  /**
   * Helper function to perform the actual insertion of the state group.
   * @param nodeId - The node ID of the state group to insert.
   * @param defaultStateKey - The default state key for the state group.
   * @param logArgs - Additional log arguments.
   * @returns The inserted node ID.
   */
  const performInsertion = (nodeId: string, defaultStateKey: string, logArgs: any): string => {
    const logData = getShadowSuggestionPreInsertionData();
    const insertedNodeId = fromPlayground ? Fullscreen.insertPlaygroundInstance({
      x: canvasPosition.x,
      y: canvasPosition.y,
      percentOffsetX: percentageOffset.x,
      percentOffsetY: percentageOffset.y
    }, isResourceAvailable) : Fullscreen.insertStateGroup(nodeId, {
      x: canvasPosition.x,
      y: canvasPosition.y,
      percentOffsetX: percentageOffset.x,
      percentOffsetY: percentageOffset.y
    }, logArgs, insertAsChildOfGuid ?? null, useSmartPositioning ?? false, defaultStateKey, isResourceAvailable);
    try {
      trackAutoSuggestTriggerShadowing(canvasPosition, insertedNodeId);
      handleShadowSuggestionOnInsertion(logData, canvasPosition, insertedNodeId, sourceForTracking);
    } catch (error) {
      logError('auto_suggest', 'Error logging shadow reads on state group insertion', {
        error
      });
    }
    if (getFeatureFlags().anticipation_props_shadow_reads) {
      atomStoreManager.set(xB, insertedNodeId);
      atomStoreManager.set(fu, item.key);
    }
    insertionCallback?.([insertedNodeId], canvasPosition, isClick);
    qr(store.dispatch);
    fullscreenValue.triggerAction('commit');
    fullscreenValue.triggerAction('set-tool-default');
    return insertedNodeId;
  };

  /**
   * Handles the insertion process, including fetching canvas for shared items.
   */
  const handleInsertion = async (): Promise<void> => {
    const userId = getUserOrAnonymousId(state);
    store.dispatch(ADD_ASSET_TO_RECENTS({
      storeInRecentsKey,
      item,
      userId
    }));
    const selectedFile = getSelectedFile(state);
    if (!selectedFile) return;

    // Check if the item is local to the file
    if (compareLibraryItems(item, selectedFile)) {
      const localStateGroup = state.library.local.stateGroups[item.node_id];
      if (!localStateGroup || !state.mirror.sceneGraph.get(localStateGroup.node_id)) {
        store.dispatch(showModalHandler({
          type: DELETED_SOURCE_COMPONENT_MODAL_ID
        }));
        return;
      }
      permissionScopeHandler.user('insert-state-group', () => {
        performInsertion(localStateGroup.node_id, '', insertLogArgsOverride);
      });
      trackFileEvent('State Group Local Symbol Inserted', selectedFile.key, store.getState(), {
        stateGroupLibraryKey: item.library_key,
        stateGroupId: item.id,
        StateGroupCanvasPositionX: canvasPosition.x,
        StateGroupCanvasPositionY: canvasPosition.y
      });
      store.dispatch(markComponentInsertionFlag());
      return;
    }

    // Handle shared state group insertion
    const startTime = performance.now();
    if (cachedStateGroupKey && cachedStateGroupKey === item.key && cachedStateGroupPromise) {
      const cachedResult = await cachedStateGroupPromise;
      if (cachedResult && cachedResult.updated_at > item.updated_at) {
        item = cachedResult;
      }
    }
    const visualBellCleanup = showComponentInsertionBell(store.dispatch);
    try {
      const canvas = await teamLibraryCache.getCanvas(item);
      permissionScopeHandler.user('insert-state-group', () => {
        const upsertResult = permissionScopeHandler.system('upsert-shared-state-group', () => LibraryPubSub.upsertSharedStateGroup(item.key ?? 'INVALID', item.version, item.library_key, Confirmation.NO, canvas, SceneIdentifier.ACTIVE_SCENE));
        if (!upsertResult || upsertResult.fileUpdateRequired || !upsertResult.localGUID) {
          throw new Error('An error occurred while adding an instance of this component.');
        }
        const insertedNodeId = performInsertion(upsertResult.localGUID, item.default_state_key, insertLogArgsOverride);

        // Handle additional logic for the inserted node
        const firstChild = state.mirror.sceneGraph.get(upsertResult.localGUID)?.childrenNodes[0];
        if (firstChild && C$(firstChild) && insertedNodeId !== defaultSessionLocalIDString) {
          store.dispatch(quickStartSetTextNodeIdAction({
            nodeId: insertedNodeId
          }));
          handleAtomEvent({
            id: sh
          });
        } else {
          handleAtomEvent({
            id: An
          });
        }
      });
    } catch {
      // Fallback to existing node if canvas fetch fails
      const existingNodeId = Fullscreen.getStateGroupNodeId(item.key, item.version);
      if (!existingNodeId) {
        throw new Error('An error occurred while adding an instance of this component.');
      }
      performInsertion(existingNodeId, '', insertLogArgsOverride);
    }

    // Tracking and cleanup
    const duration = performance.now() - startTime;
    trackFileEvent('State Group Shared Symbol Inserted', selectedFile.key, store.getState(), {
      stateGroupLibraryKey: item.library_key,
      stateGroupId: item.id,
      stateGroupName: item.name,
      StateGroupCanvasPositionX: canvasPosition.x,
      StateGroupCanvasPositionY: canvasPosition.y,
      isFromDefaultLibrary: isSubscribedLibrary(state.library.defaultPublished, item.library_key),
      isFromDoubleClick: !!isFromDoubleClick
    });
    trackComponentLikeAddInstance(selectedFile.key, item, true, !!store.getState().userFlags.apple_eula_accepted, {
      metricName: 'design_systems.subscribed_state_group.insert_time',
      duration
    });
    store.dispatch(markComponentInsertionFlag());
    visualBellCleanup();
  };

  // Dispatch setup and action
  await store.dispatch(setupPlaybackHandler({
    assetLibraryKey: item.library_key,
    onInsertAsset: handleInsertion,
    source: PluginAction.INSERT_SHARED_STATE_GROUP
  }));
  store.dispatch(INSERT_SHARED_STATE_GROUP(payload));
});
let insertSharedModule = createOptimistThunk(async (e, t) => {
  let {
    item
  } = t;
  if (!RX(item)) return;
  let {
    canvasPosition,
    percentageOffset,
    insertAsChildOfCanvas,
    useSmartPositioning,
    insertLogArgsOverride,
    insertionCallback,
    storeInRecentsKey,
    fromPlayground,
    selectAfterInsert,
    isClick,
    shouldShowVisualBell = !0,
    errorCallback
  } = t;
  let E = e.getState();
  let y = getUserOrAnonymousId(E);
  e.dispatch(ADD_ASSET_TO_RECENTS({
    storeInRecentsKey,
    item,
    userId: y
  }));
  let b = (t, r) => {
    let s = permissionScopeHandler.user('insert-module', () => fromPlayground ? Fullscreen.insertPlaygroundModuleUsage({
      x: canvasPosition.x,
      y: canvasPosition.y,
      percentOffsetX: percentageOffset.x,
      percentOffsetY: percentageOffset.y
    }) : Fullscreen.insertModule(t, {
      x: canvasPosition.x,
      y: canvasPosition.y,
      percentOffsetX: percentageOffset.x,
      percentOffsetY: percentageOffset.y
    }, r, insertAsChildOfCanvas, useSmartPositioning ?? !1, selectAfterInsert ?? !0));
    insertionCallback?.(s, canvasPosition, isClick);
    qr(e.dispatch);
    fullscreenValue.triggerAction('set-tool-default');
    return s;
  };
  let T = getSelectedFile(E);
  if (compareLibraryItems(item, T)) {
    b(item.node_id, insertLogArgsOverride);
    e.dispatch(markComponentInsertionFlag());
  } else {
    let t = () => {};
    shouldShowVisualBell && (t = function (e) {
      e(VisualBellActions.enqueue({
        type: 'insert_template',
        message: getI18nString('design_systems.subscriptions.inserting_template'),
        icon: VisualBellIcon.SPINNER,
        delay: 1e3
      }));
      return function () {
        e(VisualBellActions.dequeue({
          matchType: 'insert_template'
        }));
      };
    }(e.dispatch));
    try {
      let e = await upsertSharedModule(item);
      b(e.localGUID, insertLogArgsOverride);
    } catch (t) {
      e.dispatch(FlashActions.error(t.message));
      errorCallback ? errorCallback(t) : reportError(ServiceCategories.DESIGN_SYSTEMS_EDITOR, t);
    } finally {
      shouldShowVisualBell && t();
    }
  }
});
let insertMultipleSlideModules = createOptimistThunk(async (e, t) => {
  let {
    modules,
    canvasPosition,
    percentageOffset,
    insertAsChildOfCanvas,
    afterSlideModulesInsertion,
    useSmartPositioning,
    insertLogArgsOverride,
    storeInRecentsKey,
    selectAfterInsert,
    errorCallback
  } = t;
  if (modules.some(e => e.moduleSource !== TemplateType.SLIDES_TEMPLATE || !RX(e))) return;
  let m = e.getState();
  let g = getUserOrAnonymousId(m);
  let f = (e, t) => permissionScopeHandler.user('insert-module', () => Fullscreen.insertModule(e, {
    x: canvasPosition.x,
    y: canvasPosition.y,
    percentOffsetX: percentageOffset.x,
    percentOffsetY: percentageOffset.y
  }, t, insertAsChildOfCanvas, useSmartPositioning ?? !1, selectAfterInsert ?? !0));
  try {
    let t = (await Promise.all(modules.map(upsertSharedModule))).map(e => f(e.localGUID, insertLogArgsOverride));
    modules.forEach(t => {
      e.dispatch(ADD_ASSET_TO_RECENTS({
        storeInRecentsKey,
        item: t,
        userId: g
      }));
    });
    afterSlideModulesInsertion(modules, t);
    fullscreenValue.triggerAction('set-tool-default');
  } catch (e) {
    errorCallback ? errorCallback(e) : reportError(ServiceCategories.SLIDES, e);
  }
});
let insertResponsiveSet = createOptimistThunk(async (e, t) => {
  let {
    item
  } = t;
  let {
    cmsCollectionMappings,
    canvasPosition,
    percentageOffset,
    insertAsChildOfCanvas,
    useSmartPositioning,
    insertLogArgsOverride,
    selectAfterInsert,
    errorCallback
  } = t;
  let h = canvasPosition ? {
    x: canvasPosition.x,
    y: canvasPosition.y,
    percentOffsetX: percentageOffset?.x || 0.5,
    percentOffsetY: percentageOffset?.y || 0.5
  } : null;
  _$$e2(item);
  let m = (t, r) => {
    let i = cmsCollectionMappings?.collectionId ?? null;
    let a = cmsCollectionMappings ? new Map(Object.entries(cmsCollectionMappings.fieldSchemaMappings)) : null;
    let s = permissionScopeHandler.user('insert-responsive-set', () => Fullscreen.insertResponsiveSet(t, h, r, i, a, insertAsChildOfCanvas, useSmartPositioning ?? !1, selectAfterInsert ?? !0));
    qr(e.dispatch);
    fullscreenValue.triggerAction('commit');
    fullscreenValue.triggerAction('set-tool-default');
    return s;
  };
  if (item.subscriptionStatus !== 'LIBRARY') {
    m(item.assetId, insertLogArgsOverride);
  } else {
    try {
      let e = await insertSharedLibraryAsset(item);
      m(e, insertLogArgsOverride);
    } catch (t) {
      e.dispatch(FlashActions.error(t.message));
      errorCallback ? errorCallback(t) : reportError(ServiceCategories.DESIGN_SYSTEMS_EDITOR, t);
    }
  }
});
export async function upsertSharedModule(e) {
  let t = await teamLibraryCache.getCanvas(e);
  let r = permissionScopeHandler.system('upsert-shared-module', () => LibraryPubSub.upsertSharedModule(e.key ?? 'INVALID', e.version ?? 'INVALID', e.library_key, Confirmation.NO, t, SceneIdentifier.ACTIVE_SCENE));
  if (!r || r.fileUpdateRequired || !r.localGUID) throw new Error('An error occurred while inserting this template.');
  return r;
}
function e1(e, t, r) {
  return processArrayInBatches(t, r, {
    batchSize: 5,
    onBatchFinish(t, r) {
      e(updateLibraryProgress({
        delta: r
      }));
    }
  });
}
/**
 * Updates shared state groups by fetching canvases and applying updates in batches.
 * (Original function: updateSharedStateGroups)
 * @param store - The Redux store instance.
 * @param payload - Payload containing stateGroups, usedItemsByKey, instanceIdsToUpdate, updateStartTime, subscribedLibraryKeys, fileSubscribedLibraryKeys.
 */
const updateSharedStateGroups = createOptimistThunk(async (store, payload) => {
  const {
    stateGroups,
    usedItemsByKey,
    instanceIdsToUpdate,
    updateStartTime,
    subscribedLibraryKeys,
    fileSubscribedLibraryKeys
  } = payload;
  const state = store.getState();
  const openFile = state.openFile;
  if (!openFile) {
    return;
  }
  try {
    const canvases = await Promise.all(stateGroups.map(stateGroup => teamLibraryCache.getCanvas(stateGroup)));
    const updatedLibraryKeys = new Set<string>();
    await e1(store.dispatch, stateGroups, (stateGroup, index) => {
      const canvas = canvases[index];
      permissionScopeHandler.user('update-shared-state-group', () => {
        LibraryPubSub.updateSharedStateGroup(stateGroup.key, stateGroup.library_key, stateGroup.newStateKeyToOutdatedItems, instanceIdsToUpdate.map(identity), canvas, updateStartTime);
      });
      if (Object.keys(stateGroup.newStateKeyToOutdatedItems).length > 0) {
        for (const outdatedItems of Object.values(stateGroup.newStateKeyToOutdatedItems)) {
          const {
            localIdsToUpdate,
            oldSubscribedKeysToUpdate
          } = outdatedItems as any;
          if (hasPublishedAsset(state.library, openFile, localIdsToUpdate, oldSubscribedKeysToUpdate, usedItemsByKey, subscribedLibraryKeys)) {
            updatedLibraryKeys.add(stateGroup.library_key);
            break;
          }
        }
      }
    });
    fullscreenValue.triggerAction('commit');
    const stateGroupIds = stateGroups.map(stateGroup => stateGroup.id);
    trackFileEvent('Components Updated', openFile.key, store.getState(), {
      stateGroups: stateGroupIds,
      isSgShimFFEnabled: true
    });
    if (updatedLibraryKeys.size > 0) {
      dispatchAssetSubscriptionUpdates(store, Array.from(updatedLibraryKeys), fileSubscribedLibraryKeys);
    }
  } catch (error) {
    store.dispatch(FlashActions.error('An error occurred while updating the instances of this component.'));
    reportError(ServiceCategories.DESIGN_SYSTEMS_EDITOR, error);
  }
});

/**
 * Updates shared components by fetching canvases and applying updates in batches.
 * (Original function: updateSharedComponents)
 * @param store - The Redux store instance.
 * @param payload - Payload containing components, usedItemsByKey, instanceIdsToUpdate, updateStartTime, subscribedLibraryKeys, fileSubscribedLibraryKeys.
 */
const updateSharedComponents = createOptimistThunk(async (store, payload) => {
  const {
    components,
    usedItemsByKey,
    instanceIdsToUpdate,
    updateStartTime,
    subscribedLibraryKeys,
    fileSubscribedLibraryKeys
  } = payload;
  const state = store.getState();
  const openFile = state.openFile;
  if (!openFile) {
    return;
  }
  try {
    const canvases = await Promise.all(components.map(component => teamLibraryCache.getCanvas(component)));
    const updatedLibraryKeys = new Set<string>();
    await e1(store.dispatch, components, (component, index) => {
      const canvas = canvases[index];
      permissionScopeHandler.user('update-shared-symbol', () => {
        LibraryPubSub.updateSharedSymbol(component.component_key ?? 'INVALID', component.library_key, component.oldSubscribedKeysToUpdate, component.localIdsToUpdate, instanceIdsToUpdate.map(identity), canvas, updateStartTime);
      });
      if (component.localIdsToUpdate.length > 0 || component.oldSubscribedKeysToUpdate.length > 0) {
        if (hasPublishedAsset(state.library, openFile, component.localIdsToUpdate, component.oldSubscribedKeysToUpdate, usedItemsByKey, subscribedLibraryKeys)) {
          updatedLibraryKeys.add(component.library_key);
        }
      }
    });
    fullscreenValue.triggerAction('commit');
    const componentIds = components.map(component => component.id);
    trackFileEvent('Components Updated', openFile.key, store.getState(), {
      components: componentIds,
      isShimFFEnabled: true
    });
    if (updatedLibraryKeys.size > 0) {
      dispatchAssetSubscriptionUpdates(store, Array.from(updatedLibraryKeys), fileSubscribedLibraryKeys);
    }
  } catch (error) {
    store.dispatch(FlashActions.error('An error occurred while updating the instances of this component.'));
    reportError(ServiceCategories.DESIGN_SYSTEMS_EDITOR, error);
  }
});
export function showMissingFontNotification(e) {
  e(VisualBellActions.enqueue({
    type: 'missing-font',
    message: getI18nString('design_systems.missing_font_cant_make_changes'),
    button: {
      text: getI18nString('design_systems.missing_font_learn_more'),
      action: () => {
        customHistory.unsafeRedirect('https://help.figma.com/hc/articles/360039956894-Add-a-font-to-Figma-design', '_blank');
      }
    }
  }));
}
/**
 * Applies a shared style to the selection or specified nodes.
 * Handles loading the style, applying it, and tracking analytics.
 * (Original function: applySharedStyle)
 * @param store - The Redux store instance.
 * @param payload - Payload containing style application options.
 */
const applySharedStyle = createOptimistThunk((store, payload) => {
  const {
    style,
    inheritStyleKeyField,
    fromSearch,
    targetGuids,
    onSuccess,
    onError,
    targetUpsertScene = SceneIdentifier.ACTIVE_SCENE,
    omitFullscreenCommit = false
  } = payload;
  const state = store.getState();
  const selectedFile = getSelectedFile(state);
  const openFile = state.openFile;

  // Early return if no selected file
  if (!selectedFile) {
    onError?.();
    return;
  }
  const isSharedStyle = !compareLibraryItems(style, selectedFile);
  const styleLibraryKey = getLibraryKey(createSubscriptionObject(style, isSharedStyle), openFile);
  const partnerType = getPartnerType(styleLibraryKey);

  /**
   * Handles the success callback after loading the style.
   * Applies the style to nodes or selection and tracks success analytics.
   * (Original inner callback)
   * @param localStyleGuid - The local GUID of the loaded style.
   * @param fontLoadFailed - Whether font loading failed.
   * @param scene - The target scene identifier.
   */
  const handleStyleApplicationSuccess = (localStyleGuid: string, fontLoadFailed: boolean, scene: SceneIdentifier) => {
    if (fontLoadFailed) {
      showMissingFontNotification(store.dispatch);
      onError?.();
      return;
    }
    const applyStyleOperation = () => {
      if (targetGuids) {
        permissionScopeHandler.user('apply-style-to-nodes', () => executeWithDSAAction(StyleVariableOperation.STYLE_ATTACH, CopyPasteType.DIRECT, () => {
          Fullscreen?.applyStyleToNodes(inheritStyleKeyField, localStyleGuid, !omitFullscreenCommit, targetGuids, scene);
        }));
      } else {
        permissionScopeHandler.user('apply-style-to-selection', () => executeWithDSAAction(StyleVariableOperation.STYLE_ATTACH, CopyPasteType.DIRECT, () => {
          Fullscreen?.applyStyleToSelection(inheritStyleKeyField, localStyleGuid, !omitFullscreenCommit);
        }));
      }
    };
    applyStyleOperation();
    trackEventAnalytics('Style Applied', {
      styleType: style.style_type,
      isShared: isSharedStyle,
      viewMode: state.stylePickerListLayout ? 'LIST' : 'GRID',
      fromSearch: !!fromSearch,
      nonInteraction: 0,
      styleKey: style.key,
      consumedVariableIds: VariablesBindings.getConsumedVariableIDs(style.node_id),
      styleLibraryKey,
      consumingFileKey: openFile?.key,
      fileTeamId: openFile?.teamId,
      fileParentOrgId: openFile?.parentOrgId,
      partnerType,
      success: true,
      appleEulaAccepted: !!state.userFlags.apple_eula_accepted,
      targetScene: getSceneIdentifierString(scene)
    }, {
      forwardToDatadog: true
    });
    onSuccess?.();
  };

  /**
   * Handles the error callback after failing to load the style.
   * Tracks error analytics.
   * (Original inner errorCallback)
   */
  const handleStyleApplicationError = () => {
    trackEventAnalytics('Style Applied Error', {
      partnerType,
      targetScene: getSceneIdentifierString(targetUpsertScene)
    }, {
      forwardToDatadog: true
    });
    onError?.();
  };
  store.dispatch(loadSharedStyle({
    style,
    callback: handleStyleApplicationSuccess,
    errorCallback: handleStyleApplicationError,
    targetUpsertScene,
    omitFullscreenCommit
  }));
});
/**
 * Loads a shared style, handling both local and shared styles.
 * (Original function: loadSharedStyle)
 * @param store - The Redux store instance.
 * @param payload - Payload containing style, callback, bufferCallback, errorCallback, targetUpsertScene, omitFullscreenCommit.
 */
const loadSharedStyle = createOptimistThunk((store, payload) => {
  const state = store.getState();
  const {
    style,
    targetUpsertScene = SceneIdentifier.ACTIVE_SCENE
  } = payload;
  const selectedFile = getSelectedFile(state);
  if (!selectedFile) return;
  const isShared = !compareLibraryItems(style, selectedFile);
  const isGridStyleAndNotShown = style.style_type === 'GRID' && !AppStateTsApi.editorPreferences().showFrameGrids.getCopy();
  if (isShared) {
    const loadHandler = async () => {
      try {
        const canvas = await teamLibraryCache.getCanvas(style);
        payload.bufferCallback?.(canvas);
        const result = permissionScopeHandler.system('ensure-style-is-loaded', () => LibraryPubSub.getOrCreateSubscribedStyleNodeId(style.key, style.content_hash ?? 'INVALID', style.library_key, canvas, targetUpsertScene));
        if (result?.fileUpdateRequired) return;
        if (!payload.omitFullscreenCommit) {
          fullscreenValue.triggerAction('commit');
        }
        if (isGridStyleAndNotShown) {
          c6();
          AppStateTsApi.editorPreferences().showFrameGrids.set(true);
        }
        let fontLoadFailed = false;
        if (style.style_type === 'TEXT' && result && result.localGUID) {
          const node = targetUpsertScene === SceneIdentifier.LINTER_SCENE ? new ReduxSceneGraph(FileSourceType.LINTER).get(result.localGUID) : state.mirror.sceneGraph.get(result.localGUID);
          const fontName = node?.fontName;
          if (fontName) {
            await waitForFontLoaded(fontName.family, fontName.style).catch(() => {
              console.error(`Text style font did not load: ${fontName.family} ${fontName.style}`);
              fontLoadFailed = true;
            });
          }
        }
        payload.callback?.(result.localGUID, fontLoadFailed, targetUpsertScene);
      } catch (error) {
        store.dispatch(FlashActions.error('An error occurred while applying the style to the selection.'));
        reportError(ServiceCategories.DESIGN_SYSTEMS_EDITOR, error);
        payload.errorCallback?.();
      }
    };
    store.dispatch(setupPlaybackHandler({
      assetLibraryKey: style.library_key,
      onInsertAsset: loadHandler,
      source: PluginAction.LOAD_STYLE
    }));
  } else {
    if (isGridStyleAndNotShown) {
      c6();
      AppStateTsApi.editorPreferences().showFrameGrids.set(true);
    }
    payload.callback?.(style.node_id, false, targetUpsertScene);
    payload.bufferCallback?.(undefined);
  }
});

/**
 * Updates shared styles by fetching canvases and applying updates in batches.
 * (Original function: updateSharedStyle)
 * @param store - The Redux store instance.
 * @param payload - Payload containing styles, updateStartTime, subscribedLibraryKeys, fileSubscribedLibraryKeys.
 */
const updateSharedStyle = createOptimistThunk(async (store, payload) => {
  const {
    styles,
    updateStartTime,
    subscribedLibraryKeys,
    fileSubscribedLibraryKeys
  } = payload;
  const openFile = store.getState().openFile;
  if (!openFile) return;
  try {
    const canvases = await Promise.all(styles.map(style => teamLibraryCache.getCanvas(style)));
    const updatedLibraryKeys = new Set<string>();
    const state = store.getState();
    await e1(store.dispatch, styles, (style, index) => {
      const canvas = canvases[index];
      permissionScopeHandler.user('update-shared-style', () => {
        LibraryPubSub.updateSharedStyle(style.key, style.library_key, style.content_hash ?? VariableStyleId.INVALID, style.oldSubscribedKeysToUpdate, style.localIdsToUpdate, canvas, updateStartTime);
      });
      if (hasPublishedAsset(state.library, openFile, style.localIdsToUpdate, style.oldSubscribedKeysToUpdate, state.library.used__LIVEGRAPH.styles, subscribedLibraryKeys) && !updatedLibraryKeys.has(style.library_key)) {
        updatedLibraryKeys.add(style.library_key);
      }
    });
    fullscreenValue.triggerAction('commit');
    const styleIds = styles.map(style => style.id);
    trackFileEvent('Styles Updated', state.openFile?.key, store.getState(), {
      styles: styleIds
    });
    if (updatedLibraryKeys.size > 0) {
      dispatchAssetSubscriptionUpdates(store, Array.from(updatedLibraryKeys), fileSubscribedLibraryKeys);
    }
  } catch (error) {
    store.dispatch(FlashActions.error('An error occurred while updating this style.'));
    reportError(ServiceCategories.DESIGN_SYSTEMS_EDITOR, error);
  }
});

/**
 * Updates selected shared style consumers by fetching canvas and applying updates.
 * (Original function: updateSelectedSharedStyleConsumers)
 * @param store - The Redux store instance.
 * @param payload - Payload containing styleUpdateInfo, oldStyleGUID, consumerGUIDsToUpdate.
 */
const updateSelectedSharedStyleConsumers = createOptimistThunk((store, payload) => {
  const updateStartTime = LibraryPubSub.getTimestampForLibraryUpdateStart();
  const {
    styleUpdateInfo,
    oldStyleGUID,
    consumerGUIDsToUpdate
  } = payload;
  const {
    updateAsset
  } = styleUpdateInfo;
  teamLibraryCache.getCanvas(updateAsset).then(canvas => {
    const state = store.getState();
    const {
      content_hash
    } = updateAsset;
    if (!oldStyleGUID) throw new Error('guid to update can not be empty');
    if (!content_hash) throw new Error('content_hash not specified on style');
    const result = permissionScopeHandler.user('update-selected-shared-style-consumers', () => LibraryPubSub.updateSelectedSharedStyleConsumers(updateAsset.key, updateAsset.library_key, content_hash, updateAsset.oldSubscribedKeysToUpdate, updateAsset.localIdsToUpdate, consumerGUIDsToUpdate, oldStyleGUID, canvas, updateStartTime));
    fullscreenValue.triggerAction('commit');
    if (!result) throw new Error('unable to update');
    trackFileEvent('Styles Updated', state.openFile?.key, store.getState(), {
      styles: [updateAsset.id]
    });
  }).catch(error => {
    store.dispatch(FlashActions.error('An error occurred while updating this style.'));
    reportError(ServiceCategories.DESIGN_SYSTEMS_EDITOR, error);
  });
});

// Update exports to match refactored function names
// export const nh = loadSharedStyle;
// export const t5 = updateSharedStyles;
// export const Qn = updateSelectedSharedStyleConsumers;
/**
 * Updates shared variable sets by fetching canvases and applying updates in batches.
 * (Original function: updateSharedVariantSet)
 * @param store - The Redux store instance.
 * @param payload - Payload containing variableSets and updateStartTime.
 */
const updateSharedVariantSet = createOptimistThunk(async (store, payload) => {
  const {
    variableSets,
    updateStartTime
  } = payload;
  const openFile = store.getState().openFile;
  if (!openFile) {
    return;
  }
  try {
    const canvases = await Promise.all(variableSets.map(set => teamLibraryCache.getCanvas(set)));
    await e1(store.dispatch, variableSets, (set, index) => {
      const canvas = canvases[index];
      permissionScopeHandler.user('update-shared-variable-set', () => LibraryPubSub.updateSharedVariableSet(set.node_id, set.libraryVariableIdsForUpdate, canvas, updateStartTime));
    });
    fullscreenValue.triggerAction('commit');
  } catch (error) {
    store.dispatch(FlashActions.error('An error occurred while updating this variable collection'));
    reportError(ServiceCategories.DESIGN_SYSTEMS_EDITOR, error);
  }
});

/**
 * Updates shared library assets by fetching canvases and applying updates in batches.
 * (Original function: updateSharedLibraryAsset)
 * @param store - The Redux store instance.
 * @param payload - Payload containing assets and updateStartTime.
 */
const updateSharedLibraryAsset = createOptimistThunk(async (store, payload) => {
  const {
    assets,
    updateStartTime
  } = payload;
  try {
    const canvases = await Promise.all(assets.map(asset => teamLibraryCache.getCanvas({
      canvas_url: asset.canvasUrl
    })));
    await e1(store.dispatch, assets, (asset, index) => {
      const canvas = canvases[index];
      if (!canvas) {
        throw new Error('Missing buffer in updateSharedLibraryAssets');
      }
      permissionScopeHandler.user('update-shared-library-asset', () => LibraryPubSub.updateSharedLibraryAsset(convertStringToFacetType(asset.type), asset.assetId, asset.sourceLibraryKey, canvas, updateStartTime));
    });
    fullscreenValue.triggerAction('commit');
  } catch (error) {
    store.dispatch(FlashActions.error('An error occurred while updating this asset'));
    reportError(ServiceCategories.DESIGN_SYSTEMS_EDITOR, error);
  }
});

/**
 * Automatically updates shared library assets by fetching canvases and applying updates in batches.
 * (Original function: autoUpdateSharedLibraryAsset)
 * @param store - The Redux store instance.
 * @param payload - Payload containing assets and updateStartTime.
 */
const autoUpdateSharedLibraryAsset = createOptimistThunk(async (store, payload) => {
  const {
    assets,
    updateStartTime
  } = payload;
  try {
    const canvases = await Promise.all(assets.map(asset => teamLibraryCache.getCanvas({
      canvas_url: asset.canvasUrl
    })));
    await processArrayInBatches(assets, (asset, index) => {
      const canvas = canvases[index];
      if (!canvas) {
        throw new Error('Missing buffer in autoUpdateSharedLibraryAssets');
      }
      executeInIgnoreUndoRedoScope(() => {
        permissionScopeHandler.system('auto-update-shared-library-asset', () => LibraryPubSub.updateSharedLibraryAsset(convertStringToFacetType(asset.type), asset.assetId, asset.sourceLibraryKey, canvas, updateStartTime));
      });
    }, {
      batchSize: 5
    });
  } catch (error) {
    reportError(ServiceCategories.DESIGN_SYSTEMS_EDITOR, error);
  }
});

/**
 * Upserts a shared variable and returns its buffer if successful.
 * (Original function: upsertSharedVariable)
 * @param variable - The variable to upsert.
 * @returns Object containing buffer if upsert succeeds.
 */
export async function upsertSharedVariable(variable: any): Promise<{
  buffer: any;
} | undefined> {
  const buffer = await teamLibraryCache.getCanvas(variable);
  const response = permissionScopeHandler.system('upsert-shared-variable', () => LibraryPubSub.upsertSharedVariable(variable.node_id, Confirmation.NO, buffer));
  if (!response.fileUpdateRequired) {
    return {
      buffer
    };
  }
}

/**
 * Loads a shared variable, handling library subscriptions and callbacks.
 * (Original function: loadSharedVariable)
 * @param store - The Redux store instance.
 * @param payload - Payload containing item, callback, bufferCallback, errorCallback.
 */
const loadSharedVariable = createOptimistThunk((store, payload) => {
  const {
    item,
    callback,
    bufferCallback,
    errorCallback
  } = payload;
  const selectedFile = getSelectedFile(store.getState());
  if (!selectedFile) {
    errorCallback?.(new Error('editing file not found'));
    return;
  }
  if (item.subscriptionStatus === 'LIBRARY') {
    const loadHandler = async () => {
      try {
        const result = await upsertSharedVariable(item);
        if (result) {
          callback?.(item.node_id);
          bufferCallback?.(result.buffer);
        }
      } catch (error) {
        store.dispatch(FlashActions.error('An error occurred while retrieving the variable.'));
        reportError(ServiceCategories.DESIGN_SYSTEMS_EDITOR, error);
        analyticsEventManager.trackDefinedEvent('variables.variable_load.error', {
          partnerType: getPartnerType(item.library_key)
        });
        errorCallback?.(error);
      }
    };
    store.dispatch(setupPlaybackHandler({
      assetLibraryKey: item.library_key,
      onInsertAsset: loadHandler,
      source: PluginAction.LOAD_VARIABLE
    }));
  } else {
    callback?.(item.node_id);
  }
});

// Update exports to match refactored function names
// export const _K = updateSharedVariableSets
// export const f$ = updateSharedLibraryAssets
// export const yA = autoUpdateSharedLibraryAssets
// export const Yi = loadSharedVariable
/**
 * Optimist thunk to load a shared variable.
 * (Original function: loadSharedVariableThunk)
 */
const loadSharedVariableThunk = createOptimistThunk((store, payload) => new Promise((resolve, reject) => {
  store.dispatch(loadSharedVariable({
    item: payload,
    callback: resolve,
    errorCallback: reject
  }));
}));

/**
 * Upserts an entire variable set and returns its buffer.
 * (Original function: upsertEntireVariableSet)
 * @param variableSet - The variable set to upsert.
 * @returns Object containing buffer if upsert succeeds.
 */
export async function upsertEntireVariableSet(variableSet: any): Promise<{
  buffer: any;
} | undefined> {
  const buffer = await teamLibraryCache.getCanvas(variableSet);
  const response = permissionScopeHandler.system('upsert-entire-variable-set', () => {
    if (!LibraryPubSub) {
      logError(ServiceCategories.DESIGN_SYSTEMS_EDITOR, 'LibraryPubSub binding is not available, can\'t upsert variable set');
      return;
    }
    const variableSetId = VariableSetIdCompatHandler.fromString(variableSet.node_id);
    return variableSet.isExtension && variableSetId ? LibraryPubSub.upsertSharedVariableSetExtension(variableSetId, variableSet.library_key, Confirmation.NO, buffer, SceneIdentifier.ACTIVE_SCENE) : LibraryPubSub.upsertSharedRootVariableSet(variableSet.node_id, variableSet.library_key, Confirmation.NO, Confirmation.YES, buffer);
  });
  if (response && !response.fileUpdateRequired) {
    return {
      buffer
    };
  }
}

/**
 * Upserts a shared variable set and returns its buffer.
 * (Original function: upsertSharedVariableSet)
 * @param variableSet - The variable set to upsert.
 * @returns Object containing buffer if upsert succeeds.
 */
async function upsertSharedVariableSet(variableSet: any): Promise<{
  buffer: any;
} | undefined> {
  const buffer = await teamLibraryCache.getCanvas(variableSet);
  const response = permissionScopeHandler.system('upsert-shared-variable-set', () => {
    if (!LibraryPubSub) {
      logError(ServiceCategories.DESIGN_SYSTEMS_EDITOR, 'LibraryPubSub binding is not available, can\'t upsert variable set');
      return;
    }
    const variableSetId = VariableSetIdCompatHandler.fromString(variableSet.node_id);
    return variableSet.isExtension && variableSetId ? LibraryPubSub.upsertSharedVariableSetExtension(variableSetId, variableSet.library_key, Confirmation.NO, buffer, SceneIdentifier.ACTIVE_SCENE) : LibraryPubSub.upsertSharedRootVariableSet(variableSet.node_id, variableSet.library_key, Confirmation.NO, Confirmation.NO, buffer);
  });
  if (response && !response.fileUpdateRequired) {
    return {
      buffer
    };
  }
}

/**
 * Optimist thunk to retrieve a variable collection.
 * (Original function: retrieveVariableCollection)
 */
const retrieveVariableCollection = createOptimistThunk((store, payload) => {
  const {
    item,
    callback,
    bufferCallback,
    errorCallback
  } = payload;
  if (getSelectedFile(store.getState())) {
    if (item.subscriptionStatus === 'LIBRARY') {
      const upsertHandler = async () => {
        try {
          const result = await upsertSharedVariableSet(item);
          if (result) {
            callback?.(item.node_id);
            bufferCallback?.(result.buffer);
          }
        } catch (err) {
          store.dispatch(FlashActions.error('An error occurred while retrieving the variable collection.'));
          reportError(ServiceCategories.DESIGN_SYSTEMS_EDITOR, err);
          errorCallback?.();
        }
      };
      store.dispatch(setupPlaybackHandler({
        assetLibraryKey: item.library_key,
        onInsertAsset: upsertHandler,
        source: PluginAction.LOAD_VARIABLE_SET
      }));
    } else {
      callback?.(item.node_id);
    }
  }
});

// Export refactored names for imports/exports
// export const Oe = loadSharedVariableThunk
// export const Yf = upsertEntireVariableSet
// export const Wo = retrieveVariableCollectionThunk

const deleteLoadingStatesForFile = createOptimistThunk((store, payload) => {
  store.dispatch(loadingStateDelete({
    key: generateRetrievingSubscribedComponentsKey(payload.openFileKey)
  }));
  store.dispatch(loadingStateDelete({
    key: generateDefaultLibrariesCacheKey(payload.openFileKey)
  }));
});

/**
 * Internal sets for tracking processed component and state group keys.
 * (Original variables: td, tc)
 */
let processedComponentKeys = new Set<string>();
let processedStateGroupKeys = new Set<string>();

/**
 * Resets the internal sets for processed keys.
 * (Original function: resetProcessedKeys)
 */
export function resetProcessedKeys(): void {
  processedComponentKeys = new Set();
  processedStateGroupKeys = new Set();
}

/**
 * Optimist thunk to fetch and update state groups and symbols.
 * (Original function: fetchAndUpdateStateGroupsThunk)
 */
const fetchAndUpdateStateGroupsThunk = createOptimistThunk(async store => {
  const state = store.getState();
  if (state.user) {
    await externalPromise;
    await fetchAndUpdateStateGroups(subscribedSymbolsUniqueKeysFromLoadedPagesSelector(state), subscribedStateGroupsUniqueKeysFromLoadedPagesSelector(state), store);
  }
});

/**
 * Fetches and updates state groups and symbols, dispatches updates to the store.
 * (Original function: fetchAndUpdateStateGroups)
 */
async function fetchAndUpdateStateGroups(symbolKeys: string[], stateGroupKeys: string[], store: any, options?: any) {
  if (symbolKeys.length === 0 && stateGroupKeys.length === 0) {
    atomStoreManager.set(loadingStateGroupsAtom, 'loaded');
    return;
  }
  const openFile = store.getState().openFile;
  if (!openFile) {
    atomStoreManager.set(loadingStateGroupsAtom, 'loaded');
    return;
  }
  atomStoreManager.set(loadingStateGroupsAtom, 'loading');
  const usedComponentsStateGroups = options ?? getUsedComponentsStateGroupsAsync(store);
  const loadingKey = usedComponentsStateGroups.loadingKey;
  if (isLoading(store.getState().loadingState, loadingKey)) {
    await usedComponentsStateGroups.promise;
  }
  store.dispatch(loadingStatePutLoading({
    key: loadingKey
  }));
  if (openFile.editorType === 'whiteboard') {
    await usedLibrariesPromise;
  }
  const state = store.getState();
  let missingSymbolKeys: string[] = [];
  if (symbolKeys.length > 0) {
    const publishedKeys = new Set([...getAllAssets(state.library.publishedByLibraryKey.components).map(e => e.component_key), ...flattenAssetsArray(state.library.defaultPublished.componentsByLibraryKey).map(e => e.component_key)]);
    missingSymbolKeys = symbolKeys.filter(key => !publishedKeys.has(key) && !processedComponentKeys.has(key));
  }
  let missingStateGroupKeys: string[] = [];
  if (stateGroupKeys.length > 0) {
    const publishedStateGroupKeys = new Set([...getAllAssets(state.library.publishedByLibraryKey.stateGroups).map(e => e.key), ...flattenAssetsArray(state.library.defaultPublished.stateGroupsByLibraryKey).map(e => e.key)]);
    missingStateGroupKeys = stateGroupKeys.filter(key => !publishedStateGroupKeys.has(key) && !processedStateGroupKeys.has(key));
  }
  try {
    if (missingSymbolKeys.length > 0 || missingStateGroupKeys.length > 0) {
      const response = await XHR.post('/api/design_systems/components_state_groups', {
        component_keys: missingSymbolKeys,
        state_group_keys: missingStateGroupKeys,
        org_id: openFile.parentOrgId
      });
      missingSymbolKeys.forEach(key => processedComponentKeys.add(key));
      missingStateGroupKeys.forEach(key => processedStateGroupKeys.add(key));
      const {
        components,
        state_groups,
        files,
        move_remappings
      } = response.data.meta;
      store.dispatch(batchPutFileAction({
        files,
        subscribeToRealtime: true
      }));
      store.dispatch(putMoveLibraryItemKeyMappings({
        subscribedOldKeyToNewKey: move_remappings,
        localOldGuidToNewKey: {}
      }));
      const atomStore = atomStoreManager.get(filesByLibraryKeyAtom);
      processAndDispatchLibraryItems(components, PrimaryWorkflowEnum.COMPONENT, atomStore, store.dispatch);
      processAndDispatchLibraryItems(state_groups, PrimaryWorkflowEnum.STATE_GROUP, atomStore, store.dispatch);
    }
    options?.callbackForComponent?.(true);
  } catch {
    options?.callbackForComponent?.(false);
  }
  options?.resetPromise?.();
  store.dispatch(loadingStateDelete({
    key: loadingKey
  }));
  options?.callback?.();
  atomStoreManager.set(loadingStateGroupsAtom, 'loaded');
}

/**
 * Internal cache for component keys and promises.
 * (Original variables: th, tm)
 */
let cachedComponentKey: string | null = null;
let cachedComponentPromise: Promise<any> | null = null;

/**
 * Atom for tracking loading state of state groups.
 * (Original variable: loadingStateGroupsAtom)
 */
const loadingStateGroupsAtom = atom('loading');

/**
 * Atom for tracking loading state of published components.
 * (Original variable: loadingPublishedComponentsAtom)
 */
const loadingPublishedComponentsAtom = atom('loading');
export async function loadComponentV2ByKey(store: any, componentKey: string, source?: string): Promise<{
  component: any;
  parentStateGroup: any;
}> {
  try {
    const response = await librariesAPI.getLibraryComponentV2({
      componentKey,
      source
    });
    const file = response.data.meta.file;
    if (file) {
      store.dispatch(filePutAction({
        file
      }));
    }
    const component = response.data.meta.component || null;
    const parentStateGroup = response.data.meta.component_set || null;
    const atomStore = atomStoreManager.get(filesByLibraryKeyAtom);
    component && (component.team_id = atomStore[component.library_key]?.team_id);
    parentStateGroup && (parentStateGroup.team_id = atomStore[parentStateGroup.library_key]?.team_id);
    if (file) {
      const itemsById: Record<string, any> = {};
      if (component) itemsById[component.node_id] = component;
      response.data.meta.state_components.forEach((stateComponent: any) => {
        itemsById[stateComponent.node_id] = stateComponent;
      });
      store.dispatch(vP({
        itemsById,
        fileKey: file.key,
        libraryKey: file.library_key,
        teamId: file.team_id,
        type: PrimaryWorkflowEnum.COMPONENT
      }));
      if (parentStateGroup) {
        store.dispatch(vP({
          itemsById: {
            [parentStateGroup.key]: parentStateGroup
          },
          fileKey: file.key,
          libraryKey: file.library_key,
          teamId: file.team_id,
          type: PrimaryWorkflowEnum.STATE_GROUP
        }));
      }
      if (component) teamLibraryCache.getCanvas(component as any);
    }
    return {
      component,
      parentStateGroup
    };
  } catch (error: any) {
    if (error?.status === 403) {
      const err = new Error('Permissions error for /api/design_systems/library/component_v2/key');
      sendAssetByKeyPermissionsErrorMetric('component');
      console.error(err);
    }
    return {
      component: null,
      parentStateGroup: null
    };
  }
}

/**
 * Optimist thunk to cache component key and promise for loading component.
 * (Original function: cacheComponentKeyThunk)
 */
const cacheComponentKeyThunk = createOptimistThunk((store, payload) => {
  cachedComponentKey = payload.componentKey;
  cachedComponentPromise = loadComponentV2ByKey(store, payload.componentKey, payload.callsite);
});

// Export refactored names for imports/exports
// export const Kd = deleteLoadingStatesForFile
// export const e$ = resetProcessedKeys
// export const tg = fetchAndUpdateStateGroupsThunk
// export const tL = fetchAndUpdateStateGroups
// export const Xh = loadingStateGroupsAtom
// export const M7 = loadingPublishedComponentsAtom
// export const u7 = loadComponentV2ByKey
// export const a9 = cacheComponentKeyThunk
let cachedStateGroupKey = null;
let cachedStateGroupPromise = null;
export async function loadStateGroupByKey(e, t) {
  try {
    let r = (await librariesAPI.getLibraryStateGroup({
      stateGroupKey: t
    })).data.meta;
    let n = {
      [r.node_id]: r
    };
    let i = atomStoreManager.get(filesByLibraryKeyAtom)[r.library_key];
    if (!i) return r;
    r.team_id = i.team_id;
    e.dispatch(vP({
      itemsById: n,
      fileKey: i.key,
      libraryKey: i.library_key,
      teamId: i.team_id,
      type: PrimaryWorkflowEnum.STATE_GROUP
    }));
    teamLibraryCache.getCanvas(r);
    return r;
  } catch (e) {
    if (e?.status === 403) {
      let e = new Error('Permissions error for /api/design_systems/library/state_group/key');
      sendAssetByKeyPermissionsErrorMetric('state');
      console.error(e);
    }
    return null;
  }
}
export async function loadStyleByKey(e, t) {
  try {
    let {
      style,
      file
    } = (await librariesAPI.getLibraryStyleByKey({
      styleKey: t
    })).data.meta;
    file && e.dispatch(filePutAction({
      file
    }));
    teamLibraryCache.getCanvas(style as any);
    return style;
  } catch (e) {
    if (e?.status === 403) {
      let e = new Error('Permissions error for /api/design_systems/library/styles/key');
      sendAssetByKeyPermissionsErrorMetric('style');
      console.error(e);
    }
    return null;
  }
}
export let preloadStateGroup = createOptimistThunk((e, t) => {
  cachedStateGroupKey = t.stateGroupKey;
  cachedStateGroupPromise = loadStateGroupByKey(e, t.stateGroupKey);
});
/**
 * Loads published components for the current open file.
 * (Original function: loadPublishedComponents)
 * @param store - The Redux store instance.
 */
export async function loadPublishedComponents(store: any): Promise<void> {
  const {
    loadingState
  } = store.getState();
  const openFile = store.getState().openFile;
  if (!openFile) {
    atomStoreManager.set(loadingPublishedComponentsAtom, 'loaded');
    return;
  }
  const cacheKey = generatePublishedComponentsCacheKey(openFile.libraryKey);
  if (!isNullOrFailure(loadingState, cacheKey)) {
    atomStoreManager.set(loadingPublishedComponentsAtom, 'loaded');
    return;
  }
  atomStoreManager.set(loadingPublishedComponentsAtom, 'loading');
  const request = librariesAPI.getLibraryPublishedAndMovedComponents({
    openFileKey: openFile.key
  });
  setupLoadingStateHandler(request, {
    dispatch: store.dispatch
  }, cacheKey);
  deletedLoadingStates.add(cacheKey);
  try {
    const response = await request;
    store.dispatch(batchPutFileAction({
      files: response.data.meta.files,
      subscribeToRealtime: true
    }));
    addTrackedState(openFile.key);
    addTrackedState(openFile.libraryKey);
    const atomStore = atomStoreManager.get(filesByLibraryKeyAtom);
    processAndDispatchLibraryItems(response.data.meta.state_groups, PrimaryWorkflowEnum.STATE_GROUP, atomStore, store.dispatch);
    processAndDispatchLibraryItems(response.data.meta.components, PrimaryWorkflowEnum.COMPONENT, atomStore, store.dispatch);
    store.dispatch(putMoveLibraryItemKeyMappings({
      subscribedOldKeyToNewKey: {},
      localOldGuidToNewKey: response.data.meta.move_remappings
    }));
  } catch {
    console.warn('Failed to get published and moved components for editing file');
  }
  atomStoreManager.set(loadingPublishedComponentsAtom, 'loaded');
  resolveUsedComponents();
}

/**
 * Query for fetching organization migration status.
 * (Original function: getOrgMigrationStatus)
 */
const getOrgMigrationStatus = liveStoreInstance.Query({
  fetch: async (orgId: string) => (await DSAApiServiceInstance.getOrgMigrationStatus({
    orgId
  })).data.meta,
  enabled: (orgId: string) => !!orgId
});

/**
 * Query for fetching library statistics.
 * (Original function: getLibraryStats)
 */
const getLibraryStats = liveStoreInstance.Query({
  fetch: async (orgId: string) => await fetchLibraryStats(debugState.dispatch, orgId),
  key: 'libraryStats'
});

/**
 * Fetches library statistics for a given organization.
 * (Original function: fetchLibraryStats)
 * @param dispatch - The dispatch function.
 * @param orgId - The organization ID.
 * @returns Library statistics object.
 */
async function fetchLibraryStats(dispatch: any, orgId: string): Promise<any> {
  const request = DSAApiServiceInstance.getLibraries({
    orgId,
    fv: Ob
  });
  const loadingKey = `LIBRARY${orgId ? `_${orgId}` : ''}_STATS`;
  setupLoadingStateHandler(request, {
    dispatch
  }, loadingKey);
  try {
    const response = await request;
    const libraries = response?.data?.meta || [];
    let totalComponents = 0;
    let totalStateGroups = 0;
    let totalStyles = 0;
    let totalVariableCollections = 0;
    let totalVariables = 0;
    let totalModuleAssets = 0;
    let teamsWithLibraries = 0;
    let totalLibraries = 0;
    const files: any[] = [];
    const fileObjects: any[] = [];
    const teamSet = new Set<string>();
    const libraryThumbnailByLibraryKey: Record<string, string> = {};
    for (const library of libraries) {
      if (library.num_components !== 0 || library.num_styles !== 0 || library.num_variable_collections !== 0 || library.num_variables !== 0 || library.num_module_assets !== 0) {
        if (library.team_id && !teamSet.has(library.team_id)) {
          teamSet.add(library.team_id);
          teamsWithLibraries++;
        }
        files.push(library);
        fileObjects.push(library.file);
        if (library.thumbnail_url) {
          libraryThumbnailByLibraryKey[library.library_key] = library.thumbnail_url;
        }
        totalComponents += library.num_components;
        totalStyles += library.num_styles;
        totalVariableCollections += library.num_variable_collections;
        totalVariables += library.num_variables;
        library.num_state_groups = 0;
        totalStateGroups += library.num_state_groups;
        totalModuleAssets += library.num_module_assets;
        totalLibraries++;
      }
    }
    if (fileObjects.length > 0) {
      dispatch(batchPutFileAction({
        files: fileObjects,
        subscribeToRealtime: false
      }));
    }
    return {
      totalComponents,
      totalStateGroups,
      totalStyles,
      totalVariableCollections,
      totalVariables,
      totalModuleAssets,
      teamsWithLibraries,
      totalLibraries,
      files,
      libraryThumbnailByLibraryKey
    };
  } catch {
    return initialLibraryStats;
  }
}

/**
 * Query for fetching library information.
 * (Original function: getLibraryInfo)
 */
const getLibraryInfo = liveStoreInstance.Query({
  fetch: (params: any) => fetchLibraryInfo(params),
  key: 'libraryInfo'
});

/**
 * Query for fetching library information version 2.
 * (Original function: getLibraryInfoV2)
 */
const getLibraryInfoV2 = liveStoreInstance.Query({
  fetch: async (params: any) => ((await librariesAPI.getLibrariesV2(params)) as any).data.meta ?? [],
  key: 'libraryInfoV2'
});

/**
 * React hook for using library information.
 * (Original function: useLibraryInfo)
 * @param params - Parameters for the query.
 * @param options - Additional options.
 * @returns The query result.
 */
export function useLibraryInfo(params: any, options: any = {}): any {
  const queryResult = setupResourceAtomHandler(getLibraryInfo(params), options);
  const dispatch = useDispatch();
  const [data] = queryResult;
  const setAtom = useSetAtom(setLibrariesAtom);
  handleStatusChangeEffect(data, (result: any) => {
    const files = result.files.map((item: any) => item.file);
    if (files.length > 0) {
      dispatch(batchPutFileAction({
        files,
        subscribeToRealtime: false
      }));
    }
    setAtom(result.files.map((item: any) => mapLibraryAttributes(item)));
  });
  return queryResult;
}

/**
 * Fetches library information based on provided parameters.
 * (Original function: fetchLibraryInfo)
 * @param params - Parameters including currentOrgId, excludeDrafts, etc.
 * @returns Library information object.
 */
async function fetchLibraryInfo(params: {
  currentOrgId: string;
  excludeDrafts?: boolean;
  subscriptionFileKey?: string;
  includeThumbnails?: boolean;
  includeSharingGroupInfo?: boolean;
}): Promise<any> {
  const {
    currentOrgId,
    excludeDrafts,
    subscriptionFileKey,
    includeThumbnails,
    includeSharingGroupInfo
  } = params;
  const request = librariesAPI.getLibraries({
    orgId: currentOrgId,
    subscriptionFileKey: subscriptionFileKey || undefined,
    includeThumbnails,
    includeSharingGroupInfo
  });
  try {
    const response: any = await request;
    const libraries = response?.data?.meta || [];
    let totalComponents = 0;
    let totalStateGroups = 0;
    let totalStyles = 0;
    let totalVariableCollections = 0;
    let totalVariables = 0;
    let totalModuleAssets = 0;
    let teamsWithLibraries = 0;
    let totalLibraries = 0;
    const files: any[] = [];
    const fileObjects: any[] = [];
    const teamSet = new Set<string>();
    const libraryThumbnailByLibraryKey: Record<string, string> = {};
    for (const library of libraries) {
      library.num_state_groups = 0;
      if ((library.num_components !== 0 || library.num_styles !== 0 || library.num_variable_collections !== 0 || library.num_variables !== 0 || library.num_module_assets !== 0) && (!excludeDrafts || library.team_id)) {
        if (library.team_id && !teamSet.has(library.team_id)) {
          teamSet.add(library.team_id);
          teamsWithLibraries++;
        }
        files.push(includeThumbnails ? {
          ...library,
          thumbnail_url: library.file.thumbnail_url
        } : library);
        fileObjects.push(library.file);
        if (library.thumbnail_url) {
          libraryThumbnailByLibraryKey[library.library_key] = library.thumbnail_url;
        }
        totalComponents += library.num_components;
        totalStyles += library.num_styles;
        totalVariableCollections += library.num_variable_collections;
        totalVariables += library.num_variables;
        totalStateGroups += library.num_state_groups;
        totalModuleAssets += library.num_module_assets;
        totalLibraries++;
      }
    }
    return {
      totalComponents,
      totalStateGroups,
      totalStyles,
      totalVariableCollections,
      totalVariables,
      totalModuleAssets,
      teamsWithLibraries,
      totalLibraries,
      files,
      libraryThumbnailByLibraryKey
    };
  } catch {
    return {
      ...initialLibraryStats
    };
  }
}

// Update exports to match refactored function names
// export const fv = getOrgMigrationStatus
// export const Z = getLibraryStats
// export const Yb = getLibraryInfo
// export const wV = getLibraryInfoV2
// export const Tn = useLibraryInfo
// export const xZ = loadPublishedComponents
/**
 * Returns the normalized library key for a given item.
 * @param item - The item containing a libraryKey property.
 * @returns The normalized library key.
 * (Original function: tP)
 */
function getNormalizedLibraryKey(item: {
  libraryKey?: string;
}): string {
  return item.libraryKey || '';
}

/**
 * Dispatches subscription updates for libraries based on current and previous subscription states.
 * @param store - Redux store or dispatch context.
 * @param current - Array of current subscription items.
 * @param previous - Array of previous subscription items.
 * (Original function: tD)
 */
function dispatchLibrarySubscriptionUpdates(store: any, current?: Array<any>, previous?: Array<any>): void {
  if (!current || !previous) return;
  const filteredCurrent = current.filter(e => e.library || e.communityLibrary);
  const filteredPrevious = previous.filter(e => e.library || e.communityLibrary);
  const currentByKey = keyBy(filteredCurrent, getNormalizedLibraryKey);
  for (const prevItem of filteredPrevious) {
    const key = getNormalizedLibraryKey(prevItem);
    const currItem = currentByKey[key];
    if (!currItem || currItem.isSubscribed !== prevItem.isSubscribed || currItem.figJamSubscribed !== prevItem.figJamSubscribed || currItem.slidesSubscribed !== prevItem.slidesSubscribed) {
      store.dispatch(F$({
        libraryKey: key,
        subscriptions: {
          design: !!prevItem.isSubscribed,
          figjam: !!prevItem.figJamSubscribed,
          slides: !!prevItem.slidesSubscribed,
          buzz: false
        }
      }));
    }
  }
}

/**
 * Updates library subscriptions by mapping and comparing current and previous states.
 * @param store - Redux store or dispatch context.
 * @param current - Array of current subscription items.
 * @param previous - Array of previous subscription items.
 * (Original function: updateLibrarySubscriptions)
 */
export function updateLibrarySubscriptions(store: any, current?: Array<any>, previous?: Array<any>): void {
  dispatchLibrarySubscriptionUpdates(store, current?.map(cloneSubscriptionItem), previous?.map(cloneSubscriptionItem));
}

/**
 * React hook to synchronize file-level library subscriptions.
 * (Original function: useFileLibrarySubscriptions)
 */
export function useFileLibrarySubscriptions(fileKey: string): void {
  const store = useStore();
  const subscription = useSubscription(LibraryFileSubscriptions, {
    fileKey
  }, {
    enabled: !!fileKey
  });
  const {
    data
  } = useMemo(() => subscription.transform(e => e?.file?.libraryFileSubscriptionOverrides ?? []), [subscription]);
  const latestData = useLatestRef(data);
  useEffect(() => {
    if (latestData && data) {
      dispatchLibrarySubscriptionUpdates(store, latestData, data);
    }
  }, [store, data, latestData]);
}

/**
 * Clones a subscription item.
 * @param item - Subscription item.
 * @returns Cloned subscription item.
 * (Original function: tF)
 */
function cloneSubscriptionItem<T>(item: T): T {
  return {
    ...item
  };
}

/**
 * React hook to synchronize user, org, team, and preset library subscriptions.
 * (Original function: useAllLibrarySubscriptions)
 */
export function useAllLibrarySubscriptions(): void {
  const store = useStore();
  const figmaLibrariesEnabled = useFigmaLibrariesEnabled();
  const orgId = getParentOrgId();

  // User subscriptions
  const {
    data: userData
  } = useSubscription(LibraryUserSubscriptions, {});
  const latestUserData = useLatestRef(userData);
  useEffect(() => {
    if (!latestUserData || !userData) return;
    const currentSubscriptions = userData?.currentUser?.libraryUserSubscriptions;
    updateLibrarySubscriptions(store, latestUserData?.currentUser?.libraryUserSubscriptions, currentSubscriptions);
  }, [store, userData, latestUserData]);

  // Preset subscriptions
  const presetMapping = usePresetSubscriptionsMapping();
  const latestPresetMapping = useLatestRef(presetMapping);
  useEffect(() => {
    if (!presetMapping || !latestPresetMapping) return;
    const currentPreset = subscriptionMappingToArray(presetMapping);
    updateLibrarySubscriptions(store, subscriptionMappingToArray(latestPresetMapping), currentPreset);
  }, [store, presetMapping, latestPresetMapping]);

  // Org subscriptions
  const {
    data: orgData
  } = useSubscription(LibraryOrgSubscriptions, {
    orgId
  }, {
    enabled: !!orgId
  });
  const latestOrgData = useLatestRef(orgData);
  useEffect(() => {
    if (!latestOrgData || !orgData) return;
    const currentOrgSubscriptions = orgData?.orgLibrarySubscriptions;
    updateLibrarySubscriptions(store, latestOrgData?.orgLibrarySubscriptions, currentOrgSubscriptions);
  }, [store, orgData, latestOrgData]);

  // Team subscriptions
  const teamId = getCurrentTeamId();
  const teamSubscription = useSubscription(LibraryTeamSubscriptions, {});
  const {
    data: teamData
  } = useMemo(() => {
    return teamSubscription.transform(e => {
      const teams = (e.allTeamRoles || []).filter(role => role.team && !role.team.deletedAt && (role.team.orgId === orgId || role.team.id === teamId)).map(role => role.team);
      const teamOverrides: Record<string, any[]> = {};
      for (const team of teams) {
        teamOverrides[team.id] = team.libraryTeamSubscriptionOverrides.map(cloneSubscriptionItem).filter(sub => figmaLibrariesEnabled || !sub.communityLibrary);
      }
      return teamOverrides;
    });
  }, [figmaLibrariesEnabled, orgId, teamId, teamSubscription]);
  const latestTeamData = useLatestRef(teamData);
  useEffect(() => {
    if (latestTeamData && teamData) {
      updateLibrarySubscriptions(store, Object.values(latestTeamData).flat(), Object.values(teamData).flat());
    }
  }, [store, teamData, latestTeamData]);
}

/**
 * Optimist thunk for user initialization.
 * (Original function: initializeUserThunk)
 */
export const initializeUserThunk = createOptimistThunk(async store => {
  await kb.promise;
  if (!store.getState().user) return;
  await Promise.all([Promise.resolve(null), Promise.resolve(null), Promise.resolve(null)]);
});

/**
 * Fetches the number of teams for a given org.
 * @param orgId - Organization ID.
 * @returns Number of teams.
 * (Original function: fetchNumTeams)
 */
export async function fetchNumTeams(orgId: string): Promise<number> {
  if (!orgId) return 0;
  try {
    return (await DSAApiServiceInstance.getNumTeams({
      orgId
    })).data.meta.num_teams;
  } catch {
    // ignore error
  }
  return 0;
}

/**
 * Action creator for adding asset to recents.
 * (Original variable: ADD_ASSET_TO_RECENTS)
 */
export const ADD_ASSET_TO_RECENTS = createActionCreator('ADD_ASSET_TO_RECENTS');

/**
 * Dispatches subscription updates for libraries after asset insertion.
 * @param store - Redux store or dispatch context.
 * @param libraryKeys - Array of library keys.
 * @param fileSubscribedLibraryKeys - Array of file subscribed library keys.
 * (Original function: tV)
 */
function dispatchAssetSubscriptionUpdates(store: any, libraryKeys: string[], fileSubscribedLibraryKeys: string[]): void {
  const state = store.getState();
  const fileKey = state.openFile?.key || null;
  const currentLibraryKey = state.openFile?.libraryKey || null;
  if (fileKey) {
    libraryKeys.forEach(libraryKey => {
      if (libraryKey !== currentLibraryKey) {
        store.dispatch(am({
          libraryFileSubscription: {
            file_key: fileKey,
            library_key: libraryKey,
            is_subscribed: true
          },
          userInitiated: true,
          fileSubscribedLibraryKeys
        }));
      }
    });
  }
}
let visual_bell = 'LIBRARY_REMAPPING_PROGRESS_VISUAL_BELL';
let remappingProgressState: {
  done: number;
  total: number;
} | null = null;
let startLibraryRemappingProgress = createOptimistThunk((e, t) => {
  remappingProgressState = {
    done: 0,
    total: t.total
  };
  e.dispatch(VisualBellActions.enqueue({
    message: getI18nString('design_systems.subscriptions.remap_connecting_fraction', {
      current: 0,
      total: t.total
    }),
    type: visual_bell,
    icon: VisualBellIcon.SPINNER,
    timeoutOverride: 1 / 0
  }));
});
let updateLibraryRemappingProgress = createOptimistThunk((e, t) => {
  remappingProgressState && (remappingProgressState.done += t.done, e.dispatch(VisualBellActions.enqueue({
    message: getI18nString('design_systems.subscriptions.remap_connecting_fraction', {
      current: remappingProgressState.done,
      total: remappingProgressState.total
    }),
    type: visual_bell,
    icon: VisualBellIcon.SPINNER,
    timeoutOverride: 1 / 0
  })));
});
let completeLibraryRemapping = createOptimistThunk(e => {
  remappingProgressState = null;
  e.dispatch(VisualBellActions.dequeue({
    matchType: visual_bell
  }));
  e.dispatch(VisualBellActions.enqueue({
    message: getI18nString('design_systems.subscriptions.remap_connected'),
    type: visual_bell,
    icon: VisualBellIcon.CHECK
  }));
});
let failLibraryRemapping = createOptimistThunk(e => {
  remappingProgressState = null;
  e.dispatch(VisualBellActions.enqueue({
    message: getI18nString('design_systems.subscriptions.remap_connection_failed'),
    type: visual_bell,
    error: !0
  }));
});
let markComponentInsertionFlag = createOptimistThunk(e => {
  e.getState().userFlags.has_inserted_component || e.dispatch(postUserFlag({
    has_inserted_component: !0
  }));
});
let markLibrariesModalOpenedFlag = createOptimistThunk(e => {
  e.getState().userFlags.has_opened_libraries_modal || e.dispatch(postUserFlag({
    has_opened_libraries_modal: !0
  }));
});

/**
 * Processes library items by grouping them by library key and dispatches them to the store.
 * (Original function: processAndDispatchLibraryItems)
 * @param items - Array of library items to process.
 * @param type - The type of library item (PrimaryWorkflowEnum).
 * @param atomStore - Atom store containing team IDs by library key.
 * @param dispatch - Redux dispatch function.
 */
export function processAndDispatchLibraryItems(items: any[], type: PrimaryWorkflowEnum, atomStore: Record<string, any>, dispatch: (action: any) => void): void {
  // Map items to include team_id from atomStore
  const itemsWithTeamId = items.map(item => ({
    ...item,
    team_id: atomStore[item.library_key]?.team_id
  }));

  // Group items by library_key
  const groupedItems = groupBy(itemsWithTeamId, item => item.library_key);

  // Dispatch grouped items
  Object.entries(groupedItems).forEach(([libraryKey, group]) => {
    dispatch(vP({
      itemsById: keyBy(group, item => item.node_id),
      fileKey: getFileKey()(group[0]),
      libraryKey,
      teamId: atomStore[libraryKey]?.team_id ?? null,
      type
    }));
  });
}
function getSceneIdentifierString(e) {
  switch (e) {
    case SceneIdentifier.ACTIVE_SCENE:
      return 'ACTIVE_SCENE';
    case SceneIdentifier.PLAYGROUND_SCENE:
      return 'PLAYGROUND_SCENE';
    case SceneIdentifier.LINTER_SCENE:
      return 'LINTER_SCENE';
  }
}
export const $h = INSERT_SHARED_COMPONENT;
export const AV = applySharedStyle;
export const As = updateSharedStateGroups;
export const BK = SWAP_TO_SHARED_COMPONENT;
export const Bs = insertSharedModule;
export const D6 = preloadStateGroup;
export const EY = completeLibraryRemapping;
export const Ee = INSERT_SHARED_STATE_GROUP;
export const FU = insertSharedComponent;
export const Gb = useFileLibrarySubscriptions;
export const Hm = upsertSharedModule;
export const Kd = deleteLoadingStatesForFile;
export const Kk = updateLibraryRemappingProgress;
export const Ky = loadStyleByKey;
export const M7 = loadingPublishedComponentsAtom;
export const NW = fetchNumTeams;
export const Oe = loadSharedVariableThunk;
export const PI = ADD_ASSET_TO_RECENTS;
export const Qn = updateSelectedSharedStyleConsumers;
export const Tn = useLibraryInfo;
export const VF = processAndDispatchLibraryItems;
export const Wo = retrieveVariableCollection;
export const Xh = loadingStateGroupsAtom;
export const Yb = getLibraryInfo;
export const Yf = upsertEntireVariableSet;
export const Yi = loadSharedVariable;
export const Yx = initializeUserThunk;
export const Z = getLibraryStats;
export const Zl = showMissingFontNotification;
export const Zn = markLibrariesModalOpenedFlag;
export const _K = updateSharedVariantSet;
export const a9 = cacheComponentKeyThunk;
export const b$ = insertSharedStateGroup;
export const e$ = resetProcessedKeys;
export const eB = updateLibrarySubscriptions;
export const f$ = updateSharedLibraryAsset;
export const ff = upsertSharedVariable;
export const fv = getOrgMigrationStatus;
export const jD = upsertSharedSymbolOrStateGroup;
export const jR = insertResponsiveSet;
export const n8 = startLibraryRemappingProgress;
export const nh = loadSharedStyle;
export const nz = useAllLibrarySubscriptions;
export const rX = updateSharedComponents;
export const t5 = updateSharedStyle;
export const tL = fetchAndUpdateStateGroups;
export const tg = fetchAndUpdateStateGroupsThunk;
export const u7 = loadComponentV2ByKey;
export const uO = swapToSharedComponent;
export const uP = loadSharedSymbolOrStateGroup;
export const wV = getLibraryInfoV2;
export const x = failLibraryRemapping;
export const xZ = loadPublishedComponents;
export const yA = autoUpdateSharedLibraryAsset;
export const yy = insertMultipleSlideModules;
export const zn = loadStateGroupByKey;