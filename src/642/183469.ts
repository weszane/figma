import { Wh } from "../figma_app/615482";
import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useMemo, useState, useEffect, useCallback, useContext, useRef, createRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debug } from "../figma_app/465776";
import { getSingleKey, isEmptyObject } from "../figma_app/493477";
import { ServiceCategories as _$$e } from "../905/165054";
import { Fullscreen, ScrollBehavior, LayoutTabType, SnapshotLevel, SceneGraphHelpers, AppStateTsApi } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { GI } from "../figma_app/387100";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { atom, createRemovableAtomFamily, useAtomValueAndSetter, atomStoreManager } from "../figma_app/27355";
import g from "classnames";
import x from "../vendor/128080";
import { A as _$$A } from "../vendor/90566";
import { trackEventAnalytics } from "../905/449184";
import { globalPerfTimer } from "../905/542194";
import { parsePxNumber } from "../figma_app/783094";
import { H as _$$H } from "../figma_app/147959";
import { getFilteredFeatureFlags } from "../905/717445";
import { Fo } from "../905/63728";
import { V as _$$V } from "../905/418494";
import { BrowserInfo } from "../figma_app/778880";
import { useHandleMouseEvent, RecordingPureComponent, handleMouseEvent, SKIP_RECORDING, generateRecordingKey } from "../figma_app/878298";
import { reportNullOrUndefined } from "../905/11";
import { bG } from "../905/149328";
import { Point } from "../905/736624";
import { V as _$$V2 } from "../905/506207";
import { P as _$$P } from "../905/347284";
import { useCanAccessFullDevMode } from "../figma_app/473493";
import { j7 } from "../905/929976";
import { Rb } from "../figma_app/8833";
import { i as _$$i } from "../figma_app/85949";
import { m0 } from "../figma_app/976749";
import { fullscreenValue } from "../figma_app/455680";
import { UK } from "../figma_app/740163";
import { E as _$$E } from "../905/95280";
import { updateTemporarilyExpandedInstanceLayers, expandNodeToRoot, selectNodesInRange, duplicateSelection, transferSelection, clearSelection, updateHoveredNode, setNodeExpandedRecursive, setSelectionExpanded, setNodeExpanded, setNodeLocked, setNodeVisible, replaceSelection, setNodeTemporarilyExpanded, removeFromSelection, addToSelection } from "../figma_app/741237";
import { NF, Ht, no } from "../figma_app/701001";
import { _Z } from "../figma_app/623300";
import { S as _$$S } from "../figma_app/106763";
import { getUserId } from "../905/372672";
import { y0 } from "../figma_app/718307";
import { getObservableOrFallback, getObservableValue } from "../figma_app/84367";
import { wA as _$$wA, $y, Fk } from "../figma_app/167249";
import { sp, K3 } from "../figma_app/678300";
import { vo } from "../figma_app/164212";
import { p as _$$p } from "../figma_app/353099";
import { S as _$$S2 } from "../figma_app/420927";
import { renderI18nText, getI18nString } from "../905/303541";
import { c as _$$c } from "../905/370443";
import { E as _$$E2 } from "../905/453826";
import { e as _$$e2 } from "../905/621515";
import { $$in } from "../figma_app/76123";
import { y as _$$y } from "../905/409121";
import { N as _$$N } from "../figma_app/268271";
import { rq } from "../905/425180";
import { vx, oo } from "../642/38487";
import { F_ } from "../905/748636";
import { xtb } from "../figma_app/6204";
import { m4 } from "../642/998522";
import { uK } from "../figma_app/178273";
import { jq } from "../figma_app/32128";
import { w as _$$w } from "../642/994749";
import ex from "../vendor/267721";
import { A as _$$A2 } from "../vendor/850789";
import { I6, lp } from "../figma_app/688398";
import { useCurrentFileKey } from "../figma_app/516028";
import { X as _$$X, C as _$$C } from "../642/70391";
import { s as _$$s } from "../cssbuilder/589278";
import { gz, el as _$$el, Rp, $V } from "../figma_app/605071";
import { Qr, pZ, Wm, nM, bV, ct, j3, cb, sc } from "../figma_app/622978";
import { B as _$$B } from "../905/714743";
import { iy, N1, eT as _$$eT, g2, bm, OL, g$, Lc, U$, GN, Uw, Mq, Gs, M3, SV } from "../figma_app/116234";
import { A as _$$A3 } from "../2854/630701";
import { n as _$$n } from "../figma_app/583890";
import { Sk, OZ, w6, nV } from "../figma_app/348938";
import { Wb } from "../figma_app/479760";
import { indentWidth } from "../figma_app/786175";
var f = g;
var y = x;
class q {
  constructor(e, t, s, r, n = {}) {
    this.component = e;
    this.onMouseDown = t;
    this.onMouseMove = s;
    this.onMouseUp = r;
    this.options = n;
    this.oldTouch = null;
    this.draggingID = null;
    this.deferredDragStart = null;
    this.onTouchStart = e => {
      if (e.stopPropagation(), null === this.draggingID && e.touches.length > 0) {
        let t = e.touches[0];
        if (this.draggingID = t.identifier, document.addEventListener("touchmove", this.onTouchMove, {
          passive: !1
        }), document.addEventListener("touchend", this.onTouchEndOrCancel), document.addEventListener("touchcancel", this.onTouchEndOrCancel), this.options.delayInMS) {
          let s = !1;
          if (this.deferredDragStart = r => {
            if (s) return !1;
            let n = r.clientX - t.clientX;
            let i = r.clientY - t.clientY;
            return !(10 > Math.sqrt(n * n + i * i)) && (s = !0, !this.options.delayInMS && (this.onMouseDown(this.mouseEvent("mousedown", e, t)), !0));
          }, this.options.delayInMS) {
            let r = this.deferredDragStart;
            setTimeout(() => {
              this.deferredDragStart !== r || s || (this.deferredDragStart = null, this.onMouseDown(this.mouseEvent("mousedown", e, t)));
            }, this.options.delayInMS);
          }
        } else {
          this.deferredDragStart = null;
          this.onMouseDown(this.mouseEvent("mousedown", e, t));
        }
      }
    };
    this.onTouchMove = e => {
      if (e.stopPropagation(), null !== this.draggingID) {
        for (let t of e.touches) if (t.identifier === this.draggingID) {
          if (this.deferredDragStart) {
            if (!this.deferredDragStart(t)) break;
            this.deferredDragStart = null;
          }
          e.preventDefault();
          this.onMouseMove(this.mouseEvent("mousemove", e, t));
          break;
        }
      }
    };
    this.onTouchEndOrCancel = e => {
      e.stopPropagation();
      null !== this.draggingID && (this.draggingID = null, document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEndOrCancel), document.removeEventListener("touchcancel", this.onTouchEndOrCancel), this.deferredDragStart ? this.deferredDragStart = null : this.onMouseUp(this.mouseEvent("mouseup", e, this.oldTouch)));
    };
  }
  mouseEvent(e, t, s) {
    this.oldTouch = s;
    let r = new MouseEvent(e, {
      altKey: t.altKey,
      metaKey: t.metaKey,
      ctrlKey: t.ctrlKey,
      shiftKey: t.shiftKey,
      screenX: s.screenX,
      screenY: s.screenY,
      clientX: s.clientX,
      clientY: s.clientY
    });
    Object.defineProperty(r, "target", {
      value: t.target
    });
    Object.defineProperty(r, "currentTarget", {
      value: t.currentTarget
    });
    return r;
  }
}
function ep() {
  let {
    show,
    isShowing,
    complete,
    uniqueId
  } = _$$e2({
    overlay: xtb,
    priority: _$$N.SECONDARY_MODAL
  });
  let l = _$$y.isApple();
  let a = useMemo(() => jsx(_$$S2, {
    shortcut: l ? "\u2303\u21E7A" : "Ctrl+Alt+Shift+A"
  }), [l]);
  _$$E2(uniqueId, $$in, () => {
    show({
      canShow: () => !!getFeatureFlags().ce_al_show_msal_onboarding
    });
  });
  return jsx(rq, {
    arrowPosition: F_.LEFT_TITLE,
    description: renderI18nText("fullscreen.msal_onboarding.body"),
    disableHighlight: !0,
    emphasized: !0,
    isShowing,
    onClose: complete,
    onTargetLost: complete,
    primaryCta: {
      label: renderI18nText("general.got_it"),
      type: "button",
      onClick: complete,
      variantOverride: "primary",
      ctaTrackingDescriptor: _$$c.GOT_IT
    },
    secondaryCta: {
      label: renderI18nText("general.learn_more"),
      type: "link",
      href: "https://help.figma.com/hc/articles/5731482952599#suggest",
      ctaTrackingDescriptor: _$$c.LEARN_MORE
    },
    targetKey: vx,
    title: jsx("p", {
      "data-testid": "msal-onboarding-title",
      children: renderI18nText("fullscreen.msal_onboarding.header_with_shortcut", {
        msalShortcut: a
      })
    }),
    trackingContextName: "MSAL Onboarding Overlay"
  });
}
var ey = ex;
function ej({
  ids: e,
  thumbnailEdits: t,
  focusedNodeId: s,
  width: i,
  height: l
}) {
  let a = useCurrentFileKey();
  let [o, d] = useState([]);
  let [c] = _$$A2(o, 100, {
    equalityFn: ew
  });
  useEffect(() => {
    if (c.length) {
      let e = [...c];
      s && e.includes(s) && (e = [s, ...e.filter(e => e !== s)]);
      ey()(e, 5).forEach((e, t) => {
        e.forEach(e => {
          let r = e === s;
          setTimeout(() => I6(e, r, a || "", i, l), 40 * t);
        });
      });
      d(t => t.filter(t => !e.includes(t)));
    }
  }, [c, s, a, i, l]);
  let u = useCallback(e => {
    d(t => t.includes(e) ? t : [...t, e]);
  }, []);
  return jsx(Fragment, {
    children: e.map(e => jsx(ek, {
      guid: e,
      editCount: t.get(e) || 0,
      requestThumbnailGeneration: u
    }, e))
  });
}
let ev = Wh(() => atom({}));
let eS = createRemovableAtomFamily(e => atom(t => t(ev)[e] ?? null, (t, s, r) => {
  let n = t(ev);
  s(ev, {
    ...n,
    [e]: r
  });
}));
function ek({
  guid: e,
  editCount: t,
  requestThumbnailGeneration: s
}) {
  let [i, l] = useAtomValueAndSetter(eS(e));
  let [a] = _$$A2(t, 400);
  useEffect(() => () => {
    l(a);
  }, [a, l]);
  useEffect(() => {
    a === i && lp(e) || s(e);
  }, [e, a, s, i]);
  return jsx(Fragment, {});
}
function ew(e, t) {
  return e.length === t.length && e.every((e, s) => e === t[s]);
}
function eT(e) {
  let {
    topLevelIconSize
  } = useContext(y0);
  let s = _$$wA((e, t) => t.filter(t => {
    let s = e.get(t)?.type;
    return !!s && !_$$w.includes(s);
  }), e.ids);
  let i = $y((e, t) => Fullscreen ? Fullscreen.getLastEditTimes(t).reduce((e, s, r) => (e.set(t[r], s), e), new Map()) : new Map(), e.ids);
  return jsx(ej, {
    ids: s,
    thumbnailEdits: i,
    focusedNodeId: e.focusedNodeId,
    width: 2 * topLevelIconSize,
    height: 2 * topLevelIconSize
  });
}
function eA({
  guid: e,
  objectRow: t,
  setRowWidth: s
}) {
  let i = useRef(null);
  let [l, a] = useState();
  let {
    rowWidthsCache
  } = gz();
  useEffect(() => {
    if (!i.current || !e) return;
    let t = rowWidthsCache[e];
    void 0 !== t && (t !== l?.width || e !== l?.guid) && a({
      width: t,
      guid: e
    });
  });
  useEffect(() => {
    l?.guid === e && s({
      guid: e,
      width: l.width
    });
  }, [l, e, s]);
  return jsx("div", {
    ref: i,
    className: f()(_$$s.absolute.invisible.$, Qr),
    "data-testid": "autoscroll-measurement-node",
    children: t
  });
}
function eO(e) {
  let {
    top,
    width,
    guid,
    level,
    onMouseEnter,
    recordingKey
  } = e;
  let {
    nestedObjectRowHeight
  } = useContext(y0);
  let c = useHandleMouseEvent(recordingKey, "click", e => {
    updateTemporarilyExpandedInstanceLayers([guid]);
  });
  let u = {
    transform: `translate3d(0px, ${top}px, 0)`,
    width,
    height: nestedObjectRowHeight
  };
  let p = {
    width: iy * level * 2,
    marginRight: 1 === level ? iy / 2 : 0
  };
  return jsxs("div", {
    className: "layer_expansion_row--layerExpansionRow--G8Twa object_row--row--HIYa5",
    style: u,
    onMouseDown: e => e.stopPropagation(),
    onClick: c,
    onMouseEnter,
    role: "button",
    tabIndex: 0,
    children: [jsx("span", {
      className: "layer_expansion_row--layerExpansionIndent--Bg5Df object_row--indent--uZlad",
      style: p
    }), jsx("span", {
      className: "layer_expansion_row--iconWrapper--J3NJb object_row--iconWrapper--ivRSW",
      children: jsx(_$$B, {
        svg: _$$A3
      })
    }), jsx("span", {
      className: "layer_expansion_row--rowText--yhMnt object_row--rowText--3qo7Q ellipsis--ellipsis--Tjyfa",
      children: renderI18nText("design_systems.component_properties.see_all_layers")
    })]
  });
}
class eF extends RecordingPureComponent {
  renderPlainIndents(e) {
    let t = [];
    for (let s = 0; s < e + 1; s++) t.push(jsx("span", {
      className: pZ
    }, s));
    return jsx("span", {
      className: Wm,
      children: t
    });
  }
  render() {
    let e = {
      transform: `translate3d(0px, ${this.props.top}px, 0)`,
      width: this.props.width,
      height: _$$n,
      "--selection-height": `${_$$n}px`,
      "--row-gap": "0px"
    };
    let t = f()(nM, bV, {
      [ct]: this.props.isParentSelected,
      [j3]: this.props.isDescendantOfSymbol,
      [cb]: this.props.isDescendantOfInstanceExcludingSlotSublayers,
      [sc]: this.props.isParentSelected && this.props.sectionHasChildren
    });
    return jsxs("div", {
      className: t,
      style: e,
      children: [this.renderPlainIndents(this.props.level), this.props.sectionType === ScrollBehavior.FIXED ? getI18nString("fullscreen.properties_panel.constraints_resizing_panel.fixed") : getI18nString("fullscreen.properties_panel.scrolls")]
    });
  }
}
eF.displayName = "SectionRow";
let eH = "objects_panel--dropTargetBox--4SX8i";
let eV = new _$$V();
function eU(e) {
  return "object" === e.rowType ? e.guid : "layer-expansion" === e.rowType ? `expand-${e.containingPrimaryInstanceGUID}` : e.sectionId;
}
class ez extends RecordingPureComponent {
  constructor(e) {
    super(e);
    this.state = {
      scrollTop: 0,
      scrollLeft: 0,
      mouseDown: null,
      dropTarget: null,
      needsScrollLine: !1,
      rowToScrollToData: null
    };
    this.cachedAllRowData = [];
    this.topByGuid = Object.create(null);
    this.leftByGuid = Object.create(null);
    this.heightByGuid = Object.create(null);
    this.totalHeight = 0;
    this.cachedAllObjectRowDataMap = {};
    this.setNeedsScrollLine = e => {
      this.setState({
        needsScrollLine: e > 0
      });
    };
    this.rangeSelectAnchorNodeId = null;
    this.getScene = () => this.props.sceneGraph || getSingletonSceneGraph();
    this.initializeRows = e => {
      let t = this.getScene();
      let s = e.customRowBuilder ? e.customRowBuilder() : Sk({
        sceneGraph: t,
        rootNodeGuids: e.topNodeProperties?.children ?? [],
        showImmutableFrameSublayers: e.showImmutableFrameSublayers,
        temporarilyExpandedInstanceLayers: e.temporarilyExpandedInstanceLayers,
        topLevelObjectRowHeight: e.topLevelObjectRowHeight,
        nestedObjectRowHeight: e.nestedObjectRowHeight,
        focusedNodes: e.focusedNodes
      });
      this.topByGuid = s.topByGuid;
      this.leftByGuid = s.leftByGuid;
      this.heightByGuid = s.heightByGuid;
      this.sectionById = s.sectionById;
      this.totalHeight = s.totalHeight;
      this.cachedAllRowData = s.rowData;
      atomStoreManager.set(_$$X, s.rowData.filter(N1).some(e => e.isExpanded && e.hasChildren));
      this.cachedAllObjectRowDataMap = s.rowData.filter(N1).reduce((e, t) => (e[t.guid] = t, e), {});
    };
    this.updateAllVisibleRowGuids = () => {
      let e = [];
      for (let t of this.cachedAllRowData) N1(t) && e.push(t.guid);
      this.context.registerGuids(e);
    };
    this.justToggledExpandedGuid = null;
    this.anchorNodeId = null;
    this.topNodeDelta = 0;
    this.lastCollapsedScrollPosition = null;
    this.scrollAfterNodeExpanded = !1;
    this.lastCollapsedGuid = null;
    this.hasCrossedDragThreshold = !1;
    this.onLeftPanelCollapsedChange = e => {
      if (!e) {
        let e = this.getTopSelectedNodeId();
        e && this.scrollToNode({
          nodeId: e
        });
      }
    };
    this.scrollToNodeIdAfterUpdate = null;
    this.scrollToNode = ({
      nodeId: e,
      forStackInsertion: t
    }) => {
      let s = this.topByGuid[e];
      let r = void 0 !== s;
      let n = this.state.rowToScrollToData?.guid === e;
      if (!r || !n) {
        let t = this.getScene().get(e);
        t && t.parentGuid && expandNodeToRoot(t.parentGuid);
        this.scrollToNodeIdAfterUpdate = e;
        return;
      }
      let i = this.heightByGuid[e];
      let l = !this.isVerticallyVisible(s, s + i);
      let a = this.shouldHorizontallyAutoscroll(e);
      (l || a) && this.scrollNodeIntoView(e, {
        forStackInsertion: t
      });
    };
    this.recalculateLayout = () => {
      this.windowInnerHeight = window.innerHeight;
      this.recalculateRequested = !1;
    };
    this.recalculateRequested = !1;
    this.requestRecalculateLayout = () => {
      this.recalculateRequested || requestAnimationFrame(this.recalculateLayout);
    };
    this.isScrolling = !1;
    this.scrollingTimeout = null;
    this.handleMouseEnterAfterScroll = null;
    this.hasTrackedHScrollEvent = !1;
    this.onScroll = e => {
      this.isScrolling = !0;
      this.nextScrollTop = e;
      null == this.frameRequestY && (this.frameRequestY = requestAnimationFrame(this.setScrollTopState));
      null != this.scrollingTimeout && clearTimeout(this.scrollingTimeout);
      this.scrollingTimeout = setTimeout(this.doneScrolling, 50);
      this.props.onScroll(e);
      this.setNeedsScrollLine(e);
      atomStoreManager.set(uK, {
        autoScroll: !1
      });
    };
    this.onScrollLeftChanged = (e, t) => {
      t || this.props.stopRenaming(!1);
      this.nextScrollLeft = e;
      null == this.frameRequestX && (this.frameRequestX = requestAnimationFrame(this.setScrollLeftState));
      this.hasTrackedHScrollEvent || (trackEventAnalytics("layers_horizontal_scroll"), this.hasTrackedHScrollEvent = !0);
    };
    this.doneScrolling = () => {
      this.isScrolling = !1;
      this.scrollingTimeout = null;
      this.handleMouseEnterAfterScroll && (this.handleMouseEnterAfterScroll(), this.handleMouseEnterAfterScroll = null);
    };
    this.frameRequestY = null;
    this.frameRequestX = null;
    this.nextScrollTop = 0;
    this.nextScrollLeft = 0;
    this.setScrollTopState = () => {
      this.setState({
        scrollTop: this.nextScrollTop
      });
      this.frameRequestY = null;
    };
    this.setScrollLeftState = () => {
      this.setState({
        scrollLeft: this.nextScrollLeft
      });
      this.frameRequestX = null;
    };
    this.isNodeSticky = e => (reportNullOrUndefined(_$$e.FIGJAM, this.props), e.parentGuid === this.props.currentPage && ("SYMBOL" === e.type || "FRAME" === e.type && !e.resizeToFit));
    this.isAncestorSticky = e => {
      let t = this.getScene();
      let s = e.parentGuid ? t.get(e.parentGuid) : null;
      for (; s && s.guid !== this.props.currentPage;) {
        if (this.isNodeSticky(s)) return !0;
        s = s.parentGuid ? t.get(s.parentGuid) : null;
      }
      return !1;
    };
    this.stickyHeaderGuid = null;
    this.lastStickyHeaderGuid = null;
    this.lastExpansionTarget = null;
    this.findStickyHeaderRowAndReplaceInVisibleRows = e => {
      if (this.stickyHeaderGuid = null, (this.state.scrollTop > 0 || this.scrollAfterNodeExpanded) && e.length > 0) {
        let t;
        let s = this.state.scrollTop;
        let r = (e, t, s) => {
          if ("object" !== e.rowType) return !1;
          let r = this.findStickyHeader(e, t, s);
          if (r) {
            let t = this.renderedVisibleRowProps.indexOf(e);
            t >= 0 ? this.renderedVisibleRowProps[t] = r : this.renderedVisibleRowProps.push(r);
          }
          return !!r;
        };
        let n = null;
        for (let i = 0; i < e.length; i++) if (0 === (t = e[i]).level) {
          if (n && r(n, n.top, t.top) || t.top > s) return;
          n = t;
        }
        debug(!!n, "has at least one top level section");
        r(n, n.top, Number.POSITIVE_INFINITY);
      }
    };
    this.scrollNodeIntoView = (e, t) => {
      let s = t && t.fromAIRename || !1;
      let r = t && t.forStackInsertion || !1;
      if (null == this.topByGuid[e] || this.shouldHorizontallyAutoscroll(e) && this.state.rowToScrollToData?.guid !== e || !this.scrollContainerEl || !this.scrollContainer) return;
      let n = this.topByGuid[e];
      let i = this.heightByGuid[e];
      let l = this.state.scrollTop;
      let a = this.scrollContainerHeight();
      if (this.stickyHeaderGuid === e) {
        r && this.scrollContainer.scrollTo(n - 1);
        return;
      }
      let o = this.getScene().get(e);
      if (!o) return;
      s || atomStoreManager.set(uK, {
        autoScroll: !1
      });
      let d = this.isAncestorSticky(o);
      if (d && n < l + i ? this.scrollContainer.scrollTo(n - i) : !d && n < l ? this.scrollContainer.scrollTo(n) : n + i > l + a && this.scrollContainer.scrollTo(n - a / 2), this.shouldHorizontallyAutoscroll(e) && this.state.rowToScrollToData?.guid === e && this.state.rowToScrollToData?.width) {
        let t = this.getNewHorizontalAutoscrollPosition(e, this.state.rowToScrollToData?.width);
        void 0 !== t && this.scrollContainer.scrollToLeft(t);
      }
    };
    this.rowContextMenu = (e, t) => {
      if (this.props.onRowContextMenu) {
        this.props.onRowContextMenu(e, t);
        return;
      }
      let s = this.getScene().get(e);
      if (!s) return;
      sp(this.getScene(), this.props.sceneGraphSelection, s.guid) || this.updateSelection(s.guid);
      let {
        clientX,
        clientY
      } = t;
      this.props.dispatch(j7({
        type: Rb,
        data: {
          clientX,
          clientY
        }
      }));
    };
    this.rowContainerMouseDown = handleMouseEvent(this, "mousedown", e => {
      let t = this.guidAtMousePosition(e.clientY);
      if (!t || (e.stopPropagation(), document.activeElement && "blur" in document.activeElement && !this.props.renamingGuid && document.activeElement.blur(), this.props.ignoreRightClickForSelection && 2 === e.button)) return;
      if (this.props.onSelectNodesFromLayersPanel?.(), (this.props.allowToggleSelection ?? !0) && Fo(e)) {
        this.toggleSelected(t);
        return;
      }
      getFeatureFlags().version_diffing && this.props.editModeType === LayoutTabType.COMPARE_CHANGES && Fullscreen.setActiveChange(t) && this.props.showViewChangesNotification(t);
      let s = getSingleKey(this.props.sceneGraphSelection);
      let r = null;
      if (s ? r = s : this.rangeSelectAnchorNodeId && K3(this.props.sceneGraphSelection, this.rangeSelectAnchorNodeId) && (r = this.rangeSelectAnchorNodeId), (this.props.allowSelectRange ?? !0) && e.shiftKey && r) {
        selectNodesInRange(r, t);
        fullscreenValue.commit();
        return;
      }
      sp(this.getScene(), this.props.sceneGraphSelection, t) || (this.updateSelection(t), this.rangeSelectAnchorNodeId = t);
      _$$i(e) || this.setState({
        mouseDown: new Point(e.clientX, e.clientY)
      });
    }, {
      recordMetadata: e => {
        let t = this.guidAtMousePosition(e.clientY);
        debug(!!t, "interaction test does not support rare case of no guid under mouse (empty layers panel?)");
        return {
          path: _$$eT(t, this.getScene()),
          clientX: e.clientX
        };
      },
      playbackMetadata: e => {
        let t = g2(e.path, this.getScene(), this.props.currentPage);
        let s = this.topByGuid[t] + this.heightByGuid[t] / 2;
        return {
          clientY: this.clientY(s),
          clientX: e.clientX
        };
      }
    });
    this.onMouseMove = e => {
      if (this.scrollContainer && this.scrollContainerEl && this.state.mouseDown && !this.props.renamingGuid) {
        this.state.mouseDown.distanceTo({
          x: e.clientX,
          y: e.clientY
        }) > 3 && (this.hasCrossedDragThreshold = !0);
        let t = this.relativeY(e.clientY);
        let s = this.state.scrollTop;
        let r = this.scrollContainerHeight();
        if (r > 0) {
          if (t < s) {
            this.scrollContainer.scrollTo(s - bm(s - t, this.props.topLevelObjectRowHeight));
            return;
          }
          if (t > s + r) {
            this.scrollContainer.scrollTo(s + bm(t - s - r, this.props.topLevelObjectRowHeight));
            return;
          }
        }
        let n = OL(this.getScene(), this.props.sceneGraphSelection, this.topByGuid, this.heightByGuid, this.sectionById, e.clientX - this.state.mouseDown.x, t, this.mouseOverStickyHeaderGuid(e.clientY), this.props.panelType ?? g$.Object, this.props.topNodeProperties, this.props.insertionLineBoxOffset);
        this.state.dropTarget && n && this.state.dropTarget.index !== n.index && _$$H.trigger(SnapshotLevel.SNAP);
        (this.hasCrossedDragThreshold || !n) && (this.expandDropTargetIfNeeded(n, t), this.setState({
          dropTarget: n
        }));
      }
    };
    this.onMouseUp = handleMouseEvent(this, "mouseup", e => {
      let t = this.getScene();
      let s = !1;
      if (this.hasCrossedDragThreshold = !1, this.state.mouseDown && !this.props.renamingGuid) {
        if (s = !0, 3 >= this.state.mouseDown.distanceTo(new Point(e.clientX, e.clientY))) {
          if (!_$$i(e)) {
            let t = this.guidAtMousePosition(e.clientY);
            t ? this.updateSelection(t) : s = !1;
          }
        } else if (!this.props.isReadOnly) {
          let s = OL(t, this.props.sceneGraphSelection, this.topByGuid, this.heightByGuid, this.sectionById, e.clientX - this.state.mouseDown.x, this.relativeY(e.clientY), this.mouseOverStickyHeaderGuid(e.clientY), this.props.panelType ?? g$.Object, this.props.topNodeProperties, this.props.insertionLineBoxOffset);
          if (!s) return;
          let {
            parentGuid,
            index,
            section
          } = s;
          let l = t.get(parentGuid);
          if (!l || void 0 === index) return;
          let a = e.altKey;
          let o = Lc(l, index);
          a ? (this.props.onSelectNodesFromLayersPanel?.(), permissionScopeHandler.user("duplicate-selection", () => duplicateSelection(l.guid, o, section))) : (this.props.onSelectNodesFromLayersPanel?.(), permissionScopeHandler.user("reparent-selection", () => transferSelection(l.guid, o, section)));
          expandNodeToRoot(l.guid);
          SceneGraphHelpers.clearTemporarilyExpanded();
          fullscreenValue.commit();
        }
      }
      if (this.setState({
        mouseDown: null,
        dropTarget: null
      }), this.isDraggingToToggle && (s = !0, this.isDraggingToToggle = null, fullscreenValue.commit()), !s) return SKIP_RECORDING;
    }, {
      recordMetadata: e => {
        let t = this.getScene();
        let s = this.guidAtMousePosition(e.clientY);
        let r = this.relativeY(e.clientY);
        debug(!!s, "interaction test does not support rare case of no guid under mouse (empty layers panel?)");
        let n = this.topByGuid[s];
        let i = this.heightByGuid[s];
        return {
          path: _$$eT(s, t),
          treatAsEndOfClick: !!(this.state.mouseDown && 5 > this.state.mouseDown.distanceTo(new Point(e.clientX, e.clientY))),
          belowAll: r > n + i,
          clientX: e.clientX,
          aboveAll: r < n
        };
      },
      playbackMetadata: e => {
        if (e.treatAsEndOfClick) return {
          clientX: this.state.mouseDown.x,
          clientY: this.state.mouseDown.y
        };
        {
          let t = g2(e.path, this.getScene(), this.props.currentPage);
          let s = this.topByGuid[t] + this.heightByGuid[t] / 2;
          e.belowAll && (s += this.heightByGuid[t]);
          e.aboveAll && (s -= this.heightByGuid[t]);
          return {
            clientY: this.clientY(s),
            clientX: e.clientX
          };
        }
      }
    });
    this.setRowToScrollToData = e => {
      this.setState({
        rowToScrollToData: e
      });
    };
    this.getNewHorizontalAutoscrollPosition = (e, t) => {
      let s = this.leftByGuid[e];
      if (void 0 === s) return;
      let r = s - 16;
      return this.isOutOfViewLeft(e) ? Math.max(0, r) : this.isOutOfViewRight(e) && t ? t - s > (this.props.width ?? 0) ? r : t - (this.props.width ?? 0) : void 0;
    };
    this.onScrollContainerMouseDown = () => {
      clearSelection();
      fullscreenValue.commit();
    };
    this.scrollContainerRef = e => {
      this.scrollContainer = e;
      this.scrollContainerEl = e?.getClipContainer();
    };
    this.containerMouseLeave = e => {
      updateHoveredNode("");
      null != this.hoverToExpandGroupTimeout && clearTimeout(this.hoverToExpandGroupTimeout);
    };
    this.expandMouseDown = (e, t) => {
      let s = this.getScene().get(e);
      if (!s) return;
      t.stopPropagation();
      trackEventAnalytics("objects_panel_expand", {
        nonInteraction: 0
      });
      let r = !s.isExpanded;
      t.altKey ? setNodeExpandedRecursive(s.guid, r) : Fo(t) && !isEmptyObject(this.props.sceneGraphSelection) ? setSelectionExpanded(s.guid, r) : setNodeExpanded(s.guid, r);
      this.justToggledExpandedGuid = s.guid;
    };
    this.isDraggingToToggle = null;
    this.lockMouseDown = (e, t) => {
      let s = this.getScene().get(e);
      if (!s || this.props.isReadOnly) return;
      t.stopPropagation();
      let r = !s.locked;
      this.isDraggingToToggle = {
        locked: r
      };
      permissionScopeHandler.user("set-locked", () => {
        setNodeLocked(s.guid, r, t.altKey);
      });
    };
    this.visibleMouseDown = (e, t) => {
      let s = this.getScene().get(e);
      if (!s || this.props.isReadOnly) return;
      t.stopPropagation();
      let r = !s.visible;
      this.isDraggingToToggle = {
        visible: r
      };
      permissionScopeHandler.user("set-visible", () => {
        setNodeVisible(s.guid, r, t.altKey);
      });
    };
    this.hoverToExpandGroupTimeout = null;
    this.rowMouseEnter = (e, t) => {
      let s = this.getScene().get(e);
      if (!s) return;
      let r = () => {
        if (this.isDraggingToToggle) {
          let {
            locked,
            visible
          } = this.isDraggingToToggle;
          null != locked && permissionScopeHandler.user("set-locked", () => function (e, t, s) {
            e && eY(e, s, e => {
              e.locked = t;
            });
          }(s, locked, !1));
          null != visible && permissionScopeHandler.user("set-visible", () => function (e, t, s) {
            e && eY(e, s, e => {
              e.visible = t;
            });
          }(s, visible, !1));
        }
        this.state.mouseDown || updateHoveredNode(s.guid);
      };
      BrowserInfo.firefox && this.isScrolling ? this.handleMouseEnterAfterScroll = r : r();
    };
    this.onDragDrop = (e, t) => {
      this.onMouseUp(t.nativeEvent);
    };
    this.onDragOver = (e, t) => {
      this.onMouseMove(t.nativeEvent);
    };
    this.onDragEnter = (e, t) => {
      this.onMouseMove(t.nativeEvent);
      this.rowMouseEnter(e, t);
    };
    this.onDragLeave = (e, t) => {
      this.onMouseMove(t.nativeEvent);
    };
    this.renderedVisibleRowProps = [];
    this.touchAdapter = new q(this, this.rowContainerMouseDown, this.onMouseMove, this.onMouseUp, {
      delayInMS: 500
    });
    this.getIsRowInView = (e, t) => {
      if (!this.scrollContainer) return !0;
      let s = this.scrollContainer.getClipContainer().getBoundingClientRect();
      if (!t) return !0;
      let r = t.getBoundingClientRect();
      return e.fixed && (this.props.width ?? 0) !== 0 || r.top >= s.top && r.bottom <= s.bottom;
    };
    this.recalculateLayout();
    this.initializeRows(this.props);
    this.scrollContainerInnerRef = createRef();
  }
  componentDidMount() {
    super.componentDidMount();
    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("mouseup", this.onMouseUp);
    window.addEventListener("resize", this.requestRecalculateLayout);
    fullscreenValue.fromFullscreen.on("scrollToNode", this.scrollToNode);
    let e = Fullscreen && Fullscreen.getFirstSelectedNodeIdForCurrentPage();
    e && this.scrollToNode({
      nodeId: e
    });
    this.updateAllVisibleRowGuids();
    this.props.scrollContainerInnerRef?.(this.scrollContainerInnerRef);
    let t = "objects-panel-inner-render-timer";
    let s = globalPerfTimer.get(t);
    s && s.isRunning && !s.isUnreliable && globalPerfTimer.tryStop(t);
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    document.removeEventListener("mousemove", this.onMouseMove);
    document.removeEventListener("mouseup", this.onMouseUp);
    window.removeEventListener("resize", this.requestRecalculateLayout);
    fullscreenValue.fromFullscreen.removeListener("scrollToNode", this.scrollToNode);
  }
  updateSelection(e) {
    this.props.onSelectionUpdated ? this.props.onSelectionUpdated(e) : (_$$S("panel"), replaceSelection([e]), fullscreenValue.commit());
  }
  UNSAFE_componentWillUpdate(e) {
    if (e.renamingGuid && e.renamingGuid !== this.props.renamingGuid) this.scrollToNodeIdAfterUpdate = e.renamingGuid;else if (e.currentPage && e.currentPage !== this.props.currentPage) {
      let e = Fullscreen && Fullscreen.getFirstSelectedNodeIdForCurrentPage();
      e && (this.scrollToNodeIdAfterUpdate = e);
    }
    let t = this.props.focusedNodes !== e.focusedNodes;
    let s = this.props.objectsPanelRowRebuildCounter !== e.objectsPanelRowRebuildCounter;
    let r = this.props.customRowBuilder !== e.customRowBuilder;
    if ((s || r || this.props.currentPage !== e.currentPage || this.props.showImmutableFrameSublayers !== e.showImmutableFrameSublayers || !y()(this.props.temporarilyExpandedInstanceLayers, e.temporarilyExpandedInstanceLayers) || !y()(this.props.temporarilyHoveredNodes, e.temporarilyHoveredNodes) || t && getFeatureFlags().ce_il_layer_focus || !y()(this.props.topNodeProperties?.children, e.topNodeProperties?.children)) && this.initializeRows(e), this.anchorNodeId = null, this.topNodeDelta = 0, s) {
      if (null !== this.justToggledExpandedGuid) {
        this.justToggledExpandedGuid === this.stickyHeaderGuid ? (this.lastCollapsedScrollPosition = this.state.scrollTop, this.lastCollapsedGuid = this.justToggledExpandedGuid, this.scrollToNodeIdAfterUpdate = this.stickyHeaderGuid) : this.justToggledExpandedGuid === this.lastCollapsedGuid && this.justToggledExpandedGuid === this.lastStickyHeaderGuid && this.topByGuid[this.lastStickyHeaderGuid] === this.state.scrollTop && (this.scrollAfterNodeExpanded = !0);
        this.justToggledExpandedGuid = null;
      } else {
        let e = !1;
        for (let t of this.renderedVisibleRowProps) if ("object" === t.rowType && this.scrollContainer && U$(t, 0, this.scrollContainer.getTrackHeight(), this.state.scrollTop) && this.props.sceneGraphSelection[t.guid]) {
          e = !0;
          break;
        }
        let t = null;
        let s = null;
        for (let r of this.renderedVisibleRowProps) "object" === r.rowType && this.scrollContainer && U$(r, 0, this.scrollContainer.getTrackHeight(), this.state.scrollTop) && ((!e || this.props.sceneGraphSelection[r.guid]) && (null === t || t > r.top) && (t = r.top, this.anchorNodeId = r.guid), (null === s || s > r.top) && (s = r.top, this.topNodeDelta = this.topByGuid[r.guid] - r.top));
      }
    }
  }
  componentDidUpdate(e, t) {
    if (super.componentDidUpdate(e, t), !this.scrollContainer) return;
    if (this.updateAllVisibleRowGuids(), this.scrollToNodeIdAfterUpdate) {
      this.scrollNodeIntoView(this.scrollToNodeIdAfterUpdate);
      let e = void 0 !== this.topByGuid[this.scrollToNodeIdAfterUpdate];
      let t = this.state.rowToScrollToData?.guid === this.scrollToNodeIdAfterUpdate;
      e && t && (this.scrollToNodeIdAfterUpdate = null);
    } else if (this.scrollAfterNodeExpanded) {
      null != this.lastCollapsedScrollPosition && this.scrollContainer.scrollTo(this.lastCollapsedScrollPosition);
      this.scrollAfterNodeExpanded = !1;
      this.lastCollapsedScrollPosition = null;
      this.lastCollapsedGuid = null;
    } else {
      let e = this.scrollContainer.getScrollTop() + this.topNodeDelta;
      let t = !1;
      for (let s of this.renderedVisibleRowProps) if ("object" === s.rowType && s.guid === this.anchorNodeId) {
        t = U$(s, 0, this.scrollContainer.getTrackHeight(), e);
        break;
      }
      t ? this.scrollContainer.scrollTo(e) : this.anchorNodeId && this.scrollNodeIntoView(this.anchorNodeId);
    }
    let s = "objects-panel-inner-render-timer";
    let r = globalPerfTimer.get(s);
    r && r.isRunning && !r.isUnreliable && globalPerfTimer.tryStop(s);
  }
  getTopSelectedNodeId() {
    let e;
    let t = Object.keys(this.props.sceneGraphSelection);
    let s = 1 / 0;
    for (let r of t) {
      let t = this.topByGuid[r];
      t < s && (s = t, e = r);
    }
    return e;
  }
  findStickyHeader(e, t, s) {
    let r = this.state.scrollTop;
    let n = this.getScene().get(e.guid);
    if (!n || !e.hasChildren || !(e.isExpanded || e.isTemporarilyExpanded)) return null;
    let i = t <= r && s > r + e.height;
    let l = s > r && s <= r + e.height;
    return (this.scrollAfterNodeExpanded || i || l) && this.isNodeSticky(n) ? i ? (this.stickyHeaderGuid = e.guid, this.lastStickyHeaderGuid = this.stickyHeaderGuid, {
      ...e,
      fixed: !0
    }) : l ? {
      ...e,
      top: s - e.height,
      layerAbove: !0
    } : this.scrollAfterNodeExpanded && e.guid === this.lastStickyHeaderGuid ? (this.stickyHeaderGuid = e.guid, this.lastStickyHeaderGuid = this.stickyHeaderGuid, {
      ...e,
      fixed: !0
    }) : null : null;
  }
  expandDropTargetIfNeeded(e, t) {
    let s = null;
    if (e && "sticky" !== e.parentTop) {
      let r = this.getScene().get(e.parentGuid);
      debug(!!r, "parentGuid should point to a valid node");
      let n = this.heightByGuid[e.parentGuid];
      let i = t > e.parentTop + n / 3 && t < e.parentTop + 2 * n / 3;
      r.uiOrderedChildren.length && i && (s = r.guid);
    }
    this.lastExpansionTarget !== s && (this.lastExpansionTarget && null != this.hoverToExpandGroupTimeout && clearTimeout(this.hoverToExpandGroupTimeout), s && (this.hoverToExpandGroupTimeout = setTimeout(() => {
      this.state.mouseDown && setNodeTemporarilyExpanded(s, !0);
    }, 1e3)), this.lastExpansionTarget = s);
  }
  toggleSelected(e) {
    this.props.sceneGraphSelection[e] ? removeFromSelection([e]) : (addToSelection([e]), this.rangeSelectAnchorNodeId = e);
    fullscreenValue.commit();
  }
  relativeY(e) {
    let t = bG();
    this.scrollContainerEl && (t = this.scrollContainerEl.getBoundingClientRect().top);
    return e - t + this.state.scrollTop;
  }
  clientY(e) {
    let t = bG();
    this.scrollContainerEl && (t = this.scrollContainerEl.getBoundingClientRect().top);
    return e + t - this.state.scrollTop;
  }
  isVerticallyVisible(e, t) {
    if (!this.scrollContainerEl) return !0;
    let s = this.state.scrollTop;
    let r = this.scrollContainerEl.getBoundingClientRect().height + this.state.scrollTop;
    return s < e && t < r;
  }
  isOutOfViewLeft(e) {
    let t = this.leftByGuid[e];
    return void 0 !== t && t < this.state.scrollLeft - 50;
  }
  isOutOfViewRight(e) {
    let t = this.leftByGuid[e];
    return void 0 !== t && t + parsePxNumber(indentWidth) > this.state.scrollLeft + (this.props.width ?? 0) - 50;
  }
  shouldHorizontallyAutoscroll(e) {
    return this.props.renamingGuid !== e && (this.isOutOfViewLeft(e) || this.isOutOfViewRight(e));
  }
  guidAtMousePosition(e) {
    return this.mouseOverStickyHeaderGuid(e) || GN(this.getScene(), this.props.sceneGraphSelection, this.topByGuid, this.heightByGuid, this.relativeY(e));
  }
  mouseOverStickyHeaderGuid(e) {
    return this.scrollContainerEl && e - this.scrollContainerEl.getBoundingClientRect().top < this.props.topLevelObjectRowHeight ? this.stickyHeaderGuid : null;
  }
  computeStackOutlineHeight(e, t, s, r) {
    return "sticky" === e ? Math.min(t - s, r) : Math.min(t - e, r - (e - s));
  }
  scrollContainerHeight() {
    return this.scrollContainerEl ? this.scrollContainerEl.clientHeight : 0;
  }
  renderDropTarget(e) {
    let t = null;
    if (null != e.parentTop) {
      let s = this.scrollContainerHeight();
      let n = e.bottomForCanvasStackReparenting;
      let i = this.heightByGuid[e.parentGuid];
      let l = "sticky" === e.parentTop || this.stickyHeaderGuid === e.parentGuid;
      n && s && (i = this.computeStackOutlineHeight(l ? "sticky" : e.parentTop, n, this.state.scrollTop, s));
      t = l ? jsx("div", {
        "data-testid": "drop-target-box",
        className: eH,
        style: {
          position: "sticky",
          width: this.props.width ?? 0,
          height: i,
          zIndex: Wb
        }
      }, "drop-target-box") : jsx("div", {
        "data-testid": "drop-target-box",
        className: eH,
        style: {
          transform: `translate3d(0px, ${e.parentTop}px, 0)`,
          height: i
        }
      }, "drop-target-box");
    }
    let s = null;
    null != e.lineTop && (s = jsx("div", {
      "data-testid": "drop-target-line",
      className: "objects_panel--dropTargetLine--vmN9u",
      style: {
        marginLeft: `${e.lineIndent ? e.lineIndent : 0}px`,
        transform: `translate3d(0px, ${0 === e.lineTop ? 0 : e.lineTop - 1}px, 0)`,
        transition: "margin-left 150ms 0ms"
      }
    }, "drop-target-line"));
    return [t, s];
  }
  onContextMenu(e) {
    e.stopPropagation();
    e.preventDefault();
  }
  hasAtLeastOneRefToHoveredDefId(e) {
    if (!this.props.hoveredPropDef || !this.props.hoveredPropDef.nodeIDs?.length || !this.props.hoveredPropDef.defID) return !1;
    let t = e.containingSymbolId;
    if (!t || !this.props.hoveredPropDef.nodeIDs.includes(t)) return !1;
    for (let t of Object.values(e.propRefs)) if (t.isLinked && t.explicitDefID === this.props.hoveredPropDef.defID) return !0;
    return !1;
  }
  renderObjectRow(e, t, s, n) {
    let i = t.getNode(e.guid);
    if (!i || !i.parentGuid) return null;
    let l = t.getAncestorInfo(i.parentGuid);
    let a = t.getMaskInfo(e.guid);
    let o = null != e.isSelected ? e.isSelected : K3(this.props.sceneGraphSelection, e.guid);
    if (!l || !a) return null;
    let d = (l.isAncestorSelected || o) && !l.isAncestorHidden && this.hasAtLeastOneRefToHoveredDefId(i);
    let c = !!e.prevNodeGuid && t.getAncestorInfo(e.prevNodeGuid).isAncestorSelected;
    let p = (!!e.prevNodeGuid && K3(this.props.sceneGraphSelection, e.prevNodeGuid) || c) && OZ(this.cachedAllRowData)?.guid !== e.guid;
    let m = !!e.nextNodeGuid && t.getAncestorInfo(e.nextNodeGuid).isAncestorSelected;
    let g = ("FIXED_WHEN_CHILD_OF_SCROLLING_FRAME" === i.scrollBehavior || l.isAncestorFixed) && l.isAncestorSelected;
    let f = (!!e.nextNodeGuid && K3(this.props.sceneGraphSelection, e.nextNodeGuid) || m) && w6(this.cachedAllRowData)?.guid !== e.guid;
    let x = i.isLayerLikeCodeNode && !i.isInstanceSublayer && !i.isSymbolSublayer;
    let y = (i.isCodeInstance || i.isCodeFile || i.isCodeComponent) && !x;
    return jsx(oo, {
      isReadOnly: this.props.isReadOnly,
      ...e,
      booleanOperation: i.booleanOperation,
      componentLike: y,
      cornerRadius: i.cornerRadius,
      currentPage: this.props.currentPage,
      dispatch: this.props.dispatch,
      displayOrder: l.childrenDisplayOrder,
      expandMouseDown: this.expandMouseDown,
      hasChildren: i.isExpandable || e.hasChildren || vo(i, this.getScene()),
      hasRefToHoveredDef: d,
      hideRowActions: this.props.hideRowActions,
      isAncestorHidden: l.isAncestorHidden,
      isAncestorLocked: l.isAncestorLocked,
      isAncestorSelected: !e.ignoreAncestorSelection && l.isAncestorSelected,
      isDefaultResponsiveSet: this.props.topNodeProperties?.defaultResponsiveSetId === e.guid,
      isDragging: !!this.state.dropTarget,
      isExpanded: e.isExpanded || e.isTemporarilyExpanded,
      isFavicon: this.props.faviconGuid === e.guid,
      isGIF: i.hasEnabledAnimatedPaint,
      isLastMaskedAtLevels: a.isLastMaskedAtLevels,
      isLayerAboveSelected: p,
      isLayerBelowSelected: f || g,
      isMaskedAtLevels: a.isMaskedAtLevels,
      isPrimaryBreakpoint: i.isPrimaryBreakpointFrame,
      isRenaming: this.props.renamingGuid === e.guid,
      isRowInView: s,
      isSelected: o,
      isSocialImage: this.props.socialImageGuids?.split(",").includes(e.guid),
      isStamp: GI(i),
      isState: i.isState,
      isStateGroup: i.isStateGroup,
      isStaticImage: i.hasEnabledStaticImagePaint,
      isTemporarilyHovered: this.props.temporarilyHoveredNodes.includes(e.guid),
      isThumbnail: this.props.thumbnailGuid === e.guid,
      isWebpage: i.isResponsiveSetOrWebpage,
      isWidgetSublayer: !!i.isInWidget,
      layerChangeStatus: i.nodeChangeStatus,
      layerLikeCodeNode: x,
      lockMouseDown: this.lockMouseDown,
      locked: i.locked,
      mask: i.mask,
      nodeMemoryUsage: getFeatureFlags().gate_memory_usage_computations && !this.props.showInFileMemoryPercentage ? null : i.nodeMemoryUsage,
      nodeType: i.type,
      objectsPanelThumbnailId: i.objectsPanelThumbnailId,
      observeWithResizeObserver: this.props.observeWithResizeObserver,
      onContextMenu: this.rowContextMenu,
      onDragDropCallback: this.onDragDrop,
      onDragEnterCallback: this.onDragEnter,
      onDragLeaveCallback: this.onDragLeave,
      onDragOverCallback: this.onDragOver,
      onMouseEnter: this.rowMouseEnter,
      panelType: this.props.panelType ?? g$.Object,
      panelWidth: this.props.width,
      recordingKey: n ? void 0 : e.recordingKey,
      renderResourceUse: this.props.renderResourceUse,
      resizeToFit: i.resizeToFit,
      rootMemoryUsage: getFeatureFlags().gate_memory_usage_computations && !this.props.showInFileMemoryPercentage ? null : i.rootMemoryUsage,
      scrollDirection: i.scrollDirection,
      scrollLeft: this.state.scrollLeft,
      shouldShowGuids: this.props.shouldShowGuids,
      showInFileMemoryPercentage: this.props.showInFileMemoryPercentage,
      showMemoryUsage: this.props.showMemoryUsage,
      stackMode: i.stackMode,
      startRenaming: this.props.startRenaming,
      stopRenaming: this.props.stopRenaming,
      unobserveWithResizeObserver: this.props.unobserveWithResizeObserver,
      userId: this.props.userId,
      versionHistory: this.props.versionHistory,
      visible: i.visible,
      visibleMouseDown: this.visibleMouseDown
    }, eV.getKeyForId(e.guid));
  }
  renderLayerExpansionRow(e) {
    let t = eV.getKeyForId(eU(e));
    let s = void 0 === this.props.width ? "100%" : this.props.width + this.state.scrollLeft;
    return jsx(eO, {
      top: e.top,
      width: s,
      guid: e.containingPrimaryInstanceGUID,
      level: e.level,
      onMouseEnter: () => updateHoveredNode(""),
      dispatch: this.props.dispatch,
      recordingKey: generateRecordingKey(this.props, "layerExpansion", e.containingPrimaryInstanceGUID)
    }, t);
  }
  renderSectionHeader(e) {
    let t = this.sectionById[e.sectionId];
    let s = t && sp(this.getScene(), this.props.sceneGraphSelection, t.parentGuid);
    let n = !0;
    if (t?.parentGuid && t?.type !== ScrollBehavior.FIXED) {
      let e = this.props.sceneGraph.get(t?.parentGuid);
      e && e.fixedChildrenCount === e.uiOrderedChildren.length && (n = !1);
    }
    let i = Math.max(this.props.scrollWidth, this.props.width ?? 0);
    return jsx(eF, {
      ...e,
      width: i,
      isParentSelected: s,
      sectionHasChildren: n,
      dispatch: this.props.dispatch
    }, eV.getKeyForId(e.sectionId));
  }
  render() {
    globalPerfTimer.start("objects-panel-inner-render-timer");
    let e = this.renderedVisibleRowProps;
    let t = this.cachedAllRowData || [];
    for (let s of (this.renderedVisibleRowProps = Uw(t, this.windowInnerHeight, this.state.scrollTop), this.findStickyHeaderRowAndReplaceInVisibleRows(t), e)) Mq(s, this.windowInnerHeight, this.state.scrollTop) || eV.freeKeyForId(eU(s));
    this.renderedVisibleRowProps.sort((e, t) => eV.getKeyForId(eU(e)) - eV.getKeyForId(eU(t)));
    let s = this.props.nodeInfoCache;
    let n = [];
    for (let e of this.renderedVisibleRowProps) "object" === e.rowType ? n.push(this.renderObjectRow(e, s, this.getIsRowInView)) : "layer-expansion" === e.rowType ? n.push(this.renderLayerExpansionRow(e)) : n.push(this.renderSectionHeader(e));
    var i = null;
    if (this.scrollToNodeIdAfterUpdate) {
      let e = this.cachedAllObjectRowDataMap[this.scrollToNodeIdAfterUpdate];
      void 0 !== e && N1(e) && (i = this.renderObjectRow(e, s, this.getIsRowInView, !0));
    }
    if (!this.props.hideCanvasDropTargets && this.props.reparentIntoStackInfo && this.props.sceneGraph) {
      let e = this.props.reparentIntoStackInfo.indexInParent;
      let t = this.props.reparentIntoStackInfo.parentGuid;
      let s = this.props.sceneGraph.get(t);
      s && n.push(...this.renderDropTarget(Gs(s, this.topByGuid, this.heightByGuid, this.props.sceneGraph, this.totalHeight, this.props.insertionLineBoxOffset, e)));
    } else !this.props.isReadOnly && this.state.dropTarget && n.push(...this.renderDropTarget(this.state.dropTarget));
    let l = this.stickyHeaderGuid || !this.state.needsScrollLine ? "objects_panel--scrollContainer--h6khG" : "objects_panel--scrollContainerWithBorder--SR2sm objects_panel--scrollContainer--h6khG";
    let a = {
      width: `max(${this.props.scrollWidth ?? 0}px, 100%)`,
      height: this.totalHeight,
      "--row-gap": `${this.props.rowSelectionGap}px`
    };
    return jsxs(Fragment, {
      children: [this.props.showVisualLayerIcons && getFilteredFeatureFlags().ce_il_root && jsx(eT, {
        ids: this.renderedVisibleRowProps.filter(e => "object" === e.rowType).map(e => e.guid),
        focusedNodeId: this.getTopSelectedNodeId()
      }), jsx(eA, {
        objectRow: i,
        setRowWidth: this.setRowToScrollToData,
        guid: this.scrollToNodeIdAfterUpdate
      }), jsx(M3, {
        selection: this.props.sceneGraphSelection,
        getNode: function (e) {
          return s.getNode(e) ?? null;
        }
      }), jsxs(_$$P, {
        ref: this.scrollContainerRef,
        className: f()(l, {
          "objects_panel--hasPending--0IO3j": this.props.hasPending
        }),
        dataOnboardingKey: this.props.isUI3 ? void 0 : m4,
        enableOverscroll: !0,
        horizontalScrollBarEnabled: !0,
        initialScrollTop: this.props.initialScrollTop,
        innerClassName: f()({
          "objects_panel--reserveBottomHeight--yfmtq": this.props.reserveBottomHeight
        }),
        minContentWidth: this.props.width,
        onContextMenu: this.onContextMenu,
        onMouseDown: this.onScrollContainerMouseDown,
        onScroll: this.onScroll,
        onScrollLeftChanged: this.onScrollLeftChanged,
        recordingKey: generateRecordingKey(this.props, "scrollContainer"),
        scrollContainerRef: this.scrollContainerInnerRef,
        width: this.props.width,
        children: [jsx(jq, {
          onLeftPanelCollapsedChange: this.onLeftPanelCollapsedChange
        }), jsx(_$$V2, {
          children: jsx("div", {
            className: f()("objects_panel--rowContainer--03VQD", "objects_panel--horizontalScrollBarPadding--JfnK4"),
            style: a,
            onMouseDown: this.rowContainerMouseDown,
            onTouchStart: this.touchAdapter.onTouchStart,
            onMouseLeave: this.containerMouseLeave,
            "data-testid": "objects-panel",
            children: n
          })
        })]
      })]
    });
  }
}
function eW(e) {
  let t = useDispatch();
  let s = getObservableOrFallback(UK().showImmutableFrameSublayers);
  let l = getObservableValue(AppStateTsApi?.uiState().reparentIntoStackInfo, null);
  let a = NF();
  let o = Ht();
  let c = getObservableOrFallback(AppStateTsApi.uiState().hoveredComponentPropDef);
  let u = no();
  let g = getObservableOrFallback(AppStateTsApi.canvasViewState().temporarilyHoveredNodes);
  let f = getUserId();
  let x = useSelector(e => e.mirror.sceneGraphSelection);
  let y = useSelector(e => e.mirror.objectsPanelRowRebuildCounter);
  let b = useSelector(e => e.mirror.appModel.temporarilyExpandedInstanceLayers);
  let C = useSelector(e => e.mirror.appModel.activeCanvasEditModeType);
  let j = m0();
  let v = useCanAccessFullDevMode();
  let S = _$$E();
  let k = getSingletonSceneGraph();
  let w = _$$wA((e, t) => {
    let s = e.get(t);
    return s ? {
      guid: s.guid,
      children: s.uiOrderedChildren,
      defaultResponsiveSetId: s.defaultResponsiveSetId
    } : null;
  }, e.currentPage);
  let T = _$$el();
  let {
    topLevelObjectRowHeight,
    nestedObjectRowHeight,
    rowSelectionGap,
    insertionLineBoxOffset,
    showVisualLayerIcons
  } = useContext(y0);
  SV();
  let [P, R] = useAtomValueAndSetter(_$$C);
  let O = _$$A(R, 200);
  let D = Fk(e => e.getCurrentPage()?.responsiveSetSettings?.faviconID);
  let B = Fk(e => {
    let t = e.getCurrentPage();
    return getFeatureFlags().derived_prop_slow_selectors ? (t ? t.socialImageGuidsOnPage : []).join(",") : [t?.responsiveSetSettings?.socialImageID, ...(t?.childrenNodes.map(e => "RESPONSIVE_SET" === e.type && e.responsiveSetSettings?.socialImageID) || [])].filter(e => "string" == typeof e).join(",");
  });
  let H = getObservableOrFallback(UK().showGuids);
  let z = _Z().isLoading;
  let q = useMemo(() => new nV(k, x), [k, y, x]);
  let J = useRef(null);
  let Z = useRef(new Map());
  useEffect(() => {
    let e = Z.current;
    J.current = new ResizeObserver(t => {
      for (let s of t) {
        let t = e.get(s.target);
        t?.(s);
      }
    });
    return () => {
      J.current?.disconnect();
      e.clear();
    };
  }, []);
  let ee = useCallback((e, t) => {
    !e || Z.current.has(e) || (Z.current.set(e, t), J.current?.observe(e));
  }, []);
  let et = useCallback(e => {
    e && (J.current?.unobserve(e), Z.current.$$delete(e));
  }, []);
  if (j && !v) return null;
  let es = e.topNodeProperties;
  return jsxs(Fragment, {
    children: [jsx(ez, {
      ...e,
      currentPage: e.currentPage,
      dispatch: t,
      editModeType: C,
      faviconGuid: D,
      focusedNodes: e.focusedNodes,
      hasPending: z,
      hoveredPropDef: c,
      initialScrollTop: P,
      insertionLineBoxOffset,
      nestedObjectRowHeight,
      nodeInfoCache: q,
      objectsPanelRowRebuildCounter: y,
      observeWithResizeObserver: ee,
      onScroll: O,
      onSelectNodesFromLayersPanel: e.onSelectNodesFromLayersPanel,
      recordingKey: e.recordingKey ?? "objectsPanel",
      renderResourceUse: a,
      reparentIntoStackInfo: l,
      reserveBottomHeight: e.reserveBottomHeight,
      rowSelectionGap,
      sceneGraph: k,
      sceneGraphSelection: x,
      scrollWidth: T,
      shouldShowGuids: H,
      showImmutableFrameSublayers: s,
      showInFileMemoryPercentage: u,
      showMemoryUsage: o,
      showViewChangesNotification: S,
      showVisualLayerIcons,
      socialImageGuids: B,
      temporarilyExpandedInstanceLayers: b,
      temporarilyHoveredNodes: g,
      topLevelObjectRowHeight,
      topNodeProperties: es,
      unobserveWithResizeObserver: et,
      userId: f ?? void 0
    }), jsx(_$$p, {
      featureFlag: "auto_auto_layout",
      children: jsx(ep, {})
    })]
  });
}
export function $$e$0(e) {
  return jsx(Rp, {
    children: jsx(eW, {
      ...e
    })
  });
}
function eY(e, t, s) {
  if (s(e), t) for (let t of e.uiOrderedChildren) eY(getSingletonSceneGraph().get(t), !0, s);
}
ez.displayName = "ObjectsPanelView";
ez.contextType = $V;
export const X = $$e$0;