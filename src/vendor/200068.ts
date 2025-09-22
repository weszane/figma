import { ZodFirstPartyTypeKind, ZodOptional } from "../vendor/835909";
let i;
let s = Symbol("Let zodToJsonSchema decide on which parser to use");
let o = {
  name: void 0,
  $refStrategy: "root",
  basePath: ["#"],
  effectStrategy: "input",
  pipeStrategy: "all",
  dateStrategy: "format:date-time",
  mapStrategy: "entries",
  removeAdditionalStrategy: "passthrough",
  allowedAdditionalProperties: !0,
  rejectedAdditionalProperties: !1,
  definitionPath: "definitions",
  target: "jsonSchema7",
  strictUnions: !1,
  definitions: {},
  errorMessages: !1,
  markdownDescription: !1,
  patternStrategy: "escape",
  applyRegexFlags: !1,
  emailStrategy: "format:email",
  base64Strategy: "contentEncoding:base64",
  nameStrategy: "ref"
};
let a = e => "string" == typeof e ? {
  ...o,
  name: e
} : {
  ...o,
  ...e
};
let h = e => {
  let r = a(e);
  let n = void 0 !== r.name ? [...r.basePath, r.definitionPath, r.name] : r.basePath;
  return {
    ...r,
    currentPath: n,
    propertyPath: void 0,
    seen: new Map(Object.entries(r.definitions).map(([e, n]) => [n._def, {
      def: n._def,
      path: [...r.basePath, r.definitionPath, e],
      jsonSchema: void 0
    }]))
  };
};
function p() {
  return {};
}
function g(e, r, n, i) {
  i?.errorMessages && n && (e.errorMessage = {
    ...e.errorMessage,
    [r]: n
  });
}
function m(e, r, n, i, s) {
  e[r] = n;
  g(e, r, i, s);
}
function v(e, r) {
  let n = {
    type: "array"
  };
  e.type?._def && e.type?._def?.typeName !== ZodFirstPartyTypeKind.ZodAny && (n.items = eo(e.type._def, {
    ...r,
    currentPath: [...r.currentPath, "items"]
  }));
  e.minLength && m(n, "minItems", e.minLength.value, e.minLength.message, r);
  e.maxLength && m(n, "maxItems", e.maxLength.value, e.maxLength.message, r);
  e.exactLength && (m(n, "minItems", e.exactLength.value, e.exactLength.message, r), m(n, "maxItems", e.exactLength.value, e.exactLength.message, r));
  return n;
}
function y(e, r) {
  let n = {
    type: "integer",
    format: "int64"
  };
  if (!e.checks) return n;
  for (let i of e.checks) switch (i.kind) {
    case "min":
      "jsonSchema7" === r.target ? i.inclusive ? m(n, "minimum", i.value, i.message, r) : m(n, "exclusiveMinimum", i.value, i.message, r) : (i.inclusive || (n.exclusiveMinimum = !0), m(n, "minimum", i.value, i.message, r));
      break;
    case "max":
      "jsonSchema7" === r.target ? i.inclusive ? m(n, "maximum", i.value, i.message, r) : m(n, "exclusiveMaximum", i.value, i.message, r) : (i.inclusive || (n.exclusiveMaximum = !0), m(n, "maximum", i.value, i.message, r));
      break;
    case "multipleOf":
      m(n, "multipleOf", i.value, i.message, r);
  }
  return n;
}
function b() {
  return {
    type: "boolean"
  };
}
function O(e, r) {
  return eo(e.type._def, r);
}
let x = (e, r) => eo(e.innerType._def, r);
function w(e, r, n) {
  let i = n ?? r.dateStrategy;
  if (Array.isArray(i)) return {
    anyOf: i.map((n, i) => w(e, r, n))
  };
  switch (i) {
    case "string":
    case "format:date-time":
      return {
        type: "string",
        format: "date-time"
      };
    case "format:date":
      return {
        type: "string",
        format: "date"
      };
    case "integer":
      return k(e, r);
  }
}
let k = (e, r) => {
  let n = {
    type: "integer",
    format: "unix-time"
  };
  if ("openApi3" === r.target) return n;
  for (let i of e.checks) switch (i.kind) {
    case "min":
      m(n, "minimum", i.value, i.message, r);
      break;
    case "max":
      m(n, "maximum", i.value, i.message, r);
  }
  return n;
};
function _(e, r) {
  return {
    ...eo(e.innerType._def, r),
    default: e.defaultValue()
  };
}
function S(e, r) {
  return "input" === r.effectStrategy ? eo(e.schema._def, r) : {};
}
function E(e) {
  return {
    type: "string",
    enum: Array.from(e.values)
  };
}
let A = e => (!("type" in e) || "string" !== e.type) && "allOf" in e;
function C(e, r) {
  let n = [eo(e.left._def, {
    ...r,
    currentPath: [...r.currentPath, "allOf", "0"]
  }), eo(e.right._def, {
    ...r,
    currentPath: [...r.currentPath, "allOf", "1"]
  })].filter(e => !!e);
  let i = "jsonSchema2019-09" === r.target ? {
    unevaluatedProperties: !1
  } : void 0;
  let s = [];
  n.forEach(e => {
    if (A(e)) {
      s.push(...e.allOf);
      void 0 === e.unevaluatedProperties && (i = void 0);
    } else {
      let r = e;
      if ("additionalProperties" in e && !1 === e.additionalProperties) {
        let {
          additionalProperties,
          ...i
        } = e;
        r = i;
      } else i = void 0;
      s.push(r);
    }
  });
  return s.length ? {
    allOf: s,
    ...i
  } : void 0;
}
function T(e, r) {
  let n = typeof e.value;
  return "bigint" !== n && "number" !== n && "boolean" !== n && "string" !== n ? {
    type: Array.isArray(e.value) ? "array" : "object"
  } : "openApi3" === r.target ? {
    type: "bigint" === n ? "integer" : n,
    enum: [e.value]
  } : {
    type: "bigint" === n ? "integer" : n,
    const: e.value
  };
}
let I = {
  cuid: /^[cC][^\s-]{8,}$/,
  cuid2: /^[0-9a-z]+$/,
  ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
  email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
  emoji: () => (void 0 === i && (i = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), i),
  ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  nanoid: /^[a-zA-Z0-9_-]{21}$/,
  jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
};
function P(e, r) {
  let n = {
    type: "string"
  };
  if (e.checks) for (let i of e.checks) switch (i.kind) {
    case "min":
      m(n, "minLength", "number" == typeof n.minLength ? Math.max(n.minLength, i.value) : i.value, i.message, r);
      break;
    case "max":
      m(n, "maxLength", "number" == typeof n.maxLength ? Math.min(n.maxLength, i.value) : i.value, i.message, r);
      break;
    case "email":
      switch (r.emailStrategy) {
        case "format:email":
          N(n, "email", i.message, r);
          break;
        case "format:idn-email":
          N(n, "idn-email", i.message, r);
          break;
        case "pattern:zod":
          $(n, I.email, i.message, r);
      }
      break;
    case "url":
      N(n, "uri", i.message, r);
      break;
    case "uuid":
      N(n, "uuid", i.message, r);
      break;
    case "regex":
      $(n, i.regex, i.message, r);
      break;
    case "cuid":
      $(n, I.cuid, i.message, r);
      break;
    case "cuid2":
      $(n, I.cuid2, i.message, r);
      break;
    case "startsWith":
      $(n, RegExp(`^${R(i.value, r)}`), i.message, r);
      break;
    case "endsWith":
      $(n, RegExp(`${R(i.value, r)}$`), i.message, r);
      break;
    case "datetime":
      N(n, "date-time", i.message, r);
      break;
    case "date":
      N(n, "date", i.message, r);
      break;
    case "time":
      N(n, "time", i.message, r);
      break;
    case "duration":
      N(n, "duration", i.message, r);
      break;
    case "length":
      m(n, "minLength", "number" == typeof n.minLength ? Math.max(n.minLength, i.value) : i.value, i.message, r);
      m(n, "maxLength", "number" == typeof n.maxLength ? Math.min(n.maxLength, i.value) : i.value, i.message, r);
      break;
    case "includes":
      $(n, RegExp(R(i.value, r)), i.message, r);
      break;
    case "ip":
      "v6" !== i.version && N(n, "ipv4", i.message, r);
      "v4" !== i.version && N(n, "ipv6", i.message, r);
      break;
    case "base64url":
      $(n, I.base64url, i.message, r);
      break;
    case "jwt":
      $(n, I.jwt, i.message, r);
      break;
    case "cidr":
      "v6" !== i.version && $(n, I.ipv4Cidr, i.message, r);
      "v4" !== i.version && $(n, I.ipv6Cidr, i.message, r);
      break;
    case "emoji":
      $(n, I.emoji(), i.message, r);
      break;
    case "ulid":
      $(n, I.ulid, i.message, r);
      break;
    case "base64":
      switch (r.base64Strategy) {
        case "format:binary":
          N(n, "binary", i.message, r);
          break;
        case "contentEncoding:base64":
          m(n, "contentEncoding", "base64", i.message, r);
          break;
        case "pattern:zod":
          $(n, I.base64, i.message, r);
      }
      break;
    case "nanoid":
      $(n, I.nanoid, i.message, r);
    case "toLowerCase":
    case "toUpperCase":
    case "trim":
      break;
    default:
      (e => {})(0);
  }
  return n;
}
function R(e, r) {
  return "escape" === r.patternStrategy ? D(e) : e;
}
let M = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function D(e) {
  let r = "";
  for (let n = 0; n < e.length; n++) {
    M.has(e[n]) || (r += "\\");
    r += e[n];
  }
  return r;
}
function N(e, r, n, i) {
  e.format || e.anyOf?.some(e => e.format) ? (e.anyOf || (e.anyOf = []), e.format && (e.anyOf.push({
    format: e.format,
    ...(e.errorMessage && i.errorMessages && {
      errorMessage: {
        format: e.errorMessage.format
      }
    })
  }), delete e.format, e.errorMessage && (delete e.errorMessage.format, 0 === Object.keys(e.errorMessage).length && delete e.errorMessage)), e.anyOf.push({
    format: r,
    ...(n && i.errorMessages && {
      errorMessage: {
        format: n
      }
    })
  })) : m(e, "format", r, n, i);
}
function $(e, r, n, i) {
  e.pattern || e.allOf?.some(e => e.pattern) ? (e.allOf || (e.allOf = []), e.pattern && (e.allOf.push({
    pattern: e.pattern,
    ...(e.errorMessage && i.errorMessages && {
      errorMessage: {
        pattern: e.errorMessage.pattern
      }
    })
  }), delete e.pattern, e.errorMessage && (delete e.errorMessage.pattern, 0 === Object.keys(e.errorMessage).length && delete e.errorMessage)), e.allOf.push({
    pattern: L(r, i),
    ...(n && i.errorMessages && {
      errorMessage: {
        pattern: n
      }
    })
  })) : m(e, "pattern", L(r, i), n, i);
}
function L(e, r) {
  if (!r.applyRegexFlags || !e.flags) return e.source;
  let n = {
    i: e.flags.includes("i"),
    m: e.flags.includes("m"),
    s: e.flags.includes("s")
  };
  let i = n.i ? e.source.toLowerCase() : e.source;
  let s = "";
  let o = !1;
  let a = !1;
  let h = !1;
  for (let e = 0; e < i.length; e++) {
    if (o) {
      s += i[e];
      o = !1;
      continue;
    }
    if (n.i) {
      if (a) {
        if (i[e].match(/[a-z]/)) {
          h ? (s += i[e], s += `${i[e - 2]}-${i[e]}`.toUpperCase(), h = !1) : "-" === i[e + 1] && i[e + 2]?.match(/[a-z]/) ? (s += i[e], h = !0) : s += `${i[e]}${i[e].toUpperCase()}`;
          continue;
        }
      } else if (i[e].match(/[a-z]/)) {
        s += `[${i[e]}${i[e].toUpperCase()}]`;
        continue;
      }
    }
    if (n.m) {
      if ("^" === i[e]) {
        s += `(^|(?<=[\r
]))`;
        continue;
      }
      if ("$" === i[e]) {
        s += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (n.s && "." === i[e]) {
      s += a ? `${i[e]}\r
` : `[${i[e]}\r
]`;
      continue;
    }
    s += i[e];
    "\\" === i[e] ? o = !0 : a && "]" === i[e] ? a = !1 : a || "[" !== i[e] || (a = !0);
  }
  try {
    new RegExp(s);
  } catch {
    console.warn(`Could not convert regex pattern at ${r.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`);
    return e.source;
  }
  return s;
}
function j(e, r) {
  if ("openAi" === r.target && console.warn("Warning: OpenAI may not support records in schemas! Try an array of key-value pairs instead."), "openApi3" === r.target && e.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodEnum) return {
    type: "object",
    required: e.keyType._def.values,
    properties: e.keyType._def.values.reduce((n, i) => ({
      ...n,
      [i]: eo(e.valueType._def, {
        ...r,
        currentPath: [...r.currentPath, "properties", i]
      }) ?? {}
    }), {}),
    additionalProperties: r.rejectedAdditionalProperties
  };
  let n = {
    type: "object",
    additionalProperties: eo(e.valueType._def, {
      ...r,
      currentPath: [...r.currentPath, "additionalProperties"]
    }) ?? r.allowedAdditionalProperties
  };
  if ("openApi3" === r.target) return n;
  if (e.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodString && e.keyType._def.checks?.length) {
    let {
      type,
      ...s
    } = P(e.keyType._def, r);
    return {
      ...n,
      propertyNames: s
    };
  }
  if (e.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodEnum) return {
    ...n,
    propertyNames: {
      enum: e.keyType._def.values
    }
  };
  if (e.keyType?._def.typeName === ZodFirstPartyTypeKind.ZodBranded && e.keyType._def.type._def.typeName === ZodFirstPartyTypeKind.ZodString && e.keyType._def.type._def.checks?.length) {
    let {
      type,
      ...s
    } = O(e.keyType._def, r);
    return {
      ...n,
      propertyNames: s
    };
  }
  return n;
}
function z(e, r) {
  return "record" === r.mapStrategy ? j(e, r) : {
    type: "array",
    maxItems: 125,
    items: {
      type: "array",
      items: [eo(e.keyType._def, {
        ...r,
        currentPath: [...r.currentPath, "items", "items", "0"]
      }) || {}, eo(e.valueType._def, {
        ...r,
        currentPath: [...r.currentPath, "items", "items", "1"]
      }) || {}],
      minItems: 2,
      maxItems: 2
    }
  };
}
function Z(e) {
  let r = e.values;
  let n = Object.keys(e.values).filter(e => "number" != typeof r[r[e]]).map(e => r[e]);
  let i = Array.from(new Set(n.map(e => typeof e)));
  return {
    type: 1 === i.length ? "string" === i[0] ? "string" : "number" : ["string", "number"],
    enum: n
  };
}
function F() {
  return {
    not: {}
  };
}
function U(e) {
  return "openApi3" === e.target ? {
    enum: ["null"],
    nullable: !0
  } : {
    type: "null"
  };
}
let Q = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null"
};
function V(e, r) {
  if ("openApi3" === r.target) return B(e, r);
  let n = e.options instanceof Map ? Array.from(e.options.values()) : e.options;
  if (n.every(e => e._def.typeName in Q && (!e._def.checks || !e._def.checks.length))) {
    let e = n.reduce((e, r) => {
      let n = Q[r._def.typeName];
      return n && !e.includes(n) ? [...e, n] : e;
    }, []);
    return {
      type: e.length > 1 ? e : e[0]
    };
  }
  if (n.every(e => "ZodLiteral" === e._def.typeName && !e.description)) {
    let e = n.reduce((e, r) => {
      let n = typeof r._def.value;
      switch (n) {
        case "string":
        case "number":
        case "boolean":
          return [...e, n];
        case "bigint":
          return [...e, "integer"];
        case "object":
          if (null === r._def.value) return [...e, "null"];
        default:
          return e;
      }
    }, []);
    if (e.length === n.length) {
      let r = e.filter((e, r, n) => n.indexOf(e) === r);
      return {
        type: r.length > 1 ? r : r[0],
        enum: n.reduce((e, r) => e.includes(r._def.value) ? e : [...e, r._def.value], [])
      };
    }
  } else if (n.every(e => "ZodEnum" === e._def.typeName)) return {
    type: "string",
    enum: n.reduce((e, r) => [...e, ...r._def.values.filter(r => !e.includes(r))], [])
  };
  return B(e, r);
}
let B = (e, r) => {
  let n = (e.options instanceof Map ? Array.from(e.options.values()) : e.options).map((e, n) => eo(e._def, {
    ...r,
    currentPath: [...r.currentPath, "anyOf", `${n}`]
  })).filter(e => !!e && (!r.strictUnions || "object" == typeof e && Object.keys(e).length > 0));
  return n.length ? {
    anyOf: n
  } : void 0;
};
function q(e, r) {
  if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(e.innerType._def.typeName) && (!e.innerType._def.checks || !e.innerType._def.checks.length)) return "openApi3" === r.target ? {
    type: Q[e.innerType._def.typeName],
    nullable: !0
  } : {
    type: [Q[e.innerType._def.typeName], "null"]
  };
  if ("openApi3" === r.target) {
    let n = eo(e.innerType._def, {
      ...r,
      currentPath: [...r.currentPath]
    });
    return n && "$ref" in n ? {
      allOf: [n],
      nullable: !0
    } : n && {
      ...n,
      nullable: !0
    };
  }
  let n = eo(e.innerType._def, {
    ...r,
    currentPath: [...r.currentPath, "anyOf", "0"]
  });
  return n && {
    anyOf: [n, {
      type: "null"
    }]
  };
}
function W(e, r) {
  let n = {
    type: "number"
  };
  if (!e.checks) return n;
  for (let i of e.checks) switch (i.kind) {
    case "int":
      n.type = "integer";
      g(n, "type", i.message, r);
      break;
    case "min":
      "jsonSchema7" === r.target ? i.inclusive ? m(n, "minimum", i.value, i.message, r) : m(n, "exclusiveMinimum", i.value, i.message, r) : (i.inclusive || (n.exclusiveMinimum = !0), m(n, "minimum", i.value, i.message, r));
      break;
    case "max":
      "jsonSchema7" === r.target ? i.inclusive ? m(n, "maximum", i.value, i.message, r) : m(n, "exclusiveMaximum", i.value, i.message, r) : (i.inclusive || (n.exclusiveMaximum = !0), m(n, "maximum", i.value, i.message, r));
      break;
    case "multipleOf":
      m(n, "multipleOf", i.value, i.message, r);
  }
  return n;
}
function Y(e, r) {
  let n = "openAi" === r.target;
  let i = {
    type: "object",
    properties: {}
  };
  let s = [];
  let o = e.shape();
  for (let e in o) {
    let a = o[e];
    if (void 0 === a || void 0 === a._def) continue;
    let h = X(a);
    h && n && (a instanceof ZodOptional && (a = a._def.innerType), a.isNullable() || (a = a.nullable()), h = !1);
    let p = eo(a._def, {
      ...r,
      currentPath: [...r.currentPath, "properties", e],
      propertyPath: [...r.currentPath, "properties", e]
    });
    void 0 !== p && (i.properties[e] = p, h || s.push(e));
  }
  s.length && (i.required = s);
  let a = G(e, r);
  void 0 !== a && (i.additionalProperties = a);
  return i;
}
function G(e, r) {
  if ("ZodNever" !== e.catchall._def.typeName) return eo(e.catchall._def, {
    ...r,
    currentPath: [...r.currentPath, "additionalProperties"]
  });
  switch (e.unknownKeys) {
    case "passthrough":
      return r.allowedAdditionalProperties;
    case "strict":
      return r.rejectedAdditionalProperties;
    case "strip":
      return "strict" === r.removeAdditionalStrategy ? r.allowedAdditionalProperties : r.rejectedAdditionalProperties;
  }
}
function X(e) {
  try {
    return e.isOptional();
  } catch {
    return !0;
  }
}
let H = (e, r) => {
  if (r.currentPath.toString() === r.propertyPath?.toString()) return eo(e.innerType._def, r);
  let n = eo(e.innerType._def, {
    ...r,
    currentPath: [...r.currentPath, "anyOf", "1"]
  });
  return n ? {
    anyOf: [{
      not: {}
    }, n]
  } : {};
};
let K = (e, r) => {
  if ("input" === r.pipeStrategy) return eo(e.$$in._def, r);
  if ("output" === r.pipeStrategy) return eo(e.out._def, r);
  let n = eo(e.$$in._def, {
    ...r,
    currentPath: [...r.currentPath, "allOf", "0"]
  });
  let i = eo(e.out._def, {
    ...r,
    currentPath: [...r.currentPath, "allOf", n ? "1" : "0"]
  });
  return {
    allOf: [n, i].filter(e => void 0 !== e)
  };
};
function J(e, r) {
  return eo(e.type._def, r);
}
function ee(e, r) {
  let n = {
    type: "array",
    uniqueItems: !0,
    items: eo(e.valueType._def, {
      ...r,
      currentPath: [...r.currentPath, "items"]
    })
  };
  e.minSize && m(n, "minItems", e.minSize.value, e.minSize.message, r);
  e.maxSize && m(n, "maxItems", e.maxSize.value, e.maxSize.message, r);
  return n;
}
function et(e, r) {
  return e.rest ? {
    type: "array",
    minItems: e.items.length,
    items: e.items.map((e, n) => eo(e._def, {
      ...r,
      currentPath: [...r.currentPath, "items", `${n}`]
    })).reduce((e, r) => void 0 === r ? e : [...e, r], []),
    additionalItems: eo(e.rest._def, {
      ...r,
      currentPath: [...r.currentPath, "additionalItems"]
    })
  } : {
    type: "array",
    minItems: e.items.length,
    maxItems: e.items.length,
    items: e.items.map((e, n) => eo(e._def, {
      ...r,
      currentPath: [...r.currentPath, "items", `${n}`]
    })).reduce((e, r) => void 0 === r ? e : [...e, r], [])
  };
}
function er() {
  return {
    not: {}
  };
}
function en() {
  return {};
}
let ei = (e, r) => eo(e.innerType._def, r);
let es = (e, r, n) => {
  switch (r) {
    case ZodFirstPartyTypeKind.ZodString:
      return P(e, n);
    case ZodFirstPartyTypeKind.ZodNumber:
      return W(e, n);
    case ZodFirstPartyTypeKind.ZodObject:
      return Y(e, n);
    case ZodFirstPartyTypeKind.ZodBigInt:
      return y(e, n);
    case ZodFirstPartyTypeKind.ZodBoolean:
      return b();
    case ZodFirstPartyTypeKind.ZodDate:
      return w(e, n);
    case ZodFirstPartyTypeKind.ZodUndefined:
      return er();
    case ZodFirstPartyTypeKind.ZodNull:
      return U(n);
    case ZodFirstPartyTypeKind.ZodArray:
      return v(e, n);
    case ZodFirstPartyTypeKind.ZodUnion:
    case ZodFirstPartyTypeKind.ZodDiscriminatedUnion:
      return V(e, n);
    case ZodFirstPartyTypeKind.ZodIntersection:
      return C(e, n);
    case ZodFirstPartyTypeKind.ZodTuple:
      return et(e, n);
    case ZodFirstPartyTypeKind.ZodRecord:
      return j(e, n);
    case ZodFirstPartyTypeKind.ZodLiteral:
      return T(e, n);
    case ZodFirstPartyTypeKind.ZodEnum:
      return E(e);
    case ZodFirstPartyTypeKind.ZodNativeEnum:
      return Z(e);
    case ZodFirstPartyTypeKind.ZodNullable:
      return q(e, n);
    case ZodFirstPartyTypeKind.ZodOptional:
      return H(e, n);
    case ZodFirstPartyTypeKind.ZodMap:
      return z(e, n);
    case ZodFirstPartyTypeKind.ZodSet:
      return ee(e, n);
    case ZodFirstPartyTypeKind.ZodLazy:
      return () => e.getter()._def;
    case ZodFirstPartyTypeKind.ZodPromise:
      return J(e, n);
    case ZodFirstPartyTypeKind.ZodNaN:
    case ZodFirstPartyTypeKind.ZodNever:
      return F();
    case ZodFirstPartyTypeKind.ZodEffects:
      return S(e, n);
    case ZodFirstPartyTypeKind.ZodAny:
      return p();
    case ZodFirstPartyTypeKind.ZodUnknown:
      return en();
    case ZodFirstPartyTypeKind.ZodDefault:
      return _(e, n);
    case ZodFirstPartyTypeKind.ZodBranded:
      return O(e, n);
    case ZodFirstPartyTypeKind.ZodReadonly:
      return ei(e, n);
    case ZodFirstPartyTypeKind.ZodCatch:
      return x(e, n);
    case ZodFirstPartyTypeKind.ZodPipeline:
      return K(e, n);
    case ZodFirstPartyTypeKind.ZodFunction:
    case ZodFirstPartyTypeKind.ZodVoid:
    case ZodFirstPartyTypeKind.ZodSymbol:
      return;
    default:
      let i;
      return void (i = 0);
  }
};
function eo(e, r, n = !1) {
  let i = r.seen.get(e);
  if (r.override) {
    let o = r.override?.(e, r, i, n);
    if (o !== s) return o;
  }
  if (i && !n) {
    let e = ea(i, r);
    if (void 0 !== e) return e;
  }
  let o = {
    def: e,
    path: r.currentPath,
    jsonSchema: void 0
  };
  r.seen.set(e, o);
  let a = es(e, e.typeName, r);
  let h = "function" == typeof a ? eo(a(), r) : a;
  if (h && eu(e, r, h), r.postProcess) {
    let n = r.postProcess(h, e, r);
    o.jsonSchema = h;
    return n;
  }
  o.jsonSchema = h;
  return h;
}
let ea = (e, r) => {
  switch (r.$refStrategy) {
    case "root":
      return {
        $ref: e.path.join("/")
      };
    case "relative":
      return {
        $ref: el(r.currentPath, e.path)
      };
    case "none":
    case "seen":
      if (e.path.length < r.currentPath.length && e.path.every((e, n) => r.currentPath[n] === e)) {
        console.warn(`Recursive reference detected at ${r.currentPath.join("/")}! Defaulting to any`);
        return {};
      }
      return "seen" === r.$refStrategy ? {} : void 0;
  }
};
let el = (e, r) => {
  let n = 0;
  for (; n < e.length && n < r.length && e[n] === r[n]; n++);
  return [(e.length - n).toString(), ...r.slice(n)].join("/");
};
let eu = (e, r, n) => (e.description && (n.description = e.description, r.markdownDescription && (n.markdownDescription = e.description)), n);
let $$ec0 = (e, r) => {
  let n = h(r);
  let i = "object" == typeof r && r.definitions ? Object.entries(r.definitions).reduce((e, [r, i]) => ({
    ...e,
    [r]: eo(i._def, {
      ...n,
      currentPath: [...n.basePath, n.definitionPath, r]
    }, !0) ?? {}
  }), {}) : void 0;
  let s = "string" == typeof r ? r : r?.nameStrategy === "title" ? void 0 : r?.name;
  let o = eo(e._def, void 0 === s ? n : {
    ...n,
    currentPath: [...n.basePath, n.definitionPath, s]
  }, !1) ?? {};
  let a = "object" == typeof r && void 0 !== r.name && "title" === r.nameStrategy ? r.name : void 0;
  void 0 !== a && (o.title = a);
  let d = void 0 === s ? i ? {
    ...o,
    [n.definitionPath]: i
  } : o : {
    $ref: [...("relative" === n.$refStrategy ? [] : n.basePath), n.definitionPath, s].join("/"),
    [n.definitionPath]: {
      ...i,
      [s]: o
    }
  };
  "jsonSchema7" === n.target ? d.$schema = "http://json-schema.org/draft-07/schema#" : ("jsonSchema2019-09" === n.target || "openAi" === n.target) && (d.$schema = "https://json-schema.org/draft/2019-09/schema#");
  "openAi" === n.target && ("anyOf" in d || "oneOf" in d || "allOf" in d || "type" in d && Array.isArray(d.type)) && console.warn("Warning: OpenAI may not support schemas with unions as roots! Try wrapping it in an object property.");
  return d;
};
export const Ik = $$ec0;