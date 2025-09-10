import { useMemo } from "react";
import { useSelector } from "react-redux";
import { l as _$$l } from "../905/716947";
import { useAtomWithSubscription } from "../figma_app/27355";
import { n1 } from "../figma_app/657017";
import { oA } from "../905/71785";
import { COMMUNITY_LIBRARY_FILE } from "../figma_app/633080";
import { TG } from "../905/72677";
import { D } from "../905/347702";
import { je, Qh } from "../figma_app/155728";
let $$_4 = "ui_kits_tooltip_onboarding_key";
let $$h7 = D(e => 22 !== e.length && !e.match(/\D/));
export function $$m0(e) {
  return useMemo(() => e && $$h7(e) ? e : null, [e]);
}
export function $$g3(e) {
  let t = oA(e);
  let {
    id,
    thumbnail_url,
    library_key,
    publisher
  } = e;
  return {
    name: t,
    key: id,
    type: COMMUNITY_LIBRARY_FILE,
    thumbnail_url,
    library_key: library_key ?? _$$l(""),
    author_name: publisher.name,
    author_handle: publisher.profile_handle
  };
}
export function $$f1(e) {
  let {
    library_file_name,
    library_file_key,
    thumbnail_url,
    library_key,
    author_name,
    author_handle
  } = e;
  return {
    name: library_file_name,
    key: library_file_key,
    type: COMMUNITY_LIBRARY_FILE,
    thumbnail_url,
    library_key,
    author_name,
    author_handle
  };
}
export function $$E5(e) {
  let {
    file,
    components,
    stateGroups,
    styles,
    variables,
    variableSets
  } = e;
  let {
    name,
    key,
    type,
    thumbnail_url,
    library_key,
    author_name,
    author_handle
  } = t;
  return {
    library_file_key: key,
    library_file_name: name,
    thumbnail_url,
    num_components: components.length,
    num_state_groups: stateGroups.length,
    num_styles: styles.length,
    num_variable_collections: variableSets.length,
    num_variables: variables.length,
    num_module_assets: 0,
    num_library_assets: 0,
    type,
    library_key,
    author_name,
    author_handle
  };
}
export function $$y2() {
  let e = n1();
  let t = je();
  let r = useAtomWithSubscription(TG);
  return e ? "loading" === t.status ? {
    hasAnyUiKit: !1,
    status: "loading"
  } : t.data && "loaded" === t.status ? {
    hasAnyUiKit: t.data.some(e => r.has(e.libraryKey)),
    status: "loaded"
  } : {
    hasAnyUiKit: !1,
    status: "loaded"
  } : {
    hasAnyUiKit: !1,
    status: "loaded"
  };
}
export function $$b6() {
  let e = je();
  let t = useSelector(e => Object.keys(e.library.local.components).length);
  let r = useAtomWithSubscription(TG);
  if (e.data && "loaded" === e.status) {
    var n;
    n = e.data;
    return !!n?.some(e => !r.has(e.libraryKey) && e.subscriptionType !== Qh.COMMUNITY) || t > 0;
  }
  return !1;
}
export const $Q = $$m0;
export const GS = $$f1;
export const I7 = $$y2;
export const N4 = $$g3;
export const RJ = $$_4;
export const hT = $$E5;
export const oe = $$b6;
export const wJ = $$h7;