import { createContext, useContext } from "react";
export function $$n0(e = {}) {
  return {
    defaultViewTabsAvailable: e.defaultViewTabsAvailable ?? !1,
    defaultViewAssetsTabVisible: e.defaultViewAssetsTabVisible ?? !1,
    centeredInPanels: e.centeredInPanels ?? !1
  };
}
let a = createContext($$n0());
let $$s1 = a.Provider;
export function $$o2() {
  return useContext(a);
}
export const Ct = $$n0;
export const QT = $$s1;
export const gB = $$o2;