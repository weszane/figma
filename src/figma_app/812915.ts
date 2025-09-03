import { useMemo, useCallback, useEffect } from "react";
import { wA } from "../vendor/514228";
import { W, Hg } from "../figma_app/304955";
import { VH, Ac } from "../figma_app/178419";
import { j } from "../figma_app/171378";
import { ServiceCategories as _$$e } from "../905/165054";
import { glU } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { md, zl, Xr } from "../figma_app/27355";
import { FJ } from "../905/508367";
import { $D } from "../905/11";
import { sf } from "../905/929976";
import { eY } from "../figma_app/722362";
import { q5 } from "../figma_app/516028";
import { _6 } from "../figma_app/386952";
import { fileEntityDataMapper } from "../905/943101";
import { f0 } from "../figma_app/707808";
import { B } from "../figma_app/398600";
import { nM, NJ, nc } from "../figma_app/570630";
import { Jl } from "../figma_app/114522";
import { td, St } from "../figma_app/558805";
import { B5, Oc } from "../figma_app/552876";
export function $$N6() {
  let e = md(Jl);
  let t = eY();
  let r = useMemo(() => {
    if (!e || "-1:-1" === e) {
      let e = zl.get(nM);
      return W(e, NJ, "/App.tsx") || null;
    }
    return function (e, t) {
      try {
        return e();
      } catch (e) {
        return null;
      }
    }(() => t.get(e), 0);
  }, [e, t]);
  let i = VH(t);
  let o = Ac(i);
  return {
    entryPointCodeInstance: i,
    codeLibraryInstance: o,
    selectedCodeFileNode: r
  };
}
export function $$C2() {
  let e = _6();
  return {
    figmakeInFullscreen: B5(e),
    openFigmakeFullscreenInNewTab: function () {
      let e = q5();
      let t = useMemo(() => e ? fileEntityDataMapper.toSinatra(e) : null, [e]);
      let r = B(t);
      return useCallback(() => {
        let e = r();
        if (e) {
          let t;
          t = null;
          null != (t = FJ(e)) && t.focus();
        } else $D(_$$e.AI_FOR_PRODUCTION, Error("Failed to generate Rev preview link for navigation"));
      }, [r]);
    }(),
    exitFigmakeFullscreenView: function () {
      let e = wA();
      let t = _6();
      let r = Oc();
      return useCallback(() => {
        r && "fullscreen" === t.view && e(sf({
          ...t,
          figmakeView: f0.FILE
        }));
      }, [r, t, e]);
    }()
  };
}
export function $$w4() {
  let e = _6();
  let t = Oc();
  return useMemo(() => t && "fullscreen" === e.view && e.figmakeView === f0.SETTINGS, [t, e]);
}
export function $$O5() {
  let e = _6();
  let t = Oc();
  return useMemo(() => t && "fullscreen" === e.view && (!e.figmakeView || e.figmakeView === f0.FILE), [t, e]);
}
export function $$R0() {
  let e = _6();
  let t = wA();
  let r = Oc();
  return n => {
    if ("fullscreen" !== e.view || !r) return;
    let i = {
      ...e,
      figmakeView: n
    };
    t(sf(i));
  };
}
export function $$L1() {
  let {
    entryPointCodeInstance
  } = $$N6();
  let t = Xr(td);
  let r = md(St);
  let i = entryPointCodeInstance?.sourceCode === j && (!getFeatureFlags().make_import_improvements_experimental || !r);
  useEffect(() => {
    t(i);
  }, [i, t]);
  return i;
}
export function $$P3() {
  useEffect(() => {
    let e = getSingletonSceneGraph();
    let t = VH(e);
    let r = t?.backingCodeComponent;
    let n = r?.exportedFromCodeFile;
    if (n && n.isSoftDeleted) {
      let e = Hg(nc)[n.codeFileFullPathWithoutScheme];
      e && (n.sourceCode = e.sourceCode, l7.ai("recover-code-entrypoint", () => {
        glU?.restoreSoftDeletedNode(n.id);
        glU?.renameNode(e.id, "/[Backup]App.tsx");
        glU?.deleteCodeFile(e.id);
        glU?.commit();
      }));
    }
  }, []);
}
export const C5 = $$R0;
export const Gu = $$L1;
export const Ve = $$C2;
export const c$ = $$P3;
export const h5 = $$w4;
export const mg = $$O5;
export const oA = $$N6;