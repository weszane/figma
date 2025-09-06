import { debounce } from "../905/915765";
import { EventEmitter } from "../905/690073";
import { trackEventAnalytics } from "../905/449184";
let s = debounce(trackEventAnalytics, 1e3, !0);
let o = "gamepadconnected";
let l = "gamepaddisconnected";
let $$d1 = 1e3;
export class $$c0 {
  constructor() {
    this.emitter = new EventEmitter("GameControllerListener");
    this.state = new Map();
    this.rafHandle = 0;
    this.onGamePadConnected = e => {
      this.rafHandle || (this.rafHandle = window.requestAnimationFrame(this.tick));
    };
    this.onGamePadDisconnected = e => {
      Array.from(window.navigator.getGamepads()).some(Boolean) || (window.cancelAnimationFrame(this.rafHandle), this.rafHandle = 0);
    };
    this.tick = () => {
      for (let e of window.navigator.getGamepads()) {
        if (!e) continue;
        let t = this.getStateForGamepad(e);
        let i = this.state.get(e.index) || t;
        let n = [];
        for (let e of t.pressedButtons) i.pressedButtons.has(e) || n.push(e);
        this.state.set(e.index, t);
        n.length && this.emitter.trigger("onPress", {
          type: "onPress",
          buttons: n,
          gamePadIndex: e.index,
          controllerType: function (e) {
            let t = f.exec(e.id);
            if (!t) return _.exec(e.id) ? "XBOX_ONE" : "UNKNOWN_CONTROLLER";
            let [i, n] = t.slice(1);
            let r = `${i}_${n}`;
            let a = h.get(r);
            let o = a ?? g.get(i) ?? "UNKNOWN_CONTROLLER";
            s("Game Controller Triggered", {
              id: e.id,
              closestMatch: o,
              wasExactMatch: !!a
            });
            return o;
          }(e)
        });
      }
      this.rafHandle = window.requestAnimationFrame(this.tick);
    };
  }
  start() {
    if (!function () {
      if ("function" != typeof window.navigator.getGamepads) return !1;
      try {
        window.navigator.getGamepads();
        return !0;
      } catch {
        return !1;
      }
    }()) {
      console.warn("Gamepad API not supported");
      return;
    }
    for (let e of window.navigator.getGamepads()) null != e && this.state.set(e.index, this.getStateForGamepad(e));
    window.addEventListener(o, this.onGamePadConnected);
    window.addEventListener(l, this.onGamePadDisconnected);
    Array.from(window.navigator.getGamepads()).some(Boolean) && (this.rafHandle = window.requestAnimationFrame(this.tick));
  }
  end() {
    this.cancelRAF();
    window.removeEventListener(o, this.onGamePadConnected);
    window.removeEventListener(l, this.onGamePadDisconnected);
  }
  onPress(e) {
    this.emitter.on("onPress", e);
    return {
      release: () => {
        this.emitter.removeListener("onPress", e);
      }
    };
  }
  cancelRAF() {
    this.rafHandle && (window.cancelAnimationFrame(this.rafHandle), this.rafHandle = 0);
  }
  getStateForGamepad(e) {
    let t = [];
    for (let i = 0; i < e.buttons.length; i++) e.buttons[i].pressed && t.push(i);
    for (let i = 0; i < e.axes.length; i++) {
      let n = e.axes[i];
      n < -.5 && t.push(2 * i + $$d1);
      n > .5 && t.push(2 * i + 1 + $$d1);
    }
    return {
      pressedButtons: new Set(t)
    };
  }
}
let u = "054c";
let p = "057e";
let m = "045e";
let h = new Map([[`${u}_09cc`, "PS4"], [`${u}_05c4`, "PS4"], [`${u}_0268`, "PS4"], [`${p}_2009`, "SWITCH_PRO"], [`${m}_02ea`, "XBOX_ONE"], [`${m}_02dd`, "XBOX_ONE"]]);
let g = new Map([[u, "PS4"], [p, "SWITCH_PRO"], [m, "XBOX_ONE"]]);
let f = /Vendor: ([0-9a-f]+) Product: ([0-9a-f]+)/i;
let _ = /xbox/i;
export const L = $$c0;
export const c = $$d1;