function n(e) {
  return !!(e && "function" == typeof e.hasOwnProperty && (e.hasOwnProperty("__ownerID") || e._map && e._map.hasOwnProperty("__ownerID")));
}
function r(e, t, i) {
  return Object.keys(e).reduce((t, n) => {
    let r = `${n}`;
    return t.has(r) ? t.set(r, i(t.get(r), e[r])) : t;
  }, t);
}
class a {
  constructor(e, t) {
    t && (this._schemaAttribute = "string" == typeof t ? e => e[t] : t);
    this.define(e);
  }
  get isSingleSchema() {
    return !this._schemaAttribute;
  }
  define(e) {
    this.schema = e;
  }
  getSchemaAttribute(e, t, i) {
    return !this.isSingleSchema && this._schemaAttribute(e, t, i);
  }
  inferSchema(e, t, i) {
    if (this.isSingleSchema) return this.schema;
    let n = this.getSchemaAttribute(e, t, i);
    return this.schema[n];
  }
  normalizeValue(e, t, i, n, r, a) {
    let s = this.inferSchema(e, t, i);
    if (!s) return e;
    let o = n(e, t, i, s, r, a);
    return this.isSingleSchema || null == o ? o : {
      id: o,
      schema: this.getSchemaAttribute(e, t, i)
    };
  }
  denormalizeValue(e, t) {
    let i = n(e) ? e.get("schema") : e.schema;
    return this.isSingleSchema || i ? t((this.isSingleSchema ? void 0 : n(e) ? e.get("id") : e.id) || e, this.isSingleSchema ? this.schema : this.schema[i]) : e;
  }
}
let s = e => {
  if (Array.isArray(e) && e.length > 1) throw Error(`Expected schema definition to be a single schema, but found ${e.length}.`);
  return e[0];
};
let o = e => Array.isArray(e) ? e : Object.keys(e).map(t => e[t]);
let l = e => t => n(t) ? t.get(e) : t[e];
class d {
  constructor(e, t = {}, i = {}) {
    if (!e || "string" != typeof e) throw Error(`Expected a string key for Entity, but found ${e}.`);
    let {
      idAttribute = "id",
      mergeStrategy = (e, t) => ({
        ...e,
        ...t
      }),
      processStrategy = e => ({
        ...e
      }),
      fallbackStrategy = (e, t) => void 0
    } = i;
    this._key = e;
    this._getId = "function" == typeof idAttribute ? idAttribute : l(idAttribute);
    this._idAttribute = idAttribute;
    this._mergeStrategy = mergeStrategy;
    this._processStrategy = processStrategy;
    this._fallbackStrategy = fallbackStrategy;
    this.define(t);
  }
  get key() {
    return this._key;
  }
  get idAttribute() {
    return this._idAttribute;
  }
  define(e) {
    this.schema = Object.keys(e).reduce((t, i) => {
      let n = e[i];
      return {
        ...t,
        [i]: n
      };
    }, this.schema || {});
  }
  getId(e, t, i) {
    return this._getId(e, t, i);
  }
  merge(e, t) {
    return this._mergeStrategy(e, t);
  }
  fallback(e, t) {
    return this._fallbackStrategy(e, t);
  }
  normalize(e, t, i, n, r, a) {
    let s = this.getId(e, t, i);
    let o = this.key;
    if (o in a || (a[o] = {}), s in a[o] || (a[o][s] = []), a[o][s].some(t => t === e)) return s;
    a[o][s].push(e);
    let l = this._processStrategy(e, t, i);
    Object.keys(this.schema).forEach(t => {
      if (l.hasOwnProperty(t) && "object" == typeof l[t]) {
        let i = this.schema[t];
        let s = "function" == typeof i ? i(e) : i;
        l[t] = n(l[t], l, t, s, r, a);
      }
    });
    r(this, l, e, t, i);
    return s;
  }
  denormalize(e, t) {
    return n(e) ? r(this.schema, e, t) : (Object.keys(this.schema).forEach(i => {
      if (e.hasOwnProperty(i)) {
        let n = this.schema[i];
        e[i] = t(e[i], n);
      }
    }), e);
  }
}
function c(e, t, i, n, r, a, s) {
  let o = {
    ...t
  };
  Object.keys(e).forEach(i => {
    let n = e[i];
    let l = "function" == typeof n ? n(t) : n;
    let d = r(t[i], t, i, l, a, s);
    null == d ? delete o[i] : o[i] = d;
  });
  return o;
}
function u(e, t, i) {
  if (n(t)) return r(e, t, i);
  let a = {
    ...t
  };
  Object.keys(e).forEach(t => {
    null != a[t] && (a[t] = i(a[t], e[t]));
  });
  return a;
}
let p = (e, t, i, n, r, a) => "object" == typeof e && e ? "object" != typeof n || n.normalize && "function" == typeof n.normalize ? n.normalize(e, t, i, p, r, a) : (Array.isArray(n) ? function (e, t, i, n, r, a, l) {
  e = s(e);
  return o(t).map((t, s) => r(t, i, n, e, a, l));
} : c)(n, e, t, i, p, r, a) : e;
let m = e => (t, i, n, r, a) => {
  let s = t.key;
  let o = t.getId(n, r, a);
  s in e || (e[s] = {});
  let l = e[s][o];
  l ? e[s][o] = t.merge(l, i) : e[s][o] = i;
};
let $$h2 = {
  Array: class extends a {
    normalize(e, t, i, n, r, a) {
      return o(e).map((e, s) => this.normalizeValue(e, t, i, n, r, a)).filter(e => null != e);
    }
    denormalize(e, t) {
      return e && e.map ? e.map(e => this.denormalizeValue(e, t)).filter(e => null != e) : e;
    }
  },
  Entity: d,
  Object: class {
    constructor(e) {
      this.define(e);
    }
    define(e) {
      this.schema = Object.keys(e).reduce((t, i) => {
        let n = e[i];
        return {
          ...t,
          [i]: n
        };
      }, this.schema || {});
    }
    normalize(...e) {
      return c(this.schema, ...e);
    }
    denormalize(...e) {
      return u(this.schema, ...e);
    }
  },
  Union: class extends a {
    constructor(e, t) {
      if (!t) throw Error('Expected option "schemaAttribute" not found on UnionSchema.');
      super(e, t);
    }
    normalize(e, t, i, n, r, a) {
      return this.normalizeValue(e, t, i, n, r, a);
    }
    denormalize(e, t) {
      return this.denormalizeValue(e, t);
    }
  },
  Values: class extends a {
    normalize(e, t, i, n, r, a) {
      return Object.keys(e).reduce((t, i, s) => {
        let o = e[i];
        return null != o ? {
          ...t,
          [i]: this.normalizeValue(o, e, i, n, r, a)
        } : t;
      }, {});
    }
    denormalize(e, t) {
      return Object.keys(e).reduce((i, n) => {
        let r = e[n];
        return {
          ...i,
          [n]: this.denormalizeValue(r, t)
        };
      }, {});
    }
  }
};
export function $$g1(e, t) {
  if (!e || "object" != typeof e) throw Error(`Unexpected input given to normalize. Expected type to be "object", found "${null === e ? "null" : typeof e}".`);
  let i = {};
  let n = m(i);
  return {
    entities: i,
    result: p(e, e, null, t, n, {})
  };
}
let f = (e, t, i, n, r) => {
  let a = n(e, t);
  return (void 0 === a && t instanceof d && (a = t.fallback(e, t)), "object" != typeof a || null === a) ? a : (r[t.key] || (r[t.key] = {}), r[t.key][e] || (r[t.key][e] = a, r[t.key][e] = t.denormalize(a, i)), r[t.key][e]);
};
let _ = e => {
  let t = {};
  let i = A(e);
  return function e(n, r) {
    return "object" != typeof r || r.denormalize && "function" == typeof r.denormalize ? null == n ? n : r instanceof d ? f(n, r, e, i, t) : r.denormalize(n, e) : (Array.isArray(r) ? function (e, t, i) {
      e = s(e);
      return t && t.map ? t.map(t => i(t, e)).filter(e => null != e) : t;
    } : u)(r, n, e);
  };
};
let A = e => {
  let t = n(e);
  return (i, n) => {
    let r = n.key;
    return "object" == typeof i ? i : t ? e.getIn([r, i.toString()]) : e[r] && e[r][i];
  };
};
export function $$y0(e, t, i) {
  if (void 0 !== e) return _(i)(e, t);
}
export const NU = $$y0;
export const S8 = $$g1;
export const wQ = $$h2;