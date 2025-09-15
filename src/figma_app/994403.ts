import { jsx, jsxs } from "react/jsx-runtime";
import { j } from "../905/206476";
import { C as _$$C } from "../905/866991";
import { H } from "../905/507464";
import { e as _$$e } from "../905/435763";
import { P as _$$P } from "../905/697522";
import { o as _$$o } from "../905/218971";
import { p as _$$p } from "../905/110044";
import { K } from "../905/389903";
import { v as _$$v } from "../905/399666";
import { k } from "../905/649323";
import { N as _$$N } from "../905/861698";
import { o as _$$o2 } from "../905/688631";
import { _ as _$$_ } from "../905/154979";
import { B } from "../905/548640";
import { SvgComponent } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { DesignToolType } from "../figma_app/277543";
import { FileTypeEnum } from "../905/71785";
import { ManifestEditorType, isDevOrInspect } from "../figma_app/155287";
import { KindEnum } from "../905/129884";
import { $E, cL, is, G, Wv, p2, QF } from "../905/452765";
import { A as _$$A } from "../6041/844625";
import { A as _$$A2 } from "../6041/309527";
import { A as _$$A3 } from "../6041/43986";
import { A as _$$A4 } from "../6041/545324";
import { A as _$$A5 } from "../6041/502369";
import { A as _$$A6 } from "../6041/84263";
import { A as _$$A7 } from "../svg/662754";
import { A as _$$A8 } from "../svg/903292";
var $$n2;
export function $$k1({
  editorType: e,
  is16x16: t,
  isPlaygroundFileInsertBadge: r
}) {
  if (!e) return null;
  let n = $E;
  if (t ? n = cL : r && (n = is), !(e instanceof Array)) return M(e, n, t);
  if (e.includes(ManifestEditorType.FIGMA) && e.includes(ManifestEditorType.FIGJAM) && isDevOrInspect(e)) return jsx(SvgComponent, {
    svg: t ? _$$A7 : _$$A8,
    className: n,
    useOriginalSrcFills_DEPRECATED: !0,
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": getI18nString("community.detail_view.universal"),
    dataTestId: "editor-type-badge-universal"
  });
  if (e.includes(ManifestEditorType.FIGMA) && e.includes(ManifestEditorType.FIGJAM)) return jsx(SvgComponent, {
    svg: t ? _$$A5 : _$$A6,
    className: n,
    useOriginalSrcFills_DEPRECATED: !0,
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": getI18nString("community.detail_view.made_for_figma_design_and_figjam"),
    dataTestId: "editor-type-badge-figma-figjam"
  });
  if (e.includes(ManifestEditorType.FIGMA) && isDevOrInspect(e)) return jsx(SvgComponent, {
    svg: t ? _$$A3 : _$$A4,
    className: n,
    useOriginalSrcFills_DEPRECATED: !0,
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": getI18nString("community.detail_view.figma_design_and_dev_mode"),
    dataTestId: "editor-type-badge-figma-devmode"
  });
  if (e.includes(ManifestEditorType.FIGJAM) && isDevOrInspect(e)) return jsx(SvgComponent, {
    svg: t ? _$$A : _$$A2,
    className: n,
    useOriginalSrcFills_DEPRECATED: !0,
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": getI18nString("community.detail_view.made_for_fig_jam_and_dev_mode"),
    dataTestId: "editor-type-badge-figjam-devmode"
  });
  let a = e[0];
  return a ? M(a, n, t) : null;
}
function M(e, t, r) {
  switch (e) {
    case ManifestEditorType.FIGJAM:
    case FileTypeEnum.FIGJAM:
    case DesignToolType.WHITEBOARD:
      return jsx("div", {
        className: t,
        "data-testid": "editor-type-badge-figjam",
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("community.detail_view.made_for_fig_jam"),
        children: r ? jsx(j, {}) : jsx(_$$C, {})
      });
    case ManifestEditorType.FIGMA:
    case FileTypeEnum.FIGMA:
    case DesignToolType.DESIGN:
      return jsx("div", {
        className: t,
        "data-testid": "editor-type-badge-figma",
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("community.detail_view.made_for_figma_design"),
        children: r ? jsx(H, {}) : jsx(_$$e, {})
      });
    case ManifestEditorType.INSPECT:
    case ManifestEditorType.DEV:
    case DesignToolType.DEV_HANDOFF:
      return jsx("div", {
        className: t,
        "data-testid": "editor-type-badge-devmode",
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("community.detail_view.dev_mode_only"),
        children: r ? jsx(_$$P, {}) : jsx(_$$o, {})
      });
    case FileTypeEnum.SLIDES:
    case DesignToolType.SLIDES:
    case ManifestEditorType.SLIDES:
      return jsx("div", {
        className: t,
        "data-testid": "editor-type-badge-slides",
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("community.detail_view.made_for_slides"),
        children: r ? jsx(_$$p, {}) : jsx(K, {})
      });
    case DesignToolType.SITES:
      return jsx("div", {
        className: t,
        "data-testid": "editor-type-badge-sites",
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("community.detail_view.made_for_sites"),
        children: r ? jsx(_$$v, {}) : jsx(k, {})
      });
    case DesignToolType.FIGMAKE:
      return jsx("div", {
        className: t,
        "data-testid": "editor-type-badge-figmake",
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("community.detail_view.made_for_figmake"),
        children: r ? jsx(_$$N, {}) : jsx(_$$o2, {})
      });
    case ManifestEditorType.BUZZ:
    case DesignToolType.COOPER:
      return jsx("div", {
        className: t,
        "data-testid": "editor-type-badge-cooper",
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("community.detail_view.made_for_buzz"),
        children: r ? jsx(_$$_, {}) : jsx(B, {})
      });
    default:
      return null;
  }
}
export function $$F0({
  is24x24: e
}) {
  return jsxs("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": getI18nString("community.insert_modal.codegen_plugin_icon_tooltip"),
    className: e ? _$$s.w24.h24.colorBorder.$ : void 0,
    children: [jsx("path", {
      d: "M0 4C0 1.79086 1.79086 0 4 0H12C14.2091 0 16 1.79086 16 4V12C16 14.2091 14.2091 16 12 16H4C1.79086 16 0 14.2091 0 12V4Z",
      fill: "var(--color-bg)"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 1H4C2.34315 1 1 2.34315 1 4V12C1 13.6569 2.34315 15 4 15H12C13.6569 15 15 13.6569 15 12V4C15 2.34315 13.6569 1 12 1ZM4 0C1.79086 0 0 1.79086 0 4V12C0 14.2091 1.79086 16 4 16H12C14.2091 16 16 14.2091 16 12V4C16 1.79086 14.2091 0 12 0H4Z",
      fill: "var(--color-border)"
    }), jsx("path", {
      d: "M3 3.5C3 3.22386 3.22386 3 3.5 3H9.5C9.77614 3 10 3.22386 10 3.5C10 3.77614 9.77614 4 9.5 4H3.5C3.22386 4 3 3.77614 3 3.5Z",
      fill: "var(--color-icon)"
    }), jsx("path", {
      d: "M3 12.5C3 12.2239 3.22386 12 3.5 12H9.5C9.77614 12 10 12.2239 10 12.5C10 12.7761 9.77614 13 9.5 13H3.5C3.22386 13 3 12.7761 3 12.5Z",
      fill: "var(--color-icon)"
    }), jsx("path", {
      d: "M5 6.5C5 6.22386 5.22386 6 5.5 6H12.5C12.7761 6 13 6.22386 13 6.5C13 6.77614 12.7761 7 12.5 7H5.5C5.22386 7 5 6.77614 5 6.5Z",
      fill: "var(--color-icon-assistive)"
    }), jsx("path", {
      d: "M6 9.5C6 9.22386 6.22386 9 6.5 9H13.5C13.7761 9 14 9.22386 14 9.5C14 9.77614 13.7761 10 13.5 10H6.5C6.22386 10 6 9.77614 6 9.5Z",
      fill: "var(--color-icon-design)"
    })]
  });
}
(e => {
  e.IconAndBadgeContainer = function ({
    children: e,
    className: t
  }) {
    return jsx("div", {
      className: G + (t ? ` ${t}` : ""),
      children: e
    });
  };
  e.BadgeContainer = function ({
    children: e,
    fromBrowseResourceModal: t,
    resourceType: r
  }) {
    let n = Wv;
    t && "plugin" === r ? n = p2 : t && "widget" === r && (n = QF);
    return jsx("div", {
      className: n,
      children: e
    });
  };
})($$n2 || ($$n2 = {}));
export const ZA = $$F0;
export const dn = $$k1;
export const li = $$n2;