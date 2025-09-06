import { trackEventAnalytics } from "../905/449184";
import { Y5 } from "../figma_app/455680";
export let $$a0 = new class {
  constructor() {
    this.timer = null;
    this.startTime = 0;
    this.elapsed = 0;
    this.fileKey = null;
    this.localSession = null;
    this.installListeners = () => {
      window.addEventListener("pagehide", this.trackBounce);
      window.addEventListener("popstate", this.trackBounce);
      window.addEventListener("visibilitychange", this.pauseOrResume);
    };
    this.removeListeners = () => {
      window.removeEventListener("pagehide", this.trackBounce);
      window.removeEventListener("popstate", this.trackBounce);
      window.removeEventListener("visibilitychange", this.pauseOrResume);
    };
    this.trackSearchResultRetained = () => {
      this.localSession && trackEventAnalytics("search_result_retained", this.getEventPayload());
    };
    this.trackBounce = () => {
      this.localSession && trackEventAnalytics("search_result_bounced", this.getEventPayload(), {
        forwardToDatadog: !0,
        sendAsBeacon: !0
      });
      this.stopTimer();
    };
    this.pauseOrResume = () => {
      if (document.hidden) {
        this.timer && (window.clearTimeout(this.timer), this.timer = null);
        this.elapsed += performance.now() - this.startTime;
      } else {
        if (this.timer) return;
        3e5 < this.elapsed ? this.stopTimer() : (this.timer = window.setTimeout(this.stopTimer, 3e5 - this.elapsed), this.startTime = performance.now());
      }
    };
    this.stopTimer = () => {
      this.timer && (window.clearTimeout(this.timer), this.timer = null);
      this.removeListeners();
    };
  }
  startTimer(e, t) {
    this.stopTimer();
    t && (this.fileKey = e, this.localSession = t, this.startTime = performance.now(), this.elapsed = 0, this.timer = window.setTimeout(() => {
      this.trackSearchResultRetained();
      this.stopTimer();
    }, 3e5), this.installListeners());
  }
  getEventPayload() {
    return this.localSession ? {
      file_key: this.fileKey,
      session_id: this.localSession.id,
      session_expires_at: new Date(this.localSession.expires).toISOString(),
      session_entry_point: this.localSession.entryPoint,
      active_time_spent: Math.round(this.elapsed + performance.now() - this.startTime),
      fullscreen_is_ready: Y5.isReady()
    } : {};
  }
}();
export const y = $$a0;