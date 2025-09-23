import type { IDBPDatabase, IDBPTransaction } from 'idb';
import { openDB } from 'idb';
import { reportError } from '../905/11';
import { ServiceCategories } from '../905/165054';
import { logAutosaveError } from '../905/327522';
import { trackEventAnalytics } from '../905/449184';
import { logInfo, logWarning } from '../905/714362';
import { LogToConsoleMode } from '../figma_app/763686';
import { getFalseValue } from '../figma_app/897289';

// Database store names
export const NODE_CHANGES_STORE = 'node-changes';
export const SAVED_IMAGES_STORE = 'saved-images';
export const REFERENCED_NODES_STORE = 'referenced-nodes';
export const EDITOR_SESSIONS_STORE = 'editor-sessions';
export const NEW_FILES_STORE = 'new-files';
export const ACTIVITY_LOG_STORE = 'activity-log';
export const SESSION_INDEX = 'session-index';

// Database version and promise instance
export let DATABASE_VERSION = 4;
export let databasePromise: Promise<IDBPDatabase<unknown>> | null = null;

/**
 * Opens and returns the autosave database connection
 * @returns Promise resolving to the database instance
 */
export function openAutosaveDatabase(): Promise<IDBPDatabase<unknown>> {
  // Return existing promise if already initialized
  if (databasePromise) {
    return databasePromise;
  }

  // Prevent infinite retry loops with version checks
  if (DATABASE_VERSION > 100) {
    return databasePromise = Promise.reject(new Error('Trying to open autosave with unsupported DB version'));
  }

  // Timeout promise to prevent hanging connections
  const timeoutPromise = new Promise<IDBPDatabase<unknown>>((_, reject) => {
    setTimeout(() => {
      logInfo('Autosave', 'Timeout when opening IDB');
      reject(new Error('[Autosave] Timeout when opening IDB.'));
    }, 6000);
  });

  // Blocked promise for handling blocked database connections
  let blockedReject: (reason?: any) => void = () => {};
  const blockedPromise = new Promise<IDBPDatabase<unknown>>((_, reject) => {
    blockedReject = reject;
  });
  let dbPromise: Promise<IDBPDatabase<unknown>>;
  try {
    dbPromise = openDB('figma-autosave-v3', DATABASE_VERSION, {
      upgrade(db, oldVersion, newVersion, _transaction) {
        logInfo('Autosave', 'Upgrading autosave DB', {
          oldVersion,
          newVersion
        });

        // Track upgrade events
        if (oldVersion >= 1) {
          trackEventAnalytics('autosave db upgrade', {
            oldVersion,
            newVersion
          });
        }

        // Version 1 schema setup
        if (oldVersion < 1 && newVersion && newVersion >= 1) {
          const editorSessionsStore = db.createObjectStore(EDITOR_SESSIONS_STORE, {
            keyPath: 'id',
            autoIncrement: true
          });
          editorSessionsStore.createIndex(SESSION_INDEX, ['userID', 'fileKey', 'sessionID'], {
            unique: true
          });
          db.createObjectStore(NODE_CHANGES_STORE, {
            keyPath: ['editorSessionID', 'nodeID']
          });
          db.createObjectStore(SAVED_IMAGES_STORE, {
            keyPath: ['editorSessionID', 'hash']
          });
          db.createObjectStore(REFERENCED_NODES_STORE, {
            keyPath: ['editorSessionID', 'nodeID']
          });
        }

        // Version 3 schema additions
        if (oldVersion < 3 && newVersion && newVersion >= 3) {
          db.createObjectStore(NEW_FILES_STORE, {
            keyPath: ['userID', 'fileKey']
          });
        }

        // Version 4 schema additions
        if (oldVersion < 4 && newVersion && newVersion >= 4) {
          db.createObjectStore(ACTIVITY_LOG_STORE, {
            keyPath: 'id',
            autoIncrement: true
          });
        }
      },
      terminated() {
        logWarning('Autosave', 'DB closed unexpectedly');
        databasePromise = null;
      },
      blocked() {
        blockedReject(new Error('[Autosave] IDB blocked from opening by existing tab.'));
      }
    }).then(db => {
      // Handle version changes
      db.addEventListener('versionchange', (event: IDBVersionChangeEvent) => {
        if (event.oldVersion !== DATABASE_VERSION && event.newVersion !== DATABASE_VERSION) {
          logAutosaveError('Unexpected oldVersion when upgrading DB');
        }
        logInfo('Autosave', `DB version change requested from ${event.oldVersion} to ${event.newVersion} for tab with DB version ${DATABASE_VERSION}`, undefined, {
          logToConsole: LogToConsoleMode.ALWAYS
        });
        trackEventAnalytics('autosave db version change', {
          oldVersion: event.oldVersion,
          newVersion: event.newVersion,
          currentVersion: DATABASE_VERSION
        });
        if (event.newVersion) {
          DATABASE_VERSION = event.newVersion;
        }
        db.close();
        databasePromise = null;
      });
      return db;
    });
  } catch (error) {
    const dbError = new Error('Call to openDB failed');
    dbError.cause = error;
    dbPromise = Promise.reject(dbError);
  }

  // Race promises to handle timeout and blocking
  databasePromise = Promise.race([dbPromise, timeoutPromise, blockedPromise]);
  databasePromise.catch(() => {
    logInfo('Autosave', 'Unable to open IDB. Resetting dbPromise.');
    databasePromise = null;
  });
  return databasePromise;
}

/**
 * Attempts to open the autosave database with retry logic
 * @returns Promise resolving to the database instance
 */
export async function getAutosaveDatabase(): Promise<IDBPDatabase<unknown>> {
  let attempts = 0;
  let lastError: any = null;
  while (attempts < 5) {
    attempts++;
    try {
      return await openAutosaveDatabase();
    } catch (error) {
      logWarning('Autosave', 'Failed to open autosave DB', {
        attempt: attempts,
        error: error.message
      });
      lastError = error;
    }
  }
  throw lastError;
}

/**
 * Gets the autosave database with error handling for specific error cases
 * @returns Promise resolving to the database instance or null if specific errors occur
 */
export function getAutosaveDatabaseWithErrorHandling(): Promise<IDBPDatabase<unknown> | null> {
  return getAutosaveDatabase().catch(error => {
    const {
      name,
      message
    } = error;

    // Check for specific error conditions that should not be reported
    const isIgnoredError = /A mutation operation was attempted on a database that did not allow mutations/.test(message) || /QuotaExceededError/.test(message) || /Encountered full disk while opening backing store for indexedDB.open/.test(message) || /Failed to openDatabase in database because not enough space for domain/.test(message) || /Timeout when opening IDB/.test(message) || /Internal error opening backing store for indexedDB.open/.test(message) || /DataError/.test(message) || /Internal error retrieving bucket data directory/.test(message) || name === 'UnknownError' && message === 'Internal error.';
    if (!isIgnoredError) {
      reportError(ServiceCategories.SCENEGRAPH_AND_SYNC, error);
    }
    return null;
  });
}

/**
 * Executes a database transaction with retry logic
 * @param storeNames - Names of stores to include in transaction
 * @param callback - Function to execute with the transaction
 * @param mode - Transaction mode ('readonly' or 'readwrite')
 * @returns Promise resolving to the callback result
 */
export async function executeDatabaseTransaction<T = any>(storeNames: string | string[], callback: (transaction: IDBPTransaction<unknown, string[], IDBTransactionMode>) => Promise<T>, mode: IDBTransactionMode = 'readonly'): Promise<T> {
  let attempts = 0;
  let lastError: any = null;
  while (attempts < 5) {
    attempts++;
    try {
      const db = await openAutosaveDatabase();
      const transaction = db.transaction(storeNames, mode);
      const result = await callback(transaction);
      await transaction.done;
      return result;
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
}

/**
 * Creates a key range for a given prefix
 * @param prefix - Prefix to create range for
 * @returns IDBKeyRange instance
 */
export function createPrefixKeyRange(prefix: string): IDBKeyRange {
  return IDBKeyRange.bound([prefix, ''], [prefix, '~']);
}

/**
 * Creates a key range for a specific session and node
 * @param sessionID - Session identifier
 * @param nodeID - Node identifier
 * @returns IDBKeyRange instance
 */
export function createSessionNodeKeyRange(sessionID: string, nodeID: string): IDBKeyRange {
  return IDBKeyRange.bound([sessionID, nodeID], [sessionID, nodeID, Infinity]);
}

/**
 * Creates a key range for sessions greater than or equal to a given ID
 * @param sessionID - Session identifier
 * @returns IDBKeyRange instance
 */
export function createSessionGreaterEqualKeyRange(sessionID: number): IDBKeyRange {
  return IDBKeyRange.bound([sessionID, ''], [sessionID + 1, '']);
}

/**
 * Creates a key range from zero to infinity
 * @returns IDBKeyRange instance
 */
export function createZeroToInfinityKeyRange(): IDBKeyRange {
  return IDBKeyRange.bound([0], [Infinity]);
}

/**
 * Creates a key range from zero to infinity (duplicate function)
 * @returns IDBKeyRange instance
 */
export function createZeroToInfinityKeyRangeDuplicate1(): IDBKeyRange {
  return IDBKeyRange.bound([0], [Infinity]);
}

/**
 * Creates a key range from zero to infinity (duplicate function)
 * @returns IDBKeyRange instance
 */
export function createZeroToInfinityKeyRangeDuplicate2(): IDBKeyRange {
  return IDBKeyRange.bound([0], [Infinity]);
}

/**
 * Commits a transaction if the commit method exists
 * @param transaction - Transaction to commit
 */
export function commitTransactionIfSupported(transaction: IDBPTransaction<unknown, string[], IDBTransactionMode>): void {
  if ('commit' in transaction) {
    transaction.commit();
  }
}

// Initialize database on startup if needed
if (!getFalseValue()) {
  openAutosaveDatabase().catch(() => {});
}

// Exported constants and functions with original names
export const Ab = createZeroToInfinityKeyRangeDuplicate2;
export const BE = createZeroToInfinityKeyRange;
export const DB = executeDatabaseTransaction;
export const DV = SAVED_IMAGES_STORE;
export const Fy = getAutosaveDatabase;
export const IE = createZeroToInfinityKeyRangeDuplicate1;
export const JR = NEW_FILES_STORE;
export const SW = SESSION_INDEX;
export const Sp = EDITOR_SESSIONS_STORE;
export const Z4 = getAutosaveDatabaseWithErrorHandling;
export const Zt = createSessionNodeKeyRange;
export const cu = createPrefixKeyRange;
export const dU = commitTransactionIfSupported;
export const h5 = ACTIVITY_LOG_STORE;
export const iM = createSessionGreaterEqualKeyRange;
export const jP = NODE_CHANGES_STORE;
export const w8 = REFERENCED_NODES_STORE;
