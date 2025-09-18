import { createContext, useContext, useEffect, useMemo, useRef } from 'react'
import { useSelector, useStore } from 'react-redux'
import { selectWithShallowEqual } from '../905/103090'
import { deepEqual } from '../905/382883'
import { ReduxSceneGraph } from '../905/700578'
import { isUIHiddenOrLocked } from '../905/868547'
import { isEmptyObject } from '../figma_app/493477'
import { FileSourceType } from '../figma_app/763686'

/**
 * Refactored from original obfuscated names (kept originals as comments for traceability).
 */

// Minimal local types to aid readability; adapt to real app types if available.
type RootState = any
interface StoreLike { getState: () => RootState }

/** Original: let u = e => e?.mirror?.sceneGraph */
const getSceneGraphFromState = (state: RootState) => state?.mirror?.sceneGraph

/** Original: let p = () => useStore() */
const useAppStore = (): StoreLike => useStore() as unknown as StoreLike

/**
 * Original: export function $$_7()
 * Hook to select the scene graph from redux state.
 */
export function useSceneGraphSelector(): ReduxSceneGraph | undefined {
  return useSelector(getSceneGraphFromState)
}

/**
 * Original: export function $$h3()
 * Creates a playground ReduxSceneGraph instance memoized for component lifetime.
 */
export function usePlaygroundSceneGraph(): ReduxSceneGraph {
  return useMemo(() => new ReduxSceneGraph(FileSourceType.PLAYGROUND), [])
}

/**
 * Original: export let $$m1 = () => useSelector(e => e.mirror.sceneGraphSelection)
 * Hook to select the current scene graph selection object.
 */
export function useSceneGraphSelection(): Record<string, any> {
  return useSelector((s: RootState) => s.mirror.sceneGraphSelection)
}

/**
 * Original: export function $$g5()
 * Boolean hook indicating whether any selection exists.
 */
export function useHasSceneGraphSelection(): boolean {
  return !useSelector((s: RootState) => isEmptyObject(s.mirror.sceneGraphSelection))
}

/**
 * Original: export function $$f9()
 * Returns the single selected node from the scene graph if exactly one is selected, otherwise null.
 */
export function getSingleSelectedNode(): any | null {
  const selection = useSceneGraphSelection()
  const sceneGraph = useSceneGraphSelector()
  if (!selection || Object.keys(selection).length !== 1)
    return null
  const id = Object.keys(selection)[0]
  return sceneGraph?.get?.(id) ?? null
}

/**
 * Original: export function $$E2()
 * Returns a stable reference to the selected node using deep equality comparison.
 * Useful to avoid unnecessary re-renders when the selected node is referentially new but content-equal.
 */
export function useStableSelectedNode(): any | null {
  const lastRef = useRef<any>(null)
  const current = getSingleSelectedNode()
  if (deepEqual(current, lastRef.current))
    return lastRef.current
  lastRef.current = current
  return current
}

/**
 * Original: export function $$y8(e)
 * Runs the provided callback with the current store state whenever the sceneGraphSelection changes.
 * Callback is executed immediately on the selection change.
 */
export function useOnSelectionChange(cb: (state: RootState) => void): void {
  const store = useAppStore()
  const selection = useSceneGraphSelection()
  const cbRef = useRef<any>(undefined)
  cbRef.current = () => {
    cb(store.getState())
  }
  useEffect(() => {
    // Invoke the most recent callback when selection changes.
    cbRef.current && cbRef.current()
    // depend on selection to trigger when selection object identity changes
  }, [selection])
}

/**
 * Original: export function $$b6()
 * Hook to read the current tool from the app model.
 */
export function useCurrentTool(): any {
  return useSelector((s: RootState) => s?.mirror?.appModel?.currentTool)
}

/**
 * Original: export function $$T4()
 * Hook to determine whether the progress bar UI should be hidden/locked.
 */
export function useIsProgressBarHiddenOrLocked(): boolean {
  return useSelector((s: RootState) => isUIHiddenOrLocked(s?.progressBarState?.mode))
}

/**
 * Original: export function $$I10(e)
 * Generic hook to read a property from mirror.appModel by key.
 */
export function useAppModelProperty<T = any>(key: string): T {
  return useSelector((s: RootState) => s.mirror.appModel[key])
}

/**
 * Original: export function $$S12(...e)
 * Selects multiple appModel properties with shallow equality.
 */
export function useAppModelPropsShallow(...props: string[]) {
  return selectWithShallowEqual((state: RootState) => {
    const app = state.mirror.appModel || {}
    const out: Record<string, any> = {}
    for (const p of props) out[p] = app[p]
    return out
  })
}

/** Original: export let $$v11 = createContext(null) */
export const SceneGraphContext = createContext<ReduxSceneGraph | null>(null)

/**
 * Original: export function $$A0()
 * Returns the scene graph from context if provided, otherwise falls back to redux selector.
 */
export function useSceneGraphFromContext(): ReduxSceneGraph | undefined {
  const sceneGraphFromStore = useSelector((s: RootState) => s.mirror.sceneGraph)
  return useContext(SceneGraphContext) || sceneGraphFromStore
}

/**
 * Preserve original exported aliases (map obfuscated exported names to refactored implementations).
 * This keeps external import names unchanged while providing clearer internal function names.
 */
export const B9 = useSceneGraphFromContext // $$A0
export const KH = useSceneGraphSelection // $$m1
export const Mw = useStableSelectedNode // $$E2
export const T3 = usePlaygroundSceneGraph // $$h3
export const aV = useIsProgressBarHiddenOrLocked // $$T4
export const ax = useHasSceneGraphSelection // $$g5
export const dH = useCurrentTool // $$b6
export const eY = useSceneGraphSelector // $$_7
export const f4 = useOnSelectionChange // $$y8
export const f9 = getSingleSelectedNode // $$f9
export const p8 = useAppModelProperty // $$I10
export const q0 = SceneGraphContext // $$v11
export const s6 = useAppModelPropsShallow // $$S12
