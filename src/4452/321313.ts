import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch } from "../vendor/514228";
import { Yy } from "../figma_app/59509";
import { Q } from "../905/363675";
import { N } from "../905/572042";
import { getI18nString, renderI18nText } from "../905/303541";
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
      title: getI18nString("admin_settings.ai.features_toggle.modal.header"),
      maxWidth: 440,
      minWidth: 440,
      fixedTop: !1,
      onConfirm: e.onEnable,
      confirmText: getI18nString("admin_settings.ai.features_toggle.modal.button"),
      children: jsx("div", {
        children: renderI18nText("admin_settings.ai.features_toggle.modal.description")
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
      title: getI18nString("admin_settings.ai.banner.title"),
      children: jsx("span", {
        style: {
          marginRight: 8
        },
        children: renderI18nText("admin_settings.ai.banner.description")
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
      children: renderI18nText("admin_settings.ai.features_toggle.enable_ai")
    })]
  });
}
export const p = $$$$p0;