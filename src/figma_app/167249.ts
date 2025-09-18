import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { SceneValueTracker, SimpleSceneValueTracker } from '../905/151578'
import { getFeatureFlags } from '../905/601108'
import { getSingletonSceneGraph } from '../905/700578'
import { getViewerInstance } from '../figma_app/632319'

/**
 * Returns whether deep equality should be used for scene selector.
 * @returns {boolean}
 * @see f
 */
function shouldUseDeepEqual(): boolean {
  return !!getFeatureFlags().use_scene_selector_deep_equals
}

/**
 * Tracks a scene value using SceneValueTracker and returns the current value.
 * @param options - Options for the tracker.
 * @param key - Scene key.
 * @param args - Additional arguments for readValue.
 * @returns The tracked scene value.
 * @see p
 */
function useSceneValueTracker<T>(
  options: { deepEqual?: boolean, allowDeferral?: boolean },
  key: any,
  ...args: any[]
): T {
  const trackerRef = useRef(
    new SceneValueTracker(getSingletonSceneGraph(), key, options),
  )
  const getValue = useCallback(() => trackerRef.current.readValue(...args), [trackerRef, ...args])
  return useSyncExternalStore(
    cb => trackerRef.current.subscribe(cb),
    getValue,
  )
}

/**
 * Tracks a scene value with deep equality.
 * @param key - Scene key.
 * @param args - Additional arguments for readValue.
 * @returns The tracked scene value.
 * @see $$l1
 */
export function useDeepEqualSceneValue<T>(key: any, ...args: any[]): T {
  return useSceneValueTracker({ deepEqual: shouldUseDeepEqual() }, key, ...args)
}

/**
 * Tracks a scene value without deep equality.
 * @param key - Scene key.
 * @param args - Additional arguments for readValue.
 * @returns The tracked scene value.
 * @see $$d0
 */
export function useSceneValue<T>(key: any, ...args: any[]): T {
  return useSceneValueTracker({ deepEqual: false }, key, ...args)
}

/**
 * Tracks a scene value without deep equality and deferral.
 * @param key - Scene key.
 * @param args - Additional arguments for readValue.
 * @returns The tracked scene value.
 * @see $$c2
 */
export function useImmediateSceneValue<T>(key: any, ...args: any[]): T {
  return useSceneValueTracker({ deepEqual: false, allowDeferral: false }, key, ...args)
}

/**
 * Tracks a scene value with deep equality.
 * @param key - Scene key.
 * @param args - Additional arguments for readValue.
 * @returns The tracked scene value.
 * @see $$u6
 */
export function useStrictDeepEqualSceneValue<T>(key: any, ...args: any[]): T {
  return useSceneValueTracker({ deepEqual: true }, key, ...args)
}

/**
 * Tracks a simple scene value using SimpleSceneValueTracker.
 * @param key - Scene key.
 * @param args - Additional arguments for readValue.
 * @returns The tracked scene value.
 * @see $$_5
 */
export function useSimpleSceneValue<T>(key: any, ...args: any[]): T {
  const trackerRef = useRef(
    new SimpleSceneValueTracker(getSingletonSceneGraph(), key),
  )
  const [value, setValue] = useState(() => trackerRef.current.readValue(...args))
  useEffect(() => {
    const newValue = trackerRef.current.readValue(...args)
    if (newValue !== value)
      setValue(newValue)
  }, [args, value])
  return value
}

/**
 * Tracks multiple scene values by key array.
 * @param keys - Array of keys.
 * @returns Array of scene values.
 * @see $$h3
 */
export function useMultipleSceneValues(keys: any[]): any[] {
  return useSceneValueTracker(
    { deepEqual: false, allowDeferral: false },
    (scene, keyArr) =>
      keyArr ? keyArr.map(k => scene.get(k)).filter(v => v !== null) : [],
    keys,
  )
}

/**
 * Tracks a single scene value by key.
 * @param key - Scene key.
 * @returns The scene value or null.
 * @see $$m4
 */
export function useSingleSceneValue(key: any): any {
  return useSceneValueTracker(
    { deepEqual: false, allowDeferral: false },
    (scene, k) => (k ? scene.get(k) : null),
    key,
  )
}

/**
 * Tracks a scene value using the viewer instance.
 * @param key - Scene key.
 * @param args - Additional arguments for readValue.
 * @returns The tracked scene value or null.
 * @see $$g7
 */
export function useViewerSceneValue<T>(key: any, ...args: any[]): T | null {
  const viewer = getViewerInstance()
  const trackerRef = useRef(
    viewer
      ? new SceneValueTracker(viewer, key, { deepEqual: shouldUseDeepEqual() })
      : null,
  )
  const getValue = useCallback(
    () => (trackerRef.current ? trackerRef.current.readValue(...args) : null),
    [trackerRef, ...args],
  )
  return useSyncExternalStore(
    cb => (trackerRef.current ? trackerRef.current.subscribe(cb) : () => {}),
    getValue,
  )
}

// Export aliases for refactored functions
export const YJ = useSceneValue // $$d0
export const Fk = useDeepEqualSceneValue // $$l1
export const Gj = useImmediateSceneValue // $$c2
export const dB = useMultipleSceneValues // $$h3
export const g0 = useSingleSceneValue // $$m4
export const hr = useSimpleSceneValue // $$_5
export const wA = useStrictDeepEqualSceneValue // $$u6
export const x3 = useViewerSceneValue // $$g7
