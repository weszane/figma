import { registerModal } from "../905/102752";
import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch } from "../vendor/514228";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { K as _$$K } from "../905/443068";
import { $n } from "../905/521428";
import { a as _$$a } from "../905/5627";
import { BrowserInfo } from "../figma_app/778880";
import { renderI18nText, getI18nString } from "../905/303541";
import { Y } from "../905/830372";
import { E as _$$E } from "../905/984674";
import { lW } from "../figma_app/11182";
import { popModalStack } from "../905/156213";
import { M } from "../figma_app/170366";
import { Ib } from "../905/129884";
export let $$y0 = registerModal(function (e) {
  let {
    localPlugin
  } = e;
  let r = useDispatch();
  let y = hS({
    open: e.open,
    onClose: e.onClose
  });
  let {
    error
  } = getI18nString;
  if (!error) return null;
  let T = M();
  let I = !!T?.isCompatibleWith({
    desktopVersion: 80
  });
  let S = BrowserInfo.mac ? renderI18nText("universal_insert.show_in_finder") : renderI18nText("universal_insert.show_in_explorer");
  return jsx(bL, {
    manager: y,
    width: "md",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: getI18nString("universal_insert.manifest_error_title")
        })
      }), jsx(nB, {
        children: jsxs(Y, {
          direction: "horizontal",
          horizontalAlignItems: "space-between",
          width: "fill-parent",
          verticalAlignItems: "start",
          children: [jsx(Y, {
            backgroundColor: "secondary",
            padding: 4,
            width: "fill-parent",
            cornerRadius: 3,
            children: jsx(_$$E, {
              color: "secondary",
              fontSize: 13,
              fontFamily: "monospace",
              children: error.text
            })
          }), jsx(_$$K, {
            onClick: () => {
              r(lW({
                stringToCopy: error.text
              }));
            },
            "aria-label": getI18nString("inspect_panel.copy"),
            htmlAttributes: {
              "data-tooltip-type": Ib.TEXT,
              "data-tooltip": getI18nString("inspect_panel.copy")
            },
            children: jsx(_$$a, {})
          })]
        })
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx($n, {
            onClick: () => r(popModalStack()),
            variant: "secondary",
            children: renderI18nText("universal_insert.cancel")
          }), jsx($n, {
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