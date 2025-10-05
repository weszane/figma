import { jsx } from "react/jsx-runtime";
import { Suspense } from "react";
import { LoadingSpinner } from "../905/443820";
if (443 == require.j) {}
export function $$l0(e) {
  return jsx(Suspense, {
    fallback: jsx(LoadingSpinner, {}),
    children: e.children
  });
}
export const o = $$l0;