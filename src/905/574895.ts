import { jsxs, jsx } from "react/jsx-runtime";
import { throwTypeError } from "../figma_app/465776";
import { getFeatureFlags } from "../905/601108";
import { getI18nString } from "../905/303541";
import { vt } from "../figma_app/306946";
import { q } from "../figma_app/277543";
import { LE } from "../905/71785";
import { FW } from "../figma_app/155287";
import { dn } from "../figma_app/994403";
import { qS } from "../figma_app/356510";
export function $$m0({
  hubFileEditorType: e,
  pluginEditorType: t,
  resourceEditorType: i,
  resourceType: m
}) {
  let h = e || t || i;
  if (!h) return null;
  let g = (() => {
    switch (h) {
      case LE.SLIDES:
      case q.SLIDES:
      case FW.SLIDES:
        return getI18nString("community.detail_view.made_for_slides");
      case LE.FIGJAM:
      case FW.FIGJAM:
      case q.WHITEBOARD:
        return getI18nString("community.detail_view.made_for_fig_jam");
      case FW.INSPECT:
      case FW.DEV:
      case q.DEV_HANDOFF:
        return getI18nString("community.detail_view.made_for_dev_mode");
      case LE.FIGMA:
      case FW.FIGMA:
      case q.DESIGN:
        return getI18nString("community.detail_view.made_for_figma_design");
      case LE.SITES:
      case q.SITES:
      case FW.SITES:
        return getI18nString("community.detail_view.made_for_sites");
      case LE.FIGMAKE:
      case q.FIGMAKE:
        return getI18nString("community.detail_view.made_for_figmake");
      case LE.COOPER:
      case q.COOPER:
      case FW.BUZZ:
        if (m === vt.PLUGIN && !getFeatureFlags().buzz_plugins_publishing) return null;
        return getI18nString("community.detail_view.made_for_buzz");
      default:
        return throwTypeError(h);
    }
  })();
  return g ? jsxs("div", {
    className: qS,
    children: [jsx(dn, {
      editorType: t ? [t] : h
    }), jsx("div", {
      children: g
    })]
  }) : null;
}
export const _ = $$m0;