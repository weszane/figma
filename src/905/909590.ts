import { jsx } from "react/jsx-runtime";
import { forwardRef, useState, useMemo, createContext, useContext, useCallback, useLayoutEffect } from "react";
import { A as _$$A } from "../vendor/723372";
import { M } from "../905/850310";
import { o as _$$o } from "../905/695226";
import { Qv } from "../905/959312";
import { M as _$$M } from "../905/581092";
import { r as _$$r } from "../905/577641";
let u = forwardRef(({
  htmlAttributes: e = {},
  children: t,
  ...i
}, a) => {
  let [s, l] = useState(!1);
  let [d, u] = useState(!1);
  let m = useMemo(() => ({
    setDisabled: l,
    setReadOnly: u
  }), []);
  let h = _$$o(e?.onPointerDown);
  return jsx(p.Provider, {
    value: m,
    children: jsx("div", {
      ...i,
      ..._$$r,
      ref: a,
      onPointerDown: h,
      "data-fpl-disabled": s || void 0,
      "data-fpl-readOnly": d || void 0,
      children: t
    })
  });
});
u.displayName = "TextareaPrimitive.Root";
let p = createContext(null);
let m = Object.assign(forwardRef(({
  className: e,
  disabled: t,
  expandable: i,
  htmlAttributes: s,
  maxHeight: o,
  onChange: u,
  recordingKey: m,
  rows: g = 3,
  spellCheck: f = !0,
  style: _,
  readOnly: A,
  ...y
}, b) => {
  let v = useContext(p);
  let I = _$$M(b);
  let E = useCallback((...e) => {
    u?.(...e);
    i && I.current && h(I.current);
  }, [i, u, I]);
  let x = Qv(E, {
    eventName: "change",
    recordingKey: m
  }, [E]);
  useLayoutEffect(() => {
    i && I.current && h(I.current);
  }, [i, I]);
  useLayoutEffect(() => {
    v?.setDisabled(t ?? !1);
    v?.setReadOnly(A ?? !1);
  }, [v, t, A]);
  return jsx("textarea", {
    ...y,
    ...s,
    ..._$$r,
    rows: g,
    className: _$$A("textarea-reset__textareaReset__SBluM", e),
    style: {
      ..._,
      maxHeight: o
    },
    ref: I,
    onChange: x ? e => x(e.target.value, {
      event: e
    }) : void 0,
    readOnly: A || t,
    "aria-disabled": t || void 0,
    spellCheck: f
  });
}), {
  Root: u
});
function h(e) {
  e.style.height = "auto";
  e.style.height = `${e?.scrollHeight}px`;
}
m.displayName = "TextareaPrimitive";
export let $$g0 = Object.assign(forwardRef(({
  size: e,
  rows: t,
  ...i
}, r) => jsx(m, {
  ...i,
  ref: r,
  rows: t ?? ("lg" === e ? 6 : 3),
  className: _$$A("textarea__textarea__-mOWC", {
    textarea__large__BJYMW: "lg" === e
  })
})), {
  Root: f,
  Lazy: _
});
function f({
  className: e,
  htmlAttributes: t,
  ...i
}) {
  return jsx(m.Root, {
    ...t,
    ...i,
    className: _$$A("textarea__root__kusdD", e)
  });
}
function _(e) {
  let t = M(e);
  return jsx($$g0, {
    ...t
  });
}
$$g0.displayName = "Textarea";
f.displayName = "Textarea.Root";
_.displayName = "Textarea.Lazy";
export const T = $$g0;