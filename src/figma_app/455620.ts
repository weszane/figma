import { Kd, UX } from '../figma_app/155287';
import { buildUploadUrl, getInitialOptions, isLocalCluster } from '../figma_app/169182';
import { isInteractionPathCheck, getFalseValue } from '../figma_app/897289';

/**
 * Plugin ID constants for prod and staging clusters.
 * Original variable names: s, o, l, d, c, u, $$p2, _, h, m, g, f, E, y, $$b3, T, I
 */
export const PROD_PLUGIN_IDS = {
  recordWidget1: '1039957324840667051',
  recordWidget2: '1042072203439057981',
  recordWidget3: '1017757619521383731',
  recordWidget4: '1037692671113105119',
  figma1: '1030479012894344777',
  figma2: '1100947233945489758',
  cortexAnalytics: '1274481464484630971',
  analytics1: '1220512233196109878',
  analytics2: '1220802563996996107',
  analytics3: '1221187540287746170',
  staging1: '1029476790898052743',
  staging2: '1270487405418367065',
  staging3: '1028089855820989707',
  staging4: '1100944790471783866',
  cortexAnalytics2: '1268676638869538880',
  openExternal1: '1217135789855512677',
  openExternal2: '1217657098906612843'
};

/**
 * Permissions mapping for prod cluster plugin IDs.
 * Original variable name: S
 */
export const PROD_PLUGIN_PERMISSIONS: Record<string, any> = {
  [PROD_PLUGIN_IDS.recordWidget1]: Kd,
  [PROD_PLUGIN_IDS.recordWidget2]: Kd,
  [PROD_PLUGIN_IDS.recordWidget3]: Kd,
  [PROD_PLUGIN_IDS.recordWidget4]: Kd,
  '1096460041736534298': ['analytics'],
  [PROD_PLUGIN_IDS.analytics1]: ['analytics', 'openexternal'],
  [PROD_PLUGIN_IDS.analytics2]: ['analytics', 'filekey', 'openexternal'],
  '1098405969270214551': ['analytics', 'filekey', 'openexternal'],
  '1151936790942917527': ['analytics', 'openexternal'],
  '1101944648482192724': ['analytics', 'openexternal'],
  '1094001923188252679': ['analytics', 'filekey', 'openexternal'],
  [PROD_PLUGIN_IDS.figma1]: Kd,
  [PROD_PLUGIN_IDS.figma2]: Kd,
  '1030848035996871692': ['hidecursors'],
  '1030845409121640454': ['hidecursors'],
  [PROD_PLUGIN_IDS.cortexAnalytics]: ['cortex', 'analytics'],
  [PROD_PLUGIN_IDS.analytics3]: ['filekey'],
  '857346721138427857': ['filekey'],
  '745330164019088593': ['filekey'],
  '1377781599688680355': ['cortex', 'analytics', 'filekey', 'firstdraft'],
  '1340067847030742527': ['cortex', 'analytics', 'filekey', 'firstdraft']
};

/**
 * Domain mapping for prod cluster plugin IDs.
 * Original variable name: v
 */
export const PROD_PLUGIN_DOMAINS: Record<string, string> = {
  [PROD_PLUGIN_IDS.recordWidget1]: 'https://recordwidget.vimeocdn.com',
  [PROD_PLUGIN_IDS.recordWidget2]: 'https://recordwidget.vimeocdn.com',
  [PROD_PLUGIN_IDS.recordWidget3]: 'https://recordwidget.vimeocdn.com',
  [PROD_PLUGIN_IDS.recordWidget4]: 'https://recordwidget.vimeocdn.com',
  [PROD_PLUGIN_IDS.figma1]: 'https://www.figma.com',
  [PROD_PLUGIN_IDS.figma2]: 'https://www.figma.com'
};

/**
 * Permissions mapping for staging cluster plugin IDs.
 * Original variable name: A
 */
export const STAGING_PLUGIN_PERMISSIONS: Record<string, any> = {
  '1034777534804649640': ['analytics'],
  '1301665612022689456': ['analytics', 'cortex'],
  [PROD_PLUGIN_IDS.openExternal1]: ['analytics', 'openexternal'],
  [PROD_PLUGIN_IDS.openExternal2]: ['analytics', 'filekey', 'openexternal'],
  '1271502283792345209': ['cortex'],
  '1326353654536428586': ['cortex'],
  '1441501928920333946': ['cortex'],
  '1094384373580076374': ['analytics', 'filekey', 'openexternal'],
  '1149460326641202255': ['analytics', 'openexternal'],
  '1101526018404272582': ['analytics', 'openexternal'],
  '1131307276886895456': ['analytics', 'filekey', 'openexternal'],
  [PROD_PLUGIN_IDS.staging1]: Kd,
  [PROD_PLUGIN_IDS.staging2]: Kd,
  [PROD_PLUGIN_IDS.staging3]: Kd,
  [PROD_PLUGIN_IDS.staging4]: Kd,
  '1256428543638612749': ['cortex'],
  [PROD_PLUGIN_IDS.cortexAnalytics2]: ['cortex', 'analytics'],
  '1277056884710848803': ['cortex', 'analytics'],
  '1265815812125155376': ['hidecursors'],
  '1029480467793180296': ['hidecursors'],
  '1276624117086983457': ['cortex'],
  '1313947182028153675': ['cortex', 'analytics', 'filekey', 'firstdraft'],
  '1308848962842011451': ['cortex', 'analytics', 'filekey', 'firstdraft'],
  '1338915561589337295': ['cortex', 'analytics', 'filekey', 'firstdraft'],
  '1342184095219254574': ['cortex', 'analytics', 'filekey', 'firstdraft'],
  '1248327534194310871': ['openexternal'],
  '1247608093818933926': ['openexternal'],
  '1098668453462136230': ['analytics'],
  '1098643145465550199': ['analytics', 'filekey', 'openexternal'],
  '1159008294965494982': ['analytics', 'openexternal'],
  '1105998388939381214': ['analytics', 'openexternal'],
  '1098069144593389942': ['analytics', 'filekey', 'openexternal'],
  '1065825789137646656': Kd,
  '1105998344712102365': Kd,
  '1065825795062708289': ['hidecursors'],
  '1065825813933952067': ['hidecursors']
};

/**
 * Upload URL mapping for staging cluster plugin IDs.
 * Original variable name: x
 */
export const STAGING_UPLOAD_URLS: Record<string, string> = {
  [PROD_PLUGIN_IDS.openExternal1]: buildUploadUrl('83e16c32f7fbe88022ff9fcff130cdd6c6423861')
};

/**
 * Upload URL mapping for prod cluster plugin IDs.
 * Original variable name: N
 */
export const PROD_UPLOAD_URLS: Record<string, string> = {
  [PROD_PLUGIN_IDS.analytics1]: buildUploadUrl('83e16c32f7fbe88022ff9fcff130cdd6c6423861')
};

/**
 * Staging domain mapping.
 * Original variable name: C
 */
export const STAGING_DOMAINS: Record<string, string> = {
  [PROD_PLUGIN_IDS.staging1]: 'https://staging.figma.com',
  [PROD_PLUGIN_IDS.staging2]: 'https://staging.figma.com',
  [PROD_PLUGIN_IDS.staging3]: 'https://staging.figma.com',
  [PROD_PLUGIN_IDS.staging4]: 'https://staging.figma.com'
};

/**
 * Sets for openexternal plugin IDs.
 * Original variable names: w, O
 */
export const STAGING_OPENEXTERNAL_SET = new Set([PROD_PLUGIN_IDS.openExternal1, PROD_PLUGIN_IDS.openExternal2]);
export const PROD_OPENEXTERNAL_SET = new Set([PROD_PLUGIN_IDS.analytics1, PROD_PLUGIN_IDS.analytics2, PROD_PLUGIN_IDS.analytics3, '1220851659530313303']);

/**
 * Plugin ID mapping for staging and prod clusters.
 * Original variable names: R, L
 */
export const STAGING_PLUGIN_ID_MAP: Record<string, string> = {
  '1311749001261674187': '1311747530036311881'
};
export const PROD_PLUGIN_ID_MAP: Record<string, string> = {
  '1312547578554957136': '1311777988952403297'
};

/**
 * Lists for plugin ID checks.
 * Original variable names: P, D
 */
export const STAGING_PLUGIN_ID_LIST = ['1286790870036328880'];
export const PROD_PLUGIN_ID_LIST = ['1286792998372727741', '1471237098317254321', '1499098169301830432', '1497629632442770130'];

/**
 * Empty permission and domain maps for interaction path/local clusters.
 * Original variable names: M, F
 */
export const INTERACTION_PATH_DOMAINS: Record<string, string> = {};
export const INTERACTION_PATH_PERMISSIONS: Record<string, any> = {};

/**
 * Checks if plugin ID is trusted for the current cluster.
 * Original function name: $$j7
 * @param pluginId
 */
export function isTrustedPluginId(pluginId: string): boolean {
  const cluster = getInitialOptions().cluster_name;
  if (cluster === 'prod') {
    return pluginId in PROD_PLUGIN_DOMAINS || pluginId in PROD_PLUGIN_PERMISSIONS;
  }
  if (cluster === 'staging') {
    return pluginId in STAGING_DOMAINS || pluginId in STAGING_PLUGIN_PERMISSIONS;
  }
  if (isInteractionPathCheck() || getFalseValue()) {
    return pluginId in INTERACTION_PATH_DOMAINS;
  }
  return !!isLocalCluster();
}

/**
 * Gets the domain for a plugin ID for the current cluster.
 * Original function name: $$U0
 * @param pluginId
 */
export function getPluginDomain(pluginId: string): string | undefined {
  const cluster = getInitialOptions().cluster_name;
  if (cluster === 'prod') {
    return PROD_PLUGIN_DOMAINS[pluginId] ?? undefined;
  }
  if (cluster === 'staging') {
    return STAGING_DOMAINS[pluginId] ?? undefined;
  }
  if (isInteractionPathCheck() || getFalseValue()) {
    return INTERACTION_PATH_DOMAINS[pluginId] ?? undefined;
  }
  if (isLocalCluster()) {
    return '*';
  }
  return undefined;
}

/**
 * Gets the permissions for a plugin ID for the current cluster.
 * Original function name: $$B9
 * @param pluginId
 */
export function getPluginPermissions(pluginId: string): Set<string> {
  if (!isTrustedPluginId(pluginId)) {
    throw new Error('Untrusted pluginID');
  }
  const cluster = getInitialOptions().cluster_name;
  if (cluster === 'prod') {
    return new Set(PROD_PLUGIN_PERMISSIONS[pluginId] ?? []);
  }
  if (cluster === 'staging') {
    return new Set(STAGING_PLUGIN_PERMISSIONS[pluginId] ?? []);
  }
  if (isInteractionPathCheck() || getFalseValue()) {
    return new Set(INTERACTION_PATH_PERMISSIONS[pluginId] ?? []);
  }
  if (isLocalCluster()) {
    return new Set(UX);
  }
  return new Set();
}

/**
 * Returns the set of openexternal plugin IDs for the current cluster.
 * Original function name: $$G4
 */
export function getOpenExternalPluginIds(): Set<string> {
  const cluster = getInitialOptions().cluster_name;
  if (cluster === 'prod') {
    return PROD_OPENEXTERNAL_SET;
  }
  if (cluster === 'staging') {
    return STAGING_OPENEXTERNAL_SET;
  }
  // For interaction path/local clusters, always return empty set
  return new Set();
}

/**
 * Checks if plugin ID is allowed for upload.
 * Original function name: $$k1
 * @param pluginId
 */
export function isAllowedUploadPluginId(pluginId: string): boolean {
  const cluster = getInitialOptions().cluster_name;
  if (cluster === 'prod') {
    return pluginId === PROD_PLUGIN_IDS.analytics2;
  }
  return cluster === 'staging' && pluginId === PROD_PLUGIN_IDS.openExternal2;
}

/**
 * Checks if plugin ID is allowed for upload (used for upload URL).
 * Original function name: $$V6
 * @param pluginId
 * @param isUpload
 */
export function isAllowedUpload(pluginId: string, isUpload: boolean): boolean {
  const cluster = getInitialOptions().cluster_name;
  const checkId = cluster === 'staging' ? PROD_PLUGIN_IDS.openExternal1 : PROD_PLUGIN_IDS.analytics1;
  return !(isUpload && pluginId === checkId);
}

/**
 * Gets the upload URL for a plugin ID for the current cluster.
 * Original function name: $$H8
 * @param pluginId
 */
export function getPluginUploadUrl(pluginId: string): string | undefined {
  const cluster = getInitialOptions().cluster_name;
  if (cluster === 'prod') {
    return PROD_UPLOAD_URLS[pluginId];
  }
  if (cluster === 'staging') {
    return STAGING_UPLOAD_URLS[pluginId];
  }
  return undefined;
}

/**
 * Checks if plugin ID is in the allowed list for the current cluster.
 * Original function name: $$z10
 * @param pluginId
 */
export function isPluginIdAllowed(pluginId: string): boolean {
  const cluster = getInitialOptions().cluster_name;
  if (cluster === 'prod') {
    return PROD_PLUGIN_ID_LIST.includes(pluginId);
  }
  if (cluster === 'staging') {
    return STAGING_PLUGIN_ID_LIST.includes(pluginId);
  }
  return !!(isInteractionPathCheck() || getFalseValue()) || !!isLocalCluster();
}

/**
 * Gets the mapped plugin ID for the current cluster.
 * Original function name: $$W5
 * @param pluginId
 */
export function getMappedPluginId(pluginId: string): string | undefined {
  const cluster = getInitialOptions().cluster_name;
  if (cluster === 'prod') {
    return PROD_PLUGIN_ID_MAP[pluginId];
  }
  if (cluster === 'staging') {
    return STAGING_PLUGIN_ID_MAP[pluginId];
  }
  return undefined;
}

// Exported aliases for backward compatibility
export const HB = getPluginDomain;
export const P8 = isAllowedUploadPluginId;
export const Ph = PROD_PLUGIN_IDS.cortexAnalytics;
export const T0 = PROD_PLUGIN_IDS.cortexAnalytics2;
export const Up = getOpenExternalPluginIds;
export const Y3 = getMappedPluginId;
export const Zl = isAllowedUpload;
export const eZ = isTrustedPluginId;
export const sA = getPluginUploadUrl;
export const xp = getPluginPermissions;
export const yb = isPluginIdAllowed;