import type { IDBPDatabase, IDBPTransaction } from 'idb';
import type { PrimitiveAtom } from 'jotai';
import { deleteDB } from 'idb';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { reportError } from '../905/11';
import { createFileConfig } from '../905/18613';
import { commitTransactionIfSupported, createPrefixKeyRange, createSessionGreaterEqualKeyRange, createSessionNodeKeyRange, createZeroToInfinityKeyRange, createZeroToInfinityKeyRangeDuplicate1, createZeroToInfinityKeyRangeDuplicate2, EDITOR_SESSIONS_STORE, executeDatabaseTransaction, getAutosaveDatabase, getAutosaveDatabaseWithErrorHandling, NEW_FILES_STORE, NODE_CHANGES_STORE, REFERENCED_NODES_STORE, SAVED_IMAGES_STORE, SESSION_INDEX } from '../905/25189';
import { acquireAutosaveLock, isLockAvailableForAutosave, isLockNameMatching } from '../905/58217';
import { fullscreenPerfManager } from '../905/125218';
import { ServiceCategories } from '../905/165054';
import { NotificationCategory } from '../905/170564';
import { permissionScopeHandler } from '../905/189185';
import { AutosaveActivityLogManager, garbageCollectActivityLog } from '../905/200074';
import { AsyncJobQueue } from '../905/291063';
import { maybeCreateSavepoint } from '../905/294113';
import { getI18nString } from '../905/303541';
import { getStorageEstimate, isAutosaveEnabled, logAutosaveError, logAutosaveErrorWithOriginalMessage } from '../905/327522';
import { debugState } from '../905/407919';
import { awaitSync } from '../905/412815';
import { trackEventAnalytics } from '../905/449184';
import { notificationActions } from '../905/463586';
import { getTrackingSessionId } from '../905/471229';
import { handleAtomEvent } from '../905/502364';
import { getFeatureFlags } from '../905/601108';
import { Timer } from '../905/609396';
import { isLocalFileKey } from '../905/657242';
import { fileKeyAtom } from '../905/662353';
import { liveStoreInstance } from '../905/713695';
import { logDebug, logError, logInfo, logWarning } from '../905/714362';
import { autosaveCommitMessage, autosaveNewFileSyncStart, ipcStorageHandler, restoredAutosaveKey, throttledNotifyNewFilesUpdate } from '../905/725909';
import { useHasFilePermission } from '../905/728491';
import { resourceUtils } from '../905/989992';
import { atom, atomStoreManager, useAtomWithSubscription } from '../figma_app/27355';
import { FileCanEdit } from '../figma_app/43951';
import { filePutAction } from '../figma_app/78808';
import { isNotNullish } from '../figma_app/95419';
import { getInitialOptions } from '../figma_app/169182';
import { useMultiSubscription } from '../figma_app/288654';
import { trackFileEvent } from '../figma_app/314264';
import { autosaveSubscribeWithRetry, isIncrementalSessionOrValidating } from '../figma_app/582924';
import { filterNotNullish } from '../figma_app/656233';
import { AutosaveHelpers, ConnectionState, EditChangeMode, ImageCppBindings, LogToConsoleMode, Multiplayer } from '../figma_app/763686';
import { BrowserInfo } from '../figma_app/778880';
import { userIdAtom } from '../figma_app/864723';

/**
 * Handles and logs errors for Autosave operations.
 * Original name: K
 * @param error - The error object or message.
 * @param context - Contextual message for the error.
 */
function handleAutosaveError(error: unknown, context: string): void {
  let message = 'unknown';
  if (error) {
    if (typeof error === 'string') {
      message = error;
    } else if ('message' in (error as any)) {
      message = (error as any).message;
    }
  } else {
    message = 'no error message';
  }
  logError('Autosave', message, {
    message: context
  });
}

/**
 * Returns the autosave expiration time in milliseconds.
 * Original name: $$Y11
 */
export function getAutosaveExpirationMs(): number {
  return 7776e6;
}

/**
 * Fetches an editor session row by user, file, and session ID.
 * Original name: $
 */
async function getEditorSessionRow(userID: string, fileKey: string, sessionID: number, transaction: IDBPTransaction<unknown, string[], IDBTransactionMode>): Promise<{
  id: number;
} & any | undefined> {
  const store = transaction.objectStore(EDITOR_SESSIONS_STORE);
  const row = await store.index(SESSION_INDEX).get([userID, fileKey, sessionID]);
  return row && (row as any).id ? {
    id: (row as any).id,
    ...row
  } : undefined;
}

/**
 * Gets the editor session ID for a user, file, and session.
 * Original name: X
 */
async function getEditorSessionId(userID: string, fileKey: string, sessionID: number, transaction: IDBPTransaction<unknown, string[], IDBTransactionMode>): Promise<number | undefined> {
  const row = await getEditorSessionRow(userID, fileKey, sessionID, transaction);
  return row?.id;
}

/**
 * Merges and claims autosave changes from multiple sessions.
 * Original name: q
 */
async function mergeAndClaimAutosaveChanges(transaction: IDBPTransaction<unknown, string[], IDBTransactionMode>, sessionID: number, sessionRows: any[]): Promise<{
  changesByNode: Map<string, {
    changes: any;
    editorSessionID: number;
  }>;
  referencedNodeMap: Map<string, any>;
  fileVersion: number;
}> {
  const editorStore = transaction.objectStore(EDITOR_SESSIONS_STORE);
  const nodeStore = transaction.objectStore(NODE_CHANGES_STORE);
  const imageStore = transaction.objectStore(SAVED_IMAGES_STORE);
  const refNodeStore = transaction.objectStore(REFERENCED_NODES_STORE);
  const validSessions: any[] = [];
  for (const row of sessionRows) {
    const session = await editorStore.index(SESSION_INDEX).get([row.userID, row.fileKey, row.sessionID]);
    if (session && (session as any).id) validSessions.push(session);
  }
  if (validSessions.length === 0) {
    await transaction.done;
    return {
      changesByNode: new Map(),
      referencedNodeMap: new Map(),
      fileVersion: -1
    };
  }
  validSessions.sort((a, b) => b.fileVersion - a.fileVersion);
  const latestSession = validSessions[0];
  const changesByNode = new Map<string, {
    changes: any;
    editorSessionID: number;
  }>();
  const referencedNodeMap = new Map<string, any>();
  const latestSessionNodes = await nodeStore.getAll(createSessionGreaterEqualKeyRange(latestSession.id));
  for (const node of latestSessionNodes) {
    changesByNode.set(node.nodeID, {
      changes: node.changes,
      editorSessionID: latestSession.id
    });
  }
  const latestSessionRefs = await refNodeStore.getAll(createSessionGreaterEqualKeyRange(latestSession.id));
  for (const ref of latestSessionRefs) {
    referencedNodeMap.set(ref.nodeID, ref.buffer);
  }
  let lastUpdatedAt = latestSession.lastUpdatedAt;
  for (const session of validSessions.slice(1)) {
    const isSameVersion = session.fileVersion === latestSession.fileVersion;
    if (isSameVersion) {
      const sessionNodes = await nodeStore.getAll(createSessionGreaterEqualKeyRange(session.id));
      for (const node of sessionNodes) {
        let mergedChanges = node.changes;
        const existing = changesByNode.get(node.nodeID);
        if (existing) {
          mergedChanges = AutosaveHelpers.mergeMultiplayerMessages(existing.changes, node.changes, latestSession.fileVersion);
        }
        changesByNode.set(node.nodeID, {
          changes: mergedChanges,
          editorSessionID: latestSession.id
        });
        await nodeStore.put({
          editorSessionID: latestSession.id,
          nodeID: node.nodeID,
          changes: mergedChanges
        }).catch(e => handleAutosaveError(e, 'mergeAndClaimChanges: updating session IDs'));
      }
      const sessionRefs = await refNodeStore.getAll(createSessionGreaterEqualKeyRange(session.id));
      for (const ref of sessionRefs) {
        referencedNodeMap.set(ref.nodeID, ref.buffer);
        await refNodeStore.put({
          editorSessionID: latestSession.id,
          nodeID: ref.nodeID,
          buffer: ref.buffer
        }).catch(e => handleAutosaveError(e, 'mergeAndClaimChanges: merge referenced nodes'));
      }
      lastUpdatedAt = Math.max(lastUpdatedAt, session.lastUpdatedAt);
    }
    await nodeStore.delete(createSessionGreaterEqualKeyRange(session.id)).catch(e => handleAutosaveError(e, 'mergeAndClaimChanges: node changes for session'));
    await refNodeStore.delete(createSessionGreaterEqualKeyRange(session.id)).catch(e => handleAutosaveError(e, 'mergeAndClaimChanges: referenced nodes for session'));
    let cursor = await imageStore.openCursor(createSessionGreaterEqualKeyRange(session.id));
    while (cursor) {
      if (isSameVersion) {
        await imageStore.put({
          ...cursor.value,
          editorSessionID: latestSession.id
        }).catch(e => handleAutosaveError(e, 'mergeAndClaimChanges: merge images'));
      }
      await cursor.delete().catch(e => handleAutosaveError(e, 'mergeAndClaimChanges: remove old image'));
      cursor = await cursor.continue();
    }
    await editorStore.delete(session.id).catch(e => handleAutosaveError(e, 'mergeAndClaimChanges: delete old session id'));
  }
  await editorStore.put({
    ...(latestSession as any),
    sessionID,
    lastUpdatedAt
  });
  commitTransactionIfSupported(transaction);
  await transaction.done;
  logInfo('Autosave', `Found claimed autosave changes from ${validSessions.length} sessions`, undefined, {
    logToConsole: LogToConsoleMode.ALWAYS
  });
  return {
    changesByNode,
    referencedNodeMap,
    fileVersion: latestSession.fileVersion
  };
}

/**
 * Loads autosave sessions for a user and file.
 * Original name: J
 */
async function loadAutosaveSessions(userID: string, fileKey: string): Promise<any[]> {
  const keyRange = createSessionNodeKeyRange(userID, fileKey);
  const sessions: any[] = [];
  await fullscreenPerfManager.timeAsync('checkForAutosave', async () => {
    const db = await getAutosaveDatabaseWithErrorHandling();
    if (!db) return;
    const tx = db.transaction(EDITOR_SESSIONS_STORE);
    const store = tx.objectStore(EDITOR_SESSIONS_STORE);
    let cursor = await store.index(SESSION_INDEX).openCursor(keyRange);
    while (cursor) {
      sessions.push(cursor.value);
      cursor = await cursor.continue();
    }
    await tx.done;
  });
  if (sessions.length > 0) {
    logDebug('Autosave', 'Found auto-saved data for this file', undefined, {
      logToConsole: LogToConsoleMode.ALWAYS
    });
  }
  return sessions;
}

/**
 * Filters autosave sessions to only those available and not expired.
 * Original name: Z
 */
async function filterAvailableAutosaveSessions(sessions: any[]): Promise<any[]> {
  return await fullscreenPerfManager.timeAsync('filterAutosaveSessions', async () => {
    const available = await Promise.all(sessions.map(isLockAvailableForAutosave));
    const cutoff = Date.now() - getAutosaveExpirationMs();
    const filtered = sessions.filter((session, idx) => !available[idx] && session.lastUpdatedAt > cutoff);
    if (filtered.length === 0) {
      logInfo('Autosave', 'Changes not available or already claimed by another tab', undefined, {
        logToConsole: LogToConsoleMode.ALWAYS
      });
    }
    return filtered;
  });
}
let garbageCollectPromise: Promise<void> | null = null;

/**
 * Garbage collects autosave data and activity logs.
 * Original name: garbageCollectAutosave
 */
export async function garbageCollectAutosave(userID: string): Promise<void> {
  async function collect() {
    for (const dbName of ['figma-autosave-v2', 'figma-autosave-darklaunch-v2']) {
      deleteDB(dbName).catch(() => {});
    }
    try {
      const sessions = await go(createPrefixKeyRange(userID), async e => Date.now() - e.lastUpdatedAt < getAutosaveExpirationMs());
      if (sessions.length > 0) {
        const times = sessions.map(s => s.lastUpdatedAt);
        trackEventAnalytics('autosave garbage collect', {
          numSessions: sessions.length,
          localSessionCount: sessions.reduce((acc, s) => acc + (s.isLocalFile ? 1 : 0), 0),
          nodeCount: sessions.reduce((acc, s) => acc + s.nodeCount, 0),
          imageCount: sessions.reduce((acc, s) => acc + s.imageCount, 0),
          referencedNodeCount: sessions.reduce((acc, s) => acc + s.referencedNodeCount, 0),
          oldestSession: Math.min(...times),
          newestSession: Math.max(...times)
        });
      }
    } catch (err) {
      logAutosaveErrorWithOriginalMessage('Failed to garbage collect autosave changes', err);
    }
    garbageCollectActivityLog();
  }
  if (!garbageCollectPromise) garbageCollectPromise = collect();
  await garbageCollectPromise;
}

/**
 * Returns unsynced autosave files and new files for a list of user IDs.
 * Original name: getUnsyncedAutosaveFilesForUsers
 */
export async function getUnsyncedAutosaveFilesForUsers(userIds: string[]): Promise<Record<string, any>> {
  const result: Record<string, any> = {};
  for (const userId of userIds) {
    const data = await getUnsyncedAutosaveFilesForUser(userId);
    if (data.unsyncedFiles.length > 0 || data.newFiles.length > 0) {
      result[userId] = data;
    }
  }
  return result;
}

/**
 * Returns unsynced autosave files and new files for a user.
 * Original name: getUnsyncedAutosaveFilesForUser
 */
export async function getUnsyncedAutosaveFilesForUser(userId: string): Promise<{
  unsyncedFiles: any[];
  newFiles: any[];
  nextGarbageCollectionTimestamp: number;
}> {
  const db = await getAutosaveDatabaseWithErrorHandling();
  if (!db) {
    return {
      unsyncedFiles: [],
      newFiles: [],
      nextGarbageCollectionTimestamp: -1
    };
  }
  const {
    editorSessionRowsWithChanges,
    newFilesByKey,
    newFilesWithChanges
  } = await getAutosaveSessionData(db, userId);
  const unsyncedSet = new Set<string>();
  const lastUpdatedMap = new Map<string, number>();
  let nextGC = -1;
  const lockChecks: Promise<void>[] = [];
  for (const session of editorSessionRowsWithChanges) {
    if (!unsyncedSet.has(session.fileKey)) {
      lockChecks.push(isLockAvailableForAutosave({
        userID: userId,
        fileKey: session.fileKey,
        sessionID: session.sessionID
      }).then(available => {
        if (!available) {
          unsyncedSet.add(session.fileKey);
          const updated = Math.max(lastUpdatedMap.get(session.fileKey) || 0, session.lastUpdatedAt);
          lastUpdatedMap.set(session.fileKey, updated);
          nextGC = nextGC === -1 ? session.lastUpdatedAt : Math.min(nextGC, session.lastUpdatedAt);
        }
      }));
    }
  }
  await Promise.all(lockChecks);
  return {
    unsyncedFiles: Array.from(unsyncedSet).filter(fileKey => !isLocalFileKey(fileKey)).map(fileKey => ({
      type: 'autosave-file',
      fileKey,
      lastUpdatedAt: lastUpdatedMap.get(fileKey)
    })),
    newFiles: Array.from(unsyncedSet).filter(fileKey => isLocalFileKey(fileKey) && newFilesByKey.has(fileKey)).map(fileKey => {
      const fileInfo = newFilesByKey.get(fileKey);
      return buildNewAutosaveFileInfo(fileInfo, lastUpdatedMap, newFilesWithChanges.has(fileInfo.fileKey));
    }).filter(({
      hasChanges
    }) => hasChanges),
    nextGarbageCollectionTimestamp: nextGC
  };
}

/**
 * Loads session data for autosave for a user.
 * Original name: en
 */
async function getAutosaveSessionData(db: IDBPDatabase<unknown>, userId: string): Promise<{
  editorSessionRowsWithChanges: any[];
  newFilesByKey: Map<string, any>;
  newFilesWithChanges: Set<string>;
}> {
  const tx = db.transaction([EDITOR_SESSIONS_STORE, NODE_CHANGES_STORE, NEW_FILES_STORE]);
  const errorStack = new Error('original async stack');
  tx.done.catch(err => {
    err.cause = errorStack;
    reportError(ServiceCategories.UNOWNED, err);
  });
  const editorStore = tx.objectStore(EDITOR_SESSIONS_STORE);
  const sessions = await editorStore.index(SESSION_INDEX).getAll(createPrefixKeyRange(userId));
  const sessionRowsWithChanges: any[] = [];
  const nodeStore = tx.objectStore(NODE_CHANGES_STORE);
  for (const session of sessions) {
    const count = await nodeStore.count(createSessionGreaterEqualKeyRange(session.id));
    if (count > 0) {
      const nodes = await nodeStore.getAll(createSessionGreaterEqualKeyRange(session.id));
      for (const node of nodes) {
        if (!(getFeatureFlags().suppress_unsaved_changes_ui && getFeatureFlags().incremental_loading_validation) || AutosaveHelpers && !AutosaveHelpers.changesAreOnlyNewFileSystemChanges(node.changes, session.fileVersion)) {
          sessionRowsWithChanges.push(session);
          break;
        }
      }
    }
  }
  const newFilesByKey = new Map<string, any>();
  const newFilesStore = tx.objectStore(NEW_FILES_STORE);
  const newFiles = await newFilesStore.getAll(createPrefixKeyRange(userId));
  const newFilesWithChanges = new Set<string>();
  for (const file of newFiles) {
    newFilesByKey.set(file.fileKey, file);
    const session = sessions.find(s => s.fileKey === file.fileKey);
    if (session) {
      const nodes = await nodeStore.getAll(createSessionGreaterEqualKeyRange(session.id));
      if (hasPersistedChanges(file.fileKey, nodes) || file.hasChangedMetadata) {
        newFilesWithChanges.add(file.fileKey);
      }
    }
  }
  return {
    editorSessionRowsWithChanges: sessionRowsWithChanges,
    newFilesByKey,
    newFilesWithChanges
  };
}

/**
 * Checks if a user has unsynced autosave files.
 * Original name: hasUnsyncedAutosaveFiles
 */
export async function hasUnsyncedAutosaveFiles(userId: string): Promise<boolean> {
  const data = await getUnsyncedAutosaveFilesForUser(userId);
  return data.unsyncedFiles.length > 0 || data.newFiles.length > 0;
}

/**
 * Loads autosave files for a user.
 * Original name: loadAutosaveFilesForUser
 */
async function loadAutosaveFilesForUser(userId: string): Promise<any[]> {
  if (isAutosaveEnabled()) return [];
  const db = await getAutosaveDatabaseWithErrorHandling();
  if (!db) return [];
  const {
    editorSessionRowsWithChanges,
    newFilesByKey,
    newFilesWithChanges
  } = await getAutosaveSessionData(db, userId);
  const fileSet = new Set<string>();
  const lastUpdatedMap = new Map<string, number>();
  for (const session of editorSessionRowsWithChanges) {
    fileSet.add(session.fileKey);
    lastUpdatedMap.set(session.fileKey, Math.max(lastUpdatedMap.get(session.fileKey) || 0, session.lastUpdatedAt));
  }
  const files = Array.from(fileSet).map(fileKey => {
    const fileInfo = newFilesByKey.get(fileKey);
    return fileInfo ? buildNewAutosaveFileInfo(fileInfo, lastUpdatedMap, newFilesWithChanges.has(fileInfo.fileKey)) : null;
  }).filter(isNotNullish);
  autosaveManagerInstance?.fileCreationManager?.updateNewFileInfoFromFiles(files);
  return files;
}

/**
 * Builds new autosave file info object.
 * Original name: es
 */
function buildNewAutosaveFileInfo(fileInfo: any, lastUpdatedMap: Map<string, number>, hasChanges: boolean): {
  type: string;
  fileKey: string;
  editorType: string;
  name: string;
  creatorId: string;
  createdAt: number;
  lastUpdatedAt: number | undefined;
  orgId: string | null;
  hasChanges: boolean;
  hasChangedMetadata: boolean;
} {
  return {
    type: 'new-autosave-file',
    fileKey: fileInfo.fileKey,
    editorType: fileInfo.editorType,
    name: fileInfo.name,
    creatorId: fileInfo.userID,
    createdAt: fileInfo.createdAt,
    lastUpdatedAt: lastUpdatedMap.get(fileInfo.fileKey),
    orgId: fileInfo.orgID ?? null,
    hasChanges,
    hasChangedMetadata: fileInfo.hasChangedMetadata ?? false
  };
}
/**
 * Checks if a file has unsynced changes in autosave.
 * Original name: checkFileHasUnsyncedAutosave
 * @param userId - The user ID.
 * @param fileKey - The file key.
 */
export async function checkFileHasUnsyncedAutosave(userId: string, fileKey: string): Promise<void> {
  if (isAutosaveEnabled()) return;
  const hasUnsyncedChanges = async (session: any, transaction: IDBPTransaction<unknown, string[], IDBTransactionMode>) => {
    const nodeStore = transaction.objectStore(NODE_CHANGES_STORE);
    const nodes = await nodeStore.getAll(createSessionGreaterEqualKeyRange(session.id));
    return hasPersistedChanges(fileKey, nodes);
  };
  await deleteAutosaveDataForSessions(createSessionNodeKeyRange(userId, fileKey), hasUnsyncedChanges);
}

/**
 * Deletes autosave data for all sessions except those in the provided fileKey list.
 * Original name: deleteAutosaveExceptFileKeys
 * @param userId - The user ID.
 * @param excludeFileKeys - Array of file keys to exclude from deletion.
 */
export async function deleteAutosaveExceptFileKeys(userId: string, excludeFileKeys: string[]): Promise<void> {
  await deleteAutosaveDataForSessions(createPrefixKeyRange(userId), async session => !excludeFileKeys.includes(session.fileKey));
}

/**
 * Deletes autosave data for sessions matching the key range and predicate.
 * Original name: deleteAutosaveDataForSessions
 * @param keyRange - IndexedDB key range.
 * @param predicate - Optional predicate function to skip deletion for certain sessions.
 * @returns Array of deleted session metadata.
 */
export async function deleteAutosaveDataForSessions(keyRange: IDBKeyRange, predicate?: (session: any, transaction: IDBPTransaction<unknown, string[], IDBTransactionMode>) => Promise<boolean>): Promise<any[]> {
  const db = await getAutosaveDatabaseWithErrorHandling();
  if (!db) return [];
  const tx = db.transaction([EDITOR_SESSIONS_STORE, NODE_CHANGES_STORE, SAVED_IMAGES_STORE, REFERENCED_NODES_STORE, NEW_FILES_STORE], 'readwrite');
  const errorStack = new Error('original async stack');
  tx.done.catch(err => {
    err.cause = errorStack;
    reportError(ServiceCategories.UNOWNED, err);
  });
  const editorStore = tx.objectStore(EDITOR_SESSIONS_STORE);
  const nodeStore = tx.objectStore(NODE_CHANGES_STORE);
  const imageStore = tx.objectStore(SAVED_IMAGES_STORE);
  const refNodeStore = tx.objectStore(REFERENCED_NODES_STORE);
  const newFilesStore = tx.objectStore(NEW_FILES_STORE);
  let updated = false;
  const sessions = await editorStore.index(SESSION_INDEX).getAll(keyRange);
  const deletedSessions: any[] = [];
  const localFileSessions: {
    localFileKey: string;
    userID: string;
  }[] = [];
  for (const session of sessions) {
    if (!(predicate && (await predicate(session, tx)))) {
      const nodeCount = await nodeStore.count(createSessionGreaterEqualKeyRange(session.id));
      const imageCount = await imageStore.count(createSessionGreaterEqualKeyRange(session.id));
      const referencedNodeCount = await refNodeStore.count(createSessionGreaterEqualKeyRange(session.id));
      deletedSessions.push({
        userID: session.userID,
        fileKey: session.fileKey,
        sessionID: session.sessionID,
        isLocalFile: isLocalFileKey(session.fileKey),
        nodeCount,
        imageCount,
        referencedNodeCount,
        lastUpdatedAt: session.lastUpdatedAt
      });
      await editorStore.delete(session.id).catch(e => handleAutosaveError(e, 'deleteAutosaveDataForSessions: delete editor session'));
      await nodeStore.delete(createSessionGreaterEqualKeyRange(session.id)).catch(e => handleAutosaveError(e, 'deleteAutosaveDataForSessions: delete node changes'));
      await imageStore.delete(createSessionGreaterEqualKeyRange(session.id)).catch(e => handleAutosaveError(e, 'deleteAutosaveDataForSessions: delete images'));
      await refNodeStore.delete(createSessionGreaterEqualKeyRange(session.id)).catch(e => handleAutosaveError(e, 'deleteAutosaveDataForSessions: delete referenced nodes'));
      updated = true;
      if (isLocalFileKey(session.fileKey)) {
        localFileSessions.push({
          localFileKey: session.fileKey,
          userID: session.userID
        });
      }
    }
  }
  for (const {
    localFileKey,
    userID
  } of localFileSessions) {
    const remaining = await editorStore.index(SESSION_INDEX).count(createSessionNodeKeyRange(userID, localFileKey));
    if (remaining === 0) {
      await newFilesStore.delete(createSessionNodeKeyRange(userID, localFileKey));
    } else {
      logAutosaveError('Local file has remaining sessions');
    }
  }

  // Clean up leftover data if all sessions are deleted
  const editorCount = await editorStore.count();
  const nodeCount = await nodeStore.count();
  const imageCount = await imageStore.count();
  const refNodeCount = await refNodeStore.count();
  if (editorCount === 0) {
    if (nodeCount > 0) {
      logAutosaveError('Found leftover node changes in IDB');
      await nodeStore.delete(createZeroToInfinityKeyRange()).catch(e => handleAutosaveError(e, 'deleteAutosaveDataForSessions: delete leftover node changes'));
    }
    if (imageCount > 0) {
      logAutosaveError('Found leftover images in IDB');
      await imageStore.delete(createZeroToInfinityKeyRangeDuplicate1()).catch(e => handleAutosaveError(e, 'deleteAutosaveDataForSessions: delete leftover images'));
    }
    if (refNodeCount > 0) {
      logAutosaveError('Found leftover referenced node buffers in IDB');
      await refNodeStore.delete(createZeroToInfinityKeyRangeDuplicate2()).catch(e => handleAutosaveError(e, 'deleteAutosaveDataForSessions: delete leftover referenced nodes'));
    }
  }
  commitTransactionIfSupported(tx);
  await tx.done;
  if (updated) throttledNotifyNewFilesUpdate();
  return deletedSessions;
}

/**
 * Deletes an editor session row if it has no node, image, or referenced node changes.
 * Original name: deleteEditorSessionRowIfUnused
 * @param sessionId - The session ID.
 * @param transaction - The IDBTransaction.
 */
async function deleteEditorSessionRowIfUnused(sessionId: number, transaction: IDBPTransaction<unknown, string[], IDBTransactionMode>): Promise<void> {
  const nodeCount = await transaction.objectStore(NODE_CHANGES_STORE).count(createSessionGreaterEqualKeyRange(sessionId));
  const imageCount = await transaction.objectStore(SAVED_IMAGES_STORE).count(createSessionGreaterEqualKeyRange(sessionId));
  const refNodeCount = await transaction.objectStore(REFERENCED_NODES_STORE).count(createSessionGreaterEqualKeyRange(sessionId));
  if (nodeCount === 0 && imageCount === 0 && refNodeCount === 0) {
    await transaction.objectStore(EDITOR_SESSIONS_STORE).delete(sessionId).catch(e => handleAutosaveError(e, 'deleteEditorSessionRowIfUnused: delete editor session'));
  }
}

/**
 * Dumps autosave data for debugging.
 * Original name: dumpAutosaveData
 * @param maxNodes - Maximum number of nodes to dump.
 * @param encodeDerivedData - Whether to encode derived data.
 * @returns Dumped autosave data.
 */
export async function dumpAutosaveData(maxNodes: number, encodeDerivedData: boolean): Promise<Record<string, any>> {
  const db = await getAutosaveDatabaseWithErrorHandling();
  if (!db) throw new Error('Could not open autosave data');
  const tx = db.transaction([EDITOR_SESSIONS_STORE, NODE_CHANGES_STORE, SAVED_IMAGES_STORE, REFERENCED_NODES_STORE]);
  const editorStore = tx.objectStore(EDITOR_SESSIONS_STORE);
  const nodeStore = tx.objectStore(NODE_CHANGES_STORE);
  const result: Record<string, any> = {};
  for (const session of await editorStore.getAll()) {
    result[session.id] = session;
    result[session.id].changes = {};
  }
  result.unknown = {
    changes: {}
  };
  for (const node of (await nodeStore.getAll()).slice(0, maxNodes)) {
    if (node.editorSessionID in result) {
      result[node.editorSessionID].changes[node.nodeID] = JSON.parse(AutosaveHelpers.encodeChangesAsJson(node.changes, result[node.editorSessionID].fileVersion, !!encodeDerivedData));
    } else {
      result.unknown.changes[node.nodeID] = JSON.parse(AutosaveHelpers.encodeChangesAsJson(node.changes, 1, !!encodeDerivedData));
    }
  }
  await tx.done;
  return result;
}

/**
 * Commits autosave changes to the database.
 * Original name: commitAutosaveChanges
 * @param params - Commit parameters.
 * @returns Number of node changes stored.
 */
async function commitAutosaveChanges(params: {
  transaction: IDBPTransaction<unknown, string[], IDBTransactionMode>;
  commitPolicy: EditChangeMode;
  userID: string;
  fileKey: string;
  fileVersion: number;
  sessionID: number;
  oldSessionID: number;
  pendingChanges: Array<{
    nodeID: string;
    changes: any | null;
  }>;
  pendingImages: Set<string>;
  pendingReferencedNodes: Array<{
    nodeID: string;
    buffer: any;
  }>;
  reason?: ConnectionState;
  isFirstCommitOfAutosaveSession: boolean;
}): Promise<number> {
  const {
    transaction,
    commitPolicy,
    userID,
    fileKey,
    fileVersion,
    sessionID,
    oldSessionID,
    pendingChanges,
    pendingImages,
    pendingReferencedNodes,
    reason,
    isFirstCommitOfAutosaveSession
  } = params;
  const editorStore = transaction.objectStore(EDITOR_SESSIONS_STORE);
  const nodeStore = transaction.objectStore(NODE_CHANGES_STORE);
  const imageStore = transaction.objectStore(SAVED_IMAGES_STORE);
  const refNodeStore = transaction.objectStore(REFERENCED_NODES_STORE);
  const prevSession = await getEditorSessionRow(userID, fileKey, oldSessionID, transaction);
  let offlineEditingTime = 0;
  if (prevSession) {
    offlineEditingTime = (prevSession.offlineEditingTime || 0) + (isFirstCommitOfAutosaveSession ? 0 : Date.now() - prevSession.lastUpdatedAt);
  }
  let sessionRowId = prevSession?.id;
  const sessionRow = {
    userID,
    fileKey,
    sessionID,
    lastUpdatedAt: Date.now(),
    releaseTag: getInitialOptions().release_git_tag || '',
    fileVersion,
    lastCommitReason: reason,
    offlineEditingTime,
    originalTrackingSessionId: getTrackingSessionId()
  };
  if (sessionRowId == null) {
    sessionRowId = await editorStore.add(sessionRow);
  } else {
    if (commitPolicy === EditChangeMode.REPLACE_CHANGES) {
      await nodeStore.delete(createSessionGreaterEqualKeyRange(sessionRowId)).catch(e => handleAutosaveError(e, 'commitChanges: replace node changes'));
      await refNodeStore.delete(createSessionGreaterEqualKeyRange(sessionRowId)).catch(e => handleAutosaveError(e, 'commitChanges: replace referenced nodes'));
    }
    await editorStore.put({
      id: sessionRowId,
      ...sessionRow
    }).catch(e => handleAutosaveError(e, 'commitChanges: update session'));
  }
  for (const change of pendingChanges) {
    if (change.changes) {
      await nodeStore.put({
        editorSessionID: sessionRowId,
        nodeID: change.nodeID,
        changes: change.changes
      }).catch(e => handleAutosaveError(e, 'commitChanges: put node changes'));
    } else {
      await nodeStore.delete([sessionRowId, change.nodeID]).catch(e => handleAutosaveError(e, 'commitChanges: clear node changes'));
    }
  }
  for (const hash of pendingImages) {
    const count = await imageStore.count([sessionRowId, hash]);
    if (count === 0) {
      const blob = ImageCppBindings.getCompressedImage(hash);
      if (blob) {
        await imageStore.add({
          editorSessionID: sessionRowId,
          hash,
          blob
        }).catch(e => handleAutosaveError(e, 'commitChanges: add images'));
      }
    }
  }
  for (const refNode of pendingReferencedNodes) {
    await refNodeStore.add({
      editorSessionID: sessionRowId,
      nodeID: refNode.nodeID,
      buffer: refNode.buffer
    }).catch(e => handleAutosaveError(e, 'commitChanges: add referenced nodes'));
  }
  const nodeChangeCount = await nodeStore.count(createSessionGreaterEqualKeyRange(sessionRowId));
  if (nodeChangeCount === 0) {
    await imageStore.delete(createSessionGreaterEqualKeyRange(sessionRowId));
    await refNodeStore.delete(createSessionGreaterEqualKeyRange(sessionRowId));
  }
  await deleteEditorSessionRowIfUnused(sessionRowId, transaction);
  commitTransactionIfSupported(transaction);
  await transaction.done;
  if (isLocalFileKey(fileKey)) throttledNotifyNewFilesUpdate();
  return nodeChangeCount;
}

/**
 * Assigns a new file key to a local file and updates the database.
 * Original name: assignFileKeyForNewFile
 * @param userID - The user ID.
 * @param localFileKey - The local file key.
 * @param newFileKey - The new file key.
 */
async function assignFileKeyForNewFile(userID: string, localFileKey: string, newFileKey: string): Promise<void> {
  logInfo('Autosave', 'assigning file key for new file', {
    localFileKey,
    newFileKey
  });
  await executeDatabaseTransaction([EDITOR_SESSIONS_STORE, NEW_FILES_STORE], async tx => {
    const editorStore = tx.objectStore(EDITOR_SESSIONS_STORE);
    const sessions = await editorStore.index(SESSION_INDEX).getAll(createSessionNodeKeyRange(userID, localFileKey));
    sessions.forEach(session => {
      session.fileKey = newFileKey;
      editorStore.put(session);
    });
    tx.objectStore(NEW_FILES_STORE).delete(createSessionNodeKeyRange(userID, localFileKey));
  }, 'readwrite');
  throttledNotifyNewFilesUpdate();
}

/**
 * Determines if a file has persisted changes.
 * Original name: hasPersistedChanges
 * @param fileKey - The file key.
 * @param nodes - Array of node changes.
 * @returns True if there are persisted changes.
 */
function hasPersistedChanges(fileKey: string, nodes: Array<{
  nodeID: string;
}>): boolean {
  if (!isLocalFileKey(fileKey)) return nodes.length > 0;
  if (nodes.length > 2) return true;
  for (const {
    nodeID
  } of nodes) {
    if (!['0:0', '0:1'].includes(nodeID)) return true;
  }
  return false;
}
/**
 * CommitEventListener (original name: em)
 * Listens for commit events and allows waiting for the next commit.
 */
class CommitEventListener {
  private nextEventPromise: Promise<void>;
  private nextEventPromiseResolve!: () => void;
  constructor() {
    this.nextEventPromise = new Promise(resolve => {
      this.nextEventPromiseResolve = resolve;
    });
  }

  /**
   * Signals that a commit event has occurred.
   */
  onCommitEvent(): void {
    this.nextEventPromiseResolve();
    this.nextEventPromise = new Promise(resolve => {
      this.nextEventPromiseResolve = resolve;
    });
  }

  /**
   * Returns a promise that resolves on the next commit event.
   */
  waitForNextCommit(): Promise<void> {
    return this.nextEventPromise;
  }
}

/**
 * AutosaveManager (original name: eg)
 * Manages autosave sessions and file creation for a user and file.
 */
class AutosaveManager {
  public userID: string;
  public fileCreationManager: FileCreationManager | null;
  private _state: {
    type: string;
    session?: AutosaveSession;
  };
  private _fileKey: string;
  private _hasReportedError: boolean;
  private _sessionsToRestore: Promise<any[]>;
  constructor(userID: string, fileKey: string) {
    this.userID = userID;
    this._state = {
      type: 'connecting'
    };
    this._fileKey = '';
    this._hasReportedError = false;
    this.fileCreationManager = null;
    this.fileKey = fileKey;
    if (isAutosaveEnabled()) {
      this._sessionsToRestore = Promise.resolve([]);
      this._state = {
        type: 'terminated'
      };
    } else if (isLocalFileKey(fileKey)) {
      this._sessionsToRestore = loadAutosaveSessions(userID, fileKey);
    } else {
      this._sessionsToRestore = loadAutosaveSessions(userID, fileKey).then(filterAvailableAutosaveSessions);
    }
  }
  get fileKey(): string {
    return this._fileKey;
  }
  get managerState(): string {
    return this._state.type;
  }
  session(): AutosaveSession | null {
    return this._state.type === 'connected' ? this._state.session! : null;
  }
  set fileKey(key: string) {
    this._fileKey = key;
    const atomKey = isLocalFileKey(key) ? key : null;
    atomStoreManager.set(fileKeyAtom, atomKey);
  }

  /**
   * Assigns a new file key for a local file.
   */
  async assignFileKeyForLocalFile(newFileKey: string): Promise<void> {
    if (this._state.type !== 'connected') {
      if (this._state.type === 'connecting') logAutosaveError('Still connecting');
      return;
    }
    try {
      await this._state.session!.enqueueAssignFileKeyForLocalFile(newFileKey, () => {
        this.fileKey = newFileKey;
        this.fileCreationManager = null;
      });
    } catch {
      this.terminateDueToError('unable to update file key', true);
    }
  }

  /**
   * Terminates the manager and waits for cleanup.
   */
  async terminateAndWaitForCleanup(): Promise<void> {
    const session = this._state.type === 'connected' ? this._state.session : null;
    this._state = {
      type: 'terminated'
    };
    atomStoreManager.set(fileKeyAtom, null);
    await session?.destroy().catch(() => logAutosaveError('Failed to destroy autosave session'));
  }

  /**
   * Terminates the manager due to an error.
   */
  terminateDueToError(message: string, logErrorFlag: boolean): void {
    logWarning('Autosave', 'autosave disabled', {
      message
    });
    if (logErrorFlag) logAutosaveError(message);
    const hasSession = this._state.type === 'connected';
    if (!this._hasReportedError) {
      trackEventAnalytics('autosave_disabled', {
        message,
        hasSessionInProgress: hasSession
      }, {
        forwardToDatadog: true
      });
      this._hasReportedError = true;
    }
    this.terminateAndWaitForCleanup().catch(err => logAutosaveError('Failed to terminate autosave', {
      message,
      error: err.message
    }));
  }

  /**
   * Connects the manager to an autosave session.
   */
  async onConnect(sessionID: number): Promise<void> {
    if (this._state.type !== 'connecting') return;
    try {
      await getAutosaveDatabase();
    } catch (err: any) {
      logInfo('Autosave', 'IDB is not available in the current browser session.', undefined, {
        logToConsole: LogToConsoleMode.ALWAYS
      });
      trackEventAnalytics('autosave_db_failure', {
        message: err.message
      });
      this.terminateDueToError('unable to open DB', false);
      return;
    }
    const timer = new Timer();
    timer.start();
    const sessions = await this._sessionsToRestore;
    if (isLocalFileKey(this.fileKey)) {
      if (sessions.length > 1) {
        logAutosaveError('Local file has multiple sessions', {
          sessionCount: sessions.length,
          sessionIds: sessions.map(s => s.sessionID).slice(0, 5).join(', ')
        });
        this.terminateDueToError('Local file has multiple sessions', false);
      } else if (sessions.length === 1 && sessions[0].sessionID !== 0) {
        logAutosaveError('Local file with changes from non-zero session', {
          existingSessionId: sessions[0].sessionID
        });
        this.terminateDueToError('Local file with changes from non-zero session', false);
      }
    }
    const lock = await acquireAutosaveLock({
      userID: this.userID,
      fileKey: this.fileKey,
      sessionID
    });
    if (!lock) {
      this.terminateDueToError('unable to acquire lock', true);
      return;
    }
    this._state = {
      type: 'connected',
      session: new AutosaveSession(sessionID, this, timer, sessions, lock)
    };
  }

  /**
   * Connects the manager for a new file.
   */
  async onConnectNewFile(newFileInfo: any): Promise<void> {
    const fileKey = this.fileKey;
    if (isLocalFileKey(fileKey)) {
      try {
        await executeDatabaseTransaction([NEW_FILES_STORE], async tx => {
          const store = tx.objectStore(NEW_FILES_STORE);
          if (await store.get(createSessionNodeKeyRange(this.userID, fileKey))) return;
          const info = {
            fileKey,
            userID: this.userID,
            editorType: newFileInfo.editorType,
            name: newFileInfo.fileName ?? getI18nString('fullscreen.fullscreen_view_selector.untitled'),
            createdAt: Date.now(),
            orgID: newFileInfo.org_id
          };
          await store.put(info);
        }, 'readwrite');
        if (this.fileCreationManager) logAutosaveError('File creation manager already exists', {
          fileKey
        });
        this.fileCreationManager = new FileCreationManager(fileKey, newFileInfo);
      } catch {
        this.terminateDueToError('unable to set new file info', true);
        return;
      }
    }
    await this.onConnect(0);
  }
}

/**
 * Updates new file info in the database (original name: ef).
 */
async function updateNewFileInfo(userID: string, fileKey: string, name: string): Promise<void> {
  if (isLocalFileKey(fileKey) && userID) {
    try {
      await executeDatabaseTransaction([NEW_FILES_STORE], async tx => {
        const store = tx.objectStore(NEW_FILES_STORE);
        const file = await store.get(createSessionNodeKeyRange(userID, fileKey));
        if (file) {
          await store.put({
            ...file,
            name,
            hasChangedMetadata: true
          });
        }
      }, 'readwrite');
      throttledNotifyNewFilesUpdate();
    } catch {
      reportError(ServiceCategories.SCENEGRAPH_AND_SYNC, new Error('unable to update new file info'));
    }
  }
}

/**
 * FileCreationManager (original name: eE)
 * Manages creation and metadata for new files.
 */
class FileCreationManager {
  private _pendingRealFileKey: string | null;
  public fileKey: string;
  private _newFileInfo: any;
  constructor(fileKey: string, newFileInfo: any) {
    this._pendingRealFileKey = null;
    this.fileKey = fileKey;
    this._newFileInfo = newFileInfo;
  }
  get newFileInfo(): any {
    return this._newFileInfo;
  }

  /**
   * Updates the new file info object.
   */
  updateNewFileInfo(info: any): void {
    this._newFileInfo = {
      ...this._newFileInfo,
      ...info
    };
  }

  /**
   * Updates new file info from a list of files.
   */
  updateNewFileInfoFromFiles(files: any[]): void {
    const file = files.find(f => f.fileKey === this.fileKey);
    if (file) {
      const config = createFileConfig(file, this.newFileInfo.openNewFileIn);
      this.updateNewFileInfo(config);
    }
  }
  get pendingRealFileKey(): string | null {
    return this._pendingRealFileKey;
  }

  /**
   * Assigns the pending real file key and notifies other tabs.
   */
  assignPendingRealFileKey(realFileKey: string): void {
    this._pendingRealFileKey = realFileKey;
    ipcStorageHandler.sendToAllTabs(autosaveNewFileSyncStart, {
      localFileKey: this.fileKey,
      realFileKey
    });
  }
}
/**
 * AutosaveSession
 * Manages an autosave session, including restoring changes, committing changes, and handling locks.
 * Original name: AutosaveSession
 */
class AutosaveSession {
  public sessionID: number;
  public manager: AutosaveManager;
  public restoreTimer: Timer;
  public changesToRestore: any[];
  public webLock: any;
  public transactionQueue: AsyncJobQueue;
  public commitEventListener: CommitEventListener;
  public restoring: boolean;
  public consecutiveCommitsAddingChanges: number;
  public lastCommitTime: number;
  public activityLogger: AutosaveActivityLogManager | null;
  public restoreAnalytics: Record<string, any>;
  public reportedFullQueue: boolean;
  public reportedStorageError: boolean;
  public hasCommitted: boolean;

  /**
   * Creates an AutosaveSession.
   * @param sessionID - The session ID.
   * @param manager - The AutosaveManager instance.
   * @param restoreTimer - Timer for restore analytics.
   * @param changesToRestore - Array of session rows to restore.
   * @param webLock - The acquired lock for this session.
   */
  constructor(sessionID: number, manager: AutosaveManager, restoreTimer: Timer, changesToRestore: any[], webLock: any) {
    this.sessionID = sessionID;
    this.manager = manager;
    this.restoreTimer = restoreTimer;
    this.changesToRestore = changesToRestore;
    this.webLock = webLock;
    this.transactionQueue = new AsyncJobQueue();
    this.commitEventListener = new CommitEventListener();
    this.restoring = false;
    this.consecutiveCommitsAddingChanges = 0;
    this.lastCommitTime = 0;
    this.activityLogger = navigator.storage?.estimate ? new AutosaveActivityLogManager() : null;
    this.restoreAnalytics = {
      hadChangesToRestore: false,
      fileKey: '',
      time: 0,
      timeToStartSession: 0,
      timeToApply: 0,
      timeToSync: 0,
      sessionsCheckTime: 0,
      numberOfBytes: 0,
      numberOfNodes: 0,
      numberOfReferencedNodes: 0,
      numberOfRestoredReferencedNodes: 0,
      numberOfSessions: 0,
      numberOfImages: 0,
      neededToMigrate: false,
      persistentStorage: false,
      changesAreAllDerivedData: false,
      nodeFields: [],
      stagingDump: undefined,
      lastUpdatedAt: undefined,
      releaseTag: undefined,
      isLocalFile: false,
      offlineEditingTime: undefined,
      lastCommitReason: undefined,
      originalTrackingSessionId: undefined,
      storageUsageBytes: undefined,
      storageQuotaBytes: undefined,
      isIncremental: false
    };
    this.reportedFullQueue = false;
    this.reportedStorageError = false;
    this.hasCommitted = false;
    this.restoreAnalytics.timeToStartSession = this.restoreTimer.getElapsedTime();
  }

  /**
   * Returns the activity logger instance.
   */
  getActivityLogger(): AutosaveActivityLogManager | null {
    return this.activityLogger;
  }

  /**
   * Destroys the session and releases the lock.
   */
  async destroy(): Promise<void> {
    await this.webLock.release().catch(e => handleAutosaveError(e, 'AutosaveSession.destroy: releasing session lock'));
  }

  /**
   * Executes a database transaction for the session.
   */
  sessionTransaction(transactionName: string, stores: string[], fn: (tx: IDBPTransaction<unknown, string[], IDBTransactionMode>) => Promise<any>, mode: IDBTransactionMode): Promise<any> {
    const promise = executeDatabaseTransaction(stores, fn, mode);
    promise.catch(err => {
      trackEventAnalytics('autosave_transaction_failure', {
        transactionName,
        message: err.message
      });
      this.manager.terminateDueToError(`${transactionName} transaction failed`, false);
    });
    return promise;
  }

  /**
   * Returns true if ready to accept changes.
   */
  readyToAcceptChanges(): boolean {
    const isQueueFull = this.transactionQueue.length >= 10;
    if (isQueueFull && !this.reportedFullQueue) {
      this.reportedFullQueue = true;
      logAutosaveError('Autosave transaction queue is backed up.');
    }
    return !this.restoring && !isQueueFull;
  }

  /**
   * Returns true if there is an ongoing commit task.
   */
  hasOngoingCommitTask(): boolean {
    return !this.transactionQueue.isComplete();
  }

  /**
   * Returns the last commit time.
   */
  getLastCommitTime(): number {
    return this.lastCommitTime;
  }

  /**
   * Flushes autosave if ready.
   */
  async tryToFlushAutosave(): Promise<void> {
    if (this.readyToAcceptChanges()) {
      AutosaveHelpers.flushAutosave();
      await this.transactionQueue.waitForCompletion();
    }
  }

  /**
   * Enqueues an autosave commit.
   */
  async enqueueAutosaveCommit(params: any): Promise<void> {
    await this.transactionQueue.enqueue(() => this.commitAutosave(params));
  }

  /**
   * Commits autosave changes to the database.
   */
  async commitAutosave(params: {
    changes: any;
    commitPolicy: EditChangeMode;
    fileVersion: number;
    fileKey: string;
    newSessionID: number;
    numberOfUncleanRegisters: number;
    reason?: ConnectionState;
  }): Promise<void> {
    const {
      changes,
      commitPolicy,
      fileVersion,
      fileKey,
      newSessionID,
      numberOfUncleanRegisters,
      reason
    } = params;
    if (!this.readyToAcceptChanges()) {
      this.manager.terminateDueToError('Committing, but not ready to accept changes', true);
      return;
    }
    if (newSessionID < 0) {
      this.manager.terminateDueToError('Unexpected sessionID < 0', true);
      return;
    }
    if (fileKey && fileKey !== this.manager.fileKey) {
      logAutosaveError('Web file key out of sync with fullscreen file key', {
        'web file key': this.manager.fileKey,
        'fullscreen file key': fileKey
      });
      this.manager.terminateDueToError('Web file key out of sync with fullscreen file key', false);
      return;
    }
    this.activityLogger?.recordAutosaveCommit(this.manager.fileKey, this.manager.userID, this.sessionID.toString(), params);
    let previousSessionID = this.sessionID;
    let previousLock: any = null;
    if (newSessionID !== this.sessionID) {
      previousLock = this.webLock;
      this.sessionID = newSessionID;
      const newLock = await acquireAutosaveLock({
        userID: this.manager.userID,
        fileKey: this.manager.fileKey,
        sessionID: this.sessionID
      });
      if (!newLock) {
        this.manager.terminateDueToError('unable to acquire lock', true);
        return;
      }
      this.webLock = newLock;
    }
    if (!isLockNameMatching(this.webLock, {
      userID: this.manager.userID,
      fileKey: this.manager.fileKey,
      sessionID: this.sessionID
    })) {
      this.manager.terminateDueToError('lock is not for the current session', false);
      return;
    }
    const changedNodesCount = changes.changedNodes.length;
    const pendingChanges = [...changes.changedNodes.map((n: any) => ({
      nodeID: n.nodeID,
      changes: n.changes
    })), ...changes.clearedNodes.map((nodeID: string) => ({
      nodeID,
      changes: null
    }))];
    const pendingReferencedNodes = changes.referencedNodes.map((n: any) => ({
      nodeID: n.nodeID,
      buffer: n.changes
    }));
    const pendingImages = new Set<string>(changes.imageHashes);
    const storedNodeChanges = await this.sessionTransaction('commit', [EDITOR_SESSIONS_STORE, NODE_CHANGES_STORE, SAVED_IMAGES_STORE, REFERENCED_NODES_STORE], async tx => await commitAutosaveChanges({
      transaction: tx,
      commitPolicy,
      userID: this.manager.userID,
      fileKey: this.manager.fileKey,
      fileVersion,
      oldSessionID: previousSessionID,
      sessionID: this.sessionID,
      pendingChanges,
      pendingImages,
      pendingReferencedNodes,
      reason,
      isFirstCommitOfAutosaveSession: !this.hasCommitted
    }), 'readwrite');
    this.hasCommitted = true;
    this.lastCommitTime = Date.now();
    const commitInfo = {
      stored_node_changes: storedNodeChanges,
      unclean_registers: numberOfUncleanRegisters,
      changed_nodes: changedNodesCount,
      cleared_nodes: changes.clearedNodes.length,
      referenced_nodes: pendingReferencedNodes.length,
      pending_images: pendingImages.size,
      commit_policy: EditChangeMode[commitPolicy],
      session_id: this.sessionID,
      new_session_id: newSessionID,
      commit_reason: reason !== undefined ? ConnectionState[reason] : undefined,
      file_key: fileKey,
      manager_file_key: this.manager.fileKey
    };
    logInfo('Autosave', 'commit completed', commitInfo);
    trackFileEvent('autosave_commit_completed', fileKey, debugState.getState(), commitInfo);
    if (!this.reportedStorageError && numberOfUncleanRegisters !== undefined && numberOfUncleanRegisters !== storedNodeChanges) {
      if (storedNodeChanges > 0 && numberOfUncleanRegisters === 0) {
        const shortList = (arr: any[]) => arr.length > 5 ? [...arr.slice(0, 5), '...'] : arr;
        const debugDump = await dumpAutosaveData(5, true);
        logError('Autosave', 'Dumping autosave since we expect IDB to be empty', {
          debug: debugDump,
          changedNodes: shortList(changes.changedNodes.map((n: any) => n.nodeID)),
          clearedNodes: shortList(changes.clearedNodes),
          referencedNodes: shortList(changes.referencedNodes.map((n: any) => n.nodeID)),
          imageHashes: shortList(changes.imageHashes),
          currentSessionID: Multiplayer.currentSessionID(),
          commitQueueLength: this.transactionQueue.length
        });
        this.manager.terminateDueToError('Expected IDB to be empty after synchronizing with multiplayer', true);
      } else {
        if (storedNodeChanges > numberOfUncleanRegisters) {
          this.manager.terminateDueToError('Expected IDB to have at many node changes as registers (currently has more)', true);
        } else if (storedNodeChanges < numberOfUncleanRegisters) {
          this.manager.terminateDueToError('Expected IDB to have at many node changes as registers (currently has less)', true);
        }
      }
      this.reportedStorageError = true;
    }
    if (previousLock != null) {
      previousLock.release().catch(e => handleAutosaveError(e, 'commitAutosave: release lock'));
    }
    this.commitEventListener.onCommitEvent();
    if (commitPolicy === EditChangeMode.ADD_CHANGES) {
      this.consecutiveCommitsAddingChanges++;
      if (this.consecutiveCommitsAddingChanges >= 4) {
        handleAtomEvent({
          id: autosaveCommitMessage
        });
      }
    } else {
      this.consecutiveCommitsAddingChanges = 0;
    }
  }

  /**
   * Restores autosave changes if needed.
   */
  async restoreAutosaveIfNeeded(): Promise<void> {
    if (AutosaveHelpers.fileIsReadOnly()) return;
    this.restoreAnalytics.fileKey = this.manager.fileKey;
    this.restoreAnalytics.isLocalFile = isLocalFileKey(this.manager.fileKey);
    this.restoring = true;
    const persistentStoragePromise = (() => {
      if (!BrowserInfo.chrome || !navigator.storage?.persist) return Promise.resolve(false);
      const timeout = new Promise(resolve => setTimeout(() => resolve(false), 200));
      return Promise.race([navigator.storage.persist(), timeout]);
    })();
    const storageEstimatePromise = getStorageEstimate();
    const sessions = this.changesToRestore;
    this.changesToRestore = [];
    this.restoreAnalytics.sessionsCheckTime = this.restoreTimer.getElapsedTime();
    this.restoreAnalytics.numberOfSessions = sessions.length;
    if (sessions.length > 0) {
      const firstSession = sessions[0];
      this.restoreAnalytics.lastUpdatedAt = firstSession.lastUpdatedAt;
      this.restoreAnalytics.offlineEditingTime = firstSession.offlineEditingTime;
      this.restoreAnalytics.originalTrackingSessionId = firstSession.originalTrackingSessionId;
      this.restoreAnalytics.lastCommitReason = firstSession.lastCommitReason ? ConnectionState[firstSession.lastCommitReason] : undefined;
      this.restoreAnalytics.releaseTag = firstSession.releaseTag;
      await this.restoreChangesForSessionRows(sessions);
    }
    this.restoreAnalytics.persistentStorage = await persistentStoragePromise;
    const {
      usageBytes,
      quotaBytes
    } = await storageEstimatePromise;
    this.restoreAnalytics.storageUsageBytes = usageBytes;
    this.restoreAnalytics.storageQuotaBytes = quotaBytes;
    this.restoreAnalytics.isIncremental = Multiplayer.isIncrementalSession();
    this.restoreTimer.stop();
    this.restoreAnalytics.time = this.restoreTimer.getElapsedTime();
    trackFileEvent('autosave_restore_on_load', this.restoreAnalytics.fileKey, debugState.getState(), this.restoreAnalytics, {
      forwardToDatadog: true
    });
    this.restoring = false;
  }

  /**
   * Restores changes for the given session rows.
   */
  async restoreChangesForSessionRows(sessionRows: any[]): Promise<void> {
    if (!isLockNameMatching(this.webLock, {
      userID: this.manager.userID,
      fileKey: this.manager.fileKey,
      sessionID: this.sessionID
    })) {
      this.manager.terminateDueToError('lock is not for the current session', false);
      return;
    }
    const {
      changesByNode,
      referencedNodeMap,
      fileVersion
    } = await this.sessionTransaction('restore', [EDITOR_SESSIONS_STORE, NODE_CHANGES_STORE, SAVED_IMAGES_STORE, REFERENCED_NODES_STORE], async tx => await mergeAndClaimAutosaveChanges(tx, this.sessionID, sessionRows), 'readwrite');
    const hasChanges = changesByNode.size > 0;
    if (hasChanges) {
      if (!isLocalFileKey(this.manager.fileKey)) {
        await maybeCreateSavepoint(this.manager.fileKey, 'Offline sync', 'Before syncing changes', debugState.dispatch).catch(e => logAutosaveError('Failed to create before savepoint', {
          status: e.status,
          message: e.data?.message
        }));
      }
      logInfo('Autosave', 'Restoring auto-saved data', undefined, {
        logToConsole: LogToConsoleMode.ALWAYS
      });
      await this.restoreChanges(changesByNode, referencedNodeMap, fileVersion);
    } else {
      logInfo('Autosave', 'Changes are empty!', undefined, {
        logToConsole: LogToConsoleMode.ALWAYS
      });
    }
    this.commitEventListener.waitForNextCommit().then(() => {
      ipcStorageHandler.sendToOtherTabs(restoredAutosaveKey, null);
    }).catch(e => handleAutosaveError(e, 'restoreChangesForSessionRows: waitForNextCommit'));
    this.restoreAnalytics.hadChangesToRestore = hasChanges;
    this.restoreAnalytics.numberOfBytes = 0;
    this.restoreAnalytics.numberOfNodes = changesByNode.size;
    this.restoreAnalytics.numberOfReferencedNodes = referencedNodeMap.size;
    for (const {
      changes
    } of changesByNode.values()) {
      this.restoreAnalytics.numberOfBytes += changes.length;
    }
  }

  /**
   * Restores node changes and referenced nodes.
   */
  async restoreChanges(changesByNode: Map<string, {
    changes: any;
    editorSessionID: number;
  }>, referencedNodeMap: Map<string, any>, fileVersion: number): Promise<void> {
    const sortedNodes = Array.from(changesByNode.entries()).sort(([a], [b]) => a < b ? -1 : 1);
    const isAllNewFileSystemChanges = getFeatureFlags().suppress_unsaved_changes_ui && getFeatureFlags().incremental_loading_validation && sortedNodes.every(([_, {
      changes
    }]) => AutosaveHelpers.changesAreOnlyNewFileSystemChanges(changes, fileVersion));
    const emptyNodes: Array<[string, number]> = [];
    for (const [nodeID, {
      changes,
      editorSessionID
    }] of sortedNodes) {
      const {
        decodedAsEmptyMultiplayerMessage
      } = AutosaveHelpers.loadAutosavedNodeChanges(nodeID, changes, fileVersion);
      if (decodedAsEmptyMultiplayerMessage) emptyNodes.push([nodeID, editorSessionID]);
    }
    let deletePromise = Promise.resolve();
    if (emptyNodes.length > 0) {
      logWarning('Autosave', 'Deleting nodes without phase or property changes', {
        numNodes: emptyNodes.length,
        guids: JSON.stringify(emptyNodes.map(([id]) => id).slice(0, 10))
      });
      trackEventAnalytics('autosave delete empty changes', {
        numNodes: emptyNodes.length,
        willDelete: true
      });
      deletePromise = this.sessionTransaction('delete_empty_changes', [NODE_CHANGES_STORE, SAVED_IMAGES_STORE, REFERENCED_NODES_STORE, EDITOR_SESSIONS_STORE], async tx => {
        const nodeStore = tx.objectStore(NODE_CHANGES_STORE);
        const sessionIDs = new Set(emptyNodes.map(([_, sessionID]) => sessionID));
        await Promise.all(emptyNodes.map(([nodeID, sessionID]) => nodeStore.delete([sessionID, nodeID]).catch(e => handleAutosaveError(e, 'restoreChanges: delete empty node changes'))));
        await Promise.all(Array.from(sessionIDs.values()).map(sessionID => deleteEditorSessionRowIfUnused(sessionID, tx)));
      }, 'readwrite');
    }
    this.restoreAnalytics.changesAreAllDerivedData = AutosaveHelpers.changesAreAllDerivedData();
    this.restoreAnalytics.nodeFields = AutosaveHelpers.restoredNodeFieldNames();
    this.restoreAnalytics.neededToMigrate = AutosaveHelpers.currentFileVersion() > fileVersion;
    if (isIncrementalSessionOrValidating()) {
      trackFileEvent('autosave_load_containing_pages_start', this.manager.fileKey, debugState.getState(), {
        node_count: changesByNode.size,
        fileKey: this.manager.fileKey
      });
      const start = performance.now();
      const nodeIDs = new Set(changesByNode.keys());
      for (const parentID of AutosaveHelpers.getParentIndexChanges()) nodeIDs.add(parentID);
      await autosaveSubscribeWithRetry(nodeIDs);
      trackFileEvent('autosave_load_containing_pages_end', this.manager.fileKey, debugState.getState(), {
        node_count: changesByNode.size,
        timeElapsed: performance.now() - start,
        fileKey: this.manager.fileKey
      });
    }
    const imageHashes = AutosaveHelpers.getImagesUsedInAutosavedChanges().split(' ');
    this.restoreAnalytics.numberOfImages = await this.restoreImagesIfAvailable(imageHashes);
    const restoredNodes = this.restoreAvailableReferencedNodes(referencedNodeMap);
    AutosaveHelpers.migrateAndSetAutosaveChanges(restoredNodes, fileVersion);
    permissionScopeHandler.autosave('autosave', () => AutosaveHelpers.applyAutosavedChanges());
    this.restoreAnalytics.timeToApply = this.restoreTimer.getElapsedTime();
    logInfo('Autosave', 'Successfully applied auto-saved changes', undefined, {
      logToConsole: LogToConsoleMode.ALWAYS
    });
    const notifyRestored = () => {
      debugState.dispatch(notificationActions.enqueueFront({
        notification: {
          type: NotificationCategory.AUTOSAVE_CHANGES_RESTORED,
          message: getI18nString('autosave.changes_synced')
        }
      }));
      logInfo('Autosave', 'Successfully synced auto-saved changes', undefined, {
        logToConsole: LogToConsoleMode.ALWAYS
      });
    };
    await deletePromise;
    (async () => {
      await awaitSync();
      this.restoreAnalytics.timeToSync = this.restoreTimer.getElapsedTime();
      if (!isLocalFileKey(this.manager.fileKey)) {
        await maybeCreateSavepoint(this.manager.fileKey, 'Offline sync', 'After syncing changes', debugState.dispatch).catch(e => {
          trackFileEvent('autosave_skip_after_checkpoint', this.manager.fileKey, debugState.getState(), {
            error: e.data?.message
          });
          logAutosaveError('Failed to create after savepoint', {
            status: e.status,
            message: e.data?.message
          });
        });
      }
      if (this.manager.fileKey === debugState.getState().openFile?.key && !isAllNewFileSystemChanges) {
        notifyRestored();
      }
    })();
  }

  /**
   * Restores images if available for the session.
   */
  async restoreImagesIfAvailable(imageHashes: string[]): Promise<number> {
    let restoredCount = 0;
    await this.sessionTransaction('restore images', [EDITOR_SESSIONS_STORE, SAVED_IMAGES_STORE], async tx => {
      const sessionID = await this.currentEditorSessionID(tx);
      if (!sessionID) return;
      const imageStore = tx.objectStore(SAVED_IMAGES_STORE);
      for (const hash of imageHashes) {
        const image = await imageStore.get([sessionID, hash]);
        if (image) {
          AutosaveHelpers.restoreImageBytes(hash, image.blob);
          restoredCount++;
        }
      }
      await tx.done;
    }, 'readonly');
    return restoredCount;
  }

  /**
   * Restores referenced nodes from the map.
   */
  restoreAvailableReferencedNodes(referencedNodeMap: Map<string, any>): string[] {
    const restored: string[] = [];
    for (const [nodeID, buffer] of referencedNodeMap) {
      AutosaveHelpers.restoreReferencedNodeFile(nodeID, buffer);
      restored.push(nodeID);
    }
    return restored;
  }

  /**
   * Gets the current editor session ID.
   */
  currentEditorSessionID(tx: IDBPTransaction<unknown, string[], IDBTransactionMode>): Promise<number | undefined> {
    return getEditorSessionId(this.manager.userID, this.manager.fileKey, this.sessionID, tx);
  }

  /**
   * Gets node changes for the current session.
   */
  async getNodeChangesForSession(): Promise<any[]> {
    const db = await getAutosaveDatabaseWithErrorHandling();
    if (!db) throw new Error('Unable to get DB');
    const tx = db.transaction([EDITOR_SESSIONS_STORE, NODE_CHANGES_STORE], 'readonly');
    const nodeStore = tx.objectStore(NODE_CHANGES_STORE);
    const sessionID = await this.currentEditorSessionID(tx);
    return sessionID ? await nodeStore.getAll(createSessionGreaterEqualKeyRange(sessionID)) : [];
  }

  /**
   * Gets the node change count for the session.
   */
  async getNodeChangeCount(): Promise<number> {
    return (await this.getNodeChangesForSession()).length;
  }

  /**
   * Returns true if there are persisted user changes.
   */
  async hasPersistedUserChanges(): Promise<boolean> {
    const nodes = await this.getNodeChangesForSession();
    return hasPersistedChanges(this.manager.fileKey, nodes);
  }

  /**
   * Enqueues assignment of a new file key for a local file.
   */
  async enqueueAssignFileKeyForLocalFile(newFileKey: string, onAssigned: () => void): Promise<void> {
    const currentFileKey = this.manager.fileKey;
    if (!isLocalFileKey(currentFileKey)) {
      logAutosaveError('Only local file keys can be reassigned');
      return;
    }
    if (isLocalFileKey(newFileKey)) {
      logAutosaveError('Cannot reassign file key to a local file key');
      return;
    }
    await this.transactionQueue.enqueue(async () => {
      const prevLock = this.webLock;
      const newLock = await acquireAutosaveLock({
        userID: this.manager.userID,
        fileKey: newFileKey,
        sessionID: this.sessionID
      });
      if (!newLock) {
        this.manager.terminateDueToError('unable to acquire lock', true);
        return;
      }
      this.webLock = newLock;
      await assignFileKeyForNewFile(this.manager.userID, currentFileKey, newFileKey);
      onAssigned();
      await prevLock?.release();
    });
  }
}
/**
 * AutosaveManager singleton instance.
 * Original name: eb
 */
let autosaveManagerInstance: AutosaveManager | null = null;

/**
 * Returns the current AutosaveManager instance.
 * Original name: getAutosaveManagerInstance
 */
export function getAutosaveManagerInstance(): AutosaveManager | null {
  return autosaveManagerInstance;
}

/**
 * Creates or updates the AutosaveManager instance for the given fileKey and userId.
 * Original name: setupAutosaveManager
 */
export function setupAutosaveManager(fileKey: string, userId: string): AutosaveManager {
  if (autosaveManagerInstance) {
    if (autosaveManagerInstance.fileKey === fileKey) {
      logInfo('Autosave', 'Autosave manager already exists');
      return autosaveManagerInstance;
    }
    logAutosaveError('Manager already exists. Updating file key', {
      'current fileKey': autosaveManagerInstance.fileKey,
      'new fileKey': fileKey
    });
    autosaveManagerInstance.terminateAndWaitForCleanup();
    autosaveManagerInstance = null;
  }
  logDebug('Autosave', 'Create autosave manager', {
    fileKey
  });
  autosaveManagerInstance = new AutosaveManager(userId, fileKey);
  return autosaveManagerInstance;
}

/**
 * Destroys the AutosaveManager instance asynchronously.
 * Original name: destroyAutosaveManagerAsync
 */
export function destroyAutosaveManagerAsync(): void {
  destroyAutosaveManager().catch(e => handleAutosaveError(e, 'failed to destroy autosave manager'));
}

/**
 * Destroys the AutosaveManager instance and waits for cleanup.
 * Original name: destroyAutosaveManager
 */
export async function destroyAutosaveManager(): Promise<void> {
  logDebug('Autosave', 'Destroy autosave manager');
  if (!autosaveManagerInstance) {
    logInfo('Autosave', 'No manager to destroy');
    return;
  }
  const manager = autosaveManagerInstance;
  autosaveManagerInstance = null;
  await manager.terminateAndWaitForCleanup();
}

/**
 * Maps offline files to their corresponding entries in the provided object.
 * Original name: mapOfflineFiles
 */
export function mapOfflineFiles(files: Record<string, any>, {
  offlineFiles
}: {
  offlineFiles: Record<string, any>;
}): Record<string, any> {
  const result: Record<string, any> = {};
  for (const key in files) {
    const offlineFile = offlineFiles[key];
    if (offlineFile) {
      result[key] = offlineFile;
    }
  }
  return result;
}

/**
 * Query for autosave files for a user.
 * Original name: autosaveFilesQuery
 */
export const autosaveFilesQuery = liveStoreInstance.Query({
  async fetch({
    userId
  }: {
    userId: string;
  }) {
    if (!userId) return {};
    const files = await loadAutosaveFilesForUser(userId);
    const result: Record<string, any> = {};
    for (const file of files) result[file.fileKey] = file;
    return result;
  }
});

/**
 * Offline file types enum.
 * Original name: OfflineFileType
 */
export enum OfflineFileType {
  OFFLINE_FILE_TILE = 'OFFLINE_FILE_TILE',
  EDITOR = 'EDITOR',
}

/**
 * Mutation for renaming autosave files.
 * Original name: renameAutosaveFileMutation
 */
export const renameAutosaveFileMutation = liveStoreInstance.Mutation(({
  fileKey,
  name,
  source
}: {
  fileKey: string;
  name: string;
  source: string;
}, {
  atomStore,
  query,
  reduxStore
}: {
  atomStore: typeof atomStoreManager;
  query: any;
  reduxStore: any;
}) => {
  atomStore.set(currentRenamingFileAtom, null);
  if (!name) return;
  const userId = reduxStore.getState().user?.id ?? null;
  query.mutate(autosaveFilesQuery({
    userId
  }), (files: Record<string, any>) => {
    const file = files[fileKey];
    if (file) file.name = name;
  });
  const fileCreationManager = autosaveManagerInstance?.fileCreationManager;
  if (fileCreationManager) {
    if (fileCreationManager.fileKey === fileKey) {
      fileCreationManager.updateNewFileInfo({
        fileName: name
      });
      if (fileCreationManager.pendingRealFileKey) {
        debugState.dispatch(filePutAction({
          file: {
            key: fileCreationManager.pendingRealFileKey,
            name
          },
          userInitiated: true
        }));
      }
    } else {
      logAutosaveError('File key in rename mutation does not match current FileCreationManager file key', {
        mutationFileKey: fileKey,
        fileCreationManagerFileKey: fileCreationManager.fileKey
      });
    }
  }
  trackEventAnalytics('Rename New Autosave File', {
    source,
    isOffline: !navigator.onLine
  });
  return updateNewFileInfo(userId, fileKey, name);
});

/**
 * Atom for tracking the current renaming file.
 * Original name: eL
 */
const currentRenamingFileAtom = atom<string | null>(null) as PrimitiveAtom<string | null>;

/**
 * Sets the current renaming file key.
 * Original name: setCurrentRenamingFileKey
 */
export function setCurrentRenamingFileKey(file: {
  fileKey: string;
}): void {
  atomStoreManager.set(currentRenamingFileAtom, file.fileKey);
}

/**
 * Atom for tracking renamed files.
 * Original name: eD
 */
const renamedFilesAtom = atom({});

/**
 * Sets renamed file info.
 * Original name: setRenamedFileInfo
 */
export function setRenamedFileInfo(fileKey: string, info: any): void {
  const current = atomStoreManager.get(renamedFilesAtom);
  atomStoreManager.set(renamedFilesAtom, {
    ...current,
    [fileKey]: info
  });
}

/**
 * Atom for unsynced autosave files excluding renamed files.
 * Original name: eM
 */
const unsyncedAutosaveFilesAtom = atom(get => {
  const unsyncedFiles = {
    ...get(unsyncedFilesAtom)
  };
  const renamingFileKey = get(currentRenamingFileAtom);
  const renamedFiles = get(renamedFilesAtom);
  const result: Record<string, any> = {};
  for (const key in unsyncedFiles) {
    if (!(key in renamedFiles)) {
      result[key] = unsyncedFiles[key];
    }
  }
  if (renamingFileKey && renamingFileKey in result) {
    const file = result[renamingFileKey];
    result[renamingFileKey] = {
      ...file,
      isRenaming: true
    };
  }
  return result;
});

/**
 * Returns unsynced autosave files with subscription.
 * Original name: useUnsyncedAutosaveFiles
 */
export function useUnsyncedAutosaveFiles(): any {
  return useAtomWithSubscription(unsyncedAutosaveFilesAtom);
}

/**
 * Checks if a file has unclaimed autosave changes in IDB and permission to edit.
 * Original name: $$ej4
 */
export function useHasUnclaimedAutosaveChanges(fileKey: string): any {
  const hasUnclaimed = useSelector((state: AppState) => !!state.autosave.unclaimedFilesWithChangesInIDB.find((f: any) => f.fileKey === fileKey));
  const hasPermission = useHasFilePermission(FileCanEdit, hasUnclaimed ? fileKey : '');
  return hasUnclaimed ? hasPermission : resourceUtils.loaded(false);
}

/**
 * Returns unsynced and local unsynced autosave files with edit permissions.
 * Original name: useAutosaveFilesWithPermissions
 */
export function useAutosaveFilesWithPermissions(): {
  unsyncedFiles: any[];
  localUnsyncedFiles: any[];
} {
  const unsyncedFiles = useSelector((state: AppState) => state.autosave.unclaimedFilesWithChangesInIDB);
  const localUnsyncedFiles = useSelector((state: AppState) => state.autosave.unclaimedFilesCreatedOffline);
  const fileEditSubscriptions = useMultiSubscription(FileCanEdit, useMemo(() => unsyncedFiles.map(({
    fileKey
  }) => ({
    key: fileKey
  })), [unsyncedFiles]));
  const editPermissions = useMemo(() => fileEditSubscriptions.map(({
    result
  }) => result.transform((res: any) => !!res.file?.hasPermission)), [fileEditSubscriptions]);
  const fileByKey = useSelector((state: AppState) => state.fileByKey);
  return useMemo(() => ({
    unsyncedFiles: filterNotNullish(unsyncedFiles.map(({
      fileKey,
      lastUpdatedAt
    }, idx) => {
      const file = fileByKey[fileKey];
      return file && !file.trashed_at && editPermissions[idx].unwrapOr(false) ? {
        type: 'autosave-file',
        fileKey,
        lastUpdatedAt,
        file
      } : null;
    })),
    localUnsyncedFiles
  }), [unsyncedFiles, localUnsyncedFiles, fileByKey, editPermissions]);
}

/**
 * Atom for unsynced autosave files.
 * Original name: ew
 */
const unsyncedFilesAtom = atom(get => {
  const userId = get(userIdAtom);
  const result: Record<string, any> = {};
  if (userId) {
    const files = get(autosaveFilesQuery({
      userId
    })) as Record<string, {
      hasChanges: boolean;
    }> | undefined;
    for (const [key, file] of Object.entries(files ?? {})) {
      if (file.hasChanges) {
        result[key] = file;
      }
    }
  }
  return result;
});

/**
 * Atom for autosave file info by fileKey.
 * Original name: autosaveFileInfoAtom
 */
export const autosaveFileInfoAtom = atom(get => {
  const fileKey = get(fileKeyAtom);
  const userId = get(userIdAtom);
  if (fileKey && userId) {
    const files = get(autosaveFilesQuery({
      userId
    })) as Record<string, any> | undefined;
    const fileInfo = (files ?? {}) as Record<string, any>;
    if (fileKey in fileInfo) return fileInfo[fileKey];
  }
  return null;
});

/**
 * Returns the value of autosaveFileInfoAtom from atomStoreManager.
 * Original name: $$eR1
 */
export function getAutosaveFileInfo(): any {
  return atomStoreManager.get(autosaveFileInfoAtom);
}
export const $3 = checkFileHasUnsyncedAutosave;
export const GT = getAutosaveFileInfo;
export const Gc = setRenamedFileInfo;
export const Gg = useAutosaveFilesWithPermissions;
export const I4 = useHasUnclaimedAutosaveChanges;
export const JI = garbageCollectAutosave;
export const OL = autosaveFilesQuery;
export const Rp = useUnsyncedAutosaveFiles;
export const Ww = dumpAutosaveData;
export const ZG = getAutosaveManagerInstance;
export const ZW = getUnsyncedAutosaveFilesForUsers;
export const bD = getAutosaveExpirationMs;
export const b_ = renameAutosaveFileMutation;
export const dm = setCurrentRenamingFileKey;
export const go = deleteAutosaveDataForSessions;
export const gp = mapOfflineFiles;
export const kl = getUnsyncedAutosaveFilesForUser;
export const lu = autosaveFileInfoAtom;
export const mu = setupAutosaveManager;
export const oE = OfflineFileType;
export const t = destroyAutosaveManagerAsync;
export const wI = deleteAutosaveExceptFileKeys;
export const yn = destroyAutosaveManager;
export const z$ = hasUnsyncedAutosaveFiles;
