import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useDispatch } from "../vendor/514228";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { $n } from "../905/521428";
import { trackEventAnalytics } from "../905/449184";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
import { hideModal } from "../905/156213";
export function $$v0(e) {
  let a = useDispatch();
  useEffect(() => trackEventAnalytics("New Autosave File Already Open Modal Shown"));
  let s = () => a(hideModal());
  let v = hS({
    open: !0,
    onClose: s
  });
  return jsx(bL, {
    manager: v,
    width: 360,
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: renderI18nText("autosave.file_already_open_modal.title")
        })
      }), jsx(nB, {
        children: renderI18nText("autosave.file_already_open_modal.body", {
          fileName: jsx("span", {
            className: _$$s.fontSemiBold.$,
            children: e.file.name
          })
        })
      }), jsx(wi, {
        children: jsx(jk, {
          children: jsx($n, {
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