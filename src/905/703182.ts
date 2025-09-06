import { trackEventAnalytics } from "../905/449184";
export let $$r0 = new class {
  constructor() {
    this._loadID = null;
    this.fileKey = null;
    this.pageId = null;
    this.action = null;
    this.versionHistoryLoadEnd = null;
    this.versionHistoryLoadStart = null;
    this.loadTime = null;
    this.reportedLoad = !1;
    this.reportedAbandon = !1;
    this.reportAbandon = () => {
      if (this.reportedAbandon) return;
      let e = Math.round(performance.now()) - this.versionHistoryLoadStart;
      trackEventAnalytics("Version History Abandon", {
        loadID: this.loadID(),
        fileKey: this.fileKey,
        pageId: this.pageId,
        abandonTime: e,
        action: this.action,
        loadTime: this.loadTime
      }, {
        forwardToDatadog: !0,
        sendAsBeacon: !0
      });
      this.reportedAbandon = !0;
    };
  }
  loadID() {
    return this._loadID;
  }
  newLoadID() {
    return Date.now().toString(36);
  }
  markVersionHistoryLoadEnd() {
    this.versionHistoryLoadEnd = Math.round(performance.now());
    this.loadTime = this.versionHistoryLoadEnd - this.versionHistoryLoadStart;
  }
  markVersionHistoryLoadStart(e, t, i) {
    this.fileKey = e;
    this.pageId = t;
    this.action = i;
    this._loadID = this.newLoadID();
    this.versionHistoryLoadStart = Math.round(performance.now());
    this.versionHistoryLoadEnd = null;
    this.loadTime = null;
    this.installListeners();
    this.reportedLoad = !1;
    this.reportedAbandon = !1;
  }
  installListeners() {
    window.addEventListener("pagehide", this.reportAbandon);
  }
  uninstallListeners() {
    window.removeEventListener("pagehide", this.reportAbandon);
  }
  report(e, t, i) {
    this.reportedLoad || e !== this.fileKey || (this.reportedLoad = !0, setTimeout(() => {
      this.uninstallListeners();
      trackEventAnalytics("Version History Load Time", {
        loadID: this.loadID(),
        fileKey: e,
        productType: t,
        pageId: this.pageId,
        action: this.action,
        loadTime: this.loadTime,
        source: i
      }, {
        forwardToDatadog: !0
      });
    }));
  }
}();
export const C = $$r0;