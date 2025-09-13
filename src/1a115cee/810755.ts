import { jsx, jsxs } from "react/jsx-runtime";
import { useModalManager } from "../905/437088";
import { Button } from "../905/521428";
import { ModalRootComponent } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
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
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: renderI18nText("autosave.learn_more.title")
        })
      }), jsxs(nB, {
        children: [jsx("div", {
          children: renderI18nText("autosave.learn_more.body_save_pending_changes")
        }), jsx("div", {
          className: rf,
          children: renderI18nText("autosave.learn_more.body_use_version_history")
        })]
      }), jsx(wi, {
        children: jsx(jk, {
          children: s
        })
      })]
    })
  });
}
export const AutosaveLearnMoreModal = $$c0;