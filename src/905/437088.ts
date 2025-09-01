import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo, useState, useRef, useCallback, useLayoutEffect } from "react";
import { A as _$$A } from "../vendor/763703";
import { A as _$$A2 } from "../vendor/723372";
import { M } from "../905/749786";
import { q } from "../905/751750";
import { Qv } from "../905/959312";
import { nK } from "../905/691059";
import { r as _$$r } from "../905/577641";
import { Dm } from "../905/955878";
import { v } from "../905/475481";
let h = "data-modals-open";
export function $$g0({
  theme: e = {},
  children: t,
  manager: i,
  htmlAttributes: a,
  ...d
}) {
  let [h, g] = q();
  let {
    close,
    ..._
  } = i.props;
  let A = useMemo(() => ({
    close: (e = {
      source: "other"
    }) => close(e)
  }), [close]);
  return jsx(g, {
    value: h,
    children: jsx(M.Provider, {
      value: A,
      children: jsxs("div", {
        ..._$$r,
        ...v(d, a, _),
        role: "dialog",
        "aria-modal": "true",
        className: _$$A2("modal-primitive__root__x1Mdk", e.root, Dm),
        "aria-labelledby": h,
        tabIndex: -1,
        children: [jsx("div", {
          "data-backdrop": !0,
          className: e.backdrop
        }), jsx(nK, {
          children: jsx("section", {
            className: e.contents,
            children: t
          })
        })]
      })
    })
  });
}
export function $$f1({
  open: e,
  onClose: t,
  preventUserClose: i = !1,
  recordingKey: n
}) {
  let a = Qv(t, {
    eventName: "close",
    recordingKey: n
  }, [t]);
  let [s, o] = function (e) {
    let [t, i] = useState(null);
    let n = useRef();
    n.current = t;
    useRef().current = e;
    return [useCallback(e => {
      if (null == e) {
        n.current?.destroy();
        i(null);
        return;
      }
      i(new A(e));
    }, []), t];
  }(i ? void 0 : a);
  useLayoutEffect(() => {
    if (e && o) {
      o.shown || (o.show(), function (e, t) {
        let i = 0;
        let n = e.getAttribute(t);
        n && (i = parseInt(n));
        e.setAttribute(t, i + 1);
      }(document.body, h));
      return () => {
        o.shown && (o.hide(), function (e, t) {
          let i = e.getAttribute(t);
          if (null == i) return;
          let n = parseInt(i) - 1;
          n <= 0 ? e.removeAttribute(t) : e.setAttribute(t, n);
        }(document.body, h));
      };
    }
  }, [o, e]);
  return {
    preventUserClose: i,
    props: {
      ref: s,
      close: a,
      onPointerDown: function (e) {
        !i && e.target.matches("[data-backdrop]") && a({
          source: "outside"
        });
      },
      onKeyDown: function (e) {
        i || "Escape" !== e.code || (e.preventDefault(), a({
          source: "escape"
        }));
      }
    }
  };
}
export function $$_2({
  defaultOpen: e = !1,
  onClose: t
} = {}) {
  let [i, n] = useState(e);
  let a = useCallback(() => n(!1), []);
  let s = useCallback(() => n(!0), []);
  return {
    ...$$f1({
      open: i,
      onClose: useCallback(() => {
        a();
        t?.();
      }, [a, t])
    }),
    open: s,
    close: a,
    isOpen: i
  };
}
$$g0.displayName = "ModalPrimitive.Root";
class A extends _$$A {
  destroy() {
    this.hide();
    document.removeEventListener("click", this.handleTriggerClicks, !0);
    this.fire("destroy");
    return this;
  }
  bindKeypress(e) {
    "Escape" !== e.key && super.bindKeypress(e);
  }
}
export const bL = $$g0;
export const hS = $$f1;
export const wQ = $$_2;