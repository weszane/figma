import _require from "../1200/785121";
import { jsx } from "react/jsx-runtime";
import { lazy, Suspense } from "react";
import { DialogContents } from "../figma_app/272243";
import { LoadingSpinner } from "../905/443820";
import { _L } from "../905/911410";
import { g4 } from "../9410/43961";
let d = lazy(() => Promise.all([]).then(_require));
function c() {
  return jsx(DialogContents, {
    children: jsx("div", {
      className: g4,
      children: jsx(LoadingSpinner, {})
    })
  });
}
export function $$u0({
  isOpen: e,
  onClose: t,
  defaultPosition: i,
  windowDefaultWidth: a,
  windowDefaultHeight: s,
  manager: l,
  entrypoint: u,
  children: p
}) {
  return e ? jsx(_L, {
    constraints: {
      minWidth: a,
      minHeight: s
    },
    manager: l,
    defaultWidth: a,
    defaultHeight: s,
    onClose: t,
    defaultPosition: i,
    children: jsx(Suspense, {
      fallback: jsx(c, {}),
      children: p || jsx(d, {
        entrypoint: u
      })
    })
  }) : null;
}
export const f = $$u0;