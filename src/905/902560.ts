import { parseQuery } from "../905/634134";
import { oU, Od, dy, LU } from "../figma_app/967319";
export function $$a0(e) {
  if (!e) return oU;
  let t = parseQuery(e);
  let i = t.sort_by;
  let a = Od.NAME;
  i && Object.values(Od).includes(i) && i !== Od.SEARCH_SCORE && (a = i);
  let s = t.order_by?.toLowerCase() === dy.DESC;
  let o = LU.includes(a);
  return {
    columnName: a,
    isReversed: o ? !s : s
  };
}
export function $$s1(e) {
  let t = "score" === e.columnName || LU.includes(e.columnName) ? !e.isReversed : e.isReversed;
  return {
    ...(e.columnName !== Od.NAME && {
      sort_by: e.columnName
    }),
    ...(t && {
      order_by: dy.DESC
    })
  };
}
export const E = $$a0;
export const n = $$s1;
