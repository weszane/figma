import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setupAutofocusHandler } from "../905/128376";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogHeader, DialogTitle, DialogBody } from "../figma_app/272243";
import { d as _$$d } from "../905/49800";
import { Label } from "../905/270045";
import { InputComponent } from "../905/185998";
import { useTheme } from "../905/289770";
import { getFeatureFlags } from "../905/601108";
import { useAtomValueAndSetter, Xr } from "../figma_app/27355";
import { trackAccessibilityEvent, AccessibilityActionType } from "../905/693155";
import { conditionalFeatureFlag } from "../figma_app/169182";
import { Fj, jI } from "../905/763714";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { TextWithTruncation } from "../905/984674";
import { fK } from "../905/469533";
import { getCurrentFileType } from "../figma_app/976749";
import { useScreenReaderManager } from "../905/810168";
import { FFileType } from "../figma_app/191312";
import { registerModal, ModalSupportsBackground } from "../905/102752";
import { KeyboardFocusManager } from "../905/826900";
export let $$C0 = registerModal(function ({
  open: e,
  onClose: t
}) {
  let [r, x] = useScreenReaderManager();
  let [C, w] = useAtomValueAndSetter(Fj);
  let O = Xr(jI);
  let R = setupAutofocusHandler();
  let L = useDispatch();
  let P = useSelector(e => e.screenreader.errorType);
  let D = getCurrentFileType();
  let {
    enhancedContrast,
    color,
    brand
  } = useTheme();
  let j = useCallback(() => {
    D === FFileType.WHITEBOARD && KeyboardFocusManager.focusCustomCanvasFocusElement();
    t();
  }, [t, D]);
  let U = useModalManager({
    open: e,
    onClose: j
  });
  let B = getFeatureFlags().slides_editor_a11y && D === FFileType.SLIDES;
  let G = conditionalFeatureFlag("a11y_design_dom_mirror", getI18nString("fullscreen.accessibility_settings.enable_screenreader_description_design_beta"), getI18nString("fullscreen.accessibility_settings.enable_screenreader_description_figjam_beta"));
  B && (G = getI18nString("fullscreen.accessibility_settings.enable_screenreader_description_slides"));
  let V = conditionalFeatureFlag("fpl_enhanced_contrast_toggle", {
    "data-preferred-theme": color,
    "data-editor-theme": brand,
    "data-enhanced-contrast": ""
  }, {});
  let H = D === FFileType.WHITEBOARD || getFeatureFlags().a11y_design_dom_mirror && D === FFileType.DESIGN || B;
  return jsx(ModalRootComponent, {
    manager: U,
    width: "md",
    ...V,
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: renderI18nText("fullscreen.accessibility_settings.dialog_title")
        })
      }), jsx(DialogBody, {
        children: jsxs("div", {
          className: cssBuilderInstance.pb8.$,
          children: [H && jsxs(_$$d, {
            disabled: "platform_error" === P,
            checked: r,
            onChange: (e, {
              source: t
            }) => {
              trackAccessibilityEvent(e ? AccessibilityActionType.TOGGLE_DOM_ON_MENU : AccessibilityActionType.TOGGLE_DOM_OFF_MENU, {
                isMouseEvent: "mouse" === t
              });
              x(e);
            },
            label: jsx(Label, {
              children: renderI18nText("fullscreen.accessibility_settings.enable_screenreader_label")
            }),
            ref: R,
            children: ["platform_error" === P ? getI18nString("fullscreen.accessibility.platform_error") : G, "render_error" === P && jsx("span", {
              role: "alert",
              className: cssBuilderInstance.block.mt8.$,
              children: jsx(TextWithTruncation, {
                color: "danger",
                children: renderI18nText("fullscreen.accessibility.dom_error")
              })
            })]
          }), getFeatureFlags().fpl_enhanced_contrast_toggle && jsx(_$$d, {
            checked: enhancedContrast,
            onChange: (e, {
              source: t
            }) => {
              trackAccessibilityEvent(e ? AccessibilityActionType.TOGGLE_ENHANCED_CONTRAST_ON : AccessibilityActionType.TOGGLE_ENHANCED_CONTRAST_OFF, {
                isMouseEvent: "mouse" === t
              });
              L(fK({
                enhancedContrast: e,
                userInitiated: !0
              }));
            },
            label: jsx(Label, {
              children: renderI18nText("fullscreen.accessibility_settings.enhanced_contrast_label")
            }),
            ref: R,
            children: getI18nString("fullscreen.accessibility_settings.enhanced_contrast_description")
          }), getFeatureFlags().a11y_spotlight_timing_settings && jsxs("div", {
            className: "x78zum5 x1gskr33",
            children: [jsx("div", {
              className: "xdvn7xf xctkrei",
              children: jsx(InputComponent, {
                type: "number",
                value: (C / 1e3).toString(),
                onChange: e => {
                  0 >= parseInt(e) || (w(1e3 * parseInt(e)), O(1e3 * parseInt(e)));
                },
                id: "spotlight-notification-duration-input"
              })
            }), jsxs("div", {
              className: "x78zum5 xdt5ytf x1gskr33",
              children: [jsx("span", {
                className: "x1ihwiht",
                children: jsx(Label, {
                  htmlFor: "spotlight-notification-duration-input",
                  children: getI18nString("collaboration.spotlight.set_delay_label")
                })
              }), jsxs("span", {
                children: [" ", getI18nString("collaboration.spotlight.set_delay_description")]
              })]
            })]
          })]
        })
      })]
    })
  });
}, "ACCESSIBILITY_SETTINGS", ModalSupportsBackground.YES);
export const L = $$C0;