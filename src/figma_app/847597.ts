import { zRx } from "../figma_app/822011";
import { xb } from "../figma_app/465776";
import { t as _$$t } from "../905/303541";
import { ud, Gu } from "../905/513035";
import { Gj } from "../figma_app/217457";
import { FUpgradeReasonType, FApprovalMethodType, FSeatAssignmentReasonType } from "../figma_app/191312";
import { $ } from "../figma_app/126651";
let $$c10 = "Seat";
let $$u1 = e => $$p11(e);
export function $$p11(e) {
  switch (e) {
    case ud.DESIGN:
    case ud.FIGJAM:
    case ud.DEV_MODE:
      return $(Gj(e));
    case ud.SLIDES:
      return _$$t("general.figma_slides");
    case ud.EXPERT:
    case ud.DEVELOPER:
    case ud.COLLABORATOR:
    case ud.CONTENT:
      return _$$t(`general.bundle.${e}`);
    case ud.AI_CREDITS:
      return _$$t("general.ai_credits");
    case Gu.VIEW:
      return _$$t("checkout.view");
    default:
      return "";
  }
}
export let $$_0 = e => $$u1(e);
export function $$h4(e) {
  switch (e) {
    case zRx.INSTANT_APPROVAL_IF_AVAILABLE_SEATS:
      return _$$t("plan_settings.auto_approval_settings.options.instant_approval_if_available.title");
    case zRx.INSTANT_APPROVAL:
      return _$$t("plan_settings.auto_approval_settings.options.instant_approval.title");
    case zRx.MANUAL_APPROVAL:
      return _$$t("plan_settings.auto_approval_settings.options.manual_approval.title");
    default:
      return "";
  }
}
export function $$m7(e, t, r, s) {
  switch (e) {
    case zRx.INSTANT_APPROVAL_IF_AVAILABLE_SEATS:
      return _$$t("plan_settings.auto_approval_settings.options.instant_approval_if_available.description");
    case zRx.INSTANT_APPROVAL:
      if (t || !r) return _$$t("plan_settings.auto_approval_settings.options.instant_approval.description.hide_charges");
      return _$$t("plan_settings.auto_approval_settings.options.instant_approval.description");
    case zRx.MANUAL_APPROVAL:
      if (!s) return _$$t("plan_settings.auto_approval_settings.options.manual_approval.description.hide_provisional_access");
      if (t || !r) return _$$t("plan_settings.auto_approval_settings.options.manual_approval.description.hide_free_access");
      return _$$t("plan_settings.auto_approval_settings.options.manual_approval.description");
    default:
      xb(e);
  }
}
export function $$g2(e, t) {
  switch (e) {
    case zRx.INSTANT_APPROVAL_IF_AVAILABLE_SEATS:
      if (t) return _$$t("plan_settings.auto_approval_settings.options.instant_approval_if_available.tooltip");
      return null;
    case zRx.INSTANT_APPROVAL:
    case zRx.MANUAL_APPROVAL:
      return null;
    default:
      xb(e);
  }
}
export function $$f5(e) {
  switch (e) {
    case zRx.INSTANT_APPROVAL_IF_AVAILABLE_SEATS:
      return _$$t("activity_log.event.org_auto_approval_setting_update.auto_approve_if_available");
    case zRx.INSTANT_APPROVAL:
      return _$$t("activity_log.event.org_auto_approval_setting_update.auto_approve");
    case zRx.MANUAL_APPROVAL:
      return _$$t("activity_log.event.org_auto_approval_setting_update.manual");
    default:
      return "";
  }
}
export let $$E9 = "Seat changes";
export function $$y6(e) {
  return e === FUpgradeReasonType.SCIM ? "SCIM provisioned" : "";
}
export function $$b8(e) {
  switch (e) {
    case FApprovalMethodType.AUTO_APPROVED:
      return _$$t("admin_settings.people_tab.upgrade_method.auto_approved");
    case FApprovalMethodType.MANUAL_APPROVED:
    case FApprovalMethodType.MANUAL_APPROVED_NO_AVAILABLE_SEAT:
      return _$$t("admin_settings.people_tab.upgrade_method.manually_approved");
    case FApprovalMethodType.AUTO_APPROVED_AVAILABLE_SEAT:
      return _$$t("admin_settings.people_tab.upgrade_method.auto_approved_available_seat");
    case FApprovalMethodType.ADMIN_INITIATED:
      return _$$t("admin_settings.people_tab.upgrade_method.admin_initiated");
    case FApprovalMethodType.ADMIN_SELF_UPGRADE:
      return _$$t("admin_settings.people_tab.upgrade_method.admin_self_upgrade");
    case FApprovalMethodType.SCIM:
      return _$$t("admin_settings.people_tab.upgrade_method.scim");
    case FApprovalMethodType.FIGMA_ADMIN:
      return _$$t("admin_settings.people_tab.upgrade_method.figma_admin");
    default:
      return _$$t("admin_settings.people_tab.upgrade_method.migrated");
  }
}
export function $$T3(e, t, r, n, i, s) {
  if (!e) return _$$t("admin_settings.people_tab.upgrade_reason.fallback.without_user_name");
  switch (t) {
    case FApprovalMethodType.AUTO_APPROVED:
      if (i) {
        switch (r) {
          case FUpgradeReasonType.CREATE_FILE:
            return _$$t("admin_settings.people_tab.upgrade_reason.auto_approved.create_file_with_resource", {
              user: e,
              resourceName: i
            });
          case FUpgradeReasonType.DEV_MODE:
            return _$$t("admin_settings.people_tab.upgrade_reason.auto_approved.dev_mode_with_resource", {
              user: e,
              resourceName: i
            });
          case FUpgradeReasonType.EDIT_ACTION:
          case FUpgradeReasonType.EDIT_BUTTON:
            return _$$t("admin_settings.people_tab.upgrade_reason.auto_approved.edit_file_with_resource", {
              user: e,
              resourceName: i
            });
          case FUpgradeReasonType.DRAFTS_SHARE:
          case FSeatAssignmentReasonType.DRAFTS_SHARE:
          case FUpgradeReasonType.RESTRICTED_DRAFT_SHARED_EMAIL:
          case FSeatAssignmentReasonType.RESTRICTED_DRAFT_SHARED_EMAIL:
          case FUpgradeReasonType.IN_EDITOR_RESTRICTED_DRAFT:
          case FSeatAssignmentReasonType.IN_EDITOR_RESTRICTED_DRAFT:
            return _$$t("admin_settings.people_tab.upgrade_reason.auto_approved.drafts_share_with_resource", {
              user: e,
              resourceName: i
            });
          case FUpgradeReasonType.RESOURCE_MOVED_FROM_ORG_DRAFTS:
            return _$$t("admin_settings.people_tab.upgrade_reason.auto_approved.file_move_from_draft_with_resource", {
              user: e,
              resourceName: i
            });
          case FUpgradeReasonType.PUBLISH_SITES:
          case FSeatAssignmentReasonType.PUBLISH_SITES:
            return _$$t("admin_settings.people_tab.upgrade_reason.auto_approved.publish_sites", {
              user: e,
              resourceName: i
            });
        }
        break;
      }
      switch (r) {
        case FUpgradeReasonType.CREATE_FILE:
        case FSeatAssignmentReasonType.CREATE_FILE:
          return _$$t("admin_settings.people_tab.upgrade_reason.auto_approved.create_file_without_resource", {
            user: e
          });
        case FUpgradeReasonType.DEV_MODE:
        case FSeatAssignmentReasonType.DEV_MODE:
          return _$$t("admin_settings.people_tab.upgrade_reason.auto_approved.dev_mode_without_resource", {
            user: e
          });
        case FUpgradeReasonType.EDIT_ACTION:
        case FUpgradeReasonType.EDIT_BUTTON:
        case FSeatAssignmentReasonType.EDIT_ACTION:
        case FSeatAssignmentReasonType.EDIT_BUTTON:
          return _$$t("admin_settings.people_tab.upgrade_reason.auto_approved.edit_file_without_resource", {
            user: e
          });
        case FUpgradeReasonType.DRAFTS_SHARE:
        case FSeatAssignmentReasonType.DRAFTS_SHARE:
        case FUpgradeReasonType.RESTRICTED_DRAFT_SHARED_EMAIL:
        case FSeatAssignmentReasonType.RESTRICTED_DRAFT_SHARED_EMAIL:
        case FUpgradeReasonType.IN_EDITOR_RESTRICTED_DRAFT:
        case FSeatAssignmentReasonType.IN_EDITOR_RESTRICTED_DRAFT:
          return _$$t("admin_settings.people_tab.upgrade_reason.auto_approved.drafts_share_without_resource", {
            user: e
          });
        case FUpgradeReasonType.RESOURCE_MOVED_FROM_ORG_DRAFTS:
        case FSeatAssignmentReasonType.RESOURCE_MOVED_FROM_PLAN_DRAFTS:
          return _$$t("admin_settings.people_tab.upgrade_reason.auto_approved.file_move_from_draft_without_resource", {
            user: e
          });
        case FUpgradeReasonType.PUBLISH_SITES:
        case FSeatAssignmentReasonType.PUBLISH_SITES:
          return _$$t("admin_settings.people_tab.upgrade_reason.auto_approved.publish_sites_without_resource", {
            user: e
          });
      }
      break;
    case FApprovalMethodType.AUTO_APPROVED_AVAILABLE_SEAT:
      if (i) switch (r) {
        case FUpgradeReasonType.CREATE_FILE:
          return _$$t("admin_settings.people_tab.upgrade_reason.auto_approved_available_seat.create_file_with_resource", {
            user: e,
            resourceName: i
          });
        case FUpgradeReasonType.DEV_MODE:
          return _$$t("admin_settings.people_tab.upgrade_reason.auto_approved_available_seat.dev_mode_with_resource", {
            user: e,
            resourceName: i
          });
        case FUpgradeReasonType.EDIT_ACTION:
        case FUpgradeReasonType.EDIT_BUTTON:
          return _$$t("admin_settings.people_tab.upgrade_reason.auto_approved_available_seat.edit_file_with_resource", {
            user: e,
            resourceName: i
          });
        case FUpgradeReasonType.DRAFTS_SHARE:
        case FSeatAssignmentReasonType.DRAFTS_SHARE:
        case FUpgradeReasonType.RESTRICTED_DRAFT_SHARED_EMAIL:
        case FSeatAssignmentReasonType.RESTRICTED_DRAFT_SHARED_EMAIL:
        case FUpgradeReasonType.IN_EDITOR_RESTRICTED_DRAFT:
        case FSeatAssignmentReasonType.IN_EDITOR_RESTRICTED_DRAFT:
          return _$$t("admin_settings.people_tab.upgrade_reason.auto_approved_available_seat.drafts_share_with_resource", {
            user: e,
            resourceName: i
          });
        case FUpgradeReasonType.RESOURCE_MOVED_FROM_ORG_DRAFTS:
          return _$$t("admin_settings.people_tab.upgrade_reason.auto_approved_available_seat.file_move_from_draft_with_resource", {
            user: e,
            resourceName: i
          });
        case FUpgradeReasonType.PUBLISH_SITES:
        case FSeatAssignmentReasonType.PUBLISH_SITES:
          return _$$t("admin_settings.people_tab.upgrade_reason.auto_approved_available_seat.publish_sites", {
            user: e,
            resourceName: i
          });
      } else switch (r) {
        case FUpgradeReasonType.CREATE_FILE:
        case FSeatAssignmentReasonType.CREATE_FILE:
          return _$$t("admin_settings.people_tab.upgrade_reason.auto_approved_with_available_seat.create_file_without_resource", {
            user: e
          });
        case FUpgradeReasonType.DEV_MODE:
        case FSeatAssignmentReasonType.DEV_MODE:
          return _$$t("admin_settings.people_tab.upgrade_reason.auto_approved_with_available_seat.dev_mode_without_resource", {
            user: e
          });
        case FUpgradeReasonType.EDIT_ACTION:
        case FUpgradeReasonType.EDIT_BUTTON:
        case FSeatAssignmentReasonType.EDIT_ACTION:
        case FSeatAssignmentReasonType.EDIT_BUTTON:
          return _$$t("admin_settings.people_tab.upgrade_reason.auto_approved_with_available_seat.edit_file_without_resource", {
            user: e
          });
        case FUpgradeReasonType.DRAFTS_SHARE:
        case FSeatAssignmentReasonType.DRAFTS_SHARE:
        case FUpgradeReasonType.RESTRICTED_DRAFT_SHARED_EMAIL:
        case FSeatAssignmentReasonType.RESTRICTED_DRAFT_SHARED_EMAIL:
        case FUpgradeReasonType.IN_EDITOR_RESTRICTED_DRAFT:
        case FSeatAssignmentReasonType.IN_EDITOR_RESTRICTED_DRAFT:
          return _$$t("admin_settings.people_tab.upgrade_reason.auto_approved_with_available_seat.drafts_share_without_resource", {
            user: e
          });
        case FUpgradeReasonType.RESOURCE_MOVED_FROM_ORG_DRAFTS:
        case FSeatAssignmentReasonType.RESOURCE_MOVED_FROM_PLAN_DRAFTS:
          return _$$t("admin_settings.people_tab.upgrade_reason.auto_approved_with_available_seat.file_move_from_draft_without_resource", {
            user: e
          });
        case FUpgradeReasonType.PUBLISH_SITES:
        case FSeatAssignmentReasonType.PUBLISH_SITES:
          return _$$t("admin_settings.people_tab.upgrade_reason.auto_approved_available_seat.publish_sites_without_resource", {
            user: e
          });
      }
      break;
    case FApprovalMethodType.MANUAL_APPROVED:
    case FApprovalMethodType.MANUAL_APPROVED_NO_AVAILABLE_SEAT:
      if (n) {
        if (i) switch (r) {
          case FUpgradeReasonType.CREATE_FILE:
            return _$$t("admin_settings.people_tab.upgrade_reason.manual_approved.create_file_with_resource", {
              user: e,
              actor: n,
              resourceName: i
            });
          case FUpgradeReasonType.DEV_MODE:
            return _$$t("admin_settings.people_tab.upgrade_reason.manual_approved.dev_mode_with_resource", {
              user: e,
              actor: n,
              resourceName: i
            });
          case FUpgradeReasonType.EDIT_ACTION:
          case FUpgradeReasonType.EDIT_BUTTON:
            return _$$t("admin_settings.people_tab.upgrade_reason.manual_approved.edit_file_with_resource", {
              user: e,
              actor: n,
              resourceName: i
            });
          case FUpgradeReasonType.DRAFTS_SHARE:
          case FSeatAssignmentReasonType.DRAFTS_SHARE:
          case FUpgradeReasonType.RESTRICTED_DRAFT_SHARED_EMAIL:
          case FSeatAssignmentReasonType.RESTRICTED_DRAFT_SHARED_EMAIL:
          case FUpgradeReasonType.IN_EDITOR_RESTRICTED_DRAFT:
          case FSeatAssignmentReasonType.IN_EDITOR_RESTRICTED_DRAFT:
            return _$$t("admin_settings.people_tab.upgrade_reason.manual_approved.drafts_share_with_resource", {
              user: e,
              actor: n,
              resourceName: i
            });
          case FUpgradeReasonType.RESOURCE_MOVED_FROM_ORG_DRAFTS:
            return _$$t("admin_settings.people_tab.upgrade_reason.manual_approved.file_move_from_draft_with_resource", {
              user: e,
              actor: n,
              resourceName: i
            });
          case FUpgradeReasonType.ADMIN_UPGRADE:
          case FSeatAssignmentReasonType.ADMIN_UPGRADE:
            return _$$t("admin_settings.people_tab.upgrade_reason.manual_approved.admin_upgrade.v2", {
              user: e,
              actor: n
            });
        } else switch (r) {
          case FUpgradeReasonType.CREATE_FILE:
          case FSeatAssignmentReasonType.CREATE_FILE:
            return _$$t("admin_settings.people_tab.upgrade_reason.manual_approved.create_file_without_resource", {
              user: e,
              actor: n
            });
          case FUpgradeReasonType.DEV_MODE:
          case FSeatAssignmentReasonType.DEV_MODE:
            return _$$t("admin_settings.people_tab.upgrade_reason.manual_approved.dev_mode_without_resource", {
              user: e,
              actor: n
            });
          case FUpgradeReasonType.EDIT_ACTION:
          case FUpgradeReasonType.EDIT_BUTTON:
          case FSeatAssignmentReasonType.EDIT_ACTION:
          case FSeatAssignmentReasonType.EDIT_BUTTON:
            return _$$t("admin_settings.people_tab.upgrade_reason.manual_approved.edit_file_without_resource", {
              user: e,
              actor: n
            });
          case FUpgradeReasonType.DRAFTS_SHARE:
          case FSeatAssignmentReasonType.DRAFTS_SHARE:
          case FUpgradeReasonType.RESTRICTED_DRAFT_SHARED_EMAIL:
          case FSeatAssignmentReasonType.RESTRICTED_DRAFT_SHARED_EMAIL:
          case FUpgradeReasonType.IN_EDITOR_RESTRICTED_DRAFT:
          case FSeatAssignmentReasonType.IN_EDITOR_RESTRICTED_DRAFT:
            return _$$t("admin_settings.people_tab.upgrade_reason.manual_approved.drafts_share_without_resource", {
              user: e,
              actor: n
            });
          case FUpgradeReasonType.RESOURCE_MOVED_FROM_ORG_DRAFTS:
          case FSeatAssignmentReasonType.RESOURCE_MOVED_FROM_PLAN_DRAFTS:
            return _$$t("admin_settings.people_tab.upgrade_reason.manual_approved.file_move_from_draft_without_resource", {
              user: e,
              actor: n
            });
          case FUpgradeReasonType.ADMIN_UPGRADE:
          case FSeatAssignmentReasonType.ADMIN_UPGRADE:
            return _$$t("admin_settings.people_tab.upgrade_reason.manual_approved.admin_upgrade.v2", {
              user: e,
              actor: n
            });
        }
      }
      break;
    case FApprovalMethodType.SCIM:
      if (s) {
        let t = $$p11(s);
        return _$$t("admin_settings.people_tab.upgrade_reason.scim.scim", {
          user: e,
          seatType: t
        });
      }
      break;
    case FApprovalMethodType.ADMIN_INITIATED:
      if (s) {
        let t = $$p11(s);
        switch (r) {
          case FUpgradeReasonType.ADMIN_UPGRADE:
          case FSeatAssignmentReasonType.ADMIN_UPGRADE:
          case FSeatAssignmentReasonType.DEVELOPER_BUNDLE_OPT_IN:
            if (n) return _$$t("admin_settings.people_tab.upgrade_reason.admin_initiated.admin_upgrade", {
              user: e,
              seatType: t,
              actor: n
            });
            break;
          case FUpgradeReasonType.INVITE_REDEEM:
          case FSeatAssignmentReasonType.INVITE_REDEEM:
            if (n) return _$$t("admin_settings.people_tab.upgrade_reason.admin_initiated.invite_redeem", {
              user: e,
              seatType: t,
              actor: n
            });
            return _$$t("admin_settings.people_tab.upgrade_reason.admin_initiated.invite_redeem.no_actor_fallback", {
              user: e,
              seatType: t
            });
          case FUpgradeReasonType.SEAT_MANAGEMENT_AT_SELF_SERVE_CHECKOUT:
          case FSeatAssignmentReasonType.CHECKOUT:
            return _$$t("admin_settings.people_tab.upgrade_reason.admin_initiated.checkout", {
              user: e,
              seatType: t
            });
        }
      }
      break;
    case FApprovalMethodType.ADMIN_SELF_UPGRADE:
      return _$$t("admin_settings.people_tab.upgrade_method.admin_self_upgrade.description");
    case FApprovalMethodType.FIGMA_ADMIN:
      switch (r) {
        case FUpgradeReasonType.SUPPORT_DRIVEN_ORG_MIGRATION:
        case FUpgradeReasonType.SUPPORT_DRIVEN_ORG_MERGE:
        case FUpgradeReasonType.SUPPORT_DRIVEN_TEAM_ADDITION:
        case FUpgradeReasonType.FIGMA_ADMIN:
          if (s) return _$$t("admin_settings.people_tab.upgrade_reason.figma_admin.figma_admin", {
            user: e,
            seatType: $$p11(s)
          });
          break;
        case FUpgradeReasonType.SCIM_RECOVERY:
          if (s) return _$$t("admin_settings.people_tab.upgrade_reason.figma_admin.scim_recovery", {
            user: e,
            seatType: $$p11(s)
          });
          break;
        case FUpgradeReasonType.ORG_MERGE:
          if (s) return _$$t("admin_settings.people_tab.upgrade_reason.figma_admin.org_merge", {
            user: e,
            seatType: $$p11(s)
          });
          break;
        case FUpgradeReasonType.TEAM_ADDED_TO_ORG_THROUGH_FIGMA_ADMIN:
          if (s) return _$$t("admin_settings.people_tab.upgrade_reason.figma_admin.team_added_to_org_through_figma_admin", {
            user: e,
            seatType: $$p11(s)
          });
          break;
        case FUpgradeReasonType.PAID_STATUS_ON_ORG_CREATION:
        case FUpgradeReasonType.SEAT_MANAGEMENT_AT_SELF_SERVE_CHECKOUT:
          if (s) return _$$t("admin_settings.people_tab.upgrade_reason.figma_admin.paid_status_on_org_creation", {
            user: e,
            seatType: $$p11(s)
          });
      }
      break;
    case null:
      return _$$t("admin_settings.people_tab.upgrade_method.migrated");
  }
  return n ? _$$t("admin_settings.people_tab.upgrade_reason.fallback.with_actor", {
    actor: n,
    user: e
  }) : _$$t("admin_settings.people_tab.upgrade_reason.fallback.without_actor", {
    user: e
  });
}
export const CM = $$_0;
export const JT = $$u1;
export const NU = $$g2;
export const Qi = $$T3;
export const SI = $$h4;
export const Tm = $$f5;
export const V5 = $$y6;
export const kj = $$m7;
export const mb = $$b8;
export const nf = $$E9;
export const r3 = $$c10;
export const tI = $$p11;