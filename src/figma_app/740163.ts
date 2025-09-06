import { Ez5, NVY } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { getI18nString } from "../905/303541";
import { kG } from "../figma_app/327588";
import { _q, bA } from "../905/668764";
import { m0 } from "../figma_app/976749";
import { R } from "../figma_app/941983";
import { ut, J2 } from "../figma_app/84367";
import { d as _$$d } from "../905/758967";
import { jH, Gk } from "../905/950959";
import { Mo } from "../905/414069";
export function $$h5() {
  return Ez5.editorPreferences();
}
export function $$m1() {
  return ut(Ez5?.editorPreferences().hideHelpWidget, !1);
}
export function $$g3() {
  let e = m0();
  let t = J2($$h5().colorFormat);
  return t === NVY.CSS && e || t === NVY.UIColor && !e ? NVY.RGB : t;
}
export function $$f8() {
  return ut(Ez5?.editorPreferences()?.sidebarSplitPosition, R.sidebarSplitPosition);
}
export function $$E0() {
  return kG() ? 48 : 0;
}
export function $$y6() {
  return ut(Ez5?.editorPreferences()?.devHandoffInspectSplitPosition, 320);
}
export function $$b10() {
  return ut(Ez5?.editorPreferences()?.propertiesPanelSplitPosition, R.propertiesPanelSplitPosition);
}
export function $$T4() {
  return ut(Ez5?.editorPreferences().bigNudgeAmount, _q);
}
export function $$I2() {
  return ut(Ez5?.editorPreferences().smallNudgeAmount, bA);
}
export function $$S11(e, t) {
  let r = $$I2();
  let n = $$T4();
  return {
    smallNudgeAmount: e ?? r,
    bigNudgeAmount: t ?? n
  };
}
export function $$v9() {
  return ut(Ez5?.editorPreferences().renderRulers, !1);
}
let A = [{
  getObservable: () => $$h5().activeCanvasPixelPreview,
  getMessage: e => ({
    message: e ? getI18nString("visual_bell.pixel_preview_enabled", {
      scaling: _$$d().activeCanvasRetinaMode.getCopy() ? "2x" : "1x"
    }) : getI18nString("visual_bell.pixel_preview_disabled")
  })
}, {
  getObservable: () => $$h5().renderGrid,
  getMessage: e => ({
    message: e ? getI18nString("visual_bell.render_grid_visible") : getI18nString("visual_bell.render_grid_hidden")
  })
}, {
  getObservable: () => $$h5().snapToPixelGrid,
  getMessage: e => ({
    message: e ? getI18nString("visual_bell.snap_to_pixel_grid_enabled") : getI18nString("visual_bell.snap_to_pixel_grid_disabled")
  })
}, {
  getObservable: () => $$h5().showMasks,
  getMessage: e => ({
    message: e ? getI18nString("visual_bell.show_masks_visible") : getI18nString("visual_bell.show_masks_hidden")
  })
}, {
  getObservable: () => getFeatureFlags().figjam_snap_to_dot_grid_reset ? $$h5().snapToDotGridStagingReset : $$h5().snapToDotGrid,
  getMessage: e => ({
    message: e ? getI18nString("visual_bell.snap_to_dot_grid_enabled") : getI18nString("visual_bell.snap_to_dot_grid_disabled")
  })
}, {
  getObservable: () => $$h5().snapToGeometry,
  getMessage: e => ({
    message: e ? getI18nString("visual_bell.snap_to_geometry_enabled") : getI18nString("visual_bell.snap_to_geometry_disabled")
  })
}, {
  getObservable: () => $$h5().snapToObjects,
  getMessage: e => ({
    message: e ? getI18nString("visual_bell.snap_to_objects_enabled") : getI18nString("visual_bell.snap_to_objects_disabled")
  })
}, {
  getObservable: () => $$h5().showFrameGrids,
  getMessage: e => jH() ? (Gk(), {
    message: getI18nString("visual_bell.show_frame_guides_visible"),
    button: {
      text: getI18nString("visual_bell.show_frame_grids_hide_button"),
      action: e => {
        e.stopPropagation();
        Ez5.editorPreferences().showFrameGrids.set(!1);
      }
    }
  }) : {
    message: e ? getI18nString("visual_bell.show_frame_guides_visible") : getI18nString("visual_bell.show_frame_guides_hidden")
  }
}];
export function $$x7() {
  Mo(A);
}
export const Bv = $$E0;
export const D = $$m1;
export const EU = $$I2;
export const Ku = $$g3;
export const RU = $$T4;
export const UK = $$h5;
export const UX = $$y6;
export const W_ = $$x7;
export const dP = $$f8;
export const lK = $$v9;
export const qw = $$b10;
export const sT = $$S11;