import { eD } from "../figma_app/876459";
export class $$r0 {
  toggleDevTools(e) {
    eD || this.throwNoDesktopAppError();
    this.isDevToolsOpened().then(t => {
      t ? this.closeDevTools() : this.openDevTools(e || "bottom");
    });
  }
  getLocalFileExtensionSource(e) {
    eD || this.throwNoDesktopAppError();
    return eD.getLocalFileExtensionSource(e);
  }
  getLocalFileExtensionManifest(e) {
    eD || this.throwNoDesktopAppError();
    return eD.getLocalFileExtensionManifest(e);
  }
  openExtensionDirectory(e) {
    eD || this.throwNoDesktopAppError();
    return eD.openExtensionDirectory(e);
  }
  openExtensionManifest(e) {
    eD || this.throwNoDesktopAppError();
    return eD.openExtensionManifest(e);
  }
  openDevTools(e) {
    eD || this.throwNoDesktopAppError();
    return eD.openDevTools(e);
  }
  closeDevTools() {
    eD || this.throwNoDesktopAppError();
    return eD.closeDevTools();
  }
  isDevToolsOpened() {
    eD || this.throwNoDesktopAppError();
    return eD.isDevToolsOpened();
  }
  isCompatibleWith({
    desktopVersion: e
  }) {
    eD || this.throwNoDesktopAppError();
    return eD.getVersion() >= e;
  }
  getLocalManifestFileExtensionIdsToCachedMetadataMap() {
    eD || this.throwNoDesktopAppError();
    return eD.getLocalManifestFileExtensionIdsToCachedMetadataMap();
  }
  getLocalManifestFileExtensionIdsToCachedContainsWidgetMap() {
    eD || this.throwNoDesktopAppError();
    return eD.getLocalManifestFileExtensionIdsToCachedContainsWidgetMap();
  }
  getAllLocalFileExtensionIds() {
    eD || this.throwNoDesktopAppError();
    return eD.getAllLocalFileExtensionIds();
  }
  registerManifestChangeObserver(e) {
    eD || this.throwNoDesktopAppError();
    return eD.registerManifestChangeObserver(e);
  }
  registerCodeChangeObserver(e) {
    eD || this.throwNoDesktopAppError();
    return eD.registerCodeChangeObserver(e);
  }
  registerUiChangeObserver(e) {
    eD || this.throwNoDesktopAppError();
    return eD.registerUiChangeObserver(e);
  }
  createMultipleNewLocalFileExtensions(e, t) {
    eD || this.throwNoDesktopAppError();
    return eD.createMultipleNewLocalFileExtensions(e, t);
  }
  removeLocalFileExtension(e) {
    eD || this.throwNoDesktopAppError();
    return eD.removeLocalFileExtension(e);
  }
  writeNewExtensionDirectoryToDisk(e) {
    eD || this.throwNoDesktopAppError();
    return eD.writeNewExtensionDirectoryToDisk(e);
  }
  writeNewExtensionToDisk(e, t) {
    eD || this.throwNoDesktopAppError();
    return eD.writeNewExtensionToDisk(e, t);
  }
  updateCachedContainsWidget(e) {
    eD || this.throwNoDesktopAppError();
    return eD.updateCachedContainsWidget(e);
  }
  throwNoDesktopAppError() {
    throw Error("[DesktopLocalPluginMananger] Desktop app not available");
  }
}
export const k = $$r0;