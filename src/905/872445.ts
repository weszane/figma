import { jsx } from "react/jsx-runtime";
import { renderI18nText } from "../905/303541";
import { registerTooltip } from "../905/524523";
import { fj } from "../905/736956";
export let $$o0 = registerTooltip("permissions_modal_seat_status", function () {
  return jsx("div", {
    className: fj,
    children: jsx("p", {
      children: renderI18nText("folder_permissions_modal.restricted_warning.admin_needs_to_update_this_seat")
    })
  });
}, e => ({
  unconstrainWidth: !0
}));
export const _ = $$o0;