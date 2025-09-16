import { useSelector } from 'react-redux';
import { getI18nString } from '../905/303541';
import { addSessionLocalIdToQuery, addVersionIdToQuery, appendHashToUrl, appendQueryToUrl, buildResourcePath, extractQueryParams, getTestPath, parseCommentPreferencesOrThreadId, setPageTypeIfCanvasOrDocument } from '../905/366346';
import { $ } from '../905/532878';
import { InspectState } from '../905/560959';
import { parseAndNormalizeQuery } from '../905/634134';
import { normalizeVariableId, replaceColonWithDash } from '../905/691205';
import { getDisplayName, getRepoById } from '../905/760074';
import { canAccessDevModeWithOrg } from '../905/898378';
import { atomStoreManager } from '../figma_app/27355';
import { FEditorType } from '../figma_app/53721';
import { hasSingleSceneGraphSelection } from '../figma_app/80938';
import { INTERACTION_FAKE_FILE_KEY } from '../figma_app/617727';
import { SelectorType } from '../figma_app/707808';
import { DesignGraphElements } from '../figma_app/763686';
import { encodeUri } from '../figma_app/930338';
/**
 * Checks if the selected view is in fullscreen DevHandoff mode.
 * Original: $$y0
 */
export function isFullscreenDevHandoffView(view?: {
  view?: string;
  editorType?: FEditorType;
}) {
  return view?.view === 'fullscreen' && view?.editorType === FEditorType.DevHandoff;
}

/**
 * Determines if the current selection is a single scene graph selection in fullscreen DevHandoff mode.
 * Original: $$b1
 */
export function isSingleSceneGraphSelectionInDevHandoff() {
  return useSelector<ObjectOf>(state => isFullscreenDevHandoffView(state.selectedView) && hasSingleSceneGraphSelection(state) && (state.mirror.appModel.currentTool === DesignGraphElements.SELECT || state.mirror.appModel.currentTool === DesignGraphElements.DROPPER_COLOR || state.mirror.appModel.currentTool === DesignGraphElements.ANNOTATE || state.mirror.appModel.currentTool === DesignGraphElements.MEASURE));
}

/**
 * Handles path and view logic for DevHandoff and Design views.
 * Original: $$v2
 */
export class SelectedViewPathHandler {
  /**
   * Builds the selected view object from path segments and query.
   * Original: pathToSelectedView
   */
  pathToSelectedView(appState: any, pathSegments: string[], queryString?: string, hash?: string): Record<string, any> | null {
    const query = queryString ? parseAndNormalizeQuery(queryString) : {};
    const viewType = pathSegments[1];
    if ((viewType === 'design' || viewType === 'file') && (query['ready-for-dev'] === '1' || (query.mode === 'dev' || query.m === 'dev') && query.m !== 'auto')) {
      const fileKey = pathSegments[3] === 'branch' && pathSegments[4] ? pathSegments[4] : pathSegments[2];
      const selectedView: any = {
        view: 'fullscreen',
        editorType: appState?.user ? FEditorType.DevHandoff : FEditorType.Design,
        fileKey
      };
      parseCommentPreferencesOrThreadId(hash, selectedView);
      extractQueryParams(query, selectedView);
      const canAccessFullDevMode = appState?.openFile?.canAccessFullDevMode;
      if (query['cc-version-id'] && (query['node-id'] || query['cc-node-id']) && !query.vars && canAccessFullDevMode) {
        selectedView.compareChangesVersionId = query['cc-version-id'];
      }
      if (query['cc-activity-id'] && (query['node-id'] || query['cc-node-id']) && !query.vars && canAccessFullDevMode) {
        selectedView.compareChangesActivityId = query['cc-activity-id'];
      }
      if (query['cc-filter-status'] && (query['cc-version-id'] || query['cc-activity-id']) && (query['node-id'] || query['cc-node-id']) && !query.vars && canAccessFullDevMode) {
        selectedView.filterStatusVersions = query['cc-filter-status'] === '1';
      }
      if (query['cc-node-id'] && query['cc-version-id'] && !query.vars && canAccessFullDevMode) {
        selectedView.compareChangesNodeId = query['cc-node-id'];
      }
      const canAccessDevMode = canAccessDevModeWithOrg(appState);
      if (query.vars === '1') {
        selectedView.showDevModeVariablesTable = true;
        atomStoreManager.set($, InspectState.DirectUrl);
        if (query['var-id']) {
          selectedView.devModeVariablesTableSelectedVariable = query['var-id'];
        }
      } else if (canAccessDevMode && query['ready-for-dev'] === '1') {
        selectedView.showOverview = true;
      } else if (canAccessDevMode && query['component-browser'] === '1') {
        selectedView.showDevModeComponentBrowser = true;
        selectedView.componentKey = query['component-key'] || undefined;
        let selectorMode = SelectorType.NONE;
        if (query['gh-settings'] === 'repo') {
          selectorMode = SelectorType.REPO_SELECTOR;
        } else if (query['gh-settings'] === 'dirs') {
          selectorMode = SelectorType.DIRECTORY_SELECTOR;
        } else if (query['gh-repo-selector'] === '1') {
          selectorMode = SelectorType.REPO_SELECTOR;
        }
        selectedView.githubRepositorySelectorMode = selectorMode;
      }
      if (!selectedView.showDevModeVariablesTable) {
        atomStoreManager.set($, null);
      }
      if (isFullscreenDevHandoffView(selectedView) && (query.mode === 'dev' || query.m === 'dev')) {
        selectedView.mode = 'dev';
        if (canAccessDevMode && query['focus-id'] && !selectedView.showOverview && !query.vars) {
          selectedView.devModeFocusId = query['focus-id'];
          if (!query['node-id']) {
            selectedView.nodeId = query['focus-id'];
          }
        }
      }
      return selectedView;
    }
    return null;
  }

  /**
   * Determines if a history change is required.
   * Original: requireHistoryChange
   */
  requireHistoryChange(_appState: any, _nextState: any): boolean {
    return false;
  }

  /**
   * Converts a selected view object to a URL path.
   * Original: selectedViewToPath
   */
  selectedViewToPath(selectedView: any, appState: any): string | null {
    if (isFullscreenDevHandoffView(selectedView) || selectedView.view === 'fullscreen' && selectedView.showOverview === true) {
      let path: string;
      if (selectedView.fileKey === INTERACTION_FAKE_FILE_KEY) {
        return getTestPath();
      }
      const viewName = this.selectedViewName(selectedView, appState);
      const encodedViewName = viewName ? encodeUri(viewName) : '';
      const query: Record<string, any> = {};
      const fileKey = selectedView.fileKey;
      const file = fileKey && appState.fileByKey[fileKey];
      const resourceType = 'design';
      if (file) {
        path = buildResourcePath(resourceType, fileKey || '', encodedViewName, file, getRepoById(file, appState.repos));
      } else {
        path = `/${resourceType}/${fileKey}`;
        path += encodedViewName ? `/${encodedViewName}` : '/Untitled';
      }
      addSessionLocalIdToQuery(query, selectedView.nodeId);
      setPageTypeIfCanvasOrDocument(query, selectedView.nodeId);
      addVersionIdToQuery(query, selectedView.versionId);
      if (selectedView.compareChangesVersionId) {
        query['cc-version-id'] = selectedView.compareChangesVersionId;
      }
      if (selectedView.filterStatusVersions) {
        query['cc-filter-status'] = 1;
      }
      if (selectedView.compareChangesNodeId) {
        query['cc-node-id'] = replaceColonWithDash(selectedView.compareChangesNodeId);
      }
      if (selectedView.devModeFocusId) {
        query['focus-id'] = replaceColonWithDash(selectedView.devModeFocusId);
      }
      if (selectedView.showOverview) {
        query['ready-for-dev'] = '1';
      }
      if (selectedView.showDevModeVariablesTable) {
        query.vars = '1';
        if (selectedView.devModeVariablesTableSelectedVariable) {
          query['var-id'] = normalizeVariableId(selectedView.devModeVariablesTableSelectedVariable);
        }
      }
      if (selectedView.showDevModeComponentBrowser) {
        query['component-browser'] = '1';
        if (selectedView.componentKey) {
          query['component-key'] = selectedView.componentKey;
        }
        if (selectedView.githubRepositorySelectorMode === SelectorType.REPO_SELECTOR) {
          query['gh-settings'] = 'repo';
        } else if (selectedView.githubRepositorySelectorMode === SelectorType.DIRECTORY_SELECTOR) {
          query['gh-settings'] = 'dirs';
        }
      }
      query.m = 'dev';
      path = appendQueryToUrl(path, query);
      path = appendHashToUrl(path, selectedView.commentThreadId);
      return path;
    }
    return null;
  }

  /**
   * Gets the display name for the selected view.
   * Original: selectedViewName
   */
  selectedViewName(selectedView: any, appState: any): string | null {
    if (isFullscreenDevHandoffView(selectedView)) {
      let name: string | null = null;
      if (selectedView.fileKey) {
        const file = appState.fileByKey[selectedView.fileKey];
        if (file) {
          const repo = getRepoById(file, appState.repos);
          name = repo ? getDisplayName(file, repo) : file.name;
        }
      }
      return name ?? getI18nString('dev_handoff.dev_handoff_view_selector.untitled');
    }
    return null;
  }

  /**
   * Checks if the selected view references missing resources.
   * Original: selectedViewHasMissingResources
   */
  selectedViewHasMissingResources(appState: any, selectedView: any): boolean {
    return !!isFullscreenDevHandoffView(selectedView) && !!selectedView.fileKey && !(selectedView.fileKey in appState.fileByKey);
  }
}

// Export refactored names
export const $A = isFullscreenDevHandoffView;
export const LS = isSingleSceneGraphSelectionInDevHandoff;
export const YY = SelectedViewPathHandler;