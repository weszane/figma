import { jsx, jsxs } from "react/jsx-runtime";
import { hS } from "../905/437088";
import { $n } from "../905/521428";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { tx } from "../905/303541";
import { rf } from "../1a115cee/533320";
export function $$c0(e) {
  let a = hS(e);
  let s = jsx($n, {
    variant: "secondary",
    onClick: e.onClose,
    children: tx("autosave.learn_more.done_button")
  });
  return jsx(bL, {
    manager: a,
    width: "lg",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: tx("autosave.learn_more.title")
        })
      }), jsxs(nB, {
        children: [jsx("div", {
          children: tx("autosave.learn_more.body_save_pending_changes")
        }), jsx("div", {
          className: rf,
          children: tx("autosave.learn_more.body_use_version_history")
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