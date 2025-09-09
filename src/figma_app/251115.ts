import { useEffect } from "react";
import { getFeatureFlags } from "../905/601108";
import { atom, useAtomValueAndSetter, atomStoreManager, Xr, useAtomWithSubscription } from "../figma_app/27355";
import { getInitialOptions } from "../figma_app/169182";
import { Rs } from "../figma_app/288654";
import { tT } from "../905/723791";
import { isInteractionOrEvalMode } from "../figma_app/897289";
import { BF, dZ } from "../figma_app/459490";
import { lg, u8 } from "../figma_app/976749";
import { sZ } from "../905/845253";
import { FFileType } from "../figma_app/191312";
import { FileCanUseFigmaAiIgnoreAiToggle, FileCanUseFigmaAi, FileCanUseFigmakeAi } from "../figma_app/43951";
import { FEditorType } from "../figma_app/53721";
import { n as _$$n } from "../905/347702";
import { $7 } from "../905/509613";
let E = atom(getInitialOptions().editing_file?.can_use_jubilee ?? !1);
let y = atom(!0);
export function $$b1(e, t) {
  let r;
  r = !1;
  !isInteractionOrEvalMode() && !getInitialOptions().e2e_traffic && t && "enabled_for_gated_users" === BF(t) && getFeatureFlags().ai_user_use_llama && (r = !0);
  let u = Rs(r ? FileCanUseFigmaAiIgnoreAiToggle : FileCanUseFigmaAi, {
    key: e
  }, {
    enabled: !!e
  });
  let [p, _] = useAtomValueAndSetter(E);
  useEffect(() => {
    if ("loaded" === u.status) {
      let e = u.data.file;
      e.status === tT.Loaded && e.data && _(e.data.hasPermission);
    }
  }, [_, u.data?.file, u.status]);
}
let T = _$$n(() => atomStoreManager.get(E));
let $$I2 = _$$n(() => !!((lg() !== FFileType.WHITEBOARD || getFeatureFlags().figjam_quick_actions_v2) && $7("useHasPermission")) && T());
let $$S4 = _$$n(() => !!((atomStoreManager.get(u8) !== FEditorType.Whiteboard || getFeatureFlags().figjam_quick_actions_v2) && $7("getHasPermission")) && T());
export function $$v3(e) {
  let t = e?.editorType === FFileType.FIGMAKE;
  let r = e?.key ?? "";
  let i = Xr(y);
  let s = sZ();
  let d = Rs(dZ(s) ? FileCanUseFigmaAiIgnoreAiToggle : FileCanUseFigmakeAi, {
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
  let e = useAtomWithSubscription(E);
  let t = useAtomWithSubscription(y);
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