import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useCallback, useEffect, useRef, useMemo, useContext } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { noop, debug } from "../figma_app/465776";
import { debounce } from "../905/915765";
import { y1 } from "../figma_app/492908";
import { n3, IA } from "../905/859698";
import { glU, m1T, NLJ } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { xx } from "../figma_app/815945";
import { localStorageRef } from "../905/657224";
import { sx } from "../905/449184";
import { ZC } from "../figma_app/39751";
import { Pt, rf } from "../figma_app/806412";
import { _f } from "../905/760682";
import { nl } from "../figma_app/257275";
import { k as _$$k } from "../905/582200";
import { t as _$$t, tx } from "../905/303541";
import { oB, j7 } from "../905/929976";
import { XE } from "../figma_app/91703";
import { Bn, ay } from "../905/879323";
import { GT } from "../905/711212";
import { Zs, sw, rk, YG } from "../figma_app/914957";
import { dG, ft } from "../figma_app/753501";
import { Y5 } from "../figma_app/455680";
import { p8 } from "../figma_app/722362";
import { q5 } from "../figma_app/516028";
import { QT, XV, og, Kw, LX } from "../figma_app/646357";
import { kH, In, ke } from "../905/309735";
import { i4, A7 } from "../9314/278494";
import { PW } from "../figma_app/633080";
import { vL } from "../905/826900";
import { e as _$$e, q as _$$q } from "../figma_app/905311";
import { Bs } from "../figma_app/229710";
import { ks, $4, fI, K0, Zk } from "../figma_app/626177";
import { E as _$$E } from "../905/632989";
import { K as _$$K } from "../905/443068";
import { k as _$$k2 } from "../905/44647";
import { O as _$$O } from "../905/969533";
import { x as _$$x } from "../905/587214";
import { Zk as _$$Zk } from "../figma_app/276332";
import { Ib } from "../905/129884";
import { useHandleChangeEvent, generateRecordingKey, useHandleKeyboardEvent, useHandleMouseEvent } from "../figma_app/878298";
import q from "classnames";
import { Uz, Fo } from "../905/63728";
import { jNX, dGl, uj0 } from "../figma_app/27776";
import { d as _$$d } from "../905/976845";
import { A as _$$A } from "../905/891805";
import { parsePxInt } from "../figma_app/783094";
import { EF } from "../905/709171";
import { P$ } from "../figma_app/80990";
import { zi } from "../905/824449";
import { Z as _$$Z } from "../905/248978";
import { ms, c$, wv } from "../figma_app/236327";
import { Um } from "../905/848862";
import { QA, Ug, lM, l0, Pc, mx, g5, Md, VB, t_, dm, j3, KU, a2, Nr, h$, rM } from "../figma_app/463500";
import { b as _$$b, bL, mc, q7, Q$ } from "../figma_app/860955";
import { e as _$$e2 } from "../905/149844";
import { e as _$$e3 } from "../905/678389";
import { G as _$$G } from "../905/117393";
import { E as _$$E2 } from "../905/375716";
import { n as _$$n } from "../905/317686";
import { getFeatureFlags } from "../905/601108";
import { Nu } from "../figma_app/23780";
import { Cf } from "../905/504727";
import { lk } from "../905/182453";
import { x as _$$x2 } from "../905/346809";
var H = q;
let G = "styles--contextMenu--C-hVT";
let Z = "styles--caret--DZmzh";
let $$Q = "styles--rowSelectedExpanded--MGvUV";
let J = "styles--panelHeaderRow--Kxqgo styles--styleTypeSectionRow--wVTIO";
let ee = "styles--panelHeaderRowFaded--pfgKz styles--panelHeaderRow--Kxqgo styles--styleTypeSectionRow--wVTIO draggable_list--panelHeaderRowFaded--kETRR";
let et = "styles--panelTitleText--v7gXm draggable_list--panelTitleText--SwKez";
function el({
  childLeft: e,
  childRight: t,
  deleteSelectedItems: l,
  forceShowHoverBorder: o,
  hideStylePreview: r,
  index: a,
  inspectStyleSelected: i,
  isDragging: d,
  isEditable: c,
  isRenaming: u,
  isCollapsed: y = !0,
  isLastChildOfSelection: m = !1,
  isFirstChildOfSelection: p = !1,
  isFolder: x,
  isFocused: f,
  level: g,
  name: h,
  nameRef: w,
  onContextMenu: S,
  onFocus: b,
  onBlur: k,
  onCreateFolder: C,
  onDoubleClick: E,
  onHoverChange: j,
  onMouseDown: v,
  onMouseMove: T,
  recordingKey: R,
  rowRef: I,
  secondaryName: L,
  selected: N,
  selectedSecondary: D,
  stopRenamingItem: B,
  tooltipData: M
}) {
  let [K, F] = useState(h);
  let [O, $] = useState(!1);
  let U = useCallback(e => {
    e?.select();
  }, []);
  useEffect(() => {
    F(h);
  }, [h]);
  let Y = useCallback(e => {
    "" === e.trim() ? (B(a, h), F(h)) : B(a, e);
  }, [a, h, B]);
  let z = useHandleChangeEvent(generateRecordingKey(R, "text-input"), "change", useCallback(e => {
    F(e.currentTarget.value);
  }, [F]));
  let q = useHandleKeyboardEvent(generateRecordingKey(R, "text-input"), "keydown", e => {
    e.keyCode === Uz.ESCAPE ? (B(a, h), F(h)) : e.keyCode === Uz.ENTER && Y(e.currentTarget.value);
  }, {
    recordMetadata: e => ({
      inputValue: e.currentTarget.value
    }),
    playbackMetadata: e => ({
      currentTarget: {
        value: e.inputValue
      }
    })
  });
  let G = useHandleKeyboardEvent(R, "keydown", e => {
    c && !u && (e.keyCode === Uz.BACKSPACE || e.keyCode === Uz.DELETE) ? l() : c && !u && e.keyCode === Uz.G && Fo(e) ? (C(), e.preventDefault()) : !u && "Tab" !== e.key && e.nativeEvent && Y5.forwardKeyboardEvent(e.nativeEvent);
  });
  let Z = useCallback(() => {
    Y(K);
  }, [Y, K]);
  let J = useHandleMouseEvent(R, "contextmenu", e => {
    S(e);
  });
  let ee = useHandleMouseEvent(R, "mousemove", e => {
    T(e);
  }, {
    recordMetadata: e => ({
      bounds: e.currentTarget.getBoundingClientRect(),
      pageX: e.pageX,
      pageY: e.pageY
    }),
    playbackMetadata: e => ({
      currentTarget: {
        getBoundingClientRect: () => e.bounds
      },
      pageX: e.pageX,
      pageY: e.pageY
    })
  });
  let et = useHandleMouseEvent(R, "mousedown", e => {
    v(e);
    r();
  });
  let el = useHandleMouseEvent(R, "mouseenter", useCallback(() => {
    $(!0);
    j?.(!0);
  }, [$, j]));
  let en = useCallback(() => {
    $(!1);
    j?.(!1);
  }, [$, j]);
  let es = useHandleMouseEvent(R, "dblclick", useCallback(e => {
    E(e);
  }, [E]));
  let eo = Math.min((g - 1) * 3, 18);
  let er = jNX - 4 - eo;
  let ea = (O || f) && !u;
  let ei = N || D;
  let ed = H()({
    [$$Q]: !y && ei,
    "styles--folderSecondarySelected--SL0JY": D || N && !p
  });
  let ec = H()({
    "styles--rowSelectedSecondaryLightBlue--S-zy- draggable_list--rowSelectedSecondary--yOI1g raw_components--rowSelectedSecondary---U7Us raw_components--rowSelected--M2Eip": ei,
    [$$Q]: !m && ei
  });
  let eu = H()("styles--rowWithBorder--bphZ-", {
    [ed]: x,
    [ec]: !x,
    "styles--rowWithHover--RWNMH": !ei && (o || O && !d)
  });
  let ey = jsx("div", {
    className: u ? "styles--rowContentsRenaming--oDTtO styles--rowContents--37JBy" : "styles--rowContents--37JBy",
    style: {
      width: "100%"
    },
    children: u ? jsx(ks, {
      autoCapitalize: "off",
      autoCorrect: "off",
      autoFocus: !0,
      className: "styles--input--LbjR0",
      innerRef: U,
      onBlur: Z,
      onChange: z,
      onKeyDown: q,
      spellCheck: !1,
      value: K
    }) : jsxs(Fragment, {
      children: [jsx("div", {
        className: "styles--name--KWZ8d ellipsis--ellipsis--Tjyfa",
        ref: w,
        ...M,
        children: h
      }), L && jsx("div", {
        className: "styles--textStyle--DiUv4",
        children: L
      })]
    })
  }, h);
  return jsxs(_$$e, {
    ref: I,
    className: eu,
    dragging: d,
    hideGrabber: !0,
    onBlur: k,
    onContextMenu: J,
    onDoubleClick: es,
    onFocus: b,
    onKeyDown: G,
    onMouseDown: et,
    onMouseEnter: el,
    onMouseLeave: en,
    onMouseMove: ee,
    selected: N,
    selectedSecondary: !1,
    tabIndex: 0,
    children: [eo > 0 && jsx("span", {
      style: {
        gridColumnEnd: `span ${eo}`
      }
    }), jsxs("div", {
      className: "styles--childLeftContainer--Hu61K",
      style: {
        gridColumnEnd: `span ${ea || i ? er - 7 : er}`
      },
      children: [e, ey]
    }), t]
  });
}
function en({
  deleteSelectedItems: e,
  folder: t,
  folderNameToNestUnder: l,
  hideStylePreview: r,
  index: a,
  isCollapsed: i,
  isDragging: d,
  isEditable: c,
  isRenaming: u,
  isTemporarilyExpanded: y,
  isFirstChildOfSelection: m,
  level: p,
  onContextMenu: x,
  onCreateFolder: g,
  onMouseDown: h,
  onMouseMove: w,
  onRenameItem: b,
  recordingKey: k,
  selected: C,
  selectedSecondary: E,
  stopRenamingItem: v,
  temporarilyExpandFolder: _,
  toggleFolder: T
}) {
  let R = useDispatch();
  let [I, N] = useState(!1);
  let D = useRef(null);
  let B = useRef(null);
  let A = I && !u && c;
  let M = useCallback(() => {
    T(!i);
  }, [i, T]);
  let W = useCallback(e => {
    e.target !== B.current && t.styleTypeSection && b(t.name, !1, t.styleTypeSection);
  }, [t.name, t.styleTypeSection, b]);
  useEffect(() => {
    if (I && d && i) {
      let e = setTimeout(() => {
        _(t.name);
      }, 1e3);
      return () => clearTimeout(e);
    }
  }, [I, d, i, _, t]);
  let q = useCallback(() => {
    let e = _$$Zk(t.styleTypeSection);
    let l = D.current?.getBoundingClientRect();
    e && l && R(Zs({
      rowLeft: l.left,
      rowTop: l.top,
      styleType: t.styleTypeSection,
      styleNameInputPrefix: `${t.name}/`,
      inheritStyleKeyField: e
    }));
  }, [D, t.name, t.styleTypeSection, R]);
  return jsx(el, {
    childLeft: jsx(_$$E, {
      onClick: M,
      className: "styles--caretContainer--4-dqw",
      ref: B,
      children: i && !y ? jsx(_$$k2, {
        className: Z
      }) : jsx(_$$O, {
        className: Z
      })
    }),
    childRight: A && jsx($4, {
      children: jsx(_$$K, {
        recordingKey: Pt(k, "addButton"),
        "aria-label": _$$t("design_systems.styles.tooltips.create"),
        onClick: q,
        htmlAttributes: {
          "data-tooltip-type": Ib.TEXT,
          "data-tooltip": _$$t("design_systems.styles.tooltips.create")
        },
        children: jsx(_$$x, {})
      })
    }),
    deleteSelectedItems: e,
    forceShowHoverBorder: l === t.name,
    hideStylePreview: r,
    index: a,
    isCollapsed: i,
    isDragging: d,
    isEditable: c,
    isFirstChildOfSelection: m,
    isFolder: !0,
    isRenaming: u,
    level: p,
    name: kH(t.name),
    onContextMenu: x,
    onCreateFolder: g,
    onDoubleClick: W,
    onHoverChange: N,
    onMouseDown: h,
    onMouseMove: w,
    onRenameItem: b,
    recordingKey: k,
    rowRef: D,
    selected: C,
    selectedSecondary: E,
    stopRenamingItem: v
  });
}
function eu({
  deleteSelectedItems: e,
  hideStylePreview: t,
  index: l,
  isDragging: r,
  isEditable: a,
  isRenaming: i,
  isLastChildOfSelection: d,
  level: c,
  onContextMenu: u,
  onCreateFolder: y,
  onInspectStyle: m,
  onMouseDown: p,
  onMouseMove: x,
  onRenameItem: g,
  recordingKey: h,
  selected: w,
  selectedSecondary: b,
  stopRenamingItem: C,
  dsStyle: E,
  stylePreviewShown: _,
  updateContextMenuStyleRef: T,
  updateSelection: R,
  updateFocusRowRef: I
}) {
  let [N, D] = useState(!1);
  let [B, A] = useState(!1);
  let M = useDispatch();
  let K = useRef(null);
  let F = useRef(null);
  let O = useCallback(() => {
    A(!0);
  }, []);
  let $ = useCallback(e => {
    e.currentTarget.contains(e.relatedTarget) || A(!1);
  }, []);
  let U = useCallback(() => {
    a && g(E.node_id, !0, E.style_type);
  }, [g, E.node_id, E.style_type, a]);
  let Y = _.isShown && !_.isCreating && _.style.node_id === E.node_id && EF(_.style, E);
  let W = (N || B) && !i || Y;
  let q = useCallback(function () {
    let e = F.current;
    if (e) {
      let t = e.getBoundingClientRect();
      Y ? M(sw()) : (M(rk({
        style: E,
        rowTop: t.top,
        rowLeft: t.left
      })), m(E), R({
        type: E.style_type,
        folderNames: new Set(),
        styleIds: new Set(E.node_id)
      }));
    }
    M(XE());
  }, [M, m, R, E, Y]);
  let H = useCallback(e => {
    (2 === e.button || e.ctrlKey) && T(F.current);
    p(e);
    Y && q();
  }, [q, p, Y, T]);
  let X = K.current;
  let G = !!X && X.offsetWidth < X.scrollWidth;
  let Z = useMemo(() => !r && E.description && G ? {
    "data-tooltip-type": Ib.SPECIAL,
    "data-tooltip": _$$Z,
    "data-tooltip-style-name": kH(E.name),
    "data-tooltip-style-description": E.description,
    "data-tooltip-max-width": jNX * parsePxInt(dGl)
  } : null, [G, r, E.name, E.description]);
  let Q = "TEXT" === E.style_type && E.meta?.style_thumbnail ? E.meta.style_thumbnail : null;
  return jsx(el, {
    childLeft: jsxs(Fragment, {
      children: [jsx(zi, {
        dsStyle: E,
        disableTooltip: !0
      }), w && "FILL" === E.style_type && jsx("div", {
        className: "styles--selectedRing--UniEc"
      })]
    }),
    childRight: W && jsxs($4, {
      children: [jsx("div", {
        style: {
          gridColumnEnd: "span 1"
        }
      }), jsx(_$$d, {
        recordingKey: Pt(h, "customButton"),
        "aria-expanded": Y,
        onClick: q,
        htmlAttributes: {
          "data-tooltip-type": Ib.TEXT,
          "data-tooltip": a ? _$$t("design_systems.styles.edit_style") : _$$t("design_systems.styles.view_style"),
          onMouseDown: dG,
          tabIndex: 0,
          onKeyDown: e => {
            ("Enter" === e.key || "Space" === e.key) && (e.preventDefault(), q());
          }
        },
        children: jsx(_$$A, {}),
        "aria-label": a ? _$$t("design_systems.styles.edit_style") : _$$t("design_systems.styles.view_style")
      })]
    }),
    deleteSelectedItems: e,
    hideStylePreview: t,
    index: l,
    inspectStyleSelected: Y,
    isDragging: r,
    isEditable: a,
    isFocused: B,
    isFolder: !1,
    isLastChildOfSelection: d,
    isRenaming: i,
    level: c,
    name: kH(E.name),
    nameRef: K,
    onBlur: $,
    onContextMenu: u,
    onCreateFolder: y,
    onDoubleClick: U,
    onFocus: O,
    onHoverChange: D,
    onMouseDown: H,
    onMouseMove: x,
    onRenameItem: g,
    recordingKey: h,
    rowRef: e => {
      e && (I?.(e), F.current = e);
    },
    secondaryName: Q && P$(Q),
    selected: w,
    selectedSecondary: b,
    stopRenamingItem: C,
    tooltipData: Z
  });
}
function ey({
  styleType: e,
  setDefaultToolOnCreateStyle: t,
  children: l
}) {
  let s = !p8("isReadOnly");
  return jsxs("div", {
    className: "styles--styleTypeSection--jPjTq component_tiles--section--qMua7",
    children: [s ? jsx(em, {
      styleType: e,
      recordingKey: `style-section-header-${e}`,
      setDefaultToolOnCreateStyle: t
    }) : jsx("div", {
      className: "styles--styleTypeSectionHeader--224lA component_tiles--sectionHeader--eEC6d raw_components--panelTitle--VAQQA",
      children: QT(e)
    }), l]
  });
}
function em({
  styleType: e,
  setDefaultToolOnCreateStyle: t,
  recordingKey: l
}) {
  let [r, a] = useState(!1);
  let i = useDispatch();
  let d = useRef(null);
  let c = useCallback(() => {
    t && Y5.triggerAction("set-tool-default");
    let l = _$$Zk(e);
    let n = d.current?.getBoundingClientRect();
    l && n && i(Zs({
      rowLeft: n.left,
      rowTop: n.top,
      styleType: e,
      inheritStyleKeyField: l
    }));
  }, [t, e, i]);
  return jsxs("div", {
    className: "styles--styleTypeSectionRow--wVTIO",
    onMouseEnter: () => a(!0),
    onMouseLeave: () => a(!1),
    onFocusCapture: () => a(!0),
    onBlur: () => a(!1),
    ref: d,
    children: [jsx("h3", {
      className: "styles--styleTypeSectionRowLabel--PrKm-",
      children: QT(e)
    }), jsx("div", {
      style: {
        opacity: r ? 1 : 0
      },
      children: jsx(_$$K, {
        recordingKey: Pt(l, "addButton"),
        "aria-label": _$$t("design_systems.styles.tooltips.create_style_from_section", {
          kind: XV(e).toLowerCase()
        }),
        onClick: c,
        htmlAttributes: {
          "data-tooltip-type": Ib.TEXT,
          "data-tooltip": _$$t("design_systems.styles.tooltips.create_style_from_section", {
            kind: XV(e).toLowerCase()
          })
        },
        children: jsx(_$$x, {})
      })
    })]
  });
}
ey.displayName = "StyleTypeSection";
let eg = ms;
let eh = c$;
let ew = wv;
let eS = "styles-by-type-context-menu";
let eb = .75 * parsePxInt(uj0);
function ek({
  styleRowRef: e,
  onEditStyle: t,
  onRenameItem: l,
  onCreateFolder: r,
  onDeleteItems: a,
  onCutItems: i,
  onCopyItems: d,
  onDuplicateItems: c,
  onPasteItems: u,
  styleType: y
}) {
  let m = Um();
  let p = useSelector(e => e.library.localStyleSelection);
  let x = useMemo(() => p && p.type === y && m?.type === eS ? QA(p, m.data.uiList) : [], [p, m, y]);
  let f = useMemo(() => Ug(x).map(e => e.node_id), [x]);
  let g = f.length;
  return m && f.length ? jsx(eC, {
    dropdownShown: m,
    numStyles: g,
    onCopyItems: d,
    onCreateFolder: r,
    onCutItems: i,
    onDeleteItems: a,
    onDuplicateItems: c,
    onEditStyle: t,
    onPasteItems: u,
    onRenameItem: l,
    selectedItems: x,
    styleRowRef: e
  }) : jsx("div", {});
}
function eC({
  styleRowRef: e,
  selectedItems: t,
  numStyles: l,
  dropdownShown: r,
  onEditStyle: a,
  onRenameItem: i,
  onCreateFolder: d,
  onDeleteItems: u,
  onCutItems: y,
  onCopyItems: m,
  onDuplicateItems: p,
  onPasteItems: x
}) {
  let f = useDispatch();
  useEffect(() => (glU.computePastableStyleCount(), () => {
    glU.clearPastableStyleCount();
  }), []);
  let g = useSelector(e => e.mirror.appModel.pastableStyleCount);
  let h = !!q5()?.canEdit;
  let w = useCallback(() => {
    if (!t.length || t[0].type !== PW.STYLE) return;
    let l = t[0];
    if (e) {
      let t = e.getBoundingClientRect();
      f(rk({
        style: l,
        rowTop: t.top,
        rowLeft: t.left
      }));
      f(XE());
    }
    a(l);
  }, [f, t, a, e]);
  let b = useCallback(() => {
    if (!t.length || t[0].type === PW.STYLE) return;
    let e = t[0];
    i(e.name, !1, e.styleTypeSection);
  }, [i, t]);
  if (-1 === g) return jsx("div", {});
  if (!h) return l > 1 ? jsx("div", {}) : jsx(eg, {
    style: r.data.position,
    className: G,
    children: jsx(eh, {
      recordingKey: "edit-style-option",
      onClick: w,
      children: tx("design_systems.styles.view_style")
    })
  });
  let C = 1 === l && (t[0].type === PW.STYLE ? jsx(eh, {
    recordingKey: "edit-style-option",
    onClick: w,
    children: tx("design_systems.styles.edit_style")
  }) : jsx(eh, {
    recordingKey: "rename-folder-option",
    onClick: b,
    children: tx("design_systems.styles.rename_folder")
  }));
  return jsxs(eg, {
    style: r.data.position,
    className: G,
    children: [jsx(eh, {
      recordingKey: "create-folder-option",
      onClick: d,
      children: tx("design_systems.styles.add_new_folder")
    }), C, jsx(eh, {
      recordingKey: "delete-style-option",
      onClick: u,
      children: tx("design_systems.styles.delete_styles", {
        numStyles: l
      })
    }), jsx(ew, {}), jsx(eh, {
      recordingKey: "cut-style-option",
      onClick: y,
      children: tx("design_systems.styles.cut_styles", {
        numStyles: l
      })
    }), jsx(eh, {
      recordingKey: "copy-style-option",
      onClick: m,
      children: tx("design_systems.styles.copy_styles", {
        numStyles: l
      })
    }), jsx(eh, {
      recordingKey: "duplicate-style-option",
      onClick: p,
      children: tx("design_systems.styles.duplicate_styles", {
        numStyles: l
      })
    }), !!g && jsx(eh, {
      recordingKey: "paste-style-option",
      onClick: x,
      children: tx("design_systems.styles.paste_styles", {
        numStyles: g
      })
    })]
  });
}
let eA = "local-style-creation-dropdown";
function eM({
  setDefaultToolOnCreateStyle: e
}) {
  return getFeatureFlags().eu_fpl_styles_header_menu ? jsx(eF, {
    setDefaultToolOnCreateStyle: e
  }) : jsx(eP, {
    setDefaultToolOnCreateStyle: e
  });
}
function eP({
  setDefaultToolOnCreateStyle: e
}) {
  let t = useDispatch();
  let l = useContext(lk);
  let r = !p8("isReadOnly");
  let a = useRef(null);
  let i = useRef(null);
  let d = a.current;
  let c = Um();
  let u = c?.type === eA;
  let y = c?.data?.targetRect;
  let m = "localStyleHeader";
  let x = 0 === Bs().length;
  let g = useSelector(e => e.stylePreviewShown.isShown && e.stylePreviewShown.isCreating);
  let h = useMemo(() => y || (u && d ? d.getBoundingClientRect() : null), [y, d, u]);
  let w = () => {
    t(oB());
  };
  let k = () => {
    t(j7({
      type: eA
    }));
  };
  let C = e => {
    e.stopPropagation();
    t(YG());
    let l = a.current;
    u ? w() : l && (sx("editor-local-styles-dropdown-show"), k());
  };
  let E = t => {
    e && Y5.triggerAction("set-tool-default");
    w();
    let n = _$$Zk(t);
    let s = i.current?.getBoundingClientRect();
    n && s && l({
      styleType: t,
      inheritStyleKeyField: n,
      rowLeft: s.left,
      rowTop: s.top
    });
  };
  let v = x && !u && !g;
  return jsxs(fI, {
    className: v ? ee : J,
    ref: i,
    children: [jsx(_$$x2, {
      className: et,
      onMouseDown: e => v && C(e),
      onClick: e => e.stopPropagation(),
      children: tx("design_systems.styles.local_styles")
    }), r && jsxs(Fragment, {
      children: [jsx(K0, {
        ref: a,
        onMouseDown: C,
        onClick: e => e.stopPropagation(),
        className: u ? "styles--stylesHeaderButtonHighlight--WTeWy raw_components--iconButtonSelected--bJibL raw_components--_iconButton---ybo6" : "styles--stylesHeaderButton--jhpA5 draggable_list--addButton--D0q--",
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": _$$t("design_systems.create_style.create_style"),
        recordingKey: Pt(m, "addButton"),
        children: jsx(_$$e2, {})
      }), u && h && jsx(Cf, {
        targetRect: h,
        minWidth: 128,
        disableDropdownScrollContainer: !0,
        propagateCloseClick: !0,
        children: og.map(e => {
          let {
            icon,
            label
          } = eK(e);
          let s = t => {
            t.stopPropagation();
            E(e);
          };
          return jsxs(c$, {
            className: "styles--createStyleDropdownRow--7iCXQ",
            onClick: s,
            onPointerUp: s,
            recordingKey: Pt(m, `dropdown-option-${e}`),
            children: [jsx(Nu, {
              children: icon
            }), label]
          }, e);
        })
      })]
    })]
  });
}
function eK(e) {
  switch (e) {
    case "TEXT":
      return {
        icon: jsx(_$$e3, {}),
        label: _$$t("design_systems.styles.dropdown.text")
      };
    case "FILL":
      return {
        icon: jsx(_$$G, {}),
        label: _$$t("design_systems.styles.dropdown.fill")
      };
    case "GRID":
      return {
        icon: jsx(_$$E2, {}),
        label: _$$t("design_systems.styles.dropdown.guide")
      };
    case "EFFECT":
      return {
        icon: jsx(_$$n, {}),
        label: _$$t("design_systems.styles.dropdown.effect")
      };
    default:
      noop(e);
      return Error(`Invalid style type: ${e}`);
  }
}
function eF({
  setDefaultToolOnCreateStyle: e
}) {
  let t = useRef(null);
  let l = useContext(lk);
  let {
    getTriggerProps,
    manager
  } = _$$b();
  let {
    onClick,
    ...d
  } = getTriggerProps();
  let c = !p8("isReadOnly");
  let u = 0 === Bs().length;
  let y = useSelector(e => e.stylePreviewShown.isShown && e.stylePreviewShown.isCreating);
  let m = u && !manager.isOpen && !y;
  let x = useCallback(() => {
    m && (manager.setOpen(!0), sx("editor-local-styles-dropdown-show"));
  }, [manager, m]);
  let f = useCallback(e => {
    manager.isOpen || sx("editor-local-styles-dropdown-show");
    onClick(e);
  }, [manager.isOpen, onClick]);
  let g = useCallback(n => {
    e && Y5.triggerAction("set-tool-default");
    let s = _$$Zk(n);
    let o = t.current?.getBoundingClientRect();
    s && o && l({
      styleType: n,
      inheritStyleKeyField: s,
      rowLeft: o.left,
      rowTop: o.top
    });
  }, [l, e, t]);
  return jsxs(fI, {
    className: m ? ee : J,
    ref: t,
    children: [jsx(_$$x2, {
      className: et,
      onMouseDown: x,
      onClick: e => e.stopPropagation(),
      children: tx("design_systems.styles.local_styles")
    }), c && jsx(eO, {
      manager,
      triggerProps: {
        ...d,
        onClick: f
      },
      onMenuItemClick: g,
      recordingKey: "localStyleHeader"
    })]
  });
}
function eO({
  manager: e,
  triggerProps: t,
  onMenuItemClick: l,
  recordingKey: s
}) {
  return jsxs(bL, {
    manager: e,
    children: [jsx(_$$d, {
      "aria-label": _$$t("design_systems.create_style.create_style"),
      recordingKey: Pt(s, "addButton"),
      ...t,
      children: jsx(_$$e2, {})
    }), jsx(mc, {
      children: og.map(e => {
        let {
          icon,
          label
        } = eK(e);
        return jsxs(q7, {
          onClick: () => l(e),
          recordingKey: Pt(s, `menu-item-${e}`),
          children: [jsx(Q$, {
            children: icon
          }), label]
        }, e);
      })
    })]
  });
}
let e$ = "collapsed-style-folders";
export function $$eU0({
  scrollContainer: e,
  setDefaultToolOnCreateStyle: t,
  recordingKey: l
}) {
  let s = Bs();
  let o = p8("isReadOnly");
  return 0 === s.length && o ? null : jsx(_$$k, {
    name: "local_styles_panel",
    children: jsx(Zk, {
      children: jsx(eY, {
        scrollContainer: e,
        setDefaultToolOnCreateStyle: t,
        recordingKey: l
      })
    })
  });
}
function eY({
  scrollContainer: e,
  setDefaultToolOnCreateStyle: t,
  recordingKey: l
}) {
  let a = useDispatch();
  let i = useSelector(e => e.stylePreviewShown);
  let y = useSelector(e => e.mirror.appModel.activeCanvasEditModeType);
  let m = useSelector(e => e.mirror.appModel.currentTool);
  let x = useRef(null);
  let g = Bs();
  let h = useSelector(e => e.library.localStyleSelection);
  let [w, S] = useState(null);
  let [k, E] = useState(null);
  let T = useRef(null);
  let [R, N] = useState(!1);
  let B = y === m1T.GRADIENT || y === m1T.RASTER || m === NLJ.DROPPER_COLOR;
  useEffect(() => {
    let e = () => {
      !B && (a(Bn(null)), i.isShown && (a(sw()), glU.selectStyle(n3.INVALID, IA.INVALID)));
    };
    let t = ft();
    t ? window.addEventListener("pointerdown", e) : window.addEventListener("mousedown", e);
    return () => {
      t ? window.removeEventListener("pointerdown", e) : window.removeEventListener("mousedown", e);
    };
  }, [a, i.isShown, B]);
  let {
    stylesByType,
    foldersAndStylesByType
  } = useMemo(() => {
    let e = Kw(g);
    let t = new Map();
    og.map(l => {
      let n = e.get(l);
      if (n) {
        LX(n);
        let e = lM(n, l);
        let s = l0(e);
        t.set(l, s);
      }
    });
    return {
      stylesByType: e,
      foldersAndStylesByType: t
    };
  }, [g]);
  let K = useCallback(e => {
    debug(null != e.content_hash, "style does not have a hash");
    glU.selectStyleByGuid(e.node_id);
    a(ay({
      isRenaming: !1
    }));
    sx("Style Inspected", {
      styleType: e.style_type,
      from: "styleListClick"
    });
  }, [a]);
  let F = useCallback((e, t, l) => {
    S(t ? e : null);
    E(t ? null : {
      name: e,
      styleTypeSection: l
    });
  }, []);
  let O = useCallback(e => {
    if (!e) {
      a(Bn(null));
      return;
    }
    let t = new Set();
    e.styleIds.forEach(l => {
      let n = g.find(e => e.type === PW.STYLE && e.node_id === l);
      if (!n) return;
      let s = In(n.name);
      e.folderNames.has(s) || t.add(l);
    });
    let l = {
      type: e.type,
      folderNames: e.folderNames,
      styleIds: t
    };
    a(Bn(l));
  }, [a, g]);
  let $ = useCallback((e, t, l) => {
    if (!h) return;
    let n = e[t];
    let s = (e, t) => {
      let n = ke(e.name);
      let s = null != t ? t : n.length - 1;
      n[s] = l;
      let o = Pc(n.join("/"));
      l7.user("rename-style", () => glU.renameNode(e.node_id, o));
    };
    if (n.name !== l) {
      if (n.type === PW.STYLE) s(n);else {
        mx(t, e).forEach(t => {
          let l = e[t];
          l.type === PW.STYLE && s(l, n.level - 1);
        });
        let o = new Set(h.folderNames);
        o.$$delete(n.name);
        let r = In(n.name) + "/" + l;
        o.add(r);
        O({
          type: h.type,
          folderNames: o,
          styleIds: h.styleIds
        });
      }
    }
    Y5.triggerAction("commit");
    S(null);
    E(null);
  }, [h, O]);
  let U = useCallback((e, t) => {
    t.preventDefault();
    t.stopPropagation();
    a(j7({
      type: eS,
      data: {
        uiList: e,
        position: {
          top: t.clientY,
          left: Math.min(t.clientX, window.innerWidth - eb)
        }
      }
    }));
  }, [a]);
  let Y = useCallback(e => {
    T.current = e;
  }, []);
  let z = useCallback(() => {
    N(!0);
  }, []);
  let W = useCallback(() => {
    N(!1);
  }, []);
  return jsxs("div", {
    className: "styles--localStylesPanel--T4Gqs",
    ref: x,
    children: [jsx(eM, {
      setDefaultToolOnCreateStyle: t
    }), og.map(s => {
      let o = stylesByType.get(s);
      if (!o) return;
      let r = foldersAndStylesByType.get(s);
      if (r) return jsx(ez, {
        isDragging: R,
        onContextMenu: U,
        onDragEnd: W,
        onDragStart: z,
        onEditStyle: K,
        onInspectStyle: K,
        onRenameItem: F,
        recordingKey: Pt(l, `style-section-${s}`),
        renamingFolder: k,
        renamingStyleID: w,
        scrollContainer: e,
        setDefaultToolOnCreateStyle: t,
        stopRenamingItem: $,
        storedStyleList: o,
        styleList: r,
        styleRowRef: T.current,
        styleType: s,
        updateContextMenuStyleRef: Y,
        updateSelection: O
      }, s);
    })]
  });
}
function ez({
  styleType: e,
  storedStyleList: t,
  styleList: l,
  renamingStyleID: r,
  renamingFolder: p,
  onRenameItem: w,
  stopRenamingItem: b,
  onDragStart: C,
  onDragEnd: v,
  onInspectStyle: I,
  onContextMenu: A,
  updateContextMenuStyleRef: M,
  updateSelection: P,
  styleRowRef: K,
  scrollContainer: F,
  setDefaultToolOnCreateStyle: O,
  recordingKey: $
}) {
  let U = q5();
  let Y = !p8("isReadOnly");
  let z = useDispatch();
  let W = useSelector(e => e.stylePreviewShown);
  let q = useSelector(t => i4(t, e));
  let H = useSelector(t => A7(t, e, l));
  let [X, V] = useState(() => {
    if (localStorageRef && U) {
      let t = JSON.parse(localStorageRef.getItem(e$) || "{}");
      if (U.key in t) {
        let l = t[U.key];
        if (e in l) return new Set(l[e]);
      } else {
        t[U.key] = {};
        localStorageRef.setItem(e$, JSON.stringify(t));
      }
    }
    return new Set(l.filter(e => "STYLE_FOLDER" === e.type).map(e => e.name));
  });
  let [G, Z] = useState([]);
  let [Q, J] = useState(null);
  let [ee, et] = useState(null);
  let el = useMemo(() => debounce(() => {
    z(GT({
      styleType: e
    }));
  }, 200), [z, e]);
  useEffect(() => {
    nl() || el();
  }, [el, l]);
  let es = ZC(X);
  useEffect(() => {
    if (!es || !localStorageRef || !U || _f(es, X)) return;
    let t = JSON.parse(localStorageRef.getItem(e$) || "{}");
    let l = t[U.key];
    l && (l[e] = [...X], localStorageRef.setItem(e$, JSON.stringify(t)));
  }, [X, U, es, e]);
  let eo = useCallback(e => !!e && "STYLE_FOLDER" === e.type, []);
  let er = useCallback((e, t) => {
    let n = new Set(e);
    let s = [];
    l.forEach((e, t) => {
      if (n.has(e) && (s.push(t), "STYLE_FOLDER" === e.type)) {
        let e = mx(t, l);
        s.push(...e);
      }
    });
    let o = new Set(s);
    let r = t ? l.indexOf(t) : l.length;
    let a = [...y1(r).filter(e => !o.has(e)), ...s, ...y1(r, l.length).filter(e => !o.has(e))];
    let d = new Map();
    a.forEach((e, t) => {
      e !== t && d.set(e, t);
    });
    return d;
  }, [l]);
  let ea = useCallback(() => {
    W.isShown && (z(sw()), z(XE()), glU.selectStyle(n3.INVALID, IA.INVALID));
  }, [z, W.isShown]);
  let ei = useMemo(() => {
    if (!Q) return null;
    if ("in" === Q.type) {
      let e = l[Q.index];
      return e ? {
        folderNameToNestUnder: e.name,
        dividerStyles: {
          display: "none"
        }
      } : null;
    }
    if (null == Q.index || null == ee || !q) return null;
    let e = null;
    let t = null;
    0 === Q.index ? t = l[Q.index] : Q.index === l.length ? e = l[Q.index - 1] : (e = l[Q.index - 1], t = l[Q.index]);
    return g5({
      prevItem: e,
      nextItem: t,
      localStyleSelection: q,
      styleList: l,
      collapsedFolders: X,
      temporarilyExpandedFolders: G,
      horizontalDragAmount: ee
    });
  }, [X, ee, q, Q, l, G]);
  let ed = useCallback((n, s, o, r) => {
    if (!t || !s && !o || !ei) return;
    let a = ei.folderNameToNestUnder;
    if (null === a) return;
    let i = [];
    let d = [];
    n.forEach(e => {
      Md(s, e, o, a) && ("STYLE_FOLDER" === e.type ? d.push(e) : i.push(e));
    });
    let c = i.concat(d);
    if (!c.length) return;
    let y = l7.user("reorder-styles", () => VB(c, s, o, a, l, t, r || !1));
    let m = new Set();
    let p = new Set();
    c.forEach(e => {
      let t = t_(e);
      let l = y?.get(t);
      l && ("STYLE_FOLDER" === e.type ? m.add(l) : p.add(t));
    });
    P({
      type: e,
      folderNames: m,
      styleIds: p
    });
    let x = new Set();
    X.forEach(e => {
      if (a.startsWith(e)) return;
      let t = y?.get(e);
      t ? x.add(t) : x.add(e);
    });
    V(x);
    ea();
    r || Y5.triggerAction("commit");
    return er(c, o);
  }, [P, X, ei, er, ea, t, l, e]);
  let ec = useCallback((e, t) => {
    if ("STYLE_FOLDER" !== t.type) return;
    let n = l.indexOf(t);
    let s = dm(t).filter(e => In(e.name) === t.name);
    if (!s.length) return ed(e, t, l[n + 1]);
    {
      let t = s[s.length - 1];
      let n = l.indexOf(t);
      return ed(e, t, l[n + 1]);
    }
  }, [ed, l]);
  let em = xx((e, t) => {
    let n = new Map();
    let s = t.map(e => e.type === PW.STYLE ? e.node_id : e.name);
    e.forEach(e => {
      let o = s.indexOf(e);
      -1 !== o && mx(o, l).forEach(e => {
        let l = t[e];
        let s = "STYLE_FOLDER" === l.type ? l.name : l.node_id;
        let o = n.get(s);
        o || (o = 0);
        n.set(s, o + 1);
      });
    });
    return n;
  });
  let ep = useCallback(() => {
    if (!q) return;
    let t = QA(q, l);
    if (0 === t.length) return;
    let {
      prevItem,
      nextItem
    } = j3(t, l);
    ed(t, prevItem, nextItem, !0);
    let o = In(t[0]?.name || "");
    let r = _$$t("design_systems.create_style.new_folder");
    o && (r = `${o}/${r}`);
    let a = (e, t) => {
      if (e.type === PW.STYLE) {
        let l = r + "/" + t + kH(e.name);
        l7.user("rename-style", () => {
          glU.renameNode(e.node_id, l);
        });
      } else {
        let l = t + kH(e.name) + "/";
        e.styles.forEach(e => {
          a(e, l);
        });
        e.subfolders.forEach(e => {
          a(e, l);
        });
      }
    };
    t.forEach(e => {
      a(e, "");
    });
    P({
      type: e,
      folderNames: new Set([r]),
      styleIds: new Set()
    });
    w(r, !1, e);
  }, [P, ed, q, w, l, e]);
  let ex = useCallback((e, t) => {
    let n = l[e];
    "STYLE_FOLDER" === n.type && V(e => {
      let l = new Set(e);
      t ? l.add(n.name) : l.$$delete(n.name);
      return l;
    });
  }, [l]);
  let eg = useCallback((e, t) => {
    V(n => {
      let s = new Set(n);
      let o = l[e];
      if ("STYLE_FOLDER" === o.type) {
        let e = In(o.name);
        let l = "" === e ? t : e + "/" + t;
        X.has(o.name) && (X.$$delete(o.name), X.add(l));
        KU(o).forEach(e => {
          if (X.has(e.name)) {
            let t = e.name.replace(o.name, "");
            X.add(l + t);
            X.$$delete(e.name);
          }
        });
      }
      return s;
    });
    b(l, e, t);
  }, [b, X, l]);
  let eh = useCallback(e => {
    A(l, e);
  }, [A, l]);
  let ew = useCallback((e, t, l) => {
    let n = t > .5 ? 1 : Math.round(1e3 * t) / 1e3;
    J({
      index: e,
      type: l ? "in" : "before"
    });
    et(n);
  }, []);
  let eS = useCallback(() => {
    V(e => l7.user("delete-styles", () => {
      let t = new Set(e);
      (q ? QA(q, l) : []).forEach(e => {
        "STYLE_FOLDER" === e.type ? (a2(e, U?.key || null), X.$$delete(e.name), KU(e).forEach(e => X.$$delete(e.name))) : Nr(e, U?.key || null);
      });
      return t;
    }));
    Y5.triggerAction("commit");
    W.isShown && (z(sw()), z(XE()), glU.selectStyle(n3.INVALID, IA.INVALID));
    P(null);
  }, [W.isShown, P, q, l, U?.key, X, z]);
  let eb = useMemo(() => {
    let e = q ? QA(q, l) : [];
    return Ug(e).map(e => e.node_id);
  }, [q, l]);
  let eC = useCallback(() => {
    l7.user("cut-styles", () => glU && glU.cutStyles(eb));
  }, [eb]);
  let eE = useCallback(() => {
    l7.user("copy-styles", () => glU && glU.copyStyles(eb));
  }, [eb]);
  let ej = useCallback(() => {
    l7.user("duplicate-styles", () => glU && glU.duplicateStyles(eb));
  }, [eb]);
  let ev = useCallback(() => {
    l7.user("paste-styles", () => glU && glU.pasteStyles());
  }, []);
  !function ({
    cutSelectedItems: e,
    copySelectedItems: t,
    localStyleSelection: l,
    onPaste: n
  }) {
    useEffect(() => {
      if (!l) return;
      let s = (e, t) => {
        e.target && ("INPUT" === e.target.tagName || "TEXTAREA" === e.target.tagName) || (t(), e.stopPropagation());
      };
      let o = t => {
        s(t, e);
      };
      let r = e => {
        s(e, n);
      };
      let a = e => {
        s(e, t);
      };
      document.addEventListener("cut", o);
      document.addEventListener("paste", r);
      document.addEventListener("copy", a);
      return () => {
        document.removeEventListener("cut", o);
        document.removeEventListener("paste", r);
        document.removeEventListener("copy", a);
      };
    }, [e, n, t, l]);
  }({
    cutSelectedItems: eC,
    onPaste: ev,
    copySelectedItems: eE,
    localStyleSelection: q
  });
  let e_ = useCallback(e => {
    Z(t => [...t, e]);
  }, []);
  let eT = useCallback(() => {
    C();
  }, [C]);
  let eR = rf($, "ondragend", useCallback(() => {
    J(null);
    et(null);
    Z([]);
    v();
  }, [v]));
  let eI = ZC(q);
  useEffect(() => {
    eI !== q && q && V(e => {
      let l = new Set(e);
      for (let e of q.styleIds.values()) {
        let n = t.find(t => t.node_id === e);
        if (!n) continue;
        let s = ke(n.name);
        for (let e = 0; e < s.length; e++) {
          let t = s.slice(0, e).join("/");
          l.$$delete(t);
        }
      }
      return l;
    });
  }, [q, eI, t]);
  let eL = useRef(null);
  let eN = useCallback(e => {
    eL.current = e;
  }, [eL]);
  let eD = useMemo(() => q ? h$(q, l) : [], [q, l]);
  let eB = useMemo(() => H ? h$(H, l) : [], [H, l]);
  let eA = useMemo(() => [...eD, ...eB].sort((e, t) => e - t), [eD, eB]);
  let eM = useCallback((e, t, s, o, a, i) => {
    let d = "STYLE_FOLDER" === e.type ? e.name : e.node_id;
    let c = !1;
    let u = !1;
    for (let t of G) if ("STYLE_FOLDER" === e.type) {
      if (e.name === t) {
        u = !0;
        break;
      }
      e.name.startsWith(t) && (c = !0);
    } else if (In(e.name) === t) {
      c = !0;
      break;
    }
    if (!u && !c && em(X, l).has(d)) return null;
    let y = eA && eA[eA.length - 1] === t;
    let m = eA && eA[0] === t;
    if (e.type === PW.STYLE) {
      let l = rM(e);
      let d = null != r && r === e.node_id;
      return jsx(eu, {
        deleteSelectedItems: eS,
        dsStyle: e,
        hideStylePreview: ea,
        index: t,
        isDragging: o,
        isEditable: Y,
        isLastChildOfSelection: y,
        isRenaming: d,
        level: l,
        onContextMenu: eh,
        onCreateFolder: ep,
        onInspectStyle: I,
        onMouseDown: a,
        onMouseMove: i,
        onRenameItem: w,
        recordingKey: `style-row-${t}`,
        selected: s,
        selectedSecondary: H?.styleIds.has(e.node_id) || !1,
        stopRenamingItem: eg,
        stylePreviewShown: W,
        updateContextMenuStyleRef: M,
        updateFocusRowRef: s ? eN : null,
        updateSelection: P
      }, e.node_id);
    }
    {
      let l = null != p && p.name === e.name && p.styleTypeSection === e.styleTypeSection;
      let r = ei?.folderNameToNestUnder || null;
      return jsx(en, {
        deleteSelectedItems: eS,
        folder: e,
        folderNameToNestUnder: r,
        hideStylePreview: ea,
        index: t,
        isCollapsed: X.has(e.name),
        isDragging: o,
        isEditable: Y,
        isFirstChildOfSelection: m,
        isRenaming: l,
        isTemporarilyExpanded: u,
        level: e.level,
        onContextMenu: eh,
        onCreateFolder: ep,
        onMouseDown: a,
        onMouseMove: i,
        onRenameItem: w,
        recordingKey: `folder-section-${e.styleTypeSection}-row-${t}`,
        selected: s,
        selectedSecondary: H?.folderNames.has(e.name) || !1,
        stopRenamingItem: eg,
        temporarilyExpandFolder: e_,
        toggleFolder: e => ex(t, e)
      }, t);
    }
  }, [P, eA, X, eS, ei?.folderNameToNestUnder, em, ea, eh, ep, I, w, p, r, H?.folderNames, H?.styleIds, eg, l, W, e_, G, ex, M, Y, eN]);
  let eP = useCallback(t => {
    let n = new Set();
    let s = new Set();
    t.forEach(e => {
      let t = l[e];
      "STYLE_FOLDER" === t.type ? n.add(t.name) : s.add(t.node_id);
    });
    P({
      type: e,
      folderNames: n,
      styleIds: s
    });
  }, [P, l, e]);
  let eK = useRef();
  let eF = useRef();
  useEffect(() => {
    eK.current && eD.length ? (eK.current(), eL.current && !eL.current.contains(document.activeElement) && eL.current.focus()) : eF.current && !eD.length && (eF.current(), eL.current = null);
  }, [eK, eD, eL]);
  return jsx(vL, {
    name: "StyleDraggableList",
    focusFunctionRef: eK,
    blurFunctionRef: eF,
    children: jsxs(ey, {
      styleType: e,
      setDefaultToolOnCreateStyle: O,
      children: [jsx(eW, {
        canInsertItemsIn: eo,
        insertDividerStyle: ei?.dividerStyles,
        isDragDisabled: !Y,
        listItems: l,
        onDrag: ew,
        onDragEnd: eR,
        onDragStart: eT,
        onInsertItemsBetweenValues: ed,
        onInsertItemsIn: ec,
        recordingKey: "style-draggable-list",
        renderListItem: eM,
        scrollContainer: F,
        selectedIndices: eD,
        updateSelection: eP
      }), jsx(ek, {
        onCopyItems: eE,
        onCreateFolder: ep,
        onCutItems: eC,
        onDeleteItems: eS,
        onDuplicateItems: ej,
        onEditStyle: I,
        onPasteItems: ev,
        onRenameItem: w,
        styleRowRef: K,
        styleType: e
      })]
    })
  });
}
let eW = _$$q;
export const Q = $$eU0;