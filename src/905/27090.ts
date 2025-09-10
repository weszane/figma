import { T } from "src/905/858738";
import { bf } from "src/figma_app/415217";
export class $$a0 {
  toggleDevTools(e) {
    T() || this.throwNoVsCodeErrorMessage();
    return bf.sendToggleDevToolsMessage();
  }
  getLocalFileExtensionSource(e) {
    T() || this.throwNoVsCodeErrorMessage();
    return bf.sendGetLocalFileExtensionSourceMessage(e);
  }
  getLocalFileExtensionManifest(e) {
    T() || this.throwNoVsCodeErrorMessage();
    return bf.sendGetLocalFileExtensionManifest(e);
  }
  openExtensionDirectory(e) {
    T() || this.throwNoVsCodeErrorMessage();
    bf.sendOpenExtensionDirectoryMessage(e);
  }
  openExtensionManifest(e) {
    T() || this.throwNoVsCodeErrorMessage();
    bf.sendOpenExtensionManifestMessage(e);
  }
  openDevTools(e) {
    T() || this.throwNoVsCodeErrorMessage();
    return Error("openDevTools: Method not implemented");
  }
  closeDevTools() {
    T() || this.throwNoVsCodeErrorMessage();
    return Error("closeDevTools: Method not implemented.");
  }
  isDevToolsOpened() {
    T() || this.throwNoVsCodeErrorMessage();
    return Error("isDevToolsOpened: Method not implemented.");
  }
  isCompatibleWith(e) {
    return !0;
  }
  getLocalManifestFileExtensionIdsToCachedMetadataMap() {
    T() || this.throwNoVsCodeErrorMessage();
    return bf.sendGetLocalManifestFileExtensionIdsToCachedMetadataMap();
  }
  getLocalManifestFileExtensionIdsToCachedContainsWidgetMap() {
    T() || this.throwNoVsCodeErrorMessage();
    return bf.sendGetLocalManifestFileExtensionIdsToCachedContainsWidgetMapMessage();
  }
  getAllLocalFileExtensionIds() {
    T() || this.throwNoVsCodeErrorMessage();
    return bf.sendGetAllLocalFileExtensionIdsMessage();
  }
  registerManifestChangeObserver(e) {
    T() || this.throwNoVsCodeErrorMessage();
    return bf.sendRegisterManifestChangeObserverMessage(e);
  }
  registerCodeChangeObserver(e) {
    T() || this.throwNoVsCodeErrorMessage();
    return bf.sendRegisterCodeChangeObserverMessage(e);
  }
  registerUiChangeObserver(e) {
    T() || this.throwNoVsCodeErrorMessage();
    return bf.sendRegisterUIChangeObserverMessage(e);
  }
  createMultipleNewLocalFileExtensions(e, t) {
    T() || this.throwNoVsCodeErrorMessage();
    return bf.sendCreateMultipleNewLocalFileExtensions(e, t);
  }
  removeLocalFileExtension(e) {
    T() || this.throwNoVsCodeErrorMessage();
    bf.sendRemoveFileExtensionMessage(e);
  }
  writeNewExtensionDirectoryToDisk(e) {
    T() || this.throwNoVsCodeErrorMessage();
    return bf.sendWriteNewExtensionDirectoryToDiskMessage(e);
  }
  writeNewExtensionToDisk(e, t) {
    T() || this.throwNoVsCodeErrorMessage();
    return this.writeNewExtensionDirectoryToDisk({
      name: e,
      files: t,
      dirs: []
    });
  }
  updateCachedContainsWidget(e) {
    T() || this.throwNoVsCodeErrorMessage();
    bf.sendUpdateCachedContainsWidget(e);
  }
  throwNoVsCodeErrorMessage() {
    throw Error("[VsCodeLocalPluginMananger] VS Code extension not available");
  }
}
export const y = $$a0;
