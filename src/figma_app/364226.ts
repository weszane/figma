import { registerModal } from "../905/102752";
import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogActionStrip } from "../figma_app/272243";
import { IconButton } from "../905/443068";
import { Button } from "../905/521428";
import { a as _$$a } from "../905/5627";
import { BrowserInfo } from "../figma_app/778880";
import { renderI18nText, getI18nString } from "../905/303541";
import { AutoLayout } from "../905/470281";
import { TextWithTruncation } from "../905/984674";
import { lW } from "../figma_app/11182";
import { popModalStack } from "../905/156213";
import { getPluginManager } from "../figma_app/170366";
import { KindEnum } from "../905/129884";
export let $$y0 = registerModal(function (e) {
  let {
    localPlugin
  } = e;
  let r = useDispatch<AppDispatch>();
  let y = useModalManager({
    open: e.open,
    onClose: e.onClose
  });
  let {
    error
  } = getI18nString;
  if (!error) return null;
  let T = getPluginManager();
  let I = !!T?.isCompatibleWith({
    desktopVersion: 80
  });
  let S = BrowserInfo.mac ? renderI18nText("universal_insert.show_in_finder") : renderI18nText("universal_insert.show_in_explorer");
  return jsx(ModalRootComponent, {
    manager: y,
    width: "md",
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: getI18nString("universal_insert.manifest_error_title")
        })
      }), jsx(DialogBody, {
        children: jsxs(AutoLayout, {
          direction: "horizontal",
          horizontalAlignItems: "space-between",
          width: "fill-parent",
          verticalAlignItems: "start",
          children: [jsx(AutoLayout, {
            backgroundColor: "secondary",
            padding: 4,
            width: "fill-parent",
            cornerRadius: 3,
            children: jsx(TextWithTruncation, {
              color: "secondary",
              fontSize: 13,
              fontFamily: "monospace",
              children: error.text
            })
          }), jsx(IconButton, {
            onClick: () => {
              r(lW({
                stringToCopy: error.text
              }));
            },
            "aria-label": getI18nString("inspect_panel.copy"),
            htmlAttributes: {
              "data-tooltip-type": KindEnum.TEXT,
              "data-tooltip": getI18nString("inspect_panel.copy")
            },
            children: jsx(_$$a, {})
          })]
        })
      }), jsx(DialogFooter, {
        children: jsxs(DialogActionStrip, {
          children: [jsx(Button, {
            onClick: () => r(popModalStack()),
            variant: "secondary",
            children: renderI18nText("universal_insert.cancel")
          }), jsx(Button, {
            onClick: () => {
              I ? T?.openExtensionManifest(localPlugin.localFileId) : T?.openExtensionDirectory(localPlugin.localFileId);
            },
            variant: "primary",
            children: I ? renderI18nText("universal_insert.edit_manifest") : S
          })]
        })
      })]
    })
  });
}, "DevelopmentResourceErrorModal");
export const K = $$y0;
