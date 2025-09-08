import { jsx, jsxs } from "react/jsx-runtime";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, r1, nB } from "../figma_app/272243";
import { registerModal } from "../905/102752";
let $$l1 = "/legal/privacy";
let $$d3 = "/legal/tos";
let $$c2 = "/legal/reader-mode/privacy";
let $$u4 = "/legal/reader-mode/tos";
let $$p0 = registerModal(function (e) {
  let t = hS(e);
  return jsx(bL, {
    manager: t,
    width: 420,
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(r1, {
          children: e.title
        })
      }), jsx(nB, {
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