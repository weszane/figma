import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch, useSelector } from "../vendor/514228";
import { R } from "../905/307199";
import { P } from "../905/347284";
import { t as _$$t, tx } from "../905/303541";
import { Ce } from "../905/156213";
import { o as _$$o } from "../905/524481";
import { g } from "../905/763242";
import { yX } from "../figma_app/918700";
let u = "shared_fonts_upload_error_modal--errorColumnFile--h0Its";
let m = "shared_fonts_upload_error_modal--errorColumnMessage--ObLuS";
export function $$p0() {
  let e = useDispatch();
  let t = useSelector(e => e.sharedFonts.unsuccessfulUploads);
  return jsx(yX, {
    confirmationTitle: _$$t("shared_fonts.upload_error_modal.title", {
      unsuccessfulUploads: t.length
    }),
    onConfirm: () => {
      e(_$$o());
      e(Ce());
    },
    confirmText: _$$t("shared_fonts.upload_error_modal.okay"),
    hideCancel: !0,
    size: 600,
    children: jsxs(P, {
      className: "shared_fonts_upload_error_modal--scrollContainer--Dv-bm",
      children: [jsxs("div", {
        className: "shared_fonts_upload_error_modal--modalHeaderRow--sUF-- text--fontPos10--s1PI5 text--_fontBase--QdLsd shared_fonts_upload_error_modal--_row--Qn5-U",
        children: [jsx("div", {
          className: u,
          children: tx("shared_fonts.upload_error_modal.font")
        }), jsx("div", {
          className: m,
          children: tx("shared_fonts.upload_error_modal.error")
        })]
      }), t.map(e => jsxs("div", {
        className: "shared_fonts_upload_error_modal--row--P1Dqx text--fontPos11--2LvXf text--_fontBase--QdLsd shared_fonts_upload_error_modal--_row--Qn5-U",
        children: [jsx("div", {
          className: u,
          children: jsx(R, {
            text: e.filename
          })
        }), jsx("div", {
          className: m,
          children: g(e.status)
        })]
      }, e.filename))]
    })
  });
}
export const FontUploadReviewErrorsModal = $$p0;