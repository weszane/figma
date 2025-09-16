import { jsx, jsxs } from "react/jsx-runtime";
import { useModalManager } from "../905/437088";
import { N } from "../905/438674";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogHeader, DialogTitle, DialogBody } from "../figma_app/272243";
import { useSubscription } from "../figma_app/288654";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
import { TrackingProvider } from "../figma_app/831799";
import { BlockConnectedFileMove } from "../figma_app/43951";
import { Yw } from "../905/615608";
export function $$p0(e) {
  let t = useModalManager(e);
  let r = useSubscription(BlockConnectedFileMove, {
    fileKey: e.fileKey
  });
  let p = r?.data?.file?.project?.name;
  let f = r?.data?.file?.plan?.name;
  return jsx(TrackingProvider, {
    name: "Block Connected File Move Modal",
    children: jsx(ModalRootComponent, {
      manager: t,
      width: "md",
      children: jsxs(DialogContents, {
        children: [jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: p ? renderI18nText("resource_connection.block_file_move.unable_to_move_out_of_project_name", {
              projectName: p
            }) : renderI18nText("resource_connection.block_file_move.unable_to_move_out_of_this_project")
          })
        }), jsx(DialogBody, {
          className: Yw,
          children: jsx("div", {
            className: _$$s.mt4.mb4.$,
            children: renderI18nText("resource_connection.block_file_move.learn_more_about_what_you_can_do_in_connected_projects", {
              learnMore: jsx(N, {
                href: "https://help.figma.com/hc/articles/30124855491863-Guide-to-connected-projects",
                children: renderI18nText("resource_connection.request_modal.learn_more")
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