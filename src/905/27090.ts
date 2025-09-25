import { isVsCodeEnvironment } from '../905/858738'
import { extensionMessages } from '../figma_app/415217'

export class VsCodeLocalPluginMananger {
  toggleDevTools(e) {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage()
    return extensionMessages.sendToggleDevToolsMessage()
  }

  getLocalFileExtensionSource(e) {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage()
    return extensionMessages.sendGetLocalFileExtensionSourceMessage(e)
  }

  getLocalFileExtensionManifest(e) {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage()
    return extensionMessages.sendGetLocalFileExtensionManifest(e)
  }

  openExtensionDirectory(e) {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage()
    extensionMessages.sendOpenExtensionDirectoryMessage(e)
  }

  openExtensionManifest(e) {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage()
    extensionMessages.sendOpenExtensionManifestMessage(e)
  }

  openDevTools(e) {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage()
    return new Error('openDevTools: Method not implemented')
  }

  closeDevTools() {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage()
    return new Error('closeDevTools: Method not implemented.')
  }

  isDevToolsOpened() {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage()
    return new Error('isDevToolsOpened: Method not implemented.')
  }

  isCompatibleWith(e) {
    return !0
  }

  getLocalManifestFileExtensionIdsToCachedMetadataMap() {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage()
    return extensionMessages.sendGetLocalManifestFileExtensionIdsToCachedMetadataMap()
  }

  getLocalManifestFileExtensionIdsToCachedContainsWidgetMap() {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage()
    return extensionMessages.sendGetLocalManifestFileExtensionIdsToCachedContainsWidgetMapMessage()
  }

  getAllLocalFileExtensionIds() {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage()
    return extensionMessages.sendGetAllLocalFileExtensionIdsMessage()
  }

  registerManifestChangeObserver(e) {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage()
    return extensionMessages.sendRegisterManifestChangeObserverMessage(e)
  }

  registerCodeChangeObserver(e) {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage()
    return extensionMessages.sendRegisterCodeChangeObserverMessage(e)
  }

  registerUiChangeObserver(e) {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage()
    return extensionMessages.sendRegisterUIChangeObserverMessage(e)
  }

  createMultipleNewLocalFileExtensions(e, t) {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage()
    return extensionMessages.sendCreateMultipleNewLocalFileExtensions(e, t)
  }

  removeLocalFileExtension(e) {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage()
    extensionMessages.sendRemoveFileExtensionMessage(e)
  }

  writeNewExtensionDirectoryToDisk(e) {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage()
    return extensionMessages.sendWriteNewExtensionDirectoryToDiskMessage(e)
  }

  writeNewExtensionToDisk(e, t) {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage()
    return this.writeNewExtensionDirectoryToDisk({
      name: e,
      files: t,
      dirs: [],
    })
  }

  updateCachedContainsWidget(e) {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage()
    extensionMessages.sendUpdateCachedContainsWidget(e)
  }

  throwNoVsCodeErrorMessage() {
    throw new Error('[VsCodeLocalPluginMananger] VS Code extension not available')
  }
}
export const y = VsCodeLocalPluginMananger
