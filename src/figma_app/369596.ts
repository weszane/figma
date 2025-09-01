import { useState, useCallback, useMemo } from "react";
import { sortBy, sortByWithOptions } from "../figma_app/656233";
function a(e, t, r) {
  if (!t.getSortValue) return;
  let n = r.isReversed;
  let a = n;
  t.sortReversed && (n = !n);
  t.sortSecondaryReversed && (a = !a);
  t.sortNumerically ? sortBy(e, t.getSortValue, n, t.getSecondarySortValue, a) : sortByWithOptions(e, t.getSortValue, {
    isDescending: n,
    isSecondaryDescending: a
  }, t.getSecondarySortValue);
}
export function $$s0(e, t, r, n) {
  if (0 === t.length) return e;
  let i = new Set(t);
  let s = [...e, ...t];
  a(s, r, n);
  let o = new Map();
  let l = {};
  let d = l;
  s.forEach(e => {
    i.has(e) ? (o.has(d) || o.set(d, []), o.get(d).push(e)) : d = e;
  });
  let c = [];
  o.has(l) && c.push(...o.get(l));
  e.forEach(e => {
    c.push(e);
    o.has(e) && c.push(...o.get(e));
  });
  return c;
}
export function $$o1(e, t, r) {
  let [i, s] = useState(e);
  let o = useCallback(e => {
    s({
      columnName: e,
      isReversed: i.columnName === e && !i.isReversed
    });
  }, [i.columnName, i.isReversed]);
  let l = useMemo(() => {
    let e = [...t];
    let n = r.find(e => e.name === i.columnName);
    n && n.getSortValue && a(e, n, i);
    return e;
  }, [r, t, i]);
  return [i, o, l];
}
export const m = $$s0;
export const z = $$o1;