import { fc, z } from "../905/239603";
import { describeNormalized, createPrimaryKeySchema } from "../905/67898";
import { FTrialType, FPermissionLevelType, FAccessLevelType, FPlanFeatureType, FStudentTeamStatusType, FPaymentHealthStatusType, FDomainVerificationStatusType, FBasicPermissionType, FPlanLimitationType } from "../figma_app/191312";
import { bV } from "../905/13165";
import { W } from "../905/82276";
let l = fc(FTrialType);
let d = fc(FPermissionLevelType);
let c = fc(FAccessLevelType);
let u = fc(FPlanFeatureType);
let p = fc(FStudentTeamStatusType);
let _ = fc(FPaymentHealthStatusType);
let h = fc(FDomainVerificationStatusType);
let m = fc(FBasicPermissionType);
let g = fc(FPlanLimitationType);
let $$f8 = 118;
var $$E7 = (e => (e.REQUIRES_SOURCE_ACTION = "requires_source_action", e.REQUIRES_ACTION = "requires_action", e))($$E7 || {});
var $$y0 = (e => (e.ORG_BROWSABLE = "org_browsable", e.HIDDEN = "hidden", e))($$y0 || {});
export let $$b5 = describeNormalized("Team", bV.extend({
  created_at: z.string(),
  id: createPrimaryKeySchema(),
  img_url: z.string().optional(),
  org_id: z.string().nullable(),
  name: z.string(),
  description: z.string(),
  projects: z.number().nullish(),
  editors: z.number().nullish(),
  realtime_token: z.string().optional(),
  restrictions_list: z.array(g).nullable(),
  subscription: _.nullable(),
  subscription_raw: _.nullable(),
  org_access: c.nullable(),
  stripe_customer_id: z.string().nullable(),
  student_team_at: z.string().nullable(),
  student_team_state: p,
  student_autoverifying_team_at: z.string().nullable(),
  student_team: z.boolean(),
  pro_team: z.boolean(),
  org_team: z.boolean(),
  starter_team: z.boolean(),
  grace_period_end: z.string().nullable(),
  grace_period_type: l.nullable(),
  last_upgraded_at: z.string().nullable(),
  updated_at: z.string().nullable().optional(),
  deleted_at: z.string().nullable(),
  community_profile_id: z.string().optional(),
  community_profile_handle: z.string().optional(),
  license_group_id: z.string().nullable(),
  license_group: W.nullable(),
  workspace_id: z.string().nullable(),
  default_permission: m.optional().nullable(),
  is_favorited: z.boolean().optional(),
  vat_gst_id: z.string().optional(),
  tax_id_verification_status: h.optional(),
  cmty_publish_as_user_enabled: z.boolean().optional(),
  ai_features_disabled: z.boolean().optional(),
  figma_provided_libraries_disabled: z.boolean().optional(),
  legal_name: z.string().nullable(),
  design_default_paid_status: u.optional(),
  whiteboard_default_paid_status: u.optional(),
  sanctioned_at: z.string().nullable(),
  sharing_audience_control: d.optional(),
  org_browsable: z.boolean().optional(),
  hidden: z.boolean().optional()
}));
export function $$T4(e, t) {
  return t ? `${location.origin}/files/${t}/team/${e}` : `${location.origin}/files/team/${e}/all-projects`;
}
export function $$I1(e) {
  return !e.org_id && (!!e.subscription && e.subscription !== FPaymentHealthStatusType.INCOMPLETE || e.student_team);
}
var $$S2 = (e => (e.MOVE_FILES = "move_files", e.DUPLICATE_FILES = "duplicate_files", e.RESTORE_FILES = "restore_files", e.MOVE_FOLDER = "move_folder", e.IMPORT_FILES = "import_files", e.CREATE_FILE = "create_file", e.CREATE_FOLDER = "create_folder", e.CREATE_FILE_FROM_TEMPLATE = "create_file_from_template", e.CREATE_PAGE = "create_page", e.DUPLICATE_PAGE = "duplicate_page", e.CREATE_MORE_VARIABLE_MODES = "create_more_variable_modes", e.PUBLISH_MORE_VARIABLE_MODES = "publish_more_variable_modes", e.CREATE_FILE_FROM_DROPDOWN = "create_file_from_dropdown", e.INSERT_ADVANCED_SHAPE = "insert_advanced_shape", e.ACCEPT_PROJECT_CONNECTION_INVITE = "accept_project_connection_invite", e.ENABLE_MCP = "enable_mcp", e.CONNECT_DOMAIN = "connect_domain", e))($$S2 || {});
var $$v6 = (e => (e.PUBLISH_COMPONENTS = "publish_components", e.USE_AUDIO = "use_audio", e.VIEW_ONLY_PROJECT = "view_only_project", e.INVITE_ONLY_PROJECT = "invite_only_project", e))($$v6 || {});
export function $$A3(e) {
  return {
    id: e.id,
    name: e.name,
    restrictions_list: e.restrictionsList,
    subscription: e.subscription,
    student_team: !!e.studentTeamAt,
    grace_period_end: e.gracePeriodEnd?.toISOString() || null
  };
}
export const Fb = $$y0;
export const OI = $$I1;
export const ZN = $$S2;
export const Z_ = $$A3;
export const bL = $$T4;
export const kE = $$b5;
export const pE = $$v6;
export const pk = $$E7;
export const qg = $$f8; 
