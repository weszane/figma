import { CooperHelpers, Fullscreen, AppStateTsApi, Position, SceneGraphHelpers } from "../figma_app/763686";
import { Vector2D } from "../905/512402";
import { defaultSessionLocalIDString } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { x7 } from "../905/435079";
import { Ds, vo } from "../figma_app/3776";
import { kH } from "../figma_app/552821";
import { j } from "../905/881708";
export class $$p0 extends j {
  constructor(e) {
    super(e);
    this._hoveredRowIndex = -1;
    this._hoveredRowGuid = "";
    this._stateGroupError = null;
    this._mousePosition = null;
    this._isTooltipRendered = !1;
  }
  render(e, t) {
    if (-1 === this._hoveredRowIndex || "" === this._hoveredRowGuid || null === this._stateGroupError || null === this._mousePosition) return;
    let i = getSingletonSceneGraph().get(this._hoveredRowGuid)?.name || "";
    let a = CooperHelpers?.getBuzzVariantText(this._hoveredRowGuid) || "";
    let o = Ds(e, this._hoveredRowIndex, !0);
    if (!o) return;
    let {
      errorIconRect
    } = vo(t, i, a, this._stateGroupError, o);
    let c = Vector2D.fromVectorD(e.canvasSpaceToViewportSpace(this._mousePosition));
    let u = errorIconRect?.expand(1);
    let p = Fullscreen?.getStateGroupErrorString(this._stateGroupError);
    let m = u?.containsPointIncludingBoundary(c);
    m && !this._isTooltipRendered ? (this._isTooltipRendered = !0, p && u && AppStateTsApi?.setCanvasTooltip(p, u, 200, Position.ABOVE, 200)) : !m && this._isTooltipRendered && (this._isTooltipRendered = !1, AppStateTsApi?.hideCanvasTooltip());
  }
  handleMouseMove(e) {
    if (!getFeatureFlags().buzz_template_sets) return;
    let t = x7(e);
    let i = AppStateTsApi?.canvasGrid().getRowGUID(t) ?? defaultSessionLocalIDString;
    let d = !!getSingletonSceneGraph().get(i)?.isCanvasGridStateGroupRow;
    let c = Fullscreen?.getStateGroupError(i) || null;
    d && c ? (this._hoveredRowIndex = t, this._hoveredRowGuid = i, this._stateGroupError = c, this._mousePosition = Vector2D.fromVectorD(e.canvasSpaceMouse())) : (this._hoveredRowIndex = -1, this._hoveredRowGuid = "", this._stateGroupError = null, this._mousePosition = null, this._isTooltipRendered = !1, AppStateTsApi?.hideCanvasTooltip());
  }
  handleMouseDown(e) {
    if (getFeatureFlags().buzz_template_sets && AppStateTsApi?.canEnterDesignMode() && this._isTooltipRendered && null !== this._stateGroupError) {
      let t = Fullscreen?.getStatesWithError(this._hoveredRowGuid, this._stateGroupError);
      t && t.length > 0 && (SceneGraphHelpers?.replaceSelection(t, !0), kH(), this._isTooltipRendered = !1, e.accept(this), AppStateTsApi?.hideCanvasTooltip());
    }
  }
  handleContextMenuOpen(e) {}
  handleBeforeFrame() {}
  handleMouseLeave(e) {}
  renderUnderEditModeUI(e, t) {}
  handleMouseDrag(e) {}
  handleMouseUp(e) {}
  reset() {}
}
export const A = $$p0;