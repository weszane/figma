import { zRx } from "../figma_app/822011";
import { throwTypeError } from "../figma_app/465776";
import { getI18nString } from "../905/303541";
import { ProductAccessTypeEnum, ViewAccessTypeEnum } from "../905/513035";
import { Gj } from "../figma_app/217457";
import { FUpgradeReasonType, FApprovalMethodType, FSeatAssignmentReasonType } from "../figma_app/191312";
import { $ } from "../figma_app/126651";
let $$c10 = "Seat";
let $$u1 = e => $$p11(e);
export function $$p11(e) {
  switch (e) {
    case ProductAccessTypeEnum.DESIGN:
    case ProductAccessTypeEnum.FIGJAM:
    case ProductAccessTypeEnum.DEV_MODE:
      return $(Gj(e));
    case ProductAccessTypeEnum.SLIDES:
      return getI18nString("general.figma_slides");
    case ProductAccessTypeEnum.EXPERT:
    case ProductAccessTypeEnum.DEVELOPER:
    case ProductAccessTypeEnum.COLLABORATOR:
    case ProductAccessTypeEnum.CONTENT:
      return getI18nString(`general.bundle.${e}`);
    case ProductAccessTypeEnum.AI_CREDITS:
      return getI18nString("general.ai_credits");
    case ViewAccessTypeEnum.VIEW:
      return getI18nString("checkout.view");
    default:
      return "";
  }
}
export let $$_0 = e => $$u1(e);
export function $$h4(e) {
  switch (e) {
    case zRx.INSTANT_APPROVAL_IF_AVAILABLE_SEATS:
      return getI18nString("plan_settings.auto_approval_settings.options.instant_approval_if_available.title");
    case zRx.INSTANT_APPROVAL:
      return getI18nString("plan_settings.auto_approval_settings.options.instant_approval.title");
    case zRx.MANUAL_APPROVAL:
      return getI18nString("plan_settings.auto_approval_settings.options.manual_approval.title");
    default:
      return "";
  }
}
export function $$m7(e, t, r, s) {
  switch (e) {
    case zRx.INSTANT_APPROVAL_IF_AVAILABLE_SEATS:
      return getI18nString("plan_settings.auto_approval_settings.options.instant_approval_if_available.description");
    case zRx.INSTANT_APPROVAL:
      if (t || !r) return getI18nString("plan_settings.auto_approval_settings.options.instant_approval.description.hide_charges");
      return getI18nString("plan_settings.auto_approval_settings.options.instant_approval.description");
    case zRx.MANUAL_APPROVAL:
      if (!s) return getI18nString("plan_settings.auto_approval_settings.options.manual_approval.description.hide_provisional_access");
      if (t || !r) return getI18nString("plan_settings.auto_approval_settings.options.manual_approval.description.hide_free_access");
      return getI18nString("plan_settings.auto_approval_settings.options.manual_approval.description");
    default:
      throwTypeError(e);
  }
}
export function $$g2(e, t) {
  switch (e) {
    case zRx.INSTANT_APPROVAL_IF_AVAILABLE_SEATS:
      if (t) return getI18nString("plan_settings.auto_approval_settings.options.instant_approval_if_available.tooltip");
      return null;
    case zRx.INSTANT_APPROVAL:
    case zRx.MANUAL_APPROVAL:
      return null;
    default:
      throwTypeError(e);
  }
}
export function $$f5(e) {
  switch (e) {
    case zRx.INSTANT_APPROVAL_IF_AVAILABLE_SEATS:
      return getI18nString("activity_log.event.org_auto_approval_setting_update.auto_approve_if_available");
    case zRx.INSTANT_APPROVAL:
      return getI18nString("activity_log.event.org_auto_approval_setting_update.auto_approve");
    case zRx.MANUAL_APPROVAL:
      return getI18nString("activity_log.event.org_auto_approval_setting_update.manual");
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
      return getI18nString("admin_settings.people_tab.upgrade_method.auto_approved");
    case FApprovalMethodType.MANUAL_APPROVED:
    case FApprovalMethodType.MANUAL_APPROVED_NO_AVAILABLE_SEAT:
      return getI18nString("admin_settings.people_tab.upgrade_method.manually_approved");
    case FApprovalMethodType.AUTO_APPROVED_AVAILABLE_SEAT:
      return getI18nString("admin_settings.people_tab.upgrade_method.auto_approved_available_seat");
    case FApprovalMethodType.ADMIN_INITIATED:
      return getI18nString("admin_settings.people_tab.upgrade_method.admin_initiated");
    case FApprovalMethodType.ADMIN_SELF_UPGRADE:
      return getI18nString("admin_settings.people_tab.upgrade_method.admin_self_upgrade");
    case FApprovalMethodType.SCIM:
      return getI18nString("admin_settings.people_tab.upgrade_method.scim");
    case FApprovalMethodType.FIGMA_ADMIN:
      return getI18nString("admin_settings.people_tab.upgrade_method.figma_admin");
    default:
      return getI18nString("admin_settings.people_tab.upgrade_method.migrated");
  }
}
export function $$T3(e, t, r, n, i, s) {
  if (!e) return getI18nString("admin_settings.people_tab.upgrade_reason.fallback.without_user_name");
  switch (t) {
    case FApprovalMethodType.AUTO_APPROVED:
      if (i) {
        switch (r) {
          case FUpgradeReasonType.CREATE_FILE:
            return getI18nString("admin_settings.people_tab.upgrade_reason.auto_approved.create_file_with_resource", {
              user: e,
              resourceName: i
            });
          case FUpgradeReasonType.DEV_MODE:
            return getI18nString("admin_settings.people_tab.upgrade_reason.auto_approved.dev_mode_with_resource", {
              user: e,
              resourceName: i
            });
          case FUpgradeReasonType.EDIT_ACTION:
          case FUpgradeReasonType.EDIT_BUTTON:
            return getI18nString("admin_settings.people_tab.upgrade_reason.auto_approved.edit_file_with_resource", {
              user: e,
              resourceName: i
            });
          case FUpgradeReasonType.DRAFTS_SHARE:
          case FSeatAssignmentReasonType.DRAFTS_SHARE:
          case FUpgradeReasonType.RESTRICTED_DRAFT_SHARED_EMAIL:
          case FSeatAssignmentReasonType.RESTRICTED_DRAFT_SHARED_EMAIL:
          case FUpgradeReasonType.IN_EDITOR_RESTRICTED_DRAFT:
          case FSeatAssignmentReasonType.IN_EDITOR_RESTRICTED_DRAFT:
            return getI18nString("admin_settings.people_tab.upgrade_reason.auto_approved.drafts_share_with_resource", {
              user: e,
              resourceName: i
            });
          case FUpgradeReasonType.RESOURCE_MOVED_FROM_ORG_DRAFTS:
            return getI18nString("admin_settings.people_tab.upgrade_reason.auto_approved.file_move_from_draft_with_resource", {
              user: e,
              resourceName: i
            });
          case FUpgradeReasonType.PUBLISH_SITES:
          case FSeatAssignmentReasonType.PUBLISH_SITES:
            return getI18nString("admin_settings.people_tab.upgrade_reason.auto_approved.publish_sites", {
              user: e,
              resourceName: i
            });
        }
        break;
      }
      switch (r) {
        case FUpgradeReasonType.CREATE_FILE:
        case FSeatAssignmentReasonType.CREATE_FILE:
          return getI18nString("admin_settings.people_tab.upgrade_reason.auto_approved.create_file_without_resource", {
            user: e
          });
        case FUpgradeReasonType.DEV_MODE:
        case FSeatAssignmentReasonType.DEV_MODE:
          return getI18nString("admin_settings.people_tab.upgrade_reason.auto_approved.dev_mode_without_resource", {
            user: e
          });
        case FUpgradeReasonType.EDIT_ACTION:
        case FUpgradeReasonType.EDIT_BUTTON:
        case FSeatAssignmentReasonType.EDIT_ACTION:
        case FSeatAssignmentReasonType.EDIT_BUTTON:
          return getI18nString("admin_settings.people_tab.upgrade_reason.auto_approved.edit_file_without_resource", {
            user: e
          });
        case FUpgradeReasonType.DRAFTS_SHARE:
        case FSeatAssignmentReasonType.DRAFTS_SHARE:
        case FUpgradeReasonType.RESTRICTED_DRAFT_SHARED_EMAIL:
        case FSeatAssignmentReasonType.RESTRICTED_DRAFT_SHARED_EMAIL:
        case FUpgradeReasonType.IN_EDITOR_RESTRICTED_DRAFT:
        case FSeatAssignmentReasonType.IN_EDITOR_RESTRICTED_DRAFT:
          return getI18nString("admin_settings.people_tab.upgrade_reason.auto_approved.drafts_share_without_resource", {
            user: e
          });
        case FUpgradeReasonType.RESOURCE_MOVED_FROM_ORG_DRAFTS:
        case FSeatAssignmentReasonType.RESOURCE_MOVED_FROM_PLAN_DRAFTS:
          return getI18nString("admin_settings.people_tab.upgrade_reason.auto_approved.file_move_from_draft_without_resource", {
            user: e
          });
        case FUpgradeReasonType.PUBLISH_SITES:
        case FSeatAssignmentReasonType.PUBLISH_SITES:
          return getI18nString("admin_settings.people_tab.upgrade_reason.auto_approved.publish_sites_without_resource", {
            user: e
          });
      }
      break;
    case FApprovalMethodType.AUTO_APPROVED_AVAILABLE_SEAT:
      if (i) switch (r) {
        case FUpgradeReasonType.CREATE_FILE:
          return getI18nString("admin_settings.people_tab.upgrade_reason.auto_approved_available_seat.create_file_with_resource", {
            user: e,
            resourceName: i
          });
        case FUpgradeReasonType.DEV_MODE:
          return getI18nString("admin_settings.people_tab.upgrade_reason.auto_approved_available_seat.dev_mode_with_resource", {
            user: e,
            resourceName: i
          });
        case FUpgradeReasonType.EDIT_ACTION:
        case FUpgradeReasonType.EDIT_BUTTON:
          return getI18nString("admin_settings.people_tab.upgrade_reason.auto_approved_available_seat.edit_file_with_resource", {
            user: e,
            resourceName: i
          });
        case FUpgradeReasonType.DRAFTS_SHARE:
        case FSeatAssignmentReasonType.DRAFTS_SHARE:
        case FUpgradeReasonType.RESTRICTED_DRAFT_SHARED_EMAIL:
        case FSeatAssignmentReasonType.RESTRICTED_DRAFT_SHARED_EMAIL:
        case FUpgradeReasonType.IN_EDITOR_RESTRICTED_DRAFT:
        case FSeatAssignmentReasonType.IN_EDITOR_RESTRICTED_DRAFT:
          return getI18nString("admin_settings.people_tab.upgrade_reason.auto_approved_available_seat.drafts_share_with_resource", {
            user: e,
            resourceName: i
          });
        case FUpgradeReasonType.RESOURCE_MOVED_FROM_ORG_DRAFTS:
          return getI18nString("admin_settings.people_tab.upgrade_reason.auto_approved_available_seat.file_move_from_draft_with_resource", {
            user: e,
            resourceName: i
          });
        case FUpgradeReasonType.PUBLISH_SITES:
        case FSeatAssignmentReasonType.PUBLISH_SITES:
          return getI18nString("admin_settings.people_tab.upgrade_reason.auto_approved_available_seat.publish_sites", {
            user: e,
            resourceName: i
          });
      } else switch (r) {
        case FUpgradeReasonType.CREATE_FILE:
        case FSeatAssignmentReasonType.CREATE_FILE:
          return getI18nString("admin_settings.people_tab.upgrade_reason.auto_approved_with_available_seat.create_file_without_resource", {
            user: e
          });
        case FUpgradeReasonType.DEV_MODE:
        case FSeatAssignmentReasonType.DEV_MODE:
          return getI18nString("admin_settings.people_tab.upgrade_reason.auto_approved_with_available_seat.dev_mode_without_resource", {
            user: e
          });
        case FUpgradeReasonType.EDIT_ACTION:
        case FUpgradeReasonType.EDIT_BUTTON:
        case FSeatAssignmentReasonType.EDIT_ACTION:
        case FSeatAssignmentReasonType.EDIT_BUTTON:
          return getI18nString("admin_settings.people_tab.upgrade_reason.auto_approved_with_available_seat.edit_file_without_resource", {
            user: e
          });
        case FUpgradeReasonType.DRAFTS_SHARE:
        case FSeatAssignmentReasonType.DRAFTS_SHARE:
        case FUpgradeReasonType.RESTRICTED_DRAFT_SHARED_EMAIL:
        case FSeatAssignmentReasonType.RESTRICTED_DRAFT_SHARED_EMAIL:
        case FUpgradeReasonType.IN_EDITOR_RESTRICTED_DRAFT:
        case FSeatAssignmentReasonType.IN_EDITOR_RESTRICTED_DRAFT:
          return getI18nString("admin_settings.people_tab.upgrade_reason.auto_approved_with_available_seat.drafts_share_without_resource", {
            user: e
          });
        case FUpgradeReasonType.RESOURCE_MOVED_FROM_ORG_DRAFTS:
        case FSeatAssignmentReasonType.RESOURCE_MOVED_FROM_PLAN_DRAFTS:
          return getI18nString("admin_settings.people_tab.upgrade_reason.auto_approved_with_available_seat.file_move_from_draft_without_resource", {
            user: e
          });
        case FUpgradeReasonType.PUBLISH_SITES:
        case FSeatAssignmentReasonType.PUBLISH_SITES:
          return getI18nString("admin_settings.people_tab.upgrade_reason.auto_approved_available_seat.publish_sites_without_resource", {
            user: e
          });
      }
      break;
    case FApprovalMethodType.MANUAL_APPROVED:
    case FApprovalMethodType.MANUAL_APPROVED_NO_AVAILABLE_SEAT:
      if (n) {
        if (i) switch (r) {
          case FUpgradeReasonType.CREATE_FILE:
            return getI18nString("admin_settings.people_tab.upgrade_reason.manual_approved.create_file_with_resource", {
              user: e,
              actor: n,
              resourceName: i
            });
          case FUpgradeReasonType.DEV_MODE:
            return getI18nString("admin_settings.people_tab.upgrade_reason.manual_approved.dev_mode_with_resource", {
              user: e,
              actor: n,
              resourceName: i
            });
          case FUpgradeReasonType.EDIT_ACTION:
          case FUpgradeReasonType.EDIT_BUTTON:
            return getI18nString("admin_settings.people_tab.upgrade_reason.manual_approved.edit_file_with_resource", {
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
            return getI18nString("admin_settings.people_tab.upgrade_reason.manual_approved.drafts_share_with_resource", {
              user: e,
              actor: n,
              resourceName: i
            });
          case FUpgradeReasonType.RESOURCE_MOVED_FROM_ORG_DRAFTS:
            return getI18nString("admin_settings.people_tab.upgrade_reason.manual_approved.file_move_from_draft_with_resource", {
              user: e,
              actor: n,
              resourceName: i
            });
          case FUpgradeReasonType.ADMIN_UPGRADE:
          case FSeatAssignmentReasonType.ADMIN_UPGRADE:
            return getI18nString("admin_settings.people_tab.upgrade_reason.manual_approved.admin_upgrade.v2", {
              user: e,
              actor: n
            });
        } else switch (r) {
          case FUpgradeReasonType.CREATE_FILE:
          case FSeatAssignmentReasonType.CREATE_FILE:
            return getI18nString("admin_settings.people_tab.upgrade_reason.manual_approved.create_file_without_resource", {
              user: e,
              actor: n
            });
          case FUpgradeReasonType.DEV_MODE:
          case FSeatAssignmentReasonType.DEV_MODE:
            return getI18nString("admin_settings.people_tab.upgrade_reason.manual_approved.dev_mode_without_resource", {
              user: e,
              actor: n
            });
          case FUpgradeReasonType.EDIT_ACTION:
          case FUpgradeReasonType.EDIT_BUTTON:
          case FSeatAssignmentReasonType.EDIT_ACTION:
          case FSeatAssignmentReasonType.EDIT_BUTTON:
            return getI18nString("admin_settings.people_tab.upgrade_reason.manual_approved.edit_file_without_resource", {
              user: e,
              actor: n
            });
          case FUpgradeReasonType.DRAFTS_SHARE:
          case FSeatAssignmentReasonType.DRAFTS_SHARE:
          case FUpgradeReasonType.RESTRICTED_DRAFT_SHARED_EMAIL:
          case FSeatAssignmentReasonType.RESTRICTED_DRAFT_SHARED_EMAIL:
          case FUpgradeReasonType.IN_EDITOR_RESTRICTED_DRAFT:
          case FSeatAssignmentReasonType.IN_EDITOR_RESTRICTED_DRAFT:
            return getI18nString("admin_settings.people_tab.upgrade_reason.manual_approved.drafts_share_without_resource", {
              user: e,
              actor: n
            });
          case FUpgradeReasonType.RESOURCE_MOVED_FROM_ORG_DRAFTS:
          case FSeatAssignmentReasonType.RESOURCE_MOVED_FROM_PLAN_DRAFTS:
            return getI18nString("admin_settings.people_tab.upgrade_reason.manual_approved.file_move_from_draft_without_resource", {
              user: e,
              actor: n
            });
          case FUpgradeReasonType.ADMIN_UPGRADE:
          case FSeatAssignmentReasonType.ADMIN_UPGRADE:
            return getI18nString("admin_settings.people_tab.upgrade_reason.manual_approved.admin_upgrade.v2", {
              user: e,
              actor: n
            });
        }
      }
      break;
    case FApprovalMethodType.SCIM:
      if (s) {
        let t = $$p11(s);
        return getI18nString("admin_settings.people_tab.upgrade_reason.scim.scim", {
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
            if (n) return getI18nString("admin_settings.people_tab.upgrade_reason.admin_initiated.admin_upgrade", {
              user: e,
              seatType: t,
              actor: n
            });
            break;
          case FUpgradeReasonType.INVITE_REDEEM:
          case FSeatAssignmentReasonType.INVITE_REDEEM:
            if (n) return getI18nString("admin_settings.people_tab.upgrade_reason.admin_initiated.invite_redeem", {
              user: e,
              seatType: t,
              actor: n
            });
            return getI18nString("admin_settings.people_tab.upgrade_reason.admin_initiated.invite_redeem.no_actor_fallback", {
              user: e,
              seatType: t
            });
          case FUpgradeReasonType.SEAT_MANAGEMENT_AT_SELF_SERVE_CHECKOUT:
          case FSeatAssignmentReasonType.CHECKOUT:
            return getI18nString("admin_settings.people_tab.upgrade_reason.admin_initiated.checkout", {
              user: e,
              seatType: t
            });
        }
      }
      break;
    case FApprovalMethodType.ADMIN_SELF_UPGRADE:
      return getI18nString("admin_settings.people_tab.upgrade_method.admin_self_upgrade.description");
    case FApprovalMethodType.FIGMA_ADMIN:
      switch (r) {
        case FUpgradeReasonType.SUPPORT_DRIVEN_ORG_MIGRATION:
        case FUpgradeReasonType.SUPPORT_DRIVEN_ORG_MERGE:
        case FUpgradeReasonType.SUPPORT_DRIVEN_TEAM_ADDITION:
        case FUpgradeReasonType.FIGMA_ADMIN:
          if (s) return getI18nString("admin_settings.people_tab.upgrade_reason.figma_admin.figma_admin", {
            user: e,
            seatType: $$p11(s)
          });
          break;
        case FUpgradeReasonType.SCIM_RECOVERY:
          if (s) return getI18nString("admin_settings.people_tab.upgrade_reason.figma_admin.scim_recovery", {
            user: e,
            seatType: $$p11(s)
          });
          break;
        case FUpgradeReasonType.ORG_MERGE:
          if (s) return getI18nString("admin_settings.people_tab.upgrade_reason.figma_admin.org_merge", {
            user: e,
            seatType: $$p11(s)
          });
          break;
        case FUpgradeReasonType.TEAM_ADDED_TO_ORG_THROUGH_FIGMA_ADMIN:
          if (s) return getI18nString("admin_settings.people_tab.upgrade_reason.figma_admin.team_added_to_org_through_figma_admin", {
            user: e,
            seatType: $$p11(s)
          });
          break;
        case FUpgradeReasonType.PAID_STATUS_ON_ORG_CREATION:
        case FUpgradeReasonType.SEAT_MANAGEMENT_AT_SELF_SERVE_CHECKOUT:
          if (s) return getI18nString("admin_settings.people_tab.upgrade_reason.figma_admin.paid_status_on_org_creation", {
            user: e,
            seatType: $$p11(s)
          });
      }
      break;
    case null:
      return getI18nString("admin_settings.people_tab.upgrade_method.migrated");
  }
  return n ? getI18nString("admin_settings.people_tab.upgrade_reason.fallback.with_actor", {
    actor: n,
    user: e
  }) : getI18nString("admin_settings.people_tab.upgrade_reason.fallback.without_actor", {
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