import { noop } from 'lodash-es'
import { useCallback, useEffect } from 'react'
import { i as _$$i } from '../905/46262'
import { waitForAnimationFrame } from '../905/236856'
import { debugState } from '../905/407919'
import { applyCodeExtensionPreferences } from '../905/515076'
import { logger } from '../905/651849'
import { getCurrentGRAtom, handlePluginError, pluginState } from '../905/753206'
import { isFullscreenDevHandoffView } from '../905/782918'

import { bT } from '../905/851937'
import { throwTypeError } from '../figma_app/465776'
import { selectCurrentFile } from '../figma_app/516028'
import { f$, hY, n4 } from '../figma_app/603466'
import { wH } from '../figma_app/680166'
import { getProductAccessTypeOrDefault } from '../figma_app/765689'
import { isInteractionPathCheck } from '../figma_app/897289'

/**
 * PluginManager class (originally 'y')
 * Manages plugin run queue, state, and upgrade handling.
 */
export class PluginManager {
  static instance: PluginManager = new PluginManager();
  static debug: boolean = false;

  runQueue: Array<RunState> = [];
  currentRunState: RunState | null = null;
  MAX_RESOLVE_ITERATIONS: number = 10;
  upgradeHandler: UpgradeHandler | null = null;

  /**
   * Sets the upgrade handler function.
   * @param handler UpgradeHandler
   */
  setUpgradeHandler(handler: UpgradeHandler | null): void {
    this.upgradeHandler = handler;
  }

  /**
   * Handles plugin upgrade using the upgrade handler.
   * @param args UpgradeArgs
   */
  handleUpgrade(args: UpgradeArgs): void {
    if (this.upgradeHandler) {
      this.upgradeHandler(args);
    }
  }

  /**
   * Enqueues a plugin run task.
   * @param params EnqueueParams
   * @returns Promise<any>
   */
  enqueue(params: EnqueueParams): Promise<any> {
    const { runPluginArgs, onStart, mode, reuseExistingRunState = true } = params;
    const { plugin } = runPluginArgs;
    if (!isFullscreenDevHandoffView(debugState.getState().selectedView)) {
      return bT(runPluginArgs);
    }
    if (plugin.manifest.containsWidget) {
      throw new Error('Cannot enqueue a plugin that contains a widget');
    }
    const runTask = this.createTask(onStart);
    const existingRunState = this.findExistingRunState(params);
    if (reuseExistingRunState && existingRunState) {
      this.log('enqueue', 'Found existing run state, pushing runTask onto existing runState', {
        existingRunState,
        runTask,
      });
      existingRunState.runTasks.push(runTask);
      if (
        existingRunState === this.currentRunState &&
        existingRunState.status === 'settled'
      ) {
        this.resolveAllPromises(this.currentRunState);
      }
    } else {
      const runState: RunState = {
        runPluginArgs,
        runTasks: [runTask],
        mode,
        status: 'idle',
      };
      this.log('enqueue', 'Creating new run state and adding to queue', {
        runState,
      });
      this.addToQueue(runState);
      this.runNextPlugin();
    }
    return runTask.promise;
  }

  /**
   * Gets the current run status or null.
   * @returns string | null
   */
  getCurrentRunStatusOrNull(): string | null {
    return this.currentRunState?.status ?? null;
  }

  /**
   * Gets the length of the run queue.
   * @returns number
   */
  getRunQueueLength(): number {
    return this.runQueue.length;
  }

  /**
   * Runs the next plugin in the queue.
   */
  async runNextPlugin(): Promise<void> {
    await this.maybeTerminatePluginBeforeRun();
    if (getCurrentGRAtom()) return;
    const runState = this.runQueue.shift();
    if (!runState) return;
    this.currentRunState = runState;
    this.prepPluginForRun(runState.runPluginArgs.plugin);
    const pluginPromise = this.runPlugin(runState);
    await this.resolveAllPromises(runState);
    await pluginPromise;
    this.log('runNextPlugin', 'Finished running plugin', { runState });
    this.runNextPlugin();
  }

  /**
   * Runs the plugin for the given run state.
   * @param runState RunState
   * @returns Promise<any>
   */
  runPlugin(runState: RunState): Promise<any> {
    this.log('runNextPlugin', 'Running plugin', { runState });
    const { runPluginArgs } = runState;
    return bT(runPluginArgs);
  }

  /**
   * Sets the runPlugin function for testing.
   * @param fn Function
   */
  setRunPluginForTest(fn: (runState: RunState) => Promise<any>): void {
    if (!isInteractionPathCheck()) {
      throw new Error('Cannot set run plugin for test when not running interaction tests');
    }
    this.runPlugin = fn;
  }

  /**
   * Creates a run task.
   * @param onStart Function
   * @returns RunTask
   */
  createTask(onStart?: () => Promise<any>): RunTask {
    let resolveFn: (value?: any) => void = () => {};
    let rejectFn: (reason?: any) => void = () => {};
    return {
      promise: new Promise((resolve, reject) => {
        resolveFn = resolve;
        rejectFn = reject;
      }),
      resolve: resolveFn,
      reject: rejectFn,
      onStart,
    };
  }

  /**
   * Resolves a single run task promise.
   * @param task RunTask
   */
  async resolvePromise(task: RunTask): Promise<void> {
    try {
      const result = await task.onStart?.();
      task.resolve(result);
    } catch (err) {
      task.reject(err);
    }
  }

  /**
   * Resolves all promises for a run state.
   * @param runState RunState
   */
  async resolveAllPromises(runState: RunState): Promise<void> {
    this.log('runNextPlugin', 'Resolving all promises', { runState });
    runState.status = 'resolving';
    let iterations = 0;
    while (iterations < this.MAX_RESOLVE_ITERATIONS) {
      const tasks = runState.runTasks;
      if (tasks.length === 0) break;
      runState.runTasks = [];
      await Promise.allSettled(tasks.map(task => this.resolvePromise(task)));
      iterations++;
    }
    await this.maybeTerminatePluginAfterRunSettled(runState);
    runState.status = 'settled';
    this.log('runNextPlugin', 'Resolved all promises', { runState });
  }

  /**
   * Adds a run state to the queue.
   * @param runState RunState
   */
  addToQueue(runState: RunState): void {
    this.log('addToQueue', 'Adding to queue', { toAdd: runState });
    switch (runState.mode) {
      case 'run-forever':
      case 'run-and-terminate':
        this.runQueue.push(runState);
        break;
      default:
        throwTypeError(runState.mode);
    }
  }

  /**
   * Terminates plugin before running next.
   */
  async maybeTerminatePluginBeforeRun(): Promise<void> {
    const atom = getCurrentGRAtom();
    if (
      (!!atom !== !!this.currentRunState ||
        (this.currentRunState?.status === 'settled' &&
          this.currentRunState?.runPluginArgs.plugin.plugin_id === atom?.plugin_id))
    ) {
      this.log('maybeTerminatePluginBeforeRun', 'Terminating plugin');
      await this.terminatePlugin();
    }
  }

  /**
   * Terminates plugin after run settled.
   * @param runState RunState
   */
  async maybeTerminatePluginAfterRunSettled(runState: RunState): Promise<void> {
    this.log('maybeTerminatePluginAfterRunSettled', 'Maybe terminating plugin', {
      toMaybeTerminate: runState,
    });
    switch (runState.mode) {
      case 'run-forever':
        if (this.runQueue.length > 0) {
          await this.terminatePlugin();
        }
        break;
      case 'run-and-terminate':
        await this.terminatePlugin();
        break;
      default:
        throwTypeError(runState.mode);
    }
  }

  /**
   * Terminates the current plugin.
   */
  async terminatePlugin(): Promise<void> {
    this.log('terminatePlugin', 'Terminating plugin');
    this.currentRunState = null;
    await handlePluginError();
    await waitForAnimationFrame();
  }

  /**
   * Finds an existing run state matching plugin and mode.
   * @param params FindRunStateParams
   * @returns RunState | undefined
   */
  findExistingRunState(params: FindRunStateParams): RunState | undefined {
    const currentPluginId = this.currentRunState?.runPluginArgs.plugin.plugin_id;
    if (
      currentPluginId === params.runPluginArgs.plugin.plugin_id &&
      getCurrentGRAtom()?.plugin_id === currentPluginId
    ) {
      return this.currentRunState;
    }
    return this.runQueue.find(
      runState =>
        runState.runPluginArgs.plugin.plugin_id === params.runPluginArgs.plugin.plugin_id &&
        runState.mode === params.mode
    );
  }

  /**
   * Checks if a plugin is currently running.
   * @param params FindRunStateParams
   * @returns boolean
   */
  isCurrentlyRunning(params: FindRunStateParams): boolean {
    return !!this.findExistingRunState(params);
  }

  /**
   * Prepares plugin for run.
   * @param plugin Plugin
   */
  prepPluginForRun(plugin: Plugin): void {
    this.log('prepPluginForRun', 'Prepping plugin for run', { plugin });
    applyCodeExtensionPreferences(plugin, null);
    f$();
    n4();
    hY();
  }

  /**
   * Logs debug information if debug is enabled.
   * @param method string
   * @param message string
   * @param extra object
   */
  log(method: string, message: string, extra: object = {}): void {
    if (!PluginManager.debug) return;
    const info = {
      currentRunState: this.currentRunState,
      runQueue: this.runQueue,
      runningPluginState: pluginState,
      ...extra,
    };
    logger.log('[PluginManager]', `[${method}]`, message, info);
  }
}

// Types for PluginManager
interface Plugin {
  plugin_id: string;
  manifest: {
    containsWidget: boolean;
  };
}

interface RunPluginArgs {
  plugin: Plugin;
  command?: string;
  queryMode?: boolean;
  triggeredFrom?: string;
  openFileKey?: string;
  isWidget?: boolean;
  runMode?: 'default' | 'headless';
}

type RunMode = 'run-forever' | 'run-and-terminate';

interface RunTask {
  promise: Promise<any>;
  resolve: (value?: any) => void;
  reject: (reason?: any) => void;
  onStart?: () => Promise<any>;
}

interface RunState {
  runPluginArgs: RunPluginArgs;
  runTasks: RunTask[];
  mode: RunMode;
  status: 'idle' | 'resolving' | 'settled';
}

interface EnqueueParams {
  runPluginArgs: RunPluginArgs;
  onStart?: () => Promise<any>;
  mode: RunMode;
  reuseExistingRunState?: boolean;
}

interface FindRunStateParams {
  runPluginArgs: RunPluginArgs;
  mode: RunMode;
}

type UpgradeHandler = (args: UpgradeArgs) => void;
interface UpgradeArgs {
  afterUpgradeCallback: () => void;
  licenseType: string;
  upgradeReason: string;
  entryPoint: any;
}

/**
 * useUpgradeHandler (originally $$T1)
 * Sets up the upgrade handler for the PluginManager.
 */
export function useUpgradeHandler(): void {
  const file = selectCurrentFile();
  const { handleUpgrade } = wH({
    folderId: file?.folderId || null,
    fileInBrowser: {
      key: file?.key || '',
      editorType: file?.editorType || null,
    },
  });

  const upgradeCallback = useCallback(
    (entryPoint: any) => {
      if (!file) return;
      const licenseType = getProductAccessTypeOrDefault(file.editorType);
      handleUpgrade({
        afterUpgradeCallback: noop,
        licenseType,
        upgradeReason: _$$i.EXTENSIONS,
        entryPoint,
      })({});
    },
    [file, handleUpgrade]
  );

  useEffect(() => {
    PluginManager.instance.setUpgradeHandler(upgradeCallback);
    return () => {
      PluginManager.instance.setUpgradeHandler(null);
    };
  }, [upgradeCallback]);
}

// Export refactored names
// export const YJ = PluginManager;

export const R = PluginManager;
export const x = useUpgradeHandler;
