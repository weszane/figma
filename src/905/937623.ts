import _require from "../draftjs_composer/524876";
import { jsx } from "react/jsx-runtime";
import r from "classnames";
import { setupLazyComponentFactory } from "../905/992467";
import { renderI18nText } from "../905/303541";
import { Gm, bQ } from "../905/149906";
var a = r;
export let $$d0 = setupLazyComponentFactory("lazy_thread_comment_composer", {
  isCodesplit: !0,
  ComponentFactory: async () => ({
    default: (await Promise.all([]).then(_require)).ThreadCommentComposer
  })
});
export function $$c1(e) {
  let {
    type
  } = e;
  return jsx("div", {
    className: a()({
      [Gm]: "new" === type,
      [bQ]: "thread" === type
    }),
    children: jsx("span", {
      children: renderI18nText("comments.failed_to_load")
    })
  });
}
export const C = $$d0;
export const e = $$c1;