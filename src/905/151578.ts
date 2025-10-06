import isEqual from 'lodash-es/isEqual'
import { deepEqual } from '../905/382883'
import { RevisionNumberAccessor } from '../figma_app/763686'

/**
 * Compares two values for equality, handling nulls and using lodash's isEqual.
 * @param a - First value.
 * @param b - Second value.
 * @returns True if equal, false otherwise.
 * @originalName o
 */
export function areValuesEqual(a: any, b: any): boolean {
  if (b === null)
    return a === null || a.length === 0
  return isEqual(a, b)
}

/**
 * Options for SceneValueTracker.
 */
export interface SceneValueTrackerOptions {
  deepEqual?: boolean
  allowDeferral?: boolean
}

/**
 * Tracks scene value changes and computes new values when needed.
 * @originalName $$l1
 */
export class SceneValueTracker {
  lastArgs: any[] | null = null
  lastValue: any = null
  lastRevision: number | null | undefined = null
  lastSceneInstance: any = null
  scene: any
  computeValue: (...args: any[]) => any
  deepEqual: boolean
  allowDeferral: boolean

  /**
   * @param scene - The scene object.
   * @param computeValue - Function to compute the value.
   * @param options - Tracker options.
   */
  constructor(
    scene: any,
    computeValue: (...args: any[]) => any,
    options: SceneValueTrackerOptions = {},
  ) {
    this.lastRevision = null
    this.lastSceneInstance = scene
    this.scene = scene
    this.computeValue = computeValue
    this.deepEqual = options.deepEqual ?? true
    this.allowDeferral = options.allowDeferral ?? true
  }

  /**
   * Checks if the value needs to be updated based on scene and arguments.
   * @param args - Arguments for computeValue.
   */
  checkForUpdates(args: any[]) {
    const sceneChanged = this.scene !== this.lastSceneInstance
    const revision
      = typeof this.scene.getRevisionNumber === 'function'
        ? this.scene.getRevisionNumber()
        : RevisionNumberAccessor
          && typeof RevisionNumberAccessor.getRevisionNumber === 'function'
          ? RevisionNumberAccessor.getRevisionNumber()
          : 0

    if (
      this.lastRevision === null
      || this.lastRevision !== revision
      || !areValuesEqual(args, this.lastArgs || null)
      || sceneChanged
    ) {
      if (this.lastValue !== null && !this.scene.hasValidScene())
        return
      this.lastSceneInstance = this.scene
      this.lastArgs = args
      const newValue = this.computeValue(this.scene, ...args)
      if (!this.deepEqual || !deepEqual(newValue, this.lastValue)) {
        this.lastValue = newValue
      }
      this.lastRevision = revision
    }
  }

  /**
   * Reads the current value, updating if necessary.
   * @param args - Arguments for computeValue.
   * @returns The current value.
   */
  readValue(...args: any[]) {
    this.checkForUpdates(args)
    return this.lastValue
  }

  /**
   * Subscribes to scene changes.
   * @param callback - Change handler.
   * @returns Unsubscribe function.
   */
  subscribe(callback: (...args: any[]) => void) {
    return this.scene.onChange(callback, {
      allowDeferral: this.allowDeferral,
    })
  }
}

/**
 * Tracks scene value changes without revision or deep equality checks.
 * @originalName $$d0
 */
export class SimpleSceneValueTracker {
  lastArgs: any[] | null = null
  lastValue: any = null
  lastSceneInstance: any = null
  scene: any
  computeValue: (...args: any[]) => any

  /**
   * @param scene - The scene object.
   * @param computeValue - Function to compute the value.
   */
  constructor(scene: any, computeValue: (...args: any[]) => any) {
    this.lastSceneInstance = scene
    this.scene = scene
    this.computeValue = computeValue
  }

  /**
   * Checks if the value needs to be updated based on scene and arguments.
   * @param args - Arguments for computeValue.
   */
  checkForUpdates(args: any[]) {
    const sceneChanged = this.scene !== this.lastSceneInstance
    if (!areValuesEqual(args, this.lastArgs || null) || sceneChanged) {
      this.lastSceneInstance = this.scene
      this.lastArgs = args
      if (this.lastValue !== null && !this.scene.hasValidScene())
        return
      this.lastValue = this.computeValue(this.scene, ...args)
    }
  }

  /**
   * Reads the current value, updating if necessary.
   * @param args - Arguments for computeValue.
   * @returns The current value.
   */
  readValue(...args: any[]) {
    this.checkForUpdates(args)
    return this.lastValue
  }
}

// Export refactored names for external usage
export const L = SimpleSceneValueTracker
export const M = SceneValueTracker
