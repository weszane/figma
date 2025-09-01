import { useMemo, useState, useEffect } from "react";
import { $ as _$$$ } from "../905/455748";
import { Xm, gB } from "../905/723791";
import { _G } from "../figma_app/516028";
import { e as _$$e } from "../905/845623";
import { z } from "../905/316889";
import { $ as _$$$2 } from "../905/43354";
export function $$c1() {
  let e = function () {
    let e = _$$$2();
    let t = z();
    let r = _G();
    let o = useMemo(() => "loaded" !== e.status ? [] : e.data, [e]);
    let c = _$$$(e.status) && "loaded" === e.status;
    let [u, p] = useState(() => t(o));
    return (useEffect(() => {
      c && p(t(o.filter(e => e.library_key !== r)));
    }, [c, t, o, r]), "loading" === e.status || c) ? Xm() : gB(u);
  }();
  let t = _$$e();
  let r = $$u0(e, t);
  let c = useMemo(() => {
    if ("loading" === t.status || "loading" === r.status) return Xm();
    let e = t.data?.unpublishedLibraries.map(e => e.library_key) ?? [];
    return gB([...e, ...(t.data?.missingLibraries ?? [])]);
  }, [t, r]);
  return useMemo(() => ({
    subscribedLibraries: e,
    usedInThisFile: r,
    missingLibraryKeys: c
  }), [e, r, c]);
}
export function $$u0(e, t) {
  let r = _G();
  let i = useMemo(() => new Set(e.data?.map(e => e.library_key) ?? []), [e]);
  let o = useMemo(() => "loaded" !== t.status ? [] : t.data.publishedLibraries.filter(e => !i.has(e.library_key)).filter(e => e.library_key !== r), [t, i, r]);
  return useMemo(() => "loaded" === t.status && "loaded" === e.status ? gB(o) : t.data?.publishedLibraries.length === 0 ? gB([]) : Xm(), [t, e, o]);
}
export const $ = $$u0;
export const i = $$c1;