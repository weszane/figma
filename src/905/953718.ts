import { ServiceCategories as _$$e } from "../905/165054";
import { $D } from "../905/11";
import { R } from "../905/994802";
var $$n0 = ((e) => (e.ExistingExperience = "ExistingExperience", e.HigherPriExperience = "HigherPriExperience", e.ExperimentCheckFail = "ExperimentCheckFail", e.RuleFail = "RuleFail", e.LifecycleCheckFail = "LifecycleCheckFail", e))($$n0 || {});
var $$r1 = ((e) => (e.Overlay = "Overlay", e))($$r1 || {});
export class $$a4 {
  constructor(e, t, i) {
    this.name = e;
    this.description = t;
    this.ruleFn = i;
  }
  execute(e, t) {
    return this.ruleFn(e, t);
  }
}
function l(e) {
  let t = [];
  return (...i) => {
    t.length || setTimeout(() => {
      let i = t;
      t = [];
      i.forEach((t) => {
        e(...t);
      });
    }, 0);
    t.push(i);
  };
}
export class $$c3 {
  constructor(e) {
    this.channels = e;
    this.batchNumber = 0;
    this.experienceMap = new Map();
    this.runExperiencesForChannel = l((e) => {
      R({
        type: "internal",
        name: "run_experiences_for_channel",
        properties: {
          channelId: e
        }
      }, "trace");
      let t = this.channels[e];
      if (this.batchNumber += 1, t?.currentExperience == null) {
        let i = this.getExperienceForChannel(e);
        null != i && null != t && (t.currentExperience = i, i.onShow(this.batchNumber), this.removeBlockedExperiencesForChannel(t, $$n0.HigherPriExperience));
      } else this.removeBlockedExperiencesForChannel(t, $$n0.ExistingExperience);
    });
  }
  queueExperience(e) {
    let {
      channelID
    } = e;
    let i = this.channels[channelID];
    let n = !!i?.queuedExperiences.some((t) => t.id === e.id) || i?.currentExperience?.id === e.id;
    R({
      type: "internal",
      name: "queue_experience",
      properties: {
        experienceId: e.id,
        isAlreadyQueued: n
      }
    }, "trace");
    n || (this.experienceMap.set(e.id, e), i?.queuedExperiences.push(e), this.runExperiencesForChannel(channelID));
  }
  completeExperience(e) {
    let t = this.experienceMap.get(e);
    if (null == t) return;
    R({
      type: "internal",
      name: "complete_experience",
      properties: {
        experienceId: e
      }
    }, "trace");
    let i = this.channels[t.channelID];
    i?.currentExperience?.id === e ? (i.currentExperience = void 0, this.experienceMap.$$delete(e), this.runExperiencesForChannel(i.id)) : $D(_$$e.GROWTH_PLATFORM, Error(`completeExperience called when experience is not current: ${e}`));
  }
  dequeueExperience(e) {
    let t = this.experienceMap.get(e);
    if (null == t) return;
    R({
      type: "internal",
      name: "dequeue_experience",
      properties: {
        experienceId: e
      }
    }, "trace");
    let i = this.channels[t.channelID];
    i && (i.queuedExperiences.some((t) => t.id === e) && this.experienceMap.$$delete(e), i.queuedExperiences = i.queuedExperiences.filter((t) => t.id !== e));
  }
  getExperienceForChannel(e) {
    R({
      type: "internal",
      name: "get_experience_for_channel",
      properties: {
        channelId: e
      }
    }, "trace");
    let t = this.channels[e];
    if (null != t) {
      t.queuedExperiences.sort((e, t) => t.priority - e.priority);
      let e = t.queuedExperiences.shift();
      for (; null != e;) {
        let i = function (e) {
          return (t, i) => {
            for (let n of e) if (!n.execute(t, i)) return {
              pass: !1,
              rule: n
            };
            return {
              pass: !0
            };
          };
        }(t.getRules())(t.getContext(), e);
        if (!i.pass) {
          e.onBlocked({
            reasonType: $$n0.RuleFail,
            rule: i.rule
          });
          e = t.queuedExperiences.shift();
          continue;
        }
        let r = null;
        for (let t of e.postChecks) if (r = t()) break;
        if (null == r) break;
        e.onBlocked(r);
        e = t.queuedExperiences.shift();
      }
      return e;
    }
  }
  removeBlockedExperiencesForChannel(e, t) {
    R({
      type: "internal",
      name: "remove_blocked_experiences",
      properties: {
        channelId: e.id
      }
    }, "trace");
    let {
      currentExperience
    } = e;
    if (currentExperience) {
      let n = [];
      e.queuedExperiences.forEach((e) => {
        e.onBlocked({
          reasonType: t,
          blocker: currentExperience
        });
        e.queueOnBlock ? n.push(e) : this.experienceMap.$$delete(e.id);
      });
      e.queuedExperiences = n;
    }
  }
  getImmutableChannels() {
    return JSON.parse(JSON.stringify(this.channels));
  }
}
export class $$u2 {
  constructor() {
    this.overlayMap = new Map();
    this.loadMap = new p();
    this.showQueue = [];
    this.showOverlay = l((e, t) => {
      let i = this.overlayMap.get(e);
      if (i && "loading" !== i.queryResult.status) {
        let n = (i) => {
          this.debugLog("Showing overlay: ", e);
          t(i);
          this.removeOverlay(e, !1);
        };
        let r = this.loadMap.getMax();
        r && i.priority < r.priority ? (this.showQueue.push({
          overlay: i,
          show: n,
          startTime: performance.now()
        }), R({
          type: "paused",
          name: "higher_priority_overlay_loading",
          properties: {
            overlayId: e,
            higherPriorityOverlayId: r.id
          }
        }, "debug")) : (n({
          didNotQueue: !0
        }), this.drainQueue());
      }
    });
  }
  updateOverlay(e) {
    this.debugLog("Updating overlay: ", e.id, e.queryResult);
    let {
      id,
      queryResult
    } = e;
    switch (this.overlayMap.set(id, e), queryResult.status) {
      case "loading":
        this.loadMap.set(e.id, e);
        break;
      case "loaded":
        this.loadMap.$$delete(id);
        break;
      case "errors":
      case "disabled":
        this.removeOverlay(id);
    }
  }
  removeOverlay(e, t = !0) {
    this.debugLog("Removing overlay: ", e);
    this.overlayMap.$$delete(e);
    this.loadMap.$$delete(e);
    t && this.drainQueue();
  }
  drainQueue() {
    this.debugLog("Draining the queued show calls");
    let e = this.loadMap.getMax();
    let t = this.showQueue.filter((t) => !e || t.overlay.priority >= e.priority);
    this.showQueue = this.showQueue.filter((t) => e && t.overlay.priority < e.priority);
    t.forEach((e) => {
      let t = performance.now() - e.startTime;
      e.show({
        queueDuration: t
      });
      R({
        type: "resumed",
        name: "higher_priority_overlay_loaded",
        properties: {
          overlayId: e.overlay.id,
          queueDurationMs: t
        }
      }, "debug");
    });
  }
  debugLog(...e) {}
  getImmutableLoadingOverlays() {
    return JSON.parse(JSON.stringify(Array.from(this.loadMap.items.values())));
  }
  getImmutableQueuedOverlays() {
    return JSON.parse(JSON.stringify(this.showQueue.map((e) => e.overlay)));
  }
}
class p {
  constructor() {
    this.maxPriItem = null;
    this.items = new Map();
  }
  set(e, t) {
    this.items.set(e, t);
    (null == this.maxPriItem || t.priority > this.maxPriItem.priority) && (this.maxPriItem = t);
  }
  has(e) {
    return this.items.has(e);
  }
  delete(e) {
    let t = this.items.$$delete(e);
    t && this.maxPriItem?.id === e && this.updateMaxPriItem();
    return t;
  }
  getMax() {
    return this.maxPriItem;
  }
  updateMaxPriItem() {
    let e = null;
    for (let t of this.items.values()) (null == e || t.priority > e.priority) && (e = t);
    this.maxPriItem = e;
  }
}
export const oE = $$n0;
export const FQ = $$r1;
export const Z3 = $$u2;
export const Oi = $$c3;
export const jO = $$a4;