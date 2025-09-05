import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PureComponent, memo, useRef, useCallback, useMemo, useState, useContext, useEffect } from "react";
import { useSelector } from "../vendor/514228";
import { ServiceCategories as _$$e } from "../905/165054";
import { R as _$$R } from "../905/256203";
import { uQ6, Egt } from "../figma_app/763686";
import { MT } from "../figma_app/387100";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { md } from "../figma_app/27355";
import { useHandleMouseEvent } from "../figma_app/878298";
import m from "classnames";
import { sn } from "../905/542194";
import { parsePxNumber } from "../figma_app/783094";
import { m as _$$m } from "../905/717445";
import { Uz } from "../905/63728";
import { Pt, rf as _$$rf, AF, v_, aH, iQ } from "../figma_app/806412";
import { $D } from "../905/11";
import { B as _$$B } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { t as _$$t } from "../905/303541";
import { sx } from "../905/941192";
import { eC as _$$eC, Fj } from "../figma_app/76123";
import { Br, A0, sq } from "../figma_app/454974";
import { UK } from "../figma_app/740163";
import { jr, W0 } from "../figma_app/896988";
import { Z as _$$Z } from "../905/104740";
import { o3 } from "../figma_app/852050";
import { QZ } from "../figma_app/62612";
import { pr } from "../figma_app/952446";
import { y0 } from "../figma_app/718307";
import { J2 } from "../figma_app/84367";
import { F as _$$F } from "../905/258517";
import { Fk } from "../figma_app/167249";
import { Ib } from "../905/129884";
import { e as _$$e2 } from "../905/579635";
import { r8 } from "../figma_app/178273";
import { g$, qW } from "../figma_app/116234";
import { gz } from "../figma_app/605071";
import { ks } from "../figma_app/626177";
import { Yx } from "../figma_app/930338";
import { Io, XW, xE, dK, co, TY, pZ, OI, GE, Fq, Wm, hz, J0, yk, V3, hF, qg, Xv, _k, r as _$$r, pS, nM, M4, Gt, Os, t$, DT, a6, uW, HR, rS, bY, $E, qm, xG, KJ, iE, Zt, HL, j3, cb, vp, WO, i9, Cr, Zu, lh, yo, wH, ct, r9, xt, sz, uC, ow, sc, u4, QW, HY, cm, V0, Hz, n4 } from "../figma_app/622978";
import { N as _$$N } from "../642/994749";
import { cJ } from "../905/561485";
import { sO } from "../figma_app/21029";
import { E as _$$E } from "../905/632989";
import { O as _$$O } from "../905/969533";
import { k as _$$k2 } from "../905/44647";
import { k as _$$k3 } from "../905/749197";
import { A as _$$A } from "../b2835def/291355";
import { A as _$$A2 } from "../b2835def/566447";
import { A as _$$A3 } from "../b2835def/15890";
import { A as _$$A4 } from "../b2835def/221154";
import { A as _$$A5 } from "../b2835def/405864";
import { A as _$$A6 } from "../b2835def/597304";
import { Bf } from "../figma_app/249941";
import { f as _$$f } from "../905/167712";
import { s as _$$s2 } from "../905/403855";
import { r as _$$r2 } from "../905/619088";
import { Zy, Rt } from "../figma_app/945858";
import { JT } from "../figma_app/632248";
import { S as _$$S } from "../905/999953";
import { g as _$$g } from "../905/687265";
import { xk } from "@stylexjs/stylex";
import { l as _$$l } from "../905/103989";
import { f as _$$f2 } from "../905/640587";
import { gdM, yj4 } from "../figma_app/27776";
import { indentWidthWithMargin, scrollBarYWidth, trackPadding, rowActionsWidth } from "../figma_app/786175";
import { A as _$$A7 } from "../b2835def/864187";
var g = m;
function W({
  modeNames: e
}) {
  if (0 === e.length) return null;
  let t = 1 === e.length ? e[0] : e[0] + " + " + (e.length - 1);
  return jsx("div", {
    className: Io,
    "data-testid": "variable-mode-pill",
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": _$$t("variables.mode_pill.tooltip", {
      listOfModes: Yx(e)
    }),
    children: jsx("div", {
      className: XW,
      children: t
    })
  });
}
function el() {
  return jsx("div", {
    className: _$$s.flex.itemsCenter.justifyCenter.$,
    children: jsx("div", {
      className: xE
    })
  });
}
class ea extends PureComponent {
  constructor() {
    super(...arguments);
    this.expandMouseDown = e => {
      this.props.expandMouseDown(this.props.guid, e);
    };
  }
  renderNodeIndents() {
    let e = [];
    for (let t = 0; t < this.props.level + 1; t++) {
      let s = `[${t}]`;
      let n = -1 !== this.props.isLastMaskedAtLevels.indexOf(s);
      let i = -1 !== this.props.isMaskedAtLevels.indexOf(s);
      let l = t === this.props.level && this.props.mask;
      let a = t === this.props.level && this.props.hasChildren;
      let o = g()(dK, co, {
        [TY]: this.props.displayOrder === _$$k3.DOM
      });
      e.push(jsx("span", {
        className: pZ
      }, t));
      n ? e.push(jsx(_$$B, {
        svg: a ? _$$A5 : _$$A6,
        className: o
      }, `${t}-mask`)) : i ? e.push(jsx(_$$B, {
        svg: a ? _$$A4 : _$$A3,
        className: o
      }, `${t}-mask`)) : l && e.push(jsx(_$$B, {
        svg: a ? _$$A2 : _$$A,
        className: o
      }, `${t}-mask`));
      this.props.hasBullet && t === this.props.level ? e.push(jsx(_$$E, {
        recordingKey: Pt(this.props, "expandCaret"),
        className: OI,
        actionOnPointerDown: !0,
        onClick: this.expandMouseDown,
        htmlAttributes: {
          "data-testid": this.props.isMeasurementNode ? void 0 : "new-frame-bullet"
        },
        children: jsx(el, {})
      }, "expand-caret")) : a && e.push(jsx(_$$E, {
        recordingKey: Pt(this.props, "expandCaret"),
        className: g()(GE, Fq),
        actionOnPointerDown: !0,
        onClick: this.expandMouseDown,
        children: this.props.isExpanded ? jsx(_$$O, {}) : jsx(_$$k2, {})
      }, "expand-caret"));
    }
    return e;
  }
  render() {
    return jsx("span", {
      ref: this.props.indentsRefCallback,
      className: Wm,
      children: this.renderNodeIndents()
    });
  }
}
ea.displayName = "Indents";
let eh = memo(function (e) {
  let {
    locked,
    isAncestorLocked,
    onMouseDown,
    recordingKey
  } = e;
  let a = useRef(null);
  let o = useCallback(e => {
    e && onMouseDown(e);
  }, [onMouseDown]);
  let d = _$$rf(recordingKey, "mousedown", o);
  let c = useMemo(() => ({
    onMouseDown: d,
    onKeyDownCapture: e => {
      (e?.code === "Space" || e?.key === "Enter") && d(new MouseEvent("mousedown", {
        altKey: e.altKey
      }));
    },
    onMouseLeave: () => {
      a?.current && document?.activeElement === a?.current && a.current?.blur();
    },
    onDoubleClick: e => e.stopPropagation()
  }), [d]);
  let u = useMemo(() => isAncestorLocked && !locked ? Zy : jsx(_$$s2, {
    "data-testid": "locked-icon"
  }), [isAncestorLocked, locked]);
  let p = useMemo(() => jsx(_$$r2, {
    "data-testid": "unlocked-icon"
  }), []);
  return jsx("span", {
    className: hz,
    children: jsx(_$$f, {
      ref: a,
      "aria-label": _$$t("fullscreen.object_row.toggle_lock"),
      checked: locked || isAncestorLocked,
      onIcon: u,
      offIcon: p,
      htmlAttributes: c
    })
  });
});
let em = memo(function (e) {
  return jsx("svg", {
    width: "16",
    height: "16",
    fill: "none",
    viewBox: "0 0 16 16",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M8 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 1 1 0 1H10v8h.5a.5.5 0 1 1 0 1h-2a.5.5 0 0 1 0-1H9V4h-.5a.5.5 0 0 1-.5-.5m3 2a.5.5 0 0 1 .5-.5h1A1.5 1.5 0 0 1 14 6.5v3a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 1-.5-.5M2.5 7a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 .5.5h4a.5.5 0 1 1 0 1h-4A1.5 1.5 0 0 1 2 9.5v-2a.5.5 0 0 1 .5-.5m2.515-3.56L4.7 4.7l-1.26.315c-.505.126-.505.844 0 .97L4.7 6.3l.315 1.26c.126.505.844.505.97 0L6.3 6.3l1.26-.315c.505-.126.505-.844 0-.97L6.3 4.7l-.315-1.26c-.126-.505-.844-.505-.97 0",
      clipRule: "evenodd"
    })
  });
});
function ex({
  disabled: e
}) {
  let t = useMemo(() => ({
    "data-tooltip-type": Ib.SPECIAL,
    "data-tooltip-show-above": !0,
    "data-tooltip-timeout-delay": 50,
    "data-tooltip": _$$S,
    "data-tooltip-ai-beta-text": _$$t("fullscreen.context_menu.auto_rename_layers"),
    "data-tooltip-ai-beta-action": JT.AUTO_RENAME_LAYERS
  }), []);
  return jsx(_$$E, {
    className: J0,
    onClick: () => {
      Br({
        source: uQ6.LAYERS_PANEL_ACTION_ROW,
        trackingDataSource: "layers_panel_action_row"
      });
    },
    htmlAttributes: e ? void 0 : t,
    disabled: e,
    children: jsx(em, {})
  });
}
function eb({
  guid: e,
  isWebpage: t
}) {
  let s = cJ();
  let n = J2(UK().showSemanticTagsOnLayerRows);
  let i = Fk((e, s) => {
    let r = e.get(s);
    if (!r) return {
      htmlTag: void 0,
      nodeType: void 0,
      isVectorLike: !1,
      isLink: !1,
      isButton: !1,
      hasImageFill: !1,
      isWebpage: t ?? !1
    };
    let n = !!r.hyperlink || (r.prototypeInteractions ?? []).some(e => e.event?.interactionType === "ON_CLICK" && e.actions?.some(e => "URL" === e.connectionType || "INTERNAL_NODE" === e.connectionType && "NAVIGATE" === e.navigationType));
    let i = !n && (r.prototypeInteractions ?? []).some(e => e.event?.interactionType === "ON_CLICK");
    return {
      htmlTag: r.accessibleHTMLTag,
      nodeType: r.type,
      isVectorLike: r.isVectorLike,
      isLink: n,
      isButton: i,
      hasImageFill: "FRAME" === r.type && (r.fills?.some(e => "IMAGE" === e.type) ?? !1),
      isWebpage: t ?? !1
    };
  }, e);
  if (!(s && getFeatureFlags().sts_a11y_layers_semantic_tags && n)) return null;
  let l = !i.htmlTag || i.isWebpage ? null : "AUTO" === i.htmlTag ? i.isLink ? "a" : i.isButton ? "button" : i.isVectorLike ? "svg" : "FRAME" === i.nodeType && i.hasImageFill ? "img" : "TEXT" === i.nodeType ? "p" : "div" : i.htmlTag.toLowerCase();
  return l ? jsx("span", {
    ...xk(eC.semanticTagLabel),
    children: l
  }) : null;
}
let eC = {
  semanticTagLabel: {
    ..._$$g.textBodyMedium,
    textAlign: "x1hr2gdg",
    fontFamily: "xwjs1nl",
    color: "xtd9kr2",
    paddingRight: "x1jwbysl",
    paddingInlineStart: null,
    paddingInlineEnd: null,
    flexShrink: "x2lah0s",
    $$css: !0
  }
};
let eS = memo(function (e) {
  let {
    visible,
    isAncestorHidden,
    onMouseDown,
    recordingKey
  } = e;
  let a = useRef(null);
  let o = useCallback(e => {
    e && onMouseDown(e);
  }, [onMouseDown]);
  let d = _$$rf(recordingKey, "mousedown", o);
  let c = useMemo(() => ({
    onMouseDown: d,
    onKeyDownCapture: e => {
      (e?.code === "Space" || e?.key === "Enter") && d(new MouseEvent("mousedown", {
        altKey: e.altKey
      }));
    },
    onMouseLeave: () => {
      a?.current && document?.activeElement === a?.current && a.current?.blur();
    },
    onDoubleClick: e => e.stopPropagation(),
    "data-testid": "object-row-toggle-visibility"
  }), [d]);
  let u = useMemo(() => isAncestorHidden ? Zy : jsx(_$$l, {
    "data-testid": "visible-icon"
  }), [isAncestorHidden]);
  let p = useMemo(() => jsx(_$$f2, {
    "data-testid": "hidden-icon"
  }), []);
  return jsx("span", {
    className: yk,
    children: jsx(_$$f, {
      ref: a,
      "aria-label": _$$t("fullscreen.object_row.toggle_visibility"),
      checked: visible,
      onIcon: u,
      offIcon: p,
      htmlAttributes: c
    })
  });
});
eS.displayName = "VisibilityToggle";
export let $$eN0 = "layer-panel-onboarding-key";
export function $$eI2(e) {
  let t = cJ();
  let s = sO();
  let r = (e.abbreviatedStateName || e.name).replace(/\n/, " ");
  if (t && e.isWebpage && e.isDefaultResponsiveSet ? r = _$$t("sites.panel.home") : s && "SLIDE" === e.nodeType && (r = _$$t("slides.layers_panel.slide_number", {
    orderNum: e.name
  })), e.shouldShowGuids) {
    let t = Egt.getOverridePathForNode(e.guid);
    return `${r} (${e.guid}): [${t}]`;
  }
  return r;
}
function eE({
  isPrimaryBreakpoint: e
}) {
  return jsx("div", {
    className: _$$s.flex.$,
    children: e && jsx("span", {
      className: _$$s.colorTextBrand.pr8.$,
      children: _$$t("sites.panel.primary")
    })
  });
}
function eM(e) {
  let [t, s] = useState(null);
  let [i, l] = useState(!1);
  let a = cJ();
  let o = md(r8(e.guid));
  let {
    showVisualLayerIcons
  } = useContext(y0);
  useEffect(() => {
    s(e.isRenaming ? e.name : null);
  }, [e.name, e.isRenaming]);
  let c = $$eI2({
    abbreviatedStateName: e.abbreviatedStateName,
    guid: e.guid,
    shouldShowGuids: e.shouldShowGuids,
    name: e.name,
    isDefaultResponsiveSet: e.isDefaultResponsiveSet,
    isWebpage: e.isWebpage,
    nodeType: e.nodeType
  });
  let u = _$$rf(e.recordingKey, e.focusOnSingleClick ? "click" : "dblclick", () => {
    _$$F.trackFromFullscreen("action_rename_selection", {
      source: "click"
    });
    e.startRenaming(e.guid);
  });
  let h = useRef(null);
  let m = useCallback(e => {
    e && (h.current = e, h.current.select());
  }, []);
  let f = AF(e.recordingKey, "change", e => {
    s(e.currentTarget?.value);
  });
  let x = v_(e.recordingKey, "keydown", t => {
    if (!i) {
      if (t.keyCode === Uz.ESCAPE) e.stopRenaming(!1);else if (t.keyCode === Uz.ENTER) e.stopRenaming(!0, h.current?.value, c);else {
        if (t.keyCode !== Uz.TAB) {
          jr(t, W0.NO);
          return aH;
        }
        t.preventDefault();
        e.stopRenaming(!0, h.current?.value, c);
        t.shiftKey ? e.prevNodeGuid && e.startRenaming(e.prevNodeGuid) : e.nextNodeGuid && e.startRenaming(e.nextNodeGuid);
      }
    }
  });
  let C = iQ(e.recordingKey, "blur", () => {
    e.stopRenaming(!0, h.current?.value, c);
  });
  let k = !e.isFixedOnHScroll;
  let w = showVisualLayerIcons && _$$m().ce_il_root;
  return jsxs(Fragment, {
    children: [w ? jsx(_$$N, {
      guid: e.guid,
      size: e.iconSize,
      navigateAndPanTo: e.navigateAndPanTo,
      isMeasurementNode: e.isMeasurementNode,
      rowSelected: e.isSelected
    }) : jsx(Bf, {
      disabled: e.disabled,
      guid: e.guid,
      hovered: e.hovered,
      isDefaultResponsiveSet: e.isDefaultResponsiveSet,
      locked: e.locked,
      navigateAndPanTo: e.navigateAndPanTo,
      outOfView: e.outOfView,
      panelType: e.panelType,
      scrollLeft: e.scrollLeft,
      useUI3Icon: e.useUI3Icons
    }), (e.isThumbnail || e.isFavicon || e.isSocialImage) && jsx(_$$B, {
      "data-tooltip": e.isFavicon ? _$$t("fullscreen.object_row.favicon") : e.isSocialImage ? _$$t("fullscreen.object_row.social_image") : _$$t("fullscreen.object_row.file_thumbnail"),
      "data-tooltip-show-above": !0,
      "data-tooltip-type": Ib.TEXT,
      className: V3,
      svg: _$$A7
    }), e.isRenaming && jsx(ks, {
      autoCapitalize: "off",
      autoCorrect: "off",
      className: g()(hF, e.inputTextOverridesClassName),
      innerRef: m,
      onBlur: C,
      onChange: f,
      onCompositionEnd: () => l(!1),
      onCompositionStart: () => l(!0),
      onKeyDown: x,
      spellCheck: !1,
      value: null !== t ? t : e.name
    }), !e.isRenaming && jsxs("span", {
      className: g()(qg, e.staticTextOverridesClassName, {
        [_$$s.justifyBetween.$]: a,
        [_$$s.eventsAuto.$]: e.isFixedOnHScroll
      }),
      onDoubleClick: e.focusOnSingleClick ? void 0 : u,
      onClick: e.focusOnSingleClick ? u : void 0,
      dir: "auto",
      children: [jsx("div", {
        className: Xv,
        ref: e.layerNamePlaceholderRef,
        children: c
      }), jsx("div", {
        className: g()(_k, {
          [_$$r]: !k || e.isHovered || e.hasSemanticLabel
        }),
        ref: e.layerNameRef,
        children: o && "pending" !== o.state ? o.name : c
      }), e.explicitVariableModeNames && e.explicitVariableModeNames.length > 0 && jsx("div", {
        className: pS,
        children: jsx(W, {
          modeNames: e.explicitVariableModeNames
        })
      }), !e.isHovered && a && jsx(eE, {
        isPrimaryBreakpoint: e.isPrimaryBreakpoint
      })]
    })]
  });
}
let eA = memo(function (e) {
  var t;
  sn.start("object-row-inner-render-timer");
  let {
    topLevelObjectRowHeight,
    nestedObjectRowHeight,
    rowSelectionGap,
    topLevelIconSize,
    nestedIconSize,
    boldLayerNames
  } = useContext(y0);
  let S = useRef(null);
  let [I, E] = useState(null);
  let [M, A] = useState(null);
  let O = useCallback(e => {
    E(e);
  }, []);
  let V = useCallback(e => {
    A(e);
  }, []);
  let U = md(_$$eC);
  t = e.guid;
  let W = md(Fj).has(t);
  let [$, Y] = useState(!1);
  let [X, q] = useState(!1);
  let J = Fk((e, t) => e.get(t)?.name ?? "", e.guid);
  let Z = Fk((e, t) => {
    let s = e.get(t);
    return s && s.isState ? s.stateAbbreviatedName : null;
  }, e.guid);
  let Q = $$eI2({
    abbreviatedStateName: Z,
    name: J,
    shouldShowGuids: e.shouldShowGuids,
    guid: e.guid,
    isDefaultResponsiveSet: e.isDefaultResponsiveSet,
    isWebpage: e.isWebpage,
    nodeType: e.nodeType
  });
  let ee = useCallback(() => {
    let e = S.current;
    return !!e && e.scrollWidth > e.offsetWidth;
  }, []);
  let et = useCallback(() => {
    Y(ee());
  }, [Y, ee]);
  let {
    onContextMenu
  } = e;
  let er = useHandleMouseEvent(e.recordingKey, "contextmenu", useCallback(t => {
    onContextMenu && onContextMenu(e.guid, t);
  }, [onContextMenu, e.guid]));
  let {
    onMouseEnter
  } = e;
  let ei = useCallback(t => {
    et();
    q(!0);
    onMouseEnter && onMouseEnter(e.guid, t);
  }, [onMouseEnter, e.guid, et]);
  let el = useCallback(() => {
    q(!1);
  }, []);
  let {
    lockMouseDown
  } = e;
  let ed = useCallback(t => {
    lockMouseDown && lockMouseDown(e.guid, t);
  }, [lockMouseDown, e.guid]);
  let {
    visibleMouseDown
  } = e;
  let eu = useCallback(t => {
    visibleMouseDown && visibleMouseDown(e.guid, t);
  }, [visibleMouseDown, e.guid]);
  let {
    onDragStartCallback
  } = e;
  let eg = useCallback(t => {
    t.dataTransfer.effectAllowed = "none";
    null != onDragStartCallback && onDragStartCallback(e.guid, t);
  }, [onDragStartCallback, e.guid]);
  let {
    onDragOverCallback
  } = e;
  let ey = useCallback(t => {
    null != onDragOverCallback && onDragOverCallback(e.guid, t);
  }, [onDragOverCallback, e.guid]);
  let {
    onDragDropCallback
  } = e;
  let eC = useCallback(t => {
    null != onDragDropCallback && onDragDropCallback(e.guid, t);
  }, [onDragDropCallback, e.guid]);
  let {
    onDragEnterCallback
  } = e;
  let ev = useCallback(t => {
    null != onDragEnterCallback && onDragEnterCallback(e.guid, t);
  }, [onDragEnterCallback, e.guid]);
  let {
    onDragLeaveCallback
  } = e;
  let eE = useCallback(t => {
    null != onDragLeaveCallback && onDragLeaveCallback(e.guid, t);
  }, [onDragLeaveCallback, e.guid]);
  let eA = useCallback(() => null != e.nodeMemoryUsage && null != e.rootMemoryUsage ? pr(e.nodeMemoryUsage, e.rootMemoryUsage, !0) : ($D(_$$e.SCENEGRAPH_AND_SYNC, Error("node memory usage or root memory usage is null")), ""), [e.nodeMemoryUsage, e.rootMemoryUsage]);
  let eP = !e.visible || e.isAncestorHidden && e.panelType !== g$.CodeComponent;
  let eL = e.locked || e.isAncestorLocked;
  let eR = (e.level + 3) * parsePxNumber(indentWidthWithMargin);
  let eO = parsePxNumber(scrollBarYWidth) + parsePxNumber(trackPadding);
  let eD = void 0 !== e.panelWidth && eR + eO > e.panelWidth + e.scrollLeft;
  let eF = 0 === e.level;
  let eB = A0(uQ6.LAYERS_PANEL_ACTION_ROW);
  let eK = getSingletonSceneGraph().get(e.guid);
  let eG = eB && eF && X && eK && sq(eK);
  let eH = "REACT_FIBER" !== e.nodeType && "SLIDE" !== e.nodeType;
  let eV = md(r8(e.guid))?.state === "pending";
  let eU = J2(UK().showSemanticTagsOnLayerRows);
  let ez = !X && getFeatureFlags().sts_a11y_layers_semantic_tags && eU;
  let eW = eF ? topLevelObjectRowHeight : nestedObjectRowHeight;
  let e$ = eF ? topLevelIconSize : nestedIconSize;
  let eY = {
    transform: `translate3d(0px, ${e.top}px, 0)`,
    height: eW,
    "--row-actions-width": eG ? gdM : yj4,
    "--object-row-height": `${eW}px`,
    "--selection-height": `${eW - 2 * rowSelectionGap}px`
  };
  let eX = e.fixed && 0 !== e.panelWidth;
  let eq = "FRAME" === e.nodeType;
  let eJ = g()({
    [nM]: !0,
    [M4]: eF,
    [Gt]: eq && !Rt(e) && !e.resizeToFit && !e.isStateGroup,
    [Os]: eq && !Rt(e) && e.resizeToFit,
    [t$]: eq && Rt(e),
    [DT]: e.isStateGroup,
    [a6]: MT(e.nodeType),
    [uW]: "SECTION" === e.nodeType,
    [HR]: "SYMBOL" === e.nodeType,
    [rS]: "CODE_COMPONENT" === e.nodeType,
    [bY]: "CODE_INSTANCE" === e.nodeType,
    [$E]: e.componentLike,
    [qm]: e.layerLikeCodeNode || "REACT_FIBER" === e.nodeType,
    [xG]: "MODULE" === e.nodeType,
    [KJ]: "INSTANCE" === e.nodeType,
    [iE]: e.isStamp,
    [Zt]: "HIGHLIGHT" === e.nodeType,
    [HL]: "WIDGET" === e.nodeType || e.isWidgetSublayer,
    [j3]: e.isDescendantOfSymbol,
    [cb]: e.isDescendantOfInstanceExcludingSlotSublayers,
    [vp]: e.isDescendantOfModule,
    [dK]: e.mask,
    [WO]: qW(e.panelType),
    [i9]: e.isWebpage,
    [Cr]: boldLayerNames,
    [Zu]: !!eX,
    [lh]: !!e.layerAbove,
    [yo]: e.isHovered,
    [wH]: e.isSelected,
    [ct]: e.isAncestorSelected,
    [r9]: eP,
    [xt]: eL,
    [sz]: e.hasChildren && e.isExpanded,
    [uC]: e.isLayerAboveSelected && e.isLayerBelowSelected,
    [ow]: e.isLayerAboveSelected && !e.isLayerBelowSelected,
    [sc]: e.isLayerBelowSelected && !e.isLayerAboveSelected
  });
  let eZ = e.versionHistory?.activeId && "current_version" === e.versionHistory.activeId;
  let eQ = e.showMemoryUsage && e.showInFileMemoryPercentage && !e.isRenaming && eZ;
  let {
    registerWidth
  } = gz();
  let e1 = !!eX;
  let {
    observeWithResizeObserver,
    unobserveWithResizeObserver
  } = e;
  useEffect(() => {
    if (I && M) {
      if (e1) return;
      let t = () => {
        let t = I.getBoundingClientRect().right - M.getBoundingClientRect().left + parsePxNumber(rowActionsWidth);
        registerWidth(e.guid, t);
      };
      t();
      observeWithResizeObserver(I, t);
      observeWithResizeObserver(M, t);
      return () => {
        unobserveWithResizeObserver(I);
        unobserveWithResizeObserver(M);
      };
    }
  }, [e1, I, M, e.guid, registerWidth, observeWithResizeObserver, unobserveWithResizeObserver]);
  useEffect(() => {
    let e = "object-row-inner-render-timer";
    let t = sn.get(e);
    t && t.isRunning && !t.isUnreliable && sn.tryStop(e);
  });
  let e4 = jsxs(Fragment, {
    children: [eG && jsx(ex, {
      disabled: eV
    }), eH && jsx(eh, {
      recordingKey: Pt(e, "lockIcon"),
      locked: e.locked,
      isAncestorLocked: e.isAncestorLocked,
      onMouseDown: ed
    }), eH && jsx(eS, {
      recordingKey: Pt(e, "visibleIcon"),
      visible: e.visible,
      isAncestorHidden: e.isAncestorHidden,
      onMouseDown: eu
    })]
  });
  let e5 = !e.hideRowActions && !e.isRenaming && !e.isReadOnly && !e.isDragging && !eD;
  let e6 = jsx("div", {
    className: u4,
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": $ ? Q : null,
    "data-tooltip-max-lines": 4,
    "data-tooltip-show-immediately": !0,
    "data-tooltip-hide-immediately": !0,
    "data-tooltip-show-right": !0,
    "data-tooltip-text-left": !0,
    style: void 0 === e.panelWidth ? void 0 : {
      width: e1 ? `${e.panelWidth}px` : `${e.panelWidth + e.scrollLeft}px`
    },
    children: function (t = !1) {
      return jsxs(Fragment, {
        children: [jsx(ea, {
          currentPage: e.currentPage,
          disabled: eP,
          dispatch: e.dispatch,
          displayOrder: e.displayOrder,
          expandMouseDown: e.expandMouseDown,
          guid: e.guid,
          hasBullet: W,
          hasChildren: e.hasChildren,
          hovered: e.isHovered,
          indentsRefCallback: V,
          isExpanded: e.isExpanded,
          isLastMaskedAtLevels: e.isLastMaskedAtLevels,
          isMaskedAtLevels: e.isMaskedAtLevels,
          isMeasurementNode: t,
          level: e.level,
          locked: eL,
          mask: e.mask,
          outOfView: eD,
          recordingKey: t ? void 0 : Pt(e, "indents"),
          scrollLeft: e.scrollLeft
        }), jsx(eM, {
          ...e,
          abbreviatedStateName: Z,
          disabled: eP,
          hasSemanticLabel: ez,
          hovered: e.isHovered,
          iconSize: e$,
          isFixedOnHScroll: e1,
          isMeasurementNode: t,
          layerNamePlaceholderRef: O,
          layerNameRef: S,
          locked: eL,
          name: J,
          outOfView: eD,
          recordingKey: t ? void 0 : e.recordingKey,
          scrollLeft: e.scrollLeft,
          useUI3Icons: !0
        }), e.hasWarning && jsx("div", {
          className: g()(_$$s.flex.alignCenter.mr16.$, QW),
          "data-tooltip-type": Ib.TEXT,
          "data-tooltip": e.warningMessage,
          "data-tooltip-max-lines": 4,
          "data-tooltip-show-immediately": !0,
          "data-tooltip-hide-immediately": !0,
          children: jsx(_$$R, {})
        }), eQ && jsx("span", {
          className: HY,
          dir: "auto",
          children: eA()
        }), ez && jsx(eb, {
          guid: e.guid,
          isWebpage: e.isWebpage
        }), e5 && jsx("div", {
          className: cm
        })]
      });
    }()
  });
  return jsxs("div", {
    className: eJ,
    "data-onboarding-key": e.guid === U && e.isSelected && (!e.isRowInView || e.isRowInView(e, M)) ? $$eN0 : void 0,
    "data-testid": e.hasChildren ? "layer-row-with-children" : "layer-row",
    draggable: !1,
    onContextMenu: er,
    onDragEnter: ev,
    onDragLeave: eE,
    onDragOver: ey,
    onDragStart: eg,
    onDrop: eC,
    onMouseEnter: ei,
    onMouseLeave: el,
    style: eY,
    children: [e5 && jsxs("div", {
      className: cm,
      style: sx.absolute.wFull.eventsNone.$,
      children: [jsx("div", {
        className: _$$s.wFull.$
      }), jsx("div", {
        className: V0,
        children: jsx("div", {
          className: Hz,
          children: e4
        })
      })]
    }), jsx(_$$e2, {
      condition: e1,
      wrapper: e => jsx("div", {
        style: sx.absolute.wFull.eventsNone.$,
        children: jsx("div", {
          className: n4,
          children: jsx("div", {
            children: e
          })
        })
      }),
      children: e6
    })]
  });
});
eA.displayName = "ObjectRow";
export let $$eP1 = memo(function (e) {
  let t = useSelector(t => t.mirror.appModel.hoveredNode === e.guid);
  let s = e.hasRefToHoveredDef || t || e.isTemporarilyHovered;
  let l = _$$Z("prototype_sections_zoom");
  let a = useCallback(e => {
    l(QZ({
      nodeId: e,
      alwaysPan: !0
    }));
  }, [l]);
  let o = o3(e.guid);
  return jsx(eA, {
    ...e,
    isHovered: s,
    explicitVariableModeNames: o,
    navigateAndPanTo: a
  });
});
export const vx = $$eN0;
export const oo = $$eP1;
export const OG = $$eI2;