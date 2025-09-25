import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef, useRef, useImperativeHandle } from "react";
import { throwTypeError } from "../figma_app/465776";
import { Link } from "../905/438674";
import { x } from "../905/811596";
import { BigTextInputForwardRef } from "../figma_app/637027";
import { getI18nString } from "../905/303541";
import { findFirstResult } from "../905/331038";
import { getFieldValueOrDefault, canSetFieldValue } from "../905/497882";
import { lD } from "../905/57749";
import { FieldContainer } from "../905/567946";
let h = e => {
  if (e && "validation" === e.type) {
    let t = e.key;
    switch (t) {
      case "PROFILE_HANDLE_EMPTY":
        return getI18nString("community.publishing.profile_handle_must_not_be_empty");
      case "PROFILE_HANDLE_TOO_LONG":
        return getI18nString("community.publishing.profile_handle_cannot_be_longer_than_n_chars", {
          maxLength: lD
        });
      case "PROFILE_HANDLE_CONTAINS_SPECIAL_CHAR":
        return getI18nString("community.publishing.profile_handle_cannot_contain_special_characters");
      case "PROFILE_HANDLE_NOT_AVAILABLE":
        return getI18nString("community.change_profile_handle_modal.profile_handle_taken", {
          profileHandle: e.data.sanitizedProfileHandle
        });
      default:
        return throwTypeError(t);
    }
  }
};
function g({
  profileHandleField: e
}) {
  return getFieldValueOrDefault(e, "").length > 0 ? jsxs("span", {
    className: "profile_handle_input--successText--PNJ-J",
    children: [jsx(x, {
      className: "profile_handle_input--successIcon--ihkC1"
    }), getI18nString("community.change_profile_handle_modal.profile_handle_is_available", {
      profileHandle: getFieldValueOrDefault(e, "")
    })]
  }) : null;
}
export let $$f0 = forwardRef(function ({
  profileHandleField: e,
  touched: t,
  onTouched: i
}, a) {
  let o = useRef(null);
  useImperativeHandle(a, () => ({
    focus: e => {
      o.current?.focus(e);
    }
  }), []);
  let f = t && "error" === e.status ? e.errors : [];
  let _ = findFirstResult(f, h);
  return canSetFieldValue(e) ? jsx(FieldContainer, {
    label: getI18nString("community.publishing.set_a_unique_handle_for_your_new_community_profile"),
    error: _,
    afterErrorContent: t && !_ && jsx(g, {
      profileHandleField: e
    }),
    subLabel: jsxs("span", {
      children: [getI18nString("community.change_profile_handle_modal.review_our_community_guidelines_link"), " ", jsx(Link, {
        href: "https://help.figma.com/hc/articles/360038510573-Figma-Community-Guidelines",
        trusted: !0,
        newTab: !0,
        children: getI18nString("community.publishing.here")
      }), ". ", getI18nString("community.publishing.use_up_to_n_characters_letters_numbers_or_underscore", {
        maxLength: lD
      })]
    }),
    children: jsxs("div", {
      className: "profile_handle_input--handleContainer--yNTkr",
      children: [jsx(BigTextInputForwardRef, {
        ref: o,
        className: "profile_handle_input--regularTextInputUI3--NDhZA",
        value: getFieldValueOrDefault(e, ""),
        onChange: t => {
          i?.();
          e.setValue?.(t.currentTarget.value);
        },
        placeholder: "handle",
        spellCheck: !1
      }), jsx("span", {
        className: "profile_handle_input--regularHandlePlaceholderTextUI3--AIZ5m profile_handle_input--regularHandlePlaceholderText--jBe-V profile_handle_input--handlePlaceholderText--v-ue3",
        children: "figma.com/@"
      })]
    })
  }) : null;
});
export const S = $$f0;