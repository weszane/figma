import { UserAPIHandlers } from '../905/93362';
import { batchPutPlan } from '../905/93909';
import { initialStateAtom } from '../905/347448';
import { createOptimistThunk } from '../905/350402';
import { orgsBatchPut } from '../905/395917';
import { APILoadingStatus } from '../905/520829';
import { getFeatureFlags } from '../905/601108';
import { fetchTeamRoles } from '../905/672897';
import { atomStoreManager } from '../figma_app/27355';
import { batchPutTeamAction } from '../figma_app/240735';

/**
 * Types for plan, team, and org meta data.
 */
interface PlanMeta {
  plans: any[];
  teams: TeamMeta[];
  orgs: OrgMeta[];
}
interface TeamMeta {
  id: string;
  // Add other team properties as needed
}
interface OrgMeta {
  // Add org properties as needed
}

/**
 * Thunk to optimistically load plans, teams, and orgs if not already loaded.
 * Original: $$m0
 */
export const setupOptimistPlanLoader = createOptimistThunk(async (dispatchContext, {
  loadedPlans
}) => {
  if (!loadedPlans || loadedPlans.length === 0) {
    try {
      const response = await UserAPIHandlers.getPlans();
      const meta: PlanMeta = response.data.meta;
      dispatchContext.dispatch(batchPutPlan({
        plans: meta.plans
      }));
      dispatchContext.dispatch(batchPutTeamAction({
        teams: meta.teams
      }));
      dispatchContext.dispatch(orgsBatchPut({
        orgs: meta.orgs
      }));

      // If feature flag is enabled, close starter team loophole for each team
      if (getFeatureFlags().close_starter_team_loophole_v2) {
        await Promise.all(meta.teams.map(team => fetchTeamRoles(team.id, dispatchContext)));
      }
    } catch {
      // Silently fail
    }
  }
});

/**
 * Returns a thunk that loads plans for authenticated users.
 * Original: $$h1
 * @param forceReload - Whether to force reload plans
 */
export function setupAuthedUserPlanLoader(forceReload = false) {
  return async (dispatch: Fn) => {
    try {
      return await loadAuthedUserPlans(dispatch, forceReload);
    } catch (error) {
      return Promise.reject(error);
    }
  };
}

/**
 * Loads plans for authenticated users, updating atom state and dispatching team/org actions.
 * Original: g
 * @param dispatch - Redux dispatch function
 * @param forceReload - Whether to force reload plans
 */
async function loadAuthedUserPlans(dispatch: Fn, forceReload = false) {
  let apiStatus = atomStoreManager.get(initialStateAtom);

  // Only proceed if forced or status is INIT/LOADING
  if (!forceReload && apiStatus !== APILoadingStatus.INIT && apiStatus !== APILoadingStatus.LOADING) {
    return apiStatus;
  }
  try {
    if (apiStatus === APILoadingStatus.INIT) {
      atomStoreManager.set(initialStateAtom, APILoadingStatus.LOADING);
    }
    const plansData = await UserAPIHandlers.getPlansForAuthedUsers();
    atomStoreManager.set(initialStateAtom, plansData);
    dispatch(batchPutTeamAction({
      teams: plansData.teams
    }));
    dispatch(orgsBatchPut({
      orgs: plansData.orgs
    }));
    return plansData;
  } catch (error) {
    if (apiStatus === APILoadingStatus.LOADING) {
      atomStoreManager.set(initialStateAtom, APILoadingStatus.INIT);
    }
    return Promise.reject(error);
  }
}
export const hr = setupOptimistPlanLoader;
export const nm = setupAuthedUserPlanLoader;