import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { useSelector } from "../vendor/514228";
import { getFeatureFlags } from "../905/601108";
import { md } from "../figma_app/27355";
import { buildUploadUrl } from "../figma_app/169182";
import { C8 } from "../figma_app/778880";
import { oW } from "../905/675859";
import { nt } from "../figma_app/687776";
import { tx } from "../905/303541";
import { E as _$$E } from "../905/984674";
import { $ as _$$$ } from "../figma_app/61705";
import { c as _$$c } from "../905/370443";
import { e as _$$e } from "../905/621515";
import { mp } from "../figma_app/579169";
import { FPlanNameType, FFileType } from "../figma_app/191312";
import { X$ } from "../figma_app/465071";
import { f6 } from "../figma_app/915202";
import { N as _$$N } from "../figma_app/268271";
import { _l } from "../figma_app/995208";
import { CBZ } from "../figma_app/6204";
import { M } from "../1250/475573";
import { jl, yd, aX } from "../1250/868645";
let E = {
  button: {
    borderRadius: "x1sxf85j",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    backgroundColor: "xu5wzci",
    color: "x1tk3asg",
    display: "x78zum5",
    minHeight: "x21xpn4",
    padding: "x897kq8",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    alignItems: "x6s0dn4",
    textAlign: "x2b8uid",
    fontFamily: "xclx6tv",
    fontSize: "x17akokd",
    fontStyle: "x1j61x8r",
    fontWeight: "x1qxcl5b",
    lineHeight: "xno9bf3",
    letterSpacing: "xqp8s7e",
    $$css: !0
  }
};
function C() {
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: "xeq5yr9 xod5an3",
      children: jsx(M, {})
    }), tx("figmake.marketing_modal.body")]
  });
}
export function $$I0() {
  let e = jl();
  let t = getFeatureFlags().marketing_promo_modal_figmake_launch;
  let n = useSelector(e => e.user?.drafts_folder_id);
  let {
    data,
    status
  } = nt(n);
  let j = !!data?.canCreateFigmakeFileWithReasons.result;
  let I = X$("FigmakePromoModalOverlay");
  let S = I.unwrapOr(null)?.tier || null;
  let N = S && ([FPlanNameType.PRO, FPlanNameType.ORG, FPlanNameType.ENTERPRISE].includes(S) || S === FPlanNameType.STARTER && getFeatureFlags().bake_starter_limit);
  let O = md(mp);
  let R = C8();
  let M = _$$$({
    isDraftsFolder: !0,
    editorType: FFileType.FIGMAKE,
    newFileFrom: f6.FIGMAKE_PROMO_MODAL,
    contextClicked: "figmake_marketing_modal"
  });
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: CBZ,
    priority: _$$N.DEFAULT_MODAL
  }, [e, O]);
  let {
    onAcknowledge
  } = yd(complete);
  useEffect(() => {
    !0 === t && j && N && show({
      canShow: (e, t) => (S !== FPlanNameType.STARTER || !!function (e) {
        let t = Date.now();
        return e.getTime() <= t - 864e5;
      }(t)) && !R && !e
    });
  }, [show, t, j, N, S, R]);
  return jsx(_l, {
    closeButtonColor: "dark",
    description: tx("figmake.marketing_modal.subtitle"),
    disclaimerFooter: jsx(aX, {}),
    isShowing,
    media: jsx(A, {}),
    onClose: complete,
    primaryCta: {
      type: "button",
      label: jsx(_$$E, {
        children: tx("figmake.marketing_modal.button")
      }),
      onClick: () => {
        onAcknowledge();
        M();
      },
      ctaTrackingDescriptor: _$$c.OPEN_FIGMAKE,
      variantOverride: "custom",
      customVariantStyles: E.button
    },
    title: jsx(C, {}),
    trackingContextName: "Figmake Promo Modal",
    trackingProperties: {
      planTier: S
    }
  });
}
function A() {
  return jsx("div", {
    className: "x165vjil x14ggrba",
    children: jsx(oW, {
      src: buildUploadUrl("0b908885241f3422b8940078d7f3be979a8fece0"),
      alt: "Figma Make promotional image",
      width: 332
    })
  });
}
export const $ = $$I0;