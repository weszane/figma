import { IgnoreUndoRedoBindings } from '../figma_app/763686'

// Original name: $$$$r0
/**
 * Executes a given function within an ignore undo redo scope.
 * Opens the scope, runs the function, and ensures the scope is closed in a finally block.
 * @param fn - The function to execute within the scope.
 * @returns The result of the executed function.
 */
export function executeInIgnoreUndoRedoScope<T>(fn: () => T): T {
  const scope = IgnoreUndoRedoBindings?.openIgnoreUndoRedoScope();
  try {
    return fn();
  } finally {
    if (scope != null) {
      IgnoreUndoRedoBindings?.closeIgnoreUndoRedoScope(scope);
    }
  }
}

// Original export alias: r
export const r = executeInIgnoreUndoRedoScope;
