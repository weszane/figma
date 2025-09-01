import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMemo, useRef, memo, forwardRef, useContext } from "react";
import { d4 } from "../vendor/514228";
import { o as _$$o } from "../905/821217";
import { E as _$$E } from "../905/632989";
import { E as _$$E2 } from "../905/172252";
import { glU } from "../figma_app/763686";
import { Ay } from "@stylexjs/stylex";
import u from "classnames";
import _ from "../vendor/961736";
import { G$ } from "../figma_app/191804";
import { parsePxInt } from "../figma_app/783094";
import { h as _$$h } from "../905/207101";
import { rf } from "../figma_app/806412";
import { bG } from "../905/149328";
import { Point } from "../905/736624";
import { s as _$$s } from "../cssbuilder/589278";
import { n as _$$n } from "../905/734251";
import { t as _$$t } from "../905/303541";
import { e as _$$e } from "../905/716094";
import { F as _$$F } from "../905/989956";
import { lg } from "../figma_app/976749";
import { DP } from "../905/640017";
import { zR } from "../figma_app/80990";
import { Y5 } from "../figma_app/455680";
import { q as _$$q } from "../905/524117";
import { N as _$$N } from "../905/645480";
import { zR as _$$zR } from "../figma_app/817077";
import { j as _$$j } from "../905/523935";
import { kH } from "../905/309735";
import { a3 } from "../figma_app/645694";
import { uW, pw } from "../905/187165";
import { NR } from "../905/722604";
import { PW, E8, Do } from "../figma_app/633080";
import { Ib } from "../905/129884";
import { M as _$$M } from "../905/771870";
import { JA } from "../figma_app/608944";
import { i as _$$i } from "../905/415810";
import { B as _$$B } from "../905/179484";
import { cx } from "../figma_app/76115";
import { o as _$$o2 } from "../905/102603";
import { jx, jl, W7 } from "../figma_app/675746";
import { QU, Us } from "../figma_app/475869";
import { OD, vZ, UA, vK, vv, eJ, nl, yg, oV, Vs, bo, aS, Ms, fh, Vk, GR, v as _$$v, Tq, Yc, wi, NK, Ib as _$$Ib, FF, N4, Ol, XK, bF, aC, hs, xC } from "../figma_app/527603";
var p = u;
var h = _;
let X = parsePxInt(QU);
let q = parsePxInt(Us);
function J(e) {
  switch (e) {
    case "list-compact":
    case "list":
    case "list-no-padding":
      return !0;
    case "grid":
    case "grid-compact":
    case void 0:
      return !1;
  }
}
function Z(e, t) {
  switch (e) {
    case "grid":
    case "grid-compact":
    case void 0:
      return t;
    case "list-compact":
      return OD;
    case "list":
    case "list-no-padding":
      return vZ;
  }
}
function Q(e, t, r) {
  return useMemo(() => {
    let n = {};
    if (r) return {
      nameStyle: n,
      background: null
    };
    let i = zR(e, null);
    i && !J(t) && (n.background = _$$F.format(i), n.color = G$(i));
    return {
      nameStyle: n,
      background: i
    };
  }, [t, r, e]);
}
export function $$ee2(e) {
  let {
    item
  } = e;
  let {
    testId,
    ...i
  } = e;
  let {
    nameStyle
  } = Q(e.item, e.displayType, e.noBackground);
  let s = e.showName;
  (e.hideNameOverlay || e.shouldShowNamePopout && !J(e.displayType)) && (s = !1);
  let o = UA;
  let l = h()({}, i, {
    style: {
      marginLeft: e.gutterWidth
    }
  });
  return jsx(en, {
    ...l,
    testId,
    children: jsxs(ei, {
      ...i,
      children: [jsx(et, {
        ...i
      }), s && jsx("div", {
        className: Z(e.displayType, o),
        style: nameStyle,
        children: (() => {
          if (J(e.displayType) && !e.isSearch) {
            let r = kH(item.name);
            return e.item.type === PW.RESPONSIVE_SET ? NR(r) : r;
          }
          return item.name;
        })()
      }), e.item.type === PW.STATE_GROUP && !!e.numVariants && e.numVariants > 0 && jsx(eo, {
        isList: J(e.displayType),
        numVariants: e.numVariants
      })]
    })
  });
}
function et(e) {
  let t = jx();
  let {
    background
  } = Q(e.item, e.displayType, e.noBackground);
  let {
    cmsCollectionMappings
  } = e;
  let a = !!cmsCollectionMappings;
  return t ? a ? jsx(el, {
    collectionName: cmsCollectionMappings.collectionName,
    width: e.width
  }) : jsx(ed, {
    item: e.item,
    width: e.width
  }) : jsx(ea, {
    ...e,
    backgroundColor: background,
    className: void 0,
    style: e.isDragged ? void 0 : e.style
  });
}
export function $$er1(e) {
  let t;
  let r = useRef(null);
  _$$h(() => {
    let t = ({
      nodeId: t
    }) => {
      if (t === e.item.node_id && r.current) {
        let e = r.current.getBoundingClientRect();
        e.top < bG() + q ? r.current.scrollIntoView() : e.bottom > window.innerHeight - bG() && r.current.scrollIntoView(!1);
      }
    };
    Y5.fromFullscreen.on("scrollToNode", t);
    let n = glU && glU?.getFirstSelectedNodeIdForCurrentPage();
    n && t({
      nodeId: n
    });
    return () => {
      Y5.fromFullscreen.removeListener("scrollToNode", t);
    };
  });
  let a = e.item;
  let s = e.isFilePublished && (a.status === E8.NOT_STAGED || a.status === E8.DELETED);
  let {
    nameStyle,
    background
  } = Q(e.item, e.displayType, s);
  s && (t = vK);
  let c = !e.hideNameOverlay && (!e.shouldShowNamePopout || J(e.displayType));
  return jsx(en, {
    ref: r,
    ...e,
    className: t,
    children: jsxs(ei, {
      ...e,
      children: [jsx(ea, {
        ...e,
        backgroundColor: background
      }), c && jsx("div", {
        className: Z(e.displayType, UA),
        style: nameStyle,
        dir: "auto",
        children: J(e.displayType) && !e.isSearch ? kH(a.name) : a.name
      }), e.selected && !J(e.displayType) && jsx("div", {
        className: vv
      }), s && !e.selected && !J(e.displayType) && jsx("div", {
        className: eJ
      }), e.item.type === PW.STATE_GROUP && !!e.numVariants && e.numVariants > 0 && jsx(eo, {
        isList: J(e.displayType),
        numVariants: e.numVariants
      })]
    })
  });
}
let en = memo(forwardRef(function (e, t) {
  let r;
  let a = J(e.displayType);
  let o = useRef(null);
  let l = e.height || 120;
  let d = e.width || 120;
  l -= l % 2;
  d -= d % 2;
  let c = e.itemPadding ?? 0;
  d += 2 * c;
  l += 2 * c;
  let u = jx();
  let p = a || u ? e.style : {
    ...e.style,
    width: d,
    height: l
  };
  let _ = _$$o2(e.item, {
    shouldShowName: e.shouldShowNamePopout,
    isList: a
  });
  r = "list-compact" === e.displayType ? nl : "list" === e.displayType ? yg : "list-no-padding" === e.displayType ? oV : e.isDragged ? Vs : e.isFigJam || e.isSlides || e.isCooper ? bo : e.useBaseTile ? aS : "grid-compact" === e.displayType ? Ms : fh;
  let h = Do(e.item) ? null : e.item.description;
  let m = e.item.type === PW.STATE_GROUP && !!e.numVariants && e.numVariants > 0;
  let g = e.shouldShowNamePopout && !a;
  let f = !e.shouldHideDescription && h;
  let E = (f || g || m) && !e.shouldHideTooltip;
  let y = useMemo(() => e.isFigJam || e.isSlides || e.isCooper ? {
    "data-tooltip": e.isDragged || e.shouldHideTooltip ? void 0 : e.tooltipOverride ?? kH(e.item.name),
    "data-tooltip-type": e.isDragged || e.shouldHideTooltip ? void 0 : Ib.TEXT,
    "data-tooltip-timeout-delay": e.isDragged ? void 0 : 500,
    "data-tooltip-show-above": e.tooltipShownAbove
  } : _ ? {
    "data-tooltip-type": E ? Ib.SPECIAL : void 0,
    "data-tooltip": E ? _$$B : void 0,
    "data-tooltip-component-name": g ? e.tooltipOverride ?? kH(e.item.name) : void 0,
    "data-tooltip-file-name": e.fileName,
    "data-tooltip-component-description": f ? h : void 0,
    "data-tooltip-num-variants": m ? e.numVariants : void 0,
    "data-tooltip-show-right": !0,
    "data-tooltip-max-width": 240,
    "data-tooltip-interactive": !0,
    "data-tooltip-show-immediately": !!e.showTooltipImmediately || void 0,
    "data-tooltip-hide-immediately": !!e.showTooltipImmediately || void 0
  } : void 0, [e.isFigJam, e.isSlides, e.isCooper, e.isDragged, e.shouldHideTooltip, e.tooltipOverride, e.item.name, e.tooltipShownAbove, e.fileName, e.numVariants, e.showTooltipImmediately, _, E, g, f, h, m]);
  return jsx("div", {
    ref: t || o,
    className: `${r} ${e.className || ""}`,
    style: p,
    "data-testid": e.testId,
    ...y,
    children: jsx(_$$o, {
      eventListeners: ["onMouseUp"],
      children: e.children
    })
  });
}));
function ei(e) {
  let t = "whiteboard" === lg();
  let r = J(e.displayType);
  let i = null != e.cmsCollectionMappings;
  let a = cx(e.item);
  let {
    closeFlyout,
    isFlyoutOpen
  } = JA();
  let {
    onInsertableResourcePointerDown,
    dragState,
    insertAction
  } = _$$j({
    resource: e.item,
    isList: r,
    cmsCollectionMappings: e.cmsCollectionMappings,
    sourceForTracking: e.draggable?.sourceForTracking || "",
    sectionNameForTracking: e.draggable?.sectionNameForTracking,
    sectionDepth: e.draggable?.sectionDepth,
    clickToInsert_DEPRECATED: !1,
    afterSuccessfulInsert: e.draggable?.afterSuccessfulInsert,
    insertionCallback: e.draggable?.insertionCallback,
    dragPreviewPointerPosition: r || i ? _$$N.CENTERED : _$$N.RELATIVE,
    draggingThumbMaxDimensions: a ? void 0 : new Point((e.width || 0) - X, (e.height || 0) - X),
    sectionPosition: e.sectionPosition,
    recomputeCancelRectsOnPointerUp: isFlyoutOpen,
    onDragStart: () => {
      e.draggable?.onDragStart?.();
      closeFlyout();
    },
    onPointerUp: e.draggable?.onPointerUp,
    useSmartPositioning: e.useSmartPositioning,
    preloadThumbnail: !!e.ThumbnailOverride
  });
  let p = `componentThumb.${e.recordingNodePath}`;
  let _ = rf(e.buttonProps?.onContextMenu ? p : `${p}_UNUSED`, "contextmenu", t => {
    e.buttonProps?.onContextMenu?.(t);
  }, {
    recordMetadata: e => {
      let t = e.currentTarget.getBoundingClientRect();
      let r = new Point(t.left, t.top);
      let n = new Point(e.clientX, e.clientY).subtract(r);
      return {
        percentageMousePos: new Point(n.x / t.width, n.y / t.height)
      };
    },
    playbackMetadata: t => {
      let r = e.height || 0;
      let n = e.width || 0;
      return {
        currentTarget: {
          getBoundingClientRect: () => ({
            top: 0,
            left: 0,
            height: r,
            width: n
          })
        },
        clientX: 0 + t.percentageMousePos.x * n,
        clientY: 0 + t.percentageMousePos.y * r
      };
    }
  });
  let h = rf(p, "click", t => {
    if (e.buttonProps?.onItemClick?.(t, e.item), e.buttonProps?.clickToInsert) {
      let r = new PointerEvent(t.type, {
        ...t,
        view: window
      });
      insertAction({
        e: r,
        isClick: !0,
        dropPosition: _$$zR(void 0)
      }).then(() => e.draggable?.afterSuccessfulInsert?.(r));
    }
  });
  let m = (t || e.isSlides || e.isCooper) && dragState ? Vk : GR;
  return jsxs(Fragment, {
    children: [jsx(_$$n.div, {
      onPointerDown: t => {
        e.draggable && onInsertableResourcePointerDown(t);
      },
      style: {
        padding: e.itemPadding
      },
      className: _$$s.hFull.borderBox.$,
      "data-testid": p,
      children: e.buttonProps ? e.buttonProps ? jsx(_$$E, {
        className: m,
        htmlAttributes: {
          onContextMenu: _,
          onDoubleClick: t => {
            e.buttonProps?.onItemDoubleClick?.(t, e.item);
          },
          onFocus: e.buttonProps?.onFocus,
          onBlur: e.buttonProps?.onBlur
        },
        onClick: h,
        "aria-label": kH(e.item.name),
        children: jsx("div", {
          "aria-hidden": !0,
          children: e.children
        })
      }) : null : jsx("div", {
        className: m,
        children: e.children
      })
    }), jsx(_$$q, {
      dragState,
      isList: r
    })]
  });
}
function ea({
  displayType: e,
  item: t,
  isDragged: r,
  isFigJam: a,
  isSlides: s,
  isCooper: o,
  backgroundColor: l,
  shouldShowShadowOnHover: d,
  height: c = 120,
  width: u = 120,
  noBackground: _,
  style: h,
  alwaysShowBorder: m,
  thumbWrapperClassName: g,
  thumbPaddingGrid: f,
  ThumbnailOverride: E,
  noCenter: y
}) {
  let b;
  let T = useContext(uW);
  let I = DP();
  let S = c - c % 2;
  let v = u - u % 2;
  let x = J(e);
  b = x ? _ ? _$$v : Tq : _ || a ? Yc : `${wi} ${wi}`;
  let C = {
    width: 2 * v,
    height: 2 * S,
    padding: useMemo(() => a ? f ?? 0 : x ? X : f ?? X, [a, x, f]),
    ...h
  };
  y && (C.transform = "scale(0.5)", C.transformOrigin = "top left", C.display = "flex", C.alignItems = "flex-start", C.justifyContent = "center");
  _ || !l || a || (m || s || o || (C.boxShadow = pw(T, l, I)), C.background = _$$F.format(l));
  r && (x ? (C.width = void 0, C.height = void 0) : C.background = void 0);
  let w = useMemo(() => t.type === PW.RESPONSIVE_SET && "LIBRARY" === t.subscriptionStatus && t.fullPage ? NK : d ? _$$Ib : a || s || o ? FF : N4, [a, s, o, t, d]);
  return jsx("div", {
    className: Ol,
    style: r && x ? void 0 : {
      width: v,
      height: S
    },
    children: jsx("div", {
      className: p()(b, g, {
        [XK]: m
      }),
      style: C,
      "data-testid": `library-item-tile-thumb-${t.name}`,
      children: t.type === PW.VARIABLE_SET ? jsx(es, {
        variableSetID: t.node_id
      }) : E ? jsx(Fragment, {
        children: E
      }) : jsx(_$$M, {
        className: w,
        item: t,
        shouldGenerateLocalThumbnail: !0,
        draggable: !1,
        style: y ? {
          margin: "0",
          objectPosition: "top left",
          objectFit: "contain",
          maxHeight: "100%",
          maxWidth: "100%",
          height: "auto",
          alignSelf: "flex-start",
          paddingLeft: "12px"
        } : {}
      })
    })
  });
}
let es = memo(function ({
  variableSetID: e
}) {
  let t = d4(e => a3(e));
  let r = useMemo(() => {
    let r = new Set();
    for (let n of Object.values(t)) if (n.variableSetId === e && (r.add(n.resolvedType), r.size >= 3)) break;
    return [...r.values()];
  }, [t, e]);
  let s = (r.length - 1) / 2;
  return jsx("div", {
    className: bF,
    children: r.map((e, t) => jsx("div", {
      className: aC,
      style: {
        marginTop: (s - t) * 20
      },
      children: jsx(_$$i, {
        type: e,
        showTooltip: !1
      })
    }, e))
  });
});
function eo({
  isList: e,
  numVariants: t
}) {
  if (t <= 1) return null;
  let r = _$$t("design_systems.assets_panel.variant_count", {
    numVariants: t
  });
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: e ? hs : xC,
      "data-tooltip": r,
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip-show-above": !0,
      "data-tooltip-timeout-delay": 500,
      "data-tooltip-hide-immediately": !0,
      "aria-hidden": !0,
      children: t
    }), jsx(_$$E2, {
      children: r
    })]
  });
}
function el({
  width: e = 120,
  collectionName: t
}) {
  return jsx("div", {
    ...Ay.props(eu.cmsThumbWrapper, eu.thumbWrapperWidth(e)),
    "data-testid": `library-item-tile-thumb-${t}`,
    children: jsx(_$$e, {
      collectionName: t
    })
  });
}
function ed({
  item: e,
  width: t = 120
}) {
  let r = jl();
  return jsx("div", {
    ...Ay.props(eu.thumbWrapper, r === W7.Block && eu.thumbClampHeight, eu.thumbWrapperWidth(t)),
    "data-testid": `library-item-tile-thumb-${e.name}`,
    children: jsx(_$$M, {
      ...Ay.props(eu.thumb, r === W7.Block && eu.thumbClampHeight),
      item: e,
      shouldGenerateLocalThumbnail: !0,
      draggable: !1,
      loading: "eager"
    })
  });
}
let $$ec0 = 8;
let eu = {
  thumb: {
    maxWidth: "x193iq5w",
    maxHeight: "xmz0i5r",
    objectFit: "x8jj4xb",
    margin: "x1bpp3o7",
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    userSelect: "x87ps6o",
    $$css: !0
  },
  thumbWrapper: {
    borderRadius: "x19y5rnk",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    alignContent: "xc26acl",
    flexShrink: "x2lah0s",
    backgroundColor: "x1v8gsql",
    padding: "xe8ttls",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    minHeight: "x10a6mx8",
    maxHeight: "x1i69ec5",
    ":focus_boxShadow": "xcyo9kp",
    $$css: !0
  },
  cmsThumbWrapper: {
    padding: "xe8ttls",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    $$css: !0
  },
  thumbClampHeight: {
    minHeight: "x10a6mx8",
    maxHeight: "x1drivef",
    $$css: !0
  },
  thumbWrapperWidth: e => [{
    width: null == e ? null : "x1bl4301",
    $$css: !0
  }, {
    "--width": (e => "number" == typeof e ? e + "px" : null != e ? e : void 0)(e)
  }]
};
export const $A = $$ec0;
export const MT = $$er1;
export const lX = $$ee2;