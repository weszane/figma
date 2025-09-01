import { V } from "../vendor/806037";
import { isValidElement, cloneElement } from "react";
function o(e) {
  if ("string" == typeof e.type) return;
  let r = e.type.displayName || e.type.name || "the component";
  throw Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${r} into a <div>, or turn it into a drag source or a drop target itself.`);
}
function a(e) {
  return (r = null, n = null) => {
    if (!isValidElement(r)) {
      let i = r;
      e(i, n);
      return i;
    }
    let i = r;
    o(i);
    return p(i, n ? r => e(r, n) : e);
  };
}
export function $$h0(e) {
  let r = {};
  Object.keys(e).forEach(n => {
    let i = e[n];
    if (n.endsWith("Ref")) r[n] = e[n];else {
      let e = a(i);
      r[n] = () => e;
    }
  });
  return r;
}
function d(e, r) {
  "function" == typeof e ? e(r) : e.current = r;
}
function p(e, r) {
  let n = e.ref;
  return (V("string" != typeof n, "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"), n) ? cloneElement(e, {
    ref: e => {
      d(n, e);
      d(r, e);
    }
  }) : cloneElement(e, {
    ref: r
  });
}
export const i = $$h0;