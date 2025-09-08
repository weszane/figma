import { useCallback } from "react";
import { debug } from "../figma_app/465776";
import { selectWithShallowEqual } from "../905/103090";
import { fullscreenValue } from "../figma_app/455680";
import { MIXED_MARKER } from "../905/216495";
import { zk } from "../figma_app/198712";
export function $$d10(...e) {
  return selectWithShallowEqual(t => {
    let i = {};
    for (let n of e) i[n] = t.mirror.selectionProperties[n];
    return i;
  });
}
export function $$c4(...e) {
  return selectWithShallowEqual(t => {
    let i = t.mirror.selectionProperties;
    let n = {};
    for (let t of e) {
      debug(i[t] !== MIXED_MARKER, `Mixed value for ${t} found in useNonMixedSelectionPropertyValues. Use useSelectionPropertyValues and handle the MIXED value instead.`);
      n[t] = i[t];
    }
    return n;
  });
}
export function $$u7(...e) {
  return selectWithShallowEqual(t => {
    let i = t.mirror.selectedStyleProperties && t.mirror.selectedStyleProperties.guid;
    let n = {};
    for (let r of e) i ? n[r] = t.mirror.selectedStyleProperties[r] : n[r] = t.mirror.selectionProperties[r];
    return n;
  });
}
export function $$p1(...e) {
  return selectWithShallowEqual(t => {
    let i = t.mirror.selectedStyleProperties && t.mirror.selectedStyleProperties.guid;
    let n = {};
    for (let a of e) {
      i ? n[a] = t.mirror.selectedStyleProperties[a] : n[a] = t.mirror.selectionProperties[a];
      debug(n[a] !== MIXED_MARKER, `Mixed value for ${a} found in useNonMixedSelectionPropertyValues. Use useSelectionPropertyValues and handle the MIXED value instead.`);
    }
    return n;
  });
}
export function $$m5(e) {
  return selectWithShallowEqual(t => t.mirror.selectionProperties[e]);
}
export function $$h9(e) {
  return selectWithShallowEqual(t => {
    if (t.mirror.selectedStyleProperties && t.mirror.selectedStyleProperties.guid) return t.mirror.selectedStyleProperties[e];
  });
}
export function $$g2() {
  return selectWithShallowEqual(e => !!e.mirror.selectedStyleProperties?.guid);
}
export function $$f8(e) {
  return selectWithShallowEqual(t => t.mirror.selectedStyleProperties && t.mirror.selectedStyleProperties.guid ? t.mirror.selectedStyleProperties[e] : t.mirror.selectionProperties[e]);
}
export function $$_3(e) {
  return selectWithShallowEqual(t => {
    let i = t.mirror.selectionProperties[e];
    debug(i !== MIXED_MARKER, `Mixed value for ${e} found in useNonMixedSelectionPropertyValue. Use useSelectionPropertyValue and handle the MIXED value instead.`);
    return i;
  });
}
export function $$A0(e) {
  return useCallback((t, i = zk.YES) => {
    fullscreenValue.updateSelectionProperties({
      [e]: t
    }, {
      shouldCommit: i
    });
  }, [e]);
}
export function $$y6(e) {
  return [$$m5(e), $$A0(e)];
}
export const A5 = $$A0;
export const DQ = $$p1;
export const ER = $$g2;
export const Gt = $$_3;
export const fC = $$c4;
export const kl = $$m5;
export const lJ = $$y6;
export const pw = $$u7;
export const tN = $$f8;
export const wR = $$h9;
export const zj = $$d10;