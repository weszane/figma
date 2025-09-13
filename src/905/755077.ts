import { jsxs, jsx } from "react/jsx-runtime";
import { useRef, useState, useCallback, useEffect } from "react";
import { debounce } from "../905/915765";
import { BigTextInputForwardRef, BaseLinkComponent } from "../figma_app/637027";
import { getI18nString, renderI18nText } from "../905/303541";
import { vr } from "../figma_app/740025";
import { s as _$$s2 } from "../905/608932";
export function $$c0(e) {
  let {
    onProfileHandleValidationSuccess,
    onProfileHandleValidationFailure,
    prevalidate
  } = e;
  let u = e.defaultHandleName || "";
  let p = useRef("");
  let [m, h] = useState({});
  let g = useCallback(e => {
    let n = vr(e);
    if (n) {
      onProfileHandleValidationFailure && onProfileHandleValidationFailure();
      h({
        errorMsg: n
      });
      return;
    }
    e.length > 0 ? _$$s2.getHandleAvailable({
      profileHandle: e
    }).then(({
      data: n
    }) => {
      n.meta.handle === p.current && (n.meta.available ? (h({
        successMsg: getI18nString("community.change_profile_handle_modal.profile_handle_is_available", {
          profileHandle: e
        })
      }), onProfileHandleValidationSuccess && onProfileHandleValidationSuccess()) : (h({
        errorMsg: getI18nString("community.change_profile_handle_modal.profile_handle_taken", {
          profileHandle: e
        })
      }), onProfileHandleValidationFailure && onProfileHandleValidationFailure()));
    }) : h({});
  }, [onProfileHandleValidationFailure, onProfileHandleValidationSuccess, p]);
  useEffect(() => {
    u.length > 0 && prevalidate && g(u);
  }, [u, g, prevalidate]);
  let f = debounce(e => {
    e();
  }, 500);
  return jsxs("div", {
    className: "profile_handle--handleWrapper--AbnOd text--fontPos11--2LvXf text--_fontBase--QdLsd",
    children: [jsxs("div", {
      className: "profile_handle--handleContainer--hihCL",
      children: [jsx(BigTextInputForwardRef, {
        autoComplete: "off",
        autoFocus: !0,
        className: "profile_handle--regularTextInputUI3--3Zxz5",
        id: "profile_handle",
        maxLength: 20,
        name: "profile_handle",
        onChange: t => {
          let i = t.target.value;
          e.saveHandle(i);
          p.current = i;
          f(() => {
            g(i);
          });
        },
        placeholder: "handle",
        type: "text",
        value: p.current || u
      }), jsx("span", {
        className: "profile_handle--regularHandlePlaceholderTextUI3--pjb-p profile_handle--regularHandlePlaceholderText--wwka4 profile_handle--handlePlaceholderText--79BUG",
        children: "figma.com/@"
      })]
    }), jsxs("div", {
      className: "profile_handle--handleHelperTextWrapper--VqFta",
      children: [m.errorMsg && jsx("div", {
        className: "profile_handle--error--Cm-3K auth_form--error--EtrjX auth_form--figmaSans--XXAeN auth_brand--figmaSans--aXdNw",
        children: m.errorMsg
      }), m.successMsg && jsx("div", {
        className: "profile_handle--handleSuccess--K6UGr profile_handle--error--Cm-3K auth_form--error--EtrjX auth_form--figmaSans--XXAeN auth_brand--figmaSans--aXdNw",
        children: m.successMsg
      }), jsx("div", {
        className: "profile_handle--handleText--es9hl",
        children: renderI18nText("community.change_profile_handle_modal.profile_handle_requirements")
      }), jsx(BaseLinkComponent, {
        className: "profile_handle--communityGuidelinesLink--lqfL1",
        href: "https://help.figma.com/hc/articles/360038510573-Figma-Community-Guidelines",
        target: "_blank",
        trusted: !0,
        children: renderI18nText("community.change_profile_handle_modal.review_our_community_guidelines_link")
      })]
    })]
  });
}
export const v = $$c0;