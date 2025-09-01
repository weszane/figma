import { FPlanTierType, FOrganizationType } from "../figma_app/191312";
import { Eh } from "../figma_app/617654";
import { M4 } from "../905/713695";
var $$n0;
let a = [FPlanTierType.ORGANIZATION, FPlanTierType.ENTERPRISE];
(e => {
  function t(e) {
    return !!e.planType && a.includes(e.planType) && e.resourceType === FOrganizationType.ORG;
  }
  e.getOrgTrial = function (e) {
    return t(e) ? e : null;
  };
  e.getEstimatedEditorCount = function (e) {
    let t = e.metadata?.editorCount;
    return t ? parseInt(t, 10) : 0;
  };
  e.validateOrgTrialMutation = M4.Mutation(async e => {
    await Eh.validateTrial(e);
  });
  e.isOrgTrial = t;
})($$n0 || ($$n0 = {}));
export const A = $$n0;