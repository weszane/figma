import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback, memo, useState, useMemo, useEffect, useRef, forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hS, bL } from "../905/437088";
import { Fullscreen, AppStateTsApi, Multiplayer } from "../figma_app/763686";
import { defaultSessionLocalIDString } from "../905/871411";
import { getFeatureFlags } from "../905/601108";
import { Xr, useAtomWithSubscription } from "../figma_app/27355";
import u from "classnames";
import { Cy } from "../figma_app/916560";
import { Wx } from "../figma_app/708845";
import { getI18nString } from "../905/303541";
import { Ho } from "../figma_app/308685";
import { EE, lB } from "../figma_app/731583";
import { _X, Yb } from "../figma_app/62612";
import { getObservableOrFallback } from "../figma_app/84367";
import { Ib } from "../905/129884";
import { registerModal } from "../905/102752";
import { n as _$$n } from "../9410/774045";
import { S as _$$S } from "../9410/565436";
import { p as _$$p } from "../905/673591";
import { V } from "../figma_app/144634";
import { K0, W1, wv } from "../figma_app/439493";
import { A as _$$A } from "../svg/480057";
import { e as _$$e } from "../9410/917051";
var p = u;
function I() {
  let e = Xr(_$$n);
  let t = useCallback(() => {
    e({
      type: "MINIMIZE"
    });
  }, [e]);
  return getFeatureFlags().figjam_a11y_inline_toolbar ? jsx(V, {
    variant: "button",
    tooltip: getI18nString("whiteboard.embeds.inline_menu.minimize"),
    ariaLabel: getI18nString("whiteboard.embeds.inline_menu.minimize"),
    onClick: t,
    recordingKey: "embedMinimizeControl",
    children: jsx(_$$p, {})
  }) : jsx(K0, {
    svg: _$$A,
    active: "NONE",
    tooltip: getI18nString("whiteboard.embeds.inline_menu.minimize"),
    onClick: t,
    recordingKey: "embedMinimizeControl"
  });
}
function N(e) {
  let t = e.mirror.sceneGraph;
  let i = e.mirror.sceneGraphSelection;
  if (1 !== Object.keys(i).length) return null;
  let r = t.get(Object.keys(i)[0]);
  return r && "WIDGET" === r.type ? r : null;
}
function A(e) {
  return e.mirror.sceneGraph.get(e.mirror.appModel.hoveredNode);
}
let $$O1 = memo(function () {
  let e = useSelector(A);
  let t = e?.guid;
  let [i, s] = useState(null);
  let d = useMemo(() => t && t !== defaultSessionLocalIDString ? Fullscreen.getEmbedTypeOfTooltipIcon(t) : null, [t]);
  useEffect(() => {
    if (!d || !t) {
      s(null);
      return;
    }
    let e = EE("embed-tooltip", [t], e => {
      s(e?.position || null);
    });
    s(e.currentNodePosition && e.currentNodePosition[t]?.position || null);
    return () => {
      lB("embed-tooltip");
    };
  }, [t, d]);
  let c = !!d && !!i;
  let u = _X({
    subscribeToUpdates_expensive: c
  });
  let p = useMemo(() => {
    if (!i) return {};
    let e = Yb(u, i);
    let t = e.x + u.x;
    let r = e.y + u.y;
    return {
      height: i.height,
      width: i.width,
      transformOrigin: "top left",
      position: "fixed",
      transform: `translate(${t}px, ${r}px) rotate(${i.angle}deg) scale(${u.zoomScale})`
    };
  }, [u, i]);
  return c ? jsx("div", {
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": "video" === d || "autoplayable_video" === d ? getI18nString("whiteboard.embeds.tooltip_help_text.video") : "audio" === d || "autoplayable_audio" === d ? getI18nString("whiteboard.embeds.tooltip_help_text.audio") : "file" === d || "figma" === d ? getI18nString("whiteboard.embeds.tooltip_help_text.file") : getI18nString("whiteboard.embeds.tooltip_help_text.generic"),
    "data-tooltip-show-above": !0,
    "data-tooltip-max-width": 160,
    "data-tooltip-timeout-delay": 50,
    "data-tooltip-show-immediately": !0,
    style: p
  }) : null;
});
let $$L0 = memo(function () {
  let e = getObservableOrFallback(AppStateTsApi.embedUiState().activeEmbedData);
  let t = useSelector(e => e.mirror.appModel.currentPage ? e.mirror.appModel.currentPage : void 0);
  let i = useSelector(N);
  let n = useAtomWithSubscription(_$$n);
  let s = !!e && i?.guid === e.embedNodeId;
  return e && e.embedNodeId && e.embedThumbnailNodeId && e.srcUrl && e.containingCanvasId && e.containingCanvasId === t ? getFeatureFlags().figjam_embeds_allowlist && !Cy(e.srcUrl) ? (console.error("Could not play embed; domain not on allow-list:", e.srcUrl), null) : jsx(R, {
    isEmbedMaximized: n,
    nodeSelected: s,
    embedThumbnailNodeId: e.embedThumbnailNodeId,
    srcUrl: e.srcUrl
  }) : null;
});
let R = memo(function (e) {
  let {
    embedThumbnailNodeId,
    nodeSelected,
    srcUrl,
    isEmbedMaximized
  } = e;
  let d = useRef(null);
  let u = useRef(null);
  let p = useRef(null);
  let h = useRef(null);
  let f = _X({
    subscribeToUpdates_expensive: !0
  });
  let g = function (e, t) {
    let [i, r] = useState(!1);
    let [a, s] = useState(!1);
    useEffect(() => {
      !e && a && s(!1);
    }, [e, a]);
    useEffect(() => {
      function e(e) {
        if (t.current) {
          let i = t.current.getBoundingClientRect();
          e.clientX > i.left && e.clientX < i.right && e.clientY > i.top && e.clientY < i.bottom && r(!0);
        }
      }
      function n(e) {
        if (t.current && i) {
          r(!1);
          let i = t.current.getBoundingClientRect();
          e.clientX > i.left && e.clientX < i.right && e.clientY > i.top && e.clientY < i.bottom && s(!0);
        }
      }
      document.addEventListener("pointerdown", e);
      document.addEventListener("pointerup", n);
      return () => {
        document.removeEventListener("pointerdown", e);
        document.removeEventListener("pointerup", n);
      };
    }, [i, t]);
    return a || !i && e;
  }(nodeSelected, u);
  let y = Xr(_$$n);
  let b = hS({
    open: isEmbedMaximized,
    onClose: () => y({
      type: "MINIMIZE"
    })
  });
  let C = Wx(p.current);
  useEffect(() => {
    let e = EE("active-embed", [embedThumbnailNodeId], e => {
      if (!e.position) {
        Fullscreen.setActiveEmbed("");
        return;
      }
      h.current = e.position;
      P(u, f, h, C, isEmbedMaximized, g);
    });
    let i = e.currentNodePosition[embedThumbnailNodeId]?.position;
    i ? (h.current = i, P(u, f, h, C, isEmbedMaximized, g)) : Fullscreen.setActiveEmbed("");
    return () => {
      lB("active-embed");
    };
  }, [embedThumbnailNodeId, isEmbedMaximized, g, f, C]);
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: isEmbedMaximized ? "embed_overlay--maximizedIframePositioner--BvF7x" : void 0,
      ref: u,
      children: jsx(M, {
        ref: d,
        srcUrl,
        autofocus: g
      }, embedThumbnailNodeId + srcUrl)
    }), isEmbedMaximized && jsx(D, {
      manager: b,
      modalTargetRef: p
    })]
  });
});
function D(e) {
  let {
    manager,
    modalTargetRef
  } = e;
  return jsxs(bL, {
    manager,
    theme: {
      backdrop: "embed_overlay--embedModalBackdrop--GznWd",
      contents: "embed_overlay--embedModal--NmRO5",
      root: "embed_overlay--embedModalRoot--YSySR"
    },
    children: [jsx("div", {
      className: "embed_overlay--embedModalMenuBackground--xwJaH",
      children: jsx("div", {
        className: "embed_overlay--embedModalMenuContainer--03E8r",
        children: jsxs(W1, {
          testID: "embedMenu",
          children: [jsx(_$$e, {
            inModal: !0
          }), jsx(I, {}), jsx(wv, {}), jsx(_$$S, {
            inModal: !0
          })]
        })
      })
    }), jsx("div", {
      className: "embed_overlay--embedModalContentContainer--jP-31",
      children: jsx("div", {
        ref: modalTargetRef,
        className: "embed_overlay--embedModalTarget--hxGi-"
      })
    })]
  });
}
let M = forwardRef(function (e, t) {
  let i = useDispatch();
  let [s, l] = useState(!1);
  let d = useRef(null);
  let {
    srcUrl,
    autofocus
  } = e;
  return jsxs("div", {
    className: "embed_overlay--loadingIFrameContainer--FIfGE",
    children: [!s && jsx("div", {
      className: "embed_overlay--iframeLoadingPlaceholder--uAVFk"
    }), jsx("iframe", {
      ref: t || d,
      allowFullScreen: !0,
      className: p()("embed_overlay--iframe--FcmB0", {
        "embed_overlay--iframeHidden--xwbj9": !s
      }),
      "data-embed-iframe": !0,
      frameBorder: "0",
      onLoad: () => {
        let e = t && t.current || d.current;
        e && autofocus && e.focus();
        l(!0);
      },
      onMouseOver: () => {
        Multiplayer?.sendChatMessage("", "");
        i(Ho());
      },
      src: srcUrl,
      title: getI18nString("whiteboard.embeds.embed_overlay_iframe_title")
    }, srcUrl)]
  });
});
function P(e, t, i, r, n, a) {
  if (!e.current || !t || !i.current) return;
  let s = e.current;
  let o = i.current;
  if (n) {
    if (!r) return;
    s.style.position = "fixed";
    s.style.height = `${r.height}px`;
    s.style.width = `${r.width}px`;
    s.style.pointerEvents = "all";
    s.style.transform = "unset";
    s.style.transformOrigin = "unset";
  } else {
    let e = Yb(t, o);
    s.style.position = "fixed";
    s.style.height = `${o.height}px`;
    s.style.width = `${o.width}px`;
    s.style.transform = `translate(${e.x + t.x}px, ${e.y + t.y}px) rotate(${o.angle}deg) scale(${t.zoomScale})`;
    s.style.transformOrigin = "top left";
    a ? s.style.pointerEvents = "all" : s.style.pointerEvents = "none";
  }
}
registerModal(R, "EmbedMaximizedModal");
export const G = $$L0;
export const b = $$O1;
