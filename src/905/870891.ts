import { QueryContext } from '../905/187849';
import { QueryNode } from '../905/795642';

/**
 * Represents a paginated query node for managing pagination state and results.
 */
export class PaginatedQueryNode {
  parent: any;
  queryDef: any;
  observable: any;
  context: any;
  children: QueryNode[] = [];
  _status: {
    type: string;
    error?: any;
  } = {
      type: 'loading'
    };
  _result: any;
  query: QueryContext;
  _isLoaded = false;
  nextCursor: {
    start: any;
    end: any;
  } = {
      start: null,
      end: null
    };
  previousPageCountsForReconnection: number[] | null = null;
  isPaginatedNodeFetching = false;
  clientIsFetching = false;

  /**
   * Creates a new PaginatedQueryNode.
   * @param parent Parent node
   * @param queryDef Query definition
   * @param observable Observable instance
   * @param context Query context
   */
  constructor(parent: any, queryDef: any, observable: any, context: any) {
    this.parent = parent;
    this.queryDef = queryDef;
    this.observable = observable;
    this.context = context;
    this.query = new QueryContext(queryDef, context, parent.instance);
    this.isPaginatedNodeFetching = true;
    this.clientIsFetching = true;
    const initialCount = QueryNode.DEFAULT_INITIAL_COUNT;
    this.children.push(new QueryNode(this, this.queryDef, this.observable, this.context, {
      before: this.nextCursor.start,
      after: this.nextCursor.end,
      count: initialCount,
      pageNumber: 1,
      startTime: performance.now()
    }));
    this.context.options?.paginationQueryNodeMap?.set(this.query.queryId, this);
  }

  /**
   * Gets the field name for the query node.
   */
  get fieldName(): string {
    return this.queryDef.objectFieldDef.name;
  }

  /**
   * Gets the path for the query node.
   */
  get path(): string[] {
    return [...this.parent.path, `pagination-${this.fieldName}`];
  }

  /**
   * Returns the result of the paginated query node.
   * Handles loading, error, and loaded states.
   */
  result(): any {
    if (this._status.type === 'loading') {
      return {
        status: 'loading',
        data: null,
        errors: null
      };
    }
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
    if (this._result) return this._result;
    let data: any[] = [];
    let errors: any[] = [];
    let allLoaded = true;
    for (const child of this.children) {
      const childResult = child.result();
      switch (childResult.status) {
        case 'loading':
          this._result = childResult;
          return this._result;
        case 'errors':
          allLoaded = false;
          for (const err of childResult.errors) {
            errors.push({
              ...err,
              path: [this.fieldName, ...err.path]
            });
          }
          break;
        case 'loaded':
          for (const err of childResult.errors) {
            errors.push({
              ...err,
              path: [this.fieldName, ...err.path]
            });
          }
          if (Array.isArray(childResult.data)) {
            data.push(...childResult.data);
          } else if (childResult.data) {
            data.push(childResult.data);
          }
          break;
      }
    }
    if (!allLoaded) {
      this._result = {
        status: 'errors',
        data: null,
        errors
      };
      this.clientIsFetching = false;
      return this._result;
    }
    if (this.query.isPaginationViaLiveQuery()) {
      data = this.sortAndDedupResults(data);
    }
    const paginatedData = Object.assign(data, {
      loadNext: (count: number) => {
        if (this._result?.data) {
          this._result = {
            ...this._result
          };
          if (this._result.data?.isLoadingNextPage !== undefined) {
            this._result.data.isLoadingNextPage = true;
          }
          this.parent.resetResult();
          this.parent.resultsUpdated();
          this.loadNextPage(count);
        }
      },
      hasNextPage: () => this.hasNextPage(),
      isLoadingNextPage: false
    });
    this._result = {
      status: 'loaded',
      errors,
      data: paginatedData
    };
    this.clientIsFetching = false;
    return this._result;
  }

  /**
   * Sorts and deduplicates results based on pagination id column and order.
   * @param results Array of results
   */
  sortAndDedupResults(results: any[]): any[] {
    const seen = new Set();
    const deduped: any[] = [];
    for (const item of results) {
      const id = item[this.query.getPaginationIdColumn()];
      if (!seen.has(id)) {
        seen.add(id);
        deduped.push(item);
      }
    }
    const orderFn = this.query.order();
    if (orderFn) {
      deduped.sort((a, b) => orderFn(a, b));
    }
    return deduped;
  }

  /**
   * Updates the status when results are updated.
   */
  resultsUpdated(): void {
    if (this.children.every(child => child.isLoaded())) {
      this._status.type = 'loaded';
    }
    if (this._status.type !== 'loading') {
      this.parent.resultsUpdated();
    }
  }

  /**
   * Resets the result state.
   */
  resetResult(): void {
    this._result = undefined;
    this._isLoaded = false;
    this.parent.resetResult();
  }

  /**
   * Handles error state for pagination.
   * @param error Error object
   * @param startTime Start time for latency calculation
   * @param pageNumber Page number
   */
  onError(error: any, startTime: number, pageNumber: number): void {
    const latency = performance.now() - startTime;
    this.context.options?.emitter?.emit({
      type: 'PAGINATION_LATENCY',
      resolver: this.query.paginationResolverType,
      viewName: this.getLiveView().viewDef.name,
      pageNumber,
      latency,
      status: 'failed'
    });
    this.resetResult();
    this._status = {
      type: 'failed',
      error
    };
    this.parent.resultsUpdated();
    this.isPaginatedNodeFetching = false;
  }

  /**
   * Checks if there is a next page available.
   */
  hasNextPage(): boolean {
    return !!this.nextCursor.end;
  }

  /**
   * Checks if the next page is currently loading.
   */
  isLoadingNextPage(): boolean {
    return this.clientIsFetching;
  }

  /**
   * Loads the next page of results.
   * @param count Number of items to load
   */
  loadNextPage(count: number): void {
    if (this.isPaginatedNodeFetching) {
      this.context.options?.logger?.error(new Error(`Trying to fetch next page for query ${this.query.queryId} when there is an ongoing fetch more request.`));
      return;
    }
    this.isPaginatedNodeFetching = true;
    this.clientIsFetching = true;
    if (!this.hasNextPage()) {
      this.context.options?.logger?.error(new Error(`Trying to fetch next page for query ${this.query.queryId} when there are no more pages left`));
      return;
    }
    const paginationArgs = {
      before: this.nextCursor.start,
      after: this.nextCursor.end,
      count,
      pageNumber: this.children.length + 1,
      startTime: performance.now()
    };
    this.children.push(new QueryNode(this, this.queryDef, this.observable, this.context, paginationArgs));
    this.observable.requestPaginationChange(this.getLiveView().key, this.query, paginationArgs);
  }

  /**
   * Destroys the paginated query node and its children.
   */
  destroy(): void {
    for (const child of this.children) {
      child.destroy();
    }
    this.context.options?.paginationQueryNodeMap?.delete(this.query.queryId);
  }

  /**
   * Recreates child nodes if they are stale.
   * @param arg1 First argument
   * @param arg2 Second argument
   */
  recreateIfStale(arg1: any, arg2: any): void {
    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];
      const recreated = child.recreateIfStale(arg1, arg2);
      if (recreated) {
        child.destroy();
        this.children[i] = recreated;
      }
    }
  }

  /**
   * Handles pagination results.
   * @param nextCursor Next cursor object
   * @param startTime Start time for latency calculation
   * @param pageNumber Page number
   */
  onPaginationResults(nextCursor: any, startTime: number, pageNumber: number): void {
    const latency = performance.now() - startTime;
    this.context.options?.emitter?.emit({
      type: 'PAGINATION_LATENCY',
      latency,
      resolver: this.query.paginationResolverType,
      pageNumber,
      viewName: this.getLiveView().viewDef.name,
      status: 'success'
    });
    this.isPaginatedNodeFetching = false;
    this.nextCursor = nextCursor;
    if (this.previousPageCountsForReconnection) {
      if (this.previousPageCountsForReconnection.length && this.nextCursor.end) {
        const count = this.previousPageCountsForReconnection.shift();
        this.loadNextPage(count);
      } else {
        this.previousPageCountsForReconnection = null;
      }
    }
  }

  /**
   * Checks if the node is fully loaded.
   */
  isLoaded(): boolean {
    if (this._status.type === 'loading') return false;
    if (this._isLoaded) return true;
    for (const child of this.children.values()) {
      if (!child.isLoaded()) return false;
    }
    this._isLoaded = true;
    return this._isLoaded;
  }

  /**
   * Starts reconnection state for pagination.
   */
  startReconnectionState(): void {
    this.previousPageCountsForReconnection = this.children.map(child => child.paginationArgs.count);
    for (const child of this.children) {
      child.destroy();
    }
    this.children = [];
    this.nextCursor = {
      start: null,
      end: null
    };
    const count = this.previousPageCountsForReconnection.shift();
    this.children.push(new QueryNode(this, this.queryDef, this.observable, this.context, {
      before: this.nextCursor.start,
      after: this.nextCursor.end,
      count,
      pageNumber: this.children.length + 1,
      startTime: performance.now()
    }));
    this.isPaginatedNodeFetching = true;
    this.clientIsFetching = true;
  }

  /**
   * Gets loading paths for debugging.
   */
  getLoadingPathsForDebugging(): string[] {
    const paths: string[] = [];
    if (this._status.type === 'loading') {
      paths.push(this.fieldName);
    }
    for (const child of this.children.values()) {
      paths.push(...child.getLoadingPathsForDebugging());
    }
    return paths;
  }

  /**
   * Gets optional error paths for debugging.
   */
  getOptionalErrorPathsForDebugging(): string[] {
    const paths: string[] = [];
    for (const child of this.children.values()) {
      paths.push(...child.getOptionalErrorPathsForDebugging());
    }
    return paths;
  }

  /**
   * Gets all query IDs for this node and its children.
   */
  getQueryIds(): string[] {
    const ids = [this.query.queryId];
    for (const child of this.children) {
      ids.push(...child.getQueryIds());
    }
    return ids;
  }

  /**
   * Gets the live view for this node.
   */
  getLiveView(): any {
    return this.parent.getLiveView();
  }

  /**
   * Returns debug state for this node.
   * @param fn Debug function
   */
  debugState(fn: (node: any) => any): any {
    return {
      _: fn(this),
      children: this.children.map(child => child.debugState(fn))
    };
  }
}

/**
 * Checks if the given object is a PaginatedQueryNode.
 * @param obj Object to check
 */
export function isPaginatedQueryNode(obj: any): obj is PaginatedQueryNode {
  return obj instanceof PaginatedQueryNode;
}

// Refactored exports
export const A = PaginatedQueryNode;
export const c = isPaginatedQueryNode;
