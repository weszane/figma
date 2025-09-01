import _require4 from "../vendor/752520";
import _require3 from "../vendor/995673";
import _require2 from "../vendor/543018";
import _require from "../9268/489268";
import { jsx } from "react/jsx-runtime";
import { forwardRef, useRef, useImperativeHandle } from "react";
import { q, i as _$$i } from "../905/68181";
import { o } from "../905/947384";
import d from "../vendor/59696";
import c from "../vendor/37366";
import u from "../vendor/616405";
import { s as _$$s } from "../905/937845";
import { A } from "../905/298845";
import h from "../vendor/576710";
import m from "../vendor/401644";
import g from "../vendor/548481";
import f from "../vendor/831678";
import E from "../vendor/85340";
import y from "../vendor/655490";
let s = forwardRef((e, t) => {
  let {
    className,
    value = "",
    selection,
    extensions = [],
    onChange,
    onStatistics,
    onCreateEditor,
    onUpdate,
    autoFocus,
    theme = "light",
    height,
    minHeight,
    maxHeight,
    width,
    minWidth,
    maxWidth,
    basicSetup,
    placeholder,
    indentWithTab,
    editable,
    readOnly,
    root,
    initialState,
    ...C
  } = e;
  let w = useRef(null);
  let {
    state,
    view,
    container
  } = q({
    container: w.current,
    root,
    value,
    autoFocus,
    theme,
    height,
    minHeight,
    maxHeight,
    width,
    minWidth,
    maxWidth,
    basicSetup,
    placeholder,
    indentWithTab,
    editable,
    readOnly,
    selection,
    onChange,
    onStatistics,
    onCreateEditor,
    onUpdate,
    extensions,
    initialState
  });
  if (useImperativeHandle(t, () => ({
    editor: w.current,
    state,
    view
  }), [w, container, state, view]), "string" != typeof value) throw Error(`value must be typeof string but got ${typeof value}`);
  let P = "string" == typeof theme ? `cm-theme-${theme}` : "cm-theme";
  return jsx("div", {
    ref: w,
    className: `${P}${className ? ` ${className}` : ""}`,
    ...C
  });
});
s.displayName = "CodeMirror";
export let $$o7 = s;
export let $$b27 = {
  json: async () => (await _require).json(),
  css: async () => (await _require2).css(),
  html: async () => (await Promise.all([]).then(_require3)).html(),
  markdown: async () => (await Promise.all([]).then(_require4)).markdown()
};
export { YH, $t, Pe, sU } from "../vendor/59696";
export { NZ, Lz, dT, Z9, xO, Ux, w4, qf, vX } from "../vendor/37366";
export { t$ } from "../vendor/401644";
export { L0, Hg, ve, yh, Aw, $P, Ri } from "../vendor/616405";
export { $w, yU, DH } from "../vendor/576710";
export { b6, Mg, UY } from "../vendor/85340";
export { Q2, g4 } from "../vendor/831678";
export { bu } from "../vendor/548481";
export { bM } from "../vendor/655490";
export const ij = _$$i;
export const CH = $$o7;
export const oQ = o;
export const AZ = A;
export const sg = _$$s;
export const pX = $$b27;