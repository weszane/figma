import { jsx } from "react/jsx-runtime";
import { useDispatch, useSelector } from "../vendor/514228";
import { $n } from "../905/521428";
import { trackEventAnalytics } from "../905/449184";
import { getI18nString, renderI18nText } from "../905/303541";
import { to } from "../905/156213";
import { WX } from "../figma_app/350203";
import { Tm } from "../figma_app/740025";
import { _6 } from "../figma_app/386952";
import { Pc } from "../905/372672";
import { Zm } from "../figma_app/45218";
import { R } from "../figma_app/690591";
export function $$h0() {
  let e = useDispatch();
  let t = Pc();
  let i = useSelector(e => !e.currentUserOrgId || !!Tm(e)[e.currentUserOrgId]);
  let h = _6();
  let x = "subView" in h && ["hubFile", "plugin", "widget"].includes(h.subView) ? "secondary" : "primary";
  return jsx("div", {
    className: "community_universal_publish_button--publishContextAction--l-h6g action--root--aRLIQ chevron--chevronContainer--0MO2x",
    children: jsx($n, {
      ...(!i && {
        "data-tooltip-type": "text",
        "data-tooltip-show-immediately": !0,
        "data-tooltip-tip-align-right": !0,
        "data-tooltip": getI18nString("navbar.navbar.disabled_publish_button_label"),
        disabled: !0
      }),
      onClick: () => {
        trackEventAnalytics("community_publish_modal", {
          user: t.id,
          step: WX.OPENED
        });
        e(to({
          type: R,
          data: {
            source: Zm.NAVBAR
          }
        }));
      },
      variant: x,
      children: renderI18nText("navbar.navbar.publish_button_label")
    })
  });
}
export const i = $$h0;