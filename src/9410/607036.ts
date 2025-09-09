import _require4 from "../9410/377832";
import _require3 from "../9410/317240";
import _require2 from "../9410/795595";
import _require from "../9410/947615";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRef, useCallback, useState, forwardRef, useMemo } from "react";
import { K as _$$K } from "../905/443068";
import { E as _$$E } from "../905/632989";
import { $n } from "../905/521428";
import { C as _$$C } from "../905/520159";
import { A } from "../905/251970";
import { SlidesEmbeddedPrototypeBindings } from "../figma_app/763686";
import { atom, useAtomValueAndSetter } from "../figma_app/27355";
import p from "classnames";
import { O8 } from "../figma_app/88484";
import { U as _$$U } from "../figma_app/901889";
import { generateRecordingKey } from "../figma_app/878298";
import { ks } from "../figma_app/637027";
import { f as _$$f } from "../figma_app/109947";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { Dm } from "../figma_app/8833";
import { Cu } from "../figma_app/314264";
import { Tc } from "../905/797478";
import { fullscreenValue } from "../figma_app/455680";
import { pb, zU, Ik, qS } from "../figma_app/831696";
import { Ib } from "../905/129884";
import { R } from "../figma_app/53049";
import { Y } from "../905/1768";
var h = p;
let k = "slides_insert_embed_modal--sectionContainer--r1D85";
let N = "slides_insert_embed_modal--recentPrototypeThumbnail--2N-ss";
let $$A3 = atom(-1);
let $$O1 = "slide-insert-embed-modal-button";
async function L({
  fileKey: e,
  nodeId: t
}) {
  let i = await R({
    fileKey: e
  });
  return i && SlidesEmbeddedPrototypeBindings?.getPrototypeFileStructureData(e, i, t) || {};
}
export function $$R2() {
  let e = _$$U();
  let [t, i] = useAtomValueAndSetter($$A3);
  let a = useRef(null);
  let s = useCallback((e = !1) => {
    e && fullscreenValue.triggerAction("set-tool-default", null);
    i(-1);
  }, [i]);
  Y(() => s(!0), {
    closeOnEsc: !0,
    ignore: [a, Tc($$O1)]
  });
  let [o, l] = useState(0);
  let d = useCallback(async t => {
    let i = pb(t);
    let r = zU(t);
    if (!i) return;
    let n = await L({
      fileKey: i,
      nodeId: r
    });
    e("embedded_prototype_file_structure_data", {
      fileKey: i,
      nodeId: r,
      ...n
    });
  }, [e]);
  let c = useCallback(e => {
    fullscreenValue.triggerActionInUserEditScope("insert-interactive-element-into-active-slide", {
      type: "EMBED",
      url: e
    });
    s();
    d(e);
  }, [s, d]);
  let p = O8();
  let h = 0 === o ? getI18nString("slides.flapp.embed.widget_modal_title") : getI18nString("slides.flapp.embed.prototype_modal_title");
  return jsx($$M0, {
    closeWidow: s,
    ref: a,
    center: t,
    children: jsx(P, {
      title: h,
      showBackButton: 0 !== o,
      onBackClicked: () => l(0),
      onCloseClicked: s,
      children: 0 === o ? jsx(F, {
        closeModal: s,
        navigateToPrototypeStep: () => l(1)
      }) : jsx(U, {
        recentPrototypes: p,
        onAddPrototypeRequested: c
      })
    })
  });
}
var D = (e => (e[e.LANDING = 0] = "LANDING", e[e.PROTOTYPE = 1] = "PROTOTYPE", e))(D || {});
export let $$M0 = forwardRef(function (e, t) {
  let [i] = useAtomValueAndSetter(_$$f);
  let a = i?.current?.getBoundingClientRect();
  let s = (a?.height ?? 0) > 0;
  let o = useMemo(() => s ? {
    bottom: window.innerHeight - (a?.y ?? 0) + 8
  } : {
    bottom: 72
  }, [s, a?.y]);
  return jsx("div", {
    ref: t,
    style: {
      position: "fixed",
      width: "fit-content",
      margin: "auto",
      left: e.center,
      transform: "translateX(-50%)",
      ...o
    },
    className: h()("slides_insert_embed_modal--dockedToolbeltWindow--lJ7x1 text--fontPos13--xW8hS text--_fontBase--QdLsd", Dm),
    children: jsx("div", {
      style: {
        minWidth: e.minWidth ?? a?.width ?? 396
      },
      children: e.children
    })
  });
});
function P({
  children: e,
  title: t,
  showBackButton: i,
  onBackClicked: n,
  onCloseClicked: s
}) {
  return jsxs(Fragment, {
    children: [jsxs("div", {
      className: h()("slides_insert_embed_modal--headerContainer--5xFbR", i ? _$$s.pl8.$ : _$$s.pl16.$),
      children: [jsxs("div", {
        className: _$$s.textBodyMediumStrong.flex.itemsCenter.$,
        children: [i ? jsx(_$$K, {
          onClick: n,
          "aria-label": getI18nString("general.back"),
          children: jsx(_$$C, {})
        }) : null, jsx("p", {
          children: t
        })]
      }), jsx(_$$K, {
        "aria-label": getI18nString("common.close"),
        onClick: s,
        children: jsx(A, {})
      })]
    }), jsx(K, {}), jsx("div", {
      className: "slides_insert_embed_modal--contentContainer--5pDam",
      children: e
    })]
  });
}
function F({
  closeModal: e,
  navigateToPrototypeStep: t
}) {
  let n = t => {
    t();
    e();
  };
  let a = "liveInteractionModal";
  return jsxs("div", {
    className: "slides_insert_embed_modal--widgetContainer--LvggL",
    children: [jsx("div", {
      className: _$$s.textBodyMedium.colorTextSecondary.pb16.$,
      children: renderI18nText("slides.flapp.embed.widget_modal_description")
    }), jsxs("div", {
      className: "slides_insert_embed_modal--widgetGrid---WhKd",
      children: [jsx(B, {
        thumbnail: _require,
        title: getI18nString("slides.flapp.embed.widget_poll"),
        onSelected: () => n(() => fullscreenValue.triggerActionInUserEditScope("insert-interactive-element-into-active-slide", {
          type: "POLL"
        })),
        recordingKey: generateRecordingKey(a, "poll")
      }), jsx(B, {
        thumbnail: _require2,
        title: getI18nString("slides.flapp.embed.widget_stamps"),
        onSelected: () => n(() => fullscreenValue.triggerActionInUserEditScope("insert-interactive-element-into-active-slide", {
          type: "FACEPILE"
        })),
        recordingKey: generateRecordingKey(a, "facepile")
      }), jsx(B, {
        thumbnail: _require3,
        title: getI18nString("slides.flapp.embed.widget_alignment"),
        onSelected: () => n(() => fullscreenValue.triggerActionInUserEditScope("insert-interactive-element-into-active-slide", {
          type: "ALIGNMENT"
        })),
        recordingKey: generateRecordingKey(a, "alignment")
      }), jsx(B, {
        thumbnail: _require4,
        title: getI18nString("slides.flapp.embed.widget_prototype"),
        onSelected: t,
        recordingKey: generateRecordingKey(a, "prototype")
      })]
    })]
  });
}
function B({
  thumbnail: e,
  title: t,
  onSelected: i,
  recordingKey: n
}) {
  return jsxs(_$$E, {
    className: _$$s.flex.flexColumn.gap8.$,
    onClick: i,
    recordingKey: n,
    children: [jsx("img", {
      className: "slides_insert_embed_modal--widgetThumbnail--u966s",
      src: e,
      alt: t,
      draggable: !1
    }), jsx("p", {
      className: _$$s.wFull.textBodyMediumStrong.alignLeft.$,
      children: t
    })]
  });
}
function U({
  recentPrototypes: e,
  onAddPrototypeRequested: t
}) {
  return jsxs(Fragment, {
    children: [jsx(H, {}), jsx(V, {
      prototypes: e,
      maxCount: 3,
      onPrototypeClick: t
    }), jsx(z, {
      onAddPrototypeUrlClicked: t
    })]
  });
}
function G({
  prototypeUrl: e,
  onClick: t
}) {
  let i = Ik(e);
  let n = i || !e ? void 0 : getI18nString("slides.flapp.embed.add_button_invalid_link_tooltip");
  return jsx("div", {
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": n,
    "data-tooltip-show-above": !0,
    "data-tooltip-show-immediately": !0,
    children: jsx($n, {
      variant: "primary",
      disabled: !i,
      onClick: () => {
        e && t(e.trim());
      },
      children: renderI18nText("slides.flapp.embed.add_button_label")
    })
  });
}
function K() {
  return jsx("div", {
    className: _$$s.wFull.colorBgTertiary.h1.$
  });
}
function H() {
  return jsx("div", {
    className: h()(_$$s.colorTextSecondary.textBodyMedium.$, k),
    children: renderI18nText("slides.flapp.embed.modal_description")
  });
}
function z({
  onAddPrototypeUrlClicked: e
}) {
  let [t, i] = useState();
  let a = getI18nString("slides.flapp.embed.add_prototype_link_hint", {
    prototype_link_prefix: qS()
  });
  return jsxs("div", {
    children: [jsx("div", {
      className: _$$s.textBodyMediumStrong.$,
      children: renderI18nText("slides.flapp.embed.add_prototype_link_header")
    }), jsxs("div", {
      className: "slides_insert_embed_modal--prototypePasteContainer--PozcZ",
      children: [jsx(ks, {
        className: "slides_insert_embed_modal--prototypeLinkInput--9Jynj",
        type: "url",
        onChange: e => {
          i(e.target.value);
        },
        value: t,
        placeholder: a
      }), jsx(G, {
        prototypeUrl: t,
        onClick: () => {
          t && (Cu({
            name: "slides.flapps.embed.add_prototype_link_button_clicked",
            fileKey: pb(t),
            productType: "slides"
          }), e(t));
        }
      })]
    })]
  });
}
function V({
  prototypes: e,
  maxCount: t,
  onPrototypeClick: i
}) {
  let a = useMemo(() => e.data?.slice(-t)?.reverse(), [e, t]);
  return !a || a.length < 1 ? null : jsx("div", {
    className: k,
    children: jsxs("div", {
      className: _$$s.textBodyMediumStrong.$,
      children: [renderI18nText("slides.flapp.embed.recent_prototypes_header"), a.map(e => jsx(W, {
        thumbnailUrl: e.thumbnail_url,
        title: e.name,
        subtitle: e.fig_file.name,
        onClick: () => {
          Cu({
            name: "slides.flapps.embed.recent_prototype_tile_clicked",
            fileKey: e.file_key,
            productType: "slides"
          });
          i(e.url);
        }
      }, `${e.name}_${e.file_key}`))]
    })
  });
}
function W({
  thumbnailUrl: e,
  title: t,
  subtitle: i,
  onClick: n
}) {
  return jsxs(_$$E, {
    className: "slides_insert_embed_modal--recentPrototypeTileContainer--ig9io",
    onClick: n,
    children: [e ? jsx("img", {
      className: N,
      alt: "Prototype thumbnail",
      src: e,
      loading: "lazy",
      draggable: !1
    }) : jsx("div", {
      className: N
    }), jsxs("div", {
      className: _$$s.alignLeft.$,
      children: [jsx("p", {
        className: _$$s.textBodyMediumStrong.$,
        children: t
      }), jsx("p", {
        className: _$$s.textBodySmall.colorTextSecondary.$,
        children: i
      })]
    })]
  });
}
export const qM = $$M0;
export const RS = $$O1;
export const cR = $$R2;
export const FT = $$A3;