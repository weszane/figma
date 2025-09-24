import { useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StateHierarchy } from "../figma_app/763686";
import { selectWithShallowEqual } from "../905/103090";
import { hideDropdownAction } from "../905/929976";
import { hidePickerThunk, showPickerThunk, hideStylePicker } from "../figma_app/91703";
import { sw } from "../figma_app/914957";
import { qo, cn } from "../905/959568";
import { ADD_COMPONENT_PROP_DROPDOWN } from "../figma_app/164212";
import { selectNodeFromCombinedId, generateDescription } from "../figma_app/505098";
import { Vr } from "../figma_app/151869";
import { i$ } from "../figma_app/150804";
import { Wv, Im } from "../figma_app/454622";
export function $$g1() {
  let e = useSelector(e => e.mirror.sceneGraph);
  let t = Vr();
  let r = useSelector(e => e.mirror.selectionProperties.masterSymbolGUID);
  if (!t || !t.isAlive) return [null, null];
  if (t?.isStateGroup) return [null, t ?? null];
  if (t?.type === "SYMBOL" || t?.type === "INSTANCE") {
    let n = t ?? null;
    if (t?.type === "INSTANCE" && (n = r ? e.get(r) : null), !n) return [null, null];
    if (!n?.isState) return [n ?? null, null];
    let i = n?.parentGuid ? e.get(n?.parentGuid) : null;
    return [n ?? null, i?.isStateGroup ? i : null];
  }
  return [null, null];
}
export function $$f0(e, t) {
  return useMemo(() => {
    let r = e?.symbolLinks?.filter(e => e.uri).map(e => e) || [];
    if (r.length > 0) return r;
    let n = t?.symbolLinks?.filter(e => e.uri).map(e => e) || [];
    if (n.length > 0) return n;
  }, [e, t]);
}
export function $$E3() {
  return Vr()?.symbolLinks?.map(e => e);
}
export function $$y4() {
  let [e, t] = $$g1();
  let r = $$f0(e, t);
  let i = e?.description;
  let a = t?.description;
  let s = i && a ? a + "\n\n" + i : i || a;
  return useMemo(() => ({
    links: r,
    description: s
  }), [r, s]);
}
export function $$b6() {
  return selectWithShallowEqual(e => {
    let t = i$(e);
    let r = selectNodeFromCombinedId(e);
    return {
      dropdownShown: e.dropdownShown,
      pickerShown: e.pickerShown,
      stateGroupSelectionMode: t,
      containingProductComponent: r,
      containingStateGroupDescription: t === StateHierarchy.STATE ? r?.description : void 0,
      containingStateGroupLinks: t === StateHierarchy.STATE ? r?.symbolLinks : void 0,
      componentDescription: generateDescription(e)
    };
  });
}
export function $$T5(e) {
  let t = useDispatch();
  let {
    dropdownShown,
    pickerShown
  } = $$b6();
  let s = useMemo(() => dropdownShown?.type === ADD_COMPONENT_PROP_DROPDOWN, [dropdownShown]);
  let d = pickerShown?.id === Wv;
  let c = $$I2(e);
  return useCallback(e => {
    s && t(hideDropdownAction());
    d ? t(hidePickerThunk()) : c(e, Wv, Im);
  }, [d, s, t, c]);
}
export function $$I2(e) {
  let t = useDispatch();
  return useCallback((r, n, i = qo) => {
    if (!e || !e.current) return;
    let a = e.current;
    let s = cn(a, i);
    t(showPickerThunk({
      id: n,
      initialX: s.x,
      initialY: s.y
    }));
    t(sw());
    t(hideStylePicker());
  }, [t, e]);
}
export const AK = $$f0;
export const Bx = $$g1;
export const Od = $$I2;
export const Tg = $$E3;
export const bU = $$y4;
export const h$ = $$T5;
export const z6 = $$b6;