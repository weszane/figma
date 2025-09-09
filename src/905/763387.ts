import { ComputationHandler, isComputationHandler } from '../905/42339'
import { ComputationObjectNode, isComputationObjectNode } from '../905/113115'
import { compareFieldInfoArrays, compareFields, deepEqual } from '../905/419236'
import { LiveViewNode } from '../905/679168'
import { isQueryNode, QueryNode } from '../905/795642'
import { isPaginatedQueryNode, PaginatedQueryNode } from '../905/870891'
import { ResourceStatus } from '../905/957591'

/**
 * Represents a node for handling queries, computations, and pagination for an instance.
 * Original class name: $$c0
 */
export class QueryInstanceNode {
  parent: any
  context: any
  instance: any
  queryDef: any
  missingOptionalFields: any[]
  children: any[] = []
  _result: any
  _isLoaded: boolean = false

  /**
   * Constructs a QueryInstanceNode.
   * @param parent - Parent node
   * @param context - Context object
   * @param instance - Instance data
   * @param queryDef - Query definition
   * @param missingOptionalFields - Array of missing optional fields
   */
  constructor(parent: any, context: any, instance: any, queryDef: any, missingOptionalFields: any[]) {
    this.parent = parent
    this.context = context
    this.instance = instance
    this.queryDef = queryDef
    this.missingOptionalFields = missingOptionalFields

    // Add query children
    for (const [fieldKey, queryInfo] of queryDef.queries.entries()) {
      if (this.missingOptionalFields.some(f => fieldKey === f.fieldName))
        continue
      if (queryInfo.objectFieldDef.pagination) {
        this.children.push(new PaginatedQueryNode(this, queryInfo, parent.observable, context))
      }
      else {
        this.children.push(new QueryNode(this, queryInfo, parent.observable, context))
      }
    }

    // Add computation children
    for (const [fieldKey, compInfo] of queryDef.computations.entries()) {
      if (this.missingOptionalFields.some(f => fieldKey === f.fieldName))
        continue
      if (compInfo.computedFieldDef.isComputedObject()) {
        this.children.push(new ComputationObjectNode(this, compInfo, parent.observable, context, instance))
      }
      else {
        this.children.push(new ComputationHandler(this, compInfo, parent.observable, context, instance))
      }
    }
  }

  /**
   * Returns debug information about fields.
   * Original getter: debugFields
   */
  get debugFields() {
    return {
      object: this.queryDef.name,
      parent: this.parent.path,
      instanceFields: JSON.stringify(Object.getOwnPropertyNames(this.instance)),
      queryFields: JSON.stringify(Array.from(this.queryDef.queries.keys())),
      projectedBaseFields: JSON.stringify(Array.from(this.queryDef.projectedFields.keys())),
    }
  }

  /**
   * Returns the path of this node.
   * Original getter: path
   */
  get path() {
    return [...this.parent.path, this.instance.id || 'root']
  }

  /**
   * Returns children that are query nodes.
   * Original getter: queriedChildren
   */
  get queriedChildren() {
    return this.children.filter(isQueryNode)
  }

  /**
   * Returns children that are paginated query nodes.
   * Original getter: paginatedChildren
   */
  get paginatedChildren() {
    return this.children.filter(isPaginatedQueryNode)
  }

  /**
   * Returns children that are computed field nodes.
   * Original getter: computedChildren
   */
  get computedChildren() {
    return this.children.filter(isComputationHandler)
  }

  /**
   * Returns children that are computation object nodes.
   * Original getter: computedObjectChildren
   */
  get computedObjectChildren() {
    return this.children.filter(isComputationObjectNode)
  }

  /**
   * Destroys all child nodes.
   * Original method: destroy
   */
  destroy() {
    for (const child of this.children) child.destroy()
  }

  /**
   * Notifies parent that results have updated.
   * Original method: resultsUpdated
   */
  resultsUpdated() {
    this.parent.resultsUpdated()
  }

  /**
   * Handles update of result and checks for changes.
   * Original method: onUpdateResult
   */
  onUpdateResult(newInstance: any, newMissingFields: any[]) {
    let unchanged = compareFields(newInstance, this.instance, this.queryDef.projectedFields) && compareFieldInfoArrays(this.missingOptionalFields, newMissingFields)
    const prevInstance = this.instance
    this.instance = newInstance
    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i]
      if (child instanceof ComputationHandler && child.fieldName in this.instance && prevInstance[child.fieldName] !== newInstance[child.fieldName]) {
        unchanged = false
      }
      if (child instanceof ComputationObjectNode && child.fieldName in this.instance && !deepEqual(prevInstance[child.fieldName], newInstance[child.fieldName])) {
        unchanged = false
      }
      const replacement = child.recreateIfStale(prevInstance, newInstance)
      if (replacement) {
        child.destroy()
        this.children[i] = replacement
      }
    }
    if (!unchanged) {
      this.missingOptionalFields = newMissingFields
      this.resetResult()
      return true
    }
    return false
  }

  /**
   * Returns loading paths for debugging.
   * Original method: getLoadingPathsForDebugging
   */
  getLoadingPathsForDebugging(): string[] {
    const paths: string[] = []
    for (const child of this.children) {
      paths.push(...child.getLoadingPathsForDebugging())
    }
    return paths
  }

  /**
   * Returns optional error paths for debugging.
   * Original method: getOptionalErrorPathsForDebugging
   */
  getOptionalErrorPathsForDebugging(): string[] {
    const errorPaths: string[] = []
    if (this._result?.status === 'loaded') {
      Object.entries(this._result.data).forEach(([field, value]) => {
        if (this.queryDef.optionalFields.has(field) && value instanceof Object && 'status' in value && value.status === ResourceStatus.Error) {
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
   * Computes and returns the result for this node.
   * Original method: result
   */
  result() {
    if (this._result && !this.context.options?.bustViewCache) {
      return this._result
    }
    const errors: any[] = []
    const projected = this.queryDef.projectInstance(this.instance)
    let allLoaded = true
    for (const child of this.children) {
      const childResult = child.result()
      switch (childResult.status) {
        case 'loading':
          if (this.queryDef.optionalFields.has(child.fieldName)) {
            projected[this.queryDef.dealias(child.fieldName)] = {
              status: ResourceStatus.Error,
              error: `'root.${child.fieldName}' is missing, marked optional. Check server logs for more details.`,
            }
            continue
          }
          this._result = childResult
          return this._result
        case 'errors':
          allLoaded = false
          errors.push(...childResult.errors)
          break
        case 'loaded':
          if (child.fieldName in this.instance && child instanceof ComputationHandler) {
            projected[this.queryDef.dealias(child.fieldName)] = this.instance[child.fieldName]
          }
          else if (child.fieldName in this.instance && child instanceof ComputationObjectNode) {
            projected[this.queryDef.dealias(child.fieldName)] = this.instance[child.fieldName]
          }
          else {
            errors.push(...childResult.errors)
            projected[this.queryDef.dealias(child.fieldName)] = childResult.data
          }
          if (this.queryDef.optionalFields.has(child.fieldName)) {
            projected[this.queryDef.dealias(child.fieldName)] = {
              status: ResourceStatus.Loaded,
              data: childResult.data,
            }
          }
          break
      }
    }
    for (const missing of this.missingOptionalFields) {
      projected[this.queryDef.dealias(missing.fieldName)] = {
        status: ResourceStatus.Error,
        error: missing.info || '',
      }
    }
    if (this.context.options?.forceMissingOptionals?.length) {
      const parentPath = this.queryDef.path.slice(1).join('.')
      for (const forced of this.context.options.forceMissingOptionals) {
        if (forced.slice(0, forced.length - 1).join('.') === parentPath) {
          const forcedField = forced[forced.length - 1]
          if (this.queryDef.optionalFields.has(forcedField)) {
            projected[this.queryDef.dealias(forcedField)] = {
              status: ResourceStatus.Error,
              error: `Client configuration forced this field to go missing, path was ${JSON.stringify(forced)}`,
            }
          }
        }
      }
    }
    this._result = allLoaded
      ? {
          status: 'loaded',
          errors,
          data: projected,
        }
      : {
          status: 'errors',
          data: null,
          errors,
        }
    return this._result
  }

  /**
   * Resets the result and notifies parent.
   * Original method: resetResult
   */
  resetResult() {
    this._result = undefined
    this._isLoaded = false
    this.parent.resetResult()
  }

  /**
   * Checks if all children are loaded.
   * Original method: isLoaded
   */
  isLoaded(): boolean {
    if (this._isLoaded)
      return true
    for (const child of this.children) {
      if (!child.isLoaded())
        return false
    }
    this._isLoaded = true
    return true
  }

  /**
   * Returns all query IDs from children.
   * Original method: getQueryIds
   */
  getQueryIds(): any[] {
    const ids: any[] = []
    for (const child of this.queriedChildren) ids.push(...child.getQueryIds())
    for (const child of this.paginatedChildren) ids.push(...child.getQueryIds())
    for (const child of this.computedObjectChildren) ids.push(...child.getQueryIds())
    return ids
  }

  /**
   * Returns the live view node.
   * Original method: getLiveView
   */
  getLiveView() {
    return this.parent instanceof LiveViewNode ? this.parent : this.parent.getLiveView()
  }

  /**
   * Returns debug state for this node and its children.
   * Original method: debugState
   */
  debugState(fn: (node: any) => any) {
    return {
      _: fn(this),
      children: this.children.map(child => child.debugState(fn)),
    }
  }
}

// Export with original variable name for compatibility
export const A = QueryInstanceNode
