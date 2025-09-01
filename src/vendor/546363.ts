export function $$i0() {
  return {
    onFetch: e => {
      e.fetchFn = () => {
        var r;
        var n;
        var i;
        var a;
        var h;
        var d;
        let p;
        let g = null == (r = e.fetchOptions) ? void 0 : null == (n = r.meta) ? void 0 : n.refetchPage;
        let m = null == (i = e.fetchOptions) ? void 0 : null == (a = i.meta) ? void 0 : a.fetchMore;
        let v = m?.pageParam;
        let y = m?.direction === "forward";
        let b = m?.direction === "backward";
        let O = (null == (h = e.state.data) ? void 0 : h.pages) || [];
        let x = (null == (d = e.state.data) ? void 0 : d.pageParams) || [];
        let w = x;
        let k = !1;
        let _ = r => {
          Object.defineProperty(r, "signal", {
            enumerable: !0,
            get: () => {
              var r;
              var n;
              null != (r = e.signal) && r.aborted ? k = !0 : e.signal || n.addEventListener("abort", () => {
                k = !0;
              });
              return e.signal;
            }
          });
        };
        let S = e.options.queryFn || (() => Promise.reject("Missing queryFn"));
        let E = (e, r, n, i) => (w = i ? [r, ...w] : [...w, r], i ? [n, ...e] : [...e, n]);
        let A = (r, n, i, s) => {
          if (k) return Promise.reject("Cancelled");
          if (void 0 === i && !n && r.length) return Promise.resolve(r);
          let o = {
            queryKey: e.queryKey,
            pageParam: i,
            meta: e.options.meta
          };
          _(o);
          return Promise.resolve(S(o)).then(e => E(r, i, e, s));
        };
        if (O.length) {
          if (y) {
            let r = void 0 !== v;
            let n = r ? v : s(e.options, O);
            p = A(O, r, n);
          } else if (b) {
            let r = void 0 !== v;
            let n = r ? v : o(e.options, O);
            p = A(O, r, n, !0);
          } else {
            w = [];
            let r = void 0 === e.options.getNextPageParam;
            p = !g || !O[0] || g(O[0], 0, O) ? A([], r, x[0]) : Promise.resolve(E([], x[0], O[0]));
            for (let n = 1; n < O.length; n++) p = p.then(i => {
              if (!g || !O[n] || g(O[n], n, O)) {
                let o = r ? x[n] : s(e.options, i);
                return A(i, r, o);
              }
              return Promise.resolve(E(i, x[n], O[n]));
            });
          }
        } else p = A([]);
        return p.then(e => ({
          pages: e,
          pageParams: w
        }));
      };
    }
  };
}
function s(e, r) {
  return e.getNextPageParam?.(r[r.length - 1], r);
}
function o(e, r) {
  return e.getPreviousPageParam?.(r[0], r);
}
export function $$a2(e, r) {
  if (e.getNextPageParam && Array.isArray(r)) {
    let n = s(e, r);
    return null != n && !1 !== n;
  }
}
export function $$h1(e, r) {
  if (e.getPreviousPageParam && Array.isArray(r)) {
    let n = o(e, r);
    return null != n && !1 !== n;
  }
}
export const PL = $$i0;
export const RQ = $$h1;
export const rB = $$a2;