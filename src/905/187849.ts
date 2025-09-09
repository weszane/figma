import { QueryDef } from '../905/8928';
import { collectRightPropertiesWithType } from '../905/19248';
import { ComputedFieldQuery } from '../905/329793';
import { resolveBasicProperty, resolvePropertyWithParent, transformExpression } from '../905/415342';
import { hasCursorProperties, isNotCursorColumnSet } from '../905/552287';
import { parseFilterDefinition } from '../905/824218';
import { hasTypeProperty } from '../905/957591';

/**
 * Represents a substituted query with fields, filter, limit, and orderBy.
 * Original class name: s
 */
export interface SubstitutedQueryOptions {
  fields: any;
  filter?: any;
  limit?: number;
  orderBy?: any;
}

/**
 * SubstitutedQuery encapsulates query parameters for filtering and matching.
 * Original class name: s
 */
export class SubstitutedQuery {
  fields: any;
  filter: any;
  limit: number | undefined;
  orderBy: any;
  constructor({
    fields,
    filter,
    limit,
    orderBy
  }: SubstitutedQueryOptions) {
    this.fields = fields;
    this.limit = limit;
    this.filter = filter;
    this.orderBy = orderBy;
  }

  /**
   * Checks if the provided object matches the filter.
   * Original method name: matches
   */
  matches(obj: Record<string, any>): boolean {
    if (!this.filter) return true;
    const matchExpr = (expr: any): boolean => {
      switch (expr.type) {
        case 'binary':
          {
            const leftVal = obj[expr.left];
            const rightVal = expr.right;
            switch (expr.op) {
              case '=':
                return leftVal === rightVal;
              case '<>':
                return leftVal !== rightVal;
            }
            if (leftVal === null || rightVal === null) return false;
            switch (expr.op) {
              case '>':
                return leftVal > rightVal;
              case '>=':
                return leftVal >= rightVal;
              case '<':
                return leftVal < rightVal;
              case '<=':
                return leftVal <= rightVal;
            }
            break;
          }
        case 'in':
          return expr.right.includes(obj[expr.left]);
        case 'or':
          return expr.expressions.some(matchExpr);
        case 'and':
          return expr.expressions.every(matchExpr);
      }
      return false;
    };
    return matchExpr(this.filter);
  }

  /**
   * Returns the single matching id if filter is a binary id comparison.
   * Original method name: singleMatchingId
   */
  singleMatchingId(): string | null {
    if (this.filter && this.filter.type === 'binary') {
      const {
        left,
        right
      } = this.filter;
      if (left === 'id' && typeof right === 'string') return right;
    }
    return null;
  }
}

/**
 * QueryContext encapsulates logic for query resolution, pagination, and resolver config.
 * Original class name: $$u0
 */
export class QueryContext {
  queryDef: any;
  context: any;
  parent: any;
  paginationArgs: any;
  queryId: string;
  usedResolverValues: any[];
  span: any;
  constructor(queryDef: any, context: any, parent: any, paginationArgs?: any) {
    this.queryDef = queryDef;
    this.context = context;
    this.parent = parent;
    this.paginationArgs = paginationArgs;

    // Prepare resolver values
    const argValues = [];
    for (const arg of this.queryDef.objectFieldDef.args) {
      const fieldArg = this.queryDef.fieldArgs[arg.name];
      if (hasTypeProperty(fieldArg)) {
        argValues.push(fieldArg.type === 'session' ? this.context.sessionArgs[fieldArg.ref] : this.context.viewArgs[fieldArg.ref]);
      } else {
        argValues.push(fieldArg);
      }
    }
    this.usedResolverValues = collectRightPropertiesWithType(this.filter).filter(({
      type
    }: any) => type === 'parent').map(({
      ref
    }: any) => parent[ref]);
    this.usedResolverValues.push(...this.getUsedHttpResolverValues());
    this.usedResolverValues.push(...this.getUsedRedisResolverValues());
    this.usedResolverValues.push(...this.getUsedStatsigResolverValues());
    const queryIdArgs = [argValues, this.usedResolverValues];
    if (this.isStaticHttpQuery() && context.viewArgs.__requestId) {
      queryIdArgs.push(context.viewArgs.__requestId);
    }
    if (this.isPaginationQuery()) {
      queryIdArgs.push(paginationArgs);
    }
    this.queryId = getQueryId(this.queryDef, queryIdArgs);
  }

  /**
   * Returns query info for tracing.
   * Original method name: queryInfo
   */
  queryInfo() {
    return {
      objectName: this.queryDef.objectDef.name,
      parent: {
        objectName: getParentObjectName(this.queryDef),
        fieldName: this.queryDef.objectFieldDef.name
      }
    };
  }
  get objectName() {
    return this.queryDef.objectFieldDef.type.name;
  }
  get filter() {
    return this.queryDef.objectFieldDef.filter;
  }
  get orderBy() {
    return this.queryDef.objectFieldDef.orderBy;
  }
  get limit() {
    return this.queryDef.objectFieldDef.expectedMaxCount ?? 200;
  }

  /**
   * Returns a substituted query with resolved filter and order.
   * Original method name: substituted
   */
  substituted(): SubstitutedQuery {
    return new SubstitutedQuery({
      fields: this.queryDef.objectDef.queriedFields,
      filter: transformExpression(this.context.sessionArgs, this.context.viewArgs, this.filter, this.queryDef.fieldArgs, this.parent) || null,
      limit: this.limit,
      orderBy: this.orderBy || null
    });
  }

  /**
   * Resolves HTTP resolver config with substituted query params.
   * Original method name: getResolvedHttpResolverConfig
   */
  getResolvedHttpResolverConfig(): any | null {
    const resolver = this.queryDef.objectFieldDef.resolver;
    if (resolver?.type !== 'HTTP') return null;
    const queryParams: Record<string, any> = {};
    for (const [key, val] of Object.entries(resolver.queryParams)) {
      queryParams[key] = resolvePropertyWithParent(this.context.sessionArgs, this.context.viewArgs, val, this.queryDef.fieldArgs, this.parent);
    }
    let channelPostfix: any[] = [];
    if (resolver.realtimePolicy.type === 'RedisPubsub') {
      for (const postfix of resolver.realtimePolicy.channelPostfix) {
        channelPostfix.push(resolvePropertyWithParent(this.context.sessionArgs, this.context.viewArgs, postfix, this.queryDef.fieldArgs, this.parent));
      }
    }
    return {
      ...resolver,
      queryParams,
      realtimePolicy: resolver.realtimePolicy.type === 'RedisPubsub' ? {
        ...resolver.realtimePolicy,
        channelPostfix
      } : resolver.realtimePolicy
    };
  }

  /**
   * Returns used HTTP resolver values from parent references.
   * Original method name: getUsedHttpResolverValues
   */
  getUsedHttpResolverValues(): any[] {
    const resolver = this.queryDef.objectFieldDef.resolver;
    if (resolver?.type !== 'HTTP') return [];
    const values: any[] = [];
    for (const key of Object.keys(resolver.queryParams).sort()) {
      const param = resolver.queryParams[key];
      if (!hasTypeProperty(param) || param.type !== 'parent') continue;
      values.push(resolvePropertyWithParent(this.context.sessionArgs, this.context.viewArgs, param, this.queryDef.fieldArgs, this.parent));
    }
    if (resolver.realtimePolicy.type === 'RedisPubsub') {
      for (const postfix of resolver.realtimePolicy.channelPostfix) {
        if (!hasTypeProperty(postfix) || postfix.type !== 'parent') continue;
        values.push(resolvePropertyWithParent(this.context.sessionArgs, this.context.viewArgs, postfix, this.queryDef.fieldArgs, this.parent));
      }
    }
    return values;
  }

  /**
   * Resolves Redis resolver config with substituted key postfix.
   * Original method name: getResolvedRedisResolverConfig
   */
  getResolvedRedisResolverConfig(): any | null {
    const resolver = this.queryDef.objectFieldDef.resolver;
    if (resolver?.type !== 'Redis') return null;
    const keyPostfix: any[] = [];
    for (const postfix of resolver.keyPostfix) {
      keyPostfix.push(resolvePropertyWithParent(this.context.sessionArgs, this.context.viewArgs, postfix, this.queryDef.fieldArgs, this.parent));
    }
    return {
      ...resolver,
      keyPostfix
    };
  }

  /**
   * Returns used Redis resolver values from parent references.
   * Original method name: getUsedRedisResolverValues
   */
  getUsedRedisResolverValues(): any[] {
    const resolver = this.queryDef.objectFieldDef.resolver;
    if (resolver?.type !== 'Redis') return [];
    const values: any[] = [];
    for (const postfix of resolver.keyPostfix) {
      if (!hasTypeProperty(postfix) || postfix.type !== 'parent') continue;
      values.push(resolvePropertyWithParent(this.context.sessionArgs, this.context.viewArgs, postfix, this.queryDef.fieldArgs, this.parent));
    }
    return values;
  }

  /**
   * Resolves Statsig resolver values for user and custom IDs.
   * Original method name: getResolvedStatsigResolverValues
   */
  getResolvedStatsigResolverValues(): any {
    const resolver = this.queryDef.objectFieldDef.resolver;
    if (resolver?.type !== 'Statsig') throw new Error(`Resolver type is not correct. Expected a Statsig resolver got: ${resolver?.type}`);
    const statsigUser = {
      userID: (this.context.sessionArgs.userId || 'null').toString(),
      customIDs: {},
      custom: {}
    };
    if (resolver.statsigUser.customIDs) {
      for (const [key, val] of Object.entries(resolver.statsigUser.customIDs)) {
        const resolved = resolvePropertyWithParent(this.context.sessionArgs, this.context.viewArgs, val, this.queryDef.fieldArgs, this.parent);
        if (typeof resolved === 'string') {
          statsigUser.customIDs[key] = resolved;
        } else if (resolved !== null) {
          throw new Error(`Statsig user customID: ${key} was not a string type. Received: ${typeof resolved}. Value: ${resolved}`);
        }
      }
    }
    if (resolver.statsigUser.custom) {
      for (const [key, val] of Object.entries(resolver.statsigUser.custom)) {
        const resolved = resolvePropertyWithParent(this.context.sessionArgs, this.context.viewArgs, val, this.queryDef.fieldArgs, this.parent);
        if (typeof resolved === 'string') {
          statsigUser.custom[key] = resolved;
        } else if (resolved instanceof Date) {
          statsigUser.custom[key] = resolved.getTime();
        }
      }
    }
    return statsigUser;
  }

  /**
   * Returns used Statsig resolver values from parent references.
   * Original method name: getUsedStatsigResolverValues
   */
  getUsedStatsigResolverValues(): any[] {
    const resolver = this.queryDef.objectFieldDef.resolver;
    if (resolver?.type !== 'Statsig') return [];
    const values: any[] = [];
    const userId = (this.context.sessionArgs.userId || 'null').toString();
    values.push(userId);
    for (const [_, val] of Object.entries(resolver.statsigUser.customIDs ?? {})) {
      if (hasTypeProperty(val) && val.type === 'parent') {
        values.push(resolvePropertyWithParent(this.context.sessionArgs, this.context.viewArgs, val, this.queryDef.fieldArgs, this.parent));
      }
    }
    return values;
  }

  /**
   * Checks if the context is stale compared to used resolver values.
   * Original method name: isContextStale
   */
  isContextStale(ctx: any): boolean {
    return collectRightPropertiesWithType(this.filter).filter(({
      type
    }: any) => type === 'parent').some(({
      ref
    }: any, idx: number) => this.usedResolverValues[idx] !== ctx[ref]);
  }

  /**
   * Checks if query is a pagination query.
   * Original method name: isPaginationQuery
   */
  isPaginationQuery(): boolean {
    return this.paginationArgs !== undefined;
  }

  /**
   * Checks if pagination is via live query.
   * Original method name: isPaginationViaLiveQuery
   */
  isPaginationViaLiveQuery(): boolean {
    const fieldDef = this.queryDef.objectFieldDef;
    return !!hasCursorProperties(fieldDef.pagination) && !fieldDef.resolver && !!fieldDef.filter && !!fieldDef.pagination.cursorColumnSet;
  }

  /**
   * Checks if pagination is via Sinatra (HTTP).
   * Original method name: isPaginationViaSinatra
   */
  isPaginationViaSinatra(): boolean {
    const fieldDef = this.queryDef.objectFieldDef;
    return fieldDef.resolver?.type === 'HTTP' && isNotCursorColumnSet(fieldDef.pagination);
  }

  /**
   * Returns pagination resolver type.
   * Original method name: paginationResolverType
   */
  get paginationResolverType(): 'native' | 'sinatra' | 'unknown' {
    if (this.isPaginationViaLiveQuery()) return 'native';
    if (this.isPaginationViaSinatra()) return 'sinatra';
    return 'unknown';
  }

  /**
   * Checks if query is a static HTTP query.
   * Original method name: isStaticHttpQuery
   */
  isStaticHttpQuery(): boolean {
    const resolver = this.queryDef.objectFieldDef.resolver;
    return resolver?.type === 'HTTP' && resolver?.realtimePolicy.type === 'Static';
  }

  /**
   * Gets first page size or default.
   * Original method name: getFirstPageSizeOrDefault
   */
  getFirstPageSizeOrDefault(defaultSize: number): number {
    const firstPageSize = this.queryDef.objectFieldDef.pagination?.firstPageSize;
    if (!firstPageSize) return defaultSize;
    const resolved = resolveBasicProperty(this.context.sessionArgs, this.context.viewArgs, firstPageSize);
    return typeof resolved === 'number' ? resolved : defaultSize;
  }

  /**
   * Gets selected cursor columns for pagination.
   * Original method name: getSelectedCursorColumns
   */
  getSelectedCursorColumns(): string[] | null {
    const pagination = this.queryDef.objectFieldDef.pagination;
    if (!hasCursorProperties(pagination)) return null;
    const selected = pagination.selectedCursorColumn;
    if (!selected) return null;
    const resolved = resolveBasicProperty(this.context.sessionArgs, this.context.viewArgs, selected);
    const cursorSet = pagination?.cursorColumnSet;
    return typeof resolved === 'string' && cursorSet && cursorSet[resolved] || null;
  }

  /**
   * Gets pagination sort order.
   * Original method name: getPaginationSortOrder
   */
  getPaginationSortOrder(): 'ASC' | 'DESC' | null {
    const pagination = this.queryDef.objectFieldDef.pagination;
    if (!hasCursorProperties(pagination)) return null;
    const sortOrder = pagination.sortOrder;
    if (!sortOrder) return null;
    const resolved = resolveBasicProperty(this.context.sessionArgs, this.context.viewArgs, sortOrder);
    return resolved === 'ASC' || resolved === 'DESC' ? resolved : null;
  }

  /**
   * Gets pagination id column.
   * Original method name: getPaginationIdColumn
   */
  getPaginationIdColumn(): string {
    const pagination = this.queryDef.objectFieldDef.pagination;
    return hasCursorProperties(pagination) ? pagination.idColumn ?? 'id' : 'id';
  }

  /**
   * Returns a comparator function for ordering.
   * Original method name: order
   */
  order(mapper?: (col: string) => string): ((a: any, b: any) => number) | null {
    let orderBy = this.orderBy;
    if (orderBy === 'Unordered') return null;
    if (this.isPaginationViaLiveQuery()) {
      const sortOrder = this.getPaginationSortOrder();
      const cursorCols = this.getSelectedCursorColumns();
      if (!sortOrder || !cursorCols) return null;
      orderBy = cursorCols.map(col => [mapper ? mapper(col) : col, sortOrder]);
    }
    return (a: any, b: any): number => {
      for (const [col, dir] of [...(orderBy || []), ['id', 'ASC']]) {
        const valA = a[col];
        const valB = b[col];
        if (valA !== null || valB !== null) {
          if (valA === null) return dir === 'ASC' ? 1 : -1;
          if (valB === null || valA < valB) return dir === 'ASC' ? -1 : 1;
          if (valA > valB) return dir === 'ASC' ? 1 : -1;
        }
      }
      return 0;
    };
  }

  /**
   * Checks if this is the first pagination page.
   * Original method name: isFirstPaginationPage
   */
  isFirstPaginationPage(): boolean {
    return !this.paginationArgs?.before && !this.paginationArgs?.after;
  }

  /**
   * Gets next page size for pagination.
   * Original method name: getNextPageSize
   */
  getNextPageSize(): number {
    return this.isFirstPaginationPage() ? this.getFirstPageSizeOrDefault(200) : this.paginationArgs?.count ?? 200;
  }

  /**
   * Returns a substituted query for pagination.
   * Original method name: getPaginationSubstitutedQuery
   */
  getPaginationSubstitutedQuery(mapper: (col: string) => string, encodeCursor?: (cursor: any) => string): SubstitutedQuery {
    if (!this.isPaginationQuery()) throw new Error(`[Pagination] Query ${this.queryId} is not a pagination query while accessing getPaginationSubstitutedQuery()`);
    const cursorCols = this.getSelectedCursorColumns();
    if (!cursorCols) throw new Error(`[Pagination] Query ${this.queryId} with invalid selectedCursorColumnSet = ${cursorCols}`);
    const sortOrder = this.getPaginationSortOrder();
    if (!sortOrder) throw new Error(`[Pagination] Query ${this.queryId} with invalid orderBy = ${sortOrder} while accessing getPaginationSubstitutedQuery()`);
    const orderArr = cursorCols.map(col => [col, sortOrder]);
    if (this.isFirstPaginationPage()) {
      return new SubstitutedQuery({
        fields: this.queryDef.objectDef.queriedFields,
        filter: transformExpression(this.context.sessionArgs, this.context.viewArgs, this.filter, this.queryDef.fieldArgs, this.parent) || null,
        limit: this.getNextPageSize(),
        orderBy: orderArr
      });
    }
    if (!this.paginationArgs?.after) throw new Error(`[Pagination] Query ${this.queryId} doesn't have paginationArgs.after ${this.paginationArgs} while accessing getPaginationSubstitutedQuery()`);
    let decodedCursor: any;
    try {
      decodedCursor = JSON.parse(encodeCursor ? encodeCursor(this.paginationArgs.after) : this.paginationArgs.after);
    } catch {
      throw new Error(`[Pagination] Query ${this.queryId} has invalid paginationArgs format ${this.paginationArgs.after} while accessing getPaginationSubstitutedQuery()`);
    }
    const idColumn = this.getPaginationIdColumn();
    const idValue = decodedCursor[idColumn];
    if (!idValue) throw new Error(`[Pagination] Query ${this.queryId} has invalid idColumn = ${idColumn} with value = ${idValue} and endCursor = ${JSON.stringify(decodedCursor)}`);
    const op = sortOrder === 'ASC' ? '>' : '<';
    const opEq = sortOrder === 'ASC' ? '>=' : '<=';
    const andConditions: any[] = [];
    const orConditions: any[] = [[idColumn, op, idValue]];
    for (const col of cursorCols) {
      const colValue = decodedCursor[col];
      if (colValue === undefined) throw new Error(`[Pagination] Query ${this.queryId} has invalid cursor column ${col} with value ${colValue} and endCursor ${decodedCursor}`);
      const mappedCol = mapper(col);
      andConditions.push([mappedCol, opEq, colValue]);
      if (col !== idColumn) {
        orConditions.push([mappedCol, op, colValue]);
      }
    }
    const paginationFilter = {
      and: [...andConditions, {
        or: [...orConditions]
      }]
    };
    if (!this.queryDef.objectFieldDef.filterDef) throw new Error(`[Pagination] Query ${this.queryId} doesn't have a filterDef`);
    const combinedFilter = parseFilterDefinition({
      and: [this.queryDef.objectFieldDef.filterDef, paginationFilter]
    });
    return new SubstitutedQuery({
      fields: this.queryDef.objectDef.queriedFields,
      filter: transformExpression(this.context.sessionArgs, this.context.viewArgs, combinedFilter, this.queryDef.fieldArgs, this.parent) || null,
      limit: this.getNextPageSize(),
      orderBy: orderArr
    });
  }
}

/**
 * Returns the parent object name for a query definition.
 * Original function name: p
 */
function getParentObjectName(queryDef: any): string | null {
  if (queryDef.parent instanceof QueryDef) {
    return queryDef.parent.objectDef.name;
  }
  if (queryDef.parent instanceof ComputedFieldQuery && (queryDef.parent.def.type.kind === 'object' || queryDef.parent.def.type.kind === 'objects')) {
    return queryDef.parent.def.type.name;
  }
  return null;
}

/**
 * Returns a unique query id for the query definition and arguments.
 * Original logic from constructor
 */
function getQueryId(queryDef: any, args: any[]): string {
  const parentName = getParentObjectName(queryDef);
  if (queryDef.isComputedFieldDependency && parentName === 'root' && queryDef.objectFieldDef.name === 'root') {
    return JSON.stringify(['computed', 'root', queryDef.objectDef.name, ...args]);
  }
  return JSON.stringify([parentName, queryDef.objectFieldDef.name, ...args]);
}

// Export refactored names
export const aV = QueryContext;