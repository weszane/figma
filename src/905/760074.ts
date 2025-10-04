import { reportError, setTagGlobal, setTagsGlobal } from '../905/11';
import { ServiceCategories } from '../905/165054';
import { getI18nString } from '../905/303541';
import { CPPEventType } from '../905/535806';
import { AccessLevelEnum } from '../905/557142';
import { getFeatureFlags } from '../905/601108';
import { currentSelectionAtom } from '../905/617744';
import { logError } from '../905/714362';
import { getCurrentLiveGraphClient } from '../905/761735';
import { sendWithRetry } from '../905/910117';
import { atomStoreManager } from '../figma_app/27355';
import { FFileType } from '../figma_app/191312';
import { encodeUri } from '../figma_app/930338';

// Refactored code with logical groupings, meaningful names, JSDoc comments, and type annotations.
// Original function names are preserved in comments for traceability.
// Grouped by functionality: Type Checks, Comparisons, URL Generation, Data Manipulation, Async Operations, Error Handling, and Utilities.

// Type definitions for clarity
export interface FileEntity {
  default_file_key?: string;
  defaultFileKey?: string;
  file_repo_id?: string;
  source_file_key?: string;
  fileRepoId?: string;
  sourceFileKey?: string;
  sourceLibraryKey?: string;
  key: string;
  name?: string;
  trashedAt?: string;
  has_file_link_password?: boolean;
  has_proto_link_password?: boolean;
  touched_at?: number;
  id?: string;
}
export interface BranchEntity {
  touched_at: any;
  key: string;
  name?: string;
  default_file_key?: string;
  defaultFileKey?: string;
  trashed_at?: string;
}
interface UserEntity {
  name?: string;
}
interface AccessInfo {
  level: AccessLevelEnum;
}

// Type Checks
/**
 * Checks if the entity is a branch (original: $$f13).
 * @param e - The file entity.
 * @returns True if it's a branch.
 */
export const isBranch = (e: FileEntity): boolean => !!(e.file_repo_id && e.source_file_key);

/**
 * Checks if the entity is a branch (original: $$_6).
 * @param e - The file entity.
 * @returns True if it's a branch.
 */
export const isBranchAlt = (e: FileEntity): boolean => !!(e.fileRepoId && e.sourceFileKey);

/**
 * Returns the type string for the entity (original: $$v11).
 * @param e - The file entity.
 * @returns 'branch' or 'file'.
 */
export const getEntityType = (e: FileEntity): string => isBranch(e) ? getI18nString('file_info_row.branch') : getI18nString('file_info_row.file');

/**
 * Checks if the entity is trashed (original: $$x15).
 * @param e - The file entity.
 * @returns True if trashed.
 */
export const isTrashed = (e: FileEntity): boolean => isBranchAlt(e) && !!e.trashedAt;

/**
 * Checks if the entity has a password (original: $$S25).
 * @param e - The file entity.
 * @returns True if it has a password.
 */
export const hasPassword = (e: FileEntity): boolean => !!(e?.has_file_link_password || e?.has_proto_link_password);

// Comparisons

/**
 * Matches source file key (original: $$y17).
 * @param e - The file entity.
 * @param t - The key.
 * @returns True if matches.
 */
export const matchesSourceKey = (e: FileEntity, t: string): boolean => isBranch(e) && e.source_file_key === t;

/**
 * Compares entity with key (original: $$A19).
 * @param e - The file entity.
 * @param t - The key.
 * @returns Comparison result.
 */
export const compareWithKey = (e: FileEntity, t: any): boolean => matchesSourceKey(e, t.key);

/**
 * Matches source library key (original: $$b9).
 * @param e - The file entity.
 * @param t - The key.
 * @returns True if matches.
 */
export const matchesLibraryKey = (e: FileEntity, t: string): boolean => isBranchAlt(e) && e.sourceLibraryKey === t;

/**
 * Checks if it's the default file (original: $$I12).
 * @param e - The branch entity.
 * @param t - The file entity.
 * @returns True if default.
 */
export const isDefaultFile = (e: BranchEntity, t: FileEntity): boolean => e.key === t.default_file_key;

/**
 * Checks if it's the default file (original: $$E10).
 * @param e - The branch entity.
 * @param t - The file entity.
 * @returns True if default.
 */
export const isDefaultFileAlt = (e: BranchEntity, t: FileEntity): boolean => e.key === t.defaultFileKey;

// URL Generation

/**
 * Gets display name (original: $$w0).
 * @param e - The branch entity.
 * @param t - The file entity.
 * @returns The display name.
 */
export const getDisplayName = (e: any, t: any): string => isDefaultFile(e, t) ? t.name || 'Untitled' : e.name || 'Untitled';

/**
 * Builds URL path (original: $$R18).
 * @param e - The file entity.
 * @param t - The branch entity.
 * @param i - The type.
 * @returns The URL path.
 */
export function buildUrlPath(e: FileEntity, t: BranchEntity, i: string): string {
  let n = `/${i}`;
  n += isBranch(e) && t?.default_file_key ? `/${t.default_file_key}/branch/${e.key}` : `/${e.key}`;
  const r = encodeUri(getDisplayName(t, e));
  if (r) n += `/${r}`;
  return n;
}

/**
 * Builds URL path alternative (original: N).
 * @param e - The file entity.
 * @param t - The branch entity.
 * @param i - The type.
 * @returns The URL path.
 */
function buildUrlPathAlt(e: FileEntity, t: BranchEntity, i: string): string {
  let n = `/${i}`;
  n += isBranchAlt(e) && t?.defaultFileKey ? `/${t.defaultFileKey}/branch/${e.key}` : `/${e.key}`;
  const r = encodeUri((t?.name ?? e?.name) || 'Untitled');
  if (r) n += `/${r}`;
  return n;
}

/**
 * Determines editor type (original: P).
 * @param e - The type.
 * @param t - The entity.
 * @returns The editor type.
 */
function getEditorType(e: string, t: any): string {
  const i = t.editor_type || t.editorType;
  return e === 'proto' ? e : i === FFileType.DESIGN ? 'design' : e;
}

/**
 * Optimizes URL (original: O).
 * @param e - The URL.
 * @returns The optimized URL.
 */
function optimizeUrl(e: URL): URL {
  try {
    const t = e.pathname.split('/')[1];
    if (t === 'file') e.searchParams.append('type', FFileType.DESIGN);else if (t === 'design') e.searchParams.append('m', 'auto');
  } catch {}
  return e;
}

/**
 * Generates URL (original: $$D3).
 * @param e - The file entity.
 * @param t - The branch entity.
 * @param i - The type.
 * @returns The URL href.
 */
export function generateUrl(e: FileEntity, t: BranchEntity, i: string): string {
  const n = getEditorType(i, e);
  return optimizeUrl(new URL(buildUrlPath(e, t, n), document.baseURI)).href;
}

/**
 * Generates URL alternative (original: $$L1).
 * @param e - The file entity.
 * @param t - The branch entity.
 * @param i - The type.
 * @returns The URL.
 */
export function generateUrlAlt(e: FileEntity, t: BranchEntity, i: string): URL {
  const n = getEditorType(i, e);
  return optimizeUrl(new URL(buildUrlPathAlt(e, t, n), document.baseURI));
}

// Data Manipulation
/**
 * Filters branches (original: $$F20).
 * @param e - The file entity.
 * @param t - The branches.
 * @param i - The access map.
 * @param n - The user key.
 * @returns Filtered branches.
 */
export function filterBranches(e: FileEntity, t: BranchEntity[], i: Record<string, Record<string, AccessInfo>>, n: string): Array<{
  key: string;
  name: string;
  isMain: boolean;
  ownedByUser: boolean;
}> {
  return t.filter(branch => !(isBranch(branch) && branch.trashed_at)).map(branch => {
    const r = isDefaultFile(branch, e);
    const a = i[branch.key] && i[branch.key][n];
    const s = !r && a?.level === AccessLevelEnum.OWNER;
    return {
      key: branch.key,
      name: r ? 'Main' : branch.name,
      isMain: r,
      ownedByUser: s
    };
  });
}

/**
 * Finds branch by ID (original: $$M21).
 * @param e - The file entity.
 * @param t - The branches.
 * @param i - The ID map.
 * @returns The found branch.
 */
export function findBranchById(e: FileEntity, t: BranchEntity[], i: Record<string, string>): BranchEntity {
  const n = i[e.id] || '';
  return findBestBranch(e, t, n);
}

/**
 * Finds the best branch (original: $$j8).
 * @param e - The file entity.
 * @param t - The branches.
 * @param i - The key.
 * @returns The best branch.
 */
export function findBestBranch(e: FileEntity, t: BranchEntity[], i: string): BranchEntity {
  if (i) {
    const found = t.find(branch => branch.key === i);
    if (found) return found;
  }
  return t.find(branch => isDefaultFile(branch, e)) || t.reduce((prev, curr) => prev.touched_at > curr.touched_at ? prev : curr, t[0]);
}

/**
 * Gets display name alternative (original: $$C22).
 * @param e - The entity.
 * @param t - The user entity.
 * @returns The display name.
 */
export const getDisplayNameAlt = (e: FileEntity, t?: UserEntity): string => (e?.name ?? t?.name) || 'Untitled';

/**
 * Gets repo by ID (original: $$T7).
 * @param e - The file entity.
 * @param t - The repo map.
 * @returns The repo.
 */
export function getRepoById(e: FileEntity, t: Record<string, any>): any {
  if (!e) return null;
  const i = e.file_repo_id;
  return i && t[i] || null;
}

/**
 * Gets repo by ID alternative (original: $$k24).
 * @param e - The file entity.
 * @param t - The repo map.
 * @returns The repo.
 */
export function getRepoByIdAlt(e: FileEntity, t: Record<string, any>): any {
  if (!e) return null;
  const i = e.fileRepoId;
  return i && t[i] || null;
}

// Async Operations
/**
 * Restores files (original: $$U5).
 * @param e - The file keys.
 * @returns The result.
 */
export async function restoreFiles(e: string[]): Promise<{
  status: 'success' | 'error';
  message?: string;
}> {
  const t = sendWithRetry.post('/api/files_batch/restore', {
    files: e.map(key => ({
      key
    })),
    batch_fail_on_file_limit: true
  });
  const i = {
    File: {}
  };
  e.forEach(key => {
    i.File[key] = {
      key,
      trashedAt: undefined
    };
  });
  try {
    const n = await getCurrentLiveGraphClient().optimisticallyUpdate(i, t);
    if (n.status === 207) {
      try {
        const data = n.data;
        return {
          status: 'error',
          message: data.message
        };
      } catch {
        return {
          status: 'error',
          message: getI18nString('collaboration.branching.error_restoring_branches', {
            branchCount: e.length
          })
        };
      }
    }
    return {
      status: 'success'
    };
  } catch ({
    response: t
  }) {
    try {
      const data = JSON.parse(t);
      return {
        status: 'error',
        message: data.message
      };
    } catch {
      return {
        status: 'error',
        message: getI18nString('collaboration.branching.error_restoring_branches', {
          branchCount: e.length
        })
      };
    }
  }
}

// Error Handling
/**
 * Gets diff version (original: $$B2).
 * @returns The version.
 */
export const getDiffVersion = (): number => getFeatureFlags().fig_diff_remove_canvas_fields_write ? 7 : 6;

/**
 * Creates tags (original: V).
 * @param e - The failure type.
 * @param t - The merge direction.
 * @returns The tags.
 */
function createTags(e: CPPEventType, t: string | null): Record<string, string> {
  return {
    'bm.branchingFailureType': e,
    'bm.diffVersion': `${getDiffVersion()}`,
    'bm.mergeDirection': t ?? 'unknown'
  };
}

/**
 * Sets global tags (original: $$G16).
 * @param e - The failure type.
 * @param t - The merge direction.
 */
export const setGlobalTags = (e: CPPEventType, t: string | null): void => setTagsGlobal(createTags(e, t));

/**
 * Clears global tags (original: $$z23).
 */
export const clearGlobalTags = (): void => Object.keys(createTags(CPPEventType.UNHANDLED, null)).forEach(key => setTagGlobal(key, undefined));

/**
 * Handles error (original: $$H4).
 * @param e - The error.
 * @param t - The failure type.
 * @param i - The merge direction.
 * @param r - The context.
 */
export function handleError(e: Error, t: CPPEventType, i: string | null, r: any): void {
  logError('branching', e.message, r);
  reportError(ServiceCategories.SCENEGRAPH_AND_SYNC, e, {
    tags: createTags(t, i)
  });
}

/**
 * Handles modal error (original: $$W14).
 * @param e - The error.
 * @param t - The context.
 */
export function handleModalError(e: Error, t: any): void {
  const i: any = atomStoreManager.get(currentSelectionAtom);
  logError('branching', e.message, t);
  reportError(ServiceCategories.SCENEGRAPH_AND_SYNC, e, {
    tags: createTags(CPPEventType.MODAL, i)
  });
}

// Updated exports with refactored names
export const At = getDisplayName;
export const By = generateUrlAlt;
export const C2 = getDiffVersion;
export const CE = generateUrl;
export const HJ = handleError;
export const J8 = restoreFiles;
export const Kz = isBranchAlt;
export const L8 = getRepoById;
export const LH = findBestBranch;
export const LP = matchesLibraryKey;
export const Ns = isDefaultFileAlt;
export const Pn = getEntityType;
export const SA = isDefaultFile;
export const Xm = isBranch;
export const cb = handleModalError;
export const ci = isTrashed;
export const dn = setGlobalTags;
export const dp = matchesSourceKey;
export const gN = buildUrlPath;
export const gs = compareWithKey;
export const gx = filterBranches;
export const mr = findBranchById;
export const oj = getDisplayNameAlt;
export const qk = clearGlobalTags;
export const up = getRepoByIdAlt;
export const yR = hasPassword;
