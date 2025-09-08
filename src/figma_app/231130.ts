import { jsx, jsxs } from "react/jsx-runtime";
import { useSelector } from "../vendor/514228";
import { trackEventAnalytics } from "../905/449184";
import { Pt } from "../figma_app/806412";
import { k } from "../905/582200";
import { renderI18nText } from "../905/303541";
import { fullscreenValue } from "../figma_app/455680";
import { ue } from "../figma_app/139805";
import { Q } from "../905/346809";
import { z } from "../905/454433";
import { Zk, fI } from "../figma_app/626177";
import { _7 } from "../figma_app/150804";
export function $$m1(e) {
  return 1 >= useSelector(e => _7(e)) ? null : jsx(k, {
    name: "create_state_group_panel",
    children: jsxs(Zk, {
      children: [jsx(fI, {
        children: jsx(Q, {
          children: renderI18nText("design_systems.states_panel.components")
        })
      }), jsx($$g0, {
        ...e
      })]
    })
  });
}
export function $$g0(e) {
  let t = useSelector(e => _7(e));
  let r = ue();
  let o = e => {
    trackEventAnalytics("Creating Variant Component", {
      type: "Merge",
      numVariants: e
    });
    fullscreenValue.triggerActionInUserEditScope(r ? "create-state-group-row" : "create-state-group");
  };
  return jsx(z, {
    recordingKey: Pt(e, "mergeButton"),
    onClick: () => o(t),
    children: renderI18nText("design_systems.states_panel.combine_as_variants")
  }, "merge-button");
}
export const K = $$g0;
export const j = $$m1;