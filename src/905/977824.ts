import { c2 } from "../905/382883";
import { z7E, h3O } from "../figma_app/763686";
import { sx } from "../905/449184";
import { sn, Vq } from "../905/542194";
import { debugState } from "../905/407919";
import { N, B } from "../905/284094";
import { mu } from "../figma_app/308685";
export let $$n0;
let u = 0;
class p {
  constructor() {
    this._currentSessionId = -1;
    this._infoBySessionId = new N({});
    this._voiceMetadataBySessionId = new B({}, c2);
    this._reactionsBySessionId = new N({});
    this._reactionTimeout = -1;
    this._onReactionsUpdated = void 0;
    this._onInfoBySessionIdUpdated = void 0;
    this._onOtherUserMouseMoved = void 0;
    this._cursorChatLoggerTimerID = null;
  }
  infoBySessionId() {
    return {
      ...this._infoBySessionId.get()
    };
  }
  voiceMetadataBySessionId() {
    return {
      ...this._voiceMetadataBySessionId.get()
    };
  }
  reactionsBySessionId() {
    return {
      ...this._reactionsBySessionId.get()
    };
  }
  handleConnect(e) {
    -1 !== this._currentSessionId && this.removeUser(this._currentSessionId);
    this._currentSessionId = e;
    this.addUser(this._currentSessionId);
  }
  addUser(e) {
    let t = this._infoBySessionId.get();
    let i = {
      sessionId: e.toString(),
      mouse: null,
      isHoveringWidgetWithHiddenCursors: !1,
      chatMessage: [null, null],
      highFiveStatus: !1,
      cursorType: z7E.DEFAULT,
      lastMouseMoveMs: -1
    };
    this.setInfoBySessionId({
      ...t,
      [e]: i
    });
    let n = this._voiceMetadataBySessionId.get();
    this._voiceMetadataBySessionId.set({
      ...n,
      [e]: {
        connectedCallId: ""
      }
    });
    let r = this._reactionsBySessionId.get();
    this.setReactionsBySessionId({
      ...r,
      [e]: {}
    });
  }
  removeUser(e) {
    let t = {
      ...this._infoBySessionId.get()
    };
    delete t[e];
    this.setInfoBySessionId(t);
    let i = {
      ...this._voiceMetadataBySessionId.get()
    };
    delete i[e];
    this._voiceMetadataBySessionId.set(i);
    let n = {
      ...this._reactionsBySessionId.get()
    };
    delete n[e];
    this.setReactionsBySessionId(n);
  }
  setMouseCursor(e, t) {
    let i = this._infoBySessionId.get();
    this.setInfoBySessionId({
      ...i,
      [e]: {
        ...i[e],
        cursorType: t
      }
    });
  }
  setMousePosition(e, t, i, n) {
    let r = this._infoBySessionId.get();
    if (e in r) {
      let a = r[e];
      let s = {
        ...a,
        mouse: {
          canvasSpacePosition: {
            x: i,
            y: n
          },
          pageId: t
        },
        lastMouseMoveMs: window.performance.now()
      };
      this.otherUserMouseMoved(e, s, a) && this._onOtherUserMouseMoved?.();
      this.setInfoBySessionId({
        ...r,
        [e]: s
      });
    }
  }
  setIsHoveringWidgetWithHiddenCursors(e, t) {
    let i = this._infoBySessionId.get();
    e in i && this.setInfoBySessionId({
      ...i,
      [e]: {
        ...i[e],
        isHoveringWidgetWithHiddenCursors: t
      }
    });
  }
  otherUserMouseMoved(e, t, i) {
    return e !== this._currentSessionId && t.mouse?.canvasSpacePosition !== i.mouse?.canvasSpacePosition;
  }
  setFocusOnTextCursor(e, t) {
    let i = this._infoBySessionId.get();
    this.setInfoBySessionId({
      ...i,
      [e]: {
        ...i[e],
        focusOnTextCursor: t
      }
    });
  }
  setChatMessage(e, t, i) {
    let n = this._infoBySessionId.get();
    let {
      eventName,
      sendToDataDogEveryMs
    } = m.CURSOR_CHAT;
    sn.start(`${eventName}_${e}_${t}`);
    null === this._cursorChatLoggerTimerID && (this._cursorChatLoggerTimerID = setTimeout(() => {
      let e = Vq.analyticsProperties(eventName);
      sx(eventName, e, {
        forwardToDatadog: !0
      });
      Vq.reset(eventName);
      this._cursorChatLoggerTimerID = null;
    }, sendToDataDogEveryMs));
    e in n && this.setInfoBySessionId({
      ...n,
      [e]: {
        ...n[e],
        chatMessage: [t, i]
      }
    });
  }
  setHighFiveStatus(e, t) {
    let i = this._infoBySessionId.get();
    e in i && this.setInfoBySessionId({
      ...i,
      [e]: {
        ...i[e],
        highFiveStatus: t
      }
    });
  }
  sendHighFiveStatus(e) {
    h3O?.sendHighFiveStatus(e);
  }
  setVoiceMetadata(e, t) {
    let i = this._voiceMetadataBySessionId.get();
    e in i && this._voiceMetadataBySessionId.set({
      ...i,
      [e]: {
        ...i[e],
        connectedCallId: t
      }
    });
  }
  sendVoiceMetadata(e) {
    h3O?.sendVoiceMetadata(e);
  }
  addReactionForSessionId(e, t, i, n) {
    let r = ++u + "";
    let a = this._reactionsBySessionId.get();
    e in a && this.setReactionsBySessionId({
      ...a,
      [e]: {
        ...a[e],
        [r]: {
          localId: r,
          reactionId: t,
          canvasSpacePosition: i,
          pageId: n
        }
      }
    });
    return r;
  }
  removeReactionWithId(e, t) {
    let i = this._reactionsBySessionId.get();
    if (e in i) {
      let n = {
        ...i[e]
      };
      delete n[t];
      this.setReactionsBySessionId({
        ...i,
        [e]: n
      });
    }
  }
  setOnReactionsUpdatedCallback(e) {
    this._onReactionsUpdated = e;
  }
  setInfoBySessionIdUpdatedCallback(e) {
    this._onInfoBySessionIdUpdated = e;
  }
  setOtherUserMouseMovedCallback(e) {
    this._onOtherUserMouseMoved = e;
  }
  setReactionsBySessionId(e) {
    this._reactionsBySessionId.set(e);
    this._onReactionsUpdated && this._onReactionsUpdated();
  }
  setInfoBySessionId(e) {
    this._infoBySessionId.set(e);
    this._onInfoBySessionIdUpdated && this._onInfoBySessionIdUpdated();
  }
  resetReactions() {
    clearTimeout(this._reactionTimeout);
  }
  sendReaction(e) {
    h3O && (h3O.sendReaction(e), this.handleReactionForSession(h3O.currentSessionID(), e));
  }
  handleReactionFromServer(e, t) {
    e !== h3O?.currentSessionID() && this.handleReactionForSession(e, t);
  }
  handleReactionForSession(e, t) {
    let i = this._infoBySessionId.get()[e];
    let n = i?.mouse?.canvasSpacePosition;
    let r = i?.mouse?.pageId;
    if (null == i || null == n || null == r) return null;
    let s = this.addReactionForSessionId(e, t, n, r);
    setTimeout(() => this.removeReactionWithId(e, s), 2500);
    h3O && e === h3O.currentSessionID() && (this._reactionTimeout = setTimeout(() => {
      0 === Object.keys(this._reactionsBySessionId.get()[e + ""] || []).length && debugState.dispatch(mu());
    }, 2500));
    return s;
  }
  useInfoBySessionId(e) {
    return this._infoBySessionId.use(e);
  }
  useInfoBySessionIdSubscription(e) {
    return this._infoBySessionId.useSubscription(e);
  }
  useVoiceMetadataBySessionId() {
    return this._voiceMetadataBySessionId.use();
  }
  useReactionsBySessionId() {
    return this._reactionsBySessionId.use();
  }
}
let m = {
  CURSOR_CHAT: {
    eventName: "view_cursor_chat_message",
    bins: [1, 9, 17, 19, 20, 23, 25, 29, 32, 48, 64, 80, 96, 112, 224, 448, 896, 1792, 3584, 1e4],
    sendToDataDogEveryMs: 6e4
  }
};
export function $$h1() {
  Object.entries(m).forEach(([e, t]) => {
    Vq.create(t.eventName, t.bins);
  });
  $$n0 = new p();
}
export const R9 = $$n0;
export const pO = $$h1;