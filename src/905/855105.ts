import { getI18nString } from '../905/303541';
import { getUserOrgPath } from '../905/495564';
import { X } from '../905/698965';
import { findMatchingValue } from '../905/807535';

/**
 * Handles organization view path and selection logic.
 * Original class: $$o0
 */
export class OrgViewHandler {
  /**
   * Determines the path to the selected organization view.
   * @param params - Contains currentUserOrgId.
   * @param pathSegments - Array of path segments.
   * @returns Object describing the view, or null if not applicable.
   */
  pathToSelectedView(params: {
    currentUserOrgId?: string;
  }, pathSegments: string[]): {
    view: string;
    orgId: string;
    orgViewTab: string;
  } | null {
    const {
      currentUserOrgId
    } = params;
    if (!currentUserOrgId) return null;
    if (pathSegments[1] === 'files' && pathSegments.length === 2) {
      return {
        view: 'org',
        orgId: currentUserOrgId,
        orgViewTab: X.HOME
      };
    }
    if (pathSegments[1] === 'files' && pathSegments.length >= 3) {
      const result = {
        view: 'org',
        orgId: currentUserOrgId,
        orgViewTab: X.HOME
      };
      const matchedTab = findMatchingValue(X, pathSegments[2]);
      return matchedTab ? {
        ...result,
        orgViewTab: matchedTab
      } : null;
    }
    return null;
  }

  /**
   * Determines if a history change is required between two views.
   * Original method: requireHistoryChange
   * @param prevView - Previous view object.
   * @param nextView - Next view object.
   * @returns True if history change is required, false otherwise.
   */
  requireHistoryChange(prevView: {
    view?: string;
    orgId?: string;
  }, nextView: {
    view?: string;
    orgId?: string;
  }): boolean {
    if (prevView.view !== 'org' || nextView.view !== 'org') {
      return prevView.view === 'org' !== (nextView.view === 'org');
    }
    return prevView.orgId !== nextView.orgId;
  }

  /**
   * Gets the name of the selected organization view.
   * Original method: selectedViewName
   * @param view - View object.
   * @param context - Context containing orgById.
   * @returns The name of the selected view, or null.
   */
  selectedViewName(view: {
    view?: string;
    orgId?: string;
    orgViewTab?: string;
  }, context: {
    orgById: Record<string, {
      name: string;
    }>;
  }): string | null {
    if (view.view !== 'org') return null;
    const org = context.orgById[view.orgId!];
    if (view.orgViewTab === X.HOME) return org ? org.name : '';
    if (view.orgViewTab === X.PLUGINS) return getI18nString('org_view.view_selector.plugins');
    return 'Org';
  }

  /**
   * Converts the selected view to a path string.
   * Original method: selectedViewToPath
   * @param view - View object.
   * @param context - Context containing user.
   * @returns Path string or null.
   */
  selectedViewToPath(view: {
    view?: string;
    orgViewTab?: string;
  }, context: {
    user?: {
      id: string;
    };
  }): string | null {
    if (view.view !== 'org') return null;
    const orgPath = getUserOrgPath(context);
    if (!orgPath) return null;
    let path = `/files${orgPath}`;
    if (view.orgViewTab) path += `/${view.orgViewTab}`;
    if (context.user) path += `?fuid=${context.user.id}`;
    return path;
  }

  /**
   * Checks if the selected view has missing resources.
   * Original method: selectedViewHasMissingResources
   * @returns Always false.
   */
  selectedViewHasMissingResources(_view: unknown, _context: unknown): boolean {
    return false;
  }
}

// Export with original variable name for compatibility
export const G = OrgViewHandler;