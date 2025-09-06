import { gr } from "../figma_app/243058";
import { Po, ii, F7, q, Rf, n3, IA, SG, nK, ey, Vt, yG } from "../905/859698";
import { l as _$$l } from "../905/716947";
import { z, Ip } from "../905/239603";
import { getI18nString } from "../905/303541";
import { P } from "../905/412913";
import { StyleDefinitionSchema } from "../905/96987";
import { PW } from "../905/497152";
import { T } from "../905/713325";
let $$p28 = "NO_TEAM";
let $$_20 = () => getI18nString("sidebar.drafts");
let $$h14 = "NO_CONTAINING_STATE_GROUP_ID";
let $$m40 = 200;
export var $$g12 = (e => (e.UNPUBLISH = "unpublish", e.PUBLISH = "publish", e))($$g12 || {});
let f = z.object({
  style_thumbnail: StyleDefinitionSchema.nullable().optional()
});
export function $$E26(e) {
  return z.object({
    file_key: z.string(),
    file_key_source: z.nativeEnum(P).$$default(e)
  });
}
let y = z.object({
  type: z.nativeEnum(PW),
  node_id: z.string(),
  name: z.string(),
  library_key: z.string().transform(e => _$$l(e)),
  isLocal: z.boolean().optional(),
  thumbnail_url: z.string().optional(),
  id: z.string().optional(),
  unpublished_at: z.string().optional().nullable(),
  checkpoint_id: z.string().optional(),
  canvas_url: z.string().optional(),
  updated_at: z.string().optional(),
  description: z.string().optional(),
  description_rt: z.string().optional(),
  meta: f.optional(),
  team_id: z.string().optional().nullable(),
  hub_file_id: z.string().optional().nullable(),
  ai_score: z.number().optional().nullable(),
  lexical_score: z.number().optional().nullable(),
  fuse_score: z.number().optional().nullable(),
  server_score: z.number().optional().nullable()
});
export function $$b13(e) {
  return "team" === e.library_type;
}
export function $$T42(e) {
  return "community" === e.library_type;
}
export function $$I31(e) {
  return null != e && "type" in e && e.type === $$q16;
}
export var $$S34 = (e => (e.THIRTY_DAYS = "30", e.SIXTY_DAYS = "60", e.NINETY_DAYS = "90", e.YEAR = "365", e))($$S34 || {});
export let $$v41 = {
  totalLibraries: 0,
  totalComponents: 0,
  totalStateGroups: 0,
  totalStyles: 0,
  totalVariableCollections: 0,
  totalVariables: 0,
  totalModuleAssets: 0,
  teamsWithLibraries: 0,
  files: [],
  libraryThumbnailByLibraryKey: {}
};
export function $$A10(e) {
  return void 0 !== e.component_key;
}
let $$x32 = z.string().transform(e => Po(e));
let N = z.string().transform(e => ii(e));
let C = z.string().transform(e => F7(e));
let $$w0 = y.extend({
  type: z.literal(PW.COMPONENT),
  containing_frame: T.optional(),
  publishing_client_version: z.number().optional(),
  component_key: N.optional(),
  min_node_width: z.number().optional(),
  min_node_height: z.number().optional(),
  content_hash: C.optional(),
  userFacingVersion: C,
  destination_key: N.optional(),
  sort_position: z.string().nullable().optional(),
  has_video: z.boolean().nullable().optional()
});
let O = z.string().transform(e => q(e));
let R = z.string().transform(e => Rf(e));
let L = y.extend({
  type: z.literal(PW.STATE_GROUP),
  containing_frame: T,
  fill_color: Ip.coerce.undefined(z.string().optional()),
  default_state_key: z.string(),
  destination_key: O.optional(),
  version: R,
  userFacingVersion: R
});
let $$P23 = y.extend({
  type: z.literal(PW.STYLE),
  key: z.string().transform(e => n3(e)),
  style_type: z.string().transform(e => e),
  sort_position: z.string().optional(),
  is_soft_deleted: z.boolean().optional(),
  content_hash: z.string().transform(e => IA(e)).optional(),
  userFacingVersion: z.string().transform(e => IA(e)),
  destination_key: z.string().nullish().transform(e => n3(e ?? void 0))
});
let $$D11 = L.extend({
  key: O,
  min_node_width: z.number(),
  min_node_height: z.number()
});
export function $$k37(e) {
  return "LOCAL" === e.subscriptionStatus;
}
export function $$M21(e) {
  return "LOCAL" === e.subscriptionStatus;
}
export function $$F7(e) {
  return e.every($$k37);
}
export function $$j25(e) {
  return "LOCAL" === e.subscriptionStatus || "SUBSCRIBED" === e.subscriptionStatus;
}
export function $$U8(e) {
  return !!e.isExtension;
}
export function $$B3(e) {
  return "assetId" in e && !!e.assetId;
}
export var $$G39 = (e => (e[e.STYLE = PW.STYLE] = "STYLE", e[e.VARIABLE = PW.VARIABLE] = "VARIABLE", e))($$G39 || {});
PW.COMPONENT;
PW.STATE_GROUP;
PW.STYLE;
PW.VARIABLE;
PW.VARIABLE_SET;
PW.MODULE;
PW.RESPONSIVE_SET;
PW.MANAGED_STRING;
var $$V5 = (e => (e.NEW = "NEW", e.CURRENT = "CURRENT", e.CHANGED = "CHANGED", e.DELETED = "DELETED", e.NOT_STAGED = "NOT_STAGED", e))($$V5 || {});
var $$H1 = (e => (e.LOCAL = "LOCAL", e.SUBSCRIBED_WITH_LIBRARY = "SUBSCRIBED_WITH_LIBRARY", e.SUBSCRIBED_WITHOUT_LIBRARY = "SUBSCRIBED_WITHOUT_LIBRARY", e))($$H1 || {});
var $$z18 = (e => (e[e.NONE = 0] = "NONE", e[e.ASSEMBLING_COMPONENTS = 1] = "ASSEMBLING_COMPONENTS", e[e.UPLOADING = 2] = "UPLOADING", e))($$z18 || {});
var $$W24 = (e => (e[e.LIBRARIES = 0] = "LIBRARIES", e[e.FONTS = 1] = "FONTS", e[e.UPDATES = 2] = "UPDATES", e[e.TEAM_LIBRARIES = 3] = "TEAM_LIBRARIES", e[e.RECOMMENDED = 4] = "RECOMMENDED", e))($$W24 || {});
var $$K36 = (e => (e[e.LIBRARY = 0] = "LIBRARY", e[e.HUBFILE = 1] = "HUBFILE", e))($$K36 || {});
let $$Y33 = "LibraryPreferencesModal";
let $$$6 = "SharedFontsModal";
let $$X27 = [PW.COMPONENT, PW.STATE_GROUP, PW.MODULE];
let $$q16 = "COMMUNITY_LIBRARY_FILE";
function J(e) {
  return {
    name: e.name,
    codeSyntax: e.codeSyntax,
    node_id: e.id,
    version: e.version,
    userFacingVersion: e.userFacingVersion,
    variableSetId: e.variableSetId,
    overriddenVariableID: e.overriddenVariableId,
    rootVariableKey: e.rootVariableKey,
    overrideValues: e.overrideValues
  };
}
export function $$Z22(e) {
  return {
    ...J(e.commonInfo),
    type: PW.VARIABLE_OVERRIDE,
    subscriptionStatus: "LOCAL",
    isPublishable: !1
  };
}
export function $$Q9(e) {
  return {
    ...J(e.commonInfo),
    type: PW.VARIABLE_OVERRIDE,
    subscriptionStatus: "SUBSCRIBED",
    library_key: _$$l(e.libraryKey),
    key: SG(e.key),
    isPublishable: !1
  };
}
export function $$ee29(e) {
  return !!e && "published" === e.library_publish_status && (e.num_components > 0 || e.num_state_groups > 0 || e.num_styles > 0 || e.num_variable_collections > 0 || e.num_variables > 0 || e.num_module_assets > 0 || e.num_library_assets > 0);
}
export function $$et15(e) {
  return $$ee29(e) && "team" === e.library_type;
}
export function $$er35(e) {
  return {
    type: PW.VARIABLE,
    subscriptionStatus: "LOCAL",
    variableSetId: e.setID,
    node_id: e.id,
    sortPosition: e.sortPosition,
    resolvedType: e.resolvedType,
    version: nK(e.version),
    userFacingVersion: nK(e.userFacingVersion),
    modeValues: e.modeValues,
    description: e.descriptionPlain,
    name: e.name,
    isPublishable: e.isPublishable,
    isSoftDeleted: e.isSoftDeleted,
    scopes: e.scopes,
    codeSyntax: e.codeSyntax,
    keyForPublish: ey(e.keyForPublish)
  };
}
export function $$en30(e) {
  return {
    type: PW.VARIABLE,
    subscriptionStatus: "SUBSCRIBED",
    variableSetId: e.setID,
    node_id: e.id,
    sortPosition: e.sortPosition,
    resolvedType: e.resolvedType,
    version: nK(e.version),
    userFacingVersion: nK(e.userFacingVersion),
    modeValues: e.modeValues,
    description: e.descriptionPlain,
    name: e.name,
    key: ey(e.key),
    library_key: _$$l(e.libraryKey),
    scopes: e.scopes,
    codeSyntax: e.codeSyntax,
    isSoftDeleted: e.isSoftDeleted,
    pageIds: e.pageIds
  };
}
export function $$ei4(e) {
  let t = {
    type: PW.VARIABLE_SET,
    subscriptionStatus: "LOCAL",
    node_id: e.id,
    version: Vt(e.version),
    userFacingVersion: Vt(e.userFacingVersion),
    modes: e.modes,
    name: e.name,
    isPublishable: e.isPublishable,
    defaultModeID: e.defaultModeID,
    isSoftDeleted: e.isSoftDeleted,
    variableSetError: e.variableSetError,
    isExtendable: e.isExtendable,
    keyForPublish: e.keyForPublish,
    sortPosition: e.sortPosition
  };
  return e.backingVariableSetId ? {
    ...t,
    backingVariableSetId: e.backingVariableSetId,
    rootVariableSetKey: e.rootVariableSetKey ?? yG.INVALID,
    rootVariableSetId: e.rootVariableSetId ?? gr.INVALID,
    variableSetExtensionChain: e.variableSetExtensionChain,
    isExtension: !0
  } : {
    ...t,
    isExtension: !1
  };
}
export function $$ea19(e) {
  let t = {
    type: PW.VARIABLE_SET,
    subscriptionStatus: "SUBSCRIBED",
    node_id: e.id,
    version: Vt(e.version),
    userFacingVersion: Vt(e.userFacingVersion),
    modes: e.modes,
    name: e.name,
    defaultModeID: e.defaultModeID,
    key: yG(e.key),
    library_key: _$$l(e.libraryKey),
    pageIds: e.pageIds,
    isExtendable: e.isExtendable,
    sortPosition: e.sortPosition
  };
  return e.backingVariableSetId ? {
    ...t,
    backingVariableSetId: e.backingVariableSetId,
    rootVariableSetId: e.rootVariableSetId ?? gr.INVALID,
    rootVariableSetKey: e.rootVariableSetKey ?? yG.INVALID,
    isExtension: !0,
    variableSetExtensionChain: e.variableSetExtensionChain
  } : {
    ...t,
    isExtension: !1
  };
}
export function $$es38(e) {
  return e && e.styleKey ? {
    key: e.styleKey,
    style_type: e.styleType,
    type: PW.STYLE,
    node_id: e.guid,
    name: e.name,
    isLocal: e.isLocalStyle,
    content_hash: e.styleVersionHash ?? void 0,
    userFacingVersion: IA(e.userFacingVersion),
    library_key: e.sourceLibraryKey
  } : null;
}
export function $$eo2(e) {
  return "LOCAL" === e.subscriptionStatus ? e.keyForPublish : e.key;
}
export { PW } from "../905/497152";
export const $L = $$w0;
export const AT = $$H1;
export const Av = $$eo2;
export const Do = $$B3;
export const Dt = $$ei4;
export const E8 = $$V5;
export const EJ = $$$6;
export const Fq = $$F7;
export const GI = $$U8;
export const Hr = $$Q9;
export const IV = $$A10;
export const Ko = $$D11;
export const M$ = $$g12;
export const Nf = $$b13;
export const Nv = $$h14;
export const P2 = $$et15;
export const PP = $$q16;
export const Qx = $$z18;
export const Rn = $$ea19;
export const Tb = $$_20;
export const U$ = $$M21;
export const Vk = $$Z22;
export const Vp = $$P23;
export const Wv = $$W24;
export const XN = $$j25;
export const XS = $$E26;
export const YJ = $$X27;
export const Yu = $$p28;
export const ZA = $$ee29;
export const ZI = $$en30;
export const bK = $$I31;
export const cI = $$x32;
export const cX = $$Y33;
export const jg = $$S34;
export const kz = $$er35;
export const o = $$K36;
export const s5 = $$k37;
export const sb = $$es38;
export const ub = $$G39;
export const v$ = $$m40;
export const wg = $$v41;
export const xA = $$T42;