import { DF } from "../vendor/463802";
import { Sd } from "../vendor/425002";
import { I2, hV, kF, ZK, WW, Kf, jZ, V3, SK, t5 } from "../vendor/408361";
import { useMemo, useEffect } from "react";
let a = 0;
let h = 1;
let d = 2;
let p = 0;
let g = 1;
let m = 2;
let v = 3;
let y = 4;
function b(e, r, n, i, s) {
  if (null === e || 0 === n.size && 0 === i.size && !s) return p;
  let a = r._selection;
  let h = e._selection;
  if (s) return g;
  if (!(I2(a) && I2(h) && h.isCollapsed() && a.isCollapsed())) return p;
  let d = function (e, r, n) {
    let i = e._nodeMap;
    let s = [];
    for (let e of r) {
      let r = i.get(e);
      void 0 !== r && s.push(r);
    }
    for (let [e, r] of n) {
      if (!r) continue;
      let n = i.get(e);
      void 0 === n || hV(n) || s.push(n);
    }
    return s;
  }(r, n, i);
  if (0 === d.length) return p;
  if (d.length > 1) {
    let n = r._nodeMap;
    let i = n.get(a.anchor.key);
    let s = n.get(h.anchor.key);
    return i && s && !e._nodeMap.has(i.__key) && kF(i) && 1 === i.__text.length && 1 === a.anchor.offset ? m : p;
  }
  let b = d[0];
  let O = e._nodeMap.get(b.__key);
  if (!kF(O) || !kF(b) || O.__mode !== b.__mode) return p;
  let x = O.__text;
  let w = b.__text;
  if (x === w) return p;
  let k = a.anchor;
  let _ = h.anchor;
  if (k.key !== _.key || "text" !== k.type) return p;
  let S = k.offset;
  let E = _.offset;
  let A = w.length - x.length;
  return 1 === A && E === S - 1 ? m : -1 === A && E === S + 1 ? v : -1 === A && E === S ? y : p;
}
function O(e, r) {
  let n = Date.now();
  let i = p;
  return (s, g, m, v, y, O) => {
    let x = Date.now();
    if (O.has("historic")) {
      i = p;
      n = x;
      return d;
    }
    let w = b(s, g, v, y, e.isComposing());
    let k = (() => {
      let b = null === m || m.editor === e;
      let k = O.has("history-push");
      if (!k && b && O.has("history-merge")) return a;
      if (null === s) return h;
      let _ = g._selection;
      return v.size > 0 || y.size > 0 ? !1 === k && w !== p && w === i && x < n + r && b || 1 === v.size && function (e, r, n) {
        let i = r._nodeMap.get(e);
        let s = n._nodeMap.get(e);
        let a = r._selection;
        let h = n._selection;
        return !(I2(a) && I2(h) && "element" === a.anchor.type && "element" === a.focus.type && "text" === h.anchor.type && "text" === h.focus.type || !kF(i) || !kF(s) || i.__parent !== s.__parent) && JSON.stringify(r.read(() => i.exportJSON())) === JSON.stringify(n.read(() => s.exportJSON()));
      }(Array.from(v)[0], s, g) ? a : h : null !== _ ? a : d;
    })();
    n = x;
    i = w;
    return k;
  };
}
function x(e) {
  e.undoStack = [];
  e.redoStack = [];
  e.current = null;
}
function w(e, r, n) {
  let i = O(e, n);
  return Sd(e.registerCommand(ZK, () => (function (e, r) {
    let n = r.redoStack;
    let i = r.undoStack;
    if (0 !== i.length) {
      let s = r.current;
      let a = i.pop();
      null !== s && (n.push(s), e.dispatchCommand(WW, !0));
      0 === i.length && e.dispatchCommand(Kf, !1);
      r.current = a || null;
      a && a.editor.setEditorState(a.editorState, {
        tag: "historic"
      });
    }
  }(e, r), !0), jZ), e.registerCommand(V3, () => (function (e, r) {
    let n = r.redoStack;
    let i = r.undoStack;
    if (0 !== n.length) {
      let s = r.current;
      null !== s && (i.push(s), e.dispatchCommand(Kf, !0));
      let a = n.pop();
      0 === n.length && e.dispatchCommand(WW, !1);
      r.current = a || null;
      a && a.editor.setEditorState(a.editorState, {
        tag: "historic"
      });
    }
  }(e, r), !0), jZ), e.registerCommand(SK, () => (x(r), !1), jZ), e.registerCommand(t5, () => (x(r), e.dispatchCommand(WW, !1), e.dispatchCommand(Kf, !1), !0), jZ), e.registerUpdateListener(({
    editorState: n,
    prevEditorState: s,
    dirtyLeaves: a,
    dirtyElements: p,
    tags: g
  }) => {
    let m = r.current;
    let v = r.redoStack;
    let y = r.undoStack;
    let b = m?.editorState;
    if (null !== m && n === b) return;
    let O = i(s, n, m, a, p, g);
    if (O === h) {
      0 !== v.length && (r.redoStack = [], e.dispatchCommand(WW, !1));
      null !== m && (y.push({
        ...m
      }), e.dispatchCommand(Kf, !0));
    } else if (O === d) return;
    r.current = {
      editor: e,
      editorState: n
    };
  }));
}
function k() {
  return {
    current: null,
    redoStack: [],
    undoStack: []
  };
}
export function $$S0({
  delay: e,
  externalHistoryState: r
}) {
  let [n] = DF();
  (function (e, r, n = 1e3) {
    let i = useMemo(() => r || k(), [r]);
    useEffect(() => w(e, i, n), [n, e, i]);
  })(n, r, e);
  return null;
}
export const G = $$S0;