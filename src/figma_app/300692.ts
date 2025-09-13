import { useSelector } from 'react-redux';
import { reportError } from '../905/11';
import { d as _$$d } from '../905/44199';
import { ProductStatus } from '../905/54385';
import { ServiceCategories as _$$e } from '../905/165054';
import { C8 } from '../905/216495';
import { VisualBellActions } from '../905/302958';
import { getI18nString } from '../905/303541';
import { debugState } from '../905/407919';
import { pluginManifestPropType, capabilitiesPropType, editorTypePropType, widgetManifestPropType } from '../905/488349';
import { isStrippedHtmlEmpty } from '../905/491152';
import { validateNetworkAccess } from '../905/544659';
import { dequeuePluginStatus } from '../905/571565';
import { getFeatureFlags } from '../905/601108';
import { logger } from '../905/651849';
import { logInfo } from '../905/714362';
import { getArrayLength, hasKey } from '../905/764747';
import { $A as _$$$A } from '../905/782918';
import { validateWithNoOpVm } from '../905/816730';
import { isVsCodeEnvironment } from '../905/858738';
import { $A } from '../905/862883';
import { J as _$$J } from '../905/896954';
import { XHR } from '../905/910117';
import { aP, o1 } from '../figma_app/10554';
import { Eh } from '../figma_app/12796';
import { FEditorType } from '../figma_app/53721';
import { am, Av, bH, Dk, f5, FW, ho, k0, Kd, Lu, MP, Pe, pR, Q7, u8, UX, Wt, xg, XS, Ye, ZQ, ZV } from '../figma_app/155287';
import { M as _$$M } from '../figma_app/170366';
import { Ni } from '../figma_app/188152';
import { FFileType } from '../figma_app/191312';
import { DK } from '../figma_app/291892';
import { xf } from '../figma_app/416935';
import { isTrustedPluginId, getPluginDomain, getPluginPermissions } from '../figma_app/455620';
import { Y5 } from '../figma_app/455680';
import { throwTypeError } from '../figma_app/465776';
import { N6 } from '../figma_app/471982';
import { jY, Ro } from '../figma_app/564095';
import { Dd, En, Ii, l8, vC, Wl, xw } from '../figma_app/599979';
import { sortByCreatedAt } from '../figma_app/656233';
import { Lg as _$$Lg, n as _$$n, Yp as _$$Yp, Hc, yO } from '../figma_app/740025';
import { Rs } from '../figma_app/761870';
import { AC } from '../figma_app/777551';
import { BrowserInfo } from '../figma_app/778880';
import { F8, Mj, mZ, vf, WD, Yp } from '../figma_app/808294';
import { isInteractionPathCheck, Lg } from '../figma_app/897289';
import { gU, YH } from '../figma_app/930338';
import { XE } from '../figma_app/976749';

/**
 * Error types for plugin operations
 */
export type PluginErrorType = 'LOAD' | 'PARSE' | 'VALIDATE';

/**
 * Plugin error structure
 */
export interface PluginError {
  type: PluginErrorType;
  text: string;
}

/**
 * Plugin manifest structure
 */
export interface PluginManifest {
  id: string;
  name: string;
  api: string;
  main: string;
  editorType?: string[];
  capabilities?: string[];
  permissions?: string[];
  relaunchButtons?: Array<{
    command: string;
    name: string;
    multipleSelection?: boolean;
  }>;
  containsWidget?: boolean;
  widgetApi?: string;
  networkAccess?: any;
  relatedLinkDomains?: string[];
  devResourceDomains?: string[];
  codegenLanguages?: Array<{
    value: string;
  }>;
  codegenPreferences?: any[];
  monetized_resource_metadata?: {
    price?: number;
    is_subscription?: boolean;
    annual_discount_percentage?: number;
    annual_discount_active_at?: boolean;
    can_increase_price?: boolean;
  };
  playground_fig_file?: any;
  parameters?: Array<{
    key: string;
    optional?: boolean;
  }>;
  menu?: any[];
}

/**
 * Plugin relaunch button structure
 */
export interface PluginRelaunchButton {
  pluginID: string;
  command: string;
  name: string;
  description: string | symbol;
}

/**
 * Plugin publishing data structure
 */
export interface PluginPublishingData {
  name?: string;
  tagline?: string;
  description?: string;
  supportContact?: string;
  iconSrc?: string;
  categoryId?: string;
  price?: number;
  isPaid?: boolean;
  hasPaymentsApi?: boolean;
  annualDiscount?: number;
  isAnnualDiscountActive?: boolean;
  playgroundFigFile?: any;
  widgetSnapshotImageSrc?: string;
  carouselMedia?: any;
  freemiumRequiredForMigrating?: string;
  isSubscription?: boolean;
  newVersionReleaseNotes?: string;
  creatorPolicy?: string;
  iconImageError?: string;
  coverImageError?: string;
  currentVersionReleaseNotes?: string;
  coverImageSrc?: string;
  widgetSnapshotImageError?: string | null;
  author: {
    user_id: string;
  };
  twoFactorAuthDisabledError?: string | null;
  emailNotVerifiedError?: string | null;
  widgetSnapshotImageBlob?: Blob | null;
  accountDetailsChangedError?: string | null;
  commentsSetting?: any;
  creators?: Array<{
    user_id: string;
  }>;
  publishers?: {
    inputValue: string;
    tokens: Array<{
      id: string;
      name: string;
      img_url: string;
    }>;
    errorMessage: string;
  };
  blockPublishingOnToS?: boolean;
  playgroundFilePublishType?: any;
}

/**
 * Plugin data structure
 */
export interface PluginData {
  id?: string;
  plugin_id: string;
  name: string;
  manifest: PluginManifest;
  localFileId: string;
  localFilePath: string;
  error: PluginError | null;
}

/**
 * Resource type for plugin operations
 */
type ResourceType = 'plugin' | 'widget' | 'unknown';

/**
 * Options for plugin loading
 */
interface PluginLoadOptions {
  ignoreMissingEditorType?: boolean;
  resourceType: ResourceType;
  isPublishing?: boolean;
}

/**
 * Plugin manifest source data
 */
export interface PluginManifestSource {
  error?: string;
  manifest?: string;
  path?: string;
  cachedContainsWidget?: boolean;
  lastKnownName?: string;
  resourceType?: ResourceType;
}

// Default manifest for widget (original: eT)
const defaultWidgetManifest: PluginManifest = {
  id: '',
  name: '',
  api: '',
  main: '',
  containsWidget: true,
  widgetApi: ''
};

// Default manifest for plugin (original: eb)
const defaultPluginManifest: PluginManifest = {
  id: '',
  name: '',
  api: '',
  main: ''
};

// Default plugin metadata (original: pluginMetadata)
const pluginMetadata = {
  id: '',
  plugin_id: '',
  manifest: {
    ...defaultPluginManifest
  },
  name: '',
  version: '',
  release_notes: '',
  installed_by: 'user',
  description: '',
  tagline: '',
  creator_policy: '',
  created_at: '',
  redirect_icon_url: '',
  redirect_cover_image_url: '',
  redirect_code_url: '',
  is_private: false
};

// Default published plugin structure (original: eS)
const defaultPublishedPlugin = {
  id: '',
  publisher: {
    is_restricted_by_current_user: false,
    id: '',
    name: '',
    img_url: '',
    img_urls: {},
    profile_handle: '',
    primary_user_id: null,
    current_user_is_following: false,
    current_user_is_followed: false,
    location: null,
    follower_count: 0,
    following_count: 0,
    entity_type: o1.USER,
    badges: [],
    description: ''
  },
  creator: {
    id: '',
    handle: '',
    img_url: ''
  },
  category_id: null,
  versions: {},
  install_count: 0,
  unique_run_count: 0,
  view_count: 0,
  like_count: 0,
  comment_count: 0,
  unpublished_at: null,
  current_plugin_version_id: '',
  roles: {},
  realtime_token: '',
  support_contact: '',
  created_at: '',
  org_id: null,
  redirect_thumbnail_url: null,
  thumbnail_url: null,
  community_publishers: {
    accepted: [],
    pending: []
  },
  comments_setting: Ni.ENABLED,
  is_widget: false,
  editor_type: 'design_and_whiteboard',
  publishing_status: null,
  badges: []
};

// Default published widget structure (original: ev)
const defaultPublishedWidget = {
  ...defaultPublishedPlugin,
  is_widget: true
};

// Default publishing data (original: eA)
const defaultPublishingData: PluginPublishingData = {
  name: '',
  currentVersionReleaseNotes: '',
  newVersionReleaseNotes: '',
  description: '',
  tagline: '',
  creatorPolicy: '',
  categoryId: '',
  iconSrc: '',
  coverImageSrc: '',
  widgetSnapshotImageSrc: '',
  widgetSnapshotImageError: null,
  supportContact: '',
  iconImageError: null,
  coverImageError: null,
  author: {
    user_id: ''
  },
  twoFactorAuthDisabledError: null,
  emailNotVerifiedError: null,
  accountDetailsChangedError: null,
  freemiumRequiredForMigrating: null,
  commentsSetting: Ni.ENABLED,
  creators: [],
  publishers: {
    inputValue: '',
    tokens: [],
    errorMessage: ''
  },
  blockPublishingOnToS: false,
  playgroundFigFile: null,
  playgroundFilePublishType: _$$J.Actions.NOOP
};

/**
 * Loads and validates a plugin manifest from a local file.
 * @param fileId - The local file ID.
 * @param options - Plugin load options.
 * @returns The validated PluginManifest.
 * @throws Error if manifest is invalid or cannot be loaded.
 */
export async function loadPluginManifest(fileId: string, options: PluginLoadOptions): Promise<PluginManifest> {
  const manifestResult = await getLocalPluginManifest(fileId, {
    resourceType: options.resourceType
  });
  if (options.ignoreMissingEditorType && manifestResult.error?.text === getMissingEditorTypeError()) return manifestResult.manifest;
  if (manifestResult.error) throw new Error(formatPluginError(manifestResult.error));
  return manifestResult.manifest;
}

/**
 * Validates plugin parameters for uniqueness and ordering.
 * @param manifest - PluginManifest containing parameters.
 * @param manifestName - Name for error context.
 * @throws Error if parameters are invalid.
 */
function validatePluginParameters({
  parameters,
  parameterOnly
}: {
  parameters?: Array<{
    key: string;
    optional?: boolean;
  }>;
  parameterOnly?: boolean;
}, manifestName: string): void {
  if (parameters) {
    // Ensure non-empty and unique keys
    if (!parameters.length) throw new Error(`Expected "${manifestName}.parameters" to have non-empty parameter list.`);
    const keySet = new Set<string>();
    parameters.forEach(param => {
      if (keySet.has(param.key)) throw new Error(`Expected "${manifestName}.parameters" to have unique keys, but got more than one parameter with key: "${param.key}"`);
      keySet.add(param.key);
    });
    // Ensure optional parameters are last
    let foundOptional = false;
    for (const {
      key,
      optional
    } of parameters) {
      if (foundOptional && !optional) throw new Error(`Optional parameters must be listed last in the parameter list. ${key} not marked as optional.`);
      if (optional) foundOptional = true;
    }
  }
  if (parameterOnly && !parameters) throw new Error(`Expected parameters to be defined for "${manifestName}" marked as parameterOnly.`);
}

/**
 * Maps FEditorType to FW type.
 */
const editorTypeToFW: Record<FEditorType, string> = {
  [FEditorType.Design]: FW.FIGMA,
  [FEditorType.DevHandoff]: FW.DEV,
  [FEditorType.Whiteboard]: FW.FIGJAM,
  [FEditorType.Slides]: FW.SLIDES,
  [FEditorType.Sites]: FW.SITES,
  [FEditorType.Figmake]: FW.SITES,
  [FEditorType.Cooper]: FW.BUZZ,
  [FEditorType.Illustration]: FW.FIGMA
};

/**
 * Returns FW type for a given FEditorType.
 * @param editorType - The editor type.
 */
export function convertEditorTypeToFileType(editorType: FEditorType): string {
  return editorTypeToFW[editorType];
}

/**
 * Maps FW type to FEditorType.
 */
const fwToEditorType: Record<string, FEditorType> = {
  [FW.FIGMA]: FEditorType.Design,
  [FW.DEV]: FEditorType.DevHandoff,
  [FW.INSPECT]: FEditorType.DevHandoff,
  [FW.FIGJAM]: FEditorType.Whiteboard,
  [FW.SLIDES]: FEditorType.Slides,
  [FW.SITES]: FEditorType.Sites,
  [FW.BUZZ]: FEditorType.Cooper
};

/**
 * Returns FEditorType for a given FW type.
 * @param fwType - The FW type.
 */
export function mapToEditorType(fwType: string): FEditorType {
  return fwToEditorType[fwType];
}

/**
 * Maps FW type to FFileType.
 * @param fwType - The FW type.
 */
export function mapToFileType(fwType: string): FFileType {
  switch (fwType) {
    case FW.FIGMA:
    case FW.DEV:
    case FW.INSPECT:
      return FFileType.DESIGN;
    case FW.FIGJAM:
      return FFileType.WHITEBOARD;
    case FW.SLIDES:
      return FFileType.SLIDES;
    case FW.SITES:
      return FFileType.SITES;
    case FW.BUZZ:
      return FFileType.COOPER;
    default:
      throwTypeError(fwType);
  }
}

/**
 * Maps FW type to $A type.
 * @param fwType - The FW type.
 */
export function resolveFrameworkType(fwType: string) {
  switch (fwType) {
    case FW.FIGMA:
      return $A.Design;
    case FW.FIGJAM:
      return $A.FigJam;
    case FW.DEV:
    case FW.INSPECT:
      return $A.Handoff;
    case FW.SLIDES:
      return $A.Slides;
    case FW.SITES:
      return $A.Design;
    case FW.BUZZ:
      return $A.Cooper;
    default:
      throwTypeError(fwType);
  }
}

/**
 * Returns the FW type for the current fullscreen selected view.
 */
export function selectorFullScreenViewEditorType() {
  return useSelector<{
    selectedView: Record<string, any>;
  }>(state => state.selectedView.view === 'fullscreen' ? editorTypeToFW[state.selectedView.editorType] : undefined);
}

/**
 * Returns the FW type for the current fullscreen selected view from debugState.
 */
export function getFullscreenViewEditorType(): string | undefined {
  const view = debugState.getState().selectedView;
  if (view.view === 'fullscreen') return editorTypeToFW[view.editorType];
}

/**
 * Checks if the editorType matches the FW type.
 * @param fwType - The FW type.
 * @param editorType - The editorType array.
 */
export function isEditorTypeMatch(fwType: string, editorType?: string[]): boolean {
  return Array.isArray(editorType) ? editorType.includes(fwType) : fwType === FW.FIGMA;
}

/**
 * Custom error for manifest validation.
 */
class ManifestValidationError extends Error {
  manifest?: PluginManifest;
  constructor(message: string, manifest?: PluginManifest) {
    super(message);
    this.message = message;
    this.manifest = manifest;
  }
}

/**
 * Returns the error message for missing editorType in manifest.
 */
export function getMissingEditorTypeError(): string {
  return `Missing editorType in manifest.  ${getEditorTypeHint()}`;
}

/**
 * Returns a hint string for valid editorType values.
 */
function getEditorTypeHint(): string {
  let validTypes = Ye.filter(e => e !== FW.INSPECT);
  if (!getFeatureFlags().buzz_plugins_publishing) validTypes = validTypes.filter(e => e !== FW.BUZZ);
  return `Specify a combination of [${validTypes.map(e => `"${e}"`).join(', ')}]`;
}

/**
 * Filters capabilities, removing those not in UX unless allowed.
 * @param capabilities - Array of capabilities.
 * @param allowedSet - Optional set of allowed capabilities.
 */
function filterCapabilities(capabilities: string[], allowedSet?: Set<string>): string[] {
  const uxSet = new Set(UX);
  return capabilities.filter(c => !uxSet.has(c) || allowedSet?.has(c));
}

/**
 * Checks if any capability in Kd is present.
 * @param capabilities - Array of capabilities.
 */
export function hasSpecialCapability(capabilities: string[]): boolean {
  return Kd.some(c => capabilities.includes(c));
}

/**
 * PluginPermissions class (original: $$ep70).
 */
export class PluginPermissions {
  permissions: string[];
  trustedPluginOrigin: string | undefined;
  constructor(permissions: string[], trustedPluginOrigin?: string) {
    this.permissions = permissions;
    this.trustedPluginOrigin = trustedPluginOrigin;
  }
  static none(): PluginPermissions {
    return new PluginPermissions([], undefined);
  }
  static forTest(permissions?: string[]): PluginPermissions {
    return new PluginPermissions(permissions || XS, undefined);
  }
  static forConsoleGlobal(): PluginPermissions {
    const perms = [...pR];
    if (getFeatureFlags().first_draft_debug) perms.push('firstdraft');
    return new PluginPermissions(perms, undefined);
  }
  static forFirstPartyPlugin(): PluginPermissions {
    return new PluginPermissions(XS, undefined);
  }
  static forLocalPlugin(plugin: PluginData): PluginPermissions {
    const perms = plugin.manifest.permissions || [];
    logInfo('ValidatedPluginPermissions', 'Validating permissions for local plugin', {
      pluginID: plugin.manifest.id,
      requestedPermissions: perms
    });
    if (getFeatureFlags().plugins_internal_apis) {
      return new PluginPermissions(perms, '*');
    }
    const filtered = filterCapabilities(perms);
    if (filtered.length < perms.length) reportError(_$$e.EXTENSIBILITY, new Error('Untrusted local plugin denied internal api permissions'));
    return new PluginPermissions(filtered, undefined);
  }
  static forInstalledPlugin(plugin: PluginData): PluginPermissions {
    const perms = plugin.manifest.permissions || [];
    logInfo('ValidatedPluginPermissions', 'Validating permissions for installed plugin', {
      pluginID: plugin.plugin_id,
      requestedPermissions: perms
    });
    if (isTrustedPluginId(plugin.plugin_id)) {
      return new PluginPermissions(filterCapabilities(perms, getPluginPermissions(plugin.plugin_id)), getPluginDomain(plugin.plugin_id));
    }
    const filtered = filterCapabilities(perms);
    if (filtered.length < perms.length) reportError(_$$e.UNOWNED, new Error('Untrusted installed plugin denied internal api permissions'));
    return new PluginPermissions(filtered, undefined);
  }
}

/**
 * Validates a URL pattern.
 * @param pattern - The URL pattern string.
 */
export function validateURLPattern(pattern: string): URLPattern | null {
  try {
    return new URLPattern(pattern);
  } catch {
    return null;
  }
}

/**
 * Joins string segments based on index pairs.
 * @param str - The string to segment.
 * @param pairs - Array of [start, end] index pairs.
 */
export function joinStringSegments(str: string, pairs: Array<[number, number]>): string {
  const segments: string[] = [];
  let lastIndex = 0;
  for (const [start, end] of pairs) {
    segments.push(str.substring(lastIndex, start));
    lastIndex = end;
  }
  segments.push(str.substring(lastIndex));
  return segments.join('');
}

/**
 * Loads and validates a plugin manifest from a manifest source.
 * @param fileId - The local file ID.
 * @param manifestSource - The manifest source object.
 * @param options - Plugin load options.
 * @returns PluginData object.
 */
export function getLocalPluginManifest(fileId: string, manifestSource: PluginManifestSource, options = {} as PluginLoadOptions): PluginData {
  let editorType: string[] | undefined;
  let capabilities: string[] | undefined;
  let manifest: PluginManifest | undefined;
  let error: PluginError | undefined;
  let validatedManifest: PluginManifest | undefined;
  let isWidget = options.resourceType === 'widget' || !!manifestSource.cachedContainsWidget;

  // Parse manifest
  if ('error' in manifestSource) {
    error = {
      type: ho.LOAD,
      text: manifestSource.error!
    };
  } else {
    try {
      manifest = JSON.parse(manifestSource.manifest!);
    } catch (e: any) {
      error = {
        type: ho.PARSE,
        text: e.message
      };
    }
  }

  // Determine widget status for unknown resourceType
  if (options.resourceType === 'unknown') {
    if (manifest) {
      isWidget = manifest.containsWidget!;
    } else if ('manifest' in manifestSource) {
      try {
        isWidget = !!/containsWidget/.test(manifestSource.manifest!);
      } catch {}
    }
  }

  // Validate manifest fields
  if (manifest) {
    try {
      validateWithNoOpVm(manifest.editorType, editorTypePropType, 'manifest.editorType');
      editorType = manifest.editorType;
    } catch {}
    try {
      validateWithNoOpVm(manifest.capabilities, capabilitiesPropType, 'manifest.capabilities');
      capabilities = manifest.capabilities;
    } catch {}
  }

  // Update cached widget status
  const desktopApi = _$$M();
  if ('manifest' in manifestSource && desktopApi?.updateCachedContainsWidget) {
    desktopApi.updateCachedContainsWidget({
      id: fileId,
      cachedContainsWidget: isWidget
    });
  }

  // Validate manifest structure
  if (!error) {
    try {
      validatedManifest = function validateManifest(manifest: PluginManifest, opts: PluginLoadOptions) {
        try {
          validateWithNoOpVm(manifest, opts.resourceType === 'widget' ? widgetManifestPropType : pluginManifestPropType, 'manifest');
        } catch (e: any) {
          if (e instanceof Error) {
            throw new TypeError(formatManifestErrorMessage(e.message));
          }
          throw e;
        }
        // Plugin-specific validation
        if (opts.resourceType === 'plugin') {
          if (manifest.relaunchButtons) {
            const commandSet = new Set<string>();
            manifest.relaunchButtons.forEach(button => {
              if (commandSet.has(button.command)) throw new ManifestValidationError(`Expected "manifest.relaunchButtons" to have unique commands, but got more than one button with command: "${button.command}"`, manifest);
              commandSet.add(button.command);
            });
          }
          // Validate parameters and menu
          (function validateParametersAndMenu(manifest: PluginManifest) {
            validatePluginParameters(manifest, 'manifest');
            if (manifest.menu) {
              if (manifest.parameters) throw new Error('manifest.parameters should not be specified when menu items are defined');
              (function validateMenu(menu: any[]) {
                for (const item of menu) {
                  Av(item) ? validatePluginParameters(item, item.name) : xg(item) && validateMenu(item.menu);
                }
              })(manifest.menu);
            }
          })(manifest);
        }
        // EditorType validation
        (function validateEditorType(manifest: PluginManifest) {
          if (!('editorType' in manifest)) throw new ManifestValidationError(getMissingEditorTypeError(), manifest);
          if (manifest.editorType!.some(e => !Ye.includes(e)) || manifest.editorType!.length < 1 || manifest.editorType!.length > Ye.length) {
            throw new Error(`Invalid editorType in manifest.  ${getEditorTypeHint()}`);
          }
        })(manifest);

        // Permissions validation
        (function validatePermissions(manifest: PluginManifest) {
          if (manifest.permissions) {
            const invalid = manifest.permissions.find(p => !XS.includes(p));
            if (invalid !== undefined) throw new ManifestValidationError(`Invalid permission specified: ${invalid}`, manifest);
          }
        })(manifest);

        // Capabilities validation
        (function validateCapabilities(manifest: PluginManifest) {
          if (manifest.capabilities) {
            for (const cap of manifest.capabilities) {
              // throw new ManifestValidationError(`Invalid capability specified: ${cap}`, manifest)

              if (Dk.includes(cap) || cap === 'panel' || cap === 'inspect' || cap === 'codegen' || cap === 'linkpreview' || cap === 'vscode') {
                if (!Pe(manifest.editorType)) throw new ManifestValidationError(`Capability "${cap}" requires "editorType" to include "dev"`, manifest);
                if (manifest.containsWidget) throw new ManifestValidationError(`Capability "${cap}" is not supported for widgets`, manifest);
              }
              if (isVsCodeEnvironment() && !manifest.capabilities.includes('vscode')) throw new ManifestValidationError('Manifest must include "vscode" capability to run in Figma for VS Code Extension', manifest);
            }
          }
        })(manifest);

        // Codegen validation
        (function validateCodegen(manifest: PluginManifest) {
          if (!manifest.capabilities?.includes('codegen')) {
            if (manifest.codegenLanguages) throw new ManifestValidationError('codegenLanguages only supported for codegen plugins', manifest);
            if (manifest.codegenPreferences) throw new ManifestValidationError('codegenPreferences only supported for codegen plugins', manifest);
            return;
          }
          if (!manifest.codegenLanguages || manifest.codegenLanguages.length === 0) throw new ManifestValidationError('codegen plugins must define at least one language in codegenLanguages', manifest);
          if (!manifest.codegenPreferences) return;
          const languageValues = manifest.codegenLanguages?.map(l => l.value) ?? [];
          const unitItems: any[] = [];
          const propertyNames = new Set<string>();
          for (let i = 0; i < manifest.codegenPreferences.length; i++) {
            const pref = manifest.codegenPreferences[i];
            for (const lang of pref.includedLanguages ?? []) {
              if (!languageValues.includes(lang)) throw new ManifestValidationError(`Unknown language "${lang}" in codegenPreferences[${i}].includedLanguages`, manifest);
            }
            if (MP(pref)) unitItems.push(pref);
            if (Wt(pref)) {
              if (propertyNames.has(pref.propertyName)) throw new ManifestValidationError('codegenPreferences "action" itemType settings must have unique propertyName values', manifest);
              propertyNames.add(pref.propertyName);
            }
            if (ZV(pref)) {
              let defaultCount = 0;
              if (pref.options) {
                for (const opt of pref.options) {
                  if (opt.isDefault) defaultCount += 1;
                }
              }
              if (defaultCount !== 1) throw new ManifestValidationError('codegenPreferences itemType: "select" should have exactly one default option', manifest);
            }
          }
          if (unitItems.length > 1) throw new ManifestValidationError('codegenPreferences should have at most one itemType: "unit"', manifest);
        })(manifest);

        // Widget-specific validation
        if (opts.resourceType === 'widget' && manifest.containsWidget && (function validateWidgetApi(manifest: PluginManifest) {
          if (manifest.widgetApi && manifest.editorType?.includes(FW.SLIDES)) throw new ManifestValidationError('Widgets are not supported in Figma Slides', manifest);
        }(manifest), manifest.widgetApi !== '1.0.0')) {
          throw new ManifestValidationError('Widgets must specify the \'widgetApi\' manifest field. The latest version is \'1.0.0\'', manifest);
        }

        // Network access validation
        if (manifest.networkAccess) {
          const result = validateNetworkAccess(manifest.networkAccess);
          if (!result.isValid) throw new ManifestValidationError(result.validationErr!, manifest);
        }

        // Related link domains validation
        if (manifest.relatedLinkDomains) {
          if (!Pe(manifest.editorType)) throw new ManifestValidationError('\'relatedLinkDomains\' is only supported for plugins with \'editorType\' containing \'dev\'', manifest);
          for (const domain of manifest.relatedLinkDomains) {
            if (!domain.startsWith('https://') || domain.startsWith('http://')) throw new ManifestValidationError(`Invalid domain '${domain}' in 'relatedLinkDomains'. Domains must start with 'https:// or 'http://'`, manifest);
            if (!validateURLPattern(domain)) throw new ManifestValidationError(`Invalid domain '${domain}' in 'relatedLinkDomains'.`, manifest);
          }
        }

        // Dev resource domains validation
        if (manifest.devResourceDomains) {
          if (!Pe(manifest.editorType)) throw new ManifestValidationError('\'devResourceDomains\' is only supported for plugins with \'editorType\' containing \'dev\'', manifest);
          for (const domain of manifest.devResourceDomains) {
            if (!domain.startsWith('https://') || domain.startsWith('http://')) throw new ManifestValidationError(`Invalid domain '${domain}' in 'devResourceDomains'. Domains must start with 'https:// or 'http://'`, manifest);
            if (!validateURLPattern(domain)) throw new ManifestValidationError(`Invalid domain '${domain}' in 'devResourceDomains'.`, manifest);
          }
        }
        return manifest;
      }(manifest!, {
        resourceType: isWidget ? 'widget' : 'plugin'
      });
    } catch (e: any) {
      error = {
        type: ho.VALIDATE,
        text: e.message
      };
      if (e.manifest) validatedManifest = e.manifest;
    }
  }

  // Fallback manifest for error cases
  const fallbackManifest = isWidget ? {
    ...defaultWidgetManifest,
    editorType
  } : {
    ...defaultPluginManifest,
    editorType,
    capabilities
  };
  return {
    plugin_id: validatedManifest?.id || '',
    name: getManifestName(validatedManifest, manifestSource),
    manifest: validatedManifest ?? fallbackManifest,
    localFileId: fileId,
    localFilePath: manifestSource.path!,
    error: error!
  };
}

/**
 * Formats manifest error messages for extra properties.
 * @param message - The error message.
 */
function formatManifestErrorMessage(message: string): string {
  const extraPropText = 'but got additional property';
  const idx = message.lastIndexOf(extraPropText);
  if (idx !== -1) {
    const prop = message.substring(idx + extraPropText.length).replace(/"/g, '').trim();
    return `Manifest has unexpected extra property: ${prop}`;
  }
  return message;
}

/**
 * Formats a PluginError object to string.
 * @param error - The PluginError object.
 */
function formatPluginError(error: PluginError) {
  return am(error);
}

/**
 * Gets the manifest name from manifest or manifestSource.
 * @param manifest - The PluginManifest object.
 * @param manifestSource - The PluginManifestSource object.
 */
function getManifestName(manifest: PluginManifest | undefined, manifestSource: PluginManifestSource): string {
  if (manifest) return manifest.name;
  if (manifestSource.lastKnownName) return manifestSource.lastKnownName;
  if (!manifestSource.path) return 'Error';
  const parts = manifestSource.path.split(/\/|\\/);
  return parts.length >= 2 ? parts[parts.length - 2] : manifestSource.path;
}

/**
 * Loads local plugin manifest using Desktop API.
 * Original name: $$eg71
 * @param fileId - The local file ID.
 * @param options - PluginLoadOptions.
 * @returns PluginData object.
 */
export async function loadLocalPluginManifest(fileId: string, options: PluginLoadOptions): Promise<PluginData> {
  const desktopApi = _$$M();
  try {
    if (!desktopApi) throw new Error('desktopApp not available');
    const manifestSource = await desktopApi.getLocalFileExtensionManifest(fileId);
    return getLocalPluginManifest(fileId, manifestSource, options);
  } catch (err: any) {
    return {
      plugin_id: '',
      name: 'Error',
      manifest: options.resourceType === 'widget' ? defaultWidgetManifest : defaultPluginManifest,
      localFileId: fileId,
      localFilePath: '',
      error: {
        type: ho.LOAD,
        text: err.message
      }
    };
  }
}

/**
 * Injects HTML or UI files into plugin code string.
 * Original name: $$ef65
 * @param code - The plugin code string.
 * @param htmlOrUi - HTML string or UI files object.
 * @returns Modified code string.
 */
export function injectHtmlOrUiFiles(code: string, htmlOrUi: string | Record<string, string>): string {
  const serialize = (input: string) => JSON.stringify(input).split(/(<!--|-->|\bimport)/g).map((segment, idx) => idx % 2 ? `${segment.slice(0, 2)}"+"${segment.slice(2)}` : segment).join('');
  if (typeof htmlOrUi === 'string') return `const __html__ = ${serialize(htmlOrUi)};${code}`;
  const uiEntries = Object.entries(htmlOrUi).map(([key, value]) => `[${serialize(key)}]:${serialize(value)}`).join(',');
  return `const __uiFiles__ = {${uiEntries}};${code}`;
}

/**
 * Loads local plugin source code using Desktop API.
 * Original name: $$eE21
 * @param fileId - The local file ID.
 * @returns Source code string.
 * @throws Error if unable to load or build code.
 */
export async function loadLocalPluginSource(fileId: string): Promise<string> {
  const desktopApi = _$$M();
  let sourceData;
  try {
    if (!desktopApi) throw new Error('desktopApp not available');
    sourceData = await desktopApi.getLocalFileExtensionSource(fileId);
  } catch (err: any) {
    throw new Error(`Unable to load code: ${err}`);
  }
  if (sourceData.buildErrCode) throw new Error(`Build error: ${sourceData.stderr}\nPath was: ${sourceData.path}`);
  let code = sourceData.source;
  if (sourceData.html) code = injectHtmlOrUiFiles(code, sourceData.html);
  return code;
}

/**
 * Formats plugin name for display, including error state.
 * Original name: $$ey26
 * @param pluginData - PluginData object.
 * @returns Formatted name string.
 */
export function formatPluginName(pluginData: PluginData): string {
  return pluginData.error?.text === getMissingEditorTypeError() ? pluginData.name : `${pluginData.error ? `\u26A0  ` : ''}${pluginData.name}`;
}

/**
 * Gets the current plugin version object from published plugin.
 * Original name: $$ex3
 * @param publishedPlugin - Published plugin object.
 * @returns Current plugin version object or null.
 */
export function getCurrentPluginVersion(publishedPlugin: any): any | null {
  if (!publishedPlugin || !publishedPlugin.versions) return null;
  const versionId = publishedPlugin.current_plugin_version_id;
  return versionId && publishedPlugin.versions[versionId] || null;
}

/**
 * Gets the current plugin version from published plugin.
 * Original name: $$eN75
 * @param publishedPlugin - Published plugin object.
 * @returns Current plugin version object.
 */
export function getPluginVersion(publishedPlugin: any): any {
  return getCurrentPluginVersion(publishedPlugin);
}

/**
 * Gets the current plugin version ID from plugin map.
 * Original name: $$eC31
 * @param pluginsMap - Plugins map.
 * @param pluginId - Plugin ID.
 * @returns Current plugin version ID.
 */
export function getCurrentPluginVersionId(pluginsMap: any, pluginId: string) {
  if (hasKey(pluginId)) return getArrayLength(pluginId);
  const pluginObj = pluginsMap[pluginId] ?? {};
  // eslint-disable-next-line no-unreachable-loop
  for (const key in pluginObj) return pluginObj[key].current_plugin_version_id;
}

/**
 * Returns default published plugin or widget structure based on manifest.
 * Original name: ew
 * @param manifest - PluginManifest object.
 * @returns Default published plugin or widget structure.
 */
function getDefaultPublishedResource(manifest?: PluginManifest) {
  return manifest?.containsWidget ? defaultPublishedWidget : defaultPublishedPlugin;
}

/**
 * Gets published plugin or widget by manifest or ID.
 * Original name: $$eO6
 * @param plugins - Published plugins map.
 * @param widgets - Published widgets map.
 * @param localPlugin - Local plugin object.
 * @param id - Optional plugin/widget ID.
 * @returns Published plugin/widget object.
 */
export function getPublishedResource(plugins: any, widgets: any, localPlugin?: any, id?: string): any {
  if (localPlugin?.manifest?.id) {
    if (plugins && plugins[localPlugin.manifest.id]) return plugins[localPlugin.manifest.id];
    if (widgets && widgets[localPlugin.manifest.id]) return widgets[localPlugin.manifest.id];
  }
  if (id) {
    if (plugins && plugins[id]) return plugins[id];
    if (widgets && widgets[id]) return widgets[id];
  }
  return getDefaultPublishedResource(localPlugin?.manifest);
}

/**
 * Gets published plugin or widget by manifest or ID, returns null if not found.
 * Original name: $$eR40
 * @param plugins - Published plugins map.
 * @param widgets - Published widgets map.
 * @param localPlugin - Local plugin object.
 * @returns Published plugin/widget object or null.
 */
export function getPublishedResourceOrNull(plugins: any, widgets: any, localPlugin?: any): any | null {
  if (localPlugin?.manifest?.id) {
    if (plugins && plugins[localPlugin.manifest.id]) return plugins[localPlugin.manifest.id];
    if (widgets && widgets[localPlugin.manifest.id]) return widgets[localPlugin.manifest.id];
  }
  return null;
}

/**
 * Gets plugin metadata using fallback.
 * Original name: $$eL62
 * @param plugin - Plugin object.
 * @param fallback - Fallback object.
 * @returns Plugin metadata object.
 */
export function getPluginMetadata(plugin: any, fallback: any): any {
  return Hc(plugin, fallback, defaultPublishedPlugin);
}

/**
 * Gets widget metadata using fallback.
 * Original name: $$eP32
 * @param widget - Widget object.
 * @param fallback - Fallback object.
 * @returns Widget metadata object.
 */
export function getWidgetMetadata(widget: any, fallback: any): any {
  return Hc(widget, fallback, defaultPublishedWidget);
}
/**
 * Filters resources by org or public publisher.
 * Original name: $$eD18
 * @param resources - Resource map.
 * @param org - Org object.
 * @returns Filtered resource map.
 */
export function filterResourcesByOrgOrPublisher(resources: Record<string, any>, org: any): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(resources).forEach(key => {
    const resource = resources[key];
    const isOrgMatch = resource.roles.org && resource.roles.org.id === org.id;
    const isPublicPublisher = resource.roles.is_public && resource.publisher.id === org.community_profile_id;
    if (isOrgMatch || isPublicPublisher) {
      result[key] = resource;
    }
  });
  return result;
}

/**
 * Filters resources by org id.
 * Original name: $$ek30
 * @param resources - Resource map.
 * @param orgId - Org id.
 * @returns Filtered resource map.
 */
export function filterResourcesByOrgId(resources: Record<string, any>, orgId: string): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(resources).forEach(key => {
    const resource = resources[key];
    if (resource.roles.org && resource.roles.org.id === orgId) {
      result[resource.id] = resource;
    }
  });
  return result;
}

/**
 * Filters resources by editor type match.
 * Original name: $$eM52
 * @param resources - Resource map.
 * @param editorType - Editor type.
 * @returns Filtered resource map.
 */
export function filterResourcesByEditorType(resources: Record<string, any>, editorType: string): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(resources).forEach(key => {
    const resource = resources[key];
    if (isEditorTypeMatch(editorType, getPluginVersion(resource).manifest.editorType)) {
      result[resource.id] = resource;
    }
  });
  return result;
}

/**
 * Checks if resource has org role.
 * Original name: $$eF33
 * @param resource - Resource object.
 * @returns True if org role exists.
 */
export function hasOrgRole(resource: any): boolean {
  return !!resource?.roles?.org;
}

/**
 * Filters resources by Dd or jY/Ro match.
 * Original name: $$ej56
 * @param resources - Resource map.
 * @param value - Value to match.
 * @param useJY - Use jY (default true) or Ro.
 * @returns Filtered resource map.
 */
export function filterResourcesByMatch(resources: Record<string, any>, value: any, useJY: boolean = true): Record<string, any> {
  const result: Record<string, any> = {};
  Object.keys(resources).forEach(key => {
    const resource = resources[key];
    const matcher = useJY ? jY : Ro;
    if (Dd(resource, value) || matcher(resource, value)) {
      result[key] = resource;
    }
  });
  return result;
}

/**
 * Sorts resources by createdAt.
 * Original name: $$eU29
 * @param resources - Resource map.
 * @returns Sorted array of resources.
 */
export function sortResourcesByCreatedAt(resources: Record<string, any>): any[] {
  return sortByCreatedAt(Object.keys(resources).map(key => getPluginVersion(resources[key]))).map(item => resources[item.plugin_id]);
}

/**
 * Checks if roles or org id/public status changed.
 * Original name: $$eB10
 * @param resource - Resource object.
 * @param roleObj - Role object.
 * @returns True if changed.
 */
export function hasRoleOrOrgChanged(resource: any, roleObj: any): boolean {
  const roles = resource.roles;
  const isNotPublicAndAC = !roleObj.is_public && AC(resource);
  return !!roles.is_public !== !!roleObj.is_public || roles.org?.id !== roleObj.org?.id || isNotPublicAndAC;
}

/**
 * Validates plugin code size.
 * Original name: $$eG49
 * @param code - Code string.
 * @returns Code length.
 * @throws Error if code is empty or exceeds max size.
 */
export function validatePluginCodeSize(code: string): number {
  if (!code) throw new Error('Code string cannot be empty');
  const length = YH(code).length;
  if (length > yO) throw new Error(`plugin code exceeds max size of ${Math.floor(yO / 1e6)}MB`);
  return length;
}

/**
 * Validates extension icon image.
 * Original name: $$eV78
 * @param file - File object.
 * @returns Result of Wl.
 */
export function validateExtensionIconImage(file: any): any {
  return Wl(file, getI18nString('community.publishing.extension_icon_image'));
}

/**
 * Validates and resizes icon image.
 * Original name: $$eH77
 * @param file - File object.
 * @param param2 - Param2.
 * @param param3 - Param3.
 * @returns Resized file.
 */
export async function validateAndResizeIconImage(file: any, param2: any, param3: any): Promise<any> {
  validateExtensionIconImage(file);
  return await resizeImage(file, {
    width: DK,
    height: DK
  }, param2, getI18nString('community.publishing.error_icon_image_dimensions'), param3);
}

/**
 * Validates artwork image.
 * Original name: $$ez66
 * @param file - File object.
 * @returns Result of Wl.
 */
export function validateArtworkImage(file: any): any {
  return Wl(file, 'Artwork image');
}

/**
 * Gets first file from array, throws if not found.
 * Original name: $$eW63
 * @param files - Array of files.
 * @returns First file.
 * @throws Error if not found.
 */
export function getFirstFileOrThrow(files: any[]): any {
  const file = files?.[0];
  if (!file) throw new Error(getI18nString('community.publishing.error_file_not_found'));
  return file;
}

/**
 * Resizes image to given dimensions.
 * Original name: eK
 * @param file - File object.
 * @param dimensions - {width, height}.
 * @param allowMultiple - Allow multiple.
 * @param errorMsg - Error message.
 * @param skipCheck - Skip check.
 * @returns Resized file.
 */
async function resizeImage(file: File, dimensions: {
  width: number;
  height: number;
}, allowMultiple: boolean, errorMsg: string, skipCheck?: boolean): Promise<File> {
  const {
    width,
    height
  } = dimensions;
  const objectUrl = URL.createObjectURL(file);
  const image = await l8(objectUrl);
  try {
    if (!skipCheck && !isImageSizeValid(image, dimensions, allowMultiple)) {
      throw new Error(errorMsg);
    }
    if (image.width === width && image.height === height) return file;
    const blob: Blob = await new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      try {
        canvas.width = width;
        canvas.height = height;
        canvas.getContext('2d')!.drawImage(image, 0, 0, width, height);
        canvas.toBlob(b => b ? resolve(b) : reject(new Error('Failed to resize image')));
      } catch (err) {
        reject(err);
      } finally {
        canvas.remove();
      }
    });
    return new File([blob], file.name, {
      type: blob.type
    });
  } finally {
    URL.revokeObjectURL(objectUrl);
    image.remove();
  }
}

/**
 * Checks if image size is valid.
 * Original name: (inline in eK)
 * @param image - Image object.
 * @param dimensions - {width, height}.
 * @param allowMultiple - Allow multiple.
 * @returns True if valid.
 */
function isImageSizeValid(image: any, dimensions: {
  width: number;
  height: number;
}, allowMultiple: boolean): boolean {
  const {
    width,
    height
  } = dimensions;
  return image.width === width && image.height === height || allowMultiple && image.width % width === 0 && image.height % height === 0 && image.width / width === image.height / height;
}

/**
 * Generates plugin ID via XHR.
 * Original name: $$eY68
 * @param value - Value.
 * @returns Plugin meta.
 * @throws Error if cannot generate ID.
 */
export async function generatePluginId(value: any): Promise<any> {
  const meta = (await XHR.post(`/api/${_$$n(value)}`)).data.meta;
  if (!meta.id) throw new Error('cannot generate plugin ID');
  return meta;
}

/**
 * Gets org role from resource or fallback.
 * Original name: $$e$74
 * @param resource - Resource object.
 * @param org - Org object.
 * @param publisher - Publisher object.
 * @returns Org role or null.
 */
export function getOrgRole(resource: any, org: any, publisher: any): any {
  return resource?.roles.org ?? (org && publisher ? {
    id: org.id,
    name: org.name,
    img_url: org.img_url
  } : null);
}

/**
 * Gets role object for publishing.
 * Original name: $$eX72
 * @param org - Org object.
 * @param type - Type string.
 * @returns Role object or null.
 */
export function getPublishingRole(org: any, type: string): any {
  return type === Lu.ORG ? org ? {
    org
  } : (logger.error('publishing a private plugin without a valid org entity.'), null) : {
    is_public: true
  };
}

/**
 * Checks if publishing data is default.
 * Original name: $$eq16
 * @param data - Publishing data.
 * @returns True if default.
 */
export function isDefaultPublishingData(data: any): boolean {
  return data.name === defaultPublishingData.name && data.newVersionReleaseNotes === defaultPublishingData.newVersionReleaseNotes && data.supportContact === defaultPublishingData.supportContact && data.description === defaultPublishingData.description && data.iconSrc === defaultPublishingData.iconSrc && data.coverImageSrc === defaultPublishingData.coverImageSrc && data.iconBlob == null && data.coverImageBlob == null;
}

/**
 * Gets publishing data for plugin.
 * Original name: $$eJ59
 * @param state - State object.
 * @param pluginId - Plugin id.
 * @param resourceId - Resource id.
 * @param snapshotUrl - Snapshot url.
 * @param snapshotBlob - Snapshot blob.
 * @returns Publishing data object.
 */
export function getPublishingData(state: any, pluginId: string, resourceId: string, snapshotUrl: any, snapshotBlob: any): any {
  let author;
  const localPlugin = pluginId !== undefined ? state.localPlugins[pluginId] : undefined;
  const manifest = localPlugin && localPlugin.manifest;
  const publishedResource = getPublishedResource(state.publishedPlugins, state.publishedWidgets, localPlugin, resourceId);
  const pluginVersion = getPluginVersion(publishedResource);
  const hasPaymentsApi = manifest?.permissions?.includes('payments');
  try {
    author = En(publishedResource, state);
  } catch {
    throw new Error('Unable to get Plugin Data. You might be trying to act on a personal plugin in an Org space.');
  }
  const {
    accepted,
    pending
  } = publishedResource.community_publishers;
  const publishers = {
    ...Rs(),
    tokens: (publishedResource.community_publishers ? [...accepted.map((e: any) => ({
      ...e,
      isPending: false
    })), ...(pending?.map((e: any) => ({
      ...e,
      isPending: true
    })) || [])] : []).reduce((arr: any[], item: any) => Ii(state.authedProfilesById[item.id], author) ? arr : arr.concat([{
      state: _$$d.OK,
      content: item
    }]), [])
  };
  return {
    name: pluginVersion.name || manifest && manifest.name || defaultPublishingData.name,
    currentVersionReleaseNotes: pluginVersion.release_notes || defaultPublishingData.newVersionReleaseNotes,
    newVersionReleaseNotes: defaultPublishingData.newVersionReleaseNotes,
    tags: publishedResource.tags,
    tagsV2: publishedResource.tags_v2 && Object.keys(publishedResource.tags_v2),
    supportContact: publishedResource.support_contact || state.user?.email || defaultPublishingData.supportContact,
    description: pluginVersion.description || defaultPublishingData.description,
    tagline: pluginVersion.tagline || defaultPublishingData.tagline,
    creatorPolicy: pluginVersion.creator_policy ?? defaultPublishingData.creatorPolicy,
    iconSrc: pluginVersion.redirect_icon_url || defaultPublishingData.iconSrc,
    widgetSnapshotImageSrc: snapshotUrl || pluginVersion.redirect_snapshot_url || defaultPublishingData.widgetSnapshotImageSrc,
    widgetSnapshotImageBlob: snapshotBlob || defaultPublishingData.widgetSnapshotImageBlob,
    coverImageSrc: pluginVersion.redirect_cover_image_url || defaultPublishingData.coverImageSrc,
    iconImageError: defaultPublishingData.iconImageError,
    coverImageError: defaultPublishingData.coverImageError,
    widgetSnapshotImageError: defaultPublishingData.widgetSnapshotImageError,
    twoFactorAuthDisabledError: defaultPublishingData.twoFactorAuthDisabledError,
    emailNotVerifiedError: defaultPublishingData.emailNotVerifiedError,
    accountDetailsChangedError: defaultPublishingData.accountDetailsChangedError,
    freemiumRequiredForMigrating: defaultPublishingData.freemiumRequiredForMigrating,
    author,
    publishers,
    creators: accepted.map((e: any) => ({
      ...e,
      isPending: false
    })).concat((pending ?? []).map((e: any) => ({
      ...e,
      isPending: true
    }))).filter((item: any) => !Ii(state.authedProfilesById[item.id], author) && item.entity_type === o1.USER),
    commentsSetting: publishedResource.comments_setting || defaultPublishingData.commentsSetting,
    categoryId: publishedResource.category_id || defaultPublishingData.categoryId,
    blockPublishingOnToS: xw(state),
    playgroundFigFile: pluginVersion.playground_fig_file,
    playgroundFilePublishType: _$$J.Actions.NOOP,
    isPaid: !!publishedResource.monetized_resource_metadata || hasPaymentsApi,
    price: vf(publishedResource.monetized_resource_metadata),
    isSubscription: publishedResource.monetized_resource_metadata?.is_subscription,
    hasPaymentsApi,
    annualDiscount: publishedResource.monetized_resource_metadata?.annual_discount_percentage,
    isAnnualDiscountActive: !!publishedResource.monetized_resource_metadata?.annual_discount_active_at,
    carouselMedia: N6(publishedResource)
  };
}

/**
 * Checks if plugin version is published.
 * Original name: $$eZ64
 * @param resource - Resource object.
 * @returns True if published.
 */
export function isPluginVersionPublished(resource: any): boolean {
  return !!getPluginVersion(resource).id && !resource.unpublished_at;
}

/**
 * Filters published resources.
 * Original name: $$eQ55
 * @param resources - Array of resources.
 * @returns Filtered resource map.
 */
export function filterPublishedResources(resources: any[]): Record<string, any> {
  if (!resources) return {};
  const result: Record<string, any> = {};
  resources.forEach(resource => {
    if (isPluginVersionPublished(resource)) {
      result[resource.id] = resource;
    }
  });
  return result;
}

/**
 * Validates publishing errors for user account.
 * Original name: $$e035
 * @param user - User object.
 * @param status - Status object.
 * @param isWidget - Is widget.
 * @param isVerified - Is verified.
 * @returns Error object.
 */
export function getPublishingErrors(user: any, status: any, isWidget: boolean, isVerified: boolean): Record<string, any> {
  const errors: Record<string, any> = {};
  if (!user.email_validated_at) {
    errors.emailNotVerifiedError = getI18nString('community.publishing.please_verify_your_email_address_to_publish');
  }
  if (isVerified || (user.saml_sso_only || user.google_sso_only || user.two_factor_app_enabled || user.phone_number) && (status.code !== aP.FAILURE || status.error !== getI18nString('community.publishing.you_must_enable_two_factor_authentication_to_publish'))) {
    if (!isVerified && (user.plugin_publishing_blocked_at || user.community_blocked_at || status.code === aP.FAILURE && status.error === getI18nString('community.publishing.you_must_verify_your_account_details_to_publish'))) {
      errors.accountDetailsChangedError = getI18nString('community.publishing.we_detected_a_change_to_your_account_details_please_contact_support_figma_com_to_publish_this_plugin');
    } else if (status.code === aP.FAILURE && status.error) {
      errors.other = status.error;
    }
  } else {
    errors.twoFactorAuthDisabledError = isWidget ? getI18nString('community.publishing.please_enable_two_factor_authentication_to_publish_this_widget') : getI18nString('community.publishing.please_enable_two_factor_authentication_to_publish_this_plugin');
  }
  return errors;
}
/**
 * Validates publishing data for required fields and constraints.
 * Original name: $$e147
 * @param data - Publishing data object.
 * @param manifest - PluginManifest object.
 * @param isWidget - Is widget.
 * @param publishedResource - Published resource object.
 * @returns Validation errors object.
 */
export function validatePublishingData(data: any, manifest: PluginManifest, isWidget: boolean, publishedResource: any): Record<string, any> {
  if (!data) return {};
  const errors: Record<string, any> = {};
  if (_$$Yp(data.name).length === 0) errors.name = getI18nString('community.publishing.name_must_not_be_empty');
  if (_$$Yp(data.tagline).length === 0) errors.tagline = getI18nString('community.publishing.add_a_tagline');
  if (isStrippedHtmlEmpty(data.description)) errors.description = getI18nString('community.publishing.add_a_description');
  const supportContact = _$$Yp(data.supportContact);
  if (supportContact.length === 0) {
    errors.supportContact = getI18nString('community.publishing.support_contact_must_not_be_empty');
  } else if (xf(supportContact) || gU(supportContact)) {
    // valid
  } else {
    errors.supportContact = getI18nString('community.publishing.support_contact_must_be_a_valid_email_or_url');
  }
  if (_$$Yp(data.iconSrc).length === 0) errors.iconImageError = getI18nString('community.publishing.icon_cant_be_empty');
  errors.carouselMedia = vC(data.carouselMedia);
  if (!data.categoryId) errors.categoryId = getI18nString('community.publishing.category_cant_be_empty');
  if (data.price === undefined || manifest.permissions?.includes('payments') || publishedResource?.third_party_m10n_status !== ProductStatus.FLAGGED) {
    // skip freemiumRequiredForMigrating
  } else {
    errors.freemiumRequiredForMigrating = getI18nString('community.seller.freemium_required_for_migration');
  }
  if (data.playgroundFigFile && manifest.editorType?.length === 1) {
    const manifestEditorType = manifest.editorType[0];
    const playgroundEditorType = data.playgroundFigFile.editor_type;
    if (manifestEditorType === FW.FIGMA && playgroundEditorType !== 'design' || manifestEditorType === FW.FIGJAM && playgroundEditorType !== 'whiteboard') {
      const editorTypeStr = manifestEditorType === FW.FIGMA ? getI18nString('community.publishing.playground_file.figma') : getI18nString('community.publishing.playground_file.figjam');
      errors.playgroundFigFile = isWidget ? getI18nString('community.publishing.widget_playground_file_editor_type_error', {
        editorType: editorTypeStr
      }) : getI18nString('community.publishing.plugin_playground_file_editor_type_error', {
        editorType: editorTypeStr
      });
    }
  }
  if (isWidget && _$$Yp(data.widgetSnapshotImageSrc).length === 0) errors.widgetSnapshotImageError = getI18nString('community.publishing.snapshot_must_not_be_empty');

  // Price validation (inline from $$e147)
  const priceError = (() => {
    if (!data.isPaid || data.hasPaymentsApi) return null;
    if (!data.price) return getI18nString('community.publishing.price_is_required_for_paid_resources');
    if (Yp(data.price)) {
      return data.price < mZ ? getI18nString('community.seller.paid_resource_minimum_err') : getI18nString('community.seller.paid_resource_maximum_err');
    }
    if (F8(data.price)) return getI18nString('community.seller.prices_must_follow_format');
    if (!publishedResource || AC(publishedResource)) return null;
    const prevPrice = publishedResource?.monetized_resource_metadata?.price;
    if (data.isSubscription && prevPrice && Mj(prevPrice / 100, data.price)) {
      return getI18nString('community.seller.price_increase_limit');
    }
    if (!publishedResource?.monetized_resource_metadata?.can_increase_price && prevPrice && WD(prevPrice / 100, data.price)) {
      return getI18nString('community.seller.price_can_only_be_increased_once_every_thirty_days');
    }
    return null;
  })();
  if (priceError) errors.price = priceError;

  // Annual discount validation (inline from $$e147)
  const discountError = data.isPaid && data.annualDiscount && data.isAnnualDiscountActive ? Number.isInteger(data.annualDiscount) ? null : getI18nString('community.seller.discount_must_follow_format') : null;
  if (discountError) errors.annualDiscount = discountError;
  return errors;
}

/**
 * Validates publishing data for length constraints.
 * Original name: $$e20
 * @param data - Publishing data object.
 * @returns Validation errors object.
 */
export function validatePublishingDataLengths(data: any): Record<string, any> {
  if (!data) return {};
  const errors: Record<string, any> = {};
  const nameLen = _$$Yp(data.name).length;
  if (nameLen < 4) errors.name = getI18nString('community.publishing.name_must_be_4_characters_long');else if (nameLen > 100) errors.name = getI18nString('community.publishing.name_must_be_at_most_100_characters_long');
  if (_$$Yp(data.description).length > 1e4) errors.description = getI18nString('community.publishing.description_must_be_at_most_10000_characters_long');
  if (_$$Yp(data.newVersionReleaseNotes).length > 1e4) errors.newVersionReleaseNotes = getI18nString('community.publishing.release_notes_must_be_at_most_10000_characters_long');
  if (_$$Yp(data.creatorPolicy).length > 1e4) errors.creatorPolicy = getI18nString('community.publishing.creator_policy_must_be_at_most_10000_characters_long');
  const taglineError = _$$Lg(data.tagline);
  if (taglineError) errors.tagline = taglineError;
  if (_$$Yp(data.supportContact).length > 100) errors.supportContact = getI18nString('community.publishing.support_contact_must_be_at_most_100_characters_long');
  if (data.iconImageError) errors.iconImageError = data.iconImageError;
  if (data.coverImageError) errors.coverImageError = data.coverImageError;
  return errors;
}

/**
 * Checks if plugin is a widget.
 * Original name: $$e522
 * @param plugin - PluginData object.
 * @returns True if widget.
 */
export function isWidgetPlugin(plugin: any): boolean {
  return k0(plugin);
}

/**
 * Gets widget version data from debugState.
 * Original name: $$e313
 * @param params - Params object.
 * @returns Widget version data or undefined.
 */
export function getWidgetVersionData(params: any): any | undefined {
  let result;
  const {
    localPlugins,
    publishedCanvasWidgetVersions,
    publishedWidgets
  } = debugState.getState();
  const isLocal = !params.widgetVersionId;
  const widgetId = params.widgetId;
  if (widgetId) {
    if (isLocal) {
      const matches = Object.values(localPlugins as Record<string, PluginData>).filter(p => p.plugin_id === widgetId);
      if (matches.length > 1) showVisualBell(getI18nString('community.publishing.found_multiple_local_widgets_with_the_same_manifest_id'));
      if (matches.length === 1) result = matches[0];
    } else {
      result = publishedCanvasWidgetVersions[widgetId]?.[params.widgetVersionId] || publishedWidgets[widgetId] && getPluginVersion(publishedWidgets[widgetId]);
      if (!result) return;
      if (result.id === params.widgetVersionId || isInteractionPathCheck() || Lg()) {
        // ok
      } else {
        reportError(_$$e.UNOWNED, new Error(`plugin versionId=${result?.id} doesn't match node.widgetVersionId=${params.widgetVersionId}`));
      }
    }
    return result;
  }
}

/**
 * Checks if plugin can run in current state.
 * Original name: $$e414
 * @param params - Params object.
 * @returns Can run result.
 */
export function canRunPlugin(params: any): {
  canRun: boolean;
  message?: string;
} {
  const state = params.canRunPluginState || debugState.getState();
  if (!Eh(state)) {
    return {
      canRun: false,
      message: 'Cannot run plugin because canViewPlugins returned false'
    };
  }
  if (!canRunPluginWithinOrg(state, params.plugin)) {
    return {
      canRun: false,
      message: 'Cannot run plugin within org'
    };
  }
  const {
    plugin,
    editorType
  } = params;
  if (ZQ(plugin)) {
    return k0(plugin) ? {
      canRun: false,
      message: 'Cannot run local widget'
    } : {
      canRun: true
    };
  }
  if (editorType) {
    if (!isEditorTypeMatch(Z[editorType], plugin.manifest.editorType)) {
      return {
        canRun: false,
        message: 'Cannot run plugin with invalid editor type'
      };
    }
    if (editorType === FEditorType.DevHandoff && !isDevModePlugin(plugin)) {
      return {
        canRun: false,
        message: 'Cannot run non-devmode plugin in dev mode'
      };
    }
    if (editorType === FEditorType.Slides && !isSlidesPlugin(plugin)) {
      return {
        canRun: false,
        message: 'Cannot run non-slides plugin in slides mode'
      };
    }
  }
  return {
    canRun: true
  };
}

/**
 * Checks if plugin can run within org.
 * Original name: $$e84
 * @param state - State object.
 * @param plugin - PluginData object.
 * @returns True if can run.
 */
export function canRunPluginWithinOrg(state: any, plugin: any): boolean {
  if (!state.currentUserOrgId) return true;
  const org = state.orgById[state.currentUserOrgId];
  if (!org || ZQ(plugin) || bH(plugin)) return true;
  if (!org.public_plugins_allowed) return false;
  const isWidget = k0(plugin);
  return (isWidget ? !org.widgets_whitelist_enforced : !org.plugins_whitelist_enforced) || !!(isWidget ? state.whitelistedWidgets : state.whitelistedPlugins)[plugin.plugin_id];
}

/**
 * Checks if associated user can purchase resource.
 * Original name: $$e667
 * @param params - Params object.
 * @returns True if can purchase.
 */
export function canAssociatedUserPurchaseResource({
  canAssociatedUserPurchaseThisResource,
  resource
}: {
  canAssociatedUserPurchaseThisResource: boolean;
  resource: any;
}): boolean {
  return f5(resource) && resource.current_user_has_run && !resource.community_resource_payment && canAssociatedUserPurchaseThisResource;
}

/**
 * Gets resource role info.
 * Original name: $$e717
 * @param resource - Resource object.
 * @returns Role info object.
 */
export function getResourceRoleInfo(resource: any): any {
  return resource.roles.is_public ? {
    role: 'public'
  } : resource.roles.org ? {
    role: 'org',
    roleOrgId: resource.roles.org.id
  } : {
    role: 'private'
  };
}

/**
 * Extracts widget ID from URL.
 * Original name: $$e980
 * @param url - URL string.
 * @returns Widget ID or null.
 */
export function extractWidgetIdFromUrl(url: string): string | null {
  const match = url.match(/\/community\/widget\/(\d+)(\/.*)?$/);
  return match && match[1] ? match[1] : null;
}

/**
 * Extracts plugin ID from URL.
 * Original name: $$te48
 * @param url - URL string.
 * @returns Plugin ID or null.
 */
export function extractPluginIdFromUrl(url: string): string | null {
  const match = url.match(/\/community\/plugin\/(\d+)(\/.*)?$/);
  return match && match[1] ? match[1] : null;
}

/**
 * Gets relaunch buttons for plugin.
 * Original name: tt
 * @param plugin - PluginData object.
 * @param relaunchGroups - Relaunch groups.
 * @param selectionCount - Selection count.
 * @returns Array of relaunch buttons.
 */
function getRelaunchButtons(plugin: any, relaunchGroups: any[], selectionCount: number): PluginRelaunchButton[] {
  if (!plugin.manifest.relaunchButtons) return [];
  const result: PluginRelaunchButton[] = [];
  for (const button of plugin.manifest.relaunchButtons) {
    if (selectionCount > 1 && !button.multipleSelection) continue;
    const relaunchButton = (() => {
      let found: PluginRelaunchButton | null = null;
      for (const group of relaunchGroups) {
        let matched = false;
        for (const {
          pluginID,
          command,
          message
        } of group) {
          if (pluginID === plugin.plugin_id && command === button.command) {
            matched = true;
            if (found) {
              if (message !== found.description) found.description = Q7;
            } else {
              found = {
                pluginID: plugin.plugin_id,
                command: button.command,
                name: button.name,
                description: message || ''
              };
            }
            break;
          }
        }
        if (!matched) return null;
      }
      return found;
    })();
    if (relaunchButton) result.push(relaunchButton);
  }
  return result;
}

/**
 * Gets local file ID for plugin.
 * Original name: $$tr23
 * @param plugin - PluginData object.
 * @param localPlugin - Local plugin object.
 * @returns Local file ID string.
 */
export function getLocalFileId(plugin: any, localPlugin: any): string {
  return localPlugin?.localFileId || plugin?.id || '';
}

/**
 * Gets relaunchable plugins for selection.
 * Original name: $$tn76
 * @param pluginsMap - Plugins map.
 * @param publishedPlugins - Published plugins map.
 * @param localPlugins - Local plugins map.
 * @param org - Org object.
 * @param selectionCount - Selection count.
 * @param setMissing - Set missing callback.
 * @param editorType - Editor type.
 * @returns Array of relaunchable plugins.
 */
export function getRelaunchablePlugins(pluginsMap: any, publishedPlugins: any, localPlugins: any, org: any, selectionCount: number, setMissing: (id: string, missing: boolean) => void, editorType: string): any[] {
  const result: any[] = [];
  const relaunchGroups = C8(pluginsMap);
  const pluginIds = (() => {
    if (relaunchGroups.length === 0) return [];
    const ids = new Set<string>();
    for (const {
      pluginID
    } of relaunchGroups[0]) ids.add(pluginID || '');
    return Array.from(ids).reverse();
  })();
  for (const pluginId of pluginIds) {
    // Local plugins
    const localMatches = Object.values(localPlugins).filter((p: any) => p.plugin_id === pluginId);
    localMatches.filter((p: any) => isEditorTypeMatch(editorType, p.manifest.editorType)).forEach((plugin: any, idx: number) => {
      for (const relaunchButton of getRelaunchButtons(plugin, relaunchGroups, selectionCount)) {
        result.push({
          type: 'local',
          pluginTypeAndID: `local-${pluginId}-${idx + 1}`,
          plugin,
          relaunchButton
        });
      }
    });

    // Published plugins
    if (pluginId in publishedPlugins) {
      const published = publishedPlugins[pluginId];
      const version = getPluginVersion(published);
      if (!isEditorTypeMatch(editorType, version.manifest.editorType)) continue;
      const relaunchButtons = getRelaunchButtons(version, relaunchGroups, selectionCount);
      if (!org || published.roles.org && published.roles.org.id === org.id || published.install_status !== u8.PUBLIC_PLUGINS_DISALLOWED && published.install_status !== u8.PLUGIN_NOT_ORG_APPROVED) {
        for (const relaunchButton of relaunchButtons) {
          result.push({
            type: 'published',
            pluginTypeAndID: `installed-${pluginId}`,
            plugin: version,
            publishedPlugin: published,
            relaunchButton
          });
        }
      }
      setMissing(pluginId, false);
    } else {
      setMissing(pluginId, true);
    }
  }
  return result;
}

/**
 * Shows visual bell for plugin error.
 * Original name: $$ti54
 * @param message - Error message.
 */
export function showVisualBell(message: string): void {
  dequeuePluginStatus({
    shouldShowVisualBell: true
  });
  const desktopApi = _$$M();
  Y5.dispatch(VisualBellActions.enqueue({
    type: 'plugins-runtime-error',
    message,
    button: desktopApi ? {
      text: 'Show/Hide console',
      action: () => {
        desktopApi.toggleDevTools('bottom');
      }
    } : undefined,
    error: true
  }));
}

/**
 * Clears plugin error visual bell.
 * Original name: $$ta44
 */
export function clearVisualBell(): void {
  Y5.dispatch(VisualBellActions.dequeue({
    matchType: 'plugins-runtime-error'
  }));
}

/**
 * Checks if two plugins are the same.
 * Original name: $$ts50
 * @param a - PluginData object.
 * @param b - PluginData object.
 * @returns True if same.
 */
export function isSamePlugin(a: any, b: any): boolean {
  return a.plugin_id === b?.plugin_id && a?.id === b?.id;
}

/**
 * Checks if plugin is devmode plugin.
 * Original name: $$to20
 * @param plugin - PluginData object.
 * @param options - Options object.
 * @returns True if devmode.
 */
export function isDevModePlugin(plugin: any, options?: any): boolean {
  return !!(!isVsCodeEnvironment() || plugin.manifest.capabilities?.includes('vscode') || options?.allowNonVsCodePluginsInVsCode) && Pe(plugin.manifest.editorType) && !k0(plugin);
}

/**
 * Checks if plugin is devmode and has inspect/panel capability.
 * Original name: $$tl41
 * @param plugin - PluginData object.
 * @returns True if devmode with inspect/panel.
 */
export function isDevModeWithInspectPanel(plugin: any): boolean {
  return isDevModePlugin(plugin) && hasInspectOrPanelCapability(plugin.manifest.capabilities);
}

/**
 * Checks if plugin is devmode and has codegen capability.
 * Original name: $$td69
 * @param plugin - PluginData object.
 * @returns True if devmode with codegen.
 */
export function isDevModeWithCodegen(plugin: any): boolean {
  return isDevModePlugin(plugin) && plugin.manifest?.capabilities?.includes('codegen');
}

/**
 * Checks if plugin has textreview capability.
 * Original name: $$tc34
 * @param plugin - PluginData object.
 * @returns True if textreview.
 */
export function hasTextReviewCapability(plugin: any): boolean {
  return plugin.manifest?.capabilities?.includes('textreview');
}

/**
 * Filters object entries by editor type.
 * Original name: $$tu25
 * @param editorType - Editor type.
 * @param obj - Object to filter.
 * @param options - Options.
 * @returns Filtered object.
 */
export function filterEntriesByEditorType(editorType: string, obj: Record<string, any>, options?: any): Record<string, any> {
  return Object.fromEntries(Object.entries(obj).filter(([_, value]) => editorTypeFilter(editorType, value, options)));
}

/**
 * Filters array by editor type.
 * Original name: $$tp2
 * @param editorType - Editor type.
 * @param arr - Array to filter.
 * @returns Filtered array.
 */
export function filterArrayByEditorType(editorType: string, arr: any[]): any[] {
  return arr.filter(item => editorTypeFilter(editorType, item));
}

/**
 * Filters object entries by plugin version editor type.
 * Original name: $$t_79
 * @param editorType - Editor type.
 * @param obj - Object to filter.
 * @returns Filtered object.
 */
export function filterEntriesByPluginVersionEditorType(editorType: string, obj: Record<string, any>): Record<string, any> {
  return Object.fromEntries(Object.entries(obj).filter(([_, value]) => editorTypeFilter(editorType, getPluginVersion(value))));
}

/**
 * Editor type filter helper.
 * Original name: th
 * @param editorType - Editor type.
 * @param plugin - PluginData object.
 * @param options - Options.
 * @returns True if matches.
 */
function editorTypeFilter(editorType: any, plugin: any, options?: any): boolean {
  if (!editorType) return true;
  switch (editorType) {
    case FEditorType.Whiteboard:
    case FEditorType.Design:
    case FEditorType.Illustration:
      return isEditorTypeMatch(Z[editorType], plugin.manifest.editorType);
    case FEditorType.DevHandoff:
      return isDevModePlugin(plugin, options);
    case FEditorType.Slides:
      return isSlidesPlugin(plugin);
    case FEditorType.Cooper:
      return isBuzzPlugin(plugin);
    case FEditorType.Figmake:
    case FEditorType.Sites:
      return false;
    default:
      throwTypeError(editorType);
  }
}

/**
 * Checks if plugin is slides plugin.
 * Original name: tm
 * @param plugin - PluginData object.
 * @returns True if slides plugin.
 */
function isSlidesPlugin(plugin: any): boolean {
  return isEditorTypeMatch(FW.SLIDES, plugin.manifest.editorType) && !k0(plugin);
}

/**
 * Checks if plugin is buzz plugin.
 * Original name: $$tg58
 * @param plugin - PluginData object.
 * @returns True if buzz plugin.
 */
export function isBuzzPlugin(plugin: any): boolean {
  return isEditorTypeMatch(FW.BUZZ, plugin.manifest.editorType);
}

/**
 * Checks if plugin is valid for Cooper editor type.
 * Original name: $$tf43
 * @param pluginType - Plugin type.
 * @returns True if valid.
 */
export function isValidForCooper(pluginType: string): boolean {
  if (!isValidPluginType(pluginType)) return false;
  const view = debugState.getState().selectedView;
  return _$$$A(view);
}

/**
 * Checks if plugin is valid for Cooper editor type and selected view.
 * Original name: $$tE11
 * @param pluginType - Plugin type.
 * @returns True if valid.
 */
export function isValidForCooperSelectedView(pluginType: string): boolean {
  return !!isValidPluginType(pluginType) && isCooperSelectedView(debugState.getState().selectedView);
}

/**
 * Checks if selected view is Cooper.
 * Original name: $$ty38
 * @param view - Selected view.
 * @returns True if Cooper.
 */
export function isCooperSelectedView(view: any): boolean {
  return XE(view) === FEditorType.Cooper;
}

/**
 * Checks if plugin is devmode with single editorType: dev.
 * Original name: $$tb45
 * @param plugin - PluginData object.
 * @returns True if devmode with single editorType.
 */
export function isSingleDevEditorType(plugin: any): boolean {
  return plugin?.manifest.editorType?.length === 1 && Pe(plugin.manifest.editorType);
}

/**
 * Checks if plugin is devmode with only codegen capability.
 * Original name: tT
 * @param plugin - PluginData object.
 * @returns True if only codegen capability.
 */
function hasOnlyCodegenCapability(plugin: any): boolean {
  const capabilities = (plugin.manifest.capabilities ?? []).filter((cap: string) => cap !== 'vscode');
  return capabilities.length === 1 && capabilities[0] === 'codegen';
}

/**
 * Checks if plugin is devmode with only codegen capability and single dev editorType.
 * Original name: $$tI51
 * @param plugin - PluginData object.
 * @returns True if devmode with only codegen.
 */
export function isSingleDevWithCodegen(plugin: any): boolean {
  return isSingleDevEditorType(plugin) && hasOnlyCodegenCapability(plugin);
}

/**
 * Checks if plugin is devmode with only codegen capability.
 * Original name: $$tS19
 * @param plugin - PluginData object.
 * @returns True if devmode with only codegen.
 */
export function isDevWithOnlyCodegen(plugin: any): boolean {
  return Pe(plugin.manifest.editorType) && hasOnlyCodegenCapability(plugin);
}

/**
 * Checks if plugin is valid for Cooper selected view and devmode/codegen.
 * Original name: $$tv61
 * @param plugin - PluginData object.
 * @returns True if valid.
 */
export function isValidForCooperDevCodegen(plugin: any): boolean {
  const view = debugState.getState().selectedView;
  return _$$$A(view) && isDevWithOnlyCodegen(plugin);
}

/**
 * Checks if plugin is valid for selected view and org/plugin whitelist.
 * Original name: $$tA39
 * @param plugin - PluginData object.
 * @param org - Org object.
 * @param whitelist - Whitelist object.
 * @returns True if valid.
 */
export function isValidForSelectedViewAndWhitelist(plugin: any, org: any, whitelist: any): boolean {
  const view = debugState.getState().selectedView;
  const whitelistEnforced = org?.plugins_whitelist_enforced;
  const isWhitelisted = whitelistEnforced && whitelist && !!whitelist[plugin.plugin_id];
  const allowed = isWhitelisted || !whitelistEnforced;
  return _$$$A(view) && !isSingleDevWithCodegen(plugin) && allowed;
}

/**
 * Gets plugin by file ID from local or published extensions.
 * Original name: $$tx7
 * @param params - Params object.
 * @returns PluginData object or null.
 */
export function getPluginByFileId({
  idToSearch,
  localExtensionsByFileId,
  publishedExtensions
}: {
  idToSearch: string;
  localExtensionsByFileId: Record<string, any>;
  publishedExtensions: Record<string, any>;
}): any {
  const local = localExtensionsByFileId && localExtensionsByFileId[idToSearch];
  if (local) return local;
  const published = publishedExtensions?.[idToSearch];
  return published ? getCurrentPluginVersion(published) : null;
}

/**
 * Checks if plugin type is valid.
 * Original name: tN
 * @param type - Plugin type.
 * @returns True if valid.
 */
function isValidPluginType(type: string): boolean {
  return type !== 'related-link-preview' && type !== 'codegen';
}

/**
 * Checks if capabilities include inspect or panel.
 * Original name: $$tC1
 * @param capabilities - Capabilities array.
 * @returns True if includes inspect/panel.
 */
export function hasInspectOrPanelCapability(capabilities: string[]): boolean {
  return !!(capabilities?.includes('inspect') || capabilities?.includes('panel'));
}

/**
 * Checks if plugin is valid for fullscreen view and editor type.
 * Original name: $$tw42
 * @param params - Params object.
 * @returns True if valid.
 */
export function isValidForFullscreenView(params: any): boolean {
  const editorType = getFullscreenViewEditorType();
  const withCodegen = params && params?.plugin && isSingleDevWithCodegen(params?.plugin);
  return params && editorType && isEditorTypeMatch(editorType, params.plugin.manifest.editorType) && (editorType !== 'dev' || isDevModePlugin(params.plugin)) && (editorType !== 'slides' || isSlidesPlugin(params.plugin)) && !withCodegen;
}

/**
 * Gets plugins menu open directory string.
 * Original name: $$tO46
 * @returns Directory string.
 */
export function getPluginsMenuOpenDirectory(): string {
  return isVsCodeEnvironment() ? 'plugins-menu-open-directory-vscode' : BrowserInfo.mac ? 'plugins-menu-open-directory-mac' : 'plugins-menu-open-directory-win';
}

// Exported names mapping (refactored as per instructions)
export const $H = validatePublishingDataLengths; // $$e20
export const $u = hasInspectOrPanelCapability; // $$tC1
export const AG = filterArrayByEditorType; // $$tp2
export const Ar = getCurrentPluginVersion; // getCurrentPluginVersion
export const Bw = canRunPluginWithinOrg; // $$e84
export const CA = hasSpecialCapability; // hasSpecialCapability
export const CB = getPublishedResource; // getPublishedResource
export const DM = getPluginByFileId; // $$tx7
export const Df = mapToEditorType; // mapToEditorType
export const EK = isEditorTypeMatch; // isEditorTypeMatch
export const EY = hasRoleOrOrgChanged; // hasRoleOrOrgChanged
export const FB = isValidForCooperSelectedView; // $$tE11
export const GX = convertEditorTypeToFileType; // convertEditorTypeToFileType
export const Gc = getWidgetVersionData; // $$e313
export const JT = canRunPlugin; // $$e414
export const K$ = selectorFullScreenViewEditorType; // selectorFullScreenViewEditorType
export const L1 = isDefaultPublishingData; // isDefaultPublishingData
export const L8 = getResourceRoleInfo; // $$e717
export const LH = filterResourcesByOrgOrPublisher; // filterResourcesByOrgOrPublisher
export const LW = isDevWithOnlyCodegen; // $$tS19
export const M5 = isDevModePlugin; // $$to20
export const MB = loadLocalPluginSource; // loadLocalPluginSource
export const MH = isWidgetPlugin; // $$e522
export const Mi = getLocalFileId; // $$tr23
export const Ms = joinStringSegments; // joinStringSegments
export const NW = filterEntriesByEditorType; // $$tu25
export const Oe = formatPluginName; // formatPluginName
export const Pl = getMissingEditorTypeError; // getMissingEditorTypeError
export const Pz = mapToFileType; // mapToFileType
export const Q4 = sortResourcesByCreatedAt; // sortResourcesByCreatedAt
export const Qt = filterResourcesByOrgId; // filterResourcesByOrgId
export const Qx = getCurrentPluginVersionId; // getCurrentPluginVersionId
export const Rd = getWidgetMetadata; // getWidgetMetadata
export const Rt = hasOrgRole; // hasOrgRole
export const Ru = hasTextReviewCapability; // $$tc34
export const SW = getPublishingErrors; // getPublishingErrors
export const Sb = resolveFrameworkType; // resolveFrameworkType
export const T = getFullscreenViewEditorType; // getFullscreenViewEditorType
export const TZ = isCooperSelectedView; // $$ty38
export const Th = isValidForSelectedViewAndWhitelist; // $$tA39
export const Tk = getPublishedResourceOrNull; // getPublishedResourceOrNull
export const UH = isDevModeWithInspectPanel; // $$tl41
export const VQ = isValidForFullscreenView; // $$tw42
export const W4 = isValidForCooper; // $$tf43
export const WC = clearVisualBell; // $$ta44
export const YG = isSingleDevEditorType; // $$tb45
export const YQ = getPluginsMenuOpenDirectory; // $$tO46
export const ZB = validatePublishingData; // $$e147
export const ZI = extractPluginIdFromUrl; // $$te48
export const ZT = validatePluginCodeSize; // validatePluginCodeSize
export const _H = isSamePlugin; // $$ts50
export const _V = isSingleDevWithCodegen; // $$tI51
export const _w = filterEntriesByPluginVersionEditorType; // $$t_79
export const c2 = loadPluginManifest; // loadPluginManifest
export const fR = showVisualBell; // $$ti54
export const i8 = filterPublishedResources; // filterPublishedResources
export const ky = filterResourcesByMatch; // filterResourcesByMatch
export const lT = pluginMetadata; // pluginMetadata
export const ld = isBuzzPlugin; // $$tg58
export const mI = getPublishingData; // getPublishingData
export const mm = getLocalPluginManifest; // getLocalPluginManifest
export const mx = isValidForCooperDevCodegen; // $$tv61
export const my = getPluginMetadata; // getPluginMetadata
export const nW = getFirstFileOrThrow; // getFirstFileOrThrow
export const nf = isPluginVersionPublished; // isPluginVersionPublished
export const nx = injectHtmlOrUiFiles; // injectHtmlOrUiFiles
export const oD = validateArtworkImage; // validateArtworkImage
export const og = canAssociatedUserPurchaseResource; // $$e667
export const ou = generatePluginId; // generatePluginId
export const pk = isDevModeWithCodegen; // $$td69
export const qH = PluginPermissions; // PluginPermissions
export const t3 = loadLocalPluginManifest; // loadLocalPluginManifest
export const tH = getPublishingRole; // getPublishingRole
export const tk = validateURLPattern; // validateURLPattern
export const u0 = getOrgRole; // getOrgRole
export const uF = getPluginVersion; // getPluginVersion
export const vA = getRelaunchablePlugins; // $$tn76
export const vj = validateAndResizeIconImage; // validateAndResizeIconImage
export const wf = validateExtensionIconImage; // validateExtensionIconImage
export const xC = filterEntriesByPluginVersionEditorType; // $$t_79
export const yx = extractWidgetIdFromUrl; // $$e980