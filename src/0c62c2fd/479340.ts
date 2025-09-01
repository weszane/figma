import { useEffect, useCallback } from "react";
import { fp } from "../figma_app/27355";
import { Fo, Uz as _$$Uz } from "../905/63728";
import { Y5 } from "../figma_app/455680";
import { tJ } from "../figma_app/741237";
import { dh } from "../figma_app/186343";
import { Pe } from "../figma_app/32128";
import { cE } from "../figma_app/932601";
var u = (e => (e.RANGE = "range", e.INDIVIDUAL = "individual", e))(u || {});
function m(e) {
  return Fo(e) ? "individual" : e.shiftKey ? "range" : null;
}
export function $$_2(e) {
  return !!m(e);
}
export function $$p0({
  pagesList: e,
  isDisabled: t,
  selectedPageIds: r,
  startRenaming: s,
  cancelMultiselect: o,
  cancelReordering: l
}) {
  useEffect(() => {
    if (t) return;
    let a = t => {
      let a = Pe(e);
      let c = r.filter(t => {
        let r = a[t];
        return void 0 !== r && !e[r].isDivider;
      }).sort((e, t) => a[e] - a[t]);
      if (0 !== c.length) switch (t.keyCode) {
        case _$$Uz.ESCAPE:
          o();
          l();
          break;
        case _$$Uz.R:
          Fo(t) && (1 === c.length ? s(c[0]) : Y5.triggerActionInUserEditScope("batch-page-rename", {
            args: {
              nodeIds: c
            }
          }));
      }
    };
    document.addEventListener("keydown", a);
    return () => document.removeEventListener("keydown", a);
  }, [t, e, r, o, l, s]);
}
export function $$f1(e) {
  let [t, r] = fp(cE);
  let i = dh();
  let d = useCallback(() => {
    r(e => e.length ? [] : e);
  }, [r]);
  let u = useCallback((a, s) => {
    let l = m(s);
    switch (l && (tJ([]), Y5.commit()), l) {
      case "individual":
        r(t.includes(a) ? t.filter(e => e !== a) : 0 === t.length && i !== a ? [i, a] : [...t, a]);
        return !0;
      case "range":
        {
          let s = 0 === t.length ? i : t[t.length - 1];
          let n = e.findIndex(e => e.nodeId === s);
          let o = e.findIndex(e => e.nodeId === a);
          let l = Math.min(n, o);
          let d = Math.max(n, o);
          let c = new Set(t);
          let u = e.slice(l, d + 1).map(e => e.nodeId);
          c.has(u[0]) && c.has(u[u.length - 1]) ? r(t.filter(e => !u.includes(e))) : r([...t, ...u.filter(e => !c.has(e))]);
          return !0;
        }
      case null:
        d();
        return !1;
    }
  }, [d, e, i, t, r]);
  return {
    selectedPageIds: t,
    handleMultiselectClick: u,
    cancelMultiselect: d
  };
}
export const Uz = $$p0;
export const _k = $$f1;
export const oP = $$_2;