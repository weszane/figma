import { l as _$$l } from "../5430/795130";
import { U } from "../5430/189384";
import { jsxs, jsx } from "react/jsx-runtime";
import { throwTypeError } from "../figma_app/465776";
import { I } from "../figma_app/4253";
import { Qo, cX } from "../figma_app/471982";
import { _K } from "../figma_app/808294";
import { XW, eO, $9, jB } from "../figma_app/427318";
import { vt } from "../figma_app/306946";
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
  let y = I(t);
  return _K(t, y) ? jsx(_$$I, {
    resource: t,
    context: ShelfViewType.DETAIL,
    enableWideButtonForStickyFooter: r,
    enableCondensedWideButtonForStickyFooter: x,
    thirdPartyM10nUrl: XW(e) && e.third_party_m10n_url ? e.third_party_m10n_url : void 0
  }) : XW(e) ? function (e, t) {
    let r;
    switch (e.resource_type) {
      case vt.DESIGN_TEMPLATE:
      case vt.UI_KIT:
      case vt.PROTOTYPE:
      case vt.FIGJAM_TEMPLATE:
      case vt.SITE_TEMPLATE:
      case vt.COOPER_TEMPLATE_FILE:
      case vt.FIGMAKE_TEMPLATE:
        return (r = eO(e)) ? jsx(n, {
          hubFile: r,
          resourceType: e.resource_type,
          enableWideButtonForStickyFooter: t
        }) : null;
      case vt.SLIDE_TEMPLATE:
        return (r = eO(e)) ? jsx(h, {
          resource: r,
          enableWideButtonForStickyFooter: t
        }) : null;
      case vt.PLUGIN:
      case vt.WIDGET:
        if (!(r = $9(e))) return null;
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
      case vt.COOPER_TEMPLATE_FILE:
      case vt.COOPER_TEMPLATE_ASSET:
        return null;
      default:
        throwTypeError(e.resource_type);
    }
  }(e, r) : function (e, t) {
    if (Qo(e)) return cX(e) ? jsx(h, {
      resource: e,
      enableWideButtonForStickyFooter: t
    }) : jsx(n, {
      hubFile: e,
      resourceType: jB(e.viewer_mode),
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