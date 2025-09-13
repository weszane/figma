import { registerModal } from "../905/102752";
import { jsx, jsxs } from "react/jsx-runtime";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { Button } from "../905/521428";
import { renderI18nText } from "../905/303541";
export let $$d0 = registerModal(function (e) {
  let {
    message,
    onClose
  } = e;
  let d = useModalManager(e);
  return jsx(ModalRootComponent, {
    width: "sm",
    manager: d,
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: renderI18nText("autosave.unable_to_leave_document.title")
        })
      }), jsx(nB, {
        children: message
      }), jsx(wi, {
        children: jsx(jk, {
          children: jsx(Button, {
            onClick: onClose,
            children: renderI18nText("autosave.unable_to_leave_document.ok_button")
          })
        })
      })]
    })
  });
});
export const v = $$d0;