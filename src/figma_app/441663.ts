import { jsx } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { getI18nString } from "../905/303541";
import { isResourcePendingPublishing } from "../figma_app/777551";
import { unpublishPluginThunk, updatePluginRoleThunk } from "../figma_app/559491";
import { hasMonetizedResourceMetadata } from "../figma_app/45218";
import { registerModal, ModalSupportsBackground } from "../905/102752";
import { ConfirmationModal2 } from "../figma_app/918700";
export let $$u0 = registerModal(function ({
  plugin: e
}) {
  let t;
  let r;
  let d;
  let u;
  let p = useDispatch<AppDispatch>();
  let _ = e.is_widget ? getI18nString("community.plugins.widget") : getI18nString("community.plugins.plugin");
  let h = () => {
    p(unpublishPluginThunk({
      resource: e
    }));
  };
  isResourcePendingPublishing(e) ? (r = getI18nString("community.plugins.withdraw_from_review"), t = e.roles.org ? getI18nString("community.plugins.this_action_will_remove_your_public_resource_type_review_submission_your_resource_type_will_still_be_available_to_members_of_org_name", {
    resourceType: _,
    orgName: e.roles.org.name
  }) : getI18nString("community.plugins.this_action_will_remove_your_public_resource_type_review_submission", {
    resourceType: _
  }), d = getI18nString("community.plugins.withdraw"), u = () => {
    e.roles.org ? p(updatePluginRoleThunk({
      pluginId: e.id,
      role: e.roles
    })) : h();
  }) : (hasMonetizedResourceMetadata(e) ? (r = getI18nString("community.plugins.delist_your_resource_type", {
    resourceType: _
  }), t = getI18nString("community.resource.delisting_this_resource_will_prevent_people_from_discovering_or_purchasing_this_resource"), d = getI18nString("community.resource.delist")) : (r = getI18nString("community.plugins.unpublish_resource_type", {
    resourceType: _
  }), t = getI18nString("community.plugins.this_action_will_cause_your_resource_type_to_disappear_current_users_will_lose_access_to_your_resource_type_immediately_you_cannot_undo_this_action_however_if_you_publish_your_resource_type_again_later_it_will_keep_its_url", {
    resourceType: _
  }), d = getI18nString("community.resource.unpublish")), u = h);
  return jsx(ConfirmationModal2, {
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
}, "UnpublishPluginModal", ModalSupportsBackground.YES);
export const H = $$u0;