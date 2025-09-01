import { jsx } from "react/jsx-runtime";
import { wA } from "../vendor/514228";
import { t as _$$t } from "../905/303541";
import { AC } from "../figma_app/777551";
import { et, zn } from "../figma_app/559491";
import { m3 } from "../figma_app/45218";
import { Ju, ZU } from "../905/102752";
import { yX } from "../figma_app/918700";
export let $$u0 = Ju(function ({
  plugin: e
}) {
  let t;
  let r;
  let d;
  let u;
  let p = wA();
  let _ = e.is_widget ? _$$t("community.plugins.widget") : _$$t("community.plugins.plugin");
  let h = () => {
    p(et({
      resource: e
    }));
  };
  AC(e) ? (r = _$$t("community.plugins.withdraw_from_review"), t = e.roles.org ? _$$t("community.plugins.this_action_will_remove_your_public_resource_type_review_submission_your_resource_type_will_still_be_available_to_members_of_org_name", {
    resourceType: _,
    orgName: e.roles.org.name
  }) : _$$t("community.plugins.this_action_will_remove_your_public_resource_type_review_submission", {
    resourceType: _
  }), d = _$$t("community.plugins.withdraw"), u = () => {
    e.roles.org ? p(zn({
      pluginId: e.id,
      role: e.roles
    })) : h();
  }) : (m3(e) ? (r = _$$t("community.plugins.delist_your_resource_type", {
    resourceType: _
  }), t = _$$t("community.resource.delisting_this_resource_will_prevent_people_from_discovering_or_purchasing_this_resource"), d = _$$t("community.resource.delist")) : (r = _$$t("community.plugins.unpublish_resource_type", {
    resourceType: _
  }), t = _$$t("community.plugins.this_action_will_cause_your_resource_type_to_disappear_current_users_will_lose_access_to_your_resource_type_immediately_you_cannot_undo_this_action_however_if_you_publish_your_resource_type_again_later_it_will_keep_its_url", {
    resourceType: _
  }), d = _$$t("community.resource.unpublish")), u = h);
  return jsx(yX, {
    confirmationTitle: r,
    content: t,
    onConfirm: u,
    confirmText: d,
    size: "small",
    destructive: !0,
    disableClickOutsideToHide: !0,
    enableEscapeToClose: !0,
    popStack: !0
  });
}, "UnpublishPluginModal", ZU.YES);
export const H = $$u0;