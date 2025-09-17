import { UpsellModalType } from '../905/165519'
import { getI18nString } from '../905/303541'
import { parseQuery, serializeQuery } from '../905/634134'
import { CreateUpgradeAction } from '../figma_app/707808'
import { X1 } from '../figma_app/736948'
import { UpgradeSteps } from '../figma_app/831101'
/**
 * Organization Self-Serve View Path Handler
 * Refactored from $$d0
 */
export class OrgSelfServePathHandler {
  /**
   * Maps route parameters to a selected view object.
   * @param e - Unused parameter (original: e)
   * @param routeParts - Array of route segments (original: t)
   * @param queryString - Query string (original: i)
   * @returns Selected view object or null
   */
  pathToSelectedView(e: unknown, routeParts: string[], queryString?: string) {
    if (routeParts[1] === 'purchase-organization') {
      const selectedView: any = {
        view: 'orgSelfServe',
        step: X1.Initial,
        orgMigrated: false,
        upsellSource: UpsellModalType.UNSET,
      }

      if (queryString) {
        const queryObj = parseQuery(queryString)
        if (queryObj.ds) {
          selectedView.initialDesignEditors = parseInt(queryObj.ds)
        }
      }

      const params = new URLSearchParams(queryString)

      const teamFlowType = params.get('team_flow_type')
      if (teamFlowType) {
        if (teamFlowType === CreateUpgradeAction.CREATE) {
          return {
            view: 'teamUpgrade',
            teamFlowType,
            teamId: null,
            paymentStep: UpgradeSteps.CREATE_TEAM,
          }
        }
        selectedView.newTeamProps = { teamFlowType }
      }
      else if (routeParts[2] === 'create-team') {
        selectedView.newTeamProps = {
          teamFlowType: CreateUpgradeAction.CREATE_AND_UPGRADE,
        }
      }

      const entryPoint = params.get('entryPoint')
      if (entryPoint) {
        selectedView.entryPoint = parseInt(entryPoint)
      }

      return selectedView
    }
    return null
  }

  /**
   * Converts a selected view object to a route path.
   * @param selectedView - Selected view object (original: e)
   * @returns Route path string or null
   */
  selectedViewToPath(selectedView: any): string | null {
    if (selectedView.view === 'orgSelfServe') {
      let path = '/purchase-organization'
      const { step, newTeamProps } = selectedView

      if (step === X1.CreateTeam || (!step && newTeamProps)) {
        path += '/create-team'
      }
      else if (step !== X1.TeamSelect && step) {
        if (step === X1.Details) {
          path += '/details'
        }
        else if (step === X1.Payment) {
          path += '/payment'
        }
        else if (step === X1.Review) {
          path += '/review'
        }
        else if (step && step !== X1.Initial) {
          // No path change
        }
        else if (newTeamProps) {
          path += '/create-team'
        }
        else {
          path += '/team-select'
        }
      }
      else {
        path += '/team-select'
      }

      const query: Record<string, any> = {}
      if (newTeamProps)
        query.team_flow_type = newTeamProps.teamFlowType
      if (selectedView.entryPoint)
        query.entryPoint = selectedView.entryPoint

      if (Object.keys(query).length > 0) {
        path += `?${serializeQuery(query)}`
      }
      return path
    }
    return null
  }

  /**
   * Determines if a history change is required between two views.
   * @param prevView - Previous selected view (original: e)
   * @param nextView - Next selected view (original: t)
   * @returns True if history change is required
   */
  requireHistoryChange(prevView: any, nextView: any): boolean {
    const isOrgSelfServePrev = prevView.view === 'orgSelfServe'
    const isOrgSelfServeNext = nextView.view === 'orgSelfServe'
    return isOrgSelfServePrev !== isOrgSelfServeNext
      || (isOrgSelfServePrev && isOrgSelfServeNext && prevView.step !== nextView.step)
  }

  /**
   * Gets the display name for the selected view.
   * @param selectedView - Selected view object (original: e)
   * @returns Display name string or null
   */
  selectedViewName(selectedView: any): string | null {
    if (selectedView.view !== 'orgSelfServe')
      return null
    return getI18nString('org_view.view_selector.upgrade_to_organization')
  }

  /**
   * Checks if the selected view has missing resources.
   * @param selectedView - Selected view object (original: e)
   * @param resources - Resources object (original: t)
   * @returns Always false
   */
  selectedViewHasMissingResources(_selectedView: any, _resources: any): boolean {
    return false
  }
}

// Export with original variable name for compatibility
export const _ = OrgSelfServePathHandler
