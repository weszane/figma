import { registerModal } from "src/905/102752";
import { jsx, jsxs } from "react/jsx-runtime";
import { hS } from "src/905/437088";
import { bL } from "src/905/38914";
import { vo, Y9, hE, nB, wi, jk } from "src/figma_app/272243";
import { $n } from "src/905/521428";
import { renderI18nText } from "src/905/303541";
export let $$d0 = registerModal(function (e) {
  let {
    message,
    onClose
  } = e;
  let d = hS(e);
  return jsx(bL, {
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
          children: jsx($n, {
            onClick: onClose,
            children: renderI18nText("autosave.unable_to_leave_document.ok_button")
          })
        })
      })]
    })
  });
});
export const v = $$d0;
