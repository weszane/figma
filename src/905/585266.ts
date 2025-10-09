import { desktopAPIInstance } from "../figma_app/876459"
// Refactored from $$r0 (origin: /src/905/585266.ts)
// Changes: Renamed class and methods for clarity, added TypeScript types, improved readability, added comments, simplified logic, noted assumed desktopAPIInstance interface

// Assumed dependencies:
// - desktopAPIInstance: must implement all called methods below
// - Types for extension IDs, manifests, observers, etc. are inferred and should be replaced with actual types if available

// Type definitions for desktopAPIInstance methods (replace 'any' with actual types as needed)
interface ManifestChangeObserver {
  (manifestId: string)
}
interface CodeChangeObserver {
  (extensionId: string)
}
interface UiChangeObserver {
  (extensionId: string)
}
type ExtensionId = string
type ExtensionSource = any // Replace with actual type
type ExtensionManifest = any // Replace with actual type
type ExtensionDirectory = any // Replace with actual type
type ExtensionMetadataMap = Record<ExtensionId, any> // Replace with actual type

type DesktopVersion = number

interface CreateExtensionOptions {
  // Define properties as needed
  [key: string]: any
}

export class DesktopLocalPluginManager {
  /**
   * Toggles the DevTools panel. Opens if closed, closes if open.
   * @param position Position to open DevTools ('bottom' by default)
   */
  async toggleDevTools(position?: string): Promise<void> {
    if (!desktopAPIInstance)
      this.throwNoDesktopAppError()
    const isOpened = await this.isDevToolsOpened()
    if (isOpened) {
      this.closeDevTools()
    }
    else {
      this.openDevTools(position ?? "bottom")
    }
  }

  /**
   * Gets the source code for a local file extension.
   */
  getLocalFileExtensionSource(extensionId: ExtensionId): ExtensionSource {
    if (!desktopAPIInstance)
      this.throwNoDesktopAppError()
    return desktopAPIInstance.getLocalFileExtensionSource(extensionId)
  }

  /**
   * Gets the manifest for a local file extension.
   */
  getLocalFileExtensionManifest(extensionId: ExtensionId): ExtensionManifest {
    if (!desktopAPIInstance)
      this.throwNoDesktopAppError()
    return desktopAPIInstance.getLocalFileExtensionManifest(extensionId)
  }

  /**
   * Opens the directory for a given extension.
   */
  openExtensionDirectory(extensionId: ExtensionId): ExtensionDirectory {
    if (!desktopAPIInstance)
      this.throwNoDesktopAppError()
    return desktopAPIInstance.openExtensionDirectory(extensionId)
  }

  /**
   * Opens the manifest file for a given extension.
   */
  openExtensionManifest(extensionId: ExtensionId) {
    if (!desktopAPIInstance)
      this.throwNoDesktopAppError()
    return desktopAPIInstance.openExtensionManifest(extensionId)
  }

  /**
   * Opens the DevTools panel at the specified position.
   */
  openDevTools(position?: string) {
    if (!desktopAPIInstance)
      this.throwNoDesktopAppError()
    return desktopAPIInstance.openDevTools(position)
  }

  /**
   * Closes the DevTools panel.
   */
  closeDevTools() {
    if (!desktopAPIInstance)
      this.throwNoDesktopAppError()
    return desktopAPIInstance.closeDevTools()
  }

  /**
   * Checks if DevTools is currently opened.
   */
  isDevToolsOpened(): Promise<boolean> {
    if (!desktopAPIInstance)
      this.throwNoDesktopAppError()
    return desktopAPIInstance.isDevToolsOpened()
  }

  /**
   * Checks compatibility with the given desktop version.
   */
  isCompatibleWith({ desktopVersion }: { desktopVersion: DesktopVersion }): boolean {
    if (!desktopAPIInstance)
      this.throwNoDesktopAppError()
    return desktopAPIInstance.getVersion() >= desktopVersion
  }

  /**
   * Gets a map of extension IDs to cached metadata.
   */
  getLocalManifestFileExtensionIdsToCachedMetadataMap(): ExtensionMetadataMap {
    if (!desktopAPIInstance)
      this.throwNoDesktopAppError()
    return desktopAPIInstance.getLocalManifestFileExtensionIdsToCachedMetadataMap()
  }

  /**
   * Gets a map of extension IDs to whether they contain widgets.
   */
  getLocalManifestFileExtensionIdsToCachedContainsWidgetMap() {
    if (!desktopAPIInstance)
      this.throwNoDesktopAppError()
    return desktopAPIInstance.getLocalManifestFileExtensionIdsToCachedContainsWidgetMap()
  }

  /**
   * Gets all local file extension IDs.
   */
  getAllLocalFileExtensionIds() {
    if (!desktopAPIInstance)
      this.throwNoDesktopAppError()
    return desktopAPIInstance.getAllLocalFileExtensionIds()
  }

  /**
   * Registers an observer for manifest changes.
   */
  registerManifestChangeObserver(observer: ManifestChangeObserver) {
    if (!desktopAPIInstance)
      this.throwNoDesktopAppError()
    return desktopAPIInstance.registerManifestChangeObserver(observer)
  }

  /**
   * Registers an observer for code changes.
   */
  registerCodeChangeObserver(observer: CodeChangeObserver) {
    if (!desktopAPIInstance)
      this.throwNoDesktopAppError()
    return desktopAPIInstance.registerCodeChangeObserver(observer)
  }

  /**
   * Registers an observer for UI changes.
   */
  registerUiChangeObserver(observer: UiChangeObserver) {
    if (!desktopAPIInstance)
      this.throwNoDesktopAppError()
    return desktopAPIInstance.registerUiChangeObserver(observer)
  }

  /**
   * Creates multiple new local file extensions.
   */
  createMultipleNewLocalFileExtensions(options: CreateExtensionOptions, count: number) {
    if (!desktopAPIInstance)
      this.throwNoDesktopAppError()
    return desktopAPIInstance.createMultipleNewLocalFileExtensions(options, count)
  }

  /**
   * Removes a local file extension.
   */
  removeLocalFileExtension(extensionId: ExtensionId) {
    if (!desktopAPIInstance)
      this.throwNoDesktopAppError()
    return desktopAPIInstance.removeLocalFileExtension(extensionId)
  }

  /**
   * Writes a new extension directory to disk.
   */
  writeNewExtensionDirectoryToDisk(directory: ExtensionDirectory) {
    if (!desktopAPIInstance)
      this.throwNoDesktopAppError()
    return desktopAPIInstance.writeNewExtensionDirectoryToDisk(directory)
  }

  /**
   * Writes a new extension to disk.
   */
  writeNewExtensionToDisk(extensionId: ExtensionId, source: ExtensionSource) {
    if (!desktopAPIInstance)
      this.throwNoDesktopAppError()
    return desktopAPIInstance.writeNewExtensionToDisk(extensionId, source)
  }

  /**
   * Updates cached widget information for an extension.
   */
  updateCachedContainsWidget(extensionId: any) {
    if (!desktopAPIInstance)
      this.throwNoDesktopAppError()
    return desktopAPIInstance.updateCachedContainsWidget(extensionId)
  }

  /**
   * Throws an error if the desktop app is not available.
   */
  throwNoDesktopAppError(): never {
    throw new Error("[DesktopLocalPluginManager] Desktop app not available")
  }
}

// Export with original name for compatibility
export const k = DesktopLocalPluginManager
