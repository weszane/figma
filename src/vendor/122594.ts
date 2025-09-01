import { u } from "../vendor/600452";
import { OH } from "../vendor/537916";
import { v } from "../vendor/347763";
import { f } from "../vendor/535794";
let h = e => !isNaN(parseFloat(e));
class d {
  constructor(e, r = {}) {
    this.version = "8.5.5";
    this.timeDelta = 0;
    this.lastUpdated = 0;
    this.canTrackVelocity = !1;
    this.events = {};
    this.updateAndNotify = (e, r = !0) => {
      this.prev = this.current;
      this.current = e;
      let {
        delta,
        timestamp
      } = u;
      this.lastUpdated !== timestamp && (this.timeDelta = delta, this.lastUpdated = timestamp, OH.postRender(this.scheduleVelocityCheck));
      this.prev !== this.current && this.events.change && this.events.change.notify(this.current);
      this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity());
      r && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    };
    this.scheduleVelocityCheck = () => OH.postRender(this.velocityCheck);
    this.velocityCheck = ({
      timestamp: e
    }) => {
      e !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    };
    this.hasAnimated = !1;
    this.prev = this.current = e;
    this.canTrackVelocity = h(this.current);
    this.owner = r.owner;
  }
  onChange(e) {
    return this.on("change", e);
  }
  on(e, r) {
    this.events[e] || (this.events[e] = new v());
    let n = this.events[e].add(r);
    return "change" === e ? () => {
      n();
      OH.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : n;
  }
  clearListeners() {
    for (let e in this.events) this.events[e].clear();
  }
  attach(e, r) {
    this.passiveEffect = e;
    this.stopPassiveEffect = r;
  }
  set(e, r = !0) {
    r && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, r);
  }
  setWithVelocity(e, r, n) {
    this.set(r);
    this.prev = e;
    this.timeDelta = n;
  }
  jump(e) {
    this.updateAndNotify(e);
    this.prev = e;
    this.stop();
    this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity ? f(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
  }
  start(e) {
    this.stop();
    return new Promise(r => {
      this.hasAnimated = !0;
      this.animation = e(r) || null;
      this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify();
      this.clearAnimation();
    });
  }
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify());
    this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    this.animation = null;
  }
  destroy() {
    this.clearListeners();
    this.stop();
    this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
export function $$p0(e, r) {
  return new d(e, r);
}
export const O = $$p0;