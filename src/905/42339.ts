import { DEFAULT_LOADING_STATE } from '../905/957591'

/**
 * Represents a computation handler for a parent object.
 * Handles subscription, result updates, error handling, and lifecycle.
 */
export class ComputationHandler {
  parent: any
  computation: any
  unsubscribe: () => void
  _result: any

  /**
   * Initializes the ComputationHandler.
   * @param parent - The parent object.
   * @param computationManager - Manages computations and field definitions.
   * @param subscriber - Handles subscription logic.
   * @param args - Contains sessionArgs and viewArgs.
   * @param initialResults - Initial computation results.
   */
  constructor(
    parent: any,
    computationManager: any,
    subscriber: any,
    args: { sessionArgs: any, viewArgs: any },
    initialResults: Record<string, any>,
  ) {
    this.parent = parent
    this.computation = computationManager.parameterizedComputation(
      args.sessionArgs,
      args.viewArgs,
      initialResults,
      parent.queryDef.objectDef.naturalKey,
    )
    const fieldName = computationManager.computedFieldDef.name
    if (fieldName in initialResults) {
      this.unsubscribe = () => {}
      this.onUpdateResult(initialResults[fieldName])
    }
    else {
      this.unsubscribe = subscriber.subscribeComputation(this.computation, this)
    }
  }

  /**
   * Returns the computation path.
   */
  get path(): any[] {
    return [...this.parent.path, this.computation.computationId]
  }

  /**
   * Returns the field name of the computation.
   */
  get fieldName(): string {
    return this.computation.fieldName
  }

  /**
   * Cleans up the subscription.
   */
  destroy(): void {
    this.unsubscribe()
  }

  /**
   * Handles result updates for the computation.
   * @param result - The new result data.
   */
  onUpdateResult(result: any): void {
    // Original: onUpdateResult
    this._result = {
      status: 'loaded',
      errors: [],
      data: result,
    }
    this.parent.resetResult()
    this.parent.resultsUpdated()
  }

  /**
   * Handles errors for the computation.
   * @param errors - Array of error objects.
   */
  onErrors(errors: any[]): void {
    // Original: onErrors
    const { name } = this.computation.fieldDef
    this._result = {
      status: 'errors',
      data: null,
      errors: errors.map(err => ({
        ...err,
        path: [name, ...err.path],
      })),
    }
    this.parent.resetResult()
    this.parent.resultsUpdated()
  }

  /**
   * Placeholder for stale computation recreation logic.
   * @param arg1 - First argument.
   * @param arg2 - Second argument.
   */
  recreateIfStale(_arg1: any, _arg2: any): void {
    // Original: recreateIfStale
  }

  /**
   * Returns loading paths for debugging.
   */
  getLoadingPathsForDebugging(): string[] {
    // Original: getLoadingPathsForDebugging
    return this._result ? [] : [this.computation.fieldDef.name]
  }

  /**
   * Returns optional error paths for debugging.
   */
  getOptionalErrorPathsForDebugging(): string[] {
    // Original: getOptionalErrorPathsForDebugging
    return []
  }

  /**
   * Returns the current result or the default loading state.
   */
  result(): any {
    // Original: result
    return this._result ? this._result : DEFAULT_LOADING_STATE
  }

  /**
   * Checks if the computation is loaded.
   */
  isLoaded(): boolean {
    // Original: isLoaded
    return !!this._result
  }

  /**
   * Returns debug state for the computation.
   * @param debugFn - Debugging function.
   */
  debugState(debugFn: (handler: ComputationHandler) => any): object {
    // Original: debugState
    return {
      _: debugFn(this),
    }
  }
}

/**
 * Checks if the given object is an instance of ComputationHandler.
 * @param obj - Object to check.
 */
export function isComputationHandler(obj: any): obj is ComputationHandler {
  // Original: $$a1
  return obj instanceof ComputationHandler
}

// Refactored exports to match new names
export const A = ComputationHandler
export const N = isComputationHandler
