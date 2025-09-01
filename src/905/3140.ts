import { jsx } from "react/jsx-runtime";
import { vd } from "../figma_app/60079";
import { u } from "../905/684425";
import { s as _$$s } from "../cssbuilder/589278";
import { t, tx } from "../905/303541";
import { A } from "../6041/578888";
export function $$d0() {
  return jsx(u, {
    useOriginalSrcFills: !0,
    imageClassName: "request_error_interstitial--warningIcon--9ayvs",
    imageSrc: A,
    headerText: t("request_error_interstitial.there_was_an_error"),
    children: jsx(vd, {
      className: _$$s.mt24.$,
      type: "submit",
      onClick: () => {
        window.location.href = window.location.href;
      },
      children: tx("request_error_interstitial.refresh_and_try_again")
    })
  });
}
export const K = $$d0;