// Refactored from /Users/allen/sigma-main/src/905/261467.ts

import type { IPoint } from '../905/736624';
import type { Fn } from '../../types/global';
import { R as _$$R } from '../905/22352';
import { z4 } from '../905/37051';
import { d as _$$d } from '../905/68441';
import { VisualBellActions } from '../905/302958';
import { debugState } from '../905/407919';
import { dequeuePluginStatus, formatPluginName, notifyPluginStatus } from '../905/571565';
import { VisualBellIcon } from '../905/576487';
import { getLocalStorage } from '../905/657224';
import { Y } from '../905/696438';
import { Point } from '../905/736624';
import { uF } from '../905/748636';
import { D as _$$D } from '../905/771179';
import { $A } from '../905/782918';
import { PLUGIN_TIMEOUT_MS, PluginIframeMode, PLUGIN_RETRY_DELAY_MS } from '../905/968269';
import { A as _$$A } from '../1617/568132';
import { W_ } from '../figma_app/8833';
import { atomStoreManager } from '../figma_app/27355';
import { tui } from '../figma_app/27776';
import { $g, Nd } from '../figma_app/62612';
import { sX } from '../figma_app/212767';
import { hasInspectOrPanelCapability } from '../figma_app/300692';
import { fullscreenValue } from '../figma_app/455680';
import { d4 } from '../figma_app/474636';
import { FP } from '../figma_app/580736';
import { parsePxNumber } from '../figma_app/783094';

/**
 * Clamp a value between min and max.
 * @param value - The value to clamp.
 * @param min - Minimum allowed value.
 * @param max - Maximum allowed value.
 * @returns The clamped value.
 * (Original: R)
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}
const PLUGIN_POSITIONS_KEY = 'plugin-positions';
const MIN_WIDTH = 70;
const WIDTH_PADDING = 50;
const HEIGHT_PADDING = uF;
const DEFAULT_IFRAME_WIDTH = PLUGIN_TIMEOUT_MS;
const DEFAULT_IFRAME_HEIGHT = PLUGIN_RETRY_DELAY_MS;
const INSPECT_PANEL_ID = PluginIframeMode.INSPECT;
const BUZZ_LEFT_PANEL_ID = PluginIframeMode.BUZZ_LEFT_PANEL;
const CODEGEN_DEFAULT_POSITION = 'codegen-default';
const tuiPx = parsePxNumber(tui);

/**
 * Modal position type.
 */
export type ModalPosition = 'default' | 'last' | typeof CODEGEN_DEFAULT_POSITION | {
  x: number;
  y: number;
} | undefined;

/**
 * Plugin UI Manager class.
 * (Original: N)
 */
export class PluginUIManager {
  static instance: PluginUIManager | null = null;
  vmType: string;
  pluginID: string;
  titleIconURL: string;
  title: string;
  permissions: string[];
  isWidget: boolean;
  widgetCommand: any;
  shouldShowVisualBell: boolean;
  cancelCallback: Fn;
  messageHandler: Fn;
  allowedDomains: string[];
  isLocal: boolean;
  triggeredFrom: string;
  capabilities: string[];
  outerIframe: any;
  innerIframe: any;
  innerIframeHtml: string;
  showingInnerIframe: boolean;
  iframeTitle: string;
  iframeWidth: number;
  iframeHeight: number;
  iframeInitialPosition: Point | null;
  includeThemeColors: boolean;
  lastNotificationTimeout: number;
  hideVisibleUI: boolean;
  iframeId: string | null;
  timeout: any;

  /**
   * Create a new PluginUIManager.
   */
  constructor(vmType: string, pluginID: string, titleIconURL: string, title: string, permissions: string[], isWidget: boolean, widgetCommand: any, shouldShowVisualBell: boolean, cancelCallback: Fn, messageHandler: Fn, allowedDomains: string[], isLocal: boolean, triggeredFrom: string, capabilities: string[]) {
    this.vmType = vmType;
    this.pluginID = pluginID;
    this.titleIconURL = titleIconURL;
    this.title = title;
    this.permissions = permissions;
    this.isWidget = isWidget;
    this.widgetCommand = widgetCommand;
    this.shouldShowVisualBell = shouldShowVisualBell;
    this.cancelCallback = cancelCallback;
    this.messageHandler = messageHandler;
    this.allowedDomains = allowedDomains;
    this.isLocal = isLocal;
    this.triggeredFrom = triggeredFrom;
    this.capabilities = capabilities;
    this.outerIframe = null;
    this.innerIframe = null;
    this.innerIframeHtml = '';
    this.showingInnerIframe = false;
    this.iframeTitle = '';
    this.iframeWidth = DEFAULT_IFRAME_WIDTH;
    this.iframeHeight = DEFAULT_IFRAME_HEIGHT;
    this.iframeInitialPosition = null;
    this.includeThemeColors = false;
    this.lastNotificationTimeout = -1;
    this.hideVisibleUI = false;
    this.iframeId = null;
    this.timeout = null;
    PluginUIManager.instance = this;
    this.showProgress();
  }

  /**
   * Get the singleton instance.
   */
  static getInstance(): PluginUIManager | null {
    return PluginUIManager.instance;
  }

  /**
   * Store the modal position in local storage.
   * (Original: storeModalPosition)
   */
  storeModalPosition = (pos: Point): void => {
    const storage = getLocalStorage();
    if (storage) {
      let positions: Record<string, {
        x: number;
        y: number;
      }> = {};
      try {
        positions = JSON.parse(storage.getItem(PLUGIN_POSITIONS_KEY) || '');
      } catch {}
      if (!positions || typeof positions !== 'object') positions = {};
      positions[this.pluginID] = {
        x: pos.x,
        y: pos.y
      };
      storage.setItem(PLUGIN_POSITIONS_KEY, JSON.stringify(positions));
    }
    this.iframeInitialPosition = pos;
    this.updateUI();
  };

  /**
   * Tear down the UI and clean up.
   * (Original: tearDown)
   */
  tearDown = (_e: any): void => {
    this._destroyIframe();
    if (this.timeout) clearTimeout(this.timeout);
    this.hideProgress();
    this.cancelNonErrorPersistentVisualBells();
    this.cancelAllCustomNotifyVisualBells();
  };

  /**
   * Get the most recent context menu click position.
   * (Original: getMostRecentContextMenuClickPosition)
   */
  getMostRecentContextMenuClickPosition = ({
    dropdownShown
  }: {
    dropdownShown: any;
  }): IPoint | null => dropdownShown && dropdownShown.type === W_ && dropdownShown.data?.clientX != null && dropdownShown.data?.clientY != null ? {
    x: dropdownShown.data.clientX,
    y: dropdownShown.data.clientY
  } : null;

  /**
   * Update the UI state.
   * (Original: updateUI)
   */
  updateUI(): void {
    atomStoreManager.set(_$$d, {
      titleIconURL: this.titleIconURL,
      titleIconSvgSrc: this.titleIconURL ? undefined : _$$A,
      title: this.iframeTitle || formatPluginName(this.title, this.vmType)
    });
    if (this.iframeId === PluginIframeMode.MODAL) {
      atomStoreManager.set(_$$D, {
        displayed: this.showingInnerIframe,
        width: this.iframeWidth,
        height: this.iframeHeight,
        initialPosition: this.iframeInitialPosition || new Point(0, 0),
        cancelCallback: this.cancelCallback,
        onDragEnd: this.storeModalPosition
      });
    }
    this.outerIframe?.updateState({
      visible: this.showingInnerIframe,
      width: this.iframeWidth,
      height: this.iframeHeight
    });
  }

  /**
   * Load the modal position from local storage.
   * (Original: loadModalPosition)
   */
  loadModalPosition(): Point | null {
    const storage = getLocalStorage();
    if (storage) {
      try {
        const pos = JSON.parse(storage.getItem(PLUGIN_POSITIONS_KEY) || '')[this.pluginID];
        return new Point(clamp(pos.x, 0, window.innerWidth - this.iframeWidth), clamp(pos.y, 0, window.innerHeight - this.iframeHeight));
      } catch {}
    }
    return null;
  }

  /**
   * Create and show the iframe.
   * (Original: makeIframe)
   */
  makeIframe({
    html,
    title,
    width,
    height,
    position,
    includeThemeColors,
    iframeId
  }: {
    html: string;
    title?: string;
    width?: number;
    height?: number;
    position?: ModalPosition;
    includeThemeColors?: boolean;
    iframeId: string;
  }): void {
    this._destroyIframe();
    this.innerIframeHtml = html;
    this.iframeId = iframeId;
    this.outerIframe = Y.getInstance(this.iframeId);
    if (this.iframeId === BUZZ_LEFT_PANEL_ID) atomStoreManager.set(FP, this.iframeId);
    this.outerIframe.removeAllChildren();
    this.innerIframe = this.outerIframe.createInnerIframe(this.innerIframeHtml, this.messageHandler, {
      name: this.title,
      isWidget: this.isWidget,
      cameraAccess: this.permissions.includes('camera'),
      microphoneAccess: this.permissions.includes('microphone'),
      displayCaptureAccess: this.permissions.includes('displaycapture'),
      clipboardWriteAccess: this.permissions.includes('clipboardwrite'),
      includeThemeColors,
      allowedDomains: this.allowedDomains,
      isLocal: this.isLocal,
      pluginId: this.pluginID
    });
    if (title != null) this.iframeTitle = title;
    this.includeThemeColors = !!includeThemeColors;
    this.setInitialPosition({
      width,
      height,
      position
    });
    this.updateUI();
  }

  /**
   * Build XY position in viewport.
   * (Original: buildXYPosition)
   */
  buildXYPosition(x: number, y: number): Point {
    const viewport = fullscreenValue.getViewportInfo();
    const pos = $g(viewport, {
      x,
      y
    });
    return new Point(Math.round(pos.x), Math.round(pos.y));
  }

  /**
   * Build default codegen position.
   * (Original: buildCodegenDefaultPosition)
   */
  buildCodegenDefaultPosition(): Point {
    const panel = document.getElementById('preferences-inspection-panel');
    const rect = panel?.getBoundingClientRect();
    const inspectPanelWidth = sX();
    let left = Math.max(window.innerWidth - inspectPanelWidth - this.iframeWidth, 0);
    if (rect) left = Math.max(rect.left - 1 - this.iframeWidth, 0);
    const top = Math.max((window.innerHeight - this.iframeHeight) / 2, 0);
    if (rect) {
      if (z4.getIsExtension()) {
        const paddingTop = panel?.parentElement?.parentElement ? parseFloat(window.getComputedStyle(panel.parentElement.parentElement).paddingTop) : 0;
        return new Point(rect.x + rect.width - this.iframeWidth, rect.y - this.iframeHeight - uF - paddingTop);
      }
      return new Point(left, rect.y);
    }
    return new Point(left, top);
  }

  /**
   * Set the initial position of the iframe.
   * (Original: setInitialPosition)
   */
  setInitialPosition({
    width,
    height,
    position
  }: {
    width?: number;
    height?: number;
    position?: ModalPosition;
  }): void {
    this.iframeWidth = this.getClampedWidth(width);
    this.iframeHeight = this.getClampedHeight(height);
    const center = new Point(Math.max((window.innerWidth - this.iframeWidth) / 2, 0), Math.max((window.innerHeight - this.iframeHeight) / 2, 0));
    if (position === 'default') {
      this.iframeInitialPosition = center;
    } else if (position === 'last') {
      this.iframeInitialPosition = this.loadModalPosition() || center;
    } else if (position === CODEGEN_DEFAULT_POSITION) {
      this.iframeInitialPosition = this.buildCodegenDefaultPosition();
    } else if (typeof position === 'object' && Object.prototype.hasOwnProperty.call(position, 'x') && Object.prototype.hasOwnProperty.call(position, 'y')) {
      this.iframeInitialPosition = this.buildXYPosition(position.x, position.y);
    } else {
      const contextPos = this.getMostRecentContextMenuClickPosition(debugState.getState());
      this.iframeInitialPosition = contextPos ? new Point(contextPos.x, contextPos.y) : this.loadModalPosition() || center;
    }
    this.storeModalPosition(this.iframeInitialPosition);
  }

  /**
   * Check if inner iframe is active.
   * (Original: isInnerIframeActive)
   */
  isInnerIframeActive(): boolean {
    return !!this.innerIframeHtml;
  }

  /**
   * Check if inner iframe HTML matches a regex.
   * (Original: innerIframeHtmlMatches)
   */
  innerIframeHtmlMatches(regex: RegExp): boolean {
    return this.innerIframeHtml != null && !!this.innerIframeHtml.match(regex);
  }

  /**
   * Destroy the iframe.
   * (Original: destroyIframe)
   */
  destroyIframe(): void {
    this._destroyIframe();
  }

  /**
   * Switch the container for the iframe.
   * (Original: switchContainer)
   */
  switchContainer(newIframeId: string): void {
    if (!this.isInnerIframeActive()) throw new Error('Cannot switch container when no plugin is active');
    const config = {
      html: this.innerIframeHtml,
      iframeId: newIframeId,
      title: this.iframeTitle,
      width: this.iframeWidth,
      height: this.iframeHeight,
      position: 'default' as ModalPosition,
      includeThemeColors: this.includeThemeColors
    };
    this._destroyIframe();
    this.makeIframe(config);
    this.showIframe();
  }

  /**
   * Destroy the iframe and clean up state.
   * (Original: _destroyIframe)
   */
  private _destroyIframe(): void {
    this.hideIframe();
    this.innerIframeHtml = '';
    if (this.innerIframe) {
      this.innerIframe.destroy();
      this.innerIframe = null;
    }
    if (this.iframeId === BUZZ_LEFT_PANEL_ID) atomStoreManager.set(FP, null);
    if (!this.isPanelIframe()) {
      atomStoreManager.set(_$$D, (e: any) => ({
        ...e,
        cancelCallback: undefined,
        onDragEnd: undefined
      }));
    }
    this.outerIframe = null;
  }

  /**
   * Check if the iframe is a panel iframe.
   * (Original: isPanelIframe)
   */
  isPanelIframe(): boolean {
    return this.iframeId === BUZZ_LEFT_PANEL_ID || this.iframeId === INSPECT_PANEL_ID;
  }

  /**
   * Set the iframe size.
   * (Original: setIframeSize)
   */
  setIframeSize(width?: number, height?: number): void {
    if (!this.outerIframe) throw new Error('No UI to resize. Did you forget to create a UI by calling showUI?');
    if (!Number.isNaN(width)) this.iframeWidth = this.getClampedWidth(width);
    if (!Number.isNaN(height)) this.iframeHeight = this.getClampedHeight(height);
    this.updateUI();
  }

  /**
   * Set the iframe position.
   * (Original: setIframePosition)
   */
  setIframePosition(x: number, y: number): void {
    if (!this.outerIframe) throw new Error('No UI to reposition. Did you forget to create a UI by calling showUI?');
    this.iframeInitialPosition = this.buildXYPosition(x, y);
    this.storeModalPosition(this.iframeInitialPosition);
    this.updateUI();
  }

  /**
   * Get the iframe position.
   * (Original: getIframePosition)
   */
  getIframePosition(): {
    canvasSpace: Point;
    windowSpace: Point;
  } {
    if (!this.outerIframe || !this.iframeInitialPosition) {
      throw new Error('Cannot get the UI position. Did you forget to create a UI by calling showUI?');
    }
    const windowSpace = this.iframeInitialPosition;
    const viewport = fullscreenValue.getViewportInfo();
    const {
      x,
      y
    } = Nd(viewport, windowSpace);
    return {
      canvasSpace: new Point(x, y),
      windowSpace
    };
  }

  /**
   * Clamp the iframe width.
   * (Original: getClampedWidth)
   */
  getClampedWidth(width?: number): number {
    if (this.iframeId === INSPECT_PANEL_ID) return sX();
    return width == null ? DEFAULT_IFRAME_WIDTH : clamp(width, MIN_WIDTH, window.innerWidth - WIDTH_PADDING);
  }

  /**
   * Clamp the iframe height.
   * (Original: getClampedHeight)
   */
  getClampedHeight(height?: number): number {
    if (height == null) return DEFAULT_IFRAME_HEIGHT;
    return this.isPanelIframe() ? height : clamp(height, 0, window.innerHeight - tuiPx - HEIGHT_PADDING);
  }

  /**
   * Check if the plugin is an insert widget.
   * (Original: getIsInsert)
   */
  getIsInsert(): boolean {
    return this.isWidget
    // eslint-disable-next-line no-prototype-builtins
    && this.widgetCommand?.hasOwnProperty('context') && this.widgetCommand.context === 'insert';
  }

  /**
   * Get the iframe ID.
   * (Original: getIframeId)
   */
  getIframeId(): string | null {
    return this.iframeId;
  }

  /**
   * Show the iframe.
   * (Original: showIframe)
   */
  showIframe(): void {
    if (!this.hideVisibleUI) {
      if (!this.outerIframe) throw new Error('No UI to show. Did you forget to create a UI by calling showUI?');
      this.hideProgress();
      if (this.isPanelIframe()) atomStoreManager.set(d4, 'RUNNING');
      this.showingInnerIframe = true;
      this.updateUI();
    }
  }

  /**
   * Hide the iframe.
   * (Original: hideIframe)
   */
  hideIframe(): void {
    this.showingInnerIframe = false;
    this.updateUI();
    this.showProgress();
  }

  /**
   * Set whether to hide visible UI.
   * (Original: setHideVisibleUI)
   */
  setHideVisibleUI(hide: boolean): void {
    this.hideVisibleUI = hide;
    hide ? this.hideProgress() : this.showProgress();
  }

  /**
   * Post a message to the iframe.
   * (Original: postMessageToIframe)
   */
  postMessageToIframe(message: any, transfer?: any): void {
    if (!this.outerIframe || !this.innerIframe) {
      throw new Error('No UI to send a message to. Did you forget to create a UI by calling showUI?');
    }
    this.innerIframe.postMessage(message, transfer);
  }

  /**
   * Handle theme update for the iframe.
   * (Original: handleThemeUpdate)
   */
  handleThemeUpdate(): void {
    if (this.innerIframe && this.includeThemeColors) this.innerIframe.handleThemeUpdate();
  }

  /**
   * Show a plugin visual bell notification.
   * (Original: showPluginVisualBell)
   */
  showPluginVisualBell(message: string, type: string, options: {
    timeout: number;
    button?: any;
    error?: any;
  }, onDequeue?: Fn): void {
    if (this.hideVisibleUI) return;
    this.hideProgress();
    const isLongTimeout = options.timeout > 3000;
    const notification: any = {
      type,
      message,
      timeoutOverride: options.timeout,
      timeoutType: 'exact',
      button: options.button,
      onDismiss: isLongTimeout ? () => {} : undefined,
      onDequeue,
      error: options.error
    };
    if (this.titleIconURL) {
      notification.icon = VisualBellIcon.FROM_URL;
      notification.iconURL = this.titleIconURL;
    }
    fullscreenValue.dispatch(VisualBellActions.enqueue(notification));
    if (!this.showingInnerIframe) this.showProgress();
    this.lastNotificationTimeout = Math.max(this.lastNotificationTimeout, Date.now()) + options.timeout;
  }

  /**
   * Cancel a plugin visual bell notification.
   * (Original: cancelPluginVisualBell)
   */
  cancelPluginVisualBell(type: string): void {
    fullscreenValue.dispatch(VisualBellActions.dequeue({
      matchType: type
    }));
  }

  /**
   * Cancel all non-error persistent visual bells.
   * (Original: cancelNonErrorPersistentVisualBells)
   */
  cancelNonErrorPersistentVisualBells(): void {
    fullscreenValue.dispatch(VisualBellActions.dequeue({
      shouldDequeueFunc: (e: any) => e.type !== 'plugins-runtime-error' && _$$R(e) === Infinity
    }));
  }

  /**
   * Cancel all custom notify visual bells.
   * (Original: cancelAllCustomNotifyVisualBells)
   */
  cancelAllCustomNotifyVisualBells(): void {
    fullscreenValue.dispatch(VisualBellActions.dequeue({
      shouldDequeueFunc: (e: any) => {
        const re = /message-from-plugin-*/;
        const isMatch = !!e.type && re.test(e.type);
        const hasButton = e.button !== undefined;
        return isMatch && hasButton;
      }
    }));
  }

  /**
   * Hide the progress indicator.
   * (Original: hideProgress)
   */
  hideProgress(): void {
    dequeuePluginStatus({
      shouldShowVisualBell: this.shouldShowVisualBell
    });
  }

  /**
   * Show the progress indicator.
   * (Original: showProgress)
   */
  showProgress({
    isBackground
  }: {
    isBackground?: boolean;
  } = {}): void {
    if (this.triggeredFrom !== 'codegen' && (this.terminateInspectPluginIfNoIframe(), fullscreenValue && fullscreenValue.isReady() && this.shouldShowVisualBell && !this.hideVisibleUI)) {
      const delay = isBackground ? 50 : this.isPanelIframe() ? 4000 : undefined;
      notifyPluginStatus({
        name: this.title,
        isInsert: this.getIsInsert(),
        cancelCallback: this.cancelCallback,
        vmType: this.vmType,
        delayOverride: delay,
        isBackground
      });
    }
  }

  /**
   * Terminate inspect plugin if no iframe is present.
   * (Original: terminateInspectPluginIfNoIframe)
   */
  terminateInspectPluginIfNoIframe(): void {
    if (!this.timeout && hasInspectOrPanelCapability(this.capabilities) && !this.capabilities?.includes('codegen') && $A(debugState.getState().selectedView) && this.triggeredFrom !== 'related-link-preview') {
      this.timeout = setTimeout(() => {
        if (!this.showingInnerIframe) {
          this.cancelCallback({
            message: 'Inspect panel plugins must have an iFrame when running',
            isError: true
          });
          this.timeout = null;
        }
      }, 10000);
    }
  }
}

/**
 * Dummy UI manager for fallback.
 * (Original: $$O0)
 */
export class DummyUIManager {
  tearDown(): void {}
  makeIframe(_e: any): void {}
  isInnerIframeActive(): boolean {
    return false;
  }
  destroyIframe(): void {}
  setIframeSize(_e: any, _t: any): void {}
  setIframePosition(_e: any, _t: any): void {}
  getIframePosition(): {
    windowSpace: Point;
    canvasSpace: Point;
  } {
    return {
      windowSpace: new Point(0, 0),
      canvasSpace: new Point(0, 0)
    };
  }
  showIframe(): void {}
  hideIframe(): void {}
  setHideVisibleUI(_e: any): void {}
  postMessageToIframe(_e: any, _t: any): void {}
  showPluginVisualBell(_e: any, _t: any, _i: any): void {}
  cancelPluginVisualBell(_e: any): void {}
  switchContainer(_e: any): void {}
  get isInspectPanel(): boolean {
    return false;
  }
}

// Export refactored names for imports
export const YJ = PluginUIManager; // setupPlaybackHandler -> PluginUIManager
export const _x = DummyUIManager;
export const mN = PluginUIManager;