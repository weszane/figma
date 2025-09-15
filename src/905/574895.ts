import { jsxs, jsx } from "react/jsx-runtime";
import { throwTypeError } from "../figma_app/465776";
import { getFeatureFlags } from "../905/601108";
import { getI18nString } from "../905/303541";
import { ResourceTypeEnum } from "../figma_app/306946";
import { DesignToolType } from "../figma_app/277543";
import { FileTypeEnum } from "../905/71785";
import { ManifestEditorType } from "../figma_app/155287";
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
      case FileTypeEnum.SLIDES:
      case DesignToolType.SLIDES:
      case ManifestEditorType.SLIDES:
        return getI18nString("community.detail_view.made_for_slides");
      case FileTypeEnum.FIGJAM:
      case ManifestEditorType.FIGJAM:
      case DesignToolType.WHITEBOARD:
        return getI18nString("community.detail_view.made_for_fig_jam");
      case ManifestEditorType.INSPECT:
      case ManifestEditorType.DEV:
      case DesignToolType.DEV_HANDOFF:
        return getI18nString("community.detail_view.made_for_dev_mode");
      case FileTypeEnum.FIGMA:
      case ManifestEditorType.FIGMA:
      case DesignToolType.DESIGN:
        return getI18nString("community.detail_view.made_for_figma_design");
      case FileTypeEnum.SITES:
      case DesignToolType.SITES:
      case ManifestEditorType.SITES:
        return getI18nString("community.detail_view.made_for_sites");
      case FileTypeEnum.FIGMAKE:
      case DesignToolType.FIGMAKE:
        return getI18nString("community.detail_view.made_for_figmake");
      case FileTypeEnum.COOPER:
      case DesignToolType.COOPER:
      case ManifestEditorType.BUZZ:
        if (m === ResourceTypeEnum.PLUGIN && !getFeatureFlags().buzz_plugins_publishing) return null;
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