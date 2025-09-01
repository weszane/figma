import { hasTypeProperty } from "../905/957591";
import { Gz } from "../905/19248";
import { QueryDef } from "../905/8928";
import { parseFilterDefinition } from "../905/824218";
import { hasCursorProperties, isNotCursorColumnSet } from "../905/552287";
import { transformExpression, resolvePropertyWithParent, resolveBasicProperty } from "../905/415342";
import { ComputedFieldQuery } from "../905/329793";
class s {
  fields;
  filter;
  limit;
  orderBy;
  constructor({
    fields: e,
    filter: t,
    limit: i,
    orderBy: n
  }) {
    this.fields = e;
    this.limit = i;
    this.filter = t;
    this.orderBy = n;
  }
  matches(e) {
    if (!this.filter) return !0;
    let t = i => {
      switch (i.type) {
        case "binary":
          let n = e[i.left];
          let r = i.right;
          switch (i.op) {
            case "=":
              return n === r;
            case "<>":
              return n !== r;
          }
          if (null === n || null === r) return !1;
          switch (i.op) {
            case ">":
              return n > r;
            case ">=":
              return n >= r;
            case "<":
              return n < r;
            case "<=":
              return n <= r;
          }
        case "in":
          let a = e[i.left];
          return i.right.some(e => e === a);
        case "or":
          return i.expressions.some(t);
        case "and":
          return i.expressions.every(t);
      }
    };
    return t(this.filter);
  }
  singleMatchingId() {
    if (this.filter && "binary" === this.filter.type) {
      let {
        left,
        right
      } = this.filter;
      if ("id" === left && "string" == typeof right) return right;
    }
    return null;
  }
}
export class $$u0 {
  constructor(e, t, i, a) {
    this.queryDef = e;
    this.context = t;
    this.parent = i;
    this.paginationArgs = a;
    let s = [];
    for (let e of this.queryDef.objectFieldDef.args) {
      let t = this.queryDef.fieldArgs[e.name];
      hasTypeProperty(t) ? "session" === t.type ? s.push(this.context.sessionArgs[t.ref]) : s.push(this.context.viewArgs[t.ref]) : s.push(t);
    }
    this.usedResolverValues = Gz(this.filter).filter(({
      type: e
    }) => "parent" === e).map(({
      ref: e
    }) => i[e]);
    this.usedResolverValues.push(...this.getUsedHttpResolverValues());
    this.usedResolverValues.push(...this.getUsedRedisResolverValues());
    this.usedResolverValues.push(...this.getUsedStatsigResolverValues());
    let o = [s, this.usedResolverValues];
    this.isStaticHttpQuery() && t.viewArgs.__requestId && o.push(t.viewArgs.__requestId);
    this.isPaginationQuery() && o.push(a);
    this.queryId = function (e, t) {
      let i = p(e);
      return e.isComputedFieldDependency && "root" === i && "root" === e.objectFieldDef.name ? JSON.stringify(["computed", "root", e.objectDef.name, ...t]) : JSON.stringify([i, e.objectFieldDef.name, ...t]);
    }(this.queryDef, o);
  }
  queryId;
  usedResolverValues;
  span;
  queryInfo() {
    return {
      objectName: this.queryDef.objectDef.name,
      parent: {
        objectName: p(this.queryDef),
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
  substituted() {
    return new s({
      fields: this.queryDef.objectDef.queriedFields,
      filter: transformExpression(this.context.sessionArgs, this.context.viewArgs, this.filter, this.queryDef.fieldArgs, this.parent) || null,
      limit: this.limit,
      orderBy: this.orderBy || null
    });
  }
  getResolvedHttpResolverConfig() {
    let e = this.queryDef.objectFieldDef.resolver;
    if (e?.type !== "HTTP") return null;
    let t = {};
    for (let [i, n] of Object.entries(e.queryParams)) {
      let e = resolvePropertyWithParent(this.context.sessionArgs, this.context.viewArgs, n, this.queryDef.fieldArgs, this.parent);
      t[i] = e;
    }
    let i = [];
    if ("RedisPubsub" === e.realtimePolicy.type) for (let t of e.realtimePolicy.channelPostfix) {
      let e = resolvePropertyWithParent(this.context.sessionArgs, this.context.viewArgs, t, this.queryDef.fieldArgs, this.parent);
      i.push(e);
    }
    return {
      ...e,
      queryParams: t,
      realtimePolicy: "RedisPubsub" === e.realtimePolicy.type ? {
        ...e.realtimePolicy,
        channelPostfix: i
      } : e.realtimePolicy
    };
  }
  getUsedHttpResolverValues() {
    let e = this.queryDef.objectFieldDef.resolver;
    if (e?.type !== "HTTP") return [];
    let t = [];
    for (let i of Object.keys(e.queryParams).sort()) {
      let r = e.queryParams[i];
      if (!hasTypeProperty(r) || "parent" !== r.type) continue;
      let a = resolvePropertyWithParent(this.context.sessionArgs, this.context.viewArgs, r, this.queryDef.fieldArgs, this.parent);
      t.push(a);
    }
    if ("RedisPubsub" === e.realtimePolicy.type) for (let i of e.realtimePolicy.channelPostfix) {
      if (!hasTypeProperty(i) || "parent" !== i.type) continue;
      let e = resolvePropertyWithParent(this.context.sessionArgs, this.context.viewArgs, i, this.queryDef.fieldArgs, this.parent);
      t.push(e);
    }
    return t;
  }
  getResolvedRedisResolverConfig() {
    let e = this.queryDef.objectFieldDef.resolver;
    if (e?.type !== "Redis") return null;
    let t = [];
    for (let i of e.keyPostfix) {
      let e = resolvePropertyWithParent(this.context.sessionArgs, this.context.viewArgs, i, this.queryDef.fieldArgs, this.parent);
      t.push(e);
    }
    return {
      ...e,
      keyPostfix: t
    };
  }
  getUsedRedisResolverValues() {
    let e = this.queryDef.objectFieldDef.resolver;
    if (e?.type !== "Redis") return [];
    let t = [];
    for (let i of e.keyPostfix) {
      if (!hasTypeProperty(i) || "parent" !== i.type) continue;
      let e = resolvePropertyWithParent(this.context.sessionArgs, this.context.viewArgs, i, this.queryDef.fieldArgs, this.parent);
      t.push(e);
    }
    return t;
  }
  getResolvedStatsigResolverValues() {
    let e = this.queryDef.objectFieldDef.resolver;
    if (e?.type !== "Statsig") throw Error("Resolver type is not correct. Expected a Statsig resolver got: " + e?.type);
    let t = {
      userID: (this.context.sessionArgs.userId || "null").toString(),
      customIDs: {},
      custom: {}
    };
    if (e.statsigUser.customIDs) for (let [i, n] of Object.entries(e.statsigUser.customIDs)) {
      let e = resolvePropertyWithParent(this.context.sessionArgs, this.context.viewArgs, n, this.queryDef.fieldArgs, this.parent);
      if ("string" == typeof e) t.customIDs[i] = e;else if (null !== e) throw Error(`Statsig user customID: ${i} was not a string type. Received: ${typeof e}. Value: ${e}`);
    }
    if (e.statsigUser.custom) for (let [i, n] of Object.entries(e.statsigUser.custom)) {
      let e = resolvePropertyWithParent(this.context.sessionArgs, this.context.viewArgs, n, this.queryDef.fieldArgs, this.parent);
      "string" == typeof e ? t.custom[i] = e : e instanceof Date && (t.custom[i] = e.getTime());
    }
    return t;
  }
  getUsedStatsigResolverValues() {
    let e = this.queryDef.objectFieldDef.resolver;
    if (e?.type !== "Statsig") return [];
    let t = [];
    let i = (this.context.sessionArgs.userId || "null").toString();
    for (let [r, a] of (t.push(i), Object.entries(e.statsigUser.customIDs ?? {}))) hasTypeProperty(a) && "parent" === a.type && t.push(resolvePropertyWithParent(this.context.sessionArgs, this.context.viewArgs, a, this.queryDef.fieldArgs, this.parent));
    return t;
  }
  isContextStale(e) {
    return Gz(this.filter).filter(({
      type: e
    }) => "parent" === e).some(({
      ref: t
    }, i) => this.usedResolverValues[i] !== e[t]);
  }
  isPaginationQuery() {
    return void 0 !== this.paginationArgs;
  }
  isPaginationViaLiveQuery() {
    return !!hasCursorProperties(this.queryDef.objectFieldDef.pagination) && !this.queryDef.objectFieldDef.resolver && !!this.queryDef.objectFieldDef.filter && !!this.queryDef.objectFieldDef.pagination.cursorColumnSet;
  }
  isPaginationViaSinatra() {
    return this.queryDef.objectFieldDef.resolver?.type === "HTTP" && isNotCursorColumnSet(this.queryDef.objectFieldDef.pagination);
  }
  get paginationResolverType() {
    return this.isPaginationViaLiveQuery() ? "native" : this.isPaginationViaSinatra() ? "sinatra" : "unknown";
  }
  isStaticHttpQuery() {
    return this.queryDef.objectFieldDef.resolver?.type === "HTTP" && this.queryDef.objectFieldDef.resolver?.realtimePolicy.type === "Static";
  }
  getFirstPageSizeOrDefault(e) {
    let t = this.queryDef.objectFieldDef.pagination?.firstPageSize;
    if (!t) return e;
    let i = resolveBasicProperty(this.context.sessionArgs, this.context.viewArgs, t);
    return "number" == typeof i ? i : e;
  }
  getSelectedCursorColumns() {
    if (!hasCursorProperties(this.queryDef.objectFieldDef.pagination)) return null;
    let e = this.queryDef.objectFieldDef.pagination.selectedCursorColumn;
    if (!e) return null;
    let t = resolveBasicProperty(this.context.sessionArgs, this.context.viewArgs, e);
    let i = this.queryDef.objectFieldDef.pagination?.cursorColumnSet;
    return "string" == typeof t && i && i[t] || null;
  }
  getPaginationSortOrder() {
    if (!hasCursorProperties(this.queryDef.objectFieldDef.pagination)) return null;
    let e = this.queryDef.objectFieldDef.pagination.sortOrder;
    if (!e) return null;
    let t = resolveBasicProperty(this.context.sessionArgs, this.context.viewArgs, e);
    return "ASC" === t || "DESC" === t ? t : null;
  }
  getPaginationIdColumn() {
    return hasCursorProperties(this.queryDef.objectFieldDef.pagination) ? this.queryDef.objectFieldDef.pagination.idColumn ?? "id" : "id";
  }
  order(e) {
    let t = this.orderBy;
    if ("Unordered" === t) return null;
    if (this.isPaginationViaLiveQuery()) {
      let i = this.getPaginationSortOrder();
      let n = this.getSelectedCursorColumns();
      if (!i || !n) return null;
      t = n.map(t => [e ? e(t) : t, i]);
    }
    return (e, i) => {
      for (let [n, r] of [...(t || []), ["id", "ASC"]]) {
        let t = e[n];
        let a = i[n];
        if (null !== t || null !== a) {
          if (null === t) return "ASC" === r ? 1 : -1;
          if (null === a || t < a) return "ASC" === r ? -1 : 1;
          if (t > a) return "ASC" === r ? 1 : -1;
        }
      }
      return 0;
    };
  }
  isFirstPaginationPage() {
    return !this.paginationArgs?.before && !this.paginationArgs?.after;
  }
  getNextPageSize() {
    return this.isFirstPaginationPage() ? this.getFirstPageSizeOrDefault(200) : this.paginationArgs?.count ?? 200;
  }
  getPaginationSubstitutedQuery(e, t) {
    let i;
    if (!this.isPaginationQuery()) throw Error(`[Pagination] Query ${this.queryId} is not a pagination query while accessing getPaginationSubstitutedQuery()`);
    let n = this.getSelectedCursorColumns();
    if (!n) throw Error(`[Pagination] Query ${this.queryId} with invalid selectedCursorColumnSet = ${n}`);
    let r = this.getPaginationSortOrder();
    if (!r) throw Error(`[Pagination] Query ${this.queryId} with invalid orderBy = ${r} while accessing getPaginationSubstitutedQuery()`);
    let a = n.map(e => [e, r]);
    if (this.isFirstPaginationPage()) return new s({
      fields: this.queryDef.objectDef.queriedFields,
      filter: transformExpression(this.context.sessionArgs, this.context.viewArgs, this.filter, this.queryDef.fieldArgs, this.parent) || null,
      limit: this.getNextPageSize(),
      orderBy: a
    });
    if (!this.paginationArgs?.after) throw Error(`[Pagination] Query ${this.queryId} doesn't have paginationArgs.after ${this.paginationArgs} while accessing getPaginationSubstitutedQuery()`);
    try {
      i = JSON.parse(t ? t(this.paginationArgs.after) : this.paginationArgs.after);
    } catch (e) {
      throw Error(`[Pagination] Query ${this.queryId} has invalid paginationArgs format ${this.paginationArgs.after} while accessing getPaginationSubstitutedQuery()`);
    }
    let l = this.getPaginationIdColumn();
    let c = i[l];
    if (!c) throw Error(`[Pagination] Query ${this.queryId} has invalid idColumn = ${l} with value = ${c} and endCursor = ${JSON.stringify(i)}`);
    let u = "ASC" === r ? ">" : "<";
    let p = "ASC" === r ? ">=" : "<=";
    let m = [];
    let h = [[l, u, c]];
    for (let t of n) {
      let n = i[t];
      if (void 0 === n) throw Error(`[Pagination] Query ${this.queryId} has invalid cursor column ${t} with value ${n} and endCursor ${i}`);
      let r = e(t);
      m.push([r, p, n]);
      t !== l && h.push([r, u, n]);
    }
    let g = {
      and: [...m, {
        or: [...h]
      }]
    };
    if (!this.queryDef.objectFieldDef.filterDef) throw Error(`[Pagination] Query ${this.queryId} doesn't have a filterDef`);
    let f = parseFilterDefinition({
      and: [this.queryDef.objectFieldDef.filterDef, g]
    });
    return new s({
      fields: this.queryDef.objectDef.queriedFields,
      filter: transformExpression(this.context.sessionArgs, this.context.viewArgs, f, this.queryDef.fieldArgs, this.parent) || null,
      limit: this.getNextPageSize(),
      orderBy: a
    });
  }
}
function p(e) {
  return e.parent instanceof QueryDef ? e.parent.objectDef.name : e.parent instanceof ComputedFieldQuery && ("object" === e.parent.def.type.kind || "objects" === e.parent.def.type.kind) ? e.parent.def.type.name : null;
}
export const aV = $$u0;