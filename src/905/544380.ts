import { eU, fp } from "../figma_app/27355";
import { $$ } from "../905/986103";
import { t as _$$t } from "../905/303541";
let s = Math.random() - .5;
let o = eU(0);
export function $$l0(e) {
  return function (e) {
    let [t, i] = fp(o);
    $$(() => {
      i(e => e + 1);
    }, 5e3);
    return e[t % e.length];
  }(function (e) {
    let t = [_$$t("assets_in_actions.component_search.placeholder_1"), _$$t("assets_in_actions.component_search.placeholder_2"), _$$t("assets_in_actions.component_search.placeholder_3"), _$$t("assets_in_actions.component_search.placeholder_4"), _$$t("assets_in_actions.component_search.placeholder_5"), _$$t("assets_in_actions.component_search.placeholder_6"), _$$t("assets_in_actions.component_search.placeholder_7"), _$$t("assets_in_actions.component_search.placeholder_8"), _$$t("assets_in_actions.component_search.placeholder_9"), _$$t("assets_in_actions.component_search.placeholder_10"), _$$t("assets_in_actions.component_search.placeholder_11"), _$$t("assets_in_actions.component_search.placeholder_12"), _$$t("assets_in_actions.component_search.placeholder_13")];
    let i = [_$$t("assets_in_actions.fragment_search.placeholder_1"), _$$t("assets_in_actions.fragment_search.placeholder_2"), _$$t("assets_in_actions.fragment_search.placeholder_3"), _$$t("assets_in_actions.fragment_search.placeholder_4"), _$$t("assets_in_actions.fragment_search.placeholder_5"), _$$t("assets_in_actions.fragment_search.placeholder_6"), _$$t("assets_in_actions.fragment_search.placeholder_7"), _$$t("assets_in_actions.fragment_search.placeholder_8"), _$$t("assets_in_actions.fragment_search.placeholder_9"), _$$t("assets_in_actions.fragment_search.placeholder_10"), _$$t("assets_in_actions.fragment_search.placeholder_11"), _$$t("assets_in_actions.fragment_search.placeholder_12"), _$$t("assets_in_actions.fragment_search.placeholder_13")];
    return [...t, ...(e ? i : [])].sort(() => s);
  }(e));
}
export const U = $$l0;