import { useMemo, useCallback } from "react";
export function $$r0(e) {
  let t = useMemo(() => 0 === e.tabs.indexOf(e.activeTab), [e.activeTab, e.tabs]);
  let i = useMemo(() => e.tabs.indexOf(e.activeTab) === e.tabs.length - 1, [e.activeTab, e.tabs]);
  let r = useCallback(() => {
    let t = e.tabs.indexOf(e.activeTab);
    t > 0 && e.setActiveTab(e.tabs[t - 1]);
  }, [e]);
  let a = useCallback(() => {
    let t = e.tabs.indexOf(e.activeTab);
    t < e.tabs.length - 1 && e.setActiveTab(e.tabs[t + 1]);
  }, [e]);
  return useMemo(() => ({
    ...e,
    isOnFirstTab: t,
    isOnLastTab: i,
    selectPreviousTab: r,
    selectNextTab: a
  }), [a, r, t, i, e]);
}
export const b = $$r0;