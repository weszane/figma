import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch } from "../vendor/514228";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { $n } from "../905/521428";
import { renderI18nText } from "../905/303541";
import { AS } from "../905/156213";
import { Ju } from "../905/102752";
import { Vq } from "../figma_app/639088";
export let $$m0 = Ju(function (e) {
  let t = useDispatch();
  let i = hS(e);
  let u = e.folder.viewOnlyAt;
  let m = jsx("span", {
    className: Vq,
    children: e.folder.path
  });
  return jsx(bL, {
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
          children: jsx($n, {
            variant: "primary",
            onClick: () => {
              t(AS());
            },
            children: renderI18nText("modal.cancel")
          })
        })
      })]
    })
  });
}, "BlockMovingPrivateProjectModal");
export const z = $$m0;