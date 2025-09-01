import { DF } from "../vendor/463802";
import { useLayoutEffect, useEffect, useState, useCallback, useMemo, forwardRef } from "react";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { yl } from "../vendor/975086";
import { Sd } from "../vendor/425002";
let d = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? useLayoutEffect : useEffect;
function p({
  editor: e,
  ariaActiveDescendant: r,
  ariaAutoComplete: n,
  ariaControls: i,
  ariaDescribedBy: a,
  ariaExpanded: h,
  ariaLabel: p,
  ariaLabelledBy: g,
  ariaMultiline: m,
  ariaOwns: v,
  ariaRequired: y,
  autoCapitalize: b,
  className: O,
  id: x,
  role: w = "textbox",
  spellCheck: k = !0,
  style: _,
  tabIndex: S,
  "data-testid": E,
  ...A
}, C) {
  let [T, I] = useState(e.isEditable());
  let P = useCallback(r => {
    r && r.ownerDocument && r.ownerDocument.defaultView ? e.setRootElement(r) : e.setRootElement(null);
  }, [e]);
  let R = useMemo(() => function (...e) {
    return r => {
      e.forEach(e => {
        "function" == typeof e ? e(r) : null != e && (e.current = r);
      });
    };
  }(C, P), [P, C]);
  d(() => (I(e.isEditable()), e.registerEditableListener(e => {
    I(e);
  })), [e]);
  return jsx("div", {
    ...A,
    "aria-activedescendant": T ? r : void 0,
    "aria-autocomplete": T ? n : "none",
    "aria-controls": T ? i : void 0,
    "aria-describedby": a,
    "aria-expanded": T && "combobox" === w ? !!h : void 0,
    "aria-label": p,
    "aria-labelledby": g,
    "aria-multiline": m,
    "aria-owns": T ? v : void 0,
    "aria-readonly": !T || void 0,
    "aria-required": y,
    autoCapitalize: b,
    className: O,
    contentEditable: T,
    "data-testid": E,
    id: x,
    ref: R,
    role: T ? w : void 0,
    spellCheck: k,
    style: _,
    tabIndex: S
  });
}
let g = forwardRef(p);
function m(e) {
  return e.getEditorState().read(yl(e.isComposing()));
}
export let $$v0 = forwardRef(y);
function y(e, r) {
  let {
    placeholder,
    ...s
  } = e;
  let [a] = DF();
  return jsxs(Fragment, {
    children: [jsx(g, {
      editor: a,
      ...s,
      ref: r
    }), null != placeholder && jsx(b, {
      editor: a,
      content: placeholder
    })]
  });
}
function b({
  content: e,
  editor: r
}) {
  let n = function (e) {
    let [r, n] = useState(() => m(e));
    d(() => {
      function r() {
        n(m(e));
      }
      r();
      return Sd(e.registerUpdateListener(() => {
        r();
      }), e.registerEditableListener(() => {
        r();
      }));
    }, [e]);
    return r;
  }(r);
  let [i, a] = useState(r.isEditable());
  if (useLayoutEffect(() => (a(r.isEditable()), r.registerEditableListener(e => {
    a(e);
  })), [r]), !n) return null;
  let p = null;
  "function" == typeof e ? p = e(i) : null !== e && (p = e);
  return null === p ? null : jsx("div", {
    "aria-hidden": !0,
    children: p
  });
}
export const a = $$v0;