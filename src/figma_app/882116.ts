import { useMemo, useCallback } from "react";
import { d4 } from "../vendor/514228";
import { Rs } from "../figma_app/288654";
import { Be } from "../figma_app/844435";
import { xp, aQ } from "../figma_app/86989";
import { _i } from "../figma_app/120210";
import { BB3 } from "../figma_app/43951";
import { vt } from "../figma_app/45218";
export function $$u2({
  extensionId: e
}) {
  let t = d4(e => e.currentUserOrgId);
  let r = Rs(BB3, {
    orgId: t
  });
  return useMemo(() => r.data?.currentUser?.installedPlugins.find(t => t.pluginId === e)?.id, [r.data?.currentUser?.installedPlugins, e]);
}
export function $$p1(e, t) {
  let r = Be();
  let n = t === vt.PLUGIN ? r.plugins[e] : r.widgets[e];
  let a = xp(e);
  let d = aQ(e);
  let p = d4(t => t.publishedPlugins[e] ? a : d);
  let _ = $$u2({
    extensionId: e
  });
  let {
    unsave,
    save
  } = _i(e, t, p, _);
  return {
    unsave,
    save,
    isSavedForUser: !!(n && "user" === n.installed_by),
    isSavedForOrg: !!(n && "org" === n.installed_by),
    version: n
  };
}
export function $$_0(e) {
  let t = !!e && "user" === e.installed_by;
  let r = !!e && "org" === e.installed_by;
  let {
    save,
    unsave
  } = _i(e.plugin_id, vt.PLUGIN);
  let s = useCallback((e, n) => {
    r || (t ? unsave(n) : save(e, n));
  }, [r, t, unsave, save]);
  return {
    isSavedForUser: t,
    isSavedForOrg: r,
    onSaveClick: s
  };
}
export const Bj = $$_0;
export const QK = $$p1;
export const zX = $$u2;