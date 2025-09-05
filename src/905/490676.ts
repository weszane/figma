import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch } from "../vendor/514228";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB } from "../figma_app/272243";
import { $n } from "../905/521428";
import { J } from "../905/341359";
import { Ay } from "../905/612521";
import { tx, t as _$$t } from "../905/303541";
import { Ce } from "../905/156213";
export function $$h0({
  title: e
}) {
  let t = useDispatch();
  let i = useCallback(() => t(Ce()), [t]);
  let h = hS({
    open: !0,
    onClose: i
  });
  return jsx(J, {
    children: jsx(bL, {
      manager: h,
      width: "lg",
      height: "dynamic",
      children: jsxs(vo, {
        children: [jsx(Y9, {
          children: jsx(hE, {
            children: e
          })
        }), jsx(nB, {
          children: jsxs("div", {
            className: "x1v877vn x78zum5 xdt5ytf x167g77z x6s0dn4 xl56j7k",
            children: [tx("general.root_error_boundary_title"), jsx($n, {
              onClick: () => {
                Ay.reload("Invalid publishing entrypoint for PublishFileToCommunityModal");
              },
              children: _$$t("general.root_error_boundary_refresh")
            })]
          })
        })]
      })
    })
  });
}
export const r = $$h0;