import { liveStoreInstance } from '../905/713695';
import { FOrganizationType, FPlanTierType } from '../figma_app/191312';
import { organizationAPIService } from '../figma_app/617654';
interface OrgTrialResource {
  planType?: FPlanTierType;
  resourceType?: FOrganizationType;
  metadata?: {
    editorCount?: string;
  };
}
const ORG_TRIAL_PLAN_TYPES = [FPlanTierType.ORGANIZATION, FPlanTierType.ENTERPRISE];

/**
 * Checks if a resource is eligible for organization trial
 * (Original function: t)
 */
function isOrgTrial(resource: OrgTrialResource): boolean {
  return !!resource.planType && ORG_TRIAL_PLAN_TYPES.includes(resource.planType) && resource.resourceType === FOrganizationType.ORG;
}

/**
 * Gets organization trial resource if eligible
 * (Original function: e.getOrgTrial)
 */
function getOrgTrial(resource: OrgTrialResource): OrgTrialResource | null {
  return isOrgTrial(resource) ? resource : null;
}

/**
 * Gets estimated editor count from resource metadata
 * (Original function: e.getEstimatedEditorCount)
 */
function getEstimatedEditorCount(resource: OrgTrialResource): number {
  const editorCount = resource.metadata?.editorCount;
  return editorCount ? parseInt(editorCount, 10) : 0;
}

/**
 * Validates organization trial mutation
 * (Original function: e.validateOrgTrialMutation)
 */
const validateOrgTrialMutation = liveStoreInstance.Mutation(async (resource: OrgTrialResource) => {
  await organizationAPIService.validateTrial(resource);
});
export const orgTrailHelper = {
  getOrgTrial,
  getEstimatedEditorCount,
  validateOrgTrialMutation,
  isOrgTrial
};