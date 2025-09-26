import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription } from "../figma_app/27355";
import { analyticsEventManager } from "../905/449184";
import { H } from "../905/620380";
import { useSingleEffect } from "../905/791079";
import { getInitialOptions } from "../figma_app/169182";
import { postUserFlag } from "../905/985254";
import { e as _$$e } from "../905/621515";
import { y as _$$y } from "../905/958284";
import { overlayIdsAtom } from "../905/12032";
import { NT, g5 } from "../figma_app/579169";
import { selectUserFlag } from "../905/940356";
import { N as _$$N } from "../figma_app/268271";
import { M } from "../905/152487";
import { isAllowedToSeeNux } from "../905/14910";
import { e as _$$e2 } from "../905/107684";
import { hib } from "../figma_app/6204";
import { useState, useCallback } from "react";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogCustomContents, DialogTitle } from "../figma_app/272243";
import { LinkPrimitive } from "../figma_app/496441";
import { textDisplayConfig } from "../905/687265";
import { Ay as _$$Ay } from "@stylexjs/stylex";
import { getI18nString, renderI18nText } from "../905/303541";
import { AutoLayout } from "../905/470281";
import { V } from "../905/355181";
import { TextWithTruncation } from "../905/984674";
import { UpgradeAction } from "../905/370443";
let D = {
  body: {
    ...textDisplayConfig.textBodyMedium,
    paddingBlock: "xapmr0x",
    paddingTop: null,
    paddingBottom: null,
    paddingInline: "xjtplnu",
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    $$css: !0
  }
};
function L({
  onAccept: e
}) {
  let [t, i] = useState(!1);
  let r = useModalManager({
    preventUserClose: !0,
    open: !0,
    onClose: () => {}
  });
  let a = useCallback(() => {
    if (!t) {
      i(!0);
      try {
        e();
      } finally {
        i(!1);
      }
    }
  }, [t, e]);
  return jsx(ModalRootComponent, {
    manager: r,
    width: "md",
    "data-testid": "tos_agreement_modal",
    children: jsxs(DialogCustomContents, {
      children: [jsx("div", {
        className: "x78zum5 x6s0dn4 x1ilnypm x8rdmch x1eqcisn",
        children: jsx(DialogTitle, {
          children: jsx(TextWithTruncation, {
            fontSize: 11,
            fontWeight: "bold",
            children: getI18nString("tos_agreement.modal_title")
          })
        })
      }), jsx("div", {
        ..._$$Ay.props(D.body),
        children: renderI18nText("tos_agreement.modal_description", {
          terms_of_service_link: jsx(LinkPrimitive, {
            href: "/legal/tos",
            newTab: !0,
            className: "x1quhyk7 x1bvjpef x1ypdohk",
            children: renderI18nText("tos_agreement.tos_link_text")
          })
        })
      }), jsx(AutoLayout, {
        direction: "horizontal",
        horizontalAlignItems: "end",
        verticalAlignItems: "center",
        padding: 8,
        children: jsx(V, {
          disabled: t,
          variant: "primary",
          onClick: a,
          dataTestId: "accept-tos-button",
          trackingProperties: {
            trackingDescriptor: UpgradeAction.AGREE
          },
          children: getI18nString("tos_agreement.modal_accept_button")
        })
      })]
    })
  });
}
export function $$F0({
  waitForNux: e = !0
}) {
  let t = useAtomWithSubscription(overlayIdsAtom);
  let i = useAtomWithSubscription(NT);
  let I = useAtomWithSubscription(g5);
  let {
    show,
    complete,
    isShowing
  } = _$$e({
    overlay: hib,
    priority: _$$N.URGENT_ALERT
  }, [i, I]);
  let w = useDispatch();
  let C = selectUserFlag("tos_accepted");
  let T = !!getInitialOptions().tos_agreement_required && !C;
  let k = getFeatureFlags().tos_blocking_fallback_modal;
  let R = H(t);
  useSingleEffect(() => {
    let t = () => show({
      canShow: (e, t) => {
        let i = R.current.some(e => _$$e2.includes(_$$y(e)));
        let n = isAllowedToSeeNux({
          emailValidatedAt: t,
          jobTitle: e
        });
        return k ? (!i || !!n) && !!T : (T && analyticsEventManager.trackDefinedEvent("activation.tos_agreement_modal_attempt", {
          nuxOverlayMounted: i,
          nuxCriteriaMet: n
        }), !1);
      }
    });
    e ? setTimeout(() => {
      t();
    }, 2e3) : t();
  });
  return jsx(M, {
    isShowing,
    testId: "tos_agreement_overlay",
    children: jsx(L, {
      onAccept: function () {
        w(postUserFlag({
          tos_accepted: !0
        }));
        complete();
      }
    })
  });
}
export const h = $$F0;