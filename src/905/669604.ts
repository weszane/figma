import { InteractionCpp, Fullscreen, Axis } from "../figma_app/763686";
import { Rectangle } from "../905/249071";
import { Vector2D } from "../905/512402";
import { j } from "../905/881708";
import { packNormalizedRgb, blendColors, unpackToNormalizedRgb } from "../figma_app/273493";
let l = class e {
  getPrimaryColor() {
    return InteractionCpp.getBorderFSDesignStrong();
  }
  constructor(t, i = e.selectionActionDefaultViewportSpaceButtonSize) {
    this._isHovered = !1;
    this._isSelectionHovered = !1;
    this._viewportSpaceButtonBounds = Rectangle.invalidRect();
    this._viewportSpaceSelectionBounds = Rectangle.invalidRect();
    this._viewportSpaceHitBoxBounds = Rectangle.invalidRect();
    this._buttonSize = i;
    this._owningBehavior = t;
  }
  handleMouseMove(e) {
    let t = Vector2D.fromVectorD(e.viewportSpaceMouse());
    this.updateHoverStates(t) && (e.invalidateViewport(), this._isHovered && InteractionCpp.clearHoveredNode());
    this._isHovered && e.accept(this._owningBehavior);
  }
  handleMouseDown(e) {
    let t = Vector2D.fromVectorD(e.viewportSpaceMouse());
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
    InteractionCpp.shouldRenderResizeAndRotateHandlesAtScale() && t.containsPointIncludingBoundary(s) || a ? (this._viewportSpaceButtonBounds = new Rectangle(i, this._buttonSize), this._viewportSpaceHitBoxBounds = new Rectangle(s, this._buttonSize.plus(e.viewportSpaceButtonMargin.multiplyBy(2)))) : (this._viewportSpaceButtonBounds = Rectangle.invalidRect(), this._viewportSpaceHitBoxBounds = Rectangle.invalidRect());
  }
  positionInsideBounds(t) {
    let i = t.bottomRight().minus(e.viewportSpaceButtonSize).minus(e.viewportSpaceButtonMargin);
    this.updateBounds(t, i, !1);
  }
  positionBelowBounds(t, i) {
    let n = t.bottomCenter().plus(new Vector2D(-1 * e.viewportSpaceButtonSize.x / 2, e.viewportSpaceButtonMargin.y)).plus(i);
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
    return new Rectangle(this._viewportSpaceButtonBounds.center().plus(e).minus(t.divideBy(2)), t);
  }
  removeBounds() {
    this._viewportSpaceSelectionBounds = Rectangle.invalidRect();
    this._viewportSpaceButtonBounds = Rectangle.invalidRect();
    this._viewportSpaceHitBoxBounds = Rectangle.invalidRect();
  }
  _render(e) {
    let t = this._isHovered ? packNormalizedRgb(blendColors(unpackToNormalizedRgb(this.getPrimaryColor()), {
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
l.viewportSpaceButtonSize = new Vector2D(24, 24);
l.viewportSpaceButtonMargin = new Vector2D(4, 4);
l.selectionActionDefaultViewportSpaceButtonSize = new Vector2D(16, 16);
export class $$d0 extends j {
  constructor(e) {
    super(e);
    this._button = new l(this);
    this._button.setButtonSize(new Vector2D(24, 24));
  }
  handleMouseDown(e) {
    this._button.handleMouseDown(e);
  }
  handleMouseUp(e) {
    InteractionCpp.canTidyUp() && this._button.handleMouseUp(e) && Fullscreen.triggerAction("tidy-up", {
      source: "canvas"
    });
  }
  handleMouseMove(e) {
    this._button.handleMouseMove(e);
  }
  render(e, t) {
    if (!(InteractionCpp.editorTypeConfig().showTidyUpButtonsOnCanvas() && InteractionCpp.canTidyUp() && InteractionCpp.activeCanvasExists() && InteractionCpp.isSelectionViewportOverlayVisible())) {
      this._button.removeBounds();
      return;
    }
    let i = Rectangle.fromRectD(e.viewportSpaceSelectionBounds());
    if (this._button.positionInsideBounds(i), this._button.isSelectionHovered()) {
      if (this._button.render(t), InteractionCpp.isActionEnabled("arrange-as-grid")) {
        let e = new Vector2D(2, 2);
        for (let i = -1; i <= 1; i++) for (let r = -1; r <= 1; r++) {
          let s = new Vector2D(5 * i, 5 * r);
          let o = this._button.buildRectangleOffsetFromCenter(s, e);
          t.fillRoundedRect(o, 0, InteractionCpp.getCanvasButtonInterior());
        }
      } else {
        let e = InteractionCpp.getArrangeAsListAxisForCurrentSelection();
        if (null != e) {
          let i = e === Axis.X ? new Vector2D(5, 0) : new Vector2D(0, 5);
          let r = e === Axis.X ? new Vector2D(2, 13) : new Vector2D(13, 2);
          for (let e = -1; e <= 1; e++) {
            let a = i.multiplyBy(e);
            let s = this._button.buildRectangleOffsetFromCenter(a, r);
            t.fillRect(s, InteractionCpp.getCanvasButtonInterior());
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