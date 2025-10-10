import { n as _$$n } from "../905/347702";
import { useEffect } from "react";
import { atomStoreManager, atom, useSetAtom } from "../figma_app/27355";
import { ResourceStatus } from "../905/663269";
import { useSubscription } from "../figma_app/288654";
import { isAIFeaturesEnabledForCurrentUser, isLlamaEnabledForOrg } from "../figma_app/459490";
import { getCurrentFileType } from "../figma_app/976749";
import { useCurrentUserOrg } from "../905/845253";
import { FFileType } from "../figma_app/191312";
import { FileCanUseFigmaAiIgnoreAiToggle, FileCanUseSlidesAi } from "../figma_app/43951";
import { useCurrentPrivilegedPlan } from "../figma_app/465071";
import { hasJubileePermissionForDesign } from "../figma_app/251115";
export function $$h0() {
  let e = getCurrentFileType();
  let t = hasJubileePermissionForDesign();
  let {
    isSlidesAiEnabled
  } = $$f3();
  let n = !isAIFeaturesEnabledForCurrentUser();
  switch (e) {
    case FFileType.DESIGN:
      return t;
    case FFileType.WHITEBOARD:
      return n;
    case FFileType.SLIDES:
      return isSlidesAiEnabled;
    case FFileType.SITES:
      return t;
    default:
      return !1;
  }
}
export function $$m1() {
  let e = useCurrentPrivilegedPlan("useIsAiEnabledAtOrgOrTeamLevel").unwrapOr(null);
  return !e || !!e.aiFeaturesEnabled;
}
let g = _$$n(() => atomStoreManager.get(y));
export function $$f3() {
  let e = g();
  return {
    loading: "loading" === e,
    isSlidesAiEnabled: "has_permission" === e
  };
}
var E = (e => (e.LOADING = "loading", e.HAS_PERMISSION = "has_permission", e.NO_PERMISSION = "no_permission", e))(E || {});
let y = atom("loading");
export function $$b2(e) {
  let t = useSetAtom(y);
  let r = useCurrentUserOrg();
  let l = useSubscription(isLlamaEnabledForOrg(r) ? FileCanUseFigmaAiIgnoreAiToggle : FileCanUseSlidesAi, {
    key: e
  }, {
    enabled: !!e
  });
  useEffect(() => {
    if ("loaded" !== l.status) return;
    let {
      file
    } = l.data;
    file.status === ResourceStatus.Loaded && file.data && t(file.data.hasPermission ? "has_permission" : "no_permission");
  }, [t, l.data, l.status]);
}
export const BE = $$h0;
export const Mq = $$m1;
export const OQ = $$b2;
export const u4 = $$f3;