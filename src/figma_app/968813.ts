import { isNullOrFailure } from "../905/18797";
import { createActionCreator } from "../905/73481";
import { createOptimistThunk } from "../905/350402";
import { processHubFilesThunk } from "../905/359847";
import { defaultContentService } from "../905/751443";
import { cacheWidgetVersionsThunk, updatePublishedCanvasWidgetVersionsAction, putAllWidgets, putAllPlugins } from "../figma_app/559491";
import { loadingStatePutFailure, loadingStatePutLoading, loadingStatePutSuccess } from "../figma_app/714946";
// Origin: /Users/allen/sigma-main/src/figma_app/968813.ts
// Refactored: Renamed variables, added TypeScript types/interfaces, simplified nested loops, improved readability, added comments, and ensured type safety.

// Assumed dependencies:
// - createActionCreator, createOptimistThunk, processHubFilesThunk, Vx, uV, fs, b6, loadingStatePutLoading, loadingStatePutSuccess, loadingStatePutFailure, isNullOrFailure, defaultContentService
// - Types for plugin/widget/template resources are inferred from usage

// Type definitions for meta resources
interface Resource {
  id: string;
  versions: Record<string, any>;
  current_plugin_version_id?: string;
  is_widget?: boolean;
  viewer_mode?: boolean;
  // Other properties as needed
}
interface AppState {
  selectedView?: {
    view: string;
  };
  loadingState: any;
  currentUserOrgId?: string;
  publishedCanvasWidgetVersions: Record<string, Record<string, any>>;
  // Other properties as needed
}
interface ThunkContext {
  getState: () => AppState;
  dispatch: (action: any) => void;
}

// Action creators
export const updateFaceStamps = createActionCreator("UPDATE_FACE_STAMPS");
export const putDefaultFigjamInsertItems = createActionCreator("PUT_DEFAULT_FIGJAM_INSERT_ITEMS");

// Thunk action to fetch default FigJam inserts if in fullscreen view
export const fetchFigjamDefaultInsertsThunk = createOptimistThunk((context: ThunkContext) => {
  const {
    selectedView
  } = context.getState();
  if (selectedView && selectedView.view === "fullscreen") {
    fetchFigjamDefaultInserts(context);
  }
});
const FETCH_FIGJAM_DEFAULT_INSERTS = "FETCH_FIGJAM_DEFAULT_INSERTS";

// Helper function to fetch and process default FigJam inserts
export async function fetchFigjamDefaultInserts(context: ThunkContext): Promise<void> {
  const state = context.getState();

  // Check if loading state is null or failure before proceeding
  if (isNullOrFailure(state.loadingState, FETCH_FIGJAM_DEFAULT_INSERTS)) {
    context.dispatch(loadingStatePutLoading({
      key: FETCH_FIGJAM_DEFAULT_INSERTS
    }));
    try {
      // Fetch default inserts from content service
      const response: any = await defaultContentService.getDefaultInserts({
        orgId: state.currentUserOrgId ?? undefined
      });
      const meta = response.data.meta;

      // Extract plugins that are NOT widgets from use_cases
      const nonWidgetPlugins: Resource[] = [...meta.plugins, ...meta.use_cases.flatMap(useCase => useCase.resources.filter(resource => resource && "is_widget" in resource && !resource.is_widget))];

      // Extract widgets from use_cases
      const widgets: Resource[] = [...meta.widgets, ...meta.use_cases.flatMap(useCase => useCase.resources.filter(resource => resource && "is_widget" in resource && resource.is_widget))];

      // Extract templates with viewer_mode from use_cases
      const templatesWithViewerMode: Resource[] = [...meta.templates, ...meta.use_cases.flatMap(useCase => useCase.resources.filter(resource => resource && "viewer_mode" in resource && resource.viewer_mode))];

      // Dispatch hub files for templates with viewer_mode
      context.dispatch(processHubFilesThunk({
        hubFiles: templatesWithViewerMode,
        src: "figjam-inserts"
      }));

      // Dispatch meta data for default insert items
      context.dispatch(putDefaultFigjamInsertItems(meta));

      // Dispatch non-widget plugins and widgets
      context.dispatch(putAllPlugins(nonWidgetPlugins));
      context.dispatch(putAllWidgets(widgets));

      // Prepare widget version mappings
      const widgetIDToVersions: Record<string, string[]> = {};
      const widgetCurrentVersions: Record<string, Record<string, any>> = {};
      widgets.forEach(widget => {
        const currentVersionId = widget.current_plugin_version_id;
        const publishedVersions = state.publishedCanvasWidgetVersions[widget.id]?.[currentVersionId];

        // If widget is not published, add all version keys
        if (!(currentVersionId && publishedVersions)) {
          widgetIDToVersions[widget.id] = Object.keys(widget.versions);

          // If current version exists, add to current versions mapping
          if (currentVersionId) {
            widgetCurrentVersions[widget.id] = {
              [currentVersionId]: widget.versions[currentVersionId]
            };
          }
        }
      });

      // Dispatch widget version mappings
      context.dispatch(updatePublishedCanvasWidgetVersionsAction(widgetCurrentVersions));
      context.dispatch(cacheWidgetVersionsThunk({
        widgetIDToVersions
      }));

      // Mark loading as successful
      context.dispatch(loadingStatePutSuccess({
        key: FETCH_FIGJAM_DEFAULT_INSERTS
      }));
    } catch {
      // Mark loading as failed
      context.dispatch(loadingStatePutFailure({
        key: FETCH_FIGJAM_DEFAULT_INSERTS
      }));
    }
  }
}

// Export statements with original names on left, refactored names on right
export const fC = FETCH_FIGJAM_DEFAULT_INSERTS;
export const o2 = updateFaceStamps;
export const qR = fetchFigjamDefaultInsertsThunk;
export const s7 = putDefaultFigjamInsertItems;