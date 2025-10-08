import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch, useSelector } from "react-redux";
import { CenterTruncatedText } from "../905/307199";
import { RecordingScrollContainer } from "../905/347284";
import { getI18nString, renderI18nText } from "../905/303541";
import { hideModal } from "../905/156213";
import { o as _$$o } from "../905/524481";
import { g } from "../905/763242";
import { ConfirmationModal2 } from "../figma_app/918700";
let u = "shared_fonts_upload_error_modal--errorColumnFile--h0Its";
let m = "shared_fonts_upload_error_modal--errorColumnMessage--ObLuS";
export function $$p0() {
  let e = useDispatch();
  let t = useSelector(e => e.sharedFonts.unsuccessfulUploads);
  return jsx(ConfirmationModal2, {
    confirmationTitle: getI18nString("shared_fonts.upload_error_modal.title", {
      unsuccessfulUploads: t.length
    }),
    onConfirm: () => {
      e(_$$o());
      e(hideModal());
    },
    confirmText: getI18nString("shared_fonts.upload_error_modal.okay"),
    hideCancel: !0,
    size: 600,
    children: jsxs(RecordingScrollContainer, {
      className: "shared_fonts_upload_error_modal--scrollContainer--Dv-bm",
      children: [jsxs("div", {
        className: "shared_fonts_upload_error_modal--modalHeaderRow--sUF-- text--fontPos10--s1PI5 text--_fontBase--QdLsd shared_fonts_upload_error_modal--_row--Qn5-U",
        children: [jsx("div", {
          className: u,
          children: renderI18nText("shared_fonts.upload_error_modal.font")
        }), jsx("div", {
          className: m,
          children: renderI18nText("shared_fonts.upload_error_modal.error")
        })]
      }), t.map(e => jsxs("div", {
        className: "shared_fonts_upload_error_modal--row--P1Dqx text--fontPos11--2LvXf text--_fontBase--QdLsd shared_fonts_upload_error_modal--_row--Qn5-U",
        children: [jsx("div", {
          className: u,
          children: jsx(CenterTruncatedText, {
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