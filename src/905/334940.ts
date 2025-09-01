import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo, useState, useLayoutEffect } from "react";
import { bL, QB, rA, Rz } from "../905/174266";
import { Z } from "../905/279476";
import { t as _$$t } from "../905/303541";
export function $$l0({
  draft: e,
  customRetryAction: t = {}
}) {
  let i = function (e) {
    let t = e.fieldStates;
    let i = "error" === e.status ? e.errors : void 0;
    return {
      fieldsWithExceptionBySource: useMemo(() => Object.values(t).reduce((e, t) => {
        if ("error" === t.status) for (let i of t.errors) "exception" === i.type && (e[i.source] = e[i.source] ?? [], e[i.source].push(t));
        return e;
      }, {}), [t]),
      draftHasExceptionFromSource: useMemo(() => {
        let t = {};
        if ("error" === e.status) for (let e of i ?? []) "exception" === e.type && (t[e.source] = !0);
        return t;
      }, [i, e.status])
    };
  }(e);
  let l = (() => {
    let n = i.fieldsWithExceptionBySource.fetchInitialValue ?? [];
    if (n.length > 0) return {
      message: _$$t("community.publishing.failed_to_load_fields"),
      retryAction: () => {
        t.fieldsFailedToLoad ? t.fieldsFailedToLoad(n) : n.forEach(e => e.resetValue());
      }
    };
    let r = i.fieldsWithExceptionBySource.validate ?? [];
    return r.length > 0 ? {
      message: _$$t("community.publishing.failed_to_validate_fields"),
      retryAction: () => {
        t.fieldsFailedToValidate ? t.fieldsFailedToValidate(r) : r.forEach(e => e.clearErrors?.());
      }
    } : i.draftHasExceptionFromSource.validate ? {
      message: _$$t("community.publishing.failed_to_validate_form"),
      retryAction: () => {
        t.draftFailedToValidate ? t.draftFailedToValidate() : e.clearErrors?.();
      }
    } : i.draftHasExceptionFromSource.submit ? {
      message: _$$t("community.publishing.failed_to_submit_form"),
      retryAction: () => {
        t.draftFailedToSubmit ? t.draftFailedToSubmit() : e.clearErrors?.();
      }
    } : void 0;
  })();
  let [d, c] = useState();
  return (useLayoutEffect(() => {
    c(void 0);
  }, [i]), l && l.message !== d) ? jsx("div", {
    className: "x10l6tqk x1vp1144 xh8yej3 x78zum5 xl56j7k x67bb7w",
    children: jsxs(bL, {
      variant: "danger",
      onClose: () => {
        c(l.message);
      },
      children: [jsx(Z, {}), jsx(QB, {
        children: l.message
      }), jsx(rA, {
        action: l.retryAction,
        children: _$$t("community.actions.retry")
      }), jsx(Rz, {})]
    })
  }) : null;
}
export const r = $$l0;