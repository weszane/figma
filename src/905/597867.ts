import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { dI } from "../905/805904";
import s from "classnames";
import { t as _$$t } from "../905/303541";
import { TI } from "../905/713722";
import { LN } from "../figma_app/975811";
import { XE, Z3 } from "../figma_app/385874";
import { u as _$$u } from "../figma_app/852050";
import { J } from "../905/225412";
import { C } from "../905/549861";
var o = s;
let g = e => {
  switch (e.type) {
    case "SOLID":
      return TI.format(e.color || {
        r: 1,
        g: 1,
        b: 1,
        a: 1
      });
    case "GRADIENT_LINEAR":
    case "GRADIENT_RADIAL":
    case "GRADIENT_ANGULAR":
    case "GRADIENT_DIAMOND":
      return _$$t("fullscreen.properties_panel.gradient");
    case "IMAGE":
      return _$$t("fullscreen.properties_panel.image");
    case "VIDEO":
      return _$$t("fullscreen.properties_panel.video");
    case "PATTERN":
      return _$$t("fullscreen.properties_panel.pattern");
    case "NOISE":
      return _$$t("fullscreen.properties_panel.noise");
  }
  return "Paint";
};
let f = new LN({
  decimals: 2
});
let _ = e => {
  let t = [];
  switch (void 0 !== e.opacity && t.push(f.format(e.opacity)), e.type) {
    case "SOLID":
      t.push(_$$t("fullscreen.properties_panel.solid"));
      break;
    case "GRADIENT_LINEAR":
      t.push(_$$t("fullscreen.properties_panel.linear"));
      break;
    case "GRADIENT_RADIAL":
      t.push(_$$t("fullscreen.properties_panel.radial"));
      break;
    case "GRADIENT_ANGULAR":
      t.push(_$$t("fullscreen.properties_panel.angular"));
      break;
    case "GRADIENT_DIAMOND":
      t.push(_$$t("fullscreen.properties_panel.diamond"));
      break;
    case "IMAGE":
    case "VIDEO":
      t.push(_$$t("fullscreen.properties_panel.fill.fill"));
      break;
    case "PATTERN":
      let i = XE(e);
      if (!i) break;
      switch (i.patternTileType) {
        case "RECTANGULAR":
          t.push(_$$t("properties_panel.pattern.rectangular"));
          break;
        case "HORIZONTAL_HEXAGONAL":
          t.push(_$$t("properties_panel.pattern.horizontal_hexagonal"));
          break;
        case "VERTICAL_HEXAGONAL":
          t.push(_$$t("properties_panel.pattern.vertical_hexagonal"));
      }
      break;
    case "NOISE":
      let n = Z3(e);
      if (!n) break;
      switch (n.noiseType) {
        case "MULTITONE":
          t.push(_$$t("properties_panel.noise.noise_type.multitone"));
          break;
        case "MONOTONE":
          t.push(_$$t("properties_panel.noise.noise_type.monotone"));
          break;
        case "DUOTONE":
          t.push(_$$t("properties_panel.noise.noise_type.duotone"));
      }
  }
  return t;
};
let $$A0 = forwardRef((e, t) => {
  let i = g(e.paint);
  let r = _(e.paint);
  let s = dI(e.variableId || {});
  "(invalid variable id)" === s && (s = void 0);
  let l = _$$u(s);
  let d = l?.name ?? "";
  d && (i = d, r = []);
  return jsx(C, {
    ...e,
    ref: t,
    propertyName: i,
    propertyValues: r,
    visible: e.paint.visible,
    previewElement: jsx(J, {
      onClick: e.onPreviewClick,
      paint: e.paint,
      className: o()("ui3_illustration_paint_row--largeChit--cO5Rn", "ui3_illustration_paint_row--alwaysOutlinedChit--oqcjo", {
        "ui3_illustration_paint_row--patternChit--Q1sYN": "PATTERN" === e.paint.type
      })
    }),
    variableBound: !!d
  });
});
export const a = $$A0;