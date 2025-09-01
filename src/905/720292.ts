import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { K } from "../905/443068";
import { _ } from "../905/410717";
import { j } from "../905/519202";
import o from "classnames";
import { t, tx } from "../905/303541";
import { FO } from "../905/869235";
import { xp } from "../905/247367";
import { Yz, _5 } from "../figma_app/449837";
var l = o;
let m = "comparison_container--imagesContainerWrapper--YmGHm";
let h = "comparison_container--optionsSelectorOption--qMZHZ";
let g = "comparison_container--selected--PauKH";
export var $$f5 = (e => (e.SIDE_BY_SIDE = "side-by-side", e.OVERLAY = "overlay", e))($$f5 || {});
export function $$_0(e) {
  let {
    title,
    containerStyle,
    isDarkBackground,
    children
  } = e;
  return jsxs("div", {
    className: containerStyle,
    children: [title && jsx("div", {
      className: isDarkBackground ? "comparison_container--darkBackgroundHeader--MioyC comparison_container--_comparableHeader--Dv0bF" : "comparison_container--lightBackgroundHeader--cU4sH comparison_container--_comparableHeader--Dv0bF",
      children: jsx("p", {
        children: title
      })
    }), children]
  });
}
export function $$A4(e) {
  let {
    children,
    resetStateOnChangeValue,
    zoomPercentageOptions,
    zoomOnMousePointer,
    compareThumbnailSource,
    canFitZoomExceed100 = !1
  } = e;
  return jsx("div", {
    className: "comparison_container--sideBySideContainer--7MUFx",
    children: jsx("div", {
      className: l()("comparison_container--previewImagesFullHeight--FTmoM", {
        "comparison_container--previewImagesLego--s-Xt3": compareThumbnailSource === FO.LEGO || compareThumbnailSource === FO.COMPARE_CHANGES,
        "comparison_container--previewImagesLinter--fmdqD": compareThumbnailSource === FO.LINTER,
        "comparison_container--previewImages--x5Lj5": !compareThumbnailSource || compareThumbnailSource === FO.TEST_SUITE || compareThumbnailSource === FO.BRANCHING
      }),
      children: jsx(Yz, {
        zoomPercentageOptions,
        resetStateOnChangeValue,
        className: m,
        zoomOnMousePointer,
        canFitZoomExceed100,
        children
      })
    })
  });
}
export function $$y3(e) {
  let {
    children,
    resetStateOnChangeValue,
    zoomPercentageOptions,
    zoomOnMousePointer
  } = e;
  return jsx("div", {
    className: "comparison_container--overlayContainer--ubNJs",
    children: jsx(Yz, {
      className: l()("comparison_container--overlayInner--S2dXd", m),
      zoomPercentageOptions,
      resetStateOnChangeValue,
      zoomOnMousePointer,
      children
    })
  });
}
export function $$b1(e) {
  let {
    isPreviewAvailable,
    showOptions,
    view,
    onSideBySideClick,
    onOverlayClick,
    additionalStyles
  } = e;
  return isPreviewAvailable ? jsxs(Fragment, {
    children: [showOptions && jsxs("div", {
      className: "comparison_container--optionsSelector--irMl4",
      children: [jsx("button", {
        "aria-label": t("collaboration.branching.side_by_side"),
        className: l()(h, "side-by-side" === view && g, "comparison_container--leftOption--n-kTR", !!additionalStyles && additionalStyles),
        onClick: onSideBySideClick,
        children: tx("collaboration.branching.side_by_side")
      }), jsx("button", {
        "aria-label": t("collaboration.branching.overlay"),
        className: l()(h, "overlay" === view && g, "comparison_container--rightOption--tJz4u", !!additionalStyles && additionalStyles),
        onClick: onOverlayClick,
        children: tx("collaboration.branching.overlay")
      })]
    }), jsx(_5, {
      className: "comparison_container--optionsZoom--bIAxA",
      keyboardShortcutsEnabled: !0
    })]
  }) : null;
}
export function $$v2(e) {
  let {
    opacity,
    isAfterImageShown,
    onToggleClick,
    onOpacityChange
  } = e;
  return jsxs("div", {
    className: "comparison_container--overlayOptionsContainer--JOrMq",
    children: [jsx(K, {
      "aria-label": isAfterImageShown ? t("collaboration.branching.overlay_hide_after_image") : t("collaboration.branching.overlay_show_after_image"),
      onClick: onToggleClick,
      children: isAfterImageShown ? jsx(_, {}) : jsx(j, {})
    }), jsx(xp, {
      width: 150,
      color: {
        h: 0,
        s: 0,
        v: 0,
        a: opacity
      },
      containerClass: "comparison_container--opacitySlider--h4DxV",
      changeCallback: onOpacityChange
    })]
  });
}
export const or = $$_0;
export const BL = $$b1;
export const u = $$v2;
export const xY = $$y3;
export const qW = $$A4;
export const Ss = $$f5;