import { $D } from '../905/11'
import { ServiceCategories } from '../905/165054'
import { l7 } from '../905/189185'
import { z } from '../905/223332'
import { c2 } from '../905/382883'
import { P5 } from '../905/531105'
import { BK, By } from '../905/816730'
import { Ed, OV } from '../905/828428'
import { getSceneGraphInstance } from '../905/830071'
import { Lb } from '../905/835985'
import { AuthError, InternalError, RequestError } from '../905/845428'
import { qg } from '../905/866640'
import { isDevEnvironment } from '../figma_app/169182'
import { Gc } from '../figma_app/300692'
import { Vi } from '../figma_app/364284'
import { assert } from '../figma_app/465776'
import { gH } from '../figma_app/985200'

/**
 * Manages widget effects (class g)
 */
class WidgetEffectManager {
  private vm: any
  private effects: any[]
  private cleanups: any[]
  public hasRunEffects: boolean

  constructor(vm: any) {
    this.vm = vm
    this.effects = []
    this.cleanups = []
    this.hasRunEffects = false
  }

  /**
   * Add an effect function to the manager (addEffect)
   */
  addEffect(effect: any): void {
    if (this.vm.isFunction(effect)) {
      this.vm.retainHandle(effect)
      this.effects.push(effect)
    }
    else {
      throw new TypeError('useEffect must be passed a function')
    }
  }

  /**
   * Cleanup all registered cleanup functions (cleanup)
   */
  cleanup() {
    for (const cleanupFn of this.cleanups) {
      if (this.vm.isFunction(cleanupFn)) {
        this.vm.callFunction(cleanupFn, this.vm.undefined)
        this.vm.releaseHandle(cleanupFn)
      }
    }
    this.cleanups = []
  }

  /**
   * Run all registered effects (runEffects)
   */
  runEffects() {
    this.hasRunEffects = true
    this.cleanup()
    for (const effect of this.effects) {
      if (!this.vm.isFunction(effect))
        continue
      const result = l7.plugin('widget-effect', () => this.vm.callFunction(effect, this.vm.undefined))
      if (result.type === 'FAILURE')
        throw result.error
      if (this.vm.isFunction(result.handle)) {
        this.cleanups.push(result.handle)
        this.vm.retainHandle(result.handle)
      }
    }
  }

  /**
   * Clear all effects and cleanups (clear)
   */
  clear() {
    this.cleanup()
    for (const effect of this.effects) {
      this.vm.releaseHandle(effect)
    }
    this.effects = []
  }
}

/**
 * Manages promises for widget rendering (class A)
 */
class WidgetPromiseManager {
  private promises: Set<Promise<any>>
  private currentPromise: Promise<void> | null
  private currentResolve: (() => void) | null

  constructor() {
    this.promises = new Set()
    this.currentPromise = null
    this.currentResolve = null
  }

  /**
   * Track and await a promise (manage)
   */
  async manage(promise: Promise<any>): Promise<void> {
    try {
      this.track(promise)
      await promise
    }
    finally {
      this.untrack(promise)
    }
  }

  /**
   * Number of tracked promises (numPromises)
   */
  get numPromises() {
    return this.promises.size
  }

  /**
   * Wait for all tracked promises to finish (waitForFinish)
   */
  async waitForFinish(): Promise<boolean> {
    if (!this.currentPromise)
      return false
    await this.currentPromise
    return true
  }

  /**
   * Track a new promise (track)
   */
  track(promise: Promise<any>): void {
    this.promises.add(promise)
    if (!this.currentPromise) {
      this.currentPromise = new Promise((resolve) => {
        this.currentResolve = resolve
      })
    }
  }

  /**
   * Untrack a finished promise (untrack)
   */
  untrack(promise: Promise<any>): void {
    this.promises.delete(promise)
    if (this.promises.size === 0) {
      this.currentResolve?.()
      this.currentPromise = null
    }
  }
}

/**
 * Wait for next animation frame (b)
 */
function waitForNextFrame(): Promise<void> {
  return new Promise((resolve) => {
    requestAnimationFrame(() => resolve())
  })
}

/**
 * Schedules and manages widget renders (class v)
 */
class WidgetRenderScheduler {
  private renderFn: () => Promise<void>
  private wait: () => Promise<void>
  private currentTask: Promise<void> | null
  private isRendering: boolean
  private needsReschedule: boolean
  private shouldReschedule: boolean

  constructor(renderFn: () => Promise<void>, wait: () => Promise<void> = waitForNextFrame) {
    this.renderFn = renderFn
    this.wait = wait
    this.currentTask = null
    this.isRendering = false
    this.needsReschedule = true
    this.shouldReschedule = true
  }

  /**
   * Schedule a render (schedule)
   */
  schedule(): void {
    z.renderWasScheduled()
    if (this.isRendering) {
      this.needsReschedule = true
    }
    if (!this.currentTask) {
      this.needsReschedule = false
      this.currentTask = (async () => {
        await this.wait()
        if (this.shouldReschedule) {
          this.isRendering = true
          await this.renderFn()
          this.isRendering = false
          this.currentTask = null
          if (this.needsReschedule && this.shouldReschedule) {
            this.schedule()
          }
        }
      })()
    }
  }

  /**
   * Wait for the current render to finish (waitForFinish)
   */
  async waitForFinish(): Promise<boolean> {
    if (!this.currentTask)
      return false
    while (this.currentTask) await this.currentTask
    return true
  }

  /**
   * Get the current render task (getCurrentTask)
   */
  getCurrentTask(): Promise<void> | null {
    return this.currentTask
  }

  /**
   * Prevent further rescheduling (clear)
   */
  clear(): void {
    this.shouldReschedule = false
  }
}

// Widget render state tracking sets (x, S)
const widgetManagers = new Set<WidgetManager>()
const renderingWidgets = new Set<string>()

/**
 * Track widget rendering state (w)
 */
function setWidgetRendering(widgetId: string, isRendering: boolean): void {
  if (isRendering) {
    renderingWidgets.add(widgetId)
  }
  else {
    renderingWidgets.delete(widgetId)
  }
}

/**
 * Check if a widget is rendering ($$C1)
 */
export function isWidgetRendering(widgetId: string): boolean {
  return renderingWidgets.has(widgetId)
}

interface WidgetRenderingState {
  renderMode: 'current' | 'previous'
  propertyMenuHookCalled: boolean
  propertyMenuCallbackHandle: any
  propertyMenuDefinition: any[]
  effectManager: WidgetEffectManager
  oldVRoot: any
  stickableState: {
    isStickable: boolean | null
    stuckStatusChangedHandle: any
    attachedStickablesChangedHandle: any
  }
  shouldHideCursors: boolean | null
  renderScheduler: WidgetRenderScheduler
}

interface LifecycleCommand {
  name: string
  isInsert?: boolean
}

interface WaitForFinishOptions {
  fromClosePlugin?: boolean
}

/**
 * WidgetManager manages the lifecycle and rendering of a widget (class $$T0)
 */
export class WidgetManager {
  private vm: any
  private pluginId: string
  private runtimeBridge: any
  private widgetFunction: any
  private currentWidgetId: string | null
  private renderingStateById: Map<string, WidgetRenderingState>
  private promiseManager: WidgetPromiseManager
  private lifecycleCommand: LifecycleCommand | null
  private isCanceled: boolean
  private isCleared: boolean
  private shutdownActions: (() => void)[]
  private reenableUnsafeGlobalsHandle?: any

  constructor(vm: any, pluginId: string, runtimeBridge: any) {
    this.vm = vm
    this.pluginId = pluginId
    this.runtimeBridge = runtimeBridge
    this.widgetFunction = undefined
    this.currentWidgetId = null
    this.renderingStateById = new Map()
    this.promiseManager = new WidgetPromiseManager()
    this.lifecycleCommand = null
    this.isCanceled = false
    this.isCleared = false
    this.shutdownActions = []
    widgetManagers.add(this)
  }

  /**
   * Number of tracked promises (numTrackedPromises)
   */
  get numTrackedPromises() {
    return this.promiseManager.numPromises
  }

  /**
   * Track a promise (trackPromise)
   */
  trackPromise(promise: Promise<any>): Promise<void> {
    return this.promiseManager.manage(promise)
  }

  /**
   * Is a widget function currently running? (isRunningWidgetFunction)
   */
  isRunningWidgetFunction(): boolean {
    return !!this.currentWidgetId
  }

  /**
   * Run a function with synced state context (runSyncedStateDefaultValueFunction)
   */
  runSyncedStateDefaultValueFunction(fn: () => void): void {
    const prevId = this.currentWidgetId
    this.currentWidgetId = null
    this.reenableUnsafeGlobals()
    fn()
    this.currentWidgetId = prevId
    this.disableUnsafeGlobalsForRender()
  }

  /**
   * Get the current widget node id (getCurrentWidgetNodeId)
   */
  getCurrentWidgetNodeId(): string {
    if (!this.currentWidgetId)
      throw new Error('Not actively rendering widget')
    return this.currentWidgetId
  }

  /**
   * Get the plugin runtime bridge (getPluginRuntimeBridge)
   */
  getPluginRuntimeBridge(): any {
    return this.runtimeBridge
  }

  /**
   * Get rendering state for a widget (getRenderingState)
   */
  getRenderingState(widgetId: string): WidgetRenderingState {
    const state = this.renderingStateById.get(widgetId)
    if (!state)
      throw new Error('Widget rendering state not found')
    return state
  }

  /**
   * Register the widget function (registerWidgetFunction)
   */
  registerWidgetFunction(fn: any): void {
    this.vm.retainHandle(fn)
    this.widgetFunction = fn
  }

  /**
   * Add an effect for the current widget (addEffect)
   */
  addEffect(effect: any): void {
    if (this.lifecycleCommand?.name === 'rerender')
      return
    const widgetId = this.getCurrentWidgetNodeId()
    this.getRenderingState(widgetId).effectManager.addEffect(effect)
  }

  /**
   * Run effects for a widget (runEffects)
   */
  runEffects(widgetId: string): void {
    this.getRenderingState(widgetId).effectManager.runEffects()
  }

  /**
   * Schedule a render for a widget (scheduleRender)
   */
  scheduleRender(widgetId: string, _force: boolean = false): void {
    if (!this.widgetFunction)
      throw new Error('Widget has not been registered')
    this.initializeRenderingState(widgetId)
    this.getRenderingState(widgetId).renderScheduler.schedule()
  }

  /**
   * Maybe run effects for a widget (maybeRunEffects)
   */
  maybeRunEffects(widgetId: string): void {
    const effectManager = this.getRenderingState(widgetId).effectManager
    if (!effectManager.hasRunEffects)
      effectManager.runEffects()
  }

  /**
   * Set the property menu for the current widget (setPropertyMenu)
   */
  setPropertyMenu({
    propertyMenuDefinitionHandle,
    propertyMenuCallbackHandle,
  }: {
    propertyMenuDefinitionHandle: any
    propertyMenuCallbackHandle: any
  }): void {
    const widgetId = this.getCurrentWidgetNodeId()
    const state = this.getRenderingState(widgetId)
    if (state.propertyMenuHookCalled)
      throw new InternalError('usePropertyMenu called multiple times')
    state.propertyMenuHookCalled = true
    const definition = BK({
      vm: this.vm,
      handle: propertyMenuDefinitionHandle,
      schema: Ed,
      property: 'usePropertyMenu.args[0]',
    }).map((item) => {
      if (item.itemType === 'dropdown') {
        const options = item.options.map(opt => ({
          option: opt.option,
          tooltip: opt.label,
        }))
        return {
          ...item,
          options,
        }
      }
      return item
    })
    definition.forEach((item, idx) => OV(item, idx))
    state.propertyMenuDefinition = definition
    if (!this.vm.isFunction(propertyMenuCallbackHandle))
      throw new InternalError('usePropertyMenu.args[1] must be a function')
    this.vm.retainHandle(propertyMenuCallbackHandle)
    state.propertyMenuCallbackHandle = propertyMenuCallbackHandle
  }

  /**
   * Set stickable state for the current widget (setIsStickable)
   */
  setIsStickable(callback?: any): void {
    const widgetId = this.getCurrentWidgetNodeId()
    const state = this.getRenderingState(widgetId)
    if (state.stickableState.isStickable !== null) {
      throw new InternalError('useStickable or useStickableHost called multiple times. You can only call one of them once per widget.')
    }
    state.stickableState.isStickable = true
    if (this.vm.isFunction(callback)) {
      state.stickableState.stuckStatusChangedHandle = callback
      this.vm.retainHandle(callback)
    }
  }

  /**
   * Set stickable host state for the current widget (setIsStickableHost)
   */
  setIsStickableHost(callback?: any): void {
    const widgetId = this.getCurrentWidgetNodeId()
    const state = this.getRenderingState(widgetId)
    if (state.stickableState.isStickable !== null) {
      throw new InternalError('useStickable or useStickableHost called multiple times. You can only call one of them once per widget.')
    }
    state.stickableState.isStickable = false
    if (this.vm.isFunction(callback)) {
      state.stickableState.attachedStickablesChangedHandle = callback
      this.vm.retainHandle(callback)
    }
  }

  /**
   * Set whether to hide cursors for the current widget (setShouldHideCursors)
   */
  setShouldHideCursors(handle: any): void {
    const widgetId = this.getCurrentWidgetNodeId()
    const state = this.getRenderingState(widgetId)
    if (state.shouldHideCursors !== null) {
      throw new InternalError('useHideCursors called multiple times. You can only call it once per widget.')
    }
    const result = BK({
      vm: this.vm,
      handle,
      schema: By.bool,
      property: 'useHideCursors.args[0]',
    })
    state.shouldHideCursors = result
  }

  /**
   * Get property menu definition for a widget (getPropertyMenuDefinition)
   */
  getPropertyMenuDefinition(widgetId: string): any[] {
    return this.getRenderingState(widgetId).propertyMenuDefinition || []
  }

  /**
   * Get property menu callback handle for a widget (getPropertyMenuCallbackHandle)
   */
  getPropertyMenuCallbackHandle(widgetId: string): any {
    return this.getRenderingState(widgetId).propertyMenuCallbackHandle || null
  }

  /**
   * Get render mode for a widget (getRenderMode)
   */
  getRenderMode(widgetId: string): 'current' | 'previous' {
    return this.getRenderingState(widgetId).renderMode
  }

  /**
   * Initialize rendering state for a widget (initializeRenderingState)
   */
  initializeRenderingState(widgetId: string): void {
    if (!this.renderingStateById.get(widgetId)) {
      const state = {
        renderMode: 'current' as const,
        propertyMenuHookCalled: false,
        propertyMenuCallbackHandle: null,
        propertyMenuDefinition: [],
        effectManager: new WidgetEffectManager(this.vm),
        oldVRoot: null as { rootNode: any, syncedState: any } | null,
        stickableState: {
          isStickable: null,
          stuckStatusChangedHandle: null,
          attachedStickablesChangedHandle: null,
        },
        shouldHideCursors: null,
        renderScheduler: new WidgetRenderScheduler(async () => {
          try {
            const node = getSceneGraphInstance().get(widgetId)
            if (!node)
              return
            let renderResult: { rootNode: any, syncedState: any } | null = null
            const pluginManifest = Gc(node)
            const allowedDomains = pluginManifest?.manifest.networkAccess?.allowedDomains ?? gH
            const {
              imgInfoMap,
              vRoot,
            } = await qg(() => {
              if (!getSceneGraphInstance().get(widgetId))
                throw new AuthError('Could not find widget node in renderWidgetTree')
              if (!renderResult || !c2(renderResult.syncedState, node.getWidgetSyncedState())) {
                renderResult = this.renderWidgetTree(widgetId, 'current') as { rootNode: any, syncedState: any }
              }
              return renderResult
            }, this.getPluginRuntimeBridge(), allowedDomains)
            l7.plugin('widget-rerender', () => {
              if (state.oldVRoot && !c2(state.oldVRoot.syncedState, node.renderedSyncedState)) {
                const renderTreeResult = this.renderWidgetTree(widgetId, 'previous')
                if (!(renderTreeResult instanceof RequestError)) {
                  state.oldVRoot = renderTreeResult
                }
              }
              const start = window.performance.now()
              setWidgetRendering(widgetId, true)
              Lb({
                widgetNodeID: widgetId,
                newVRoot: vRoot,
                oldVRoot: state.oldVRoot,
                propertyMenuDefinition: this.getPropertyMenuDefinition(widgetId),
                runtime: this.getPluginRuntimeBridge(),
                imgInfoMap,
                stickableState: state.stickableState,
                shouldHideCursors: state.shouldHideCursors,
              })
              node.renderedSyncedState = node.getWidgetSyncedState()
              const duration = window.performance.now() - start
              state.oldVRoot = renderResult
              z.didReconciliation(duration)
            })
            this.runEffects(widgetId)
          }
          catch (err: any) {
            if (err instanceof AuthError)
              return
            let msg = ''
            if (err instanceof InternalError || isDevEnvironment()) {
              console.error(err)
              msg = err.message
            }
            else if (!(err instanceof RequestError)) {
              if (typeof err === 'string') {
                const errorObj = new Error(err)
                $D(ServiceCategories.EXTENSIBILITY, errorObj)
              }
              else {
                $D(ServiceCategories.EXTENSIBILITY, err)
              }
            }
            if (this.isFirstPartyWidget()) {
              $D(ServiceCategories.EXTENSIBILITY, err)
            }
            else {
              this.vm.evalTrustedCode(`throw "An error occurred while running this widget ${msg ? `- '${msg}'` : ''}"`)
            }
            if (this.lifecycleCommand?.name === 'mount' && this.lifecycleCommand?.isInsert) {
              const node = getSceneGraphInstance().get(widgetId)
              if (node) {
                l7.plugin('remove-widget-after-first-render', () => node.removeWidgetWithoutSafetyChecks())
              }
            }
          }
          finally {
            requestAnimationFrame(() => {
              setWidgetRendering(widgetId, false)
            })
          }
        }),
      }
      this.renderingStateById.set(widgetId, state)
    }
  }

  /**
   * Is this a first-party widget? (isFirstPartyWidget)
   */
  isFirstPartyWidget(): boolean {
    return Vi(this.pluginId)
  }

  /**
   * Disable unsafe globals for widget render (disableUnsafeGlobalsForRender)
   */
  disableUnsafeGlobalsForRender(): void {
    if (this.isFirstPartyWidget())
      return
    const result = this.vm.evalTrustedCode(`
      (() => {
        let originalRand = Math.random
        Math.random = () => {
          throw new Error("Math.random is not allowed in a widget's render function")
        }
        return () => {Math.random = originalRand}
      })()
    `)
    assert(result.type === 'SUCCESS')
    this.vm.retainHandle(result.handle)
    this.reenableUnsafeGlobalsHandle = result.handle
  }

  /**
   * Re-enable unsafe globals after render (reenableUnsafeGlobals)
   */
  reenableUnsafeGlobals(): void {
    if (this.isValidFunctionHandle(this.reenableUnsafeGlobalsHandle)) {
      this.vm.callFunction(this.reenableUnsafeGlobalsHandle, this.vm.undefined)
      this.vm.releaseHandle(this.reenableUnsafeGlobalsHandle)
      this.reenableUnsafeGlobalsHandle = undefined
    }
  }

  /**
   * Render the widget tree (renderWidgetTree)
   */
  renderWidgetTree(widgetId: string, renderMode: 'current' | 'previous'): { rootNode: any, syncedState: any } | RequestError {
    if (!this.widgetFunction)
      throw new Error('Widget has not been registered')
    try {
      this.initializeRenderingState(widgetId)
      const state = this.getRenderingState(widgetId)
      this.releaseRenderingStateHandles(state)
      state.effectManager.clear()
      state.propertyMenuHookCalled = false
      state.propertyMenuDefinition = []
      state.propertyMenuCallbackHandle = null
      state.renderMode = renderMode
      state.shouldHideCursors = null
      state.stickableState = {
        isStickable: null,
        attachedStickablesChangedHandle: null,
        stuckStatusChangedHandle: null,
      }
      const start = window.performance.now()
      this.currentWidgetId = widgetId
      const node = getSceneGraphInstance().get(widgetId)
      if (!node) {
        throw new Error(`Widget node not found for ID: ${widgetId}`)
      }
      const syncedState = renderMode === 'current' ? node.getWidgetSyncedState() : node.renderedSyncedState
      const isLocalWidget = !node.widgetVersionId
      this.disableUnsafeGlobalsForRender()
      const result = this.vm.callFunction(this.widgetFunction, this.vm.undefined)
      this.reenableUnsafeGlobals()
      this.currentWidgetId = null
      if (result.type === 'FAILURE') {
        this.vm.releaseHandle(this.widgetFunction)
        return new RequestError(result.error)
      }
      const handle = result.handle
      const afterCall = window.performance.now()
      const unwrapped = this.vm.deepUnwrap(handle, true)
      const pluginManifest = Gc(node)
      const widgetApiVersion = pluginManifest?.manifest?.widgetApi ?? '1.0.0'
      const rootNode = P5(unwrapped, {
        isLocalWidget,
        widgetNodeID: widgetId,
        pluginID: node.widgetId,
        widgetVersionID: node.widgetVersionId,
        widgetName: node.name,
        widgetApiVersion,
        enableFullJsx: false,
      })
      const afterRender = window.performance.now()
      z.didRender(afterRender - start, afterRender - afterCall)
      if (pluginManifest && pluginManifest.name) {
        l7.plugin('set-widget-name', () => {
          node.widgetName = pluginManifest.name
        })
      }
      return {
        rootNode,
        syncedState,
      }
    }
    finally {
      this.currentWidgetId = null
      this.getRenderingState(widgetId).renderMode = 'current'
    }
  }

  /**
   * Wait for all renders and promises to finish (waitForFinish)
   */
  async waitForFinish(options: WaitForFinishOptions = {
    fromClosePlugin: false,
  }): Promise<void> {
    if (this.isCanceled)
      return
    let pending = true
    while (pending) {
      pending = false
      for (const [, {
        renderScheduler,
      }] of this.renderingStateById) {
        pending = (await renderScheduler.waitForFinish()) || pending
      }
      if (!options?.fromClosePlugin) {
        pending = (await this.promiseManager.waitForFinish()) || pending
      }
    }
  }

  /**
   * Clear all widget state and shutdown (clear)
   */
  clear(): void {
    if (!this.isCleared) {
      this.isCleared = true
      if (this.isValidFunctionHandle(this.widgetFunction)) {
        this.vm.releaseHandle(this.widgetFunction)
      }
      for (const [, state] of this.renderingStateById) {
        state.renderScheduler.clear()
        state.effectManager.clear()
        this.releaseRenderingStateHandles(state)
      }
      if (this.isValidFunctionHandle(this.reenableUnsafeGlobalsHandle)) {
        this.vm.releaseHandle(this.reenableUnsafeGlobalsHandle)
      }
      this.renderingStateById = new Map()
      this.currentWidgetId = null
      this.widgetFunction = undefined
      widgetManagers.delete(this)
      this.runShutdownActions()
    }
  }

  /**
   * Run all registered shutdown actions (runShutdownActions)
   */
  runShutdownActions(): void {
    let firstError: any = null
    for (const action of this.shutdownActions) {
      try {
        action()
      }
      catch (err) {
        if (!firstError)
          firstError = err
        console.error(`runShutdownActions error: ${err}`)
      }
    }
    this.shutdownActions = []
    if (firstError)
      throw firstError
  }

  /**
   * Set the old vRoot for a widget (setOldVRoot)
   */
  setOldVRoot(widgetId: string, vRoot: any): void {
    this.getRenderingState(widgetId).oldVRoot = vRoot
  }

  /**
   * Get the current lifecycle command (getLifecycleCommand)
   */
  getLifecycleCommand(): LifecycleCommand | null {
    return this.lifecycleCommand
  }

  /**
   * Set the lifecycle command (setLifecycleCommand)
   */
  setLifecycleCommand(cmd: LifecycleCommand | null): void {
    this.lifecycleCommand = cmd
  }

  /**
   * Add a shutdown action (addShutdownAction)
   */
  addShutdownAction(action: () => void): void {
    if (this.isCleared)
      throw new Error('Cannot add shutdown action after widget manager has been cleared')
    this.shutdownActions.push(action)
  }

  /**
   * Check if a function handle is valid (isValidFunctionHandle)
   */
  isValidFunctionHandle(handle: any): boolean {
    return !!(handle && !this.vm.isDestroyed() && this.vm.isFunction(handle))
  }

  /**
   * Release handles for a rendering state (releaseRenderingStateHandles)
   */
  releaseRenderingStateHandles(state: WidgetRenderingState): void {
    const t = state.propertyMenuCallbackHandle
    if (this.isValidFunctionHandle(t))
      this.vm.releaseHandle(t)
    const {
      attachedStickablesChangedHandle,
      stuckStatusChangedHandle,
    } = state.stickableState
    if (this.isValidFunctionHandle(attachedStickablesChangedHandle))
      this.vm.releaseHandle(attachedStickablesChangedHandle)
    if (this.isValidFunctionHandle(stuckStatusChangedHandle))
      this.vm.releaseHandle(stuckStatusChangedHandle)
  }
}

// Exported names for compatibility
export const SS = WidgetManager
export const Dc = isWidgetRendering
