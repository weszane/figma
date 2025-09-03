import { throwTypeError } from "../figma_app/465776";
import { fc, z } from "../905/239603";
import { cD } from "../905/513035";
import { FPlanFeatureType, FUserRoleType, FProductAccessType } from "../figma_app/191312";
import { t } from "../905/769341";
import { QT } from "../figma_app/576636";
import { m } from "../905/499884";
import { P } from "../figma_app/565016";
import { aw } from "../figma_app/175992";
import { C } from "../905/334042";
let _ = fc(FPlanFeatureType);
let h = fc(FUserRoleType);
export var $$m4 = (e => (e.SELF_SELECTED = "self", e.SELF_SELECTED_NOT_LISTED = "not listed", e.SELF_SELECTED_DONT_KNOW = "don't know", e.SCIM_GROUP = "scim_group", e.MOVED_BY_ADMIN = "moved", e.AUTO_ASSIGNED = "auto", e))($$m4 || {});
let g = z.nativeEnum($$m4);
let f = z.object({
  id: z.string(),
  license_group_id: z.string().nullable(),
  org_user_id: z.string(),
  assigned_at: z.string(),
  created_at: z.string(),
  actor_user_id: z.string().nullable(),
  update_reason: g,
  updated_at: z.string(),
  idp_group: m.nullable().optional(),
  idp_group_uuid: z.string().nullish()
});
let E = z.object({
  id: z.string(),
  license_group_id: z.string().nullable(),
  org_user_id: z.string(),
  created_at: z.string(),
  updated_at: z.string()
});
FPlanFeatureType.FULL;
FPlanFeatureType.STARTER;
FPlanFeatureType.RESTRICTED;
var $$y3 = (e => (e[e.GUEST = 0] = "GUEST", e[e.MEMBER = 2] = "MEMBER", e[e.ADMIN = 3] = "ADMIN", e))($$y3 || {});
var $$b2 = (e => (e.ORG_USER = "org_user", e.IDP_USER = "idp_user", e.ORG_INVITE = "org_invite", e))($$b2 || {});
let $$T0 = z.object({
  design_paid_status: _,
  whiteboard_paid_status: _,
  dev_mode_paid_status: _,
  id: z.string(),
  org_id: z.string(),
  user_id: z.string(),
  user: aw,
  permission: h,
  description: z.string().nullish(),
  drafts_folder_id: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  disabled_at: z.string().nullish(),
  account_type: z.string().optional(),
  account_type_changed_at: z.string().optional(),
  last_edit: z.string().nullish(),
  last_seen: z.string().nullish(),
  last_design_edit: z.union([z.string(), t]).nullish(),
  last_whiteboard_edit: z.union([z.string(), t]).nullish(),
  last_design_seen: z.union([z.string(), t]).nullish(),
  last_whiteboard_seen: z.union([z.string(), t]).nullish(),
  last_dev_mode_seen: z.union([z.string(), t]).nullish(),
  scim_account_type: z.string().nullish(),
  scim_whiteboard_paid_status: z.string().nullish(),
  scim_dev_mode_paid_status: z.string().nullish(),
  scim_is_admin: z.boolean().nullish(),
  scim_seat_type: QT.nullish(),
  user_state_changed_at: z.string().optional(),
  design_upgrade_reason: P.nullish(),
  whiteboard_upgrade_reason: P.nullish(),
  dev_mode_upgrade_reason: P.nullish(),
  scim_metadata: z.record(z.string().nullish()).nullish(),
  agreed_to_community_tos_at: z.string().nullish(),
  license_group_member: f.nullish(),
  license_group_admins: z.array(E).optional(),
  license_admin: z.boolean().optional(),
  is_email_validated: z.boolean().optional().nullable(),
  show_figjam_user_onboarding: z.boolean().nullable(),
  has_shown_figjam_admin_onboarding: z.boolean().nullable(),
  has_shown_figjam_admin_launch_onboarding: z.boolean().nullable(),
  ecc_upgrading_locked: z.boolean().nullish(),
  type: z.literal("org_user").$$default("org_user"),
  workspace_users: z.array(C).optional(),
  is_dev_mode_beta_user: z.boolean().optional(),
  active_seat_type: cD.nullish(),
  active_seat_upgrade_date: z.string().optional(),
  active_seat_upgrade_method: P.nullish(),
  job_title: z.string().optional()
});
let $$I1 = $$T0;
function S(e, t) {
  switch (t) {
    case FProductAccessType.DESIGN:
      return e.design_paid_status;
    case FProductAccessType.WHITEBOARD:
      return e.whiteboard_paid_status;
    case FProductAccessType.DEV_MODE:
      return e.dev_mode_paid_status;
    default:
      throwTypeError(t);
  }
}
export function $$v5(e, t) {
  switch (t) {
    case FProductAccessType.DESIGN:
    case FProductAccessType.WHITEBOARD:
      return S(e, t);
    case FProductAccessType.DEV_MODE:
      return S(e, FProductAccessType.DESIGN) === FPlanFeatureType.FULL ? FPlanFeatureType.FULL : S(e, t);
    default:
      throwTypeError(t);
  }
}
export const Ru = $$T0;
export const WU = $$I1;
export const Wd = $$b2;
export const jh = $$y3;
export const kc = $$m4;
export const x0 = $$v5;