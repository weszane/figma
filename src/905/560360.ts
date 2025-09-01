import { R0 } from "../figma_app/273493";
import { qmM, Ez5, GP2, zbP, zd5, PVe } from "../figma_app/763686";
import { r as _$$r } from "../905/249071";
import { M } from "../905/512402";
import { UN } from "../905/700578";
import { zl } from "../figma_app/27355";
import { t as _$$t } from "../905/303541";
import { j } from "../905/881708";
import { aK, t6 } from "../figma_app/647246";
import { Nl } from "../figma_app/115923";
import { $e } from "../905/554703";
let h = new M(80, 20);
let g = {
  red: 1,
  green: 1,
  blue: 1,
  alpha: 1
};
let f = new M(0, 40);
class _ {
  constructor(e, t) {
    this.isHovered = !1;
    this.bounds = new _$$r();
    this.isHovered = e;
    this.bounds = t;
  }
}
export class $$A0 extends j {
  constructor(e) {
    super(e);
    this.addButtonUiState = new _(!1, new _$$r());
  }
  handleMouseMove(e) {
    this._isMouseOverAddButton(e) ? this.addButtonUiState.isHovered = !0 : this.addButtonUiState.isHovered = !1;
  }
  handleMouseDown(e) {
    this._isMouseOverAddButton(e) && (e.accept(this), zl.set(Nl, $e.INSERT), zl.set(aK, t6.Blocks));
  }
  render(e, t) {
    if (!qmM.shouldRenderAddButton()) return;
    let i = qmM.findNodeForAddButton();
    let l = UN().get(i);
    if (l) {
      let i = l.absoluteBoundingBox;
      let o = new M(i.x + i.w / 2, i.y + i.h);
      let c = M.fromVectorD(e.canvasSpaceToViewportSpace(o));
      c = c.plus(f);
      let u = R0(Ez5.getCanvasButton());
      this.addButtonUiState.isHovered ? t.fillTextWithBox(c, _$$t("sites.fullscreen.add-section"), g, u, GP2.CENTER, zbP.CENTER, 0, zd5.TEXT, new M(0, 0), PVe.MEDIUM, 2) : function (e, t, i, n = 0) {
        let a = t.canvasSpaceToViewportSpace(e);
        a.x += n;
        i.fillCircle(a, 4, Ez5.getFSNodeHandle());
      }(e.viewportSpaceToCanvasSpace(c), e, t, 0);
      let p = new _$$r(c.minus(new M(40, 10)), h);
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
    return !!this.addButtonUiState.bounds.containsPointIncludingBoundary(M.fromVectorD(i));
  }
}
export const Y = $$A0;