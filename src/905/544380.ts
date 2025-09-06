import { atom, useAtomValueAndSetter } from "../figma_app/27355";
import { $$ } from "../905/986103";
import { getI18nString } from "../905/303541";
let s = Math.random() - .5;
let o = atom(0);
export function $$l0(e) {
  return function (e) {
    let [t, i] = useAtomValueAndSetter(o);
    $$(() => {
      i(e => e + 1);
    }, 5e3);
    return e[t % e.length];
  }(function (e) {
    let t = [getI18nString("assets_in_actions.component_search.placeholder_1"), getI18nString("assets_in_actions.component_search.placeholder_2"), getI18nString("assets_in_actions.component_search.placeholder_3"), getI18nString("assets_in_actions.component_search.placeholder_4"), getI18nString("assets_in_actions.component_search.placeholder_5"), getI18nString("assets_in_actions.component_search.placeholder_6"), getI18nString("assets_in_actions.component_search.placeholder_7"), getI18nString("assets_in_actions.component_search.placeholder_8"), getI18nString("assets_in_actions.component_search.placeholder_9"), getI18nString("assets_in_actions.component_search.placeholder_10"), getI18nString("assets_in_actions.component_search.placeholder_11"), getI18nString("assets_in_actions.component_search.placeholder_12"), getI18nString("assets_in_actions.component_search.placeholder_13")];
    let i = [getI18nString("assets_in_actions.fragment_search.placeholder_1"), getI18nString("assets_in_actions.fragment_search.placeholder_2"), getI18nString("assets_in_actions.fragment_search.placeholder_3"), getI18nString("assets_in_actions.fragment_search.placeholder_4"), getI18nString("assets_in_actions.fragment_search.placeholder_5"), getI18nString("assets_in_actions.fragment_search.placeholder_6"), getI18nString("assets_in_actions.fragment_search.placeholder_7"), getI18nString("assets_in_actions.fragment_search.placeholder_8"), getI18nString("assets_in_actions.fragment_search.placeholder_9"), getI18nString("assets_in_actions.fragment_search.placeholder_10"), getI18nString("assets_in_actions.fragment_search.placeholder_11"), getI18nString("assets_in_actions.fragment_search.placeholder_12"), getI18nString("assets_in_actions.fragment_search.placeholder_13")];
    return [...t, ...(e ? i : [])].sort(() => s);
  }(e));
}
export const U = $$l0;