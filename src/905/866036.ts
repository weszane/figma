import { SlideConstantsCppBindings, AppStateTsApi } from "../figma_app/763686";
import { Vector2D } from "../905/512402";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager } from "../figma_app/27355";
import { C } from "../905/407781";
import { zw } from "../905/877407";
import { ft } from "../905/430950";
import { v2 } from "../figma_app/164260";
import { Sz } from "../figma_app/784857";
import { Ei } from "../figma_app/60023";
export class $$h0 extends C {
  getDefaultChildSize() {
    return SlideConstantsCppBindings ? new Vector2D(SlideConstantsCppBindings.slideWidth(), SlideConstantsCppBindings.slideHeight()) : new Vector2D(1920, 1080);
  }
  addBlankChildAtCoord(e, t, i, n, r) {
    return Sz(e, t, i, n);
  }
  shouldHideUI() {
    return atomStoreManager.get(v2) || !!atomStoreManager.get(Ei);
  }
  shouldRenderEmptyCanvasPlaceholder() {
    return !getSingletonSceneGraph().getRoot().slideThemeId.endsWith("-1:-1");
  }
  renderEmptyCanvasPlaceholder(e, t) {
    if (!(AppStateTsApi && SlideConstantsCppBindings)) return;
    let i = AppStateTsApi.canvasGrid().rectForCoord({
      row: 0,
      col: 0
    }, this.getDefaultChildSize(), !0);
    if (zw(i, e, t, this._getDashedPlaceholderBgColor(), this._getDashedPlaceholderOutlineColor()), "ADD_FIRST_CHILD_HOVERED" === this._state.mouse) {
      let r = {
        x: i.origin.x + i.size.x / 2,
        y: i.origin.y + i.size.y / 2
      };
      let a = e.canvasSpaceToViewportSpace(r);
      let s = SlideConstantsCppBindings.slideHeight() * e.canvasScale() / 2.5;
      ft(a, t, s, 2, this.getActiveOutlineColor());
    }
  }
  addRowDotVerticalOffset() {
    return getFeatureFlags().slide_chapters ? -(AppStateTsApi?.canvasGrid().gridRowSpacing() || 600) / 4 : 0;
  }
  getActiveBgColor() {
    return AppStateTsApi?.getBgFSDesignTertiary() ?? 0xffffff;
  }
  getActiveOutlineColor() {
    return AppStateTsApi?.getCanvasButton() ?? 0xcccccc;
  }
}
export const w = $$h0;