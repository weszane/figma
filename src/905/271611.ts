import { jsx } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
import { eU, md, zl } from "../figma_app/27355";
let $$s2 = {
  NAME_INPUT: "$name_input",
  DESCRIPTION_INPUT: "$description_input",
  CATEGORY_SELECT: "$category_select",
  TAGS_SECTION: "$tags_section",
  THUMBNAIL_UPLOADER: "$thumbnail_uploader",
  CAROUSEL_MEDIA_UPLOADER: "$carousel_media_uploader",
  SUPPORT_CONTACT_INPUT: "$support_contact_input",
  PROFILE_HANDLE_INPUT: "$profile_handle_input",
  COCREATORS_INPUT: "$cocreators_input",
  TOS_AGREED_CHECKBOX: "$tos_agreed_checkbox",
  PRICE_INPUT: "$price_input",
  IS_SUBSCRIPTION_CHECKBOX: "$is_subscription_checkbox",
  ANNUAL_DISCOUNT_INPUT: "$annual_discount_input",
  TAGLINE_INPUT: "$tagline_input",
  ICON_UPLOADER: "$icon_uploader",
  SNAPSHOT_UPLOADER: "$snapshot_uploader",
  PLAYGROUND_FILE_SELECT: "$playground_file_select",
  MANIFEST_INFO: "$manifest_info",
  RELEASE_NOTES_INPUT: "$release_notes_input",
  PROMPT_VISIBILITY_CHECKBOX: "$prompt_visibility_checkbox",
  DATA_SECURITY_QUESTION: e => `$data_security_question-${e}`
};
let o = eU(void 0);
export function $$l0({
  id: e,
  children: t
}) {
  let i = useRef(null);
  let s = useRef(null);
  let l = md(o);
  useEffect(() => {}, [e]);
  useEffect(() => {
    e === l && (i.current && (i.current.scrollIntoView({
      behavior: "smooth"
    }), s.current?.focus({
      preventScroll: !0
    })), zl.set(o, void 0));
  }, [e, l]);
  return jsx("div", {
    "data-id": `AutoScrollTarget-${e}`,
    ref: i,
    children: "function" == typeof t ? t(s) : t
  });
}
export function $$d1(e) {
  zl.set(o, e);
}
export const Mm = $$l0;
export const __ = $$d1;
export const tZ = $$s2;