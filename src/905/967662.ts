import { CeL, pWM, glU, Ez5 } from "../figma_app/763686";
import { Y5 } from "../figma_app/455680";
import { R9 } from "../905/977824";
import { debugState } from "../905/407919";
export class $$o13 {
  constructor() {
    this._zoomScale = 0;
    this._zoomScale = this.getZoomScale();
  }
  getZoomScale() {
    return Y5.getViewportInfo().zoomScale;
  }
  didEventOccur() {
    let e = this.getZoomScale();
    return e !== this._zoomScale && (this._zoomScale = e, !0);
  }
}
export class $$l1 {
  constructor() {
    this._offsetX = 0;
    this._offsetY = 0;
    this._zoomTracker = new $$o13();
    this._offsetX = this.getOffsetX();
    this._offsetY = this.getOffsetY();
  }
  getOffsetX() {
    return Y5.getViewportInfo().offsetX;
  }
  getOffsetY() {
    return Y5.getViewportInfo().offsetY;
  }
  didEventOccur() {
    let e = this.getOffsetX();
    let t = this.getOffsetY();
    return (e !== this._offsetX || t !== this._offsetY) && (this._offsetX = e, this._offsetY = t, !this._zoomTracker.didEventOccur());
  }
}
export class $$d14 {
  constructor() {
    this._didMouseMove = !1;
    this._panTracker = new $$l1();
    document.addEventListener("mousemove", (e) => {
      this._didMouseMove = !0;
    });
  }
  didEventOccur() {
    let e = this._didMouseMove && !this._panTracker.didEventOccur();
    this._didMouseMove = !1;
    return e;
  }
}
export class $$c12 {
  constructor() {}
  didEventOccur() {
    return (CeL?.getRenderTreeStaleTimeMs() ?? 0) > 0;
  }
}
export class $$u4 {
  constructor() {
    this._isCurrentUserChatting = !1;
    this._isOtherUserChatting = !1;
    this._otherUserChattingSessionIds = new Set();
  }
  setIsCurrentUserChatting(e) {
    this._isCurrentUserChatting = e;
  }
  setOtherUserChattingState(e, t) {
    t ? this._otherUserChattingSessionIds.add(e) : this._otherUserChattingSessionIds.$$delete(e);
    this._isOtherUserChatting = this._otherUserChattingSessionIds.size > 0;
  }
  didEventOccur() {
    return this._isCurrentUserChatting || this._isOtherUserChatting;
  }
}
export class $$p5 {
  constructor() {
    this._cursorReactionIsActive = !1;
    this.updateIsCursorReactionActive();
    R9?.setOnReactionsUpdatedCallback(this.updateIsCursorReactionActive.bind(this));
  }
  updateIsCursorReactionActive() {
    this._cursorReactionIsActive = this.getIsCursorReactionActive();
  }
  getIsCursorReactionActive() {
    if (!R9) return !1;
    let e = R9.reactionsBySessionId();
    return Object.keys(e).some((t) => Object.keys(e[t]).length > 0);
  }
  didEventOccur() {
    return this._cursorReactionIsActive;
  }
}
export class $$m6 {
  constructor(e) {
    this._mode = pWM.DEFINITELY_COVERED_ONLY;
    this._mode = e;
  }
  getViewportCoverage() {
    return glU.estimatedViewportRenderCoverage(this._mode);
  }
  didEventOccur() {
    return .9 > this.getViewportCoverage();
  }
}
export class $$h7 {
  constructor(e) {
    this._thresholdMs = 0;
    this._thresholdMs = e;
  }
  getStalenessMs() {
    return CeL.getRenderTreeStaleTimeMs();
  }
  didEventOccur() {
    return this.getStalenessMs() > this._thresholdMs;
  }
}
export class $$g10 {
  constructor(e, t) {
    this._threshold = 0;
    this._getMultiplayerUserCount = () => 0;
    this._threshold = e;
    this._getMultiplayerUserCount = t;
  }
  didEventOccur() {
    return this._getMultiplayerUserCount() > this._threshold;
  }
}
export class $$f3 {
  constructor(e, t) {
    this._threshold = 0;
    this._panTracker = new $$l1();
    this._zoomTracker = new $$o13();
    this._getMultiplayerUserCount = () => 0;
    this._threshold = e;
    this._getMultiplayerUserCount = t;
  }
  didEventOccur() {
    return this._getMultiplayerUserCount() > this._threshold && this._panTracker.didEventOccur() && this._zoomTracker.didEventOccur();
  }
}
export class $$_8 {
  constructor(e) {
    this._sharpnessThreshold = 0;
    this._zoomEventTracker = new $$o13();
    this._panEventTracker = new $$l1();
    this._sharpnessThreshold = e;
  }
  didEventOccur() {
    let e = this._panEventTracker.didEventOccur();
    let t = this._zoomEventTracker.didEventOccur();
    return !(e || t) && glU.minViewportSharpness() < this._sharpnessThreshold;
  }
}
export class $$A2 {
  constructor(e) {
    this._sharpnessThreshold = 0;
    this._zoomEventTracker = new $$o13();
    this._panEventTracker = new $$l1();
    this._sharpnessThreshold = e;
  }
  didEventOccur() {
    let e = this._panEventTracker.didEventOccur();
    let t = this._zoomEventTracker.didEventOccur();
    return !(e || t) && glU.avgViewportSharpness() < this._sharpnessThreshold;
  }
}
export class $$y0 {
  constructor() {
    this._isShowingAnnotations = !1;
  }
  setIsShowingAnnotations(e) {
    this._isShowingAnnotations = e;
  }
  didEventOccur() {
    return this._isShowingAnnotations;
  }
}
export class $$b16 {
  constructor() {
    this._isActive = !1;
  }
  setIsActive() {
    this._isActive = !0;
  }
  didEventOccur() {
    let e = this._isActive;
    this._isActive = !1;
    return e;
  }
}
export class $$v15 {
  didEventOccur() {
    return Ez5.isUserTyping();
  }
}
export class $$I11 {
  didEventOccur() {
    return Ez5?.isResizingGrid() ?? !1;
  }
}
export class $$E9 {
  constructor() {
    this._selection = {};
    let e = debugState.getState();
    this._selection = e.mirror?.selectionProperties;
  }
  hasSelectionChanged(e) {
    return this._selection && 0 !== Object.keys(this._selection).length ? this._selection.name !== e.name || this._selection.numSelected !== e.numSelected || this._selection.selectionBounds?.x !== e.selectionBounds?.x || this._selection.selectionBounds?.y !== e.selectionBounds?.y || this._selection.selectionBounds?.width !== e.selectionBounds?.width || this._selection.selectionBounds?.height !== e.selectionBounds?.height : !!e && 0 !== Object.keys(e).length;
  }
  didEventOccur() {
    let e = debugState.getState();
    let t = e.mirror?.selectionProperties;
    let i = !!t && 0 !== Object.keys(t).length && this.hasSelectionChanged(t);
    this._selection = t;
    return i;
  }
}
export const Fy = $$y0;
export const H0 = $$l1;
export const I7 = $$A2;
export const Pn = $$f3;
export const Ti = $$u4;
export const W = $$p5;
export const as = $$m6;
export const bF = $$h7;
export const eO = $$_8;
export const l$ = $$E9;
export const nc = $$g10;
export const q5 = $$I11;
export const t8 = $$c12;
export const vu = $$o13;
export const vw = $$d14;
export const xV = $$v15;
export const zF = $$b16;