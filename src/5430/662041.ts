import { jsx } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import { getI18nString } from "../905/303541";
import { b } from "../5430/872214";
import { W, B } from "../905/841666";
import { w } from "../5430/495667";
import { getResourceType, hasContent } from "../figma_app/427318";
import { isOrgOrTeamExport } from "../figma_app/740025";
import { KindEnum } from "../905/129884";
export function $$m0(e) {
  let {
    resource,
    viewContext,
    removeButtonBorder
  } = e;
  let _ = useSelector(e => e.authedActiveCommunityProfile);
  let p = isOrgOrTeamExport(_);
  let h = W(resource.id, getResourceType(resource), !hasContent(resource));
  let x = B(resource.id, hasContent(resource));
  let f = hasContent(resource) ? !!x.data?.[0] : !!h.data?.[0];
  let y = hasContent(resource) ? x.data?.[1] : h.data?.[1];
  let g = w(resource, f, y || null, viewContext);
  return p ? jsx("div", {
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": getI18nString("community.likes.to_like_switch_to_your_personal_profile"),
    "data-tooltip-show-immediately": !0,
    children: jsx(b, {
      isResourceLiked: !1,
      disabled: !0
    })
  }) : jsx(b, {
    onClick: g(),
    isResourceLiked: f,
    removeButtonBorder
  });
}
export const Q = $$m0;