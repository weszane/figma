import { parse } from "../vendor/739980";
var r;
var i;
var A;
var o;
var s = "vercel.ai.error";
var a = Symbol.$$for(s);
var l = class e extends Error {
  constructor({
    name: e,
    message: t,
    cause: n
  }) {
    super(t);
    this[r] = !0;
    this.name = e;
    this.cause = n;
  }
  static isInstance(t) {
    return e.hasMarker(t, s);
  }
  static hasMarker(e, t) {
    let n = Symbol.$$for(t);
    return null != e && "object" == typeof e && n in e && "boolean" == typeof e[n] && !0 === e[n];
  }
};
r = a;
var u = l;
function g(e) {
  return null == e ? "unknown error" : "string" == typeof e ? e : e instanceof Error ? e.message : JSON.stringify(e);
}
Symbol.$$for("vercel.ai.error.AI_APICallError");
Symbol.$$for("vercel.ai.error.AI_EmptyResponseBodyError");
var c = "AI_InvalidArgumentError";
var f = `vercel.ai.error.${c}`;
var d = Symbol.$$for(f);
var h = class extends u {
  constructor({
    message: e,
    cause: t,
    argument: n
  }) {
    super({
      name: c,
      message: e,
      cause: t
    });
    this[i] = !0;
    this.argument = n;
  }
  static isInstance(e) {
    return u.hasMarker(e, f);
  }
};
i = d;
Symbol.$$for("vercel.ai.error.AI_InvalidPromptError");
Symbol.$$for("vercel.ai.error.AI_InvalidResponseDataError");
var p = "AI_JSONParseError";
var C = `vercel.ai.error.${p}`;
var I = Symbol.$$for(C);
var E = class extends u {
  constructor({
    text: e,
    cause: t
  }) {
    super({
      name: p,
      message: `JSON parsing failed: Text: ${e}.
Error message: ${g(t)}`,
      cause: t
    });
    this[A] = !0;
    this.text = e;
  }
  static isInstance(e) {
    return u.hasMarker(e, C);
  }
};
A = I;
Symbol.$$for("vercel.ai.error.AI_LoadAPIKeyError");
Symbol.$$for("vercel.ai.error.AI_LoadSettingError");
Symbol.$$for("vercel.ai.error.AI_NoContentGeneratedError");
Symbol.$$for("vercel.ai.error.AI_NoSuchModelError");
Symbol.$$for("vercel.ai.error.AI_TooManyEmbeddingValuesForCallError");
var B = "AI_TypeValidationError";
var m = `vercel.ai.error.${B}`;
var y = Symbol.$$for(m);
var _ = class e extends u {
  constructor({
    value: e,
    cause: t
  }) {
    super({
      name: B,
      message: `Type validation failed: Value: ${JSON.stringify(e)}.
Error message: ${g(t)}`,
      cause: t
    });
    this[o] = !0;
    this.value = e;
  }
  static isInstance(e) {
    return u.hasMarker(e, m);
  }
  static wrap({
    value: t,
    cause: n
  }) {
    return e.isInstance(n) && n.value === t ? n : new e({
      value: t,
      cause: n
    });
  }
};
function Q(e) {
  return null === e || "string" == typeof e || "number" == typeof e || "boolean" == typeof e || (Array.isArray(e) ? e.every(Q) : "object" == typeof e && Object.entries(e).every(([e, t]) => "string" == typeof e && Q(t)));
}
o = y;
Symbol.$$for("vercel.ai.error.AI_UnsupportedFunctionalityError");
let D = (e, t = 21) => (n = t) => {
  let r = "";
  let i = 0 | n;
  for (; i--;) r += e[Math.random() * e.length | 0];
  return r;
};
(({
  prefix: e,
  size: t = 16,
  alphabet: n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  separator: r = "-"
} = {}) => {
  let i = D(n, t);
  if (null != e) {
    if (n.includes(r)) throw new h({
      argument: "separator",
      message: `The separator "${r}" must not be part of the alphabet "${n}".`
    });
    return t => `${e}${r}${i(t)}`;
  }
})();
var b = Symbol.$$for("vercel.ai.validator");
export function $$v0({
  text: e,
  schema: t
}) {
  try {
    let n = parse(e);
    if (null == t) return {
      success: !0,
      value: n,
      rawValue: n
    };
    let r = function ({
      value: e,
      schema: t
    }) {
      let n = "object" == typeof t && null !== t && b in t && !0 === t[b] && "validate" in t ? t : {
        [b]: !0,
        validate: e => {
          let n = t.safeParse(e);
          return n.success ? {
            success: !0,
            value: n.data
          } : {
            success: !1,
            error: n.error
          };
        }
      };
      try {
        if (null == n.validate) return {
          success: !0,
          value: e
        };
        let t = n.validate(e);
        if (t.success) return t;
        return {
          success: !1,
          error: _.wrap({
            value: e,
            cause: t.error
          })
        };
      } catch (t) {
        return {
          success: !1,
          error: _.wrap({
            value: e,
            cause: t
          })
        };
      }
    }({
      value: n,
      schema: t
    });
    return r.success ? {
      ...r,
      rawValue: n
    } : r;
  } catch (t) {
    return {
      success: !1,
      error: E.isInstance(t) ? t : new E({
        text: e,
        cause: t
      })
    };
  }
}
var {
  btoa,
  atob
} = globalThis;
export const N8 = $$v0;