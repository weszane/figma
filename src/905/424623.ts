import { useContext, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fullscreen } from "../figma_app/763686";
import { trackEventAnalytics } from "../905/449184";
import { useSubscription } from "../figma_app/288654";
import { oA } from "../905/723791";
import { compareIgnoringSpaces } from "../figma_app/930338";
import { Kk, n8, EY, x as _$$x } from "../figma_app/933328";
import { fullscreenValue } from "../figma_app/455680";
import { useCurrentFileKey } from "../figma_app/516028";
import { LibraryDataByLibraryKey } from "../figma_app/43951";
import { Qp as _$$Qp, SS, KC } from "../figma_app/349248";
import { C9, jf } from "../figma_app/141508";
import { PW } from "../figma_app/633080";
import { r as _$$r } from "../905/336143";
import { VJ, Kw } from "../905/610995";
import { MV, px, q, VV, $l, RJ } from "../905/131786";
export function $$b3() {
  let e = useDispatch();
  let t = useSelector(e => e.mirror.sceneGraph);
  let i = useSelector(C9);
  let a = useSelector(jf);
  let s = useSelector(e => e.library);
  let o = useSelector(e => e.fileVersion);
  let l = useContext(_$$r);
  return useMemo(() => MV(t, i, a, s.publishedByLibraryKey, o, l?.allUsedStylesByLibraryKey || {}, e), [t, i, a, s.publishedByLibraryKey, o, l, e]);
}
export function $$v1({
  fromLibraryKey: e,
  toLibraryKey: t
}) {
  let i = function (e) {
    let t = $$b3()[e];
    return px(t);
  }(e);
  let n = x(t);
  return q(i, n);
}
export function $$I2({
  fromLibraryKey: e,
  libraryMapping: t
}) {
  let i = VJ(e);
  return useMemo(() => {
    for (let [e, n] of [...(t.styles?.entries() || []), ...(t.components?.entries() || [])]) if (n && !i.has(e.node_id)) return !0;
    return !1;
  }, [t, i]);
}
export function $$E4(e) {
  return "loaded" === useSubscription(LibraryDataByLibraryKey, {
    libraryKey: e || ""
  }, {
    enabled: !!e
  }).status;
}
function x(e) {
  let t = function (e) {
    let t = useSubscription(LibraryDataByLibraryKey, {
      libraryKey: e || ""
    }, {
      enabled: !!e
    });
    return "loaded" === t.status && t.data.libraryKeyToFile ? t.data.libraryKeyToFile.hubFile ? {
      libraryHierarchyPaths: oA(t.data.libraryKeyToFile.hubFile.libraryHierarchyPaths) ?? [],
      assetFile: {
        type: "hubFile",
        file: t.data.libraryKeyToFile.hubFile
      }
    } : t.data.libraryKeyToFile.file ? {
      libraryHierarchyPaths: t.data.libraryKeyToFile.file.libraryHierarchyPaths ?? [],
      assetFile: {
        type: "team",
        file: t.data.libraryKeyToFile.file
      }
    } : void 0 : void 0;
  }(e);
  return useMemo(() => null == t ? px() : {
    components: VV(t.libraryHierarchyPaths.map(e => e.components.map(e => _$$Qp(e, t.assetFile))).reduce((e, t) => [...e, ...t], [])),
    stateGroups: VV(t.libraryHierarchyPaths.map(e => e.stateGroups.map(e => SS(e, t.assetFile))).reduce((e, t) => [...e, ...t], [])),
    styles: VV(t.libraryHierarchyPaths.map(e => e.styles.map(e => KC(e, t.assetFile))).reduce((e, t) => [...e, ...t], []))
  }, [t]);
}
export function $$S0(e) {
  let t = useCurrentFileKey();
  let i = VJ(e);
  let o = useDispatch();
  let l = Kw(e);
  let {
    styles,
    components,
    stateGroups
  } = x(l);
  return useCallback((n, r) => {
    let p = [];
    let _ = 0;
    let A = 0;
    if (!l) return;
    let b = n[e];
    if (!b) return;
    for (let e of b) {
      if (e.type === PW.VARIABLE || e.type === PW.VARIABLE_SET || e.type === PW.MODULE || i.has(e.node_id)) continue;
      if (e.type === PW.STYLE) {
        let t = styles.find(t => compareIgnoringSpaces(t.name, e.name) && t.style_type === e.style_type);
        if (!t) continue;
        let i = Fullscreen.getNumUsagesOfStyle(e.key, r);
        if (0 === i) continue;
        _ += i;
        p.push($l(e, t, r, o).then(() => o(Kk({
          done: i
        }))));
        continue;
      }
      let t = e.type === PW.COMPONENT ? components : stateGroups;
      let n = e.type === PW.COMPONENT ? stateGroups : components;
      let s = t.find(t => compareIgnoringSpaces(t.name, e.name)) ?? n.find(t => compareIgnoringSpaces(t.name, e.name));
      if (!s) continue;
      let l = e.type === PW.COMPONENT ? e.component_key : e.key;
      let u = e.type === PW.COMPONENT ? e.content_hash : e.version;
      if (!l || !u) continue;
      let b = Fullscreen.getNumInstancesReferencingProductComponent(l);
      0 !== b && (A += b, p.push(RJ(l, s).then(() => o(Kk({
        done: b
      })))));
    }
    let v = _ + A;
    if (v > 0) {
      trackEventAnalytics("Swap library starting", {
        editingFileKey: t,
        libraryKeyToSwapFrom: e,
        libraryKeyToSwapTo: l,
        numInstances: A,
        numStyles: _
      });
      let i = window.performance.now();
      o(n8({
        total: v
      }));
      Promise.all(p).then(() => {
        trackEventAnalytics("Swap library finished", {
          editingFileKey: t,
          libraryKeyToSwapFrom: e,
          libraryKeyToSwapTo: l,
          durationMs: window.performance.now() - i
        });
        fullscreenValue.triggerAction("commit");
        o(EY());
      }).catch(() => {
        o(_$$x());
      });
    }
  }, [l, e, i, components, stateGroups, styles, o, t]);
}
export const GK = $$S0;
export const LM = $$v1;
export const TK = $$I2;
export const lh = $$b3;
export const nX = $$E4;