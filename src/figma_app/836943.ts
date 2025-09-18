import { useMemo } from "react";
import { useSelector } from "react-redux";
import { StyleIdHandler } from "../figma_app/243058";
import { n3 } from "../905/859698";
import { StylesBindings } from "../figma_app/763686";
import { isValidSessionLocalID, sessionLocalIDToString, parseSessionLocalID } from "../905/871411";
import { getFeatureFlags } from "../905/601108";
import { normalizeValue } from "../905/216495";
import { useSceneGraphSelector } from "../figma_app/722362";
import { useCurrentFileKey } from "../figma_app/516028";
import { bO, z5 } from "../figma_app/936646";
import { b } from "../figma_app/882253";
import { getStyleInfo } from "../figma_app/633080";
export function $$g1(e) {
  return `styles-picker-${e}`;
}
export function $$f8(e) {
  return e.stylePickerShown.isShown && e.stylePickerShown.id === $$g1(e.inheritStyleKeyField) ? e.stylePickerShown : null;
}
export function $$E3(e) {
  return $$f8({
    inheritStyleKeyField: e,
    stylePickerShown: useSelector(e => e.stylePickerShown)
  });
}
export function $$y5(e) {
  return e && isValidSessionLocalID(e.guid);
}
export function $$b0(e) {
  let t = normalizeValue(e);
  return t && t !== n3.INVALID;
}
export function $$T4({
  library: e,
  inheritStyleKey: t,
  inheritStyleID: r
}) {
  if (!$$b0(t)) return null;
  let n = normalizeValue(t);
  if (!n) return null;
  let i = Object.values(e.local.styles).find(e => e.key === n);
  if (i && !i.is_soft_deleted) return i;
  let a = b({
    library: e
  }, n, normalizeValue(r));
  return a?.status === "loaded" ? a.data : null;
}
export function $$I2(e, t, r) {
  let s = useSelector(e => e.library);
  let o = useSceneGraphSelector();
  let g = bO();
  let f = useCurrentFileKey();
  return useMemo(() => {
    if (!e) return null;
    if (getFeatureFlags().ds_zombie_styles_fixes) return function ({
      library: e,
      sceneGraph: t,
      inheritStyleKey: r,
      inheritStyleID: n
    }) {
      let i = normalizeValue(r);
      let s = normalizeValue(n);
      if (!s || !i) return null;
      let o = sessionLocalIDToString(s.guid);
      let d = Object.values(e.local.styles).find(e => e.node_id === o);
      if (d) return d.is_soft_deleted ? null : d;
      let u = StyleIdHandler.fromKiwi(s);
      let p = u ? t.getStyleNode(u) : null;
      if (!p || p.isLocalStyle && p.isSoftDeleted) return null;
      let _ = b({
        library: e
      }, i, s);
      if (_?.data?.content_hash === p.styleVersionHash) return _.data;
      let g = getStyleInfo(p);
      let f = e.local.thumbnails[p.guid] || null;
      return g ? {
        ...g,
        meta: {
          style_thumbnail: f?.css
        }
      } : null;
    }({
      library: s,
      inheritStyleKey: e,
      inheritStyleID: t,
      sceneGraph: o
    });
    let n = $$T4({
      library: s,
      inheritStyleKey: e,
      inheritStyleID: t
    });
    if (n) return n;
    for (let t of Object.values(g)) if (t?.status === "loaded" && t.data.fileKey !== f) {
      for (let n of z5(t, r)) if (n.key === e) return n;
    }
    return null;
  }, [t, e, g, s, f, o, r]);
}
export function $$S7(e) {
  return {
    dropdownShown: e.dropdownShown,
    openFile: e.openFile,
    library: e.library,
    modalShown: e.modalShown,
    pickerShown: e.pickerShown,
    sceneGraphSelection: e.sceneGraphSelection,
    stylePickerShown: e.stylePickerShown,
    hasMissingFont: e.hasMissingFont,
    hasMixedProperties: e.hasMixedProperties || !1,
    inheritStyleKey: e.inheritStyleKey,
    inheritStyleKeyField: e.inheritStyleKeyField,
    inheritStyleID: e.inheritStyleID,
    stylePickerListLayout: e.stylePickerListLayout,
    styleType: e.styleType,
    onToggleListLayout: e.onToggleListLayout,
    selectedStyleGuid: e.selectedStyleGuid,
    dispatch: e.dispatch
  };
}
export function $$v6(e) {
  if (!e) return;
  let t = e => isValidSessionLocalID(parseSessionLocalID(e)) ? e : void 0;
  return t(StylesBindings.getStyleNodeId(e.key, e.version)) ?? t(StylesBindings.getSoftDeletedStyleNodeId(e.key, e.version));
}
export const A8 = $$b0;
export const OS = $$g1;
export const WH = $$I2;
export const _S = $$E3;
export const bi = $$T4;
export const dd = $$y5;
export const f$ = $$v6;
export const yT = $$S7;
export const zb = $$f8;