import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useMemo, useCallback } from "react";
import { xb } from "../figma_app/465776";
import { U } from "../905/807535";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { b as _$$b, c as _$$c } from "../905/308099";
import { q } from "../905/932270";
import { J } from "../905/270045";
import { h62 } from "../figma_app/763686";
import { s as _$$s } from "../cssbuilder/589278";
import { $z } from "../figma_app/617427";
import { t as _$$t, tx } from "../905/303541";
import { c as _$$c2 } from "../905/370443";
export function $$x0({
  fileImportDescription: e,
  onConfirm: t,
  onCancel: r
}) {
  let [x, b] = useState(void 0);
  let v = useMemo(() => {
    let e = U(h62).map(e => ({
      key: e,
      value: h62[e],
      label: function (e) {
        switch (e) {
          case h62.MIRO:
            return "Miro";
          case h62.MURAL:
            return "Mural";
          case h62.LUCID:
            return "Lucid";
          case h62.JAMBOARD:
            return "Jamboard";
          case h62.UNKNOWN:
            return _$$t("file_browser.file_import_view.select_pdf_source_input_unknown_value");
          default:
            xb(e);
        }
      }(e)
    }));
    e.sort((e, t) => e.key === t.key ? 0 : e.key === h62.UNKNOWN ? 1 : t.key === h62.UNKNOWN ? -1 : e.label.localeCompare(t.label));
    return e;
  }, []);
  let y = useCallback(e => {
    b(e);
  }, []);
  let w = useCallback(() => {
    x && t(h62[x]);
  }, [t, x]);
  let j = hS({
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
          children: _$$t("file_browser.file_import_view.select_pdf_source_header")
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
                children: tx("file_browser.file_import_view.select_pdf_source_input_legend")
              }),
              value: x,
              onChange: y,
              children: v.map(e => jsx(_$$c, {
                value: e.value,
                label: jsx(J, {
                  className: _$$s.textBodyMedium.$,
                  children: e.label
                }),
                children: e.key === h62.UNKNOWN && tx("file_browser.file_import_view.select_pdf_source_input_unknown_disclaimer")
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
            children: tx("modal.cancel")
          }), jsx($z, {
            variant: "primary",
            disabled: !x,
            onClick: w,
            children: tx("modal.confirm")
          })]
        })
      })]
    })
  });
}
export const PdfConfirmationModal = $$x0;