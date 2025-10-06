import { jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getFeatureFlags } from "../905/601108";
import { renderI18nText, getI18nString } from "../905/303541";
import { useDuplicateTemplateHandler } from "../5132/237216";
import { getResourceType } from "../figma_app/427318";
import { aI } from "../figma_app/558929";
import { selectCurrentUser } from "../905/372672";
import { useTeamPlanUser, useTeamPlanFeatures } from "../figma_app/465071";
import { getPluginVersion } from "../figma_app/300692";
import { FEditorType } from "../figma_app/53721";
import { C as _$$C } from "../figma_app/198698";
import { om, x1 } from "../figma_app/465413";
import { o as _$$o } from "../5430/992445";
import { A as _$$A } from "../5724/965092";
export function $$f0(e) {
  let t = selectCurrentUser();
  let i = useDispatch();
  let [f, b] = useState(!0);
  let v = e.resource;
  let j = getPluginVersion(v);
  let w = useTeamPlanUser().unwrapOr(null);
  let E = useTeamPlanFeatures().unwrapOr(null);
  let L = _$$o(w, E, j, FEditorType.Whiteboard);
  let N = useDuplicateTemplateHandler(e.resource, !0);
  if (!f || !t || !getFeatureFlags().community_hub_admin_reviewer) return jsx(Fragment, {});
  function S(t) {
    return "hub_file" === getResourceType(e.resource);
  }
  let C = S(e.resource) ? renderI18nText("community.duplicate.duplicate") : renderI18nText("community.detail_view.try_it_out");
  let k = {
    id: om.communityResourceInReviewBanner,
    bannerType: x1.INFO,
    icon: _$$A,
    mainText: getI18nString("community.resource.admin_bypass_payment_banner.viewing_as_community_reviewer_admin"),
    description: renderI18nText("community.resource.admin_bypass_payment_banner.you_are_viewing_this_page_as_an_admin_reviewer"),
    button: {
      buttonText: C,
      onClick: () => {
        S(e.resource) ? N() : i(aI({
          resource: v,
          fullscreenEditorType: L,
          isPlaygroundFile: !!(j.playground_file_version_id || L === FEditorType.DevHandoff)
        }));
      }
    },
    dismissible: !0,
    positionStatic: !0
  };
  return jsx(_$$C, {
    content: k,
    editorType: FEditorType.Design,
    onDismiss: () => b(!1)
  });
}
export const H = $$f0;