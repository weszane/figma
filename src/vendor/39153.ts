import { KU, rm } from "../vendor/325489";
import { pq } from "../vendor/150583";
import { lu } from "../vendor/975854";
export function $$a0(e, n) {
  let i = KU();
  let a = rm();
  if (!i) return;
  let {
    beforeBreadcrumb = null,
    maxBreadcrumbs = 100
  } = i.getOptions();
  if (maxBreadcrumbs <= 0) return;
  let l = {
    timestamp: lu(),
    ...e
  };
  let d = beforeBreadcrumb ? pq(() => beforeBreadcrumb(l, n)) : l;
  null !== d && (i.emit && i.emit("beforeAddBreadcrumb", d, n), a.addBreadcrumb(d, maxBreadcrumbs));
}
export const Z = $$a0;