import { jsx } from "react/jsx-runtime";
import { Label } from "../905/270045";
import { Checkbox } from "../905/274480";
import { getFeatureFlags } from "../905/601108";
import { useAtomValueAndSetter } from "../figma_app/27355";
import { renderI18nText } from "../905/303541";
import { Y } from "../905/830372";
import { LibrarySourceEnum } from "../figma_app/633080";
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
      label: jsx(Label, {
        children: renderI18nText("design_systems.internal_community_library_mode_label")
      })
    })
  }) : null;
}
export function $$m0({
  label: e
}) {
  let [t, i] = useAtomValueAndSetter(pz);
  return getFeatureFlags().cmty_lib_admin_publish ? jsx(Checkbox, {
    label: e,
    checked: t === LibrarySourceEnum.HUBFILE,
    onChange: e => {
      i(e ? LibrarySourceEnum.HUBFILE : LibrarySourceEnum.LIBRARY);
    }
  }) : null;
}
export const U = $$m0;
export const l = $$p1;