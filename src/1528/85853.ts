import { useState, useCallback, useEffect, useMemo } from "react";
import { useSelector } from "../vendor/514228";
import { ServiceCategories as _$$e } from "../905/165054";
import { Fullscreen, ImageExportType } from "../figma_app/763686";
import { atom, useAtomValueAndSetter } from "../figma_app/27355";
import { delay } from "../905/236856";
import { analyticsEventManager } from "../905/449184";
import { reportError } from "../905/11";
import { Point } from "../905/736624";
import { getI18nString } from "../905/303541";
import { wS } from "../figma_app/221240";
import { Eo } from "../figma_app/80990";
import { Jr } from "../figma_app/624361";
import { k } from "../figma_app/449815";
import { Pv } from "../905/619652";
import { tS } from "../figma_app/516028";
import { u2 } from "../figma_app/807786";
import { AF } from "../figma_app/889655";
import { PW } from "../figma_app/633080";
var N = (e => (e.GENERIC = "GENERIC", e.OFFLINE = "OFFLINE", e.THUMBNAIL_TIMEOUT = "THUMBNAIL_TIMEOUT", e))(N || {});
export function $$y0(e) {
  switch (e) {
    case "GENERIC":
      return getI18nString("design_systems.playground.unable_to_load");
    case "OFFLINE":
      return getI18nString("design_systems.playground.unable_to_load_while_offline");
    case "THUMBNAIL_TIMEOUT":
      return getI18nString("design_systems.playground.unable_to_load_thumbnail");
  }
}
export function $$b4(e) {
  switch (e) {
    case "GENERIC":
      return getI18nString("design_systems.playground.unable_to_load_help_text");
    case "OFFLINE":
      return getI18nString("design_systems.playground.unable_to_load_while_offline_help_text");
    case "THUMBNAIL_TIMEOUT":
      return getI18nString("design_systems.playground.unable_to_load_thumbnail_help_hext");
  }
}
export let $$C2 = atom(!1);
function S(e) {
  let [t, n] = useState();
  let [l, r] = useState();
  let [o, d] = useState(!1);
  let [c, p] = useState(!1);
  let [h, m] = useState(!1);
  let [_, g] = useAtomValueAndSetter($$C2);
  let f = useCallback(() => {
    let t = Fullscreen.generatePlaygroundThumbnail(e ?? null);
    let a = Fullscreen.getPlaygroundNodeData();
    t.pixels?.length > 0 ? (n({
      src: Pv(t.pixels, new Point(t.width, t.height)),
      width: t.width / t.scale,
      height: t.height / t.scale
    }), r(a), p(!1), g(!0)) : p(!0);
  }, [g, e]);
  let v = useCallback(e => {
    d(e);
    m(!0);
  }, [m]);
  let {
    onSetPercentImagesLoaded,
    onResetTracker
  } = function (e) {
    let [t, n] = useState(0);
    let [l, r] = useState(0);
    let [i, s] = useState(null);
    let o = useCallback(() => {
      n(0);
      r(0);
      s(null);
    }, []);
    useEffect(() => {
      function n(n, a) {
        if (t > n && t < a && l <= n) {
          let n = Date.now();
          (null === i || n - i > 1e3) && (s(n), r(t), e());
        }
      }
      n(.25, .5);
      n(.5, .75);
      n(.75, 1);
    }, [l, i, e, t]);
    useEffect(() => {
      1 === t && (e(), r(1));
    }, [e, t]);
    return useMemo(() => ({
      onSetPercentImagesLoaded: n,
      onResetTracker: o
    }), [n, o]);
  }(f);
  useEffect(() => k(v), [v]);
  useEffect(() => () => Fullscreen.clearPlaygroundScene(), []);
  useEffect(() => {
    h && setTimeout(() => {
      f();
      m(!1);
    }, 0);
  }, [h, m, f]);
  return useMemo(() => ({
    setPlaygroundNodeData: r,
    onSetPercentImagesLoaded,
    onResetTracker,
    thumbnailData: t,
    playgroundNodeData: l,
    hasChangesToReset: o,
    hasThumbnailErrors: c,
    setHasChangesToReset: d
  }), [r, onSetPercentImagesLoaded, onResetTracker, t, l, o, c, d]);
}
export function $$T1({
  canViewPlaygroundQueryResult: e,
  canvasAsset: t,
  onLoaded: n,
  onError: l,
  thumbnailOptions: s
}) {
  let [u, p] = useState(t);
  let {
    setPlaygroundNodeData,
    onSetPercentImagesLoaded,
    onResetTracker,
    thumbnailData,
    playgroundNodeData,
    hasChangesToReset,
    hasThumbnailErrors,
    setHasChangesToReset
  } = S(s);
  let T = tS();
  let L = u !== t || !playgroundNodeData || "loading" === e.status;
  let [R, D] = useState(null);
  let O = useCallback(() => {
    Fullscreen.clearPlaygroundScene();
    setPlaygroundNodeData(void 0);
  }, [setPlaygroundNodeData]);
  let j = useCallback(async (e = !0) => {
    let n;
    if (t.type !== PW.COMPONENT && t.type !== PW.STATE_GROUP && t.type !== PW.MODULE) {
      O();
      return;
    }
    let a = Date.now();
    if (D(null), t.isLocal) n = null;else try {
      let e = Eo.getCanvas({
        canvas_url: t.canvas_url
      });
      (await Promise.race([e, delay(100)])) || (p(t), setPlaygroundNodeData(void 0), setHasChangesToReset(!1));
      n = await e;
    } catch (e) {
      0 === e.status ? D("OFFLINE") : D("GENERIC");
      O();
      p(t);
      reportError(_$$e.DESIGN_SYSTEMS_ECOSYSTEM, e, {
        tags: {
          openFileKey: T,
          libraryKey: t.library_key,
          type: t.type
        }
      });
      return;
    }
    let l = t.type !== PW.STATE_GROUP || t.isLocal ? null : t.default_state_key;
    if (n ? Fullscreen.setPlaygroundSceneFromBuffer(t.node_id, n, e, l, t.library_key) : Fullscreen.setPlaygroundSceneFromLocalAsset(t.node_id)) {
      setHasChangesToReset(!1);
      setPlaygroundNodeData(Fullscreen.getPlaygroundNodeData());
      p(t);
      analyticsEventManager.trackDefinedEvent("playground.set_scene", {
        duration: Date.now() - a,
        assetType: t.type,
        isLocal: t.isLocal ?? !1,
        assetKey: u2(t)
      });
      onResetTracker();
      Jr().loadAllImagesUnder(["0:0"], ImageExportType.NON_ANIMATED_ONLY, "playground.initialLoad", (e, t) => {
        onSetPercentImagesLoaded((t - e) / t);
      }, Fullscreen.getPlaygroundScene());
      return;
    }
    if (e) {
      p(t);
      setPlaygroundNodeData(void 0);
      setHasChangesToReset(!1);
      setTimeout(() => {
        j(!1);
      }, 50);
      return;
    }
    D("GENERIC");
    O();
  }, [T, O, onResetTracker, onSetPercentImagesLoaded, t, setPlaygroundNodeData, setHasChangesToReset]);
  let k = e.unwrapOr(null);
  useEffect(() => {
    null !== k && (k ? j() : p(t));
  }, [k, setPlaygroundNodeData, t, O, j]);
  return useMemo(() => {
    let e = hasThumbnailErrors ? "THUMBNAIL_TIMEOUT" : R;
    return !e && L ? {
      state: "LOADING",
      previousAssetData: {
        thumbnailData,
        hasChangesToReset,
        refetchAndResetScene: j,
        nodeData: playgroundNodeData,
        asset: u
      }
    } : (n(), e) ? (l(), {
      state: "ERROR",
      errorType: e,
      previousAssetData: {
        thumbnailData,
        hasChangesToReset,
        refetchAndResetScene: j,
        nodeData: playgroundNodeData,
        asset: u
      }
    }) : {
      state: "LOADED",
      currentAssetData: {
        hasChangesToReset,
        refetchAndResetScene: j,
        nodeData: playgroundNodeData,
        thumbnailData,
        asset: u
      }
    };
  }, [L, n, hasThumbnailErrors, R, playgroundNodeData, thumbnailData, l, hasChangesToReset, j, u]);
}
export function $$L3() {
  let e = useSelector(AF);
  let t = e?.guid;
  let n = wS();
  let r = "loaded" === n.status ? n.result : void 0;
  let {
    setPlaygroundNodeData,
    thumbnailData,
    playgroundNodeData,
    hasChangesToReset
  } = S();
  let u = useCallback(() => {
    let e = !1;
    r ? e = Fullscreen.setPlaygroundSceneFromDetachedInfo(r.dataComponentId, "temp-scene" === r.dataLocation) : t && (e = Fullscreen.setPlaygroundSceneFromSelection());
    e || (Fullscreen.clearPlaygroundScene(), setPlaygroundNodeData(void 0));
  }, [t, r, setPlaygroundNodeData]);
  useEffect(() => {
    u();
  }, [u]);
  return useMemo(() => playgroundNodeData && thumbnailData ? {
    hasChangesToReset,
    refetchAndResetScene: u,
    nodeData: playgroundNodeData,
    thumbnailData
  } : null, [playgroundNodeData, thumbnailData, hasChangesToReset, u]);
}
export const DK = $$y0;
export const MO = $$T1;
export const d8 = $$C2;
export const oD = $$L3;
export const q9 = $$b4;