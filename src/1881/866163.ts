import { createRemovableAtomFamily, atom, useAtomWithSubscription } from "../figma_app/27355";
import { resourceUtils } from "../905/989992";
import { getInitialOptions } from "../figma_app/169182";
import { BadgeColor } from "../figma_app/919079";
import { getI18nString } from "../905/303541";
import { convertLgSeatTypeProduct, getProductAccessTypeByKey } from "../figma_app/217457";
import { Pe, Bk } from "../4452/207203";
import { createMapperFactory, processAdditionalConfig } from "../905/508958";
import { W } from "../4452/143028";
import { FFileType, FSeatAssignmentReasonType, FPlanRestrictionType } from "../figma_app/191312";
import { TeamPeopleTableView } from "../figma_app/43951";
import { AccessLevelEnum } from "../905/557142";
import { isShadowreadOrCutover, LegacyConfigGroups } from "../figma_app/121751";
import { getPlanFeaturesTeamAtomFamily } from "../905/276025";
let m = createMapperFactory()(e => ({
  actor_id: e.camel(),
  created_at: e.camel().stringToDate(),
  reason: e.camel(),
  resource_id_or_key: e.rename("resourceId"),
  resource_type: e.camel(),
  team_id: e.camel(),
  actor_name: e.drop(),
  editor_type: e.drop(),
  resource_name: e.drop(),
  user_id: e.drop()
}));
processAdditionalConfig((e, i, t) => [e()(m), i(m)(), t(m)()]);
export function $$b0(e, i, t) {
  if (i || e.team_role?.pending) return null;
  if (!e.team_role) return t.canAdmin ? "invite" : null;
  if (e.team_role.level >= AccessLevelEnum.ADMIN) {
    if (e.canEditRole) return "revoke";
  } else if (e.canMakeAdmin) return "grant";
  return null;
}
export function $$E1(e) {
  return e.team_role?.level === AccessLevelEnum.ADMIN ? e.team_role.pending ? {
    color: BadgeColor.DEFAULT,
    text: getI18nString("team_view.settings.pending_admin")
  } : {
    color: BadgeColor.DEFAULT,
    text: getI18nString("permissions.level_name_capitalized.admin")
  } : e.team_role?.level === AccessLevelEnum.OWNER ? {
    color: BadgeColor.DEFAULT,
    text: getI18nString("permissions.level_name_capitalized.owner")
  } : e.team_role?.pending ? {
    color: BadgeColor.DEFAULT,
    subtle: !1,
    text: getI18nString("team_view.settings.pending")
  } : void 0;
}
let w = createRemovableAtomFamily(e => atom(i => {
  let t = i(getPlanFeaturesTeamAtomFamily(!0)).data;
  let n = t ? t.campfireModelEnabledAt : null;
  return isShadowreadOrCutover("migrate_team_data_to_livegraph", LegacyConfigGroups.GROUP_1) ? i(TeamPeopleTableView.Query({
    teamId: e
  })).transform(e => {
    let i = e.teamInAdmin;
    if (!i) return {};
    let t = i?.teamUsers ? Object.fromEntries(i.teamUsers.filter(e => e.user.email).map(e => {
      let {
        user,
        teamRole,
        activeSeatTypeUpgrade,
        activeDesignUserUpgrade,
        activeWhiteboardUserUpgrade,
        currentSeat
      } = e;
      let p = e.user.email;
      let f = activeDesignUserUpgrade ? {
        ...m.toSinatra(activeDesignUserUpgrade),
        editor_type: FFileType.DESIGN,
        user_id: e.user.id,
        actor_name: activeDesignUserUpgrade.actor?.name || null,
        resource_name: null
      } : void 0;
      let b = activeWhiteboardUserUpgrade ? {
        ...m.toSinatra(activeWhiteboardUserUpgrade),
        editor_type: FFileType.WHITEBOARD,
        user_id: e.user.id,
        actor_name: activeWhiteboardUserUpgrade.actor?.name || null,
        resource_name: null
      } : void 0;
      let E = W.toSinatra(user);
      let w = getInitialOptions().analyze_data_flow_v2_until;
      let h = {
        ...E,
        last_active: e.lastActive ? e.lastActive?.actionAt.getTime() / 1e3 : void 0,
        last_design_active: void 0,
        last_whiteboard_active: void 0,
        job_title: e.user.profile?.jobTitle,
        design_editor_upgrade: f,
        whiteboard_editor_upgrade: b,
        edu_edit_access_allowed: void 0,
        ecc_upgrading_locked: !!e.user.externalRestrictedOrgId,
        upgrade_reason: e.activeSeatTypeUpgrade?.reason,
        upgrade_method: e.activeSeatTypeUpgrade?.upgradeMethod,
        assigned_at: e.activeSeatTypeUpgrade?.reason === FSeatAssignmentReasonType.DEVELOPER_BUNDLE_OPT_IN || e.activeSeatTypeUpgrade?.reason === FSeatAssignmentReasonType.CONVERTED_FROM_LICENSE_TYPE ? n || w && new Date(w) || void 0 : activeSeatTypeUpgrade?.createdAt,
        upgrade_actor_name: activeSeatTypeUpgrade?.actor?.name || void 0,
        team_user: {
          id: e.id,
          user_id: e.user.id,
          team_id: i.id,
          active_seat_type: convertLgSeatTypeProduct(activeSeatTypeUpgrade?.billableProduct) || null,
          design_paid_status: FPlanRestrictionType.STARTER,
          whiteboard_paid_status: FPlanRestrictionType.STARTER,
          show_figjam_user_onboarding: !1,
          created_at: "",
          updated_at: ""
        },
        view_roles: {
          file_count: 0,
          folder_count: 0
        },
        canEditRole: !!(teamRole && teamRole.canEdit && teamRole.level !== AccessLevelEnum.OWNER),
        canMakeAdmin: !!teamRole && !!i.team.canAdmin,
        canMakeOwner: !!teamRole && !!i.team.isOwner,
        canRemoveUser: teamRole ? teamRole?.level < AccessLevelEnum.OWNER : !!e.user.id,
        current_seat_billing_interval: currentSeat?.billingInterval || void 0
      };
      return [p, teamRole ? {
        ...h,
        team_role: Pe(teamRole, user),
        edit_roles: void 0
      } : {
        ...h,
        team_role: void 0,
        edit_roles: {
          whiteboard_files: [],
          design_files: [],
          folders: []
        }
      }];
    })) : {};
    let a = i.team?.pendingRoles ? Object.fromEntries(i.team.pendingRoles.filter(e => !!e.pendingEmail).map(e => {
      let t = e.pendingEmail;
      return [t, {
        id: void 0,
        name: void 0,
        email: t,
        job_title: void 0,
        team_role: {
          ...Bk(e, {
            id: e.userId,
            email: t
          }),
          invite: e.invite?.billableProductKey ? {
            ...e.invite,
            billableProductKey: getProductAccessTypeByKey(e.invite.billableProductKey),
            inviteeUserId: e.invite.inviteeUserId || null
          } : null
        },
        last_active: void 0,
        design_editor_upgrade: void 0,
        whiteboard_editor_upgrade: void 0,
        last_design_active: void 0,
        last_whiteboard_active: void 0,
        team_user: void 0,
        edu_edit_access_allowed: void 0,
        ecc_upgrading_locked: void 0,
        upgrade_reason: void 0,
        upgrade_method: void 0,
        assigned_at: void 0,
        upgrade_actor_name: void 0,
        edit_roles: void 0,
        view_roles: void 0,
        canEditRole: e.canEdit,
        canMakeAdmin: !!i.team.canAdmin,
        canMakeOwner: !!i.team.isOwner,
        canRemoveUser: e.level < AccessLevelEnum.OWNER
      }];
    })) : {};
    let o = {
      ...t
    };
    for (let [e, i] of Object.entries(a)) {
      let t = o[e];
      t && t.team_role || (t && i.team_role ? o[e] = {
        ...t,
        team_role: i.team_role,
        canEditRole: i.canEditRole,
        canMakeAdmin: i.canMakeAdmin,
        canRemoveUser: i.canRemoveUser
      } : o[e] = i);
    }
    return o;
  }) : resourceUtils.disabled();
}));
export function $$h2(e) {
  return useAtomWithSubscription(w(e));
}
export const k_ = $$b0;
export const BP = $$E1;
export const TG = $$h2;