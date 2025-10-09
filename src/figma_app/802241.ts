// Origin: /Users/allen/sigma-main/src/figma_app/802241.ts
// Changes: Renamed variables and functions for clarity, added TypeScript types/interfaces, added comments, simplified logic, formatted code, and preserved original export names.

// Assumed dependencies:
// - useSelector: Redux hook for accessing state
// - getFeatureFlags: Returns feature flags object
// - desktopAPIInstance: Object with hasFeature method

import { useSelector } from "react-redux";
import { getFeatureFlags } from "../905/601108";
import { desktopAPIInstance } from "../figma_app/876459";



/**
 * Checks if the current plan (matching openFile.parentOrgId) has dev mode MCP disabled.
 * Uses Redux state selectors.
 */
export function isDevModeMcpDisabledSelector(): boolean {
  const plans = useSelector((state: AppState) => state.plans);
  const openFile = useSelector((state: AppState) => state.openFile);

  // Find the plan matching the parentOrgId from openFile
  const matchedPlan = plans.find(plan => plan.plan_id === openFile?.parentOrgId);

  // Return true if is_dev_mode_mcp_disabled is explicitly true
  return matchedPlan?.is_dev_mode_mcp_disabled === true;
}

/**
 * Checks if the given state has dev mode MCP disabled for the current open file.
 * Accepts state as an argument (for use outside React components).
 */
export function isDevModeMcpDisabled(state: AppState): boolean {
  const { plans, openFile } = state;
  const matchedPlan = plans.find(plan => plan.plan_id === openFile?.parentOrgId);
  return matchedPlan?.is_dev_mode_mcp_disabled === true;
}

/**
 * Checks if the desktop API has the "addMcpWrites" feature enabled
 * and the dt_mcp_write_assets_locally feature flag is true.
 */
export function canWriteMcpAssetsLocally(): boolean {
  // Potential bug: desktopAPIInstance or getFeatureFlags() could be undefined/null.
  // Defensive checks are added.
  return Boolean(
    desktopAPIInstance?.hasFeature("addMcpWrites") &&
    getFeatureFlags()?.dt_mcp_write_assets_locally
  );
}

// Export statements preserving original names
export const $k = isDevModeMcpDisabledSelector;
export const As = canWriteMcpAssetsLocally;
export const uT = isDevModeMcpDisabled;
