import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription } from "../figma_app/27355";
import { analyticsEventManager } from "../905/449184";
import { H } from "../905/620380";
import { h as _$$h } from "../905/207101";
import { getInitialOptions } from "../figma_app/169182";
import { b as _$$b } from "../905/985254";
import { e as _$$e } from "../905/621515";
import { y as _$$y } from "../905/958284";
import { a as _$$a } from "../905/12032";
import { NT, g5 } from "../figma_app/579169";
import { f as _$$f } from "../905/940356";
import { N as _$$N } from "../figma_app/268271";
import { M } from "../905/152487";
import { d as _$$d } from "../905/14910";
import { e as _$$e2 } from "../905/107684";
import { hib } from "../figma_app/6204";
import { useState, useCallback } from "react";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { Wk, hE } from "../figma_app/272243";
import { _ as _$$_ } from "../figma_app/496441";
import { g as _$$g } from "../905/687265";
import { Ay as _$$Ay } from "@stylexjs/stylex";
import { getI18nString, renderI18nText } from "../905/303541";
import { AutoLayout } from "../905/470281";
import { V } from "../905/355181";
import { E as _$$E } from "../905/984674";
import { c as _$$c } from "../905/370443";
let D = {
  body: {
    ..._$$g.textBodyMedium,
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
  let r = hS({
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
  return jsx(bL, {
    manager: r,
    width: "md",
    "data-testid": "tos_agreement_modal",
    children: jsxs(Wk, {
      children: [jsx("div", {
        className: "x78zum5 x6s0dn4 x1ilnypm x8rdmch x1eqcisn",
        children: jsx(hE, {
          children: jsx(_$$E, {
            fontSize: 11,
            fontWeight: "bold",
            children: getI18nString("tos_agreement.modal_title")
          })
        })
      }), jsx("div", {
        ..._$$Ay.props(D.body),
        children: renderI18nText("tos_agreement.modal_description", {
          terms_of_service_link: jsx(_$$_, {
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
            trackingDescriptor: _$$c.AGREE
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
  let t = useAtomWithSubscription(_$$a);
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
  let C = _$$f("tos_accepted");
  let T = !!getInitialOptions().tos_agreement_required && !C;
  let k = getFeatureFlags().tos_blocking_fallback_modal;
  let R = H(t);
  _$$h(() => {
    let t = () => show({
      canShow: (e, t) => {
        let i = R.current.some(e => _$$e2.includes(_$$y(e)));
        let n = _$$d({
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
        w(_$$b({
          tos_accepted: !0
        }));
        complete();
      }
    })
  });
}
export const h = $$F0;