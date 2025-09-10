import { InteractionCpp, Axis } from "../figma_app/763686";
import { packRgb } from "../figma_app/273493";
import { r as _$$r } from "../905/249071";
import { M } from "../905/512402";
import { getSingletonSceneGraph } from "../905/700578";
import { j } from "../905/881708";
import { Dv, Ro, fl, dw } from "../905/962457";
export class $$c0 extends j {
  constructor(e) {
    super(e);
    this.state = {
      mouseState: Dv.INACTIVE
    };
    this._inactiveColor = InteractionCpp?.getTableNodeColorInactive() ?? 0;
    this._selectedColor = InteractionCpp?.getTableNodeColorSelected() ?? 0;
    this._hoverColorPrimary = InteractionCpp?.getTableNodeColorHoveredPrimary() ?? 0;
    this._hoverColorSecondary = InteractionCpp?.getTableNodeColorHoveredSecondary() ?? 0;
    this._whiteColor = packRgb(1, 1, 1);
  }
  handleContextMenuOpen() {}
  handleBeforeFrame() {}
  handleMouseLeave() {}
  renderUnderEditModeUI() {}
  handleMouseMove(e) {
    if (this.state.mouseState === Dv.INACTIVE || !this.state.node || !this.state.node.isAlive) return;
    let {
      activeBounds
    } = this._getHandleBounds(this.state.node, e.viewport());
    activeBounds.containsPointIncludingBoundary(M.fromVectorD(e.viewportSpaceMouse())) ? this.state = {
      ...this.state,
      mouseState: Dv.HOVERED
    } : this.state = {
      ...this.state,
      mouseState: Dv.SELECTED
    };
  }
  handleMouseDown(e) {
    if (this.state.mouseState !== Dv.INACTIVE && this.state.mouseState === Dv.HOVERED) {
      let t = this._singleSelectedEmbedNode();
      if (!t || !t.parentNode) {
        this.reset();
        return;
      }
      let i = M.fromVectorD(e.canvasSpaceMouse());
      let n = new M(t.absoluteTransform.m02, t.absoluteTransform.m12).minus(i);
      let r = new M(t.parentNode.absoluteTransform.m02, t.parentNode.absoluteTransform.m12);
      this.state = {
        mouseState: Dv.DRAGGED,
        node: t,
        canvasSpaceMouseToEmbedRelativeTransformOffset: e => e.minus(r).plus(n)
      };
      e.accept(this);
    }
  }
  handleMouseDrag(e) {
    if (this.state.mouseState !== Dv.DRAGGED) return;
    let t = this.state.canvasSpaceMouseToEmbedRelativeTransformOffset(M.fromVectorD(e.canvasSpaceMouse()));
    let i = this.state.node.relativeTransform;
    i.m02 = t.x;
    i.m12 = t.y;
    this.state.node.relativeTransform = i;
    e.accept(this);
  }
  handleMouseUp() {
    this.state.mouseState === Dv.DRAGGED && (this.state = {
      ...this.state,
      mouseState: Dv.SELECTED
    });
  }
  _singleSelectedEmbedNode() {
    let e = getSingletonSceneGraph().getDirectlySelectedNodes();
    if (1 !== e.length) return null;
    let t = e[0];
    return t && "INTERACTIVE_SLIDE_ELEMENT" === t.type && "EMBED" === t.interactiveSlideElementType ? t : null;
  }
  _getHandleBounds(e, t) {
    let {
      x,
      y,
      h
    } = e.absoluteBoundingBox;
    let {
      x: _x,
      y: _y
    } = t.canvasSpaceToViewportSpace({
      x,
      y
    });
    let c = t.canvasScale() * h;
    let u = new M(_x - Ro.padding - Ro.reorderHandleInactiveSize.y / 2, _y + c / 2);
    let p = Ro.reorderHandleInactiveSize.transpose();
    let m = Ro.reorderHandleHoveredSize.transpose();
    return {
      inactiveBounds: _$$r.fromCenterSize(u, p),
      activeBounds: _$$r.fromCenterSize(u, m)
    };
  }
  _getBackgroundColor() {
    let {
      mouseState
    } = this.state;
    switch (mouseState) {
      case Dv.INACTIVE:
      case Dv.HOVERED:
      case Dv.SELECTED:
        return this._hoverColorSecondary;
      case Dv.DRAGGED:
        return this._selectedColor;
      default:
        return packRgb(.78, 0, .92);
    }
  }
  _getForegroundColor() {
    let {
      mouseState
    } = this.state;
    switch (mouseState) {
      case Dv.INACTIVE:
      case Dv.HOVERED:
        return this._hoverColorPrimary;
      case Dv.DRAGGED:
      case Dv.SELECTED:
        return this._whiteColor;
      default:
        return packRgb(1, 0, 1);
    }
  }
  _maybeHandleSelectionChange(e) {
    e ? (this.state.mouseState === Dv.INACTIVE || this.state.node.guid !== e.guid) && (this.state = {
      mouseState: Dv.SELECTED,
      node: e
    }) : this.reset();
  }
  render(e, t) {
    let i = this._singleSelectedEmbedNode();
    if (this._maybeHandleSelectionChange(i), !i) return;
    let {
      inactiveBounds,
      activeBounds
    } = this._getHandleBounds(i, e);
    switch (this.state.mouseState) {
      case Dv.SELECTED:
        fl(t, inactiveBounds, this._inactiveColor);
        break;
      case Dv.HOVERED:
      case Dv.DRAGGED:
        dw(t, activeBounds, this._getBackgroundColor(), this._getForegroundColor(), Axis.Y);
      case Dv.INACTIVE:
    }
  }
  reset() {
    this.state = {
      mouseState: Dv.INACTIVE
    };
  }
}
export const W = $$c0;