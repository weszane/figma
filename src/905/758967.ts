import { Ez5 } from "../figma_app/763686";
import { t } from "../905/303541";
import { x4 } from "../905/657224";
import { Y5 } from "../figma_app/455680";
import { Mo } from "../905/414069";
let s = "outlineModeTriggered";
function o() {
  return x4 && x4.getItem(s) || null;
}
export function $$c0() {
  return Ez5.canvasViewState();
}
let u = [{
  getObservable: () => $$c0().showOutlines,
  getMessage: e => e ? !function () {
    if (!x4) return !0;
    let e = o();
    if (!function () {
      if (!x4) return;
      let e = o();
      x4.setItem(s, JSON.stringify({
        count: e ? JSON.parse(e).count + 1 : 1,
        lastTriggeredTimestamp: Date.now()
      }));
    }(), !e) return !0;
    let t = JSON.parse(e);
    let i = new Date(t.lastTriggeredTimestamp);
    return (new Date().getTime() - i.getTime()) / 864e5 > 30 ? (x4.removeItem(s), !0) : !(t.count >= 5);
  }() ? {
    message: t("visual_bell.show_outlines_visible")
  } : {
    message: t("visual_bell.show_outlines_visible"),
    button: {
      text: t("visual_bell.cancel"),
      action: e => {
        e.stopPropagation();
        Y5.triggerAction("toggle-outlines");
      }
    }
  } : {
    message: t("visual_bell.show_outlines_hidden")
  }
}, {
  getObservable: () => $$c0().showOutlineHiddenLayers,
  getMessage: e => ({
    message: e ? t("visual_bell.outlines_show_hidden_layers") : t("visual_bell.outlines_hide_hidden_layers")
  })
}, {
  getObservable: () => $$c0().showOutlineObjectBounds,
  getMessage: e => ({
    message: e ? t("visual_bell.outlines_show_object_bounds") : t("visual_bell.outlines_hide_object_bounds")
  })
}, {
  getObservable: () => $$c0().showFrameGridsViewOnly,
  getMessage: e => ({
    message: e ? t("visual_bell.show_frame_guides_visible") : t("visual_bell.show_frame_guides_hidden")
  })
}];
export function $$p1() {
  Mo(u);
}
export const d = $$c0;
export const X = $$p1;