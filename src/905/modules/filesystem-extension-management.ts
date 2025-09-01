/**
 * File System Interface and Extension Management Module
 * 
 * This module handles file system operations, extension management, local storage,
 * and directory operations extracted from the main plugin file.
 * 
 * Key responsibilities:
 * - VS Code extension management and local file operations
 * - File browser and directory navigation operations
 * - Local storage access and persistence management
 * - Plugin manifest validation and capability management
 * - Extension directory creation and management
 * - File system interface operations and caching
 * - Local file extension CRUD operations
 * - Browser storage quota management
 */

/**
 * File System Operation Types
 */
export interface FileSystemOperationParams {
  path: string
  data?: any
  options?: FileSystemOptions
}

export interface FileSystemOptions {
  recursive?: boolean
  overwrite?: boolean
  createParents?: boolean
  permissions?: string
}

export interface DirectoryEntry {
  name: string
  path: string
  type: 'file' | 'directory'
  size?: number
  modified?: Date
}

export interface FileUploadOptions {
  maxSize?: number
  allowedTypes?: string[]
  encoding?: string
}

/**
 * Extension Management Types
 */
export interface LocalExtensionManifest {
  id: string
  name: string
  version: string
  description?: string
  author?: string
  main: string
  ui?: string
  capabilities?: string[]
  permissions?: string[]
  menu?: ExtensionMenuItem[]
  parameters?: ExtensionParameter[]
}

export interface ExtensionMenuItem {
  name: string
  command?: string
  separator?: boolean
  submenu?: ExtensionMenuItem[]
}

export interface ExtensionParameter {
  name: string
  key: string
  type: 'string' | 'number' | 'boolean' | 'color' | 'dropdown'
  default?: any
  options?: ParameterOption[]
}

export interface ParameterOption {
  label: string
  value: any
}

export interface ExtensionMetadata {
  id: string
  localFileId?: string
  containsWidget?: boolean
  lastModified?: Date
  dependencies?: string[]
  status?: 'active' | 'inactive' | 'error'
}

/**
 * Local Storage Types
 */
export interface StorageOperationParams {
  key: string
  value?: any
  namespace?: string
  options?: StorageOptions
}

export interface StorageOptions {
  expiresAt?: Date
  persistent?: boolean
  compress?: boolean
  encrypt?: boolean
  namespace?: string
}

export interface StorageStats {
  totalUsed: number
  totalAvailable: number
  usageByNamespace: Record<string, number>
  itemCount: number
}

/**
 * VS Code Extension Manager
 * Handles local file extension operations and VS Code integration
 */
export class VSCodeExtensionManager {
  private extensionCache: Map<string, LocalExtensionManifest> = new Map()
  private metadataCache: Map<string, ExtensionMetadata> = new Map()
  private isVSCodeAvailable: boolean = false

  constructor() {
    this.checkVSCodeAvailability()
  }

  /**
   * Check if VS Code extension is available
   * Original: T()
   */
  private checkVSCodeAvailability(): void {
    try {
      this.isVSCodeAvailable = !!(window as any).__figmaVSCodePlugin
    } catch {
      this.isVSCodeAvailable = false
    }
  }

  /**
   * Validate VS Code availability and throw error if not available
   * Original: throwNoVsCodeErrorMessage()
   */
  private validateVSCodeAvailability(): void {
    if (!this.isVSCodeAvailable) {
      throw new Error('[VSCodeExtensionManager] VS Code extension not available')
    }
  }

  /**
   * Get local file extension source code
   * Original: getLocalFileExtensionSource(e)
   */
  async getExtensionSource(extensionId: string): Promise<string> {
    this.validateVSCodeAvailability()
    return this.sendVSCodeMessage('getLocalFileExtensionSource', { id: extensionId })
  }

  /**
   * Get local file extension manifest
   * Original: getLocalFileExtensionManifest(e)
   */
  async getExtensionManifest(extensionId: string): Promise<LocalExtensionManifest> {
    this.validateVSCodeAvailability()
    
    // Check cache first
    if (this.extensionCache.has(extensionId)) {
      return this.extensionCache.get(extensionId)!
    }

    const manifest = await this.sendVSCodeMessage('getLocalFileExtensionManifest', { id: extensionId })
    this.extensionCache.set(extensionId, manifest)
    return manifest
  }

  /**
   * Remove local file extension
   * Original: removeLocalFileExtension(e)
   */
  removeExtension(extensionId: string): void {
    this.validateVSCodeAvailability()
    this.extensionCache.delete(extensionId)
    this.metadataCache.delete(extensionId)
    this.sendVSCodeMessage('removeLocalFileExtension', { id: extensionId }, false)
  }

  /**
   * Open extension directory in file explorer
   * Original: openExtensionDirectory(e)
   */
  openExtensionDirectory(extensionId: string): void {
    this.validateVSCodeAvailability()
    this.sendVSCodeMessage('openExtensionDirectory', { id: extensionId }, false)
  }

  /**
   * Open extension manifest file
   * Original: openExtensionManifest(e)
   */
  openExtensionManifest(extensionId: string): void {
    this.validateVSCodeAvailability()
    this.sendVSCodeMessage('openExtensionManifest', { id: extensionId }, false)
  }

  /**
   * Write new extension to disk
   * Original: writeNewExtensionToDisk(e, t)
   */
  async writeNewExtensionToDisk(name: string, files: Record<string, string>): Promise<void> {
    this.validateVSCodeAvailability()
    
    const extensionDirectory = {
      name,
      files,
      dirs: []
    }

    return this.writeExtensionDirectoryToDisk(extensionDirectory)
  }

  /**
   * Write extension directory structure to disk
   * Original: writeNewExtensionDirectoryToDisk(e)
   */
  async writeExtensionDirectoryToDisk(directory: any): Promise<void> {
    this.validateVSCodeAvailability()
    return this.sendVSCodeMessage('writeNewExtensionDirectoryToDisk', { dir: directory })
  }

  /**
   * Create multiple new local file extensions
   * Original: createMultipleNewLocalFileExtensions(e, t)
   */
  async createMultipleExtensions(options: any, depth: number): Promise<void> {
    this.validateVSCodeAvailability()
    return this.sendVSCodeMessage('createMultipleNewLocalFileExtensions', { options, depth })
  }

  /**
   * Get all local file extension IDs
   * Original: getAllLocalFileExtensionIds()
   */
  async getAllExtensionIds(): Promise<string[]> {
    this.validateVSCodeAvailability()
    return this.sendVSCodeMessage('getAllLocalManifestFileExtensionIds')
  }

  /**
   * Get extension IDs to cached metadata map
   * Original: getLocalManifestFileExtensionIdsToCachedMetadataMap()
   */
  async getExtensionMetadataMap(): Promise<Record<string, ExtensionMetadata>> {
    this.validateVSCodeAvailability()
    const result = await this.sendVSCodeMessage('getLocalManifestFileExtensionIdsToCachedMetadataMap')
    
    // Update cache
    Object.entries(result).forEach(([id, metadata]) => {
      this.metadataCache.set(id, metadata as ExtensionMetadata)
    })

    return result
  }

  /**
   * Get extension IDs to cached contains widget map
   * Original: getLocalManifestFileExtensionIdsToCachedContainsWidgetMap()
   */
  async getExtensionWidgetMap(): Promise<Record<string, boolean>> {
    this.validateVSCodeAvailability()
    return this.sendVSCodeMessage('getLocalManifestFileExtensionIdsToCachedContainsWidgetMap')
  }

  /**
   * Update cached contains widget information
   * Original: updateCachedContainsWidget(e)
   */
  updateCachedContainsWidget(data: any): void {
    this.validateVSCodeAvailability()
    this.sendVSCodeMessage('updateCachedContainsWidget', data, false)
  }

  /**
   * Register manifest change observer
   * Original: registerManifestChangeObserver(e)
   */
  registerManifestChangeObserver(callback: (data: any) => void): Promise<() => void> {
    this.validateVSCodeAvailability()
    return this.sendVSCodeMessage('registerManifestChangeObserver', callback)
  }

  /**
   * Register code change observer
   * Original: registerCodeChangeObserver(e)
   */
  registerCodeChangeObserver(callback: (data: any) => void): Promise<() => void> {
    this.validateVSCodeAvailability()
    return this.sendVSCodeMessage('registerCodeChangeObserver', callback)
  }

  /**
   * Register UI change observer
   * Original: registerUiChangeObserver(e)
   */
  registerUIChangeObserver(callback: (data: any) => void): Promise<() => void> {
    this.validateVSCodeAvailability()
    return this.sendVSCodeMessage('registerUiChangeObserver', callback)
  }

  /**
   * Send message to VS Code extension
   */
  private async sendVSCodeMessage(type: string, data?: any, expectResponse: boolean = true): Promise<any> {
    if (!this.isVSCodeAvailable) {
      throw new Error('VS Code extension not available')
    }

    return new Promise((resolve, reject) => {
      try {
        const message = { type, data, id: Math.random().toString(36) }
        
        if (expectResponse) {
          const timeout = setTimeout(() => {
            reject(new Error(`VS Code message timeout: ${type}`))
          }, 10000)

          const handleResponse = (event: MessageEvent) => {
            if (event.data.id === message.id) {
              clearTimeout(timeout)
              window.removeEventListener('message', handleResponse)
              
              if (event.data.error) {
                reject(new Error(event.data.error))
              } else {
                resolve(event.data.result)
              }
            }
          }

          window.addEventListener('message', handleResponse)
        }

        window.postMessage(message, '*')
        
        if (!expectResponse) {
          resolve(undefined)
        }
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   * Clear extension caches
   */
  clearCaches(): void {
    this.extensionCache.clear()
    this.metadataCache.clear()
  }

  /**
   * Get cached extension metadata
   */
  getCachedMetadata(extensionId: string): ExtensionMetadata | null {
    return this.metadataCache.get(extensionId) || null
  }
}

/**
 * File Browser Manager
 * Handles file system navigation and directory operations
 */
export class FileBrowserManager {
  private currentDirectory: string = '/'
  private directoryCache: Map<string, DirectoryEntry[]> = new Map()
  private fileCache: Map<string, any> = new Map()

  /**
   * Show file browser dialog
   * Original: showFileBrowser(e)
   */
  async showFileBrowser(options: {
    startPath?: string
    allowMultiple?: boolean
    fileTypes?: string[]
    title?: string
  } = {}): Promise<string[]> {
    return new Promise((resolve, reject) => {
      try {
        const input = document.createElement('input')
        input.type = 'file'
        input.multiple = options.allowMultiple || false
        
        if (options.fileTypes?.length) {
          input.accept = options.fileTypes.join(',')
        }

        input.onchange = (event) => {
          const files = Array.from((event.target as HTMLInputElement).files || [])
          resolve(files.map(file => file.name))
        }

        input.onerror = () => {
          reject(new Error('File browser operation failed'))
        }

        input.click()
      } catch (error) {
        reject(error)
      }
    })
  }

  /**
   * Navigate to directory
   */
  async navigateToDirectory(path: string): Promise<DirectoryEntry[]> {
    // Check cache first
    if (this.directoryCache.has(path)) {
      this.currentDirectory = path
      return this.directoryCache.get(path)!
    }

    // Simulate directory listing (in real implementation, this would call native APIs)
    const entries: DirectoryEntry[] = []
    this.directoryCache.set(path, entries)
    this.currentDirectory = path
    return entries
  }

  /**
   * Create directory
   */
  async createDirectory(path: string, _options: FileSystemOptions = {}): Promise<void> {
    // Simulate directory creation
    // console.log(`Creating directory: ${path}`, options)
    
    // Invalidate cache
    const parentPath = path.substring(0, path.lastIndexOf('/'))
    this.directoryCache.delete(parentPath)
  }

  /**
   * Delete file or directory
   */
  async deleteFileOrDirectory(path: string, _recursive: boolean = false): Promise<void> {
    // Simulate deletion - implementation would use native APIs
    
    // Invalidate caches
    this.fileCache.delete(path)
    const parentPath = path.substring(0, path.lastIndexOf('/'))
    this.directoryCache.delete(parentPath)
  }

  /**
   * Copy file or directory
   */
  async copyFileOrDirectory(sourcePath: string, targetPath: string, _options: FileSystemOptions = {}): Promise<void> {
    // Simulate copy operation - implementation would use native APIs
    
    // Invalidate target directory cache
    const targetParent = targetPath.substring(0, targetPath.lastIndexOf('/'))
    this.directoryCache.delete(targetParent)
  }

  /**
   * Move/rename file or directory
   */
  async moveFileOrDirectory(sourcePath: string, targetPath: string): Promise<void> {
    // Simulate move operation - implementation would use native APIs
    
    // Invalidate caches
    const sourceParent = sourcePath.substring(0, sourcePath.lastIndexOf('/'))
    const targetParent = targetPath.substring(0, targetPath.lastIndexOf('/'))
    this.directoryCache.delete(sourceParent)
    this.directoryCache.delete(targetParent)
    this.fileCache.delete(sourcePath)
  }

  /**
   * Get file information
   */
  async getFileInfo(path: string): Promise<DirectoryEntry | null> {
    // Simulate file info retrieval
    return {
      name: path.substring(path.lastIndexOf('/') + 1),
      path,
      type: 'file',
      size: 0,
      modified: new Date()
    }
  }

  /**
   * Get current directory
   */
  getCurrentDirectory(): string {
    return this.currentDirectory
  }

  /**
   * Clear all caches
   */
  clearCaches(): void {
    this.directoryCache.clear()
    this.fileCache.clear()
  }
}

/**
 * Local Storage Manager
 * Handles browser localStorage operations with enhanced features
 */
export class LocalStorageManager {
  private storagePrefix: string
  private compressionEnabled: boolean = false
  private encryptionEnabled: boolean = false

  constructor(prefix: string = 'figma_plugin_') {
    this.storagePrefix = prefix
  }

  /**
   * Set item in local storage
   * Original: setLocalStorage(e, t)
   */
  setItem(key: string, value: any, options: StorageOptions = {}): void {
    try {
      const fullKey = this.getFullKey(key, options.namespace)
      let serializedValue = this.serializeValue(value, options)

      if (options.expiresAt) {
        serializedValue = this.addExpiration(serializedValue, options.expiresAt)
      }

      localStorage.setItem(fullKey, serializedValue)
    } catch (error) {
      console.error('Failed to set localStorage item:', error)
    }
  }

  /**
   * Get item from local storage
   * Original: getLocalStorage(e)
   */
  getItem(key: string, namespace?: string): any {
    try {
      const fullKey = this.getFullKey(key, namespace)
      const item = localStorage.getItem(fullKey)
      
      if (!item) return null

      const parsed = this.deserializeValue(item)
      
      // Check expiration
      if (this.isExpired(parsed)) {
        this.removeItem(key, namespace)
        return null
      }

      return this.extractValue(parsed)
    } catch (error) {
      console.error('Failed to get localStorage item:', error)
      return null
    }
  }

  /**
   * Check if item exists in local storage
   * Original: hasLocalStorage(e)
   */
  hasItem(key: string, namespace?: string): boolean {
    try {
      const fullKey = this.getFullKey(key, namespace)
      return fullKey in localStorage
    } catch {
      return false
    }
  }

  /**
   * Remove item from local storage
   * Original: clearLocalStorage(e)
   */
  removeItem(key: string, namespace?: string): void {
    try {
      const fullKey = this.getFullKey(key, namespace)
      localStorage.removeItem(fullKey)
    } catch (error) {
      console.error('Failed to remove localStorage item:', error)
    }
  }

  /**
   * Clear all items in namespace
   */
  clearNamespace(namespace?: string): void {
    try {
      const prefix = this.getFullKey('', namespace)
      const keysToRemove: string[] = []

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (key && key.startsWith(prefix)) {
          keysToRemove.push(key)
        }
      }

      keysToRemove.forEach(key => localStorage.removeItem(key))
    } catch (error) {
      console.error('Failed to clear namespace:', error)
    }
  }

  /**
   * Get storage statistics
   */
  getStorageStats(): StorageStats {
    try {
      let totalUsed = 0
      let itemCount = 0
      const usageByNamespace: Record<string, number> = {}

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (key && key.startsWith(this.storagePrefix)) {
          const value = localStorage.getItem(key) || ''
          const size = key.length + value.length
          totalUsed += size
          itemCount++

          // Extract namespace from key
          const namespace = this.extractNamespace(key)
          usageByNamespace[namespace] = (usageByNamespace[namespace] || 0) + size
        }
      }

      // Estimate available space (localStorage limit is typically 5-10MB)
      const estimatedLimit = 5 * 1024 * 1024 // 5MB
      const totalAvailable = Math.max(0, estimatedLimit - totalUsed)

      return {
        totalUsed,
        totalAvailable,
        usageByNamespace,
        itemCount
      }
    } catch (error) {
      console.error('Failed to get storage stats:', error)
      return {
        totalUsed: 0,
        totalAvailable: 0,
        usageByNamespace: {},
        itemCount: 0
      }
    }
  }

  /**
   * Clean up expired items
   */
  cleanupExpiredItems(): void {
    try {
      const keysToRemove: string[] = []

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (key && key.startsWith(this.storagePrefix)) {
          try {
            const value = localStorage.getItem(key)
            if (value) {
              const parsed = this.deserializeValue(value)
              if (this.isExpired(parsed)) {
                keysToRemove.push(key)
              }
            }
          } catch {
            // Remove malformed items
            keysToRemove.push(key)
          }
        }
      }

      keysToRemove.forEach(key => localStorage.removeItem(key))
    } catch (error) {
      console.error('Failed to cleanup expired items:', error)
    }
  }

  /**
   * Private helper methods
   */
  private getFullKey(key: string, namespace?: string): string {
    if (namespace) {
      return `${this.storagePrefix}${namespace}_${key}`
    }
    return `${this.storagePrefix}${key}`
  }

  private serializeValue(value: any, options: StorageOptions): string {
    let serialized = JSON.stringify(value)
    
    if (this.compressionEnabled && options.compress) {
      // In real implementation, add compression here
      serialized = this.compress(serialized)
    }

    if (this.encryptionEnabled && options.encrypt) {
      // In real implementation, add encryption here
      serialized = this.encrypt(serialized)
    }

    return serialized
  }

  private deserializeValue(value: string): any {
    try {
      return JSON.parse(value)
    } catch {
      return value
    }
  }

  private addExpiration(value: string, expiresAt: Date): string {
    const wrapper = {
      value,
      expiresAt: expiresAt.getTime()
    }
    return JSON.stringify(wrapper)
  }

  private isExpired(parsed: any): boolean {
    if (parsed && typeof parsed === 'object' && parsed.expiresAt) {
      return Date.now() > parsed.expiresAt
    }
    return false
  }

  private extractValue(parsed: any): any {
    if (parsed && typeof parsed === 'object' && 'value' in parsed) {
      return this.deserializeValue(parsed.value)
    }
    return parsed
  }

  private extractNamespace(key: string): string {
    const withoutPrefix = key.substring(this.storagePrefix.length)
    const namespaceEnd = withoutPrefix.indexOf('_')
    return namespaceEnd > 0 ? withoutPrefix.substring(0, namespaceEnd) : 'default'
  }

  private compress(value: string): string {
    // Placeholder for compression implementation
    return value
  }

  private encrypt(value: string): string {
    // Placeholder for encryption implementation
    return value
  }
}

/**
 * Manifest Validator
 * Handles plugin manifest validation and capability checking
 */
export class ManifestValidator {
  private capabilities: Set<string> = new Set()
  private permissions: Set<string> = new Set()
  private manifestCache: Map<string, LocalExtensionManifest> = new Map()

  constructor(manifest?: LocalExtensionManifest) {
    if (manifest) {
      this.loadManifest(manifest)
    }
  }

  /**
   * Load manifest and validate
   */
  loadManifest(manifest: LocalExtensionManifest): void {
    this.validateManifestStructure(manifest)
    
    this.capabilities.clear()
    this.permissions.clear()

    manifest.capabilities?.forEach(cap => this.capabilities.add(cap))
    manifest.permissions?.forEach(perm => this.permissions.add(perm))
    
    this.manifestCache.set(manifest.id, manifest)
  }

  /**
   * Check if capability is available
   * Original: capability validation in manifest.json checks
   */
  hasCapability(capability: string): boolean {
    return this.capabilities.has(capability)
  }

  /**
   * Check if permission is granted
   * Original: permission validation in manifest.json checks
   */
  hasPermission(permission: string): boolean {
    return this.permissions.has(permission)
  }

  /**
   * Validate capability requirement and throw error if missing
   * Original: capability error throwing
   */
  validateCapability(capability: string): void {
    if (!this.hasCapability(capability)) {
      throw new Error(
        `"${capability}" capability is not specified in manifest.json. ` +
        `Add the following to your manifest.json: "capabilities": ["${capability}"]. ` +
        `See https://www.figma.com/plugin-docs/manifest/#capabilities for more details.`
      )
    }
  }

  /**
   * Validate permission requirement and throw error if missing
   * Original: permission error throwing
   */
  validatePermission(permission: string, isWidget: boolean = false): void {
    if (!this.hasPermission(permission)) {
      const docsUrl = isWidget 
        ? 'https://www.figma.com/widget-docs/widget-manifest/#permissions'
        : 'https://www.figma.com/plugin-docs/manifest/#permissions'
      
      throw new Error(
        `"${permission}" permission not specified in manifest.json. ` +
        `Add the following to your manifest.json: "permissions": ["${permission}"]. ` +
        `See ${docsUrl} for more details.`
      )
    }
  }

  /**
   * Validate manifest structure
   */
  private validateManifestStructure(manifest: LocalExtensionManifest): void {
    const required = ['id', 'name', 'version', 'main']
    const missing = required.filter(field => !manifest[field as keyof LocalExtensionManifest])
    
    if (missing.length > 0) {
      throw new Error(`Invalid manifest: missing required fields: ${missing.join(', ')}`)
    }

    if (manifest.capabilities) {
      this.validateCapabilities(manifest.capabilities)
    }

    if (manifest.permissions) {
      this.validatePermissions(manifest.permissions)
    }
  }

  /**
   * Validate capabilities list
   */
  private validateCapabilities(capabilities: string[]): void {
    const validCapabilities = [
      'codegen',
      'textreview',
      'inspect',
      'fileaccess'
    ]

    capabilities.forEach(cap => {
      if (!validCapabilities.includes(cap)) {
        console.warn(`Unknown capability: ${cap}`)
      }
    })
  }

  /**
   * Validate permissions list
   */
  private validatePermissions(permissions: string[]): void {
    const validPermissions = [
      'currentuser',
      'fileusers',
      'teamlibrary',
      'payments'
    ]

    permissions.forEach(perm => {
      if (!validPermissions.includes(perm)) {
        console.warn(`Unknown permission: ${perm}`)
      }
    })
  }

  /**
   * Get cached manifest
   */
  getCachedManifest(id: string): LocalExtensionManifest | null {
    return this.manifestCache.get(id) || null
  }

  /**
   * Clear manifest cache
   */
  clearCache(): void {
    this.manifestCache.clear()
  }
}

/**
 * Factory Functions
 */

/**
 * Create VS Code extension manager
 */
export function createVSCodeExtensionManager(): VSCodeExtensionManager {
  return new VSCodeExtensionManager()
}

/**
 * Create file browser manager
 */
export function createFileBrowserManager(): FileBrowserManager {
  return new FileBrowserManager()
}

/**
 * Create local storage manager
 */
export function createLocalStorageManager(prefix?: string): LocalStorageManager {
  return new LocalStorageManager(prefix)
}

/**
 * Create manifest validator
 */
export function createManifestValidator(manifest?: LocalExtensionManifest): ManifestValidator {
  return new ManifestValidator(manifest)
}

/**
 * Utility Functions
 */

/**
 * Check if storage is accessible
 * Original: isStorageAccessible logic
 */
export function isStorageAccessible(): boolean {
  try {
    return typeof Storage !== 'undefined' && 
      typeof window !== 'undefined' && 
      window.localStorage !== null
  } catch {
    return false
  }
}

/**
 * Get storage usage percentage
 */
export function getStorageUsagePercentage(): number {
  try {
    const stats = new LocalStorageManager().getStorageStats()
    const total = stats.totalUsed + stats.totalAvailable
    return total > 0 ? (stats.totalUsed / total) * 100 : 0
  } catch {
    return 0
  }
}

/**
 * Validate file path format
 */
export function validateFilePath(path: string): boolean {
  // Basic path validation
  return typeof path === 'string' && 
    path.length > 0 && 
    !path.includes('..') && 
    /^[\w./-]+$/.test(path)
}

/**
 * Extract file extension from path
 */
export function getFileExtension(path: string): string {
  const lastDotIndex = path.lastIndexOf('.')
  return lastDotIndex > 0 ? path.substring(lastDotIndex + 1) : ''
}

/**
 * Format file size for display
 */
export function formatFileSize(bytes: number): string {
  const units = ['B', 'KB', 'MB', 'GB']
  let size = bytes
  let unitIndex = 0

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024
    unitIndex++
  }

  return `${size.toFixed(unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`
}

/**
 * Convenience Exports
 */
export {
  VSCodeExtensionManager as ExtensionManager,
  FileBrowserManager as FileManager, 
  LocalStorageManager as StorageManager,
  ManifestValidator as Validator
}

/**
 * Default Export - Comprehensive File System and Extension Management System
 */
export default {
  VSCodeExtensionManager,
  FileBrowserManager,
  LocalStorageManager,
  ManifestValidator,
  createVSCodeExtensionManager,
  createFileBrowserManager,
  createLocalStorageManager,
  createManifestValidator,
  isStorageAccessible,
  getStorageUsagePercentage,
  validateFilePath,
  getFileExtension,
  formatFileSize
}
