function i(e) {
  return Array.isArray ? Array.isArray(e) : "[object Array]" === b(e);
}
let s = 1 / 0;
function o(e) {
  if ("string" == typeof e) return e;
  let r = e + "";
  return "0" == r && 1 / e == -s ? "-0" : r;
}
function a(e) {
  return null == e ? "" : o(e);
}
function h(e) {
  return "string" == typeof e;
}
function d(e) {
  return "number" == typeof e;
}
function p(e) {
  return !0 === e || !1 === e || m(e) && "[object Boolean]" == b(e);
}
function g(e) {
  return "object" == typeof e;
}
function m(e) {
  return g(e) && null !== e;
}
function v(e) {
  return null != e;
}
function y(e) {
  return !e.trim().length;
}
function b(e) {
  return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
let O = "Incorrect 'index' type";
let x = e => `Invalid value for key ${e}`;
let w = e => `Pattern length exceeds max of ${e}.`;
let k = e => `Missing ${e} property in key`;
let _ = e => `Property 'weight' in key '${e}' must be a positive integer`;
let S = Object.prototype.hasOwnProperty;
class E {
  constructor(e) {
    this._keys = [];
    this._keyMap = {};
    let r = 0;
    e.forEach(e => {
      let n = $$A(e);
      this._keys.push(n);
      this._keyMap[n.id] = n;
      r += n.weight;
    });
    this._keys.forEach(e => {
      e.weight /= r;
    });
  }
  get(e) {
    return this._keyMap[e];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function $$A(e) {
  let r = null;
  let n = null;
  let s = null;
  let o = 1;
  let a = null;
  if (h(e) || i(e)) {
    s = e;
    r = C(e);
    n = T(e);
  } else {
    if (!S.call(e, "name")) throw Error(k("name"));
    let i = e.name;
    if (s = i, S.call(e, "weight") && (o = e.weight) <= 0) throw Error(_(i));
    r = C(i);
    n = T(i);
    a = e.getFn;
  }
  return {
    path: r,
    id: n,
    weight: o,
    src: s,
    getFn: a
  };
}
function C(e) {
  return i(e) ? e : e.split(".");
}
function T(e) {
  return i(e) ? e.join(".") : e;
}
let I = {
  useExtendedSearch: !1,
  getFn: function (e, r) {
    let n = [];
    let s = !1;
    let o = (e, r, g) => {
      if (v(e)) {
        if (r[g]) {
          let m = e[r[g]];
          if (v(m)) {
            if (g === r.length - 1 && (h(m) || d(m) || p(m))) n.push(a(m));else if (i(m)) {
              s = !0;
              for (function () {
                let e = 0;
                let n = m.length;
              }(); e < n; e += 1) o(m[e], r, g + 1);
            } else r.length && o(m, r, g + 1);
          }
        } else n.push(e);
      }
    };
    o(e, h(r) ? r.split(".") : r, 0);
    return s ? n : n[0];
  },
  ignoreLocation: !1,
  ignoreFieldNorm: !1,
  fieldNormWeight: 1
};
var P = {
  isCaseSensitive: !1,
  includeScore: !1,
  keys: [],
  shouldSort: !0,
  sortFn: (e, r) => e.score === r.score ? e.idx < r.idx ? -1 : 1 : e.score < r.score ? -1 : 1,
  includeMatches: !1,
  findAllMatches: !1,
  minMatchCharLength: 1,
  location: 0,
  threshold: .6,
  distance: 100,
  ...I
};
let R = /[^ ]+/g;
function M(e = 1, r = 3) {
  let n = new Map();
  let i = Math.pow(10, r);
  return {
    get(r) {
      let s = r.match(R).length;
      if (n.has(s)) return n.get(s);
      let o = parseFloat(Math.round(1 / Math.pow(s, .5 * e) * i) / i);
      n.set(s, o);
      return o;
    },
    clear() {
      n.clear();
    }
  };
}
class D {
  constructor({
    getFn: e = P.getFn,
    fieldNormWeight: r = P.fieldNormWeight
  } = {}) {
    this.norm = M(r, 3);
    this.getFn = e;
    this.isCreated = !1;
    this.setIndexRecords();
  }
  setSources(e = []) {
    this.docs = e;
  }
  setIndexRecords(e = []) {
    this.records = e;
  }
  setKeys(e = []) {
    this.keys = e;
    this._keysMap = {};
    e.forEach((e, r) => {
      this._keysMap[e.id] = r;
    });
  }
  create() {
    !this.isCreated && this.docs.length && (this.isCreated = !0, h(this.docs[0]) ? this.docs.forEach((e, r) => {
      this._addString(e, r);
    }) : this.docs.forEach((e, r) => {
      this._addObject(e, r);
    }), this.norm.clear());
  }
  add(e) {
    let r = this.size();
    h(e) ? this._addString(e, r) : this._addObject(e, r);
  }
  removeAt(e) {
    var _this = this;
    this.records.splice(e, 1);
    for (function () {
      let r = e;
      let n = _this.size();
    }(); r < n; r += 1) this.records[r].i -= 1;
  }
  getValueForItemAtKeyId(e, r) {
    return e[this._keysMap[r]];
  }
  size() {
    return this.records.length;
  }
  _addString(e, r) {
    if (!v(e) || y(e)) return;
    let n = {
      v: e,
      i: r,
      n: this.norm.get(e)
    };
    this.records.push(n);
  }
  _addObject(e, r) {
    let n = {
      i: r,
      $: {}
    };
    this.keys.forEach((r, s) => {
      let o = r.getFn ? r.getFn(e) : this.getFn(e, r.path);
      if (v(o)) {
        if (i(o)) {
          let e = [];
          let r = [{
            nestedArrIndex: -1,
            value: o
          }];
          for (; r.length;) {
            let {
              nestedArrIndex,
              value
            } = r.pop();
            if (v(value)) {
              if (h(value) && !y(value)) {
                let r = {
                  v: value,
                  i: nestedArrIndex,
                  n: this.norm.get(value)
                };
                e.push(r);
              } else i(value) && value.forEach((e, n) => {
                r.push({
                  nestedArrIndex: n,
                  value: e
                });
              });
            }
          }
          n.$[s] = e;
        } else if (h(o) && !y(o)) {
          let e = {
            v: o,
            n: this.norm.get(o)
          };
          n.$[s] = e;
        }
      }
    });
    this.records.push(n);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
}
function N(e, r, {
  getFn: n = P.getFn,
  fieldNormWeight: i = P.fieldNormWeight
} = {}) {
  let s = new D({
    getFn: n,
    fieldNormWeight: i
  });
  s.setKeys(e.map($$A));
  s.setSources(r);
  s.create();
  return s;
}
function $(e, {
  getFn: r = P.getFn,
  fieldNormWeight: n = P.fieldNormWeight
} = {}) {
  let {
    keys,
    records
  } = e;
  let o = new D({
    getFn: r,
    fieldNormWeight: n
  });
  o.setKeys(keys);
  o.setIndexRecords(records);
  return o;
}
function L(e, {
  errors: r = 0,
  currentLocation: n = 0,
  expectedLocation: i = 0,
  distance: s = P.distance,
  ignoreLocation: o = P.ignoreLocation
} = {}) {
  let a = r / e.length;
  if (o) return a;
  let h = Math.abs(i - n);
  return s ? a + h / s : h ? 1 : a;
}
function j(e = [], r = P.minMatchCharLength) {
  let n = [];
  let i = -1;
  let s = -1;
  let o = 0;
  for (let a = e.length; o < a; o += 1) {
    let a = e[o];
    a && -1 === i ? i = o : a || -1 === i || ((s = o - 1) - i + 1 >= r && n.push([i, s]), i = -1);
  }
  e[o - 1] && o - i >= r && n.push([i, o - 1]);
  return n;
}
let z = 32;
function Z(e, r, n, {
  location: i = P.location,
  distance: s = P.distance,
  threshold: o = P.threshold,
  findAllMatches: a = P.findAllMatches,
  minMatchCharLength: h = P.minMatchCharLength,
  includeMatches: d = P.includeMatches,
  ignoreLocation: p = P.ignoreLocation
} = {}) {
  let g;
  if (r.length > z) throw Error(w(z));
  let m = r.length;
  let v = e.length;
  let y = Math.max(0, Math.min(i, v));
  let b = o;
  let O = y;
  let x = h > 1 || d;
  let k = x ? Array(v) : [];
  for (; (g = e.indexOf(r, O)) > -1;) if (b = Math.min(L(r, {
    currentLocation: g,
    expectedLocation: y,
    distance: s,
    ignoreLocation: p
  }), b), O = g + m, x) {
    let e = 0;
    for (; e < m;) {
      k[g + e] = 1;
      e += 1;
    }
  }
  O = -1;
  let _ = [];
  let S = 1;
  let E = m + v;
  let A = 1 << m - 1;
  for (let i = 0; i < m; i += 1) {
    let o = 0;
    let h = E;
    for (; o < h;) {
      L(r, {
        errors: i,
        currentLocation: y + h,
        expectedLocation: y,
        distance: s,
        ignoreLocation: p
      }) <= b ? o = h : E = h;
      h = Math.floor((E - o) / 2 + o);
    }
    E = h;
    let d = Math.max(1, y - h + 1);
    let g = a ? v : Math.min(y + h, v) + m;
    let w = Array(g + 2);
    w[g + 1] = (1 << i) - 1;
    for (let o = g; o >= d; o -= 1) {
      let a = o - 1;
      let h = n[e.charAt(a)];
      if (x && (k[a] = +!!h), w[o] = (w[o + 1] << 1 | 1) & h, i && (w[o] |= (_[o + 1] | _[o]) << 1 | 1 | _[o + 1]), w[o] & A && (S = L(r, {
        errors: i,
        currentLocation: a,
        expectedLocation: y,
        distance: s,
        ignoreLocation: p
      })) <= b) {
        if (b = S, (O = a) <= y) break;
        d = Math.max(1, 2 * y - O);
      }
    }
    if (L(r, {
      errors: i + 1,
      currentLocation: y,
      expectedLocation: y,
      distance: s,
      ignoreLocation: p
    }) > b) break;
    _ = w;
  }
  let C = {
    isMatch: O >= 0,
    score: Math.max(.001, S)
  };
  if (x) {
    let e = j(k, h);
    e.length ? d && (C.indices = e) : C.isMatch = !1;
  }
  return C;
}
function F(e) {
  let r = {};
  for (function () {
    let n = 0;
    let i = e.length;
  }(); n < i; n += 1) {
    let s = e.charAt(n);
    r[s] = (r[s] || 0) | 1 << i - n - 1;
  }
  return r;
}
class U {
  constructor(e, {
    location: r = P.location,
    threshold: n = P.threshold,
    distance: i = P.distance,
    includeMatches: s = P.includeMatches,
    findAllMatches: o = P.findAllMatches,
    minMatchCharLength: a = P.minMatchCharLength,
    isCaseSensitive: h = P.isCaseSensitive,
    ignoreLocation: d = P.ignoreLocation
  } = {}) {
    this.options = {
      location: r,
      threshold: n,
      distance: i,
      includeMatches: s,
      findAllMatches: o,
      minMatchCharLength: a,
      isCaseSensitive: h,
      ignoreLocation: d
    };
    this.pattern = h ? e : e.toLocaleLowerCase();
    this.chunks = [];
    if (!this.pattern.length) return;
    let p = (e, r) => {
      this.chunks.push({
        pattern: e,
        alphabet: F(e),
        startIndex: r
      });
    };
    let g = this.pattern.length;
    if (g > z) {
      let e = 0;
      let r = g % z;
      let n = g - r;
      for (; e < n;) {
        p(this.pattern.substr(e, z), e);
        e += z;
      }
      if (r) {
        let e = g - z;
        p(this.pattern.substr(e), e);
      }
    } else p(this.pattern, 0);
  }
  searchIn(e) {
    let {
      isCaseSensitive,
      includeMatches
    } = this.options;
    if (isCaseSensitive || (e = e.toLocaleLowerCase()), this.pattern === e) {
      let r = {
        isMatch: !0,
        score: 0
      };
      includeMatches && (r.indices = [[0, e.length - 1]]);
      return r;
    }
    let {
      location,
      distance,
      threshold,
      findAllMatches,
      minMatchCharLength,
      ignoreLocation
    } = this.options;
    let p = [];
    let g = 0;
    let m = !1;
    this.chunks.forEach(({
      pattern: r,
      alphabet: v,
      startIndex: y
    }) => {
      let {
        isMatch,
        score,
        indices
      } = Z(e, r, v, {
        location: location + y,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        includeMatches,
        ignoreLocation
      });
      isMatch && (m = !0);
      g += score;
      isMatch && indices && (p = [...p, ...indices]);
    });
    let v = {
      isMatch: m,
      score: m ? g / this.chunks.length : 1
    };
    m && includeMatches && (v.indices = p);
    return v;
  }
}
class Q {
  constructor(e) {
    this.pattern = e;
  }
  static isMultiMatch(e) {
    return V(e, this.multiRegex);
  }
  static isSingleMatch(e) {
    return V(e, this.singleRegex);
  }
  search() {}
}
function V(e, r) {
  let n = e.match(r);
  return n ? n[1] : null;
}
class B extends Q {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/s;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(e) {
    let r = e === this.pattern;
    return {
      isMatch: r,
      score: r ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class q extends Q {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/s;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(e) {
    let r = -1 === e.indexOf(this.pattern);
    return {
      isMatch: r,
      score: r ? 0 : 1,
      indices: [0, e.length - 1]
    };
  }
}
class W extends Q {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/s;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(e) {
    let r = e.startsWith(this.pattern);
    return {
      isMatch: r,
      score: r ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class Y extends Q {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/s;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(e) {
    let r = !e.startsWith(this.pattern);
    return {
      isMatch: r,
      score: r ? 0 : 1,
      indices: [0, e.length - 1]
    };
  }
}
class G extends Q {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/s;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(e) {
    let r = e.endsWith(this.pattern);
    return {
      isMatch: r,
      score: r ? 0 : 1,
      indices: [e.length - this.pattern.length, e.length - 1]
    };
  }
}
class X extends Q {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/s;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(e) {
    let r = !e.endsWith(this.pattern);
    return {
      isMatch: r,
      score: r ? 0 : 1,
      indices: [0, e.length - 1]
    };
  }
}
class H extends Q {
  constructor(e, {
    location: r = P.location,
    threshold: n = P.threshold,
    distance: i = P.distance,
    includeMatches: s = P.includeMatches,
    findAllMatches: o = P.findAllMatches,
    minMatchCharLength: a = P.minMatchCharLength,
    isCaseSensitive: h = P.isCaseSensitive,
    ignoreLocation: d = P.ignoreLocation
  } = {}) {
    super(e);
    this._bitapSearch = new U(e, {
      location: r,
      threshold: n,
      distance: i,
      includeMatches: s,
      findAllMatches: o,
      minMatchCharLength: a,
      isCaseSensitive: h,
      ignoreLocation: d
    });
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/s;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(e) {
    return this._bitapSearch.searchIn(e);
  }
}
class K extends Q {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/s;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(e) {
    let r;
    let n = 0;
    let i = [];
    let s = this.pattern.length;
    for (; (r = e.indexOf(this.pattern, n)) > -1;) {
      n = r + s;
      i.push([r, n - 1]);
    }
    let o = !!i.length;
    return {
      isMatch: o,
      score: o ? 0 : 1,
      indices: i
    };
  }
}
let J = [B, K, W, Y, X, G, q, H];
let ee = J.length;
let et = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
let er = "|";
function en(e, r = {}) {
  return e.split(er).map(e => {
    let n = e.trim().split(et).filter(e => e && !!e.trim());
    let i = [];
    for (function () {
      let e = 0;
      let s = n.length;
    }(); e < s; e += 1) {
      let s = n[e];
      let o = !1;
      let a = -1;
      for (; !o && ++a < ee;) {
        let e = J[a];
        let n = e.isMultiMatch(s);
        n && (i.push(new e(n, r)), o = !0);
      }
      if (!o) for (a = -1; ++a < ee;) {
        let e = J[a];
        let n = e.isSingleMatch(s);
        if (n) {
          i.push(new e(n, r));
          break;
        }
      }
    }
    return i;
  });
}
let ei = new Set([H.type, K.type]);
class es {
  constructor(e, {
    isCaseSensitive: r = P.isCaseSensitive,
    includeMatches: n = P.includeMatches,
    minMatchCharLength: i = P.minMatchCharLength,
    ignoreLocation: s = P.ignoreLocation,
    findAllMatches: o = P.findAllMatches,
    location: a = P.location,
    threshold: h = P.threshold,
    distance: d = P.distance
  } = {}) {
    this.query = null;
    this.options = {
      isCaseSensitive: r,
      includeMatches: n,
      minMatchCharLength: i,
      findAllMatches: o,
      ignoreLocation: s,
      location: a,
      threshold: h,
      distance: d
    };
    this.pattern = r ? e : e.toLocaleLowerCase();
    this.query = en(this.pattern, this.options);
  }
  static condition(e, r) {
    return r.useExtendedSearch;
  }
  searchIn(e) {
    let r = this.query;
    if (!r) return {
      isMatch: !1,
      score: 1
    };
    let {
      includeMatches,
      isCaseSensitive
    } = this.options;
    e = isCaseSensitive ? e : e.toLocaleLowerCase();
    let s = 0;
    let o = [];
    let a = 0;
    for (function () {
      let i = 0;
      let h = r.length;
    }(); i < h; i += 1) {
      let h = r[i];
      o.length = 0;
      s = 0;
      for (function () {
        let r = 0;
        let i = h.length;
      }(); r < i; r += 1) {
        let i = h[r];
        let {
          isMatch,
          indices,
          score
        } = i.search(e);
        if (isMatch) {
          if (s += 1, a += score, includeMatches) {
            let e = i.constructor.type;
            ei.has(e) ? o = [...o, ...indices] : o.push(indices);
          }
        } else {
          a = 0;
          s = 0;
          o.length = 0;
          break;
        }
      }
      if (s) {
        let e = {
          isMatch: !0,
          score: a / s
        };
        includeMatches && (e.indices = o);
        return e;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
}
let eo = [];
function ea(...e) {
  eo.push(...e);
}
function el(e, r) {
  for (function () {
    let n = 0;
    let i = eo.length;
  }(); n < i; n += 1) {
    let i = eo[n];
    if (i.condition(e, r)) return new i(e, r);
  }
  return new U(e, r);
}
let eu = {
  AND: "$and",
  OR: "$or"
};
let ec = {
  PATH: "$path",
  PATTERN: "$val"
};
let eh = e => !!(e[eu.AND] || e[eu.OR]);
let ed = e => !!e[ec.PATH];
let ef = e => !i(e) && g(e) && !eh(e);
let ep = e => ({
  [eu.AND]: Object.keys(e).map(r => ({
    [r]: e[r]
  }))
});
function eg(e, r, {
  auto: n = !0
} = {}) {
  let s = e => {
    let o = Object.keys(e);
    let a = ed(e);
    if (!a && o.length > 1 && !eh(e)) return s(ep(e));
    if (ef(e)) {
      let i = a ? e[ec.PATH] : o[0];
      let s = a ? e[ec.PATTERN] : e[i];
      if (!h(s)) throw Error(x(i));
      let d = {
        keyId: T(i),
        pattern: s
      };
      n && (d.searcher = el(s, r));
      return d;
    }
    let d = {
      children: [],
      operator: o[0]
    };
    o.forEach(r => {
      let n = e[r];
      i(n) && n.forEach(e => {
        d.children.push(s(e));
      });
    });
    return d;
  };
  eh(e) || (e = ep(e));
  return s(e);
}
function em(e, {
  ignoreFieldNorm: r = P.ignoreFieldNorm
}) {
  e.forEach(e => {
    let n = 1;
    e.matches.forEach(({
      key: e,
      norm: i,
      score: s
    }) => {
      let o = e ? e.weight : null;
      n *= Math.pow(0 === s && o ? Number.EPSILON : s, (o || 1) * (r ? 1 : i));
    });
    e.score = n;
  });
}
function ev(e, r) {
  let n = e.matches;
  r.matches = [];
  v(n) && n.forEach(e => {
    if (!v(e.indices) || !e.indices.length) return;
    let {
      indices,
      value
    } = e;
    let s = {
      indices,
      value
    };
    e.key && (s.key = e.key.src);
    e.idx > -1 && (s.refIndex = e.idx);
    r.matches.push(s);
  });
}
function ey(e, r) {
  r.score = e.score;
}
function eb(e, r, {
  includeMatches: n = P.includeMatches,
  includeScore: i = P.includeScore
} = {}) {
  let s = [];
  n && s.push(ev);
  i && s.push(ey);
  return e.map(e => {
    let {
      idx
    } = e;
    let i = {
      item: r[idx],
      refIndex: idx
    };
    s.length && s.forEach(r => {
      r(e, i);
    });
    return i;
  });
}
export class $$eO0 {
  constructor(e, r = {}, n) {
    this.options = {
      ...P,
      ...r
    };
    this.options.useExtendedSearch;
    this._keyStore = new E(this.options.keys);
    this.setCollection(e, n);
  }
  setCollection(e, r) {
    if (this._docs = e, r && !(r instanceof D)) throw Error(O);
    this._myIndex = r || N(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(e) {
    v(e) && (this._docs.push(e), this._myIndex.add(e));
  }
  remove(e = () => !1) {
    var _this2 = this;
    let r = [];
    for (function () {
      let n = 0;
      let i = _this2._docs.length;
    }(); n < i; n += 1) {
      let s = this._docs[n];
      e(s, n) && (this.removeAt(n), n -= 1, i -= 1, r.push(s));
    }
    return r;
  }
  removeAt(e) {
    this._docs.splice(e, 1);
    this._myIndex.removeAt(e);
  }
  getIndex() {
    return this._myIndex;
  }
  search(e, {
    limit: r = -1
  } = {}) {
    let {
      includeMatches,
      includeScore,
      shouldSort,
      sortFn,
      ignoreFieldNorm
    } = this.options;
    let p = h(e) ? h(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e);
    em(p, {
      ignoreFieldNorm
    });
    shouldSort && p.sort(sortFn);
    d(r) && r > -1 && (p = p.slice(0, r));
    return eb(p, this._docs, {
      includeMatches,
      includeScore
    });
  }
  _searchStringList(e) {
    let r = el(e, this.options);
    let {
      records
    } = this._myIndex;
    let i = [];
    records.forEach(({
      v: e,
      i: n,
      n: s
    }) => {
      if (!v(e)) return;
      let {
        isMatch,
        score,
        indices
      } = r.searchIn(e);
      isMatch && i.push({
        item: e,
        idx: n,
        matches: [{
          score,
          value: e,
          norm: s,
          indices
        }]
      });
    });
    return i;
  }
  _searchLogical(e) {
    let r = eg(e, this.options);
    let n = (e, r, i) => {
      if (!e.children) {
        let {
          keyId,
          searcher
        } = e;
        let o = this._findMatches({
          key: this._keyStore.get(keyId),
          value: this._myIndex.getValueForItemAtKeyId(r, keyId),
          searcher
        });
        return o && o.length ? [{
          idx: i,
          item: r,
          matches: o
        }] : [];
      }
      let s = [];
      for (function () {
        let o = 0;
        let a = e.children.length;
      }(); o < a; o += 1) {
        let a = n(e.children[o], r, i);
        if (a.length) s.push(...a);else if (e.operator === eu.AND) return [];
      }
      return s;
    };
    let i = this._myIndex.records;
    let s = {};
    let o = [];
    i.forEach(({
      $: e,
      i: i
    }) => {
      if (v(e)) {
        let a = n(r, e, i);
        a.length && (s[i] || (s[i] = {
          idx: i,
          item: e,
          matches: []
        }, o.push(s[i])), a.forEach(({
          matches: e
        }) => {
          s[i].matches.push(...e);
        }));
      }
    });
    return o;
  }
  _searchObjectList(e) {
    let r = el(e, this.options);
    let {
      keys,
      records
    } = this._myIndex;
    let s = [];
    records.forEach(({
      $: e,
      i: i
    }) => {
      if (!v(e)) return;
      let o = [];
      keys.forEach((n, i) => {
        o.push(...this._findMatches({
          key: n,
          value: e[i],
          searcher: r
        }));
      });
      o.length && s.push({
        idx: i,
        item: e,
        matches: o
      });
    });
    return s;
  }
  _findMatches({
    key: e,
    value: r,
    searcher: n
  }) {
    if (!v(r)) return [];
    let s = [];
    if (i(r)) r.forEach(({
      v: r,
      i: i,
      n: o
    }) => {
      if (!v(r)) return;
      let {
        isMatch,
        score,
        indices
      } = n.searchIn(r);
      isMatch && s.push({
        score,
        key: e,
        value: r,
        idx: i,
        norm: o,
        indices
      });
    });else {
      let {
        v,
        n
      } = r;
      let {
        isMatch,
        score,
        indices
      } = n.searchIn(v);
      isMatch && s.push({
        score,
        key: e,
        value: v,
        norm: n,
        indices
      });
    }
    return s;
  }
}
$$eO0.version = "6.6.2";
$$eO0.createIndex = N;
$$eO0.parseIndex = $;
$$eO0.config = P;
$$eO0.parseQuery = eg;
ea(es);
export const A = $$eO0;