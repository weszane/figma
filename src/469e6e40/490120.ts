import { jsx } from "react/jsx-runtime";
import { xk } from "@stylexjs/stylex";
import { tx, t as _$$t } from "../905/303541";
import { FEventSourceType } from "../figma_app/191312";
let l = {
  boldText: {
    fontWeight: "xh88oxj",
    $$css: !0
  }
};
export function $$o0(e, t, a, o) {
  let d = {
    userName: jsx("span", {
      ...xk(!!o && l.boldText),
      children: e
    }),
    planName: jsx("span", {
      ...xk(!!o && l.boldText),
      children: t
    }),
    ...(o && {
      permission: o
    })
  };
  if (!a) return {
    longText: tx(o ? "admin_settings.plan_user_membership_record.reason.long.before_tracking_with_permission" : "admin_settings.plan_user_membership_record.reason.long.before_tracking", d),
    shortText: _$$t("admin_settings.plan_user_membership_record.reason.short.before_tracking")
  };
  let c = a.actor?.name ?? "";
  let _ = a.resourceName ?? "";
  let u = a.resourceType;
  let m = ("loaded" === a.metadata.status && a.metadata.data?.previous_team_name) ?? "";
  let p = jsx("span", {
    ...xk(!!o && l.boldText),
    children: c
  });
  let g = jsx("span", {
    ...xk(!!o && l.boldText),
    children: _
  });
  let h = jsx("span", {
    ...xk(!!o && l.boldText),
    children: m
  });
  switch (a.source) {
    case FEventSourceType.FILE_MOVE:
      if (m) return {
        longText: tx(o ? "admin_settings.plan_user_membership_record.reason.long.file_move_with_permission" : "admin_settings.plan_user_membership_record.reason.long.file_move", {
          ...d,
          resourceName: g,
          actorName: p,
          previousTeamName: h
        }),
        shortText: _$$t("admin_settings.plan_user_membership_record.reason.short.file_move")
      };
      return {
        longText: tx(o ? "admin_settings.plan_user_membership_record.reason.long.file_move_without_previous_team_with_permission" : "admin_settings.plan_user_membership_record.reason.long.file_move_without_previous_team", {
          ...d,
          resourceName: g,
          actorName: p
        }),
        shortText: _$$t("admin_settings.plan_user_membership_record.reason.short.file_move")
      };
    case FEventSourceType.COMMENT_MENTION:
      return {
        longText: tx(o ? "admin_settings.plan_user_membership_record.reason.long.comment_mention_with_permission" : "admin_settings.plan_user_membership_record.reason.long.comment_mention", {
          ...d,
          resourceName: g,
          actorName: p
        }),
        shortText: _$$t("admin_settings.plan_user_membership_record.reason.short.comment_mention")
      };
    case FEventSourceType.TEAM_EXTRACTION:
      return {
        longText: tx(o ? "admin_settings.plan_user_membership_record.reason.long.team_extraction_with_permission" : "admin_settings.plan_user_membership_record.reason.long.team_extraction", {
          ...d,
          resourceName: g,
          previousTeamName: h
        }),
        shortText: _$$t("admin_settings.plan_user_membership_record.reason.short.figma_support")
      };
    case FEventSourceType.FOLDER_MOVE:
      return {
        longText: tx(o ? "admin_settings.plan_user_membership_record.reason.long.folder_move_with_permission" : "admin_settings.plan_user_membership_record.reason.long.folder_move", {
          ...d,
          resourceName: g,
          actorName: p,
          previousTeamName: h
        }),
        shortText: _$$t("admin_settings.plan_user_membership_record.reason.short.project_move")
      };
    case FEventSourceType.ASSET_TRANSFER:
      if ("folder" === u) return {
        longText: tx(o ? "admin_settings.plan_user_membership_record.reason.long.asset_transfer_folder_with_permission" : "admin_settings.plan_user_membership_record.reason.long.asset_transfer_folder", {
          ...d,
          resourceName: g,
          actorName: p
        }),
        shortText: _$$t("admin_settings.plan_user_membership_record.reason.short.admin_action")
      };
      return {
        longText: tx(o ? "admin_settings.plan_user_membership_record.reason.long.asset_transfer_team_with_permission" : "admin_settings.plan_user_membership_record.reason.long.asset_transfer_team", {
          ...d,
          resourceName: g,
          actorName: p
        }),
        shortText: _$$t("admin_settings.plan_user_membership_record.reason.short.admin_action")
      };
    case FEventSourceType.AUTO_UPGRADE:
    case FEventSourceType.REQUEST_UPGRADE:
      return {
        longText: tx(o ? "admin_settings.plan_user_membership_record.reason.long.file_edit_with_permission" : "admin_settings.plan_user_membership_record.reason.long.file_edit", {
          ...d,
          resourceName: g
        }),
        shortText: _$$t("admin_settings.plan_user_membership_record.reason.short.editable_file")
      };
    case FEventSourceType.FILE_VIEW:
      return {
        longText: tx(o ? "admin_settings.plan_user_membership_record.reason.long.file_view_with_permission" : "admin_settings.plan_user_membership_record.reason.long.file_view", {
          ...d,
          resourceName: g
        }),
        shortText: _$$t("admin_settings.plan_user_membership_record.reason.short.shared_link")
      };
    case FEventSourceType.DOMAIN_CAPTURE:
      return {
        longText: tx(o ? "admin_settings.plan_user_membership_record.reason.long.domain_capture_with_permission" : "admin_settings.plan_user_membership_record.reason.long.domain_capture", d),
        shortText: _$$t("admin_settings.plan_user_membership_record.reason.short.domain_capture")
      };
    case FEventSourceType.DOMAIN_INSIGHTS:
      return {
        longText: tx(o ? "admin_settings.plan_user_membership_record.reason.long.domain_insights_with_permission" : "admin_settings.plan_user_membership_record.reason.long.domain_insights", {
          ...d,
          actorName: p
        }),
        shortText: _$$t("admin_settings.plan_user_membership_record.reason.short.admin_action")
      };
    case FEventSourceType.PLAN_JOIN_REQUEST_APPROVAL:
      if (c) return {
        longText: tx(o ? "admin_settings.plan_user_membership_record.reason.long.plan_join_request_with_inviter_with_permission" : "admin_settings.plan_user_membership_record.reason.long.plan_join_request_with_inviter", {
          ...d,
          actorName: p
        }),
        shortText: _$$t("admin_settings.plan_user_membership_record.reason.short.admin_action")
      };
      return {
        longText: tx(o ? "admin_settings.plan_user_membership_record.reason.long.plan_join_request_with_permission" : "admin_settings.plan_user_membership_record.reason.long.plan_join_request", d),
        shortText: _$$t("admin_settings.plan_user_membership_record.reason.short.admin_action")
      };
    case FEventSourceType.EDIT_REQUEST_APPROVAL:
      return {
        longText: tx(o ? "admin_settings.plan_user_membership_record.reason.long.edit_request_with_permission" : "admin_settings.plan_user_membership_record.reason.long.edit_request", {
          ...d,
          actorName: p,
          resourceName: g
        }),
        shortText: _$$t("admin_settings.plan_user_membership_record.reason.short.shared_link")
      };
    case FEventSourceType.PLAN_INVITE:
      return {
        longText: tx(o ? "admin_settings.plan_user_membership_record.reason.long.plan_invite_with_permission" : "admin_settings.plan_user_membership_record.reason.long.plan_invite", {
          ...d,
          actorName: p
        }),
        shortText: _$$t("admin_settings.plan_user_membership_record.reason.short.admin_action")
      };
    case FEventSourceType.INVITE_REDEEM:
      if ("team" === u) return {
        longText: tx(o ? "admin_settings.plan_user_membership_record.reason.long.redeem_invite_team_with_permission" : "admin_settings.plan_user_membership_record.reason.long.redeem_invite_team", {
          ...d,
          actorName: p,
          resourceName: g
        }),
        shortText: _$$t("admin_settings.plan_user_membership_record.reason.short.resource_invite")
      };
      if ("folder" === u) return {
        longText: tx(o ? "admin_settings.plan_user_membership_record.reason.long.redeem_invite_folder_with_permission" : "admin_settings.plan_user_membership_record.reason.long.redeem_invite_folder", {
          ...d,
          actorName: p,
          resourceName: g
        }),
        shortText: _$$t("admin_settings.plan_user_membership_record.reason.short.resource_invite")
      };
      return {
        longText: tx(o ? "admin_settings.plan_user_membership_record.reason.long.redeem_invite_file_with_permission" : "admin_settings.plan_user_membership_record.reason.long.redeem_invite_file", {
          ...d,
          actorName: p,
          resourceName: g
        }),
        shortText: _$$t("admin_settings.plan_user_membership_record.reason.short.resource_invite")
      };
    case FEventSourceType.JOIN_LINK_REDEEM:
      return {
        longText: tx(o ? "admin_settings.plan_user_membership_record.reason.long.join_link_with_permission" : "admin_settings.plan_user_membership_record.reason.long.join_link", d),
        shortText: _$$t("admin_settings.plan_user_membership_record.reason.short.shared_link")
      };
    case FEventSourceType.CONNECTED_PROJECT_INVITE:
      return {
        longText: tx(o ? "admin_settings.plan_user_membership_record.reason.long.connected_project_with_permission" : "admin_settings.plan_user_membership_record.reason.long.connected_project", {
          ...d,
          actorName: p,
          resourceName: g
        }),
        shortText: _$$t("admin_settings.plan_user_membership_record.reason.short.admin_action")
      };
    case FEventSourceType.BACKFILL:
    case FEventSourceType.FIGMA_ADMIN:
      return {
        longText: tx(o ? "admin_settings.plan_user_membership_record.reason.long.figma_support_with_permission" : "admin_settings.plan_user_membership_record.reason.long.figma_support", d),
        shortText: _$$t("admin_settings.plan_user_membership_record.reason.short.figma_support")
      };
    case FEventSourceType.SAML_SSO:
      return {
        longText: tx(o ? "admin_settings.plan_user_membership_record.reason.long.sso_with_permission" : "admin_settings.plan_user_membership_record.reason.long.sso", d),
        shortText: _$$t("admin_settings.plan_user_membership_record.reason.short.sso")
      };
    case FEventSourceType.ORG_MERGE:
      return {
        longText: tx(o ? "admin_settings.plan_user_membership_record.reason.long.org_merge_with_permission" : "admin_settings.plan_user_membership_record.reason.long.org_merge", {
          ...d,
          resourceName: g
        }),
        shortText: _$$t("admin_settings.plan_user_membership_record.reason.short.figma_support")
      };
    case FEventSourceType.ORG_MIGRATION:
      return {
        longText: tx(o ? "admin_settings.plan_user_membership_record.reason.long.org_migration_with_permission" : "admin_settings.plan_user_membership_record.reason.long.org_migration", d),
        shortText: _$$t("admin_settings.plan_user_membership_record.reason.short.plan_creation")
      };
    case FEventSourceType.TEAM_ADDITION:
      return {
        longText: tx(o ? "admin_settings.plan_user_membership_record.reason.long.team_addition_with_permission" : "admin_settings.plan_user_membership_record.reason.long.team_addition", {
          ...d,
          resourceName: g
        }),
        shortText: _$$t("admin_settings.plan_user_membership_record.reason.short.figma_support")
      };
    case FEventSourceType.CREATE_TEAM:
      return {
        longText: tx(o ? "admin_settings.plan_user_membership_record.reason.long.create_team_with_permission" : "admin_settings.plan_user_membership_record.reason.long.create_team", d),
        shortText: _$$t("admin_settings.plan_user_membership_record.reason.short.plan_creation")
      };
    case FEventSourceType.ORG_DOWNGRADE:
      return {
        longText: tx(o ? "admin_settings.plan_user_membership_record.reason.long.org_downgrade_with_permission" : "admin_settings.plan_user_membership_record.reason.long.org_downgrade", {
          ...d,
          resourceName: g
        }),
        shortText: _$$t("admin_settings.plan_user_membership_record.reason.short.figma_support")
      };
    case FEventSourceType.TEAM_TRANSFER:
      return {
        longText: tx(o ? "admin_settings.plan_user_membership_record.reason.long.team_transfer_with_permission" : "admin_settings.plan_user_membership_record.reason.long.team_transfer", {
          ...d,
          resourceName: g
        }),
        shortText: _$$t("admin_settings.plan_user_membership_record.reason.short.figma_support")
      };
    case FEventSourceType.PROJECT_EXTRACTION:
      return {
        longText: tx(o ? "admin_settings.plan_user_membership_record.reason.long.project_extraction_with_permission" : "admin_settings.plan_user_membership_record.reason.long.project_extraction", {
          ...d,
          previousTeamName: h,
          resourceName: g
        }),
        shortText: _$$t("admin_settings.plan_user_membership_record.reason.short.figma_support")
      };
    case FEventSourceType.VOICE_CALL:
      return {
        longText: tx(o ? "admin_settings.plan_user_membership_record.reason.long.voice_call_with_permission" : "admin_settings.plan_user_membership_record.reason.long.voice_call", {
          ...d,
          resourceName: g
        }),
        shortText: _$$t("admin_settings.plan_user_membership_record.reason.short.voice_call")
      };
    case FEventSourceType.PERSONAL_DRAFTS_MIGRATION:
    case FEventSourceType.FILE_RESTORE:
    case FEventSourceType.RESOURCE_MOVE:
    case FEventSourceType.ROLE_CREATE:
    case FEventSourceType.TEST:
    case FEventSourceType.TEST_MATERIALS:
    case FEventSourceType.USERS_ORG_MOVE:
      return {
        longText: tx(o ? "admin_settings.plan_user_membership_record.reason.long.unknown_with_permission" : "admin_settings.plan_user_membership_record.reason.long.unknown", d),
        shortText: _$$t("admin_settings.plan_user_membership_record.reason.short.unknown")
      };
    default:
      return {
        longText: tx(o ? "admin_settings.plan_user_membership_record.reason.long.unknown_with_permission" : "admin_settings.plan_user_membership_record.reason.long.unknown", d),
        shortText: _$$t("admin_settings.plan_user_membership_record.reason.short.unknown"),
        unsupported: !0
      };
  }
}
export const d = $$o0;