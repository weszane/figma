import { serializeJSON } from '../905/251556'
import { QueryInstanceNode } from '../905/763387'

/**
 * Serializes the provided arguments as JSON.
 * Original function name: $$a1
 */
export function serializeArgs(key: unknown, value: unknown): string {
  return serializeJSON([key, value])
}

/**
 * Represents a view instance with context, observable, and query node.
 * Original class name: $$s0
 */
export class LiveViewNode {
  key: unknown
  viewDef: any
  context: any
  observable: any
  root: QueryInstanceNode
  viewResultForDebugging?: any

  /**
   * Initializes a new ViewInstance.
   * @param key - Unique key for the view.
   * @param viewDef - View definition object.
   * @param context - Context for the view.
   * @param observable - Observable for the view.
   */
  constructor(key: unknown, viewDef: any, context: any, observable: any) {
    this.key = key
    this.viewDef = viewDef
    this.context = context
    this.observable = observable
    this.root = new QueryInstanceNode(this, context, {}, viewDef.root, [])
  }

  /**
   * Returns the path for this view instance.
   * Original getter name: path
   */
  get path(): unknown[] {
    return [this.key]
  }

  /**
   * Returns the arguments for the view.
   * Original getter name: viewArgs
   */
  get viewArgs(): any {
    return this.context.viewArgs
  }

  /**
   * Called when results are updated.
   * Original method name: resultsUpdated
   */
  resultsUpdated(): void { }

  /**
   * Destroys the view instance and its root node.
   * Original method name: destroy
   */
  destroy(): void {
    this.root.destroy()
  }

  /**
   * Returns the result of the view instance.
   * Original method name: result
   */
  result(): any {
    if (this.viewResultForDebugging)
      return this.viewResultForDebugging
    let result = this.root.result()
    // If all entries in result.data are error objects, set status to loading
    if (
      result.status === 'loaded'
      && Object.entries(result.data).every(
        ([, value]) =>
          typeof value === 'object'
          && value !== null
          && 'status' in value
          && value.status === 'error',
      )
    ) {
      result = {
        status: 'loading',
        data: null,
        errors: null,
      }
    }
    return result
  }

  /**
   * Resets the result of the view instance.
   * Original method name: resetResult
   */
  resetResult(): void { }

  /**
   * Checks if the view instance is loaded.
   * Original method name: isLoaded
   */
  isLoaded(): boolean {
    return this.root.isLoaded()
  }

  /**
   * Gets the query IDs from the root node.
   * Original method name: getQueryIds
   */
  getQueryIds(): any {
    return this.root.getQueryIds()
  }

  /**
   * Sets the view result for debugging.
   * Original method name: setViewResultForDebugging
   */
  setViewResultForDebugging(result: any): void {
    this.viewResultForDebugging = result
  }

  /**
   * Returns the debug state for the view instance.
   * Original method name: debugState
   */
  debugState(arg: any): any {
    return this.root.debugState(arg)
  }

  /**
   * Returns a string representation of the debug state.
   * Original static method name: debugStateAsString
   */
  static debugStateAsString(state: any, indentLevel = 0): string {
    let str = ' '.repeat(2 * indentLevel) + state._.toString()
    if (state.children) {
      for (const child of state.children) {
        str += `\n${LiveViewNode.debugStateAsString(child, indentLevel + 1)}`
      }
    }
    return str
  }
}

// Export refactored names
export const A = LiveViewNode
export const J = serializeArgs
