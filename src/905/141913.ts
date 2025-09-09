import { createDeferredPromise, ExponentialBackoff } from '../905/419236';
import { TimerHandler } from '../905/609813';
import { OptimisticMutationError } from '../figma_app/28817';

/**
 * Represents a sync transaction with retry and backoff logic.
 * Original class name: $$s0
 */
export class SyncTransaction {
  transactionId: number;
  objectNameToQueryIds: Map<string, string[]>;
  computedFields: any;
  affectedViewKeys: Set<string>;
  exponentialBackoff: ExponentialBackoff;
  retryNumber: number = 0;
  retryTimeout: NodeJS.Timeout | null = null;
  syncPromise: Promise<any>;
  successCallback: () => void;

  /**
   * @param transactionId - Unique transaction identifier
   * @param objectNameToQueryIds - Mapping of object names to query IDs
   * @param computedFields - Computed fields for the transaction
   * @param affectedViewKeys - Set of affected view keys
   * @param timeoutMs - Optional timeout in milliseconds
   * @param onTimeout - Callback for timeout event
   */
  constructor(transactionId: number, objectNameToQueryIds: Map<string, string[]>, computedFields: any, affectedViewKeys: Set<string>, timeoutMs?: number, onTimeout?: (error: any, timeout: boolean) => void) {
    this.transactionId = transactionId;
    this.objectNameToQueryIds = objectNameToQueryIds;
    this.computedFields = computedFields;
    this.affectedViewKeys = affectedViewKeys;
    this.exponentialBackoff = new ExponentialBackoff({
      maxAttempt: 2,
      backoffInitialMs: 3000,
      backoffMaxMs: 10000,
      backoffMultiplier: 1.5
    });

    // createDeferredPromise (original variable names: d, c, u)
    const [promise, resolve, reject] = createDeferredPromise<void>();

    // TimerHandler setup (original variable name: p)
    const timerHandler = timeoutMs ? new TimerHandler({
      onTimeout: (error, timeout) => {
        if (onTimeout) onTimeout(error, timeout);
        reject(new OptimisticMutationError());
      },
      timeoutMs
    }) : null;
    this.syncPromise = promise;
    this.successCallback = () => {
      resolve();
      timerHandler?.finish();
    };
  }

  /**
   * Waits for the sync promise to resolve.
   * Original method name: waitForSync
   */
  async waitForSync(): Promise<void> {
    await this.syncPromise;
  }

  /**
   * Gets the next retry delay in ms, if allowed.
   * Original method name: getRetryAfterMs
   */
  getRetryAfterMs(): number | undefined {
    if (!this.exponentialBackoff.shouldAttempt()) return undefined;
    return this.exponentialBackoff.nextBackoffMs();
  }

  /**
   * Converts the transaction to a payload object.
   * Original method name: toPayload
   */
  toPayload(): {
    messageType: string;
    transactionId: number;
    queryIds: string[];
    computedFields: any;
    objectNameToQueryIds: Record<string, string[]>;
    retryNumber: number;
    affectedViewKeys: string[];
  } {
    const queryIds: string[] = [];
    const objectNameToQueryIds: Record<string, string[]> = {};

    // Flatten objectNameToQueryIds map
    for (const [objectName, ids] of this.objectNameToQueryIds ?? []) {
      for (const id of ids) {
        queryIds.push(id);
        if (!objectNameToQueryIds[objectName]) objectNameToQueryIds[objectName] = [];
        objectNameToQueryIds[objectName].push(id);
      }
    }
    return {
      messageType: 'sync',
      transactionId: this.transactionId,
      queryIds,
      computedFields: this.computedFields,
      objectNameToQueryIds,
      retryNumber: this.retryNumber,
      affectedViewKeys: Array.from(this.affectedViewKeys ?? [])
    };
  }
}

// Export refactored class with original export name
export const Q = SyncTransaction;