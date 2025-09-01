import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMemo, useCallback, createRef } from "react";
import { az } from "../905/449184";
import { uA } from "../figma_app/806412";
import { D8 } from "../905/511649";
import { N0, We, GY, zq, oz, wI } from "../figma_app/782261";
import { P } from "../905/347284";
import { DG } from "../figma_app/585235";
import { KO } from "../figma_app/914674";
import { M3 } from "../figma_app/119475";
import { Q } from "../figma_app/765684";
function m({
  enableKeyboardNavigation: e,
  rowIndex: t,
  onToggleExpand: i,
  renderedElement: a,
  scrollTop: s
}) {
  let o = N0(a) && a.isFixed && 0 !== s;
  let d = useMemo(() => ({
    top: o ? -1 : a.top,
    height: a.height
  }), [o, a.top, a.height]);
  return (o && a.fixedElement && (a.element = a.fixedElement), N0(a) && a.isStaticRow) ? jsx("div", {
    style: d,
    className: f(a, s),
    children: a.element
  }, a.key) : e ? jsx(g, {
    elementStyle: d,
    rowIndex: t,
    onToggleExpand: i,
    renderedElement: a,
    scrollTop: s
  }) : jsx(h, {
    elementStyle: d,
    rowIndex: t,
    onToggleExpand: i,
    renderedElement: a,
    scrollTop: s
  });
}
function h({
  elementStyle: e,
  keyboardNavigationItem: t,
  onSetKeyboardNavigationElement: i,
  onToggleExpand: a,
  renderedElement: s,
  rowIndex: o,
  scrollTop: d
}) {
  let c = o > 0 ? We(s) && !(N0(s) && s.isFixed) : We(s);
  let u = useCallback(e => {
    e.nativeEvent.stopImmediatePropagation();
    a(s.key);
  }, [a, s.key]);
  let p = useCallback(e => {
    GY(s) && (0 === e.detail && s.transferFocusOnClick && t?.getItemAbove()?.focus?.(), s.onClick());
  }, [t, s]);
  return c || i ? jsx("button", {
    style: e,
    className: f(s, d),
    onClick: c ? u : p,
    ref: i,
    children: s.element
  }, s.key) : jsx("div", {
    style: e,
    className: f(s, d),
    children: s.element
  }, s.key);
}
function g({
  elementStyle: e,
  onToggleExpand: t,
  renderedElement: i,
  rowIndex: r,
  scrollTop: a
}) {
  let {
    keyboardNavigationItem,
    setKeyboardNavigationElement
  } = M3({
    path: [1, r],
    id: i.key
  });
  return jsx(h, {
    elementStyle: e,
    rowIndex: r,
    onToggleExpand: t,
    renderedElement: i,
    scrollTop: a,
    keyboardNavigationItem,
    onSetKeyboardNavigationElement: setKeyboardNavigationElement
  });
}
function f(e, t) {
  return N0(e) ? e.isFixed && 0 !== t ? "component_scroll_container_row--stickyRowFixedElement--eS3Bw component_scroll_container_row--rowElement--qAmtI component_scroll_container_item--rowElement--t-Cem component_scroll_container_item--element--AoeiE" : "component_scroll_container_row--stickyRowElement--PXrEy component_scroll_container_row--rowElement--qAmtI component_scroll_container_item--rowElement--t-Cem component_scroll_container_item--element--AoeiE" : "component_scroll_container_row--rowElement--qAmtI component_scroll_container_item--rowElement--t-Cem component_scroll_container_item--element--AoeiE";
}
function _({
  renderedElement: e
}) {
  let t = useMemo(() => ({
    top: e.top,
    height: e.height
  }), [e.top, e.height]);
  return jsx("div", {
    className: "component_scroll_container_item--rowElement--t-Cem component_scroll_container_item--element--AoeiE",
    style: t,
    children: e.element
  });
}
function y({
  enableKeyboardNavigation: e,
  isList: t,
  colIndex: i,
  rowIndex: r,
  isTileSelected: a,
  onToggleExpand: s,
  renderedElement: o,
  scrollTop: d,
  shouldRefocusAfterKeyboardInsert: c
}) {
  return o.type === zq.TILE ? jsx(Q, {
    colIndex: i,
    rowIndex: r,
    isList: t,
    enableKeyboardNavigation: e,
    isTileSelected: a,
    renderedElement: o,
    shouldRefocusAfterKeyboardInsert: c
  }) : o.type === zq.ROW ? jsx(m, {
    enableKeyboardNavigation: e,
    rowIndex: r,
    onToggleExpand: s,
    renderedElement: o,
    scrollTop: d
  }) : o.type === zq.SEPARATOR ? jsx(_, {
    renderedElement: o
  }) : null;
}
export class $$b0 extends uA {
  constructor(e) {
    super(e);
    this.elementsCache = {
      allElementsTree: new oz(-1),
      elementKeyboardNavigationMap: new Map(),
      elementsInView: [],
      totalHeight: 0,
      isDirty: !1
    };
    this.heightFrameRequest = null;
    this.recalculateLayout = () => {
      this.nextHeight = window.innerHeight;
      null === this.heightFrameRequest && (this.heightFrameRequest = requestAnimationFrame(this.setWindowHeight));
    };
    this.setWindowHeight = () => {
      this.elementsCache.isDirty = !0;
      this.setState({
        windowHeight: this.nextHeight
      });
      this.heightFrameRequest = null;
    };
    this.scrollContainerRef = createRef();
    this.scrollFrameRequest = null;
    this.nextScrollTop = 0;
    this.onScroll = e => {
      this.nextScrollTop = e;
      null === this.scrollFrameRequest && (this.scrollFrameRequest = requestAnimationFrame(this.setScrollTop));
      this.props.onScroll && this.props.onScroll(e);
    };
    this.setScrollTop = () => {
      this.elementsCache.isDirty = !0;
      this.setState({
        scrollTop: this.nextScrollTop
      });
      this.scrollFrameRequest = null;
      this.props.setScrollTop && this.props.setScrollTop(this.nextScrollTop);
    };
    this.scrollPositionCache = {
      previous: {
        key: null,
        top: 0,
        offset: 0,
        scrollTop: 0
      },
      scrollToPositionAfterUpdate: null
    };
    this.toggleExpand = e => {
      let t = this.elementsCache.allElementsTree.findExpandableElementWithKey(e);
      if (t) {
        let i = !t.isExpanded;
        t.isExpanded = i;
        t.element = t.getExpandableElement(i);
        DG(e, i);
        this.elementsCache.isDirty = !0;
        this.forceUpdate();
        let n = t.children.filter(e => e.type === zq.TILE).length;
        let r = t.children.filter(e => e.type === zq.ROW).length;
        let s = t.rowType;
        let o = wI(t);
        let d = o?.getExpandableElement(!0).props.subscribedLibraryKey;
        az.trackDefinedEvent("assets_panel.toggle_header_expansion", {
          isExpanded: i,
          numChildComponents: n,
          numChildFolders: r,
          sectionName: o?.sectionNameForTracking,
          fileKey: this.props.fileKey,
          fileTeamId: this.props.teamId,
          fileOrgId: this.props.orgId,
          assetsPanelVersion: 2,
          type: s,
          libraryKey: o?.sectionNameForTracking?.toLowerCase().includes("local") ? this.props.fileKey : "string" == typeof d ? d : void 0
        });
      }
    };
    this.expandElement = (e, t = 1 / 0) => {
      if (t <= 0) return 0;
      let i = 0;
      "isExpanded" in e && !e.isExpanded && (e.isExpanded = !0, e.element = e.getExpandableElement(!0), DG(e.key, !0), i += e.children.filter(e => e.type === zq.TILE).length);
      "children" in e && e.children.forEach(e => {
        i += this.expandElement(e, t - i);
      });
      return i;
    };
    this.expandAllComponentLibraries = (e = 1 / 0) => {
      let t = this.elementsCache.allElementsTree.allElements.filter(e => e.type === zq.TILE).length;
      for (let i of this.elementsCache.allElementsTree.allElements) {
        if (t >= e) break;
        t += this.expandElement(i, e - t);
      }
      this.elementsCache.isDirty = !0;
      this.forceUpdate();
      return t;
    };
    this.state = {
      scrollTop: 0,
      windowHeight: 0
    };
    this.recalculateLayout();
    this.elementsCache.allElementsTree.allElements = e.scrollContent;
    this.buildKeyboardNavigationMap(e.scrollContent, e.isList);
    this.elementsCache.isDirty = !0;
  }
  componentDidMount() {
    window.addEventListener("resize", this.recalculateLayout);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.recalculateLayout);
  }
  UNSAFE_componentWillUpdate(e) {
    this.props.scrollContent !== e.scrollContent && (this.elementsCache.allElementsTree.allElements = e.scrollContent, this.elementsCache.isDirty = !0, this.buildKeyboardNavigationMap(e.scrollContent, e.isList));
  }
  componentDidUpdate(e, t) {
    let i = this.scrollContainerRef.current;
    if (i) {
      if (null !== this.scrollPositionCache.scrollToPositionAfterUpdate) {
        i.scrollTo(this.scrollPositionCache.scrollToPositionAfterUpdate);
        this.scrollPositionCache.scrollToPositionAfterUpdate = null;
        return;
      }
      e.isList !== this.props.isList && this.buildKeyboardNavigationMap(this.props.scrollContent, this.props.isList);
    }
  }
  recordingKey() {
    return this.props.recordingKey;
  }
  buildKeyboardNavigationMap(e, t) {
    let i = [...e];
    let n = new Map();
    let r = 0;
    let a = 0;
    let s = i.shift();
    for (; null != s;) {
      switch (n.set(s.key, {
        column: a,
        row: r
      }), s.type) {
        case zq.ROW:
        case zq.SEPARATOR:
          r += 1;
          a = 0;
          break;
        case zq.TILE:
          0 == (a = (a + 1) % (t ? 1 : s.numCols)) ? r += 1 : i[0]?.type === zq.ROW && (r += 1, a = 0);
      }
      We(s) && i.unshift(...s.children);
      s = i.shift();
    }
    this.elementsCache.elementKeyboardNavigationMap = n;
  }
  refreshElementsInView() {
    if (!this.elementsCache.isDirty) return;
    let e = this.props.getViewportHeight(this.state.windowHeight);
    let {
      elementsInView,
      stickyHeader,
      stickyHeaderOffset
    } = this.elementsCache.allElementsTree.getRenderedElementsInView(this.state.scrollTop, e);
    if (this.restoreScrollPositionIfNecessary(stickyHeader, stickyHeaderOffset, this.state.scrollTop)) {
      let i = this.scrollPositionCache.scrollToPositionAfterUpdate;
      t = this.elementsCache.allElementsTree.getRenderedElementsInView(i, e).elementsInView;
    }
    this.elementsCache.elementsInView = elementsInView;
    this.elementsCache.totalHeight = this.elementsCache.allElementsTree.getTotalHeight();
    this.elementsCache.isDirty = !1;
  }
  scrollToElement(e) {
    let t = this.elementsCache.allElementsTree.getActualTop(e);
    t && this.scrollContainerRef.current?.scrollTo(t - 97);
  }
  restoreScrollPositionIfNecessary(e, t, i) {
    this.scrollPositionCache.scrollToPositionAfterUpdate = null;
    let n = this.scrollPositionCache.previous;
    let r = {
      key: e && e.key,
      top: e && e.top,
      offset: t,
      scrollTop: i
    };
    if (this.scrollPositionCache.previous = r, r.scrollTop !== n.scrollTop) return !1;
    let a = n.key !== r.key || n.top !== r.top;
    if (!n.key || !a) return !1;
    let s = this.elementsCache.allElementsTree.getActualTop(n.key);
    if (null !== s) {
      let e = this.props.topOffset || 0;
      this.scrollPositionCache.scrollToPositionAfterUpdate = s + n.offset + e;
    }
    return null !== this.scrollPositionCache.scrollToPositionAfterUpdate;
  }
  renderElementsInView() {
    return this.elementsCache.elementsInView.map(e => {
      let t = this.elementsCache.elementKeyboardNavigationMap.get(e.key);
      return jsx(y, {
        colIndex: t?.column ?? 0,
        enableKeyboardNavigation: this.props.enableKeyboardNavigation,
        isList: this.props.isList,
        isTileSelected: this.props.isTileSelected,
        onToggleExpand: this.toggleExpand,
        renderedElement: e,
        rowIndex: t?.row ?? 0,
        scrollTop: this.state.scrollTop,
        shouldRefocusAfterKeyboardInsert: this.props.shouldRefocusAfterKeyboardInsert
      }, e.key);
    });
  }
  render() {
    this.refreshElementsInView();
    return jsxs(Fragment, {
      children: [jsxs(P, {
        ...this.props,
        ref: this.scrollContainerRef,
        onScroll: this.onScroll,
        children: [this.props.renderEmptyState && this.props.renderEmptyState(), jsx(D8, {
          onMouseUp: this.props.onMouseUp,
          recordingKey: this.props.recordingKey,
          style: {
            height: this.elementsCache.totalHeight
          },
          className: "component_scroll_container--scrollContentContainer--cI2b3",
          children: this.renderElementsInView()
        })]
      }), jsx(KO, {
        elementsCache: this.elementsCache,
        hasRenderedItems: this.props.getViewportHeight(this.state.windowHeight) > 0
      })]
    });
  }
}
$$b0.displayName = "ComponentScrollContainer";
export const O = $$b0;