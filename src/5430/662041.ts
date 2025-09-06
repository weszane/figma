import { jsx } from "react/jsx-runtime";
import { useSelector } from "../vendor/514228";
import { getI18nString } from "../905/303541";
import { b } from "../5430/872214";
import { W, B } from "../905/841666";
import { w } from "../5430/495667";
import { Vm, XW } from "../figma_app/427318";
import { cs } from "../figma_app/740025";
import { Ib } from "../905/129884";
export function $$m0(e) {
  let {
    resource,
    viewContext,
    removeButtonBorder
  } = e;
  let _ = useSelector(e => e.authedActiveCommunityProfile);
  let p = cs(_);
  let h = W(resource.id, Vm(resource), !XW(resource));
  let x = B(resource.id, XW(resource));
  let f = XW(resource) ? !!x.data?.[0] : !!h.data?.[0];
  let y = XW(resource) ? x.data?.[1] : h.data?.[1];
  let g = w(resource, f, y || null, viewContext);
  return p ? jsx("div", {
    "data-tooltip-type": Ib.TEXT,
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