import { IPu, Z64, Ez5, GP2, zbP } from "../figma_app/763686";
import { R0 } from "../figma_app/273493";
import { M } from "../905/512402";
import { fn, sH } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager } from "../figma_app/27355";
import { getI18nString } from "../905/303541";
import { BT } from "../905/618447";
import { C } from "../905/407781";
import { zw } from "../905/877407";
import { I } from "../905/120648";
import { Lk, x } from "../figma_app/639711";
import { Y5 } from "../figma_app/455680";
export class $$_0 extends C {
  getDefaultChildSize() {
    return new M(1080, 1080);
  }
  addBlankChildAtCoord(e, t, i, r, l) {
    if (!getSingletonSceneGraph()) {
      console.error("buzz grid add behavior", "No active document");
      return null;
    }
    let c = atomStoreManager.get(BT);
    let p = null;
    if ((l = l || c[e]?.[t - 1] || c[e - 1]?.[(c[e - 1]?.length || 0) - 1]) && fn(sH(l))) p = IPu?.duplicateAsBlankCooperAsset(l, e, t, i) ?? null;else {
      let r = M.toVectorD(this.getDefaultChildSize());
      p = IPu?.createBlankChildAtCoord(e, t, r, i, !0, Z64.CUSTOM) ?? null;
    }
    r && Y5.commit();
    setTimeout(() => {
      Ez5?.cooperFocusView().isFocusedNodeViewEnabled() || (Ez5?.cooperFocusView().panToSelectedNodeIfOutsideViewport(.6), atomStoreManager.set(Lk, x.TEMPLATES));
    }, 0);
    return p;
  }
  shouldHideUI() {
    return atomStoreManager.get(I);
  }
  shouldRenderEmptyCanvasPlaceholder() {
    return !atomStoreManager.get(I);
  }
  renderEmptyCanvasPlaceholder(e, t) {
    let i = Ez5?.canvasGrid();
    let a = i ? i.rectForCoord({
      row: 0,
      col: 0
    }, this.getDefaultChildSize(), !0) : {
      origin: {
        x: 0,
        y: 0
      },
      size: this.getDefaultChildSize()
    };
    let s = {
      origin: e.canvasSpaceToViewportSpace(a.origin),
      size: {
        x: a.size.x * e.canvasScale(),
        y: a.size.y * e.canvasScale()
      }
    };
    let o = {
      x: s.origin.x + s.size.x / 2,
      y: s.origin.y + s.size.y / 2
    };
    zw(a, e, t, this._getDashedPlaceholderBgColor(), this._getDashedPlaceholderOutlineColor());
    let l = 120 * e.canvasScale();
    let d = .2 > e.canvasScale();
    let u = s.origin.y + s.size.y / 2 - l / 2;
    d || (u -= 24);
    let p = {
      x: o.x - 1,
      y: u
    };
    let h = {
      x: o.x - l / 2,
      y: p.y + l / 2 - 1
    };
    if (Ez5 && (t.fillRoundedRect({
      origin: p,
      size: {
        x: 2,
        y: l
      }
    }, 3, this._getDashedPlaceholderOutlineColor()), t.fillRoundedRect({
      origin: h,
      size: {
        x: l,
        y: 2
      }
    }, 3, this._getDashedPlaceholderOutlineColor()), !d)) {
      let i = 150 * e.canvasScale();
      let a = {
        x: o.x,
        y: p.y + l + i
      };
      t.fillText(a, getI18nString("cooper.templates.canvas_placeholder_button"), Ez5 ? R0(Ez5.getTextPrimary()) : {
        red: 0,
        green: 0,
        blue: 0,
        alpha: 1
      }, GP2.CENTER, zbP.CENTER, 0);
    }
  }
  addRowDotVerticalOffset() {
    return -(Ez5?.canvasGrid().gridRowSpacing() || 600) / 4;
  }
  getActiveBgColor() {
    return Ez5?.getBgFSSelected() || 0xffffffff;
  }
  getActiveOutlineColor() {
    return Ez5?.getBorderFSSelected() || 0;
  }
  isStateGroupRowAllowed() {
    return !!getFeatureFlags().buzz_template_sets;
  }
}
export const X = $$_0;