import { useMemo, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { W, Hg } from "../figma_app/304955";
import { VH, Ac } from "../figma_app/178419";
import { j } from "../figma_app/171378";
import { ServiceCategories as _$$e } from "../905/165054";
import { Fullscreen } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription, atomStoreManager, Xr } from "../figma_app/27355";
import { FJ } from "../905/508367";
import { reportError } from "../905/11";
import { selectViewAction } from "../905/929976";
import { eY } from "../figma_app/722362";
import { selectCurrentFile } from "../figma_app/516028";
import { getSelectedView } from "../figma_app/386952";
import { fileEntityDataMapper } from "../905/943101";
import { AppView } from "../figma_app/707808";
import { B } from "../figma_app/398600";
import { nM, NJ, nc } from "../figma_app/570630";
import { Jl } from "../figma_app/114522";
import { td, St } from "../figma_app/558805";
import { useIsFigmakeFullscreenPreview, useIsSelectedFigmakeFullscreen } from "../figma_app/552876";
export function $$N6() {
  let e = useAtomWithSubscription(Jl);
  let t = eY();
  let r = useMemo(() => {
    if (!e || "-1:-1" === e) {
      let e = atomStoreManager.get(nM);
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
  let e = getSelectedView();
  return {
    figmakeInFullscreen: useIsFigmakeFullscreenPreview(e),
    openFigmakeFullscreenInNewTab: function () {
      let e = selectCurrentFile();
      let t = useMemo(() => e ? fileEntityDataMapper.toSinatra(e) : null, [e]);
      let r = B(t);
      return useCallback(() => {
        let e = r();
        if (e) {
          let t;
          t = null;
          null != (t = FJ(e)) && t.focus();
        } else reportError(_$$e.AI_FOR_PRODUCTION, Error("Failed to generate Rev preview link for navigation"));
      }, [r]);
    }(),
    exitFigmakeFullscreenView: function () {
      let e = useDispatch();
      let t = getSelectedView();
      let r = useIsSelectedFigmakeFullscreen();
      return useCallback(() => {
        r && "fullscreen" === t.view && e(selectViewAction({
          ...t,
          figmakeView: AppView.FILE
        }));
      }, [r, t, e]);
    }()
  };
}
export function $$w4() {
  let e = getSelectedView();
  let t = useIsSelectedFigmakeFullscreen();
  return useMemo(() => t && "fullscreen" === e.view && e.figmakeView === AppView.SETTINGS, [t, e]);
}
export function $$O5() {
  let e = getSelectedView();
  let t = useIsSelectedFigmakeFullscreen();
  return useMemo(() => t && "fullscreen" === e.view && (!e.figmakeView || e.figmakeView === AppView.FILE), [t, e]);
}
export function $$R0() {
  let e = getSelectedView();
  let t = useDispatch();
  let r = useIsSelectedFigmakeFullscreen();
  return n => {
    if ("fullscreen" !== e.view || !r) return;
    let i = {
      ...e,
      figmakeView: n
    };
    t(selectViewAction(i));
  };
}
export function $$L1() {
  let {
    entryPointCodeInstance
  } = $$N6();
  let t = Xr(td);
  let r = useAtomWithSubscription(St);
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
      e && (n.sourceCode = e.sourceCode, permissionScopeHandler.ai("recover-code-entrypoint", () => {
        Fullscreen?.restoreSoftDeletedNode(n.id);
        Fullscreen?.renameNode(e.id, "/[Backup]App.tsx");
        Fullscreen?.deleteCodeFile(e.id);
        Fullscreen?.commit();
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