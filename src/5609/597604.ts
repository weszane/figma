import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { getFeatureFlags } from "../905/601108";
import { $I9, Q90, VZy, Iws, XG7, ZDV, FUS, H18, ZyC, syG } from "../vendor/166087";
import { W6 } from "../vendor/834567";
import d from "classnames";
var o = d;
let c = [$I9, Q90, VZy, Iws, XG7, ZDV, FUS, H18, ZyC];
syG.registerModules(c);
export let $$i0 = forwardRef((e, a) => {
  let {
    className,
    themeCssLayer,
    ...u
  } = e;
  let d = o()("ag_grid--FigmaAgGrid--2cyIS", className);
  return jsx(W6, {
    ref: a,
    ...u,
    themeCssLayer: getFeatureFlags().dakota_use_layers_ag_grid ? themeCssLayer ?? "legacy_postcss" : void 0,
    className: d
  });
});
export const _$$default = $$i0;