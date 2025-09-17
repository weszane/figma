import { useMemo } from "react";
import { isAllowedDomain } from "../figma_app/416935";
import { selectExperimentConfigHook } from "../figma_app/594947";
export let $$s2 = "https://help.figma.com/hc/articles/360039956774-Upload-custom-fonts-to-an-organization";
export function $$o1({
  currentTeamId: e,
  hasCurrentOrg: t
}) {
  return !!e && !t;
}
let l = ({
  user: e,
  hasCurrentTeam: t,
  hasCurrentOrg: i,
  getConfig: n
}) => !(!t || i || isAllowedDomain(e.email)) && n().get("isVariant", !1);
export function $$d0({
  enabled: e,
  user: t,
  hasCurrentTeam: i,
  hasCurrentOrg: r
}) {
  let {
    getConfig
  } = selectExperimentConfigHook("exp_oss_exposure_fonts_v1");
  return useMemo(() => !!e && !!t && l({
    user: t,
    hasCurrentOrg: r,
    hasCurrentTeam: i,
    getConfig
  }), [e, t, r, i, getConfig]);
}
export const Rk = $$d0;
export const XD = $$o1;
export const gg = $$s2;