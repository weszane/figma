import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRef, useEffect, createContext, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useUndoRedoAtom, atom, useAtomWithSubscription, useAtomValueAndSetter } from "../figma_app/27355";
import { useMemoStable } from "../905/19536";
import { selectViewAction } from "../905/929976";
import { fullscreenValue } from "../figma_app/455680";
import { getSelectedView } from "../figma_app/386952";
import { SW, c1 } from "../905/589717";
import { isFigmascopeView } from "../905/694285";
import { G2 } from "../figma_app/314591";
import { Cc } from "../905/545842";
import { Sv } from "../905/104795";
let {
  valueAtom,
  undoAtom,
  redoAtom,
  historyAtom
} = useUndoRedoAtom(SW.fromString("0:0"));
let $$b5 = atom(e => {
  let t = e(Cc);
  let i = e(valueAtom);
  return t.getObject(i);
});
let $$v4 = Sv("followSelection", !1);
export function $$I7({
  children: e,
  appSelection: t,
  setAppSelection: i
}) {
  let r = useAtomWithSubscription(Cc);
  return i && r instanceof G2 ? jsx(S, {
    resource: r,
    appSelection: t,
    setAppSelection: i,
    children: e
  }) : jsxs(Fragment, {
    children: [e, jsx(E, {})]
  });
}
function E() {
  let e = useDispatch();
  let t = getSelectedView();
  let [i, n] = useAtomValueAndSetter(valueAtom);
  let o = useRef(!0);
  useEffect(() => {
    isFigmascopeView(t) && (o.current ? (o.current = !1, t.selection && n(SW.fromString(t.selection))) : i !== t.selection && e(selectViewAction({
      ...t,
      selection: i
    })));
  }, [t, i, n, e]);
  return null;
}
export let $$x1 = createContext({
  selectInApp: void 0,
  canSelectInApp: void 0
});
function S({
  resource: e,
  appSelection: t,
  setAppSelection: i,
  children: a
}) {
  let l = e.scene;
  let c = useAtomWithSubscription($$v4);
  let [p, m] = useAtomValueAndSetter(valueAtom);
  let h = useRef(p);
  let g = useRef(null);
  let _ = useRef(c);
  let A = useCallback(e => {
    let t = l.getNodeByGuid(c1.fromString(e));
    t && m(t.id);
  }, [m, l]);
  useEffect(() => {
    fullscreenValue.setFigmascopeSelectedGuidCallback(A);
  }, [A]);
  let y = p ? l.getNodeById(p) : null;
  let b = useMemoStable(() => y ? w(y) : null, [y]);
  useEffect(() => {
    let e = t?.guids.includes(p);
    if (t !== g.current || c !== _.current) {
      if (c || null === g.current) {
        if (!t?.guids || 0 === t.guids.length) return;
        e || A(t.guids[0]);
      }
      g.current = t;
      _.current = c;
    } else p !== h.current && (c && i && !e && b && i(b), h.current = p);
  }, [t, b, p, c, i, A]);
  let I = useMemo(() => ({
    canSelectInApp: e => !!w(e),
    selectInApp: e => {
      let t = w(e);
      t && i(t);
    }
  }), [i]);
  return jsx($$x1.Provider, {
    value: I,
    children: a
  });
}
function w(e) {
  if (!e.isInternalOnly) return {
    selectionType: "canvas",
    guids: [e.guid]
  };
  if (e.isStyle && e.isLocalAsset) {
    let t = e.nodeChange.styleType;
    if (t) return {
      selectionType: "local_style",
      guids: [e.guid],
      styleType: t
    };
  }
  return null;
}
export const AJ = valueAtom;
export const H$ = $$x1;
export const JN = redoAtom;
export const Sd = historyAtom;
export const bA = $$v4;
export const gg = $$b5;
export const jI = undoAtom;
export const q = $$I7;