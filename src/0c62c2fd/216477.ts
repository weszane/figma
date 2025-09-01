import { jsx, jsxs } from "react/jsx-runtime";
import { hS } from "../905/437088";
import { N } from "../905/438674";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB } from "../figma_app/272243";
import { Rs } from "../figma_app/288654";
import { s as _$$s } from "../cssbuilder/589278";
import { tx } from "../905/303541";
import { fu } from "../figma_app/831799";
import { s0Z } from "../figma_app/43951";
import { Yw } from "../905/615608";
export function $$p0(e) {
  let t = hS(e);
  let r = Rs(s0Z, {
    fileKey: e.fileKey
  });
  let p = r?.data?.file?.project?.name;
  let f = r?.data?.file?.plan?.name;
  return jsx(fu, {
    name: "Block Connected File Move Modal",
    children: jsx(bL, {
      manager: t,
      width: "md",
      children: jsxs(vo, {
        children: [jsx(Y9, {
          children: jsx(hE, {
            children: p ? tx("resource_connection.block_file_move.unable_to_move_out_of_project_name", {
              projectName: p
            }) : tx("resource_connection.block_file_move.unable_to_move_out_of_this_project")
          })
        }), jsx(nB, {
          className: Yw,
          children: jsx("div", {
            className: _$$s.mt4.mb4.$,
            children: tx("resource_connection.block_file_move.learn_more_about_what_you_can_do_in_connected_projects", {
              learnMore: jsx(N, {
                href: "https://help.figma.com/hc/articles/30124855491863-Guide-to-connected-projects",
                children: tx("resource_connection.request_modal.learn_more")
              }),
              hostPlanName: f ?? ""
            })
          })
        })]
      })
    })
  });
}
export const BlockConnectedFileMoveModal = $$p0;