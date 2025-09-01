import { getFeatureFlags } from "../905/601108";
import { z as _$$z, Ip } from "../905/239603";
import { M } from "../figma_app/70618";
import { Ni } from "../figma_app/188152";
import { FPinStatusType, FPublicationStatusType, FPublisherType } from "../figma_app/191312";
import { I7, xK } from "../figma_app/10554";
import { MM } from "../figma_app/979658";
import { n as _$$n } from "../905/875063";
import { q } from "../905/796201";
import { Y } from "../905/344937";
import { fe } from "../905/272080";
import { UC, PN } from "../905/54385";
import { fE, Fy } from "../figma_app/809727";
var n;
var $$f35 = (e => (e[e.PUBLIC_PLUGINS_DISALLOWED = 0] = "PUBLIC_PLUGINS_DISALLOWED", e[e.PLUGIN_NOT_ORG_APPROVED = 1] = "PLUGIN_NOT_ORG_APPROVED", e[e.PLUGIN_INSTALLED_FOR_ORG = 2] = "PLUGIN_INSTALLED_FOR_ORG", e[e.PLUGIN_INSTALLED_FOR_USER = 3] = "PLUGIN_INSTALLED_FOR_USER", e[e.PLUGIN_INSTALLABLE = 4] = "PLUGIN_INSTALLABLE", e))($$f35 || {});
var $$E7 = (e => (e.FIGMA = "design", e.FIGJAM = "whiteboard", e.UNIVERSAL = "design_and_whiteboard", e.INSPECT = "inspect", e.FIGMA_AND_INSPECT = "design_and_inspect", e))($$E7 || {});
var $$y28 = (e => (e.LOAD = "LOAD", e.PARSE = "PARSE", e.VALIDATE = "VALIDATE", e))($$y28 || {});
var $$b0 = (e => (e.Plugin = "plugin", e.Widget = "widget", e))($$b0 || {});
let T = _$$z.object({
  type: _$$z.nativeEnum($$y28),
  text: _$$z.string()
});
let $$I8 = ["camera", "microphone", "displaycapture"];
let $$S19 = ["openexternal", "analytics", "cortex", "debug", "firstdraft", "filekey", "hidecursors", ...$$I8];
let v = _$$z.object({
  command: _$$z.string(),
  name: _$$z.string(),
  multipleSelection: _$$z.boolean().optional()
});
let $$A33 = ["currentuser", "activeusers", "teamlibrary", "fileusers", "payments", "clipboardwrite"];
let x = _$$z.object({
  name: _$$z.string(),
  key: _$$z.string(),
  description: _$$z.string().optional(),
  optional: _$$z.boolean().optional(),
  allowFreeform: _$$z.boolean().optional()
});
let N = _$$z.array(x);
let $$$$C21 = [...$$A33, ...$$S19];
[...$$$$C21];
let $$w4 = ["textreview", "panel", "inspect", "codegen", "linkpreview", "vscode"];
let O = _$$z.object({
  label: _$$z.string(),
  value: _$$z.string(),
  isDefault: _$$z.boolean().optional()
});
let R = _$$z.object({
  itemType: _$$z.literal("action"),
  propertyName: _$$z.string(),
  includedLanguages: _$$z.array(_$$z.string()).optional(),
  label: _$$z.string().optional()
});
export function $$L20(e) {
  return R.safeParse(e).success;
}
let P = _$$z.object({
  itemType: _$$z.literal("unit"),
  scaledUnit: _$$z.string(),
  defaultScaleFactor: _$$z.number().optional(),
  default: _$$z.boolean().optional(),
  includedLanguages: _$$z.array(_$$z.string()).optional()
});
export function $$D12(e) {
  return P.safeParse(e).success;
}
let k = _$$z.object({
  itemType: _$$z.literal("select"),
  propertyName: _$$z.string(),
  label: _$$z.string().optional(),
  options: _$$z.array(O),
  includedLanguages: _$$z.array(_$$z.string()).optional()
});
export function $$M24(e) {
  return k.safeParse(e).success;
}
let F = _$$z.union([R, P, k]);
let j = _$$z.array(F);
let U = _$$z.object({
  label: _$$z.string(),
  value: _$$z.string()
});
let B = _$$z.object({
  command: _$$z.string(),
  name: _$$z.string(),
  parameters: N.optional(),
  parameterOnly: _$$z.boolean().optional()
});
let G = _$$z.object({
  separator: _$$z.literal(!0)
});
let V = _$$z.object({
  name: _$$z.string()
}).extend({
  menu: _$$z.lazy(() => _$$z.array(_$$z.union([B, G, V])))
});
let H = _$$z.object({
  allowedDomains: _$$z.array(_$$z.string()),
  reasoning: _$$z.string().optional(),
  devAllowedDomains: _$$z.array(_$$z.string()).optional()
});
let z = _$$z.union([V, B, G]);
export var $$W5 = (e => (e.FIGMA = "figma", e.FIGJAM = "figjam", e.INSPECT = "inspect", e.DEV = "dev", e.SITES = "sites", e.SLIDES = "slides", e.BUZZ = "buzz", e))($$W5 || {});
let $$K22 = Object.values($$W5).filter(e => "buzz" !== e || !!getFeatureFlags().buzz_plugins_publishing);
let $$Y32 = _$$z.object({
  id: _$$z.string().optional(),
  name: _$$z.string(),
  api: _$$z.string(),
  main: _$$z.string(),
  ui: _$$z.union([_$$z.string(), _$$z.record(_$$z.string(), _$$z.string())]).optional(),
  build: _$$z.string().optional(),
  enableProposedApi: _$$z.boolean().optional(),
  enablePrivatePluginApi: _$$z.boolean().optional(),
  menu: z.array().optional(),
  networkAccess: H.optional(),
  relaunchButtons: v.array().optional(),
  relatedLinkDomains: _$$z.array(_$$z.string()).optional(),
  devResourceDomains: _$$z.array(_$$z.string()).optional(),
  parameters: N.optional(),
  parameterOnly: _$$z.boolean().optional(),
  editorType: Ip.filteredArray(_$$z.nativeEnum($$W5)).optional(),
  containsWidget: _$$z.boolean().optional(),
  widgetApi: _$$z.string().optional(),
  permissions: Ip.filteredArray(_$$z.union([_$$z.$$enum($$A33), _$$z.$$enum($$S19)])).optional(),
  enableReadOnly: _$$z.boolean().optional(),
  capabilities: Ip.filteredArray(_$$z.$$enum($$w4)).optional(),
  codegenLanguages: _$$z.array(U).optional(),
  codegenPreferences: j.optional(),
  documentAccess: _$$z.$$enum(["dynamic-page"]).optional()
});
(e => {
  e.PluginVersionSchema = _$$z.object({
    id: _$$z.string(),
    name: _$$z.string().nullable(),
    version: _$$z.string().nullable(),
    releaseNotes: _$$z.string().nullable(),
    description: _$$z.string().nullable(),
    tagline: _$$z.string().nullable(),
    creatorPolicy: _$$z.string().nullable(),
    manifest: _$$z.string().nullable(),
    createdAt: _$$z.date(),
    iconPath: _$$z.string().nullable(),
    coverImagePath: _$$z.string().nullable(),
    codePath: _$$z.string().nullable(),
    plugin: _$$z.object({
      currentPluginVersionId: _$$z.string().nullable()
    })
  });
  e.PluginInstallSchema = _$$z.object({
    id: _$$z.string(),
    pluginId: _$$z.string(),
    pinnedStatus: _$$z.nativeEnum(FPinStatusType),
    createdAt: _$$z.date(),
    plugin: _$$z.object({
      id: _$$z.string(),
      currentPluginVersionId: _$$z.string().nullable(),
      publishingStatus: _$$z.nativeEnum(FPublicationStatusType).nullable(),
      isWidget: _$$z.boolean().nullable(),
      viewableInEditor: _$$z.boolean(),
      orgId: _$$z.string().nullable(),
      approvedAt: _$$z.date().nullable(),
      approvalStatus: _$$z.number().nullable(),
      communityPublishers: _$$z.lazy(() => e.CommunityPublisherSchema).array().nullable(),
      currentPluginVersion: e.PluginVersionSchema.nullable()
    }).nullable()
  });
  e.OrgSchema = _$$z.object({
    id: _$$z.string(),
    installedPlugins: _$$z.array(e.PluginInstallSchema)
  });
  e.CommunityTeamSchema = _$$z.object({
    id: _$$z.string(),
    name: _$$z.string()
  });
  e.OrgInfoSchema = _$$z.object({
    id: _$$z.string(),
    name: _$$z.string()
  });
  e.CommunityProfileSchema = _$$z.object({
    id: _$$z.string(),
    profileHandle: _$$z.string(),
    user: _$$z.object({
      id: _$$z.string(),
      name: _$$z.string().nullable()
    }).nullable(),
    team: e.CommunityTeamSchema.nullable(),
    org: e.OrgInfoSchema.nullable()
  });
  e.CommunityPublisherSchema = _$$z.object({
    role: _$$z.nativeEnum(FPublisherType),
    isPending: _$$z.boolean(),
    profile: e.CommunityProfileSchema
  });
})(n || (n = {}));
let $$$15 = _$$z.object({
  id: _$$z.string(),
  plugin_id: _$$z.string(),
  name: _$$z.string(),
  version: _$$z.string(),
  current_plugin_version_id: _$$z.string().optional(),
  release_notes: _$$z.string(),
  description: _$$z.string(),
  tagline: _$$z.string().nullable(),
  creator_policy: _$$z.string().nullable(),
  is_private: _$$z.boolean(),
  manifest: $$Y32,
  created_at: _$$z.string(),
  org_id: _$$z.string().optional(),
  redirect_icon_url: _$$z.string(),
  redirect_cover_image_url: _$$z.string(),
  redirect_code_url: _$$z.string(),
  redirect_snapshot_url: _$$z.string().nullish(),
  community_publishers: _$$z.array(n.CommunityPublisherSchema).optional(),
  installed_by: _$$z.union([_$$z.literal("user"), _$$z.literal("org")]).nullish(),
  playground_fig_file: Ip.ignore().optional(),
  playground_file_version_id: _$$z.string().nullish()
});
let X = _$$z.object({
  plugin_id: _$$z.string(),
  name: _$$z.string(),
  manifest: $$Y32,
  localFileId: _$$z.number(),
  localFilePath: _$$z.string(),
  error: T.optional(),
  cachedContainsWidget: _$$z.boolean().optional(),
  lastKnownPluginId: _$$z.string().optional(),
  testCode: _$$z.string().optional()
});
export function $$q23(e) {
  return void 0 !== e.localFileId;
}
export function $$J26(e) {
  return !$$q23(e) && !!e.is_private;
}
export function $$Z9(e) {
  return !$$q23(e) && !$$J26(e);
}
export function $$Q29(e) {
  return !!e.manifest?.containsWidget;
}
export function $$ee13(e) {
  return !!(e?.includes("dev") || e?.includes("inspect"));
}
export function $$et31(e, t, r) {
  return !!(!r || !e || $$J26(e) || $$q23(e)) || !!r.public_plugins_allowed && (($$Q29(e) ? !r.widgets_whitelist_enforced : !r.plugins_whitelist_enforced) || !!t[e?.plugin_id]);
}
let $$er17 = _$$z.object({
  org: _$$z.object({
    id: _$$z.string(),
    name: _$$z.string()
  }).optional(),
  is_public: _$$z.boolean().optional()
});
let $$en3 = _$$z.object({
  id: _$$z.string(),
  versions: _$$z.record($$$15),
  current_plugin_version_id: _$$z.string().nullable(),
  is_widget: _$$z.coerce.boolean()
});
let $$ei11 = $$en3.merge(_$$z.object({
  install_count: _$$z.number(),
  view_count: _$$z.number(),
  like_count: _$$z.number(),
  comment_count: _$$z.number(),
  category_id: _$$z.string().nullable(),
  roles: $$er17,
  org_id: _$$z.string().nullable(),
  realtime_token: _$$z.string(),
  created_at: _$$z.string(),
  redirect_thumbnail_url: _$$z.string().nullable(),
  thumbnail_url: _$$z.string().nullable(),
  tags: _$$z.array(_$$z.string()).optional(),
  tags_v2: _$$z.record(_$$z.string()).optional(),
  current_user_has_run: _$$z.boolean().optional(),
  current_user_first_ran_at: _$$z.string().nullish(),
  unique_run_count: _$$z.number(),
  editor_type: _$$z.nativeEnum($$E7),
  unpublished_at: _$$z.string().nullable(),
  support_contact: _$$z.string().nullable(),
  comments_setting: _$$z.nativeEnum(Ni).nullable(),
  related_content: M(_$$z.lazy(() => $$ei11)),
  hide_related_content_by_others: _$$z.coerce.boolean().optional(),
  publishing_status: _$$z.nativeEnum(FPublicationStatusType).nullable(),
  score: _$$z.number().optional(),
  install_status: _$$z.nativeEnum($$f35).optional(),
  profile_install_status: _$$z.nativeEnum($$f35).optional(),
  commenting_is_restricted: _$$z.boolean(),
  monetization_status: _$$z.nativeEnum(UC).nullish(),
  community_resource_payment: fe.optional(),
  third_party_m10n_status: _$$z.nativeEnum(PN).nullish(),
  creator_policy: _$$z.string().optional(),
  plugin_publishers: I7.optional(),
  carousel_media_urls: _$$z.optional(fE),
  carousel_videos: _$$z.optional(Fy)
})).and(xK).and(_$$n).and(Y).and(q);
let $$ea34 = $$ei11.and(_$$z.object({
  is_widget: _$$z.literal(!0)
}));
export function $$es27(e) {
  return e.third_party_m10n_status === PN.MIGRATING;
}
let $$eo18 = _$$z.object({
  name: _$$z.string(),
  data: _$$z.unknown().optional(),
  icon: _$$z.union([_$$z.string(), _$$z.$$instanceof(Uint8Array)]).optional(),
  iconUrl: _$$z.string().optional()
});
let el = _$$z.record($$eo18);
export function $$ed2(e) {
  return "command" in e && "name" in e;
}
export function $$ec1(e) {
  return "separator" in e && e.separator;
}
export function $$eu36(e) {
  return "name" in e && "menu" in e;
}
export let $$ep16 = Symbol("relaunchMixedDescription");
export function $$e_25({
  type: e,
  text: t
}) {
  switch (e) {
    case "LOAD":
      return "Manifest load error: " + t;
    case "PARSE":
      return "Manifest not valid JSON: " + t;
    case "VALIDATE":
      return "Manifest error: " + t;
  }
}
export var $$eh10 = (e => (e.ORG = "ORG", e.PUBLIC = "PUBLIC", e))($$eh10 || {});
export function $$em6(e, t) {
  return t ? `GET_PLUGIN_ALLOW_LIST_${e}_${t}` : `GET_PLUGIN_ALLOW_LIST_${e}`;
}
export function $$eg30(e, t) {
  return t ? `GET_WIDGET_ALLOW_LIST_${e}_${t}` : `GET_WIDGET_ALLOW_LIST_${e}`;
}
let ef = _$$z.$$enum(["default", "textreview", "inspect", "codegen", "linkpreview", "auth"]);
let eE = _$$z.union([_$$z.$$enum(["contextmenu", "filemenu", "runlast", "osmenu", "relaunch", "quick-actions", "universal-insert", "parameter-entry", "paste_from_url", "textreview", "handoff-relaunch", "handoff-panel", "codegen", "related-link-click", "related-link-preview", "related-link-auth", "pinned", "try-plugin-params", "auto-run"]), MM]);
let $$ey14 = _$$z.object({
  plugin: _$$z.union([$$$15, X]),
  command: _$$z.string(),
  queryMode: _$$z.boolean(),
  runMode: ef,
  triggeredFrom: eE,
  openFileKey: _$$z.string(),
  ignoreForRunLastPlugin: _$$z.boolean().optional(),
  deferRunEvent: _$$z.boolean().optional(),
  parameterValues: el.optional(),
  isWidget: _$$z.boolean(),
  widgetAction: _$$z.string().nullable().optional(),
  forcePluginVersionId: _$$z.string().nullable().optional()
});
export const Ag = $$b0;
export const Au = $$ec1;
export const Av = $$ed2;
export const C = $$en3;
export const Dk = $$w4;
export const FW = $$W5;
export const Gb = $$em6;
export const HK = $$E7;
export const Kd = $$I8;
export const LR = $$Z9;
export const Lu = $$eh10;
export const Lz = $$ei11;
export const MP = $$D12;
export const Pe = $$ee13;
export const Ps = $$ey14;
export const Px = $$$15;
export const Q7 = $$ep16;
export const R2 = $$er17;
export const SV = $$eo18;
export const UX = $$S19;
export const Wt = $$L20;
export const XS = $$$$C21;
export const Ye = $$K22;
export const ZQ = $$q23;
export const ZV = $$M24;
export const am = $$e_25;
export const bH = $$J26;
export const f5 = $$es27;
export const ho = $$y28;
export const k0 = $$Q29;
export const n_ = $$eg30;
export const ow = $$et31;
export const pL = $$Y32;
export const pR = $$A33;
export const sM = $$ea34;
export const u8 = $$f35;
export const xg = $$eu36; 
