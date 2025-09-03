import { CNR, Ez5 } from "../figma_app/763686";
import { M } from "../905/512402";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { zl } from "../figma_app/27355";
import { C } from "../905/407781";
import { zw } from "../905/877407";
import { ft } from "../905/430950";
import { v2 } from "../figma_app/164260";
import { Sz } from "../figma_app/784857";
import { Ei } from "../figma_app/60023";
export class $$h0 extends C {
  getDefaultChildSize() {
    return CNR ? new M(CNR.slideWidth(), CNR.slideHeight()) : new M(1920, 1080);
  }
  addBlankChildAtCoord(e, t, i, n, r) {
    return Sz(e, t, i, n);
  }
  shouldHideUI() {
    return zl.get(v2) || !!zl.get(Ei);
  }
  shouldRenderEmptyCanvasPlaceholder() {
    return !getSingletonSceneGraph().getRoot().slideThemeId.endsWith("-1:-1");
  }
  renderEmptyCanvasPlaceholder(e, t) {
    if (!(Ez5 && CNR)) return;
    let i = Ez5.canvasGrid().rectForCoord({
      row: 0,
      col: 0
    }, this.getDefaultChildSize(), !0);
    if (zw(i, e, t, this._getDashedPlaceholderBgColor(), this._getDashedPlaceholderOutlineColor()), "ADD_FIRST_CHILD_HOVERED" === this._state.mouse) {
      let r = {
        x: i.origin.x + i.size.x / 2,
        y: i.origin.y + i.size.y / 2
      };
      let a = e.canvasSpaceToViewportSpace(r);
      let s = CNR.slideHeight() * e.canvasScale() / 2.5;
      ft(a, t, s, 2, this.getActiveOutlineColor());
    }
  }
  addRowDotVerticalOffset() {
    return getFeatureFlags().slide_chapters ? -(Ez5?.canvasGrid().gridRowSpacing() || 600) / 4 : 0;
  }
  getActiveBgColor() {
    return Ez5?.getBgFSDesignTertiary() ?? 0xffffff;
  }
  getActiveOutlineColor() {
    return Ez5?.getCanvasButton() ?? 0xcccccc;
  }
}
export const w = $$h0;