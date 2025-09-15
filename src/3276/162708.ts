import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "classnames";
import { dR } from "../905/508367";
import { customHistory } from "../905/612521";
import { AUTH_INIT } from "../905/194276";
import { AuthFlowStep } from "../905/862321";
import { BigTextInputForwardRef, ButtonBasePrimaryTracked, linkWithTracking } from "../figma_app/637027";
import { SvgComponent } from "../905/714743";
import { renderI18nText, getI18nString } from "../905/303541";
import { S } from "../figma_app/11182";
import { showModalHandler, hideModal } from "../905/156213";
import { TrackingProvider } from "../figma_app/831799";
import { liveStoreInstance } from "../905/713695";
import { registerModal } from "../905/102752";
import { x as _$$x } from "../905/749159";
import { EL } from "../905/748636";
import { CR, uv } from "../figma_app/419216";
import { ao, v4 } from "../figma_app/598952";
import { A } from "../5724/75936";
import { A as _$$A } from "../svg/391205";
var r = s;
let j = "share_link_modal--section--JsLVR";
function I({
  fileKey: e,
  onRequestClose: t,
  alreadyCopied: n
}) {
  let s = useDispatch();
  let x = liveStoreInstance.File.useValue(e).data;
  let y = x?.url || "";
  let C = useSelector(e => !e.user);
  let [I, T] = useState(!!n);
  let M = () => {
    I || (T(!0), s(S({
      url: y
    })));
  };
  useEffect(() => {
    if (I) {
      let e = setTimeout(() => {
        T(!1);
      }, 5e3);
      return () => clearTimeout(e);
    }
  }, [I]);
  return jsxs(TrackingProvider, {
    name: "Share Link Modal",
    children: [jsx("div", {
      className: j,
      children: renderI18nText("figjam_try.share_link_modal.title")
    }), jsx("div", {
      className: j,
      children: jsx(BigTextInputForwardRef, {
        readOnly: !0,
        value: y,
        onClick: M,
        className: "share_link_modal--input--GQgxB"
      })
    }), jsx("div", {
      className: r()(C && j),
      children: jsx(ButtonBasePrimaryTracked, {
        fullWidth: !0,
        onClick: M,
        trackingProperties: {
          buttonContext: "Copy link"
        },
        children: jsxs("span", {
          className: "share_link_modal--buttonContent--xZNXo",
          children: [jsx(SvgComponent, {
            svg: A,
            className: "share_link_modal--linkIcon--lwYrP"
          }), I ? getI18nString("figjam_try.link_copied") : getI18nString("figjam_try.copy_link")]
        })
      })
    }), C && jsxs("div", {
      className: "share_link_modal--anonymousUserSection--tS-rc",
      children: [jsx(SvgComponent, {
        svg: _$$A,
        className: "share_link_modal--teamIcon--1LdNm"
      }), jsxs("span", {
        children: [renderI18nText("figjam_try.share_link_modal.cta_description"), " ", jsx(linkWithTracking, {
          role: "button",
          onClick: () => {
            t();
            s(AUTH_INIT({
              origin: "figjam_try_share_modal",
              formState: AuthFlowStep.SIGN_UP,
              redirectUrl: dR(customHistory.location.pathname, {
                [ao.key]: ao.value
              }),
              signedUpFromOpenSession: !0
            }));
            s(showModalHandler({
              type: _$$x,
              data: {
                headerText: getI18nString("fullscreen.toolbar.create_an_account_to_do_more_with_fig_jam")
              }
            }));
          },
          trackingProperties: {
            buttonContext: "Create account"
          },
          trusted: !0,
          children: renderI18nText("figjam_try.share_link_modal.cta")
        })]
      })]
    })]
  });
}
export let $$T0 = registerModal(function ({
  fileKey: e,
  alreadyCopied: t
}) {
  let n = useDispatch();
  let a = () => {
    n(hideModal());
  };
  return jsx(CR, {
    targetKey: v4,
    width: 300 - 2 * uv,
    shouldCenterArrow: EL.FALLBACK,
    topPadding: 4,
    dismissModal: a,
    hideCloseButton: !0,
    animateQuickly: !0,
    children: jsx(I, {
      fileKey: e,
      onRequestClose: a,
      alreadyCopied: t
    })
  });
}, "ShareLinkModal");
export const p = $$T0;