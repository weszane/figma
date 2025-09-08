import { sessionLocalIDToString, defaultSessionLocalID, parseSessionLocalID } from "../905/871411";
export let $$n1;
export let $$a2 = new class {
  constructor() {
    this.upgradedInteractions = new Set();
  }
  getGUIDString(e) {
    return sessionLocalIDToString(e) ?? sessionLocalIDToString(defaultSessionLocalID);
  }
  recordInteractionUpgraded(e, t) {
    return this.upgradedInteractions.add(`${this.getGUIDString(e)},${this.getGUIDString(t)}`);
  }
  hasInteractionBeenUpgraded(e, t) {
    return this.upgradedInteractions.has(`${this.getGUIDString(e)},${this.getGUIDString(t)}`);
  }
  haveInteractionsBeenUpgraded(e) {
    for (let t of e) if (!this.hasInteractionBeenUpgraded(t.id, t.sourceNodeID)) return !1;
    return !0;
  }
  haveAnyInteractionsBeenUpgraded(e) {
    for (let t of e) if (1 === t.stateManagementVersion && this.hasInteractionBeenUpgraded(t.id, t.sourceNodeID)) return !0;
    return !1;
  }
  clearData() {
    this.upgradedInteractions = new Set();
  }
}();
class s {
  recordInteractionUpgraded(e, t) {
    $$a2.recordInteractionUpgraded(parseSessionLocalID(e), parseSessionLocalID(t));
  }
}
export function $$o0() {
  $$n1 = new s();
}
export const PR = $$o0;
export const XO = $$n1;
export const zZ = $$a2;