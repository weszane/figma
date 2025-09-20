import { createSelector } from 'reselect';
import { isInvalidValue } from '../905/216495';
import { findUnique } from '../905/778115';
import { escapeHtmlEntities } from '../905/973142';
import { xP } from '../figma_app/164212';
import { isModulePublishEnabled, isStateGroupOrSymbolOrCodeComponent } from '../figma_app/646357';
import { selectSceneGraph, selectSceneGraphSelectionKeys, selectSelectedNodes } from '../figma_app/889655';

/**
 * Returns the componentProps from the selectionProperties of the mirror object.
 * @param e - The input object containing mirror.selectionProperties
 * @returns The componentProps object
 * @originalName $$c0
 */
export const getComponentProps = (e: any) => e.mirror.selectionProperties.componentProps;

/**
 * Returns the resettableComponentPropAssignments from the selectionProperties of the mirror object.
 * @param e - The input object containing mirror.selectionProperties
 * @returns The resettableComponentPropAssignments object
 * @originalName $$u12
 */
export const getResettableComponentPropAssignments = (e: any) => e.mirror.selectionProperties.resettableComponentPropAssignments;

/**
 * Selector for containingSymbolId from scene graph and selection keys.
 * @param e - Scene graph
 * @param t - Selection keys
 * @returns The containingSymbolId or undefined
 * @originalName F
 */
function getContainingSymbolId(e: any, t: any[]) {
  return xP(t => e.get(t)?.containingSymbolId, t) ?? void 0;
}

/**
 * Selector for containingStateGroupId from scene graph and selection keys.
 * @param e - Scene graph
 * @param t - Selection keys
 * @returns The containingStateGroupId or undefined
 * @originalName $$j17
 */
export function getContainingStateGroupId(e: any, t: any[]) {
  return xP(t => e.get(t)?.containingStateGroupId, t) ?? void 0;
}

/**
 * Returns a formatted description or symbolDescription based on validity and HTML escaping.
 * @param e - The input object containing mirror.selectionProperties
 * @returns The formatted description string
 * @originalName $$_14
 */
export function getFormattedDescription(e: any): string {
  const {
    description,
    symbolDescription
  } = e.mirror.selectionProperties;
  if (isInvalidValue(description) || isInvalidValue(symbolDescription)) {
    return description ?? '';
  }
  if (description && (description.startsWith('<') && description.endsWith('>') || description.startsWith('{') && description.endsWith('}') || escapeHtmlEntities(symbolDescription) === description)) {
    return description;
  }
  if (isInvalidValue(symbolDescription)) {
    return symbolDescription;
  }
  return escapeHtmlEntities(symbolDescription ?? '');
}

/**
 * Selector for containingStateGroupId from scene graph and selection keys.
 * @originalName $$h4
 */
export const selectContainingStateGroupId = createSelector([selectSceneGraph, selectSceneGraphSelectionKeys], getContainingStateGroupId);

/**
 * Selector for unique containingSymbolIds from scene graph and selection keys.
 * @originalName $$m6
 */
export const selectUniqueContainingSymbolIds = createSelector([selectSceneGraph, selectSceneGraphSelectionKeys], (sceneGraph, selectionKeys) => {
  const symbolIds = new Set<string>();
  for (const key of selectionKeys) {
    const symbolId = sceneGraph.get(key)?.containingSymbolId;
    if (symbolId) symbolIds.add(symbolId);
  }
  return Array.from(symbolIds);
});

/**
 * Selector factory for containingStateGroupId or containingSymbolId.
 * @originalName $$g10
 */
export function createContainingStateOrSymbolSelector() {
  return createSelector([selectSceneGraph, (e, t) => t], getContainingStateOrSymbolId);
}

/**
 * Returns containingStateGroupId if available, otherwise containingSymbolId.
 * @param e - Scene graph
 * @param t - Selection keys
 * @returns The containingStateGroupId or containingSymbolId
 * @originalName $$f16
 */
export function getContainingStateOrSymbolId(e: any, t: any[]) {
  return getContainingStateGroupId(e, t) ?? getContainingSymbolId(e, t);
}

/**
 * Selector for containingStateGroupId or containingSymbolId using selection keys.
 * @originalName $$E1
 */
export const selectContainingStateOrSymbolId = (() => {
  const selector = createContainingStateOrSymbolSelector();
  return (state: any) => selector(state, selectSceneGraphSelectionKeys(state));
})();

/**
 * Selector for fallback between two selectors.
 * @originalName $$y7
 */
export const selectFallbackStateOrSymbolId = createSelector([createSelector([selectSceneGraph, selectSceneGraphSelectionKeys], getContainingSymbolId), selectContainingStateGroupId], (symbolId, stateGroupId) => symbolId ?? stateGroupId);

/**
 * Selector for unique instance node from selection keys and scene graph.
 * @originalName b
 */
export function selectUniqueInstanceNode() {
  return createSelector([(e, t) => t, selectSceneGraph], (selectionKeys, sceneGraph) => {
    const unique = findUnique(selectionKeys, key => {
      const node = sceneGraph.get(key);
      return !!node && isStateGroupOrSymbolOrCodeComponent(node);
    });
    for (const key of selectionKeys) {
      const node = sceneGraph.get(key);
      const groupId = node?.containingStateGroupId ?? node?.containingSymbolId;
      if (groupId && groupId !== unique) return;
    }
    return unique ?? undefined;
  });
}

/**
 * Selector for unique module node from selection keys and scene graph.
 * @originalName T
 */
export function selectUniqueModuleNode() {
  return createSelector([(e, t) => t, selectSceneGraph], (selectionKeys, sceneGraph) => findUnique(selectionKeys, key => {
    const node = sceneGraph.get(key);
    return !!node && isModulePublishEnabled(node);
  }) ?? undefined);
}

/**
 * Selector for containingStateOrSymbolId or unique instance node.
 * @originalName $$I19
 */
export function selectStateOrInstanceNode() {
  return createSelector([createContainingStateOrSymbolSelector(), selectUniqueInstanceNode()], (stateOrSymbolId, instanceNode) => stateOrSymbolId ?? instanceNode);
}

/**
 * Selector for unique module node.
 * @originalName S
 */
export function selectModuleNode() {
  return createSelector([selectUniqueModuleNode()], node => node);
}

/**
 * Selector for state or instance node using selection keys.
 * @originalName v
 */
export const selectStateOrInstanceNodeByKeys = (() => {
  const selector = selectStateOrInstanceNode();
  return (state: any) => selector(state, selectSceneGraphSelectionKeys(state));
})();

/**
 * Selector for node from state or instance node.
 * @originalName $$A18
 */
export const selectNodeFromStateOrInstance = createSelector([selectStateOrInstanceNodeByKeys, selectSceneGraph], (nodeId, sceneGraph) => nodeId ? sceneGraph.get(nodeId) : null);

/**
 * Selector for module node using selection keys.
 * @originalName x
 */
export const selectModuleNodeByKeys = (() => {
  const selector = selectModuleNode();
  return (state: any) => selector(state, selectSceneGraphSelectionKeys(state));
})();

/**
 * Selector for node from module node.
 * @originalName (anonymous createSelector)
 */
export const selectNodeFromModule = createSelector([selectModuleNodeByKeys, selectSceneGraph], (nodeId, sceneGraph) => nodeId ? sceneGraph.get(nodeId) : null);

/**
 * Selector for containingInstance from componentProps and selection keys.
 * @originalName $$N9
 */
export const selectContainingInstance = createSelector([getComponentProps, selectSceneGraphSelectionKeys], (componentProps, selectionKeys) => {
  if (componentProps) {
    return xP(key => componentProps[key]?.containingInstance, selectionKeys) ?? undefined;
  }
});

/**
 * Selector factory for containingInstanceBackingSymbol from componentProps and selection keys.
 * @originalName $$C20
 */
export function createContainingInstanceBackingSymbolSelector() {
  return createSelector([getComponentProps, (e, t) => t], (componentProps, selectionKeys) => {
    if (componentProps) {
      return xP(key => componentProps[key]?.containingInstanceBackingSymbol, selectionKeys) ?? undefined;
    }
  });
}

/**
 * Selector factory for backingSymbol or containingInstanceBackingSymbol from componentProps, scene graph, and selection keys.
 * @originalName $$w11
 */
export function createBackingSymbolSelector() {
  return createSelector([getComponentProps, selectSceneGraph, (e, t) => t], (componentProps, sceneGraph, selectionKeys) => {
    if (!componentProps) return;
    const nodeIds = selectionKeys.map(key => componentProps[key]?.containingInstance || key);
    return getStateGroupIdFromBackingSymbol(componentProps, nodeIds, sceneGraph);
  });
}

/**
 * Selector for backingSymbol or containingInstanceBackingSymbol from componentProps and selection keys.
 * @originalName O
 */
export const selectBackingSymbol = createSelector([getComponentProps, selectSceneGraphSelectionKeys], (componentProps, selectionKeys) => {
  if (componentProps) {
    return getBackingSymbol(componentProps, selectionKeys);
  }
});

/**
 * Selector for state group id from backingSymbol.
 * @originalName R
 */
export const selectStateGroupIdFromBackingSymbol = createSelector([getComponentProps, selectSceneGraphSelectionKeys, selectSceneGraph], (componentProps, selectionKeys, sceneGraph) => {
  if (componentProps) {
    return getStateGroupIdFromBackingSymbol(componentProps, selectionKeys, sceneGraph);
  }
});

/**
 * Selector factory for symbol nodes with backingSymbol.
 * @originalName $$L15
 */
export function createSymbolNodesWithBackingSymbolSelector() {
  return createSelector([getComponentProps, (e, t) => t, selectSceneGraph], (componentProps, selectionKeys, sceneGraph) => {
    if (!componentProps) return;
    const symbolNodeIds: string[] = [];
    for (const key of selectionKeys) {
      const node = sceneGraph.get(key);
      if (!node || node.isLooseComponent || node.isState || node.isStateGroup) return;
      if (node.symbolId) symbolNodeIds.push(key);
    }
    return getStateGroupIdFromBackingSymbol(componentProps, symbolNodeIds, sceneGraph) ?? getBackingSymbol(componentProps, symbolNodeIds);
  });
}

/**
 * Selector for fallback between state group id and backing symbol.
 * @originalName $$P8
 */
export const selectFallbackStateGroupOrBackingSymbol = createSelector([selectStateGroupIdFromBackingSymbol, selectBackingSymbol], (stateGroupId, backingSymbol) => backingSymbol ?? stateGroupId);

/**
 * Selector factory for instance sublayer check.
 * @originalName $$D3
 */
export function createInstanceSublayerCheckSelector() {
  return createSelector([selectSceneGraph, (e, t) => t], (sceneGraph, selectionKeys) => selectionKeys.some(key => sceneGraph.get(key)?.isInstanceSublayer ?? false));
}

/**
 * Selector for instance sublayer check using selection keys.
 * @originalName $$k5
 */
export const selectInstanceSublayerCheck = (() => {
  const selector = createInstanceSublayerCheckSelector();
  return (state: any) => selector(state, selectSceneGraphSelectionKeys(state));
})();

/**
 * Selector for selected nodes being symbol or state group.
 * @originalName $$M2
 */
export const selectIsSymbolOrStateGroup = createSelector([selectSelectedNodes], nodes => nodes.some(node => node.type === 'SYMBOL' || !!node.isStateGroup));

/**
 * Returns the containingStateGroupId from backingSymbol.
 * @param componentProps - Component properties
 * @param nodeIds - Node ids
 * @param sceneGraph - Scene graph
 * @returns The containingStateGroupId or undefined
 * @originalName U
 */
function getStateGroupIdFromBackingSymbol(componentProps: any, nodeIds: any[], sceneGraph: any) {
  return xP(key => {
    const backingSymbol = componentProps[key]?.backingSymbol;
    if (backingSymbol) {
      return sceneGraph.get(backingSymbol)?.containingStateGroupId;
    }
  }, nodeIds) ?? undefined;
}

/**
 * Returns the backingSymbol or containingInstanceBackingSymbol from componentProps.
 * @param componentProps - Component properties
 * @param nodeIds - Node ids
 * @returns The backingSymbol or containingInstanceBackingSymbol or undefined
 * @originalName B
 */
function getBackingSymbol(componentProps: any, nodeIds: any[]) {
  return xP(key => componentProps[key]?.backingSymbol ?? componentProps[key]?.containingInstanceBackingSymbol, nodeIds) ?? undefined;
}

/**
 * Selector for selected nodes being symbol, instance, symbol sublayer, or instance sublayer.
 * @originalName $$G13
 */
export const selectAreAllSymbolsOrInstances = createSelector([selectSelectedNodes], nodes => nodes.every(node => node.type === 'SYMBOL' || node.type === 'INSTANCE' || !!node.isSymbolSublayer || !!node.isInstanceSublayer));

// Exported names for refactored selectors and functions
export const C1 = getComponentProps;
export const Lg = selectContainingStateOrSymbolId;
export const Ln = selectIsSymbolOrStateGroup;
export const Ms = createInstanceSublayerCheckSelector;
export const Nw = selectContainingStateGroupId;
export const PY = selectInstanceSublayerCheck;
export const QW = selectUniqueContainingSymbolIds;
export const S8 = selectFallbackStateOrSymbolId;
export const TJ = selectFallbackStateGroupOrBackingSymbol;
export const UR = selectContainingInstance;
export const VC = createContainingStateOrSymbolSelector;
export const X9 = createBackingSymbolSelector;
export const Yw = getResettableComponentPropAssignments;
export const ZM = selectAreAllSymbolsOrInstances;
export const cv = getFormattedDescription;
export const d = createSymbolNodesWithBackingSymbolSelector;
export const fx = getContainingStateOrSymbolId;
export const nM = getContainingStateGroupId;
export const od = selectNodeFromStateOrInstance;
export const tK = selectStateOrInstanceNode;
export const tc = createContainingInstanceBackingSymbolSelector;
export const y7 = createSelector([selectSceneGraph, selectSceneGraphSelectionKeys], getContainingSymbolId);
export const selectContainingSymbolId = y7;