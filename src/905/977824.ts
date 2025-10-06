import { ComparableStatePublisher, StatePublisher } from '../905/284094';
import { deepEqual } from '../905/382883';
import { debugState } from '../905/407919';
import { trackEventAnalytics } from '../905/449184';
import { distributionAnalytics, globalPerfTimer } from '../905/542194';
import { stopReactingAction } from '../figma_app/308685';
import { Multiplayer, PaintTools } from '../figma_app/763686';

/**
 * Information about a user's cursor in a multiplayer session.
 * Original type name: CursorInfo
 */
export interface CursorInfo {
  sessionId: string;
  mouse: any;
  isHoveringWidgetWithHiddenCursors: boolean;
  chatMessage: [string | null, any | null];
  highFiveStatus: boolean;
  cursorType: PaintTools;
  lastMouseMoveMs: number;
  focusOnTextCursor?: boolean;
}

/**
 * @typedef {object} VoiceMetadata
 * @property {string} connectedCallId
 */

/**
 * @typedef {object} Reaction
 * @property {string} localId
 * @property {string} reactionId
 * @property {any} canvasSpacePosition
 * @property {any} pageId
 */

/**
 * @typedef {object} CursorChatConfig
 * @property {string} eventName
 * @property {number[]} bins
 * @property {number} sendToDataDogEveryMs
 */

/**
 * Configuration for cursor chat analytics.
 * Original type name: CursorChatConfig
 */
export interface CursorChatConfig {
  eventName: string;
  bins: number[];
  sendToDataDogEveryMs: number;
}
export let multiplayerSessionManager;
let reactionCounter = 0;

/**
 * Manages multiplayer cursor, chat, voice, and reaction state.
 * Original class name: p
 */
class MultiplayerSessionManager {
  _currentSessionId: number;
  _infoBySessionId: StatePublisher;
  _voiceMetadataBySessionId: ComparableStatePublisher;
  _reactionsBySessionId: StatePublisher;
  _reactionTimeout: number;
  _onReactionsUpdated?: () => void;
  _onInfoBySessionIdUpdated?: () => void;
  _onOtherUserMouseMoved?: () => void;
  _cursorChatLoggerTimerID: ReturnType<typeof setTimeout> | null;
  constructor() {
    this._currentSessionId = -1;
    this._infoBySessionId = new StatePublisher({});
    this._voiceMetadataBySessionId = new ComparableStatePublisher({}, deepEqual);
    this._reactionsBySessionId = new StatePublisher({});
    this._reactionTimeout = -1;
    this._onReactionsUpdated = undefined;
    this._onInfoBySessionIdUpdated = undefined;
    this._onOtherUserMouseMoved = undefined;
    this._cursorChatLoggerTimerID = null;
  }

  /** Returns a copy of infoBySessionId state. */
  infoBySessionId(): Record<string, CursorInfo> {
    return {
      ...this._infoBySessionId.get()
    };
  }

  /** Returns a copy of voiceMetadataBySessionId state. */
  voiceMetadataBySessionId() {
    return {
      ...this._voiceMetadataBySessionId.get()
    };
  }

  /** Returns a copy of reactionsBySessionId state. */
  reactionsBySessionId(): Record<string, Record<string, Reaction>> {
    return {
      ...this._reactionsBySessionId.get()
    };
  }

  /** Handles user connection by removing previous and adding new user. */
  handleConnect(sessionId: number): void {
    if (this._currentSessionId !== -1) {
      this.removeUser(this._currentSessionId);
    }
    this._currentSessionId = sessionId;
    this.addUser(this._currentSessionId);
  }

  /** Adds a user to all session states. */
  addUser(sessionId: number): void {
    const info = this._infoBySessionId.get();
    const newInfo: CursorInfo = {
      sessionId: sessionId.toString(),
      mouse: null,
      isHoveringWidgetWithHiddenCursors: false,
      chatMessage: [null, null],
      highFiveStatus: false,
      cursorType: PaintTools.DEFAULT,
      lastMouseMoveMs: -1
    };
    this.setInfoBySessionId({
      ...info,
      [sessionId]: newInfo
    });
    const voice = this._voiceMetadataBySessionId.get();
    this._voiceMetadataBySessionId.set({
      ...voice,
      [sessionId]: {
        connectedCallId: ''
      }
    });
    const reactions = this._reactionsBySessionId.get();
    this.setReactionsBySessionId({
      ...reactions,
      [sessionId]: {}
    });
  }

  /** Removes a user from all session states. */
  removeUser(sessionId: number): void {
    const info = {
      ...this._infoBySessionId.get()
    };
    delete info[sessionId];
    this.setInfoBySessionId(info);
    const voice = {
      ...this._voiceMetadataBySessionId.get()
    };
    delete voice[sessionId];
    this._voiceMetadataBySessionId.set(voice);
    const reactions = {
      ...this._reactionsBySessionId.get()
    };
    delete reactions[sessionId];
    this.setReactionsBySessionId(reactions);
  }

  /** Sets the cursor type for a user. */
  setMouseCursor(sessionId: number, cursorType: PaintTools): void {
    const info = this._infoBySessionId.get();
    this.setInfoBySessionId({
      ...info,
      [sessionId]: {
        ...info[sessionId],
        cursorType
      }
    });
  }

  /** Sets the mouse position for a user. */
  setMousePosition(sessionId: number, pageId: any, x: number, y: number): void {
    const info = this._infoBySessionId.get();
    if (sessionId in info) {
      const prev = info[sessionId];
      const updated: CursorInfo = {
        ...prev,
        mouse: {
          canvasSpacePosition: {
            x,
            y
          },
          pageId
        },
        lastMouseMoveMs: window.performance.now()
      };
      if (this.otherUserMouseMoved(sessionId, updated, prev)) {
        this._onOtherUserMouseMoved?.();
      }
      this.setInfoBySessionId({
        ...info,
        [sessionId]: updated
      });
    }
  }

  /** Sets hovering widget with hidden cursors for a user. */
  setIsHoveringWidgetWithHiddenCursors(sessionId: number, isHovering: boolean): void {
    const info = this._infoBySessionId.get();
    if (sessionId in info) {
      this.setInfoBySessionId({
        ...info,
        [sessionId]: {
          ...info[sessionId],
          isHoveringWidgetWithHiddenCursors: isHovering
        }
      });
    }
  }

  /** Checks if another user's mouse moved. */
  otherUserMouseMoved(sessionId: number, updated: CursorInfo, prev: CursorInfo): boolean {
    return sessionId !== this._currentSessionId && updated.mouse?.canvasSpacePosition !== prev.mouse?.canvasSpacePosition;
  }

  /** Sets focus on text cursor for a user. */
  setFocusOnTextCursor(sessionId: number, focus: boolean): void {
    const info = this._infoBySessionId.get();
    this.setInfoBySessionId({
      ...info,
      [sessionId]: {
        ...info[sessionId],
        focusOnTextCursor: focus
      }
    });
  }

  /** Sets chat message for a user and triggers analytics. */
  setChatMessage(sessionId: number, message: string, meta: any): void {
    const info = this._infoBySessionId.get();
    const {
      eventName,
      sendToDataDogEveryMs
    } = cursorChatConfig.CURSOR_CHAT;
    globalPerfTimer.start(`${eventName}_${sessionId}_${message}`);
    if (this._cursorChatLoggerTimerID === null) {
      this._cursorChatLoggerTimerID = setTimeout(() => {
        const props = distributionAnalytics.analyticsProperties(eventName);
        trackEventAnalytics(eventName, props, {
          forwardToDatadog: true
        });
        distributionAnalytics.reset(eventName);
        this._cursorChatLoggerTimerID = null;
      }, sendToDataDogEveryMs);
    }
    if (sessionId in info) {
      this.setInfoBySessionId({
        ...info,
        [sessionId]: {
          ...info[sessionId],
          chatMessage: [message, meta]
        }
      });
    }
  }

  /** Sets high five status for a user. */
  setHighFiveStatus(sessionId: number, status: boolean): void {
    const info = this._infoBySessionId.get();
    if (sessionId in info) {
      this.setInfoBySessionId({
        ...info,
        [sessionId]: {
          ...info[sessionId],
          highFiveStatus: status
        }
      });
    }
  }

  /** Sends high five status via Multiplayer. */
  sendHighFiveStatus(status: boolean): void {
    Multiplayer?.sendHighFiveStatus(status);
  }

  /** Sets voice metadata for a user. */
  setVoiceMetadata(sessionId: number, callId: string): void {
    const voice = this._voiceMetadataBySessionId.get();
    if (sessionId in voice) {
      this._voiceMetadataBySessionId.set({
        ...voice,
        [sessionId]: {
          ...voice[sessionId],
          connectedCallId: callId
        }
      });
    }
  }

  /** Sends voice metadata via Multiplayer. */
  sendVoiceMetadata(metadata: any): void {
    Multiplayer?.sendVoiceMetadata(metadata);
  }

  /** Adds a reaction for a session and returns its localId. */
  addReactionForSessionId(sessionId: number, reactionId: string, position: any, pageId: any): string {
    const localId = `${++reactionCounter}`;
    const reactions = this._reactionsBySessionId.get();
    if (sessionId in reactions) {
      this.setReactionsBySessionId({
        ...reactions,
        [sessionId]: {
          ...reactions[sessionId],
          [localId]: {
            localId,
            reactionId,
            canvasSpacePosition: position,
            pageId
          }
        }
      });
    }
    return localId;
  }

  /** Removes a reaction by localId for a session. */
  removeReactionWithId(sessionId: number, localId: string): void {
    const reactions = this._reactionsBySessionId.get();
    if (sessionId in reactions) {
      const updated = {
        ...reactions[sessionId]
      };
      delete updated[localId];
      this.setReactionsBySessionId({
        ...reactions,
        [sessionId]: updated
      });
    }
  }

  /** Sets callback for reactions updated. */
  setOnReactionsUpdatedCallback(callback: () => void): void {
    this._onReactionsUpdated = callback;
  }

  /** Sets callback for infoBySessionId updated. */
  setInfoBySessionIdUpdatedCallback(callback: () => void): void {
    this._onInfoBySessionIdUpdated = callback;
  }

  /** Sets callback for other user mouse moved. */
  setOtherUserMouseMovedCallback(callback: () => void): void {
    this._onOtherUserMouseMoved = callback;
  }

  /** Sets reactionsBySessionId state and triggers callback. */
  setReactionsBySessionId(state: Record<string, Record<string, Reaction>>): void {
    this._reactionsBySessionId.set(state);
    this._onReactionsUpdated?.();
  }

  /** Sets infoBySessionId state and triggers callback. */
  setInfoBySessionId(state: Record<string, CursorInfo>): void {
    this._infoBySessionId.set(state);
    this._onInfoBySessionIdUpdated?.();
  }

  /** Resets reaction timeout. */
  resetReactions(): void {
    clearTimeout(this._reactionTimeout);
  }

  /** Sends a reaction and handles it for current session. */
  sendReaction(reactionId: string): void {
    if (Multiplayer) {
      Multiplayer.sendReaction(reactionId);
      this.handleReactionForSession(Multiplayer.currentSessionID(), reactionId);
    }
  }

  /** Handles a reaction from server for a session. */
  handleReactionFromServer(sessionId: number, reactionId: string): void {
    if (sessionId !== Multiplayer?.currentSessionID()) {
      this.handleReactionForSession(sessionId, reactionId);
    }
  }

  /** Handles a reaction for a session, adds and schedules removal. */
  handleReactionForSession(sessionId: number, reactionId: string): string | null {
    const info = this._infoBySessionId.get()[sessionId];
    const position = info?.mouse?.canvasSpacePosition;
    const pageId = info?.mouse?.pageId;
    if (!info || !position || !pageId) return null;
    const localId = this.addReactionForSessionId(sessionId, reactionId, position, pageId);
    setTimeout(() => this.removeReactionWithId(sessionId, localId), 2500);
    if (Multiplayer && sessionId === Multiplayer.currentSessionID()) {
      this._reactionTimeout = setTimeout(() => {
        const sessionReactions = this._reactionsBySessionId.get()[`${sessionId}`] || {};
        if (Object.keys(sessionReactions).length === 0) {
          debugState.dispatch(stopReactingAction());
        }
      }, 2500);
    }
    return localId;
  }

  /** React hook for infoBySessionId. */
  useInfoBySessionId(selector: any): any {
    return this._infoBySessionId.use(selector);
  }

  /** React hook for infoBySessionId subscription. */
  useInfoBySessionIdSubscription(selector: any): any {
    return this._infoBySessionId.useSubscription(selector);
  }

  /** React hook for voiceMetadataBySessionId. */
  useVoiceMetadataBySessionId(): any {
    return this._voiceMetadataBySessionId.use();
  }

  /** React hook for reactionsBySessionId. */
  useReactionsBySessionId(): any {
    return this._reactionsBySessionId.use();
  }
}

/** Cursor chat analytics configuration. Original variable name: m */
const cursorChatConfig: Record<string, CursorChatConfig> = {
  CURSOR_CHAT: {
    eventName: 'view_cursor_chat_message',
    bins: [1, 9, 17, 19, 20, 23, 25, 29, 32, 48, 64, 80, 96, 112, 224, 448, 896, 1792, 3584, 1e4],
    sendToDataDogEveryMs: 60000
  }
};

/**
 * Initializes multiplayer session manager and analytics. Original function name: $$h1
 */
export function setupMultiplayerSession(): void {
  Object.entries(cursorChatConfig).forEach(([_, config]) => {
    distributionAnalytics.create(config.eventName, config.bins);
  });
  multiplayerSessionManager = new MultiplayerSessionManager();
}

/** Exported variable for session manager. Original export name: R9 */
export const R9 = multiplayerSessionManager;

/** Exported function for initialization. Original export name: pO */
export const pO = setupMultiplayerSession;
