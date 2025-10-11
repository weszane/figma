import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useAtomValueAndSetter } from "../figma_app/27355";
import { showDropdownThunk } from "../905/929976";
import { dropdownTypeDevHandoffPageContextMenu, dropdownTypePageContextMenu } from "../figma_app/8833";
import { Pe } from "../figma_app/32128";
import { cE } from "../figma_app/932601";
export function $$c0() {
  let e = useDispatch<AppDispatch>();
  return useCallback(({
    nodeId: t,
    clientX: i,
    clientY: r
  }) => {
    e(showDropdownThunk({
      type: dropdownTypeDevHandoffPageContextMenu,
      data: {
        clientX: i,
        clientY: r,
        pageId: t
      }
    }));
  }, [e]);
}
export function $$u1({
  pagesList: e,
  shouldShowDuplicateOption: t = !0
}) {
  let i = useDispatch<AppDispatch>();
  let [c, u] = useAtomValueAndSetter(cE);
  return useCallback(({
    nodeId: r,
    clientX: n,
    clientY: a
  }) => {
    let d = new Set(e.map(e => e.nodeId));
    let p = c.filter(e => d.has(e));
    p.length > 0 && !p.includes(r) && d.has(r) && (p.push(r), u(p));
    let h = (() => {
      if (p.length > 0) {
        let t = Pe(e);
        return [...p].sort((e, i) => t[e] - t[i]);
      }
      return [r];
    })();
    0 !== h.length && i(showDropdownThunk({
      type: dropdownTypePageContextMenu,
      data: {
        clientX: n,
        clientY: a,
        pageIds: h,
        shouldShowDuplicateOption: t
      }
    }));
  }, [c, i, e, u, t]);
}
export const K = $$c0;
export const g = $$u1;