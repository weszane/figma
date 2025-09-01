let i;
let s;
function o(e, r, n) {
  function i(n, i) {
    var s;
    for (let o in Object.defineProperty(n, "_zod", {
      value: n._zod ?? {},
      enumerable: !1
    }), (s = n._zod).traits ?? (s.traits = new Set()), n._zod.traits.add(e), r(n, i), a.prototype) o in n || Object.defineProperty(n, o, {
      value: a.prototype[o].bind(n)
    });
    n._zod.constr = a;
    n._zod.def = i;
  }
  let s = n?.Parent ?? Object;
  class o extends s {}
  function a(e) {
    var r;
    let s = n?.Parent ? new o() : this;
    for (let n of (i(s, e), (r = s._zod).deferred ?? (r.deferred = []), s._zod.deferred)) n();
    return s;
  }
  Object.defineProperty(o, "name", {
    value: e
  });
  Object.defineProperty(a, "init", {
    value: i
  });
  Object.defineProperty(a, Symbol.hasInstance, {
    value: r => !!n?.Parent && r instanceof n.Parent || r?._zod?.traits?.has(e)
  });
  Object.defineProperty(a, "name", {
    value: e
  });
  return a;
}
Symbol("zod_brand");
class a extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
let h = {};
function d(e) {
  e && Object.assign(h, e);
  return h;
}
function p(e, r) {
  return "bigint" == typeof r ? r.toString() : r;
}
function g(e) {
  return "string" == typeof e ? e : e?.message;
}
function m(e, r, n) {
  let i = {
    ...e,
    path: e.path ?? []
  };
  if (!e.message) {
    let s = g(e.inst?._zod.def?.error?.(e)) ?? g(r?.error?.(e)) ?? g(n.customError?.(e)) ?? g(n.localeError?.(e)) ?? "Invalid input";
    i.message = s;
  }
  delete i.inst;
  delete i.$$continue;
  r?.reportInput || delete i.input;
  return i;
}
(function e(e) {
  let r = !1;
})(() => {
  try {
    Function("");
    return !0;
  } catch (e) {
    return !1;
  }
});
Number.MIN_SAFE_INTEGER;
Number.MAX_SAFE_INTEGER;
Number.MAX_VALUE;
Number.MAX_VALUE;
let v = (e, r) => {
  e.name = "$ZodError";
  Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  });
  Object.defineProperty(e, "issues", {
    value: r,
    enumerable: !1
  });
  Object.defineProperty(e, "message", {
    get: () => JSON.stringify(r, p, 2),
    enumerable: !0
  });
};
let $$y0 = o("$ZodError", v);
let b = o("$ZodError", v, {
  Parent: Error
});
i = b;
let $$O1 = (e, r, n, s) => {
  let o = n ? Object.assign(n, {
    async: !1
  }) : {
    async: !1
  };
  let h = e._zod.run({
    value: r,
    issues: []
  }, o);
  if (h instanceof Promise) throw new a();
  if (h.issues.length) {
    let e = new (s?.Err ?? i)(h.issues.map(e => m(e, o, d())));
    Error.captureStackTrace(e, s?.callee);
    return e;
  }
  return h.value;
};
s = b;
let $$x2 = async (e, r, n, i) => {
  let o = n ? Object.assign(n, {
    async: !0
  }) : {
    async: !0
  };
  let a = e._zod.run({
    value: r,
    issues: []
  }, o);
  if (a instanceof Promise && (a = await a), a.issues.length) {
    let e = new (i?.Err ?? s)(a.issues.map(e => m(e, o, d())));
    Error.captureStackTrace(e, i?.callee);
    return e;
  }
  return a.value;
};
Symbol("ZodOutput");
Symbol("ZodInput");
export const a$H = $$y0;
export const qgA = $$O1;
export const EJS = $$x2;