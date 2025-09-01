import { Et } from "../figma_app/397267";
import { zl } from "../figma_app/27355";
import { az } from "../905/449184";
import { r6 } from "../figma_app/517115";
import { P } from "../figma_app/235371";
import { qd, YQ } from "../figma_app/257779";
import { OD, GD } from "../figma_app/407767";
let $$c3 = "auto-suggest";
let u = new Set([qd.EVAL, qd.SHADOW_SUGGESTIONS]);
export class $$p0 {
  constructor({
    analyticsData: e = YQ,
    config: t,
    entryPoint: r
  }) {
    this.analyticsData = e;
    this.config = t.loggerConfig;
    this.timers = [Date.now()];
    this.debugInfo = {};
    this.entryPoint = r;
    this.shouldLog = !u.has(r);
  }
  logFunnelEvent(e) {
    this.config.logFunnelEvents && this.shouldLog && $$_1(this.analyticsData, e, this.entryPoint);
  }
  logTimer(e, t, r) {
    if (!this.config.logTimers) return -1;
    let i = Date.now();
    if (this.timers.length > 0) {
      let o = i - this.timers[Et(r) ? r : this.timers.length - 1];
      let l = this.timers.push(i);
      this.shouldLog && az.trackDefinedEvent("auto_suggest.timer", {
        ...this.analyticsData,
        context: e,
        stepName: t,
        duration: o,
        sessionId: r6(),
        entryPoint: this.entryPoint,
        suggestionsVersion: OD(),
        triggerVersion: GD()
      });
      return l - 1;
    }
    return -1;
  }
  logDebugInfo(e, t) {
    this.config.logDebugInfo && (this.debugInfo[e] = t);
  }
}
export function $$_1(e, t, r) {
  az.trackDefinedEvent("auto_suggest.funnel", {
    ...e,
    funnelEvent: t,
    sessionId: r6(),
    entryPoint: r,
    suggestionsVersion: OD(),
    triggerVersion: GD()
  });
}
export function $$h2(e) {
  let {
    analyticsData
  } = zl.get(P);
  az.trackDefinedEvent("auto_suggest.component_inserted", {
    ...e,
    ...analyticsData,
    sessionId: r6(),
    suggestionsVersion: OD(),
    triggerVersion: GD()
  });
}
export const O = $$p0;
export const gb = $$_1;
export const k1 = $$h2;
export const tM = $$c3;