import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { memo, useRef, useEffect, useContext, useCallback, useMemo, useState, useId } from "react";
import { wA, d4 } from "../vendor/514228";
import { _m } from "../vendor/891888";
import { debug, throwTypeError } from "../figma_app/465776";
import { assertNotNullish, isNullish } from "../figma_app/95419";
import { $n } from "../905/521428";
import { d as _$$d } from "../905/976845";
import { K as _$$K } from "../905/443068";
import { k as _$$k } from "../905/443820";
import { F as _$$F } from "../905/634016";
import { D as _$$D } from "../905/555681";
import { l as _$$l } from "../905/509505";
import { E as _$$E } from "../905/375716";
import { Z as _$$Z } from "../905/498136";
import { e as _$$e } from "../905/149844";
import { L as _$$L } from "../905/704296";
import { Pt4, Krs, glU } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { fn, sH } from "../905/871411";
import { getFeatureFlags } from "../905/601108";
import { md } from "../figma_app/27355";
import { sx } from "../905/449184";
import { R as _$$R } from "../905/103090";
import { Uz } from "../905/63728";
import { Pt } from "../figma_app/806412";
import { Point } from "../905/736624";
import { ms, c$ } from "../figma_app/236327";
import { M3, dP } from "../figma_app/119475";
import { Lp } from "../figma_app/563413";
import { t as _$$t, tx } from "../905/303541";
import { f as _$$f } from "../905/412913";
import { oB, j7 } from "../905/929976";
import { Uv, XE, u1, bS } from "../figma_app/91703";
import { Ce, to } from "../905/156213";
import { sw, rk } from "../figma_app/914957";
import { jD } from "../905/765855";
import { dG } from "../figma_app/753501";
import { EF, Oo, eE as _$$eE } from "../905/709171";
import { P$, Eo } from "../figma_app/80990";
import { b as _$$b } from "../905/217163";
import { Y5 } from "../figma_app/455680";
import { gl, E7 } from "../905/216495";
import { tS, q5 } from "../figma_app/516028";
import { bO, SS } from "../figma_app/936646";
import { QT } from "../figma_app/646357";
import { je } from "../figma_app/155728";
import { cX, Wv } from "../figma_app/633080";
import { Ib } from "../905/129884";
import { vL } from "../905/826900";
import { r6 } from "../905/542608";
import { T as _$$T } from "../figma_app/472024";
import { bf, GC, hg } from "../figma_app/635062";
import { m3, mY } from "../figma_app/915281";
import { Ao } from "../905/748636";
import { sO } from "../figma_app/21029";
import { TN } from "../figma_app/177697";
import { kj } from "../905/883812";
import { b as _$$b2 } from "../905/857767";
import { N2, vG } from "../905/213527";
import { G as _$$G, h as _$$h } from "../figma_app/257072";
import { _l, Kq, AH, V0, dG as _$$dG } from "../905/571648";
import { WH } from "../figma_app/836943";
import { o as _$$o } from "../905/821217";
import { g as _$$g } from "../905/496772";
import eh from "classnames";
import { s as _$$s } from "../cssbuilder/589278";
import { i as _$$i } from "../figma_app/85949";
import { fV } from "../figma_app/236178";
import { KP } from "../figma_app/12491";
import { kl } from "../905/275640";
import { Um } from "../905/848862";
import { sZ } from "../905/845253";
import { kH } from "../905/309735";
import { Oe } from "../figma_app/336853";
import { F as _$$F2 } from "../905/258517";
import { Sh } from "../figma_app/889655";
import { K0, YW } from "../figma_app/778125";
import { iL } from "../905/824449";
import { A as _$$A, h as _$$h2 } from "../905/226345";
import { Z as _$$Z2 } from "../905/248978";
import { zm, Se, x9, UU, XC, IZ, VK, D$, rP, C3, Wn, qV, me } from "../905/334362";
import { A as _$$A2 } from "../2854/821561";
import { A as _$$A3 } from "../2854/476909";
var em = eh;
let eD = memo(function ({
  dsStyle: e,
  recordingKey: t,
  fileIndex: r,
  hierarchyPathIndex: s,
  styleIndex: d,
  column: u,
  searchQuery: p,
  isSelected: h,
  initialFocusRef: m,
  isEditable: g = !0
}) {
  let f = Um();
  let E = wA();
  let {
    setKeyboardNavigationElement,
    keyboardNavigationItem,
    isFauxFocused
  } = M3({
    path: null === u ? [1, r, s, d] : [1, r, s, Math.floor(d / 6)],
    column: u,
    id: e.isLocal ? e.node_id : e.key
  });
  let v = useRef(null);
  let A = e => {
    v.current = e;
    setKeyboardNavigationElement(e);
  };
  let x = kl("numTextStyleOverrides");
  useEffect(() => {
    keyboardNavigationItem && m.current && h && !p && (window.requestAnimationFrame(() => {
      keyboardNavigationItem.fauxFocus();
    }), m.current = !1);
  }, [m, h, keyboardNavigationItem, p]);
  let {
    selectStyle,
    showStyleContextMenu,
    showStyleDetails
  } = assertNotNullish(useContext(_$$G), "Must be inside <StylePickerActionsContext>");
  let L = bf(e);
  let D = useCallback(t => {
    f && E(oB());
    t.stopPropagation();
    0 !== t.button || _$$i(t) || selectStyle(e);
  }, [e, selectStyle, f, E]);
  let M = useCallback(t => {
    showStyleContextMenu(e, {
      x: t.clientX,
      y: t.clientY
    });
  }, [e, showStyleContextMenu]);
  let F = useCallback(() => {
    let t = v.current?.getBoundingClientRect();
    t && showStyleDetails(e, t, "styleListDoubleClick");
  }, [e, showStyleDetails]);
  let j = useCallback(t => {
    t.stopPropagation();
    let r = v.current?.getBoundingClientRect();
    r && showStyleDetails(e, r, "styleListClick");
  }, [e, showStyleDetails]);
  let U = d4(Sh);
  let B = useCallback(t => {
    t.stopPropagation();
    debug(null != e.content_hash, "style does not have a hash");
    let r = e.isLocal ? e.node_id : Pt4.getStyleNodeId(e.key, e.content_hash);
    _$$F2.trackFromFullscreen("text_style_override_reverted", {
      node_ids: U
    });
    Krs.clearOverridesOverTextStyleInSelection(r);
  }, [e, U]);
  let G = useContext(_$$h);
  let H = useCallback(() => {
    !G && keyboardNavigationItem && keyboardNavigationItem.fauxFocus({
      preventScroll: !0
    });
  }, [G, keyboardNavigationItem]);
  let z = useCallback(() => {
    keyboardNavigationItem && keyboardNavigationItem.fauxBlur();
  }, [keyboardNavigationItem]);
  let K = useRef(null);
  let Y = K ? K.current : null;
  let $ = !!Y && Y.offsetWidth < Y.scrollWidth;
  let X = "TEXT" === e.style_type && void 0 !== x && (gl(x) || x > 0) && h;
  let q = h && !L ? zm : Se;
  let Z = X ? x9 : "";
  if (null === u) {
    let r = !!e.description || $;
    return getFeatureFlags().fpl_style_picker_combobox ? jsx(_$$o, {
      display: "contents",
      eventListeners: ["onMouseDown", "onPointerDown"],
      children: jsxs("div", {
        className: "x1jghuyi x78zum5 xc8icb0 x1n2onr6 xh8yej3 x1lg6u6 xwx8zwa",
        children: [jsxs(_$$F.Option, {
          className: "x6s0dn4 x9f619 x78zum5 x10w6t97 xb3r6kr xt970qd xp48ta0 xwn43p0 xuxw1ft xh8yej3 xexmubx x18bfitd",
          ref: v,
          value: e,
          "data-tooltip": r ? _$$Z2 : void 0,
          "data-tooltip-style-description": e.description,
          "data-tooltip-style-name": kH(e.name),
          "data-tooltip-type": Ib.SPECIAL,
          recordingKey: t,
          children: [jsx("div", {
            ref: K,
            className: UU,
            children: kH(e.name)
          }), "TEXT" === e.style_type && e.meta?.style_thumbnail?.type === "TEXT" && jsx("div", {
            className: XC,
            children: P$(e.meta?.style_thumbnail)
          }), X && jsx(K0, {
            className: zm,
            recordingKey: Pt(t, "clearTextStyleOverridesButton"),
            "data-tooltip": _$$t("design_systems.styles.clear_overrides_over_text_style"),
            "data-tooltip-type": Ib.TEXT,
            svg: _$$A3,
            onClick: B
          })]
        }), g && jsx("div", {
          className: "x6s0dn4 x78zum5 x3psx0u x5yr21d xl56j7k xugbqxq xctkrei x10l6tqk x3m8u43 x13vifvy x17dzmu4 x7r3dqx",
          children: jsx(_$$d, {
            recordingKey: Pt(t, "editStyleButton"),
            "data-tooltip": _$$t("design_systems.styles.edit_style"),
            "data-tooltip-type": Ib.TEXT,
            onClick: j,
            "aria-label": _$$t("design_systems.styles.edit_style"),
            "aria-expanded": L,
            children: jsx(_$$g, {})
          })
        })]
      })
    }) : jsxs(_$$A, {
      ref: A,
      dsStyle: e,
      isFauxFocused,
      isSelected: h,
      onClick: D,
      onContextMenu: M,
      onDoubleClick: F,
      onMouseEnter: H,
      onMouseLeave: z,
      recordingKey: t,
      shouldShowTooltip: r,
      children: [jsx("div", {
        ref: K,
        className: UU,
        children: kH(e.name)
      }), "TEXT" === e.style_type && e.meta?.style_thumbnail?.type === "TEXT" && jsx("div", {
        className: XC,
        children: P$(e.meta?.style_thumbnail)
      }), X && jsx(K0, {
        className: zm,
        recordingKey: Pt(t, "clearTextStyleOverridesButton"),
        "data-tooltip": _$$t("design_systems.styles.clear_overrides_over_text_style"),
        "data-tooltip-type": Ib.TEXT,
        svg: _$$A3,
        onClick: B,
        onMouseDown: e => e.stopPropagation()
      }), g && jsx(YW, {
        className: em()(q, Z),
        recordingKey: Pt(t, "editStyleButton"),
        "data-tooltip": _$$t("design_systems.styles.edit_style"),
        "data-tooltip-type": Ib.TEXT,
        svg: _$$A2,
        selected: L,
        onClick: j,
        onMouseDown: e => e.stopPropagation()
      })]
    });
  }
  return jsx(_$$h2, {
    ref: A,
    dsStyle: e,
    isFauxFocused,
    isSelected: h,
    onClick: D,
    onContextMenu: M,
    onDoubleClick: F,
    onMouseEnter: H,
    onMouseLeave: z,
    recordingKey: t,
    size: iL.Large
  });
});
function ek({
  style: e,
  data: {
    stylePickerListLayout: t,
    searchQuery: r,
    recordingKey: i,
    selectedStyleKey: a,
    items: s,
    initialFocusRef: l,
    isEditable: d
  },
  index: c
}) {
  let u = s[c];
  let p = sZ();
  let _ = Oe(p);
  let h = fV(u?.type === _$$b2.LibraryName ? u.libraryKey : void 0);
  if (!u) return null;
  switch (u.type) {
    case _$$b2.LibraryName:
      {
        let t = _ && h;
        return jsxs("div", {
          className: em()(IZ, t ? VK : void 0),
          style: _l(e, s, c),
          children: [u.name, t && jsx("div", {
            className: _$$s.inlineBlock.alignTop.pl4.$,
            children: jsx(KP, {
              libraryKey: u.libraryKey
            })
          })]
        });
      }
    case _$$b2.HierarchyPathName:
      return jsx("div", {
        className: D$,
        style: _l(e, s, c),
        children: u.name
      });
    case _$$b2.SlideThemeName:
      return jsxs("div", {
        className: rP,
        style: _l(e, s, c),
        children: [jsx("div", {
          className: C3,
          children: u.name
        }), u.secondaryText && jsx("div", {
          className: Wn,
          children: u.secondaryText
        })]
      });
    case _$$b2.StylesRow:
      return jsx("div", {
        className: t ? void 0 : qV,
        style: _l(e, s, c),
        children: u.styles.map((e, s) => {
          let o = !!a && a === e.key;
          let c = u.rowIndex * u.rowSize + s;
          let p = `section.${e.library_key}`;
          return jsx(m3, {
            dsStyle: e,
            additionalClassName: _$$s.flex.wFull.$,
            children: jsx(eD, {
              column: t ? null : c % u.rowSize,
              dsStyle: e,
              fileIndex: u.fileIndex,
              hierarchyPathIndex: u.hierarchyPathIndex,
              initialFocusRef: l,
              isEditable: d,
              isSelected: o,
              recordingKey: Pt(i, "styleGrid", e.isLocal ? "localStyleSection" : p, e.name),
              searchQuery: r,
              styleIndex: c
            })
          }, c);
        })
      });
    case _$$b2.Separator:
      return jsx("div", {
        className: _$$s.h16.flex.itemsCenter.$,
        style: _l(e, s, c),
        children: getFeatureFlags().fpl_style_picker_combobox ? jsx("hr", {
          "aria-hidden": !0,
          className: "xamitd3 xbpqucl x1gs6z28 xjm9jq1 xh8yej3"
        }) : jsx("div", {
          className: me
        })
      });
    default:
      throwTypeError(u);
  }
}
let eM = _$$f();
export function $$eF1({
  picker: e,
  recordingKey: t,
  onApplyStyle: r,
  initialPosition: s,
  minBottomMargin: o,
  hideCreateStyleButton: d,
  onCreateStyle: c,
  styleType: u,
  inheritStyleKey: p,
  inheritStyleID: h,
  stylePickerListLayout: m = !1,
  onToggleListLayout: g,
  overscanCount: f = 5,
  hideBrowseLibraries: E = !1,
  hideLocalStyles: y = !1,
  customPickerTitle: b = ""
}) {
  let T = wA();
  let I = d4(e => e.modalShown);
  let S = GC(u);
  let v = useMemo(() => !!I && I.type === cX, [I]);
  let A = useRef(null);
  let x = useCallback(() => {
    A.current?.scrollTo(0);
  }, [A]);
  hg(u);
  let N = WH(p, h, u)?.key ?? null;
  let [w, O] = useState("");
  let R = !!w;
  let L = !!R || m;
  let D = je();
  let k = Kq();
  let U = AH(N, E7(h));
  let B = useRef(U);
  let {
    status,
    items,
    height,
    initialOffset
  } = V0(u, N, B.current, L, w, y ? [] : void 0);
  let K = "loading" === status;
  let J = useMemo(() => items.some(e => "STYLES_ROW" === e.type), [items]);
  let Z = !K && !J;
  let er = R && !K && !J;
  let en = _$$F.useCombobox({
    expanded: !0,
    onSelect: e => {
      e && (r(e, !0), eo());
    }
  });
  let ei = useRef(null);
  let ea = useCallback(e => {
    ei.current = e;
  }, []);
  useEffect(() => {
    w && (x(), window.requestAnimationFrame(() => {
      ei.current?.getItemBelow()?.fauxFocus();
    }));
  }, [x, w]);
  let es = useCallback(() => {
    ei.current?.focus();
    g?.();
  }, [g]);
  let eo = useCallback(() => {
    T(Uv());
    T(sw());
    T(XE());
  }, [T]);
  let el = useCallback(() => {
    v ? T(Ce()) : T(to({
      type: _$$T,
      data: {
        initialTab: Wv.LIBRARIES,
        entrypoint: r6.STYLES_MODAL_TEAM_LIBRARY_BUTTON
      }
    }));
  }, [T, v]);
  let ed = bO();
  let ep = useMemo(() => U?.status !== "loaded" ? null : eM(U.data), [U]);
  let e_ = (() => {
    if (!N || !U || isNullish(ep)) return !1;
    let e = ed[ep];
    return e && "loaded" !== e.status;
  })();
  let eh = useRef(!0);
  useEffect(() => {
    w || eh.current || null == initialOffset || (A.current?.scrollTo(initialOffset), eh.current = !0);
  }, [initialOffset, w]);
  return jsxs(eG, {
    customPickerTitle: b,
    hideCreateStyleButton: d,
    initialPosition: s,
    isLoading: K,
    isSearching: R,
    minBottomMargin: o,
    onApplyStyle: r,
    onBrowseLibrariesButtonClick: el,
    onCreateStyle: c,
    onToggleListLayout: es,
    picker: e,
    recordingKey: t,
    showLibraryIcon: !E && (!Z || k),
    stylePickerListLayout: L,
    styleType: u,
    children: [jsx($$eV2, {
      query: w,
      inputProps: en.getInputProps({
        value: w,
        onChange: O,
        recordingKey: Pt(t, "styleSearchBar")
      }),
      setQuery: O,
      setKeyboardNavigationItem: ea,
      scrollToTop: x,
      recordingKey: Pt(t, "styleSearchBar"),
      onClose: eo
    }), "loaded" === D.status && !e_ && jsx($$ej4, {
      recordingKey: t,
      children: jsx($$eB3, {
        height,
        initialFocusRef: eh,
        initialOffset,
        items,
        listProps: en.getListProps(),
        listRef: A,
        mainStyleKey: N,
        overscanCount: f,
        recordingKey: t,
        searchQuery: w,
        stylePickerListLayout: L
      })
    }), jsx(eU, {
      recordingKey: t,
      isEmpty: Z || er,
      displayText: er ? _$$t("design_systems.styles.no_styles_match") : _$$t("design_systems.styles.no_specified_style", {
        kind: QT(u).toLowerCase()
      }),
      onBrowseLibrariesButtonClick: R || k ? void 0 : el,
      hideBrowseLibraries: E
    }), S && jsx(eW, {
      dsStyle: S.data.style,
      position: S.data.position
    })]
  });
}
export function $$ej4({
  recordingKey: e,
  children: t
}) {
  let r = useCallback(e => {
    [Uz.ENTER, Uz.UP_ARROW, Uz.DOWN_ARROW, Uz.LEFT_ARROW, Uz.RIGHT_ARROW].includes(e.event.keyCode) && e.accept();
  }, []);
  return jsx(vL, {
    name: e || "",
    handleKeyDown: r,
    focusOnMount: !0,
    style: {
      borderRadius: " 0 0 var(--radius-large) var(--radius-large)",
      overflow: "hidden"
    },
    children: t
  });
}
function eU({
  recordingKey: e,
  isEmpty: t,
  displayText: r,
  onBrowseLibrariesButtonClick: i,
  hideBrowseLibraries: a
}) {
  return jsx(Fragment, {
    children: t && jsxs("div", {
      className: "style_picker--emptyStateContainer--wOVrQ",
      children: [jsx("div", {
        className: "style_picker--emptyStateMessage--Z11Lr text--fontPos11--2LvXf text--_fontBase--QdLsd",
        children: r
      }), i && !a && jsx("span", {
        className: "style_picker--browseLibrariesButton--KtnxN",
        children: jsx($n, {
          onClick: i,
          recordingKey: Pt(e, "browseLibraries"),
          variant: "secondary",
          iconPrefix: jsx(_$$l, {}),
          "aria-label": _$$t("design_systems.styles.buttons.browse"),
          children: tx("design_systems.styles.buttons.browse")
        })
      })]
    })
  });
}
export function $$eB3({
  height: e,
  initialFocusRef: t,
  initialOffset: r,
  isEditable: i,
  items: a,
  listRef: o,
  listProps: l,
  mainStyleKey: d,
  overscanCount: c,
  recordingKey: u,
  searchQuery: p,
  stylePickerListLayout: h,
  width: m
}) {
  let g = jsx(_m, {
    ref: o,
    height: e,
    initialScrollOffset: r,
    itemCount: a.length,
    itemData: {
      stylePickerListLayout: h,
      searchQuery: p,
      recordingKey: u,
      selectedStyleKey: d,
      items: a,
      initialFocusRef: t,
      isEditable: i
    },
    itemKey: (e, {
      stylePickerListLayout: t,
      items: r
    }) => {
      let n = r[e];
      switch (n.type) {
        case _$$b2.LibraryName:
          return n.fileKey;
        case _$$b2.HierarchyPathName:
          return `${n.fileKey}/${n.name}`;
        case _$$b2.SlideThemeName:
          return `${n.fileKey}/${n.themeId}`;
        case _$$b2.StylesRow:
          return `${t ? "list" : "grid"}-${n.styles.map(e => e.key).join("/")}`;
        case _$$b2.Separator:
          return `separator-${e}`;
      }
    },
    itemSize: e => kj(a, e),
    overscanCount: c,
    style: {
      overflow: "hidden auto",
      touchAction: "pan-y"
    },
    width: m || N2,
    children: ek
  }, h ? "list" : "grid");
  return getFeatureFlags().fpl_style_picker_combobox ? jsx(_$$F.List, {
    ...l,
    children: g
  }) : g;
}
function eG({
  recordingKey: e,
  picker: t,
  styleType: r,
  onApplyStyle: s,
  isSearching: l,
  isLoading: d,
  showLibraryIcon: _,
  onBrowseLibrariesButtonClick: h,
  stylePickerListLayout: S,
  onToggleListLayout: N,
  hideCreateStyleButton: O,
  onCreateStyle: L,
  initialPosition: D,
  minBottomMargin: F,
  customPickerTitle: H,
  children: W
}) {
  let Y = wA();
  let X = tS();
  let Z = useMemo(() => D || (t ? new Point(t.initialX, t.initialY) : new Point(0, 0)), [D, t]);
  let [Q, ee] = useState(!1);
  let et = useCallback(() => ee(!0), []);
  let es = useCallback(() => ee(!1), []);
  let {
    dropdownShown,
    modalShown,
    stylePickerShown,
    stylePreviewShown
  } = _$$R(e => ({
    dropdownShown: e.dropdownShown,
    modalShown: e.modalShown,
    stylePickerShown: e.stylePickerShown,
    stylePreviewShown: e.stylePreviewShown
  }));
  let e_ = useRef(null);
  let eh = e_.current?.getEl()?.getBoundingClientRect();
  let em = useMemo(() => !!modalShown && modalShown.type === cX, [modalShown]);
  let eg = useMemo(() => {
    let e = () => Y(jD());
    let r = () => Y(XE());
    let n = () => Y(Uv());
    let i = () => Y(sw());
    return {
      selectStyle(r) {
        s(r, l);
        e();
        i();
        t.modal && n();
      },
      showStyleDetails(e, t, n) {
        if (stylePreviewShown.isShown && !stylePreviewShown.isCreating && stylePreviewShown.style?.node_id === e.node_id && EF(stylePreviewShown.style, e)) i();else {
          debug(null != e.content_hash, "style does not have a hash");
          let i = e.isLocal ? e.node_id : Pt4.getStyleNodeId(e.key, e.content_hash);
          fn(sH(i)) ? glU.selectStyleByGuid(i) : Eo.getCanvas(e).then(e => {
            glU.selectExternalStyle(e);
          });
          Y(rk({
            style: e,
            rowTop: t.y,
            rowLeft: t.x
          }));
          r();
          sx("Style Inspected", {
            styleType: e.style_type,
            from: n
          });
        }
      },
      showStyleContextMenu(e, t) {
        Y(j7({
          type: vG,
          data: {
            style: e,
            position: t
          }
        }));
      },
      deleteStyle(e) {
        Oo(e, X) && (l7.user("delete-style", () => glU.deleteNode(e.node_id)), Y5.triggerAction("commit"), sx("Style Deleted", {
          styleType: e.style_type,
          from: "stylePickerContextMenu"
        }));
      },
      stylePreviewShown
    };
  }, [Y, s, l, X, stylePreviewShown, t.modal]);
  let ef = useCallback(() => {
    Y(Uv());
    Y(sw());
    Y(XE());
  }, [Y]);
  let eE = useCallback(e => {
    e.stopPropagation();
    dropdownShown && Y(oB());
  }, [Y, dropdownShown]);
  let ey = useCallback(() => {
    t.modal && Y(u1({
      ...t,
      modal: !1
    }));
    stylePickerShown.isShown && stylePickerShown.modal && Y(bS({
      ...stylePickerShown,
      modal: !1
    }));
  }, [Y, t, stylePickerShown]);
  let eb = sO();
  let eT = md(TN).length > 0;
  return jsx(dP, {
    recordingKey: e,
    onKeyDown: et,
    onMouseMove: es,
    children: jsx(_$$h.Provider, {
      value: Q,
      children: jsx(_$$G.Provider, {
        value: eg,
        children: jsx(mY, {
          children: jsxs(Ao, {
            ref: e_,
            initialPosition: Z,
            initialWidth: N2,
            isCloseHidden: !0,
            minBottomMargin: F,
            onClick: eE,
            onClose: ef,
            onDragEnd: ey,
            recordingKey: Pt(e, "draggableModal"),
            title: jsxs("div", {
              className: "style_picker--pickerTitleRow--Eoe-0",
              children: [jsx("div", {
                className: "style_picker--pickerTitle--xydlB header_modal--headerModalTitle--32hFx",
                children: H || QT(r)
              }), _ && jsx(_$$d, {
                onClick: h,
                "aria-expanded": em,
                htmlAttributes: {
                  "data-tooltip-type": Ib.TEXT,
                  "data-tooltip": _$$t("design_systems.styles.tooltips.library")
                },
                children: jsx(_$$l, {}),
                "aria-label": _$$t("design_systems.styles.tooltips.library")
              }), ("FILL" === r || "STROKE" === r) && N && jsx(_$$K, {
                "aria-label": S ? _$$t("design_systems.styles.tooltips.show_as_grid") : _$$t("design_systems.styles.tooltips.show_as_list"),
                recordingKey: Pt(e, "toggleStylePickerListLayout"),
                onClick: N,
                disabled: l,
                htmlAttributes: {
                  "data-tooltip": S ? _$$t("design_systems.styles.tooltips.show_as_grid") : _$$t("design_systems.styles.tooltips.show_as_list"),
                  "data-tooltip-type": Ib.TEXT
                },
                children: S ? jsx(_$$E, {}) : jsx(_$$Z, {})
              }), !O && jsx("span", {
                className: "style_picker--createStyleButton--UcGo9",
                children: jsx(_$$K, {
                  "aria-label": _$$t("design_systems.styles.tooltips.create"),
                  recordingKey: Pt(e, "addStyleButton"),
                  disabled: !L || eb && !eT,
                  onClick: () => L?.(eh?.left ?? Z.x, eh?.top ?? Z.y),
                  htmlAttributes: {
                    onMouseDown: dG,
                    "data-tooltip": _$$t("design_systems.styles.tooltips.create"),
                    "data-tooltip-type": Ib.TEXT
                  },
                  children: jsx(_$$e, {})
                })
              }), jsx(_$$K, {
                "aria-label": _$$t("common.close"),
                onClick: () => ef?.(),
                children: jsx(_$$L, {})
              })]
            }),
            children: [W, d && jsx("div", {
              className: "style_picker--loadingSpinner--JIN5X",
              children: jsx(_$$k, {})
            })]
          })
        })
      })
    })
  });
}
export function $$eV2({
  query: e,
  inputProps: t,
  setQuery: r,
  setKeyboardNavigationItem: a,
  scrollToTop: s,
  recordingKey: o,
  onClose: l
}) {
  let {
    setKeyboardNavigationElement,
    keyboardNavigationItem
  } = M3({
    id: "search",
    path: [0],
    onFauxFocus: s
  });
  useEffect(() => {
    keyboardNavigationItem && a(keyboardNavigationItem);
  }, [keyboardNavigationItem, a]);
  let u = useId();
  return getFeatureFlags().fpl_style_picker_combobox ? jsx("div", {
    className: "xso031l x1q0q8m5 xertd99 xdfz2fp",
    children: jsx(_$$D, {
      ...t,
      id: u,
      autoFocus: !0,
      placeholder: _$$t("design_systems.publishing_modal.search_placeholder"),
      size: "lg",
      variant: "borderless"
    })
  }) : jsx(Lp, {
    ref: e => {
      setKeyboardNavigationElement(e?.searchInput ?? null);
    },
    className: "style_picker--search--2I-82",
    clearSearch: () => r(""),
    focusOnMount: !0,
    isKeyDownHandled: e => (e.keyCode === Uz.ESCAPE && l(), !0),
    onChange: r,
    query: e,
    recordingKey: o
  });
}
let eH = ms;
let ez = c$;
function eW({
  dsStyle: e,
  position: t
}) {
  let {
    showStyleDetails,
    deleteStyle
  } = assertNotNullish(useContext(_$$G), "Must be inside <StylePickerActionsContext>");
  let s = q5();
  let o = _$$eE(e, s);
  let d = _$$b({
    libraryKey: e.library_key,
    nodeId: e.node_id
  });
  let c = useMemo(() => d.data?.type === "team", [d.data]);
  let u = useMemo(() => {
    if (d.data?.type === "team") return d.data.link;
  }, [d.data]);
  let p = [];
  o && (p.push(jsx(ez, {
    onClick: () => showStyleDetails(e, t, "stylePickerContextMenu"),
    children: tx("design_systems.styles.edit_style")
  })), p.push(jsx(ez, {
    onClick: () => deleteStyle(e),
    children: tx("design_systems.styles.delete_styles", {
      numStyles: 1
    })
  })));
  !o && c && u && p.push(jsx(ez, {
    href: u,
    target: "_blank",
    children: tx("design_systems.styles.go_to_style_definition")
  }));
  return p.length > 0 ? jsxs(eH, {
    className: "style_picker--contextMenu--3hOCZ",
    style: {
      top: t.y,
      left: t.x
    },
    children: [...p]
  }) : null;
}
let eK = _$$f();
export function $$eY0({
  inheritStyleKey: e,
  inheritStyleID: t,
  styleType: r,
  selectedLibraries: a
}) {
  let s = WH(e, t, r)?.key ?? null;
  let o = AH(s, E7(t));
  let l = useRef(o);
  let {
    libraries
  } = _$$dG(r, l.current);
  let c = a && a.length > 0 ? a : libraries;
  return jsxs(Fragment, {
    children: [c.map(e => jsx(SS, {
      fileKey: e.fileKey,
      libraryKey: e.libraryKey
    }, e.fileKey)), jsx(SS, {
      fileKey: l.current?.status === "loaded" && eK(l.current.data) || null,
      libraryKey: l.current?.data?.library_key ?? null
    })]
  });
}
export const MM = $$eY0;
export const UP = $$eF1;
export const p = $$eV2;
export const xn = $$eB3;
export const vo = $$ej4;