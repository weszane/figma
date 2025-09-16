import { jsx, jsxs } from "react/jsx-runtime";
import { useModalManager } from "../905/437088";
import { Button } from "../905/521428";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogActionStrip } from "../figma_app/272243";
import { renderI18nText } from "../905/303541";
import { rf } from "../1a115cee/533320";
export function $$c0(e) {
  let a = useModalManager(e);
  let s = jsx(Button, {
    variant: "secondary",
    onClick: e.onClose,
    children: renderI18nText("autosave.learn_more.done_button")
  });
  return jsx(ModalRootComponent, {
    manager: a,
    width: "lg",
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: renderI18nText("autosave.learn_more.title")
        })
      }), jsxs(DialogBody, {
        children: [jsx("div", {
          children: renderI18nText("autosave.learn_more.body_save_pending_changes")
        }), jsx("div", {
          className: rf,
          children: renderI18nText("autosave.learn_more.body_use_version_history")
        })]
      }), jsx(DialogFooter, {
        children: jsx(DialogActionStrip, {
          children: s
        })
      })]
    })
  });
}
export const AutosaveLearnMoreModal = $$c0;