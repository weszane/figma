import { useMemo } from "react";
import { useSelector } from "../vendor/514228";
import { atom, atomStoreManager } from "../figma_app/27355";
import { Rs } from "../figma_app/288654";
import { a8q } from "../figma_app/43951";
import { D } from "../905/347702";
let $$d2 = atom(null);
let $$c1 = D((e, t = !1) => {
  let r = Rs(a8q, {
    fileKey: e
  }, {
    enabled: !!e
  });
  return useMemo(() => "loaded" !== r.status ? t ? {
    enabled: !0,
    until: new Date(),
    id: "fallback"
  } : {
    enabled: !1
  } : r.data.figFileWorkshopMode && new Date() < r.data.figFileWorkshopMode.expiresAt ? {
    enabled: !0,
    until: r.data.figFileWorkshopMode.expiresAt,
    id: r.data.figFileWorkshopMode.id
  } : {
    enabled: !1
  }, [r, t]);
});
export function $$u4(e = !1) {
  let t = useSelector(e => e.openFile);
  return $$c1(t?.key || "", e);
}
export function $$p0(e = !1) {
  return $$u4(e).enabled;
}
export function $$_3(e) {
  let t = atomStoreManager.get($$d2);
  return !!e && !!t && new Date() < t && !e.isTryFile;
}
export const $D = $$p0;
export const DG = $$c1;
export const Kc = $$d2;
export const dk = $$_3;
export const nF = $$u4;