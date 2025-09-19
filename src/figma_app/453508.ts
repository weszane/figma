import { jsx, jsxs } from "react/jsx-runtime";
import { useSelector, useDispatch } from "react-redux";
import { useModalManager } from "../905/437088";
import { Link } from "../905/438674";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogHeader, DialogTitle, DialogBody } from "../figma_app/272243";
import { Button } from "../905/521428";
import { CorePerfInfo, DocumentMode } from "../figma_app/763686";
import { trackEventAnalytics } from "../905/449184";
import { customHistory } from "../905/612521";
import { getInitialOptions } from "../figma_app/169182";
import { BrowserInfo } from "../figma_app/778880";
import { generateRecordingKey } from "../figma_app/878298";
import { renderI18nText, getI18nString } from "../905/303541";
import { selectViewAction } from "../905/929976";
import { getEditorTypeFromView } from "../figma_app/976749";
import { useCurrentFileKey } from "../figma_app/516028";
import { FEditorType } from "../figma_app/53721";
import { registerLegacyModal } from "../905/102752";
import { E as _$$E } from "../905/191910";
import { j } from "../905/349918";
import { v0, pL } from "../figma_app/639088";
export function $$A0(e, t = {}) {
  trackEventAnalytics("memory_warning_event", {
    currentAllocatedBytes: CorePerfInfo?.getTotalUsedHeapMemory(),
    maxAllocatedBytes: CorePerfInfo?.getMaxUsedHeapMemory(),
    ...e,
    ...t
  });
}
var x = (e => (e.SHOW_RELOAD = "showReload", e.SHOW_RECOVERY_MODE = "showRecoveryMode", e.SHOW_BROWSER_UPGRADE_AND_DESKTOP_DOWNLOAD = "showBrowserUpgradeAndDesktop", e))(x || {});
export let $$N1 = "memory-warning-modal";
export function $$C2(e) {
  let t = useModalManager({
    open: !0,
    preventUserClose: !0,
    onClose: () => {}
  });
  let r = useSelector(e => e.mirror.appModel.isReadOnly);
  let u = useSelector(e => e.selectedView);
  let T = getEditorTypeFromView(u) === FEditorType.Design;
  let x = useCurrentFileKey() || getInitialOptions().editing_file?.source_file?.key || "";
  let N = useDispatch();
  let C = {
    view: "fullscreen",
    editorType: T ? FEditorType.Design : FEditorType.Whiteboard,
    fileKey: x,
    isRecoveryMode: !0
  };
  let w = CorePerfInfo?.getHeapMemoryMode() === DocumentMode.RECOVERY;
  let O = r || w ? "showReload" : BrowserInfo.isWasm4gbSupported ? "showRecoveryMode" : "showBrowserUpgradeAndDesktop";
  let R = jsx(Link, {
    href: BrowserInfo.mac ? "/download/desktop/mac" : "/download/desktop/win",
    newTab: !0,
    children: renderI18nText("memory_warning_modal.desktop_app_download_link")
  });
  let L = "showReload" === O ? {
    title: getI18nString("memory_warning_modal.reload_modal_title"),
    content: getI18nString("memory_warning_modal.reload_modal_content"),
    contentCTA: getI18nString("memory_warning_modal.reload_modal_content_cta"),
    buttonCTA: getI18nString("memory_warning_modal.reload_page_button"),
    secondaryButtonCTA: getI18nString("memory_warning_modal.learn_more"),
    buttonExternalLink: null,
    secondaryButtonExternalLink: "https://help.figma.com/hc/articles/360040528173-Reduce-memory-usage-in-files/"
  } : "showRecoveryMode" === O ? {
    title: getI18nString("memory_warning_modal.recovery_mode_modal_title"),
    content: getI18nString("memory_warning_modal.recovery_mode_modal_out_of_memory"),
    contentCTA: getI18nString("memory_warning_modal.recovery_mode_modal_content"),
    buttonCTA: getI18nString("memory_warning_modal.recovery_mode_button"),
    secondaryButtonCTA: getI18nString("memory_warning_modal.learn_more"),
    buttonExternalLink: null,
    secondaryButtonExternalLink: "https://help.figma.com/hc/articles/360040528173-Reduce-memory-usage-in-files/"
  } : {
    title: getI18nString("memory_warning_modal.old_browser_out_of_memory_modal_title"),
    content: getI18nString("memory_warning_modal.old_browser_out_of_memory_modal_content"),
    contentCTA: null,
    buttonCTA: getI18nString("memory_warning_modal.old_browser_primary_button_cta"),
    secondaryButtonCTA: null,
    buttonExternalLink: BrowserInfo.browserType && {
      chrome: "https://support.google.com/chrome/answer/95414",
      safari: "https://support.apple.com/en-us/HT204416",
      firefox: "https://support.mozilla.org/en-US/kb/update-firefox-latest-release",
      msedge: "https://support.microsoft.com/en-us/topic/update-to-the-new-microsoft-edge-182d0668-e3f0-49da-b8bb-db5675245dc2"
    }[BrowserInfo.browserType] || null,
    secondaryButtonExternalLink: null
  };
  return e.isBranching ? jsx(_$$E, {}) : jsx(ModalRootComponent, {
    manager: t,
    width: "lg",
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: L.title
        })
      }), jsxs(DialogBody, {
        children: [jsxs("div", {
          className: j,
          children: [jsxs("div", {
            children: [L.content, jsx("br", {}), "\xa0", jsx("br", {})]
          }), "showBrowserUpgradeAndDesktop" === O ? renderI18nText("memory_warning_modal.old_browser_out_of_memory_modal_content_cta_and_download_desktop", {
            desktopAppLink: R
          }) : L.contentCTA, jsx("br", {})]
        }), jsxs("div", {
          className: v0,
          children: [L.secondaryButtonCTA && L.secondaryButtonExternalLink && jsx(Link.Button, {
            onClick: () => {
              L.secondaryButtonCTA === getI18nString("memory_warning_modal.learn_more") && $$A0({
                warningEvent: "LEARN_MORE",
                fileKey: x
              }, {
                isReadOnly: r
              });
            },
            recordingKey: generateRecordingKey(e, "crash"),
            href: L.secondaryButtonExternalLink,
            newTab: !0,
            variant: "secondary",
            children: L.secondaryButtonCTA
          }), jsx("div", {
            className: pL,
            children: L.buttonExternalLink ? jsx(Link.Button, {
              variant: "primary",
              href: L.buttonExternalLink,
              newTab: !0,
              recordingKey: generateRecordingKey(e, "crash"),
              children: L.buttonCTA
            }) : jsx(Button, {
              variant: "primary",
              recordingKey: generateRecordingKey(e, "crash"),
              onClick: () => {
                L.buttonCTA === getI18nString("memory_warning_modal.recovery_mode_button") && $$A0({
                  warningEvent: "OPEN_RECOVERY_MODE",
                  fileKey: x
                }, {
                  isReadOnly: r
                });
                ("showRecoveryMode" === O || r) && N(selectViewAction(C));
                ("showReload" === O || "showRecoveryMode" === O) && customHistory.reload("Memory warning panel");
              },
              children: L.buttonCTA
            })
          })]
        })]
      })]
    })
  });
}
registerLegacyModal($$N1, e => {
  let {
    isBranching
  } = e.modalShown.data;
  return jsx($$C2, {
    isBranching
  });
});
export const $w = $$A0;
export const Lu = $$N1;
export const PG = $$C2;