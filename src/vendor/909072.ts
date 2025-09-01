import { DF } from "../vendor/463802";
import { useLayoutEffect, useEffect, useMemo, useRef, useState, Suspense } from "react";
import { yl } from "../vendor/975086";
import { Sd } from "../vendor/425002";
import { flushSync, createPortal } from "../vendor/944059";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { vJ, I2, kF } from "../vendor/408361";
import { ZI } from "../vendor/871930";
let o = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? useLayoutEffect : useEffect;
function a(e) {
  return {
    initialValueFn: () => e.isEditable(),
    subscribe: r => e.registerEditableListener(r)
  };
}
function h() {
  return function (e) {
    let [r] = DF();
    let n = useMemo(() => e(r), [r, e]);
    let a = useRef(n.initialValueFn());
    let [h, d] = useState(a.current);
    o(() => {
      let {
        initialValueFn,
        subscribe
      } = n;
      let i = initialValueFn();
      a.current !== i && (a.current = i, d(i));
      return subscribe(e => {
        a.current = e;
        d(e);
      });
    }, [n, e]);
    return h;
  }(a);
}
function y(e) {
  let r = window.location.origin;
  let n = n => {
    if (n.origin !== r) return;
    let i = e.getRootElement();
    if (document.activeElement !== i) return;
    let s = n.data;
    if ("string" == typeof s) {
      let r;
      try {
        r = JSON.parse(s);
      } catch (e) {
        return;
      }
      if (r && "nuanria_messaging" === r.protocol && "request" === r.type) {
        let i = r.payload;
        if (i && "makeChanges" === i.functionId) {
          let r = i.args;
          if (r) {
            let [i, s, o, a, h, d] = r;
            e.update(() => {
              let e = vJ();
              if (I2(e)) {
                let r = e.anchor;
                let d = r.getNode();
                let p = 0;
                let g = 0;
                if (kF(d) && i >= 0 && s >= 0 && (p = i, g = i + s, e.setTextNodeRange(d, p, d, g)), p === g && "" === o || (e.insertRawText(o), d = r.getNode()), kF(d)) {
                  p = a;
                  g = a + h;
                  let r = d.getTextContentSize();
                  p = p > r ? r : p;
                  g = g > r ? r : g;
                  e.setTextNodeRange(d, p, d, g);
                }
                n.stopImmediatePropagation();
              }
            });
          }
        }
      }
    }
  };
  window.addEventListener("message", n, !0);
  return () => {
    window.removeEventListener("message", n, !0);
  };
}
let O = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? useLayoutEffect : useEffect;
function x(e) {
  return e.getEditorState().read(yl(e.isComposing()));
}
export function $$w0({
  contentEditable: e,
  placeholder: r = null,
  ErrorBoundary: n
}) {
  let [o] = DF();
  let a = function (e, r) {
    let [n, i] = useState(() => e.getDecorators());
    O(() => e.registerDecoratorListener(e => {
      flushSync(() => {
        i(e);
      });
    }), [e]);
    useEffect(() => {
      i(e.getDecorators());
    }, [e]);
    return useMemo(() => {
      let i = [];
      let o = Object.keys(n);
      for (let a = 0; a < o.length; a++) {
        let h = o[a];
        let d = jsx(r, {
          onError: r => e._onError(r),
          children: jsx(Suspense, {
            fallback: null,
            children: n[h]
          })
        });
        let p = e.getElementByKey(h);
        null !== p && i.push(createPortal(d, p, h));
      }
      return i;
    }, [r, n, e]);
  }(o, n);
  (function (e) {
    O(() => Sd(ZI(e), y(e)), [e]);
  })(o);
  return jsxs(Fragment, {
    children: [e, jsx(k, {
      content: r
    }), a]
  });
}
function k({
  content: e
}) {
  let [r] = DF();
  let n = function (e) {
    let [r, n] = useState(() => x(e));
    O(() => {
      function r() {
        n(x(e));
      }
      r();
      return Sd(e.registerUpdateListener(() => {
        r();
      }), e.registerEditableListener(() => {
        r();
      }));
    }, [e]);
    return r;
  }(r);
  let o = h();
  return n ? "function" == typeof e ? e(o) : e : null;
}
export const $ = $$w0;