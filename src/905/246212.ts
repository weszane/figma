import { jsx } from "react/jsx-runtime";
import { createContext, forwardRef, useState, useMemo, useContext, useLayoutEffect } from "react";
import { o as _$$o } from "../905/695226";
import { useRecording } from "../905/959312";
import { useExposedRef } from "../905/581092";
import { defaultComponentAttribute } from "../905/577641";
import { f5 } from "../905/914656";
let c = createContext(null);
let u = forwardRef(({
  onPointerDown: e,
  spellCheck: t = !1,
  ...i
}, s) => {
  let [o, d] = useState(!1);
  let u = useMemo(() => ({
    setDisabled: d
  }), []);
  let p = _$$o(e);
  return jsx(c.Provider, {
    value: u,
    children: jsx("div", {
      ...i,
      ...defaultComponentAttribute,
      ref: s,
      onPointerDown: p,
      spellCheck: t,
      "data-fpl-disabled": o || void 0
    })
  });
});
u.displayName = "InputPrimitive.Root";
export let $$p0 = Object.assign(forwardRef(({
  type: e = "text",
  onChange: t,
  disabled: i,
  spellCheck: a = !1,
  recordingKey: u,
  htmlAttributes: p,
  ...m
}, h) => {
  let g = useContext(c);
  let f = useExposedRef(h);
  !function (e, t) {
    useLayoutEffect(() => {
      t && !f5(e.current) && e.current.select();
    }, []);
  }(f, m.autoFocus);
  let _ = useRecording(t, {
    eventName: "change",
    recordingKey: u
  }, [t]);
  useLayoutEffect(() => g?.setDisabled(i ?? !1), [g, i]);
  return jsx("input", {
    ...m,
    ...p,
    ...defaultComponentAttribute,
    ref: f,
    size: 1,
    type: e,
    onChange: _ ? e => _(e.target.value, {
      event: e
    }) : void 0,
    readOnly: i,
    "aria-disabled": i || void 0,
    spellCheck: a,
    "data-1p-ignore": "password" !== e || void 0
  });
}), {
  Root: u
});
$$p0.displayName = "InputPrimitive";
export const Y = $$p0;