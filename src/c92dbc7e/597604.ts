import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { getFeatureFlags } from "../905/601108";
import { $I9, Q90, VZy, Iws, XG7, ZDV, FUS, H18, ZyC, syG } from "../vendor/166087";
import { W6 } from "../vendor/834567";
import i from "classnames";
var t = i;
let u = [$I9, Q90, VZy, Iws, XG7, ZDV, FUS, H18, ZyC];
syG.registerModules(u);
export let $$b0 = forwardRef((e, a) => {
  let {
    className,
    themeCssLayer,
    ..._
  } = e;
  let i = t()("ag_grid--FigmaAgGrid--2cyIS", className);
  return jsx(W6, {
    ref: a,
    ..._,
    themeCssLayer: getFeatureFlags().dakota_use_layers_ag_grid ? themeCssLayer ?? "legacy_postcss" : void 0,
    className: i
  });
});
export const _$$default = $$b0;