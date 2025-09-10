
import { ComputationObjectNode } from '../905/113115';
import { QueryContext } from '../905/187849';
import { deepEqual, throwIf } from '../905/419236';
import { QueryInstanceNode } from '../905/763387';
import { PaginatedQueryNode } from '../905/870891';
import { DEFAULT_LOADING_STATE } from '../905/957591';

/**
 * Default disabled state for query node results.
 * (original: $$d1)
 */
export const DEFAULT_DISABLED_STATE = Object.freeze({
  status: 'disabled',
  data: null,
  errors: null
});

/**
 * QueryNode manages query results, children, and state for a view query.
 * (original: $$c0)
 */
export class QueryNode {
  parent: ComputationObjectNode | ComputationObjectNode | PaginatedQueryNode | QueryInstanceNode;
  observable: any;
  context: any;
  unsubscribe: () => void;
  query: QueryContext;
  children: Map<string, any> = new Map();
  detachedChildren: Set<string> = new Set();
  _result: any;
  _isLoaded = false;
  _status: {
    type: string;
    error?: any;
  } = {
      type: 'loading'
    };
  static DEFAULT_INITIAL_COUNT = 10;
  paginationArgs?: any;
  missingProjectedFieldsForDebugging?: string[];
  constructor(parent: any, queryDef: any, observable: any, context: any, paginationArgs?: any) {
    let instance: any;
    this.parent = parent;
    this.observable = observable;
    this.context = context;
    this.unsubscribe = () => { };
    if (parent instanceof PaginatedQueryNode && paginationArgs) {
      instance = this.parent.parent.instance;
      this.paginationArgs = paginationArgs;
      this.query = new QueryContext(queryDef, context, instance, {
        before: paginationArgs.before,
        after: paginationArgs.after,
        count: paginationArgs.count
      });
    } else {
      if (parent instanceof ComputationObjectNode && parent.computedObject) {
        instance = parent.computedObject;
      } else {
        QueryNode.internalAssert(parent instanceof QueryInstanceNode, 'Query node has invalid parent. Must be an instance, computation object or pagination query node');
        instance = parent.instance;
      }
      this.query = new QueryContext(queryDef, context, instance);
    }
    const {
      objectFieldDef
    } = queryDef;
    if (this.isEmbedded || objectFieldDef.name in instance) {
      const fieldValue = instance[objectFieldDef.name];
      const instanceId = instance.id;
      if (fieldValue) {
        if (Array.isArray(fieldValue)) {
          const embeddedInstances: Record<string, any> = {};
          fieldValue.forEach((item, idx) => {
            const id = `${instanceId}-${idx.toString().padStart(10, '0')}`;
            if (item instanceof Object) {
              embeddedInstances[id] = {
                id,
                ...item
              };
            } else if (typeof item === 'string') {
              embeddedInstances[id] = {
                id: item
              };
            } else {
              this.context.options?.logger?.warn('EMBEDDED_INSTANCE_INVALID_TYPE', this.query.queryId, item);
            }
          });
          const keys = Object.keys(embeddedInstances);
          const missingFields = keys.length > 0 ? this.query.queryDef.missingOptionalFieldsForEmbeddedInstance(embeddedInstances[keys[0]]) : [];
          this.onInitialResults(embeddedInstances, undefined, missingFields);
        } else {
          const id = `${instanceId}-0`;
          const embeddedInstance = {
            id,
            ...fieldValue
          };
          const missingFields = this.query.queryDef.missingOptionalFieldsForEmbeddedInstance(embeddedInstance);
          this.onInitialResults({
            [id]: embeddedInstance
          }, undefined, missingFields);
        }
      } else {
        this.onInitialResults({}, undefined, []);
      }
    } else {
      this.unsubscribe = this.observable.subscribeQuery(this.query, this);
    }
  }

  /** Returns true if the field is embedded. (original: isEmbedded) */
  get isEmbedded(): boolean {
    return this.query.queryDef.objectFieldDef.embedded;
  }

  /** Returns the field name. (original: fieldName) */
  get fieldName(): string {
    return this.query.queryDef.objectFieldDef.name;
  }

  /** Returns the path to this node. (original: path) */
  get path(): string[] {
    return [...this.parent.path, this.fieldName];
  }

  /** Returns debug info for this node. (original: debugFields) */
  get debugFields(): Record<string, any> {
    return {
      query: this.query.queryId,
      path: this.path,
      embedded: this.isEmbedded
    };
  }

  /** Destroys this node and its children. (original: destroy) */
  destroy(): void {
    for (const child of this.children.values()) child.destroy();
    this.unsubscribe();
  }

  /** Handles errors for this node. (original: onError) */
  onError(error: any): void {
    this.resetResult();
    this._status = {
      type: 'failed',
      error
    };
    if (this.parent instanceof PaginatedQueryNode && this.paginationArgs) {
      this.parent.onError(error, this.paginationArgs.startTime, this.paginationArgs.pageNumber);
    }
    this.parent.resultsUpdated();
  }

  /** Handles initial results for this node. (original: onInitialResults) */
  onInitialResults(results: Record<string, any>, paginationRange?: any, missingFields?: string[]): void {
    if (paginationRange && this.paginationArgs) {
      const isPaginatedQueryNode = this.parent instanceof PaginatedQueryNode;
      QueryNode.internalAssert(isPaginatedQueryNode, 'Query node: received pagination range but parent isn\'t a pagination query node');
      if (this.parent instanceof PaginatedQueryNode) this.parent.onPaginationResults(paginationRange, this.paginationArgs.startTime, this.paginationArgs.pageNumber);
    }
    QueryNode.internalAssert(this._status.type !== 'loaded', 'Unexpected initial results on already loaded query node');
    for (const [id, instance] of Object.entries(results)) {
      const child = new QueryInstanceNode(this, this.context, instance, this.query.queryDef, missingFields || []);
      this.children.set(id, child);
    }
    this.finishLoading();
  }

  /** Marks loading as finished and emits stats if needed. (original: finishLoading) */
  finishLoading(): void {
    this._status = {
      type: 'loaded'
    };
    this.resetResult();
    this.parent.resultsUpdated();
    if (this.children.size >= 25) {
      let parentName = '';
      if (this.parent instanceof QueryInstanceNode) {
        parentName = this.parent.queryDef.objectFieldDef.name;
      } else if (this.parent instanceof PaginatedQueryNode) {
        parentName = this.parent.parent.queryDef.objectFieldDef.name;
      } else if (this.parent instanceof ComputationObjectNode) {
        parentName = this.parent.name;
      }
      this.context.options?.emitter?.emit({
        type: 'VIEW.QUERY_STATS',
        nodeType: 'QUERY_NODE',
        viewName: this.getLiveView().viewDef.name,
        objectName: this.query.objectName,
        parentName,
        fieldName: this.fieldName,
        instanceLength: this.children.size,
        hasCanReadPermissionCheck: !!this.query.queryDef.permissionComputation
      });
    }
  }

  /** Adds a result to this node. (original: onAddResult) */
  onAddResult(instance: any, missingFields?: string[]): void {
    this.context.options?.logger?.debug('VIEW_QUERY_NODE.ADD_RESULT', this.query.queryId, instance);
    QueryNode.internalAssert(this._status.type === 'loaded', 'Unexpected incremental results on node that hasn\'t loaded yet');
    const child = new QueryInstanceNode(this, this.context, instance, this.query.queryDef, missingFields || []);
    this.children.set(instance.id, child);
    this.resetResult();
    this.parent.resultsUpdated();
  }

  /** Updates a result in this node. (original: onUpdateResult) */
  onUpdateResult(instance: any, missingFields?: string[]): boolean | undefined {
    this.context.options?.logger?.debug('VIEW_QUERY_NODE.UPDATE_RESULT', this.query.queryId, instance);
    QueryNode.internalAssert(this._status.type === 'loaded', 'Unexpected incremental results on node that hasn\'t loaded yet');
    QueryNode.internalAssert(this.children.has(instance.id) || instance.uuid && this.children.has(instance.uuid), `onUpdateResult: this.children.has(instance.id) = ${this.children.has(instance.id)}, instance.id = ${instance.id}
       (instance.uuid && this.children.has(instance.uuid)) = ${instance.uuid && this.children.has(instance.uuid)}, instance.uuid = ${instance.uuid}`);
    if (instance.uuid && this.children.has(instance.uuid) && instance.id !== instance.uuid) {
      const child = this.children.get(instance.uuid);
      this.children.delete(instance.uuid);
      this.children.set(instance.id, child);
    }
    const updated = this.children.get(instance.id).onUpdateResult(instance, missingFields || []);
    if (updated) this.parent.resultsUpdated();
    return updated;
  }

  /** Removes a result from this node. (original: onRemoveResult) */
  onRemoveResult(instance: any): void {
    const {
      id
    } = instance;
    this.context.options?.logger?.debug('VIEW_QUERY_NODE.REMOVE_RESULT', this.query.queryId, instance);
    QueryNode.internalAssert(this._status.type === 'loaded', 'Unexpected incremental results on node that hasn\'t loaded yet');
    QueryNode.internalAssert(this.children.has(id) || instance.uuid && this.children.has(instance.uuid), `onRemoveResult: this.children.has(instance.id) = ${this.children.has(id)}, instance.id = ${id}
       (instance.uuid && this.children.has(instance.uuid)) = ${instance.uuid && this.children.has(instance.uuid)}, instance.uuid = ${instance.uuid}`);
    if (instance.uuid && this.children.has(instance.uuid) && id !== instance.uuid) {
      const child = this.children.get(instance.uuid);
      this.children.delete(instance.uuid);
      this.children.set(id, child);
    }
    this.children.get(id).destroy();
    this.children.delete(id);
    this.detachedChildren.delete(id);
    this.resetResult();
    this.parent.resultsUpdated();
  }

  /** Detaches a child node. (original: detachChild) */
  detachChild({
    id
  }: {
    id: string;
  }): void {
    this.detachedChildren.add(id);
    this.children.delete(id);
    this.resetResult();
    this.parent.resultsUpdated();
  }

  /** Restores a detached child node. (original: restoreChild) */
  restoreChild(instance: any): void {
    this.detachedChildren.delete(instance.id);
    this.onAddResult(instance);
    this.resetResult();
  }

  /** Notifies parent that results have updated. (original: resultsUpdated) */
  resultsUpdated(): void {
    if (this._status.type !== 'loading') this.parent.resultsUpdated();
  }

  /** Recreates node if stale. (original: recreateIfStale) */
  recreateIfStale(prevInstance: any, newInstance: any): QueryNode | undefined {
    if (this.isEmbedded) {
      if (deepEqual(prevInstance[this.query.queryDef.objectFieldDef.name], newInstance[this.query.queryDef.objectFieldDef.name])) {
        return;
      }
    } else if (!this.query.isContextStale(newInstance)) {
      return;
    }
    return new QueryNode(this.parent, this.query.queryDef, this.observable, this.context);
  }

  /** Returns loading paths for debugging. (original: getLoadingPathsForDebugging) */
  getLoadingPathsForDebugging(): string[] {
    const paths: string[] = [];
    if (this._status.type === 'loading') paths.push(this.fieldName);
    const childrenArr = [...this.children.values()];
    const orderFn = this.query.order();
    if (orderFn) childrenArr.sort((a, b) => orderFn(a.instance, b.instance));
    for (const child of childrenArr) {
      const childPaths = child.getLoadingPathsForDebugging();
      paths.push(...childPaths.map(p => `${this.fieldName}["${child.instance.id}"].${p}`));
    }
    for (const missing of this.getMissingProjectedFieldsForDebugging()) paths.push(`${missing}(missing projection)`);
    return paths;
  }

  /** Returns optional error paths for debugging. (original: getOptionalErrorPathsForDebugging) */
  getOptionalErrorPathsForDebugging(): string[] {
    const paths: string[] = [];
    const childrenArr = [...this.children.values()];
    const orderFn = this.query.order();
    if (orderFn) childrenArr.sort((a, b) => orderFn(a.instance, b.instance));
    for (const child of childrenArr) {
      const childPaths = child.getOptionalErrorPathsForDebugging();
      paths.push(...childPaths.map(p => `${this.fieldName}["${child.instance.id}"].${p}`));
    }
    return paths;
  }

  /** Returns the result for this node. (original: result) */
  result(): any {
    if (this._status.type === 'loading') return DEFAULT_LOADING_STATE;
    if (this._status.type === 'failed') {
      const code = this._status.error.code;
      this._result = {
        status: 'errors',
        data: null,
        errors: [{
          code,
          path: [this.fieldName],
          error: new Error(this._status.error.message),
          retriable: this._status.error.retriable
        }]
      };
      return this._result;
    }
    if (this._result && !this.context.options?.bustViewCache) return this._result;
    const resultsArr: Array<{
      instance: any;
      result: any;
    }> = [];
    for (const child of this.children.values()) {
      resultsArr.push({
        instance: child.instance,
        result: child.result()
      });
    }
    const orderFn = this.query.order();
    if (orderFn) resultsArr.sort((a, b) => orderFn(a.instance, b.instance));
    const {
      fieldName
    } = this;
    const errors: any[] = [];
    const dataArr: any[] = [];
    let allLoaded = true;
    for (const {
      result
    } of resultsArr) {
      switch (result.status) {
        case 'loading':
          this._result = result;
          return this._result;
        case 'errors':
          allLoaded = false;
          for (const err of result.errors) {
            errors.push({
              ...err,
              path: [fieldName, ...err.path]
            });
          }
          break;
        case 'loaded':
          for (const err of result.errors) {
            errors.push({
              ...err,
              path: [fieldName, ...err.path]
            });
          }
          dataArr.push(result.data);
      }
    }
    if (!allLoaded) {
      if (this.query.queryDef.isNullable()) {
        if (Math.random() < (this.context?.options?.errorsLoggedForAnalyticsFraction || 0)) {
          errors.forEach(e => {
            this.context.options?.analyticsLogger?.logError({
              sessionId: this.context.sessionArgs.sessionId || '',
              layer: 'client',
              targetId: this.query.queryId,
              targetType: 'query',
              viewPath: this.path.join('.'),
              err: e.error?.message || '',
              code: e.code,
              note: 'NULLABLE_ERROR_SOAK'
            });
          });
        }
        if (errors.some(e => e.code === 'nonNullableResult') && this.context.options?.shouldBubbleUpNonNullableResultErrors) {
          this._result = {
            status: 'errors',
            data: null,
            errors
          };
        } else {
          this._result = {
            status: 'loaded',
            errors,
            data: null
          };
        }
      } else {
        if (Math.random() < (this.context?.options?.errorsLoggedForAnalyticsFraction || 0)) {
          errors.forEach(e => {
            this.context.options?.analyticsLogger?.logError({
              sessionId: this.context.sessionArgs.sessionId || '',
              layer: 'client',
              targetId: this.query.queryId,
              targetType: 'query',
              viewPath: this.path.join('.'),
              err: e.error?.message || '',
              code: e.code,
              note: 'ERROR_RAISE'
            });
          });
        }
        this._result = {
          status: 'errors',
          data: null,
          errors
        };
      }
      return this._result;
    }
    if (dataArr.length > 0) {
      const missingFields = this.query.queryDef.getMissingProjectedFields(dataArr[0]);
      if (missingFields.length > 0) {
        this._result = DEFAULT_LOADING_STATE;
        this.missingProjectedFieldsForDebugging = missingFields;
        return this._result;
      }
      this.missingProjectedFieldsForDebugging = undefined;
    }
    if (this.query.queryDef.isList()) {
      this._result = {
        status: 'loaded',
        errors,
        data: dataArr
      };
    } else if (dataArr.length > 0) {
      this._result = {
        status: 'loaded',
        errors,
        data: dataArr[0]
      };
    } else if (this.query.queryDef.isNullable()) {
      this._result = {
        status: 'loaded',
        errors,
        data: null
      };
    } else {
      this._result = {
        status: 'errors',
        data: null,
        errors: [...errors, {
          code: 'nonNullableResult',
          path: [fieldName],
          retriable: false
        }]
      };
    }
    return this._result;
  }

  /** Resets the result cache. (original: resetResult) */
  resetResult(): void {
    this._result = undefined;
    this._isLoaded = false;
    this.parent.resetResult();
  }

  /** Returns true if loaded. (original: isLoaded) */
  isLoaded(): boolean {
    if (this._status.type === 'loading') return false;
    if (this._isLoaded) return true;
    for (const child of this.children.values()) {
      if (!child.isLoaded()) return false;
    }
    this._isLoaded = true;
    return this._isLoaded;
  }

  /** Returns all query IDs for this node and children. (original: getQueryIds) */
  getQueryIds(): string[] {
    const ids = [this.query.queryId];
    for (const child of this.children.values()) {
      ids.push(...child.getQueryIds());
    }
    return ids;
  }

  /** Returns the live view for this node. (original: getLiveView) */
  getLiveView(): any {
    return this.parent.getLiveView();
  }

  /** Returns missing projected fields for debugging. (original: getMissingProjectedFieldsForDebugging) */
  getMissingProjectedFieldsForDebugging(): string[] {
    return this.missingProjectedFieldsForDebugging || [];
  }

  /** Returns debug state for this node and children. (original: debugState) */
  debugState(fn: (node: QueryNode) => any): any {
    return {
      _: fn(this),
      children: Array.from(this.children.values()).map(child => child.debugState(fn))
    };
  }

  /** Throws if assertion fails. (original: internalAssert) */
  static internalAssert(condition: boolean, message: string, extra?: any): void {
    throwIf(condition, message, extra);
  }
}

/**
 * Returns true if the value is a QueryNode.
 * (original: $$u2)
 */
export function isQueryNode(value: any): value is QueryNode {
  return value instanceof QueryNode;
}

// Export refactored names
export const Ay = QueryNode;
export const F4 = DEFAULT_DISABLED_STATE;
export const Y2 = isQueryNode;
