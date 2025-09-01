import { qmM, glU, _0v } from "../figma_app/763686";
import { r as _$$r } from "../905/249071";
import { M } from "../905/512402";
import { j } from "../905/881708";
import { bi, au, R0 } from "../figma_app/273493";
let l = class e {
  getPrimaryColor() {
    return qmM.getBorderFSDesignStrong();
  }
  constructor(t, i = e.selectionActionDefaultViewportSpaceButtonSize) {
    this._isHovered = !1;
    this._isSelectionHovered = !1;
    this._viewportSpaceButtonBounds = _$$r.invalidRect();
    this._viewportSpaceSelectionBounds = _$$r.invalidRect();
    this._viewportSpaceHitBoxBounds = _$$r.invalidRect();
    this._buttonSize = i;
    this._owningBehavior = t;
  }
  handleMouseMove(e) {
    let t = M.fromVectorD(e.viewportSpaceMouse());
    this.updateHoverStates(t) && (e.invalidateViewport(), this._isHovered && qmM.clearHoveredNode());
    this._isHovered && e.accept(this._owningBehavior);
  }
  handleMouseDown(e) {
    let t = M.fromVectorD(e.viewportSpaceMouse());
    this.updateHoverStates(t);
    return !!this._isHovered && (e.accept(this._owningBehavior), e.invalidateViewport(), !0);
  }
  handleMouseUp(e) {
    if (e.wasCanceled()) {
      this._isHovered = !1;
      this._isSelectionHovered = !1;
    } else if (this._isHovered) {
      e.accept(this._owningBehavior);
      return !0;
    }
    return !1;
  }
  isSelectionHovered() {
    return this._isSelectionHovered;
  }
  setButtonSize(e) {
    this._buttonSize = e;
  }
  buttonSize() {
    return this._buttonSize;
  }
  updateBounds(t, i, a) {
    this._viewportSpaceSelectionBounds = t;
    let s = i.minus(e.viewportSpaceButtonMargin);
    qmM.shouldRenderResizeAndRotateHandlesAtScale() && t.containsPointIncludingBoundary(s) || a ? (this._viewportSpaceButtonBounds = new _$$r(i, this._buttonSize), this._viewportSpaceHitBoxBounds = new _$$r(s, this._buttonSize.plus(e.viewportSpaceButtonMargin.multiplyBy(2)))) : (this._viewportSpaceButtonBounds = _$$r.invalidRect(), this._viewportSpaceHitBoxBounds = _$$r.invalidRect());
  }
  positionInsideBounds(t) {
    let i = t.bottomRight().minus(e.viewportSpaceButtonSize).minus(e.viewportSpaceButtonMargin);
    this.updateBounds(t, i, !1);
  }
  positionBelowBounds(t, i) {
    let n = t.bottomCenter().plus(new M(-1 * e.viewportSpaceButtonSize.x / 2, e.viewportSpaceButtonMargin.y)).plus(i);
    this.updateBounds(t, n, !0);
  }
  updateHoverStates(e) {
    let t = this._isSelectionHovered;
    let i = this._isHovered;
    this._isSelectionHovered = !this._viewportSpaceSelectionBounds.isInvalid() && this._viewportSpaceSelectionBounds.containsPointIncludingBoundary(e);
    this._isHovered = !this._viewportSpaceHitBoxBounds.isInvalid() && this._viewportSpaceHitBoxBounds.containsPointIncludingBoundary(e);
    return this._isSelectionHovered !== t || this._isHovered !== i;
  }
  buildRectangleOffsetFromCenter(e, t) {
    return new _$$r(this._viewportSpaceButtonBounds.center().plus(e).minus(t.divideBy(2)), t);
  }
  removeBounds() {
    this._viewportSpaceSelectionBounds = _$$r.invalidRect();
    this._viewportSpaceButtonBounds = _$$r.invalidRect();
    this._viewportSpaceHitBoxBounds = _$$r.invalidRect();
  }
  _render(e) {
    let t = this._isHovered ? bi(au(R0(this.getPrimaryColor()), {
      red: 0,
      green: 0,
      blue: 0,
      alpha: .1
    })) : this.getPrimaryColor();
    e.fillRoundedRect(this._viewportSpaceButtonBounds, 3, t);
  }
  render(e) {
    this._render(e);
  }
  viewportSpaceButtonBounds() {
    return this._viewportSpaceButtonBounds;
  }
};
l.viewportSpaceButtonSize = new M(24, 24);
l.viewportSpaceButtonMargin = new M(4, 4);
l.selectionActionDefaultViewportSpaceButtonSize = new M(16, 16);
export class $$d0 extends j {
  constructor(e) {
    super(e);
    this._button = new l(this);
    this._button.setButtonSize(new M(24, 24));
  }
  handleMouseDown(e) {
    this._button.handleMouseDown(e);
  }
  handleMouseUp(e) {
    qmM.canTidyUp() && this._button.handleMouseUp(e) && glU.triggerAction("tidy-up", {
      source: "canvas"
    });
  }
  handleMouseMove(e) {
    this._button.handleMouseMove(e);
  }
  render(e, t) {
    if (!(qmM.editorTypeConfig().showTidyUpButtonsOnCanvas() && qmM.canTidyUp() && qmM.activeCanvasExists() && qmM.isSelectionViewportOverlayVisible())) {
      this._button.removeBounds();
      return;
    }
    let i = _$$r.fromRectD(e.viewportSpaceSelectionBounds());
    if (this._button.positionInsideBounds(i), this._button.isSelectionHovered()) {
      if (this._button.render(t), qmM.isActionEnabled("arrange-as-grid")) {
        let e = new M(2, 2);
        for (let i = -1; i <= 1; i++) for (let r = -1; r <= 1; r++) {
          let s = new M(5 * i, 5 * r);
          let o = this._button.buildRectangleOffsetFromCenter(s, e);
          t.fillRoundedRect(o, 0, qmM.getCanvasButtonInterior());
        }
      } else {
        let e = qmM.getArrangeAsListAxisForCurrentSelection();
        if (null != e) {
          let i = e === _0v.X ? new M(5, 0) : new M(0, 5);
          let r = e === _0v.X ? new M(2, 13) : new M(13, 2);
          for (let e = -1; e <= 1; e++) {
            let a = i.multiplyBy(e);
            let s = this._button.buildRectangleOffsetFromCenter(a, r);
            t.fillRect(s, qmM.getCanvasButtonInterior());
          }
        }
      }
    }
  }
  handleMouseLeave(e) {}
  handleMouseDrag(e) {}
  handleContextMenuOpen(e) {}
  handleBeforeFrame() {}
  renderUnderEditModeUI(e, t) {}
  reset() {}
}
export const b = $$d0;