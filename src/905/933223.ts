import { R0 } from "../figma_app/273493";
import { Ez5, nzw, glU, qmM, IPu, OR7, GP2, zbP, zd5, PVe, Egt } from "../figma_app/763686";
import { r as _$$r } from "../905/249071";
import { M } from "../905/512402";
import o, { AD } from "../905/871411";
import { UN } from "../905/700578";
import { zl } from "../figma_app/27355";
import { nl } from "../figma_app/257275";
import { BT } from "../905/618447";
import { x7, Mu, b, js, vJ } from "../905/435079";
import { $j, xC, iZ, Ds } from "../figma_app/3776";
import { j } from "../905/881708";
let g = class e extends j {
  constructor(e) {
    super(e);
    this._state = {
      mouse: "INACTIVE"
    };
    this._timeout = null;
  }
  handleContextMenuOpen() {}
  handleBeforeFrame() {}
  handleMouseLeave() {}
  renderUnderEditModeUI() {}
  handleMouseMove(e) {
    if (Ez5?.canvasViewState().temporarilyHoveredNodes.set([]), this.shouldHideUI()) {
      this._state = {
        mouse: "INACTIVE"
      };
      return;
    }
    let t = this._getRowStateFromCoord(e);
    if ("HANDLE_HOVERED" === this._state.mouse && Ez5?.canvasViewState().temporarilyHoveredNodes.set(this._state.rowGUIDs), "ROW_HOVERED" !== t.mouse || nl()) {
      this._timeout && (clearTimeout(this._timeout), this._timeout = null);
      this._state = t;
    } else {
      if (!this._timeout) {
        let i = e.viewport();
        this._timeout = setTimeout(() => {
          this._state = t;
          this._timeout = null;
          i.invalidate();
        }, 200);
      }
      return;
    }
  }
  handleMouseDown(e) {
    if ("INACTIVE" === this._state.mouse || "ROW_HOVERED" === this._state.mouse) return;
    let t = M.fromVectorD(e.viewportSpaceMouse());
    let i = this._state.currentRowIndex;
    if ("HEADER_HOVERED" === this._state.mouse && 2 === e.clickCount()) return;
    e.isShiftPressed() ? this.addOrRemoveRowFromSelection(i) : this.selectRow(i);
    let n = Ez5?.canvasGrid().rowContentBoundsInCanvas(i, !0);
    if ("HEADER_HOVERED" === this._state.mouse) {
      this._state = {
        mouse: "HEADER_SELECTED",
        currentRowIndex: i,
        mouseDownY: t.y,
        rowHeight: n?.size.y ?? 0
      };
      let e = Ez5?.canvasGrid().canvasGridArray.getCopy()[i] ?? [];
      Ez5?.canvasViewState().temporarilyHoveredNodes.set(e);
    } else this._state = {
      mouse: "HANDLE_SELECTED",
      currentRowIndex: i,
      mouseDownY: t.y,
      rowHeight: n?.size.y ?? 0
    };
    e.accept(this);
  }
  handleMouseDrag(e) {
    if ("INACTIVE" === this._state.mouse || "HANDLE_HOVERED" === this._state.mouse || "HEADER_HOVERED" === this._state.mouse || "ROW_HOVERED" === this._state.mouse || !Ez5) return;
    Ez5.canvasGrid().isDraggingChildren.set(!0);
    let t = M.fromVectorD(e.viewportSpaceMouse());
    let i = (t.y - this._state.mouseDownY) / e.viewport().canvasScale();
    let n = zl.get(BT);
    for (let e = 0; e < n.length; e++) $j({
      row: e,
      y: 0,
      isStateGroupRowAllowed: this.isStateGroupRowAllowed()
    });
    let {
      rowHeight,
      currentRowIndex
    } = this._state;
    let l = o;
    let c = rowHeight / 2 + Math.abs(i);
    let p = 0;
    let h = l;
    let g = i < 0 ? rowHeight : -rowHeight;
    for (; c > (rowHeight + p) / 2 && h >= 0 && h < n.length;) {
      l = h;
      h += i > 0 ? 1 : -1;
      c -= p;
      p = Ez5.canvasGrid().rowContentBoundsInCanvas(h, !0).size.y;
      $j({
        row: l,
        y: l === currentRowIndex ? i : g,
        isStateGroupRowAllowed: this.isStateGroupRowAllowed()
      });
    }
    "HANDLE_SELECTED" === this._state.mouse || "HANDLE_DRAGGED" === this._state.mouse ? this._state = {
      ...this._state,
      mouse: "HANDLE_DRAGGED",
      mouseY: t.y,
      targetRowIndex: l
    } : ("HEADER_SELECTED" === this._state.mouse || "HEADER_DRAGGED" === this._state.mouse) && (this._state = {
      ...this._state,
      mouse: "HEADER_DRAGGED",
      mouseY: t.y,
      targetRowIndex: l
    });
    e.accept(this);
  }
  handleMouseUp(e) {
    Ez5?.canvasGrid().isDraggingChildren.set(!1);
    ("HANDLE_DRAGGED" === this._state.mouse || "HEADER_DRAGGED" === this._state.mouse) && (e.accept(this), this._state.currentRowIndex !== this._state.targetRowIndex && Ez5?.canvasGrid().moveRow(this._state.currentRowIndex, this._state.targetRowIndex));
    let t = zl.get(BT);
    for (let e = 0; e < t.length; e++) $j({
      row: e,
      isStateGroupRowAllowed: this.isStateGroupRowAllowed()
    });
    this._state = {
      mouse: "INACTIVE"
    };
  }
  render(e, t) {
    if (this.shouldHideUI()) return;
    let i = [];
    let n = Ez5?.onCanvasNameEditorMode() === nzw.CANVAS_GRID_ROW_NAME;
    if (this.isRowHeaderSelectable()) {
      let a = zl.get(BT);
      for (let s = 0; s < a.length; s++) if (Ez5?.canvasGrid().isRowSelected(s) && !n) {
        i.push(s);
        let n = Ez5?.canvasGrid().getRowGUID(s) ?? AD;
        this._renderActiveRowHeader(n, e, t, s, !0);
      }
    }
    if ("INACTIVE" === this._state.mouse) return;
    let a = Ez5?.canvasGrid().getRowGUID(this._state.currentRowIndex) ?? AD;
    let s = !!UN().get(a)?.isCanvasGridStateGroupRow && this.isStateGroupRowAllowed();
    if ("HANDLE_HOVERED" === this._state.mouse || "HANDLE_SELECTED" === this._state.mouse || "HANDLE_DRAGGED" === this._state.mouse || "HEADER_SELECTED" === this._state.mouse || "HEADER_DRAGGED" === this._state.mouse) {
      let i = this._getViewportSpaceReorderHandle(e, this._state.currentRowIndex);
      this._renderActiveHandle(t, i.activeRect, s);
    }
    if ("ROW_HOVERED" === this._state.mouse) {
      let i = this._getViewportSpaceReorderHandle(e, this._state.currentRowIndex);
      this._renderInactiveHandle(t, i.inactiveRect, s);
    }
    if (this.isRowHeaderSelectable() && "HEADER_HOVERED" === this._state.mouse && !i.includes(this._state.currentRowIndex) && !n) {
      let i = Ez5?.canvasGrid().getRowGUID(this._state.currentRowIndex) ?? AD;
      this._renderActiveRowHeader(i, e, t, this._state.currentRowIndex, !1);
    }
  }
  _getRowStateFromCoord(t) {
    let i = x7(t);
    let n = Mu(t, this.getDefaultChildSize());
    if (-1 === i && -1 === n) return {
      mouse: "INACTIVE"
    };
    if (this.isRowHeaderSelectable() && -1 !== i) return {
      mouse: "HEADER_HOVERED",
      currentRowIndex: i
    };
    let a = t.viewport();
    let o = this._getViewportSpaceReorderHandle(a, n);
    let l = M.fromVectorD(t.canvasSpaceMouse());
    let d = M.fromVectorD(a.canvasSpaceToViewportSpace(l));
    let c = o.activeRect.expand(new M(e.reorderMargin, 0)).containsPointIncludingBoundary(d) ? "HANDLE_HOVERED" : "ROW_HOVERED";
    if ("HANDLE_HOVERED" === c) {
      let e = Ez5?.canvasGrid().canvasGridArray.getCopy()[n] ?? [];
      return {
        mouse: c,
        currentRowIndex: n,
        rowGUIDs: e
      };
    }
    return {
      mouse: c,
      currentRowIndex: n
    };
  }
  _renderInactiveHandle(t, i, n) {
    Ez5 && t.fillRoundedRect(i, .5 * e.handleHeight, n ? Ez5.getBgAssistiveHover() : Ez5.getFSNodeHandle());
  }
  _renderActiveHandle(t, i, n) {
    if (Ez5) for (let s of (t.fillRoundedRect(i, .5 * e.handleHeight, n ? Ez5.getBgAssistiveHover() : Ez5.getCanvasButton()), e.handleIconOffsets)) {
      let n = new _$$r(s, e.handleIconDimensions);
      t.fillRoundedRect(n.offsetBy(i.topLeft()), e.handleIconDashRadius, Ez5.getFSCanvasDefaultFill());
    }
  }
  _renderActiveRowHeader(e, t, i, n, a) {
    let s = UN().get(e)?.name;
    let o = !!UN().get(e)?.isCanvasGridStateGroupRow && this.isStateGroupRowAllowed();
    let d = this._getViewportSpaceRowHeaderBounds(t, n, o);
    let c = this._getViewportSpaceRowDimensions(t, n);
    let u = glU?.getStateGroupError(e) || null;
    if (d && s && c) {
      if (o) this._renderActiveStateGroupRowHeader(i, d, c, s, a, e, u);else {
        let t = qmM?.editorTypeConfig().hasSlideRowBeenManuallyRenamed(e);
        this._renderActiveRowNodeTypeHeader(i, d, s, a, t);
      }
    }
  }
  _renderActiveStateGroupRowHeader(e, t, i, n, s, o, l) {
    if (!Ez5) return;
    let d = IPu?.getBuzzVariantText(o) || "";
    s && qmM?.shouldRenderHoveredCanvasGridRowNodeDuringQuickAddSelectedDecorations(o) && e.strokeRoundedRect(new _$$r(t.origin, i), xC, Ez5.getBgAssistiveHover(), 2, OR7.CENTER);
    iZ(e, t, d, n, l);
  }
  _renderActiveRowNodeTypeHeader(e, t, i, o, l = !0) {
    let d;
    if (!Ez5) return;
    let c = new M(4, 4);
    let u = new _$$r(new M(t.origin.x, t.origin.y - 1), new M(t.size.x, 2));
    o && e.fillRect(u, Ez5.getCanvasButton());
    d = o ? R0(Ez5.getFSCanvasDefaultFill()) : l ? R0(Ez5.getTextPrimary()) : R0(Ez5.getTextSecondary());
    e.fillTextWithBox(new M(t.origin.x - c.x, t.origin.y), i, d, o ? R0(Ez5.getCanvasButton()) : R0(Ez5.getBgFSTertiary()), GP2.LEFT, zbP.CENTER, 0, zd5.BOX, c, PVe.MEDIUM, xC);
  }
  _getViewportSpaceReorderHandle(t, i) {
    if (!Ez5) return {
      activeRect: new _$$r(),
      inactiveRect: new _$$r()
    };
    let n = Ez5.canvasGrid().rowContentBoundsInCanvas(i, !0);
    let o = n.origin.x;
    let l = n.origin.y + n.size.y / 2;
    let d = M.fromVectorD(t.canvasSpaceToViewportSpace({
      x: o,
      y: l
    }));
    if ("HANDLE_DRAGGED" === this._state.mouse) d.y = this._state.mouseY;else if ("HEADER_DRAGGED" === this._state.mouse) {
      let e = this._state.mouseY - this._state.mouseDownY;
      d.y += e;
    }
    return {
      activeRect: new _$$r(d, new M(0, 0)).expand(new M(e.activeHandleWidth / 2, e.handleHeight / 2)).offsetBy(new M(-1 * e.reorderXOffsetViewport, 0)),
      inactiveRect: new _$$r(d, new M(0, 0)).expand(new M(e.inactiveHandleWidth / 2, e.handleHeight / 3)).offsetBy(new M(-1 * e.reorderXOffsetViewport, 0))
    };
  }
  _getViewportSpaceRowDimensions(e, t) {
    if (!Ez5 || !Egt) return null;
    let i = Ez5.canvasGrid().getRowGUID(t);
    let n = Egt.getBoundsForNode(i);
    if (!n) return null;
    let a = e.canvasScale() * n.width;
    let o = e.canvasScale() * n.height;
    return new M(a, o);
  }
  _getViewportSpaceRowHeaderBounds(e, t, i) {
    let n = 0;
    "HEADER_DRAGGED" === this._state.mouse ? i && (n = this._state.mouseY - this._state.mouseDownY) : "HANDLE_DRAGGED" === this._state.mouse && (n += this._state.mouseY - this._state.mouseDownY);
    let r = Ds(e, t, i, n);
    r && "HEADER_DRAGGED" === this._state.mouse && !i && (r.origin.y = this._state.mouseY);
    return r;
  }
  reset() {}
  getDefaultChildSize() {
    return new M(0, 0);
  }
  shouldHideUI() {
    return !1;
  }
  isRowHeaderSelectable() {
    return !1;
  }
  addOrRemoveRowFromSelection(e) {}
  selectRow(e) {}
  isStateGroupRowAllowed() {
    return !1;
  }
};
g.handleViewportLength = 20;
g.reorderMargin = b;
g.reorderXOffsetViewport = 8;
g.handleViewportSize = new M(g.handleViewportLength, g.handleViewportLength);
g.handleHeight = js;
g.activeHandleWidth = vJ;
g.inactiveHandleWidth = g.activeHandleWidth / 4;
g.handleIconDashThickness = g.handleHeight / 16;
g.handleIconDashVerticalOffset = g.handleHeight / 2 / 3;
g.handleIconDimensions = new M(g.activeHandleWidth / 2, g.handleIconDashThickness);
g.handleIconOffsets = [new M(g.activeHandleWidth / 4, g.handleHeight / 2 - g.handleIconDashThickness / 2 - g.handleIconDashVerticalOffset), new M(g.activeHandleWidth / 4, g.handleHeight / 2 - g.handleIconDashThickness / 2), new M(g.activeHandleWidth / 4, g.handleHeight / 2 - g.handleIconDashThickness / 2 + g.handleIconDashVerticalOffset)];
g.handleRadius = .5 * g.handleHeight;
g.handleIconDashRadius = .5 * g.handleIconDashThickness;
export let $$f0 = g;
export const k = $$f0;