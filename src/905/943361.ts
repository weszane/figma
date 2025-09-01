import { useMemo } from "react";
import { Bg } from "../905/81982";
function a(e) {
  return e.replace(/\//g, " ");
}
function s({
  items: e,
  query: t
}) {
  let i = useMemo(() => {
    let t = e.map(e => ({
      ...e,
      searchName: a(e.name ?? e.value.name)
    }));
    return new Bg(t, {
      keys: ["searchName", "description"],
      threshold: .1,
      ignoreLocation: !0,
      ignoreFieldNorm: !0,
      useExtendedSearch: !0
    });
  }, [e]);
  return useMemo(() => {
    if (0 === t.length) return e;
    let n = a(t);
    return i.search(n).map(e => e.item);
  }, [i, e, t]);
}
export function $$o2(e, t) {
  return s({
    items: e,
    query: t
  });
}
export function $$l1(e, t) {
  return s({
    items: e,
    query: t
  });
}
export function $$d3(e, t) {
  return s({
    items: e,
    query: t
  });
}
export function $$c0(e, t) {
  return s({
    items: e,
    query: t
  });
}
export const Ui = $$c0;
export const bT = $$l1;
export const qF = $$o2;
export const tZ = $$d3;