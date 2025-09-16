import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { t as _$$t } from "../905/150656";
import { UserInterfaceElements } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { generateRecordingKey } from "../figma_app/878298";
import { renderI18nText } from "../905/303541";
import { isWhiteboardFileType, isDesignFileType } from "../figma_app/976749";
import { _6 } from "../figma_app/386952";
import { pk, Qr } from "../figma_app/598952";
import { isFullscreenSitesView } from "../905/561485";
import { U } from "../figma_app/964810";
let $$p0 = UserInterfaceElements.ASSETS.toString();
let $$x1 = UserInterfaceElements.CHAT.toString();
let h = UserInterfaceElements.CODE.toString();
let $$f2 = UserInterfaceElements.LAYERS.toString();
export function $$b3({
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
        ...t[$$f2],
        htmlAttributes: {
          "data-testid": pk
        },
        children: renderI18nText("fullscreen.pages_panel.file_tab")
      }), jsx(_$$t.Tab, {
        ...t[h],
        children: renderI18nText("fullscreen.pages_panel.code_tab")
      }), jsx(_$$t.Tab, {
        ...t[$$p0],
        onboardingKey: Qr,
        children: renderI18nText("fullscreen.pages_panel.assets_tab")
      }), jsx(_$$t.Tab, {
        ...t[$$x1],
        children: renderI18nText("fullscreen.pages_panel.chat_tab")
      })]
    })
  });
}
export function $$y4(e, t) {
  let s = _6();
  let {
    showPublish,
    showLayersPanel,
    showCodePanel,
    showChat
  } = U();
  let y = isFullscreenSitesView(s);
  let j = !!getFeatureFlags().sts_code;
  let S = isWhiteboardFileType();
  let v = isDesignFileType();
  let w = getFeatureFlags().ai_assistant || !1;
  let N = useCallback(e => {
    switch (parseInt(e)) {
      case UserInterfaceElements.LAYERS:
        showLayersPanel();
        break;
      case UserInterfaceElements.CODE:
        showCodePanel();
        break;
      case UserInterfaceElements.ASSETS:
        showPublish();
        break;
      case UserInterfaceElements.CHAT:
        showChat();
        break;
      default:
        (t => {
          throw Error("Unhandled tab behavior: " + e);
        })(0);
    }
  }, [showLayersPanel, showCodePanel, showPublish, showChat]);
  return _$$t.useManagedTabs({
    [$$f2]: !0,
    [h]: y && j,
    [$$p0]: !S,
    [$$x1]: v && w && !1
  }, e.toString(), N, {
    recordingKey: generateRecordingKey(t, "tabs")
  });
}
export const ay = $$p0;
export const n8 = $$x1;
export const FV = $$f2;
export const eG = $$b3;
export const BN = $$y4;