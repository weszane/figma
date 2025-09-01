import { useEffect, useMemo } from "react";
import { ServiceCategories as _$$e } from "../905/165054";
import { IT } from "../figma_app/566371";
import { $D } from "../905/11";
import { GM } from "../figma_app/275462";
import { fI, In } from "../figma_app/229259";
import { q5 } from "../figma_app/516028";
import { dq } from "../905/845253";
import { n1 } from "../figma_app/657017";
let p = Error("useCommunityLibraries: no presets exist but presets are enabled");
let m = Error("useCommunityLibrariesVisualAssets: no visual assets exist but visual assets are enabled");
let h = [];
let g = [];
export function $$f1(e) {
  let t = n1();
  let [i] = IT(fI(void 0), {
    enabled: !e?.disabled && t
  });
  let o = dq();
  let m = q5();
  useEffect(() => {
    t && "loaded" === i.status && 0 === i.data.length && $D(_$$e.DESIGN_SYSTEMS_ECOSYSTEM, p, {
      tags: {
        orgId: o,
        hasOpenFile: !!m
      }
    });
  }, [m, o, i, t]);
  return i?.data ?? h;
}
export function $$_2() {
  let e = !!GM()();
  let [t] = IT(In(void 0), {
    enabled: e
  });
  let i = dq();
  let u = q5();
  useEffect(() => {
    e && "loaded" === t.status && 0 === t.data.length && $D(_$$e.COMMUNITY, m, {
      tags: {
        orgId: i,
        hasOpenFile: !!u
      }
    });
  }, [u, i, t, e]);
  return t?.data ?? g;
}
export function $$A0(e) {
  return useMemo(() => [...e].sort((e, t) => (e.library_file_name || "").toLowerCase() < (t.library_file_name || "").toLowerCase() ? -1 : 1), [e]);
}
export const Ev = $$A0;
export const g7 = $$f1;
export const lY = $$_2;