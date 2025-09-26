import { unpackToNormalizedRgb } from "../figma_app/273493";
import { InteractionCpp, AppStateTsApi, HorizontalAlignment, VerticalAlignment, TextBoxType, FontWeight } from "../figma_app/763686";
import { Rectangle } from "../905/249071";
import { Vector2D } from "../905/512402";
import { getSingletonSceneGraph } from "../905/700578";
import { atomStoreManager } from "../figma_app/27355";
import { getI18nString } from "../905/303541";
import { NameClass } from "../905/881708";
import { aK, t6 } from "../figma_app/647246";
import { Nl } from "../figma_app/115923";
import { $e } from "../905/554703";
let h = new Vector2D(80, 20);
let g = {
  red: 1,
  green: 1,
  blue: 1,
  alpha: 1
};
let f = new Vector2D(0, 40);
class _ {
  constructor(e, t) {
    this.isHovered = !1;
    this.bounds = new Rectangle();
    this.isHovered = e;
    this.bounds = t;
  }
}
export class $$A0 extends NameClass {
  constructor(e) {
    super(e);
    this.addButtonUiState = new _(!1, new Rectangle());
  }
  handleMouseMove(e) {
    this._isMouseOverAddButton(e) ? this.addButtonUiState.isHovered = !0 : this.addButtonUiState.isHovered = !1;
  }
  handleMouseDown(e) {
    this._isMouseOverAddButton(e) && (e.accept(this), atomStoreManager.set(Nl, $e.INSERT), atomStoreManager.set(aK, t6.Blocks));
  }
  render(e, t) {
    if (!InteractionCpp.shouldRenderAddButton()) return;
    let i = InteractionCpp.findNodeForAddButton();
    let l = getSingletonSceneGraph().get(i);
    if (l) {
      let i = l.absoluteBoundingBox;
      let o = new Vector2D(i.x + i.w / 2, i.y + i.h);
      let c = Vector2D.fromVectorD(e.canvasSpaceToViewportSpace(o));
      c = c.plus(f);
      let u = unpackToNormalizedRgb(AppStateTsApi.getCanvasButton());
      this.addButtonUiState.isHovered ? t.fillTextWithBox(c, getI18nString("sites.fullscreen.add-section"), g, u, HorizontalAlignment.CENTER, VerticalAlignment.CENTER, 0, TextBoxType.TEXT, new Vector2D(0, 0), FontWeight.MEDIUM, 2) : function (e, t, i, n = 0) {
        let a = t.canvasSpaceToViewportSpace(e);
        a.x += n;
        i.fillCircle(a, 4, AppStateTsApi.getFSNodeHandle());
      }(e.viewportSpaceToCanvasSpace(c), e, t, 0);
      let p = new Rectangle(c.minus(new Vector2D(40, 10)), h);
      this.addButtonUiState.bounds = p;
    }
  }
  handleMouseUp(e) {}
  handleMouseLeave(e) {}
  handleMouseDrag(e) {}
  handleBeforeFrame() {}
  handleContextMenuOpen(e) {}
  renderUnderEditModeUI(e, t) {}
  reset() {}
  _isMouseOverAddButton(e) {
    let t = e.canvasSpaceMouse();
    let i = e.viewport().canvasSpaceToViewportSpace(t);
    return !!this.addButtonUiState.bounds.containsPointIncludingBoundary(Vector2D.fromVectorD(i));
  }
}
export const Y = $$A0;