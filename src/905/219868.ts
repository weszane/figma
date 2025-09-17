import { jsx, jsxs } from "react/jsx-runtime";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogHeader, DialogHiddenTitle, DialogBody } from "../figma_app/272243";
import { registerModal } from "../905/102752";
let $$l1 = "/legal/privacy";
let $$d3 = "/legal/tos";
let $$c2 = "/legal/reader-mode/privacy";
let $$u4 = "/legal/reader-mode/tos";
let $$p0 = registerModal(function (e) {
  let t = useModalManager(e);
  return jsx(ModalRootComponent, {
    manager: t,
    width: 420,
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogHiddenTitle, {
          children: e.title
        })
      }), jsx(DialogBody, {
        padding: 0,
        children: jsx("iframe", {
          className: "google_device_disclaimer_modals--iframeContainer--0XCRs",
          title: e.title,
          src: e.url
        })
      })]
    })
  });
}, "GOOGLE_DEVICE_IFRAME_MODAL");
export const kn = $$p0;
export const JD = $$l1;
export const bO = $$c2;
export const Uw = $$d3;
export const A = $$u4;