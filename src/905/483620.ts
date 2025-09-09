import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useRef, useEffect, useCallback } from "react";
import { lQ } from "../905/934246";
import { useHandleChangeEvent, useHandleKeyboardEvent, useHandleGenericEvent } from "../figma_app/878298";
import { L as _$$L } from "../905/408237";
import { useSyncedRef } from "../905/633914";
import { v as _$$v } from "../905/318279";
import { ks } from "../figma_app/626177";
var $$u1 = (e => (e[e.CELL = 0] = "CELL", e[e.FORM = 1] = "FORM", e))($$u1 || {});
export function $$p0({
  multiline: e = !1,
  placeholder: t = "",
  type: i,
  autoFocus: u = !1,
  noBorderOnFocus: p,
  onCancel: m = lQ,
  onChange: h,
  onSubmit: g,
  onFinish: f,
  originalValue: _,
  maxLength: A,
  recordingKey: y,
  selectOnFocus: b = !0,
  value: v,
  canBeEmpty: I = !1,
  disabled: E = !1,
  id: x,
  ignoreGroupPrefix: S = !1
}) {
  let w = useRef(null);
  let C = useRef(!1);
  let [T, k, R] = useSyncedRef(_);
  useEffect(() => {
    R(_);
  }, [_, R]);
  let N = useRef(!1);
  let P = useHandleChangeEvent(y, "change", useCallback(e => {
    let t = e.target.value;
    R(t);
    C.current = !1;
    h && h(t);
  }, [h, R]));
  let O = useCallback(e => {
    N.current = !0;
    R(_);
    h?.(_);
    m(_);
    e?.currentTarget?.blur();
    N.current = !1;
  }, [m, h, _, R]);
  let D = useCallback(e => {
    if (T.current === _) {
      O(e);
      return;
    }
    T.current ? (C.current = !0, g?.(T.current) || O(e)) : I && g?.("") || O(e);
    e?.currentTarget?.blur();
  }, [T, _, I, O, g]);
  let L = useHandleKeyboardEvent(y, "keydown", useCallback(e => {
    switch (e.key) {
      case "Enter":
        e.preventDefault();
        D(e);
        break;
      case "Esc":
      case "Escape":
        e.preventDefault();
        O(e);
    }
  }, [O, D]));
  let F = useHandleGenericEvent(y, "blur", useCallback(e => {
    if (N.current) return;
    let t = e.target?.value;
    null != t && (R(t), D(null));
  }, [R, D]));
  let M = useCallback(e => {
    b && e.target.select();
  }, [b]);
  useEffect(() => {
    let e = w.current;
    if (!e) return () => {};
    function t(e) {
      e.stopPropagation();
    }
    e.addEventListener("mousedown", t);
    return () => {
      e.removeEventListener("mousedown", t);
    };
  }, []);
  let j = useRef(f);
  j.current = f;
  useEffect(() => {
    let e = k.split("/");
    let t = S ? e[e.length - 1] : k;
    C.current && t === _ && (j.current?.(_), C.current = !1);
  }, [S, _, k]);
  return jsxs(Fragment, {
    children: [0 === i && jsx(ks, {
      autoFocus: u,
      className: "rename_input--cellInput--J7k-M",
      dataTestId: y,
      delay: 0,
      disabled: E,
      id: x,
      innerRef: w,
      maxLength: A,
      noBorderOnFocus: p,
      noPlaceholderLine: !0,
      onBlur: F,
      onChange: P,
      onFocus: M,
      onKeyDown: L,
      placeholder: t,
      value: v ?? k
    }), 1 === i && (e ? jsx(_$$v, {
      autoFocus: u,
      className: "rename_input--expandingText--PJi-K",
      delay: 0,
      disableInput: E,
      disabled: E,
      id: x,
      innerRef: w,
      maxLength: A,
      onBlur: F,
      onChange: P,
      onFocus: M,
      onKeyDown: L,
      placeholder: t,
      value: v ?? k
    }) : jsx(_$$L, {
      ref: w,
      autoFocus: u,
      className: "rename_input--textInput--x3ypL raw_components--textInput--t9D8g raw_components--base--T7G0z raw_components--input--JB4Ix raw_components--singleRowHeight--dKM4t raw_components--border--SKh2u ellipsis--ellipsis--Tjyfa",
      dataTestId: y,
      delay: 0,
      disabled: E,
      id: x,
      maxLength: A,
      onBlur: F,
      onChange: P,
      onFocus: M,
      onKeyDown: L,
      placeholder: t,
      value: v ?? k
    }))]
  });
}
export const b = $$p0;
export const $ = $$u1;