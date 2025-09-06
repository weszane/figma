import { jsx, Fragment } from "react/jsx-runtime";
import { useState, useRef, Suspense } from "react";
import { ServiceCategories as _$$e } from "../905/165054";
import { getFeatureFlags } from "../905/601108";
import { getErrorStackHistory } from "../905/607410";
import { h } from "../905/207101";
import { reportError } from "../905/11";
import { isInteractionOrEvalMode } from "../figma_app/897289";
function u(e) {
  h(() => {
    e.onMount();
  });
  return e.fallback;
}
function p(e) {
  h(() => {
    e.onMount();
  });
  return jsx(Fragment, {
    children: e.children
  });
}
export function $$m0(e) {
  let [t, i] = useState(!1);
  let l = useRef(!1);
  return t && getFeatureFlags().suspense_catchall_aggressive ? jsx(Fragment, {
    children: e.children
  }) : jsx(Suspense, {
    fallback: jsx(u, {
      fallback: e.fallback,
      onMount: () => {
        if (isInteractionOrEvalMode() || !t) return;
        console.warn("[SuspenseWithGuardrail] Suspense fallback rendered more than once. This likely means the UI is undergoing severe visual thrash. The following stack-traces are from the most-recently thrown promises:");
        let i = getErrorStackHistory();
        if (i.length > 0) for (let e of (console.warn("[SuspenseWithGuardrail] Recently tracked breadcrumbs:"), i)) console.warn(e);else console.warn("No breadcrumbs? This means some callsite isn't yet using `throwTrackedPromise` or `trackSuspenseBreadcrumb`.");
        if (!l.current) {
          let t = Error(i.length > 0 ? `Suspense fallback (${e.source}) rendered more than once. The following breadcrumbs are from the most-recently thrown promises:
==============================================
` + i.join("\n") + "\n==============================================\n" : `Suspense fallback (${e.source}) rendered more than once -- no recent breadcrumbs were found?`);
          reportError(_$$e.FRONTEND_PLATFORM, t);
          l.current = !0;
        }
      }
    }),
    children: jsx(p, {
      onMount: () => {
        i(!0);
      },
      children: e.children
    })
  });
}
export const g = $$m0;