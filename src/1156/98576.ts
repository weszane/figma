import { jsx, jsxs } from "react/jsx-runtime";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogHeader, DialogTitle, DialogBody } from "../figma_app/272243";
import { getI18nString } from "../905/303541";
import { registerModal } from "../905/102752";
import { K } from "../1156/668894";
export let $$d0 = registerModal(function (e) {
  let t = useModalManager(e);
  return jsx(ModalRootComponent, {
    manager: t,
    width: 386,
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: getI18nString("figmake.connect_existing_projects_modal.title")
        })
      }), jsx(DialogBody, {
        children: jsx("div", {
          className: "x1y1aw1k x1l90r2v",
          children: jsx(K, {
            onSubmit: e.onClose,
            toolCallId: e.toolCallId,
            toolName: e.toolName,
            trackingContext: e.trackingContext,
            source: e.source
          })
        })
      })]
    })
  });
}, "SupabaseConnectExistingProjectsModal");
export const Z = $$d0;