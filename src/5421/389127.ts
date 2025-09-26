import { useMemo } from "react";
import { useSelector } from "react-redux";
import { FontSourceType, FontHelpers } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { getHighestPriorityFontKey } from "../905/714538";
export function $$s3() {
  let e = useSelector(e => e.fonts);
  return useMemo(() => {
    let t = {};
    for (let [n, o] of Object.entries(e)) {
      let e = Object.fromEntries(Object.entries(o).filter(([e, t]) => t.source === FontSourceType.GOOGLE));
      Object.keys(e).length > 0 && (t[n] = e);
    }
    return t;
  }, [e]);
}
export function $$d1(e, t) {
  if (t.current) {
    if (t.current.fontName?.family === e.fontFamily) return;
    t.current.removeSelfAndChildren();
    t.current = null;
  }
  let n = FontHelpers?.getLocalTextStyleFontInfo();
  if (n) {
    for (let t of n) if (t.family === e.fontFamily && t.style === e.styleName) return;
  }
  let o = getSingletonSceneGraph().createStyle("TEXT");
  o.fontName = {
    family: e.fontFamily,
    style: e.styleName,
    postscript: e.style.postscript
  };
  o.name = e.fontFamily;
  t.current = o;
}
export function $$c0(e, t) {
  let n = t[e];
  if (!n) return;
  let o = getHighestPriorityFontKey(n);
  if (void 0 === o) return;
  let i = n[o];
  if (!i) return;
  let r = "Regular";
  let a = i.styles[r];
  if (!a && (r = Object.keys(i.styles)[0]) && (a = i.styles[r]), a && r && a.id) return {
    fontFamily: e,
    fontVersion: o,
    styleName: r,
    style: a,
    fontId: a.id
  };
}
export function $$p2(e, t) {
  let n = e.match(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|[^,]+)/g);
  return n && 0 !== n.length && n.map(e => e.trim().replace(/^["']|["']$/g, ""))[0] || t;
}
export const DY = $$c0;
export const HL = $$d1;
export const m$ = $$p2;
export const xF = $$s3;