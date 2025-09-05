import { useCallback } from "react";
import { useSelector, useDispatch } from "../vendor/514228";
import { PQ } from "../figma_app/91703";
import { NG, UK } from "../figma_app/506549";
import { c4 } from "../figma_app/805925";
import { p8 } from "../figma_app/722362";
import { EG } from "../figma_app/995580";
import { s as _$$s } from "../905/73603";
export function $$u1() {
  let e = useSelector(e => e.recentlyUsedQuickCommands);
  let t = useDispatch();
  return useCallback(r => {
    let n = EG(r);
    let i = r.runPluginArgs;
    let s = e.filter(e => e.displayName !== n);
    s.unshift({
      displayName: n,
      runPluginArgs: i
    });
    t(PQ(s));
    _$$s({
      displayText: n,
      runPluginArgs: i,
      localFileIdOrPluginId: r.pluginLocalFileId ?? r.pluginId
    });
  }, [t, e]);
}
export function $$p0(e) {
  let t = $$_2();
  return useCallback(() => {
    t(NG(e));
  }, [t, e]);
}
export function $$_2() {
  let e = $$u1();
  let t = c4();
  let r = p8("isReadOnly");
  return useCallback((n, i) => {
    let a = UK({
      item: n,
      isReadOnly: r,
      extensionMenuProps: t,
      includeDisabled: !0,
      isSubmenuChild: i
    });
    a.length > 1 || e(a[0]);
  }, [e, t, r]);
}
export const Kp = $$p0;
export const r7 = $$u1;
export const w0 = $$_2;