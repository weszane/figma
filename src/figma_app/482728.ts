import { z } from "src/905/239603";
var $$i0 = (e => (e.TEAM_CREATION_CONTROLS_ANYONE = "team_creation_controls_anyone", e.TEAM_CREATION_CONTROLS_ADMIN_ONLY = "team_creation_controls_admin_only", e))($$i0 || {});
let a = z.nativeEnum($$i0);
export var $$s2 = (e => (e.MEMBERS = "members", e.ALL_USERS = "all_users", e.DISABLED = "disabled", e))($$s2 || {});
let o = z.nativeEnum($$s2);
export var $$l3 = (e => (e.ALLOWED = "public_link_controls_setting_allowed", e.PASSWORD_REQUIRED = "public_link_controls_setting_password_required", e.EXPIRATION_REQUIRED = "public_link_controls_setting_expiration_required", e.EXP_AND_PWD_REQUIRED = "public_link_controls_setting_password_and_expiration_required", e.BANNED = "public_link_controls_setting_banned", e))($$l3 || {});
let d = z.nativeEnum($$l3);
export var $$c4 = (e => (e.ALLOWED = "allowed", e.MEMBERS_ONLY = "members_only", e.BANNED = "banned", e))($$c4 || {});
let u = z.nativeEnum($$c4);
let $$p1 = z.object({
  team_creation_controls: a.optional().nullable(),
  external_collaboration_controls: z.boolean(),
  ip_account_restriction: z.boolean().optional(),
  ip_allowlist: z.boolean().optional(),
  idle_timeout_duration_in_secs: z.number().optional().nullable(),
  autogen_password_controls: z.boolean(),
  public_link_controls_setting: d.optional().nullable(),
  public_link_controls_max_expiration: z.number().optional().nullable(),
  configured_upgrade_request_setting: o.optional().nullable(),
  configured_upgrade_request_message: z.string().optional().nullable(),
  file_export_setting: u.optional().nullable()
});
export const $q = $$i0;
export const C$ = $$p1;
export const Sm = $$s2;
export const w_ = $$l3;
export const zB = $$c4; 
