import { jsx } from "react/jsx-runtime";
import { createContext, forwardRef, useRef, useState, useCallback, useEffect, useId } from "react";
import { A } from "../vendor/723372";
import { ButtonPrimitive } from "../905/632989";
import { setupRefUpdater } from "../905/823680";
import { ensureContext } from "../905/61417";
import { LinkPrimitive } from "../figma_app/496441";
import { defaultComponentAttribute } from "../905/577641";
let u = createContext(null);
let $$p3 = forwardRef(({
  className: e,
  ...t
}, i) => {
  let s = useRef(null);
  let [, o] = useState(null);
  let l = useCallback(e => {
    s.current = e;
    o(e);
  }, []);
  let [d, p] = useState(void 0);
  useEffect(() => {
    s.current && p(s.current.id);
  }, [s]);
  return jsx(u.Provider, {
    value: {
      labeledById: d,
      registerMainElRef: l
    },
    children: jsx("div", {
      className: A("card-primitive__root__h5a39", e),
      ref: i,
      ...defaultComponentAttribute,
      ...t
    })
  });
});
$$p3.displayName = "CardPrimitive.Root";
export let $$m1 = forwardRef(({
  className: e,
  ...t
}, i) => jsx("div", {
  className: A("card-primitive__main__7ho0a", e),
  ref: i,
  ...t
}));
$$m1.displayName = "CardPrimitive.Main";
export let $$h0 = forwardRef(({
  className: e,
  ...t
}, i) => jsx("div", {
  className: A("card-primitive__interactive__9-8aA", e),
  ref: i,
  ...t
}));
$$h0.displayName = "CardPrimitive.Interactive";
export let $$g2 = forwardRef(({
  className: e,
  ...t
}, i) => {
  let {
    labeledById
  } = ensureContext(u, "CardPrimitive.Main", "CardPrimitive.Root");
  return jsx(ButtonPrimitive, {
    "aria-labelledby": labeledById,
    className: A("card-primitive__button__jv46G", e),
    ref: i,
    ...t,
    children: null
  });
});
$$g2.displayName = "CardPrimitive.MainButton";
forwardRef(({
  className: e,
  ...t
}, i) => {
  let {
    labeledById
  } = ensureContext(u, "CardPrimitive.Main", "CardPrimitive.Root");
  return jsx(LinkPrimitive, {
    "aria-labelledby": labeledById,
    className: A("card-primitive__link__K4nzB", e),
    ref: i,
    ...t,
    children: null
  });
}).displayName = "CardPrimitive.MainLink";
export let $$f4 = forwardRef((e, t) => {
  let {
    registerMainElRef
  } = ensureContext(u, "CardPrimitive.Main", "CardPrimitive.Root");
  let a = useId();
  let s = setupRefUpdater(t, registerMainElRef);
  return jsx("span", {
    "aria-hidden": "true",
    id: a,
    ref: s,
    ...e
  });
});
$$f4.displayName = "CardPrimitive.Title";
export const HG = $$h0;
export const gZ = $$m1;
export const O6 = $$g2;
export const bL = $$p3;
export const hE = $$f4;