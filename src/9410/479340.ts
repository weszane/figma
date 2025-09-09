import { useEffect, useCallback } from "react";
import { useAtomValueAndSetter } from "../figma_app/27355";
import { Fo, Uz as _$$Uz } from "../905/63728";
import { fullscreenValue } from "../figma_app/455680";
import { replaceSelection } from "../figma_app/741237";
import { dh } from "../figma_app/186343";
import { Pe } from "../figma_app/32128";
import { cE } from "../figma_app/932601";
var u = (e => (e.RANGE = "range", e.INDIVIDUAL = "individual", e))(u || {});
function p(e) {
  return Fo(e) ? "individual" : e.shiftKey ? "range" : null;
}
export function $$h2(e) {
  return !!p(e);
}
export function $$m0({
  pagesList: e,
  isDisabled: t,
  selectedPageIds: i,
  startRenaming: n,
  cancelMultiselect: o,
  cancelReordering: l
}) {
  useEffect(() => {
    if (t) return;
    let r = t => {
      let r = Pe(e);
      let c = i.filter(t => {
        let i = r[t];
        return void 0 !== i && !e[i].isDivider;
      }).sort((e, t) => r[e] - r[t]);
      if (0 !== c.length) switch (t.keyCode) {
        case _$$Uz.ESCAPE:
          o();
          l();
          break;
        case _$$Uz.R:
          Fo(t) && (1 === c.length ? n(c[0]) : fullscreenValue.triggerActionInUserEditScope("batch-page-rename", {
            args: {
              nodeIds: c
            }
          }));
      }
    };
    document.addEventListener("keydown", r);
    return () => document.removeEventListener("keydown", r);
  }, [t, e, i, o, l, n]);
}
export function $$f1(e) {
  let [t, i] = useAtomValueAndSetter(cE);
  let a = dh();
  let d = useCallback(() => {
    i(e => e.length ? [] : e);
  }, [i]);
  let u = useCallback((r, n) => {
    let l = p(n);
    switch (l && (replaceSelection([]), fullscreenValue.commit()), l) {
      case "individual":
        i(t.includes(r) ? t.filter(e => e !== r) : 0 === t.length && a !== r ? [a, r] : [...t, r]);
        return !0;
      case "range":
        {
          let n = 0 === t.length ? a : t[t.length - 1];
          let s = e.findIndex(e => e.nodeId === n);
          let o = e.findIndex(e => e.nodeId === r);
          let l = Math.min(s, o);
          let d = Math.max(s, o);
          let c = new Set(t);
          let u = e.slice(l, d + 1).map(e => e.nodeId);
          c.has(u[0]) && c.has(u[u.length - 1]) ? i(t.filter(e => !u.includes(e))) : i([...t, ...u.filter(e => !c.has(e))]);
          return !0;
        }
      case null:
        d();
        return !1;
    }
  }, [d, e, a, t, i]);
  return {
    selectedPageIds: t,
    handleMultiselectClick: u,
    cancelMultiselect: d
  };
}
export const Uz = $$m0;
export const _k = $$f1;
export const oP = $$h2;