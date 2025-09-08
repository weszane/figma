import { Fullscreen } from "../figma_app/763686";
import { debugState } from "../905/407919";
import { F6, Ho, sp, sm } from "../figma_app/308685";
import { gR } from "../905/486443";
import { FEditorType } from "../figma_app/53721";
import { q } from "../figma_app/403368";
export let $$n0;
class c {
  constructor() {
    this._wheelActivatedAtMs = -1;
    this._triggerActiveWheelButtonListeners = [];
  }
  startChat(e, t, r) {
    q().then(n => {
      n || debugState.dispatch(F6({
        position: {
          x: e,
          y: t
        },
        source: r
      }));
    });
  }
  closeWheel() {
    debugState.dispatch(Ho());
  }
  handleShortcutPressWithType({
    viewportX: e,
    viewportY: t,
    source: r,
    openedViaHover: n,
    wheelType: d
  }) {
    let c = debugState.getState();
    if ("fullscreen" !== c.selectedView.view || c.selectedView.editorType !== FEditorType.Whiteboard || this._wheelActivatedAtMs > 0) return;
    this._wheelActivatedAtMs = window.performance.now();
    let u = c.multiplayerEmoji;
    "WHEEL" === u.type ? (e = u.viewportX, t = u.viewportY, n = n ?? u.openedViaHover) : n || Fullscreen?.triggerAction("set-tool-default", null);
    debugState.dispatch(sp({
      wheelType: d && ("STAMP" === d ? "STAMP2" : "REACTION1"),
      isReadonly: c.mirror.appModel.isReadOnly,
      isJoinedToActiveVotingSession: gR(c),
      viewportX: e,
      viewportY: t,
      source: r,
      openedViaHover: n
    }));
  }
  handleShortcutPress(e, t, r) {
    this.handleShortcutPressWithType({
      viewportX: e,
      viewportY: t,
      source: r
    });
  }
  addTriggerActiveWheelButtonListener(e) {
    this._triggerActiveWheelButtonListeners.push(e);
  }
  removeTriggerActiveWheelButtonListener(e) {
    let t = this._triggerActiveWheelButtonListeners.indexOf(e);
    t >= 0 && this._triggerActiveWheelButtonListeners.splice(t, 1);
  }
  handleShortcutRelease(e, t) {
    if (this._wheelActivatedAtMs < 0) return;
    let r = window.performance.now() - this._wheelActivatedAtMs;
    if (this._wheelActivatedAtMs = -1, r > 300) for (let r of this._triggerActiveWheelButtonListeners) r({
      x: e,
      y: t
    });
  }
  updateEmojiWheelPosition(e, t) {
    let r = debugState.getState();
    "fullscreen" === r.selectedView.view && r.selectedView.editorType === FEditorType.Whiteboard && debugState.dispatch(sm({
      viewportX: e,
      viewportY: t
    }));
  }
}
export function $$u1() {
  $$n0 = new c();
}
export const CB = $$n0;
export const eY = $$u1;