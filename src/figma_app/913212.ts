import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogActionStrip } from "../figma_app/272243";
import { Button } from "../905/521428";
import { getI18nString } from "../905/303541";
import { hideModal } from "../905/156213";
import { registerModal } from "../905/102752";
import { P } from "../905/932818";
export let $$h0 = registerModal(function () {
  let e = useDispatch<AppDispatch>();
  let t = P();
  let r = useCallback(() => e(hideModal()), [e]);
  let p = useCallback(() => {
    r();
    t();
  }, [r, t]);
  let h = useModalManager({
    open: !0,
    onClose: r
  });
  return jsx(ModalRootComponent, {
    manager: h,
    width: "md",
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: getI18nString("figmake.supabase_disconnect_required_modal.title")
        })
      }), jsx(DialogBody, {
        children: getI18nString("figmake.supabase_disconnect_required_modal.body")
      }), jsx(DialogFooter, {
        children: jsxs(DialogActionStrip, {
          children: [jsx(Button, {
            variant: "secondary",
            onClick: r,
            children: getI18nString("general.cancel")
          }), jsx(Button, {
            variant: "primary",
            onClick: p,
            children: getI18nString("figmake.supabase_disconnect_required_modal.go_to_settings")
          })]
        })
      })]
    })
  });
}, "SupabaseDisconnectRequiredModal");
export const m = $$h0;
