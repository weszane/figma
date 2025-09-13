import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { vo, nB } from "../figma_app/272243";
import { Button } from "../905/521428";
import { renderI18nText } from "../905/303541";
import { M } from "../905/456042";
import { hideModal } from "../905/156213";
import { TrackingProvider } from "../figma_app/831799";
import { registerModal } from "../905/102752";
import { b } from "../905/791493";
import { planPickerModalBody, workspaceSelectorModalInner } from "../figma_app/727769";
export let $$f0 = registerModal(function (e) {
  let t = useDispatch();
  let r = useCallback(() => {
    t(hideModal());
  }, [t]);
  let {
    payload
  } = e;
  let {
    workspaces
  } = h;
  let E = useModalManager({
    onClose: r,
    open: !0
  });
  let y = {
    workspace_option_length: workspaces.length,
    workspaces: JSON.stringify(workspaces)
  };
  return jsx(TrackingProvider, {
    name: "Plan Picker",
    properties: y,
    children: jsx(ModalRootComponent, {
      manager: E,
      width: "lg",
      children: jsx(vo, {
        children: jsxs(nB, {
          className: planPickerModalBody,
          children: [jsx("div", {
            className: workspaceSelectorModalInner,
            children: jsx(b, {
              workspaces,
              onClick: (e, t) => {
                r();
                payload.onSelectWorkspace(e, t);
              },
              avatar: M,
              editorType: payload.editorType,
              useCase: payload.useCase
            })
          }), jsx(Button, {
            variant: "ghost",
            onClick: r,
            children: renderI18nText("community.try.pick_workspace.cancel")
          })]
        })
      })
    })
  });
}, "PlanPickerModal");
export const h = $$f0;