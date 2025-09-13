import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { vo, nB } from "../figma_app/272243";
import { buildUploadUrl } from "../figma_app/169182";
import { k } from "../905/585996";
import { lR } from "../figma_app/617427";
import { renderI18nText } from "../905/303541";
import { hideModal } from "../905/156213";
import { fu } from "../figma_app/831799";
import { registerModal } from "../905/102752";
import { Dg, Sl, FS, DX, Kc } from "../905/989426";
export let $$f0 = registerModal(function (e) {
  let t = useDispatch();
  let i = useModalManager({
    ...e,
    preventUserClose: !0
  });
  return jsx(fu, {
    name: "google_device_try_file_claim_success_modal",
    children: jsx(ModalRootComponent, {
      width: 420,
      manager: i,
      children: jsx(vo, {
        children: jsxs(nB, {
          padding: 32,
          children: [jsx("div", {
            className: Dg,
            children: jsx("img", {
              className: Sl,
              src: buildUploadUrl("e94b4d90f07d46f80c5d4d47a16ee2cd8df688bf"),
              alt: ""
            })
          }), jsx(k, {
            multiple: 2
          }), jsx("div", {
            className: FS,
            children: jsxs("h1", {
              className: DX,
              children: [renderI18nText("google_device_try_file_modal.claim_success.header"), " "]
            })
          }), jsx(k, {
            multiple: 1
          }), jsx("div", {
            className: FS,
            children: jsx("div", {
              className: Kc,
              children: renderI18nText("google_device_try_file_modal.claim_success.description")
            })
          }), jsx(k, {
            multiple: 3
          }), jsx(lR, {
            onClick: e => {
              e.preventDefault();
              e.stopPropagation();
              t(hideModal());
            },
            children: renderI18nText("google_device_try_file_modal.claim_success.button")
          })]
        })
      })
    })
  });
}, "GOOGLE_DEVICE_TRY_FILE_CLAIM_SUCCESS_MODAL");
export const $ = $$f0;