import { deepEqual } from '../905/419236'
import { hasFieldsProperty } from '../905/552287'
import { QueryNode } from '../905/795642'
import { DEFAULT_LOADING_STATE, ResourceStatus } from '../905/957591'

/**
 * Represents a computation node for an object, managing its state, children, and results.
 * Original class name: $$o0
 */
export class ComputationObjectNode {
  parent: ComputationObjectNodeParent
  computationDef: ComputationDef
  observable: ComputationObservable
  context: ComputationContext
  computation: ComputationInstance
  unsubscribe: () => void
  _result: ComputationResult | undefined
  computedObject: any
  children: QueryNode[] = []
  missingProjectedFieldsForDebugging: string[] | undefined

  /**
   * Initializes a computation object node.
   * @param parent - The parent node.
   * @param computationDef - The computation definition.
   * @param observable - The observable for computation.
   * @param context - The computation context.
   * @param initialResult - The initial result object.
   */
  constructor(parent: ComputationObjectNodeParent, computationDef: ComputationDef, observable: ComputationObservable, context: ComputationContext, initialResult: Record<string, any>) {
    this.parent = parent
    this.computationDef = computationDef
    this.observable = observable
    this.context = context
    this.computation = computationDef.parameterizedComputation(context.sessionArgs, context.viewArgs, initialResult, parent.queryDef.objectDef.naturalKey)

    // Register this node in computationObjectNodes if applicable
    const objectNodes = this.context.options?.computationObjectNodes
    if (objectNodes && !objectNodes[this.computationDef.objectName]) {
      objectNodes[this.computationDef.objectName] = new Set()
    }
    objectNodes?.[this.computationDef.objectName]?.add(this)
    const computedFieldName = computationDef.computedFieldDef.name
    if (computedFieldName in initialResult) {
      this.unsubscribe = () => { }
      this.onUpdateResult(initialResult[computedFieldName])
    }
    else {
      this.unsubscribe = observable.subscribeComputation(this.computation, this)
    }
  }

  /**
   * Handles updates to the computed result.
   * Original method name: onUpdateResult
   */
  onUpdateResult(result: any): void {
    if (deepEqual(this.computedObject, result))
      return
    this.computedObject = result
    const oldChildren = [...this.children]
    this.children = []
    if (this.computedObject) {
      for (const [, queryDef] of this.computationDef.computedObjectQueries.entries()) {
        this.children.push(new QueryNode(this, queryDef, this.observable, this.context))
      }
    }
    for (const child of oldChildren) child.destroy()
    this.resetResult()
    this.parent.resultsUpdated()
  }

  /**
   * Handles errors in computation.
   * Original method name: onErrors
   */
  onErrors(errors: ComputationError[]): void {
    this._result = {
      status: 'errors',
      data: null,
      errors: errors.map(err => ({
        ...err,
        path: [this.computation.fieldDef.name, ...err.path],
      })),
    }
    this.computedObject = null
    this.parent.resetResult()
    this.parent.resultsUpdated()
  }

  /**
   * Projects an instance based on requested fields.
   * Original method name: projectInstance
   */
  projectInstance(instance: Record<string, any>): Record<string, any> {
    const projected: Record<string, any> = {}
    for (const field in this.computationDef.requestedFields || []) {
      let aliasedField = field
      const fieldDef = this.computationDef?.requestedFields?.[field]
      if (fieldDef && hasFieldsProperty(fieldDef) && fieldDef.aliasedField) {
        aliasedField = fieldDef.aliasedField
      }
      const value = instance[aliasedField]
      if (value !== undefined) {
        if (this.computationDef.optionalFields.has(aliasedField)) {
          projected[field] = {
            status: ResourceStatus.Loaded,
            data: value,
          }
        }
        else {
          projected[field] = value
        }
      }
      else if (this.computationDef.optionalFields.has(aliasedField)) {
        projected[field] = {
          status: ResourceStatus.Error,
          error: `${this.path}.${field}' is missing, marked optional. Check server logs for more details.`,
        }
      }
    }
    return projected
  }

  /**
   * Checks for missing projected fields.
   * Original method name: hasMissingProjectedFields
   */
  hasMissingProjectedFields(projected: Record<string, any>): boolean {
    const missing: string[] = []
    for (const field in this.computationDef.requestedFields || []) {
      if (projected[field] === undefined)
        missing.push(field)
    }
    if (missing.length > 0) {
      this.missingProjectedFieldsForDebugging = missing
      return true
    }
    this.missingProjectedFieldsForDebugging = undefined
    return false
  }

  /**
   * Returns the computation result.
   * Original method name: result
   */
  result(): ComputationResult {
    if (this._result)
      return this._result
    if (this.computedObject === undefined)
      return DEFAULT_LOADING_STATE
    if (this.computedObject === null) {
      if (this.computationDef.def.nullable) {
        this._result = {
          status: 'loaded',
          errors: [],
          data: null,
        }
      }
      else {
        this._result = {
          status: 'errors',
          errors: [{
            path: [...this.parent.path, this.fieldName],
            code: 'nonNullableResult',
            retriable: false,
          }],
          data: null,
        }
      }
      return this._result
    }
    const projected = this.projectInstance({
      ...this.computedObject,
    })
    const errors: ComputationError[] = []
    let allLoaded = true
    for (const child of this.children) {
      const childResult = child.result()
      switch (childResult.status) {
        case 'loading':
          if (this.computationDef.optionalFields.has(child.fieldName)) {
            projected[this.computationDef.dealias(child.fieldName)] = {
              status: ResourceStatus.Error,
              error: `${this.path}.${child.fieldName}' is missing, marked optional. Check server logs for more details.`,
            }
            continue
          }
          return DEFAULT_LOADING_STATE
        case 'disabled':
          return DEFAULT_LOADING_STATE
        case 'loaded':
          if (this.computationDef.optionalFields.has(child.fieldName)) {
            projected[this.computationDef.dealias(child.fieldName)] = {
              status: ResourceStatus.Loaded,
              data: childResult.data,
            }
          }
          else {
            projected[this.computationDef.dealias(child.fieldName)] = childResult.data
          }
          continue
        case 'errors':
          allLoaded = false
          errors.push(...childResult.errors)
      }
    }
    if (allLoaded) {
      if (this.hasMissingProjectedFields(projected)) {
        return DEFAULT_LOADING_STATE
      }
      this._result = {
        status: 'loaded',
        errors,
        data: projected,
      }
      return this._result
    }
    this._result = {
      status: 'errors',
      data: null,
      errors,
    }
    return this._result
  }

  /**
   * Destroys the node and its children.
   * Original method name: destroy
   */
  destroy(): void {
    for (const child of this.children) child.destroy()
    this.children = []
    this.context.options?.computationObjectNodes?.[this.computationDef.objectName]?.delete(this)
    this.unsubscribe()
  }

  /**
   * Resets the result cache.
   * Original method name: resetResult
   */
  resetResult(): void {
    this._result = undefined
    this.parent.resetResult()
  }

  /**
   * Notifies parent of results update.
   * Original method name: resultsUpdated
   */
  resultsUpdated(): void {
    this.parent.resultsUpdated()
  }

  /**
   * Returns the path of this node.
   * Original getter: path
   */
  get path(): string[] {
    return [...this.parent.path, this.computation.fieldDef.name]
  }

  /**
   * Returns the name of the computation definition.
   * Original getter: name
   */
  get name(): string {
    return this.computationDef.name
  }

  /**
   * Placeholder for stale recreation logic.
   * Original method name: recreateIfStale
   */
  recreateIfStale(_e: any, _t: any): void { }

  /**
   * Returns optional error paths for debugging.
   * Original method name: getOptionalErrorPathsForDebugging
   */
  getOptionalErrorPathsForDebugging(): string[] {
    const errorPaths: string[] = []
    if (this._result?.status === 'loaded') {
      Object.entries(this._result.data || {}).forEach(([field, value]) => {
        if (this.computationDef.optionalFields.has(field) && value instanceof Object && 'status' in value && value.status === ResourceStatus.Error) {
          errorPaths.push(field)
        }
      })
    }
    for (const child of this.children) {
      errorPaths.push(...child.getOptionalErrorPathsForDebugging())
    }
    return errorPaths
  }

  /**
   * Returns loading paths for debugging.
   * Original method name: getLoadingPathsForDebugging
   */
  getLoadingPathsForDebugging(): string[] {
    const loadingPaths: string[] = []
    for (const child of this.children) {
      loadingPaths.push(...child.getLoadingPathsForDebugging())
    }
    for (const missing of this.getMissingProjectedFieldsForDebugging()) {
      loadingPaths.push(`${missing}(missing projection)`)
    }
    return loadingPaths
  }

  /**
   * Returns the field name of the computation.
   * Original getter: fieldName
   */
  get fieldName(): string {
    return this.computation.fieldName
  }

  /**
   * Checks if the node and all children are loaded.
   * Original method name: isLoaded
   */
  isLoaded(): boolean {
    return this.computedObject !== undefined && this.children.every(child => child.isLoaded())
  }

  /**
   * Returns the live view from the parent.
   * Original method name: getLiveView
   */
  getLiveView(): any {
    return this.parent.getLiveView()
  }

  /**
   * Returns all query IDs from children.
   * Original method name: getQueryIds
   */
  getQueryIds(): string[] {
    const ids: string[] = []
    for (const child of this.children) ids.push(...child.getQueryIds())
    return ids
  }

  /**
   * Returns missing projected fields for debugging.
   * Original method name: getMissingProjectedFieldsForDebugging
   */
  getMissingProjectedFieldsForDebugging(): string[] {
    return this.missingProjectedFieldsForDebugging || []
  }

  /**
   * Returns debug state for this node and its children.
   * Original method name: debugState
   */
  debugState(fn: (node: ComputationObjectNode | QueryNode) => any): any {
    return {
      _: fn(this),
      children: this.children.map(child => child.debugState(fn)),
    }
  }
}

/**
 * Checks if an object is a ComputationObjectNode.
 * Original function name: $$l1
 */
export function isComputationObjectNode(obj: any): obj is ComputationObjectNode {
  return obj instanceof ComputationObjectNode
}

// Export refactored names
export const A = ComputationObjectNode
export const Y = isComputationObjectNode

// --- Types for clarity and maintainability ---

/**
 * Parent node interface for ComputationObjectNode.
 */
export interface ComputationObjectNodeParent {
  path: string[]
  queryDef: {
    objectDef: {
      naturalKey: any
    }
  }
  resetResult: () => void
  resultsUpdated: () => void
  getLiveView: () => any
}

/**
 * Computation definition interface.
 */
export interface ComputationDef {
  objectName: string
  name: string
  computedFieldDef: {
    name: string
  }
  computedObjectQueries: Map<any, any>
  requestedFields?: Record<string, any>
  optionalFields: Set<string>
  dealias: (fieldName: string) => string
  parameterizedComputation: (sessionArgs: any, viewArgs: any, initialResult: any, naturalKey: any) => ComputationInstance
  def: {
    nullable: boolean
  }
}

/**
 * Observable interface for computation.
 */
export interface ComputationObservable {
  subscribeComputation: (computation: ComputationInstance, node: ComputationObjectNode) => () => void
}

/**
 * Context interface for computation.
 */
export interface ComputationContext {
  sessionArgs: any
  viewArgs: any
  options?: {
    computationObjectNodes?: Record<string, Set<ComputationObjectNode>>
  }
}

/**
 * Computation instance interface.
 */
export interface ComputationInstance {
  fieldDef: {
    name: string
  }
  fieldName: string
}

/**
 * Computation result type.
 */
export interface ComputationResult {
  status: 'loaded' | 'loading' | 'errors' | 'disabled'
  data: any
  errors?: ComputationError[]
}

/**
 * Computation error type.
 */
export interface ComputationError {
  path: string[]
  code?: string
  retriable?: boolean
  error?: string
}
