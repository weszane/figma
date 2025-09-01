/**
 * Client Storage Module
 * 
 * Handles plugin client storage operations including quota management,
 * IndexedDB operations, and storage validation.
 * 
 * Original functions: eA, ey, eb, eI, eE, ex, eS, ew
 * Original constants: ef, e_, ev
 */

import { nl as _$$nl } from '../../figma_app/257275'

// Storage constants
const CLIENT_QUOTA_STORE = 'client-quota' // Original: ef
const CLIENT_STORAGE_STORE = 'client-storage' // Original: e_

// Database connection cache
let databaseConnection: Promise<IDBDatabase> | null = null // Original: ev

/**
 * Storage key parameters interface
 */
export interface StorageKeyParams {
  userID: string
  pluginID: string
  name: string
}

/**
 * Storage operation parameters interface
 */
export interface StorageOperationParams extends StorageKeyParams {
  value?: any
  remove?: boolean
  stats?: {
    recordClientStorageUsageData: (usage: number, quota: number) => void
  }
}

/**
 * Creates a storage key array for IndexedDB operations
 * Original function: eA
 */
export function createStorageKey(params: StorageKeyParams): [string, string, string] {
  const { userID, pluginID, name } = params
  return [userID, pluginID, name]
}

/**
 * Extracts the name from a storage key
 * Original function: ey
 */
export function extractStorageName(key: [string, string, string]): string {
  return key[2]
}

/**
 * Validates storage access parameters
 * Original function: eb
 */
export function validateStorageAccess(params: StorageKeyParams): void {
  if (!params.userID) {
    throw new Error('Cannot access client storage without a user ID')
  }
  if (!params.pluginID) {
    throw new Error('Cannot access client storage without a plugin ID')
  }
}

/**
 * Initializes or retrieves the IndexedDB database connection
 * Original function: eI
 */
function initializeDatabase(): Promise<IDBDatabase> {
  if (!databaseConnection) {
    databaseConnection = new Promise((resolve, reject) => {
      const dbName = _$$nl() ? 'figma-plugin-testing' : 'figma-plugin'
      const request = indexedDB.open(dbName, 1)
      
      request.onupgradeneeded = () => {
        const db = request.result
        db.createObjectStore(CLIENT_QUOTA_STORE)
        db.createObjectStore(CLIENT_STORAGE_STORE)
      }
      
      request.onerror = () => reject(request.error)
      
      request.onsuccess = () => {
        try {
          const db = request.result
          db.onversionchange = () => {
            db.close()
            databaseConnection = null
          }
          resolve(db)
        } catch (error) {
          reject(error)
        }
      }
    })
  }
  return databaseConnection
}

/**
 * Retrieves a value from client storage
 * Original function: eE
 */
export async function getStorageValue(params: StorageKeyParams): Promise<any> {
  validateStorageAccess(params)
  
  const db = await initializeDatabase()
  const transaction = db.transaction(CLIENT_STORAGE_STORE, 'readonly')
  
  return new Promise((resolve, reject) => {
    const storageKey = createStorageKey(params)
    const store = transaction.objectStore(CLIENT_STORAGE_STORE)
    
    transaction.onabort = () => reject(new Error('Database error'))
    
    const request = store.get(storageKey)
    request.onsuccess = () => {
      resolve(request.result ? request.result.value : undefined)
    }
  })
}

/**
 * Lists all storage keys for a user/plugin combination
 * Original function: ex
 */
export async function listStorageKeys(params: Pick<StorageKeyParams, 'userID' | 'pluginID'>): Promise<string[]> {
  validateStorageAccess({ ...params, name: '' })
  
  const db = await initializeDatabase()
  const transaction = db.transaction(CLIENT_STORAGE_STORE, 'readonly')
  
  return new Promise((resolve, reject) => {
    const keyRange = createStorageKeyRange(params)
    const store = transaction.objectStore(CLIENT_STORAGE_STORE)
    
    transaction.onabort = () => reject(new Error('Database error'))
    
    const request = store.getAllKeys(keyRange)
    request.onsuccess = () => {
      resolve(request.result.map((key) => extractStorageName(key as [string, string, string])))
    }
  })
}

/**
 * Creates an IDBKeyRange for storage key filtering
 */
function createStorageKeyRange(params: Pick<StorageKeyParams, 'userID' | 'pluginID'>): IDBKeyRange {
  const { userID, pluginID } = params
  return IDBKeyRange.bound([userID, pluginID], [userID, pluginID, []])
}

/**
 * Calculates storage size for quota management
 * Original function: eS
 */
export function calculateStorageSize(data: { value: any }): number {
  const content = data.value
  let byteCount = 0
  
  // Calculate size by stringifying and measuring content
  JSON.stringify(content, (key, value) => {
    if (typeof value === 'string') {
      byteCount += value.length
      return ''
    }
    if (ArrayBuffer.isView(value)) {
      byteCount += value.buffer.byteLength
      return ''
    }
    return value === undefined ? '' : value
  })
  
  return byteCount
}

/**
 * Sets or removes a value in client storage with quota management
 * Original function: ew
 */
export async function setStorageValue(params: StorageOperationParams): Promise<void> {
  validateStorageAccess(params)
  
  const { name, remove, value, stats } = params
  const data = remove ? undefined : { value }
  
  const db = await initializeDatabase()
  
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([CLIENT_QUOTA_STORE, CLIENT_STORAGE_STORE], 'readwrite')
    transaction.onabort = () => reject(new Error('Database error'))
    
    const storageKey = createStorageKey(params)
    const quotaKey = createQuotaKey(params)
    
    const storageStore = transaction.objectStore(CLIENT_STORAGE_STORE)
    const quotaStore = transaction.objectStore(CLIENT_QUOTA_STORE)
    
    const existingRequest = storageStore.get(storageKey)
    const quotaRequest = quotaStore.get(quotaKey)
    
    quotaRequest.onsuccess = () => {
      const existingData = existingRequest.result
      const quotaData = quotaRequest.result
      
      const currentQuota = quotaData ? quotaData.quota : 0
      const existingSize = existingData ? name.length + calculateStorageSize(existingData) : 0
      const newSize = data ? name.length + calculateStorageSize(data) : 0
      
      const updatedQuota = {
        quota: currentQuota + newSize - existingSize
      }
      
      // Check quota limits
      const maxQuota = 5242880 // 5MB for ext_clientstorage_increase feature flag
      if (updatedQuota.quota > maxQuota) {
        reject(new Error(`Client storage quota (${maxQuota / 1048576} MB) exceeded for this plugin ID. Please use less client storage.`))
        transaction.abort()
        return
      }
      
      // Update storage
      if (data) {
        storageStore.put(data, storageKey)
      } else {
        storageStore.delete(storageKey)
      }
      
      quotaStore.put(updatedQuota, quotaKey)
      
      // Record usage statistics
      if (stats) {
        stats.recordClientStorageUsageData(newSize - existingSize, updatedQuota.quota)
      }
      
      transaction.oncomplete = () => resolve()
    }
  })
}

/**
 * Creates a quota key for storage quota management
 */
function createQuotaKey(params: Pick<StorageKeyParams, 'userID' | 'pluginID'>): [string, string] {
  const { userID, pluginID } = params
  return [userID, pluginID]
}

/**
 * Opens the IndexedDB database for plugin storage
 */
export function openDatabase(): Promise<IDBDatabase> {
  return initializeDatabase()
}

/**
 * Gets all storage keys for a user/plugin combination
 */
export async function getAllStorageKeys(params: StorageKeyParams): Promise<string[]> {
  validateStorageAccess(params)
  const db = await initializeDatabase()
  const transaction = db.transaction(CLIENT_STORAGE_STORE, 'readonly')
  
  return new Promise((resolve, reject) => {
    const keyRange = IDBKeyRange.bound(
      [params.userID, params.pluginID], 
      [params.userID, params.pluginID, []]
    )
    const store = transaction.objectStore(CLIENT_STORAGE_STORE)
    transaction.onabort = () => reject(new Error('Database error'))
    
    const request = store.getAllKeys(keyRange)
    request.onsuccess = () => {
      resolve(request.result.map(key => extractStorageName(key as [string, string, string])))
    }
  })
}
