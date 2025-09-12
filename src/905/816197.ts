import { reportError } from '../905/11';
import { ServiceCategories as ServiceCategoriesExtensibility } from '../905/165054';
import { waitForJoinStatus } from '../905/346794';
import { n as createMemoized } from '../905/347702';
import { debugState } from '../905/407919';
import { getSingletonSceneGraph } from '../905/700578';
import { getSceneGraphInstance } from '../905/830071';
import { subscribeToContainingPage } from '../figma_app/582924';
import { AutosaveEventType, IPagePlugin, Multiplayer, SchemaJoinStatus, DataLoadStatus } from '../figma_app/763686';

/**
 * Utility messages for incremental and page loading warnings/errors.
 * (variable: h)
 */
const pageMessages = {
  invalidIncremental: (apiName: string) => `Cannot call with documentAccess: dynamic-page. Use ${apiName} instead.`,
  incrementalUnsafeMemberWarning: (oldApi: string, newApi: string) => `\`${oldApi}\` is deprecated. Please use \`${newApi}\` to ensure consistent results.`,
  invalidPageIncremental: (apiName: string) => `Cannot access ${apiName} on a page that has not been explicitly loaded. Remember to call \`await page.loadAsync()\` or \`await figma.loadAllPagesAsync()' first.`,
  invalidPageRelaxedWarning: (apiName: string) => `You are accessing ${apiName} on a page that has not been explicitly loaded. This is not recommended and may lead to unexpected behavior. Remember to call \`await page.loadAsync()\` or \`await figma.loadAllPagesAsync()' first.`
};

/**
 * Memoized function to get the timeout duration for connection attempts.
 * (variable: m)
 */
const getTimeoutSeconds = createMemoized(() => 10);

/**
 * Memoized function to check if the session state is JOINED.
 * (variable: S)
 */
const isSessionJoined = createMemoized(() => Multiplayer.getSessionState() === SchemaJoinStatus.JOINED);

/**
 * Memoized function to get the plugin connection state.
 * (variable: $$v0)
 */
export const getPluginConnectionState = createMemoized(() => false);

/**
 * SceneGraph instance singleton.
 * (variable: p)
 */
const sceneGraphInstance = getSceneGraphInstance();

/**
 * Tracks loaded pages and manages incremental mode state.
 * (class: $$g4)
 */
export class DocumentAccessState {
  loadedPages: Set<string>;
  incrementalMode: boolean;
  stats: any;
  allowIncrementalUnsafeApiCalls: boolean;
  constructor(options: {
    incrementalMode: boolean;
    stats: any;
    allowIncrementalUnsafeApiCalls: boolean;
  }) {
    this.loadedPages = new Set();
    this.incrementalMode = options.incrementalMode;
    this.stats = options.stats;
    this.allowIncrementalUnsafeApiCalls = options.allowIncrementalUnsafeApiCalls;
  }

  /** Returns whether incremental mode is enabled. (method: getIsIncrementalMode) */
  getIsIncrementalMode(): boolean {
    return this.incrementalMode;
  }

  /** Disables incremental mode. (method: loadedAllPages) */
  loadedAllPages(): void {
    this.incrementalMode = false;
  }

  /** Returns an array of loaded page IDs. (method: getLoadedPages) */
  getLoadedPages(): string[] {
    return Array.from(this.loadedPages);
  }

  /**
   * Adds page IDs to the loaded set and increments stats if not already loaded.
   * (method: addLoadedPageIds)
   */
  addLoadedPageIds(pageIds: string[]): void {
    pageIds.forEach(pageId => {
      if (!this.loadedPages.has(pageId)) {
        this.stats.incrementNumPagesLoaded();
      }
      this.loadedPages.add(pageId);
    });
  }

  /**
   * Checks if a page ID is loaded or if incremental mode is off.
   * (method: hasLoadedPageId)
   */
  hasLoadedPageId(pageId: string): boolean {
    return this.loadedPages.has(pageId) || !this.incrementalMode;
  }

  /**
   * Throws or warns if accessing a page that is not allowed in incremental mode.
   * (method: checkAllowedPage)
   */
  checkAllowedPage(page: {
    type: string;
    guid: string;
  }, access: {
    method?: string;
    property?: string;
  }): void {
    if (page.type !== 'CANVAS' || this.hasLoadedPageId(page.guid)) return;
    const accessName = 'method' in access ? `method \`${access.method}()\`` : `property \`${access.property}\``;
    if (this.allowIncrementalUnsafeApiCalls) {
      console.warn(pageMessages.invalidPageRelaxedWarning(accessName));
      return;
    }
    throw new Error(pageMessages.invalidPageIncremental(accessName));
  }

  /**
   * Throws or warns if accessing a document in incremental mode without loading all pages.
   * (method: checkAllowedMethodIncremental)
   */
  checkAllowedMethodIncremental(node: {
    type: string;
  }): void {
    if (node.type === 'DOCUMENT' && this.getIsIncrementalMode()) {
      if (this.allowIncrementalUnsafeApiCalls) {
        console.warn('To ensure consistent behavior, call `await figma.loadAllPagesAsync()` first.');
      } else {
        throw new Error('Cannot call with documentAccess: dynamic-page without calling figma.loadAllPagesAsync() first.');
      }
    }
  }

  /**
   * Checks if a method is allowed on a document or page.
   * (method: checkAllowedMethodDocumentOrPage)
   */
  checkAllowedMethodDocumentOrPage(node: {
    type: string;
    guid: string;
  }, access: {
    method?: string;
    property?: string;
  }): void {
    if (node.type === 'DOCUMENT') {
      this.checkAllowedMethodIncremental(node);
    } else if (node.type === 'CANVAS') {
      this.checkAllowedPage(node, access);
    }
  }
}

/**
 * Throws or warns if using an unsafe incremental API member.
 * (function: $$f6)
 */
export function checkIncrementalUnsafeMember(allowUnsafe: boolean, oldApi: string, newApi: string): void {
  if (allowUnsafe) {
    console.warn(pageMessages.incrementalUnsafeMemberWarning(oldApi, newApi));
  } else {
    throw new Error(pageMessages.invalidIncremental(newApi));
  }
}

/**
 * Loads the scene graph for a given node.
 * (function: _)
 */
function loadSceneGraph(nodeId: string): any {
  const result = subscribeToContainingPage(nodeId, AutosaveEventType.PLUGIN, IPagePlugin.PLUGIN);
  if (isSessionJoined() && getPluginConnectionState()) {
    Multiplayer.resolveSceneGraphQueryForTest(nodeId, IPagePlugin.PLUGIN);
  }
  return result;
}

/**
 * Attempts to load a page, waiting for connection if necessary.
 * (function: A)
 */
async function ensurePageLoaded(nodeId: string, tracker: DocumentAccessState): Promise<void> {
  if ((!isSessionJoined() || !getPluginConnectionState()) && (await Promise.race([(async () => {
    await waitForJoinStatus(SchemaJoinStatus.JOINED);
    return false;
  })(), (async () => {
    await new Promise(resolve => setTimeout(resolve, 1000 * getTimeoutSeconds()));
    return true;
  })()]))) {
    throw new Error(`Unable to establish connection to Figma after ${getTimeoutSeconds()} seconds. Please check your internet connection.`);
  }
  await tracker.stats.markAndAggregateDuration('totalLoadPagesDuration', async () => {
    await loadSceneGraph(nodeId);
  });
}

/**
 * Marks a page as loaded if possible, or throws if not loaded.
 * (function: $$y2)
 */
export function markPageLoaded(nodeId: string, tracker: DocumentAccessState, options: {
  ignoreReduxState?: boolean;
} = {}): void {
  const node = sceneGraphInstance.get(nodeId);
  const containingCanvas = node?.containingCanvas;
  if (containingCanvas) {
    if (tracker.hasLoadedPageId(containingCanvas)) return;
    if (options.ignoreReduxState) {
      tracker.addLoadedPageIds([containingCanvas]);
    } else {
      const page = debugState.getState().mirror.appModel.pagesList.find(p => p.nodeId === containingCanvas);
      if (page && page.status === DataLoadStatus.LOADED) {
        tracker.addLoadedPageIds([containingCanvas]);
      } else {
        reportError(ServiceCategoriesExtensibility.EXTENSIBILITY, new Error('Cannot call markPageLoaded without having loaded the page first.'));
      }
    }
  }
  loadSceneGraph(containingCanvas ?? nodeId);
}

/**
 * Ensures a page is loaded for plugins, loading if necessary.
 * (function: $$b5)
 */
export async function ensurePluginPageLoaded(nodeId: string, tracker: DocumentAccessState): Promise<void> {
  const node = sceneGraphInstance.get(nodeId);
  const containingCanvas = node?.containingCanvas;
  if (containingCanvas) {
    if (tracker.hasLoadedPageId(containingCanvas)) return;
    const page = debugState.getState().mirror.appModel.pagesList.find(p => p.nodeId === containingCanvas);
    if (page && page.loadedForPlugins) {
      tracker.addLoadedPageIds([containingCanvas]);
      return;
    }
  }
  await ensurePageLoaded(containingCanvas ?? nodeId, tracker);
  const refreshedCanvas = sceneGraphInstance.get(nodeId)?.containingCanvas;
  if (refreshedCanvas) {
    tracker.addLoadedPageIds([refreshedCanvas]);
  }
}

/**
 * Loads all given pages for plugins.
 * (function: $$I3)
 */
export async function loadAllPluginPages(nodeIds: string[], tracker: DocumentAccessState): Promise<void> {
  await Promise.all(nodeIds.map(id => ensurePluginPageLoaded(id, tracker)));
}

/**
 * Loads the internal canvas for the singleton scene graph.
 * (function: E)
 */
async function loadInternalCanvas(tracker: DocumentAccessState): Promise<void> {
  const internalCanvas = getSingletonSceneGraph().getInternalCanvas();
  if (!internalCanvas) {
    reportError(ServiceCategoriesExtensibility.EXTENSIBILITY, new Error('loadInternalCanvas: internalCanvas does not exist'));
    return;
  }
  await ensurePluginPageLoaded(internalCanvas.guid, tracker);
}

/**
 * Memoized function to load the internal canvas.
 * (variable: $$x1)
 */
export const loadInternalCanvasMemoized = createMemoized(async (tracker: DocumentAccessState) => await loadInternalCanvas(tracker));

// Exported aliases for refactored names
export const Jp = getPluginConnectionState;
export const Ux = loadInternalCanvasMemoized;
export const av = markPageLoaded;
export const fs = loadAllPluginPages;
export const u1 = DocumentAccessState;
export const vf = ensurePluginPageLoaded;
export const xc = checkIncrementalUnsafeMember;