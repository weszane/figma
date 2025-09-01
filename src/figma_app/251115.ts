import { useEffect } from "react";
import { getFeatureFlags } from "../905/601108";
import { eU, fp, zl, Xr, md } from "../figma_app/27355";
import { getInitialOptions } from "../figma_app/169182";
import { Rs } from "../figma_app/288654";
import { tT } from "../905/723791";
import { PN } from "../figma_app/257275";
import { BF, dZ } from "../figma_app/459490";
import { lg, u8 } from "../figma_app/976749";
import { sZ } from "../905/845253";
import { FFileType } from "../figma_app/191312";
import { YTs, GIl, GkZ } from "../figma_app/43951";
import { nT } from "../figma_app/53721";
import { n as _$$n } from "../905/347702";
import { $7 } from "../905/509613";
let E = eU(getInitialOptions().editing_file?.can_use_jubilee ?? !1);
let y = eU(!0);
export function $$b1(e, t) {
  let r;
  r = !1;
  !PN() && !getInitialOptions().e2e_traffic && t && "enabled_for_gated_users" === BF(t) && getFeatureFlags().ai_user_use_llama && (r = !0);
  let u = Rs(r ? YTs : GIl, {
    key: e
  }, {
    enabled: !!e
  });
  let [p, _] = fp(E);
  useEffect(() => {
    if ("loaded" === u.status) {
      let e = u.data.file;
      e.status === tT.Loaded && e.data && _(e.data.hasPermission);
    }
  }, [_, u.data?.file, u.status]);
}
let T = _$$n(() => zl.get(E));
let $$I2 = _$$n(() => !!((lg() !== FFileType.WHITEBOARD || getFeatureFlags().figjam_quick_actions_v2) && $7("useHasPermission")) && T());
let $$S4 = _$$n(() => !!((zl.get(u8) !== nT.Whiteboard || getFeatureFlags().figjam_quick_actions_v2) && $7("getHasPermission")) && T());
export function $$v3(e) {
  let t = e?.editorType === FFileType.FIGMAKE;
  let r = e?.key ?? "";
  let i = Xr(y);
  let s = sZ();
  let d = Rs(dZ(s) ? YTs : GkZ, {
    key: r
  }, {
    enabled: !!r && t
  });
  useEffect(() => {
    if ("loaded" !== d.status) return;
    let {
      file
    } = d.data;
    file.status === tT.Loaded && file.data && i(file.data.hasPermission);
  }, [i, d.data, d.status]);
}
export function $$A5() {
  let e = md(E);
  let t = md(y);
  let r = lg();
  return r === FFileType.DESIGN || r === FFileType.SITES ? !!$7("useHasCodeChatPermission") && e : r === FFileType.FIGMAKE && t;
}
export function $$x0() {
  return $$I2();
}
export const GM = $$x0;
export const G_ = $$b1;
export const PE = $$I2;
export const Si = $$v3;
export const W7 = $$S4;
export const uQ = $$A5;