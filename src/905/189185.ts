import { IgnoreUndoRedoBindings } from '../figma_app/13528'
import { EditScopeBindings, SourceType } from '../figma_app/175377'

/**
 * Types for edit scope and undo/redo scope functions.
 */
type EditScopeCallback<T> = () => T
type EditScopeHandler<T> = (scopeType: SourceType, scopeName: string, callback: EditScopeCallback<T>) => T

/**
 * Handles opening and closing of edit scopes.
 * Original: $$a1
 */
export const permissionScopeHandler: EditScopeHandler<any> & {
  system: <T>(scopeName: string, callback: EditScopeCallback<T>) => T
  user: <T>(scopeName: string, callback: EditScopeCallback<T>) => T
  plugin: <T>(scopeName: string, callback: EditScopeCallback<T>) => T
  onboarding: <T>(scopeName: string, callback: EditScopeCallback<T>) => T
  autosave: <T>(scopeName: string, callback: EditScopeCallback<T>) => T
  ai: <T>(scopeName: string, callback: EditScopeCallback<T>) => T
  testSetup: <T>(scopeName: string, callback: EditScopeCallback<T>) => T
} = Object.assign(
  <T>(scopeType: SourceType, scopeName: string, callback: EditScopeCallback<T>): T => {
    const scope = EditScopeBindings?.openEditScope(scopeType, scopeName)
    try {
      return callback()
    }
    finally {
      if (scope != null)
        EditScopeBindings?.closeEditScope(scope)
    }
  },
  {
    /** Run callback in SYSTEM edit scope. */
    system(scopeName, callback) {
      return permissionScopeHandler(SourceType.SYSTEM, scopeName, callback)
    },
    /** Run callback in USER edit scope. */
    user(scopeName, callback) {
      return permissionScopeHandler(SourceType.USER, scopeName, callback)
    },
    /** Run callback in PLUGIN edit scope. */
    plugin(scopeName, callback) {
      return permissionScopeHandler(SourceType.PLUGIN, scopeName, callback)
    },
    /** Run callback in ONBOARDING edit scope. */
    onboarding(scopeName, callback) {
      return permissionScopeHandler(SourceType.ONBOARDING, scopeName, callback)
    },
    /** Run callback in AUTOSAVE edit scope. */
    autosave(scopeName, callback) {
      return permissionScopeHandler(SourceType.AUTOSAVE, scopeName, callback)
    },
    /** Run callback in AI edit scope. */
    ai(scopeName, callback) {
      return permissionScopeHandler(SourceType.AI, scopeName, callback)
    },
    /** Run callback for test setup (no edit scope). */
    testSetup(scopeName, callback) {
      return callback()
    },
  },
)

/**
 * Wraps a function to run in a specific edit scope.
 * Original: $$s2
 */
export const scopeAwareFunction = Object.assign(
  <T>(
    scopeType: SourceType,
    scopeName: string,
    fn: (...args: any[]) => T,
  ): (...args: any[]) => T => {
    return (...args: any[]) => permissionScopeHandler(scopeType, scopeName, () => fn(...args))
  },
  {
    /** Wraps function to run in USER edit scope. */
    user(scopeName, fn) {
      return (...args: any[]) => permissionScopeHandler.user(scopeName, () => fn(...args))
    },
    /** Wraps function to run in SYSTEM edit scope. */
    system(scopeName, fn) {
      return (...args: any[]) => permissionScopeHandler.system(scopeName, () => fn(...args))
    },
    /** Wraps function to run in PLUGIN edit scope. */
    plugin(scopeName, fn) {
      return (...args: any[]) => permissionScopeHandler.plugin(scopeName, () => fn(...args))
    },
    /** Wraps function to run in ONBOARDING edit scope. */
    onboarding(scopeName, fn) {
      return (...args: any[]) => permissionScopeHandler.onboarding(scopeName, () => fn(...args))
    },
    /** Wraps function to run in AI edit scope. */
    ai(scopeName, fn) {
      return (...args: any[]) => permissionScopeHandler.ai(scopeName, () => fn(...args))
    },
    /** Wraps function for test setup (no edit scope). */
    testSetup(scopeName, fn) {
      return (...args: any[]) => permissionScopeHandler.testSetup(scopeName, () => fn(...args))
    },
  },
)

/**
 * Handles opening and closing of both edit scope and ignore undo/redo scope.
 * Original: $$o0
 */
export const AIScopeHandler = {
  /**
   * Run callback in SYSTEM edit scope and ignore undo/redo scope.
   */
  system(scopeName: string, callback: EditScopeCallback<any>) {
    const editScope = EditScopeBindings?.openEditScope(SourceType.SYSTEM, scopeName)
    const undoScope = IgnoreUndoRedoBindings?.openIgnoreUndoRedoScope()
    try {
      return callback()
    }
    finally {
      if (undoScope != null)
        IgnoreUndoRedoBindings?.closeIgnoreUndoRedoScope(undoScope)
      if (editScope != null)
        EditScopeBindings?.closeEditScope(editScope)
    }
  },
  /**
   * Run callback in AI edit scope and ignore undo/redo scope.
   */
  ai(scopeName: string, callback: EditScopeCallback<any>) {
    const editScope = EditScopeBindings?.openEditScope(SourceType.AI, scopeName)
    const undoScope = IgnoreUndoRedoBindings?.openIgnoreUndoRedoScope()
    try {
      return callback()
    }
    finally {
      if (undoScope != null)
        IgnoreUndoRedoBindings?.closeIgnoreUndoRedoScope(undoScope)
      if (editScope != null)
        EditScopeBindings?.closeEditScope(editScope)
    }
  },
}

/** Export SourceType for external usage. */
export const zk = SourceType
