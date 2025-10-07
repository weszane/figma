import { useMemo, useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createLocalStorageAtom, atom, useAtomValueAndSetter } from "../figma_app/27355";
import { useLatestRef } from "../figma_app/922077";
import { uQ } from "../figma_app/311375";
import { selectViewAction } from "../905/929976";
import { hideModalHandler } from "../905/156213";
import { u as _$$u, Rb, L5, rW } from "../figma_app/852050";
import { getSelectedView } from "../figma_app/386952";
import { buildVariableHierarchy } from "../905/782020";
let _ = createLocalStorageAtom("last-used-dev-mode-variable-set", null);
let $$h5 = "ALL_VARIABLES";
let $$m3 = atom($$h5);
export function $$g0() {
  let e = useSelector(e => "devModeVariablesTableSelectedVariable" in e.selectedView ? e.selectedView.devModeVariablesTableSelectedVariable : void 0);
  let t = _$$u(e);
  let r = Rb();
  let a = !!t;
  let s = useMemo(() => a && "SUBSCRIBED" !== t.subscriptionStatus || !e ? null : r.find(t => e.includes(t.keyForPublish)), [a, e, r, t?.subscriptionStatus]);
  return s ? s.node_id : t?.node_id ?? null;
}
export function $$f1() {
  let e = Rb();
  let t = $$g0();
  return e.find(e => e.node_id === t)?.variableSetId;
}
export function $$E6() {
  let e = getSelectedView();
  let t = useDispatch();
  return useCallback(r => {
    t(selectViewAction({
      ...e,
      devModeVariablesTableSelectedVariable: r || void 0
    }));
  }, [t, e]);
}
export function $$y2(e) {
  let [t, r] = useAtomValueAndSetter(_);
  let i = e[0]?.node_id ?? "";
  useEffect(() => {
    t || r(i);
  }, [t, i, r]);
  let s = t ?? i;
  return [useMemo(() => {
    let t = e.find(e => e.node_id === s);
    return !t && e.length > 0 ? e[0] : t;
  }, [s, e]), r];
}
export function $$b4() {
  let e = uQ();
  let t = useLatestRef(e);
  let r = useDispatch();
  useEffect(() => {
    t && e !== t && r(hideModalHandler());
  }, [r, t, e]);
}
export function $$T7(e) {
  let t = L5(e);
  let r = rW(t?.node_id ?? "");
  return useMemo(() => buildVariableHierarchy(r).map(e => "/" === e.name.charAt(e.name.length - 1) ? {
    ...e,
    name: e.name.slice(0, -1)
  } : e), [r]);
}
export function $$I8() {
  let [e, t] = useState(!1);
  useEffect(() => {
    t(!0);
  }, []);
  return e;
}
export const A8 = $$g0;
export const EB = $$f1;
export const R6 = $$y2;
export const bE = $$m3;
export const eT = $$b4;
export const eb = $$h5;
export const i_ = $$E6;
export const vo = $$T7;
export const zL = $$I8;