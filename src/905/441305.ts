import { jsx, jsxs } from "react/jsx-runtime";
import { hS } from "../905/437088";
import { X } from "../905/128376";
import { bL, Rq } from "../905/38914";
import { Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { $n } from "../905/521428";
import { qP } from "../figma_app/806412";
import { kt } from "../figma_app/858013";
import { renderI18nText } from "../905/303541";
export function $$p0({
  open: e,
  width: t = "md",
  title: i = renderI18nText("modal.are_you_sure"),
  cancelText: p = renderI18nText("modal.cancel"),
  ...m
}) {
  let h = m.autofocusConfirm ?? !m.destructive;
  let g = qP(m.recordingKey, "confirm", e => {
    m.onConfirm(e);
    e.defaultPrevented || m.onClose();
  });
  let f = qP(m.recordingKey, "cancel", () => {
    m.onCancel?.();
    m.onClose();
  });
  let _ = hS({
    open: e,
    onClose: f
  });
  let A = X();
  return jsx(bL, {
    manager: _,
    width: t,
    height: m.height,
    children: jsxs(Rq, {
      onSubmit: g,
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: i
        })
      }), jsx(nB, {
        children: m.children
      }), jsxs(wi, {
        children: [m.footerText, jsxs(jk, {
          children: [jsx($n, {
            variant: "secondary",
            onClick: f,
            ref: h ? void 0 : A,
            children: p
          }), m.isLoading ? jsxs($n, {
            disabled: !0,
            children: [jsx(kt, {
              className: m.loadingText ? "confirmation_modal--spinnerWithText--8t9yx confirmation_modal--spinner--E3om4" : "confirmation_modal--spinner--E3om4"
            }), m.loadingText]
          }) : jsx($n, {
            type: "submit",
            disabled: m.disableConfirm,
            variant: m.destructive ? "destructive" : "primary",
            ref: h ? A : void 0,
            children: m.confirmText
          })]
        })]
      })]
    })
  });
}
export const R = $$p0;