import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { t as _$$t } from "../905/150656";
import { xae } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { Pt } from "../figma_app/806412";
import { renderI18nText } from "../905/303541";
import { ow, Em } from "../figma_app/976749";
import { _6 } from "../figma_app/386952";
import { pk, Qr } from "../figma_app/598952";
import { Vj } from "../905/561485";
import { U } from "../figma_app/964810";
let $$y0 = xae.ASSETS.toString();
let $$m1 = xae.CHAT.toString();
let f = xae.CODE.toString();
let $$b2 = xae.LAYERS.toString();
export function $$x3({
  tabManager: e,
  tabPropsMap: t
}) {
  return jsx("div", {
    className: "ui3_tabs--tabStrip--zypFK",
    onContextMenu: e => {
      e.preventDefault();
      e.stopPropagation();
    },
    children: jsxs(_$$t.TabStrip, {
      manager: e,
      children: [jsx(_$$t.Tab, {
        ...t[$$b2],
        htmlAttributes: {
          "data-testid": pk
        },
        children: renderI18nText("fullscreen.pages_panel.file_tab")
      }), jsx(_$$t.Tab, {
        ...t[f],
        children: renderI18nText("fullscreen.pages_panel.code_tab")
      }), jsx(_$$t.Tab, {
        ...t[$$y0],
        onboardingKey: Qr,
        children: renderI18nText("fullscreen.pages_panel.assets_tab")
      }), jsx(_$$t.Tab, {
        ...t[$$m1],
        children: renderI18nText("fullscreen.pages_panel.chat_tab")
      })]
    })
  });
}
export function $$v4(e, t) {
  let s = _6();
  let {
    showPublish,
    showLayersPanel,
    showCodePanel,
    showChat
  } = U();
  let v = Vj(s);
  let _ = !!getFeatureFlags().sts_code;
  let T = ow();
  let k = Em();
  let E = getFeatureFlags().ai_assistant || !1;
  let S = useCallback(e => {
    switch (parseInt(e)) {
      case xae.LAYERS:
        showLayersPanel();
        break;
      case xae.CODE:
        showCodePanel();
        break;
      case xae.ASSETS:
        showPublish();
        break;
      case xae.CHAT:
        showChat();
        break;
      default:
        (t => {
          throw Error("Unhandled tab behavior: " + e);
        })(0);
    }
  }, [showLayersPanel, showCodePanel, showPublish, showChat]);
  return _$$t.useManagedTabs({
    [$$b2]: !0,
    [f]: v && _,
    [$$y0]: !T,
    [$$m1]: k && E && !1
  }, e.toString(), S, {
    recordingKey: Pt(t, "tabs")
  });
}
export const ay = $$y0;
export const n8 = $$m1;
export const FV = $$b2;
export const eG = $$x3;
export const BN = $$v4;