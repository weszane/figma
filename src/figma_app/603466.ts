import { reportError } from '../905/11';
import { getPublicNodeType } from '../905/83498';
import { ServiceCategories } from '../905/165054';
import { getSingletonSceneGraph } from '../905/700578';
import { debounce } from '../905/915765';
import { serializeStyle } from '../figma_app/276332';
import { PluginHelpers, SceneChangeType } from '../figma_app/763686';

// Types for event handlers and callbacks
interface SelectionHandler {
  normal: () => void;
  boxSelection: {
    (): void;
    flush?: () => void;
    cancel?: () => void;
  };
}
type DocumentChangeHandler = (event: any) => void;
type StyleChangeHandler = (events: any[]) => void;
type NodeChangeHandler = (events: any[]) => void;
type TimerChangeHandler = (timer: any) => void;
type CodegenPreferencesChangeHandler = (prefs: any) => void;
type SlidesViewChangeHandler = (view: any) => void;
type PluginPageLoadedHandler = (page: any) => void;
type AccessibleNodeIdsProvider = () => string[];
type AccessiblePagesProvider = () => string[];
type StackInvariantHandler = (e: any) => any;

// Event handler registries
let selectionHandlers: SelectionHandler[] = [];
let pageChangeHandlers: (() => void)[] = [];
let timerChangeHandlers: TimerChangeHandler[] = [];
let stackInvariantHandlers: StackInvariantHandler[] = [];
let codegenPreferencesHandlers: CodegenPreferencesChangeHandler[] = [];
let slidesViewHandlers: SlidesViewChangeHandler[] = [];
let pluginPageLoadedHandlers: PluginPageLoadedHandler[] = [];
let accessibleNodeIdsProviders: AccessibleNodeIdsProvider[] = [];
let accessiblePagesProviders: AccessiblePagesProvider[] = [];
let documentChangeHandlers: DocumentChangeHandler[] = [];
let styleChangeHandlers: StyleChangeHandler[] = [];
let nodeChangeHandlers: NodeChangeHandler[] = [];
let stackInvariantCallback: StackInvariantHandler | null = null;
let pluginPageLoadedCallback: (() => Promise<any>) | null = null;

// Internal event aggregator for document changes
class DocumentEventAggregator {
  task: any = null;
  eventByGuid = new Map<string, any>();
  styleEventByGuid = new Map<string, any>();
  nodeEventByGuid = new Map<string, any>();
  timeOutMs = 100;
  flush = () => {
    // Aggregate and dispatch document change events
    const docEvents: any[] = [];
    for (const entry of this.eventByGuid.values()) {
      if (entry.nodeType !== 'NONE') {
        for (const event of entry.events) {
          docEvents.push(this.injectTypeIntoEvent(entry, event));
        }
      }
    }
    for (const handler of documentChangeHandlers) handler(docEvents);

    // Aggregate and dispatch style change events
    const styleEvents: any[] = [];
    for (const entry of this.styleEventByGuid.values()) {
      if (entry.nodeType !== 'NONE') {
        for (const event of entry.events) styleEvents.push(event);
      }
    }
    for (const handler of styleChangeHandlers) handler(styleEvents);

    // Aggregate and dispatch node change events
    const nodeEvents: any[] = [];
    for (const entry of this.nodeEventByGuid.values()) {
      if (entry.nodeType !== 'NONE') {
        for (const event of entry.events) {
          nodeEvents.push({
            ...event,
            nodeType: entry.nodeType
          });
        }
      }
    }
    for (const handler of nodeChangeHandlers) handler(nodeEvents);

    // Clear all event maps and reset task
    this.eventByGuid.clear();
    this.styleEventByGuid.clear();
    this.nodeEventByGuid.clear();
    this.task = null;
  };
  onEventFired(event: any) {
    if (this.task == null) {
      this.task = scheduler.postTask(this.flush, {
        delay: this.timeOutMs,
        priority: 'user-visible'
      });
    }
    let entry = this.eventByGuid.get(event.id) ?? {
      nodeType: this.publicNodeTypeFromEvent(event),
      events: []
    };
    if (!entry) return;
    if (entry.nodeType === 'NONE') {
      entry.nodeType = this.publicNodeTypeFromEvent(event);
    }
    let existingEvent = entry.events.find((ev: any) => ev.type === event.type && ev.origin === event.origin);
    if (existingEvent) {
      for (const prop of event.properties) existingEvent.properties.add(prop);
    } else {
      const node = getSingletonSceneGraph().get(event.id);
      if (node) {
        if (event.type === SceneChangeType.STYLE_PROPERTY_CHANGE || event.type === SceneChangeType.STYLE_CREATE || event.type === SceneChangeType.STYLE_DELETE) {
          if (node.styleKeyForPublish) {
            entry.events.push({
              id: event.id,
              origin: event.origin,
              type: event.type,
              properties: new Set(event.properties),
              styleKey: serializeStyle({
                key: node.styleKeyForPublish,
                version: node.styleVersionHash
              })
            });
          }
        } else {
          entry.events.push({
            id: event.id,
            origin: event.origin,
            type: event.type,
            properties: new Set(event.properties),
            devFriendlyId: getSingletonSceneGraph().developerFriendlyIdFromGuid(event.id),
            oldContainingCanvas: event.oldContainingCanvas
          });
        }
      }
    }
    this.eventByGuid.set(event.id, entry);
    const node = getSingletonSceneGraph().get(event.id);
    if (node) {
      if (node.styleKeyForPublish) {
        const styleEvents = entry.events.filter((ev: any) => ev.type === SceneChangeType.STYLE_DELETE || ev.type === SceneChangeType.STYLE_CREATE || ev.type === SceneChangeType.STYLE_PROPERTY_CHANGE);
        this.styleEventByGuid.set(event.id, {
          nodeType: this.publicNodeTypeFromEvent(event),
          events: styleEvents
        });
      } else {
        const nodeEvents = entry.events.filter((ev: any) => ev.type === SceneChangeType.CREATE || ev.type === SceneChangeType.PROPERTY_CHANGE || ev.type === SceneChangeType.DELETE).map((ev: any) => {
          let containingCanvas = '';
          if (ev.type === SceneChangeType.CREATE || ev.type === SceneChangeType.PROPERTY_CHANGE) {
            containingCanvas = node.containingCanvas || '';
          } else if (ev.type === SceneChangeType.DELETE) {
            containingCanvas = ev.oldContainingCanvas?.toString() || '';
          }
          if (containingCanvas === '') {
            reportError(ServiceCategories.EXTENSIBILITY, new Error('Containing canvas for nodechange event is empty'));
          }
          return {
            ...ev,
            containingCanvas
          };
        });
        this.nodeEventByGuid.set(event.id, {
          nodeType: this.publicNodeTypeFromEvent(event),
          events: nodeEvents
        });
      }
    }
  }
  publicNodeTypeFromEvent(event: any) {
    const node = getSingletonSceneGraph().get(event.id);
    return node && node?.type !== 'NONE' ? getPublicNodeType(node) : 'NONE';
  }
  injectTypeIntoEvent(entry: any, event: any) {
    if (event.type === SceneChangeType.CREATE || event.type === SceneChangeType.DELETE || event.type === SceneChangeType.PROPERTY_CHANGE) {
      return {
        ...event,
        nodeType: entry.nodeType
      };
    }
    return event;
  }
}
let documentEventAggregator = new DocumentEventAggregator();
export let PluginCallbacks: {
  selectionChange: (isBoxSelection: boolean) => void;
  boxSelectionEnded: () => void;
  currentPageChange: () => void;
  timerChange: (timer: any) => void;
  documentChange: (event: any) => void;
  codegenPreferencesChange: (prefs: any) => void;
  slidesViewChange: (view: any) => void;
  stackInvariantsEnforced: (e: any) => void;
  pluginPageLoaded: (page: any) => void;
  pluginAccessibleNodeIds: () => string[];
  pluginAccessiblePages: () => string[];
};
/**
 * Initializes the main event handler registry ($$A55).
 */
export function setupEventHandlers() {
  // $$A55
  PluginCallbacks = {
    selectionChange(isBoxSelection: boolean) {
      for (const handler of selectionHandlers) isBoxSelection ? handler.boxSelection() : handler.normal();
    },
    boxSelectionEnded() {
      for (const handler of selectionHandlers) handler.boxSelection.flush?.();
    },
    currentPageChange() {
      for (const handler of pageChangeHandlers) handler();
    },
    timerChange(timer: any) {
      for (const handler of timerChangeHandlers) handler(timer);
    },
    documentChange(event: any) {
      documentEventAggregator.onEventFired(event);
    },
    codegenPreferencesChange(prefs: any) {
      for (const handler of codegenPreferencesHandlers) handler(prefs);
    },
    slidesViewChange(view: any) {
      for (const handler of slidesViewHandlers) handler({
        view
      });
    },
    stackInvariantsEnforced(e: any) {
      stackInvariantCallback?.(e);
    },
    pluginPageLoaded(page: any) {
      for (const handler of pluginPageLoadedHandlers) handler(page);
    },
    pluginAccessibleNodeIds() {
      const ids = new Set<string>();
      for (const provider of accessibleNodeIdsProviders) provider().forEach(id => ids.add(id));
      return Array.from(ids);
    },
    pluginAccessiblePages() {
      const pages = new Set<string>();
      for (const provider of accessiblePagesProviders) provider().forEach(page => pages.add(page));
      return Array.from(pages);
    }
  };
}

/**
 * Registers a selection handler ($$x12).
 */
export function registerSelectionHandler(handler: () => void) {
  selectionHandlers.push({
    normal: handler,
    boxSelection: debounce(handler, 500)
  });
}

/**
 * Unregisters a selection handler ($$N53).
 */
export function unregisterSelectionHandler(handler: () => void) {
  selectionHandlers = selectionHandlers.filter(h => h.normal !== handler || (h.boxSelection.cancel?.(), false));
}

/**
 * Registers a page change handler ($$C27).
 */
export function registerPageChangeHandler(handler: () => void) {
  pageChangeHandlers.push(handler);
}

/**
 * Unregisters a page change handler ($$w30).
 */
export function unregisterPageChangeHandler(handler: () => void) {
  pageChangeHandlers = pageChangeHandlers.filter(h => h !== handler);
}

/**
 * Registers a timer change handler ($$O20).
 */
export function registerTimerChangeHandler(handler: TimerChangeHandler) {
  timerChangeHandlers.push(handler);
}

/**
 * Unregisters a timer change handler ($$R47).
 */
export function unregisterTimerChangeHandler(handler: TimerChangeHandler) {
  timerChangeHandlers = timerChangeHandlers.filter(h => h !== handler);
}

/**
 * Registers a stack invariant handler ($$L11).
 */
export function registerStackInvariantHandler(handler: StackInvariantHandler) {
  stackInvariantHandlers.push(handler);
}

/**
 * Unregisters a stack invariant handler ($$P22).
 */
export function unregisterStackInvariantHandler(handler: StackInvariantHandler) {
  stackInvariantHandlers = stackInvariantHandlers.filter(h => h !== handler);
}

/**
 * Checks stack invariants ($$D7).
 */
export function checkStackInvariants(e: any): boolean {
  for (const handler of stackInvariantHandlers) {
    if (handler(e) === false) return false;
  }
  return true;
}

/**
 * Registers a plugin page loaded handler ($$k26).
 */
export function registerPluginPageLoadedHandler(handler: PluginPageLoadedHandler) {
  pluginPageLoadedHandlers.push(handler);
}

/**
 * Unregisters a plugin page loaded handler ($$M19).
 */
export function unregisterPluginPageLoadedHandler(handler: PluginPageLoadedHandler) {
  pluginPageLoadedHandlers = pluginPageLoadedHandlers.filter(h => h !== handler);
}

/**
 * Registers an accessible node ids provider ($$F16).
 */
export function registerAccessibleNodeIdsProvider(provider: AccessibleNodeIdsProvider) {
  accessibleNodeIdsProviders.push(provider);
}

/**
 * Unregisters an accessible node ids provider ($$j24).
 */
export function unregisterAccessibleNodeIdsProvider(provider: AccessibleNodeIdsProvider) {
  accessibleNodeIdsProviders = accessibleNodeIdsProviders.filter(p => p !== provider);
}

/**
 * Registers an accessible pages provider ($$U17).
 */
export function registerAccessiblePagesProvider(provider: AccessiblePagesProvider) {
  accessiblePagesProviders.push(provider);
}

/**
 * Unregisters an accessible pages provider ($$B42).
 */
export function unregisterAccessiblePagesProvider(provider: AccessiblePagesProvider) {
  accessiblePagesProviders = accessiblePagesProviders.filter(p => p !== provider);
}

// Helper to update document change callback registration
function updateDocumentChangeCallbackRegistration() {
  if (documentChangeHandlers.length || styleChangeHandlers.length || nodeChangeHandlers.length) {
    PluginHelpers.setIsDocumentChangeCallbackRegistered(true);
  } else {
    PluginHelpers.setIsDocumentChangeCallbackRegistered(false);
  }
}

/**
 * Registers a document change handler ($$V14).
 */
export function registerDocumentChangeHandler(handler: DocumentChangeHandler) {
  documentChangeHandlers.push(handler);
  updateDocumentChangeCallbackRegistration();
}

/**
 * Unregisters a document change handler ($$H29).
 */
export function unregisterDocumentChangeHandler(handler: DocumentChangeHandler) {
  documentChangeHandlers = documentChangeHandlers.filter(h => h !== handler);
  updateDocumentChangeCallbackRegistration();
}

/**
 * Registers a style change handler ($$z40).
 */
export function registerStyleChangeHandler(handler: StyleChangeHandler) {
  styleChangeHandlers.push(handler);
  updateDocumentChangeCallbackRegistration();
}

/**
 * Unregisters a style change handler ($$W37).
 */
export function unregisterStyleChangeHandler(handler: StyleChangeHandler) {
  styleChangeHandlers = styleChangeHandlers.filter(h => h !== handler);
  updateDocumentChangeCallbackRegistration();
}

/**
 * Registers a node change handler ($$K1).
 */
export function registerNodeChangeHandler(handler: NodeChangeHandler) {
  nodeChangeHandlers.push(handler);
  updateDocumentChangeCallbackRegistration();
}

/**
 * Unregisters a node change handler ($$Y48).
 */
export function unregisterNodeChangeHandler(handler: NodeChangeHandler) {
  nodeChangeHandlers = nodeChangeHandlers.filter(h => h !== handler);
  updateDocumentChangeCallbackRegistration();
}

/**
 * Registers a codegen preferences change handler ($$$39).
 */
export function registerCodegenPreferencesChangeHandler(handler: CodegenPreferencesChangeHandler) {
  codegenPreferencesHandlers.push(handler);
}

/**
 * Unregisters a codegen preferences change handler ($$X0).
 */
export function unregisterCodegenPreferencesChangeHandler(handler: CodegenPreferencesChangeHandler) {
  codegenPreferencesHandlers = codegenPreferencesHandlers.filter(h => h !== handler);
}

/**
 * Registers a slides view change handler ($$q28).
 */
export function registerSlidesViewChangeHandler(handler: SlidesViewChangeHandler) {
  slidesViewHandlers.push(handler);
  updateDocumentChangeCallbackRegistration();
}

/**
 * Unregisters a slides view change handler ($$J44).
 */
export function unregisterSlidesViewChangeHandler(handler: SlidesViewChangeHandler) {
  slidesViewHandlers = slidesViewHandlers.filter(h => h !== handler);
  updateDocumentChangeCallbackRegistration();
}

// Plugin page loaded callback management
export function setPluginPageLoadedCallback(callback: () => Promise<any>) {
  pluginPageLoadedCallback = callback;
}
export function hasPluginPageLoadedCallback() {
  return !!pluginPageLoadedCallback;
}
export function clearPluginPageLoadedCallback() {
  pluginPageLoadedCallback = null;
}
export async function runPluginPageLoadedCallback() {
  return !pluginPageLoadedCallback || (await pluginPageLoadedCallback());
}

// Stack invariant callback management
export function setStackInvariantCallback(callback: StackInvariantHandler) {
  stackInvariantCallback = callback;
  return () => stackInvariantCallback = null;
}

// Utility for async event dispatching (eD)
function createAsyncEventDispatcher() {
  let resolver: any;
  let promise = new Promise<any>(resolve => {
    resolver = resolve;
  });
  let handler: any = null;
  const reset = () => {
    promise = new Promise<any>(resolve => {
      resolver = resolve;
    });
    handler = null;
  };
  const run = async (...args: any[]) => {
    const fn = await promise;
    return await fn(...args);
  };
  return {
    set: (fn: any) => {
      handler = fn;
      resolver(fn);
    },
    remove: (fn: any) => {
      if (fn === handler) reset();
    },
    has: () => !!handler,
    run,
    runOrTimeout: async (timeoutMs: number, ...args: any[]) => {
      let didTimeout = false;
      const timeoutPromise = new Promise<void>(resolve => {
        setTimeout(() => {
          didTimeout = true;
          resolve();
        }, timeoutMs);
      });
      const result = await Promise.race([run(...args), timeoutPromise]);
      return didTimeout ? {
        didRun: false
      } : {
        didRun: true,
        returnValue: result
      };
    },
    reset
  };
}

// Exported async event dispatchers (original eD instances)
const asyncDispatcher1 = createAsyncEventDispatcher();
const asyncDispatcher2 = createAsyncEventDispatcher();
const asyncDispatcher3 = createAsyncEventDispatcher();
const asyncDispatcher4 = createAsyncEventDispatcher();
const asyncDispatcher5 = createAsyncEventDispatcher();
const asyncDispatcher6 = createAsyncEventDispatcher();

// Exported variables and functions (refactored names)
// Registry object

export const $y = unregisterCodegenPreferencesChangeHandler; // $y
export const BT = registerNodeChangeHandler; // BT
export const setDevResourceOpenCallback = asyncDispatcher6.set;
export const B_ = setDevResourceOpenCallback; // B_
export const setCloseCallback = asyncDispatcher1.set;
export const Bs = setCloseCallback; // Bs
export const Cu = asyncDispatcher3.runOrTimeout; // Cu
export const unregisterCodegenCallback = asyncDispatcher3.remove;
export const G1 = unregisterCodegenCallback; // G1
export const unregisterDevResourceOpenCallback = asyncDispatcher6.remove;
export const H4 = unregisterDevResourceOpenCallback; // H4
export const I2 = checkStackInvariants; // I2
export const hasSpellCheckCallback = asyncDispatcher2.has; // I8
export const IM = hasSpellCheckCallback; // IM
export const It = runPluginPageLoadedCallback; // It
export const hasDevResourceOpenCallback = asyncDispatcher6.has; // J1
export const Jc = hasDevResourceOpenCallback; // Jc
export const KB = registerStackInvariantHandler; // KB
export const LL = registerSelectionHandler; // LL
export const ME = asyncDispatcher5.set; // ME
export const Mw = registerDocumentChangeHandler; // Mw
export const OD = asyncDispatcher4.set; // OD
export const Q4 = registerAccessibleNodeIdsProvider; // Q4
export const Ql = registerAccessiblePagesProvider; // Ql
export const runSpellCheckCallback = asyncDispatcher2.run; // Qp
export const Qx = runSpellCheckCallback; // Qx
export const Rp = unregisterPluginPageLoadedHandler; // Rp
export const Sf = registerTimerChangeHandler; // Sf
export const setSpellCheckCallback = asyncDispatcher2.set;
export const Sx = setSpellCheckCallback; // Sx
export const Ty = unregisterStackInvariantHandler; // Ty
export const Ut = asyncDispatcher5.run; // Ut
export const VM = unregisterAccessibleNodeIdsProvider; // VM
export const removeCloseCallback = asyncDispatcher1.remove;
export const Vb = removeCloseCallback; // Vb
export const W5 = registerPluginPageLoadedHandler; // W5
export const Xx = registerPageChangeHandler; // Xx
export const _C = registerSlidesViewChangeHandler; // _C
export const b_ = unregisterDocumentChangeHandler; // b_
export const cI = unregisterPageChangeHandler; // cI
export const d1 = PluginCallbacks; // d1
export const dG = clearPluginPageLoadedCallback; // dG
export const dM = asyncDispatcher1.has; // dM
export const f$ = asyncDispatcher1.reset; // f$
export const runTimeoutEventCloseCallback = asyncDispatcher1.runOrTimeout; // f1
export const f2 = runTimeoutEventCloseCallback; // f2
export const fS = hasPluginPageLoadedCallback; // fS
export const fd = unregisterStyleChangeHandler; // fd
export const hY = asyncDispatcher5.reset; // hY
export const i1 = registerCodegenPreferencesChangeHandler; // i1
export const iP = registerStyleChangeHandler; // iP
export const jG = setPluginPageLoadedCallback; // jG
export const jS = unregisterAccessiblePagesProvider; // jS
export const n4 = asyncDispatcher4.reset; // n4
export const nf = unregisterSlidesViewChangeHandler; // nf
export const o5 = asyncDispatcher3.run; // o5
export const oZ = asyncDispatcher3.set; // oZ
export const po = unregisterTimerChangeHandler; // po
export const q$ = unregisterNodeChangeHandler; // q$
export const qC = setStackInvariantCallback; // qC
export const runTimeoutDevResourceOpenCallback = asyncDispatcher6.runOrTimeout; // qF
export const r2 = runTimeoutDevResourceOpenCallback; // r2
export const unregisterSpellCheckCallback = asyncDispatcher2.remove;
export const sd = unregisterSpellCheckCallback; // sd
export const se = asyncDispatcher4.run; // se
export const wk = unregisterSelectionHandler; // wk
export const runDevResourceOpenCallback = asyncDispatcher6.run; // x1
export const xG = runDevResourceOpenCallback; // xG
export const xi = setupEventHandlers; // xi
