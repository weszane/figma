import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch } from "../vendor/514228";
import { Yy } from "../figma_app/59509";
import { Q } from "../905/363675";
import { N } from "../905/572042";
import { t as _$$t, tx } from "../905/303541";
import { to } from "../905/156213";
import { fu } from "../figma_app/831799";
import { Ju } from "../905/102752";
import { Dd } from "../905/519092";
let _ = Ju(function (e) {
  return jsx(fu, {
    name: "Enable AI Features Modal",
    properties: {
      planId: e.planId,
      planType: e.planType
    },
    children: jsx(Dd, {
      title: _$$t("admin_settings.ai.features_toggle.modal.header"),
      maxWidth: 440,
      minWidth: 440,
      fixedTop: !1,
      onConfirm: e.onEnable,
      confirmText: _$$t("admin_settings.ai.features_toggle.modal.button"),
      children: jsx("div", {
        children: tx("admin_settings.ai.features_toggle.modal.description")
      })
    })
  });
}, "EnableAiFeaturesModal");
export function $$$$p0(e) {
  let t = useDispatch();
  return jsxs(Yy, {
    variant: "brand",
    "data-testid": e.testId,
    children: [jsx(Q, {
      title: _$$t("admin_settings.ai.banner.title"),
      children: jsx("span", {
        style: {
          marginRight: 8
        },
        children: tx("admin_settings.ai.banner.description")
      })
    }), jsx(N, {
      href: "#",
      onClick: () => {
        t(to({
          type: _,
          data: {
            onEnable: () => {
              e.onEnable();
            },
            planId: e.planId,
            planType: e.planType
          }
        }));
      },
      children: tx("admin_settings.ai.features_toggle.enable_ai")
    })]
  });
}
export const p = $$$$p0;