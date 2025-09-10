import { desktopAPIInstance } from "../figma_app/876459";
export class $$r0 {
  toggleDevTools(e) {
    desktopAPIInstance || this.throwNoDesktopAppError();
    this.isDevToolsOpened().then(t => {
      t ? this.closeDevTools() : this.openDevTools(e || "bottom");
    });
  }
  getLocalFileExtensionSource(e) {
    desktopAPIInstance || this.throwNoDesktopAppError();
    return desktopAPIInstance.getLocalFileExtensionSource(e);
  }
  getLocalFileExtensionManifest(e) {
    desktopAPIInstance || this.throwNoDesktopAppError();
    return desktopAPIInstance.getLocalFileExtensionManifest(e);
  }
  openExtensionDirectory(e) {
    desktopAPIInstance || this.throwNoDesktopAppError();
    return desktopAPIInstance.openExtensionDirectory(e);
  }
  openExtensionManifest(e) {
    desktopAPIInstance || this.throwNoDesktopAppError();
    return desktopAPIInstance.openExtensionManifest(e);
  }
  openDevTools(e) {
    desktopAPIInstance || this.throwNoDesktopAppError();
    return desktopAPIInstance.openDevTools(e);
  }
  closeDevTools() {
    desktopAPIInstance || this.throwNoDesktopAppError();
    return desktopAPIInstance.closeDevTools();
  }
  isDevToolsOpened() {
    desktopAPIInstance || this.throwNoDesktopAppError();
    return desktopAPIInstance.isDevToolsOpened();
  }
  isCompatibleWith({
    desktopVersion: e
  }) {
    desktopAPIInstance || this.throwNoDesktopAppError();
    return desktopAPIInstance.getVersion() >= e;
  }
  getLocalManifestFileExtensionIdsToCachedMetadataMap() {
    desktopAPIInstance || this.throwNoDesktopAppError();
    return desktopAPIInstance.getLocalManifestFileExtensionIdsToCachedMetadataMap();
  }
  getLocalManifestFileExtensionIdsToCachedContainsWidgetMap() {
    desktopAPIInstance || this.throwNoDesktopAppError();
    return desktopAPIInstance.getLocalManifestFileExtensionIdsToCachedContainsWidgetMap();
  }
  getAllLocalFileExtensionIds() {
    desktopAPIInstance || this.throwNoDesktopAppError();
    return desktopAPIInstance.getAllLocalFileExtensionIds();
  }
  registerManifestChangeObserver(e) {
    desktopAPIInstance || this.throwNoDesktopAppError();
    return desktopAPIInstance.registerManifestChangeObserver(e);
  }
  registerCodeChangeObserver(e) {
    desktopAPIInstance || this.throwNoDesktopAppError();
    return desktopAPIInstance.registerCodeChangeObserver(e);
  }
  registerUiChangeObserver(e) {
    desktopAPIInstance || this.throwNoDesktopAppError();
    return desktopAPIInstance.registerUiChangeObserver(e);
  }
  createMultipleNewLocalFileExtensions(e, t) {
    desktopAPIInstance || this.throwNoDesktopAppError();
    return desktopAPIInstance.createMultipleNewLocalFileExtensions(e, t);
  }
  removeLocalFileExtension(e) {
    desktopAPIInstance || this.throwNoDesktopAppError();
    return desktopAPIInstance.removeLocalFileExtension(e);
  }
  writeNewExtensionDirectoryToDisk(e) {
    desktopAPIInstance || this.throwNoDesktopAppError();
    return desktopAPIInstance.writeNewExtensionDirectoryToDisk(e);
  }
  writeNewExtensionToDisk(e, t) {
    desktopAPIInstance || this.throwNoDesktopAppError();
    return desktopAPIInstance.writeNewExtensionToDisk(e, t);
  }
  updateCachedContainsWidget(e) {
    desktopAPIInstance || this.throwNoDesktopAppError();
    return desktopAPIInstance.updateCachedContainsWidget(e);
  }
  throwNoDesktopAppError() {
    throw Error("[DesktopLocalPluginMananger] Desktop app not available");
  }
}
export const k = $$r0;
