import { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { useMemoStable } from '../905/19536'
import { isValidValue, MIXED_MARKER } from '../905/216495'
import { getFeatureFlags } from '../905/601108'
import { getSingletonSceneGraph } from '../905/700578'
import { useAtomValueAndSetter } from '../figma_app/27355'
import { useDeepEqualSceneValue } from '../figma_app/167249'
import { getFocusedNodeId, isNotInFocusedNodeView } from '../figma_app/327588'
import { isSelfDesignMode } from '../figma_app/357367'
import { getImageOrVideoPaint } from '../figma_app/385874'
import { useCooperFrameGuids, useSelectedCooperFrameIds } from '../figma_app/396464'
import { getComponentProps } from '../figma_app/505098'
import { assetCategoryAtom, AssetCategoryEnum } from '../figma_app/639711'
import { getComponentLibraryKey } from '../figma_app/646357'
import { useSceneGraphSelection, useSceneGraphSelector } from '../figma_app/722362'
import { LayoutTabType } from '../figma_app/763686'
import { selectSceneGraphSelectionKeys } from '../figma_app/889655'
import { useLatestRef } from '../figma_app/922077'

/**
 * Recursively collects nodes matching a predicate from the scene graph.
 * Original: v
 */
export function collectMatchingNodes(
  node: any,
  predicate: (node: any) => boolean,
  checkVisibilityAndLock: boolean = true,
): any[] {
  const sceneGraph = getSingletonSceneGraph()
  if (checkVisibilityAndLock && (!node.visible || node.locked))
    return []
  let result: any[] = []
  for (const childGuid of node.childrenGuids) {
    const childNode = sceneGraph.get(childGuid)
    if (childNode) {
      result.push(...collectMatchingNodes(childNode, predicate, checkVisibilityAndLock))
    }
  }
  if (predicate(node))
    result.push(node)
  return result
}

/**
 * Checks if a node has an IMAGE fill.
 * Original: $$A10
 */
export function hasImageFill(node: any): boolean {
  return node.fills.some((fill: any) => fill.type === 'IMAGE')
}

/**
 * Checks if a node has an IMAGE or VIDEO fill, depending on feature flag.
 * Original: $$x11
 */
export function hasImageOrVideoFill(node: any) {
  const buzzVideoExport = getFeatureFlags().buzz_video_export
  return collectMatchingNodes(
    node,
    n =>
      buzzVideoExport
        ? hasImageFill(n) || n.fills.some((fill: any) => fill.type === 'VIDEO')
        : hasImageFill(n),
  )
}

/**
 * Enum for node types.
 * Original: $$N3
 */
export enum TextImageEnum {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  INSTANCE = 'INSTANCE',
}

/**
 * Enum for instance states.
 * Original: C
 */
export enum InstanceStateEnum {
  INSTANCE = 'INSTANCE',
  DETACHED = 'DETACHED',
  MIXED = 'MIXED',
}

/**
 * Returns selection info for Cooper frames.
 * Original: $$w1
 */
export function useCooperFrameSelectionInfo() {
  const sceneGraph = getSingletonSceneGraph()
  const selectedFrameIds = useSelectedCooperFrameIds()
  const selectionKeys = useSelector(selectSceneGraphSelectionKeys)

  let selectionType: InstanceStateEnum | null = null
  let hasInstanceSelected = false

  for (const frameId of selectedFrameIds) {
    const node = sceneGraph.get(frameId)
    if (node) {
      if (node.type === 'INSTANCE') {
        hasInstanceSelected = true
        selectionType
          = selectionType === null
            ? InstanceStateEnum.INSTANCE
            : selectionType !== InstanceStateEnum.INSTANCE
              ? InstanceStateEnum.MIXED
              : selectionType
      }
      else if (node.type === 'FRAME') {
        selectionType
          = selectionType === null
            ? InstanceStateEnum.DETACHED
            : selectionType !== InstanceStateEnum.DETACHED
              ? InstanceStateEnum.MIXED
              : selectionType
      }
      if (selectionType === InstanceStateEnum.MIXED)
        break
    }
  }

  const onlyInstances = selectionType === InstanceStateEnum.INSTANCE
  const onlyDetached = selectionType === InstanceStateEnum.DETACHED
  const selectedKeysInFrames = selectionKeys.filter(key => selectedFrameIds.includes(key))
  const anyCooperFrames = selectedKeysInFrames.length > 0
  const onlyCooperFrames = anyCooperFrames && selectedKeysInFrames.length === selectedFrameIds.length

  return useMemo(
    () => ({
      onlyInstances,
      onlyDetached,
      onlyCooperFrames,
      anyCooperFrames,
      hasInstanceSelected,
    }),
    [onlyInstances, onlyDetached, onlyCooperFrames, anyCooperFrames, hasInstanceSelected],
  )
}

/**
 * Returns unique Cooper frame IDs from current selection.
 * Original: $$O14
 */
export function useSelectedCooperFrameGuids(): string[] {
  const selection = useSceneGraphSelection()
  return useMemoStable(() => {
    const sceneGraph = getSingletonSceneGraph()
    const frameIds = new Set<string>()
    Object.keys(selection).forEach((key) => {
      const frameId = sceneGraph.get(key)?.containingCooperFrameId()
      if (frameId)
        frameIds.add(frameId)
    })
    return Array.from(frameIds.values())
  }, [selection])
}

/**
 * Returns media paint info for a node by ID.
 * Original: $$R2
 */
export function useNodeMediaPaintById(nodeId: string) {
  return getMediaPaintInfo(useDeepEqualSceneValue(scene => scene.get(nodeId)?.fills ?? []))
}

/**
 * Returns media paint info for a node.
 * Original: $$L8
 */
export function useNodeMediaPaint(node: any) {
  return getMediaPaintInfo(node.fills)
}

/**
 * Returns media paint and index for fills.
 * Original: P
 */
function getMediaPaintInfo(fills: any[]) {
  const buzzVideoExport = getFeatureFlags().buzz_video_export
  let mediaPaint: any = null
  let mediaPaintIndex: number | null = null

  if (isValidValue(mediaPaint) || mediaPaint === null) {
    let found: [any, number] = [null, null]
    fills.forEach((fill, idx) => {
      if (fill.type === 'IMAGE' || (buzzVideoExport && fill.type === 'VIDEO')) {
        found = [fill, idx]
      }
    })
    if (found && mediaPaint === null) {
      mediaPaint = found[0]
      mediaPaintIndex = found[1]
    }
    else if (found && mediaPaint !== found[0]) {
      mediaPaint = MIXED_MARKER
      mediaPaintIndex = null
    }
  }
  return {
    mediaPaint: mediaPaint && isValidValue(mediaPaint) ? getImageOrVideoPaint(mediaPaint) : mediaPaint,
    mediaPaintIndex,
  }
}

/**
 * Returns guids of nodes with image fills in selection.
 * Original: $$D6
 */
export function useSelectedImageNodeGuids(selectedIds: string[]) {
  const guids = useDeepEqualSceneValue((scene, ids) =>
    ids
      .map((id) => {
        const node = scene.get(id)
        return node ? collectMatchingNodes(node, hasImageFill).map(n => n.guid) : []
      })
      .flat(), selectedIds)
  return useMemoStable(() => guids, [guids])
}

/**
 * Returns guids of nodes with image or video fills in selection.
 * Original: $$k9
 */
export function useSelectedImageOrVideoNodeGuids(selectedIds: string[]) {
  const guids = useDeepEqualSceneValue((scene, ids) =>
    ids
      .map((id) => {
        const node = scene.get(id)
        return node ? hasImageOrVideoFill(node).map(n => n.guid) : []
      })
      .flat(), selectedIds)
  return useMemoStable(() => guids, [guids])
}

/**
 * Selector for unique Cooper frame IDs from component props.
 * Original: $$M12
 */
export const selectComponentCooperFrameIds = createSelector([getComponentProps], (props) => {
  if (!props)
    return []
  const frameIds = new Set<string>()
  Object.keys(props).forEach((key) => {
    const node = getSingletonSceneGraph().get(key)
    const frameId = node?.containingCooperFrameId()
    if (frameId && frameId !== '-1:-1')
      frameIds.add(frameId)
  })
  return Array.from(frameIds)
})

/**
 * Returns component library key for selected Cooper frame.
 * Original: $$F4
 */
export function useSelectedComponentLibraryKey() {
  const selectedFrameIds = useSelectedCooperFrameIds()
  const sceneGraph = useSceneGraphSelector()
  if (selectedFrameIds.length === 1) {
    const frameNode = sceneGraph.get(selectedFrameIds[0] ?? '')
    const symbolNode = sceneGraph.get(frameNode?.symbolId ?? '')
    const componentKey = symbolNode?.componentKey
    if (componentKey) {
      const libraryKey = getComponentLibraryKey(componentKey)
      if (libraryKey)
        return libraryKey
    }
  }
  return null
}

/**
 * Returns selected Cooper frame IDs plus focused node ID.
 * Original: $$j16
 */
export function useSelectedAndFocusedNodeIds(): string[] {
  const selectedFrameIds = useSelectedCooperFrameIds()
  const focusedNodeId = getFocusedNodeId()
  const result = [...selectedFrameIds]
  if (focusedNodeId)
    result.push(focusedNodeId)
  return result
}

/**
 * Handles asset category switching logic for Cooper frames.
 * Original: $$U7
 */
export function useCooperFrameAssetCategorySwitch() {
  const notInFocusedNodeView = isNotInFocusedNodeView()
  const selfDesignMode = isSelfDesignMode()
  const selectedAndFocusedIds = useSelectedAndFocusedNodeIds()
  const allInstancesSelected
    = useDeepEqualSceneValue(
      (scene, ids) => ids.every(id => !!scene.get(id)?.isInstance),
      selectedAndFocusedIds,
    ) && !!selectedAndFocusedIds.length
  const [assetCategory, setAssetCategory] = useAtomValueAndSetter(assetCategoryAtom)
  const sceneGraphSelection = useSelector<ObjectOf>(state => state.mirror.sceneGraphSelection)
  const latestSelectionRef = useLatestRef(sceneGraphSelection)

  const hasInstanceSublayerInCooperFrame = (ids: string[]) =>
    ids.some((id) => {
      const node = getSingletonSceneGraph().get(id)
      const frameId = node?.containingCooperFrameId()
      const frameNode = frameId && getSingletonSceneGraph().get(frameId)
      return node && frameNode && frameNode.isInstance && node.isInstanceSublayer && node.isOrInCooperFrame
    })

  const hasInstanceSublayerCurrent = useMemo(() => hasInstanceSublayerInCooperFrame(Object.keys(sceneGraphSelection)), [sceneGraphSelection])
  const hasInstanceSublayerLatest = useMemo(() => hasInstanceSublayerInCooperFrame(latestSelectionRef ? Object.keys(latestSelectionRef) : []), [latestSelectionRef])
  const isTemplatesCategory = assetCategory === AssetCategoryEnum.TEMPLATES

  useEffect(() => {
    if (selfDesignMode && isTemplatesCategory && !notInFocusedNodeView && allInstancesSelected && hasInstanceSublayerCurrent && !hasInstanceSublayerLatest) {
      setAssetCategory(AssetCategoryEnum.FIELDS)
    }
  }, [notInFocusedNodeView, allInstancesSelected, hasInstanceSublayerCurrent, hasInstanceSublayerLatest, setAssetCategory, isTemplatesCategory, selfDesignMode])
}

/**
 * Returns true if active canvas edit mode is COOPER_BULK_CREATE.
 * Original: $$B17
 */
export function useIsCooperBulkCreateMode() {
  return useSelector<ObjectOf>(state => state.mirror.appModel.activeCanvasEditModeType === LayoutTabType.COOPER_BULK_CREATE)
}

/**
 * Returns true if node has video paint or descendant with video paint.
 * Original: $$G5
 */
export function useNodeHasVideoPaint(nodeId: string): boolean {
  return useDeepEqualSceneValue((scene, id) => {
    const node = scene.get(id)
    return node?.hasVideoPaintOrHasVideoPaintDescendant
  }, nodeId)
}

/**
 * Returns true if all selected nodes have VIDEO fills.
 * Original: $$V15
 */
export function useAllSelectedNodesHaveVideoFill(): boolean {
  const selectionKeys = useSelector(selectSceneGraphSelectionKeys)
  const sceneGraph = useSceneGraphSelector()
  return useMemo(
    () =>
      selectionKeys.length > 0
      && selectionKeys.every(key => sceneGraph.get(key)?.fills?.some(fill => fill.type === 'VIDEO')),
    [selectionKeys, sceneGraph],
  )
}

/**
 * Returns true if any Cooper frame has video paint or descendant with video paint.
 * Original: $$H0
 */
export function useAnyCooperFrameHasVideoPaint(): boolean {
  const cooperFrameGuids = useCooperFrameGuids()
  const sceneGraph = useSceneGraphSelector()
  return cooperFrameGuids.some(guid => sceneGraph.get(guid)?.hasVideoPaintOrHasVideoPaintDescendant)
}

/**
 * Returns true if any node in the given list has video paint or descendant with video paint.
 * Original: $$z13
 */
export function useAnyNodeHasVideoPaint(nodeIds: string[]): boolean {
  const sceneGraph = useSceneGraphSelector()
  return nodeIds.some(id => sceneGraph.get(id)?.hasVideoPaintOrHasVideoPaintDescendant)
}

// Export refactored names for imports
export const B2 = useAnyCooperFrameHasVideoPaint
export const Cl = useCooperFrameSelectionInfo
export const DW = useNodeMediaPaintById
export const PU = TextImageEnum
export const Pn = useSelectedComponentLibraryKey
export const Uo = useNodeHasVideoPaint
export const aK = useSelectedImageNodeGuids
export const bE = useCooperFrameAssetCategorySwitch
export const eG = useNodeMediaPaint
export const hn = useSelectedImageOrVideoNodeGuids
export const nL = hasImageFill
export const oJ = hasImageOrVideoFill
export const qr = selectComponentCooperFrameIds
export const t9 = useAnyNodeHasVideoPaint
export const tc = useSelectedCooperFrameGuids
export const uM = useAllSelectedNodesHaveVideoFill
export const yB = useSelectedAndFocusedNodeIds
export const z7 = useIsCooperBulkCreateMode
