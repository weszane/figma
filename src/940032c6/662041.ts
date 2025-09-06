import { jsx } from "react/jsx-runtime";
import { useSelector } from "../vendor/514228";
import { getI18nString } from "../905/303541";
import { b as _$$b } from "../5430/872214";
import { W, B } from "../905/841666";
import { w } from "../5430/495667";
import { Vm, XW } from "../figma_app/427318";
import { cs } from "../figma_app/740025";
import { Ib } from "../905/129884";
export function $$p0(e) {
  let {
    resource,
    viewContext,
    removeButtonBorder
  } = e;
  let x = useSelector(e => e.authedActiveCommunityProfile);
  let m = cs(x);
  let h = W(resource.id, Vm(resource), !XW(resource));
  let g = B(resource.id, XW(resource));
  let f = XW(resource) ? !!g.data?.[0] : !!h.data?.[0];
  let _ = XW(resource) ? g.data?.[1] : h.data?.[1];
  let b = w(resource, f, _ || null, viewContext);
  return m ? jsx("div", {
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": getI18nString("community.likes.to_like_switch_to_your_personal_profile"),
    "data-tooltip-show-immediately": !0,
    children: jsx(_$$b, {
      isResourceLiked: !1,
      disabled: !0
    })
  }) : jsx(_$$b, {
    onClick: b(),
    isResourceLiked: f,
    removeButtonBorder
  });
}
export const Q = $$p0;