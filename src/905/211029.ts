import { jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
export function $$a0() {
  let e = createContext({});
  let t = e.Provider;
  let i = () => useContext(e);
  return {
    OverridesProvider: t,
    OverridableComponent: function (e) {
      let {
        overrideKey,
        originalComponent,
        ...a
      } = e;
      let s = i()[overrideKey];
      return s ? jsx(s, {
        ...a,
        OriginalComponent: originalComponent
      }) : jsx(originalComponent, {
        ...a
      });
    }
  };
}
export const r = $$a0;