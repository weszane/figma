import { A } from "../905/66460";
import { getFeatureFlags } from "../905/601108";
import { nl } from "../figma_app/257275";
import { t as _$$t } from "../905/303541";
import { eM } from "../figma_app/828186";
import { tn } from "../figma_app/473493";
import { dk } from "../figma_app/789";
import { Pn } from "../905/760074";
import { MP } from "../figma_app/469876";
import { FUserRoleType, FAccessLevelType, FPermissionLevelType, FPlanNameType } from "../figma_app/191312";
import { t as _$$t2 } from "../figma_app/326667";
import { e6 } from "../905/557142";
import { Fb } from "../figma_app/630077";
import { $A } from "../905/782918";
import { Jh } from "../figma_app/552876";
import { Vj } from "../905/561485";
export function $$E7() {
  return MP() && !getFeatureFlags().integ_zoom_allow_extensions ? {
    canRun: !1,
    message: _$$t("widgets.no_zoom_widgets_plugins")
  } : {
    canRun: !0
  };
}
export function $$y10({
  copyExportRestrictedArgs: e
}) {
  return !(e && $$I9(e));
}
export function $$b6(e) {
  return $A(e.selectedView) ? tn(e) && $$y10({
    copyExportRestrictedArgs: e.openFile
  }) : !(MP() && !getFeatureFlags().integ_zoom_allow_extensions || Vj(e.selectedView) && !getFeatureFlags().sites_plugin_api || eM(e.selectedView) && !getFeatureFlags().buzz_plugins || Jh(e.selectedView)) && (!getFeatureFlags().ext_require_appropriate_seat || !!nl() || !!e.openFile?.teamId || !!e.openFile?.parentOrgId) && !e.mirror.appModel.isReadOnly;
}
export function $$T15(e) {
  if (nl() || !getFeatureFlags().ext_require_appropriate_seat) return !0;
  if (!e.user?.id) return !!dk(e.openFile);
  if (!e.openFile) return !1;
  let {
    canRunExtensions,
    canAccessFullDevMode
  } = e.openFile;
  return $A(e.selectedView) ? canAccessFullDevMode : canRunExtensions;
}
export function $$I9(e) {
  return !e.canExport;
}
export let $$S1 = A;
export function $$v19(e) {
  switch (e) {
    case FUserRoleType.GUEST:
      return _$$t("general.guest");
    case FUserRoleType.MEMBER:
      return _$$t("general.member");
    case FUserRoleType.ADMIN:
      return _$$t("general.admin");
  }
}
export function $$A0(e) {
  return _$$t2(e);
}
export function $$x13(e, t) {
  return !!(e && e.external_restricted_org_id && e.external_restricted_org_id !== t);
}
export function $$N17(e) {
  return !!(e && e.external_restricted_org_id);
}
export function $$C5(e) {
  return {
    [FAccessLevelType.PUBLIC]: _$$t("org_access_strings.anyone_at", {
      orgName: e
    }),
    [FAccessLevelType.PRIVATE]: _$$t("org_access_strings.invite_only"),
    [FAccessLevelType.SECRET]: _$$t("org_access_strings.hidden")
  };
}
export function $$w14() {
  return {
    [FAccessLevelType.PUBLIC]: _$$t("org_access_strings.open"),
    [FAccessLevelType.PRIVATE]: _$$t("org_access_strings.closed"),
    [FAccessLevelType.SECRET]: _$$t("org_access_strings.secret")
  };
}
export function $$O16() {
  return {
    [Fb.ORG_BROWSABLE]: _$$t("team_creation.visible"),
    [Fb.HIDDEN]: _$$t("team_creation.hidden")
  };
}
export function $$R11(e) {
  switch (e) {
    case e6.OWNER:
      return _$$t("permissions.level_name_capitalized.owner");
    case e6.ADMIN:
      return _$$t("permissions.level_name_capitalized.admin");
    case e6.EDITOR:
      return _$$t("permissions.level_name_capitalized.can_edit");
    case e6.VIEWER:
      return _$$t("permissions.level_name_capitalized.can_view");
    case e6.VIEW_PROTOTYPES:
      return _$$t("permissions.level_name_capitalized.can_view_prototypes");
    default:
      return _$$t("permissions.level_name_capitalized.none");
  }
}
export function $$L2(e, t) {
  switch (e) {
    case e6.OWNER:
      return t ? _$$t("permissions.level_name.branch_owner") : _$$t("permissions.level_name.owner");
    case e6.ADMIN:
      return _$$t("permissions.level_name.admin");
    case e6.EDITOR:
      return _$$t("permissions.level_name.can_edit");
    case e6.VIEWER:
      return _$$t("permissions.level_name.can_view");
    case e6.VIEW_PROTOTYPES:
      return _$$t("permissions.level_name.can_view_prototypes");
    default:
      return _$$t("permissions.level_name.none");
  }
}
export function $$P18(e) {
  switch (e) {
    case e6.OWNER:
      return _$$t("permissions.level_role_name.owner");
    case e6.ADMIN:
      return _$$t("permissions.level_role_name.admin");
    case e6.EDITOR:
      return _$$t("permissions.level_role_name.editor");
    case e6.VIEWER:
      return _$$t("permissions.level_role_name.viewer");
    case e6.VIEW_PROTOTYPES:
      return _$$t("permissions.level_role_name.prototype_viewer");
    default:
      return "";
  }
}
export function $$D4({
  role: e,
  file: t,
  folder: r = null,
  isInDraftsFolder: n = !1
}) {
  if (e.level !== e6.VIEWER && e.level !== e6.VIEW_PROTOTYPES) return null;
  let i = Pn(t);
  switch (e.level) {
    case e6.VIEWER:
      {
        if (t.link_access === FPermissionLevelType.EDIT) return _$$t("permissions.can_still_edit_anybody_with_the_link", {
          noun: i
        });
        if (t.link_access === FPermissionLevelType.ORG_EDIT && e.org_user && e.org_user.permission !== FUserRoleType.GUEST) return _$$t("permissions.can_still_edit_org_member_with_link", {
          noun: i
        });
        if (e.pending) break;
        let s = !!r && !r.is_invite_only && !r.is_view_only;
        return M(!!e.teamLevel && !n && e.teamLevel > e6.VIEWER && (!r || s), !!e.folderLevel && e.folderLevel > e6.VIEWER, !!e.repoLevel && e.repoLevel > e6.VIEWER);
      }
    case e6.VIEW_PROTOTYPES:
      {
        if (t.link_access === FPermissionLevelType.EDIT) return _$$t("permissions.can_still_see_and_edit_anybody_with_the_link_noun", {
          noun: i
        });
        if (t.link_access === FPermissionLevelType.ORG_EDIT && e.org_user && e.org_user.permission !== FUserRoleType.GUEST) return _$$t("permissions.can_still_see_and_edit_allow_editing_by_org_members_with_link", {
          noun: i
        });
        if (e.pending) break;
        let n = r && !r.is_invite_only && !r.is_view_only;
        if (e.teamLevel && e.teamLevel > e6.VIEWER && (!r || n)) return _$$t("permissions.can_still_see_and_edit_permission_team_file_is_in", {
          noun: i
        });
        if (e.folderLevel && e.folderLevel > e6.VIEWER) return _$$t("permissions.can_still_see_and_edit_permission_team_project_is_in", {
          noun: i
        });
        if (e.repoLevel && e.repoLevel > e6.VIEWER) return _$$t("permissions.can_still_see_and_edit_permission_main_file", {
          noun: i
        });
        if (t.link_access === FPermissionLevelType.VIEW) return _$$t("permissions.can_still_edit_allow_view_anybody_with_link", {
          noun: i
        });
        if (t.link_access === FPermissionLevelType.ORG_VIEW && e.org_user && e.org_user.permission !== FUserRoleType.GUEST) return _$$t("permissions.can_still_edit_allow_edit_anybody_with_link", {
          noun: i
        });
        if (e.teamLevel && e.teamLevel >= e6.VIEWER && (!r || n)) return _$$t("permissions.can_still_see_permission_team_file_is_on", {
          noun: i
        });
        if (e.folderLevel && e.folderLevel >= e6.VIEWER) return _$$t("permissions.can_still_see_permission_project_file_is_on", {
          noun: i
        });
        if (e.repoLevel && e.repoLevel >= e6.VIEWER) return _$$t("permissions.can_still_see_edit_permission_on_main_file", {
          noun: i
        });
      }
  }
  return null;
}
export function $$k3({
  file: e,
  seenState: t,
  folder: r = null,
  isInDraftsFolder: n
}) {
  let i = Pn(e);
  if (e.link_access === FPermissionLevelType.EDIT) return _$$t("permissions.can_still_edit_anybody_with_the_link", {
    noun: i
  });
  let s = !!r && !r.is_invite_only && !r.is_view_only;
  return M(!!t.teamLevel && !n && t.teamLevel > e6.VIEWER && (!r || s), !!t.folderLevel && t.folderLevel > e6.VIEWER, !!t.repoLevel && t.repoLevel > e6.VIEWER);
}
function M(e, t, r) {
  return e ? _$$t("permissions.can_still_edit_team_permissions") : t ? _$$t("permissions.can_still_edit_folder_permissions") : r ? _$$t("permissions.can_still_edit_edit_permissions") : null;
}
export function $$F8(e, t, r) {
  return e.level !== e6.OWNER && (e.level === e6.ADMIN ? t : r);
}
export function $$j12(e) {
  return !!e && !!e.canEdit && !!e.plan && ![FPlanNameType.STARTER].includes(e.plan.tier);
}
export const $K = $$A0;
export const Ay = $$S1;
export const C1 = $$L2;
export const D8 = $$k3;
export const DN = $$D4;
export const Db = $$C5;
export const Eh = $$b6;
export const F1 = $$E7;
export const OL = $$F8;
export const Pe = $$I9;
export const Pq = $$y10;
export const QN = $$R11;
export const Qn = $$j12;
export const R$ = $$x13;
export const ZP = $$w14;
export const cb = $$T15;
export const e$ = $$O16;
export const nx = $$N17;
export const q9 = $$P18;
export const z5 = $$v19;