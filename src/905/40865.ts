import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { Button } from "../905/521428";
import { renderI18nText } from "../905/303541";
import { hideModalHandler } from "../905/156213";
import { registerModal } from "../905/102752";
import { Vq } from "../figma_app/639088";
export let $$m0 = registerModal(function (e) {
  let t = useDispatch();
  let i = useModalManager(e);
  let u = e.folder.viewOnlyAt;
  let m = jsx("span", {
    className: Vq,
    children: e.folder.path
  });
  return jsx(ModalRootComponent, {
    manager: i,
    width: "md",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: renderI18nText("file_browser.block_project_move.title")
        })
      }), jsx(nB, {
        children: u ? renderI18nText("file_browser.block_project_move.context_view_only", {
          projectName: m
        }) : renderI18nText("file_browser.block_project_move.context_invite_only", {
          projectName: m
        })
      }), jsx(wi, {
        children: jsx(jk, {
          children: jsx(Button, {
            variant: "primary",
            onClick: () => {
              t(hideModalHandler());
            },
            children: renderI18nText("modal.cancel")
          })
        })
      })]
    })
  });
}, "BlockMovingPrivateProjectModal");
export const z = $$m0;