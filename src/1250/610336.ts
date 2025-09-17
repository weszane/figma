import { returnSecond, throwTypeError } from "../figma_app/465776";
import { getFeatureFlags } from "../905/601108";
import { usePrefersMediaQuery } from "../figma_app/469468";
import { getI18nString } from "../905/303541";
import { isResourceHubEnabled } from "../figma_app/275462";
import { ResourceTypeSubset } from "../905/178090";
import { ResourceTypeEnum } from "../figma_app/306946";
import { M } from "../1250/758461";
import { COMMUNITY_MIN_WIDTH } from "../figma_app/350203";
import { FOrganizationLevelType, FPlanNameType } from "../figma_app/191312";
import { selectCurrentUser } from "../905/372672";
import { hasExternalRestrictedOrgId } from "../figma_app/12796";
import { useTeamPlanUser, useTeamPlanFeatures, useIsOrgGuestUser } from "../figma_app/465071";
if (443 == require.j) {}
export function $$f0() {
  let e = selectCurrentUser();
  let t = useTeamPlanUser();
  let n = useTeamPlanFeatures();
  let a = useIsOrgGuestUser(t).unwrapOr(!1);
  let r = usePrefersMediaQuery(`(max-width: ${COMMUNITY_MIN_WIDTH}px)`);
  if ("loading" === n.status) return !1;
  let o = n.data?.type === FOrganizationLevelType.ORG ? n.data?.key.parentId : void 0;
  return !(!isResourceHubEnabled() || r || a || hasExternalRestrictedOrgId(e) && o !== e?.external_restricted_org_id);
}
export function $$h1(e) {
  return (e.data?.type === FOrganizationLevelType.ORG && !!e.data.isResourceHubCmtyTabDisabled) ?? !1;
}
export function $$b3(e, t, n) {
  switch (e) {
    case FPlanNameType.STUDENT:
    case FPlanNameType.PRO:
      {
        let e = new Set([ResourceTypeEnum.SLIDE_TEMPLATE, ResourceTypeEnum.COOPER_TEMPLATE_FILE, ResourceTypeEnum.COOPER_TEMPLATE_ASSET]);
        getFeatureFlags().make_template_discovery && e.add(ResourceTypeEnum.FIGMAKE_TEMPLATE);
        return e.has(t);
      }
    case FPlanNameType.ORG:
    case FPlanNameType.ENTERPRISE:
      {
        if (n) return new Set([ResourceTypeEnum.PLUGIN, ResourceTypeEnum.WIDGET]).has(t);
        let e = new Set([ResourceTypeEnum.PLUGIN, ResourceTypeEnum.WIDGET, ResourceTypeEnum.FIGJAM_TEMPLATE, ResourceTypeEnum.SLIDE_TEMPLATE, ResourceTypeEnum.COOPER_TEMPLATE_FILE, ResourceTypeEnum.COOPER_TEMPLATE_ASSET]);
        getFeatureFlags().make_template_discovery && e.add(ResourceTypeEnum.FIGMAKE_TEMPLATE);
        return e.has(t);
      }
    case FPlanNameType.STARTER:
    case null:
      return !1;
    default:
      return returnSecond(e, !1);
  }
}
export function $$x2(e) {
  switch (e) {
    case ResourceTypeSubset.PLUGINS:
      return getI18nString("community.view_bar.plugins");
    case ResourceTypeSubset.WIDGETS:
      return getI18nString("community.view_bar.widgets");
    case ResourceTypeSubset.FILES:
      return getI18nString("community.saves.all_files");
    default:
      return;
  }
}
export function $$y5(e) {
  switch (e) {
    case M.PLUGINS:
      return getI18nString("community.view_bar.plugins");
    case M.FIGJAM_TEMPLATES:
      return getI18nString("categories.whiteboarding");
    case M.WIDGETS:
      return getI18nString("categories.widgets");
    case M.SLIDE_TEMPLATES:
      return getI18nString("categories.presentations");
    case M.LIBRARIES:
      return getI18nString("categories.libraries");
    case M.COOPER_TEMPLATES:
      return getI18nString("community.resource_hub.cooper_templates");
    case M.FIGMAKE_TEMPLATES:
      return getI18nString("community.resource_hub.figmake_templates");
    case M.RECENTLY_ADDED_TEMPLATES:
      return getI18nString("community.resource_hub.recently_added_templates");
    default:
      throwTypeError(e);
  }
}
export function $$v4(e) {
  switch (e) {
    case M.PLUGINS:
      return [ResourceTypeEnum.PLUGIN];
    case M.FIGJAM_TEMPLATES:
      return [ResourceTypeEnum.FIGJAM_TEMPLATE];
    case M.WIDGETS:
      return [ResourceTypeEnum.WIDGET];
    case M.SLIDE_TEMPLATES:
      return [ResourceTypeEnum.SLIDE_TEMPLATE];
    case M.COOPER_TEMPLATES:
      return [ResourceTypeEnum.COOPER_TEMPLATE_FILE];
    case M.FIGMAKE_TEMPLATES:
      return [ResourceTypeEnum.FIGMAKE_TEMPLATE];
    case M.RECENTLY_ADDED_TEMPLATES:
      return [ResourceTypeEnum.SLIDE_TEMPLATE, ResourceTypeEnum.COOPER_TEMPLATE_FILE, ResourceTypeEnum.FIGJAM_TEMPLATE, ResourceTypeEnum.FIGMAKE_TEMPLATE];
    case M.LIBRARIES:
      return [];
    default:
      throwTypeError(e);
  }
}
export const Fz = $$f0;
export const LQ = $$h1;
export const M0 = $$x2;
export const Pe = $$b3;
export const W6 = $$v4;
export const i_ = $$y5;