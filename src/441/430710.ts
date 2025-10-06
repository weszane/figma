import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useMemo, useEffect, useCallback, memo } from "react";
import { useDispatch } from "react-redux";
import { ButtonPrimitive } from "../905/632989";
import { l as _$$l } from "../6401/369764";
import { AppStateTsApi, RotationType, FlappBindings, PresetType } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { sessionLocalIDToString } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import p from "classnames";
import { getViewerInstance, useEventListener } from "../figma_app/632319";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { VisualBellIcon } from "../905/576487";
import { DEVICE_PRESETS_BY_ID } from "../figma_app/349969";
import { ANDROID_PRESET_LIST } from "../905/505138";
import { getPrototypeSelectedView } from "../figma_app/386952";
import { getUserId } from "../905/372672";
import { getObservableValue } from "../figma_app/84367";
import { I as _$$I } from "../905/537408";
import { xu, yx } from "../figma_app/778443";
import { _ as _$$_ } from "../9410/762998";
import { _ as _$$_2, s as _$$s2 } from "../6401/708171";
import { oR } from "../441/277411";
import { e as _$$e } from "../6401/216695";
import { kg, zP, uZ, kL, pU } from "../6401/503596";
var f = p;
export function $$L0(e) {
  let {
    nodeId,
    setConfigData,
    isReadOnly,
    invalidateThumbnail
  } = e;
  let {
    isEmbedActive,
    setActiveEmbed
  } = _$$_2(nodeId);
  let f = !isReadOnly;
  let E = useDispatch();
  let g = getObservableValue(AppStateTsApi?.flappData().embeddablePrototypeIdPendingInsertion, "");
  let [v, b] = useState();
  let N = useMemo(() => {
    let t = $$B3(e.configData);
    if (!t) return;
    let i = DEVICE_PRESETS_BY_ID[t.presetIdentifier];
    let n = t.rotation === RotationType.CCW_90;
    let {
      x,
      y
    } = i?.imageSize ?? {
      x: 0,
      y: 0
    };
    let [o, s] = n ? [y, x] : [x, y];
    return o / s;
  }, [e.configData]);
  useEffect(() => {
    if (!f) return;
    let e = getSingletonSceneGraph().get(nodeId);
    let i = N ?? v;
    e && i && permissionScopeHandler.system("resizing-embed", () => {
      let t = e.size.x > 0 ? e.size.x : 400;
      let n = Math.floor(t / i);
      0 === e.size.x && (e.x -= t / 2, e.y -= n / 2);
      e.resizeWithConstraints(t, n);
      e.proportionsConstrained = !0;
    });
  }, [nodeId, N, v, f]);
  useEffect(() => {
    nodeId === g && (E(VisualBellActions.enqueue({
      type: "slides-embedded-prototype",
      message: getI18nString("slides.inserting_embed.visual_bell"),
      icon: VisualBellIcon.SPINNER,
      timeoutOverride: 1 / 0
    })), setActiveEmbed(), setTimeout(() => {
      nodeId === AppStateTsApi?.flappData().embeddablePrototypeIdPendingInsertion.getCopy() && FlappBindings?.embeddablePrototypeLoadFailed();
    }, 3e4));
  }, [nodeId, g, E, setActiveEmbed]);
  useEffect(() => {
    let e = e => {
      if (e.origin !== location.origin || e.source && "frameElement" in e.source && null != e.source.frameElement && e.source.frameElement.id !== xu + nodeId) return;
      let n = e.data;
      if ("EMBED_PROTO_ASPECT_RATIO" === n.type && n.data.aspectRatio && (b(n.data.aspectRatio), nodeId === g && FlappBindings?.embeddablePrototypeLoadSucceeded()), "EMBED_PROTO_DEVICE" === n.type) {
        let e = n.data.device;
        f && e ? permissionScopeHandler.system("set-embed-device-frame-config-data", () => {
          setConfigData("deviceFrameShown", "" !== e.presetIdentifier && "PRESET" === e.type ? "true" : "false");
          setConfigData("deviceFramePreset", e.presetIdentifier);
          setConfigData("deviceFrameRotation", e.rotation);
        }) : f && permissionScopeHandler.system("set-embed-device-frame-config-data", () => {
          setConfigData("deviceFrameShown", "false");
          setConfigData("deviceFramePreset", "");
          setConfigData("deviceFrameRotation", "NONE");
        });
      }
      if ("EMBED_PROTO_FILE_METADATA" === n.type && f && permissionScopeHandler.system("embed-file-metatada", () => {
        setConfigData("fileName", n.data.fileName);
        setConfigData("pageName", n.data.pageName);
        n.data.activeStartingPointNodeId && setConfigData("activeStartingPointNodeId", n.data.activeStartingPointNodeId);
        n.data.startingPointsData && setConfigData("startingPointsData", JSON.stringify(n.data.startingPointsData));
      }), "EMBED_PROTO_THUMBNAIL" === n.type && n.data.thumbnail) {
        if (!getFeatureFlags().slides_iframe_embedded_prototypes_thumbnail) return;
        yx(n.data.thumbnail, n.data.width, n.data.height, nodeId, invalidateThumbnail);
      }
    };
    window.addEventListener("message", e);
    return () => {
      window.removeEventListener("message", e);
    };
  }, [nodeId, setConfigData, E, g, f, invalidateThumbnail]);
  let P = _$$s2(nodeId) || !isEmbedActive;
  return jsx(C, {
    ...e,
    isActive: isEmbedActive,
    setActive: setActiveEmbed,
    disablePointerEvents: !P
  });
}
export function $$A1(e) {
  let t = getPrototypeSelectedView();
  let i = getViewerInstance();
  let a = e.nodeId;
  let [o, s] = useState(i?.isActiveSlidesEmbeddedPrototype(a) || !1);
  useEventListener(i, "embeddedPrototypeDataChange", useCallback(e => {
    let t = !1;
    for (let i of e) if (sessionLocalIDToString(i.nodeId) === a) {
      t = !0;
      break;
    }
    s(t);
  }, [a]));
  let l = useCallback(e => {
    t.isAudienceViewPopout ? oR({
      type: "LOAD_EMBEDDED_PROTOTYPE",
      nodeId: e
    }) : i?.setActiveSlidesEmbeddedPrototype(e);
  }, [i, t]);
  return jsx(C, {
    ...e,
    isActive: o,
    setActive: l
  });
}
function C({
  configData: e,
  nodeId: t,
  setConfigData: i,
  isViewer: a,
  isActive: o,
  setActive: s,
  disablePointerEvents: l,
  invalidateThumbnail: d
}) {
  let c = getViewerInstance();
  let m = $$B3(e);
  let p = useCallback(e => {
    for (let i of e) if (sessionLocalIDToString(i.nodeId) === t) {
      let e = z(t);
      if (e && !c?.isPresenterSession()) {
        e.contentWindow?.postMessage({
          type: "SET_OBSERVING_SESSION_ID",
          data: {
            sessionId: null != i.sessionId ? i.sessionId : -1
          }
        }, "*");
        break;
      }
    }
  }, [t, c]);
  useEventListener(c, "embeddedPrototypeDataChange", p);
  let f = useCallback(e => {
    let i = z(t);
    i?.contentWindow?.postMessage({
      type: "PROTOTYPE_EMBED_SELECT_FLOW",
      data: {
        flowId: e
      }
    }, "*");
  }, [t]);
  useEffect(() => {
    e.activeStartingPointNodeId && f(e.activeStartingPointNodeId);
  }, [e.activeStartingPointNodeId, f]);
  useEffect(() => {
    let e = e => {
      e.origin !== location.origin || e.source && "frameElement" in e.source && null != e.source.frameElement && e.source.frameElement.id !== xu + t || !c || "EMBEDDED_PROTOTYPE_SESSION_ID" !== e.data.type || c.setEmbeddedPrototypeSession(t, e.data.data.sessionId);
    };
    window.addEventListener("message", e);
    return () => {
      window.removeEventListener("message", e);
    };
  }, [c, t, i, a]);
  return jsx($$k5, {
    deviceFrame: m,
    invalidateThumbnail: d,
    children: jsxs("div", {
      className: cssBuilderInstance.hFull.wFull.$,
      style: {
        pointerEvents: l ? "none" : "auto"
      },
      children: [o && e.url ? jsx(j, {
        baseUrl: e.url,
        nodeId: t,
        activeStartingNodeId: e.activeStartingPointNodeId
      }) : null, !o && s ? jsx($$F4, {
        isViewer: a,
        nodeId: t,
        onClick: () => s(t)
      }) : null]
    })
  });
}
export let $$F4 = memo(({
  isViewer: e,
  nodeId: t,
  onClick: i
}) => {
  let [a, l] = useState(null);
  useEffect(() => {
    let e = !0;
    let i = null;
    (async () => {
      try {
        let n = getSingletonSceneGraph().get(t);
        if (!n || !n.fills || 0 === n.fills.length) return;
        let r = n.fills.find(e => "IMAGE" === e.type && e.image?.hash);
        if (!r || !r.image?.hash) return;
        let a = await _$$I(r);
        if (!a || !e) return;
        let o = new Blob([a], {
          type: "image/png"
        });
        i = URL.createObjectURL(o);
        e && l(i);
      } catch (e) {
        console.error("Failed to load thumbnail for embed overlay:", e);
      }
    })();
    return () => {
      e = !1;
      i && URL.revokeObjectURL(i);
    };
  }, [t]);
  let d = getFeatureFlags().slides_iframe_embedded_prototypes_thumbnail ? kg : zP;
  let u = a && getFeatureFlags().slides_iframe_embedded_prototypes_thumbnail ? {
    backgroundImage: `url(${a})`
  } : {};
  return e ? jsx(ButtonPrimitive, {
    className: f()(d, cssBuilderInstance.cursorPointer.$),
    style: u,
    onClick: i,
    children: jsx(_$$l, {
      className: uZ
    })
  }) : jsx("div", {
    className: d,
    style: u,
    children: jsx(_$$l, {
      className: f()(uZ, cssBuilderInstance.cursorPointer.$),
      onClick: i
    })
  });
});
export function $$k5({
  deviceFrame: e,
  children: t,
  invalidateThumbnail: i
}) {
  let r = e?.rotation === RotationType.CCW_90 ? {
    x: e?.size.y ?? $.size.y,
    y: e?.size.x ?? $.size.x
  } : {
    x: e?.size.x ?? $.size.x,
    y: e?.size.y ?? $.size.y
  };
  return jsx("div", {
    className: kL,
    children: jsx(_$$_, {
      initialViewerSize: r,
      isDeviceFrameShown: null != e && e.type === PresetType.PRESET && "" !== e.presetIdentifier,
      prototypeDevice: e,
      isInlinePreview: !1,
      onDeviceFrameLoaded: i,
      children: t
    })
  });
}
function j({
  baseUrl: e,
  nodeId: t,
  activeStartingNodeId: i
}) {
  let [a, o] = useState(i);
  let s = function (e, t, i) {
    let n;
    if (!e) return null;
    try {
      n = new URL(e);
    } catch (e) {
      return null;
    }
    let r = n.searchParams;
    _$$e(r, "bare-ui", "1");
    _$$e(r, "scaling", "fit-width");
    _$$e(r, "content-scaling", "fixed");
    _$$e(r, "needsAlpha", "1");
    _$$e(r, "inline-viewer", "1");
    _$$e(r, "disable-default-keyboard-nav", "1");
    t && _$$e(r, "fuid", t);
    i && _$$e(r, "starting-point-node-id", i);
    return n;
  }(e, getUserId(), a);
  return jsx("div", {
    className: pU,
    children: jsx("iframe", {
      id: `${xu}${t}`,
      className: pU,
      loading: "eager",
      src: s?.toString(),
      title: getI18nString("slides.flapp.embed.title"),
      allow: "autoplay; encrypted-media; picture-in-picture; fullscreen;",
      sandbox: "allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation",
      referrerPolicy: "same-origin"
    })
  });
}
function z(e) {
  return document.getElementById(xu + e);
}
let U = e => {
  switch (e) {
    case "NONE":
    default:
      return RotationType.NONE;
    case "CCW_90":
      return RotationType.CCW_90;
  }
};
export function $$M2(e) {
  return !!e.deviceFramePreset && (void 0 === e.deviceFrameShownOverride ? "true" === e.deviceFrameShown : "true" === e.deviceFrameShownOverride);
}
export function $$B3(e) {
  return $$M2(e) ? function (e) {
    let t = DEVICE_PRESETS_BY_ID[e.deviceFramePreset ?? ""];
    return t ? {
      type: PresetType.PRESET,
      size: t.framePresetSize,
      presetIdentifier: t.presetIdentifier,
      rotation: U(e.deviceFrameRotation)
    } : null;
  }(e) : null;
}
let V = ANDROID_PRESET_LIST[0];
let $ = {
  type: PresetType.PRESET,
  size: V?.framePresetSize ?? {
    x: 0,
    y: 0
  },
  presetIdentifier: V?.presetIdentifier ?? "",
  rotation: RotationType.NONE
};
export const DR = $$L0;
export const E$ = $$A1;
export const Wd = $$M2;
export const gD = $$B3;
export const lu = $$F4;
export const wL = $$k5;