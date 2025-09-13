import { throwTypeError } from "../figma_app/465776";
import { perfTimerFrameManagerBindings } from "../figma_app/763686";
import { atom, atomStoreManager } from "../figma_app/27355";
import s from "../vendor/128080";
import { reactTimerGroup } from "../905/542194";
import { z8 } from "../905/709095";
import { getInitialOptions } from "../figma_app/169182";
import { Zv } from "../905/760682";
import { ye } from "../figma_app/682945";
import { getVisibleArea, roundedDivision } from "../figma_app/62612";
import { nt } from "../905/226610";
import { requestDeferredExecution } from "../905/561433";
import { ThreadType, NEW_COMMENT_ID } from "../905/380385";
import { Sw } from "../figma_app/805373";
import { UU } from "../905/807385";
import y from "../vendor/907065";
import { expandRect } from "../905/736624";
import { b as _$$b } from "../905/799129";
import { ip } from "../905/936492";
import { FZ } from "../905/56623";
import { tR, XC, aT, b1 } from "../905/512783";
import { Ko, xN, LX, Ao } from "../figma_app/70421";
import { Nz } from "../905/428481";
import { Nz as _$$Nz } from "../905/540111";
var o = s;
var b = y;
class I {
  constructor(e, t, i) {
    this.leftIdx = 0;
    this.rightIdx = 0;
    this.topIdx = 0;
    this.bottomIdx = 0;
    this.leftToRight = [];
    this.topToBottom = [];
    this.bufferedRect = expandRect(t, i);
    e.length > 0 && this.bulkAddValues(e);
  }
  updateWindow(e, t) {
    let i = this.bufferedRect;
    let n = this.leftIdx;
    let r = this.rightIdx;
    let a = this.topIdx;
    let s = this.bottomIdx;
    this.bufferedRect = expandRect(e, t);
    let o = this.updateDirectionalIndexes(this.leftToRight, this.topToBottom, this.leftIdx, this.rightIdx, this.topIdx, this.bottomIdx, this.bufferedRect);
    this.leftIdx = o.leftIdx;
    this.rightIdx = o.rightIdx;
    this.topIdx = o.topIdx;
    this.bottomIdx = o.bottomIdx;
    this.assertIndexes(this.bufferedRect);
    let l = new Set();
    let d = new Set();
    n > this.leftIdx ? this.leftToRight.slice(this.leftIdx, n).forEach(e => l.add(e)) : n < this.leftIdx && this.leftToRight.slice(n, this.leftIdx).forEach(e => d.add(e));
    r > this.rightIdx ? this.leftToRight.slice(this.rightIdx, r).forEach(e => d.add(e)) : r < this.rightIdx && this.leftToRight.slice(r, this.rightIdx).forEach(e => l.add(e));
    a > this.topIdx ? this.topToBottom.slice(this.topIdx, a).forEach(e => l.add(e)) : a < this.topIdx && this.topToBottom.slice(a, this.topIdx).forEach(e => d.add(e));
    s > this.bottomIdx ? this.topToBottom.slice(this.bottomIdx, s).forEach(e => d.add(e)) : s < this.bottomIdx && this.topToBottom.slice(s, this.bottomIdx).forEach(e => l.add(e));
    return {
      additions: [...l.values()].filter(e => this.withinRect(e, this.bufferedRect)),
      removals: [...d.values()].filter(e => this.withinRect(e, i))
    };
  }
  numValues() {
    return this.leftToRight.length;
  }
  isValueInWindow(e) {
    return this.withinRect(e, this.bufferedRect);
  }
  allValuesInWindow() {
    return this.leftToRight.slice(this.leftIdx, this.rightIdx).filter(e => this.withinYDimensions(e, this.bufferedRect));
  }
  bulkAddValues(e) {
    this.leftToRight = this.leftToRight.concat(e).sort((e, t) => e.x - t.x);
    this.topToBottom = this.topToBottom.concat(e).sort((e, t) => e.y - t.y);
    let t = this.leftToRight.length;
    let i = this.updateDirectionalIndexes(this.leftToRight, this.topToBottom, 0, t, 0, t, this.bufferedRect);
    this.leftIdx = i.leftIdx;
    this.rightIdx = i.rightIdx;
    this.topIdx = i.topIdx;
    this.bottomIdx = i.bottomIdx;
    this.assertIndexes(this.bufferedRect);
  }
  addValue(e) {
    let t = this.leftToRight.findIndex(t => t.x > e.x);
    -1 === t && (t = this.leftToRight.length);
    this.leftToRight.splice(t, 0, e);
    let i = this.topToBottom.findIndex(t => t.y > e.y);
    -1 === i && (i = this.topToBottom.length);
    this.topToBottom.splice(i, 0, e);
    let n = this.updateDirectionalIndexes(this.leftToRight, this.topToBottom, this.leftIdx, this.rightIdx, this.topIdx, this.bottomIdx, this.bufferedRect);
    this.leftIdx = n.leftIdx;
    this.rightIdx = n.rightIdx;
    this.topIdx = n.topIdx;
    this.bottomIdx = n.bottomIdx;
    this.assertIndexes(this.bufferedRect);
    return this.isValueInWindow(e);
  }
  removeValue(e) {
    let t = this.leftToRight.findIndex(t => t.id === e.id);
    this.windowAssert(t >= 0);
    this.leftToRight.splice(t, 1);
    let i = this.topToBottom.findIndex(t => t.id === e.id);
    this.windowAssert(i >= 0);
    this.topToBottom.splice(i, 1);
    let n = this.leftToRight.length;
    this.leftIdx = Math.min(this.leftIdx, n);
    this.rightIdx = Math.min(this.rightIdx, n);
    this.topIdx = Math.min(this.topIdx, n);
    this.bottomIdx = Math.min(this.bottomIdx, n);
    let r = this.updateDirectionalIndexes(this.leftToRight, this.topToBottom, this.leftIdx, this.rightIdx, this.topIdx, this.bottomIdx, this.bufferedRect);
    this.leftIdx = r.leftIdx;
    this.rightIdx = r.rightIdx;
    this.topIdx = r.topIdx;
    this.bottomIdx = r.bottomIdx;
    this.assertIndexes(this.bufferedRect);
  }
  updateDirectionalIndexes(e, t, i, n, r, a, s) {
    let o = e.length;
    let l = e.slice(i).findIndex(e => !this.offTheLeft(e, s));
    i = -1 === l ? o : i + l;
    i = b()(e.slice(0, i), e => this.offTheLeft(e, s)) + 1;
    let d = e.slice(n).findIndex(e => this.offTheRight(e, s));
    n = -1 === d ? o : n + d;
    n = b()(e.slice(0, n), e => !this.offTheRight(e, s)) + 1;
    let c = t.slice(r).findIndex(e => !this.offTheTop(e, s));
    r = -1 === c ? o : r + c;
    r = b()(t.slice(0, r), e => this.offTheTop(e, s)) + 1;
    let u = t.slice(a).findIndex(e => this.offTheBottom(e, s));
    a = -1 === u ? o : a + u;
    a = b()(t.slice(0, a), e => !this.offTheBottom(e, s)) + 1;
    return {
      leftIdx: i,
      rightIdx: n,
      topIdx: r,
      bottomIdx: a
    };
  }
  offTheLeft(e, t) {
    return e.x < t.x;
  }
  offTheRight(e, t) {
    return e.x > t.x + t.width;
  }
  offTheTop(e, t) {
    return e.y < t.y;
  }
  offTheBottom(e, t) {
    return e.y > t.y + t.height;
  }
  withinXDimensions(e, t) {
    return !this.offTheLeft(e, t) && !this.offTheRight(e, t);
  }
  withinYDimensions(e, t) {
    return !this.offTheTop(e, t) && !this.offTheBottom(e, t);
  }
  withinRect(e, t) {
    return this.withinXDimensions(e, t) && this.withinYDimensions(e, t);
  }
  windowAssert(e) {
    if (!e) throw Error(`The comment 2D sliding window has gotten into an invalid state: ${JSON.stringify(this)}`);
  }
  assertIndexes(e) {
    let t = this.leftToRight.length;
    this.windowAssert(0 === this.leftIdx || this.leftToRight[this.leftIdx - 1].x < e.x);
    this.windowAssert(this.leftIdx === t || this.leftToRight[this.leftIdx].x >= e.x);
    this.windowAssert(0 === this.rightIdx || this.leftToRight[this.rightIdx - 1].x <= e.x + e.width);
    this.windowAssert(this.rightIdx === t || this.leftToRight[this.rightIdx].x > e.x + e.width);
    this.windowAssert(0 === this.topIdx || this.topToBottom[this.topIdx - 1].y < e.y);
    this.windowAssert(this.topIdx === t || this.topToBottom[this.topIdx].y >= e.y);
    this.windowAssert(0 === this.bottomIdx || this.topToBottom[this.bottomIdx - 1].y <= e.y + e.height);
    this.windowAssert(this.bottomIdx === t || this.topToBottom[this.bottomIdx].y > e.y + e.height);
  }
}
let $$R3 = atom(!1);
let $$N2 = atom(null);
let P = `
.overlay {
  height: 0px;
  width: 0px;
  position: relative;
  transform: translate(0px,0px);
}
.overlayPassthrough {
  pointer-events: none;
}
`;
let $$O1 = null;
let D = class e extends HTMLElement {
  constructor() {
    super();
    this.createdAt = new Date();
    this.ds = {
      clusters: Ko,
      selectedPinId: null,
      emphasizedPinIds: [],
      dimUnselectedPins: !1
    };
    this._lastRenderedDataset = null;
    this._lastDatasetChangeAnimatedAt = Date.now();
    this.isZoomingOut = !1;
    this.shouldDisablePointerEvents = !1;
    this._lastRenderedShouldDisablePointerEvents = !1;
    this.onElementClicked = null;
    this.onElementContextMenu = null;
    this.onElementDragEnd = null;
    this.onElementDragMove = null;
    this.onElementDragStart = null;
    this.lastRenderedViewport = null;
    this.currentViewport = void 0;
    this.getWrapperOffset = void 0;
    this.focusOneOfIDs = new Set();
    this.clientConfig = null;
    this.draggingElement = null;
    this.hasHighlightedPinnedThreads = !1;
    this.clusterElementsById = new Map();
    this.onFrame = () => {
      perfTimerFrameManagerBindings && perfTimerFrameManagerBindings?.startProfile(z8, 100);
      this.currentViewport && this.lastRenderedViewport && (this.render(this.currentViewport, this.lastRenderedViewport), this._lastRenderedDataset = this.ds, this.lastRenderedViewport = this.currentViewport, this._lastRenderedShouldDisablePointerEvents = this.shouldDisablePointerEvents);
      perfTimerFrameManagerBindings && perfTimerFrameManagerBindings?.stopProfile(z8, 100);
    };
    this.attachShadow({
      mode: "open"
    });
    let e = document.createElement("style");
    e.nonce = getInitialOptions().csp_nonce;
    e.textContent = [P, Nz, _$$Nz].join("\n");
    this.shadowRoot?.append(e);
    this.wrapper = document.createElement("div");
    this.wrapper.classList.add("overlay");
    this.wrapper.setAttribute("data-testid", "clustered-comments-wrapper");
    this.wrapper.setAttribute("aria-hidden", "true");
    this.shadowRoot?.append(this.wrapper);
    this.slidingWindow = new I([], {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }, 0);
    $$O1 = this;
  }
  createTextMeasureElement(e) {
    let t = document.createElement("div");
    t.style.position = "absolute";
    t.style.visibility = "hidden";
    t.style.height = "auto";
    t.style.width = `${FZ}px`;
    e.appendChild(t);
    return t;
  }
  onViewportUpdate(e) {
    this.currentViewport = e;
    requestDeferredExecution();
  }
  set wrapperOffsetFn(e) {
    this.getWrapperOffset = e;
  }
  set initialViewport(e) {
    let t = getVisibleArea(e);
    let i = roundedDivision(78, e.zoomScale);
    this.slidingWindow.updateWindow(t, i);
    this.renderWrapperPosition(e);
    this.currentViewport = e;
    this.lastRenderedViewport = e;
  }
  set data(e) {
    this.ds = e;
    requestDeferredExecution();
  }
  clusterComesFromFrameMove(e, t) {
    if (!e.anchoredNode) return !1;
    let i = e.pins.map(e => e.id).sort();
    for (let n of t) if (e.anchoredNode === n.anchoredNode && o()(i, n.pins.map(e => e.id).sort())) return !0;
    return !1;
  }
  processDatasetUpdate(e) {
    let {
      added,
      removed
    } = Zv(this.ds.clusters.leafNodes, this._lastRenderedDataset?.clusters.leafNodes);
    let n = this.ds.clusters.all().reduce((e, t) => (e.set(t.id, t), e), new Map());
    let r = (this._lastRenderedDataset?.clusters?.all() || []).reduce((e, t) => (e.set(t.id, t), e), new Map());
    let a = [...n.values()].filter(e => !r.has(e.id));
    let s = !1;
    let o = [...n.values()].filter(e => {
      let t = r.get(e.id);
      return !!t && (e.isPinnedToFile || this.ds.clusters.minimizeUnpinned || null !== this.ds.selectedPinId || this.hasHighlightedPinnedThreads ? xN(e, t) : (s = !0, !0));
    });
    s && (this.hasHighlightedPinnedThreads = !0);
    let l = [...r.values()].filter(e => !n.has(e.id));
    if (0 === this.slidingWindow.numValues() && null === this._lastRenderedDataset) this.bulkAddClusters(a, e);else for (let i of a) {
      let n = added.has(i.id) ? "data" : "aggregation";
      this.clusterComesFromFrameMove(i, l) && (n = "frame_move");
      this.addCluster(i, e, n);
    }
    let d = l.filter(e => this.slidingWindow.isValueInWindow(e)).length > 200;
    for (let t of l) {
      let n = removed.has(t.id) ? "data" : "aggregation";
      this.clusterComesFromFrameMove(t, a) && (n = "frame_move");
      this.removeCluster(t, e, n, d);
    }
    for (let t of o) this.updateCluster(t, e);
    (this.ds.selectedPinId !== this._lastRenderedDataset?.selectedPinId || this.ds.dimUnselectedPins !== this._lastRenderedDataset?.dimUnselectedPins) && this.updateSelectedStates(this.ds.selectedPinId, this.ds.dimUnselectedPins);
    this.ds.emphasizedPinIds !== this._lastRenderedDataset?.emphasizedPinIds && this.updateEmphasizedElements(this.ds.emphasizedPinIds, this._lastRenderedDataset?.emphasizedPinIds);
    this.isZoomingOut && (this.isZoomingOut = !1, this.updateViewportVisibleClusters(e));
  }
  getSelectedState(e, t, i) {
    return t ? e.pins.find(e => e.id === t) ? LX.ACTIVE : LX.DIMMED : !i && e.pins.find(e => !e.isResolved) ? LX.NORMAL : LX.DIMMED;
  }
  updateSelectedStates(e, t) {
    if (e) {
      let t = this.ds.clusters.all().find(t => t.id === e);
      let i = this.clusterElementsById.get(e);
      i && t?.isSinglePin && i.updatePinSelectedState(LX.ACTIVE);
    }
    for (let i of this.slidingWindow.allValuesInWindow()) {
      let n = this.clusterElementsById.get(i.id);
      if (!n) continue;
      let r = this.getSelectedState(i, e, t);
      i.isSinglePin ? n.updatePinSelectedState(r) : n.dimmed = r === LX.DIMMED;
    }
  }
  updateEmphasizedElements(e, t) {
    let i = new Set(e);
    let n = new Set(t || []);
    this.slidingWindow.allValuesInWindow().forEach(e => {
      let t = this.clusterElementsById.get(e.id);
      n.size > 0 && t && e.pins.find(e => n.has(e.id)) && (e.isSinglePin ? t.removeEmphasisStyle() : t.emphasized = !1);
      i.size > 0 && t && e.pins.find(e => i.has(e.id)) && (e.isSinglePin ? t.addEmphasisStyle() : t.emphasized = !0);
    });
  }
  processViewportUpdate(e, t) {
    t?.zoomScale !== e.zoomScale && this.cancelAllDragging();
    this.isZoomingOut || this.updateViewportVisibleClusters(e);
    t?.zoomScale !== e.zoomScale && this.updateElementTransforms(e);
    this.renderWrapperPosition(e);
  }
  render(e, t) {
    reactTimerGroup.start("comments-render");
    let i = !1;
    o()(t, e) || (this.processViewportUpdate(e, t), i = !0);
    this._lastRenderedDataset !== this.ds && (this.processDatasetUpdate(e), i = !0);
    i && ye && ye.setNumberOfRenderedComments(this.clusterElementsById.size);
    (e.isPanning !== t?.isPanning || e.isZooming !== t?.isZooming || this.shouldDisablePointerEvents !== this._lastRenderedShouldDisablePointerEvents) && (e.isPanning || e.isZooming || this.shouldDisablePointerEvents ? this.wrapper.classList.add("overlayPassthrough") : this.wrapper.classList.remove("overlayPassthrough"));
    reactTimerGroup.stop("comments-render");
  }
  renderWrapperPosition(e) {
    this.wrapper.style.top = `${e.y + e.height / 2}px`;
    this.wrapper.style.left = `${e.x + e.width / 2}px`;
    let t = this.getWrapperOffset(e);
    let i = (0 - e.offsetX) * e.zoomScale + t.x;
    let n = (0 - e.offsetY) * e.zoomScale + t.y;
    let r = `translate(${i}px, ${n}px)`;
    this.wrapper.style.transform = r;
  }
  focusOneOf(e) {
    for (let t of (this.focusOneOfIDs = e, this.slidingWindow.allValuesInWindow())) if (t.pins.map(e => e.id).some(e => this.focusOneOfIDs.has(e))) {
      let e = this.shadowRoot?.getElementById(t.id)?.firstElementChild;
      if (e instanceof HTMLElement && e.getAttribute("data-testid") === tR) {
        e.focus();
        this.focusOneOfIDs.clear();
        return;
      }
    }
  }
  updateElementTransforms(e) {
    for (let t of this.slidingWindow.allValuesInWindow()) {
      let i = this.clusterElementsById.get(t.id);
      if (i && 1 === t.pins.length) {
        let n = t.pins[0];
        i.position = n;
        i.zoomScale = e.zoomScale;
        i.selectionBoxAnchor = n.selectionBoxAnchor;
        i.otherBoundingBoxes = n.otherBoundingBoxes;
        i.render();
      } else i && i.positionClusterElement(t, e);
    }
  }
  bulkAddClusters(e, t) {
    for (let i of (this.slidingWindow.bulkAddValues(e), e)) this.slidingWindow.isValueInWindow(i) && this.addClusterToDom(i, t, "initial");
  }
  updateCluster(e, t) {
    e.isSinglePin ? (this.slidingWindow.removeValue(e), this.slidingWindow.addValue(e), this.updateAvatarPin(e, t)) : (this.removeCluster(e, t, "update"), this.addCluster(e, t, "update"));
  }
  addCluster(e, t, i) {
    this.slidingWindow.addValue(e) && this.addClusterToDom(e, t, i);
  }
  removeCluster(e, t, i, n) {
    let r = this.slidingWindow.isValueInWindow(e);
    this.slidingWindow.removeValue(e);
    r && this.removeClusterFromDom(e, t, i, n);
  }
  static applyClusterToAvatarPin(e, t, i, n, r, a = !1) {
    let s = e.pins[0];
    let o = s.avatars.reduce((e, t) => e + t.num_comments, 0) - 1;
    let l = s.avatars.map(e => ({
      initial: e.avatar_user_handle[0],
      user_id: e.avatar_user_id,
      url: Sw(e.avatar_url)
    }));
    let d = LX.NORMAL;
    n ? d = n === s.id ? LX.ACTIVE : LX.DIMMED : (r || s.isResolved) && (d = LX.DIMMED);
    i.data = {
      id: s.id,
      avatars: l,
      createdAt: s.createdAt,
      preview: {
        author: s.avatars[0].avatar_user_handle,
        messageMeta: s.previewMessageMeta || [],
        updatedAt: new Date(Date.parse(s.updatedAt)),
        unread: !!s.isUnread,
        replies: o,
        numUnreadReplies: s.numUnreadReplies,
        draft: s.isDraft,
        feedPostTitle: s.type === ThreadType.FEED_POST ? s.feedPostTitle : void 0,
        pinVerticalStagger: s.type === ThreadType.FEED_POST ? s.pinVerticalStagger : void 0,
        numAttachments: s.numAttachments,
        isPinnedToFile: s.isPinnedToFile
      },
      pending: s.pending,
      type: s.type
    };
    i.minimized = !s.isPinnedToFile && a;
    i.updatePinSelectedState(d);
    i.isDraggable = s.isDraggable;
    i.onmouseenter = s.onMouseEnter;
    i.onmouseleave = s.onMouseLeave;
    i.position = s;
    i.zoomScale = t.zoomScale;
    i.selectionBoxAnchor = s.selectionBoxAnchor;
    i.otherBoundingBoxes = s.otherBoundingBoxes;
    i.render();
  }
  updateAvatarPin(t, i) {
    let n = this.clusterElementsById.get(t.id);
    if (!n) {
      this.slidingWindow.isValueInWindow(t) && this.addClusterToDom(t, i, "initial");
      return;
    }
    e.applyClusterToAvatarPin(t, i, n, this.ds.selectedPinId, this.ds.dimUnselectedPins, this.ds.clusters.minimizeUnpinned);
  }
  onPinElementClicked(e) {
    this.onElementClicked && this.onElementClicked(e);
  }
  onPinElementDragEnd(e, t) {
    this.onElementDragEnd && this.onElementDragEnd(e);
    this.draggingElement = null;
  }
  onPinElementDragMove(e) {
    this.onElementDragMove && this.onElementDragMove(e);
  }
  onPinElementDragStart(e, t) {
    this.draggingElement && (this.draggingElement.cancelDrag(), console.error("Started dragging a new element without ending another drag"));
    this.draggingElement = t;
    this.onElementDragStart && this.onElementDragStart(e);
  }
  onPinContextMenu(e, t) {
    this.onElementContextMenu && this.onElementContextMenu(e, t);
  }
  cancelAllDragging() {
    this.draggingElement?.cancelDrag();
    this.draggingElement = null;
  }
  addClusterToDom(t, i, r) {
    let s;
    if (this.clusterElementsById.get(t.id)) return;
    let o = null;
    if (t.isSinglePin) {
      let r = t.pins[0];
      let a = new XC();
      switch (r.type) {
        case ThreadType.COMMENT_THREAD:
          a = new aT();
          break;
        case ThreadType.FEED_POST:
          a = new b1();
          break;
        case ThreadType.LITMUS_COMMENT_THREAD:
          break;
        default:
          throwTypeError(r);
      }
      e.applyClusterToAvatarPin(t, i, a, this.ds.selectedPinId, this.ds.dimUnselectedPins, this.ds.clusters.minimizeUnpinned);
      nt.commentsA11y.getValue() && (a.onkeydown = e => {
        "Enter" === e.key && this.onPinElementClicked(t.id);
      });
      a.onPinClick = this.onPinElementClicked.bind(this);
      a.onEndDrag = this.onPinElementDragEnd.bind(this);
      a.onStartDrag = this.onPinElementDragStart.bind(this);
      a.onUpdateDrag = this.onPinElementDragMove.bind(this);
      a.onPinContextClick = this.onPinContextMenu.bind(this);
      a.isDraggable = r.isDraggable;
      a.renderer = this;
      s = a;
      o = this._lastRenderedDataset?.clusters.getParentOf(r.id) || null;
    } else {
      let e = LX.NORMAL;
      let n = new ip();
      n.avatarsMap = t.avatarMap;
      n.pinnedToFile = t.isPinnedToFile;
      n.minimized = !t.isPinnedToFile && this.ds.clusters.minimizeUnpinned;
      n.positionClusterElement(t, i);
      n.unread = t.isUnread;
      n.threadCount = t.pins.length;
      nt.commentsA11y.getValue() && (n.id = Ao(t, t.cluster.threads.length), n.onkeydown = t.onKeyDown);
      n.onclick = t.onClick;
      n.creationChangeType = r;
      this.ds.selectedPinId ? e = t.pins.some(e => e.id === this.ds.selectedPinId) ? LX.ACTIVE : LX.DIMMED : this.ds.dimUnselectedPins && (e = LX.DIMMED);
      let a = null;
      for (var l = 0; l < t.pins.length; l++) {
        let e = t.pins[l];
        let i = this._lastRenderedDataset?.clusters.getParentOf(e.id);
        if (a && i !== a) {
          a = null;
          break;
        }
        a = i;
      }
      a && (o = a);
      n.dimmed = e === LX.DIMMED;
      n.render();
      s = n;
    }
    let d = atomStoreManager.get($$R3);
    if (t.isSinglePin && !d) {
      let e = atomStoreManager.get($$N2);
      let i = t.pins[0];
      let n = !!i?.isOurs;
      let r = !!e && e === i?.id;
      n && r && (s.setAttribute("data-onboarding-key", UU), atomStoreManager.set($$R3, !0));
    }
    if (this.clusterElementsById.set(t.id, s), this.wrapper.append(s), !this.ds.clusters.applyInstant && "data" === r && s.animateDatasetChange && t.isSinglePin) {
      s.animateDatasetChange({
        type: "create",
        isMutatedByCurrentUser: t.pins[0]?.isOurs
      });
      this._lastDatasetChangeAnimatedAt = Date.now();
    } else if (!this.ds.clusters.applyInstant && o && "aggregation" === r) {
      let e = (i.zoomScale - 1) * o.x;
      let t = (i.zoomScale - 1) * o.y;
      s.animateAggregationChange?.({
        type: "split",
        position: {
          x: o.x + e,
          y: o.y + t
        }
      }).then(() => {
        nt.commentsA11y.getValue() && this.focusOneOf(this.focusOneOfIDs);
      });
    }
  }
  removeClusterFromDom(e, t, i, n) {
    let r;
    let a = this.clusterElementsById.get(e.id);
    if (!a) return;
    let s = this.ds?.clusters.getParentOf(e.pins[0].id) || null;
    if (e.pins.length > 1) {
      let t = s ? new Set(s.pins.map(e => e.id)) : new Set();
      e.pins.every(e => t.has(e.id)) || (s = null);
    }
    if (!(n || this.ds.clusters.applyInstant)) {
      if ("data" === i && a.animateDatasetChange) r = a.animateDatasetChange({
        type: "destroy"
      });else if (s && "aggregation" === i) {
        let e = (t.zoomScale - 1) * s.x;
        let i = (t.zoomScale - 1) * s.y;
        r = a.animateAggregationChange?.({
          type: "join",
          position: {
            x: s.x + e,
            y: s.y + i
          }
        });
      }
    }
    _$$b(r, () => {
      a.onRemove();
      a.remove();
    });
    this.clusterElementsById.$$delete(e.id);
  }
  updateViewportVisibleClusters(e) {
    let t = getVisibleArea(e);
    let i = roundedDivision(78, e.zoomScale);
    let n = this.slidingWindow.updateWindow(t, i);
    n.additions.forEach(t => this.addClusterToDom(t, e, "viewport_visible"));
    n.removals.forEach(t => {
      this.removeClusterFromDom(t, e, "viewport_visible");
    });
  }
  updatePinDragLocation(e, t) {
    let i = this.clusterElementsById.get(e);
    i && i.updateDragLocation(t);
  }
  getPinViewportRect(e) {
    if (e === NEW_COMMENT_ID) return {
      x: 0,
      y: 0,
      height: 32,
      width: XC.getPinSize(1).width
    };
    let t = this.clusterElementsById.get(e);
    if (!t) return null;
    let i = t.unhoveredSize;
    return {
      width: i.width,
      height: -1 * i.height,
      x: t.x,
      y: t.y
    };
  }
  getFocusedClusterId() {
    return this.shadowRoot?.activeElement?.parentElement?.getAttribute("id");
  }
  focusPinById(e) {
    let t = this.clusterElementsById.get(e)?.firstElementChild;
    t instanceof HTMLElement && t.focus();
  }
};
D.desiredElementName = "clustered-pins";
export let $$L0 = D;
export const Zb = $$L0;
export const iZ = $$O1;
export const WE = $$N2;
export const ux = $$R3;