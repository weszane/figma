import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef, useRef, useImperativeHandle } from "react";
import { xb } from "../figma_app/465776";
import { N } from "../905/438674";
import { x } from "../905/811596";
import { ks } from "../figma_app/637027";
import { t as _$$t } from "../905/303541";
import { U } from "../905/331038";
import { Lz, Zc } from "../905/497882";
import { lD } from "../905/57749";
import { A } from "../905/567946";
let h = e => {
  if (e && "validation" === e.type) {
    let t = e.key;
    switch (t) {
      case "PROFILE_HANDLE_EMPTY":
        return _$$t("community.publishing.profile_handle_must_not_be_empty");
      case "PROFILE_HANDLE_TOO_LONG":
        return _$$t("community.publishing.profile_handle_cannot_be_longer_than_n_chars", {
          maxLength: lD
        });
      case "PROFILE_HANDLE_CONTAINS_SPECIAL_CHAR":
        return _$$t("community.publishing.profile_handle_cannot_contain_special_characters");
      case "PROFILE_HANDLE_NOT_AVAILABLE":
        return _$$t("community.change_profile_handle_modal.profile_handle_taken", {
          profileHandle: e.data.sanitizedProfileHandle
        });
      default:
        return xb(t);
    }
  }
};
function g({
  profileHandleField: e
}) {
  return Lz(e, "").length > 0 ? jsxs("span", {
    className: "profile_handle_input--successText--PNJ-J",
    children: [jsx(x, {
      className: "profile_handle_input--successIcon--ihkC1"
    }), _$$t("community.change_profile_handle_modal.profile_handle_is_available", {
      profileHandle: Lz(e, "")
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
  let _ = U(f, h);
  return Zc(e) ? jsx(A, {
    label: _$$t("community.publishing.set_a_unique_handle_for_your_new_community_profile"),
    error: _,
    afterErrorContent: t && !_ && jsx(g, {
      profileHandleField: e
    }),
    subLabel: jsxs("span", {
      children: [_$$t("community.change_profile_handle_modal.review_our_community_guidelines_link"), " ", jsx(N, {
        href: "https://help.figma.com/hc/articles/360038510573-Figma-Community-Guidelines",
        trusted: !0,
        newTab: !0,
        children: _$$t("community.publishing.here")
      }), ". ", _$$t("community.publishing.use_up_to_n_characters_letters_numbers_or_underscore", {
        maxLength: lD
      })]
    }),
    children: jsxs("div", {
      className: "profile_handle_input--handleContainer--yNTkr",
      children: [jsx(ks, {
        ref: o,
        className: "profile_handle_input--regularTextInputUI3--NDhZA",
        value: Lz(e, ""),
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