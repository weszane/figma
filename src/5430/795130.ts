import { jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { wA } from "../vendor/514228";
import { sx } from "../905/449184";
import { N as _$$N } from "../figma_app/469468";
import { t as _$$t } from "../905/303541";
import { u5 } from "../5132/642384";
import { s as _$$s } from "../5430/913603";
import { Q } from "../5430/345616";
import { _ as _$$_ } from "../905/456042";
import { vQ } from "../5430/664984";
import { X_ } from "../figma_app/777551";
import { vt } from "../figma_app/306946";
import { to } from "../905/156213";
import { YW } from "../figma_app/350203";
import { c as _$$c } from "../905/370443";
import { fu } from "../figma_app/831799";
import { IE } from "../5430/231178";
import { iZ } from "../905/372672";
import { LE } from "../905/71785";
import { Ib } from "../905/129884";
import { T as _$$T } from "../5132/203178";
import { nu, uD } from "../5430/774694";
export function $$T0({
  resource: e,
  enableWideButtonForStickyFooter: t
}) {
  let r = IE(e);
  let T = wA();
  let I = _$$N(`(max-width: ${YW}px)`);
  let N = _$$T();
  let E = iZ();
  let S = useCallback(() => {
    if (I) {
      T(to({
        type: _$$s,
        data: {
          dispatch: T,
          editorType: LE.SLIDES
        }
      }));
      return;
    }
    let t = u5(e => {
      sx("try_it_out_drafts_picker_menu_opened", r);
      T(to({
        type: _$$_,
        data: {
          payload: e
        }
      }));
    }, {
      skipWorkspaceSelection: N,
      userId: E?.id
    });
    T(t(e));
  }, [T, e, r, I, N, E]);
  let R = vQ(T);
  let k = X_(vt.SLIDE_TEMPLATE);
  let A = jsx("div", {
    "data-testid": "slide-template-use-button",
    className: nu,
    children: jsx("div", {
      className: uD,
      children: k
    })
  });
  if (!R) {
    let e = _$$t("community.use_slide_template.disabled_tooltip");
    return jsx(fu, {
      name: "slide_template_use_button",
      properties: {
        trackingDescriptor: _$$c.SLIDE_TEMPLATE_USE_BUTTON,
        ...r,
        isEnabled: !1
      },
      children: jsx("div", {
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": e,
        "data-tooltip-show-immediately": !0,
        children: A
      })
    });
  }
  return jsx(fu, {
    name: "slide_template_use_button",
    properties: {
      trackingDescriptor: _$$c.SLIDE_TEMPLATE_USE_BUTTON,
      ...r,
      isEnabled: !0
    },
    children: jsx(Q, {
      buttonText: k,
      onClick: S,
      useNoIconStyle: !0,
      editorType: LE.SLIDES,
      enableWideButtonForStickyFooter: t,
      dataTestId: "slide-template-use-button"
    })
  });
}
export const l = $$T0;