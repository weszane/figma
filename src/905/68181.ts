import { useState, useEffect } from "react";
import { YH, $t, Pe } from "../vendor/59696";
import { Lz } from "../vendor/37366";
import { IA } from "../905/644295";
let o = e => ({
  line: e.state.doc.lineAt(e.state.selection.main.from),
  lineCount: e.state.doc.lines,
  lineBreak: e.state.lineBreak,
  length: e.state.doc.length,
  readOnly: e.state.readOnly,
  tabSize: e.state.tabSize,
  selection: e.state.selection,
  selectionAsSingle: e.state.selection.asSingle().main,
  ranges: e.state.selection.ranges,
  selectionCode: e.state.sliceDoc(e.state.selection.main.from, e.state.selection.main.to),
  selections: e.state.selection.ranges.map(t => e.state.sliceDoc(t.from, t.to)),
  selectedText: e.state.selection.ranges.some(e => !e.empty)
});
let $$l0 = YH.define();
let d = [];
export function $$c1(e) {
  let {
    value,
    selection,
    onChange,
    onStatistics,
    onCreateEditor,
    onUpdate,
    extensions = d,
    autoFocus,
    theme = "light",
    height = null,
    minHeight = null,
    maxHeight = null,
    width = null,
    minWidth = null,
    maxWidth = null,
    placeholder = "",
    editable = !0,
    readOnly = !1,
    indentWithTab = !0,
    basicSetup = !0,
    root,
    initialState
  } = e;
  let [R, N] = useState();
  let [P, O] = useState();
  let [D, L] = useState();
  let F = Lz.theme({
    "&": {
      height,
      minHeight,
      maxHeight,
      width,
      minWidth,
      maxWidth
    },
    "& .cm-scroller": {
      height: "100% !important"
    }
  });
  let M = [Lz.updateListener.of(e => {
    e.docChanged && "function" == typeof onChange && !e.transactions.some(e => e.annotation($$l0)) && onChange(e.state.doc.toString(), e);
    onStatistics && onStatistics(o(e));
  }), F, ...IA({
    theme,
    editable,
    readOnly,
    placeholder,
    indentWithTab,
    basicSetup
  })];
  onUpdate && "function" == typeof onUpdate && M.push(Lz.updateListener.of(onUpdate));
  M = M.concat(extensions);
  useEffect(() => {
    if (R && !D) {
      let e = {
        doc: value,
        selection,
        extensions: M
      };
      let n = initialState ? $t.fromJSON(initialState.json, e, initialState.fields) : $t.create(e);
      if (L(n), !P) {
        let e = new Lz({
          state: n,
          parent: R,
          root
        });
        O(e);
        onCreateEditor && onCreateEditor(e, n);
      }
    }
    return () => {
      P && (L(void 0), O(void 0));
    };
  }, [R, D]);
  useEffect(() => N(e.container), [e.container]);
  useEffect(() => () => {
    P && (P.destroy(), O(void 0));
  }, [P]);
  useEffect(() => {
    autoFocus && P && P.focus();
  }, [autoFocus, P]);
  useEffect(() => {
    P && P.dispatch({
      effects: Pe.reconfigure.of(M)
    });
  }, [theme, extensions, height, minHeight, maxHeight, width, minWidth, maxWidth, placeholder, editable, readOnly, indentWithTab, basicSetup, onChange, onUpdate]);
  useEffect(() => {
    if (void 0 === value) return;
    let e = P ? P.state.doc.toString() : "";
    P && value !== e && P.dispatch({
      changes: {
        from: 0,
        to: e.length,
        insert: value || ""
      },
      annotations: [$$l0.of(!0)]
    });
  }, [value, P]);
  return {
    state: D,
    setState: L,
    view: P,
    setView: O,
    container: R,
    setContainer: N
  };
}
export const i = $$l0;
export const q = $$c1;