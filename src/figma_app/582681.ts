import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setupAutofocusHandler } from "../905/128376";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB } from "../figma_app/272243";
import { d as _$$d } from "../905/49800";
import { Label } from "../905/270045";
import { p as _$$p } from "../905/185998";
import { G as _$$G } from "../905/289770";
import { getFeatureFlags } from "../905/601108";
import { useAtomValueAndSetter, Xr } from "../figma_app/27355";
import { f as _$$f, h as _$$h } from "../905/693155";
import { conditionalFeatureFlag } from "../figma_app/169182";
import { Fj, jI } from "../905/763714";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { E as _$$E } from "../905/984674";
import { fK } from "../905/469533";
import { lg } from "../figma_app/976749";
import { y as _$$y } from "../905/810168";
import { FFileType } from "../figma_app/191312";
import { registerModal, ModalSupportsBackground } from "../905/102752";
import { F2 } from "../905/826900";
export let $$C0 = registerModal(function ({
  open: e,
  onClose: t
}) {
  let [r, x] = _$$y();
  let [C, w] = useAtomValueAndSetter(Fj);
  let O = Xr(jI);
  let R = setupAutofocusHandler();
  let L = useDispatch();
  let P = useSelector(e => e.screenreader.errorType);
  let D = lg();
  let {
    enhancedContrast,
    color,
    brand
  } = _$$G();
  let j = useCallback(() => {
    D === FFileType.WHITEBOARD && F2.focusCustomCanvasFocusElement();
    t();
  }, [t, D]);
  let U = hS({
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
  return jsx(bL, {
    manager: U,
    width: "md",
    ...V,
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: renderI18nText("fullscreen.accessibility_settings.dialog_title")
        })
      }), jsx(nB, {
        children: jsxs("div", {
          className: _$$s.pb8.$,
          children: [H && jsxs(_$$d, {
            disabled: "platform_error" === P,
            checked: r,
            onChange: (e, {
              source: t
            }) => {
              _$$f(e ? _$$h.TOGGLE_DOM_ON_MENU : _$$h.TOGGLE_DOM_OFF_MENU, {
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
              className: _$$s.block.mt8.$,
              children: jsx(_$$E, {
                color: "danger",
                children: renderI18nText("fullscreen.accessibility.dom_error")
              })
            })]
          }), getFeatureFlags().fpl_enhanced_contrast_toggle && jsx(_$$d, {
            checked: enhancedContrast,
            onChange: (e, {
              source: t
            }) => {
              _$$f(e ? _$$h.TOGGLE_ENHANCED_CONTRAST_ON : _$$h.TOGGLE_ENHANCED_CONTRAST_OFF, {
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
              children: jsx(_$$p, {
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
