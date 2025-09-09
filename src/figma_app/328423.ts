import { jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { a as _$$a } from "../905/558168";
import { $ } from "../905/945083";
import { w } from "../905/879280";
import { t } from "../905/54003";
import { selectWithShallowEqual } from "../905/103090";
import { getI18nString } from "../905/303541";
import { fullscreenValue } from "../figma_app/455680";
import { isValidValue } from "../905/216495";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { x, l as _$$l } from "../905/457662";
var $$m1 = (e => (e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", e[e.TOP_RIGHT = 2] = "TOP_RIGHT", e[e.BOTTOM_RIGHT = 3] = "BOTTOM_RIGHT", e))($$m1 || {});
let g = {
  0: {
    icon: jsx(_$$a, {}),
    variableField: "RECTANGLE_TOP_LEFT_CORNER_RADIUS",
    getTooltip: () => getI18nString("fullscreen.properties_panel.transform_panel.top_left_corner_radius")
  },
  2: {
    icon: jsx($, {}),
    variableField: "RECTANGLE_TOP_RIGHT_CORNER_RADIUS",
    getTooltip: () => getI18nString("fullscreen.properties_panel.transform_panel.top_right_corner_radius")
  },
  1: {
    icon: jsx(w, {}),
    variableField: "RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS",
    getTooltip: () => getI18nString("fullscreen.properties_panel.transform_panel.bottom_left_corner_radius")
  },
  3: {
    icon: jsx(t, {}),
    variableField: "RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS",
    getTooltip: () => getI18nString("fullscreen.properties_panel.transform_panel.bottom_right_corner_radius")
  }
};
export function $$f10(e) {
  return g[e].icon;
}
export function $$E7(e) {
  return g[e].getTooltip();
}
export function $$y4(e) {
  return g[e].variableField;
}
let b = e => e ?? 0;
export function $$T9(e, t = b) {
  let r = I(e);
  return {
    topLeft: t(r.topLeft),
    topRight: t(r.topRight),
    bottomRight: t(r.bottomRight),
    bottomLeft: t(r.bottomLeft)
  };
}
function I(e) {
  return e.rectangleCornerRadiiIndependent ? {
    topLeft: e.rectangleTopLeftCornerRadius,
    topRight: e.rectangleTopRightCornerRadius,
    bottomRight: e.rectangleBottomRightCornerRadius,
    bottomLeft: e.rectangleBottomLeftCornerRadius
  } : {
    topLeft: e.cornerRadius ?? e.rectangleTopLeftCornerRadius,
    topRight: e.cornerRadius ?? e.rectangleTopRightCornerRadius,
    bottomRight: e.cornerRadius ?? e.rectangleBottomRightCornerRadius,
    bottomLeft: e.cornerRadius ?? e.rectangleBottomLeftCornerRadius
  };
}
export function $$S0() {
  let e = selectWithShallowEqual(e => {
    let t = e.mirror.selectionProperties;
    return {
      angle: t.angle,
      hasReflection: t.hasReflection,
      ...I(t)
    };
  });
  return useCallback(t => {
    let r = [{
      corner: 0,
      value: e.topLeft,
      key: "rectangleTopLeftCornerRadius"
    }, {
      corner: 1,
      value: e.bottomLeft,
      key: "rectangleBottomLeftCornerRadius"
    }, {
      corner: 3,
      value: e.bottomRight,
      key: "rectangleBottomRightCornerRadius"
    }, {
      corner: 2,
      value: e.topRight,
      key: "rectangleTopRightCornerRadius"
    }];
    let n = r.findIndex(({
      corner: e
    }) => e === t);
    e.hasReflection && (n += 2);
    null != e.angle && isValidValue(e.angle) && (Math.abs(e.angle) >= 135 ? n += 2 : e.angle >= 45 ? n += 3 : e.angle <= -45 && (n += 1));
    let i = r[n % 4];
    return {
      value: i.value,
      setter: (e, t = yesNoTrackingEnum.YES) => {
        fullscreenValue.updateSelectionProperties({
          [i.key]: e
        }, {
          shouldCommit: t
        });
      }
    };
  }, [e]);
}
let v = {
  isDisaggregated: "rectangleCornerRadiiIndependent",
  disaggregatedValues: ["rectangleTopRightCornerRadius", "rectangleBottomRightCornerRadius", "rectangleBottomLeftCornerRadius", "rectangleTopLeftCornerRadius"],
  aggregatedValue: "cornerRadius"
};
let $$A2 = new x({
  ...v
});
let $$x5 = new _$$l({
  ...v,
  key: "rectangleTopLeftCornerRadius"
});
let $$N3 = new _$$l({
  ...v,
  key: "rectangleTopRightCornerRadius"
});
let $$C6 = new _$$l({
  ...v,
  key: "rectangleBottomLeftCornerRadius"
});
let $$w8 = new _$$l({
  ...v,
  key: "rectangleBottomRightCornerRadius"
});
export const GI = $$S0;
export const OK = $$m1;
export const S2 = $$A2;
export const c5 = $$N3;
export const cv = $$y4;
export const dB = $$x5;
export const fN = $$C6;
export const gP = $$E7;
export const ih = $$w8;
export const ut = $$T9;
export const ve = $$f10;