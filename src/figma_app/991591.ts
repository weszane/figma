import { n as _$$n } from "../905/347702";
import { useEffect } from "react";
import { atomStoreManager, atom, Xr } from "../figma_app/27355";
import { tT } from "../905/663269";
import { Rs } from "../figma_app/288654";
import { q8, dZ } from "../figma_app/459490";
import { lg } from "../figma_app/976749";
import { sZ } from "../905/845253";
import { FFileType } from "../figma_app/191312";
import { YTs, erJ } from "../figma_app/43951";
import { T5 } from "../figma_app/465071";
import { PE } from "../figma_app/251115";
export function $$h0() {
  let e = lg();
  let t = PE();
  let {
    isSlidesAiEnabled
  } = $$f3();
  let n = !q8();
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
  let e = T5("useIsAiEnabledAtOrgOrTeamLevel").unwrapOr(null);
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
  let t = Xr(y);
  let r = sZ();
  let l = Rs(dZ(r) ? YTs : erJ, {
    key: e
  }, {
    enabled: !!e
  });
  useEffect(() => {
    if ("loaded" !== l.status) return;
    let {
      file
    } = l.data;
    file.status === tT.Loaded && file.data && t(file.data.hasPermission ? "has_permission" : "no_permission");
  }, [t, l.data, l.status]);
}
export const BE = $$h0;
export const Mq = $$m1;
export const OQ = $$b2;
export const u4 = $$f3;