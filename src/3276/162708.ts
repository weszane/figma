import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import s from "classnames";
import { dR } from "../905/508367";
import { Ay } from "../905/612521";
import { Ts } from "../905/194276";
import { qB } from "../905/862321";
import { ks, vd, Us } from "../figma_app/637027";
import { B } from "../905/714743";
import { tx, t as _$$t } from "../905/303541";
import { S } from "../figma_app/11182";
import { to, Ce } from "../905/156213";
import { fu } from "../figma_app/831799";
import { M4 } from "../905/713695";
import { Ju } from "../905/102752";
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
  let x = M4.File.useValue(e).data;
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
  return jsxs(fu, {
    name: "Share Link Modal",
    children: [jsx("div", {
      className: j,
      children: tx("figjam_try.share_link_modal.title")
    }), jsx("div", {
      className: j,
      children: jsx(ks, {
        readOnly: !0,
        value: y,
        onClick: M,
        className: "share_link_modal--input--GQgxB"
      })
    }), jsx("div", {
      className: r()(C && j),
      children: jsx(vd, {
        fullWidth: !0,
        onClick: M,
        trackingProperties: {
          buttonContext: "Copy link"
        },
        children: jsxs("span", {
          className: "share_link_modal--buttonContent--xZNXo",
          children: [jsx(B, {
            svg: A,
            className: "share_link_modal--linkIcon--lwYrP"
          }), I ? _$$t("figjam_try.link_copied") : _$$t("figjam_try.copy_link")]
        })
      })
    }), C && jsxs("div", {
      className: "share_link_modal--anonymousUserSection--tS-rc",
      children: [jsx(B, {
        svg: _$$A,
        className: "share_link_modal--teamIcon--1LdNm"
      }), jsxs("span", {
        children: [tx("figjam_try.share_link_modal.cta_description"), " ", jsx(Us, {
          role: "button",
          onClick: () => {
            t();
            s(Ts({
              origin: "figjam_try_share_modal",
              formState: qB.SIGN_UP,
              redirectUrl: dR(Ay.location.pathname, {
                [ao.key]: ao.value
              }),
              signedUpFromOpenSession: !0
            }));
            s(to({
              type: _$$x,
              data: {
                headerText: _$$t("fullscreen.toolbar.create_an_account_to_do_more_with_fig_jam")
              }
            }));
          },
          trackingProperties: {
            buttonContext: "Create account"
          },
          trusted: !0,
          children: tx("figjam_try.share_link_modal.cta")
        })]
      })]
    })]
  });
}
export let $$T0 = Ju(function ({
  fileKey: e,
  alreadyCopied: t
}) {
  let n = useDispatch();
  let a = () => {
    n(Ce());
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