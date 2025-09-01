import { jsx } from "react/jsx-runtime";
import { s as _$$s } from "../figma_app/874592";
import { y0, f8 } from "../figma_app/718307";
import { Q, H } from "../figma_app/104130";
import { G } from "../figma_app/373780";
export function $$l1({
  children: e
}) {
  return jsx(Q.Provider, {
    value: H,
    children: e
  });
}
export function $$d0({
  children: e
}) {
  return jsx(G.Provider, {
    value: {
      loggerEventName: "illustration_navigate"
    },
    children: jsx(_$$s.Provider, {
      value: {
        allowLibraryPublish: !0
      },
      children: jsx(y0.Provider, {
        value: f8,
        children: jsx($$l1, {
          children: e
        })
      })
    })
  });
}
export const a = $$d0;
export const p = $$l1;