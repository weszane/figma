import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import { lV, MK } from "../figma_app/617606";
import { J } from "../figma_app/710077";
import { RM, F$, es } from "../figma_app/304955";
import { ServiceCategories } from "../905/165054";
import { Fullscreen, ChangesStagerBindings, UserExperienceMode, PanelType, AppStateTsApi, ChatMessageType, SceneGraphTsApi } from "../figma_app/763686";
import { CodeFileIdHandler, CodeComponentIdHandler } from "../figma_app/243058";
import { permissionScopeHandler } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { atom, atomStoreManager, useAtomValueAndSetter, useAtomWithSubscription, useSetAtom } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { reportError } from "../905/11";
import { selectViewAction } from "../905/929976";
import { AssetAtomMap } from "../figma_app/31188";
import { multiplayerSessionManager } from "../905/977824";
import { getSingleSelectedNode } from "../figma_app/722362";
import { useCurrentSessionID } from "../figma_app/440875";
import { selectCurrentUser } from "../905/372672";
import { setupRemovableAtomFamily } from "../figma_app/615482";
import { getObservableOrFallback, subscribeObservable } from "../figma_app/84367";
import { useDeepEqualSceneValue } from "../figma_app/167249";
import { PrimaryWorkflowEnum } from "../905/497152";
import { initializeLanguageService, bundleCode } from "../figma_app/346422";
import { sitesViewSetterAtomFamily } from "../figma_app/115923";
import { jT as _$$jT, K8 } from "../figma_app/108909";
import { useIsSelectedFigmakeFullscreen } from "../figma_app/552876";
import { YD, Vo, KL, TJ } from "../figma_app/690664";
import { Ho, a5 } from "../figma_app/337924";
import { E as _$$E } from "../figma_app/626557";
import { VF } from "../figma_app/251814";
import { cu } from "../figma_app/139865";
import { wh, UM, Zr, ZY } from "../figma_app/114522";
var $$M0 = (e => (e.BUILD = "build", e.RUNTIME = "runtime", e))($$M0 || {});
let F = setupRemovableAtomFamily(() => atom([]));
let j = atom(null);
export function $$U2() {
  atomStoreManager.set(F, []);
}
export function $$B13() {
  let [e, t] = useAtomValueAndSetter(F);
  let [r, i] = useAtomValueAndSetter(j);
  let a = useAtomWithSubscription(wh);
  let s = useIsSelectedFigmakeFullscreen();
  useEffect(() => {
    null === r ? i(a) : JSON.stringify(a) !== JSON.stringify(r) && (s || t([]), i(a));
  }, [a, r, t, i, s]);
  return [e, t];
}
export function $$G4(e) {
  let t = useAtomWithSubscription(AssetAtomMap[PrimaryWorkflowEnum.CODE_COMPONENT].local);
  return e?.isCodeFile ? Object.values(t).filter(t => t.exportedFromCodeFileId === CodeFileIdHandler.fromLocalNodeIdObj(e)).sort((e, t) => "default" === e.codeExportName ? -1 : "default" === t.codeExportName ? 1 : e.name.localeCompare(t.name)) : [];
}
export function $$V19() {
  let e = useCurrentSessionID();
  let t = multiplayerSessionManager.useInfoBySessionId({
    updateSynchronously: !1
  });
  let r = selectCurrentUser();
  return function (e, t, r, n) {
    if (!e || !r || !n) return !1;
    for (let r of t) if (r.userID !== e.id && r.activeCodeComponentId === n.guid) return !0;
    return !1;
  }(r, useSelector(({
    multiplayer: {
      allUsers: e
    }
  }) => e), t[e], getSingleSelectedNode());
}
export function $$H7(e) {
  let t = useDeepEqualSceneValue((e, t) => {
    if (t) return t.collaborativeSourceCode;
  }, e);
  let r = t?.handle;
  return useMemo(() => t, [r]);
}
export function $$z9(e) {
  return useDeepEqualSceneValue((e, t) => {
    if (!t || !t.isAlive) return {};
    try {
      return _$$jT(t);
    } catch (e) {
      reportError(ServiceCategories.MAKE, e);
      return {};
    }
  }, e);
}
export function $$W16(e) {
  var t;
  let r = useSetAtom(YD);
  let i = useSetAtom(Vo);
  let [a, s] = useState(0);
  let [o, l] = useState(null);
  let d = null;
  e?.isCodeInstance ? d = e?.backingCodeComponent : e?.isCodeComponent && (d = e);
  let c = Object.keys((t = d, useDeepEqualSceneValue((e, t) => t && t.isAlive ? t.componentPropertyDefinitions() : {}, t))).length;
  useEffect(() => {
    d && (d.guid === o && c > a && (r(!0), i("properties")), l(d.guid));
    s(c);
  }, [c, a, d, o, r, i]);
}
export function $$K8(e) {
  return useDeepEqualSceneValue((e, t) => {
    if (!t || !t.isAlive) return {};
    try {
      return K8(t);
    } catch (e) {
      reportError(ServiceCategories.MAKE, e);
      return {};
    }
  }, e);
}
export function $$Y14() {
  useEffect(() => {
    initializeLanguageService().then(() => {
      console.log("[devtools] Initialized LS");
    }).catch(e => {
      Ho(e, lV.CODE_IN_SITES, a5.PREVIEW);
    });
  }, []);
}
export async function $$$1({
  node: e,
  tailwind: t,
  jsxDev: r,
  shadcn: n,
  noWrapper: i
}) {
  if (!e.isAlive || !Fullscreen) return null;
  let a = RM(e.codeFileFullPath);
  let s = F$(a, e.codeFileFullPath);
  let l = Fullscreen.deriveFilesystemFromEntrypointNodeIds([e.guid]);
  let c = es(a, l.codeFilesystem);
  return {
    ...(await bundleCode({
      entrypointsOrIdentifierToFileName: [s],
      filesystem: c,
      tailwind: t,
      minify: !1,
      shadcn: n,
      jsxDev: r,
      noWrapper: i
    })),
    ...l,
    codeFilesystem: c,
    codeBuildId: Fullscreen.generateUniqueID()
  };
}
export function $$X20(e) {
  let t = getSingletonSceneGraph();
  let [r, n] = useAtomValueAndSetter(KL);
  let i = useDeepEqualSceneValue((e, t, r) => {
    if (!t) return null;
    if (t in r) return r[t];
    let i = e.get(t);
    if (!i) return null;
    let a = null;
    !function (e, t) {
      let r;
      ChangesStagerBindings?.isStagingChanges(e) && (r = ChangesStagerBindings?.openChangesStagerScope());
      try {
        return t();
      } finally {
        null != r && ChangesStagerBindings?.closeChangesStagerScope(r);
      }
    }(UserExperienceMode.DESIGN_TO_CODE, () => {
      a = i.createUntrackedCodeInstanceOnInternalCanvas();
    });
    a && n({
      ...r,
      [i.guid]: a
    });
  }, e, r, n);
  return (i ? t.get(i) : null) ?? t.get(e ?? "");
}
export function $$q3() {
  let [e, t] = useAtomValueAndSetter(sitesViewSetterAtomFamily);
  return useCallback(e => {
    e && (t(PanelType.FILE), UM(), permissionScopeHandler.user("sites-add-code-instance-to-canvas", () => {
      Fullscreen.startInsertingCodeComponentOnCanvas(e.guid);
    }));
  }, [t]);
}
export function $$J18() {
  let e = Object.values(useAtomWithSubscription(AssetAtomMap[PrimaryWorkflowEnum.CODE_FILE].local)).filter(e => !e.isSoftDeleted);
  useEffect(() => {
    if (e.length > 0 && AppStateTsApi?.codeSelection().fullscreenCodeNodeIds.getCopy().length === 0) {
      let t = e[0]?.assetId;
      t && AppStateTsApi.codeSelection().fullscreenCodeNodeIds.set([CodeFileIdHandler.toGuidStrIfLocal(t)]);
    }
  }, [e]);
}
export function $$Z6(e) {
  let t = getObservableOrFallback(AppStateTsApi.codeBuildBindings().buildNumberByNodeId);
  return useMemo(() => t.get(e?.guid || "") ?? -1, [t, e]);
}
export function $$Q17(e) {
  return useCallback(() => J(e), [e]);
}
function ee(e) {
  let t = {
    ...debugState.getState().selectedView,
    codeNodeId: e
  };
  debugState.dispatch(selectViewAction(t));
}
export function $$et10() {
  let e = useIsSelectedFigmakeFullscreen();
  let t = useAtomWithSubscription(sitesViewSetterAtomFamily);
  let r = useRef(!0);
  let i = useRef(!1);
  let [a, s] = useState(null);
  let [o, l] = useState(null);
  useEffect(() => {
    if (e) return;
    let n = debugState.getState().selectedView.codeNodeId;
    if (!AppStateTsApi) return;
    let i = AppStateTsApi.codeSelection();
    if (t === PanelType.CODE) {
      let e = i.fullscreenCodeNodeIds;
      r.current && n && l(n);
      r.current = !1;
      ee(e?.getCopy()[0]);
      return subscribeObservable(e, {
        onChangeImmediate() {
          e?.getCopy()[0] && ee(e?.getCopy()[0]);
        }
      });
    }
    {
      let e = i.selectedCodeNodeIds;
      r.current && n && s(n);
      r.current = !1;
      ee(e?.getCopy()[0]);
      return subscribeObservable(e, {
        onChangeImmediate() {
          ee(e?.getCopy()[0]);
        }
      });
    }
  }, [t, e]);
  let c = useDeepEqualSceneValue((e, t, r) => !i.current && (!!t || !!r) && !!e.get(t || r || ""), o, a);
  useEffect(() => {
    if (e || !c || i.current) return;
    i.current = !0;
    let r = getSingletonSceneGraph();
    if (t === PanelType.CODE) {
      let e = r.get(o);
      e && AppStateTsApi?.codeSelection().fullscreenCodeNodeIds.set([e.guid]);
    } else {
      let e = r.get(a);
      if (e) {
        AppStateTsApi?.codeSelection().selectedCanvasNodeIds.set([e.guid]);
        let t = VF(e, !1) ?? e;
        (t.isCodeComponent || t.isCodeFile || t.isCodeInstance) && Zr(t);
      }
    }
  }, [c, t, o, a, e]);
}
export function $$er12(e) {
  let t = _$$E(e);
  let r = useMemo(() => (t || []).map(e => {
    if (e.type !== ChatMessageType.USER_MESSAGE) return null;
    let {
      imports
    } = MK(e.textContent);
    return imports && 0 !== imports.length ? imports.map(e => "node" === e.type && e.communityAttribution ? e.communityAttribution : null).filter(e => !!e) : null;
  }).filter(e => !!e).flat(), [t]);
  return useMemo(() => r.filter((e, t, r) => t === r.findIndex(t => t.hubFileId === e.hubFileId)), [r]);
}
export function $$en5(e) {
  return e?.isCodeFile ? e : e?.isCodeComponent ? e.exportedFromCodeFile : e?.isCodeInstance ? e.backingCodeComponent?.exportedFromCodeFile ?? null : null;
}
export function $$ei11(e, t) {
  let r = getSingletonSceneGraph();
  let i = useAtomWithSubscription(sitesViewSetterAtomFamily);
  let a = $$en5(e);
  let s = function (e) {
    let t = $$G4($$en5(e));
    if (e?.isCodeComponent) return e;
    let r = t[0];
    let n = r && CodeComponentIdHandler.fromString(r.assetId);
    let i = n && CodeComponentIdHandler.toGuidStrIfLocal(n);
    return i ? getSingletonSceneGraph().get(i) : null;
  }(e);
  let o = useAtomWithSubscription(TJ);
  let l = a ? o[a.guid] ?? s?.guid ?? null : null;
  let u = l === s?.guid;
  let h = $$X20(l);
  let m = e ? SceneGraphTsApi?.findMainComponentLikeCodeInstance(r.scene, e.guid) : null;
  let g = cu();
  let f = h?.guid;
  let E = useMemo(() => f ? [f] : [], [f]);
  let y = useMemo(() => m ? [m] : E, [m, E]);
  let b = useAtomWithSubscription(ZY) || i === PanelType.CODE || 0 === g.length;
  let T = useMemo(() => u ? b ? y : g : E, [u, b, E, y, g]);
  return useMemo(() => {
    let e = getSingletonSceneGraph();
    let r = T[0];
    let n = r ? e.get(r) : null;
    if (!n) return null;
    if (!t) return {
      type: "instance",
      codeInstanceNode: n,
      allCodeInstanceNodeIds: T
    };
    {
      let r = e.get(l);
      return r ? {
        type: "behavior",
        codeBehaviorNode: r,
        targetNode: e.get(t.targetNodeId) ?? void 0,
        exampleObject: t.exampleObject ?? void 0,
        codeInstanceNode: n
      } : null;
    }
  }, [T, l, t]);
}
export function $$ea15(e) {
  return useDeepEqualSceneValue((e, t) => !!t && (!t.isMainComponentLikeCodeNode && !t.isLayerLikeCodeNode || t.isInstanceSublayer), e);
}
export const S4 = $$M0;
export const gz = $$$1;
export const px = $$U2;
export const C9 = $$q3;
export const H1 = $$G4;
export const f6 = $$en5;
export const IO = $$Z6;
export const OV = $$H7;
export const cH = $$K8;
export const GW = $$z9;
export const tq = $$et10;
export const qe = $$ei11;
export const yj = $$er12;
export const jT = $$B13;
export const pO = $$Y14;
export const wE = $$ea15;
export const jS = $$W16;
export const I4 = $$Q17;
export const XW = $$J18;
export const b_ = $$V19;
export const vD = $$X20;