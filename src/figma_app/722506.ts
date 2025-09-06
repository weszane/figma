import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { renderI18nText } from "../905/303541";
export function $$a0({
  styles: e,
  props: t,
  Event: {
    onSignUpClick: r,
    onLogInClick: a
  },
  Component: {
    ModalCloseButton: s,
    BrandButton: o,
    ButtonSecondaryTracked: l,
    Svg: d
  }
}) {
  return jsxs(Fragment, {
    children: [jsx(s, {
      ...t
    }), jsx("div", {
      className: e.graphic,
      children: t.icon && jsx(d, {
        svg: t.icon,
        useOriginalSrcFills_DEPRECATED: !0
      })
    }), jsx("div", {
      className: e.header,
      children: t.headerText
    }), jsx("div", {
      className: e.subHeader,
      children: renderI18nText("community.logged_out.sign_up_modal_body")
    }), jsx(o, {
      type: "submit",
      className: e.primaryWideButton,
      onClick: r,
      children: renderI18nText("community.signed_out_modal.sign_up")
    }), jsx(l, {
      className: e.logInButton,
      onClick: a,
      children: renderI18nText("community.signed_out_modal.log_in")
    })]
  });
}
export const A = $$a0;