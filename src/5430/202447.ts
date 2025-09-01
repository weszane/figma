import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { md } from "../figma_app/27355";
import o from "classnames";
import { t as _$$t } from "../905/303541";
import { zS, qD } from "../figma_app/471982";
import { Ay } from "../905/506641";
import { YW } from "../figma_app/350203";
import { fu } from "../figma_app/831799";
import { qD as _$$qD } from "../figma_app/314264";
import { Cn } from "../905/862913";
import { kS } from "../figma_app/864723";
import { FTemplateCategoryType } from "../figma_app/191312";
import { Ho } from "../figma_app/878651";
import { O7 } from "../figma_app/578832";
var a = o;
let g = "canvas_viewer--canvasViewer--aDA8H";
let v = (e, {
  width: t,
  height: r,
  top: s,
  left: i
}) => {
  e.style.position = "fixed";
  e.style.width = t + "px";
  e.style.height = r + "px";
  e.style.top = s + "px";
  e.style.left = i + "px";
};
let b = (e, t) => {
  if (e.viewer_mode === FTemplateCategoryType.PROTOTYPE) return `/community/file/${e.id}/embed`;
  let r = `/embed?embed_host=fastma&community_viewer=true&hub_file_id=${e.id}`;
  return void 0 === t ? r : `${r}&fuid=${t}`;
};
function j({
  viewer: e,
  resource: t,
  fixedSize: r
}) {
  let [o, a] = useState(void 0);
  let [d, u] = useState(!1);
  let [m, p] = useState(!1);
  let x = md(kS);
  useEffect(() => {
    if (!e) return;
    let t = t => {
      "LOAD_FINISHED" === t.data && (e.querySelector("iframe").classList.add("canvas_viewer--showIframe--uYOO5"), e.setAttribute("data-loaded", "true"), u(!0), _$$qD({
        name: "hub-file-canvas-loaded"
      }));
    };
    let r = () => {
      document.activeElement === e.querySelector("iframe") && _$$qD({
        name: "community-LO-embed-iframe-interacted",
        comparisonVariant: m ? "fullscreen" : "thumbnail"
      });
    };
    window.addEventListener("message", t, !1);
    window.addEventListener("blur", r, !1);
    return () => {
      window.removeEventListener("message", t, !1);
      window.removeEventListener("blur", r, !1);
    };
  }, [e, m]);
  let f = () => {
    if (!e) return;
    let t = e.querySelector(`div.${g}`);
    if (!t) return;
    let r = t.getBoundingClientRect();
    v(t, r);
    a(r);
    requestAnimationFrame(() => {
      e.setAttribute("data-animation-phase", "open");
      t.style.position = "fixed";
      t.style.width = "calc(100vw - 96px)";
      t.style.height = "calc(100vh - 96px)";
      t.style.top = "48px";
      t.style.left = "48px";
    });
    _$$qD({
      name: "community-LO-embed-view-expanded"
    });
    p(!0);
  };
  let y = () => {
    if (!e) return;
    let t = e.querySelector(`.${g}`);
    t && (v(t, o), e.setAttribute("data-animation-phase", "closing"), setTimeout(() => {
      e.removeAttribute("data-animation-phase");
      t.style.position = "absolute";
      t.style.removeProperty("width");
      t.style.removeProperty("height");
      t.style.removeProperty("top");
      t.style.removeProperty("left");
    }, 300), p(!1));
  };
  return e ? jsxs(Fragment, {
    children: [jsxs("div", {
      className: "canvas_viewer--iframeWrapper--eemgJ",
      children: [jsx("iframe", {
        title: _$$t("community.embed.preview_title_long"),
        style: {
          width: r ? "100%" : zS(d),
          height: "100%"
        },
        src: b(t, x),
        allowFullScreen: !0
      }, t.id), jsx("svg", {
        onClick: () => {
          m ? y() : f();
        },
        "aria-label": m ? "Close" : "Open",
        className: "canvas_viewer--fullscreenIcon--ew-9d",
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        children: jsx("path", {
          d: "M14.54 4.168l-3.187 3.186-.708-.708 3.197-3.197.753-.449H11V2h5v5h-1V3.334l-.46.834zM3.46 13.832l3.186-3.186.708.708-3.198 3.197-.752.449H7v1H2v-5h1v3.666l.46-.834z",
          fillRule: "nonzero",
          fillOpacity: "1",
          fill: "#000",
          stroke: "none"
        })
      })]
    }), jsx("div", {
      role: "button",
      tabIndex: 0,
      onClick: y,
      className: "canvas_viewer--iframeBackdrop--1sZT3"
    })]
  }) : jsx(Fragment, {});
}
function w({
  resource: e,
  enableEmbedOnSmallScreens: t
}) {
  let [r, n] = useState(null);
  let o = e.viewer_mode === FTemplateCategoryType.WHITEBOARD;
  let l = !!e.thumbnail_is_set;
  let m = t ? YW : 900;
  return jsx("div", {
    className: a()("canvas_viewer--canvasViewerWrapper--PEx4d", {
      "canvas_viewer--smallEmbed--1di1B": t
    }),
    "data-loaded": "false",
    ref: e => n(e),
    children: jsxs("div", {
      className: o ? "canvas_viewer--canvasViewerFigJam--GQ00B canvas_viewer--canvasViewer--aDA8H" : g,
      children: [jsx("div", {
        className: "canvas_viewer--hubFileLoadingCoverImage--2onuq canvas_viewer--resourceLoadingCoverImage--e9uBx",
        children: jsx(Ho, {
          image: e.thumbnail_url,
          isSet: l,
          isWhiteboard: o,
          backgroundColor: Cn(e.client_meta),
          hubFileId: e.id,
          alt: qD(e).name + " preview",
          thumbnailContext: O7.DETAIL,
          resizedThumbnailUrls: e.resized_thumbnail_urls
        })
      }), jsx(Ay, {
        mediaQuery: `(min-width: ${m}px)`,
        onHide: () => {
          r && r.setAttribute("data-loaded", "false");
        },
        children: jsx(j, {
          fixedSize: t,
          viewer: r,
          resource: e
        })
      })]
    }, e.id)
  });
}
function C({
  resource: e
}) {
  return jsx("div", {
    className: "canvas_viewer--canvasViewerWrapperPlugins--YfQ3Y canvas_viewer--canvasViewerWrapper--PEx4d",
    "data-loaded": "true",
    children: jsx("div", {
      className: g,
      children: jsx("img", {
        className: "canvas_viewer--pluginLoadingCoverImage--nn23R canvas_viewer--resourceLoadingCoverImage--e9uBx",
        src: e.thumbnail_url,
        alt: qD(e).name + " preview"
      }, e.id)
    })
  });
}
export function $$L0({
  resource: e,
  enableEmbedOnSmallScreens: t
}) {
  return "current_hub_file_version_id" in e ? jsx(fu, {
    name: "Canvas Embed",
    children: jsx(w, {
      resource: e,
      enableEmbedOnSmallScreens: t
    })
  }) : jsx(C, {
    resource: e
  });
}
export const A = $$L0;