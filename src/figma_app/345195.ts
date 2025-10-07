import { unstable_batchedUpdates } from "react-dom"
import { EventEmitter } from "../905/690073"
import { defaultSessionLocalIDString } from "../905/871411"
import { variablesMirrorManager } from "../figma_app/763686"

/**
 * Type definitions for callback handlers.
 */

type ExplicitModeChangeHandler = (payload: { setDeleted?: any, deleted?: any[], added?: any }) => void
/**
 * Internal handler references.
 */
let localExplicitModeChangeHandler: ExplicitModeChangeHandler | null = null
let subscribedExplicitModeChangeHandler: ExplicitModeChangeHandler | null = null
let localVariableHandler: ExplicitModeChangeHandler | null = null
let localOverrideHandler: ExplicitModeChangeHandler | null = null
let subscribedOverrideHandler: ExplicitModeChangeHandler | null = null
let explicitModeHandler: ExplicitModeChangeHandler | null = null

/**
 * Event emitters for variable resolved values and explicit mode changes.
 */
const variableResolvedValueEmitter = new EventEmitter("VariableMirrorVariableResolvedValueEmitter")
const explicitModeEmitter = new EventEmitter("VariableMirrorExplicitModeEmitter")

/**
 * Register a handler for local variable set updates.
 * @param handler - Callback to handle updates.
 * @returns Unsubscribe function.
 * (original: $$d3)
 */
export function registerLocalExplicitModeChangeHandler(handler: ExplicitModeChangeHandler): (() => void) {
  localExplicitModeChangeHandler = handler
  return () => {
    localExplicitModeChangeHandler = null
  }
}

/**
 * Register a handler for subscribed variable set updates.
 * @param handler - Callback to handle updates.
 * @returns Unsubscribe function.
 * (original: $$u4)
 */
export function registerSubscribedExplicitModeChangeHandler(handler: ExplicitModeChangeHandler): (() => void) {
  subscribedExplicitModeChangeHandler = handler
  return () => {
    subscribedExplicitModeChangeHandler = null
  }
}

/**
 * Register a handler for local variable updates.
 * @param handler - Callback to handle updates.
 * @returns Unsubscribe function.
 * (original: $$_5)
 */
export function registerLocalVariableHandler(handler: ExplicitModeChangeHandler): (() => void) {
  localVariableHandler = handler
  return () => {
    localVariableHandler = null
  }
}

/**
 * Register a handler for local variable overrides.
 * @param handler - Callback to handle overrides.
 * @returns Unsubscribe function.
 * (original: $$m9)
 */
export function registerLocalOverrideHandler(handler: ExplicitModeChangeHandler): (() => void) {
  localOverrideHandler = handler
  return () => {
    localOverrideHandler = null
  }
}

/**
 * Register a handler for subscribed variable overrides.
 * @param handler - Callback to handle overrides.
 * @returns Unsubscribe function.
 * (original: $$f6)
 */
export function registerSubscribedOverrideHandler(handler: ExplicitModeChangeHandler): (() => void) {
  subscribedOverrideHandler = handler
  return () => {
    subscribedOverrideHandler = null
  }
}

/**
 * Register a handler for explicit mode changes.
 * @param handler - Callback to handle explicit mode changes.
 * @returns Unsubscribe function.
 * (original: $$y7)
 */
export function registerExplicitModeHandler(handler: ExplicitModeChangeHandler): (() => void) {
  explicitModeHandler = handler
  return () => {
    explicitModeHandler = null
  }
}

/**
 * Subscribe to variable resolved value updates.
 * @param variableId - Variable identifier.
 * @param callback - Callback for resolved value.
 * @returns Unsubscribe function.
 * (original: $$T2)
 */
export function subscribeVariableResolvedValue(variableId: string, callback: ExplicitModeChangeHandler): (() => void) {
  variablesMirrorManager.subscribeToLocalVariableResolvedValue(variableId, defaultSessionLocalIDString)
  variableResolvedValueEmitter.on(variableId, callback)
  return () => {
    variablesMirrorManager.unsubscribeFromLocalVariableResolvedValue(variableId, defaultSessionLocalIDString)
    variableResolvedValueEmitter.removeListener(variableId, callback)
  }
}

/**
 * Subscribe to explicit mode changes.
 * @param variableId - Variable identifier.
 * @param callback - Callback for explicit mode.
 * @returns Unsubscribe function.
 * (original: $$S1)
 */
export function subscribeExplicitMode(variableId: string, callback: ExplicitModeChangeHandler): (() => void) {
  variablesMirrorManager.subscribeToExplicitModeChanges(variableId)
  explicitModeEmitter.on(variableId, callback)
  return () => {
    variablesMirrorManager.unsubscribeFromExplicitModeChanges(variableId)
    explicitModeEmitter.removeListener(variableId, callback)
  }
}

/**
 * Handles variable mirror events and updates.
 * (original: class v)
 */
class VariableMirrorManager {
  /**
   * Handle local variable set updated.
   */
  localVariableSetUpdated(variableSet: any) {
    unstable_batchedUpdates(() => {
      localExplicitModeChangeHandler?.({ added: [variableSet] })
    })
  }

  /**
   * Handle local variable set deleted.
   */
  localVariableSetDeleted(deletedSet: any) {
    unstable_batchedUpdates(() => {
      localExplicitModeChangeHandler?.({ deleted: deletedSet })
      localVariableHandler?.({ setDeleted: deletedSet })
    })
  }

  /**
   * Handle subscribed variable set updated.
   */
  subscribedVariableSetUpdated(variableSet: any, added: any[]) {
    unstable_batchedUpdates(() => {
      subscribedExplicitModeChangeHandler?.({ added: [variableSet] })
      explicitModeHandler?.({ setDeleted: variableSet.id })
      explicitModeHandler?.({ added })
    })
  }

  /**
   * Handle subscribed variable set deleted.
   */
  subscribedVariableSetDeleted(deletedSet: any) {
    unstable_batchedUpdates(() => {
      subscribedExplicitModeChangeHandler?.({ deleted: deletedSet })
      explicitModeHandler?.({ setDeleted: deletedSet })
    })
  }

  /**
   * Handle local variables updated.
   */
  localVariablesUpdated(added: any[]) {
    localVariableHandler?.({ added })
  }

  /**
   * Handle local variable overrides updated.
   */
  localVariableOverridesUpdated(added: any[]) {
    localOverrideHandler?.({ added })
  }

  /**
   * Handle local variable overrides deleted.
   */
  localVariableOverridesDeleted(deleted: any) {
    localOverrideHandler?.({ deleted })
  }

  /**
   * Handle subscribed variable overrides updated.
   */
  subscribedVariableOverridesUpdated(added: any[]) {
    subscribedOverrideHandler?.({ added })
  }

  /**
   * Handle subscribed variable overrides deleted.
   */
  subscribedVariableOverridesDeleted(deleted: any) {
    subscribedOverrideHandler?.({ deleted })
  }

  /**
   * Handle local variables deleted.
   */
  localVariablesDeleted(deleted: any[]) {
    localVariableHandler?.({ deleted })
    deleted.forEach((id) => {
      variableResolvedValueEmitter.trigger(id, {})
    })
  }

  /**
   * Handle variable resolved value updated.
   */
  variableResolvedValueUpdated(variableId: string, value: any) {
    variableResolvedValueEmitter.trigger(variableId, value)
  }

  /**
   * Handle explicit mode updated.
   */
  explicitModeUpdated(variableId: string, value: any) {
    explicitModeEmitter.trigger(variableId, value)
  }

  /**
   * Reset mirror cache and remove all listeners.
   */
  resetMirrorCache() {
    unstable_batchedUpdates(() => {
      localExplicitModeChangeHandler?.(null as any)
      localVariableHandler?.(null as any)
      localOverrideHandler?.(null as any)
      subscribedExplicitModeChangeHandler?.(null as any)
      explicitModeHandler?.(null as any)
    })
    variableResolvedValueEmitter.removeAllListeners()
  }
}

/**
 * Singleton instance of VariableMirrorManager.
 * (original: $$n0)
 */
export let variableMirrorManagerInstance: VariableMirrorManager

/**
 * Initialize the variable mirror manager singleton.
 * (original: $$A8)
 */
export function initializeVariableMirrorManager(): void {
  variableMirrorManagerInstance = new VariableMirrorManager()
}

/**
 * Exported aliases for backward compatibility.
 */
export const DQ = variableMirrorManagerInstance
export const Lk = subscribeExplicitMode
export const RW = subscribeVariableResolvedValue
export const Vr = registerLocalExplicitModeChangeHandler
export const _n = registerSubscribedExplicitModeChangeHandler
export const j2 = registerLocalVariableHandler
export const kL = registerSubscribedOverrideHandler
export const uE = registerExplicitModeHandler
export const xQ = initializeVariableMirrorManager
export const xb = registerLocalOverrideHandler
