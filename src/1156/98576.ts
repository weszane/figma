import { jsx, jsxs } from "react/jsx-runtime";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB } from "../figma_app/272243";
import { getI18nString } from "../905/303541";
import { registerModal } from "../905/102752";
import { K } from "../1156/668894";
export let $$d0 = registerModal(function (e) {
  let t = hS(e);
  return jsx(bL, {
    manager: t,
    width: 386,
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: getI18nString("figmake.connect_existing_projects_modal.title")
        })
      }), jsx(nB, {
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