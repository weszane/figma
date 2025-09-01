import { jsx, Fragment } from "react/jsx-runtime";
import { d4 } from "../vendor/514228";
import { getFeatureFlags } from "../905/601108";
export function $$s0(e) {
  return d4(e => !!e.user?.id) && (!e.featureFlag || getFeatureFlags()[e.featureFlag]) ? jsx(Fragment, {
    children: e.children
  }) : null;
}
export const p = $$s0;