import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogActionStrip } from "../figma_app/272243";
import { Button } from "../905/521428";
import { trackEventAnalytics } from "../905/449184";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
import { hideModal } from "../905/156213";
export function $$v0(e) {
  let a = useDispatch();
  useEffect(() => trackEventAnalytics("New Autosave File Already Open Modal Shown"));
  let s = () => a(hideModal());
  let v = useModalManager({
    open: !0,
    onClose: s
  });
  return jsx(ModalRootComponent, {
    manager: v,
    width: 360,
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: renderI18nText("autosave.file_already_open_modal.title")
        })
      }), jsx(DialogBody, {
        children: renderI18nText("autosave.file_already_open_modal.body", {
          fileName: jsx("span", {
            className: _$$s.fontSemiBold.$,
            children: e.file.name
          })
        })
      }), jsx(DialogFooter, {
        children: jsx(DialogActionStrip, {
          children: jsx(Button, {
            variant: "secondary",
            onClick: s,
            children: renderI18nText("general.ok")
          })
        })
      })]
    })
  });
}
$$v0.displayName = "AutosaveNewFileAlreadyOpenModal";
export const AutosaveNewFileAlreadyOpenModal = $$v0;