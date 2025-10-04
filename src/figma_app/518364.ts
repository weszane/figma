import _require3 from "../0c62c2fd/556466";
import _require2 from "../6268/886268";
import _require from "../0c62c2fd/82390";
import { NONE_SYMBOL } from "../905/992467";
import { FileBrowser } from "../905/658244";
import { fileBrowserPageManager, fileBrowserLoadingSnapshot, hideFileBrowserLoadingPage } from "../figma_app/997907";
let $$s0 = FileBrowser.createLazyComponent(async () => {
  let {
    FileBrowserView
  } = await Promise.all([]).then(_require);
  return fileBrowserPageManager.LoadablePage(FileBrowserView, fileBrowserLoadingSnapshot, hideFileBrowserLoadingPage);
}, {
  loading: fileBrowserLoadingSnapshot,
  error: NONE_SYMBOL.NONE,
  componentName: "FileBrowserView"
});
let $$o2 = FileBrowser.createLazyComponent(async () => {
  let {
    ComponentBrowserLibraryView
  } = await Promise.all([]).then(_require2);
  return ComponentBrowserLibraryView;
});
let $$l1 = FileBrowser.createLazyComponent(async () => {
  let {
    FolderPageViewOmnicreateDropdown
  } = await Promise.all([]).then(_require3);
  return FolderPageViewOmnicreateDropdown;
}, {
  loading: NONE_SYMBOL.NONE,
  error: NONE_SYMBOL.NONE,
  componentName: "FolderPageViewOmnicreateDropdown"
});
export const IF = $$s0;
export const Lo = $$l1;
export const uv = $$o2;