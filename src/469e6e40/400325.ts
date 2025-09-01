import { jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { wA } from "../vendor/514228";
import { ServiceCategories as _$$e } from "../905/165054";
import { g as _$$g } from "../figma_app/638694";
import { r as _$$r } from "../905/398386";
import { sf } from "../905/929976";
import { FOrganizationLevelType } from "../figma_app/191312";
import { px, j_, S2, H3 } from "../figma_app/465071";
import { o0 } from "../905/844131";
import { a as _$$a } from "../469e6e40/51498";
export function $$p0() {
  let e = wA();
  let t = px();
  let a = j_(t).unwrapOr(!1);
  let p = S2().unwrapOr(null);
  let g = H3(p);
  let h = p?.name;
  let x = p?.key.type === FOrganizationLevelType.ORG;
  return (useEffect(() => {
    a && x || e(sf(o0));
  }, [e, a, x]), g && h) ? jsx(_$$r, {
    containerClass: "org_idp_management_page_view--fileBrowserContentContainer--8172L",
    scrollableContainerClass: "org_idp_management_page_view--fileBrowserScrollableContainer--RnNUM",
    content: jsx(_$$a, {}),
    toolbar: jsx(_$$g, {}),
    errorBoundaryConfig: {
      figmaTeam: _$$e.IAM,
      boundaryKeySuffix: "OrgIdpManagementPageView"
    }
  }) : null;
}
export const OrgIdpManagementPageView = $$p0;