import { jsx } from "react/jsx-runtime";
import { createContext, forwardRef, useState } from "react";
import { ButtonPrimitive } from "../905/632989";
import { ensureContext } from "../905/61417";
import { defaultComponentAttribute } from "../905/577641";
import { preventAndStopEvent } from "../905/955878";
let $$d6 = createContext(null);
let c = e => !!(e.toggle && !e.setOpen);
let u = forwardRef(({
  isOpen: e,
  toggle: t,
  setOpen: r,
  htmlAttributes: i,
  ...a
}, s) => {
  let l = {
    isOpen: e,
    toggle: t,
    setOpen: r
  };
  return jsx($$d6.Provider, {
    value: {
      isOpen: e,
      toggle: c(l) ? l.toggle : () => l.setOpen(!e)
    },
    children: jsx("div", {
      ...defaultComponentAttribute,
      ...i,
      ...a,
      ref: s
    })
  });
});
u.displayName = "CollapsePrimitive.ControlledRoot";
let p = forwardRef(({
  defaultOpen: e,
  htmlAttributes: t,
  ...r
}, a) => {
  let [s, l] = useState(e);
  return jsx($$d6.Provider, {
    value: {
      isOpen: s,
      toggle: () => l(!s)
    },
    children: jsx("div", {
      ...defaultComponentAttribute,
      ...t,
      ...r,
      ref: a
    })
  });
});
p.displayName = "CollapsePrimitive.UncontrolledRoot";
export let $$_5 = forwardRef(({
  htmlAttributes: e,
  ...t
}, r) => "defaultOpen" in t ? jsx(p, {
  ...e,
  ...t,
  ref: r,
  defaultOpen: t.defaultOpen
}) : jsx(u, {
  ...t,
  ref: r
}));
$$_5.displayName = "CollapsePrimitive.Root";
export let $$h3 = forwardRef(({
  htmlAttributes: e,
  ...t
}, r) => jsx("div", {
  ref: r,
  ...defaultComponentAttribute,
  ...e,
  ...t
}));
$$h3.displayName = "CollapsePrimitive.Header";
export let $$m0 = forwardRef(({
  htmlAttributes: e,
  ...t
}, r) => {
  let i = ensureContext($$d6, "CollapseContext", "Collapse.Root");
  return jsx(ButtonPrimitive, {
    ref: r,
    ...defaultComponentAttribute,
    ...e,
    ...t,
    "aria-expanded": i.isOpen,
    onClick: e => {
      preventAndStopEvent(e);
      t.onClick ? t.onClick(e) : i.toggle();
    }
  });
});
$$m0.displayName = "CollapsePrimitive.Label";
export let $$g2 = forwardRef(({
  htmlAttributes: e,
  ...t
}, r) => jsx("div", {
  ...defaultComponentAttribute,
  ...e,
  ...t,
  ref: r
}));
$$g2.displayName = "CollapsePrimitive.Trail";
export let $$f1 = forwardRef(({
  htmlAttributes: e,
  ...t
}, r) => {
  let i = ensureContext($$d6, "CollapseContext", "Collapse.Root");
  return jsx("div", {
    ...defaultComponentAttribute,
    ...e,
    ...t,
    ref: r,
    hidden: !i.isOpen
  });
});
$$f1.displayName = "CollapsePrimitive.Content";
export let $$E4 = forwardRef(({
  htmlAttributes: e,
  ...t
}, r) => jsx("div", {
  ...defaultComponentAttribute,
  ...e,
  ...t,
  ref: r,
  role: "group"
}));
$$E4.displayName = "CollapsePrimitive.Group";
export const JU = $$m0;
export const UC = $$f1;
export const X0 = $$g2;
export const Y9 = $$h3;
export const YJ = $$E4;
export const bL = $$_5;
export const bN = $$d6;