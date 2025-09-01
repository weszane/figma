import { useState, useEffect, useCallback } from "react";
import { getRequest } from "../905/910117";
export let $$a5 = 25;
export function $$s2(e, t, r) {
  let [i, s] = useState({});
  useEffect(() => {
    s({});
  }, [e]);
  return {
    fetchNext: useCallback((n = !1) => $$c4(i) || n ? $$d1(e, r || $$a5, n ? {} : i, $$o0).then(e => (s({
      pagination: {
        next_page: e.pagination?.next_page,
        prev_page: e.pagination?.prev_page
      }
    }), delete e.pagination, e)).catch(e => (t?.(e), Promise.resolve({}))) : Promise.resolve({}), [e, t, i, r]),
    hasMore: $$c4(i)
  };
}
let $$o0 = "next";
let $$l3 = "prev";
export function $$d1(e, t, r, n = $$o0) {
  return new Promise((a, s) => {
    let o = r && r.pagination;
    let d = o && (n === $$l3 ? o.prev_page : o.next_page);
    (null == o || d) && (d = d || `${e}${-1 === e.indexOf("?") ? "?" : "&"}page_size=${t}`, getRequest(d).then(({
      data: e
    }) => {
      let t = e.pagination;
      null == o ? o = t : n === $$l3 ? t.prev_page && (o.prev_page = t.prev_page) : o.next_page = t.next_page;
      e.meta.pagination = o;
      a(e.meta);
    }, s));
  });
}
export function $$c4(e) {
  return !!(!e?.pagination || e.pagination.next_page);
}
export const AS = $$o0;
export const En = $$d1;
export const WQ = $$s2;
export const mL = $$l3;
export const u9 = $$c4;
export const vs = $$a5; 
