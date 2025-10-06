import { jsx } from "react/jsx-runtime";
import { useRef, useCallback } from "react";
import { U1 } from "../figma_app/343967";
import { N } from "../905/57692";
import { Xr } from "../figma_app/27355";
import { useMultiRefCallback } from "../figma_app/272902";
import d from "classnames";
import { Dm } from "../figma_app/8833";
import { bo } from "../figma_app/447445";
import { N as _$$N } from "../figma_app/910954";
import { dN } from "../figma_app/384673";
import { zr, al, pk } from "../figma_app/99436";
var c = d;
export function $$f0({
  children: e,
  ariaLabel: t,
  ignoreQuickActionsSpacing: i,
  ignorePositioning: d
}) {
  let f = useRef(null);
  let _ = U1(f);
  let A = Xr(dN);
  let y = useCallback(e => A(e), [A]);
  let b = useMultiRefCallback(_, y);
  let v = _$$N();
  return jsx(N, {
    ref: b,
    className: c()(zr, Dm, {
      [al]: !d
    }),
    "aria-label": t,
    style: i ? void 0 : {
      bottom: v
    },
    "data-secondary-toolbelt": !0,
    children: jsx(bo, {
      children: jsx("div", {
        className: pk,
        children: e
      })
    })
  });
}
export const a = $$f0;