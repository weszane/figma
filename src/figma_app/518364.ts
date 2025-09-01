import _require3 from "../0c62c2fd/556466";
import _require2 from "../6268/886268";
import _require from "../0c62c2fd/82390";
import { H4 } from "../905/992467";
import { A } from "../905/658244";
import { q_, m1, bG } from "../figma_app/997907";
let $$s0 = A.createLazyComponent(async () => {
  let {
    FileBrowserView
  } = await Promise.all([]).then(_require);
  return q_.LoadablePage(FileBrowserView, m1, bG);
}, {
  loading: m1,
  error: H4.NONE,
  componentName: "FileBrowserView"
});
let $$o2 = A.createLazyComponent(async () => {
  let {
    ComponentBrowserLibraryView
  } = await Promise.all([]).then(_require2);
  return ComponentBrowserLibraryView;
});
let $$l1 = A.createLazyComponent(async () => {
  let {
    FolderPageViewOmnicreateDropdown
  } = await Promise.all([]).then(_require3);
  return FolderPageViewOmnicreateDropdown;
}, {
  loading: H4.NONE,
  error: H4.NONE,
  componentName: "FolderPageViewOmnicreateDropdown"
});
export const IF = $$s0;
export const Lo = $$l1;
export const uv = $$o2;