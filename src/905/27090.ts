import { isVsCodeEnvironment } from "../905/858738";
import { bf } from "../figma_app/415217";
export class $$a0 {
  toggleDevTools(e) {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage();
    return bf.sendToggleDevToolsMessage();
  }
  getLocalFileExtensionSource(e) {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage();
    return bf.sendGetLocalFileExtensionSourceMessage(e);
  }
  getLocalFileExtensionManifest(e) {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage();
    return bf.sendGetLocalFileExtensionManifest(e);
  }
  openExtensionDirectory(e) {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage();
    bf.sendOpenExtensionDirectoryMessage(e);
  }
  openExtensionManifest(e) {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage();
    bf.sendOpenExtensionManifestMessage(e);
  }
  openDevTools(e) {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage();
    return Error("openDevTools: Method not implemented");
  }
  closeDevTools() {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage();
    return Error("closeDevTools: Method not implemented.");
  }
  isDevToolsOpened() {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage();
    return Error("isDevToolsOpened: Method not implemented.");
  }
  isCompatibleWith(e) {
    return !0;
  }
  getLocalManifestFileExtensionIdsToCachedMetadataMap() {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage();
    return bf.sendGetLocalManifestFileExtensionIdsToCachedMetadataMap();
  }
  getLocalManifestFileExtensionIdsToCachedContainsWidgetMap() {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage();
    return bf.sendGetLocalManifestFileExtensionIdsToCachedContainsWidgetMapMessage();
  }
  getAllLocalFileExtensionIds() {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage();
    return bf.sendGetAllLocalFileExtensionIdsMessage();
  }
  registerManifestChangeObserver(e) {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage();
    return bf.sendRegisterManifestChangeObserverMessage(e);
  }
  registerCodeChangeObserver(e) {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage();
    return bf.sendRegisterCodeChangeObserverMessage(e);
  }
  registerUiChangeObserver(e) {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage();
    return bf.sendRegisterUIChangeObserverMessage(e);
  }
  createMultipleNewLocalFileExtensions(e, t) {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage();
    return bf.sendCreateMultipleNewLocalFileExtensions(e, t);
  }
  removeLocalFileExtension(e) {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage();
    bf.sendRemoveFileExtensionMessage(e);
  }
  writeNewExtensionDirectoryToDisk(e) {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage();
    return bf.sendWriteNewExtensionDirectoryToDiskMessage(e);
  }
  writeNewExtensionToDisk(e, t) {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage();
    return this.writeNewExtensionDirectoryToDisk({
      name: e,
      files: t,
      dirs: []
    });
  }
  updateCachedContainsWidget(e) {
    isVsCodeEnvironment() || this.throwNoVsCodeErrorMessage();
    bf.sendUpdateCachedContainsWidget(e);
  }
  throwNoVsCodeErrorMessage() {
    throw Error("[VsCodeLocalPluginMananger] VS Code extension not available");
  }
}
export const y = $$a0;