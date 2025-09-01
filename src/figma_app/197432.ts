import { h3O } from "../figma_app/763686";
import { eU, zl } from "../figma_app/27355";
import { eD } from "../figma_app/876459";
import { Ay } from "../905/612521";
import { t as _$$t } from "../905/303541";
import { A7 } from "../905/87821";
import { _ } from "../905/401345";
let n;
export function $$u2() {
  h3O?.detach();
  let e = document.getElementById("fullscreen-root");
  e?.remove();
}
let p = eU(new Set());
let $$_0 = eU(null, (e, t, r, n) => {
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
  let f = zl.get(p).size > 0;
  if (null == openFile) {
    wasInWorkshop || ($$u2(), zl.get(_) || (eD && eD.hasFeature("webErrorPageType") && previousFileKey ? eD.reportFatalError(previousFileKey, {
      type: "web",
      title: _$$t("403.file_permissions_error.title"),
      description: _$$t("404.file_no_access.title")
    }) : A7(_$$t("404.file_no_access.title"), t)));
    return;
  }
  let E = wasInUnclaimedTryFile && !openFile.isTryFile;
  let y = (null !== previousCanEdit && openFile.canEdit !== previousCanEdit || null !== previousCanView && openFile.canView !== previousCanView) && !E && openFile.key === previousFileKey;
  let b = () => {
    let e = new URLSearchParams(Ay.location.search);
    e.set("perms-refresh", "1");
    Ay.replace(`${Ay.location.pathname}?${e.toString()}`, Ay.location.state);
    Ay.reload("file access changed");
    n?.();
    n = void 0;
  };
  if (y && f && openFile.canEdit) {
    console.warn("prevented refresh due to delay hook");
    n || (n = zl.sub(p, () => {
      0 === zl.get(p).size && b();
    }));
    return;
  }
  y && b();
}
export const MQ = $$_0;
export const X_ = $$h1;
export const jS = $$u2;