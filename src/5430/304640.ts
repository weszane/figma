import { jsx, jsxs } from "react/jsx-runtime";
import { CY } from "../figma_app/637027";
import { renderI18nText } from "../905/303541";
import { Ju } from "../905/102752";
import { yX } from "../figma_app/918700";
import { _q } from "../5430/39369";
export let $$c0 = Ju(function (e) {
  return jsx(yX, {
    confirmationTitle: e.confirmationTitle,
    confirmText: e.confirmButtonText,
    onConfirm: e.onBlock,
    destructive: !0,
    children: jsxs("div", {
      children: [jsx("p", {
        className: _q,
        children: renderI18nText("community.comments.this_will_remove_their_comments_from_all_your_community_files_and_plugins_it_also_prevents_them_from_leaving_comments_on_your_resources_or_mentioning_you_in_the_future")
      }), jsx("p", {
        className: _q,
        children: renderI18nText("community.comments.link_about_managing_restricted_commenters", {
          link: jsx(CY, {
            href: "https://help.figma.com/hc/articles/1500002628062",
            target: "_blank",
            trusted: !0,
            children: renderI18nText("community.comments.learn_more")
          })
        })
      })]
    })
  });
}, "CommentConfirmBlockModal");
export const H = $$c0;