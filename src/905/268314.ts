import { forwardRef, createElement } from "react";
export function $$r0(e, t, i) {
  let r = "string" == typeof t ? t : t.displayName ?? t.name ?? "{unknown}";
  return forwardRef(Object.assign((e, r) => {
    let a = {
      ...e,
      ...i,
      ref: r
    };
    return createElement(t, a);
  }, {
    displayName: `${e}.${r}`
  }));
}
export const G = $$r0;