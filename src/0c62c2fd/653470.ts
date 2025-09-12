import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useMemo, useCallback } from "react";
import { throwTypeError } from "../figma_app/465776";
import { U } from "../905/807535";
import { useModalManager } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { b as _$$b, c as _$$c } from "../905/308099";
import { q } from "../905/932270";
import { Label } from "../905/270045";
import { WhiteboardIntegrationType } from "../figma_app/763686";
import { s as _$$s } from "../cssbuilder/589278";
import { $z } from "../figma_app/617427";
import { getI18nString, renderI18nText } from "../905/303541";
import { c as _$$c2 } from "../905/370443";
export function $$x0({
  fileImportDescription: e,
  onConfirm: t,
  onCancel: r
}) {
  let [x, b] = useState(void 0);
  let v = useMemo(() => {
    let e = U(WhiteboardIntegrationType).map(e => ({
      key: e,
      value: WhiteboardIntegrationType[e],
      label: function (e) {
        switch (e) {
          case WhiteboardIntegrationType.MIRO:
            return "Miro";
          case WhiteboardIntegrationType.MURAL:
            return "Mural";
          case WhiteboardIntegrationType.LUCID:
            return "Lucid";
          case WhiteboardIntegrationType.JAMBOARD:
            return "Jamboard";
          case WhiteboardIntegrationType.UNKNOWN:
            return getI18nString("file_browser.file_import_view.select_pdf_source_input_unknown_value");
          default:
            throwTypeError(e);
        }
      }(e)
    }));
    e.sort((e, t) => e.key === t.key ? 0 : e.key === WhiteboardIntegrationType.UNKNOWN ? 1 : t.key === WhiteboardIntegrationType.UNKNOWN ? -1 : e.label.localeCompare(t.label));
    return e;
  }, []);
  let y = useCallback(e => {
    b(e);
  }, []);
  let w = useCallback(() => {
    x && t(WhiteboardIntegrationType[x]);
  }, [t, x]);
  let j = useModalManager({
    open: !0,
    onClose: r,
    preventUserClose: !0
  });
  return jsx(bL, {
    manager: j,
    width: "fit-content",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: getI18nString("file_browser.file_import_view.select_pdf_source_header")
        })
      }), jsx(nB, {
        children: jsxs("div", {
          className: _$$s.flex.flexColumn.pt4.gap16.textBodyMedium.$,
          children: [jsx("div", {
            children: e
          }), jsx("form", {
            className: _$$s.mb8.$,
            children: jsx(_$$b, {
              legend: jsx(q, {
                children: renderI18nText("file_browser.file_import_view.select_pdf_source_input_legend")
              }),
              value: x,
              onChange: y,
              children: v.map(e => jsx(_$$c, {
                value: e.value,
                label: jsx(Label, {
                  className: _$$s.textBodyMedium.$,
                  children: e.label
                }),
                children: e.key === WhiteboardIntegrationType.UNKNOWN && renderI18nText("file_browser.file_import_view.select_pdf_source_input_unknown_disclaimer")
              }, e.key))
            })
          })]
        })
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx($z, {
            variant: "secondary",
            onClick: r,
            trackingProperties: {
              trackingDescriptor: _$$c2.FILE_IMPORT_X_BUTTON,
              text: "dismiss"
            },
            children: renderI18nText("modal.cancel")
          }), jsx($z, {
            variant: "primary",
            disabled: !x,
            onClick: w,
            children: renderI18nText("modal.confirm")
          })]
        })
      })]
    })
  });
}
export const PdfConfirmationModal = $$x0;