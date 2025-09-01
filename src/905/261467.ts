import { zl } from "../figma_app/27355";
import { TQ } from "../905/657224";
import { parsePxNumber } from "../figma_app/783094";
import { debugState } from "../905/407919";
import { Point } from "../905/736624";
import { F } from "../905/302958";
import { zX } from "../905/576487";
import { R as _$$R } from "../905/22352";
import { FP } from "../figma_app/580736";
import { sX } from "../figma_app/212767";
import { W_ } from "../figma_app/8833";
import { Y5 } from "../figma_app/455680";
import { z4 } from "../905/37051";
import { $g, Nd } from "../figma_app/62612";
import { $u } from "../figma_app/300692";
import { d4 } from "../figma_app/474636";
import { WW, pN, Ym } from "../905/571565";
import { $A } from "../905/782918";
import { uF } from "../905/748636";
import { bA, Yw, Wh } from "../905/968269";
import { Y } from "../905/696438";
import { d as _$$d } from "../905/68441";
import { D as _$$D } from "../905/771179";
import { tui } from "../figma_app/27776";
import { A as _$$A } from "../1617/568132";
let T = "plugin-positions";
let k = parsePxNumber(tui);
function R(e, t, i) {
  return Math.max(t, Math.min(i, e));
}
let N = class e {
  constructor(t, i, n, a, s, o, l, d, c, u, p, h, g, f) {
    this.vmType = t;
    this.pluginID = i;
    this.titleIconURL = n;
    this.title = a;
    this.permissions = s;
    this.isWidget = o;
    this.widgetCommand = l;
    this.shouldShowVisualBell = d;
    this.cancelCallback = c;
    this.messageHandler = u;
    this.allowedDomains = p;
    this.isLocal = h;
    this.triggeredFrom = g;
    this.capabilities = f;
    this.outerIframe = null;
    this.innerIframe = null;
    this.innerIframeHtml = "";
    this.showingInnerIframe = !1;
    this.iframeTitle = "";
    this.iframeWidth = bA;
    this.iframeHeight = Yw;
    this.iframeInitialPosition = null;
    this.includeThemeColors = !1;
    this.lastNotificationTimeout = -1;
    this.hideVisibleUI = !1;
    this.iframeId = null;
    this.storeModalPosition = e => {
      let t = TQ();
      if (t) {
        let i = {};
        try {
          i = JSON.parse(t.getItem(T) || "");
        } catch (e) {}
        i && "object" == typeof i || (i = {});
        i[this.pluginID] = {
          x: e.x,
          y: e.y
        };
        t.setItem(T, JSON.stringify(i));
      }
      this.iframeInitialPosition = e;
      this.updateUI();
    };
    this.tearDown = e => {
      this._destroyIframe();
      this.timeout && clearTimeout(this.timeout);
      this.hideProgress();
      this.cancelNonErrorPersistentVisualBells();
      this.cancelAllCustomNotifyVisualBells();
    };
    this.getMostRecentContextMenuClickPosition = ({
      dropdownShown: e
    }) => e && e.type === W_ && e.data?.clientX != null && e.data?.clientY != null ? {
      x: e.data.clientX,
      y: e.data.clientY
    } : null;
    this.timeout = null;
    this.showProgress();
    e.instance = this;
  }
  static getInstance() {
    return e.instance;
  }
  updateUI() {
    if (zl.set(_$$d, {
      titleIconURL: this.titleIconURL,
      titleIconSvgSrc: this.titleIconURL ? void 0 : _$$A,
      title: this.iframeTitle || WW(this.title, this.vmType)
    }), this.iframeId === Wh.MODAL) {
      let e = {
        displayed: this.showingInnerIframe,
        width: this.iframeWidth,
        height: this.iframeHeight,
        initialPosition: this.iframeInitialPosition || new Point(0, 0),
        cancelCallback: this.cancelCallback,
        onDragEnd: this.storeModalPosition
      };
      zl.set(_$$D, e);
    }
    this.outerIframe?.updateState({
      visible: this.showingInnerIframe,
      width: this.iframeWidth,
      height: this.iframeHeight
    });
  }
  loadModalPosition() {
    let e = TQ();
    if (e) try {
      let t = JSON.parse(e.getItem(T) || "")[this.pluginID];
      return new Point(R(t.x, 0, window.innerWidth - this.iframeWidth), R(t.y, 0, window.innerHeight - this.iframeHeight));
    } catch (e) {}
    return null;
  }
  makeIframe(e) {
    let {
      html,
      title,
      width,
      height,
      position,
      includeThemeColors,
      iframeId
    } = e;
    this._destroyIframe();
    this.innerIframeHtml = html;
    this.iframeId = iframeId;
    this.outerIframe = Y.getInstance(this.iframeId);
    this.iframeId === Wh.BUZZ_LEFT_PANEL && zl.set(FP, this.iframeId);
    this.outerIframe.removeAllChildren();
    this.innerIframe = this.outerIframe.createInnerIframe(this.innerIframeHtml, this.messageHandler, {
      name: this.title,
      isWidget: this.isWidget,
      cameraAccess: this.permissions.includes("camera"),
      microphoneAccess: this.permissions.includes("microphone"),
      displayCaptureAccess: this.permissions.includes("displaycapture"),
      clipboardWriteAccess: this.permissions.includes("clipboardwrite"),
      includeThemeColors,
      allowedDomains: this.allowedDomains,
      isLocal: this.isLocal,
      pluginId: this.pluginID
    });
    null != title && (this.iframeTitle = title);
    this.includeThemeColors = !!includeThemeColors;
    this.setInitialPosition({
      width,
      height,
      position
    });
    this.updateUI();
  }
  buildXYPosition(e, t) {
    let i = Y5.getViewportInfo();
    let n = $g(i, {
      x: e,
      y: t
    });
    return new Point(Math.round(n.x), Math.round(n.y));
  }
  buildCodegenDefaultPosition() {
    let e = document.getElementById("preferences-inspection-panel");
    let t = e?.getBoundingClientRect();
    let i = sX();
    let n = Math.max(window.innerWidth - i - this.iframeWidth, 0);
    t && (n = Math.max(t.left - 1 - this.iframeWidth, 0));
    let r = Math.max((window.innerHeight - this.iframeHeight) / 2, 0);
    return t ? z4.getIsExtension() ? new Point(t.x + t.width - this.iframeWidth, t.y - this.iframeHeight - uF - (e?.parentElement?.parentElement ? parseFloat(window.getComputedStyle(e.parentElement.parentElement).paddingTop) : 0)) : new Point(n, t.y) : new Point(n, r);
  }
  setInitialPosition(e) {
    let {
      width,
      height,
      position
    } = e;
    this.iframeWidth = this.getClampedWidth(width);
    this.iframeHeight = this.getClampedHeight(height);
    let r = new Point(Math.max((window.innerWidth - this.iframeWidth) / 2, 0), Math.max((window.innerHeight - this.iframeHeight) / 2, 0));
    if ("default" === position) this.iframeInitialPosition = r;else if ("last" === position) this.iframeInitialPosition = this.loadModalPosition() || r;else if ("codegen-default" === position) this.iframeInitialPosition = this.buildCodegenDefaultPosition();else if ("object" == typeof position && position.hasOwnProperty("x") && position.hasOwnProperty("y")) this.iframeInitialPosition = this.buildXYPosition(position.x, position.y);else {
      let e = this.getMostRecentContextMenuClickPosition(debugState.getState());
      e ? this.iframeInitialPosition = new Point(e.x, e.y) : this.iframeInitialPosition = this.loadModalPosition() || r;
    }
    this.storeModalPosition(this.iframeInitialPosition);
  }
  isInnerIframeActive() {
    return !!this.innerIframeHtml;
  }
  innerIframeHtmlMatches(e) {
    return null != this.innerIframeHtml.match(e);
  }
  destroyIframe() {
    this._destroyIframe();
  }
  switchContainer(e) {
    if (!this.isInnerIframeActive()) throw Error("Cannot switch container when no plugin is active");
    let t = {
      html: this.innerIframeHtml,
      iframeId: e,
      title: this.iframeTitle,
      width: this.iframeWidth,
      height: this.iframeHeight,
      position: "default",
      includeThemeColors: this.includeThemeColors
    };
    this._destroyIframe();
    this.makeIframe(t);
    this.showIframe();
  }
  _destroyIframe() {
    this.hideIframe();
    this.innerIframeHtml = "";
    this.innerIframe && (this.innerIframe.destroy(), this.innerIframe = null);
    this.iframeId === Wh.BUZZ_LEFT_PANEL && zl.set(FP, null);
    this.isPanelIframe() || zl.set(_$$D, e => ({
      ...e,
      cancelCallback: void 0,
      onDragEnd: void 0
    }));
    this.outerIframe = null;
  }
  isPanelIframe() {
    return this.iframeId === Wh.BUZZ_LEFT_PANEL || this.iframeId === Wh.INSPECT;
  }
  setIframeSize(e, t) {
    if (!this.outerIframe) throw Error("No UI to resize. Did you forget to create a UI by calling showUI?");
    Number.isNaN(e) || (this.iframeWidth = this.getClampedWidth(e));
    Number.isNaN(t) || (this.iframeHeight = this.getClampedHeight(t));
    this.updateUI();
  }
  setIframePosition(e, t) {
    if (!this.outerIframe) throw Error("No UI to reposition. Did you forget to create a UI by calling showUI?");
    this.iframeInitialPosition = this.buildXYPosition(e, t);
    this.storeModalPosition(this.iframeInitialPosition);
    this.updateUI();
  }
  getIframePosition() {
    if (!this.outerIframe || !this.iframeInitialPosition) throw Error("Cannot get the UI position. Did you forget to create a UI by calling showUI?");
    let e = this.iframeInitialPosition;
    let t = Y5.getViewportInfo();
    let {
      x,
      y
    } = Nd(t, e);
    return {
      canvasSpace: new Point(x, y),
      windowSpace: e
    };
  }
  getClampedWidth(e) {
    return this.iframeId === Wh.INSPECT ? sX() : null == e ? bA : R(e, 70, window.innerWidth - 50);
  }
  getClampedHeight(e) {
    return null == e ? Yw : this.isPanelIframe() ? e : R(e, 0, window.innerHeight - k - uF);
  }
  getIsInsert() {
    return this.isWidget && this.widgetCommand?.hasOwnProperty("context") && "insert" === this.widgetCommand.context;
  }
  getIframeId() {
    return this.iframeId;
  }
  showIframe() {
    if (!this.hideVisibleUI) {
      if (!this.outerIframe) throw Error("No UI to show. Did you forget to create a UI by calling showUI?");
      this.hideProgress();
      this.isPanelIframe() && zl.set(d4, "RUNNING");
      this.showingInnerIframe = !0;
      this.updateUI();
    }
  }
  hideIframe() {
    this.showingInnerIframe = !1;
    this.updateUI();
    this.showProgress();
  }
  setHideVisibleUI(e) {
    this.hideVisibleUI = e;
    e ? this.hideProgress() : this.showProgress();
  }
  postMessageToIframe(e, t) {
    if (!this.outerIframe || !this.innerIframe) throw Error("No UI to send a message to. Did you forget to create a UI by calling showUI?");
    this.innerIframe.postMessage(e, t);
  }
  handleThemeUpdate() {
    this.innerIframe && this.includeThemeColors && this.innerIframe.handleThemeUpdate();
  }
  showPluginVisualBell(e, t, i, n) {
    if (this.hideVisibleUI) return;
    this.hideProgress();
    let r = i.timeout > 3e3;
    let a = {
      type: t,
      message: e,
      timeoutOverride: i.timeout,
      timeoutType: "exact",
      button: i.button,
      onDismiss: r ? () => {} : void 0,
      onDequeue: n,
      error: i.error
    };
    this.titleIconURL && (a.icon = zX.FROM_URL, a.iconURL = this.titleIconURL);
    Y5.dispatch(F.enqueue(a));
    this.showingInnerIframe || this.showProgress();
    this.lastNotificationTimeout = Math.max(this.lastNotificationTimeout, Date.now()) + i.timeout;
  }
  cancelPluginVisualBell(e) {
    Y5.dispatch(F.dequeue({
      matchType: e
    }));
  }
  cancelNonErrorPersistentVisualBells() {
    Y5.dispatch(F.dequeue({
      shouldDequeueFunc: e => "plugins-runtime-error" !== e.type && _$$R(e) === 1 / 0
    }));
  }
  cancelAllCustomNotifyVisualBells() {
    Y5.dispatch(F.dequeue({
      shouldDequeueFunc: e => {
        let t = RegExp("message-from-plugin-*");
        let i = !!e.type && t.test(e.type);
        let n = void 0 !== e.button;
        return i && n;
      }
    }));
  }
  hideProgress() {
    pN({
      shouldShowVisualBell: this.shouldShowVisualBell
    });
  }
  showProgress({
    isBackground: e
  } = {}) {
    if ("codegen" !== this.triggeredFrom && (this.terminateInspectPluginIfNoIframe(), Y5 && Y5.isReady() && this.shouldShowVisualBell && !this.hideVisibleUI)) {
      let t = e ? 50 : this.isPanelIframe() ? 4e3 : void 0;
      Ym({
        name: this.title,
        isInsert: this.getIsInsert(),
        cancelCallback: this.cancelCallback,
        vmType: this.vmType,
        delayOverride: t,
        isBackground: e
      });
    }
  }
  terminateInspectPluginIfNoIframe() {
    !this.timeout && $u(this.capabilities) && !this.capabilities?.includes("codegen") && $A(debugState.getState().selectedView) && "related-link-preview" !== this.triggeredFrom && (this.timeout = setTimeout(() => {
      if (!this.showingInnerIframe) {
        this.cancelCallback({
          message: "Inspect panel plugins must have an iFrame when running",
          isError: !0
        });
        this.timeout = null;
        return;
      }
    }, 1e4));
  }
};
N.instance = null;
export let $$P1 = N;
export class $$O0 {
  tearDown() {}
  makeIframe(e) {}
  isInnerIframeActive() {
    return !1;
  }
  destroyIframe() {}
  setIframeSize(e, t) {}
  setIframePosition(e, t) {}
  getIframePosition() {
    return {
      windowSpace: new Point(0, 0),
      canvasSpace: new Point(0, 0)
    };
  }
  showIframe() {}
  hideIframe() {}
  setHideVisibleUI(e) {}
  postMessageToIframe(e, t) {}
  showPluginVisualBell(e, t, i) {}
  cancelPluginVisualBell(e) {}
  switchContainer(e) {}
  get isInspectPanel() {
    return !1;
  }
}
export const _x = $$O0;
export const mN = $$P1;