import { xb } from "../figma_app/465776";
import { x1 } from "../905/714362";
import { NoOpVm } from "../905/700654";
import { N } from "../905/125137";
function o(e) {
  Object.defineProperty(e, "isOptional", {
    enumerable: !0,
    get: function () {
      return {
        type: "optional",
        __schema: this
      };
    }
  });
  return e;
}
let l = {
  type: "number",
  min: function (e) {
    return o({
      ...this,
      __min: e
    });
  },
  max: function (e) {
    return o({
      ...this,
      __max: e
    });
  },
  range: function (e, t) {
    return o({
      ...this,
      __min: e,
      __max: t
    });
  }
};
let $$d1 = {
  bool: o({
    type: "boolean"
  }),
  string: o({
    type: "string"
  }),
  uint8Array: o({
    type: "uint8array"
  }),
  any: o({
    type: "any"
  }),
  function: o({
    type: "function"
  }),
  arrayOf: (e) => o({
    type: "array",
    __contentType: e
  }),
  dictionaryOf: (e) => o({
    type: "dictionary",
    __contentType: e
  }),
  exact: (e) => o({
    type: "exact",
    __shape: e
  }),
  oneOf: (e, t) => {
    if (t) for (let i of e) if ("exact" === i.type) {
      if (!i.__shape[t]) throw Error("All variants of a PropTypes.oneOf with a primaryField must contain the primary field");
    } else throw Error("All variants of a PropTypes.oneOf with a primaryField must be PropTypes.exact");
    return o({
      type: "oneOf",
      __options: e,
      __primaryField: t
    });
  },
  float: o(l),
  integer: o({
    ...l,
    __requireInteger: !0
  })
};
export function $$c6({
  vm: e,
  handle: t,
  zSchema: i,
  property: n
}) {
  let r = e.deepUnwrap(t, !0);
  let a = i.safeParse(r);
  if (a.success) return a.data;
  !function (e, t) {
    let i = e.issues.map((e) => function e(t, i) {
      let {
        issueSeparator = "\n",
        unionSeparator = "\n",
        indent = 0
      } = i || {};
      let s = t.path.map((e) => "number" == typeof e ? `[${e}]` : `.${e}`).join("");
      if ("invalid_union" === t.code) return `${" ".repeat(indent)}Expected ${t.path.length > 0 ? s + " to be " : ""}one of the following, but none matched:
` + t.unionErrors.reduce((r, o) => {
        let l = o.issues.length > 1;
        let d = (l ? `${" ".repeat(indent + 2)}Multiple issues${t.path.length > 0 ? " at " + s : ""}:
` : "") + o.issues.map((t) => e(t, {
          ...i,
          indent: indent + (l ? 4 : 2)
        })).join(issueSeparator);
        r.includes(d) || r.push(d);
        return r;
      }, []).join(unionSeparator);
      let o = " ".repeat(indent) + ("Required" === t.message ? "Required value missing" : t.message);
      if (t.path.length > 0) {
        if (1 === t.path.length) {
          let e = t.path[0];
          if ("number" == typeof e) return `${o} at index ${e}`;
        }
        return `${o} at ${s}`;
      }
      return o;
    }(e)).join("\n");
    throw Error(`Property "${t}" failed validation: ${i}`);
  }(a.error, n);
}
export function $$u0({
  vm: e,
  handle: t,
  schema: i,
  property: r
}) {
  try {
    return function e(t, i, r, a) {
      let s = t.$$typeof(i);
      function o() {
        var e;
        return `Expected "${a}" to have type ${e = r, p(e, 0)} but got ${function (e, t) {
          let i = e.$$typeof(t);
          if ("object" === i) {
            if (e.isArray(t)) return "array";
            if (e.isNull(t)) return "null";
          } else if ("number" === i) {
            let i = e.getNumber(t);
            if (isNaN(i)) return "NaN";
            if (i === 1 / 0 || i === -1 / 0) return "Infinity";
          }
          return i;
        }(t, i)} instead`;
      }
      if ("string" == typeof r) {
        if (t.isString(i) && r === t.getString(i)) return r;
        throw o();
      }
      if ("number" == typeof r) {
        if (t.isNumber(i) && r === t.getNumber(i)) return r;
        throw o();
      }
      if ("boolean" == typeof r) {
        if (t.isBoolean(i) && r === t.getBoolean(i)) return r;
        throw o();
      }
      if (null === r) {
        if (t.isNull(i)) return r;
        throw o();
      }
      if (void 0 === r) {
        if (t.isUndefined(i)) return r;
        throw o();
      }
      switch (r.type) {
        case "optional":
          if ("undefined" === s) return;
          return e(t, i, r.__schema, a);
        case "oneOf":
          if (r.__primaryField) {
            let n = `${a}.${r.__primaryField}`;
            if (!t.isObject(i)) throw `Expected "${a}" to be an object`;
            let s = null;
            for (let a of r.__options) try {
              e(t, t.getProp(i, r.__primaryField), a.__shape[r.__primaryField], n);
              s = a;
              break;
            } catch (e) {
              if ("string" != typeof e) throw e;
            }
            if (s) return e(t, i, s, a);
            throw `Expected "${n}" to be one of the allowed values for this property`;
          }
          {
            let n = [];
            for (let s of r.__options) try {
              return e(t, i, s, a);
            } catch (e) {
              if ("string" == typeof e) {
                n.push(e);
                continue;
              }
              throw e;
            }
            throw `Expected "${a}" to be one of the following, but none matched: 
` + n.map((e) => e.split("\n").map((e) => "  " + e).join("\n")).join("\n");
          }
        case "boolean":
          if ("boolean" !== s) throw o();
          return t.getBoolean(i);
        case "uint8array":
          if (!t.isUint8Array(i)) throw o();
          return t.getUint8Array(i);
        case "number":
          {
            if ("number" !== s) throw o();
            let e = t.getNumber(i);
            if (!isFinite(e)) throw o();
            if (null != r.__min && e < r.__min) throw `Expected "${a}" to have value >= ${r.__min}`;
            if (null != r.__max && e > r.__max) throw `Expected "${a}" to have value <= ${r.__max}`;
            if (null != r.__requireInteger && (0 | e) !== e) throw `Expected "${a}" to be an integer`;
            return e;
          }
        case "string":
          if ("string" !== s) throw o();
          return t.getString(i);
        case "any":
          if ("undefined" === s || t.isNull(i)) throw o();
          return t.deepUnwrap(i);
        case "array":
          {
            if (!t.isArray(i)) throw o();
            let n = [];
            let s = t.getNumberProp(i, "length");
            for (let o = 0; o < s; o++) n.push(e(t, t.getProp(i, o.toString()), r.__contentType, a + `.[${o}]`));
            return n;
          }
        case "dictionary":
          {
            if (!t.isObject(i) || t.isArray(i)) throw o();
            let n = {};
            for (let s of t.getKeys(i)) n[s] = e(t, t.getProp(i, s), r.__contentType, a + `["${s}"]`);
            return n;
          }
        case "exact":
          {
            if (!t.isObject(i)) throw o();
            let n = {};
            let s = Object.keys(r.__shape);
            for (let o of s) {
              let s = r.__shape[o];
              n[o] = e(t, t.getProp(i, o), s, a + "." + o);
            }
            for (let e of t.getKeys(i)) if (-1 === s.indexOf(e)) {
              var l;
              throw `Expected "${a}" to have type ${l = r, p(l, 0)} but got additional property "${e}"`;
            }
            return n;
          }
        case "function":
          if (!t.isFunction(i) || "function" !== s) throw o();
          return t.deepUnwrap(i, !0);
        default:
          xb(r);
      }
    }(e, t, i, r);
  } catch (e) {
    if ("string" == typeof e) throw Error(e);
    throw e;
  }
}
function p(e, t) {
  if (t > 50) return "[...(recursive type definition)...]";
  if ("string" == typeof e) return `"${e}"`;
  if ("number" == typeof e || "boolean" == typeof e) return `${e}`;
  if (null === e) return "null";
  if (void 0 === e) return "undefined";
  switch (e.type) {
    case "optional":
      return `(optional) ${p(e.__schema, t + 1)}`;
    case "oneOf":
      return `oneOf(${e.__options.map((e) => p(e, t + 1)).join(", ")})`;
    case "boolean":
      return "boolean";
    case "uint8array":
      return "Uint8Array";
    case "number":
      return "number";
    case "string":
      return "string";
    case "any":
      return "any";
    case "array":
      return `[array of ${p(e.__contentType, t + 1)}]`;
    case "dictionary":
      return `{object with values of type ${p(e.__contentType, t + 1)}}`;
    case "exact":
      return `{${Object.keys(e.__shape).map((i) => i + ": " + p(e.__shape[i], t + 1)).join(", ")}}`;
    case "function":
      return "function";
  }
}
export function $$m2(e, t) {
  let i = {
    ...e
  };
  for (let n in t) void 0 === e[n] && (i[n] = t[n]);
  return i;
}
export function $$h3(e, t, i) {
  let n = new NoOpVm();
  try {
    $$u0({
      vm: n,
      handle: n.deepWrap(e),
      schema: t,
      property: i
    });
  } catch (e) {
    throw e;
  } finally {
    n.destroy();
  }
}
export function $$g5(e, t, i) {
  let n;
  if (i ? N.PluginDataEntryEscapeHatchLimitSchema.safeParse(t).success || (n = "This pluginData entry exceeds the grace period limit of 64 MB.") : N.PluginDataEntryNormalLimitSchema.safeParse(t).success || (n = "This pluginData entry exceeds 100 kB per entry limit."), n) {
    x1("Plugin API", n, {
      pluginId: e,
      isPluginExempt: i,
      ext_enable_plugindata_limit_FF: !0,
      totalInputStrLength: t.reduce((e, t) => e + t.length, 0)
    }, {
      reportAsSentryError: !0
    });
    return Error(n);
  }
}
export const BK = $$u0;
export const By = $$d1;
export const Kb = $$m2;
export const MG = $$h3;
export const c0 = function e(t, i, r) {
  let a = [];
  function s() {
    return `Expected "${r}" to have type ${p(i, 0)} but got ${t} (type: ${typeof t}) instead`;
  }
  if ("string" == typeof i || "number" == typeof i || "boolean" == typeof i) {
    i !== t && a.push(s());
    return a;
  }
  if (null === i) {
    null !== t && a.push(s());
    return a;
  }
  if (void 0 === i) {
    void 0 !== t && a.push(s());
    return a;
  }
  if (i) switch (i.type) {
    case "optional":
      Array.isArray(t) && 0 === t.length || void 0 === t || null == t || e(t, i.__schema, r).forEach((e) => {
        a.push(e);
      });
      break;
    case "oneOf":
      if (i.__primaryField) {
        let n = `${r}.${i.__primaryField}`;
        if ("object" != typeof t) a.push(`Expected "${r}" to be an object`);else {
          let s = null;
          let o = !1;
          for (let r of i.__options) {
            let l = e(t[i.__primaryField], r.__shape[i.__primaryField], n);
            if (0 === l.length) {
              s = r;
              o = !0;
              a = [];
              break;
            }
            l.forEach((e) => a.push(e));
          }
          o ? e(t, s, r).forEach((e) => a.push(e)) : a.push(`Expected "${n}" to be one of the allowed values for this property`);
        }
        break;
      }
      {
        let n = [];
        for (let s of i.__options) {
          let i = e(t, s, r);
          if (0 === i.length) return a;
          n.push(...i);
        }
        let s = n.map((e) => e.split("\n").map((e) => "  " + e).join("\n"));
        a.push(`Expected "${r}" to be one of the following, but none matched: 
` + s.join("\n"));
        break;
      }
    case "boolean":
      "boolean" != typeof t && a.push(s());
      break;
    case "uint8array":
      t instanceof Object.getPrototypeOf(Uint32Array) || a.push(s());
      break;
    case "number":
      "number" != typeof t ? a.push(s()) : isFinite(t) ? null != i.__min && t < i.__min ? a.push(`Expected "${r}" to have value >= ${i.__min}`) : null != i.__max && t > i.__max ? a.push(`Expected "${r}" to have value <= ${i.__max}`) : null != i.__requireInteger && (0 | t) !== t && a.push(`Expected "${r}" to be an integer`) : a.push(s());
      break;
    case "string":
      "string" != typeof t && a.push(s());
      break;
    case "any":
      (void 0 === t || "null" === t) && a.push(s());
      break;
    case "array":
      if (Array.isArray(t)) {
        let n = t.length;
        for (let s = 0; s < n; s++) e(t[s], i.__contentType, r + `.[${s}]`).forEach((e) => a.push(e));
      } else a.push(s());
      break;
    case "dictionary":
      "object" != typeof t || Array.isArray(t) || null === t ? a.push(s()) : Object.keys(t).forEach((n) => {
        e(t[n], i.__contentType, r + `["${n}"]`).forEach((e) => a.push(e));
      });
      break;
    case "exact":
      "object" != typeof t || null === t ? a.push(s()) : Object.keys(i.__shape).forEach((n) => {
        let s = i.__shape[n];
        e(t[n], s, r + "." + n).forEach((e) => a.push(e));
      });
      break;
    case "function":
      "function" != typeof t && a.push(s());
      break;
    default:
      xb(i);
  }
  return a;
};
export const fp = $$g5;
export const u = $$c6;