import { l as _$$l } from "../5430/795130";
import { U } from "../5430/189384";
import { jsxs, jsx } from "react/jsx-runtime";
import { throwTypeError } from "../figma_app/465776";
import { getCommunityResourcePayment } from "../figma_app/4253";
import { isViewerModeResource, isSlideTemplateResource } from "../figma_app/471982";
import { isResourceEligibleForPurchase } from "../figma_app/808294";
import { hasContent, getHubFile, getPluginOrWidgetContent, getViewerModeType } from "../figma_app/427318";
import { ResourceTypeEnum } from "../figma_app/306946";
import { ShelfViewType, hasFreemiumCode, isThirdPartyMonetized } from "../figma_app/45218";
import { d as _$$d } from "../5430/772148";
import { I as _$$I } from "../5430/292815";
import { Cg, Gb } from "../figma_app/534676";
import { uu, BE } from "../5430/868766";
let n = U;
let h = _$$l;
function f({
  button: e,
  subtext: t
}) {
  return jsxs("div", {
    className: uu,
    children: [e, t && jsx("div", {
      className: BE,
      children: t
    })]
  });
}
export function $$y0({
  resource: e,
  resourceContent: t,
  enableWideButtonForStickyFooter: r,
  enableCondensedWideButtonForStickyFooter: x
}) {
  let y = getCommunityResourcePayment(t);
  return isResourceEligibleForPurchase(t, y) ? jsx(_$$I, {
    resource: t,
    context: ShelfViewType.DETAIL,
    enableWideButtonForStickyFooter: r,
    enableCondensedWideButtonForStickyFooter: x,
    thirdPartyM10nUrl: hasContent(e) && e.third_party_m10n_url ? e.third_party_m10n_url : void 0
  }) : hasContent(e) ? function (e, t) {
    let r;
    switch (e.resource_type) {
      case ResourceTypeEnum.DESIGN_TEMPLATE:
      case ResourceTypeEnum.UI_KIT:
      case ResourceTypeEnum.PROTOTYPE:
      case ResourceTypeEnum.FIGJAM_TEMPLATE:
      case ResourceTypeEnum.SITE_TEMPLATE:
      case ResourceTypeEnum.COOPER_TEMPLATE_FILE:
      case ResourceTypeEnum.FIGMAKE_TEMPLATE:
        return (r = getHubFile(e)) ? jsx(n, {
          hubFile: r,
          resourceType: e.resource_type,
          enableWideButtonForStickyFooter: t
        }) : null;
      case ResourceTypeEnum.SLIDE_TEMPLATE:
        return (r = getHubFile(e)) ? jsx(h, {
          resource: r,
          enableWideButtonForStickyFooter: t
        }) : null;
      case ResourceTypeEnum.PLUGIN:
      case ResourceTypeEnum.WIDGET:
        if (!(r = getPluginOrWidgetContent(e))) return null;
        let o = hasFreemiumCode(r) ? jsx(Cg, {
          resource: r,
          showCaret: !1
        }) : isThirdPartyMonetized(r) ? jsx(Gb, {}) : void 0;
        return jsx(f, {
          button: jsx(_$$d, {
            resource: r,
            context: ShelfViewType.DETAIL
          }),
          subtext: o
        });
      case ResourceTypeEnum.COOPER_TEMPLATE_FILE:
      case ResourceTypeEnum.COOPER_TEMPLATE_ASSET:
        return null;
      default:
        throwTypeError(e.resource_type);
    }
  }(e, r) : function (e, t) {
    if (isViewerModeResource(e)) return isSlideTemplateResource(e) ? jsx(h, {
      resource: e,
      enableWideButtonForStickyFooter: t
    }) : jsx(n, {
      hubFile: e,
      resourceType: getViewerModeType(e.viewer_mode),
      enableWideButtonForStickyFooter: t
    });
    {
      let t = hasFreemiumCode(e) ? jsx(Cg, {
        resource: e,
        showCaret: !1
      }) : isThirdPartyMonetized(e) ? jsx(Gb, {}) : void 0;
      return jsx(f, {
        button: jsx(_$$d, {
          resource: e,
          context: ShelfViewType.DETAIL
        }),
        subtext: t
      });
    }
  }(e, r);
}
export const q = $$y0;