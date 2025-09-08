import { useRef, useCallback, useEffect, useLayoutEffect } from "react";
import { Kr } from "../vendor/111975";
import { f as _$$f, h } from "../905/693155";
import { Uz } from "../905/63728";
import { e as _$$e } from "../905/810168";
import { F2 } from "../905/826900";
import { useFullscreenReady } from "../905/924253";
let $$c5 = "focus-next-area";
let $$u1 = "focus-previous-area";
let p = [];
export function $$_2() {
  let e = useRef(null);
  return useCallback(t => {
    e.current && E(e.current);
    t && (e.current = t, f(t));
  }, []);
}
export function $$h0(e, t) {
  useEffect(() => {
    if (t) return;
    let r = e.current;
    if (r) {
      f(r);
      return () => {
        E(r);
      };
    }
  }, [e, t]);
}
export function $$m7(e) {
  let t = useRef(null);
  $$h0(t, e);
  return t;
}
export function $$g8(e) {
  let t = _$$e();
  let r = e.current;
  let i = useFullscreenReady();
  useLayoutEffect(() => {
    if (t && r) {
      f(r);
      return () => E(r);
    }
    if (!i) return;
    let e = document.querySelector("#fullscreen-root");
    if (e) {
      f(e, F2.focusCustomCanvasFocusElement);
      return () => {
        E(e);
      };
    }
  }, [t, i, r]);
}
function f(e, t) {
  let r = t ? {
    element: e,
    focus: t
  } : {
    element: e
  };
  if (!p.length) {
    p.push(r);
    return;
  }
  for (let [t, {
    element: n
  }] of p.entries()) {
    let i = n.compareDocumentPosition(e);
    if (i === Node.DOCUMENT_POSITION_PRECEDING || i === Node.DOCUMENT_POSITION_CONTAINS) {
      if (p[t - 1]?.element === e) return;
      p.splice(t, 0, r);
      return;
    }
  }
  p.push(r);
}
function E(e) {
  let t = p.findIndex(t => t.element === e);
  -1 !== t && p.splice(t, 1);
}
export function $$y9(e) {
  return e ? Kr(e, {
    getShadowRoot: !0
  })[0] : null;
}
function b(e) {
  if (e.focus) return e.focus();
  let t = $$y9(e.element) || e.element;
  t?.focus();
  return t;
}
function T(e) {
  for (let [t, {
    element: r
  }] of p.entries()) if (r.contains(document.activeElement)) {
    let r = p.length;
    let n = p[(r + t + ("forward" === e ? 1 : -1)) % r];
    let i = n && b(n);
    if (i) return i;
  }
  let t = "forward" === e ? p[0] : p[p.length - 1];
  return t ? b(t) : null;
}
export function $$I4(e) {
  T("backward");
  _$$f(h.FOCUS_CYCLE_PREVIOUS_AREA, {
    key: e
  });
}
export function $$S3(e) {
  T("forward");
  _$$f(h.FOCUS_CYCLE_NEXT_AREA, {
    key: e
  });
}
export function $$v6(e) {
  let {
    e: _e,
    onClickHandler,
    onEscapeHandler
  } = e;
  onClickHandler && _e.keyCode === Uz.ENTER && onClickHandler(_e);
  onEscapeHandler && _e.keyCode === Uz.ESCAPE && onEscapeHandler(_e);
}
export const C_ = $$h0;
export const Jt = $$u1;
export const OC = $$_2;
export const WU = $$S3;
export const cw = $$I4;
export const dz = $$c5;
export const hx = $$v6;
export const jL = $$m7;
export const k4 = $$g8;
export const xv = $$y9;