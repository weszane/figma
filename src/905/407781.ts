import { Ez5, qmM, Egt, IPu, glU } from "../figma_app/763686";
import { M } from "../905/512402";
import { AD } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { atomStoreManager } from "../figma_app/27355";
import { isInteractionOrEvalMode } from "../figma_app/897289";
import { BT } from "../905/618447";
import { Mu } from "../905/435079";
import { Ds, iZ } from "../figma_app/3776";
import { j } from "../905/881708";
import { JT } from "../figma_app/632248";
import { pP, qy } from "../figma_app/862289";
import { yh, X1, oq, qu, $r, KV, PF, v2, QQ, zw, M as _$$M } from "../905/877407";
export class $$f0 extends j {
  constructor(e) {
    super(e);
    this._state = {
      mouse: "INACTIVE"
    };
    this._uiHidden = !1;
    this._hoveredRow = -1;
    this._addBehaviorStateTimeout = null;
    this._hoveredRowUpdateTimeout = null;
  }
  handleContextMenuOpen() {}
  handleBeforeFrame() {}
  handleMouseUp() {}
  handleMouseDrag() {}
  handleMouseLeave() {}
  renderUnderEditModeUI() {}
  reset() {}
  handleMouseMove(e) {
    let t = e.viewport();
    this._uiHidden = this.shouldHideUI();
    let i = Mu(e, this.getDefaultChildSize());
    if (-1 !== this._hoveredRow || -1 === i || isInteractionOrEvalMode()) {
      this._hoveredRowUpdateTimeout && (clearTimeout(this._hoveredRowUpdateTimeout), this._hoveredRowUpdateTimeout = null);
      this._hoveredRow = i;
    } else if (!this._hoveredRowUpdateTimeout) {
      let t = e.viewport();
      this._hoveredRowUpdateTimeout = setTimeout(() => {
        this._hoveredRow = i;
        this._hoveredRowUpdateTimeout = null;
        t.invalidate();
      }, 200);
    }
    let s = M.fromVectorD(e.canvasSpaceMouse());
    let o = yh(s, t, this._uiHidden, this.getDefaultChildSize(), this.addRowDotVerticalOffset());
    if (this.clearHoveredRowNodeDuringQuickAdd(), "ADD_CHILD_AFTER_ROW_HOVERED" === o.mouse) {
      let e = Ez5?.canvasGrid().getRowGUID(i) ?? AD;
      qmM?.setHoveredCanvasGridRowNodeDuringQuickAdd(e);
    }
    if (X1(this._state.mouse, o.mouse) && !isInteractionOrEvalMode()) {
      if (!this._addBehaviorStateTimeout) {
        let t = e.viewport();
        this._addBehaviorStateTimeout = setTimeout(() => {
          this._state = o;
          this._addBehaviorStateTimeout = null;
          t.invalidate();
        }, 200);
      }
      return;
    }
    this._addBehaviorStateTimeout && (clearTimeout(this._addBehaviorStateTimeout), this._addBehaviorStateTimeout = null);
    this._state = o;
  }
  handleMouseDown(e) {
    let t;
    if (this._uiHidden = this.shouldHideUI(), !this._uiHidden) {
      if ("ADD_FIRST_CHILD_HOVERED" === this._state.mouse && (t = this.addBlankChildAtCoord(0, 0, "insert_slide_button", !1)), ("ADD_CHILD_DOT_HOVERED" === this._state.mouse || "ADD_CHILD_AFTER_ROW_HOVERED" === this._state.mouse) && (t = this.addBlankChildAtCoord(this._state.coord.row, this._state.coord.col, "insert_slide_button", !1)), "ADD_CHILD_AFTER_FINAL_ROW_HOVERED" === this._state.mouse) {
        let e = atomStoreManager.get(BT);
        t = this.addBlankChildAtCoord(e.length, 0, "insert_row_button", !1, oq(e, e.length));
      }
      "ADD_ROW_DOT_HOVERED" === this._state.mouse && (Ez5?.canvasGrid().createRow(this._state.row), t = this.addBlankChildAtCoord(this._state.row, 0, "insert_row_button", !1));
      t && (Egt?.replaceSelection([t], !0), e.accept(this));
    }
  }
  render(e, t) {
    if (!Ez5 || Ez5.canvasGrid().isDraggingChildren.getCopy()) return;
    let i = atomStoreManager.get(BT);
    if (pP(JT.BOARD_TO_DECK).state !== qy.RUNNING && !this._uiHidden) {
      if (0 === i.length && this.shouldRenderEmptyCanvasPlaceholder() && this.renderEmptyCanvasPlaceholder(e, t), "ADD_CHILD_DOT_NEARBY" === this._state.mouse && qu(this._state.canvasPos, e, t, 0, this.shouldRenderAsStateGroupRow(this._state.coord.row)), "ADD_CHILD_DOT_HOVERED" === this._state.mouse && $r(this._state.canvasPos, e, t, 0, this.shouldRenderAsStateGroupRow(this._state.coord.row)), "ADD_ROW_DOT_NEARBY" === this._state.mouse && qu(this._state.canvasPos, e, t, -KV), "ADD_ROW_DOT_HOVERED" === this._state.mouse) {
        let i = e.canvasSpaceToViewportSpace(this._state.canvasPos);
        i.x -= KV;
        let r = {
          x: this._state.rowWidth * e.canvasScale() + KV,
          y: 2
        };
        t.fillRoundedRect({
          origin: i,
          size: r
        }, 3, Ez5.getCanvasButton());
        $r(this._state.canvasPos, e, t, -KV, !1);
      }
      if (-1 !== this._hoveredRow && this._hoveredRow < i.length) {
        let r = {
          row: this._hoveredRow,
          col: i[this._hoveredRow].length
        };
        let a = PF(i, r.row, r.col, this.getDefaultChildSize());
        let s = Ez5.canvasGrid().rectForCoord(r, a, !0);
        let o = this.shouldRenderAsStateGroupRow(r.row);
        let l = "ADD_CHILD_AFTER_ROW_HOVERED" === this._state.mouse && this._state.coord.row === r.row && this._state.coord.col === r.col;
        let d = {
          x: s.origin.x - Ez5.canvasGrid().gridChildSpacing() / 2,
          y: s.origin.y + s.size.y / 2
        };
        if (l) {
          let i = s.origin.x + s.size.x > Ez5.canvasGrid().rowMaxSize().x + Ez5.canvasGrid().gridPadding();
          let a = Ez5?.canvasGrid().isRowSelected(r.row);
          this._renderActiveAddAssetState(r, s, !!o, !!a, d, e, t, i);
        } else qu(d, e, t, 0, o);
      }
      if (i.length && this._hoveredRow === i.length - 1) {
        let a = {
          row: i.length,
          col: 0
        };
        let s = "ADD_CHILD_AFTER_FINAL_ROW_HOVERED" === this._state.mouse;
        let o = v2(i, i.length, this.getDefaultChildSize());
        let l = QQ(i, this.getDefaultChildSize()) || new M(0, 0);
        s ? (zw(Ez5.canvasGrid().rectForCoord(a, o, !0), e, t, this._getDashedPlaceholderBgColor(), this._getDashedPlaceholderOutlineColor(), a.row), $r(l, e, t, 0)) : qu(l, e, t, 0);
      }
    }
  }
  _renderActiveAddAssetState(e, t, i, r, o, l, d, c) {
    if (Ez5 && (zw(t, l, d, i ? Ez5?.getBgAssistiveTertiary() : this._getDashedPlaceholderBgColor(), i ? Ez5?.getBgFSAssistive() : this._getDashedPlaceholderOutlineColor(), e.row, i, r, c), c && _$$M(o, l, d), $r(o, l, d, i ? 4 : 0, i), i)) {
      let t = Ez5.canvasGrid().getRowGUID(e.row) ?? AD;
      let o = getSingletonSceneGraph().get(t)?.name || "";
      let c = IPu?.getBuzzVariantText(t) || "";
      let p = glU?.getStateGroupError(t) || null;
      let m = Ds(l, e.row, i);
      !(!m || .08 > l.canvasScale()) && iZ(d, m, c, o, p, r);
    }
  }
  _getDashedPlaceholderBgColor() {
    return "ADD_FIRST_CHILD_HOVERED" === this._state.mouse ? this.getActiveBgColor() : Ez5?.getBgFSTertiary() ?? 0xffffff;
  }
  _getDashedPlaceholderOutlineColor() {
    return "ADD_FIRST_CHILD_HOVERED" === this._state.mouse ? this.getActiveOutlineColor() : Ez5?.getBorderFSPlaceholder() ?? 0xcccccc;
  }
  getDefaultChildSize() {
    return new M(0, 0);
  }
  addBlankChildAtCoord(e, t, i, n, r) {
    return null;
  }
  shouldHideUI() {
    return !1;
  }
  shouldRenderEmptyCanvasPlaceholder() {
    return !0;
  }
  renderEmptyCanvasPlaceholder(e, t) {}
  addRowDotVerticalOffset() {
    return 0;
  }
  getActiveBgColor() {
    return 0;
  }
  getActiveOutlineColor() {
    return 0;
  }
  shouldRenderAsStateGroupRow(e) {
    let t = Ez5?.canvasGrid().getRowGUID(e) ?? AD;
    return !!getSingletonSceneGraph().get(t)?.isCanvasGridStateGroupRow && this.isStateGroupRowAllowed();
  }
  clearHoveredRowNodeDuringQuickAdd() {
    qmM?.setHoveredCanvasGridRowNodeDuringQuickAdd(AD);
  }
  isStateGroupRowAllowed() {
    return !1;
  }
}
export const C = $$f0;