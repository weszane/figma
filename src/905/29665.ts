import { jsx } from "react/jsx-runtime";
import { J } from "../905/270045";
import { S } from "../905/274480";
import { getFeatureFlags } from "../905/601108";
import { fp } from "../figma_app/27355";
import { tx } from "../905/303541";
import { Y } from "../905/830372";
import { o as _$$o } from "../figma_app/633080";
import { pz } from "../figma_app/825489";
export function $$p1() {
  return getFeatureFlags().cmty_lib_admin_publish ? jsx(Y, {
    horizontalAlignItems: "start",
    backgroundColor: "secondary",
    padding: {
      vertical: 4,
      horizontal: 8
    },
    strokeColor: "default",
    strokeWidth: {
      bottom: 1
    },
    children: jsx($$m0, {
      label: jsx(J, {
        children: tx("design_systems.internal_community_library_mode_label")
      })
    })
  }) : null;
}
export function $$m0({
  label: e
}) {
  let [t, i] = fp(pz);
  return getFeatureFlags().cmty_lib_admin_publish ? jsx(S, {
    label: e,
    checked: t === _$$o.HUBFILE,
    onChange: e => {
      i(e ? _$$o.HUBFILE : _$$o.LIBRARY);
    }
  }) : null;
}
export const U = $$m0;
export const l = $$p1;