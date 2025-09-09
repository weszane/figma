import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB } from "../figma_app/272243";
import { $n } from "../905/521428";
import { J } from "../905/341359";
import { customHistory } from "../905/612521";
import { renderI18nText, getI18nString } from "../905/303541";
import { hideModal } from "../905/156213";
export function $$h0({
  title: e
}) {
  let t = useDispatch();
  let i = useCallback(() => t(hideModal()), [t]);
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
            children: [renderI18nText("general.root_error_boundary_title"), jsx($n, {
              onClick: () => {
                customHistory.reload("Invalid publishing entrypoint for PublishFileToCommunityModal");
              },
              children: getI18nString("general.root_error_boundary_refresh")
            })]
          })
        })]
      })
    })
  });
}
export const r = $$h0;
