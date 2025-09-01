import { jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { wA } from "../vendor/514228";
import { getFeatureFlags } from "../905/601108";
import { tx, t as _$$t } from "../905/303541";
import { A } from "../5132/237216";
import { Vm } from "../figma_app/427318";
import { aI } from "../figma_app/558929";
import { iZ } from "../905/372672";
import { px, S2 } from "../figma_app/465071";
import { uF } from "../figma_app/300692";
import { nT } from "../figma_app/53721";
import { C as _$$C } from "../figma_app/198698";
import { om, x1 } from "../figma_app/465413";
import { o as _$$o } from "../5430/992445";
import { A as _$$A } from "../5724/965092";
export function $$f0(e) {
  let t = iZ();
  let i = wA();
  let [f, b] = useState(!0);
  let v = e.resource;
  let j = uF(v);
  let w = px().unwrapOr(null);
  let E = S2().unwrapOr(null);
  let L = _$$o(w, E, j, nT.Whiteboard);
  let N = A(e.resource, !0);
  if (!f || !t || !getFeatureFlags().community_hub_admin_reviewer) return jsx(Fragment, {});
  function S(t) {
    return "hub_file" === Vm(e.resource);
  }
  let C = S(e.resource) ? tx("community.duplicate.duplicate") : tx("community.detail_view.try_it_out");
  let k = {
    id: om.communityResourceInReviewBanner,
    bannerType: x1.INFO,
    icon: _$$A,
    mainText: _$$t("community.resource.admin_bypass_payment_banner.viewing_as_community_reviewer_admin"),
    description: tx("community.resource.admin_bypass_payment_banner.you_are_viewing_this_page_as_an_admin_reviewer"),
    button: {
      buttonText: C,
      onClick: () => {
        S(e.resource) ? N() : i(aI({
          resource: v,
          fullscreenEditorType: L,
          isPlaygroundFile: !!(j.playground_file_version_id || L === nT.DevHandoff)
        }));
      }
    },
    dismissible: !0,
    positionStatic: !0
  };
  return jsx(_$$C, {
    content: k,
    editorType: nT.Design,
    onDismiss: () => b(!1)
  });
}
export const H = $$f0;