import { z8 } from "../figma_app/703447";
import { atom, atomStoreManager } from "../figma_app/27355";
let $$a = 0;
export class $$s0 {
  constructor(e = z8) {
    this.past = [];
    this.future = [];
    this.listeners = [];
    this.refreshListeners = [];
    this.current = e;
    this.currentAtom = atom(e);
    this.key = $$a++;
  }
  setCurrent(e) {
    e.canMoveBackward = this.canMoveBackward();
    e.canMoveForward = this.canMoveForward();
    atomStoreManager.set(this.currentAtom, e);
    this.current = e;
  }
  addPopStateListener(e) {
    this.listeners.push(e);
    e(this.current);
  }
  addRefreshListener(e) {
    this.refreshListeners.push(e);
  }
  #n() {
    this.listeners.forEach(e => e(this.current));
  }
  push(e) {
    this.past.push(this.current);
    this.future = [];
    this.setCurrent(e);
  }
  back() {
    let e = this.past.pop();
    e && (this.future.push(this.current), this.setCurrent(e), this.#n());
  }
  forward() {
    let e = this.future.pop();
    e && (this.past.push(this.current), this.setCurrent(e), this.#n());
  }
  refresh() {
    this.refreshListeners.forEach(e => e());
  }
  restart() {
    let e = this.past[0];
    this.restartAt(e);
  }
  restartAt(e) {
    this.past = [];
    this.future = [];
    e && this.setCurrent(e);
    this.#n();
  }
  canMoveBackward() {
    return this.past.length > 0;
  }
  canMoveForward() {
    return this.future.length > 0;
  }
}
export const a = $$s0;