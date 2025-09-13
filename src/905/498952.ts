import { jsx, jsxs } from "react/jsx-runtime";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { Button } from "../905/521428";
import { qr, YA, hM } from "../figma_app/827447";
import { renderI18nText } from "../905/303541";
import { registerModal } from "../905/102752";
let $$u1 = "IDLE_TIMEOUT_WARNING_MODAL";
let $$p0 = registerModal(function (e) {
  let t = useModalManager(e);
  let [i, c] = qr(e.duration);
  let u = YA(c, i);
  let p = {
    orgName: e.orgName,
    duration: u
  };
  let m = hM(e.duration) ? renderI18nText("idle_timeout.warning_modal.body_short_duration", p) : renderI18nText("idle_timeout.warning_modal.body", p);
  return jsx(ModalRootComponent, {
    manager: t,
    width: "md",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: renderI18nText("idle_timeout.warning_modal.title")
        })
      }), jsx(nB, {
        children: m
      }), jsx(wi, {
        children: jsx(jk, {
          children: jsx(Button, {
            variant: "primary",
            onClick: e.onHide,
            children: renderI18nText("idle_timeout.warning_modal.button")
          })
        })
      })]
    })
  });
}, $$u1);
export const eN = $$p0;
export const xn = $$u1;