import { Ez5 } from "../figma_app/763686";
import { getI18nString } from "../905/303541";
import { localStorageRef } from "../905/657224";
import { Y5 } from "../figma_app/455680";
import { Mo } from "../905/414069";
let s = "outlineModeTriggered";
function o() {
  return localStorageRef && localStorageRef.getItem(s) || null;
}
export function $$c0() {
  return Ez5.canvasViewState();
}
let u = [{
  getObservable: () => $$c0().showOutlines,
  getMessage: e => e ? !function () {
    if (!localStorageRef) return !0;
    let e = o();
    if (!function () {
      if (!localStorageRef) return;
      let e = o();
      localStorageRef.setItem(s, JSON.stringify({
        count: e ? JSON.parse(e).count + 1 : 1,
        lastTriggeredTimestamp: Date.now()
      }));
    }(), !e) return !0;
    let t = JSON.parse(e);
    let i = new Date(t.lastTriggeredTimestamp);
    return (new Date().getTime() - i.getTime()) / 864e5 > 30 ? (localStorageRef.removeItem(s), !0) : !(t.count >= 5);
  }() ? {
    message: getI18nString("visual_bell.show_outlines_visible")
  } : {
    message: getI18nString("visual_bell.show_outlines_visible"),
    button: {
      text: getI18nString("visual_bell.cancel"),
      action: e => {
        e.stopPropagation();
        Y5.triggerAction("toggle-outlines");
      }
    }
  } : {
    message: getI18nString("visual_bell.show_outlines_hidden")
  }
}, {
  getObservable: () => $$c0().showOutlineHiddenLayers,
  getMessage: e => ({
    message: e ? getI18nString("visual_bell.outlines_show_hidden_layers") : getI18nString("visual_bell.outlines_hide_hidden_layers")
  })
}, {
  getObservable: () => $$c0().showOutlineObjectBounds,
  getMessage: e => ({
    message: e ? getI18nString("visual_bell.outlines_show_object_bounds") : getI18nString("visual_bell.outlines_hide_object_bounds")
  })
}, {
  getObservable: () => $$c0().showFrameGridsViewOnly,
  getMessage: e => ({
    message: e ? getI18nString("visual_bell.show_frame_guides_visible") : getI18nString("visual_bell.show_frame_guides_hidden")
  })
}];
export function $$p1() {
  Mo(u);
}
export const d = $$c0;
export const X = $$p1;