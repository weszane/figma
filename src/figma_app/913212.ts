import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch } from "../vendor/514228";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { $n } from "../905/521428";
import { t as _$$t } from "../905/303541";
import { Ce } from "../905/156213";
import { Ju } from "../905/102752";
import { P } from "../905/932818";
export let $$h0 = Ju(function () {
  let e = useDispatch();
  let t = P();
  let r = useCallback(() => e(Ce()), [e]);
  let p = useCallback(() => {
    r();
    t();
  }, [r, t]);
  let h = hS({
    open: !0,
    onClose: r
  });
  return jsx(bL, {
    manager: h,
    width: "md",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: _$$t("figmake.supabase_disconnect_required_modal.title")
        })
      }), jsx(nB, {
        children: _$$t("figmake.supabase_disconnect_required_modal.body")
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx($n, {
            variant: "secondary",
            onClick: r,
            children: _$$t("general.cancel")
          }), jsx($n, {
            variant: "primary",
            onClick: p,
            children: _$$t("figmake.supabase_disconnect_required_modal.go_to_settings")
          })]
        })
      })]
    })
  });
}, "SupabaseDisconnectRequiredModal");
export const m = $$h0;