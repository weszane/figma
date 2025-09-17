import { Multiplayer } from "../figma_app/763686";
import { atom, atomStoreManager } from "../figma_app/27355";
import { desktopAPIInstance } from "../figma_app/876459";
import { customHistory } from "../905/612521";
import { getI18nString } from "../905/303541";
import { showFileBrowserOrError } from "../905/87821";
import { _ } from "../905/401345";
let n;
export function $$u2() {
  Multiplayer?.detach();
  let e = document.getElementById("fullscreen-root");
  e?.remove();
}
let p = atom(new Set());
let $$_0 = atom(null, (e, t, r, n) => {
  let i = e(p);
  n ? i.add(r) : i.$$delete(r);
  t(p, new Set(i));
});
export function $$h1(e, t) {
  let {
    openFile,
    wasInWorkshop,
    previousCanEdit,
    previousCanView,
    wasInUnclaimedTryFile,
    previousFileKey
  } = e;
  let f = atomStoreManager.get(p).size > 0;
  if (null == openFile) {
    wasInWorkshop || ($$u2(), atomStoreManager.get(_) || (desktopAPIInstance && desktopAPIInstance.hasFeature("webErrorPageType") && previousFileKey ? desktopAPIInstance.reportFatalError(previousFileKey, {
      type: "web",
      title: getI18nString("403.file_permissions_error.title"),
      description: getI18nString("404.file_no_access.title")
    }) : showFileBrowserOrError(getI18nString("404.file_no_access.title"), t)));
    return;
  }
  let E = wasInUnclaimedTryFile && !openFile.isTryFile;
  let y = (null !== previousCanEdit && openFile.canEdit !== previousCanEdit || null !== previousCanView && openFile.canView !== previousCanView) && !E && openFile.key === previousFileKey;
  let b = () => {
    let e = new URLSearchParams(customHistory.location.search);
    e.set("perms-refresh", "1");
    customHistory.replace(`${customHistory.location.pathname}?${e.toString()}`, customHistory.location.state);
    customHistory.reload("file access changed");
    n?.();
    n = void 0;
  };
  if (y && f && openFile.canEdit) {
    console.warn("prevented refresh due to delay hook");
    n || (n = atomStoreManager.sub(p, () => {
      0 === atomStoreManager.get(p).size && b();
    }));
    return;
  }
  y && b();
}
export const MQ = $$_0;
export const X_ = $$h1;
export const jS = $$u2;