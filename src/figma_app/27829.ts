import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRef, useLayoutEffect } from "react";
import { atom, useAtomWithSubscription } from "../figma_app/27355";
import { M } from "../905/28866";
import { getFalseValue } from "../figma_app/897289";
export function $$l1(e) {
  d(document.getElementById(e));
}
function d(e) {
  e && (e.style.display = "none");
}
export function $$c2(e, t, r) {
  let a = document.getElementById(e);
  if (!a) {
    getFalseValue() || console.warn("Expected to find DOM element to snapshot:  " + e);
    return () => null;
  }
  let s = a.cloneNode(!0);
  t?.(s);
  let l = () => {
    d(a);
    l = null;
  };
  let c = r;
  return function () {
    let e = useRef(null);
    useLayoutEffect(() => {
      e.current && (e.current.appendChild(s), c?.(s), c = null);
      l?.();
    }, [e]);
    return jsx("div", {
      ref: e,
      className: [...s.classList.values()].join(" ")
    });
  };
}
class u {
  constructor(e) {
    this.onStatusChange = e;
    this.deps = {};
    this.add = (e, t) => {
      if ("pending" === t) {
        let t = new Promise(e => {
          setTimeout(() => {
            e();
          }, 5e3);
        });
        this.deps[e] = t;
        return;
      }
      if ("resolved" === t) {
        let t = Promise.resolve();
        this.deps[e] = t;
        this.onDependencyResolved(e, t);
        return;
      }
      if ("rejected" === t) {
        let t = Promise.reject();
        this.deps[e] = t;
        this.onDependencyRejected(e, t);
        return;
      }
      this.onStatusChange("pending");
      t.then(r => this.onDependencyResolved(e, t)).catch(r => this.onDependencyRejected(e, t));
      this.deps[e] = t;
    };
    this.onDependencyResolved = (e, t) => {
      this.deps[e] === t && (delete this.deps[e], Object.keys(this.deps).length > 0 || this.onStatusChange("resolved"));
    };
    this.onDependencyRejected = (e, t) => {
      this.deps[e] === t && (delete this.deps[e], this.onStatusChange("rejected"));
    };
  }
}
export function $$p0(e, t) {
  let r = atom("pending");
  r.debugLabel = `${t}:LoadingPageStatus`;
  let o = new u(t => {
    e.set(r, t);
  });
  return {
    addDependency: o.add,
    useIsLoading: function () {
      return "pending" === useAtomWithSubscription(r);
    },
    LoadablePage: function (e, t, l) {
      let d = !1;
      function c(s) {
        d || (d = !0, o.add("LoadablePage", "resolved"));
        let c = "pending" !== useAtomWithSubscription(r);
        useLayoutEffect(() => {
          l?.();
        }, []);
        return jsxs(Fragment, {
          children: [c && jsx(e, {
            ...s
          }), !c && jsx(t, {})]
        });
      }
      c.displayName = M(e);
      return c;
    }
  };
}
export const QH = $$p0;
export const Ze = $$l1;
export const h8 = $$c2;