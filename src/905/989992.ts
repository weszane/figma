import { useCallback, useMemo } from "react";
import { c2 } from "../905/382883";
import { throwTypeError } from "../figma_app/465776";
import { ResourceStatus } from "../905/957591";
import { DD } from "../905/19536";
import { xx } from "../figma_app/815945";
import { A as _$$A } from "../905/605584";
var n;
var $$r0;
!function (e) {
  e.loadedInTest = function (e, t) {
    return $$r0.loadedSuspendable(e, t || [], {
      release: () => {}
    });
  };
  e.loadingInTest = function () {
    return $$r0.loadingSuspendable({
      getPromise: () => Promise.resolve(),
      retain: () => {}
    });
  };
  e.disabledInTest = function () {
    return $$r0.disabledSuspendable({
      release: () => {}
    });
  };
  e.errorInTest = function (e) {
    return $$r0.errorSuspendable(e, {
      release: () => {}
    });
  };
}(n || (n = {}));
export let $$p1 = {
  LOADING: "loading",
  DISABLED: "disabled",
  ERRORS: "errors",
  LOADED: "loaded"
};
!function (e) {
  var t;
  function i(e, ...t) {
    return e.transform(e => t.reduce((e, t) => e = [...(e || []), ...t], e));
  }
  e.merge = function (t, ...n) {
    if (t.some(e => "loading" === e.status)) return e.loading();
    let r = t.filter(e => e.errors && "errors" === e.status).map(e => e.errors);
    if (r.length) return e.error(r.flatMap(e => e));
    if (t.filter(e => "disabled" === e.status).length > 0) return e.disabled();
    let a = e.loaded([]);
    for (let e of t) a = i(a, e.data);
    return i(a, ...n);
  };
  e.all = function (t) {
    if (t.some(e => "loading" === e.status)) return e.loading();
    let i = t.filter(e => null != e.errors && "errors" === e.status).map(e => e.errors);
    if (i.length > 0) return e.error(i.flatMap(e => e));
    if (t.filter(e => "disabled" === e.status).length > 0) return e.disabled();
    let n = t.map(e => e.data);
    return e.loaded(n);
  };
  e.transformAll = function (t, i) {
    return e.all(t).transform(e => i(...e));
  };
  let n = Symbol("empty");
  function r(e, t, i = Object.is) {
    let s = useCallback((e, t) => e !== n && t !== n && i(e, t), [i]);
    let {
      status,
      data
    } = e;
    let c = DD(() => "loaded" === status ? t(data) : n, [status, data, t], s);
    return useMemo(() => e.transform(t => {
      if (c === n) throw Error("useTransform: unexpected EMPTY while result is " + e.status);
      return c;
    }), [c, e]);
  }
  function p(t) {
    switch (t.status) {
      case "disabled":
        return e.disabled();
      case "loading":
        return e.loading();
      case "errors":
        return e.error(t.errors);
      case "loaded":
        return e.loaded(t.data, t.errors);
    }
  }
  function v(e) {
    return new h(e);
  }
  function I(e) {
    return new f(e);
  }
  function E(e, t) {
    return new b(e, t);
  }
  function x(e, t, i) {
    return new A(e, t || [], i);
  }
  e.useTransform = r;
  e.useTransformShallowEqual = function (e, t) {
    return r(e, t, _$$A);
  };
  e.useTransformDeepEqual = function (e, t) {
    return r(e, t, c2);
  };
  e.from = p;
  e.fromMemoized = xx(p);
  e.suspendableFrom = function (e, t, i) {
    switch (e.status) {
      case "disabled":
        return I(i);
      case "loading":
        i.registerPromise(t());
        return v(i);
      case "errors":
        return E(e.errors, i);
      case "loaded":
        return x(e.data, e.errors, i);
      default:
        throwTypeError(e);
    }
  };
  e.loading = function () {
    return new m();
  };
  e.loadingSuspendable = v;
  e.disabled = function () {
    return new g();
  };
  e.disabledSuspendable = I;
  e.error = function (e) {
    return new y(e);
  };
  e.errorSuspendable = E;
  e.loaded = function (e, t) {
    return new _(e, t || []);
  };
  e.useMemoizedLoaded = function (t, i) {
    return useMemo(() => e.loaded(t, i), [t, i]);
  };
  e.loadedSuspendable = x;
  e.useFromOptionalField = function (t) {
    return useMemo(() => void 0 === t || t.status === ResourceStatus.Error ? e.loading() : e.loaded(t.data), [t]);
  };
  (t = e.Paginated || (e.Paginated = {})).loading = function () {
    return Object.assign(new m(), {
      hasNextPage: void 0,
      hasPreviousPage: void 0,
      isFetchingNextPage: !1,
      isFetchingPreviousPage: !1
    });
  };
  t.disabled = function () {
    return Object.assign(new g(), {
      hasNextPage: void 0,
      hasPreviousPage: void 0,
      isFetchingNextPage: !1,
      isFetchingPreviousPage: !1
    });
  };
  t.error = function (e) {
    return Object.assign(new y(e), {
      hasNextPage: void 0,
      hasPreviousPage: void 0,
      isFetchingNextPage: !1,
      isFetchingPreviousPage: !1
    });
  };
  t.loaded = function (e, t, i = []) {
    return Object.assign(new _(e, i || []), {
      ...t
    });
  };
}($$r0 || ($$r0 = {}));
let m = class {
  status = "loading";
  data = null;
  errors = null;
  unwrapOr(e) {
    return e;
  }
  transform() {
    return $$r0.loading();
  }
};
let h = class {
  constructor(e) {
    this.suspense = e;
    this.status = "loading";
    this.data = null;
    this.errors = null;
  }
  unwrapOr(e) {
    return e;
  }
  transform() {
    return $$r0.loadingSuspendable(this.suspense);
  }
};
let g = class {
  status = "disabled";
  data = null;
  errors = null;
  unwrapOr(e) {
    return e;
  }
  transform() {
    return $$r0.disabled();
  }
};
let f = class {
  constructor(e) {
    this.suspense = e;
    this.status = "disabled";
    this.data = null;
    this.errors = null;
  }
  unwrapOr(e) {
    return e;
  }
  transform() {
    return $$r0.disabledSuspendable(this.suspense);
  }
};
let _ = class {
  constructor(e, t) {
    this.data = e;
    this.errors = t;
    this.status = "loaded";
  }
  unwrapOr() {
    return this.data;
  }
  transform(e) {
    return $$r0.loaded(e(this.data), this.errors);
  }
};
let A = class {
  constructor(e, t, i) {
    this.data = e;
    this.errors = t;
    this.suspense = i;
    this.status = "loaded";
  }
  unwrapOr() {
    return this.data;
  }
  transform(e) {
    return $$r0.loadedSuspendable(e(this.data), this.errors, this.suspense);
  }
};
let y = class {
  constructor(e) {
    this.errors = e;
    this.status = "errors";
    this.data = null;
  }
  unwrapOr(e) {
    return e;
  }
  transform() {
    return $$r0.error(this.errors);
  }
};
let b = class {
  constructor(e, t) {
    this.errors = e;
    this.suspense = t;
    this.status = "errors";
    this.data = null;
  }
  unwrapOr(e) {
    return e;
  }
  transform() {
    return $$r0.errorSuspendable(this.errors, this.suspense);
  }
};
export const Qw = $$r0;
export const H = $$p1;