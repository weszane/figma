import { z as zod } from 'zod';
import { ProductStatus, ProductSource } from '../905/54385';
import { Ip } from '../905/239603';
import { fe } from '../905/272080';
import { Y } from '../905/344937';
import { getFeatureFlags } from '../905/601108';
import { CommunityRatingStatsContainerSchema } from '../905/796201';
import { n as _$$n } from '../905/875063';
import { I7, xK } from '../figma_app/10554';
import { M } from '../figma_app/70618';
import { Ni } from '../figma_app/188152';
import { FPinStatusType, FPublicationStatusType, FPublisherType } from '../figma_app/191312';
import { fE, Fy } from '../figma_app/809727';
import { MM } from '../figma_app/979658';

/**
 * Plugin install status enum (original: $$f35)
 */
export enum PluginInstallStatus {
  PUBLIC_PLUGINS_DISALLOWED = 0,
  PLUGIN_NOT_ORG_APPROVED = 1,
  PLUGIN_INSTALLED_FOR_ORG = 2,
  PLUGIN_INSTALLED_FOR_USER = 3,
  PLUGIN_INSTALLABLE = 4,
}

/**
 * Editor type enum (original: $$E7)
 */
export enum EditorType {
  FIGMA = 'design',
  FIGJAM = 'whiteboard',
  UNIVERSAL = 'design_and_whiteboard',
  INSPECT = 'inspect',
  FIGMA_AND_INSPECT = 'design_and_inspect',
}

/**
 * Manifest error type enum (original: $$y28)
 */
export enum ManifestErrorType {
  LOAD = 'LOAD',
  PARSE = 'PARSE',
  VALIDATE = 'VALIDATE',
}

/**
 * Plugin type enum (original: $$b0)
 */
export enum PluginType {
  Plugin = 'plugin',
  Widget = 'widget',
}

/**
 * Zod schemas for manifest validation (original: T, v, x, N, O, R, P, k, F, j, U, B, G, V, H, ppppp)
 */
export const ManifestErrorSchema = zod.object({
  type: zod.nativeEnum(ManifestErrorType),
  text: zod.string()
});
export const RelauchButtonSchema = zod.object({
  command: zod.string(),
  name: zod.string(),
  multipleSelection: zod.boolean().optional()
});
export const PermissionSchema = zod.object({
  name: zod.string(),
  key: zod.string(),
  description: zod.string().optional(),
  optional: zod.boolean().optional(),
  allowFreeform: zod.boolean().optional()
});
export const PermissionsArraySchema = zod.array(PermissionSchema);
export const SelectOptionSchema = zod.object({
  label: zod.string(),
  value: zod.string(),
  isDefault: zod.boolean().optional()
});
export const ActionSchema = zod.object({
  itemType: zod.literal('action'),
  propertyName: zod.string(),
  includedLanguages: zod.array(zod.string()).optional(),
  label: zod.string().optional()
});
export const UnitSchema = zod.object({
  itemType: zod.literal('unit'),
  scaledUnit: zod.string(),
  defaultScaleFactor: zod.number().optional(),
  default: zod.boolean().optional(),
  includedLanguages: zod.array(zod.string()).optional()
});
export const SelectSchema = zod.object({
  itemType: zod.literal('select'),
  propertyName: zod.string(),
  label: zod.string().optional(),
  options: zod.array(SelectOptionSchema),
  includedLanguages: zod.array(zod.string()).optional()
});
export const CodegenPreferenceSchema = zod.union([ActionSchema, UnitSchema, SelectSchema]);
export const CodegenPreferencesArraySchema = zod.array(CodegenPreferenceSchema);
export const CodegenLanguageSchema = zod.object({
  label: zod.string(),
  value: zod.string()
});
export const CommandSchema = zod.object({
  command: zod.string(),
  name: zod.string(),
  parameters: PermissionsArraySchema.optional(),
  parameterOnly: zod.boolean().optional()
});
export const SeparatorSchema = zod.object({
  separator: zod.literal(true)
});
export const MenuItemSchema = zod.object({
  name: zod.string()
}).extend({
  menu: zod.lazy(() => zod.array(zod.union([CommandSchema, SeparatorSchema, MenuItemSchema])))
});
export const NetworkAccessSchema = zod.object({
  allowedDomains: zod.array(zod.string()),
  reasoning: zod.string().optional(),
  devAllowedDomains: zod.array(zod.string()).optional()
});
export const ManifestMenuSchema = zod.union([MenuItemSchema, CommandSchema, SeparatorSchema]);

/**
 * Editor type enum for manifest (original: $$W5)
 */
export enum ManifestEditorType {
  FIGMA = 'figma',
  FIGJAM = 'figjam',
  INSPECT = 'inspect',
  DEV = 'dev',
  SITES = 'sites',
  SLIDES = 'slides',
  BUZZ = 'buzz',
}

/**
 * Manifest schema (original: $$Y32)
 */
export const ManifestSchema = zod.object({
  id: zod.string().optional(),
  name: zod.string(),
  api: zod.string(),
  main: zod.string(),
  ui: zod.union([zod.string(), zod.record(zod.string(), zod.string())]).optional(),
  build: zod.string().optional(),
  enableProposedApi: zod.boolean().optional(),
  enablePrivatePluginApi: zod.boolean().optional(),
  menu: ManifestMenuSchema.array().optional(),
  networkAccess: NetworkAccessSchema.optional(),
  relaunchButtons: RelauchButtonSchema.array().optional(),
  relatedLinkDomains: zod.array(zod.string()).optional(),
  devResourceDomains: zod.array(zod.string()).optional(),
  parameters: PermissionsArraySchema.optional(),
  parameterOnly: zod.boolean().optional(),
  editorType: Ip.filteredArray(zod.nativeEnum(ManifestEditorType)).optional(),
  containsWidget: zod.boolean().optional(),
  widgetApi: zod.string().optional(),
  permissions: Ip.filteredArray(zod.union([zod.enum(['currentuser', 'activeusers', 'teamlibrary', 'fileusers', 'payments', 'clipboardwrite']), zod.enum(['openexternal', 'analytics', 'cortex', 'debug', 'firstdraft', 'filekey', 'hidecursors', 'camera', 'microphone', 'displaycapture'])])).optional(),
  enableReadOnly: zod.boolean().optional(),
  capabilities: Ip.filteredArray(zod.enum(['textreview', 'panel', 'inspect', 'codegen', 'linkpreview', 'vscode'])).optional(),
  codegenLanguages: zod.array(CodegenLanguageSchema).optional(),
  codegenPreferences: CodegenPreferencesArraySchema.optional(),
  documentAccess: zod.enum(['dynamic-page']).optional()
});

/**
 * Plugin version, install, org, team, profile, publisher schemas (original: n)
 */
export const PluginVersionSchema = zod.object({
  id: zod.string(),
  name: zod.string().nullable(),
  version: zod.string().nullable(),
  releaseNotes: zod.string().nullable(),
  description: zod.string().nullable(),
  tagline: zod.string().nullable(),
  creatorPolicy: zod.string().nullable(),
  manifest: zod.string().nullable(),
  createdAt: zod.date(),
  iconPath: zod.string().nullable(),
  coverImagePath: zod.string().nullable(),
  codePath: zod.string().nullable(),
  plugin: zod.object({
    currentPluginVersionId: zod.string().nullable()
  })
});
export const PluginInstallSchema = zod.object({
  id: zod.string(),
  pluginId: zod.string(),
  pinnedStatus: zod.nativeEnum(FPinStatusType),
  createdAt: zod.date(),
  plugin: zod.object({
    id: zod.string(),
    currentPluginVersionId: zod.string().nullable(),
    publishingStatus: zod.nativeEnum(FPublicationStatusType).nullable(),
    isWidget: zod.boolean().nullable(),
    viewableInEditor: zod.boolean(),
    orgId: zod.string().nullable(),
    approvedAt: zod.date().nullable(),
    approvalStatus: zod.number().nullable(),
    communityPublishers: zod.lazy(() => CommunityPublisherSchema).array().nullable(),
    currentPluginVersion: PluginVersionSchema.nullable()
  }).nullable()
});
export const OrgSchema = zod.object({
  id: zod.string(),
  installedPlugins: zod.array(PluginInstallSchema)
});
export const CommunityTeamSchema = zod.object({
  id: zod.string(),
  name: zod.string()
});
export const OrgInfoSchema = zod.object({
  id: zod.string(),
  name: zod.string()
});
export const CommunityProfileSchema = zod.object({
  id: zod.string(),
  profileHandle: zod.string(),
  user: zod.object({
    id: zod.string(),
    name: zod.string().nullable()
  }).nullable(),
  team: CommunityTeamSchema.nullable(),
  org: OrgInfoSchema.nullable()
});
export const CommunityPublisherSchema = zod.object({
  role: zod.nativeEnum(FPublisherType),
  isPending: zod.boolean(),
  profile: CommunityProfileSchema
});

/**
 * Plugin metadata schemas (original: $$$15, X, $$en3, $$ei11, $$ea34)
 */
export const PluginMetadataSchema = zod.object({
  id: zod.string(),
  plugin_id: zod.string(),
  name: zod.string(),
  version: zod.string(),
  current_plugin_version_id: zod.string().optional(),
  release_notes: zod.string(),
  description: zod.string(),
  tagline: zod.string().nullable(),
  creator_policy: zod.string().nullable(),
  is_private: zod.boolean(),
  manifest: ManifestSchema,
  created_at: zod.string(),
  org_id: zod.string().optional(),
  redirect_icon_url: zod.string(),
  redirect_cover_image_url: zod.string(),
  redirect_code_url: zod.string(),
  redirect_snapshot_url: zod.string().nullish(),
  community_publishers: zod.array(CommunityPublisherSchema).optional(),
  installed_by: zod.union([zod.literal('user'), zod.literal('org')]).nullish(),
  playground_fig_file: Ip.ignore().optional(),
  playground_file_version_id: zod.string().nullish()
});
export const LocalPluginSchema = zod.object({
  plugin_id: zod.string(),
  name: zod.string(),
  manifest: ManifestSchema,
  localFileId: zod.number(),
  localFilePath: zod.string(),
  error: ManifestErrorSchema.optional(),
  cachedContainsWidget: zod.boolean().optional(),
  lastKnownPluginId: zod.string().optional(),
  testCode: zod.string().optional()
});
export const PluginVersionsRecordSchema = zod.object({
  id: zod.string(),
  versions: zod.record(PluginMetadataSchema),
  current_plugin_version_id: zod.string().nullable(),
  is_widget: zod.coerce.boolean()
});
export const PluginDetailsSchema = PluginVersionsRecordSchema.merge(zod.object({
  install_count: zod.number(),
  view_count: zod.number(),
  like_count: zod.number(),
  comment_count: zod.number(),
  category_id: zod.string().nullable(),
  roles: zod.object({
    org: zod.object({
      id: zod.string(),
      name: zod.string()
    }).optional(),
    is_public: zod.boolean().optional()
  }),
  org_id: zod.string().nullable(),
  realtime_token: zod.string(),
  created_at: zod.string(),
  redirect_thumbnail_url: zod.string().nullable(),
  thumbnail_url: zod.string().nullable(),
  tags: zod.array(zod.string()).optional(),
  tags_v2: zod.record(zod.string()).optional(),
  current_user_has_run: zod.boolean().optional(),
  current_user_first_ran_at: zod.string().nullish(),
  unique_run_count: zod.number(),
  editor_type: zod.nativeEnum(EditorType),
  unpublished_at: zod.string().nullable(),
  support_contact: zod.string().nullable(),
  comments_setting: zod.nativeEnum(Ni).nullable(),
  related_content: M(zod.lazy(() => PluginDetailsSchema)),
  hide_related_content_by_others: zod.coerce.boolean().optional(),
  publishing_status: zod.nativeEnum(FPublicationStatusType).nullable(),
  score: zod.number().optional(),
  install_status: zod.nativeEnum(PluginInstallStatus).optional(),
  profile_install_status: zod.nativeEnum(PluginInstallStatus).optional(),
  commenting_is_restricted: zod.boolean(),
  monetization_status: zod.nativeEnum(ProductSource).nullish(),
  community_resource_payment: fe.optional(),
  third_party_m10n_status: zod.nativeEnum(ProductStatus).nullish(),
  creator_policy: zod.string().optional(),
  plugin_publishers: I7.optional(),
  carousel_media_urls: zod.optional(fE),
  carousel_videos: zod.optional(Fy)
})).and(xK).and(_$$n).and(Y).and(CommunityRatingStatsContainerSchema);
export const WidgetDetailsSchema = PluginDetailsSchema.and(zod.object({
  is_widget: zod.literal(true)
}));

/**
 * Checks if object matches ActionSchema (original: $$L20)
 */
export function isActionSchema(obj: unknown): boolean {
  return ActionSchema.safeParse(obj).success;
}

/**
 * Checks if object matches UnitSchema (original: $$D12)
 */
export function isUnitSchema(obj: unknown): boolean {
  return UnitSchema.safeParse(obj).success;
}

/**
 * Checks if object matches SelectSchema (original: $$M24)
 */
export function isSelectSchema(obj: unknown): boolean {
  return SelectSchema.safeParse(obj).success;
}

/**
 * Checks if localFileId exists (original: $$q23)
 */
export function hasLocalFileId(obj: any): boolean {
  return void 0 !== obj.localFileId;
}

/**
 * Checks if plugin is private and not local (original: $$J26)
 */
export function isPrivatePlugin(obj: any): boolean {
  return !hasLocalFileId(obj) && !!obj.is_private;
}

/**
 * Checks if plugin is not local and not private (original: $$Z9)
 */
export function isPublicPlugin(obj: any): boolean {
  return !hasLocalFileId(obj) && !isPrivatePlugin(obj);
}

/**
 * Checks if manifest contains widget (original: $$Q29)
 */
export function manifestContainsWidget(obj: any): boolean {
  return !!obj.manifest?.containsWidget;
}

/**
 * Checks if editor type includes 'dev' or 'inspect' (original: $$ee13)
 */
export function isDevOrInspect(types: string[]): boolean {
  return !!(types?.includes('dev') || types?.includes('inspect'));
}

/**
 * Determines plugin allow list (original: $$et31)
 */
export function isPluginAllowListed(plugin: any, allowList: Record<string, any>, orgSettings: any): boolean {
  return !!(!orgSettings || !plugin || isPrivatePlugin(plugin) || hasLocalFileId(plugin)) || !!orgSettings.public_plugins_allowed && (manifestContainsWidget(plugin) ? !orgSettings.widgets_whitelist_enforced : !orgSettings.plugins_whitelist_enforced) || !!allowList[plugin?.plugin_id];
}

/**
 * Checks if plugin is migrating (original: $$es27)
 */
export function isMigratingPlugin(obj: any): boolean {
  return obj.third_party_m10n_status === ProductStatus.MIGRATING;
}

/**
 * Checks if object is a command (original: $$ed2)
 */
export function isCommand(obj: any): boolean {
  return 'command' in obj && 'name' in obj;
}

/**
 * Checks if object is a separator (original: $$ec1)
 */
export function isSeparator(obj: any): boolean {
  return 'separator' in obj && obj.separator;
}

/**
 * Checks if object is a menu (original: $$eu36)
 */
export function isMenu(obj: any): boolean {
  return 'name' in obj && 'menu' in obj;
}

/**
 * Symbol for relaunch mixed description (original: $$ep16)
 */
export const relaunchMixedDescription = Symbol('relaunchMixedDescription');

/**
 * Manifest error message generator (original: $$e_25)
 */
export function manifestErrorMessage({
  type,
  text
}: {
  type: ManifestErrorType;
  text: string;
}): string | undefined {
  switch (type) {
    case ManifestErrorType.LOAD:
      return `Manifest load error: ${text}`;
    case ManifestErrorType.PARSE:
      return `Manifest not valid JSON: ${text}`;
    case ManifestErrorType.VALIDATE:
      return `Manifest error: ${text}`;
  }
}

/**
 * Publisher type enum (original: $$eh10)
 */
export enum PublisherType {
  ORG = 'ORG',
  PUBLIC = 'PUBLIC',
}

/**
 * Plugin allow list key generator (original: $$em6)
 */
export function getPluginAllowListKey(editor: string, orgId?: string): string {
  return orgId ? `GET_PLUGIN_ALLOW_LIST_${editor}_${orgId}` : `GET_PLUGIN_ALLOW_LIST_${editor}`;
}

/**
 * Widget allow list key generator (original: $$eg30)
 */
export function getWidgetAllowListKey(editor: string, orgId?: string): string {
  return orgId ? `GET_WIDGET_ALLOW_LIST_${editor}_${orgId}` : `GET_WIDGET_ALLOW_LIST_${editor}`;
}

/**
 * Run mode enum (original: ef)
 */
export const RunModeEnum = zod.enum(['default', 'textreview', 'inspect', 'codegen', 'linkpreview', 'auth']);

/**
 * Triggered from enum (original: eE)
 */
export const TriggeredFromEnum = zod.union([zod.enum(['contextmenu', 'filemenu', 'runlast', 'osmenu', 'relaunch', 'quick-actions', 'universal-insert', 'parameter-entry', 'paste_from_url', 'textreview', 'handoff-relaunch', 'handoff-panel', 'codegen', 'related-link-click', 'related-link-preview', 'related-link-auth', 'pinned', 'try-plugin-params', 'auto-run']), MM]);

/**
 * Plugin run event schema (original: $$ey14)
 */
export const PluginRunEventSchema = zod.object({
  plugin: zod.union([PluginMetadataSchema, LocalPluginSchema]),
  command: zod.string(),
  queryMode: zod.boolean(),
  runMode: RunModeEnum,
  triggeredFrom: TriggeredFromEnum,
  openFileKey: zod.string(),
  ignoreForRunLastPlugin: zod.boolean().optional(),
  deferRunEvent: zod.boolean().optional(),
  parameterValues: zod.record(zod.object({
    name: zod.string(),
    data: zod.unknown().optional(),
    icon: zod.union([zod.string(), zod.instanceof(Uint8Array)]).optional(),
    iconUrl: zod.string().optional()
  })).optional(),
  isWidget: zod.boolean(),
  widgetAction: zod.string().nullable().optional(),
  forcePluginVersionId: zod.string().nullable().optional()
});

/**
 * Exported constants (original: Ag, Au, Av, C, Dk, FW, Gb, HK, Kd, LR, Lu, Lz, MP, Pe, Ps, Px, Q7, R2, SV, UX, Wt, XS, Ye, ZQ, ZV, am, bH, f5, ho, k0, n_, ow, pL, pR, sM, u8, xg)
 */
export const Ag = PluginType;
export const Au = isSeparator;
export const Av = isCommand;
export const C = PluginVersionsRecordSchema;
export const Dk = ['textreview', 'panel', 'inspect', 'codegen', 'linkpreview', 'vscode'];
export const FW = ManifestEditorType;
export const Gb = getPluginAllowListKey;
export const HK = EditorType;
export const Kd = ['camera', 'microphone', 'displaycapture'];
export const LR = isPublicPlugin;
export const Lu = PublisherType;
export const Lz = PluginDetailsSchema;
export const MP = isUnitSchema;
export const Pe = isDevOrInspect;
export const Ps = PluginRunEventSchema;
export const Px = PluginMetadataSchema;
export const Q7 = relaunchMixedDescription;
export const R2 = zod.object({
  org: zod.object({
    id: zod.string(),
    name: zod.string()
  }).optional(),
  is_public: zod.boolean().optional()
});
export const SV = zod.object({
  name: zod.string(),
  data: zod.unknown().optional(),
  icon: zod.union([zod.string(), zod.instanceof(Uint8Array)]).optional(),
  iconUrl: zod.string().optional()
});
export const UX = ['openexternal', 'analytics', 'cortex', 'debug', 'firstdraft', 'filekey', 'hidecursors', 'camera', 'microphone', 'displaycapture'];
export const Wt = isActionSchema;
export const XS = ['currentuser', 'activeusers', 'teamlibrary', 'fileusers', 'payments', 'clipboardwrite', ...UX];
export const Ye = Object.values(ManifestEditorType).filter(e => e !== 'buzz' || !!getFeatureFlags().buzz_plugins_publishing);
export const ZQ = hasLocalFileId;
export const ZV = isSelectSchema;
export const am = manifestErrorMessage;
export const bH = isPrivatePlugin;
export const f5 = isMigratingPlugin;
export const ho = ManifestErrorType;
export const k0 = manifestContainsWidget;
export const n_ = getWidgetAllowListKey;
export const ow = isPluginAllowListed;
export const pL = ManifestSchema;
export const pR = ['currentuser', 'activeusers', 'teamlibrary', 'fileusers', 'payments', 'clipboardwrite'];
export const sM = WidgetDetailsSchema;
export const u8 = PluginInstallStatus;
export const xg = isMenu;