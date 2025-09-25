import { useMemo, useEffect } from "react";
import { lQ } from "../905/934246";
import { DistributionType, Thumbnail, NodePropertyCategory, Fullscreen } from "../figma_app/763686";
import { defaultSessionLocalIDString, sessionLocalIDToString, defaultSessionLocalID, parseSessionLocalID } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { atom, createRemovableAtomFamily, useAtomWithSubscription, atomStoreManager, useAtomValueAndSetter, Xr } from "../figma_app/27355";
import c from "../vendor/805353";
import p from "../vendor/128080";
import { analyticsEventManager } from "../905/449184";
import { debugState } from "../905/407919";
import { getFilteredFeatureFlags } from "../905/717445";
import { buildUploadUrl } from "../figma_app/169182";
import { GI, Vi } from "../905/125333";
import { mapEditorTypeToProductType } from "../figma_app/314264";
import { fullscreenValue } from "../figma_app/455680";
import { toArray, normalizeMixedValue } from "../905/216495";
import { useNonMixedSelectionPropertyValue } from "../905/275640";
import { setupRemovableAtomFamily } from "../figma_app/615482";
import { useStrictDeepEqualSceneValue, useDeepEqualSceneValue } from "../figma_app/167249";
import { iM } from "../figma_app/405546";
var u = c;
var _ = p;
let x = "Current";
let $$N11 = atom([]);
let C = atom({});
let w = createRemovableAtomFamily(e => atom(t => t(C)[e] ?? void 0, (t, r, n) => {
  r(C, t => ({
    ...t,
    [e]: n
  }));
}));
let $$O5 = atom({});
let R = createRemovableAtomFamily(e => atom(t => t($$O5)[e] ?? void 0, (t, r, n) => {
  r($$O5, t => ({
    ...t,
    [e]: n
  }));
}));
export function $$L8(e) {
  let t = w(e);
  return useAtomWithSubscription(t);
}
export let $$P4 = {
  guid: defaultSessionLocalIDString,
  name: "Solid",
  type: DistributionType.STRETCH,
  sizeX: 0,
  sizeY: 0,
  isSoftDeleted: !1
};
export function $$D0({
  guid: e,
  sizeX: t,
  sizeY: r,
  upSample: n
}) {
  if (!Thumbnail) return;
  let [i, s] = Thumbnail.generateThumbnailForNode(e, t * n, r * n, n, {
    useAbsoluteBounds: !0
  });
  return URL.createObjectURL(new Blob([s], {
    type: "image/png"
  }));
}
let k = e => {
  let t = $$D0({
    ...e,
    upSample: 2
  });
  t && atomStoreManager.set(w(e.previewName), t);
};
let M = e => {
  if (!Thumbnail) return;
  let {
    guid,
    previewName,
    config,
    optionIndexForMenu
  } = e;
  let s = $$D0({
    ...e,
    upSample: 2
  });
  s && atomStoreManager.set(R(previewName), {
    name: previewName,
    imageUrl: s,
    config,
    optionIndexForMenu,
    guid
  });
};
export function $$F1() {
  return useStrictDeepEqualSceneValue(e => {
    let t = e.getInternalCanvas();
    return t && getFilteredFeatureFlags().ce_il_strokes ? t.childrenNodes.filter(e => "BRUSH" === e.type && (e.brushType !== DistributionType.SCATTER || getFilteredFeatureFlags().ce_il_scatter)).map(e => {
      let t = {
        guid: e.guid,
        name: e.name,
        sizeX: e.size.x,
        sizeY: e.size.y,
        isSoftDeleted: e.isSoftDeleted
      };
      return e.brushType === DistributionType.SCATTER ? {
        ...t,
        type: DistributionType.SCATTER,
        settings: e.scatterStrokeSettings
      } : {
        ...t,
        type: DistributionType.STRETCH
      };
    }) : [];
  });
}
export function $$j3() {
  let e = $$F1();
  let t = toArray(useNonMixedSelectionPropertyValue("strokeBrushGuid")).map(e => sessionLocalIDToString(e));
  let r = e.filter(e => t.includes(e.guid));
  return 0 === r.length ? null : r.every(e => e.type === DistributionType.SCATTER) ? DistributionType.SCATTER : r.every(e => e.type === DistributionType.STRETCH) ? DistributionType.STRETCH : null;
}
export function $$U10(e) {
  let t = $$F1();
  let r = useAtomWithSubscription(e);
  let n = t.find(e => e.guid && e.guid === sessionLocalIDToString(r.strokeBrushGuid));
  return n ? n.type : null;
}
let B = getFeatureFlags().ce_il_pencil_stroke_presets ? function () {
  let [e, t] = useAtomValueAndSetter($$O5);
  let r = e[x]?.config;
  let i = useAtomWithSubscription(GI)?.dynamicStrokeSettings;
  let a = useMemo(() => u()(t, 500, {
    trailing: !0
  }), [t]);
  useEffect(() => {
    !i || _()(i, r) || a(e => {
      let t = e[x];
      if (!t) return e;
      let {
        guid
      } = t;
      let n = getSingletonSceneGraph().get(guid);
      if (!n) return e;
      let i = 16 / n.size.y;
      let a = $$D0({
        guid: n.guid,
        sizeX: n.size.x,
        sizeY: n.size.y,
        upSample: 2 * i
      });
      return a ? {
        ...e,
        [x]: {
          ...t,
          imageUrl: a,
          config: n.dynamicStrokeSettings
        }
      } : e;
    });
  }, [i, r, a]);
} : lQ;
let $$G6 = setupRemovableAtomFamily(() => atom(null));
export function $$V9() {
  let [e, t] = useAtomValueAndSetter(Vi);
  let r = useAtomWithSubscription($$G6);
  useEffect(() => {
    r && (void 0 === e.strokeBrushGuid || e.strokeBrushGuid === defaultSessionLocalID) && t(e => ({
      ...e,
      strokeBrushGuid: r
    }));
    fullscreenValue.updateAppModel({
      currentSelectedProperty: {
        type: NodePropertyCategory.STROKE_PRESET,
        indices: [0]
      }
    });
  }, [e.strokeBrushGuid, r, t]);
}
export function $$H2() {
  let e = useDeepEqualSceneValue(e => !!e.getInternalCanvas());
  let [t, r] = useAtomValueAndSetter($$N11);
  let [i, c] = useAtomValueAndSetter($$G6);
  let u = $$F1();
  let p = useMemo(() => u.filter(e => !e.isSoftDeleted && t.includes(e.guid) && e.guid !== defaultSessionLocalIDString), [t, u]);
  let _ = Xr(Vi);
  useEffect(() => {
    if (p.length && !i) {
      let e = p.filter(e => e.type === DistributionType.STRETCH);
      let t = parseSessionLocalID(e[0]?.guid);
      t && c(t);
    }
  }, [i, p, c]);
  useEffect(() => {
    if (!getFilteredFeatureFlags().ce_il_strokes || !e || p.length) return;
    let t = [{
      type: DistributionType.STRETCH,
      resourceString: "a3480b63cd4ac2a8976c8a48aaa5b88a88810ce3"
    }];
    getFeatureFlags().ce_il_scatter && t.push({
      type: DistributionType.SCATTER,
      resourceString: "3ffada8f593e3755bf1920e37ad656804aa53250"
    });
    Promise.all(t.map(({
      resourceString: e,
      type: t
    }) => fetch(buildUploadUrl(e)).then(e => e.arrayBuffer()).then(e => {
      if (Fullscreen) return Fullscreen.insertBrushesFromBuffer(new Uint8Array(e), t);
    }).catch(() => []))).then(([e = [], t = []]) => {
      let n = parseSessionLocalID(e[0]);
      n && (c(n), _(e => ({
        ...e,
        strokeBrushGuid: n
      })));
      r([...e, ...t]);
    });
  }, [_, r, p, e, c]);
  (function () {
    let e = $$F1();
    let t = getSingletonSceneGraph();
    B();
    let r = useMemo(() => e.filter(e => !e.isSoftDeleted), [e]);
    let [i] = iM(Vi, "strokeBrushGuid");
    let l = normalizeMixedValue(i);
    useEffect(() => {
      if (!getFilteredFeatureFlags().ce_il_strokes || !Fullscreen) return;
      let e = Fullscreen.generatePreviewNodesForDrawStrokes();
      t.getInternalCanvas() && ["pencils", "brushes"].forEach(r => {
        let n = e[r];
        let i = "pencils" === r;
        let a = i ? R : w;
        n.forEach((e, r) => {
          let n = t.get(e);
          if (!n) return;
          let o = function (e) {
            let t = /(brush|pencil)_preview_(.+)/.exec(e.name);
            return t ? t[2] : null;
          }(n);
          if (!o) return;
          let c = a(o);
          if (atomStoreManager.get(c)) return;
          let u = {
            guid: n.guid,
            previewName: o,
            sizeX: n.size.x,
            sizeY: n.size.y
          };
          !i && l && n.strokeBrushGuid === sessionLocalIDToString(l) ? k(u) : i ? setTimeout(() => M({
            ...u,
            config: n.dynamicStrokeSettings,
            optionIndexForMenu: r
          }), 0) : setTimeout(() => k(u), 0);
        });
      });
    }, [r, t, l]);
  })();
}
export function $$z7(e, t) {
  analyticsEventManager.trackDefinedEvent("illustration.set_brush", {
    brushGuid: e?.guid || "-1:-1",
    brushName: e?.name || "",
    numNodes: t.length,
    productType: mapEditorTypeToProductType(debugState.getState().selectedView.editorType)
  });
}
export const $A = $$D0;
export const Bu = $$F1;
export const Gx = $$H2;
export const Kt = $$j3;
export const Lk = $$P4;
export const NU = $$O5;
export const T6 = $$G6;
export const UH = $$z7;
export const W = $$L8;
export const d3 = $$V9;
export const eh = $$U10;
export const vE = $$N11;