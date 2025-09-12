import { registerModal } from "../905/102752";
import { jsx, jsxs } from "react/jsx-runtime";
import { useModalManager } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { $n } from "../905/521428";
import { permissionScopeHandler } from "../905/189185";
import { renderI18nText, getI18nString } from "../905/303541";
import { fullscreenValue } from "../figma_app/455680";
export let $$u0 = registerModal(function (e) {
  let t = useModalManager({
    open: e.open,
    onClose: e.onClose,
    preventUserClose: !0
  });
  return jsx(bL, {
    manager: t,
    width: "lg",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: renderI18nText("fullscreen.fullscreen_view.restore_component_modal.restore_component")
        })
      }), jsx(nB, {
        children: jsx("div", {
          children: e.movedToFile ? jsxs("p", {
            children: [renderI18nText("fullscreen.fullscreen_view.restore_component_modal.this_component_was_moved", {
              otherFile: "another file" === e.movedToFile ? getI18nString("fullscreen.fullscreen_view.restore_component_modal.another_file") : jsx("strong", {
                children: `${e.movedToFile}`
              })
            }), jsx("br", {}), renderI18nText("fullscreen.fullscreen_view.restore_component_modal.accept_component_updates"), jsx("br", {}), jsx("br", {}), renderI18nText("fullscreen.fullscreen_view.restore_component_modal.restoring_will_allow")]
          }) : jsx("p", {
            children: renderI18nText("fullscreen.fullscreen_view.restore_component_modal.restore_the_main_component_to_continue_making_edits_to_it")
          })
        })
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx($n, {
            onClick: e.onClose,
            variant: "secondary",
            children: renderI18nText("fullscreen.fullscreen_view.restore_component_modal.cancel")
          }), jsx($n, {
            onClick: () => {
              permissionScopeHandler.user("restore-component", () => {
                fullscreenValue.restoreSoftDeletedNode(e.nodeId);
              });
              e.onClose();
            },
            variant: "primary",
            children: renderI18nText("fullscreen.fullscreen_view.restore_component_modal.restore")
          })]
        })
      })]
    })
  });
}, "fullscreen-restore-component-modal");
export const l = $$u0;