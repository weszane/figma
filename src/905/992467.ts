import { jsx, Fragment } from "react/jsx-runtime";
import { lazy, forwardRef, Suspense, Component } from "react";
import { addErrorStack } from "../905/607410";
import { trackEventAnalytics } from "../905/449184";
import { Z } from "../905/815905";
let $$l0 = {
  NONE: Symbol("NONE")
};
let d = !1;
try {
  d = "responseStatus" in PerformanceResourceTiming.prototype;
} catch (e) {}
export function $$c1(e, t) {
  if (t.isCodesplit) {
    let {
      ComponentFactory
    } = t;
    let a = !1;
    let o = lazy(async () => {
      let t = new h();
      t.startTracking();
      try {
        let r;
        let o = performance.now();
        let l = 3;
        let d = [500, 1e3, 2e3].reverse();
        async function n() {
          return await ComponentFactory();
        }
        for (; l >= 0;) try {
          let t = await n();
          a || (a = !0, trackEventAnalytics("react_lazy_load", {
            duration: performance.now() - o,
            component: e
          }));
          return t;
        } catch (e) {
          r = e;
          --l >= 0 && (await new Promise(e => setTimeout(e, d[l])));
        }
        let c = t.mapErrorToResponseCode(r);
        trackEventAnalytics("react_lazy_load_failed", {
          lazyComponentName: e,
          error: r.message,
          stack: r.stack,
          responseCode: c
        });
        return r;
      } finally {
        t.dispose();
      }
    });
    return function (e) {
      let {
        fallback,
        errorFallback,
        ...r
      } = e;
      let a = jsx(p, {
        fallback,
        children: jsx(o, {
          ...r
        })
      });
      return errorFallback === $$l0.NONE ? a : jsx(m, {
        errorFallback,
        children: a
      });
    };
  }
  {
    let {
      Component
    } = t;
    return function (t) {
      let {
        fallback,
        ...r
      } = t;
      return jsx(Component, {
        ...r
      });
    };
  }
}
export function $$u2(e, t, i) {
  var d;
  var c;
  let u;
  let p;
  let g;
  let f;
  let _ = !1;
  let A = !1;
  let y = i?.componentName;
  let b = () => {
    _ || (_ = !0, trackEventAnalytics("Dynamic Component Loaded", {
      duration: g ? performance.now() - g : void 0,
      preloadDuration: p ? performance.now() - p : void 0,
      component: y || "unknown",
      boundaryName: e
    }));
  };
  let v = `boundaryName: ${e}
${Error().stack}`;
  let I = lazy(async () => {
    let e = new h();
    e.startTracking();
    try {
      let n;
      let r = 3;
      let o = [500, 1e3, 2e3].reverse();
      async function i() {
        return {
          default: await t()
        };
      }
      for (g = performance.now(); r >= 0;) try {
        addErrorStack(v);
        let e = await i();
        b();
        return e;
      } catch (e) {
        if (n = e, r--, "ChunkLoadError" !== e.name) break;
        r >= 0 && (await new Promise(e => setTimeout(e, o[r])));
      }
      let l = e.mapErrorToResponseCode(n);
      trackEventAnalytics("react_lazy_load_failed", {
        lazyComponentName: y || "unknown",
        error: n.message,
        stack: n.stack,
        responseCode: l
      });
      return n;
    } finally {
      e.dispose();
    }
  });
  I.displayName = i?.componentName ? `Lazy:${i?.componentName}` : void 0;
  let E = i?.loading && i?.loading !== $$l0.NONE ? i?.loadingDelay ? (d = i?.loading, c = i.loadingDelay, function (e) {
    return Z(c) ? jsx(d, {
      ...e
    }) : null;
  }) : i.loading : null;
  let x = forwardRef((e, t) => {
    let {
      fallback,
      errorFallback,
      ...o
    } = e;
    let d = i?.error;
    f || (f = u || I);
    let c = jsx(f, {
      ref: t,
      ...o
    });
    fallback !== $$l0.NONE && i?.loading !== $$l0.NONE && (c = jsx(Suspense, {
      fallback: E ? jsx(E, {}) : fallback,
      children: c
    }));
    errorFallback !== $$l0.NONE && d !== $$l0.NONE && (c = jsx(m, {
      errorFallback: d ? jsx(d, {}) : errorFallback,
      children: c
    }));
    return c;
  });
  x.preload = async e => (A || u || ((A = !0, !0 === e) ? g = performance.now() : (p = performance.now(), u = await t()), b()), Promise.resolve());
  x.displayName = i?.componentName ? `LazyWrapper:${i?.componentName}` : void 0;
  return x;
}
function p(e) {
  let {
    fallback,
    children
  } = e;
  return fallback === $$l0.NONE ? jsx(Fragment, {
    children
  }) : jsx(Suspense, {
    fallback,
    children
  });
}
class m extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      didCatch: !1
    };
  }
  static getDerivedStateFromError(e) {
    return {
      didCatch: !0
    };
  }
  componentDidCatch() {}
  render() {
    return this.state.didCatch ? this.props.errorFallback : this.props.children;
  }
}
class h {
  constructor() {
    if (!d) return;
    this.resourceEvents = new Map();
    this.performanceObserver = new PerformanceObserver(this.onResourceEvent.bind(this));
  }
  startTracking() {
    d && this.performanceObserver && this.performanceObserver.observe({
      entryTypes: ["resource"]
    });
  }
  mapErrorToResponseCode(e) {
    if (!d || !this.resourceEvents) return;
    let t = e.request;
    if (t && this.resourceEvents.has(t)) return this.resourceEvents.get(t)?.responseStatus;
  }
  dispose() {
    d && this.performanceObserver && this.performanceObserver.disconnect();
  }
  onResourceEvent(e) {
    if (this.resourceEvents) for (let t of e.getEntries()) "script" === t.initiatorType && this.resourceEvents.set(t.name, t);
  }
}
export const H4 = $$l0;
export const kf = $$c1;
export const s_ = $$u2;